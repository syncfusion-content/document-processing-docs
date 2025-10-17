---
layout: post
title: Enable or disable text selection in TypeScript PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the TypeScript PDF Viewer using the enableTextSelection property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in PDF Viewer

Use the `enableTextSelection` property to control whether users can select text in the displayed PDF. This setting can be configured at initialization and toggled at runtime.

## Configure on initialization

Set initial behavior when instantiating the PDF Viewer.

```ts
import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
    enableTextSelection: false, // Disable text selection initially
});
pdfviewer.appendTo('#PdfViewer');
```

## Toggle dynamically

Change the behavior at runtime using buttons or other UI.

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

## Use cases and considerations

- Document protection: Disable text selection to help prevent copying sensitive content.
- Read-only documents: Provide a cleaner viewing experience by preventing selection.
- Interactive apps: Toggle selection based on user roles or document states.

## Default behavior

Text selection is enabled by default. Set `enableTextSelection` to `false` to disable it.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)
