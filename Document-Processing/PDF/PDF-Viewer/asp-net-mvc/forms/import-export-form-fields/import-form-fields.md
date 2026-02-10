---
layout: post
title: Import form data in MVC PDF Viewer | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON) using the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

## Import PDF Form Data into MVC PDF Viewer

The **PDF Viewer** lets you import values into interactive form fields in the currently loaded PDF. You can import data from these formats:

- [FDF](#import-as-fdf)
- [XFDF](#import-xfdf)
- [JSON](#import-json)

## API to use
- [importFormFields](https://help.syncfusion.com/aspnetmvc/pdf-viewer/api/pdfviewer#importformfields)(sourceOrObject, format)

Note: If you’re using a **server-backed viewer**, include `.ServiceUrl(...)` in the helper so the viewer can access server APIs during import/export.

### Import FDF

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").ServiceUrl("https://ej2services.syncfusion.com/production/web-services/api/pdfviewer").Render()
</div>

<button id="importFdf">Import FDF</button>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    document.getElementById('importFdf').addEventListener('click', function () {
      // The file for importing should be accessible at the given path or provided as a stream
      viewer.importFormFields('File', "Fdf");
    });
  });
</script>
{% endhighlight %}
{% endtabs %}

### Import XFDF

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").ServiceUrl("https://ej2services.syncfusion.com/production/web-services/api/pdfviewer").Render()
</div>

<button id="importXfdf">Import XFDF</button>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    document.getElementById('importXfdf').addEventListener('click', function () {
      viewer.importFormFields('File', "Xfdf");
    });
  });
</script>
{% endhighlight %}
{% endtabs %}

### Import JSON

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").ServiceUrl("https://ej2services.syncfusion.com/production/web-services/api/pdfviewer").Render()
</div>

<button id="importJson">Import JSON</button>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    document.getElementById('importJson').addEventListener('click', function () {
      viewer.importFormFields('File', "Json");
    });
  });
</script>
{% endhighlight %}
{% endtabs %}

## Common Use Cases

- Pre-fill application forms from a database using JSON.
- Migrate data from other PDF tools using FDF/XFDF.
- Restore user progress saved locally or on the server.
- Combine with validation to block print/download until required fields are completed.

[View Sample on GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

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