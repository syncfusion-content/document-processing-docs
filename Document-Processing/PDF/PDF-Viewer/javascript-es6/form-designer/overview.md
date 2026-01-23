---
layout: post
title: Overview of Forms in TypeScript PDF Viewer Control | Syncfusion
description: Learn what the Form Designer in Syncfusion TypeScript PDF Viewer offers, supported field types, and how the topics are organized.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Overview of Forms in TypeScript PDF Viewer

The Syncfusion PDF Viewer delivers a complete, easy-to-use PDF forms experience. You can read, fill, add, edit, and delete form fields directly within your PDF documents. These actions are supported through both the intuitive user interface and powerful programmatic APIs.

The viewer also includes smooth import and export support for form data, making integration effortless. Developers benefit from extensive API control, while end users enjoy a clean and simple interface designed for a seamless and stress-free form-filling experience.

## Filling PDF Forms

Experience effortless PDF form filling through a clean, intuitive UI or automated workflows using powerful APIs. Flexible form data import and export support ensures smooth and efficient operations when working with PDF forms.

See the [Filling PDF Forms](./form-filling) page for full details.

Use the following code-snippet to enable form-filling by injecting `FormFields` Module.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
 ThumbnailView, BookmarkView, TextSelection, 
 TextSearch, FormFields} from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, 
ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields);
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');
```

![FormFilling](../images/FormFields.gif)

1. [Programmatically Form fill](./form-filling#fill-pdf-forms-programmatically)
2. [Form Fill Using UI](./form-filling#fill-pdf-forms-through-the-user-interface)
3. [Import the Form data](./form-filling#fill-pdf-forms-through-import-data)

## Form Designer

A built in Form Designer lets you quickly add, edit, move, and delete form fields in the PDF documents. This viewer allows you to design fillable PDF forms interactively either using the built-in form designer tools or building your own customized form designer tools.

See the [Form Designer](./form-designer) page for full details.

Use the following Code-snippet to enable Form Designer by injecting `FormDesigner` Module.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
 ThumbnailView, BookmarkView, TextSelection, TextSearch, 
 FormFields, FormDesigner, TextFieldSettings } from '@syncfusion/ej2-pdfviewer';
PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
 ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);
let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');
```

![FormDesigner](../images/FormDesigner.gif)

Create and customize interactive fields directly on the PDF page.
- [Create](./Create-edit-Style-del-formFields/create-formfields), [edit](./Create-edit-Style-del-formFields/edit-formfields), or [remove](./Create-edit-Style-del-formFields/remove-formfields) forms
- [Add a Signature Field](./Create-edit-Style-del-formFields/create-formfields#add-signature-field) 
- [Edit Form Field](./Create-edit-Style-del-formFields/edit-formfields)
- [Remove Form Field](./Create-edit-Style-del-formFields/remove-formfields) 
- [Form Field Constraints](./form-constrain) 

## Supported form field types

- [Textbox](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-textbox)
- [Password](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-password)
- [CheckBox](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-checkbox)
- [RadioButton](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-radiobutton)
- [ListBox](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-listbox)
- [DropDown](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-dropdown)
- [Signature field](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-signature-field)
- [Initial field](../form-designer/Create-edit-Style-del-formFields/create-formfields#add-initial-field)