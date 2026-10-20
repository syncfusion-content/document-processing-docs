---
layout: post
title: How to Unload a Document in Angular PDF Viewer | Syncfusion
description: Unload the current document in the Angular PDF Viewer to free resources and prepare the viewer for loading a different PDF document.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Unload a Document in Angular PDF Viewer

## Unload the PDF document programmatically

The PDF Viewer provides the [unload()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/index-default#unload) method to remove the currently loaded PDF from the viewer instance. Use this API to free memory or reset the viewer when navigating between documents or closing the viewer.

The following steps are used to unload the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Add the following code snippet to perform the unload operation.

```html
 <button (click)="unload()">Unload Document</button>
```

```typescript
unload() {
  // Unload the PDF document.
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.unload();
}
```

Find the Sample, [how to unload the PDF document programmatically](https://stackblitz.com/edit/angular-jjltrq?file=app.component.ts)