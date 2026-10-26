---
layout: post
title: Move Resize Form Fields in JavaScript (ES5) PDF Viewer | Syncfusion
description: Move and resize PDF form fields in the JavaScript (ES5) PDF Viewer using the built-in UI and programmatic APIs to control the field layout.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Move and Resize Form Fields in JavaScript (ES5) PDF Viewer
- **Move**: Drag the form field to reposition it.
- **Resize**: Use the resize handles to change width and height.

![Moving and resizing a form field](../../../javascript-es6/images/move-resize-forms.gif)

## Move and resize fields programmatically (API)
You can set absolute bounds or move fields by a delta.

**Set absolute bounds**
```html
<button id="resizeMove">Resize and Move form fields</button>
```
```js
// Move & resize by setting absolute bounds
document.getElementById('resizeMove').addEventListener('click', function () {
  // Retrieve form fields collection
  var fields = pdfviewer.retrieveFormFields();
  // Find the textbox field by name (Here field name is First Name)
  var field = (fields || []).find(function (f) { return f && f.name === 'First Name'; }) || (fields || [])[0]; // Update Name accordingly
  if (field) {
    // Update bounds to move or resize form fields
    pdfviewer.formDesignerModule.updateFormField(field, {
      bounds: { X: 140, Y: 210, Width: 220, Height: 24 } // new absolute position & size
    });
  }
});
```

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form fields](./remove-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)