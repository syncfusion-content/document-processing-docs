---
layout: post
title: Import and Export Form Data in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to import and export PDF form data using the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Import and Export Form Data in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to import form data into a PDF document and export filled form data from it. This is useful for pre-populating forms, backing up responses, or transferring data between systems.

## Supported data formats

The following formats are supported for both import and export:

| Format | Description |
|---|---|
| XFDF | XML Forms Data Format — standard format compatible with most PDF viewers. |
| FDF | Forms Data Format — standard format compatible with most PDF viewers. |
| JSON | Syncfusion-specific format for structured form data exchange across Syncfusion PDF viewers (WPF, Flutter, JavaScript, etc.). |
| XML | Syncfusion-specific format for hierarchical form data exchange across Syncfusion PDF viewers (WPF, Flutter, JavaScript, etc.). |

The required format can be selected from the [DataFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.DataFormat.html) enumeration.

N> XFDF and FDF are standard formats compatible with global PDF viewers. JSON and XML are Syncfusion-specific formats for cross-platform use within Syncfusion products only.

## Import form data

Use the [ImportFormData](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_ImportFormData_System_IO_Stream_Syncfusion_Pdf_Parsing_DataFormat_System_Boolean_) method to populate form fields from an external data file. Pass the file stream and the data format as parameters.

The following example imports form data from an XFDF file stored in the application's data directory.

{% tabs %}
{% highlight c# %}
void ImportFormData()
{
    string fileName = Path.Combine(FileSystem.Current.AppDataDirectory, "FormDataInfo.xfdf");
    Stream inputFileStream = File.OpenRead(fileName);

    PdfViewer.ImportFormData(inputFileStream, Syncfusion.Pdf.Parsing.DataFormat.XFdf);
}
{% endhighlight %}
{% endtabs %}

To continue importing even if the file contains errors, pass `true` for the `continueImportOnError` parameter.

{% tabs %}
{% highlight c# %}
void ImportFormDataWithOnError()
{
    string fileName = Path.Combine(FileSystem.Current.AppDataDirectory, "FormDataInfo.xfdf");
    Stream inputFileStream = File.OpenRead(fileName);

    PdfViewer.ImportFormData(inputFileStream, Syncfusion.Pdf.Parsing.DataFormat.XFdf, true);
}
{% endhighlight %}
{% endtabs %}

## Export form data

Use the [ExportFormData](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_ExportFormData_System_IO_Stream_Syncfusion_Pdf_Parsing_DataFormat_) method to write the current form field values to a file. Pass an empty writable stream and the desired format.

The following example exports form data to an XFDF file in the application's data directory. Ensure the PDF document is loaded before exporting — call `ExportFormData` from the [DocumentLoaded](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_DocumentLoaded) event handler.

First, wire the `DocumentLoaded` event after loading the document:

{% tabs %}
{% highlight c# %}

SfPdfViewer PdfViewer = new SfPdfViewer();
PdfViewer.LoadDocumentAsync(PdfStream);

// Add the SfPdfViewer instance to the grid's children collection to ensure it's part of the visual tree.
 myGrid.Children.Add(PdfViewer);
 
// Subscribe to the DocumentLoaded event to handle operations once the PDF document is fully loaded.
PdfViewer.DocumentLoaded += PdfViewer_DocumentLoaded;

private void PdfViewer_DocumentLoaded(object? sender, EventArgs? e)
{
    using (var fileStream = File.Create("D://SavedForm.json"))
    {
        if(sender is SfPdfViewer pdfViewer)
            pdfViewer.ExportFormData(fileStream, Syncfusion.Pdf.Parsing.DataFormat.Json);
    }
}
{% endhighlight %}
{% endtabs %}

## See Also

- [Form Filling Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-overview)
- [Form Filling Validation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-validation)
- [Save a Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/save-a-document)
- [Import and Export Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/import-export-annotations)
- [Form Fields Collection](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-collection)
- [Edit Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-edit)
- [Form Field Events](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-events)
