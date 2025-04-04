---
title: Font Cache Management in Syncfusion PDF Libraries
description: Font caching is used to optimize performance, but clearing it properly can help avoid memory leaks or font rendering issues. Learn how to manage the font cache in Syncfusion PDF libraries.
platform: document-processing
control: PDF
documentation: UG
---

# Font Cache Management in Syncfusion PDF Libraries

## Overview
Syncfusion PDF libraries utilize an internal font cache for performance optimization during:
* Repeated use of the same fonts
* Processing documents with multiple font references
* Complex conversions

## Cache Clearing Methods

### Automatic Management
* **Cleared** automatically when document processing completes
* **Default size:** 100MB (adjustable via `PdfFontCache.MaxSize`)

### Manual Clearing 
