---
layout: post
title: Form Field Events in Vue PDF Viewer | Syncfusion
description: Learn here all about form field events in the Syncfusion Vue PDF Viewer component and how to handle them.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PDF Viewer Form Field Events in Vue

The Syncfusion **Vue PDF Viewer** provides a comprehensive set of **form field events** that allow developers to track user interactions, respond to form changes, and implement custom business logic. These events can be used for scenarios such as [validation](./form-validation), **UI updates**, **logging**, and **workflow automation**.

Form field events are triggered during actions such as adding, selecting, modifying, moving, resizing, and removing form fields.

## Supported PDF Form Field Events

The following table lists all supported form field events and their descriptions:

| Form Field events | Description |
|---|---|
| [formFieldAdd](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldAddArgs) | Triggered when a new form field is added, either through the Form Designer UI or programmatically. |
| [formFieldClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldClickArgs) | Fired when a form field is clicked in the viewer. |
| [formFieldDoubleClick](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldDoubleClickArgs) | Fired when a form field is double clicked. |
| [formFieldFocusOut](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldFocusOutEventArgs) | Triggered when a form field loses focus after editing. |
| [formFieldMouseLeave](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldMouseLeaveArgs) | Fired when the mouse pointer leaves a form field. |
| [formFieldMouseOver](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldMouseoverArgs) | Fired when the mouse pointer moves over a form field. |
| [formFieldMove](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldMoveArgs) | Triggered when a form field is moved to a new position. |
| [formFieldPropertiesChange](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldPropertiesChangeArgs) | Fired when any form field property changes, such as font, color, or constraint values. |
| [formFieldRemove](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldRemoveArgs) | Triggered when a form field is deleted from the document. |
| [formFieldResize](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldResizeArgs) | Fired when a form field is resized. |
| [formFieldSelect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldSelectArgs) | Fired when a form field is selected in the Form Designer. |
| [formFieldUnselect](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/formFieldUnselectArgs) | Fired when a previously selected form field is unselected. |
| [validateFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/validateFormFieldsArgs) | Fired when form field validation fails during print or download actions. |

**Common Use Cases**

Form field events can be used to:
- Validate form data before printing or downloading
- Track user interaction with form fields
- Update UI elements dynamically
- Log form changes for auditing
- Trigger workflow actions based on field changes
- Enforce business rules during form editing

## Handle PDF Form Field Events

Form field events can be wired on the PDF Viewer instance to execute custom logic when specific actions occur. The following Vue Composition API example demonstrates wiring up the events and handling validation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      @formFieldAdd="onFormFieldAdd"
      @formFieldRemove="onFormFieldRemove"
      @formFieldPropertiesChange="onFormFieldPropertiesChange"
      @formFieldClick="onFormFieldClick"
      @formFieldDoubleClick="onFormFieldDoubleClick"
      @formFieldFocusOut="onFormFieldFocusOut"
      @formFieldMouseOver="onFormFieldMouseOver"
      @formFieldMouseLeave="onFormFieldMouseLeave"
      @formFieldMove="onFormFieldMove"
      @formFieldResize="onFormFieldResize"
      @formFieldSelect="onFormFieldSelect"
      @formFieldUnselect="onFormFieldUnselect"
      @validateFormFields="onValidateFormFields"
      style="height:640px" />
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    onFormFieldAdd(args) { console.log('formFieldAdd', args); },
    onFormFieldRemove(args) { console.log('formFieldRemove', args); },
    onFormFieldPropertiesChange(args) { console.log('formFieldPropertiesChange', args); },
    onFormFieldClick(args) { console.log('formFieldClick', args); },
    onFormFieldDoubleClick(args) { console.log('formFieldDoubleClick', args); },
    onFormFieldFocusOut(args) { console.log('formFieldFocusOut', args); },
    onFormFieldMouseOver(args) { console.log('formFieldMouseOver', args); },
    onFormFieldMouseLeave(args) { console.log('formFieldMouseLeave', args); },
    onFormFieldMove(args) { console.log('formFieldMove', args); },
    onFormFieldResize(args) { console.log('formFieldResize', args); },
    onFormFieldSelect(args) { console.log('formFieldSelect', args); },
    onFormFieldUnselect(args) { console.log('formFieldUnselect', args); },
    onValidateFormFields(args) {
      if (args && args.formField && args.formField.length > 0) {
        args.cancel = true;
        alert('Please fill all required fields. Missing: ' + args.formField[0].name);
        // Optionally focus or scroll to the field via EJ2 instance
        //const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      }
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

**Event Behavior Notes**

- Events triggered through the UI and programmatic APIs use the same event handlers.
- Property related events are raised immediately when changes occur.
- Validation events are triggered only during print or download operations.

[View Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

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