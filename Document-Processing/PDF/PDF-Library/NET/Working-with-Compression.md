---
title: Working with Compression | PDF library | Syncfusion
description: Learn how to reduce the size of a PDF document in .NET by compressing images, optimizing embedded fonts and page contents, and removing metadata using the Syncfusion PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Compression

Essential<sup>&reg;</sup> PDF allows you to [compress a PDF](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/compress-pdf) document and thereby reduce its file size in the following ways:

* [Compress an existing PDF document](#compressing-an-existing-pdf-document)
* [Compress the content of a new document](#compressing-the-pdf-content)
* [Compress images in a new or existing document](#compressing-images)

To quickly get started with compressing an existing PDF document in .NET, check this video:
{% youtube "https://www.youtube.com/watch?v=v-rZYeyWYZU" %}



## Compressing an existing PDF document

You can compress an existing PDF document by using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) and [PdfCompressionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html) classes. The following compression techniques are supported:

1. [Compress the images with image quality](#compressing-images-with-image-quality)
2. [Optimize embedded fonts](#optimizing-embedded-fonts)
3. [Optimize page contents](#optimizing-page-contents)
4. [Remove metadata information](#removing-metadata-information)

## Compressing images with image quality

You can compress all the images in an existing PDF document by enabling the [CompressImages](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html#Syncfusion_Pdf_PdfCompressionOptions_CompressImages) property and assigning a value to the [ImageQuality](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html#Syncfusion_Pdf_PdfCompressionOptions_ImageQuality) property of the [PdfCompressionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html) class. The `ImageQuality` property is a percentage value that controls the image quality: `100` keeps the image unchanged and lower values reduce the quality (down to `10`).

The following code example illustrates how to compress the images in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Compression/Compress-the-images-in-an-existing-PDF-document/.NET/Compress-the-images-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a new compression options instance
PdfCompressionOptions options = new PdfCompressionOptions();
// Enable image compression
options.CompressImages = true;
// Set the image quality (percentage)
options.ImageQuality = 50;

// Apply the compression options to the document
loadedDocument.Compress(options);

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a new compression options instance
PdfCompressionOptions options = new PdfCompressionOptions();
// Enable image compression
options.CompressImages = true;
// Set the image quality (percentage)
options.ImageQuality = 50;

// Assign the compression options to the document
loadedDocument.CompressionOptions = options;

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Create a new compression options instance
Dim options As New PdfCompressionOptions()
' Enable image compression
options.CompressImages = True
' Set the image quality (percentage)
options.ImageQuality = 50

' Assign the compression options to the document
loadedDocument.CompressionOptions = options

' Save the document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Compress-the-images-in-an-existing-PDF-document).

## Optimizing embedded fonts

You can optimize the embedded fonts in an existing PDF document by enabling the [OptimizeFont](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html#Syncfusion_Pdf_PdfCompressionOptions_OptimizeFont) property of the [PdfCompressionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html) class. This technique reduces the font file size by removing all unused glyph data.

The following code example illustrates how to optimize embedded fonts in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Compression/Optimize-embedded-font-in-an-existing-PDF-document/.NET/Optimize-embedded-font-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a new compression options instance
PdfCompressionOptions options = new PdfCompressionOptions();
// Enable font optimization
options.OptimizeFont = true;

// Apply the compression options to the document
loadedDocument.Compress(options);

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a new compression options instance
PdfCompressionOptions options = new PdfCompressionOptions();
// Enable font optimization
options.OptimizeFont = true;

// Assign the compression options to the document
loadedDocument.CompressionOptions = options;

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Create a new compression options instance
Dim options As New PdfCompressionOptions()
' Enable font optimization
options.OptimizeFont = True

' Assign the compression options to the document
loadedDocument.CompressionOptions = options

' Save the document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Optimize-embedded-font-in-an-existing-PDF-document).

> NOTE: Font compression is supported only with TrueType and Type 2 embedded fonts.

## Optimizing page contents

You can compress the page contents in an existing PDF document by enabling the [OptimizePageContents](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html#Syncfusion_Pdf_PdfCompressionOptions_OptimizePageContents) property of the [PdfCompressionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html) class. This technique removes unwanted data in the content streams, such as commented lines and white spaces.

The following code example illustrates how to optimize page contents in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Compression/Optimize-page-contents-in-an-existing-PDF-document/.NET/Optimize-page-contents-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a new compression options instance
PdfCompressionOptions options = new PdfCompressionOptions();
// Enable page content optimization
options.OptimizePageContents = true;

// Apply the compression options to the document
loadedDocument.Compress(options);

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a new compression options instance
PdfCompressionOptions options = new PdfCompressionOptions();
// Enable page content optimization
options.OptimizePageContents = true;

// Assign the compression options to the document
loadedDocument.CompressionOptions = options;

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Create a new compression options instance
Dim options As New PdfCompressionOptions()
' Enable page content optimization
options.OptimizePageContents = True

' Assign the compression options to the document
loadedDocument.CompressionOptions = options

' Save the document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Optimize-page-contents-in-an-existing-PDF-document).

## Removing metadata information

You can reduce the PDF file size by removing the PDF document metadata information. This can be achieved by enabling the [RemoveMetadata](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html#Syncfusion_Pdf_PdfCompressionOptions_RemoveMetadata) property of the [PdfCompressionOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionOptions.html) class.

The following code example illustrates how to remove metadata from an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Compression/Reduce-PDF-file-size-by-removing-PDF-metadata/.NET/Reduce-PDF-file-size-by-removing-PDF-metadata/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a new compression options instance
PdfCompressionOptions options = new PdfCompressionOptions();
// Enable removal of metadata information
options.RemoveMetadata = true;

// Apply the compression options to the document
loadedDocument.Compress(options);

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a new compression options instance
PdfCompressionOptions options = new PdfCompressionOptions();
// Enable removal of metadata information
options.RemoveMetadata = true;

// Assign the compression options to the document
loadedDocument.CompressionOptions = options;

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Create a new compression options instance
Dim options As New PdfCompressionOptions()
' Enable removal of metadata information
options.RemoveMetadata = True

' Assign the compression options to the document
loadedDocument.CompressionOptions = options

' Save the document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Reduce-PDF-file-size-by-removing-PDF-metadata).

## Compressing the PDF content

Essential<sup>&reg;</sup> PDF allows you to control the compression level of the document by using the [PdfCompressionLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionLevel.html) enumeration. The compression level can be set to `Best`, `Normal`, or `None`.

Content compression works by:

1. Removing all extra space characters.
2. Inserting a single repeat character to indicate a string of repeated characters.
3. Substituting smaller bit strings for frequently occurring characters.

The following code example illustrates how to compress the content of a new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Compression/Compress-the-content-of-the-PDF-document/.NET/Compress-the-content-of-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the compression level to best
document.Compression = PdfCompressionLevel.Best;
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
string text = "Hello World!!!";
PdfTextElement textElement = new PdfTextElement(text, font);
PdfLayoutResult result = textElement.Draw(page, new RectangleF(0, 0, font.MeasureString(text).Width, page.GetClientSize().Height));
// Add the text element 1000 times to fill the page
for (int i = 0; i < 1000; i++)
{
    result = textElement.Draw(result.Page, new RectangleF(0, result.Bounds.Bottom + 10, font.MeasureString(text).Width, page.GetClientSize().Height));
}

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the compression level to best
document.Compression = PdfCompressionLevel.Best;
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
string text = "Hello World!!!";
PdfTextElement textElement = new PdfTextElement(text, font);
PdfLayoutResult result = textElement.Draw(page, new RectangleF(0, 0, font.MeasureString(text).Width, page.GetClientSize().Height));
// Add the text element 1000 times to fill the page
for (int i = 0; i < 1000; i++)
{
    result = textElement.Draw(result.Page, new RectangleF(0, result.Bounds.Bottom + 10, font.MeasureString(text).Width, page.GetClientSize().Height));
}

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Set the compression level to best
document.Compression = PdfCompressionLevel.Best
' Add a page to the document
Dim page As PdfPage = document.Pages.Add()

' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics
' Set the font
Dim font As New PdfStandardFont(PdfFontFamily.Helvetica, 20)
Dim text As String = "Hello World!!!"
Dim textElement As New PdfTextElement(text, font)
Dim result As PdfLayoutResult = textElement.Draw(page, New RectangleF(0, 0, font.MeasureString(text).Width, page.GetClientSize().Height))
' Add the text element 1000 times to fill the page
For i As Integer = 0 To 999
    result = textElement.Draw(result.Page, New RectangleF(0, result.Bounds.Bottom + 10, font.MeasureString(text).Width, page.GetClientSize().Height))
Next

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can also compress the content of an existing PDF document by specifying a [PdfCompressionLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompressionLevel.html) and disabling the [IncrementalUpdate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfFileStructure.html#Syncfusion_Pdf_PdfFileStructure_IncrementalUpdate) property of the [FileStructure](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfFileStructure.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Disable incremental updates
loadedDocument.FileStructure.IncrementalUpdate = false;

// Set the compression level
loadedDocument.Compression = PdfCompressionLevel.Best;

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Disable incremental updates
loadedDocument.FileStructure.IncrementalUpdate = false;

// Set the compression level
loadedDocument.Compression = PdfCompressionLevel.Best;

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Disable incremental updates
loadedDocument.FileStructure.IncrementalUpdate = False

' Set the compression level
loadedDocument.Compression = PdfCompressionLevel.Best

' Save the document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Compress-the-content-of-the-PDF-document).

## Compressing images

Essential<sup>&reg;</sup> PDF allows you to compress and change the quality of an image in a PDF document by assigning a value to the [Quality](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap_Quality) property of the [PdfBitmap](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html) class.

//PDF doesn't support direct image compression in C#/.NET cross platforms.

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;

// Load the image from disk
PdfBitmap image = new PdfBitmap("Input.jpg");
// Reduce the quality of the image
image.Quality = 50;
// Draw the image on the page
image.Draw(page, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a page to the document
Dim page As PdfPage = document.Pages.Add()
' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics

' Load the image from disk
Dim image As New PdfBitmap("Input.jpg")
' Reduce the quality of the image
image.Quality = 50
' Draw the image on the page
image.Draw(page, New PointF(0, 0))

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Compress-quality-of-image-in-PDF-document).

You can compress the images in an existing PDF document by extract the images using [ExtractImages]() method and assigning the image quality using [Quality](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html#Syncfusion_Pdf_Graphics_PdfBitmap_Quality) property available in the [PdfBitmap](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html) class. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//PDF doesn't support direct image compression in C#/.NET cross platforms.

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Disable incremental updates
loadedDocument.FileStructure.IncrementalUpdate = false;

// Iterate all pages to replace images
foreach (PdfPageBase page in loadedDocument.Pages)
{
    // Extract the images from the page
    Image[] extractedImages = page.ExtractImages();
    // Iterate all extracted images
    for (int j = 0; j < extractedImages.Length; j++)
    {
        // Load the extracted image
        PdfBitmap image = new PdfBitmap(extractedImages[j]);
        // Reduce the quality of the image
        image.Quality = 50;
        // Replace the compressed image with the original image in the PDF document
        page.ReplaceImage(j, image);
    }
}

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Exporting
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Disable incremental updates
loadedDocument.FileStructure.IncrementalUpdate = False

' Iterate all pages to replace images
For Each page As PdfPageBase In loadedDocument.Pages
    ' Extract the images from the page
    Dim extractedImages As Image() = page.ExtractImages()
    ' Iterate all extracted images
    For j As Integer = 0 To extractedImages.Length - 1
        ' Load the extracted image
        Dim image As New PdfBitmap(extractedImages(j))
        ' Reduce the quality of the image
        image.Quality = 50
        ' Replace the compressed image with the original image in the PDF document
        page.ReplaceImage(j, image)
    Next
Next

' Save the document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Compression/Compress-and-replace-image-in-a-PDF-document).