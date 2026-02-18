---
layout: post
title: Handle pageRenderInitiate and pageRenderComplete | Syncfusion
description: Learn how to use the pageRenderInitiate and pageRenderComplete events in the Syncfusion TypeScript PDF Viewer during page rendering.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Handle pageRenderInitiate and pageRenderComplete events

In the Syncfusion PDF Viewer, the [pageRenderInitiate](https://ej2.syncfusion.com/documentation/api/pdfviewer/#pagerenderinitiate) and [pageRenderComplete](https://ej2.syncfusion.com/documentation/api/pdfviewer/#pagerendercomplete) events occur during page rendering.

**pageRenderInitiate**

Triggered when page rendering begins. Use this event to initialize or set up resources before rendering starts, or to display a progress indicator.

**pageRenderComplete**

Triggered when page rendering completes. Use this event to perform cleanup, hide progress indicators, or finalize rendering-related tasks.


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

The following code demonstrates how to subscribe to these events in the Syncfusion PDF Viewer component.
