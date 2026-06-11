---
layout: post
title: Get base string of the loaded document in Angular PDF Viewer component | Syncfusion
description: Learn here all about Get base string of the loaded document in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Get base string of the loaded document
documentation: ug
domainurl: ##DomainURL##
---

# Get the Base64 string of the loaded PDF document

The PDF Viewer exposes `saveAsBlob()` to retrieve the currently loaded PDF as a Blob. Convert that Blob to a Base64 data URL (for example, to save in a database or transfer to a backend) and reload the document later using `load()` with the Base64 data.

The following steps are used to get the base 64 string of the loaded PDF document in the PDF viewer control.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create simple PDF Viewer sample in Angular.

**Step 2:** Add the following code snippet to get the base 64 string with button click event.

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

**Step 3:** Use the following code snippet inside the **saveAsBlob()** method to load the document from the base 64 string.

```typescript
// load the document from base 64 string.
viewer.load(base64data, null);
```

Find the Sample, [how to get the Base 64 string of the loaded PDF document](https://stackblitz.com/edit/angular-wmpo4g-ts8b1g?file=app.component.ts)

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20with%20WebService)