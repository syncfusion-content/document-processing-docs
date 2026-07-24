---
title: Working with Barcode | PDF library | Syncfusion
description: Learn to add 1D and 2D barcodes to PDF documents, customize appearance, control size and placement, and export them as images.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Barcode

Essential<sup>&reg;</sup> PDF provides support to add barcodes to a PDF document. The following barcode types are supported:

* One-dimensional barcodes, including Code 39 and Code 32.
* Two-dimensional barcodes, such as QR Code, Data Matrix, and PDF417.

To quickly get started with QR codes in PDF documents using the Syncfusion<sup>&reg;</sup> .NET PDF Library, watch this video:
{% youtube "https://www.youtube.com/watch?v=hSkFuJEbPXw" %}

## Adding a one dimensional barcode to the PDF document

The below code example shows how to add Code39 barcode using the [PdfCode39Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfCode39Barcode.html) class to a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/One%20dimensional%20barcode/Add-Code39-barcode-to-the-PDF-document/.NET/Add-Code39-barcode-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create the Code 39 barcode
PdfCode39Barcode barcode = new PdfCode39Barcode();
// Set the height of the barcode
barcode.BarHeight = 45;
// Set the barcode text
barcode.Text = "CODE39$";
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("CODE39.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create the Code 39 barcode
PdfCode39Barcode barcode = new PdfCode39Barcode();
// Set the height of the barcode
barcode.BarHeight = 45;
// Set the barcode text
barcode.Text = "CODE39$";
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("CODE39.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Create the Code 39 barcode
Dim barcode As New PdfCode39Barcode()
' Set the height of the barcode
barcode.BarHeight = 45
' Set the barcode text
barcode.Text = "CODE39$"
' Draw the barcode on the PDF page
barcode.Draw(page, New PointF(25, 70))
' Save the document
document.Save("CODE39.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/One%20dimensional%20barcode/Add-Code39-barcode-to-the-PDF-document).

The following code snippet shows how to add an EAN-13 barcode to a PDF document using the [PdfEan13Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfEan13Barcode.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/One%20dimensional%20barcode/Add-PdfEan13-barcode-to-a-PDF-document/.NET/Add-PdfEan13-barcode-to-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new EAN-13 barcode
PdfEan13Barcode barcode = new PdfEan13Barcode();
// Set the height of the barcode
barcode.BarHeight = 50;
// Set the barcode text
barcode.Text = "400638133393";
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("EAN13Barcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new EAN-13 barcode
PdfEan13Barcode barcode = new PdfEan13Barcode();
// Set the height of the barcode
barcode.BarHeight = 50;
// Set the barcode text
barcode.Text = "400638133393";
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("EAN13Barcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new EAN-13 barcode
Dim barcode As New PdfEan13Barcode()
' Set the height of the barcode
barcode.BarHeight = 50
' Set the barcode text
barcode.Text = "400638133393"
' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Draw the barcode on the PDF page
barcode.Draw(page, New PointF(25, 70))
' Save the document
document.Save("EAN13Barcode.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/One%20dimensional%20barcode/Add-PdfEan13-barcode-to-a-PDF-document).

The following code example shows how to add an EAN-8 barcode to a PDF document using the [PdfEan8Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfEan8Barcode.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/One%20dimensional%20barcode/Add-PdfEan8-barcode-to-a-PDF-document/.NET/Add-PdfEan8-barcode-to-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new EAN-8 barcode
PdfEan8Barcode barcode = new PdfEan8Barcode();
// Set the height of the barcode
barcode.BarHeight = 50;
// Set the barcode text
barcode.Text = "1234567";
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("EAN8Barcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new EAN-8 barcode
PdfEan8Barcode barcode = new PdfEan8Barcode();
// Set the height of the barcode
barcode.BarHeight = 50;
// Set the barcode text
barcode.Text = "1234567";
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("EAN8Barcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new EAN-8 barcode
Dim barcode As New PdfEan8Barcode()
' Set the height of the barcode
barcode.BarHeight = 50
' Set the barcode text
barcode.Text = "1234567"
' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Draw the barcode on the PDF page
barcode.Draw(page, New PointF(25, 70))
' Save the document
document.Save("EAN8Barcode.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/One%20dimensional%20barcode/Add-PdfEan8-barcode-to-a-PDF-document).

## Adding a two-dimensional barcode to a PDF document

The following code snippet shows how to add a QR code to a PDF document using the [PdfQRBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfQRBarcode.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Two%20dimensional%20barcode/Add-a-QRBarcode-to-the-PDF-document/.NET/Add-a-QRBarcode-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new QR barcode
PdfQRBarcode barcode = new PdfQRBarcode();
// Set the error correction level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High;
// Set the XDimension (block size) of the barcode
barcode.XDimension = 3;
// Set the barcode text
barcode.Text = "http://www.syncfusion.com";
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("QRBarcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new QR barcode
PdfQRBarcode barcode = new PdfQRBarcode();
// Set the error correction level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High;
// Set the XDimension (block size) of the barcode
barcode.XDimension = 3;
// Set the barcode text
barcode.Text = "http://www.syncfusion.com";
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("QRBarcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new QR barcode
Dim barcode As New PdfQRBarcode()
' Set the error correction level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High
' Set the XDimension (block size) of the barcode
barcode.XDimension = 3
' Set the barcode text
barcode.Text = "http://www.syncfusion.com"
' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Draw the barcode on the PDF page
barcode.Draw(page, New PointF(25, 70))
' Save the document
document.Save("QRBarcode.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Two%20dimensional%20barcode/Add-a-QRBarcode-to-the-PDF-document).

The following code example shows how to add a PDF417 barcode to a PDF document using the [Pdf417Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.Pdf417Barcode.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Two%20dimensional%20barcode/Add-a-Pdf417-barcode-to-the-PDF-document/.NET/Add-a-Pdf417-barcode-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF417 barcode
Pdf417Barcode barcode = new Pdf417Barcode();
// Set the error correction level
barcode.ErrorCorrectionLevel = Pdf417ErrorCorrectionLevel.Auto;
// Set the XDimension (block size) of the barcode
barcode.XDimension = 2;
// Set the barcode text
barcode.Text = "http://www.syncfusion.com";
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("417Barcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF417 barcode
Pdf417Barcode barcode = new Pdf417Barcode();
// Set the error correction level
barcode.ErrorCorrectionLevel = Pdf417ErrorCorrectionLevel.Auto;
// Set the XDimension (block size) of the barcode
barcode.XDimension = 2;
// Set the barcode text
barcode.Text = "http://www.syncfusion.com";
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("417Barcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new PDF417 barcode
Dim barcode As New Pdf417Barcode()
' Set the error correction level
barcode.ErrorCorrectionLevel = Pdf417ErrorCorrectionLevel.Auto
' Set the XDimension (block size) of the barcode
barcode.XDimension = 2
' Set the barcode text
barcode.Text = "http://www.syncfusion.com"
' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Draw the barcode on the PDF page
barcode.Draw(page, New PointF(25, 70))
' Save the document
document.Save("417Barcode.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Two%20dimensional%20barcode/Add-a-Pdf417-barcode-to-the-PDF-document).

## Setting the location and size of a barcode

The following code snippets show how to set the [Size](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_Size) and [Location](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_Location) for a Codabar barcode using the [PdfCodabarBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfCodabarBarcode.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Set-location-and-size-to-the-barcode-in-a-PDF-document/.NET/Set-location-and-size-to-the-barcode-in-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create a new instance of the Codabar barcode
PdfCodabarBarcode barcode = new PdfCodabarBarcode();
// Set the location of the barcode
barcode.Location = new PointF(100, 100);
// Set the size of the barcode
barcode.Size = new SizeF(200, 100);
// Set the barcode text
barcode.Text = "123456789$";
// Draw the barcode on the PDF page
barcode.Draw(page);
// Save the document
document.Save("CODABAR.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create a new instance of the Codabar barcode
PdfCodabarBarcode barcode = new PdfCodabarBarcode();
// Set the location of the barcode
barcode.Location = new PointF(100, 100);
// Set the size of the barcode
barcode.Size = new SizeF(200, 100);
// Set the barcode text
barcode.Text = "123456789$";
// Draw the barcode on the PDF page
barcode.Draw(page);
// Save the document
document.Save("CODABAR.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Create a new instance of the Codabar barcode
Dim barcode As New PdfCodabarBarcode()
' Set the location of the barcode
barcode.Location = New PointF(100, 100)
' Set the size of the barcode
barcode.Size = New SizeF(200, 100)
' Set the barcode text
barcode.Text = "123456789$"
' Draw the barcode on the PDF page
barcode.Draw(page)
' Save the document
document.Save("CODABAR.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Set-location-and-size-to-the-barcode-in-a-PDF-document/).

## Adding a barcode without displaying the barcode text

The following code example shows how to add a barcode to a PDF document without displaying the barcode text by setting [TextDisplayLocation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfUnidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfUnidimensionalBarcode_TextDisplayLocation) to `TextLocation.None` from the [TextLocation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.TextLocation.html) enumeration.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Add-a-barcode-to-the-PDF-document-without-displaying-text/.NET/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create a new instance of the Code 39 barcode
PdfCode39Barcode barcode = new PdfCode39Barcode();
// Set the barcode location
barcode.Location = new PointF(10, 10);
// Set the barcode text
barcode.Text = "123456789";
// Disable the barcode text
barcode.TextDisplayLocation = TextLocation.None;
// Draw the barcode on the PDF page
barcode.Draw(page);
// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create a new instance of the Code 39 barcode
PdfCode39Barcode barcode = new PdfCode39Barcode();
// Set the barcode location
barcode.Location = new PointF(10, 10);
// Set the barcode text
barcode.Text = "123456789";
// Disable the barcode text
barcode.TextDisplayLocation = TextLocation.None;
// Draw the barcode on the PDF page
barcode.Draw(page);
// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Create a new instance of the Code 39 barcode
Dim barcode As New PdfCode39Barcode()
' Set the barcode location
barcode.Location = New PointF(10, 10)
' Set the barcode text
barcode.Text = "123456789"
' Disable the barcode text
barcode.TextDisplayLocation = TextLocation.None
' Draw the barcode on the PDF page
barcode.Draw(page)
' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Add-a-barcode-to-the-PDF-document-without-displaying-text).

## Exporting a barcode as an image

Essential<sup>&reg;</sup> PDF supports converting one-dimensional barcodes such as Code 39, Code 39 Extended, Code 11, Codabar, Code 32, Code 93, Code 93 Extended, Code 128A, Code 128B, UPC bar code, and Code 128C to an image using the [ToImage()](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfUnidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfUnidimensionalBarcode_ToImage) method of the [PdfUnidimensionalBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfUnidimensionalBarcode.html) class.

N> To export a barcode as an image in cross-platform (.NET Core / .NET 5+) applications, the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) NuGet package must be referenced in your application.

The following code example shows how to convert a one-dimensional barcode to an image.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Export-one-dimensional-barcode-as-image/.NET/Export-one-dimensional-barcode-as-image/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Barcode;

// Initialize a new PdfCode39Barcode instance
PdfCode39Barcode barcode = new PdfCode39Barcode();
// Set the height and text for the barcode
barcode.BarHeight = 45;
barcode.Text = "CODE39$";
// Convert the barcode to an image stream
Stream imageStream = barcode.ToImage(new SizeF(300, 300));
// Save the image to disk
using (FileStream outputFileStream = new FileStream("Image.png", FileMode.Create, FileAccess.ReadWrite))
{
    imageStream.CopyTo(outputFileStream);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.PDF.Graphics;
using Syncfusion.Pdf.Barcode;

// Initialize a new PdfCode39Barcode instance
PdfCode39Barcode barcode = new PdfCode39Barcode();
// Set the height and text for the barcode
barcode.BarHeight = 45;
barcode.Text = "CODE39$";
// Convert the barcode to an image
Image barcodeImage = barcode.ToImage(new SizeF(300, 200));
// Save the image
barcodeImage.Save("Image.png", ImageFormat.Png);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing
Imports System.Drawing.Imaging
Imports Syncfusion.Pdf.Barcode

' Initialize a new PdfCode39Barcode instance
Dim barcode As New PdfCode39Barcode()
' Set the height and text for the barcode
barcode.BarHeight = 45
barcode.Text = "CODE39$"
' Convert the barcode to an image
Dim barcodeImage As Image = barcode.ToImage(New SizeF(300, 200))
' Save the image
barcodeImage.Save("Image.png", ImageFormat.Png)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Export-one-dimensional-barcode-as-image/).

Essential<sup>&reg;</sup> PDF also supports converting two-dimensional barcodes such as QR Code and Data Matrix to an image. The following code snippet explains how to convert a QR code to an image using the [ToImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfQRBarcode.html#Syncfusion_Pdf_Barcode_PdfQRBarcode_ToImage) method of the [PdfQRBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfQRBarcode.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Export-two-dimensional-barcode-as-image/.NET/Export-two-dimensional-barcode-as-image/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Initialize a new PdfQRBarcode instance
PdfQRBarcode barcode = new PdfQRBarcode();
// Set the XDimension and text for the barcode
barcode.XDimension = 3;
barcode.Text = "http://www.google.com";
// Convert the barcode to an image stream
Stream imageStream = barcode.ToImage(new SizeF(300, 300));
// Save the image to disk
using (FileStream outputFileStream = new FileStream("Output.png", FileMode.Create, FileAccess.ReadWrite))
{
    imageStream.CopyTo(outputFileStream);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using System.Drawing.Imaging;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;

// Initialize a new PdfQRBarcode instance
PdfQRBarcode barcode = new PdfQRBarcode();
// Set the XDimension and text for the barcode
barcode.XDimension = 3;
barcode.Text = "http://www.google.com";
// Convert the barcode to an image
Image barcodeImage = barcode.ToImage(new SizeF(300, 300));
// Save the image
barcodeImage.Save("Image.png", ImageFormat.Png);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports System.Drawing.Imaging
Imports Syncfusion.Pdf.Barcode

' Initialize a new PdfQRBarcode instance
Dim barcode As New PdfQRBarcode()
' Set the XDimension and text for the barcode
barcode.XDimension = 3
barcode.Text = "http://www.google.com"
' Convert the barcode to an image
Dim barcodeImage As Image = barcode.ToImage(New SizeF(300, 300))
' Save the image
barcodeImage.Save("Image.png", ImageFormat.Png)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Export-two-dimensional-barcode-as-image/).

## Customizing the barcode appearance

The height of a one-dimensional barcode can be changed using the [BarHeight](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_BarHeight) property. The equivalent property to change the block size for a two-dimensional barcode is [XDimension](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfBidimensionalBarcode_XDimension). You can also customize the barcode color by changing the `BarColor` (for dark bars) and `BackColor` (for light bars) properties.

N> This color customization is supported only for one-dimensional barcodes; it is not supported for two-dimensional barcodes.

The following code sample explains how to customize a one-dimensional barcode such as Code 93 using the [BarHeight](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_BarHeight) and [BarColor](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_BarColor) properties of the [PdfCode93Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfCode93Barcode.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create a new PdfCode93Barcode
PdfCode93Barcode code93 = new PdfCode93Barcode("CODE93");
// Set the barcode height
code93.BarHeight = 40;
// Set the barcode color
code93.BarColor = Color.Blue;
// Draw the barcode on the PDF page
code93.Draw(page, new PointF(25, 500));
// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create a new PdfCode93Barcode
PdfCode93Barcode code93 = new PdfCode93Barcode("CODE93");
// Set the barcode height
code93.BarHeight = 40;
// Set the barcode color
code93.BarColor = Color.Blue;
// Draw the barcode on the PDF page
code93.Draw(page, new PointF(25, 500));
// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Create a new PdfCode93Barcode
Dim code93 As New PdfCode93Barcode("CODE93")
' Set the barcode height
code93.BarHeight = 40
' Set the barcode color
code93.BarColor = Color.Blue
' Draw the barcode on the PDF page
code93.Draw(page, New PointF(25, 500))
' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

The following code example shows how to customize a two-dimensional barcode such as a QR code using the [XDimension](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfBidimensionalBarcode_XDimension) and `BackColor` properties of the [PdfBidimensionalBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBidimensionalBarcode.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new QR barcode
PdfQRBarcode barcode = new PdfQRBarcode();
// Set the error correction level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High;
// Set the XDimension (block size) of the barcode
barcode.XDimension = 3;
// Set the barcode text
barcode.Text = "http://www.syncfusion.com";
// Set the background color
barcode.BackColor = Color.Green;
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("QRBarcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new QR barcode
PdfQRBarcode barcode = new PdfQRBarcode();
// Set the error correction level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High;
// Set the XDimension (block size) of the barcode
barcode.XDimension = 3;
// Set the barcode text
barcode.Text = "http://www.syncfusion.com";
// Set the background color
barcode.BackColor = Color.Green;
// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Draw the barcode on the PDF page
barcode.Draw(page, new PointF(25, 70));
// Save the document
document.Save("QRBarcode.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new QR barcode
Dim barcode As New PdfQRBarcode()
' Set the error correction level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High
' Set the XDimension (block size) of the barcode
barcode.XDimension = 3
barcode.Text = "http://www.syncfusion.com"
' Set the background color
barcode.BackColor = Color.Green
' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Draw the barcode on the PDF page
barcode.Draw(page, New PointF(25, 70))
' Save the document
document.Save("QRBarcode.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

## Creating a QR code with a logo

The [QRCodeLogo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.QRCodeLogo.html) class represents a logo image that can be embedded in a QR code, and the `Logo` property of the [PdfQRBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfQRBarcode.html) class is used to assign the logo. By leveraging these features, you can generate QR codes that incorporate custom logos or images, resulting in a visually appealing and branded QR code experience.

The following code example demonstrates how to generate a QR barcode with a logo positioned at its center.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create a new PDF QR barcode
PdfQRBarcode qrBarcode = new PdfQRBarcode();
// Set the barcode text
qrBarcode.Text = "https://www.syncfusion.com/";
// Create the QR barcode logo
QRCodeLogo qrCodeLogo = new QRCodeLogo("logo.png");
// Set the QR barcode logo
qrBarcode.Logo = qrCodeLogo;
// Set the XDimension (block size) of the barcode
qrBarcode.XDimension = 5;
// Draw the barcode on the PDF page
qrBarcode.Draw(page);
// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a new page to the PDF document
PdfPage page = document.Pages.Add();
// Create a new PDF QR barcode
PdfQRBarcode qrBarcode = new PdfQRBarcode();
// Set the barcode text
qrBarcode.Text = "https://www.syncfusion.com/";
// Create the QR barcode logo
QRCodeLogo qrCodeLogo = new QRCodeLogo("logo.png");
// Set the QR barcode logo
qrBarcode.Logo = qrCodeLogo;
// Set the XDimension (block size) of the barcode
qrBarcode.XDimension = 5;
// Draw the barcode on the PDF page
qrBarcode.Draw(page);
// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a new page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Create a new PDF QR barcode
Dim qrBarcode As New PdfQRBarcode()
' Set the barcode text
qrBarcode.Text = "https://www.syncfusion.com/"
' Create the QR barcode logo
Dim qrCodeLogo As New QRCodeLogo("logo.png")
' Set the QR barcode logo
qrBarcode.Logo = qrCodeLogo
' Set the XDimension (block size) of the barcode
qrBarcode.XDimension = 5
' Draw the barcode on the PDF page
qrBarcode.Draw(page)
' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

## Supported QR code error correction levels

The [ErrorCorrectionLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfErrorCorrectionLevel.html) property can be used to specify the error correction level when generating QR codes, ensuring the QR code can withstand potential damage based on its intended usage.

<table>
 <thead>
    <tr>
      <th>Error Correction Level</th>
      <th>Tolerance to Damage</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Low</b></td>
      <td>Up to 7%</td>
       <td>This is the lowest error correction level. It allows the QR code to store the maximum amount of data but can tolerate only minimal damage or obstruction (up to 7%). It is less resilient to damage.</td>
    </tr>
    <tr>
      <td><b>Medium</b></td>
      <td>Up to 15%</td>
      <td>The medium error correction level balances data capacity and error resilience. It can recover from up to 15% damage or obstruction in the QR code.</td>
    </tr>
    <tr>
      <td><b>Quartile</b></td>
      <td>Up to 25%</td>
      <td>The quartile level can tolerate moderate damage (up to 25%). This level is useful in environments where the QR code is exposed to significant wear or damage. It reduces data capacity but increases resilience.</td>
    </tr>
    <tr>
      <td><b>High</b></td>
      <td>Up to 30%</td>
      <td>The highest error correction level provides the maximum resilience to damage. It can recover from up to 30% damage or obstruction, but it stores the least amount of data. It is used when durability is more important than data capacity.</td>
    </tr>
  </tbody>
</table>

## Supported barcode types

The following table contains the supported types and associated valid characters.

<table>
<thead>
<tr>
<th>
Symbol <br/><br/></th><th>
Supported characters<br/><br/></th><th>
Length<br/><br/></th></tr>
</thead>
<tbody>
<tr>
<td>
{{'[QR Code](https://en.wikipedia.org/wiki/QR_code)'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z (upper-case only)]; [space $ % * + - . / , :]; [Shift JIS characters]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Data Matrix](https://en.wikipedia.org/wiki/Data_Matrix)'| markdownify }}<br/><br/></td><td>
All ASCII characters<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 39](https://en.wikipedia.org/wiki/Code_39)'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [- . $ / + % SPACE]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 39 Extended](https://en.wikipedia.org/wiki/Code_39#Full_ASCII_Code_39)'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [a-z]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 11](https://en.wikipedia.org/wiki/Code_11)'| markdownify }}<br/><br/></td><td>
[0-9]; [-]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Codabar](https://en.wikipedia.org/wiki/Codabar)'| markdownify }}<br/><br/></td><td>
[0-9]; [- $ : / . +]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
Code 32<br/><br/></td><td>
[0-9]<br/><br/></td><td>
8<br/><br/></td></tr>
<tr>
<td>
{{'[Code 93](https://en.wikipedia.org/wiki/Code_93)'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [- . $ / + % SPACE]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 93 Extended](https://en.wikipedia.org/wiki/Code_93#Full_ASCII_Code_93)'| markdownify }}<br/><br/></td><td>
All 128 ASCII characters<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 128A](https://en.wikipedia.org/wiki/Code_128)'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [NUL (0x00) SOH (0x01) STX (0x02) ETX (0x03) EOT (0x04) ENQ (0x05) ACK (0x06) BEL (0x07) BS (0x08) HT (0x09) LF (0x0A) VT (0x0B) FF (0x0C) CR (0x0D) SO (0x0E) SI (0x0F) DLE (0x10) DC1 (0x11) DC2 (0x12) DC3 (0x13) DC4 (0x14) NAK (0x15) SYN (0x16) ETB (0x17) CAN (0x18) EM (0x19) SUB (0x1A) ESC (0x1B) FS (0x1C) GS (0x1D) RS (0x1E) US (0x1F) SPACE (0x20)]; [&quot; ! # $ % &amp; ' ( ) * + , - . / ; &lt; = &gt; ? @ [ / ] ^ _ ]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 128B](https://en.wikipedia.org/wiki/Code_128)'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [a-z]; [SPACE (0x20) ! &quot; # $ % &amp; ' ( ) * + , - . / : ; &lt; = &gt; ? @ [ / ] ^ _ ` { | } ~ DEL]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 128C](https://en.wikipedia.org/wiki/Code_128)'| markdownify }}<br/><br/></td><td>
ASCII 00-99 (encodes each two-digit group with one code)<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[PDF417](https://en.wikipedia.org/wiki/PDF417)'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [a-z]; Mixed; Punctuation; Byte<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[EAN-8](https://en.wikipedia.org/wiki/EAN-8)'| markdownify }}<br/><br/></td><td>
[0-9];<br/><br/></td><td>
7 or 8<br/><br/></td></tr>
<tr>
<td>
{{'[EAN-13](https://en.wikipedia.org/wiki/International_Article_Number)'| markdownify }}<br/><br/></td><td>
[0-9];<br/><br/></td><td>
12 or 13<br/><br/></td></tr>
</tbody>
</table>