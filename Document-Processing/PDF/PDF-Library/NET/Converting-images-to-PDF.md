---
title: Converting images to PDF | Syncfusion
description: This section explains how to convert both raster and vector images to PDF document using Syncfusion .NET PDF library. 
platform: document-processing
control: PDF
documentation: UG
---

# Converting Images to PDF

The Syncfusion<sup>&reg;</sup> .NET PDF library provides comprehensive support for converting both raster and vector images to PDF documents. The [PdfImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfImage.html) class is an abstract base class that provides common functionality for converting images to PDF documents. It is used as the base class for two concrete image classes in the `Syncfusion.Pdf.Graphics` namespace: [PdfBitmap](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html) and [PdfMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafile.html).

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

The [ImageToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.ImageToPdfConverter.html) class converts image files into PDF documents, with options to customize page size and image positioning.

The following code example shows how to convert an image to a PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Images/Convert_Image_to_PDF/.NET/Convert_Image_to_PDF/Program.cs" %}

// Create an instance of the ImageToPdfConverter class.
ImageToPdfConverter imageToPdfConverter = new ImageToPdfConverter();
// Set the page size for the document.
imageToPdfConverter.PageSize = PdfPageSize.A4;
// Set the position of the image in the document.
imageToPdfConverter.ImagePosition = PdfImagePosition.TopLeftCornerOfPage;
// Create a file stream to read the image file.
using (FileStream imageStream = new FileStream("Image.jpg", FileMode.Open, FileAccess.Read))
// Convert the image to a PDF document using the ImageToPdfConverter.
using (PdfDocument pdfDocument = imageToPdfConverter.Convert(imageStream))
{
    // Save the PDF document.
    pdfDocument.Save("Output.pdf");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create an instance of the ImageToPdfConverter class.
ImageToPdfConverter imageToPdfConverter = new ImageToPdfConverter();
// Set the page size for the document.
imageToPdfConverter.PageSize = PdfPageSize.A4;
// Set the position of the image in the document.
imageToPdfConverter.ImagePosition = PdfImagePosition.TopLeftCornerOfPage;
// Create a file stream to read the image file.
using (FileStream imageStream = new FileStream("Image.jpg", FileMode.Open, FileAccess.Read))
// Convert the image to a PDF document using the ImageToPdfConverter.
using (PdfDocument pdfDocument = imageToPdfConverter.Convert(imageStream))
{
    // Save the PDF document.
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

N> In ASP.NET Core, converting TIFF to PDF requires the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) NuGet package.

## Converting a Vector Image to PDF

The Syncfusion<sup>&reg;</sup> .NET PDF library supports adding vector images in the Metafile format to PDF documents. During the conversion, Metafile graphics are transformed into native PDF graphics that support text selection and searching. The following types of Metafiles are supported in Essential<sup>&reg;</sup> PDF:
* EMF only
* EMF plus
* EMF plus dual
* WMF

The [PdfMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafile.html) class loads EMF images, and the [PdfMetafileLayoutFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafileLayoutFormat.html) class allows you to control how text and images are split across pages in the PDF document. The following code example illustrates this.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Vector image conversion is not supported on cross-platform .NET platforms.

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Create a PDF document.
PdfDocument doc = new PdfDocument();
//Add a page to the document.
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
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

'Create a PDF document.
Dim doc As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = doc.Pages.Add()

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Insert-vector-image-in-a-PDF-document/). 

N> The [PdfMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafile.html) and [PdfMetafileLayoutFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfMetafileLayoutFormat.html) classes rely on GDI+ are **only supported on the .NET Framework (Windows-specific)**. For cross-platform .NET applications, use the [MetafileRenderer](https://help.syncfusion.com/cr/document-processing/Syncfusion.MetafileRenderer.MetafileRenderer.html) library as described in the next section.

## Converting a Vector Image to PDF in cross-platform

The Syncfusion<sup>&reg;</sup> .NET [MetafileRenderer](https://www.nuget.org/packages/Syncfusion.MetafileRenderer.Net.Core) library is used for converting Metafile (EMF, EMF+, EMF+ dual, and WMF) formats to [PdfTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTemplate.html), which can then be drawn on a [PdfPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPage.html) using [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html).

The following types of Metafiles are supported:

* EMF only
* EMF plus
* EMF plus dual
* WMF

### NuGet Packages Required

Install the Metafile Renderer library along with the Syncfusion PDF library that matches your project target.

{% tabs %}

{% highlight c# tabtitle=".NET Framework (Windows-specific)" %}

```bash
Install-Package Syncfusion.Pdf.NET
Install-Package Syncfusion.MetafileRenderer.NET
```

{% endhighlight %}

{% highlight c# tabtitle="Cross-platform (.NET Core / .NET 8 / .NET 9 / .NET 10)" %}

```bash
Install-Package Syncfusion.Pdf.Net.Core
Install-Package Syncfusion.MetafileRenderer.Net.Core
```

{% endhighlight %}

{% endtabs %}


The following code example shows how to convert an  Metafile to a PDF document using the [MetafileRenderer](https://www.nuget.org/packages/Syncfusion.MetafileRenderer.NET).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Create a new PDF document.
PdfDocument document = new PdfDocument();

//Open the EMF file as a stream.
using (FileStream metafileStream = new FileStream("MetaChart.emf", FileMode.Open, FileAccess.Read))
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

//Create a new PDF document.
PdfDocument document = new PdfDocument();

//Open the EMF file as a stream.
using (FileStream metafileStream = new FileStream("MetaChart.emf", FileMode.Open, FileAccess.Read))
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

{% endtabs %}


You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Images/Insert-vector-image-in-a-PDF-document/). 

N> The [MetafileRenderer](https://www.nuget.org/packages/Syncfusion.MetafileRenderer.Net.Core).ConvertToPdfTemplate method auto-detects the metafile format (EMF, EMF+, EMF+ dual, or WMF) from the supplied stream. The output PDF preserves the original metafile dimensions and supports text selection and search.
