---
layout: post
title: Group form fields in the JavaScript PDF Viewer component | Syncfusion
description: Learn how to group PDF form fields in the Syncfusion JavaScript PDF Viewer by assigning the same name to multiple widgets.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Group form fields in JavaScript PDF Viewer

The Syncfusion **JavaScript PDF Viewer** allows you to group multiple form fields into a single logical field by assigning the same `name` property to them. Grouped form fields share their values and states automatically based on the field type. Grouping is available in the Form Designer UI and programmatically via the form designer APIs, making it easy to keep related fields synchronized across the PDF document.

This page covers:
- [How form field grouping works](#how-grouping-works)
- [Field behavior based on type](#field-behavior-by-type)
- [How to group form fields using the UI](#group-using-the-form-designer-ui)
- [How to group form fields programmatically](#group-pdf-form-fields-programmatically)
- [Related references and samples](#example-scenarios)


## How grouping works

In a PDF form, multiple PDF form fields can represent the same logical field. When PDF form fields share the same `name` property, they are treated as a group and stay synchronized.

## Field behavior by type

- **Textbox and Password** — Text entered in one widget appears in all widgets with the same `name` property.  
- **CheckBox** — Checking one widget sets the checked state for all checkboxes with the same `name` property.  
- **RadioButton** — Widgets with the same `name` property form a radio group; only one option can be selected.  
- **ListBox and DropDown** — The selected value is shared across widgets with the same `name` property.  
- **Signature and Initial fields** — Applied signature or initial is mirrored across grouped widgets.

N> Form field grouping is controlled by the `name` property. The position of each widget is determined by its bounds; grouping is not affected by location.

## Group using the Form Designer UI

**Steps**
1. Enable the [Form Designer toolbar](../toolbar-customization/form-designer-toolbar).
2. Add the form fields you want to group.
3. Select a form field, open Properties, and set the `name` value.
4. Assign the same `name` value to all PDF form fields that belong to the group.
5. Apply the changes and verify that updates in one widget reflect in the others.

![Grouping textboxes using the same name property](../../javascript-es6/images/groupTextFileds.png)

![Grouping radio buttons using the same name property](../../javascript-es6/images/groupRadiobutton.png)

## Group PDF Form Fields Programmatically

You can also group form fields during creation by assigning the same **Name** through code.

### Example Scenarios
- Two textboxes named **EmployeeId** share the same value.
- A radio button group named **Gender** allows single selection.
- Two checkboxes named **Subscribe** share the checked state.

```js
pdfviewer.documentLoad = function () {
  // Textbox group: same name => mirrored value
  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'EmployeeId',
    bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
  });

  pdfviewer.formDesignerModule.addFormField('Textbox', {
    name: 'EmployeeId',
    bounds: { X: 338, Y: 229, Width: 150, Height: 24 }
  });

  // Radio group: same name => exclusive selection
  pdfviewer.formDesignerModule.addFormField('RadioButton', {
    name: 'Gender',
    bounds: { X: 148, Y: 289, Width: 18, Height: 18 },
    isSelected: false
  });

  pdfviewer.formDesignerModule.addFormField('RadioButton', {
    name: 'Gender',
    bounds: { X: 292, Y: 289, Width: 18, Height: 18 },
    isSelected: false
  });

  // CheckBox group: same name => mirrored checked state
  pdfviewer.formDesignerModule.addFormField('CheckBox', {
    name: 'Subscribe',
    bounds: { X: 56, Y: 664, Width: 20, Height: 20 },
    isChecked: false
  });

  pdfviewer.formDesignerModule.addFormField('CheckBox', {
    name: 'Subscribe',
    bounds: { X: 242, Y: 664, Width: 20, Height: 20 },
    isChecked: false
  });
};
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./manage-form-fields/create-form-fields)
- [Modify form fields](./manage-form-fields/modify-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)