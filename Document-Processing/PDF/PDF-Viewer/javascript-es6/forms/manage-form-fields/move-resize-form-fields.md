---
layout: post
title: Move and Resize form fields in the TypeScript PDF Viewer | Syncfusion
description: Learn how to move and resize PDF form fields using the UI and programmatically with APIs in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Move and Resize PDF Form Fields
- **Move**: Drag the form field to reposition it.
- **Resize**: Use the resize handles to change width and height.

![Moveing and Resizing a form field](../../images/move-resize-forms.gif)

## Move and Resize Fields Programmatically (API)
You can set absolute bounds or move fields by a delta.

**Set absolute bounds**
```html
<button id="resizeMove">Resize and Move FormFields</button>
```
```ts
// Move & resize by setting absolute bounds
(document.getElementById('resizeMove') as HTMLButtonElement)?.addEventListener(
  'click',
  () => {
    // Retrieve form fields collection
    const fields = pdfviewer.retrieveFormFields();
    // Find the textbox field by name (Here field name is First Name)
    const field = fields.find((f: any) => f.name === 'First Name') || fields[0]; //Update Name accordingly
    if (field) {
      // Update bounds to move or rezie formfields
      pdfviewer.formDesignerModule.updateFormField(field, {
        bounds: { X: 140, Y: 210, Width: 220, Height: 24 }, // new absolute position & size
      } as TextFieldSettings);
    }
  }
);
```

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)