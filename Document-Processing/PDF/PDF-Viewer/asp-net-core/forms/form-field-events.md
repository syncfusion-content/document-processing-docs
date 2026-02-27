---
layout: post
title: Form Field Events in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about different form field events in the Syncfusion ASP.NET Core PDF Viewer component and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field Events in ASP.NET Core

The Syncfusion ASP.NET Core PDF Viewer provides comprehensive form field events for tracking user interactions, responding to form changes, and implementing custom business logic. Events support scenarios such as [validation](./form-validation), UI updates, logging, and workflow automation.

Form field events are triggered when adding, selecting, modifying, moving, resizing, and removing form fields.

## Supported PDF Form Field Events

The following table lists all supported form field events and their descriptions:

| Form Field events | Description |
|---|---|
| [formFieldAdd](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldAdd) | Triggered when a new form field is added, either through the Form Designer UI or programmatically. |
| [formFieldClick](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldClick) | Fired when a form field is clicked in the viewer. |
| [formFieldDoubleClick](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldDoubleClick) | Fired when a form field is double clicked. |
| [formFieldFocusOut](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldFocusOut) | Triggered when a form field loses focus after editing. |
| [formFieldMouseLeave](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldMouseLeave) | Fired when the mouse pointer leaves a form field. |
| [formFieldMouseOver](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldMouseover) | Fired when the mouse pointer moves over a form field. |
| [formFieldMove](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldMove) | Triggered when a form field is moved to a new position. |
| [formFieldPropertiesChange](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldPropertiesChange) | Fired when any form field property changes, such as font, color, or constraint values. |
| [formFieldRemove](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldRemove) | Triggered when a form field is deleted from the document. |
| [formFieldResize](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldResize) | Fired when a form field is resized. |
| [formFieldSelect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldSelect) | Fired when a form field is selected in the Form Designer. |
| [formFieldUnselect](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldUnselect) | Fired when a previously selected form field is unselected. |
| [validateFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ValidateFormFields) | Fired when form field validation fails during print or download actions. |

**Common Use Cases**

Form field events support:
- Validating form data before printing or downloading.
- Tracking user interactions with form fields.
- Updating UI elements dynamically.
- Logging form changes for auditing.
- Triggering workflow actions based on field changes.
- Enforcing business rules during form editing.

## Handle PDF Form Field Events

Form field events can be wired on the PDF Viewer instance to execute custom logic when specific actions occur.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  if (!pdfviewer) return;

  // Basic examples for common form-field events
  pdfviewer.formFieldAdd = function (args) { console.log('formFieldAdd', args); };
  pdfviewer.formFieldRemove = function (args) { console.log('formFieldRemove', args); };
  pdfviewer.formFieldPropertiesChange = function (args) { console.log('formFieldPropertiesChange', args); };

  // Additional events from the table
  pdfviewer.formFieldClick = function (args) { console.log('formFieldClick', args); };
  pdfviewer.formFieldDoubleClick = function (args) { console.log('formFieldDoubleClick', args); };
  pdfviewer.formFieldFocusOut = function (args) { console.log('formFieldFocusOut', args); };
  pdfviewer.formFieldMouseOver = function (args) { console.log('formFieldMouseOver', args); };
  pdfviewer.formFieldMouseLeave = function (args) { console.log('formFieldMouseLeave', args); };
  pdfviewer.formFieldMove = function (args) { console.log('formFieldMove', args); };
  pdfviewer.formFieldResize = function (args) { console.log('formFieldResize', args); };
  pdfviewer.formFieldSelect = function (args) { console.log('formFieldSelect', args); };
  pdfviewer.formFieldUnselect = function (args) { console.log('formFieldUnselect', args); };

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
});
</script>

{% endhighlight %}
{% endtabs %}

**Event Behavior Notes**

- Events triggered through the UI and programmatic APIs use the same event handlers.
- Property-related events are raised immediately when changes occur.
- Validation events are triggered only during print or download operations.

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

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