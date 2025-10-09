---
title: Working with image extraction | Syncfusion
description: This section explains extracting images and extracting information about images from PDF document using Essential PDF
platform: document-processing
control: PDF
documentation: UG
---
# Working with Image Extraction

The Essential<sup>&reg;</sup> PDF provides support to extract images from a particular page or an entire PDF document. You can extract the images from a page using the [ExtractImages](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ExtractImages().html) method in the [PdfPageBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html) class.

Refer to the following code snippet to extract the images from a PDF page.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Image%20Extraction/Extract-images-from-a-PDF-pages/.NET/Extract-images-from-a-PDF-pages/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extract images from first page
Stream[] extractedImages = pageBase.ExtractImages();
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extract images from first page
Image[] extractedImages = pageBase.ExtractImages();
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Exporting
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Load the first page
Dim pageBase As PdfPageBase = loadedDocument.Pages(0)

'Extract images from first page
Dim extractedImages As Image() = pageBase.ExtractImages()
'Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-images-from-a-PDF-pages/). 

N> To extract images from PDF page in .NET Core application, add the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package to your project.

## Image informations

To extract the image properties such as bounds, image index, and more from a page, you can use the [ImagesInfo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ImagesInfo) property in the [PdfPageBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html) class.

Refer to the following code snippet to extract the image info from a PDF page.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Image%20Extraction/Extract-the-image-info-from-a-PDF-page/.NET/Extract-the-image-info-from-a-PDF-page/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extracts all the images info from first page
PdfImageInfo[] imagesInfo= pageBase.ExtractImages();
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extracts all the images info from first page
PdfImageInfo[] imagesInfo= pageBase.ImagesInfo;
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Exporting
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Load the first page
Dim pageBase As PdfPageBase = loadedDocument.Pages(0)

'Extracts all the images info from first page
Dim imagesInfo As PdfImageInfo[] = pageBase.ExtractImages()
'Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-the-image-info-from-a-PDF-page/). 

## Extract images from PDF documents with better memory consumption and performance

The following code example illustrates how to extract images from an entire PDF document using the [PdfDocumentExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfDocumentExtractor.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Image%20Extraction/Extract-images-from-PDF-documents/.NET/Extract-images-from-PDF-documents/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using System.IO;

//Get stream from an existing PDF document.
FileStream inputStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read);
//Initialize the PDF document extractor.
PdfDocumentExtractor documentExtractor = new PdfDocumentExtractor();
//Load the PDF document.
documentExtractor.Load(inputStream);
//Get the page count.
int pageCount = documentExtractor.PageCount;
// Extract images from the PDF document.
Stream[] images = documentExtractor.ExtractImages();
// Extract images by page range.
Stream[] streams = documentExtractor.ExtractImages(2, 6);
// Release all resources used by the PDF image extractor.
documentExtractor.Dispose();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using System.IO;

//Get stream from an existing PDF document.
FileStream inputStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read);
//Initialize the PDF document extractor.
PdfDocumentExtractor documentExtractor = new PdfDocumentExtractor();
//Load the PDF document.
documentExtractor.Load(inputStream);
//Get the page count.
int pageCount = documentExtractor.PageCount;
// Extract images from the PDF document.
Stream[] images = documentExtractor.ExtractImages();
// Extract images by page range.
Stream[] streams = documentExtractor.ExtractImages(2, 6);
// Release all resources used by the PDF image extractor.
documentExtractor.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports System.IO

'Get stream from an existing PDF document.
Dim inputStream As FileStream = New FileStream("Input.pdf", FileMode.Open, FileAccess.Read)
'Initialize the PDF document extractor.
Dim documentExtractor As PdfDocumentExtractor = New PdfDocumentExtractor()
'Load the PDF document.
documentExtractor.Load(inputStream)
'Get the page count.
Dim pageCount As Integer = documentExtractor.PageCount
'Extract images from the PDF document.
Dim images As Stream() = documentExtractor.ExtractImages()
'Extract images by page range.
Dim streams As Stream() = documentExtractor.ExtractImages(2, 6)
'Release all resources used by the PDF image extractor.
documentExtractor.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-images-from-PDF-documents). 

N> To extract images from PDF page in .NET Core application, add the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package to your project.

## Troubleshooting and FAQ's

### Missing SkiaSharp Native Assets on Ubuntu ARM64

<table>
<th style="font-size:14px" width="100px">Issue
</th>
<th style="font-size:14px">Image extraction fails on Ubuntu 22.04.5 LTS servers running on ARM64 architecture due to missing SkiaSharp native dependencies.
</th>

<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>SkiaSharp requires platform-specific native binaries for graphics operations:<br>

1.The default SkiaSharp package doesn't include ARM64 Linux binaries.<br>
2.Ubuntu ARM64 environments lack these native assets by default.<br>
3.SkiaSharp fails to initialize without these dependencies.<br>
</td>
</tr>

<tr>
<th style="font-size:14px" width="100px">Solution
</th>
<td>Add the appropriate native assets package based on your environment:<br>

1.For Standard Linux Environments<br>
(Ubuntu, Alpine, CentOS, Debian, Fedora, RHEL, Azure App Service, Google App Engine)
<br><br/>
{% highlight c# tabtitle="C#" %}

dotnet add package SkiaSharp.NativeAssets.Linux --version 3.116.1

{% endhighlight %}

2.For cloud native deployments<br>
(AWS Lambda, AWS Elastic Beanstalk)
<br><br/>
{% highlight c# tabtitle="C#" %}

dotnet add package SkiaSharp.NativeAssets.Linux.NoDependencies --version 3.116.1

{% endhighlight %}

For Ubuntu 22.04.5 LTS on ARM64, use `SkiaSharp.NativeAssets.Linux`<br>
Check your `.csproj` file for the following entry: `<PackageReference Include="SkiaSharp.NativeAssets.Linux" Version="3.116.1" />`

</td>
</tr>
</table>