---
layout: post
title: Load N number of pages on initial load in PDF Viewer | Syncfusion
description: Learn how to configure the ASP.NET Core PDF Viewer to load a defined number of pages during the initial render by using the initialRenderPages property.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Load specific number of pages on initial rendering in ASP.NET Core

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer optimizes initialization performance by rendering only a subset of pages when a document first opens. This approach improves responsiveness for large documents by deferring the rendering of remaining pages until the user scrolls them into view.

## Enable initial page rendering

To implement this optimization, use the [`initialRenderPages`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_InitialRenderPages) property. Assign an integer value representing the number of pages that should be rendered immediately upon document load.

N> A typical optimization range is 5 to 20 pages. Rendering too many pages initially can increase memory consumption and delay the initial display of the viewer.

### Examples

The following examples demonstrate how to set the `initialRenderPages` property in both standalone and server-backed configurations.

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
