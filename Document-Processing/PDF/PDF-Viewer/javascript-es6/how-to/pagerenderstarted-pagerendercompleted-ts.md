---
layout: post
title: How to Handle Page Render Events in JavaScript (ES6) PDF | Syncfusion
description: Use the pageRenderInitiate and pageRenderComplete events in the JavaScript (ES6) PDF Viewer to track page rendering and coordinate custom UI updates.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Handle Page Render Events in JavaScript (ES6) PDF Viewer

In the Syncfusion PDF Viewer, the [pageRenderInitiate] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#pagerenderinitiate) and [pageRenderComplete] (https://ej2.syncfusion.com/documentation/api/pdfviewer/#pagerendercomplete) events occur during page rendering.

**pageRenderInitiate**

Triggered when page rendering begins. Use this event to initialize or set up resources before rendering starts, or to display a progress indicator.

**pageRenderComplete**

Triggered when page rendering completes. Use this event to perform cleanup, hide progress indicators, or finalize rendering-related tasks.

The following code demonstrates how to subscribe to these events in the Syncfusion PDF Viewer component.

```ts

pdfviewer.pageRenderInitiate = (args: any) => {
    // This method is called when the page rendering starts
   console.log('Rendering of pages started');
   console.log(args);
 };

pdfviewer.pageRenderComplete = (args: any) => {
    // This method is called when the page rendering completes
    console.log('Rendering of pages completed');
    console.log(args);
};

```
