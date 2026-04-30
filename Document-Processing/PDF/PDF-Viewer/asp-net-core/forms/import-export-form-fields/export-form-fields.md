---
layout: post
title: Export form data in the ASP.NET Core PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion ASP.NET Core PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF Form Data from ASP.NET Core PDF Viewer

This guide shows concise, actionable steps to export PDF form field data for storage or integration. It covers:

- Exporting as [FDF](#3-export-as-fdf), [XFDF](#4-export-as-xfdf), and [JSON](#5-export-as-json) using [`exportFormFields()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfields).
- Exporting as a [JavaScript object](#6-export-as-a-javascript-object) using [`exportFormFieldsAsObject()`](https://ej2.xsyncfusion.com/javascript/documentation/api/pdfviewer/index-default#exportformfieldsasobject).

## Steps

### 1. Configure the PDF Viewer 

Set up the ASP.NET Core PDF Viewer in your Razor page.

{% tabs %}{% highlight cshtml tabtitle="Standalone" %}
<ejs-pdfviewer id="pdfviewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                style="height:680px">
</ejs-pdfviewer>
{% endhighlight %}{% endtabs %}

### 2. Initialize the Viewer instance

Access the PDF Viewer instance using JavaScript to call export methods.

{% tabs %}{% highlight cshtml tabtitle="Standalone" %}
<script>
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
</script>
{% endhighlight %}{% endtabs %}

### 3. Export as FDF

Use [`exportFormFields(destination?, FormFieldDataFormat.Fdf)`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfields) to download an FDF file.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<button id="exportFdf">Export FDF</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
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

### 4. Export as XFDF

Use [`FormFieldDataFormat.Xfdf`](https://ej2.syncfusion.com/documentation/api/pdfviewer/formfielddataformat) to export XFDF.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
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

### 5. Export as JSON

Use [`FormFieldDataFormat.Json`](https://ej2.syncfusion.com/documentation/api/pdfviewer/formfielddataformat) to export form data as a JSON file.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
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

### 6. Export as a JavaScript object

Use [`exportFormFieldsAsObject(format)`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject) to get data for API calls or storing in a database.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:640px; width:100%" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf">
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

## Complete example

The example below demonstrates form field export functionality with buttons for all supported formats in an ASP.NET Core Razor view.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
<button id="exportFdf">Export FDF</button>
<button id="exportXfdf">Export XFDF</button>
<button id="exportJson">Export JSON</button>
<button id="exportObj">Export Object</button>
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  
  document.getElementById('exportFdf').addEventListener('click', function() {
    viewer.exportFormFields('FormData', ej2.pdfviewer.FormFieldDataFormat.Fdf);
  });
  
  document.getElementById('exportXfdf').addEventListener('click', function() {
    viewer.exportFormFields('FormData', ej2.pdfviewer.FormFieldDataFormat.Xfdf);
  });
  
  document.getElementById('exportJson').addEventListener('click', function() {
    viewer.exportFormFields('FormData', ej2.pdfviewer.FormFieldDataFormat.Json);
  });
  
  document.getElementById('exportObj').addEventListener('click', function() {
    viewer.exportFormFieldsAsObject().then(function(data) {
      console.log('Exported object:', data);
    });
  });
}
</script>
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

## Troubleshooting

- Ensure the PDF Viewer is properly initialized with the form field services enabled in your ASP.NET Core application.
- Confirm the viewer instance is accessible via `document.getElementById('pdfviewer').ej2_instances[0]` before calling export methods.
- If exports fail in restrictive browsers, check popup/download settings and CORS for hosted endpoints.
- For server-side persistence, use [`exportFormFieldsAsObject()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject) and send the result to your API endpoint.
- Verify that the document path points to a valid PDF with form fields.

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