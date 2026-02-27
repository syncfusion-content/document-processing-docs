---
layout: post
title: Form filling in ASP.NET Core PDF Viewer Control | Syncfusion
description: Learn to view, fill, export, and import PDF form fields in Syncfusion ASP.NET Core PDF Viewer, including disabling interaction and handling signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Filling PDF Forms in ASP.NET Core PDF Viewer

The Syncfusion PDF Viewer supports three form-filling methods:

1. [Filling form fields programmatically](#fill-pdf-forms-programmatically)

  Form fields can be filled or updated programmatically using the [updateFormFieldsValue](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfieldsvalue) API. This approach is useful when form data must be set dynamically based on application logic.

2. [Form filling through the user interface](#fill-pdf-forms-through-the-user-interface)

  Users can fill PDF form fields directly through the UI by typing, selecting, or interacting with supported form elements.

3. [Importing form field data](#fill-pdf-forms-through-import-data)

  The PDF Viewer supports importing form field data into an existing document to prefill forms from external data sources.

## Fill PDF forms programmatically 

Form field values can be updated programmatically using the [updateFormFieldsValue](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfieldsvalue) API. This method allows setting or modifying values dynamically, without user interaction.

The following example demonstrates how to update PDF form field values programmatically:
 
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="updateBtn">Fill Form Fields</button>

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  document.getElementById('updateBtn').addEventListener('click', function () {
    var fields = (pdfviewer && pdfviewer.retrieveFormFields && pdfviewer.retrieveFormFields()) || (pdfviewer && pdfviewer.formFieldCollection) || [];
    var field = fields.find(function (f) { return f && f.name === 'name'; }) || fields[0];
    if (field) {
      field.value = 'John Doe';
      field.tooltip = 'First';
      pdfviewer.updateFormFieldsValue(field);
    } else {
      console.warn('No form fields available to update.');
    }
  });
});
</script>

{% endhighlight %}
{% endtabs %}

## Fill PDF forms through the User Interface

Users can fill PDF form fields directly through the UI. Clicking a form field enables entering or selecting values according to the field type.

![Form Filling](../../javascript-es6/images/FormFields.gif)

The PDF Viewer supports common form fields such as text boxes, check boxes, radio buttons, drop-down lists, list boxes, and signature fields. Filled values can be edited at any time, and the entered data is retained during the viewing session.

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/prefilledforms-cs1" %}

## Fill PDF forms through Import Data 

The PDF Viewer supports importing form field data into an existing document using the [importFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields) API. Imported data is mapped to corresponding form fields by name and displayed in the viewer; values can be edited through the UI if required.

```html
<button id="importJson">Import JSON</button>
```
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="importJson">Import JSON</button>

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  document.getElementById('importJson').addEventListener('click', function () {
    // The file for importing should be accessible at the given path or as a file stream depending on your integration
    pdfviewer.importFormFields('File', FormFieldDataFormat.Json);
  });
});
</script>

{% endhighlight %}
{% endtabs %}

For more details, see [Import Form Data](./import-export-form-fields/import-form-fields).

## How to get the filled data and store it to a backing system

Export filled form data from the PDF Viewer and store it in a backing system such as a database or file storage. Exported data can be re-imported later to restore form state.

For more details, see [Export Form Data](./import-export-form-fields/export-form-fields).

## How to Validate Form Fields using `validateFormFields` Event

The [validateFormFields](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ValidateFormFields) event in the Syncfusion PDF Viewer is triggered when a user tries to download or submit a form while validation is enabled. You can use the [retrieveFormFields()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#retrieveformfields) API to get all the form fields and check them one by one to see if any form fields values are empty.

Validation applies to all form field types. A textbox is empty if no text is entered, a list box or dropdown is empty if no item is selected, a signature or initial field is empty if not signed, and radio buttons or checkboxes are empty if none are chosen.

Enable [enableFormFieldsValidation](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormFieldsValidation) and wire the event to inspect each field and cancel actions when required fields are not filled.

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

  pdfviewer.enableFormFieldsValidation = true;

  pdfviewer.documentLoad = function () {
    // Add a required Email field
    pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Email is required'
    });

    // Add a required Phone field
    pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'Phone',
      bounds: { X: 146, Y: 300, Width: 220, Height: 24 },
      isRequired: true,
      tooltip: 'Phone number is required'
    });
  };

  // Validate only the added fields
  pdfviewer.validateFormFields = function (args) {
    var fields = pdfviewer.retrieveFormFields();
    fields.forEach(function (field) {
      if ((field.name === 'Email' || field.name === 'Phone') && !field.value) {
        alert(field.name + ' field cannot be empty.');
        args.isFormSubmitCancelled = true;
      }
    });
  };
});
</script>
{% endhighlight %}
{% endtabs %}

## See also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create](./manage-form-fields/create-form-fields), [edit](./manage-form-fields/modify-form-fields), [style](./manage-form-fields/customize-form-fields) and [remove](./manage-form-fields/remove-form-fields) form fields
- [Edit form fields](./manage-form-fields/edit-form-fields)
- [Group form fields](./group-form-fields)
- [Add custom data to form fields](./custom-data)
- [Form Constrain](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)
