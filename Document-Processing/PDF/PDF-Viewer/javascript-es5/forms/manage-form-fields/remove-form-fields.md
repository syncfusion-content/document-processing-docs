---
layout: post
title: Remove form fields in the JavaScript PDF Viewer component | Syncfusion
description: Learn how to remove PDF form fields using the UI and programmatically in the Syncfusion JavaScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Remove PDF form fields from a PDF in JavaScript

## Remove form fields using the UI
**Steps:**
1.	Enable **Form Designer mode**.
2.	Select the form field.
3.	Click **Delete** in the toolbar or press the **Delete** key.
![Form Designer toolbar with Delete icon](../../../javascript-es6/images/ui-del-formfields.png)

## Remove form fields programmatically
Use [`deleteFormField()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formdesigner#deleteformfield) with a field reference or ID.

```html
<button id="deleteAllFields">Delete Form Fields</button>
<button id="deleteById">Delete First Field By ID</button>
```
```js
// Delete all added form fields on button click
document.getElementById('deleteAllFields').addEventListener('click', function () {
  var fields = (pdfviewer.formFieldCollections || []).slice(); // clone to avoid mutation issues
  fields.forEach(function (field) { return pdfviewer.formDesignerModule.deleteFormField(field); });
});

// Delete by ID on button click (example uses the first field's ID)
document.getElementById('deleteById').addEventListener('click', function () {
  if (pdfviewer.formFieldCollections && pdfviewer.formFieldCollections.length > 0) {
    var id = pdfviewer.formFieldCollections[0].id;
    if (id) {
      pdfviewer.formDesignerModule.deleteFormField(id);
    }
  }
});
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Modify form fields](./modify-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)