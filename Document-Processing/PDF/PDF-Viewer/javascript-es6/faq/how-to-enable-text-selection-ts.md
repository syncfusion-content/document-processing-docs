---
layout: post
title: Enable or Disable Text Selection in Typescript Pdfviewer control | Syncfusion
description: Learn how to enable text selection in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable Text Selection in Syncfusion PDF Viewer

The Syncfusion PDF Viewer provides the `enableTextSelection` property, which allows you to control whether users can select text within the displayed PDF document. This feature can be toggled programmatically during runtime.

## Configure Text Selection on Initialization

You can set the initial text selection behavior when initializing the PDF Viewer control by configuring the `enableTextSelection` property.

```ts
import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib",
    enableTextSelection: false, // Disable text selection initially
});
pdfviewer.appendTo('#PdfViewer');
```

## Toggle Text Selection Dynamically

You can change the text selection behavior at runtime using buttons, menu options, or other UI elements:

```html
<!-- HTML buttons to control text selection -->
<button id="enableSelection">Enable Text Selection</button>
<button id="disableSelection">Disable Text Selection</button>
```

```ts
// Create buttons to enable/disable text selection
document.getElementById('enableSelection')?.addEventListener('click', ()=> {
    pdfviewer.enableTextSelection = true;
});

document.getElementById('disableSelection')?.addEventListener('click', () => {
    pdfviewer.enableTextSelection = false;
});
```

## Use Cases and Considerations

- **Document Protection**: Disabling text selection helps prevent unauthorized copying of sensitive content.
- **Read-only Documents**: In scenarios where documents are meant for viewing only, disabling text selection can provide a cleaner user experience.
- **Interactive Applications**: Toggle text selection based on user roles or document states in complex applications.

## Default Behavior

By default, text selection is enabled in the PDF Viewer. Set the `enableTextSelection` property to `false` explicitly if you want to disable this functionality.

[View Sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)