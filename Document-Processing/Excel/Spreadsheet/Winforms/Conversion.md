---
layout: post
title: Conversion in Windows Forms Spreadsheet control | Syncfusion®
description: Learn about Conversion support in Syncfusion® Windows Forms Spreadsheet control, its elements and more details.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Conversion in Windows Forms Spreadsheet
This section explains the conversion of a workbook in Spreadsheet to image, PDF, and HTML formats.

## Convert to Image

Spreadsheet provides support to convert a worksheet into an image of type `Bitmap` or `Metafile` based on the input range of rows and columns with all basic formats preserved. By using the [ConvertToImage](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_ConvertToImage_System_Int32_System_Int32_System_Int32_System_Int32_) method, you can convert a worksheet into an image.

{% tabs %}
{% highlight c# tabtitle="C#" %}

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

Spreadsheet provides support to export the Excel workbook to PDF using `ExcelToPdfConverter`. 

For converting the Excel worksheet to PDF, the `Syncfusion.ExcelToPDFConverter.Base.dll` and `Syncfusion.Pdf.Base.dll` references should be added.

Export the Excel workbook as a PDF document using the [Convert](https://help.syncfusion.com/cr/windowsforms/Syncfusion.ExcelToPdfConverter.ExcelToPdfConverter.html#Syncfusion_ExcelToPdfConverter_ExcelToPdfConverter_Convert) method of the [ExcelToPdfConverter](https://help.syncfusion.com/cr/windowsforms/Syncfusion.ExcelToPdfConverter.ExcelToPdfConverter.html) class, which is available in the namespace `Syncfusion.ExcelToPdfConverter`.

{% tabs %}
{% highlight c# tabtitle="C#" %}

ExcelToPdfConverter converter = new ExcelToPdfConverter(spreadsheet.Workbook);

//Initialize the PdfDocument
PdfDocument pdfDoc = new PdfDocument();

//Initialize the ExcelToPdfConverter Settings
ExcelToPdfConverterSettings settings = new ExcelToPdfConverterSettings();
settings.LayoutOptions = LayoutOptions.NoScaling;

//Assign the PdfDocument to the templateDocument property of ExcelToPdfConverterSettings
settings.TemplateDocument = pdfDoc;
settings.DisplayGridLines = GridLinesDisplayStyle.Invisible;

//Convert Excel Document into PDF document
pdfDoc = converter.Convert(settings);

//Save the PDF file
pdfDoc.Save("Sample.pdf");
System.Diagnostics.Process.Start("Sample.pdf");

{% endhighlight %}
{% endtabs %}

## Convert to HTML

Spreadsheet provides support to convert the Excel workbook into an HTML page.

{% tabs %}
{% highlight c# tabtitle="C#" %}

spreadsheet.Workbook.SaveAsHtml("Sample.html", HtmlSaveOptions.Default);
System.Diagnostics.Process.Start("Sample.html");

{% endhighlight %}
{% endtabs %}
