---
layout: post
title: Load N number of pages on initialLoad in ASP.NET MVC | Syncfusion
description: Learn how to configure the Syncfusion ASP.NET MVC PDF Viewer to load a defined number of pages during the initial render by using the initialRenderPages property.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Load N number of pages on initial loading in ASP.NET MVC

The initial rendering in a PDF Viewer allows users to control how many pages appear when opening a PDF document. Loading only a subset of pages can improve responsiveness because the viewer fetches additional pages on demand as the user scrolls, reducing initial download time for large files.

To utilize this capability in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, use the [initialRenderPages](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_InitialRenderPages) property. Set this property to the number of pages that should be visible during the first render. Choose the value carefully for large documents because rendering too many pages at once increases memory usage and can degrade performance.

Using the `initialRenderPages` property prudently works well when a smaller range of pages, such as 10–20, provides the essential overview users need before scrolling to additional content.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```cs
@{
    ViewBag.Title = "Home Page";
    double InitialRenderPages = 10;
}

<div>
    <div style="height:100%; width: 100%;">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").InitialRenderPages(InitialRenderPages).Render()
    </div>
</div>
```

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

```cs
@{
    ViewBag.Title = "Home Page";
    double InitialRenderPages = 10;
}

<div>
    <div style="height:100%; width: 100%;">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").InitialRenderPages(InitialRenderPages).Render()
    </div>
</div>

```
{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to/Load%20N%20no%20of%20pages)
