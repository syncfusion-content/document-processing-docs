---
title: Convert Word to PDF in .NET Word Library | DocIO | Syncfusion
description: Learn how to convert a Word document to PDF using the .NET  Word (DocIO) library without Microsoft Word or interop dependencies. 
platform: document-processing
control: DocIO
documentation: UG
---
# Convert Word  to PDF using .NET Word (DocIO) library 

Syncfusion Word library (DocIO) allows you to convert Word document to PDF within a few lines of code in .NET applications and also it does not require Adobe and Microsoft Word application to be installed in the machine. Using this, you can create an input Word document from scratch or load an existing Word document and then easily convert to PDF.  

The Syncfusion Word to PDF converter offers high versatility and seamless performance across various .NET platforms, including [Windows Forms](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-window-forms), [WPF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-wpf), [ASP.NET](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net), [ASP.NET MVC](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net-mvc), [ASP.NET Core](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net-core), [Blazor](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-blazor), [Xamarin](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-xamarin), [WinUI](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-winui), [.NET MAUI](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-maui). Also, in different environments like [Azure](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-azure), [AWS](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-aws), [Google Cloud](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-google-cloud-platform), [Linux](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-linux), [Docker](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-linux-docker), and [macOS](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-mac). 

To quickly start converting a Word document to a PDF, please check out this video:
{% youtube "https://www.youtube.com/watch?v=8QdevnBxgHk" %}

# Key Features  

* Ability to embed fonts within the PDF for consistent display. 
* Support for converting Word documents to PDF/UA (Section 508 compliant). 
* Support for converting Word documents to PDF/A with various PDF conformance levels for long-term archiving and standardization. 
* Ability to preserve Word document form fields as PDF forms, allowing the creation of editable PDFs. 
* Convert Word headings to PDF bookmarks, generating PDF documents with bookmarks based on Word document paragraph styles and outline levels. 
* Support for font substitution when fonts are not available during Word to PDF conversion. 
* Set fallback fonts for characters when glyphs are not available. 
* Ability to optimize identical images to reduce PDF file size. 
* Option to include or exclude alternate chunks during Word to PDF conversion. 
* Ability to use custom dictionaries for text hyphenation in the converted PDF. 
* Support for preserving revision marks of tracked changes in the converted PDF. 
* Option to toggle between preserving or excluding comments during Word to PDF conversions. 
* Option to show warnings for any unsupported elements during conversion. 

# Assemblies and NuGets required 

Refer to the following links for the assemblies or NuGet packages required based on platforms to convert the Word document to PDF: 

* Assemblies Required 
* NuGet packages Required 

# Convert Word to PDF 

The following namespaces are required to compile the code: 

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS; 
using Syncfusion.DocIORenderer;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS; 
using Syncfusion.OfficeChart; 
using Syncfusion.DocToPDFConverter; 
using Syncfusion.OfficeChartToImageConverter; 
using Syncfusion.Pdf;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.DocIO
Imports Syncfusion.DocIO.DLS
Imports Syncfusion.OfficeChart
Imports Syncfusion.DocToPDFConverter
Imports Syncfusion.OfficeChartToImageConverter
Imports Syncfusion.Pdf
{% endhighlight %}

{% endtabs %}

The following code example illustrates how to convert a Word document into PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Automatic);
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Sets Chart rendering Options.
render.Settings.ChartRenderingOptions.ImageFormat =  ExportImageFormat.Jpeg;
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Creates an instance of the DocToPDFConverter
DocToPDFConverter converter = new DocToPDFConverter();
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Saves the PDF file 
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of document objects
pdfDocument.Close(true);
wordDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to pdf conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Creates an instance of the DocToPDFConverter
Dim converter As New DocToPDFConverter()
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Saves the PDF file 
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of document objects
pdfDocument.Close(True)
wordDocument.Close()
{% endhighlight %}

{% endtabs %}

By executing the program, you will get the output PDF as follows. 

![Convert Word to PDF](WordToPDF_images/OutputImage.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF).

T> For troubleshooting issues in the .NET Word Library (DocIO), refer this article that provides comprehensive guidance on resolving common problems.

N> 1. For .NET Framework, creating an instance of the [ChartToImageConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChartToImageConverter.ChartToImageConverter.html) class is mandatory to convert the charts present in the Word to PDF. Otherwise, the charts are not preserved in the converted PDF. Whereas this is not necessary for .NET Core, as ChartToImageConverter is initialized internally in Syncfusion.DocIORenderer.Portable assembly.
N> 2. Total number of pages in the converted PDF may vary based on unsupported elements in the input Word document.
N> 3. "DocIO supports Word to PDF conversion in UWP application using DocIORenderer." For further information, please refer [here](https://support.syncfusion.com/kb/article/8902/how-to-convert-word-document-to-pdf-in-uwp)

# Supported File Formats 

The .NET Word Library (DocIO) supports below formats to convert into PDF. 

* DOC, DOCX, Word Processing XML (2003 & 2007), DOT, DOTX, DOCM, and DOTM. 
* RTF 
* Text 
* Markdown 
* HTML 