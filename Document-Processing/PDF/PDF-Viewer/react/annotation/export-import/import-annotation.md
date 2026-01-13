---
layout: post
title: Import annotations in React PDF Viewer | Syncfusion
description: Learn how to import annotations in Syncfusion React PDF Viewer using UI options and programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import annotations in React PDF Viewer

You can import annotations into the PDF Viewer in two ways:

- Using the built-in UI in the Comments panel (import JSON or XFDF files)
- Programmatically by passing an annotation object exported from the viewer

## Import using the UI (Comments panel)

The Comments panel provides import options in its overflow menu:

- Import annotations from JSON file
- Import annotations from XFDF file

Steps:
1. Open the Comments panel in the PDF Viewer.
2. Click the overflow menu (three dots) at the top of the panel.
3. Choose Import annotations from JSON file or Import annotations from XFDF file and pick the file.

All annotations in the selected file will be applied to the current document.

![Export Annotation](../annotation-images/import-annot.png)

## Import programmatically (from object)

Import annotations from an object previously exported using exportAnnotationsAsObject(). Only objects returned by the viewer can be re-imported using [importAnnotation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importannotation) method.

The following end-to-end example initializes the viewer and wires a button to import annotations from a pasted/exported object.

```html
<button id="ExportAsObject">Export as Object</button>
<button id="ImportFromObject">Import from Object</button>
<div id="pdfViewer" style="height:650px;"></div>
```

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
  TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, AllowedInteraction } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  ThumbnailView,
  BookmarkView,
  TextSelection,
  TextSearch,
  Print,
  Annotation,
  FormFields,
  FormDesigner
);

// Initialize the viewer
let viewer: PdfViewer = new PdfViewer();
viewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
viewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
viewer.appendTo('#pdfViewer');

//Exported Annotation as Object
var exportedObject: string;
const btnObject = document.getElementById('ExportAsObject');
btnObject?.addEventListener('click', () => {
  viewer.exportAnnotationsAsObject().then((value: any) => {
    // Persist or transmit the object as needed (DB/API). Keep for future import.
    console.log('Exported annotation object:', value);
    exportedObject=value;
  });
});

// Import from an exported object pasted in the textarea
const btnImport = document.getElementById('ImportFromObject');
btnImport?.addEventListener('click', () => {
  viewer.importAnnotation(JSON.parse(exportedObject));
});
```

## Common use cases

- Restore annotations saved earlier (e.g., from a database or API)
- Apply reviewer annotations shared as JSON/XFDF files via the Comments panel
- Migrate or merge annotations between documents or sessions
- Support collaborative workflows by reloading team annotations

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master)

## See also

- [Annotation Overview](../../overview)
- [Annotation Types](../../annotations/annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export Annotation](../export-import/export-annotation)
- [Import Export Events](../export-import/export-import-events)
- [Annotation Permission](../../annotations/annotation-permission)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)
- [Annotation API](../../annotations/annotations-api)