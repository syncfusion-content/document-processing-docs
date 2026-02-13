---
layout: post
title: Form Field Events in JavaScript PDF Viewer control | Syncfusion
description: Learn here all about different form field events in the Syncfusion JavaScript PDF Viewer component and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form field events in JavaScript PDF Viewer

The Syncfusion **JavaScript PDF Viewer** exposes form field events that let developers react to user interactions, respond to form changes, and implement custom business logic. Use these events for validation, UI updates, logging, and workflow automation.

Form field events are triggered when a field is added, selected, modified, moved, resized, or removed.

## Supported PDF form field events

The following table lists the supported form field events and their descriptions.

| Form field events | Description |
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

**Common use cases**

Form field events can be used to:
- Validate form data before printing or downloading
- Track user interaction with form fields
- Update UI elements dynamically
- Log form changes for auditing
- Trigger workflow actions based on field changes
- Enforce business rules during form editing

## Handle PDF Form Field Events

You can wire up form field events on the PDF Viewer instance to execute custom logic when specific actions occur.

```js
var pdfviewer = new PdfViewer({
  // Basic examples for common form-field events
  formFieldAdd: function (args) { console.log('formFieldAdd', args); },
  formFieldRemove: function (args) { console.log('formFieldRemove', args); },
  formFieldPropertiesChange: function (args) { console.log('formFieldPropertiesChange', args); },

  // Additional events from the table
  formFieldClick: function (args) { console.log('formFieldClick', args); },
  formFieldDoubleClick: function (args) { console.log('formFieldDoubleClick', args); },
  formFieldFocusOut: function (args) { console.log('formFieldFocusOut', args); },
  formFieldMouseOver: function (args) { console.log('formFieldMouseOver', args); },
  formFieldMouseLeave: function (args) { console.log('formFieldMouseLeave', args); },
  formFieldMove: function (args) { console.log('formFieldMove', args); },
  formFieldResize: function (args) { console.log('formFieldResize', args); },
  formFieldSelect: function (args) { console.log('formFieldSelect', args); },
  formFieldUnselect: function (args) { console.log('formFieldUnselect', args); }
});

// Validation Event
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = function (args) {
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

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples)

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