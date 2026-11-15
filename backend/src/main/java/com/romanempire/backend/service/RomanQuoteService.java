package com.romanempire.backend.service;

import com.romanempire.backend.dto.RomanQuoteDetailResponse;
import com.romanempire.backend.exception.ResourceNotFoundException;
import com.romanempire.backend.model.RomanQuote;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Properties;
import java.util.regex.Pattern;

@Service
public class RomanQuoteService {
    private record Entry(int order, RomanQuote quote, String markdown) {}
    private final List<Entry> entries;

    public RomanQuoteService(MarkdownService markdownService) throws IOException {
        var loaded = new ArrayList<Entry>();
        var slugs = new HashSet<String>();
        var resources = new PathMatchingResourcePatternResolver()
                .getResources("classpath*:content/proverbs&quotes/*.md");
        for (var resource : resources) {
            String filename = resource.getFilename();
            String slug = filename.substring(0, filename.length() - 3);
            if (!slug.matches("[a-z]+(?:-[a-z]+)*") || !slugs.add(slug)) {
                throw new IllegalStateException("Invalid or duplicate quote slug: " + slug);
            }
            String text = markdownService.readMarkdownFile("content/proverbs&quotes/" + filename)
                    .replace("\r\n", "\n");
            int end = text.indexOf("-->");
            if (!text.startsWith("<!--\n") || end < 0) {
                throw new IllegalStateException("Missing quote metadata: " + filename);
            }
            var metadata = new Properties();
            metadata.load(new StringReader(text.substring(4, end)));
            int order = Integer.parseInt(required(metadata.getProperty("order"), "order", filename));
            String kind = required(metadata.getProperty("kind"), "kind", filename);
            String article = text.substring(end + 3).strip();
            var title = Pattern.compile("\\A# ([^\\n]+)\\n").matcher(article);
            if (!title.find()) throw new IllegalStateException("Missing quote title: " + filename);
            String latin = title.group(1).strip();
            String body = article.substring(title.end()).strip();
            var quote = new RomanQuote(slug, latin, section(body, "English translation"),
                    section(body, "Author and attribution"), kind, section(body, "A note on the wording"));
            for (String heading : List.of("Meaning", "Cultural context", "Significance and legacy", "Sources and further reading")) {
                section(body, heading);
            }
            loaded.add(new Entry(order, quote, body));
        }
        if (loaded.isEmpty()) throw new IllegalStateException("No Roman quote articles found.");
        loaded.sort(Comparator.comparingInt(Entry::order).thenComparing(e -> e.quote().slug()));
        entries = List.copyOf(loaded);
    }

    private static String required(String value, String field, String filename) {
        if (value == null || value.isBlank()) throw new IllegalStateException("Missing " + field + ": " + filename);
        return value.strip();
    }

    private static String section(String body, String heading) {
        var matcher = Pattern.compile("(?ms)^## " + Pattern.quote(heading) + "\\n(.*?)(?=^## |\\z)").matcher(body);
        if (!matcher.find()) throw new IllegalStateException("Missing quote section: " + heading);
        return required(matcher.group(1), heading, "quote article");
    }

    public List<RomanQuote> getAllQuotes() {
        return entries.stream().map(Entry::quote).toList();
    }

    public RomanQuoteDetailResponse getQuoteBySlug(String slug) {
        for (int i = 0; i < entries.size(); i++) {
            Entry entry = entries.get(i);
            if (entry.quote().slug().equals(slug)) {
                return new RomanQuoteDetailResponse(entry.quote(), entry.markdown(),
                        i > 0 ? entries.get(i - 1).quote() : null,
                        i + 1 < entries.size() ? entries.get(i + 1).quote() : null);
            }
        }
        throw new ResourceNotFoundException("Roman expression not found: " + slug);
    }
}
