---
layout: post
title: Configure extractTextOption in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to use the extractTextOption property in the Syncfusion ASP.NET Core PDF Viewer to control text extraction and memory usage.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Configure extractTextOption in ASP.NET Core PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer provides the [`extractTextOption`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExtractTextOption) property to control how the component extracts text data. Adjusting this property allows you to optimize memory consumption and determine the specific metadata returned in the `extractTextCompleted` event.

## Available options

The following values can be assigned to `extractTextOption`:

*   **None:** Disables text extraction entirely. Use this to minimize memory footprint when text interactions or extraction are not required.
*   **TextOnly:** Extracts plain text strings only. This option excludes all layout, positional, and coordinate metadata.
*   **BoundsOnly:** Extracts positional information (bounds) for text elements without retrieving the actual text content.
*   **TextAndBounds (default):** Extracts both string content and corresponding layout metadata.

The following example demonstrates how to set `extractTextOption` to `None` in a standalone viewer configuration:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" extractTextOption="None">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">

</script>

{% endhighlight %}
{% endtabs %}

The `extractTextOption` property controls how text is extracted and optimizes memory usage. It also affects the data returned in the `extractTextCompleted` event. Choose one of the following options to determine the text and layout data to retrieve.

### Available Options:

**None:** No text information is extracted or returned. This is useful when you want to optimize memory usage and don't need any text data.

**TextOnly:** Extracts only the plain text from the document. This option excludes any layout or positional information.

**BoundsOnly:** Extracts layout information, such as bounds or coordinates, without including the plain text data.

**TextAndBounds:** Extracts both the plain text and the layout (bounds) information, which is the default behavior.

N> **Text Search Compatibility:** When `extractTextOption` is set to `TextOnly` or `None`, the standard `findText` method is unavailable. Use the `findTextAsync` method to perform asynchronous text searches in these modes.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
