---
title: Converting images to PDF | Syncfusion
description: This section explains how to convert both raster and vector images to a PDF document using the Syncfusion .NET PDF library. 
platform: document-processing
control: PDF
documentation: UG
---

# Converting Images to PDF

The Syncfusion<sup>&reg;</sup> .NET PDF library provides comprehensive support for converting both raster and vector images to PDF documents. The [PdfImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfImage.html) class is an abstract base class that provides common functionality for converting images to PDF documents. It serves as the base class for two concrete image classes in the `Syncfusion.Pdf.Graphics` namespace: [PdfBitmap](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html) and [PdfMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafile.html).

Check the following video for a quick guide on converting an image to a PDF document using the PDF Library.
{% youtube "https://youtu.be/_uE324Y0hwI?si=usx8KrUUvHcT0-X8" %}

The library supports a wide range of image formats for PDF conversion. The supported image formats include:
* JPEG (Joint Photographic Experts Group)
* JPEG with Exif standard
* PNG (Portable Network Graphics)
* BMP (Windows Bitmap)
* GIF (Graphics Interchange Format)
* TIFF (Tagged Image File Format)
* EMF (Enhanced Metafile)
* ICO and ICON (Windows Icon)

N> To use image formats other than PNG and JPEG in ASP.NET Core, include the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package in your project. This package provides the necessary support for handling other raster image formats such as BMP, GIF, TIFF, and ICO.

The [ImageToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.ImageToPdfConverter.html) class converts image files into PDF documents, with options to customize the page size and image positioning.

The following code example shows how to convert an image to a PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Convert_Image_to_PDF/.NET/Convert_Image_to_PDF/Program.cs" %}

using Syncfusion.Pdf;

// Create an instance of the ImageToPdfConverter class.
ImageToPdfConverter imageToPdfConverter = new ImageToPdfConverter();
// Set the page size for the document.
imageToPdfConverter.PageSize = PdfPageSize.A4;
// Set the position of the image in the document.
imageToPdfConverter.ImagePosition = PdfImagePosition.TopLeftCornerOfPage;
// Create a file stream to read the image file.
using (FileStream imageStream = new FileStream("Image.jpg", FileMode.Open, FileAccess.Read))
{
    // Convert the image to a PDF document using the ImageToPdfConverter.
    using (PdfDocument pdfDocument = imageToPdfConverter.Convert(imageStream))
    {
        // Save the PDF document.
        pdfDocument.Save("Output.pdf");
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;

// Create an instance of the ImageToPdfConverter class.
ImageToPdfConverter imageToPdfConverter = new ImageToPdfConverter();
// Set the page size for the document.
imageToPdfConverter.PageSize = PdfPageSize.A4;
// Set the position of the image in the document.
imageToPdfConverter.ImagePosition = PdfImagePosition.TopLeftCornerOfPage;
// Create a file stream to read the image file.
using (FileStream imageStream = new FileStream("Image.jpg", FileMode.Open, FileAccess.Read))
{
    // Convert the image to a PDF document using the ImageToPdfConverter.
    using (PdfDocument pdfDocument = imageToPdfConverter.Convert(imageStream))
    {
        // Save the PDF document.
        pdfDocument.Save("Output.pdf");
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf

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

N> In ASP.NET Core, converting TIFF to PDF requires the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) NuGet package. JPG, JPEG, and PNG conversions work without any additional package.

## Converting a vector image to PDF

The Syncfusion<sup>&reg;</sup> .NET PDF library supports adding vector images in the Metafile format to PDF documents. During the conversion, Metafile graphics are transformed into native PDF graphics that support text selection and searching. The following Metafile types are supported in Essential<sup>&reg;</sup> PDF:
* EMF only
* EMF plus
* EMF plus dual
* WMF

For cross-platform .NET applications, install the [Syncfusion.MetafileRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.MetafileRenderer.Net.Core) NuGet package from [NuGet.org](https://www.nuget.org/). This package provides the MetafileRenderer class, which converts EMF and WMF streams into PDF templates that can be rendered in PDF documents.

For Windows-specific applications, The [PdfMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafile.html) class loads EMF images, and the [PdfMetafileLayoutFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafileLayoutFormat.html) class allows you to control how text and images are split across pages in the PDF document. The following code example illustrates this.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Metafile;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Open the EMF file as a stream.
using (FileStream metafileStream = new FileStream("Input.emf", FileMode.Open, FileAccess.Read))
{
    //Create a new instance of the MetafileRenderer class.
    MetafileRenderer renderer = new MetafileRenderer();
    //Convert the Metafile stream to a PdfTemplate.
    PdfTemplate template = renderer.ConvertToPdfTemplate(metafileStream);
    //Set the page size to match the template size.
    document.PageSettings.Size = new Syncfusion.Drawing.SizeF(template.Size);
    //Remove page margins.
    document.PageSettings.Margins.All = 0;
    //Add a page to the document.
    PdfPage page = document.Pages.Add();
    //Get the PDF page graphics.
    PdfGraphics graphics = page.Graphics;
    //Draw the template on the PDF page.
    graphics.DrawPdfTemplate(template, PointF.Empty);
}
//Save the PDF document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Collections.Generic;
using System.Drawing;

//Create a PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();

//Create the layout format.
PdfMetafileLayoutFormat format = new PdfMetafileLayoutFormat();
//Split text and images between pages.
format.SplitImages = true;
format.SplitTextLines = true;
//Create a Metafile instance.
PdfMetafile metaChart = new PdfMetafile("MetaChart.emf");
//Draw the Metafile on the page.
metaChart.Draw(page, PointF.Empty, format);

//Save the document.
doc.Save("Output.pdf");
//Close the document.
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Collections.Generic
Imports System.Drawing

'Create a PDF document.
Dim doc As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = doc.Pages.Add()

'Create the layout format.
Dim format As New PdfMetafileLayoutFormat()
'Split text and images between pages.
format.SplitImages = True
format.SplitTextLines = True
'Create a Metafile instance.
Dim metaChart As New PdfMetafile("MetaChart.emf")
'Draw the Metafile on the page.
metaChart.Draw(page, PointF.Empty, format)

'Save the document.
doc.Save("Output.pdf")
'Close the document.
doc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working Cross-platform sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Converting-Metafile-to-PDF/.NET).

You can download a complete working Window-specific sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Insert-vector-image-in-a-PDF-document/).

N> EMF and WMF images can be converted on cross-platform .NET applications by using the `Syncfusion.MetafileRenderer.Net.Core` NuGet package. On Windows-specific platforms, you can also use the PdfMetafile class for rendering Metafile images directly into PDF documents.