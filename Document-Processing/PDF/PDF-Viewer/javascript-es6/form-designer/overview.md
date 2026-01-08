---
layout: post
title: Overview of Forms in TypeScript PDF Viewer Control | Syncfusion
description: Learn what the Form Designer in Syncfusion TypeScript PDF Viewer offers, supported field types, and how the topics are organized.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Overview of Forms in TypeScript PDF Viewer

Syncfusion TypeScript PDF Viewer provides a complete forms experience. Design new forms or enhance existing PDFs, fill and validate fields, import or export data, and capture signatures — all via an intuitive UI and rich APIs.

The viewer supports both runtime form filling and an interactive Form Designer to create or modify fields.

## Form Fields

Work with the runtime form fields present in a PDF Form.
- Render existing fields
- Fill fields.
- Import/Export form data as JSON, XFDF, FDF, or as a plain object
- Inject FormFields to enable form-filling features.

Use the following code-snippet to enable form-filling by injecting `FormFields` Module.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields} from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields);
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');
```

![FormFilling](../images/FormFields.gif)

## Form Designer

Create and customize interactive fields directly on the PDF page.
- Add fields: textbox, checkbox, radio button, dropdown, list box, signature, and initials
- Edit quickly: move, resize, align, distribute, copy/paste, undo/redo
- Configure properties: name, value, font, color, border, alignment, required/read-only/visibility, tab order
- Control interaction: toggle read-only, show/hide, and manage printing behavior
- Manage fields: select, group/ungroup, reorder, or delete
- Save and print: persist designed fields in the PDF and print with appearances
- Tailor the UI: show/hide or customize the Form Designer toolbar; handle events for add/edit/select/move/resize

Use the following Code-snippet to enable Form Designer by injecting `FormDesigner` Module.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, TextFieldSettings } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');
```

![FormDesigner](../images/FormDesigner.gif)

## Supported form field types

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- Signature field
- Initial field

## Typical workflows

- Design → Save → Fill: create or modify fields, save them into the PDF, then fill and validate
- Fill → Export/Import: complete forms and export data to JSON/XFDF/FDF, or import data to fill
- Customize → Integrate: wire up events and business rules; tailor the designer toolbar for your app

## See also

- [Form filling](./form-filling)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)
- [Edit form fields](./Create-edit-Style-del-formFields/edit-formfields)
- [Style form fields](./Create-edit-Style-del-formFields/style-formfields)
- [Group form fields](./group-formfields)
- [Form constraints](./form-constrain)
- [Form validation](./form-validation)
- [Form Fields API](./formfields-api)
- [Custom data on form fields](./custom-data)
- [Import form data](./import-export-formfields/import-formfields)
- [Export form data](./import-export-formfields/export-formfields)
- [Import/Export events](./import-export-formfields/import-export-events)
