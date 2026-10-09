---
layout: post
title: Find Text in ASP.NET MVC PDF Viewer | Syncfusion
description: Configure text search in the ASP.NET MVC PDF Viewer and run programmatic searches to find and highlight matching text inside a PDF document.
platform: document-processing
control: Text search
documentation: ug
---

# Find Text in ASP.NET MVC PDF Viewer

## Find text method

Use the [`findText`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FindText) method to locate a string or an array of strings and return the bounding rectangles for each match. Optional parameters support case-sensitive comparisons and page scoping so you can retrieve coordinates for a single page or the entire document.

### Find and get the bounds of a text

This example searches the document for the text `pdf` (case-insensitive) and returns the bounding rectangles of every match across all pages.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="findTextBounds()">Find Text Bounds</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    function findTextBounds() {
        console.log(pdfViewer.textSearch.findText('pdf', false));
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="findTextBounds()">Find Text Bounds</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    function findTextBounds() {
        console.log(pdfViewer.textSearch.findText('pdf', false));
    }
</script>

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of a text on a specific page

This example searches the document for the text `pdf` and returns the bounding rectangles of every match on page index `7` only. The search is case-insensitive.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="findTextBounds()">Find Text Bounds</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    function findTextBounds() {
        console.log(pdfViewer.textSearch.findText('pdf', false, 7));
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="findTextBounds()">Find Text Bounds</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    function findTextBounds() {
        console.log(pdfViewer.textSearch.findText('pdf', false, 7));
    }
</script>

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text

This example searches the document for the array of strings `['adobe', 'pdf']` (case-insensitive) and returns the bounding rectangles for each occurrence across all pages where the strings are found.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="findTextBounds()">Find Text Bounds</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    function findTextBounds() {
        console.log(pdfViewer.textSearch.findText(['adobe', 'pdf'], false));
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="findTextBounds()">Find Text Bounds</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    function findTextBounds() {
        console.log(pdfViewer.textSearch.findText(['adobe', 'pdf'], false));
    }
</script>

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text on the desired page

This example searches the document for the array of strings `['adobe', 'pdf']` and returns the bounding rectangles for each occurrence on page index `7` only. The search is case-insensitive.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button type="button" onclick="findTextBounds()">Find Text Bounds</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    function findTextBounds() {
        console.log(pdfViewer.textSearch.findText(['adobe', 'pdf'], false, 7));
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button type="button" onclick="findTextBounds()">Find Text Bounds</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    function findTextBounds() {
        console.log(pdfViewer.textSearch.findText(['adobe', 'pdf'], false, 7));
    }
</script>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

## Find text with findTextAsync

The [`findTextAsync`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FindTextAsync) method is designed for performing an asynchronous text search within a PDF document. You can use it to search for a single string or multiple strings, with the ability to control case sensitivity. By default, the search is applied to all pages of the document. However, you can adjust this behavior by specifying the page number (`pageIndex`), which allows you to search only a specific page if needed.

Use `findTextAsync` instead of the synchronous `findText` when you want to avoid blocking the UI thread, when the document is large, or when you need to `await` the result before chaining further logic.

### Find text with findTextAsync in ASP.NET MVC PDF Viewer

The following example searches for the term `pdf` (case-insensitive) across all pages and logs the resolved bounds:

```ts
// findTextAsync(text: string | string[], matchCase?: boolean, pageIndex?: number)
var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
pdfViewer.textSearch.findTextAsync('pdf', false).then(function (result) {
    console.log(result);
});
```

You can also pass an array of strings to search for multiple terms at once:

```ts
pdfViewer.textSearch.findTextAsync(['pdf', 'the'], false).then(function (result) {
    console.log(result);
});
```

### Parameters

- **text** (string | string[]) — The text or array of texts to search for in the document.
- **matchCase** (boolean) — Whether the search is case-sensitive. `true` matches exact case; `false` ignores case.
- **pageIndex** (optional, number) — Zero-based page index to search. If omitted, searches all pages.

> **Note:** `pageIndex` is zero-based; specify `0` for the first page. Omit this parameter to search the entire document.

### Example workflow

- **findTextAsync('pdf', false):** Searches for the term `pdf` case-insensitively across all pages.
- **findTextAsync(['pdf', 'the'], false):** Searches for the terms `pdf` and `the` case-insensitively across all pages.
- **findTextAsync('pdf', false, 0):** Searches for the term `pdf` case-insensitively on the first page (page 0).
- **findTextAsync(['pdf', 'the'], false, 1):** Searches for the terms `pdf` and `the` case-insensitively on the second page (page 1).

For a complete walkthrough with additional samples, see [How to Use FindTextAsync in ASP.NET MVC PDF Viewer](../how-to/find-text-async).

## See also

- [Text Search Features](./text-search-features)
- [Text Search Events](./text-search-events)
- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)
