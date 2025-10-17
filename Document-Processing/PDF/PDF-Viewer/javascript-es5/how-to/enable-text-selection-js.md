---
layout: post
title: Enable or disable text selection in JavaScript PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the JavaScript PDF Viewer using the enableTextSelection property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in PDF Viewer

Use the `enableTextSelection` property to control whether users can select text in the displayed PDF. This setting can be configured at initialization and toggled at runtime.

## Configure on initialization

Set initial behavior when instantiating the PDF Viewer.

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

## Toggle dynamically

Change the behavior at runtime using buttons or other UI.

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

## Use cases and considerations

- Document protection: Disable text selection to help prevent copying sensitive content.
- Read-only documents: Provide a cleaner viewing experience by preventing selection.
- Interactive apps: Toggle selection based on user roles or document states.

## Default behavior

Text selection is enabled by default. Set `enableTextSelection` to `false` to disable it.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)
