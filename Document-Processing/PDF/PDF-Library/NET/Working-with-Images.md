---
title: Working with Images | Syncfusion
description: Add or replace raster and vector images in PDF documents with Syncfusion .NET PDF, enabling flexible image handling and customization.
platform: document-processing
control: PDF
documentation: UG
---

# Working with PDF Images and Graphics

Syncfusion<sup>&reg;</sup> PDF supports both raster and vector images.

Images are supported through the [PdfImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfImage.html) class, which is an abstract base class that provides the common functionality for [PdfBitmap](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html) and [PdfMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafile.html) classes.

## Inserting an image in a new document

The following raster images are supported in Essential<sup>&reg;</sup> PDF.

* BMP
* JPEG
* JPEG with Exif standard
* GIF
* PNG
* TIFF
* ICO and ICON

You can load image streams, files on disk, and use System.Drawing.Bitmap objects to draw the images through the [DrawImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawImage_Syncfusion_Pdf_Graphics_PdfImage_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) class.

N> For using image formats other than PNG and JPEG in ASP.NET Core, you need to include the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package in your project. This package provides the necessary support for handling other raster image formats like BMP, GIF, TIFF, and ICO.

The following code snippet shows how to add a file from disk to the PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Insert-image-in-a-new-PDF-document/.NET/Insert-image-in-a-new-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the image from the disk.
FileStream imageStream = new FileStream("Autumn Leaves.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap image = new PdfBitmap(imageStream);
//Draw the image.
graphics.DrawImage(image, 0, 0);

//Save and close the document.
doc.Save("Output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the image from the disk.
PdfBitmap image = new PdfBitmap("Autumn Leaves.jpg");
//Draw the image.
graphics.DrawImage(image, 0, 0);

//Save and close the document.
doc.Save("Output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.
Dim doc As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = doc.Pages.Add()

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Load the image from the disk.
Dim image As New PdfBitmap("Autumn Leaves.jpg")
'Draw the image.
graphics.DrawImage(image, 0, 0)

'Save and close the document.
doc.Save("Output.pdf")
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Insert-image-in-a-new-PDF-document/).

## Inserting an image in an existing document

You can add images to an existing PDF document by loading the PDF with [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) and drawing the image on a [PdfLoadedPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPage.html). The following code example shows how to add an image loaded from a file path or from a stream.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Insert-image-in-an-existing-PDF-document/.NET/Insert-image-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument doc = new PdfLoadedDocument(inputStream);
//Get the first page from the document.
PdfLoadedPage page = doc.Pages[0] as PdfLoadedPage;

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the image from a file.
FileStream imageStream = new FileStream("Autumn Leaves.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap image = new PdfBitmap(imageStream);
//Draw the image.
graphics.DrawImage(image, 0, 0);

//Save and close the document.
doc.Save("Output.pdf");
doc.Close(true);
imageStream.Close();
inputStream.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load a PDF document
PdfLoadedDocument doc = new PdfLoadedDocument("input.pdf");
//Get first page from document
PdfLoadedPage page = doc.Pages[0] as PdfLoadedPage;

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Load the image from the disk
PdfBitmap image = new PdfBitmap("Autumn Leaves.jpg");
//Draw the image
graphics.DrawImage(image, 0, 0);

//Save the document
doc.Save("Output.pdf");
//Close the document
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load a PDF document
Dim doc As New PdfLoadedDocument("input.pdf")
'Get first page from document
Dim page As PdfLoadedPage = TryCast(doc.Pages(0), PdfLoadedPage)

'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
'Load the image from the disk
Dim image As New PdfBitmap("Autumn Leaves.jpg")
'Draw the image
graphics.DrawImage(image, 0, 0)

'Save the document
doc.Save("Output.pdf")
'Close the document
doc.Close(True)

{% endhighlight %}
{% endtabs %}  

To add image from stream, use the below code snippet.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Insert-image-in-an-existing-PDF-document/.NET/Insert-image-in-an-existing-PDF-document/Program.cs" %} 

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument doc = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = doc.Pages[0] as PdfLoadedPage;

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the image from the disk
FileStream imageStream = new FileStream("Autumn Leaves.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap image = new PdfBitmap(imageStream);
//Draw the image
graphics.DrawImage(image, 0, 0);

//Save the document
doc.Save("Output.pdf");
//Close the document
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load a PDF document
PdfLoadedDocument doc = new PdfLoadedDocument("input.pdf");
//Get first page from document
PdfLoadedPage page = doc.Pages[0] as PdfLoadedPage;

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Load the image
Stream imageStream = File.OpenRead("Autumn Leaves.jpg");
PdfBitmap image = new PdfBitmap(imageStream);
//Draw the image.
graphics.DrawImage(image, 0, 0);

//Save and close the document.
doc.Save("Output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim doc As New PdfLoadedDocument("Input.pdf")
'Get the first page from the document.
Dim page As PdfLoadedPage = TryCast(doc.Pages(0), PdfLoadedPage)

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Load the image from a stream.
Dim imageStream As Stream = File.OpenRead("Autumn Leaves.jpg")
Dim image As New PdfBitmap(imageStream)
'Draw the image.
graphics.DrawImage(image, 0, 0)

'Save and close the document.
doc.Save("Output.pdf")
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Insert-image-in-an-existing-PDF-document/).


## Inserting a vector image

Syncfusion<sup>&reg;</sup> PDF supports adding metafile vector images. During the insertion, the metafile graphics are converted to native PDF graphics, which support text selection and searching. The following metafile formats are supported.

* EMF (Enhanced Metafile)
* EMF Plus
* EMF Plus Dual
* WMF (Windows Metafile)

The [PdfMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafile.html) class is used to load metafile images. The [PdfMetafileLayoutFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafileLayoutFormat.html) class allows you to control how the metafile is paginated across multiple pages, including options to split text and images at page boundaries.

The following code example illustrates this,

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %} 

//PDF doesn't support inserting a vector image C#.NET Cross platforms.

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Drawing;

//Create a PDF Document
PdfDocument doc = new PdfDocument();
//Add pages to the document
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Create the layout format
PdfMetafileLayoutFormat format = new PdfMetafileLayoutFormat();
//Split text and image between pages
format.SplitImages = true;
format.SplitTextLines = true;
//Create a Metafile instance
PdfMetafile metaChart = new PdfMetafile("MetaChart.emf");
//Draw the Metafile in the page
metaChart.Draw(page, PointF.Empty, format);

//Save the document
doc.Save("Output.pdf");
//Close the document
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Create a PDF Document
Dim doc As New PdfDocument()
'Add pages to the document
Dim page As PdfPage = doc.Pages.Add()

'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
'Create the layout format
Dim format As New PdfMetafileLayoutFormat()
'Split text and image between pages
format.SplitImages = True
format.SplitTextLines = True
'Create a Metafile instance
Dim metaChart As New PdfMetafile("MetaChart.emf")
'Draw the Metafile in the page
metaChart.Draw(page, PointF.Empty, format)

'Save the document
doc.Save("Output.pdf")
'Close the document
doc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Insert-vector-image-in-a-PDF-document/). 

## Working with image masking

Syncfusion<sup>&reg;</sup> PDF supports image masking through the [PdfImageMask](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfImageMask.html) class. An image mask is a grayscale image that controls the opacity of the corresponding pixels in the source image when the image is drawn on a page.

The following code example shows how to add a mask to a TIFF image.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Add-a-mask-to-TIFF-image/.NET/Add-a-mask-to-TIFF-image/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the TIFF image.
FileStream imageStream = new FileStream("image.tif", FileMode.Open, FileAccess.Read);
PdfTiffImage image = new PdfTiffImage(imageStream);
//Create the masking image.
FileStream maskStream = new FileStream("mask.bmp", FileMode.Open, FileAccess.Read);
PdfImageMask mask = new PdfImageMask(new PdfTiffImage(maskStream));
image.Mask = mask;
//Draw the image.
graphics.DrawImage(image, 0, 0);

//Save and close the document.
doc.Save("Output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the TIFF image.
PdfTiffImage image = new PdfTiffImage("image.tif");
//Create the masking image.
PdfImageMask mask = new PdfImageMask(new PdfBitmap("mask.bmp"));
image.Mask = mask;
//Draw the image.
graphics.DrawImage(image, 0, 0);

//Save and close the document.
doc.Save("Output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a PDF document.
Dim doc As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = doc.Pages.Add()

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Load the TIFF image.
Dim image As New PdfTiffImage("image.tif")
'Create the masking image.
Dim mask As New PdfImageMask(New PdfBitmap("mask.bmp"))
image.Mask = mask
'Draw the image.
graphics.DrawImage(image, 0, 0)

'Save and close the document.
doc.Save("Output.pdf")
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Add-a-mask-to-TIFF-image/).

N> Image masking in ASP.NET Core requires the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package.

## Replacing images in an existing PDF document

Syncfusion<sup>&reg;</sup> PDF allows you to replace images in an existing PDF document. The [ReplaceImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ReplaceImage_System_Int32_Syncfusion_Pdf_Graphics_PdfImage_) method of [PdfLoadedPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPage.html) replaces the image at the specified index with a new `PdfImage` instance.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Create the replacement image.
FileStream imageStream = new FileStream(Path.GetFullPath("Autumn Leaves.jpg"), FileMode.Open, FileAccess.Read);
PdfBitmap bmp = new PdfBitmap(imageStream);
//Replace the first image in the first page.
loadedDocument.Pages[0].ReplaceImage(0, bmp);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument doc = new PdfLoadedDocument("image.pdf");
//Create the replacement image.
PdfBitmap image = new PdfBitmap("Autumn Leaves.jpg");
//Replace the first image in the first page.
doc.Pages[0].ReplaceImage(0, image);

//Save and close the document.
doc.Save("Output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Graphics

'Load the PDF document.
Dim doc As New PdfLoadedDocument("image.pdf")
'Create the replacement image.
Dim image As New PdfBitmap("Autumn Leaves.jpg")
'Replace the first image in the first page.
doc.Pages(0).ReplaceImage(0, image)

'Save and close the document.
doc.Save("Output.pdf")
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Replace-image-in-an-existing-PDF-document/).

## Image pagination

You can allow a large image to paginate across multiple pages in the PDF document. This is done by setting the [Layout](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutFormat.html#Syncfusion_Pdf_Graphics_PdfLayoutFormat_Layout) property of the [PdfLayoutFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutFormat.html) class to [PdfLayoutType.Paginate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutType.html) and drawing the image with the `Draw(page, x, y, format)` overload of `PdfBitmap`.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Paginate-an-image-in-PDF-document/.NET/Paginate-an-image-in-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document.
PdfDocument doc = new PdfDocument();
//Add a new page.
PdfPage page = doc.Pages.Add();

//Load a bitmap.
FileStream imageStream = new FileStream("Autumn Leaves.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap image = new PdfBitmap(imageStream);
//Set layout properties to make the element break across pages.
PdfLayoutFormat format = new PdfLayoutFormat();
format.Break = PdfLayoutBreakType.FitPage;
format.Layout = PdfLayoutType.Paginate;
//Draw the image.
image.Draw(page, 20, 400, format);

//Save and close the PDF.
doc.Save("output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document.
PdfDocument doc = new PdfDocument();
//Add a new page.
PdfPage page = doc.Pages.Add();

//Load a bitmap.
PdfBitmap image = new PdfBitmap("input.jpg");
//Set layout properties to make the element break across pages.
PdfLayoutFormat format = new PdfLayoutFormat();
format.Break = PdfLayoutBreakType.FitPage;
format.Layout = PdfLayoutType.Paginate;
//Draw the image.
image.Draw(page, 20, 400, format);

//Save and close the PDF.
doc.Save("output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document.
Dim doc As New PdfDocument()
'Add a new page.
Dim page As PdfPage = doc.Pages.Add()

'Load a bitmap.
Dim image As New PdfBitmap("input.jpg")
'Set layout properties to make the element break across pages.
Dim format As New PdfLayoutFormat()
format.Break = PdfLayoutBreakType.FitPage
format.Layout = PdfLayoutType.Paginate
'Draw the image.
image.Draw(page, 20, 400, format)

'Save and close the PDF.
doc.Save("output.pdf")
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Paginate-an-image-in-PDF-document). 

## Clipping and graphics state

This example demonstrates how to draw an image in a PDF document and apply a clipping region using the [SetClip](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_SetClip_System_Drawing_RectangleF_) method. Clipping restricts drawing to a defined area, allowing partial rendering of content. The code also uses the [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_Save) and [Restore](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_Restore_Syncfusion_Pdf_Graphics_PdfGraphicsState_) methods of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) to manage the graphics state, enabling temporary clipping and restoring the full drawing area afterward.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Clipping-and-graphics-state/.NET/Clipping-and-graphics-state/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
using (PdfDocument document = new PdfDocument())
{
    // Add a page to the document
    PdfPage page = document.Pages.Add();
    // Get the graphics object for the page
    PdfGraphics graphics = page.Graphics;
    // Open the image file as a stream
    using FileStream imageStream = new FileStream(Path.GetFullPath("Input.png"), FileMode.Open, FileAccess.Read);
    // Load the image from the stream
    PdfBitmap image = new PdfBitmap(imageStream);

    // Save the current graphics state (to restore later)
    PdfGraphicsState state = graphics.Save();

    // Define a rectangular clipping region
    RectangleF clipRect = new RectangleF(50, 50, 200, 100);
    graphics.SetClip(clipRect);

    // Draw the image — only the part within the clipping region will be visible
    graphics.DrawImage(image, new RectangleF(40, 60, 150, 80));

    // Restore the graphics state to remove the clipping region
    graphics.Restore(state);
    // Draw the image again — this time the full image will be visible
    graphics.DrawImage(image, new RectangleF(60, 160, 150, 80));

    // Save the PDF document
    document.Save("Output.pdf");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
using (PdfDocument document = new PdfDocument())
{
    // Add a page to the document
    PdfPage page = document.Pages.Add();
    // Get the graphics object for the page
    PdfGraphics graphics = page.Graphics;
    // Open the image file as a stream
    using FileStream imageStream = new FileStream(Path.GetFullPath("Input.png"), FileMode.Open, FileAccess.Read);
    // Load the image from the stream
    PdfBitmap image = new PdfBitmap(imageStream);

    // Save the current graphics state (to restore later)
    PdfGraphicsState state = graphics.Save();

    // Define a rectangular clipping region
    RectangleF clipRect = new RectangleF(50, 50, 200, 100);
    graphics.SetClip(clipRect);

    // Draw the image — only the part within the clipping region will be visible
    graphics.DrawImage(image, new RectangleF(40, 60, 150, 80));

    // Restore the graphics state to remove the clipping region
    graphics.Restore(state);
    // Draw the image again — this time the full image will be visible
    graphics.DrawImage(image, new RectangleF(60, 160, 150, 80));

    // Save the PDF document
    document.Save("Output.pdf");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Using document As New PdfDocument()
    ' Add a page to the document
    Dim page As PdfPage = document.Pages.Add()

    ' Get the graphics object for the page
    Dim graphics As PdfGraphics = page.Graphics

    ' Open the image file as a stream
    Using imageStream As New FileStream(Path.GetFullPath("Input.png"), FileMode.Open, FileAccess.Read)
    ' Load the image from the stream
    Dim image As New PdfBitmap(imageStream)

    ' Save the current graphics state (to restore later)
    Dim state As PdfGraphicsState = graphics.Save()

    ' Define a rectangular clipping region
    Dim clipRect As New RectangleF(50, 50, 200, 100)
    graphics.SetClip(clipRect)

    ' Draw the image — only the part within the clipping region will be visible
    graphics.DrawImage(image, New RectangleF(40, 60, 150, 80))

    ' Restore the graphics state to remove the clipping region
    graphics.Restore(state)

    ' Draw the image again — this time the full image will be visible
    graphics.DrawImage(image, New RectangleF(60, 160, 150, 80))
    End Using

    ' Save the PDF document
    document.Save("Output.pdf")
End Using

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Clipping-and-graphics-state/.NET).

## Applying transparency and rotation to the image

You can add transparency and rotation to the image using the [SetTransparency](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_SetTransparency_System_Single_) and [RotateTransform](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_RotateTransform_System_Single_) methods of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The transparency value is a floating-point number between 0 (fully transparent) and 1 (fully opaque). This is demonstrated in the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Add-transparancy-and-rotation-to-the-image/.NET/Add-transparancy-and-rotation-to-the-image/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create the document.
PdfDocument doc = new PdfDocument();
//Add a new page.
PdfPage page = doc.Pages.Add();

//Load the image as a stream.
FileStream imageStream = new FileStream("input.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap image = new PdfBitmap(imageStream);
//Save the current graphics state.
PdfGraphicsState state = page.Graphics.Save();
//Translate the coordinate system to the required position.
page.Graphics.TranslateTransform(20, 100);
//Apply transparency.
page.Graphics.SetTransparency(0.5f);
//Rotate the coordinate system.
page.Graphics.RotateTransform(-45);
//Draw the image.
image.Draw(page, 0, 0);
//Restore the graphics state.
page.Graphics.Restore(state);

//Save and close the PDF.
doc.Save("output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create Document
PdfDocument doc = new PdfDocument();
//Add a new page
PdfPage page = doc.Pages.Add();

//Load a bitmap
PdfBitmap image = new PdfBitmap("input.jpg");
//save the current graphics state
PdfGraphicsState state = page.Graphics.Save();
//Translate the coordinate system to the  required position
page.Graphics.TranslateTransform(20, 100);
//Apply transparency
page.Graphics.SetTransparency(0.5f);
//Rotate the coordinate system
page.Graphics.RotateTransform(-45);
//Draw image
image.Draw(page, 0, 0);
//Restore the graphics state
page.Graphics.Restore(state);

//Save the PDF
doc.Save("output.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create Document
Dim doc As New PdfDocument()
'Add a new page
Dim page As PdfPage = doc.Pages.Add()

'Load a bitmap
Dim image As New PdfBitmap("input.jpg")
'save the current graphics state
Dim state As PdfGraphicsState = page.Graphics.Save()
'Translate the coordinate system to the  required position
page.Graphics.TranslateTransform(20, 100)
'Apply transparency
page.Graphics.SetTransparency(0.5F)
'Rotate the coordinate system
page.Graphics.RotateTransform(-45)
' Draw image
image.Draw(page, 0, 0)
'Restore the graphics state
page.Graphics.Restore(state)

'Save the PDF
doc.Save("output.pdf")
doc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Add-transparancy-and-rotation-to-the-image/). 

## Unit conversion in image position

The [PdfUnitConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfUnitConvertor.html) class provides precise measurement conversion capabilities for PDF layouts. When positioning images in a PDF document, the converter translates pixel dimensions to PDF points, enabling millimeter-perfect placement and sizing. This ensures images maintain their aspect ratio while rendering at exact locations and filling designated spaces like rectangles.

The code example to illustrate the same is given below.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Unit-conversion-in-image-position/.NET/Unit-conversion-in-image-position/Program.cs" %} 

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
using (PdfDocument document = new PdfDocument())
{
    using (FileStream stream = new FileStream("Image.png", FileMode.Open, FileAccess.Read))
    {
        //Load the image from the disk
        PdfBitmap image = new PdfBitmap(stream);

        //Add the first section to the PDF document
        PdfSection section = document.Sections.Add();

        //Initialize unit converter
        PdfUnitConverter converter = new PdfUnitConverter();

        //Convert the image size from pixel to points
        SizeF size = converter.ConvertFromPixels(image.PhysicalDimension, PdfGraphicsUnit.Point);

        //Set section size based on the image size
        section.PageSettings.Size = size;

        // Set section orientation based on the image size (by default Portrait) 
        if (image.Width > image.Height)
            section.PageSettings.Orientation = PdfPageOrientation.Landscape;

        //Set a margin for the section
        section.PageSettings.Margins.All = 0;

        //Add a page to the section
        PdfPage page = section.Pages.Add();

        //Draw image
        page.Graphics.DrawImage(image, 0, 0);

        //Save the document
        document.Save("Output.pdf");
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
using (PdfDocument document = new PdfDocument())
{
    using (FileStream stream = new FileStream("Image.png", FileMode.Open, FileAccess.Read))
    {
        //Load the image from the disk
        PdfBitmap image = new PdfBitmap(stream);

        //Add the first section to the PDF document
        PdfSection section = document.Sections.Add();

        //Initialize unit converter
        PdfUnitConverter converter = new PdfUnitConverter();

        //Convert the image size from pixel to points
        SizeF size = converter.ConvertFromPixels(image.PhysicalDimension, PdfGraphicsUnit.Point);

        //Set section size based on the image size
        section.PageSettings.Size = size;

        // Set section orientation based on the image size (by default Portrait) 
        if (image.Width > image.Height)
            section.PageSettings.Orientation = PdfPageOrientation.Landscape;

        //Set a margin for the section
        section.PageSettings.Margins.All = 0;

        //Add a page to the section
        PdfPage page = section.Pages.Add();

        //Draw image
        page.Graphics.DrawImage(image, 0, 0);

        //Save the document
        document.Save("Output.pdf");
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

Module Program
    Sub Main()
        ' Create a new PDF document
        Using document As New PdfDocument()

            ' Load the image from disk
            Using stream As New FileStream("Image.png", FileMode.Open, FileAccess.Read)
                Dim image As New PdfBitmap(stream)

                ' Add a section to the PDF document
                Dim section As PdfSection = document.Sections.Add()

                ' Initialize unit converter
                Dim converter As New PdfUnitConverter()

                ' Convert image size from pixels to points
                Dim size As SizeF = converter.ConvertFromPixels(image.PhysicalDimension, PdfGraphicsUnit.Point)

                ' Set section size based on image size
                section.PageSettings.Size = size

                ' Set orientation to landscape if image is wider than tall
                If image.Width > image.Height Then
                    section.PageSettings.Orientation = PdfPageOrientation.Landscape
                End If

                ' Remove margins
                section.PageSettings.Margins.All = 0

                ' Add a page to the section
                Dim page As PdfPage = section.Pages.Add()

                ' Draw the image at position (0, 0)
                page.Graphics.DrawImage(image, 0, 0)

                ' Save the document
                document.Save("Output.pdf")
            End Using
        End Using
    End Sub
End Module

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Unit-conversion-in-image-position/.NET).

## Converting multi page TIFF to PDF

Multi frame TIFF image can be converted to PDF document. This can be done by accessing each frame of the multi frame TIFF image and rendering it in each page of the PDF document using [PdfBitmap](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html) class.

The code snippet to illustrate the same is given below.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Converting-multi-page-TIFF-to-PDF/.NET/Converting-multi-page-TIFF-to-PDF/Program.cs" %} 

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Set page margins
document.PageSettings.Margins.All = 0;

//Load the multi frame TIFF image from the disk
FileStream imageStream = new FileStream("image.tiff", FileMode.Open, FileAccess.Read);
PdfTiffImage tiffImage = new PdfTiffImage(imageStream);
//Get the frame count
int frameCount = tiffImage.FrameCount;
//Access each frame and draw into the page
for (int i = 0; i < frameCount; i++)
{
    PdfPage page = document.Pages.Add();
    PdfGraphics graphics = page.Graphics;
    tiffImage.ActiveFrame = i;
    graphics.DrawImage(tiffImage, 0, 0, page.GetClientSize().Width, page.GetClientSize().Height);
}
//Save and close the document
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a PDF document
PdfDocument document = new PdfDocument();
//Set page margins
document.PageSettings.Margins.All = 0;

//Load multi frame TIFF image
PdfBitmap tiffImage = new PdfBitmap("image.tiff");
//Get the frame count
int frameCount = tiffImage.FrameCount;
//Access each frame and draw into the page
for (int i = 0; i < frameCount; i++)
{
    PdfPage page = document.Pages.Add();
    PdfGraphics graphics = page.Graphics;
    tiffImage.ActiveFrame = i;
    graphics.DrawImage(tiffImage, 0, 0, page.GetClientSize().Width, page.GetClientSize().Height);
}
//Save and close the document
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a PDF document
Dim document As New PdfDocument()
'Set page margins
document.PageSettings.Margins.All = 0

'Load multi frame TIFF image
Dim tiffImage As New PdfBitmap("image.tiff")
'Get the frame count
Dim frameCount As Integer = tiffImage.FrameCount
'Access each frame and draw into the page
For i As Integer = 0 To frameCount - 1
Dim page As PdfPage = document.Pages.Add()
Dim graphics As PdfGraphics = page.Graphics
tiffImage.ActiveFrame = i
graphics.DrawImage(tiffImage, 0, 0, page.GetClientSize().Width, page.GetClientSize().Height)
Next

'Save and close the document
document.Save("Sample.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Converting-multi-page-TIFF-to-PDF).

N> 1. Essential PDF supports converting TIFF to PDF with [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package reference in ASP.NET Core.

## Remove Images

The [RemoveImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_RemoveImage_Syncfusion_Pdf_Exporting_PdfImageInfo_) method of the page collection allows you to remove an image. You can remove images from an existing document using Essential<sup>&reg;</sup> PDF.

The code snippet to illustrate the same is given below.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Remove-images-from-PDF-document/.NET/Remove-images-from-PDF-document/Program.cs" %} 

using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfPageBase pageBase = loadedDocument.Pages[0];
//Extract images from the first page.
PdfImageInfo[] imageInfo = loadedDocument.Pages[0].GetImagesInfo();
//Remove the Image.
pageBase.RemoveImage(imageInfo[0]);

//Save and close the document
loadedDocument.Save("Sample.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Exporting;
using Syncfusion.Pdf.Parsing;

//Load a PDF document
PdfLoadedDocument doc = new PdfLoadedDocument("input.pdf");
//Load the first page
PdfPageBase pageBase = doc.Pages[0];
//Extract images from the first page
PdfImageInfo imageInfo = pageBase.ImagesInfo[0];
//Remove the Image
pageBase.RemoveImage(imageInfo);

//Save the document
doc.Save("Output.pdf");
//Close the document
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF 
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("input.pdf") 
'Load the first page 
Dim pageBase As PdfPageBase = loadedDocument.Pages(0)
'Extract images from the first page
Dim imageInfo As PdfImageInfo = pageBase.ImagesInfo(0)
'Remove the Image
pageBase.RemoveImage(imageInfo)

'Save the document
loadedDocument.Save("Output.pdf") 
'Close the document
loadedDocument.Close(True)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Remove-images-from-PDF-document). 

N> Removing images from an existing PDF document in ASP.NET Core requires the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package.