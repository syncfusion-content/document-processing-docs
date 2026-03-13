---
layout: post
title: Form validation in the Vue PDF Viewer component | Syncfusion
description: Learn how to enable built-in form field validation and validate missing required fields in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Validate PDF Form Fields in Vue PDF Viewer

The Syncfusion **Vue PDF Viewer** provides built-in support for **validating form fields** before end users perform actions such as **printing**, **downloading**, or **submitting** a PDF document. Validation ensures that all required form fields are completed before allowing these actions to proceed.

## How PDF Form Validation Works

Form field validation follows this flow:
 - Enable validation using the [enableFormFieldsValidation](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#enableformfieldsvalidation) property.
 - Handle the [validateFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#validateformfields) event to determine which required fields are not filled.
 - When validation is enabled and an end user attempts to print, download, or submit the document:
 - The [validateFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#validateformfields) event is triggered.
 - Unfilled required fields are listed in `args.nonFillableFields`.
 - The application can cancel the action, display an error message, or move focus to an invalid field.

## Enable PDF Form Field Validation

Enable validation by setting the [enableFormFieldsValidation](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#validateformfields) property to `true` and handling the `validateFormFields` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 640px"
      @documentLoad="onDocumentLoad"
    />
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
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    onDocumentLoad() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;

      // 1) Default for new Textbox fields
      pdfviewer.textFieldSettings = { isRequired: true };

      // 2) Validation wiring
      pdfviewer.enableFormFieldsValidation = true;
      pdfviewer.validateFormFields = (args) => {
        // Triggers when required fields are empty on submit/validate
        if (args && args.formField && args.formField.length > 0) {
          alert('Please fill all required fields. Missing: ' + args.formField[0].name);
        }
      };

      // 3) Creation (add a Textbox form field)
      pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'Email',
        bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
        isRequired: true,
        tooltip: 'Email is required',
      });
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## Mark Fields as Required

Only fields marked as **required** participate in validation. Use the `isRequired` property when creating or updating a form field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
// (inside your `onDocumentLoad` method)
const pdfviewer = this.$refs.pdfviewer.ej2Instances;
pdfviewer.formDesignerModule.addFormField('Textbox', {
  name: 'Email',
  bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
  isRequired: true,
  tooltip: 'Email is required',
});
{% endhighlight %}
{% endtabs %}

## Handle PDF Form Validation Results

In the [validateFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#validateformfields) event, the application can control the behavior when fields are missing. Typical actions include:
- Cancel the print or download operation
- Display an error message to the end user
- Set focus to the first unfilled required field

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
// (inside your `onDocumentLoad` or mounted handler)
const pdfviewer = this.$refs.pdfviewer.ej2Instances;
pdfviewer.enableFormFieldsValidation = true;
pdfviewer.validateFormFields = (args) => {
  if (args && args.formField && args.formField.length > 0) {
    // Example: prevent the pending action and notify the end user
    args.cancel = true;
    alert('Please fill all required fields. Missing: ' + args.formField[0].name);
    // Optionally focus or scroll to the field
  }
};
{% endhighlight %}
{% endtabs %}

## Tips

- Use `isRequired` to clearly mark mandatory fields.
- Validation is triggered only during [print](../print), [download](../download), or **submit** actions.
- For custom validation logic (such as validating an email format):
  - Retrieve all form fields using [retrieveFormFields()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#retrieveformfields).
  - Apply custom checks before allowing the action to proceed.

## See Also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./manage-form-fields/create-form-fields)
- [Modify form fields](./manage-form-fields/modify-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to PDF form fields](./custom-data)
- [Form flags](./form-constrain)
- [Form fields API](./form-fields-api)