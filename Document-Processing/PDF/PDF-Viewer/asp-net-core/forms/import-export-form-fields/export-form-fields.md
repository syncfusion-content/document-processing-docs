---
layout: post
title: Export form data in the ASP.NET Core PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion ASP.NET Core PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF Form Data from ASP.NET Core PDF Viewer

The PDF Viewer allows you to export form field data in multiple formats for easy storage or integration. Supported formats:

- [FDF](#export-as-fdf)
- [XFDF](#export-as-xfdf)
- [JSON](#export-as-json)
- [JavaScript Object](#export-as-object) (for custom persistence)

## Available methods

- [exportFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfields)(destination?, format) — Exports data to a file in the specified format.
- [exportFormFieldsAsObject](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject)(format) — Exports data as a JavaScript object for custom handling.
- [importFormFields](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#importformfields)(sourceOrObject, format) — Import data back into the PDF.

## How to export

Use [exportFormFields()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfields) with an optional destination path and the format type.

### Export as FDF
The following example exports form field data as FDF.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="exportFdf">Export FDF</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('exportFdf').addEventListener('click', function () {
    if (!pdfviewer) { console.warn('PDF Viewer not ready'); return; }
    // Destination is optional; if omitted the browser will prompt.
    pdfviewer.exportFormFields('FormData', 'Fdf');
  });
});
</script>
{% endhighlight %}
{% endtabs %}

### Export as XFDF
The following example exports form field data as XFDF.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<button id="exportXfdf">Export XFDF</button>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('exportXfdf').addEventListener('click', function () {
    if (!pdfviewer) { console.warn('PDF Viewer not ready'); return; }
    pdfviewer.exportFormFields('FormData', 'Xfdf');
  });
});
</script>
{% endhighlight %}
{% endtabs %}

### Export as JSON
The following example exports form field data as JSON.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<button id="exportJson">Export JSON</button>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  document.getElementById('exportJson').addEventListener('click', function () {
    if (!pdfviewer) { console.warn('PDF Viewer not ready'); return; }
    pdfviewer.exportFormFields('FormData', 'Json');
  });
});
</script>
{% endhighlight %}
{% endtabs %}

### Export as Object

Use [exportFormFieldsAsObject()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject) to obtain form data as a JavaScript object for database or API integration.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<button id="exportObj">Export Object</button>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  var exportedData;
  document.getElementById('exportObj').addEventListener('click', function () {
    if (!pdfviewer) { console.warn('PDF Viewer not ready'); return; }
    pdfviewer.exportFormFieldsAsObject('Fdf').then(function (data) {
      exportedData = data; // Persist or send to server
      console.log('Exported object:', exportedData);
    });
    // Alternatives:
    // pdfviewer.exportFormFieldsAsObject('Xfdf').then(...)
    // pdfviewer.exportFormFieldsAsObject('Json').then(...)
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
- Automate exports after [validation](../form-validation) using [validateFormFields()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#validateformfields)

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

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