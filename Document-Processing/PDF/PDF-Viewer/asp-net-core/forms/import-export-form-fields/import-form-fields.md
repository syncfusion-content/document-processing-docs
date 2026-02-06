---
layout: post
title: Import form data in the ASP.NET Core PDF Viewer component | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and from an object) using the Syncfusion ASP.NET Core PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import PDF Form Data into ASP.NET Core PDF Viewer

The **PDF Viewer** lets you import values into interactive form fields in the currently loaded PDF. You can import data from these formats:

- [FDF](#import-as-fdf)
- [XFDF](#import-xfdf)
- [JSON](#import-json)

## API to use
- [importFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields)(sourceOrObject, format)

N>If you’re using a **server-backed viewer**, set serviceUrl before importing.

### Import FDF

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<button id="importFdf">Import FDF</button>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('importFdf').addEventListener('click', function () {
    if (!pdfviewer) { console.warn('PDF Viewer not ready'); return; }
    // The file for importing should be accessible at the given path or as a file stream depending on your integration
    pdfviewer.importFormFields('File', 'Fdf');
  });
});
</script>
{% endhighlight %}
{% endtabs %}

### Import XFDF

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="importXfdf">Import XFDF</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('importXfdf').addEventListener('click', function () {
    if (!pdfviewer) { console.warn('PDF Viewer not ready'); return; }
    // The file for importing should be accessible at the given path or as a file stream depending on your integration
    pdfviewer.importFormFields('File', 'Xfdf');
  });
});
</script>
{% endhighlight %}
{% endtabs %}

### Import JSON

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="importJson">Import JSON</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('importJson').addEventListener('click', function () {
    if (!pdfviewer) { console.warn('PDF Viewer not ready'); return; }
    // The file for importing should be accessible at the given path or as a file stream depending on your integration
    pdfviewer.importFormFields('File', 'Json');
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