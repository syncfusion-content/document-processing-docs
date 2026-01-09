---
layout: post
title: Group form fields in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to group PDF form fields in the Syncfusion TypeScript PDF Viewer by assigning the same name to multiple widgets.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Group form fields in TypeScript PDF Viewer

In PDF forms, multiple widgets can represent the same logical form field. The Syncfusion PDF Viewer supports grouping form fields by assigning the same Name to multiple widgets. Grouped widgets mirror their values and states based on the field type.

Key behavior when fields share the same Name:

- **Textbox and Password**: Text entered in one widget appears in all widgets with the same name.
- **CheckBox**: Checking one widget checks all widgets with the same name (mirrored state).
- **RadioButton**: Widgets with the same name are grouped; only one radio button in the group can be selected at a time.
- **ListBox and DropDown**: The selected item is shared across widgets with the same name.
- **Signature field and Initial field**: The applied signature/initial is mirrored across widgets with the same name.

N> Grouping is driven solely by the Name property. Bounds determine placement; name determines grouping.

## Group with the user interface

Use the Form Designer toolbar and set the same Name for multiple widgets to group them.

Quick steps:

1. Enable the Form Designer toolbar.
2. Draw the desired fields (e.g., two Textbox widgets or multiple RadioButton widgets).
3. Right‑click a field > Properties, and set the same Name on each widget you want to group.
4. Apply and test: editing one grouped widget reflects in the others.

Textboxes and Password fields (shared value)
- Give both widgets the same Name to mirror the typed value across them.

![Grouping textboxes with the same name](../images/groupTextFileds.png)

Radio buttons (exclusive choice within a group)
- Add radio buttons that share the same Name to create one group; only one can be selected at a time.

![Grouping radio buttons with the same name](../images/groupRadiobutton.png)

## Group programmatically

Assign the same name when adding fields via code. The following example shows:

- Two Textbox widgets named EmployeeId that mirror values.
- A RadioButton group named Gender with exclusive selection.
- Two CheckBox widgets named Subscribe that mirror checked state.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings,
         RadioButtonFieldSettings, CheckBoxFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView,
                 BookmarkView, TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
    // Textbox group: same name => mirrored value
    pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'EmployeeId',
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
    } as TextFieldSettings);

    pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'EmployeeId', // same name groups the two widgets
        bounds: { X: 338, Y: 229, Width: 150, Height: 24 }
    } as TextFieldSettings);

    // Radio button group: same name => exclusive selection across the group
    pdfviewer.formDesignerModule.addFormField('RadioButton', {
        name: 'Gender',
        bounds: { X: 148, Y: 289, Width: 18, Height: 18 },
        isSelected: false
    } as RadioButtonFieldSettings);

    pdfviewer.formDesignerModule.addFormField('RadioButton', {
        name: 'Gender', // grouped with the first
        bounds: { X: 292, Y: 289, Width: 18, Height: 18 },
        isSelected: false
    } as RadioButtonFieldSettings);

    // CheckBox group: same name => mirrored checked state
    pdfviewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Subscribe',
        bounds: { X: 56, Y: 664, Width: 20, Height: 20 },
        isChecked: false
    } as CheckBoxFieldSettings);

    pdfviewer.formDesignerModule.addFormField('CheckBox', {
        name: 'Subscribe', // grouped with the first
        bounds: { X: 242, Y: 664, Width: 20, Height: 20 },
        isChecked: false
    } as CheckBoxFieldSettings);
};
```

N> To configure the server-backed PDF Viewer, add the following serviceUrl in the index.ts file:
`pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';`

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form fields Validation](./form-validation)
- [Form fields API](./formfields-api)