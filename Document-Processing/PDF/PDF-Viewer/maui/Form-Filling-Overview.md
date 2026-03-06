---
layout: post
title: Form Filling Overview in .NET MAUI PDF Viewer | Syncfusion
description: Learn about the PDF form filling feature and supported form field types in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Form Filling in .NET MAUI PDF Viewer (SfPdfViewer)

The .NET MAUI PDF Viewer [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) enables users to view and fill AcroForm-based PDF forms across mobile and desktop apps. It supports interactive form filling through the built-in UI, and developers can access and modify form data programmatically using the `FormFields` API.

The viewer supports saving filled forms, flattening form fields to make them non-editable, and importing or exporting form data in FDF, XFDF, JSON, and XML formats. These capabilities make the viewer ideal for capturing and handling form data efficiently within your application.

## Supported form field types

| Field Type | Description |
|---|---|
| Text box | Accepts free-form text input from the user. |
| Checkbox | Allows the user to toggle a true/false selection. |
| Radio button | Allows the user to select one option from a group. |
| Combo box | Presents a dropdown list for single-item selection. |
| List box | Presents a scrollable list supporting single or multi-selection. |
| Signature | Captures a handwritten, text, or image signature. |
| Button | Renders a button; supports `GoTo` navigation actions only. |

## XFA forms are not supported

The PDF viewer supports only Acroforms. PDF documents that contain an XFA form cannot be loaded in the PDF Viewer. When a PDF with an XFA form is attempted to be loaded, the [DocumentLoadFailed](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_DocumentLoadFailed) event is raised.

{% tabs %}
{% highlight C# %}
private void PdfViewer_DocumentLoadFailed(object sender, DocumentLoadFailedEventArgs e)
{
    if (e.Message == "This PDF cannot be loaded because it contains XFA form.")
    {
        // Handle XFA loading failure.
    }
}
{% endhighlight %}
{% endtabs %}

Refer to [Handling document load failures](https://help.syncfusion.com/maui/pdf-viewer/documentloadnotifications#handling-document-load-failures) for more details.

## In this section

| Topic | Description |
|---|---|
| [Form Fields Collection](https://help.syncfusion.com/maui/pdf-viewer/form-filling-collection) | Access the FormFields collection, restrict editing, clear form data, and attach custom data to fields. |
| [Edit Form Fields](https://help.syncfusion.com/maui/pdf-viewer/form-filling-edit) | Programmatically set values for text, checkbox, combo box, list box, radio button, and signature fields. |
| [Show and Hide Form Fields](https://help.syncfusion.com/maui/pdf-viewer/form-filling-show-hide) | Control form field visibility using the `IsHidden` property. |
| [Customize Form Fields](https://help.syncfusion.com/maui/pdf-viewer/form-filling-customization) | Modify background color, text color, border color, and border width of form field widgets. |
| [Form Field Events](https://help.syncfusion.com/maui/pdf-viewer/form-filling-events) | Track value changes and focus changes on form fields using events. |
| [Import and Export Form Data](https://help.syncfusion.com/maui/pdf-viewer/form-filling-import-export) | Import and export form data in XFDF, FDF, JSON, and XML formats. |
| [Form Data Validation](https://help.syncfusion.com/maui/pdf-viewer/form-filling-validation) | Validate form field values before saving the document. |

## See Also

* [Save a Document](https://help.syncfusion.com/maui/pdf-viewer/save-a-document)
* [Electronic Signature](https://help.syncfusion.com/maui/pdf-viewer/signature)
* [Document Load Notifications](https://help.syncfusion.com/maui/pdf-viewer/documentloadnotifications)