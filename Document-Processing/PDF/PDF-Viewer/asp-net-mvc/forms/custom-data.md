---
layout: post
title: Add custom data to form fields in MVC PDF Viewer | Syncfusion
description: Learn how to attach, update, and read custom data on PDF form fields using the Form Designer UI and APIs in the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add Custom Data to PDF Form Fields in MVC PDF Viewer

The **Syncfusion MVC PDF Viewer** allows you to attach **custom application-specific data** to form fields by using the customData property. This enables you to associate business identifiers, tags, validation hints, or workflow metadata with form fields.

The custom data remains linked to the form field throughout the viewer session and can be accessed or updated whenever the field is queried or modified.

This page explains how to:
- [Add custom data when creating form fields](#add-custom-data-while-creating-pdf-form-fields)
- [Define default custom data for fields created using the UI](#set-default-custom-data-for-pdf-form-fields-added-using-ui)
- [Update or replace custom data for existing fields](#update-or-replace-pdf-form-field-custom-data)
- [Read custom data from form fields](#read-custom-data-from-pdf-form-fields)
- [Apply best practices when using custom data](#best-practices)

**Key Points**
- customData is a **free form object**; you control its structure.
- Use only **serializable values** such as objects, arrays, strings, numbers, and booleans.
- Custom data does not affect the field appearance or behavior unless consumed by your application logic.

## Add Custom Data While Creating PDF Form Fields

You can attach custom data at the time of field creation by passing a **customData** object in the settings parameter of **addFormField()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
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

When users add form fields using the [Form Designer toolbar](../toolbar-customization/form-designer-toolbar), you can define default customData so that newly created fields automatically inherit it. Default custom data can be configured using per-field settings objects such as:

- [textFieldSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextFieldSettings)
- [passwordFieldSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PasswordFieldSettings)
- [checkBoxFieldSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_CheckBoxFieldSettings)
- [radioButtonFieldSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RadioButtonFieldSettings)
- [listBoxFieldSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ListBoxFieldSettings)
- [dropDownFieldSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DropDownFieldSettings)
- [signatureFieldSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_SignatureFieldSettings)
- [initialFieldSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_InitialFieldSettings)

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
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

You can modify the customData of an existing form field by using the [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) method. The field can be identified using either its object reference or field ID.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
            // Retrieve existing fields
            var fields = pdfviewer.retrieveFormFields();
            var target = fields.find(function (f) { return f.name === 'Email'; });

            if (target) {
                // Merge with existing customData to avoid overwriting
                var merged = Object.assign({}, target.customData || {}, { updatedAt: Date.now(), verified: true });
                pdfviewer.formDesignerModule.updateFormField(target, { customData: merged });
            }
        });
    </script>

{% endhighlight %}
{% endtabs %}

**Tip:**
Merge new values with the existing customData object before calling [updateFormField()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#updateFormField) to avoid overwriting previously stored data.

## Read Custom Data from PDF Form Fields

You can access the customData property from any form field at any point in your application flow, such as:
- After the document is loaded
- During save or submit operations
- While performing validation or conditional routing

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
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

- Treat customData as application metadata, not display data.
- Use it to drive business rules, validation logic, and workflow decisions.
- Keep the data minimal and structured for easy processing.
- When cloning or copying form fields, ensure customData is copied or updated as required.

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

## See Also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form flags](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)