---
layout: post
title: Load document after resources Loaded JS(ES5) PDF Viewer | Syncfusion
description: Learn here all about how to load document after loading assets in Syncfusion JavaScript (ES5) PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Load a PDF only after PDFium resources are ready

In Standalone mode, the JavaScript (ES5) PDF Viewer downloads its PDFium runtime assets (scripts/wasm) from the location specified in resourceUrl. Attempting to load a document before those assets are available can cause errors. Use the resourcesLoaded event to defer document loading until all required assets are ready.

## When does resourcesLoaded trigger?

The resourcesLoaded event fires once the viewer finishes loading all required PDFium assets. At this point, it is safe to call the load method to open a document (by URL or Base64).

## How to Load Document after resourcesLoaded

- Set the resourceUrl to a valid PDF Viewer assets path (CDN or your hosted path).
- Listen to resourcesLoaded and call load inside the handler.

```html
<!-- index.html (snippet) -->
<link href="https://cdn.syncfusion.com/ej2/31.2.2/material.css" rel="stylesheet">
<script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js"></script>

<div id="pdfViewer" style="height: 640px; display: block"></div>

<script>
  // Initialize the viewer in Standalone mode and point to the assets
  var viewer = new ej.pdfviewer.PdfViewer({
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    resourcesLoaded: onResourcesLoaded
  });
  viewer.appendTo('#pdfViewer');

  // Sample sources to demonstrate both URL and Base64 loading
  var documentUrl = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  var base64 = '';// supply your Base64 here when needed

  // Called when PDFium runtime assets have finished loading
  function onResourcesLoaded(args) {
    // Choose ONE of the following load options:

    // 1) Load by URL
    viewer.load(documentUrl, null);

    // 2) Load by Base64 (uncomment if you want to load Base64)
    // if (base64) {
    //   viewer.load('data:application/pdf;base64,' + base64, null);
    // }
  }
</script>
```

[View Sample in GitHub]()

## Notes and best practices

- Always set a valid resourceUrl when using the Standalone PDF Viewer. If the path is incorrect or blocked by the network, the event cannot fire.
- Load documents inside resourcesLoaded. This guarantees the PDFium runtime is ready and prevents intermittent errors on slower networks.
- The event fires for the viewer’s asset load lifecycle, not for every document load. After it fires once, you can safely call load again later (for example, in response to user actions) without waiting for the event.

## See also

- [Events in JavaScript PDF Viewer](../events/#resourcesloaded)
- [Open PDF files](../open-pdf-files)
- [Save PDF files](../save-pdf-files)
- [Getting started](../getting-started)
