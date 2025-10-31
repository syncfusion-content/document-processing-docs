---
layout: post
title: Handle pageRenderInitiate and pageRenderComplete events in ASP.NET MVC PDF Viewer | Syncfusion
description: Discover how to use the pageRenderInitiate and pageRenderComplete events in the Syncfusion ASP.NET MVC PDF Viewer to monitor page rendering stages.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# pageRenderInitiate and pageRenderComplete event

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer raises the `pageRenderInitiate` and `pageRenderComplete` events for each page that enters the rendering pipeline. These notifications help track progress, update custom UI, and defer heavy logic until a page is ready.

**pageRenderInitiate**

The `pageRenderInitiate` event fires when a page begins rendering. Use it to prepare resources, start timers, or log analytics before drawing occurs. The event argument provides details such as the page number and source so that handlers can apply page-specific logic.

**pageRenderComplete**

The `pageRenderComplete` event fires after the viewer finishes rendering a page. Use it to finalize overlays, clean up temporary data, or trigger post-processing tasks. The event argument includes the rendered page index and status information, enabling conditional workflows.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@{
    ViewBag.Title = "Home Page";
}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").PageRenderInitiate("pageRenderInitiate").PageRenderComplete("pageRenderComplete").Render()
</div>

<script>
function pageRenderInitiate(args) {
   // This method is called when the page rendering starts
    console.log('Rendering of pages started');
    console.log(args);
};

function pageRenderComplete(args) {
   // This method is called when the page rendering completes
   console.log('Rendering of pages completed');
   console.log(args);
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

@{
    ViewBag.Title = "Home Page";
}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").PageRenderInitiate("pageRenderInitiate").PageRenderComplete("pageRenderComplete").Render()
</div>

<script>
function pageRenderInitiate(args) {
   // This method is called when the page rendering starts
    console.log('Rendering of pages started');
    console.log(args);
};

function pageRenderComplete(args) {
   // This method is called when the page rendering completes
   console.log('Rendering of pages completed');
   console.log(args);
};
</script>

{% endhighlight %}
{% endtabs %}

The provided code demonstrates how to subscribe to the `pageRenderInitiate` and `pageRenderComplete` events in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to/PageRenderStarted%20and%20PageRenderCompleted%20event/PDFViewerSample)
