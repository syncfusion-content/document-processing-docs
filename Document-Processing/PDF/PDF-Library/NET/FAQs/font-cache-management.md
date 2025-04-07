---
title: Font Cache Management in Syncfusion PDF Libraries
description: Font caching is used to optimize performance, but clearing it properly can help avoid memory leaks or font rendering issues. Learn how to manage the font cache in Syncfusion PDF libraries.
platform: document-processing
control: PDF
documentation: UG
---

# Font Cache Management in Syncfusion</sup>&reg;</sup> PDF Libraries

## Overview
Syncfusion</sup>&reg;</sup> PDF libraries utilize an internal font cache for performance optimization during:
* Repeated use of the same fonts
* Processing documents with multiple font references
* Complex conversions

## Cache Clearing Methods

### Automatic Management
* **Cleared** automatically when document processing completes
* **Default size:** 100MB

# Manual Font Cache Clearing

## When Manual Clearing is Necessary
Manual clearing of the font cache may be needed in situations where:
1. The cache size becomes excessively large due to continuous font loading.
2. It is essential to ensure that old or unused fonts are cleared to prevent potential memory bloat.

## Steps to Manually Clear the Font Cache

To manually clear the font cache, you can utilize specific methods provided by the Syncfusion</sup>&reg;</sup> PDF libraries based on your particular usage scenario:

### Code Example for Manual Cache Clearing

Here's how to explicitly release all the font resources:

{% highlight c# tabtitle="C#" %}

// Clear the font cache manually  
PdfDocument.ClearFontCache();

{% endhighlight %}

This method effectively clears the internal font cache used by the PDF library. Keep in mind that after manually clearing the cache, you may need to reload any fonts you intend to use in your documents if they were previously cleared.

### Best Practices for Manual Clearing

**Dispose of Font Objects**: Always dispose of any <b>PdfTrueTypeFont</b> objects or other font-related objects explicitly once you’re done with them to free up resources.

{% highlight c# tabtitle="C#" %}

// Clear the font cache manually  
ttf.Dispose();

{% endhighlight %}

**Avoid Excessive Clearing**: Frequent and unnecessary clearing of the cache is typically not recommended, as the automatic management is designed to handle this efficiently. Manually clear the cache only when you are certain that the fonts are no longer needed and if it helps avoid performance issues from a large cache size.

**Monitor Cache Size**: In applications that handle large documents or numerous fonts, consider monitoring the cache size and clear it strategically within your processing logic.
