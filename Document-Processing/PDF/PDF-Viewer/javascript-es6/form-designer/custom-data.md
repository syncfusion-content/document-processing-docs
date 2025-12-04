---
layout: post
title: Add custom data to form fields in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to attach, update, and read custom metadata (customData) on PDF form fields using the Form Designer UI and APIs in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add custom data to form fields

You can associate arbitrary metadata with any form field using the customData property. This is useful for storing business IDs, validation hints, tags, or any app-specific information alongside the field. The data stays with the field object during the viewer session and can be accessed whenever you query or update fields.

N> customData is a free-form object. You control both its shape and how it is used in your application.

## Add custom data when creating fields (programmatically)

Pass a customData object in the second parameter of addFormField. You can include any serializable values.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#pdfViewer');

viewer.documentLoad = () => {
  const meta = { businessId: 'C-1024', tags: ['profile', 'kiosk'], requiredRole: 'admin' };
  viewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 229, Width: 200, Height: 24 } as TextFieldSettings,
    // Attach any custom metadata your app needs
    customData: meta
  } as any);
};
```

N> To configure the server-backed PDF Viewer, set:
`viewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`

## Set default custom data for UI-created fields

When users add fields via the Form Designer toolbar, you can predefine default customData using the per-field settings objects.

```ts
// Example: default custom data for all new Textbox fields added from the toolbar
viewer.textFieldSettings = {
  name: 'Textbox',
  customData: { group: 'contact', createdBy: 'designer', requiredRole: 'user' }
} as any;
```

You can do the same for other field types using passwordFieldSettings, checkBoxFieldSettings, radioButtonFieldSettings, listBoxFieldSettings, dropDownFieldSettings, signatureFieldSettings, and initialFieldSettings.

## Update or replace custom data on existing fields

Use updateFormField to set or modify the customData of any existing field (retrieved by object or ID).

```ts
const fields = viewer.retrieveFormFields();
const target = fields[0];
viewer.formDesignerModule.updateFormField(target, {
  customData: { group: 'profile', flags: ['pii', 'masked'], updatedAt: Date.now() }
} as any);
```

Tip: You can merge new values with existing ones in your app code before calling updateFormField.

## Read custom data

You can read customData from any field at any time. Typical entry points:
- After document load
- On your own UI actions (save, validate, route, etc.)

```ts
viewer.documentLoad = () => {
  const fields = viewer.retrieveFormFields();
  fields.forEach((f: any) => {
    console.log('Field', f.name, 'customData:', f.customData);
  });
};
```

## Notes and best practices

- Keep customData small and serializable (plain objects, arrays, numbers, strings, booleans).
- Treat customData as application metadata. Use it to drive business rules, validation, or routing in your app.
- When cloning or copying fields in your UI, also copy or adjust customData as needed.

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)