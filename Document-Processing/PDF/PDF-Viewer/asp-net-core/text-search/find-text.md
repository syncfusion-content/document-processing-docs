---
layout: post
title: Find Text in ASP.NET Core PDF Viewer | Syncfusion
description: Configure text search in the ASP.NET Core PDF Viewer and run programmatic searches to find and highlight matching text inside a PDF document.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Find Text in ASP.NET Core PDF Viewer

## Find text method

Use the `findText` method to locate a string or an array of strings and return the bounding rectangles for each match. Optional parameters support case-sensitive comparisons and page scoping so you can retrieve coordinates for a single page or the entire document.

### Find and get the bounds of a text

This example searches the document for the text `pdf` (case-insensitive) and returns the bounding rectangles of every match across all pages. The following code snippet shows how to get the bounds of the specified text:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="findButton">Find Text</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    document.getElementById('findButton').addEventListener('click', function() {
        var pdfViewer = document.getElementById('pdfViewer').ej2_instances[0];
        var bounds = pdfViewer.textSearch.findText('pdf', false);
        console.log(bounds);
    });
</script>

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of a text on a specific page

This example searches the document for the text `pdf` and returns the bounding rectangles of every match on page index `7` only. The search is case-insensitive. The following code snippet shows how to retrieve bounds for the specified text on a specific page:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="findButton">Find Text</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    document.getElementById('findButton').addEventListener('click', function() {
        var pdfViewer = document.getElementById('pdfViewer').ej2_instances[0];
        var bounds = pdfViewer.textSearch.findText('pdf', false, 7);
        console.log(bounds);
    });
</script>

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of a list of text

This example searches the document for the array of strings `['adobe', 'pdf']` (case-insensitive) and returns the bounding rectangles for each occurrence across all pages where the strings are found.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="findButton">Find Text</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    document.getElementById('findButton').addEventListener('click', function() {
        var pdfViewer = document.getElementById('pdfViewer').ej2_instances[0];
        var bounds = pdfViewer.textSearch.findText(['adobe', 'pdf'], false);
        console.log(bounds);
    });
</script>

{% endhighlight %}
{% endtabs %}

### Find and get the bounds of a list of text on a specific page

This example searches the document for the array of strings `['adobe', 'pdf']` and returns the bounding rectangles for each occurrence on page index `7` only. The search is case-insensitive.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="findButton">Find Text</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    document.getElementById('findButton').addEventListener('click', function() {
        var pdfViewer = document.getElementById('pdfViewer').ej2_instances[0];
        var bounds = pdfViewer.textSearch.findText(['adobe', 'pdf'], false, 7);
        console.log(bounds);
    });
</script>

{% endhighlight %}
{% endtabs %}

## Find text with findTextAsync

The `findTextAsync` method is designed for performing an asynchronous text search within a PDF document. You can use it to search for a single string or multiple strings, with the ability to control case sensitivity. By default, the search is applied to all pages of the document. However, you can adjust this behavior by specifying the page number, which allows you to search only a specific page if needed. Use `findTextAsync` instead of the synchronous `findText` when you want to avoid blocking the UI thread, when the document is large, or when you need to `await` the result before chaining further logic.

### Find text with findTextAsync in ASP.NET Core PDF Viewer

The `findTextAsync` method searches for a string or array of strings asynchronously and returns bounding rectangles for each match. Use it to locate text positions across the document or on a specific page.

Here is an example of how to use `findTextAsync`:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="findAsyncButton">Find Text Async</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    document.getElementById('findAsyncButton').addEventListener('click', async function() {
        var pdfViewer = document.getElementById('pdfViewer').ej2_instances[0];
        var bounds = await pdfViewer.textSearch.findTextAsync('pdf', false);
        console.log(bounds);
    });
</script>

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)
