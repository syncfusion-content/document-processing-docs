---
layout: post
title: PDF form field flags in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to apply isReadOnly, isRequired, and isPrint flags to PDF form fields in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# PDF form field flags in TypeScript PDF Viewer

The Syncfusion **TypeScript PDF Viewer** allows you to control how users interact with form fields and how those fields behave during validation and printing by applying **form field flags**. These flags define whether a form field can be modified, whether it is mandatory, and whether it appears in printed output.

This topic explains:
- [Supported form field flags](#supported-pdf-form-field-flags)
- [How each constraint affects field behavior](#key-actions)
- [How to apply flags during field creation](#apply-pdf-form-field-flags-using-the-ui)
- [How to update flags on existing fields](#update-flags-on-existing-fields-programmatically)
- [How flags work with validation and printing](#control-print-behavior)

## Supported PDF Form Field Flags

The following flags are supported in the PDF Viewer:

- [isReadOnly](#make-fields-read-only)  
  Prevents users from modifying the form field in the UI while still allowing updates through APIs.

- [isRequired](#mark-fields-as-required)  
  Marks the form field as mandatory and includes it in form field validation.

- [isPrint](#control-print-behavior)  
  Controls whether the form field appears when the document is printed.

## Key Actions

### Make Fields Read Only
Use the **isReadOnly** property to prevent users from modifying a form field through the UI. This is useful for displaying pre filled or calculated values that should not be changed by the user.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings, SignatureFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
                 TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

//Use this setting to make Read-only as Default for new Textbox fields
//pdfviewer.textFieldSettings = { isReadOnly: true }; 

pdfviewer.documentLoad = () => {
    // Read-only Textbox
    pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'EmployeeId',
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
        isReadOnly: true,
        value: 'EMP-0001'
    } as TextFieldSettings);

    // Read-only Signature field
    pdfviewer.formDesignerModule.addFormField('SignatureField', {
        name: 'ApplicantSign',
        bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
        isReadOnly: true,
        tooltip: 'Sign to accept the terms'
    } as SignatureFieldSettings);
};
```

### Mark Fields as Required
Use the **isRequired** property to mark form fields as mandatory. To enforce this constraint, enable form field validation and validate fields before allowing actions such as printing or downloading.

- Enable validation using [enableFormFieldsValidation](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#enableformfieldsvalidation)
- [Validate fields](./form-validation) using [validateFormFields()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#validateformfields) 

If required fields are empty, validation can prevent further actions.

```ts
import {
  PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  TextSelection, TextSearch, Print, Annotation, FormDesigner, FormFields,
  TextFieldSettings
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  TextSelection, TextSearch, Print, Annotation, FormDesigner, FormFields
);

// Create and configure the viewer
let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
// 1) Default for new Textbox fields
pdfviewer.textFieldSettings = { isRequired: true };

// 2) Validation wiring
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = (args: any) => {
  // Triggers when required fields are empty on submit/validate
  if (args && args.formField && args.formField.length > 0) {
    alert('Please fill all required fields. Missing: ' + args.formField[0].name);
  }
};

// 3) Creation (add a Textbox form field once the document is loaded)
pdfviewer.documentLoad = () => {
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'Email',
    bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
    isRequired: true,
    tooltip: 'Email is required'
  } as TextFieldSettings);
};

// Mount the viewer
pdfviewer.appendTo('#pdfViewer'); // Ensure an element with id="pdfViewer" exists in your HTML
```

### Control Print Behavior
Use the **isPrint** property to control whether a form field appears in the printed output of the PDF document.

```ts
import {
  PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  TextSelection, TextSearch, Print, Annotation, FormDesigner, FormFields,
  SignatureFieldSettings
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  TextSelection, TextSearch, Print, Annotation, FormDesigner, FormFields
);

// Create and configure the viewer
let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});

// 1) Default for new signature fields
pdfviewer.signatureFieldSettings = { isPrint: false };

// 2) Creation (do not print a signature field)
pdfviewer.documentLoad = () => {
  pdfviewer.formDesignerModule.addFormField('SignatureField', {
    name: 'ApplicantSign',
    bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
    isPrint: false
  } as SignatureFieldSettings);

  // 3) Update existing field (toggle to print)
  const sign = pdfviewer.formFieldCollections.find(f => f.name === 'ApplicantSign');
  if (sign) {
    pdfviewer.formDesignerModule.updateFormField(sign, { isPrint: true } as SignatureFieldSettings);
  }
};

pdfviewer.appendTo('#pdfViewer'); // Ensure <div id="pdfViewer"></div> exists
```

N> Printing can be triggered programmatically using **pdfviewer.print()**. Form fields with **isPrint: false** are excluded from the printed output.

## Apply PDF Form Field Flags Using the UI

**Steps**
1. Enable **Form Designer** mode in the PDF Viewer.  
2. Select an existing form field on the PDF page.  
3. The **Right click To open context menu - > Properties** popover is displayed.
4. Configure the required constraint options.  
5. Click “Ok” and Close the properties popover to apply the changes.  

Changes are reflected immediately in the viewer.

[Applying form field flags using the UI](../images/formfields-flag.gif) 

## Apply PDF Form Field Flags Programmatically

You can apply or modify form field flags in the following ways.

### Apply flags When Creating Fields
Pass the flags properties in the settings object when creating form fields using **addFormField()**.
```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
         BookmarkView, TextSelection, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                 BookmarkView, TextSelection, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
    // Read-only Textbox that is printed but not required
    pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'EmployeeId',
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
        isReadOnly: true,
        isRequired: false,
        isPrint: true,
        value: 'EMP-0001'
    } as TextFieldSettings);

    // Required Signature field that is not included in print
    pdfviewer.formDesignerModule.addFormField('SignatureField', {
        name: 'ApplicantSign',
        bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
        isReadOnly: false,
        isRequired: true,
        isPrint: false,
        tooltip: 'Sign to accept the terms'
    } as SignatureFieldSettings);
};
```

### Update flags on Existing Fields programmatically
Use the [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) method to modify constraint values on existing form fields.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
         TextSelection, Annotation, FormDesigner, FormFields, TextFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
                 TextSelection, Annotation, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
    // Add a sample textbox
    pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'Email',
        bounds: { X: 146, Y: 260, Width: 220, Height: 24 }
    } as TextFieldSettings);

    // Retrieve it and update constraint flags
    const field = pdfviewer.formFieldCollections.find(f => f.name === 'Email');
    if (field) {
        pdfviewer.formDesignerModule.updateFormField(field, {
            isReadOnly: false,
            isRequired: true,
            isPrint: true,
            tooltip: 'Enter a valid email'
        } as TextFieldSettings);
    }
};
```

