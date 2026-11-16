package com.romanempire.backend.service;

import com.romanempire.backend.controller.RomanQuoteController;
import com.romanempire.backend.exception.GlobalExceptionHandler;
import com.romanempire.backend.exception.ResourceNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class RomanQuoteServiceTests {
    @Test
    void loadsAllArticlesAndKeepsNavigationInOrder() throws Exception {
        var service = new RomanQuoteService(new MarkdownService());
        var quotes = service.getAllQuotes();
        assertEquals(19, quotes.size());
        assertEquals(19, quotes.stream().map(q -> q.slug()).distinct().count());
        assertEquals("audentis-fortuna-iuvat", quotes.getFirst().slug());
        assertEquals("ubi-bene-ibi-patria", quotes.getLast().slug());
        for (int i = 0; i < quotes.size(); i++) {
            var detail = service.getQuoteBySlug(quotes.get(i).slug());
            assertEquals(quotes.get(i), detail.quote());
            assertTrue(detail.markdownContent().contains("## Cultural context"));
            assertTrue(detail.markdownContent().contains("## Sources and further reading"));
            assertFalse(detail.markdownContent().contains("<!--"));
            assertEquals(i == 0 ? null : quotes.get(i - 1), detail.previous());
            assertEquals(i + 1 == quotes.size() ? null : quotes.get(i + 1), detail.next());
        }
        assertThrows(ResourceNotFoundException.class, () -> service.getQuoteBySlug("missing"));
        assertThrows(ResourceNotFoundException.class, () -> service.getQuoteBySlug("../figures/cicero"));
    }

    @Test
    void servesListDetailAndNotFoundResponses() throws Exception {
        var mvc = MockMvcBuilders.standaloneSetup(new RomanQuoteController(new RomanQuoteService(new MarkdownService())))
                .setControllerAdvice(new GlobalExceptionHandler()).build();
        mvc.perform(get("/api/roman-quotes"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(19))
                .andExpect(jsonPath("$[0].latin").value("Audentis Fortuna Iuvat"));
        mvc.perform(get("/api/roman-quotes/alea-iacta-est"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.quote.translation").value("The die is cast."))
                .andExpect(jsonPath("$.markdownContent").isString())
                .andExpect(jsonPath("$.previous.slug").value("veni-vidi-vici"));
        mvc.perform(get("/api/roman-quotes/missing"))
                .andExpect(status().isNotFound());
    }
}
