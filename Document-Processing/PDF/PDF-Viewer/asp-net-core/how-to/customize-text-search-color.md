---
layout: post
title: Customize text search color in ASP.NET Core PDF Viewer | Syncfusion
description: Learn here all about Customize text search color in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize text search color in ASP.NET Core PDF Viewer

Personalize the appearance of text search results by modifying the search and highlight colors. Use the **searchColor** and **searchHighlightColor** properties within the `textSearchColorSettings` object to align the search experience with your application's theme.

## Configure search color settings

* [**searchColor**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerTextSearchColorSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerTextSearchColorSettings_SearchColor): Defines the color for the currently active search result.
* [**searchHighlightColor**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerTextSearchColorSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerTextSearchColorSettings_SearchHighlightColor): Defines the color for all other matching search results in the document.

Both properties accept valid CSS color strings (e.g., hexadecimal codes like `#FF0000`).

## Implementation example

The following example demonstrates how to configure these colors in both Standalone and Server-Backed modes:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="search" onclick="search()">SearchText</button>
<button id="searchNext" onclick="searchNext()">SearchNext</button>
<button id="searchPervious" onclick="searchPervious()">searchPervious</button>
<button id="searchCancel" onclick="searchCancel()">CancelSearch</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib""
                   enableTextSearch="true"
                   textSearchColorSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerTextSearchColorSettings
                   { SearchColor = "#FF0000", SearchHighlightColor = "#0000FF" })">
    </ejs-pdfviewer>
</div>

<script>
    function search() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.textSearchModule.searchText("pdf", false);
    }
    function searchNext() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.textSearchModule.searchNext();
    }
    function searchPervious() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.textSearchModule.searchPrevious();
    }
    function searchCancel() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.textSearchModule.cancelTextSearch();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="search" onclick="search()">SearchText</button>
<button id="searchNext" onclick="searchNext()">SearchNext</button>
<button id="searchPervious" onclick="searchPervious()">searchPervious</button>
<button id="searchCancel" onclick="searchCancel()">CancelSearch</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   serviceUrl="/api/PdfViewer"
                   enableTextSearch="true"
                   textSearchColorSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerTextSearchColorSettings
                   { SearchColor = "#FF0000", SearchHighlightColor = "#0000FF" })">
    </ejs-pdfviewer>
</div>

<script>
    function search() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.textSearchModule.searchText("pdf", false);
    }
    function searchNext() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.textSearchModule.searchNext();
    }
    function searchPervious() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.textSearchModule.searchPrevious();
    }
    function searchCancel() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.textSearchModule.cancelTextSearch();
    }
</script>

{% endhighlight %}
{% endtabs %}
