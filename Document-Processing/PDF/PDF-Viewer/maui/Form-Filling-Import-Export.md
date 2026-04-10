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

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to import form data into a PDF document and export filled form data from it. This is useful for pre-populating forms, backing up responses, or transferring data between systems.

## Supported data formats

The following formats are supported for both import and export:

| Format | Description |
|---|---|
| XFDF | XML Forms Data Format — standard format compatible with most PDF viewers. |
| FDF | Forms Data Format — standard format compatible with most PDF viewers. |
| JSON | Custom format, compatible with Syncfusion PDF Viewers (WPF, Flutter, JavaScript, etc.). |
| XML | Custom format, compatible with Syncfusion PDF Viewers (WPF, Flutter, JavaScript, etc.). |

The required format can be selected from the [DataFormat](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.DataFormat.html) enumeration.

N> XFDF and FDF are standard formats compatible with global PDF viewers. JSON and XML are Syncfusion-specific formats for cross-platform use within Syncfusion products only.

## Import form data

Use the [ImportFormData](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_ImportFormData_System_IO_Stream_Syncfusion_Pdf_Parsing_DataFormat_System_Boolean_) method to populate form fields from an external data file. Pass the file stream and the data format as parameters.

The following example imports form data from an XFDF file stored in the application's data directory.

{% tabs %}
{% highlight C# %}
void ImportFormData()
{
    string fileName = Path.Combine(FileSystem.Current.AppDataDirectory, "FormDataInfo.xfdf");
    Stream inputFileStream = File.OpenRead(fileName);
    inputFileStream.Position = 0;

    pdfViewer.ImportFormData(inputFileStream, Syncfusion.Pdf.Parsing.DataFormat.XFdf);
}
{% endhighlight %}
{% endtabs %}

To continue importing even if the file contains errors, pass `true` for the `continueImportOnError` parameter.

{% tabs %}
{% highlight C# %}
pdfViewer.ImportFormData(inputFileStream, Syncfusion.Pdf.Parsing.DataFormat.XFdf, true);
{% endhighlight %}
{% endtabs %}

## Export form data

Use the [ExportFormData](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_ExportFormData_System_IO_Stream_Syncfusion_Pdf_Parsing_DataFormat_) method to write the current form field values to a file. Pass an empty writable stream and the desired format.

The following example exports form data to an XFDF file in the application's data directory.

{% tabs %}
{% highlight C# %}
void ExportFormData()
{
    string targetFile = Path.Combine(FileSystem.Current.AppDataDirectory, "ExportedFormData.xfdf");
    FileStream fileStream = File.Create(targetFile);

    pdfViewer.ExportFormData(fileStream, Syncfusion.Pdf.Parsing.DataFormat.XFdf);
}
{% endhighlight %}
{% endtabs %}

## See Also
- [Form Filling Overview](../form-filling-overview)
- [Form Data Validation](../form-filling-validation)
- [Save a Document](../save-a-document)
- [Import and Export Annotations](../import-export-annotations)
