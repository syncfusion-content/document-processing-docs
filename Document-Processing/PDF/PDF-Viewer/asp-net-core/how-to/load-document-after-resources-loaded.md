---
layout: post
title: Load document after resources Loaded Core PDF Viewer | Syncfusion
description: Learn here how to load a PDF only after assets are ready in the Syncfusion ASP.NET Core PDF Viewer (Standalone) using the resourcesLoaded event.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Defer document loading until PDFium resources are ready

In Standalone mode, the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer downloads the required PDFium runtime assets (scripts and WebAssembly) from the location specified in the [`resourceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) property. Attempting to load a document before these assets are fully initialized can lead to errors. Use the `resourcesLoaded` event to ensure the document is only loaded once the viewer's runtime is fully prepared.

## When does resourcesLoaded trigger?

The [`resourcesLoaded`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourcesLoaded) event fires after the viewer has successfully downloaded and initialized all internal PDFium dependencies. This event indicates that it is safe to invoke the `load()` method via the viewer instance.

Follow these steps to synchronize document loading with asset readiness:

1. Specify a valid `resourceUrl` (using a CDN or a locally hosted path).
2. Assign a handler to the `resourcesLoaded` event.
3. Programmatically call the `load()` method inside the handler.

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

## Best practices

*   **Path Verification:** Ensure the `resourceUrl` is accurate and accessible. If the network blocks the asset location or the path is incorrect, the `resourcesLoaded` event will not fire.
*   **One-Time Lifecycle:** The `resourcesLoaded` event typically fires once during the component's lifecycle initialization. Subsequent document loads (e.g., in response to user selection) do not need to wait for this event if it has already occurred.
*   **Error Handling:** For mission-critical viewers, monitor network failures for the `resourceUrl` to provide appropriate fallback messages to the user.

## See also

- [Events in ASP.NET Core PDF Viewer](../event#resourcesloaded)
- [Open PDF files](../open-pdf-files)
- [Save PDF files](../save-pdf-files)
- [Getting started](../getting-started)
