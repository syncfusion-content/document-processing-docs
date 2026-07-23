---
title: Working with Image Extraction | Syncfusion
description: This section explains how to extract images and image information from a PDF document using the Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Image Extraction

Syncfusion<sup>&reg;</sup> PDF provides support to extract images from a particular page or from an entire PDF document. You can extract images from a page using the [ExtractImages](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ExtractImages().html) method of the [PdfPageBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html) class. For lower memory consumption, use the [PdfDocumentExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfDocumentExtractor.html) class.

## Extracting images from a PDF page

The following code example shows how to extract images from a specific page of a PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Image%20Extraction/Extract-images-from-a-PDF-pages/.NET/Extract-images-from-a-PDF-pages/Program.cs" %}

using System.IO;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputStream);
//Load the first page.
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extract images from the first page.
Stream[] extractedImages = pageBase.ExtractImages();

//Save the extracted images to disk.
for (int i = 0; i < extractedImages.Length; i++)
{
    FileStream outputStream = new FileStream($"Image{i + 1}.png", FileMode.Create, FileAccess.Write);
    extractedImages[i].CopyTo(outputStream);
    outputStream.Close();
    extractedImages[i].Close();
}

//Close the document.
loadedDocument.Close(true);
inputStream.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extract images from the first page.
Image[] extractedImages = pageBase.ExtractImages();

//Save the extracted images to disk.
for (int i = 0; i < extractedImages.Length; i++)
{
    extractedImages[i].Save($"Image{i + 1}.png", ImageFormat.Png);
}

//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports System.Drawing.Imaging
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Exporting
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Load the first page.
Dim pageBase As PdfPageBase = loadedDocument.Pages(0)

'Extract images from the first page.
Dim extractedImages As Image() = pageBase.ExtractImages()

'Save the extracted images to disk.
For i As Integer = 0 To extractedImages.Length - 1
    extractedImages(i).Save($"Image{i + 1}.png", ImageFormat.Png)
Next

'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-images-from-a-PDF-pages/).

> **Note:** The return type of `ExtractImages` is platform-dependent. On cross-platform targets, the method returns `Stream[]`; on Windows targets, it returns `Image[]`. To extract images in a .NET Core application, add the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package to your project.

## Extracting image information

To extract the image properties such as bounds, image index, and more from a page, you can use the [ImagesInfo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ImagesInfo) property of the [PdfPageBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html) class. The property returns an array of [PdfImageInfo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Exporting.PdfImageInfo.html) objects, each of which contains the image bounds, the page index, and a reference to the extracted image stream.

The following code example shows how to extract image information from a PDF page.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Image%20Extraction/Extract-the-image-info-from-a-PDF-page/.NET/Extract-the-image-info-from-a-PDF-page/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputStream);
//Load the first page.
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extract the image information from the first page.
PdfImageInfo[] imagesInfo = pageBase.ImagesInfo;

//Iterate through each image and access its details.
foreach (PdfImageInfo info in imagesInfo)
{
    System.Console.WriteLine($"Bounds: {info.Bounds}, Index: {info.ImageIndex}");
}

//Close the document.
loadedDocument.Close(true);
inputStream.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extract the image information from the first page.
PdfImageInfo[] imagesInfo = pageBase.ImagesInfo;

//Iterate through each image and access its details.
foreach (PdfImageInfo info in imagesInfo)
{
    System.Console.WriteLine($"Bounds: {info.Bounds}, Index: {info.ImageIndex}");
}

//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Exporting
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Load the first page.
Dim pageBase As PdfPageBase = loadedDocument.Pages(0)

'Extract the image information from the first page.
Dim imagesInfo As PdfImageInfo() = pageBase.ImagesInfo

'Iterate through each image and access its details.
For Each info As PdfImageInfo In imagesInfo
    System.Console.WriteLine($"Bounds: {info.Bounds}, Index: {info.ImageIndex}")
Next

'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-the-image-info-from-a-PDF-page/).

> **Note:** Each [PdfImageInfo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Exporting.PdfImageInfo.html) object exposes the `Bounds`, `ImageIndex`, and `Image` properties. The `Image` property provides access to the underlying image; the `Bounds` property returns the image location on the page; and the `ImageIndex` property returns the index of the image within the page.

## Extract images from PDF documents with better memory consumption and performance

The [PdfDocumentExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfDocumentExtractor.html) class extracts images from an entire PDF document using a streaming approach, which keeps memory usage low even for large documents. The class exposes the [PageCount](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfDocumentExtractor.html#Syncfusion_Pdf_Parsing_PdfDocumentExtractor_PageCount) property and the [ExtractImages()](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfDocumentExtractor.html#Syncfusion_Pdf_Parsing_PdfDocumentExtractor_ExtractImages) overloads, which allow you to extract images from the entire document or from a specific page range.

> **Note:** `PdfDocumentExtractor` is currently available on Windows-specific targets. On cross-platform targets, iterate the pages of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) and call [ExtractImages](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ExtractImages().html) on each page to achieve similar results.

The following code example illustrates how to extract images from an entire PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Image%20Extraction/Extract-images-from-PDF-documents/.NET/Extract-images-from-PDF-documents/Program.cs" %}

using System.IO;
using Syncfusion.Pdf.Parsing;

//Get stream from an existing PDF document.
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
//Initialize the PDF document extractor.
PdfDocumentExtractor documentExtractor = new PdfDocumentExtractor();
//Load the PDF document.
documentExtractor.Load(inputStream);
//Get the page count.
int pageCount = documentExtractor.PageCount;

//Extract images from the entire PDF document.
Stream[] images = documentExtractor.ExtractImages();

//Extract images by page range (pages 2 through 6).
Stream[] streams = documentExtractor.ExtractImages(2, 6);

