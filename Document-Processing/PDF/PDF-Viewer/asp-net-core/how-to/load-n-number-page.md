---
layout: post
title: Load a specific number of pages on initial load in ASP.NET Core PDF Viewer
description: Learn how to configure the Syncfusion ASP.NET Core PDF Viewer to load a defined number of pages during the initial render by using the initialRenderPages property.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Load N number of pages on initial loading

The initial rendering in a PDF Viewer allows users to control how many pages appear when opening a PDF document. Loading only a subset of pages can improve responsiveness because the viewer fetches additional pages on demand as the user scrolls, reducing initial download time for large files.

To utilize this capability in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, use the [initialRenderPages](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html?_ga=2.144520115.723518961.1687236178-1796867613.1686804317#:~:text=value%20is%20null-,InitialRenderPages,-Initially%20renders%20the) property. Set this property to the number of pages that should be visible during the first render. Choose the value carefully for large documents because rendering too many pages at once increases memory usage and can degrade performance.

Using the `initialRenderPages` property prudently works well when a smaller range of pages, such as 10–20, provides the essential overview users need before scrolling to additional content.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@{
    ViewData["Title"] = "Home page";
    double InitialRenderPages = 5;
}

<div class="text-center">
    <ejs-pdfviewer
        id="pdfviewer"
        style="height:600px"
        initialRenderPages="@InitialRenderPages"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

@{
    ViewData["Title"] = "Home page";
    double InitialRenderPages = 5;
}

<div class="text-center">
    <ejs-pdfviewer
        id="pdfviewer"
        style="height:600px"
        serviceUrl="/Index"
        initialRenderPages="@InitialRenderPages"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Load%20N%20no%20of%20pages)