### Set Default Flags for New PDF Form Fields
You can configure default flag values so that form fields added using the [Form Designer toolbar](../toolbar-customization/form-designer-toolbar) automatically inherit them. This helps ensure consistent behavior for all newly created fields.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
         BookmarkView, TextSelection, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                 BookmarkView, TextSelection, FormDesigner, FormFields);

let pdfviewer: PdfViewer = new PdfViewer({ documentPath: 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf' });
pdfviewer.appendTo('#PdfViewer');

// Textbox fields will be editable, required, and included in print by default
pdfviewer.textFieldSettings = {
    isReadOnly: false,
    isRequired: true,
    isPrint: true,
    tooltip: 'Required field'
};

// Signature fields will be optional and hidden when printing
pdfviewer.signatureFieldSettings = {
    isReadOnly: false,
    isRequired: false,
    isPrint: false,
    tooltip: 'Sign if applicable'
};
```

## See Also

- [Form Designer overview](./overview)  
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)  
- [Create form fields](./Create-edit-Style-del-formFields/create-formfields)  
- [Modify form fields](./Create-edit-Style-del-formFields/modify-formfields)  
- [Group form fields](./group-formfields)  
- [Add custom data to PDF form fields](./custom-data)  
- [Form Validation](./form-validation)  
- [Form fields API](./formfields-api)