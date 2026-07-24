---
layout: post
title: Printing in Windows Forms Spreadsheet | Syncfusion®
description: Learn about Printing support in Syncfusion® Windows Forms Spreadsheet control, its elements and more details.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Printing in Windows Forms Spreadsheet

The Spreadsheet control allows you to print the data in the workbook via PDF Conversion. To enable printing in the Spreadsheet, convert the workbook into a PDF document using `ExcelToPdfConverter`.

To convert a workbook in the Spreadsheet to a PDF document, use the `Convert` method of `ExcelToPdfConverter`.

To view the PDF document, you can use `PdfViewerControl` to load the saved PDF stream.

{% tabs %}
{% highlight c# %}

//Create the pdf viewer for load the document.
PdfViewerControl pdfViewer = new PdfViewerControl();

//Create a MemoryStream to save the PDF document
MemoryStream pdfStream = new MemoryStream();
ExcelToPdfConverter converter = new ExcelToPdfConverter(spreadsheet.Workbook);

//Initialize the ExcelToPdfConverter settings
ExcelToPdfConverterSettings settings = new ExcelToPdfConverterSettings();
settings.LayoutOptions = LayoutOptions.NoScaling;

{% endhighlight %}
{% endtabs %}

For print preview you can load the PDF stream into viewer and for direct printing use `Print` method in PdfViewerControl  which is available under the namespace “Syncfusion.PdfViewer.Windows”

{% tabs %}
{% highlight c# %}

//Initialize the PdfDocument
PdfDocument pdfDoc = new PdfDocument();

//Assign the PdfDocument to the TemplateDocument property of ExcelToPdfConverterSettings
settings.TemplateDocument = pdfDoc;
settings.DisplayGridLines = GridLinesDisplayStyle.Invisible;

//Convert the workbook into a PDF document
pdfDoc = converter.Convert(settings);

//Save the PDF file
pdfDoc.Save(pdfStream);

//Load the document into the PDF viewer
pdfViewer.Load(pdfStream);

//Print the document
pdfViewer.Print(true);

{% endhighlight %}
{% endtabs %}
