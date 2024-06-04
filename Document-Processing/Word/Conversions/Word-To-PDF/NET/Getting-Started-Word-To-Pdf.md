---
title: Convert a Word document to PDF in C# and VB.NET | Syncfusion
description: Learn how to convert a Word document to PDF using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Converting Word document to PDF

The following code example illustrates how to convert a Word document into PDF document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP .NET MAUI, WinUI, and ***C# [Windows-specific]*** or ***VB.NET [Windows-specific]*** for WinForms, WPF.

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF).

T> For troubleshooting issues in the .NET Word Library (DocIO), refer this article that provides comprehensive guidance on resolving common problems.

N> 1. For .NET Framework, creating an instance of the [ChartToImageConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChartToImageConverter.ChartToImageConverter.html) class is mandatory to convert the charts present in the Word to PDF. Otherwise, the charts are not preserved in the converted PDF. Whereas this is not necessary for .NET Core, as ChartToImageConverter is initialized internally in Syncfusion.DocIORenderer.Portable assembly.
N> 2. Total number of pages in the converted PDF may vary based on unsupported elements in the input Word document.
N> 3. "DocIO supports Word to PDF conversion in UWP application using DocIORenderer." For further information, please refer [here](https://support.syncfusion.com/kb/article/8902/how-to-convert-word-document-to-pdf-in-uwp)

# Word to PDF conversion in Linux OS

In Linux OS, you can perform the Word to PDF conversion using .NET Core (Targeting .netcoreapp) application. You can refer [Word to PDF conversion NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required#converting-word-document-to-pdf) to know about the packages required to deploy .NET Core (Targeting .netcoreapp) application with Word to PDF conversion capabilities.

From v23.1.40, in addition to the previous NuGet packages, we recommend to use [SkiaSharp.NativeAssets.Linux v2.88.6](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.6) and [HarfBuzzSharp.NativeAssets.Linux v7.3.0](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/7.3.0) NuGets to perform Word to PDF conversion in Linux environment.

If you are using prior to v23.1.40 release, please refer [here](https://help.syncfusion.com/document-processing/word/word-library/net/faq#what-are-the-nuget-packages-to-be-installed-to-perform-word-to-pdf-conversion-in-linux-os) to know about how to perform Word to PDF conversion in Linux.

**Frequently Asked Questions**
* [How to copy necessary fonts to Linux containers?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-copy-necessary-fonts-to-linux-containers)
* [How to set culture / locale in Docker containers (Windows & Linux containers)?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-set-culturelocale-in-docker-containers-windows-and-linux-containers)
* [How to copy necessary Microsoft compatible fonts to Linux?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-copy-necessary-microsoft-compatible-fonts-to-linux)
* [How to resolve LibSkiaSharp not found Exception?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-resolve-libskiasharp-not-found-exception)
