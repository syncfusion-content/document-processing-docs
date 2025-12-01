---
layout: post
title: Remove form fields in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to remove PDF form fields using the UI and programmatically in the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Remove form fields in TypeScript PDF Viewer control

The PDF Viewer component allows users to remove PDF form fields using the Form Designer UI and programmatically.

## Remove form fields using the UI

You can remove designed form fields directly from the Form Designer toolbar.

Steps:

1) Select the target form field on the page.
2) Click the Delete Form Field icon on the Form Designer toolbar.
3) Alternatively, press the `Delete key` after selecting one or more fields.

![Form Designer toolbar with Delete icon](../../images/ui-del-formfields.png)

## Remove form fields programmatically

Use the `deleteFormField` method to remove form fields programmatically. Retrieve the target field from the `formFieldCollections` property (by object or ID) and pass it to `deleteFormField`.

The following example adds three fields on document load (Textbox, Password, and Signature) and shows two ways to remove them using buttons.

```html
<button id="deleteAllFields">Delete Form Fields</button>
<button id="deleteById">Delete First Field By ID</button>
<div id="PdfViewer" style="height:500px;width:100%"></div>
```
```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings, SignatureFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
TextSelection, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

// Optional server-backed
// pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';

pdfviewer.appendTo('#PdfViewer');

// Add form fields on document load
pdfviewer.documentLoad = () => {
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'First Name',
    bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
  } as TextFieldSettings);

  pdfviewer.formDesignerModule.addFormField('Password', {
    name: 'Password',
    bounds: { X: 338, Y: 229, Width: 150, Height: 24 }
  } as TextFieldSettings);

  pdfviewer.formDesignerModule.addFormField('SignatureField', {
    name: 'Sign Here',
    bounds: { X: 146, Y: 280, Width: 200, Height: 43 }
  } as SignatureFieldSettings);
};

// Delete all added form fields on button click
(document.getElementById('deleteAllFields') as HTMLButtonElement).addEventListener('click', () => {
  const fields = [...pdfviewer.formFieldCollections]; // clone to avoid mutation issues
  fields.forEach(field => pdfviewer.formDesignerModule.deleteFormField(field));
});

// Delete by ID on button click (example uses the first field's ID)
(document.getElementById('deleteById') as HTMLButtonElement).addEventListener('click', () => {
  if (pdfviewer.formFieldCollections.length > 0) {
    const id = pdfviewer.formFieldCollections[0].id;
    if (id) {
      pdfviewer.formDesignerModule.deleteFormField(id);
    }
  }
});
```

N> To configure the server-backed PDF Viewer, add the following `serviceUrl` in the `index.ts` file:
`pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`