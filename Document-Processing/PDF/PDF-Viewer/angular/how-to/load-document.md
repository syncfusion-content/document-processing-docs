---
layout: post
title: Load Document in Angular PDF Viewer component | Syncfusion
description: Learn how to dynamically load PDF documents in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Load document
documentation: ug
domainurl: ##DomainURL##
---

# Load PDF documents dynamically

The PDF Viewer library allows switching or loading PDF documents dynamically after the initial load operation. This is achieved by loading the PDF document as a base64 string or file name in the PDF Viewer control using the [**Load()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#load) method dynamically.

To load a PDF document dynamically, follow these steps:

**Step 1:** Refer to the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a basic Angular PDF Viewer setup.

**Step 2:** Use the following code snippet to load a document from a Base64 string.

```html
<button (click)="load_1()">LoadDocumentFromBase64</button>
```

```typescript
load_1() {
  var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
  viewer.load(
    "data:application/pdf;base64,.....",
    null
  );
}
```

**Step 3:** Use the following code snippet to load a PDF document using its filename.

```html
<button (click)="load_2()">LoadDocumentFromBase64</button>
```

```typescript
load_2() {
  // Load PDF document using file name
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  viewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
}
```

For a complete example, find the sample demonstrating [how to load the PDF document dynamically](https://stackblitz.com/edit/angular-btme9m-7nzzyd?devtoolsheight=33&file=app.component.ts).

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20at%20runtime%20from%20base64%20string%20or%20filename)
