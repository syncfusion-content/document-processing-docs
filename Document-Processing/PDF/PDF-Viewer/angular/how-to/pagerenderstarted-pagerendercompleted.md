---
layout: post
title: How to Handle Page Render Events in Angular PDF Viewer | Syncfusion
description: Use the pageRenderInitiate and pageRenderComplete events in the Angular PDF Viewer to track page rendering and coordinate custom UI updates.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Handle Page Render Events in Angular PDF Viewer

In the PDF Viewer, the `pageRenderInitiate` and `pageRenderComplete` events fire during the page rendering life cycle:

- `pageRenderInitiate`: fired when the rendering of a page begins. Use this event to initialize resources, show loading indicators, or set up rendering parameters before the page content is drawn.
- `pageRenderComplete`: fired when the rendering of a page finishes. Use this event to hide loading indicators, record render timing, or run post-render processing.

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

The provided code demonstrates how to subscribe to the [pageRenderInitiate](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageRenderInitiateEventArgs) and [pageRenderComplete](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/pageRenderCompleteEventArgs) events in the PDF Viewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/PageRenderStarted%20and%20PageRenderCompleted%20event)