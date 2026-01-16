---
layout: post
title: Customize text search color in ASP.NET Core PDF Viewer | Syncfusion
description: Learn here all about Customize text search color in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize text search color
documentation: ug
---

# Customize text search color in ASP.NET Core PDF Viewer

To change the text search color in the Syncfusion PDF viewer, you can use the **searchColor** property of the searchModule object. This property accepts a string value that represents the color in hexadecimal format.

```ts

viewer.textSearchColorSettings.searchColor = "#FF0000";

```

This will set the text search color to red. You can use any valid hexadecimal color code to set the text search color to the desired color.

You can also use the **searchHighlightColor** property of the searchModule object to change the highlight color of the search results. This property also accepts a string value in hexadecimal format.

```ts

viewer.textSearchColorSettings.searchHighlightColor = "#0000FF";

```

This will set the highlight color of the search results to blue.

* [**searchColor**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerTextSearchColorSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerTextSearchColorSettings_SearchColor)
* [**searchHighlightColor**](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerTextSearchColorSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerTextSearchColorSettings_SearchHighlightColor)

Here is an example of how you can use the searchHighlightColor property and searchColor property:

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
