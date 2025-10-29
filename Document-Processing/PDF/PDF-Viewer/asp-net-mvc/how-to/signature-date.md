---
layout: post
title: Add Date to Signature Field in ASP.NET MVC PDF Viewer
description: Learn how to add the current date to the signature text in the Syncfusion ASP.NET MVC PDF Viewer using the updateFormFieldsValue method.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Add Date to Signature Field

In the PDF Viewer, you can programmatically add the current date alongside signature text for compliance, audit trails, or legal documentation. Use the `updateFormFieldsValue()` method to modify the signature field value after retrieving it with `retrieveFormFields()`.

Use a PDF with an existing signature field. Call `retrieveFormFields()` to get the field, update the `value` property with text and date using `new Date()`, then apply changes with `updateFormFieldsValue()`.

Follow these steps to add a date to the signature field.

**Step 1:** Set up a PDF Viewer sample by following the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/). Ensure the PDF document contains at least one signature field.

**Step 2:** Place a button in your view to trigger the signature update, and include the JavaScript function to handle it.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<div>
    <div style="width:100%;height:600px">
        <button type="button" onclick="signatureWithDate()">Add Signature with the time</button>
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
    </div>
</div>

<script>
    function signatureWithDate() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var formFields = viewer.retrieveFormFields();
        formFields[0].signatureType = 'Type';
        formFields[0].value = 'Syncfusion \n' + new Date();
        viewer.updateFormFieldsValue(formFields[0]);
    }
</script>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<div>
    <div style="width:100%;height:600px">
        <button type="button" onclick="signatureWithDate()">Add Signature with the time</button>
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
</div>

<script>
    function signatureWithDate() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var formFields = viewer.retrieveFormFields();
        formFields[0].signatureType = 'Type';
        formFields[0].value = 'Syncfusion \n' + new Date();
        viewer.updateFormFieldsValue(formFields[0]);
    }
</script>
```
{% endhighlight %}
{% endtabs %}

View the complete sample in the [GitHub repository](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/EJ2-67373-sample/How%20to/Add%20date%20with%20the%20signature).
