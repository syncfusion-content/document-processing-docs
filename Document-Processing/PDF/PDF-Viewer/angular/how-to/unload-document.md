---
layout: post
title: Unload document in Angular PDF Viewer component | Syncfusion
description: Learn here all about Unload document in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Unload document
documentation: ug
domainurl: ##DomainURL##
---

## Unload the PDF document programmatically

The PDF Viewer provides the [unload()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#unload) method to remove the currently loaded PDF from the viewer instance. Use this API to free memory or reset the viewer when navigating between documents or closing the viewer.

Example:

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