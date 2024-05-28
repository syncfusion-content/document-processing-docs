---
title: Overview of Word document to PDF conversion | Syncfusion
description: Learn about Word document to PDF conversion in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word  to PDF using .NET Word (DocIO) library 

Syncfusion Word library (DocIO) allows you to convert Word document to PDF within a few lines of code in .NET applications and also it does not require Adobe and Microsoft Word application to be installed in the machine. Using this, you can create an input Word document from scratch or load an existing Word document and then easily convert to PDF.  

The Syncfusion Word to PDF converter offers high versatility and seamless performance across various .NET platforms, including Windows Forms, WPF, ASP.NET, ASP.NET MVC, ASP.NET Core, Blazor, Xamarin, WinUI, .NET MAUI. Also, in different environments like Azure, AWS, Google Cloud, Linux, Docker, and macOS. 

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

# Word to PDF conversion in Linux OS

In Linux OS, you can perform the Word to PDF conversion using .NET Core (Targeting .netcoreapp) application. You can refer [Word to PDF conversion NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required#converting-word-document-to-pdf) to know about the packages required to deploy .NET Core (Targeting .netcoreapp) application with Word to PDF conversion capabilities.

From v23.1.40, in addition to the previous NuGet packages, we recommend to use [SkiaSharp.NativeAssets.Linux v2.88.6](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.6) and [HarfBuzzSharp.NativeAssets.Linux v7.3.0](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/7.3.0) NuGets to perform Word to PDF conversion in Linux environment.

If you are using prior to v23.1.40 release, please refer [here](https://help.syncfusion.com/document-processing/word/word-library/net/faq#what-are-the-nuget-packages-to-be-installed-to-perform-word-to-pdf-conversion-in-linux-os) to know about how to perform Word to PDF conversion in Linux.

**Frequently Asked Questions**
* [How to copy necessary fonts to Linux containers?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-copy-necessary-fonts-to-linux-containers)
* [How to set culture / locale in Docker containers (Windows & Linux containers)?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-set-culturelocale-in-docker-containers-windows-and-linux-containers)
* [How to copy necessary Microsoft compatible fonts to Linux?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-copy-necessary-microsoft-compatible-fonts-to-linux)
* [How to resolve LibSkiaSharp not found Exception?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-resolve-libskiasharp-not-found-exception)

# Customization settings 

## Fast rendering 

This setting allows you to convert PDF faster by using direct PDF rendering approach rather than EMF rendering approach. For further information, click [here].

## Embedding fonts 

You can customize the TrueType fonts embedding in two ways as follows: 

* Embed Subset Fonts 
* Embed Complete Fonts 

## Accessible PDF document 

This setting allows you to determine whether to preserve document structured tags in the converted PDF document for accessibility (508 compliance) support. For further information, click here. 

## Word document headings to PDF bookmarks 

This setting allows you to determine whether to preserve Word document headings (i.e., paragraph with heading style and outline level) as bookmarks in the converted PDF document. For further information, click here. 

## Word document form field to PDF form field. 

This setting allows you to determine whether to preserve Word document form fields (Text form field, Checkbox form field and Drop-down form field) as PDF form fields in the converted PDF document. This features helps in creating fillable PDF forms from Word document. For further information, click here. 

## Image quality 

This setting allows you to determine the quality of the charts and JPEG images in the converted PDF document. For further information, click here. 

## Recreate Nested Metafile 

This setting allows you to regenerate the nested EMF images present in the Word document during PDF conversion. For further information, click here. 

## Identical image optimization 

This setting reduces the Main Memory usage in Word to PDF conversion by reusing the identical images. For further information, click here. 

## PDF Conformance Level 

This setting allows you to set the PDF conformance level. For further information, click here. 

## Enable Alternate Chunks 

In the Word document, another Word documents are embedded in it and referred as AltChunks. This setting allows you to include the alternate chunks while converting Word to PDF conversion. For further information, click here. 

## Complex Script Text 

This setting allows you to preserve the complex script text in the converted PDF document. For further information, click here. 

## Hyphenation in Word-to-PDF conversion 

The .NET Word Library (DocIO) allows hyphenating text in a Word document while converting it to PDF format based on the given language dictionaries. For further information, click here. 

## Track changes in Word-to-PDF conversion 

You can preserve revision marks in a generated PDF when converting Word documents with tracked changes or revisions. For further information, click here. 

## Comments in Word-to-PDF conversion 

You can preserve comments balloon in a generated PDF when converting Word documents with comments. Also you can customize how comments balloon color appears in a generated PDF. For further information, click here. 

## Preserve Ole Equation as bitmap image 

You can preserve Ole Equation as bitmap image in the converted PDF document. For further information, click here. 

## Restrict all permission in a PDF document 

You can restrict all the permission in a PDF document using PdfPermissionsFlags. For further information, click here. 
 
# Font Substitution 

When the necessary fonts used in the Word document has not been installed in the production machine, then Essential DocIO uses the ”Microsoft Sans Serif” as default font for rendering the text. This leads to preservation difference in generated PDF as each font has different glyphs for characters.

To avoid this, the Essential DocIO library allows you to set an alternate font for the missing font used in the Word document. For further information, click here.

# Fallback fonts 

During Word to PDF conversions, if a glyph of the input text is unavailable in the specified font, the text will not be rendered properly. To address this, the Syncfusion Word (DocIO) library allows users to specify fallback fonts. When a glyph is missing, the library will use one of the fallback fonts to render the text correctly in the output PDF document. For further information, click here. 

# Unsupported elements in Word to PDF conversion 

Refer here to know about unsupported elements in Word to PDF conversion. 

# Show Warning for Unsupported Elements 

Users can display warning messages for the unsupported elements using the WarningType during Word to PDF conversion. Users can set a flag to stop the conversion process based on the warning. For further information, click here.  