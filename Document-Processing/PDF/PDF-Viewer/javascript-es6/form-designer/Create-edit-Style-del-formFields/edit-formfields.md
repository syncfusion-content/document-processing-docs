---
layout: post
title: Edit form fields in the TypeScript PDF Viewer | Syncfusion
description: Learn how to edit PDF form fields using the UI and programmatically with APIs in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Edit form fields in TypeScript PDF Viewer

The PDF Viewer component allows user to edit PDF form fields using the Form Designer UI and update them programmatically.

The PDF Viewer supports editing these field types:

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- Signature field
- Initial field

## Edit with the UI

- Select a form field and open the Properties panel from the context menu to change its settings.
- Drag to move; use resize handles to resize.
- Use the toolbar to toggle field mode and add new fields.

Placeholders for UI screenshots are included below for each field type. Replace them with actual images later.

## Textbox

### Edit Textbox

1) Right-click the textbox → Properties.
2) Change value, font, size, colors, border thickness, alignment, max length, multiline.

![Textbox edited from UI](../../images/ui-textbox-edit.png)

### Edit Textbox programmatically

Use `updateFormField` on a button click for a simple, discoverable flow. The example below retrieves the fields, locates the textbox, and applies value, typography, colors, alignment, and border thickness updates.

```html
<button id="editTextbox">Apply Textbox Changes</button>
```

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, FontStyle, TextFieldSettings } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

(document.getElementById('editTextbox') as HTMLButtonElement)?.addEventListener('click', () => {
  // Retrieve form fields collection
  const fields = pdfviewer.retrieveFormFields();
  // Find the textbox field by name
  const field = fields.find((f: any) => f.name === 'First Name') || fields[0];
  if (field) {
    // Update textbox field styling and value
    pdfviewer.formDesignerModule.updateFormField(field, {
      value: 'John',
      fontFamily: 'Courier',
      fontSize: 12,
      fontStyle: FontStyle.None,
      color: 'black',
      backgroundColor: 'white',
      borderColor: 'black',
      thickness: 2,
      alignment: 'Left',
      maxLength: 50
    } as TextFieldSettings);
  }
});
```

## Password

### Edit Password

1) Right-click the password field → Properties.
2) Change tooltip, required, max length, font, and appearance.

![Password edited from UI](../../images/ui-password-edit.png)

### Edit Password programmatically

Update a password field (masked textbox) using `updateFormField` as shown below.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
  const field = pdfviewer.formFieldCollections.find(f => f.name === 'Password');
  if (field) {
    pdfviewer.formDesignerModule.updateFormField(field, {
      tooltip: 'Enter your password',
      isReadOnly: false,
      isRequired: true,
      isPrint: true,
      fontFamily: 'Courier',
      fontSize: 10,
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white',
      alignment: 'Left',
      maxLength: 20,
      thickness: 1
    });
  }
};
```

## CheckBox

### Edit CheckBox

1) Right-click the checkbox → Properties.
2) Toggle checked state, change border/background colors and thickness.

![CheckBox edited from UI](../../images/ui-checkbox-edit.png)

### Edit CheckBox programmatically

Use `updateFormField` to check/uncheck and change appearance.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
  const cb = pdfviewer.formFieldCollections.find(f => f.name === 'Subscribe');
  if (cb) {
    pdfviewer.formDesignerModule.updateFormField(cb, {
      isChecked: true,
      backgroundColor: 'white',
      borderColor: 'black',
      thickness: 2,
      tooltip: 'Subscribe to newsletter'
    });
  }
};
```

## RadioButton

### Edit RadioButton

1) Right-click a radio button → Properties.
2) Set selected state, colors, and thickness. Buttons with the same Name form a group; only one can be selected.

![RadioButton edited from UI](../../images/ui-radiobutton-edit.png)

### Edit RadioButton programmatically

Update one radio in the group or set the selected option by updating its `isSelected`.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
  const genderRadios = pdfviewer.formFieldCollections.filter(f => f.name === 'Gender');
  // Select the second option
  if (genderRadios[1]) {
    pdfviewer.formDesignerModule.updateFormField(genderRadios[0], { isSelected: false });
    pdfviewer.formDesignerModule.updateFormField(genderRadios[1], { isSelected: true, thickness: 2, borderColor: 'black' });
  }
};
```

## ListBox

### Edit ListBox

1) Right-click the list box → Properties.
2) Add/remove items, set selection, and adjust fonts and colors.

![ListBox edited from UI](../../images/ui-listbox-edit.png)

### Edit ListBox programmatically

Update options and selection using `updateFormField`.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
  const lb = pdfviewer.formFieldCollections.find(f => f.name === 'States');
  if (lb) {
    pdfviewer.formDesignerModule.updateFormField(lb, {
      options: [
        { itemName: 'Alabama', itemValue: 'AL' },
        { itemName: 'Alaska', itemValue: 'AK' },
        { itemName: 'Arizona', itemValue: 'AZ' }
      ],
      // Set selected item value if needed
      value: 'AZ',
      fontFamily: 'Courier',
      fontSize: 10,
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white'
    } as any);
  }
};
```

## DropDown

### Edit DropDown

1) Right-click the dropdown → Properties.
2) Add/remove items, set default value, and adjust appearance.

![DropDown edited from UI](../../images/ui-dropdown-edit.png)

### Edit DropDown programmatically

Update dropdown items and value.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
  const dd = pdfviewer.formFieldCollections.find(f => f.name === 'Country');
  if (dd) {
    pdfviewer.formDesignerModule.updateFormField(dd, {
      options: [
        { itemName: 'USA', itemValue: 'US' },
        { itemName: 'Canada', itemValue: 'CA' },
        { itemName: 'Mexico', itemValue: 'MX' }
      ],
      value: 'US',
      fontFamily: 'Courier',
      fontSize: 10,
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white'
    } as any);
  }
};
```

## Signature field

### Edit Signature field

1) Right-click the signature field → Properties.
2) Change tooltip, thickness, indicator text, required/visibility states.

![Signature field edited from UI](../../images/ui-signature-edit.png)

### Edit Signature field programmatically

Update signature field properties.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
  const sig = pdfviewer.formFieldCollections.find(f => f.name === 'Sign');
  if (sig) {
    pdfviewer.formDesignerModule.updateFormField(sig, {
      tooltip: 'Please sign here',
      thickness: 3,
      isRequired: true,
      isPrint: true,
      backgroundColor: 'white',
      borderColor: 'black'
    });
  }
};
```

## Initial field

### Edit Initial field

1) Right-click the initial field → Properties.
2) Change tooltip, indicator text, thickness, and required/visibility states.

![Initial field edited from UI](../../images/ui-initial-edit.png)

### Edit Initial field programmatically

Update an initial field’s properties.

```ts
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

const pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = () => {
  const init = pdfviewer.formFieldCollections.find(f => f.name === 'Initial');
  if (init) {
    pdfviewer.formDesignerModule.updateFormField(init, {
      tooltip: 'Add your initials',
      thickness: 2,
      isRequired: true,
      isPrint: true,
      backgroundColor: 'white',
      borderColor: 'black'
    });
  }
};
```
