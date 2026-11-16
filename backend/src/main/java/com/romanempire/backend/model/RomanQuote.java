package com.romanempire.backend.model;

public record RomanQuote(String slug, String latin, String translation, String author,
                         String kind, String note) {}
