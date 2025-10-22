---
layout: post
title: Use findTextAsync in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to search text asynchronously with findTextAsync in the Syncfusion ASP.NET MVC PDF Viewer and retrieve match bounds.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Find text with findTextAsync in the ASP.NET MVC PDF Viewer

The `findTextAsync` method searches for a string or array of strings asynchronously and returns bounding rectangles for each match. Use it to locate text positions across the document or on a specific page.

Here is an example of how to use `findTextAsync`:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}

<div>
    <!-- Render PDF Viewer -->
    <button id="findTextBtn" onclick="findText()">Find Text</button>
    <button id="findTextsBtn" onclick="findTexts()">Find Multiple Texts</button>
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<!-- Ensure necessary Syncfusion scripts and styles are included -->
<script src="https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2.min.js"></script>
<script type="text/javascript">

    function findText() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Search for a single text ('pdf') across all pages (case insensitive)
        viewer.textSearchModule.findTextAsync('pdf', false).then(function (res) {
            console.log(res);  // Log the search results
        });
    }
    function findTexts() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Search for multiple texts (['pdf', 'the']) across all pages (case insensitive)
        viewer.textSearchModule.findTextAsync(['pdf', 'the'], false).then(function (res) {
            console.log(res);  // Log the search results
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

### Description

The `findTextAsync` method performs an asynchronous text search within a PDF document. You can search for a single string or multiple strings while controlling case sensitivity. By default, the search runs across all pages. Specify the optional `pageIndex` argument to limit the search to a single page.

### Parameters

- **text (string | string[]):** String or array of strings to search for.

- **matchCase (boolean):** Whether the search is case-sensitive. `true` matches exact case; `false` ignores case.

- **pageIndex (optional, number):** Zero-based page index to search. If omitted, searches all pages.

### Example workflow

- **findTextAsync('pdf', false)**: Searches for "pdf" case-insensitively across all pages.

- **findTextAsync(['pdf', 'the'], false)**: Searches for "pdf" and "the" case-insensitively across all pages.

- **findTextAsync('pdf', false, 0)**: Searches for "pdf" case-insensitively on page 0 only.

- **findTextAsync(['pdf', 'the'], false, 1)**: Searches for "pdf" and "the" case-insensitively on page 1 only.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
