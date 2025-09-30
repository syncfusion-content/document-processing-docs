---
layout: post
title: Rendering Events in Angular PDF Viewer component | Syncfusion
description: Learn about pageRenderInitiate and pageRenderComplete events in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# pageRenderInitiate and pageRenderComplete event

In Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, [pageRenderInitiate](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageRenderInitiateEventArgs/) and [pageRenderComplete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageRenderCompleteEventArgs/) are events that occur during the rendering process of PDF documents.

**pageRenderInitiate**

The `pageRenderInitiate` event is triggered when the rendering of a page in the PDF document begins. This event provides an opportunity to perform any necessary initialization or setup before the rendering of the page content commences. It can be utilized to prepare resources, set up rendering parameters, or execute any other actions required before the page rendering process starts.

**pageRenderComplete**

The `pageRenderComplete` event is triggered when the rendering of a page in the PDF document is completed. This event allows cleanup tasks or finalization of rendering-related processes after the rendering of the page content finishes. It can be used to release resources, finalize rendering settings, or handle any post-rendering tasks necessary for the application.

```html
<ejs-pdfviewer #pdfViewer id="pdfViewer"
               [serviceUrl]='service'
               [documentPath]='document'
               (pageRenderInitiate)='pageRenderInitiate($event)'
               (pageRenderComplete)='pageRenderComplete($event)'
               style="height:640px;display:block">
</ejs-pdfviewer>
```

```typescript
public pageRenderInitiate(args: any): void {
  // This method is called when the page rendering starts
  console.log('Rendering of pages started');
  console.log(args)
}

public pageRenderComplete(args: any): void {
  // This method is called when the page rendering completes
 console.log('Rendering of pages completed');
 console.log(args)
}
```

The provided code demonstrates how to subscribe to the [pageRenderInitiate](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageRenderInitiateEventArgs/) and [pageRenderComplete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageRenderCompleteEventArgs/) events in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/PageRenderStarted%20and%20PageRenderCompleted%20event)