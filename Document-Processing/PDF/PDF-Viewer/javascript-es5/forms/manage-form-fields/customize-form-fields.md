---
layout: post
title: Customize Form Fields in JavaScript (ES5) PDF Viewer | Syncfusion
description: Style PDF form fields in the JavaScript (ES5) PDF Viewer by configuring fonts, colors, borders, alignment, and other visual properties through the UI or code.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize Form Field Appearance in JavaScript (ES5) PDF Viewer

Styling customizes appearance only (font, color, alignment, border, background, indicator text).

## Customize Form Field Appearance in JavaScript (ES5) PDF ViewerCustomize appearance of form fields using the UI
Use the **Properties** panel to adjust:
- font family/size, text color, alignment
- border color/thickness
- background color
![Textbox style from UI](../../../javascript-es6/images/ui-textbox-style.png)

## Customize Form Field Appearance in JavaScript (ES5) PDF ViewerCustomize appearance of form fields programmatically
Use [`updateFormField()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#updateformfields) to apply styles:
```html
<button id="CustomizeTextboxStyle">Update Textbox Style</button>
```
```js
// Update textbox styling on button click
document.getElementById('CustomizeTextboxStyle').addEventListener('click', function () {
  // Retrieve form fields collection
  var fields = pdfviewer.retrieveFormFields();
  // Find the textbox field by name
  var tb = (fields || []).find(function (f) { return f && f.name === 'First Name'; }) || (fields || [])[0];
  if (tb) {
    // Update textbox field styling
    pdfviewer.formDesignerModule.updateFormField(tb, {
      value: 'John',
      fontFamily: 'Courier',
      fontSize: 12,
      fontStyle: null,
      color: 'black',
      borderColor: 'black',
      backgroundColor: 'white',
      alignment: 'Left',
      thickness: 2
    });
  }
});
```

## Customize Form Field Appearance in JavaScript (ES5) PDF ViewerSet default styles for new form fields
Define defaults so fields added from the toolbar inherit styles.
```js
// Apply as defaults for Textbox added from toolbar
pdfviewer.textFieldSettings = {
  name: 'Textbox',
  isReadOnly: false,
  visibility: 'visible',
  isRequired: false,
  isPrint: true,
  tooltip: 'Textbox',
  thickness: 4,
  value: 'Textbox',
  fontFamily: 'Courier',
  fontSize: 10,
  fontStyle: null,
  color: 'black',
  borderColor: 'black',
  backgroundColor: 'White',
  alignment: 'Left',
  maxLength: 0,
  isMultiline: false
};
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## Customize Form Field Appearance in JavaScript (ES5) PDF ViewerSee also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Modify form fields](./modify-form-fields)
- [Remove form fields](./remove-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)
