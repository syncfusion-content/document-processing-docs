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

This guide shows how to update, import, and validate PDF form fields in the ASP .Net Core PDF Viewer so you can pre-fill forms or accept user input.

**Outcome** Programmatically set field values, allow UI-driven filling, import form data, and validate fields on submit.

## Steps to fill forms

### Fill PDF forms programmatically 

Update form field values programmatically with [`updateFormFieldsValue`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfieldsvalue) API. 

Use the example below as a complete, runnable example for a small ASP .Net Core app. It retrieves form fields and updates a named field or the first available field.
 
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="updateBtn">Fill Form Fields</button>

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
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

**Expected result:** Clicking the *Fill Form Fields* button sets the first or named field's value to *John Doe* in the viewer.

### 2. Fill form fields via UI

Users can click form controls and enter/select values. Supported field types include textboxes, checkboxes, radio buttons, dropdowns, list boxes, and signature fields. Edits are retained during the viewing session.

![Form Filling](../../javascript-es6/images/FormFields.gif)

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/prefilledforms-cs1" %}

### 3. Fill form fields through imported data

Use [`importFormFields`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields)  to map external data into PDF fields by name. The example below shows how to trigger import from a button handler.

```html
<button id="importJson">Import JSON</button>
```
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="importJson">Import JSON</button>

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
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

## How to Validate Form Fields using `validateFormFields` Event

Enable [`enableFormFieldsValidation`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormFieldsValidation) and handle [`validateFormFields`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ValidateFormFields) to check required fields and cancel submission when necessary. Example below shows adding required fields via `formDesignerModule`and validating them.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
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

## Troubleshooting

- If fields are not editable, confirm `FormFields` module is injected into PDF Viewer.
- If examples fail to load, verify your [`resourceUrl`](https://helpej2.syncfusion.com/ASP .Net Core/documentation/api/pdfviewer#resourceurl) matches the installed PDF Viewer version.
- For import issues, ensure JSON keys match the PDF field `name` values.

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
