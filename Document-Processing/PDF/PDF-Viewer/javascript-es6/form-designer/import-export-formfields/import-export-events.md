---
layout: post
title: Import/Export events in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to handle Import/Export events for PDF form fields in the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import/Export events

You can listen to lifecycle events around import and export operations to validate, customize, or log actions.

Commonly used events:
- validateFormFields: Triggered during download/print when enableFormFieldsValidation is true and required fields are not filled.
- documentLoad: Useful for wiring custom logic right after a document is loaded.

Note: Set enableFormFieldsValidation = true to enforce validation before print/download.

## Validate before export/print

The following shows how to capture non-filled fields and prevent export/print until the user completes them.

```ts
<div>
  <button id="exportJson">Export JSON</button>
  <button id="printPdf">Print</button>
</div>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormDesigner, FormFields, FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormDesigner, FormFields);

const viewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf'
});
viewer.appendTo('#pdfViewer');

viewer.enableFormFieldsValidation = true;
viewer.validateFormFields = (args: any) => {
  const nonfilled = args.nonFillableFields || [];
  if (nonfilled.length) {
    // Show your UI and stop further action
    alert('Please fill required fields before continuing. Missing: ' + nonfilled.map((f: any) => f.name).join(', '));
    // args.isFormFieldValid = false; // Optional: explicitly indicate invalid
  }
};

document.getElementById('exportJson')!.addEventListener('click', () => {
  viewer.exportFormFields('FormData', FormFieldDataFormat.Json);
});

document.getElementById('printPdf')!.addEventListener('click', () => {
  viewer.print.print();
});
```

## Log import/export completion

Hook your own UI or analytics around import and export actions.

```ts
<button id="importJson">Import JSON</button>
<button id="exportFdf">Export FDF</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer = new PdfViewer({ documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
viewer.appendTo('#pdfViewer');

// Example wrappers to log completion
function importJson() {
  viewer.importFormFields('File', FormFieldDataFormat.Json);
  console.log('Import requested (JSON)');
}

function exportFdf() {
  viewer.exportFormFields('FormData', FormFieldDataFormat.Fdf);
  console.log('Export requested (FDF)');
}

document.getElementById('importJson')!.addEventListener('click', importJson);

document.getElementById('exportFdf')!.addEventListener('click', exportFdf);
```

Tip: You can also use documentLoad to inject default values or layout form fields programmatically before users start filling.
