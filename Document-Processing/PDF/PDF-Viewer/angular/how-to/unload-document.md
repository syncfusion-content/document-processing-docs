---
layout: post
title: Unload Document in Angular PDF Viewer | Syncfusion
description: Learn how to programmatically unload a document from the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Unload document
documentation: ug
domainurl: ##DomainURL##
---

# Unload the PDF document programmatically

The PDF Viewer library allows programmatic unloading of the PDF document currently displayed in the PDF Viewer using the [**unload()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#unload) method.

To unload a PDF document programmatically, follow these steps:

**Step 1:** Refer to the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a basic Angular PDF Viewer setup.

**Step 2:** Add the following code snippet to perform the unload operation:

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

For a complete example, find the sample demonstrating [how to unload the PDF document programmatically](https://stackblitz.com/edit/angular-jjltrq?file=app.component.ts).