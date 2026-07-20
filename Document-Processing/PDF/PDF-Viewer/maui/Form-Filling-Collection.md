---
layout: post
title: Form Fields Collection in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to access and manage the form fields collection in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Form Fields Collection in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer.FormFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_FormFields) property provides access to all form fields present in the loaded PDF document. The collection is available after the document finishes loading and can be accessed from the [DocumentLoaded](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_DocumentLoaded) event. For a broader overview of form-filling support, see [Form Filling Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-overview).

## Accessing the FormFields collection

The following code snippet illustrates getting the total count of form fields in the PDF document. Call the `WireDocumentLoadedEvent` method from your page constructor or initialization logic so the `DocumentLoaded` handler is registered before a document is loaded.

{% tabs %}
{% highlight c# %}
public void WireDocumentLoadedEvent()
{
    // Wire the document loaded event to occur when a PDF document is loaded.
    PdfViewer.DocumentLoaded += OnDocumentLoaded;
}

private void OnDocumentLoaded(object sender, EventArgs e)
{
    // Get the form field count.
    int fieldCount = PdfViewer.FormFields.Count;
}
{% endhighlight %}
{% endtabs %}

## Retrieve a specific form field by name

You can retrieve a specific form field from the collection by filtering on the [Name](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.FormField.html#Syncfusion_Maui_PdfViewer_FormField_Name) property. The following example retrieves a text form field whose name is `name`.

{% tabs %}
{% highlight c# %}
FormField formField = PdfViewer.FormFields.Where(x => x.Name == "name").FirstOrDefault();

if (formField is TextFormField nameTextBox)
{
    string currentValue = nameTextBox.Text;
}
{% endhighlight %}
{% endtabs %}

## Restrict form field editing

Form fields can be prevented from being modified by setting the [ReadOnly](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.FormField.html#Syncfusion_Maui_PdfViewer_FormField_ReadOnly) property to `true`. The following example makes all form fields read-only.

{% tabs %}
{% highlight c# %}
// Restrict editing of all form fields.
foreach (FormField formField in PdfViewer.FormFields)
{
    formField.ReadOnly = true;
}
{% endhighlight %}
{% endtabs %}

## Clear form data

The [ClearFormData](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_ClearFormData_System_Int32_) method clears the data in all form fields in the PDF document.

{% tabs %}
{% highlight c# %}
// Clear all form field data in the document.
PdfViewer.ClearFormData();
{% endhighlight %}
{% endtabs %}

To clear form data on a specific page, pass the page number to the method.

{% tabs %}
{% highlight c# %}
// Clear all form field data on page 2.
PdfViewer.ClearFormData(2);
{% endhighlight %}
{% endtabs %}

## Attach custom data to a form field

The [CustomData](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.FormField.html#Syncfusion_Maui_PdfViewer_FormField_CustomData) property allows you to store additional reference information for any form field instance. This data is for application use only and is not displayed or saved in the PDF document. To use this example, wire the `FormFieldValueChanged` event of the `SfPdfViewer` (for more details, see [Form Field Events](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-events)).

The following example stores the modification timestamp for a form field whenever its value changes.

{% tabs %}
{% highlight c# %}
private void PdfViewer_FormFieldValueChanged(object sender, FormFieldValueChangedEventArgs e)
{
    e.FormField.CustomData = "Modified: " + DateTime.Now.ToString();
}
{% endhighlight %}
{% endtabs %}

## See Also

- [Form Filling Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-overview)
- [Edit Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-edit)
- [Show and Hide Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-show-hide)
- [Form Field Events](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-events)
- [Import and Export Form Data](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-import-export)
- [Form Field Validation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-validation)
- [Save a Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/save-a-document)
