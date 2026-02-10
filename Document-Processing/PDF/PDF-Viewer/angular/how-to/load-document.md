---
layout: post
title: Load document in Angular PDF Viewer component | Syncfusion
description: Learn here all about Load document in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Load document
documentation: ug
domainurl: ##DomainURL##
---

# Load PDF documents dynamically

The PDF Viewer supports loading or switching PDF documents at runtime after the initial viewer initialization. Use the [load](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#load) method to open a document from a URL or a Base64 string.

The following steps show common approaches for loading documents dynamically.

**Step 1:** Follow the getting started guide to create a basic Angular PDF Viewer sample: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started

**Step 2:** Use the following code snippet to load the document from a Base64 string.

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

**Step 3:** Use the following code snippet to load a PDF document from a URL (document name).

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

Find the sample: how to load a PDF document dynamically on StackBlitz

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20at%20runtime%20from%20base64%20string%20or%20filename)
