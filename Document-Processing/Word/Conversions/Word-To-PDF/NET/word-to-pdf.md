---
title: Convert Word to PDF in C# using DocIO | Syncfusion
description: Learn how to convert a Word document to PDF, PDF/A, and PDF/UA using the .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word to PDF in .NET using Syncfusion® Word (DocIO) library

The [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO) allows you to convert a Word document to PDF within a few lines of code in .NET applications. It does not require Adobe Acrobat or Microsoft Word to be installed on the machine. Using this library, you can create a Word document from scratch or load an existing Word document and then easily convert it to PDF.  

The [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) to PDF converter offers high versatility and seamless performance across various .NET platforms, including [Windows Forms](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-window-forms), [WPF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-wpf), [ASP.NET](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net), [ASP.NET MVC](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net-mvc), [ASP.NET Core](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net-core), [Blazor](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-blazor), [Xamarin](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-xamarin), [WinUI](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-winui), [.NET MAUI](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-maui). Also, in different environments like [Azure](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-azure), [AWS](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-aws), [Google Cloud](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-google-cloud-platform), [Linux](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-linux), [Docker](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-linux-docker), and [macOS](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-mac). 

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required based on your platform to convert a Word document to PDF.

* [Word to PDF conversion assemblies](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/assemblies-required-word-to-pdf) 
* [Word to PDF conversion NuGet packages](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/nuget-packages-required-word-to-pdf)

For a quick walkthrough on converting a Word document to a PDF, check out this video:
{% youtube "https://www.youtube.com/watch?v=8QdevnBxgHk" %}

## Key Features  

