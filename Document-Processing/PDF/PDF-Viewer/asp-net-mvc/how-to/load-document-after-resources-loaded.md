---
layout: post
title: Load document after resources Loaded MVC PDF Viewer | Syncfusion
description: Learn here how to load a PDF only after assets are ready in the Syncfusion ASP.NET Core PDF Viewer (Standalone) using the resourcesLoaded event.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Load a PDF only after PDFium resources are ready

In Standalone mode, the ASP.NET Core PDF Viewer downloads its PDFium runtime assets (scripts/wasm) from the location specified in the resourceUrl property. Attempting to load a document before those assets are available can cause errors. Use the resourcesLoaded event to defer document loading until all required assets are ready.

## When does resourcesLoaded trigger?

The resourcesLoaded event fires once the viewer finishes loading all required PDFium assets. At this point, it is safe to call the load method to open a document (by URL or Base64).

## How to Load Document after resourcesLoaded

- Set the resourceUrl to a valid PDF Viewer assets path (CDN or your hosted path).
- Listen to resourcesLoaded and call load inside the handler.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfViewer")
        .ResourceUrl("https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib")
        .ResourcesLoaded("onResourcesLoaded")
        .Render()
</div>

<script>
  var documentUrl = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  var base64 = 'data:application/pdf;base64,JVBERi0xLjMNCiXi48...'; //Update Base64 here

  function onResourcesLoaded(args) {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];

    // Load by URL
    viewer.load(documentUrl, '');

    // Or Base64
    // if (base64) {
    //   viewer.load('data:application/pdf;base64,' + base64, '');
    // }
  }
</script>
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)

## Notes and best practices

- Always set a valid resourceUrl when using the Standalone PDF Viewer. If the path is incorrect or blocked by the network, the event cannot fire.
- Load documents inside resourcesLoaded. This guarantees the PDFium runtime is ready and prevents intermittent errors on slower networks.
- The event fires for the viewer’s asset load life cycle, not for every document load. After it fires once, you can safely call load again later (for example, in response to user actions) without waiting for the event.

## See also

- [Events in ASP.NET MVC PDF Viewer](../event#resourcesloaded)
- [Open PDF files](../open-pdf-files)
- [Save PDF files](../save-pdf-files)
- [Getting started](../getting-started)
