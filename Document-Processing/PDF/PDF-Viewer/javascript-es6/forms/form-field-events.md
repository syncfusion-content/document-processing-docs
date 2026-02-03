---
layout: post
title: Form Field Events in TypeScript PDF Viewer control | Syncfusion
description: Learn here all about different form field in Syncfusion TypeScript PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field Events in TypeScript

The Syncfusion **TypeScript PDF Viewer** provides a comprehensive set of **form field events** that allow developers to track user interactions, respond to form changes, and implement custom business logic. These events can be used for scenarios such as [validation](./form-validation), **UI updates**, **logging**, and **workflow automation**. 

Form field events are triggered during actions such as adding, selecting, modifying, moving, resizing, and removing form fields.

## Supported PDF Form Field Events

The following table lists all supported form field events and their descriptions:

| Form Field events | Description |
|---|---|
| [formFieldAdd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldAddArgs) | Triggered when a new form field is added, either through the Form Designer UI or programmatically. |
| [formFieldClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldClickArgs) | Fired when a form field is clicked in the viewer. |
| [formFieldDoubleClick](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldDoubleClickArgs) | Fired when a form field is double clicked. |
| [formFieldFocusOut](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldFocusOutEventArgs) | Triggered when a form field loses focus after editing. |
| [formFieldMouseLeave](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldMouseLeaveArgs) | Fired when the mouse pointer leaves a form field. |
| [formFieldMouseOver](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldMouseoverArgs) | Fired when the mouse pointer moves over a form field. |
| [formFieldMove](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldMoveArgs) | Triggered when a form field is moved to a new position. |
| [formFieldPropertiesChange](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldPropertiesChangeArgs) | Fired when any form field property changes, such as font, color, or constraint values. |
| [formFieldRemove](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldRemoveArgs) | Triggered when a form field is deleted from the document. |
| [formFieldResize](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldResizeArgs) | Fired when a form field is resized. |
| [formFieldSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldSelectArgs) | Fired when a form field is selected in the Form Designer. |
| [formFieldUnselect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formFieldUnselectArgs) | Fired when a previously selected form field is unselected. |
| [validateFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/validateFormFieldsArgs) | Fired when form field validation fails during print or download actions. |

**Common Use Cases**

Form field events can be used to:
- Validate form data before printing or downloading
- Track user interaction with form fields
- Update UI elements dynamically
- Log form changes for auditing
- Trigger workflow actions based on field changes
- Enforce business rules during form editing

## Handle PDF Form Field Events

You can wire up form field events on the PDF Viewer instance to execute custom logic when specific actions occur.

```ts
const pdfViewer = new PdfViewer({
  // Basic examples for common form-field events
  formFieldAdd: (args: any) => { console.log('formFieldAdd', args); },
  formFieldRemove: (args: any) => { console.log('formFieldRemove', args); },
  formFieldPropertiesChange: (args: any) => { console.log('formFieldPropertiesChange', args); },

  // Additional events from the table
  formFieldClick: (args: any) => { console.log('formFieldClick', args); },
  formFieldDoubleClick: (args: any) => { console.log('formFieldDoubleClick', args); },
  formFieldFocusOut: (args: any) => { console.log('formFieldFocusOut', args); },
  formFieldMouseOver: (args: any) => { console.log('formFieldMouseOver', args); },
  formFieldMouseLeave: (args: any) => { console.log('formFieldMouseLeave', args); },
  formFieldMove: (args: any) => { console.log('formFieldMove', args); },
  formFieldResize: (args: any) => { console.log('formFieldResize', args); },
  formFieldSelect: (args: any) => { console.log('formFieldSelect', args); },
  formFieldUnselect: (args: any) => { console.log('formFieldUnselect', args); },
});

//Validation Event
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = (args: any) => {
  if (args && args.formField && args.formField.length > 0) {
    // Example: prevent the pending action and notify the user
    args.cancel = true;
    alert('Please fill all required fields. Missing: ' + args.formField[0].name);
    // Optionally focus or scroll to the field
  }
};
```

**Event Behavior Notes**

- Events triggered through the UI and programmatic APIs use the same event handlers.
- Property related events are raised immediately when changes occur.
- Validation events are triggered only during print or download operations.

[View Sample on GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples)

## See also

- [Form Designer overview](./overview)  
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)  
- [Create form fields](./manage-form-fields/create-form-fields)  
- [Edit form fields](./manage-form-fields/modify-form-fields)
- [Group form fields](./group-form-fields)  
- [Add custom data to form fields](./custom-data)  
- [Form Field Flags](./form-constrain) 
- [Form validation](./form-validation)  
- [Form fields API](./form-fields-api)