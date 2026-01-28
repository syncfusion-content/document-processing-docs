---
layout: post
title: Remove form fields in the TypeScript PDF Viewer component | Syncfusion
description: Learn how to remove PDF form fields using the UI and programmatically in the Syncfusion TypeScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Remove PDF Form Fields from a PDF 

## Remove Form Fields Using the UI
**Steps:**
1.	Enable **Form Designer mode**.
2.	Select the form field.
3.	Click **Delete** in the toolbar or press the **Delete** key.
![Form Designer toolbar with Delete icon](../../images/ui-del-formfields.png)

## Remove Form Fields Programmatically
Use **deleteFormField()** with a field reference or ID.

```html
<button id="deleteAllFields">Delete Form Fields</button>
<button id="deleteById">Delete First Field By ID</button>
```
```ts
// Delete all added form fields on button click
(document.getElementById('deleteAllFields') as HTMLButtonElement).addEventListener('click', () => {
  const fields = [...pdfviewer.formFieldCollections]; // clone to avoid mutation issues
  fields.forEach(field => pdfviewer.formDesignerModule.deleteFormField(field));
});

// Delete by ID on button click (example uses the first field's ID)
(document.getElementById('deleteById') as HTMLButtonElement).addEventListener('click', () => {
  if (pdfviewer.formFieldCollections.length > 0) {
    const id = pdfviewer.formFieldCollections[0].id;
    if (id) {
      pdfviewer.formDesignerModule.deleteFormField(id);
    }
  }
});
```

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-formfields)
- [Modify form fields](./modify-formfields)
- [Customize form fields](./customize-formfields)
- [Group form fields](../group-formfields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../formfields-api)