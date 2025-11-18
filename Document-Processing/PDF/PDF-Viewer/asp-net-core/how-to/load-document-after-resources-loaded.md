---
layout: post
title: Load document after resources Loaded ASP.NET Core PDF Viewer | Syncfusion
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

@page
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer
        id="pdfViewer"
        style="height:600px; display:block"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        resourcesLoaded="onResourcesLoaded">
    </ejs-pdfviewer>
</div>

<script>
  // Choose one of the following load sources:
  var documentUrl = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  var base64 = ''; // put Base64 if you want to load from base64

  // Called automatically when the PDF Viewer’s resources (worker/lib) are ready
  function onResourcesLoaded(args) {
    var viewer = document.getElementById('pdfViewer').ej2_instances[0];

    // 1) Load by URL (most common)
    viewer.load(documentUrl, '');

    // 2) Load by Base64 (uncomment if needed)
    // if (base64) {
    //   viewer.load(base64, '');
    // }
  }
</script>

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)

## Notes and best practices

- Always set a valid resourceUrl when using the Standalone PDF Viewer. If the path is incorrect or blocked by the network, the event cannot fire.
- Load documents inside resourcesLoaded. This guarantees the PDFium runtime is ready and prevents intermittent errors on slower networks.
- The event fires for the viewer’s asset load lifecycle, not for every document load. After it fires once, you can safely call load again later (for example, in response to user actions) without waiting for the event.

## See also

- [Events in ASP.NET Core PDF Viewer](../event/#resourcesloaded)
- [Open PDF files](../open-pdf-files)
- [Save PDF files](../save-pdf-files)
- [Getting started](../getting-started)
