---
layout: post
title: Export form data in MVC PDF Viewer | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF Form Data from MVC PDF Viewer

The PDF Viewer allows you to export form field data in multiple formats for easy storage or integration. Supported formats:

- [FDF](#export-as-fdf)
- [XFDF](#export-as-xfdf)
- [JSON](#export-as-json)
- [JavaScript Object](#export-as-object) (for custom persistence)

## Available methods

- [exportFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfields)(destination?, format) — Exports data to a file in the specified format.
- [exportFormFieldsAsObject](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfieldsasobject)(format) — Exports data as a JavaScript object for custom handling.
- [importFormFields](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#importformfields)(sourceOrObject, format) — Import data back into the PDF.

## How to export

Use [exportFormFields()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfields) with an optional destination path and the format type.

### Export as FDF
The following example exports form field data as FDF.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>

<button id="exportFdf">Export FDF</button>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    document.getElementById('exportFdf').addEventListener('click', function () {
      // Destination is optional; if omitted the browser will prompt.
      viewer.exportFormFields('FormData', "Fdf");
    });
  });
</script>
{% endhighlight %}
{% endtabs %}

### Export as XFDF
The following example exports form field data as XFDF.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>

<button id="exportXfdf">Export XFDF</button>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    document.getElementById('exportXfdf').addEventListener('click', function () {
      viewer.exportFormFields('FormData', "Xfdf");
    });
  });
</script>
{% endhighlight %}
{% endtabs %}

### Export as JSON
The following example exports form field data as JSON.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>

<button id="exportJson">Export JSON</button>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    document.getElementById('exportJson').addEventListener('click', function () {
      viewer.exportFormFields('FormData', "Json");
    });
  });
</script>
{% endhighlight %}
{% endtabs %}

### Export as Object

Use [exportFormFieldsAsObject()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfieldsasobject) to obtain form data as a JavaScript object for database or API integration.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>

<button id="exportObj">Export Object</button>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    var exportedData = undefined;
    document.getElementById('exportObj').addEventListener('click', function () {
      viewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf).then(function (data) {
        exportedData = data; // Persist or send to server
        console.log('Exported object:', exportedData);
      });
      // Alternatives:
      // viewer.exportFormFieldsAsObject(FormFieldDataFormat.Xfdf).then(...)
      // viewer.exportFormFieldsAsObject(FormFieldDataFormat.Json).then(...)
    });
  });
</script>
{% endhighlight %}
{% endtabs %}

## Common Use Cases

- Save user-entered data to your server without altering the original PDF.
- Export as JSON for REST API integration.
- Export as FDF/XFDF for compatibility with other PDF tools.
- Export as Object to merge with app state or store securely.
- Automate exports after [validation](../form-validation) using [validateFormFields()](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ValidateFormFields)

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Import form fields](./import-form-fields)
- [Import Export Events](./import-export-events)
- [Create form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)