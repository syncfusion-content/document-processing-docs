---
layout: post
title: Use findTextAsync in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to search text asynchronously with findTextAsync in the Syncfusion ASP.NET Core PDF Viewer and retrieve match bounds.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Search for text asynchronously in ASP.NET Core PDF Viewer

Use the `findTextAsync` method to search for text strings and retrieve bounding box coordinates for all matches. Perform case-sensitive or case-insensitive searches across the entire document or on specific pages.

## Asynchronous text search with findTextAsync


{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <button onclick="findText()">Find Text</button>
    <button onclick="findTexts()">Find Multiple Texts</button>
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    function findText() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Search for a single text ('pdf') across all pages (case insensitive)
        viewer.textSearchModule.findTextAsync('pdf', false).then(function (res) {
            console.log(res);  // Log the search results for 'pdf'
        });
    }

    function findTexts() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Search for multiple texts (['pdf', 'the']) across all pages (case insensitive)
        viewer.textSearchModule.findTextAsync(['pdf', 'the'], false).then(function (res) {
            console.log(res);  // Log the search results for 'pdf' and 'the'
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

[View sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
