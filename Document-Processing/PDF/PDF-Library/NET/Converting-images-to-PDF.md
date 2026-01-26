---
title: Converting images to PDF | Syncfusion
description: This section explains how to convert both raster and vector images to PDF document using Syncfusion .NET PDF library. 
platform: document-processing
control: PDF
documentation: UG
---

# Converting images to PDF 

The Syncfusion<sup>&reg;</sup> .NET PDF library provides comprehensive support for converting both raster and vector images to PDF documents. The [PdfImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfImage.html) class is an abstract base class that provides common functionality for converting images to PDF documents. It is used as the base class for two concrete image classes in the Syncfusion.Pdf.Graphics namespace: [PdfBitmap](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html) and [PdfMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafile.html).

Check the following video for a quick guide on converting an image to a PDF document using the PDF Library.
{% youtube "https://youtu.be/_uE324Y0hwI?si=usx8KrUUvHcT0-X8" %}

This includes a wide range of image formats for PDF conversion. These image formats includes:
* JPEG (Joint Photographic Experts Group) 
* JPEG with Exif standard
* PNG (Portable Network Graphics)
* BMP (Windows Bitmap)
* GIF (Graphics Interchange Format)
* TIFF (Tagged Image File Format)
* EMF (Enhanced Metafile) 
* ICO and ICON (Windows Icon)

N> For using image formats other than PNG and JPEG in ASP.NET Core, you need to include the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package in your project. This package provides the necessary support for handling other raster image formats like BMP, GIF, TIFF, and ICO.

The [ImageToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.ImageToPdfConverter.html) class is used to convert image files into PDF documents, with options to customize page size and image positioning.

The following code example shows how to convert image to PDF document. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Convert_Image_to_PDF/.NET/Convert_Image_to_PDF/Program.cs" %}

// Create an instance of the ImageToPdfConverter class 
ImageToPdfConverter imageToPdfConverter = new ImageToPdfConverter();
// Set the page size for the document
imageToPdfConverter.PageSize = PdfPageSize.A4;
// Set the position of the image in the document
imageToPdfConverter.ImagePosition = PdfImagePosition.TopLeftCornerOfPage;
// Create a file stream to read the image file 
using (FileStream imageStream = new FileStream("Image.jpg", FileMode.Open, FileAccess.Read))
// Convert the image to a PDF document using the ImageToPdfConverter 
using (PdfDocument pdfDocument = imageToPdfConverter.Convert(imageStream))
{
    //Save the PDF document
    pdfDocument.Save("Output.pdf");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create an instance of the ImageToPdfConverter class 
ImageToPdfConverter imageToPdfConverter = new ImageToPdfConverter();
// Set the page size for the document
imageToPdfConverter.PageSize = PdfPageSize.A4;
// Set the position of the image in the document
imageToPdfConverter.ImagePosition = PdfImagePosition.TopLeftCornerOfPage;
// Create a file stream to read the image file 
using (FileStream imageStream = new FileStream("Image.jpg", FileMode.Open, FileAccess.Read))
// Convert the image to a PDF document using the ImageToPdfConverter 
using (PdfDocument pdfDocument = imageToPdfConverter.Convert(imageStream))
{
    //Save the PDF document
    pdfDocument.Save("Output.pdf");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create an instance of the ImageToPdfConverter class
Dim imageToPdfConverter As New ImageToPdfConverter()

' Set the page size for the document
imageToPdfConverter.PageSize = PdfPageSize.A4

' Set the position of the image in the document
imageToPdfConverter.ImagePosition = PdfImagePosition.TopLeftCornerOfPage

' Create a file stream to read the image file
Using imageStream As New FileStream("Image.jpg", FileMode.Open, FileAccess.Read)
    ' Convert the image to a PDF document using the ImageToPdfConverter
    Using pdfDocument As PdfDocument = imageToPdfConverter.Convert(imageStream)
        ' Save the PDF document
        pdfDocument.Save("Output.pdf")
    End Using
End Using

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Convert_Image_to_PDF/.NET). 

N> The Syncfusion<sup>&reg;</sup> .NET Core PDF library supports converting TIFF to PDF with [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) NuGet package in ASP.NET Core platform. 

## Converting vector image to PDF

The Syncfusion<sup>&reg;</sup> .NET PDF library supports adding vector images in the Metafile format to PDF documents.During the conversion, Metafile graphics will be transformed to native PDF graphics that supports text selection and searching. The following types of Metafiles are supported in Essential<sup>&reg;</sup> PDF.
* EMF only
* EMF plus
* EMF plus dual
* WMF

The [PdfMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafile.html) class is used to load EMF images and additionally the [PdfMetafileLayoutFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafileLayoutFormat.html) class allows you to prevent text/image split across pages in the PDF document. The following code example illustrate this. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}

//PDF doesn't support inserting a vector image C#.NET Cross platforms.

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

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

N> EMF and WMF images are not supported in the ASP.NET Core platform.