* Ability to [embed fonts](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#embedding-fonts) within the PDF for consistent display. 
* Support for converting Word documents to [PDF/UA](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#accessible-pdf-document) (Section 508 compliant). 
* Support for converting Word documents to [PDF/A](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#pdf-conformance-level) with various PDF conformance levels for long-term archiving and standardization. 
* Ability to preserve Word document form fields as PDF forms, allowing the creation of [editable PDFs](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#word-document-form-field-to-pdf-form-field). 
* Convert Word headings to [PDF bookmarks](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#word-document-headings-to-pdf-bookmarks), generating PDF documents with bookmarks based on Word document paragraph styles and outline levels. 
* Support for [font substitution](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/font-substituion-word-to-pdf) when fonts are not available during Word to PDF conversion. 
* Set [fallback fonts](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/fallback-fonts-word-to-pdf) for characters when glyphs are not available. 
* Ability to [optimize identical images](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#identical-image-optimization) to reduce PDF file size. 
* Option to [include or exclude alternate chunks](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#enable-alternate-chunks) during Word to PDF conversion. 
* Ability to use custom dictionaries for [text hyphenation](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#hyphenation-in-word-to-pdf-conversion) in the converted PDF. 
* Support for preserving revision marks of [tracked changes](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#track-changes-in-word-to-pdf-conversion) in the converted PDF. 
* Option to toggle between preserving or excluding [comments](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#comments-in-word-to-pdf-conversion) during Word to PDF conversions. 
* Option to [show warnings for any unsupported elements](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/unsupported-elements-word-to-pdf#show-warning-for-unsupported-elements) during conversion. 

## Convert Word to PDF

The following prerequisites are required before running the code samples in this section:

* Create a new .NET console, class library, or web application targeting a supported version of .NET Framework, .NET Core, or .NET (5+).
* Install the required Syncfusion NuGet packages for your target platform. For details, see [Word to PDF conversion NuGet packages](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/nuget-packages-required-word-to-pdf).

The following namespaces are required to compile the code:

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, WinUI, and ***C# [Windows-specific]*** or ***VB.NET [Windows-specific]*** for WinForms, WPF, ASP.NET and ASP.NET MVC applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
using System.IO;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;
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

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/.NET/Convert-Word-document-to-PDF/Program.cs" %}
//Open the Word document file stream.
using (FileStream inputStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Loads an existing Word document.
    using (WordDocument wordDocument = new WordDocument(inputStream, FormatType.Automatic))
    {
        //Creates an instance of DocIORenderer.
        using (DocIORenderer renderer = new DocIORenderer())
        {
            //Converts Word document into PDF document.
            using (PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument))
            {
                //Saves the PDF file to file system.    
                using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.ReadWrite))
                {
                    pdfDocument.Save(outputStream);
                }
            }
        }
    }
}
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

![Word to PDF conversion](WordToPDF_images/OutputImage.png).

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF).

T> For troubleshooting issues in the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO), refer [this](https://support.syncfusion.com/kb/article/16012/troubleshooting-guide-for-syncfusion-word-docio-library-issues?isInternalRefresh=False) article that provides comprehensive guidance on resolving common problems.

N> 1. For .NET Framework, creating an instance of the [ChartToImageConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChartToImageConverter.ChartToImageConverter.html) class is mandatory to convert the charts present in the Word to PDF. Otherwise, the charts are not preserved in the converted PDF. Whereas this is not necessary for .NET (Core), as ChartToImageConverter is initialized internally in the Syncfusion.DocIORenderer.Portable assembly.
N> 2. Total number of pages in the converted PDF may vary based on unsupported elements in the input Word document. For more information, refer to the [Limitations in Word to PDF Conversion](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/unsupported-elements-word-to-pdf) page.
N> 3. DocIO supports Word to PDF conversion in UWP applications using DocIORenderer. For further information, refer [here](https://support.syncfusion.com/kb/article/8902/how-to-convert-word-document-to-pdf-in-uwp).
N> 4. Failing to dispose of resources can lead to memory leaks, high memory usage, and performance issues, potentially causing the application to crash. Using **Dispose()** or a **using** statement ensures efficient memory management and keeps the app stable.

## Supported File formats

The [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO) supports below formats to convert into PDF. 

* DOC, DOCX, Word Processing XML (2003 & 2007), DOT, DOTX, DOCM, and DOTM
* RTF 
* Text 
* Markdown 
* HTML 

N> To see limitations and unsupported features in Word to PDF conversion, refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/unsupported-elements-word-to-pdf).

## Word to PDF conversion in Linux OS

In Linux OS, you can perform the Word to PDF conversion using a .NET Core application (targeting .NET 8 or later). For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-linux).

## Frequently Asked Questions

* [How to copy necessary fonts to Linux containers?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-copy-necessary-fonts-to-linux-containers)
* [How to set culture / locale in Docker containers (Windows & Linux containers)?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-set-culturelocale-in-docker-containers-windows-and-linux-containers)
* [How to copy necessary Microsoft compatible fonts to Linux?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-copy-necessary-microsoft-compatible-fonts-to-linux)
* [How to resolve LibSkiaSharp not found exception?](https://help.syncfusion.com/document-processing/word/word-library/net/faq#how-to-resolve-libskiasharp-not-found-exception)

## Customization settings

Essential<sup>&reg;</sup> DocIO provides the following settings to customize Word to PDF conversion. Use these options to control font embedding, accessibility, structure preservation, image handling, conformance, and security in the output PDF.

### Embedding fonts

You can customize the TrueType font embedding in two ways:

* [Embed subset fonts](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#embed-subset-fonts).
* [Embed complete fonts](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#embed-complete-fonts).

### Accessible PDF document

This setting allows you to determine whether to preserve document structured tags in the converted **PDF document for accessibility (Section 508 compliance) support**. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#accessible-pdf-document).

### Word document headings to PDF bookmarks

This setting allows you to determine whether to **preserve Word document headings** (i.e., paragraphs with heading style and outline level) as bookmarks in the converted PDF document. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#word-document-headings-to-pdf-bookmarks).

### Word document form field to PDF form field

This setting allows you to determine whether to **preserve Word document form fields** (text form field, checkbox form field, and drop-down form field) as PDF form fields in the converted PDF document. This feature helps in creating fillable PDF forms from a Word document. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#word-document-form-field-to-pdf-form-field).

### Image quality

This setting allows you to determine the **quality of the charts and JPEG images** in the converted PDF document. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#image-quality).

### Recreate nested metafile

This setting allows you to regenerate the nested EMF images present in the Word document during PDF conversion. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#recreate-nested-metafile).

### Identical image optimization

This setting **reduces the main memory usage** in Word to PDF conversion by reusing identical images. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#identical-image-optimization).

### PDF conformance level

This setting allows you to set the PDF conformance level. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#pdf-conformance-level).

### Enable alternate chunks

In the Word document, other Word documents are embedded and referred to as AltChunks. This setting allows you to include the alternate chunks while converting Word to PDF. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#enable-alternate-chunks).

### Complex script text

This setting allows you to preserve the **complex script text** in the converted PDF document. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#complex-script-text).

### Hyphenation in Word-to-PDF conversion

Essential<sup>&reg;</sup> DocIO now allows hyphenating text in a Word document while converting it to PDF format based on the given language dictionaries. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#hyphenation-in-word-to-pdf-conversion).

### Track changes in Word-to-PDF conversion

You can **preserve revision marks in a generated PDF document** when converting Word documents with tracked changes or revisions. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#track-changes-in-word-to-pdf-conversion).

### Comments in Word-to-PDF conversion

You can **preserve comment balloons in a generated PDF** when converting Word documents with comments. You can also customize how the comment balloon color appears in a generated PDF. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#comments-in-word-to-pdf-conversion).

### Preserve OLE equation as bitmap image

You can preserve an OLE equation as a bitmap image in the converted PDF document. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#preserve-ole-equation-as-bitmap-image).

### Restrict all permission in a PDF document

You can restrict all the permissions in a PDF document using [PdfPermissionsFlags](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Security.PdfPermissionsFlags.html). For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#restrict-all-permission-in-a-pdf-document).

### Apply matte to transparent images

This setting allows you to determine whether to **apply a matte color to transparent images** during Word to PDF conversion, ensuring they render cleanly without unwanted borders or artifacts in the final PDF. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#apply-matte-to-transparent-images).

## Font substitution

When the necessary fonts used in the Word document have not been installed in the production machine, Essential<sup>&reg;</sup> DocIO uses "Microsoft Sans Serif" as the default font for rendering the text. This leads to a preservation difference in the generated PDF, as each font has different glyphs for characters. 

To avoid this, the Essential<sup>&reg;</sup> DocIO library allows you to set an alternate font for the missing font used in the Word document. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/font-substituion-word-to-pdf).

## Fallback fonts

During Word to PDF conversions, if a glyph of the input text is unavailable in the specified font, the text will not be rendered properly. To address this, the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) allows users to specify fallback fonts. When a glyph is missing, the library will use one of the fallback fonts to render the text correctly in the output PDF document. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/fallback-fonts-word-to-pdf).

## Unsupported elements in Word to PDF conversion

Refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/unsupported-elements-word-to-pdf#detailed-limitations) to know about unsupported elements in Word to PDF conversion.

## Show warning for unsupported elements

When converting a Word document to a PDF, the presence of unsupported elements in the input Word document can lead to preservation issues in the converted PDF. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/unsupported-elements-word-to-pdf#show-warning-for-unsupported-elements).

## Online demo

Explore live demos of Word to PDF conversion using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO):

* [Convert Word to PDF](https://document.syncfusion.com/demos/word/wordtopdf#/tailwind)
* [Convert Word to PDF/UA](https://document.syncfusion.com/demos/word/wordtopdfua#/tailwind)
* [Convert Word to PDF/A](https://document.syncfusion.com/demos/word/wordtopdfa#/tailwind)

## See also

* [Supported file formats](https://help.syncfusion.com/document-processing/word/word-library/net/support-file-formats)
* [How to perform font substitution in Word to PDF conversion](https://support.syncfusion.com/kb/article/7499/how-to-perform-font-substitution-in-winforms-word-to-pdf-conversion)
* [What happens when the Word document used fonts for a text is not installed in production machine during Word to PDF or Image conversion](https://support.syncfusion.com/kb/article/6821/check-whether-fonts-in-word-document-are-available-in-machine-for-pdf-or-image-conversion)
* [How to resolve font problems during Word to PDF or image conversion?](https://support.syncfusion.com/kb/article/13969/how-to-resolve-font-problems-during-word-to-pdf-or-image-conversion)
* [How to convert multiple Word documents to multiple PDFs and zip the PDFs in C#?](https://support.syncfusion.com/kb/article/13837/how-to-convert-multiple-word-documents-to-multiple-pdfs-and-zip-the-pdfs-in-c)
* [How to convert and replace EMF image in word document to PNG with same size](https://support.syncfusion.com/kb/article/11331/how-to-convert-and-replace-emf-image-in-word-document-to-png-with-same-size)
* [How to convert Word document to PDF in UWP](https://support.syncfusion.com/kb/article/8902/how-to-convert-word-document-to-pdf-in-uwp)
* [How to avoid conflicts while using DocIORenderer and other controls in UWP](https://support.syncfusion.com/kb/article/11445/how-to-avoid-conflicts-while-using-dociorenderer-and-other-controls-in-uwp)
* [How to deploy .NET Core application with Word to PDF conversion capabilities in Linux OS](https://www.syncfusion.com/kb/8470/how-to-deploy-net-core-application-with-word-to-pdf-conversion-capabilities-in-linux-os)
* [How to convert Word document to PDF in Azure App service on Linux](https://support.syncfusion.com/kb/article/7626/how-to-deploy-net-core-application-with-word-to-pdf-conversion-capabilities-in-linux-os)
* [Is it possible to perform Word to PDF conversion in Azure Environment ?](https://www.syncfusion.com/kb/7751/is-it-possible-to-perform-word-to-pdf-conversion-in-azure-environment)
* [How to perform Word to PDF conversion in Azure Functions v1](https://www.syncfusion.com/kb/10056/how-to-perform-word-to-pdf-conversion-in-azure-functions-v1)
* [How to mail merge Word documents and convert to PDF in Azure Functions v2](https://support.syncfusion.com/kb/article/6939/is-it-possible-to-perform-word-to-pdf-conversion-in-azure-environment)
* [How to convert Word document to PDF in AWS Lambda](https://support.syncfusion.com/kb/article/10534/how-to-convert-word-document-to-pdf-in-aws-lambda)
* [How to add signature field in the PDF converted from Word](https://support.syncfusion.com/kb/article/11438/how-to-add-signature-field-in-the-pdf-converted-from-word)
* [How to convert Word to PDF in Blazor WebAssembly (WASM)?](https://support.syncfusion.com/kb/article/12239/how-to-convert-word-to-pdf-in-blazor-webassembly-wasm)
* [How to perform Word to PDF conversion in WinForms ?](https://support.syncfusion.com/kb/article/8848/how-to-perform-word-to-pdf-conversion-in-winforms-?isInternalRefresh=False)
* [How to preserve track changes markup in Word to PDF conversion](https://support.syncfusion.com/kb/article/14997/how-to-preserve-simple-markup-all-markup-and-no-markup-of-track-changes-during-word-to-pdf-conversion)
* [How to preserve simple markup, all markup, and no markup of track changes during Word to PDF conversion?](https://support.syncfusion.com/kb/article/14997/how-to-preserve-simple-markup-all-markup-and-no-markup-of-track-changes-during-word-to-pdf-conversion)
* [How to preserve track change when converting ASP.NET Core Word to PDF?](https://support.syncfusion.com/kb/article/19563/how-to-preserve-track-change-when-converting-aspnet-core-word-to-pdf?)
* [How to perform mail merge in Word document and convert it as PDF in WinForms?](https://support.syncfusion.com/kb/article/19782/how-to-perform-mail-merge-in-word-document-and-convert-it-as-pdf-in-winforms) 
* [How to add numbers on pages in HTML to PDF in ASP.NET DocIO?](https://support.syncfusion.com/kb/article/19446/how-to-add-numbers-on-pages-in-html-to-pdf-in-aspnet-docio?isInternalRefresh=False)
* [How to add signature field in PDF converted from ASP.NET Word?](https://support.syncfusion.com/kb/article/19447/how-to-add-signature-field-in-pdf-converted-from-aspnet-word?)
