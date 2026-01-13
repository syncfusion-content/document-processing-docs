---
layout: post
title: Create form fields in the JavaScript PDF Viewer | Syncfusion
description: Learn how to add each PDF form field using the PDF Viewer UI and how to create them programmatically in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Create form fields in JavaScript PDF Viewer

The PDF Viewer component supports interactive form field design, including drawing, dragging, and resizing fields directly on the page. Click the Form Field icon on the toolbar to add a field and place it on the document. You can also create and manage form fields programmatically using the API.

The PDF Viewer supports the following form field types:

- [Textbox](#add-textbox)
- [Password](#add-password)
- [CheckBox](#add-checkbox)
- [RadioButton](#add-radiobutton)
- [ListBox](#add-listbox)
- [DropDown](#add-dropdown)
- [Signature field](#signature-field)
- [Initial field](#add-initial-field)

## Add the form field dynamically

Click the Form Field icon on the toolbar, then click on the PDF to draw a form field. See the following GIF for reference.

![Add a form field using the toolbar](../../../javascript-es6/images/addformfield.gif)

## Drag the form field

Drag the selected form field to reposition it within the PDF document. See the following GIF for reference.

![Drag a selected form field in the PDF Viewer](../../../javascript-es6/images/dragformfield.gif)

## Resize the form field

Resize the selected form field using the resize handles on the field boundary. See the following GIF for reference.

![Resize a selected form field in the PDF Viewer](../../../javascript-es6/images/resizeformfield.gif)

## Textbox

### Add Textbox

- Open the Form Designer toolbar.
- Select Textbox, then click/tap on the page to place it.
- Resize/move as needed and set properties in the property panel.

![Textbox added from UI](../../../javascript-es6/images/ui-textbox.png)

### Add Textbox Programmatically

To add a Textbox programmatically, call addFormField with type 'Textbox' and pass a settings object. The example below adds a textbox when the document loads.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'First Name',
    bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
  });
};
```

## Password

### Add Password

- Open the Form Designer toolbar.
- Select Password, then place it on the page.
- Configure tooltip, required, max length, etc.

![Password added from UI](../../../javascript-es6/images/ui-password.png)

### Add Password Programmatically

To add a Password field programmatically, call addFormField with type 'Password' and pass a settings object. The example below adds the field when the document loads.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  pdfviewer.formDesignerModule.addFormField('Password', {
    name: 'Account Password',
    bounds: { X: 148, Y: 270, Width: 180, Height: 24 }
  });
};
```

## CheckBox

### Add CheckBox

- Choose CheckBox in the Form Designer toolbar.
- Click on the page to place, duplicate for multiple options if needed.
- Use the property panel to set IsChecked, tooltip, and appearance.

![CheckBox added from UI](../../../javascript-es6/images/ui-checkbox.png)

### Add CheckBox Programmatically

To add a CheckBox programmatically, call addFormField with type 'CheckBox' and pass a settings object. Set isChecked and bounds as needed.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  pdfviewer.formDesignerModule.addFormField('CheckBox', {
    name: 'Subscribe',
    isChecked: false,
    bounds: { X: 56, Y: 664, Width: 20, Height: 20 }
  });
};
```

## RadioButton

### Add RadioButton

- Select RadioButton in the Form Designer toolbar.
- Place buttons sharing the same Name to create a group (e.g., Gender).
- Use the property panel to set selection, colors, and tooltip.

![Radio buttons added from UI](../../../javascript-es6/images/ui-radiobutton.png)

### Add RadioButton Programmatically

To add radio buttons programmatically, call addFormField with type 'RadioButton' and pass a settings object. Use the same name to group buttons.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  // Group by name: 'Gender'
  pdfviewer.formDesignerModule.addFormField('RadioButton', {
    name: 'Gender',
    isSelected: false,
    bounds: { X: 148, Y: 289, Width: 18, Height: 18 }
  });

  pdfviewer.formDesignerModule.addFormField('RadioButton', {
    name: 'Gender',
    isSelected: false,
    bounds: { X: 292, Y: 289, Width: 18, Height: 18 }
  });
};
```

## ListBox

### Add ListBox

- Choose ListBox in the Form Designer toolbar.
- Place the field and add items in the property panel.
- Configure font, size, and selection behavior.

![ListBox added from UI](../../../javascript-es6/images/ui-listbox.png)

### Add ListBox Programmatically

To add a ListBox programmatically, call addFormField with type 'ListBox' and pass a settings object, including an options array for the items.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  var options = [
    { itemName: 'Item 1', itemValue: 'item1' },
    { itemName: 'Item 2', itemValue: 'item2' },
    { itemName: 'Item 3', itemValue: 'item3' }
  ];

  pdfviewer.formDesignerModule.addFormField('ListBox', {
    name: 'States',
    options: options,
    bounds: { X: 380, Y: 320, Width: 150, Height: 60 }
  });
};
```

## DropDown

### Add DropDown

- Select DropDown in the Form Designer toolbar.
- Place the field, then add items via the property panel.
- Adjust appearance and default value.

![DropDown added from UI](../../../javascript-es6/images/ui-dropdown.png)

### Add DropDown Programmatically

To add a DropDown programmatically, call addFormField with type 'DropDown' and pass a settings object with an options array.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  var options = [
    { itemName: 'Item 1', itemValue: 'item1' },
    { itemName: 'Item 2', itemValue: 'item2' },
    { itemName: 'Item 3', itemValue: 'item3' }
  ];

  pdfviewer.formDesignerModule.addFormField('DropDown', {
    name: 'Country',
    options: options,
    bounds: { X: 560, Y: 320, Width: 150, Height: 24 }
  });
};
```

## Signature field

### Add Signature field

- Select Signature field in the Form Designer toolbar.
- Place the field where the signer should sign.
- Configure indicator text, thickness, tooltip, and required state.

![Signature field added from UI](../../../javascript-es6/images/ui-signature.png)

### Add Signature field Programmatically

To add a Signature field programmatically, call addFormField with type 'SignatureField' and pass a settings object.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  pdfviewer.formDesignerModule.addFormField('SignatureField', {
    name: 'Sign',
    bounds: { X: 57, Y: 923, Width: 200, Height: 43 }
  });
};
```

## Initial field

### Add Initial field

- Select Initial field in the Form Designer toolbar.
- Place the field where initials are required.
- Configure indicator text, tooltip, and required state.

![Initial field added from UI](../../../javascript-es6/images/ui-initial.png)

### Add Initial field Programmatically

To add an Initial field programmatically, call addFormField with type 'InitialField' and pass a settings object.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = function() {
  pdfviewer.formDesignerModule.addFormField('InitialField', {
    name: 'Initial',
    bounds: { X: 148, Y: 466, Width: 200, Height: 43 }
  });
};
```

## setFormFieldMode programmatically

The setFormFieldMode method enables adding a form field dynamically by specifying the field type. For example, the following adds a Password field when a button is clicked.

```html
<button id="addPasswordField">Add Password Field</button>
```

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
  ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addPasswordField').addEventListener('click', function () {
  pdfviewer.formDesignerModule.setFormFieldMode('Password');
  // In setFormFieldMode, pass the required field to be added like Textbox, Checkbox, etc.
});
```

## See Also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Edit form fields](./edit-formfields)
- [Style form fields](./style-formfields)
- [Remove form fields](./remove-formfields)
- [Group form fields](../group-formfields)
- [Form validation](../form-validation)
- [Form Fields API](../formfields-api)
