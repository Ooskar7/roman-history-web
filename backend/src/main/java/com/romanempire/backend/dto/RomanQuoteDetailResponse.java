package com.romanempire.backend.dto;

import com.romanempire.backend.model.RomanQuote;

public record RomanQuoteDetailResponse(RomanQuote quote, String markdownContent,
                                       RomanQuote previous, RomanQuote next) {}
