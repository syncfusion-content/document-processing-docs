---
layout: post
title: Export form data in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export form data from PDF

The PDF Viewer component supports exporting and importing form field data using the importFormFields, exportFormFields, and exportFormFieldsAsObject methods in the following formats:

- [FDF](#export-as-fdf)
- [XFDF](#export-as-xfdf)
- [JSON](#export-as-json)

## Export as FDF

Using the `exportFormFields` method, the form field data can be exported in the specified data format. This method accepts two parameters:

* The first one must be the destination path for the exported data. If the path is not specified, it will ask for the location while exporting.
* The second parameter should be the format type of the form data.

The following example exports and imports form field data as FDF.

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
viewer.appendTo('#pdfViewer');

document.getElementById('exportFdf')!.addEventListener('click', () => {
  // Data must be the desired path or file name for the exported document.
  viewer.exportFormFields('ExportedData', FormFieldDataFormat.Fdf);
});
```

## Export as XFDF

The following example exports form field data as XFDF.

```html
<button id="exportXfdf">Export XFDF</button>
```

```ts
import { PdfViewer, FormFieldDataFormat, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner);

const viewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  // serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/' // Server-backed
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
});
viewer.appendTo('#pdfViewer');

document.getElementById('exportXfdf')!.addEventListener('click', () => {
  // Data must be the desired path or file name for the exported document.
  viewer.exportFormFields('FormData', FormFieldDataFormat.Xfdf);
});
```

## Export as JSON

The following example exports form field data as JSON.

```html
<button id="exportJson">Export JSON</button>
```

```ts
import { PdfViewer, FormFieldDataFormat, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner);

const viewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  // serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/' // Server-backed
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
});
viewer.appendTo('#pdfViewer');

document.getElementById('exportJson')!.addEventListener('click', () => {
  // Data must be the desired path or file name for the exported document.
  viewer.exportFormFields('FormData', FormFieldDataFormat.Json);
});
```

## Export as Object

Export the form data to a JavaScript object for custom persistence (database, API, or client storage). 
The following example exports and imports form field data as Object.

```html
<button id="exportObj">Export Object</button>
```

```ts
import { PdfViewer, FormFieldDataFormat, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner);

const viewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  // serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/' // Server-backed
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
});
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
- Automate exports after [validation](../form-validation) using validateFormFields.

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Import form fields](./import-formfields)
- [Import Export Events](./import-export-events)
- [Create form fields](../Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](../Create-edit-Style-del-formFields//edit-formfields)
- [Remove form fields](../Create-edit-Style-del-formFields//remove-formfields)
- [Group form fields](../group-formfields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../formfields-api)