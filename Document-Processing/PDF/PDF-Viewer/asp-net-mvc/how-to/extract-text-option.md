---
layout: post
title: Configure extractTextOption in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to use the extractTextOption property in the Syncfusion ASP.NET MVC PDF Viewer to control text extraction and memory usage.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Configure extractTextOption in the ASP.NET MVC PDF Viewer

The `extractTextOption` property controls how text is extracted and optimizes memory usage. It also affects the data returned in the `extractTextCompleted` event. Choose one of the following options to determine the text and layout data to retrieve.

### Available Options:

**None:** No text information is extracted or returned. This is useful when you want to optimize memory usage and don't need any text data.

**TextOnly:** Extracts only the plain text from the document. This option excludes any layout or positional information.

**BoundsOnly:** Extracts layout information, such as bounds or coordinates, without including the plain text data.

**TextAndBounds:** Extracts both the plain text and the layout (bounds) information, which is the default behavior.

The following example demonstrates how to configure the `extractTextOption` property to control the level of text extraction:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}

<div>
    <!-- Render PDF Viewer -->
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<!-- Ensure necessary Syncfusion scripts and styles are included -->
<script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js"></script>
<script type="text/javascript">
    window.onload = function () {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.extractTextOption  = 'None';  // Options: 'None', 'TextOnly', 'BoundsOnly', 'TextAndBounds'
    }
</script>

{% endhighlight %}
{% endtabs %}

### Description of each option
**extractTextOption.TextAndBounds (default):** Returns both plain text and positional data (bounds). Use this option when you need both the content of the PDF and its layout for further processing.

**extractTextOption.TextOnly:** Returns only the plain text from the PDF. No positional data is included. Text search functionality is disabled when using this option; use `findTextAsync` for searching.

**extractTextOption.BoundsOnly:** Returns only layout information (bounds) of the text, excluding the actual content. Useful when focusing on text positions rather than the text itself.

**extractTextOption.None:** Does not extract or return any text or layout information. Use this setting to optimize memory usage when text extraction is unnecessary. This setting applies to the `extractTextCompleted` event and cannot be used with the `ExtractText` method.

N> Text search: When using the `extractTextOption.TextOnly` or `extractTextOption.None` options, the `findText` method is unavailable. Use the `findTextAsync` method to perform text searches asynchronously.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
