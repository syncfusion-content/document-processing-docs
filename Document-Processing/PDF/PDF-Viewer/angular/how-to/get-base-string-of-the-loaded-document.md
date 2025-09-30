---
layout: post
title: Get Base64 String of Loaded Document in Angular PDF Viewer component | Syncfusion
description: Learn how to get the Base64 string of the loaded document in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Get base string of the loaded document
documentation: ug
domainurl: ##DomainURL##
---

# Get the Base64 string of the loaded PDF document

The PDF Viewer library allows retrieval of the Base64 string of the loaded PDF document using the `saveAsBlob()` method. The entire PDF document is obtained as a blob, similar to a memory stream, which can then be saved or converted into a stream for database storage. The PDF document can also be loaded from a Base64 string using the `load()` method.

Follow these steps to get the Base64 string of the loaded PDF document in the PDF Viewer control:

**Step 1:** Create a simple PDF Viewer sample in Angular by following the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started).

**Step 2:** Add the following code snippet to get the Base64 string with a button click event:

```html

<button (click)="base64ofloadedDocument()">base64Document</button>

```

```typescript

base64ofloadedDocument() {
  var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
  viewer.saveAsBlob().then(function (value) {
    var data = value;
    var reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => {
      var base64data = reader.result;
      // get base 64 string.
      console.log(base64data);
    };
  });

```

**Step 3:** Use the following code snippet inside the `saveAsBlob()` method to load the document from the Base64 string:

```typescript
// load the document from base 64 string.
viewer.load(base64data, null);
```

Find the sample [how to get the Base64 string of the loaded PDF document](https://stackblitz.com/edit/angular-wmpo4g-ts8b1g?file=app.component.ts)

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20with%20WebService)