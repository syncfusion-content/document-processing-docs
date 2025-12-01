---
layout: post
title: Export form data in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export form data from PDF

The PDF Viewer provides APIs to export the values of interactive form fields from the loaded PDF. You can export to FDF, XFDF, JSON, or as a JavaScript object for custom processing.

Supported APIs:
- exportFormFields(pathOrFileName, format)
- exportFormFieldsAsObject(format) → Promise<object>

Note: When using the server-backed viewer, set serviceUrl before exporting.

## Export as FDF

```html
<button id="exportFdf">Export FDF</button>
```
```ts
import { PdfViewer, FormFieldDataFormat, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner);

const viewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  // serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/' // Server-backed
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
});
viewer.appendTo('#PdfViewer');

document.getElementById('exportFdf')!.addEventListener('click', () => {
  // Data must be the desired path or file name for the exported document.
  viewer.exportFormFields('ExportedData', FormFieldDataFormat.Fdf);
});
```

## Export as XFDF

```ts
<button id="exportXfdf">Export XFDF</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>

import { PdfViewer, FormFieldDataFormat, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer = new PdfViewer({ documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
viewer.appendTo('#pdfViewer');

document.getElementById('exportXfdf')!.addEventListener('click', () => {
  viewer.exportFormFields('FormData', FormFieldDataFormat.Xfdf);
});
```

## Export as JSON

```ts
<button id="exportJson">Export JSON</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>

import { PdfViewer, FormFieldDataFormat, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer = new PdfViewer({ documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
viewer.appendTo('#pdfViewer');

document.getElementById('exportJson')!.addEventListener('click', () => {
  viewer.exportFormFields('FormData', FormFieldDataFormat.Json);
});
```

## Export as Object

Export the form data to a JavaScript object for custom persistence (database, API, or client storage).

```ts
<button id="exportObj">Export Object</button>
<div id="pdfViewer" style="height: 640px; width: 100%"></div>

import { PdfViewer, FormFieldDataFormat, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

const viewer = new PdfViewer({ documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
viewer.appendTo('#pdfViewer');

let exportedData: object | undefined;
document.getElementById('exportObj')!.addEventListener('click', () => {
  viewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf).then(data => {
    exportedData = data; // Save or send to server
    console.log('Exported object:', exportedData);
  });

  // Alternative formats:
  // viewer.exportFormFieldsAsObject(FormFieldDataFormat.Xfdf).then(...)
  // viewer.exportFormFieldsAsObject(FormFieldDataFormat.Json).then(...)
});
```

## Common use cases

- Persist user-entered data to your server without modifying the original PDF.
- Export as JSON for easy integration with REST APIs.
- Export as FDF/XFDF for interoperability with other PDF tools.
- Export as object to combine with your app state and store securely.
- Automate exports after validation using validateFormFields.
