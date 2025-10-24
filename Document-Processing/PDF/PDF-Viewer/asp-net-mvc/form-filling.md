---
layout: post
title: Form filling in ASP.NET MVC PDF Viewer control | Syncfusion
description:  Learn how to view, fill, export, and import PDF form fields with ASP.NET MVC PDF Viewer control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Form filling in ASP.NET MVC PDF Viewer Component

The PDF Viewer component displays existing form fields in a PDF document and enables filling and downloading filled data.

The form fields displayed in the Pdf Viewer are:

* TextBox
* Password
* CheckBox
* RadioButton
* ListBox
* DropDown
* SignatureField
* InitialField

![Form filling in ASP.NET MVC](./images/formfilling.png)

## Disabling form fields

The PDF Viewer control provides an option to disable interaction with form fields. Use the following configuration to disable form fields in the viewer.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableFormFields(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).EnableFormFields(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>
```
{% endhighlight %}
{% endtabs %}

## How to draw handwritten signature in the signature field

Add a handwritten signature to a Signature field by following these steps:

* Click the signature field in the PDF document to open the signature panel.

![Signature field in ASP.NET MVC PdfViewer](./images/signaturefield.png)

* Draw the signature in the signature panel.

![Displaying signature panel in ASP.NET MVC PdfViewer](./images/signature.png)

* Click the **CREATE** button. The drawn signature is added to the signature field.

![Displaying signature in ASP.NET MVC PdfViewer](./images/sign.png)

## Delete the signature inside the signature field

Delete a signature placed in a signature field by using the Delete option in the annotation toolbar.

![Deleting signature in ASP.NET MVC PdfViewer](./images/deletesign.png)

## Export and import form fields

The PDF Viewer control provides the support to export and import the form field data in the following formats using the `importFormFields`, `exportFormFields`, and `exportFormFieldsAsObject` methods.

* FDF
* XFDF
* JSON

## Importing form fields using PDF Viewer API

You can import the form fields using JSON file or JSON object in code behind like the below code sample.

```html
<button id="viewer" onclick="OnImportFormFieldsClick()">Import FormFields</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>
<script>
    function OnImportFormFieldsClick() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        //The json file has been placed inside the App_Data folder.);
        pdfViewer.importFormFields("D:/PDFViewer/Examples/mvcsample/App_Data/ImportFormFields.json");
    }
</script>
```

N>The JSON file for importing the form fields should be placed in the desired location and the path should be provided correctly.

## Exporting form fields from the PDF document using PDF Viewer API

You can export the form fields as JSON file in code behind as the following code sample.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<button id="viewer" onclick="OnExportFormFieldsClick()">Export FormFields</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>
<script>
    function OnExportFormFieldsClick() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
         pdfViewer.exportFormFields(null,'Json');
    }
</script>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<button id="viewer" onclick="OnExportFormFieldsClick()">Export FormFields</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").Render()
</div>
<script>
    function OnExportFormFieldsClick() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
         pdfViewer.exportFormFields(null,'Json');
    }
</script>
```
{% endhighlight %}
{% endtabs %}

## See also

* [Handwritten Signature in ASP.NET MVC PDF Viewer Component](./annotation/signature-annotation)
* [Form Designer](./form-designer/form-field-events)