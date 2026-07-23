---
layout: post
title: Conversion in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Conversion support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Conversion in WPF Spreadsheet (SfSpreadsheet)
This section explains how to convert a workbook in SfSpreadsheet into an image, PDF, and HTML.

## Convert to Image

SfSpreadsheet supports converting a worksheet into an image of type `Bitmap` or `Metafile` based on the specified range of rows and columns, with all basic formats preserved. Use the [ConvertToImage](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_ConvertToImage_System_Int32_System_Int32_System_Int32_System_Int32_) method of [IWorksheet](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IWorksheet.html) to perform the conversion.

{% tabs %}
{% highlight c# %}
IWorksheet sheet = spreadsheet.Workbook.ActiveSheet;
sheet.UsedRangeIncludesFormatting = false;
int lastRow = sheet.UsedRange.LastRow + 1;
int lastColumn = sheet.UsedRange.LastColumn + 1;
System.Drawing.Image image = sheet.ConvertToImage(1, 1, lastRow, lastColumn, ImageType.Bitmap, null);
image.Save("Sample.png", ImageFormat.Png);
System.Diagnostics.Process.Start("Sample.png");
{% endhighlight %}
{% endtabs %}

## Convert to PDF

SfSpreadsheet supports exporting the Excel workbook to PDF using `ExcelToPdfConverter`.

For converting the Excel sheet to PDF, “Syncfusion.ExcelToPDFConverter.Base.dll” and “Syncfusion.Pdf.Base.dll” references should be added.

Export the Excel workbook as a PDF document using the [Convert](https://help.syncfusion.com/cr/wpf/Syncfusion.ExcelToPdfConverter.ExcelToPdfConverter.html#Syncfusion_ExcelToPdfConverter_ExcelToPdfConverter_Convert) method of the [ExcelToPdfConverter](https://help.syncfusion.com/cr/wpf/Syncfusion.ExcelToPdfConverter.ExcelToPdfConverter.html) class in the `Syncfusion.ExcelToPdfConverter` namespace.

{% tabs %}
{% highlight c# %}
ExcelToPdfConverter converter = new ExcelToPdfConverter(spreadsheet.Workbook);

// Initialize the PdfDocument
PdfDocument pdfDoc = new PdfDocument();

// Initialize the ExcelToPdfConverter settings
ExcelToPdfConverterSettings settings = new ExcelToPdfConverterSettings();
settings.LayoutOptions = LayoutOptions.NoScaling;

//Assign the PdfDocument to the TemplateDocument property of ExcelToPdfConverterSettings
settings.TemplateDocument = pdfDoc;
settings.DisplayGridLines = GridLinesDisplayStyle.Invisible;

// Convert Excel document into PDF document
pdfDoc = converter.Convert(settings);

// Save the PDF file
pdfDoc.Save("Sample.pdf");
System.Diagnostics.Process.Start("Sample.pdf");
{% endhighlight %}
{% endtabs %}

## Convert to HTML

SfSpreadsheet supports converting the Excel workbook into an HTML page using the `SaveAsHtml` method on the underlying `IWorkbook`.

{% tabs %}
{% highlight c# %}
spreadsheet.Workbook.SaveAsHtml("Sample.html", HtmlSaveOptions.Default);
System.Diagnostics.Process.Start("Sample.html");
{% endhighlight %}
{% endtabs %}

> **Note:** You can refer to our [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.