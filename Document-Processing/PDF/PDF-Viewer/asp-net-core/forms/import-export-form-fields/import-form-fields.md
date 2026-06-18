---
layout: post
title: Import form data in the ASP.NET Core PDF Viewer component | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and from an object) using the Syncfusion ASP.NET Core PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import PDF Form Data into the ASP.NET Core PDF Viewer

This guide shows how to import form field values into an already loaded PDF in the EJ2 ASP.NET Core PDF Viewer. **Supported import formats**: FDF, XFDF, JSON, and importing from a JavaScript object.

## Steps to import data

1. Configure the PDF Viewer component in your ASP.NET Core Razor view using the `<ejs-pdfviewer>` tag.

2. Call the [importFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields)(sourceOrObject, format)
 method using JavaScript, where `format` is one of `FormFieldDataFormat.Fdf`, `FormFieldDataFormat.Xfdf`, or `FormFieldDataFormat.Json`. The `data` parameter may be a file path (for server-based imports), a base64 string, or a JavaScript object mapping field names to values.

3. Verify the form fields are populated after the import completes. For server-backed imports, ensure [`serviceUrl`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#serviceurl) your ASP.NET Core backend is configured to handle the import file and is accessible.

## Example

The example below provides an ASP.NET Core Razor view with buttons to import FDF, XFDF, JSON, and from an object. Replace the import file identifiers with your file path or implement a file upload to pass the form data.

{% tabs %}{% highlight cshtml tabtitle="Standalone" %}
@{
    ViewBag.Title = "PDF Viewer - Import Form Fields";
}

<div style="margin-bottom: 12px">
    <button type="button" onclick="importFdf()" style="margin-right: 8px">Import FDF</button>
    <button type="button" onclick="importXfdf()" style="margin-right: 8px">Import XFDF</button>
    <button type="button" onclick="importJson()" style="margin-right: 8px">Import JSON</button>
    <button type="button" onclick="importFromObject()">Import from Object</button>
</div>

<div style="width:100%;height:680px">
    <ejs-pdfviewer id="pdfviewer"
                    documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                    style="height:680px">
    </ejs-pdfviewer>
</div>

<script>
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];

    function importFdf() {
        // Replace 'File' with your FDF file path or base64 string
        viewer.importFormFields('File', window.ej2_formFieldDataFormat.Fdf);
    }

    function importXfdf() {
        // Replace 'File' with your XFDF file path or base64 string
        viewer.importFormFields('File', window.ej2_formFieldDataFormat.Xfdf);
    }

    function importJson() {
        // Replace 'File' with your JSON file path or base64 string
        viewer.importFormFields('File', window.ej2_formFieldDataFormat.Json);
    }

    function importFromObject() {
        // Import from a JavaScript object (fieldName: value)
        var formDataObject = {
            'fullname': 'Jane Doe',
            'email': 'jane.doe@example.com',
            'agreeTerms': 'yes'
        };
        viewer.importFormFields(JSON.stringify(formDataObject), window.ej2_formFieldDataFormat.Json);
    }
</script>
{% endhighlight %}{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

**Expected result**: The loaded PDF's interactive form fields are populated with the values from the imported file/object. For object imports, fields matching the object keys receive the provided values.

## Troubleshooting

- If imports do not populate fields, confirm the field names in the source match the PDF form field names.
- For file-based imports, ensure the import file is accessible to your ASP.NET Core application.
- If using a base64 string, encode it properly before passing it to `importFormFields()`.
- Check browser console for errors when the viewer attempts to fetch import files.

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)
## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Export form fields](./export-form-fields)
- [Import Export Events](./import-export-events)
- [Create Edit form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)