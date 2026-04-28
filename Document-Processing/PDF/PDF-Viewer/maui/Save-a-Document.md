---
layout: post
title: Save a Document in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to save a modified PDF document in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Save a Document in .NET MAUI PDF Viewer (SfPdfViewer)

After annotating, filling forms, or applying redactions, use the PDF Viewer's save methods to persist all changes back to a file stream. You can save synchronously with [SaveDocument](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_SaveDocument_System_IO_Stream_) or asynchronously with [SaveDocumentAsync](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_SaveDocumentAsync_System_IO_Stream_System_Threading_CancellationToken_) — and optionally flatten annotations or form fields into static content at the same time. 

The following example explains how to save the modified document if the document needs to be saved in the application’s data directory. 

{% tabs %}
{% highlight c# %}
private void SaveButton_Clicked(object sender, EventArgs e)
{
    SaveDocument();
}

private void SaveDocument()
{
    // Create a file stream to save the PDF document.
    // The file "ModifiedDocument.pdf" is written to the app's sandboxed data directory.
    string fileName = Path.Combine(FileSystem.Current.AppDataDirectory, "ModifiedDocument.pdf");
    using FileStream fileStream = File.Create(fileName);

    // Save the PDF document to the stream.
    PdfViewer.SaveDocument(fileStream);
}
{% endhighlight %}
{% endtabs %}

## Save a document asynchronously

To save a document without blocking the UI thread, use the [SaveDocumentAsync](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_SaveDocumentAsync_System_IO_Stream_System_Threading_CancellationToken_) method. This is the recommended approach for saving from event handlers or UI interactions. An optional [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken) can be passed to cancel the operation if needed.

{% tabs %}
{% highlight c# %}
private async void SaveButton_Clicked(object sender, EventArgs e)
{
    await SaveDocumentAsync();
}

private async Task SaveDocumentAsync()
{
    // Create a file stream to save the PDF document asynchronously.
    string fileName = Path.Combine(FileSystem.Current.AppDataDirectory, "ModifiedDocument.pdf");
    using FileStream fileStream = File.Create(fileName);

    // Save the PDF document without blocking the UI thread.
    await PdfViewer.SaveDocumentAsync(fileStream);
}
{% endhighlight %}
{% endtabs %}

## Flatten annotations and form fields on save

Flattening refers to the process of converting interactive elements, such as annotations and form fields, into a static, non-editable format within a PDF document. The SfPdfViewer allows you to save the annotations and form fields by flattening using the [FlattenOnSave](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.Annotation.html#Syncfusion_Maui_PdfViewer_Annotation_FlattenOnSave) API.

### Flatten the annotation on save

The [FlattenOnSave](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.Annotation.html#Syncfusion_Maui_PdfViewer_Annotation_FlattenOnSave) API helps you to flatten the specified annotation in a PDF document. The following code sample explains how to flatten the first annotation from the annotation collection.

{% tabs %}
{% highlight c# %}
// Obtain the annotation collection using [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) instance.
ReadOnlyObservableCollection<Annotation> annotations = PdfViewer.Annotations;
// Obtain the first annotation in the annotation collection.
Annotation annotation = annotations[0];
// set the FlattenOnSave true to flatten the annotation on save
annotation.FlattenOnSave = true;
{% endhighlight %}
{% endtabs %}

### Flatten form field on save

The [FlattenOnSave](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.Annotation.html#Syncfusion_Maui_PdfViewer_Annotation_FlattenOnSave) API helps you to flatten the specified form field in a PDF document. The following code sample explains how to flatten the first form field from the form field collection.

{% tabs %}
{% highlight c# %}
// Obtain the form field collection using [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) instance.
ReadOnlyObservableCollection<FormField> formFields = PdfViewer.FormFields;
// Obtain the first form field in the form fields collection.
FormField formField = formFields[0];
// set the FlattenOnSave true to flatten the formfield on save
formField.FlattenOnSave = true;
{% endhighlight %}
{% endtabs %}

### Limitation

Currently, when saving a document by flattening that contains sticky note annotations, the sticky note icon always appears as the default [comment](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.StickyNoteIcon.html#Syncfusion_Maui_PdfViewer_StickyNoteIcon_Comment) icon appearance in the saved document.

## See Also
- [Annotations Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/annotations-overview)
- [Form Filling Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-overview)
- [Import and Export Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/import-export-annotations)
- [Redaction](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/redaction)
- [Electronic Signature](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/signature)