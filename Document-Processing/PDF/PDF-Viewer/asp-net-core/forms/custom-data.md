---
layout: post
title: Add custom data to form fields in ASP.NET Core Pdf Viewer | Syncfusion
description: Learn how to attach, update, and read custom Data on PDF form fields using the Form Designer UI and APIs in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add Custom Data to PDF Form Fields in ASP.NET Core PDF Viewer

The Syncfusion ASP.NET Core PDF Viewer allows attaching custom application-specific data to form fields using the **customData** property. This enables associating business identifiers, tags, validation hints, or workflow metadata with form fields.

Custom data remains linked to the form field throughout the viewer session and can be accessed or updated whenever the field is queried or modified.

This page explains:
- [Adding custom data when creating form fields](#add-custom-data-while-creating-pdf-form-fields)
- [Defining default custom data for fields created using the UI](#set-default-custom-data-for-pdf-form-fields-added-using-ui)
- [Updating or replacing custom data for existing fields](#update-or-replace-pdf-form-field-custom-data)
- [Reading custom data from form fields](#read-custom-data-from-pdf-form-fields)
- [Applying best practices when using custom data](#best-practices)

**Key Points**
- **customData** is a free-form object; its structure is defined by the application.
- Use only serializable values such as objects, arrays, strings, numbers, and booleans.
- Custom data does not affect field appearance or behavior unless consumed by application logic.

## Add Custom Data While Creating PDF Form Fields

Custom data can be attached at the time of field creation by passing a **customData** object in the settings parameter of **addFormField()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  pdfviewer.documentLoad = function () {
    var meta = { businessId: 'C-1024', tags: ['profile','kiosk'], requiredRole: 'admin' };
    pdfviewer.formDesignerModule.addFormField('Textbox', {
      name: 'Email',
      bounds: { X: 146, Y: 229, Width: 200, Height: 24 },
      customData: meta
    });
  };
});
</script>
{% endhighlight %}
{% endtabs %}

## Set Default Custom Data for PDF Form Fields Added Using UI

When users add form fields using the [Form Designer toolbar](../toolbar-customization/form-designer-toolbar), default **customData** can be defined so that newly created fields automatically inherit it. Default custom data can be configured using per-field settings objects such as:

- [textFieldSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextFieldSettings)
- [passwordFieldSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PasswordFieldSettings)
- [checkBoxFieldSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CheckBoxFieldSettings)
- [radioButtonFieldSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RadioButtonFieldSettings)
- [listBoxFieldSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ListBoxFieldSettings)
- [dropDownFieldSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DropDownFieldSettings)
- [signatureFieldSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_SignatureFieldSettings)
- [initialFieldSettings](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_InitialFieldSettings)

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  // Example for textbox defaults
  pdfviewer.textFieldSettings = {
    name: 'Textbox',
    customData: { group: 'contact', createdBy: 'designer', requiredRole: 'user' }
  };

  // Example for checkbox defaults
  pdfviewer.checkBoxFieldSettings = {
    name: 'Checkbox',
    customData: { consentType: 'marketing', defaultChecked: false }
  };
});
</script>
{% endhighlight %}
{% endtabs %}

## Update or Replace PDF Form Field Custom Data

The **customData** of an existing form field can be modified using the [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) method. The field can be identified using its object reference or field ID.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  var fields = pdfviewer.retrieveFormFields();
  var target = fields.find(function (f) { return f.name === 'Email'; });
  if (target) {
    var merged = Object.assign({}, target.customData || {}, { updatedAt: Date.now(), verified: true });
    pdfviewer.formDesignerModule.updateFormField(target, { customData: merged });
  }
});
</script>
{% endhighlight %}
{% endtabs %}

**Tip:**
New values should be merged with the existing **customData** object before calling [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to avoid overwriting previously stored data.

## Read Custom Data from PDF Form Fields

The **customData** property can be accessed from any form field at any point in the application flow, such as:
- After the document is loaded.
- During save or submit operations.
- While performing validation or conditional routing.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  pdfviewer.documentLoad = function () {
    var fields = pdfviewer.retrieveFormFields();
    fields.forEach(function (f) {
      console.log('Field:', f.name, 'customData:', f.customData);
      if (f.customData && f.customData.requiredRole === 'admin') {
        // mark field for special handling
      }
    });
  };
});
</script>
{% endhighlight %}
{% endtabs %}

## Best Practices

- Treat **customData** as application metadata, not display data.
- Use it to drive business rules, validation logic, and workflow decisions.
- Keep data minimal and structured for easy processing.
- When cloning or copying form fields, ensure **customData** is copied or updated as required.

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

## See Also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./overview-create-forms)
- [Group form fields](./group-form-fields)
- [Form flags](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)