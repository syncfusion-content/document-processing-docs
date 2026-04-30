---
layout: post
title: Form Field Events in ASP.NET Core Pdfviewer control | Syncfusion
description: Learn here all about different form field in Syncfusion ASP.NET Core Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Form Field Events
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field Events in ASP.NET Core

The Syncfusion ASP.NET Core PDF Viewer provides a set of form field events that report changes associated with creating, selecting, modifying, moving, resizing, or removing form fields. These events supply metadata related to the affected field and are raised during user interaction or programmatic updates.

Validation‑related events are emitted when the viewer performs operations that require confirmation of field completion, such as print or download actions.

## Supported PDF Form Field Events

The following table lists all supported form field events and their descriptions:

| Form Field events | Description | Arguments |
|---|---|---|
| [`formFieldAdd`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldAdd) | Triggered when a new form field is added, either through the Form Designer UI or programmatically. | `formFieldAddArgs` |
| [`formFieldClick`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldClick) | Fired when a form field is clicked in the viewer. | `formFieldClickArgs` |
| [`formFieldDoubleClick`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldDoubleClick) | Fired when a form field is double clicked. | `formFieldDoubleClickArgs` |
| [`formFieldFocusOut`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldFocusOut) | Triggered when a form field loses focus after editing. | `formFieldFocusOutEventArgs` |
| [`formFieldMouseLeave`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldMouseLeave) | Fired when the mouse pointer leaves a form field. | `formFieldMouseLeaveArgs` |
| [`formFieldMouseOver`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldMouseover) | Fired when the mouse pointer moves over a form field. | `formFieldMouseOverArgs` |
| [`formFieldMove`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldMove) | Triggered when a form field is moved to a new position. | `formFieldMoveArgs` |
| [`formFieldPropertiesChange`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldPropertiesChange) | Fired when any form field property changes, such as font, color, or constraint values. | `formFieldPropertiesChangeArgs` |
| [`formFieldRemove`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldRemove) | Triggered when a form field is deleted from the document. | `formFieldRemoveArgs` |
| [`formFieldResize`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldResize) | Fired when a form field is resized. | `formFieldResizeArgs` |
| [`formFieldSelect`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldSelect) | Fired when a form field is selected in the Form Designer. | `formFieldSelectArgs` |
| [`formFieldUnselect`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FormFieldUnselect) | Fired when a previously selected form field is unselected. | `formFieldUnselectArgs` |
| [`validateFormFields`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ValidateFormFields) | Fired when form field validation fails during print or download actions. | `validateFormFieldsArgs` |

## Example

You can wire up form field events on the PDF Viewer instance to execute custom logic when specific actions occur.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   formFieldAdd="onFormFieldAdd"
                   formFieldRemove="onFormFieldRemove"
                   formFieldPropertiesChange="onFormFieldPropertiesChange"
                   formFieldClick="onFormFieldClick"
                   formFieldDoubleClick="onFormFieldDoubleClick"
                   formFieldFocusOut="onFormFieldFocusOut"
                   formFieldMouseOver="onFormFieldMouseOver"
                   formFieldMouseLeave="onFormFieldMouseLeave"
                   formFieldMove="onFormFieldMove"
                   formFieldResize="onFormFieldResize"
                   formFieldSelect="onFormFieldSelect"
                   formFieldUnselect="onFormFieldUnselect"
                   validateFormFields="handleValidateFormFields"
                   enableFormFieldsValidation="true">
    </ejs-pdfviewer>
</div>

<script>
    // Form-field event handlers
    function onFormFieldAdd(args) {
        console.log('formFieldAdd', args);
    }

    function onFormFieldRemove(args) {
        console.log('formFieldRemove', args);
    }

    function onFormFieldPropertiesChange(args) {
        console.log('formFieldPropertiesChange', args);
    }

    function onFormFieldClick(args) {
        console.log('formFieldClick', args);
    }

    function onFormFieldDoubleClick(args) {
        console.log('formFieldDoubleClick', args);
    }

    function onFormFieldFocusOut(args) {
        console.log('formFieldFocusOut', args);
    }

    function onFormFieldMouseOver(args) {
        console.log('formFieldMouseOver', args);
    }

    function onFormFieldMouseLeave(args) {
        console.log('formFieldMouseLeave', args);
    }

    function onFormFieldMove(args) {
        console.log('formFieldMove', args);
    }

    function onFormFieldResize(args) {
        console.log('formFieldResize', args);
    }

    function onFormFieldSelect(args) {
        console.log('formFieldSelect', args);
    }

    function onFormFieldUnselect(args) {
        console.log('formFieldUnselect', args);
    }

    // Validation handler
    function handleValidateFormFields(args) {
        if (args && args.formField && args.formField.length > 0) {
            // Prevent the pending action (submit/print/etc.)
            args.cancel = true;
            alert('Please fill all required fields. Missing: ' + args.formField[0].name);
            // Optionally: focus/scroll to the field here
        }
    }
</script>
{% endhighlight %}
{% endtabs %}

**Event Behavior Notes**

- Events triggered through the UI and programmatic APIs use the same event handlers.
- Property related events are raised immediately when changes occur.
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