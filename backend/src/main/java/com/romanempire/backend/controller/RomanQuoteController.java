package com.romanempire.backend.controller;

import com.romanempire.backend.dto.RomanQuoteDetailResponse;
import com.romanempire.backend.model.RomanQuote;
import com.romanempire.backend.service.RomanQuoteService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/roman-quotes")
public class RomanQuoteController {
    private final RomanQuoteService service;

    public RomanQuoteController(RomanQuoteService service) {
        this.service = service;
    }

    @GetMapping
    public List<RomanQuote> getAllQuotes() {
        return service.getAllQuotes();
    }

    @GetMapping("/{slug}")
    public RomanQuoteDetailResponse getQuoteBySlug(@PathVariable String slug) {
        return service.getQuoteBySlug(slug);
    }
}
