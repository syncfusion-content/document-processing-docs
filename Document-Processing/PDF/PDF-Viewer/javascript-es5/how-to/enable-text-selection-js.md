---
layout: post
title: Enable or Disable Text Selection in Javascript Pdfviewer control | Syncfusion
description: Learn how to enable text selection in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable Text Selection in Syncfusion PDF Viewer

The Syncfusion PDF Viewer provides the `enableTextSelection` property, which allows you to control whether users can select text within the displayed PDF document. This feature can be toggled programmatically during runtime.

## Configure Text Selection on Initialization

You can set the initial text selection behavior when initializing the PDF Viewer control by configuring the `enableTextSelection` property.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: "https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib",
  enableTextSelection: false, // Disable text selection initially
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
```

## Toggle Text Selection Dynamically

You can change the text selection behavior at runtime using buttons, menu options, or other UI elements:

```html
<!-- HTML buttons to control text selection -->
<button id="enableTextSelection">Enable Text Selection</button>
<button id="disableTextSelection">Disable Text Selection</button>
```

```js
// Add click event listener for the enableTextSelection button
document.getElementById('enableTextSelection').addEventListener('click', function () {
  pdfviewer.enableTextSelection = true;
});

// Add click event listener for the disableTextSelection button
document.getElementById('disableTextSelection').addEventListener('click', function () {
  pdfviewer.enableTextSelection = false;
});
```

## Use Cases and Considerations

- **Document Protection**: Disabling text selection helps prevent unauthorized copying of sensitive content.
- **Read-only Documents**: In scenarios where documents are meant for viewing only, disabling text selection can provide a cleaner user experience.
- **Interactive Applications**: Toggle text selection based on user roles or document states in complex applications.

## Default Behavior

By default, text selection is enabled in the PDF Viewer. Set the `enableTextSelection` property to `false` explicitly if you want to disable this functionality.

[View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)