//Save the extracted images to disk.
for (int i = 0; i < images.Length; i++)
{
    FileStream outputStream = new FileStream($"Image{i + 1}.png", FileMode.Create, FileAccess.Write);
    images[i].CopyTo(outputStream);
    outputStream.Close();
    images[i].Close();
}

//Release all resources used by the PDF image extractor.
documentExtractor.Dispose();
inputStream.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using Syncfusion.Pdf.Parsing;

//Get stream from an existing PDF document.
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
//Initialize the PDF document extractor.
PdfDocumentExtractor documentExtractor = new PdfDocumentExtractor();
//Load the PDF document.
documentExtractor.Load(inputStream);
//Get the page count.
int pageCount = documentExtractor.PageCount;

//Extract images from the entire PDF document.
Image[] images = documentExtractor.ExtractImages();

//Extract images by page range (pages 2 through 6).
Image[] streams = documentExtractor.ExtractImages(2, 6);

//Save the extracted images to disk.
for (int i = 0; i < images.Length; i++)
{
    images[i].Save($"Image{i + 1}.png", ImageFormat.Png);
}

//Release all resources used by the PDF image extractor.
documentExtractor.Dispose();
inputStream.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.IO
Imports System.Drawing
Imports System.Drawing.Imaging
Imports Syncfusion.Pdf.Parsing

'Get stream from an existing PDF document.
Dim inputStream As FileStream = New FileStream("Input.pdf", FileMode.Open, FileAccess.Read)
'Initialize the PDF document extractor.
Dim documentExtractor As PdfDocumentExtractor = New PdfDocumentExtractor()
'Load the PDF document.
documentExtractor.Load(inputStream)
'Get the page count.
Dim pageCount As Integer = documentExtractor.PageCount

'Extract images from the entire PDF document.
Dim images As Image() = documentExtractor.ExtractImages()

'Extract images by page range.
Dim streams As Image() = documentExtractor.ExtractImages(2, 6)

'Save the extracted images to disk.
For i As Integer = 0 To images.Length - 1
    images(i).Save($"Image{i + 1}.png", ImageFormat.Png)
Next

'Release all resources used by the PDF image extractor.
documentExtractor.Dispose()
inputStream.Close()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Image%20Extraction/Extract-images-from-PDF-documents).

> **Note:** The `ExtractImages(startIndex, endIndex)` overload extracts images from a specific page range, where both the start and end indices are inclusive and use a 1-based page numbering. Always call `Dispose` on the `PdfDocumentExtractor` to release the underlying stream and other resources.

## Troubleshooting and FAQs

### Image extraction fails on cross-platform targets

| Issue | Image extraction throws a `PlatformNotSupportedException` or returns no images on Linux, macOS, or other non-Windows targets. |
|-------|-----|
| **Reason** | Some image formats used in PDF documents rely on platform-specific native libraries. The default Syncfusion<sup>&reg;</sup> PDF package does not include the imaging helpers required for cross-platform scenarios. |
| **Solution** | Add the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) NuGet package to your project. This package provides the required image decoders for .NET Core, .NET, Xamarin, and Blazor applications. |

### Missing SkiaSharp native assets on Ubuntu ARM64

<table>
  <tr>
    <th style="font-size:14px; width:100px;">Issue</th>
    <td style="font-size:14px;">Image extraction fails on Ubuntu 22.04.5 LTS servers running on ARM64 architecture due to missing SkiaSharp native dependencies.</td>
  </tr>
  <tr>
    <th style="font-size:14px; width:100px;">Reason</th>
    <td>SkiaSharp requires platform-specific native binaries for graphics operations:
      <ol>
        <li>The default SkiaSharp package does not include ARM64 Linux binaries.</li>
        <li>Ubuntu ARM64 environments lack these native assets by default.</li>
        <li>SkiaSharp fails to initialize without these dependencies.</li>
      </ol>
    </td>
  </tr>
  <tr>
    <th style="font-size:14px; width:100px;">Solution</th>
    <td>Add the appropriate native assets package based on your environment:
      <ol>
        <li>For standard Linux environments (Ubuntu, Alpine, CentOS, Debian, Fedora, RHEL, Azure App Service, Google App Engine):
{% highlight c# tabtitle="C#" %}
dotnet add package SkiaSharp.NativeAssets.Linux --version 3.116.1
{% endhighlight %}
        </li>
        <li>For cloud native deployments (AWS Lambda, AWS Elastic Beanstalk):
{% highlight c# tabtitle="C#" %}
dotnet add package SkiaSharp.NativeAssets.Linux.NoDependencies --version 3.116.1
{% endhighlight %}
        </li>
      </ol>
      For Ubuntu 22.04.5 LTS on ARM64, use <code>SkiaSharp.NativeAssets.Linux</code>. Verify your <code>.csproj</code> file contains the following entry:
{% highlight c# tabtitle="XML" %}
&lt;PackageReference Include="SkiaSharp.NativeAssets.Linux" Version="3.116.1" /&gt;
{% endhighlight %}
    </td>
  </tr>
</table>

### Extracted image count does not match the visual count

| Issue | The number of images returned by `ExtractImages` or `ImagesInfo` differs from the number of images visible in the PDF. |
|-------|-----|
| **Reason** | Some PDFs reuse the same image resource on a page, or store images as inline masks, soft masks, or tiling patterns. These resources are counted separately but may produce fewer distinct images when rendered. |
| **Solution** | Use the `Image` property of each [PdfImageInfo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Exporting.PdfImageInfo.html) entry to deduplicate by reference, or call `ExtractImages` on each page individually and merge the results. |

## See also

* [Working with Images](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-images)
* [Working with Document Conversions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-document-conversions)
* [Working with Pages](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-pages)
* [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
* [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)