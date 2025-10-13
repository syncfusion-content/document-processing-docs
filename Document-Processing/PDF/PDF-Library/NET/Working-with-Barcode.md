---
title: Working with Barcode | Syncfusion
description: This section explains about how to add 1D & 2D barcodes to the PDF document and customize the appearance, position and size of the one dimensional barcode.
platform: document-processing
control: PDF
documentation: 
---
# Working with Barcode

Essential<sup>&reg;</sup> PDF provides support to add barcodes to the PDF document. The following barcode types are supported.

* 10 one-dimensional barcodes including Code 39 and Code 32 barcodes.
* 2 two-dimensional barcodes such as QR, DataMatrix and PDF417 barcodes.

## Adding a one dimensional barcode to the PDF document

The below code example shows how to add Code39 barcode using the [PdfCode39Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfCode39Barcode.html) class to a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/One%20dimensional%20barcode/Add-Code39-barcode-to-the-PDF-document/.NET/Add-Code39-barcode-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creating new PDF Document
PdfDocument doc = new PdfDocument();
//Adding new page to PDF document
PdfPage page = doc.Pages.Add();

//Drawing Code39 barcode 
PdfCode39Barcode barcode = new PdfCode39Barcode();
//Setting height of the barcode 
barcode.BarHeight = 45;
barcode.Text = "CODE39$";

//Printing barcode to the PDF document  
barcode.Draw(page, new PointF(25, 70));

//Savethe PDF document
doc.Save("Output.pdf");
//Close the document
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creating new PDF Document
PdfDocument doc = new PdfDocument();
//Adding new page to PDF document
PdfPage page = doc.Pages.Add();

//Drawing Code39 barcode 
PdfCode39Barcode barcode = new PdfCode39Barcode(); 
//Setting height of the barcode 
barcode.BarHeight = 45; 
barcode.Text = "CODE39$"; 
//Printing barcode to the PDF document.s
barcode.Draw(page, new PointF(25, 70 ));

//Saving the Document
doc.Save("CODE39.pdf");
//Close the PDF document
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Creating new PDF Document
Dim doc As New PdfDocument()
'Adding new page to PDF document
Dim page As PdfPage = doc.Pages.Add()

'Drawing Code39 barcode 
Dim barcode As New PdfCode39Barcode()
'Setting height of the barcode 
barcode.BarHeight = 45
barcode.Text = "CODE39$"

'Printing barcode to the PDF document. 
barcode.Draw(page, New PointF(25, 70))

'Save the Document
doc.Save("CODE39.pdf")           
'Close the PDF document
doc.Close(true);

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/One%20dimensional%20barcode/Add-Code39-barcode-to-the-PDF-document).

The below code snippet shows how to add PdfEan13 barcode using the [PdfEan13Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfEan13Barcode.html) class to a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/One%20dimensional%20barcode/Add-PdfEan13-barcode-to-a-PDF-document/.NET/Add-PdfEan13-barcode-to-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creates a new PdfEan13 Barcode.
PdfEan13Barcode barcode = new PdfEan13Barcode ();
//Set height of the barcode.
barcode.BarHeight = 50;
//Set the barcode text.
barcode.Text = "400638133393";

//Creating new PDF document.
PdfDocument document = new PdfDocument();
//Adding new page to PDF document.
PdfPage page = document.Pages.Add(); 

//Printing barcode to the PDF document.
barcode.Draw(page, new PointF(25,70));

//Saving the document.
document.Save("EAN13Barcode.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creates a new PdfEan13 Barcode.
PdfEan13Barcode barcode = new PdfEan13Barcode ();
//Set height of the barcode.
barcode.BarHeight = 50;
//Set the barcode text.
barcode.Text = "400638133393";

//Creating new PDF document.
PdfDocument document = new PdfDocument();
//Adding new page to PDF document.
PdfPage page = document.Pages.Add(); 

//Printing barcode to the PDF document.
barcode.Draw(page, new PointF(25,70));

//Saving the document.
document.Save("EAN13Barcode.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Creates a new PdfEan13 Barcode.
Dim barcode As New PdfEan13Barcode () 
'Set height of the barcode.
barcode.BarHeight = 50
'Set the barcode text
barcode.Text = "400638133393"

'Creating new PDF document.
Dim document As New PdfDocument()
'Adding new page to PDF document.
Dim page As PdfPage = document.Pages.Add()

'Printing barcode to the PDF document. 
barcode.Draw(page, New PointF(25, 70))

'Saving the document.
document.Save("EAN13Barcode.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/One%20dimensional%20barcode/Add-PdfEan13-barcode-to-a-PDF-document).

The below code example shows how to add PdfEan8 barcode using the [PdfEan8Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfEan8Barcode.html) class to a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/One%20dimensional%20barcode/Add-PdfEan8-barcode-to-a-PDF-document/.NET/Add-PdfEan8-barcode-to-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creates a new PdfEan8 Barcode.
PdfEan8Barcode barcode = new PdfEan8Barcode ();
//Set height of the barcode.
barcode.BarHeight = 50;
//Set the barcode text
barcode.Text = "1234567";

//Creating new PDF document.
PdfDocument document = new PdfDocument();
//Adding new page to PDF document.
PdfPage page = document.Pages.Add(); 

//Printing barcode to the PDF document. 
barcode.Draw(page, new PointF(25,70));

//Saving the document.
document.Save("EAN8Barcode.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creates a new PdfEan8 Barcode.
PdfEan8Barcode barcode = new PdfEan8Barcode ();
//Set height of the barcode.
barcode.BarHeight = 50;
//Set the barcode text
barcode.Text = "1234567";

//Creating new PDF document.
PdfDocument document = new PdfDocument();
//Adding new page to PDF document.
PdfPage page = document.Pages.Add(); 

//Printing barcode to the PDF document. 
barcode.Draw(page, new PointF(25,70));

//Saving the document.
document.Save("EAN8Barcode.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Creates a new PdfEan8 Barcode.
Dim barcode As New PdfEan8Barcode () 
'Set height of the barcode.
barcode.BarHeight = 50
'Set the barcode text.
barcode.Text = "1234567"

'Creating new PDF document.
Dim document As New PdfDocument()
'Adding new page to PDF document.
Dim page As PdfPage = document.Pages.Add()

'Printing barcode to the PDF document.
barcode.Draw(page, New PointF(25, 70))

'Saving the document.
document.Save("EAN8Barcode.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/One%20dimensional%20barcode/Add-PdfEan8-barcode-to-a-PDF-document).

## Adding a two dimensional barcode to a PDF document

The below code snippet shows how to add a QR code using [PdfQRBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfQRBarcode.html) class to the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Two%20dimensional%20barcode/Add-a-QRBarcode-to-the-PDF-document/.NET/Add-a-QRBarcode-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Drawing QR Barcode
PdfQRBarcode barcode = new PdfQRBarcode();
//Set Error Correction Level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High;
//Set XDimension
barcode.XDimension = 3;
barcode.Text = "http://www.syncfusion.com";

//Creating new PDF Document
PdfDocument doc = new PdfDocument();
//Adding new page to PDF document
PdfPage page = doc.Pages.Add();
//Printing barcode to the PDF document
barcode.Draw(page, new PointF(25, 70));

//Saving the document
doc.Save("QRBarcode.pdf");
//Close the document
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Drawing QR Barcode
PdfQRBarcode barcode = new PdfQRBarcode();
//Set Error Correction Level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High;
//Set XDimension
barcode.XDimension = 3;
barcode.Text = "http://www.syncfusion.com";

//Creating new PDF Document
PdfDocument doc = new PdfDocument();
//Adding new page to PDF document
PdfPage page = doc.Pages.Add();
//Printing barcode to the PDF document
barcode.Draw(page, new PointF(25, 70));

//Saving the document
doc.Save("QRBarcode.pdf");
//Close the document
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Drawing QR Barcode
Dim barcode As New PdfQRBarcode()
'Set Error Correction Level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High
'Set XDimension
barcode.XDimension = 3
barcode.Text = "http://www.syncfusion.com"

'Creating new PDF Document
Dim doc As New PdfDocument()
'Adding new page to PDF document
Dim page As PdfPage = doc.Pages.Add()

'Printing barcode to the PDF document  
barcode.Draw(page, New PointF(25, 70))

'Saving the document
doc.Save("QRBarcode.pdf")
'Close the document
doc.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Two%20dimensional%20barcode/Add-a-QRBarcode-to-the-PDF-document).

The below code example shows how to add a Pdf417 barcode code using [Pdf417Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.Pdf417Barcode.html) class to the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Two%20dimensional%20barcode/Add-a-Pdf417-barcode-to-the-PDF-document/.NET/Add-a-Pdf417-barcode-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creates a new Pdf417 Barcode.
Pdf417Barcode barcode = new Pdf417Barcode();
//Set error correction level.
barcode.ErrorCorrectionLevel= Pdf417ErrorCorrectionLevel.Auto;
//Set XDimension
barcode.XDimension = 2;
//Set the barcode text.
barcode.Text = "http://www.syncfusion.com";

//Creating new PDF document.
PdfDocument document = new PdfDocument();
//Adding new page to PDF document.
PdfPage page = document.Pages.Add();

//Printing barcode on to the PDF.
barcode.Draw(page, new PointF(25,70));

//Saving the document.
document.Save("417Barcode.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creates a new Pdf417 Barcode.
Pdf417Barcode barcode = new Pdf417Barcode();
//Set error correction level.
barcode.ErrorCorrectionLevel= Pdf417ErrorCorrectionLevel.Auto;
//Set XDimension
barcode.XDimension = 2;
//Set the barcode text.
barcode.Text = "http://www.syncfusion.com";

//Creating new PDF document.
PdfDocument document = new PdfDocument();
//Adding new page to PDF document.
PdfPage page = document.Pages.Add();

//Printing barcode on to the PDF.
barcode.Draw(page, new PointF(25,70));

//Saving the document.
document.Save("417Barcode.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Creates a new Pdf417 Barcode.
Dim barcode As New Pdf417Barcode()
'Set error correction level.
barcode.ErrorCorrectionLevel = Pdf417ErrorCorrectionLevel.Auto
'Set XDimension.
barcode.XDimension = 2
'Set the barcode text.
barcode.Text = "http://www.syncfusion.com"

'Creating new PDF document.
Dim document As New PdfDocument()
'Adding new page to PDF document.
Dim page As PdfPage = document.Pages.Add()

'Printing barcode on to the PDF.
barcode.Draw(page, New PointF(25, 70))

'Saving the document.
document.Save("417Barcode.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Two%20dimensional%20barcode/Add-a-Pdf417-barcode-to-the-PDF-document).

## Set location and size to the barcode

The following code snippets show how to set [Size](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_size) and [Location](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_Location) for Codabar barcode using [PdfCodabarBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfCodabarBarcode.html) class to a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Set-location-and-size-to-the-barcode-in-a-PDF-document/.NET/Set-location-and-size-to-the-barcode-in-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creating new PDF document.
PdfDocument doc = new PdfDocument();
//Adding new page to PDF document.
PdfPage page = doc.Pages.Add();

//Create new instance for Codabar barcode.
PdfCodabarBarcode barcode = new PdfCodabarBarcode();
//Setting location of the barcode. 
barcode.Location = new PointF(100, 100);
//Setting size of the barcode.
barcode.Size = new SizeF(200, 100);
barcode.Text = "123456789$";

//Printing barcode on to the PDF.
barcode.Draw(page);

//Save and close the document.
doc.Save("CODABAR.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creating new PDF document.
PdfDocument doc = new PdfDocument();
//Adding new page to PDF document.
PdfPage page = doc.Pages.Add();

//Create new instance for Codabar barcode.
PdfCodabarBarcode barcode = new PdfCodabarBarcode();
//Setting location of the barcode. 
barcode.Location = new PointF(100, 100);
//Setting size of the barcode.
barcode.Size = new SizeF(200, 100);
barcode.Text = "123456789$";

//Printing barcode on to the PDF.
barcode.Draw(page);

//Save and close the document.
doc.Save("CODABAR.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Creating new PDF document.
Dim doc As New PdfDocument()
'Adding new page to PDF document.
Dim page As PdfPage = doc.Pages.Add()

'Create new instance for Codabar barcode.
Dim barcode As PdfCodabarBarcode = New PdfCodabarBarcode()
'Setting location of the barcode.
barcode.Location = New PointF(100, 100)
'Setting size of the barcode.
barcode.Size = New SizeF(200, 100)
barcode.Text = "123456789$"

'Printing barcode on to the PDF.
barcode.Draw(page)

'Save and close the document.
doc.Save("CODABAR.pdf")
doc.Close(True)      

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Set-location-and-size-to-the-barcode-in-a-PDF-document/).

## Adding quiet zones to a barcode

Quiet zones are blank spaces surrounding a barcode that ensure accurate scanning by preventing interference from surrounding content. They serve as critical visual boundaries that help scanners identify the start and end of the barcode symbology. Without sufficient quiet zones, barcode readers may fail to decode the symbol correctly due to visual noise or misalignment.

To add quiet zones to a barcode in a PDF document, you can use the [PdfBarcodeQuietZones](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcodeQuietZones.html) class. The following code sample demonstrates how to implement quiet zones for a barcode.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Adding-quiet-zones-to-a-barcode/.NET/Adding-quiet-zones-to-a-barcode/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();

//Create a new page. 
PdfPage page = document.Pages.Add();

// Create barcode with quiet zones
PdfCode128Barcode barcode = new PdfCode128Barcode
{
    Text = "SYNCFUSION",
    BarHeight = 40,
    QuietZone = new PdfBarcodeQuietZones
    {
        Left = 15,   // 15 points = ~5.3mm
        Right = 15,
        Top = 8,     // 8 points = ~2.8mm
        Bottom = 8
    }
};

//Draw a barcode on the new page.
barcode.Draw(page, new PointF(10, 10));

//Draw a rectangle based on the barcode size. 
page.Graphics.DrawRectangle(PdfPens.Red, new RectangleF(10, 10, barcode.Size.Width, barcode.Size.Height));

//Save the document to disk.
document.Save("PdfBarcode1.pdf");

//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Create a new PDF document.
PdfDocument document = new PdfDocument();

//Create a new page. 
PdfPage page = document.Pages.Add();

// Create barcode with quiet zones
PdfCode128Barcode barcode = new PdfCode128Barcode
{
    Text = "SYNCFUSION",
    BarHeight = 40,
    QuietZone = new PdfBarcodeQuietZones
    {
        Left = 15,   // 15 points = ~5.3mm
        Right = 15,
        Top = 8,     // 8 points = ~2.8mm
        Bottom = 8
    }
};

//Draw a barcode on the new page.
barcode.Draw(page, new PointF(10, 10));

//Draw a rectangle based on the barcode size. 
page.Graphics.DrawRectangle(PdfPens.Red, new RectangleF(10, 10, barcode.Size.Width, barcode.Size.Height));

//Save the document to disk.
document.Save("PdfBarcode1.pdf");

//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

' Create a new PDF document.
Dim document As New PdfDocument()

' Add a new page to the PDF document.
Dim page As PdfPage = document.Pages.Add()

' Create a new Code128 barcode and set its properties.
Dim barcode As New PdfCode128Barcode() With {
    .Text = "SYNCFUSION",       ' Set the barcode text.
    .BarHeight = 40,            ' Set the height of the bars.
    .QuietZone = New PdfBarcodeQuietZones() With {
        .Left = 15,             ' Left quiet zone (15 points ≈ 5.3mm).
        .Right = 15,            ' Right quiet zone.
        .Top = 8,               ' Top quiet zone (8 points ≈ 28mm).
        .Bottom = 8             ' Bottom quiet zone.
    }
}
' Draw the barcode on the PDF page at position (10, 10).
barcode.Draw(page, New PointF(10, 10))

' Draw a red rectangle around the barcode to visualize its size.
page.Graphics.DrawRectangle(PdfPens.Red, New RectangleF(10, 10, barcode.Size.Width, barcode.Size.Height))

' Save the PDF document to disk.
document.Save("PdfBarcode1.pdf")

' Close the document and release resources.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Adding-quiet-zones-to-a-barcode/.NET).

## Adding a barcode to the PDF document without displaying the barcode text

The following code example shows how to add a barcode to the PDF document without displaying the barcode text by specifying the [TextDisplayLocation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfUnidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfUnidimensionalBarcode_TextDisplayLocation) as **None** through the [TextLocation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.TextLocation.html) Enum.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Add-a-barcode-to-the-PDF-document-without-displaying-text/.NET/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creating a new PDF document
PdfDocument doc = new PdfDocument();
//Adding a new page to the PDF document 
PdfPage page = doc.Pages.Add();

//Create a new instance for the Codabar barcode 
PdfCode39Barcode barcode = new PdfCode39Barcode();
//Set the barcode location
barcode.Location = new PointF(10, 10);
//Set the barcode text
barcode.Text = "123456789";
//Disable the barcode text  
barcode.TextDisplayLocation = TextLocation.None;

//Printing barcode on to the PDF 
barcode.Draw(page);

//Save the PDF document
doc.Save("Output.pdf");
//Close the PDF document
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Creating a new PDF document
PdfDocument doc = new PdfDocument();
//Adding a new page to the PDF document 
PdfPage page = doc.Pages.Add();

//Create a new instance for the Codabar barcode 
PdfCode39Barcode barcode = new PdfCode39Barcode();
//Set the barcode location
barcode.Location = new PointF(10, 10);
//Set the barcode text
barcode.Text = "123456789";
//Disable the barcode text  
barcode.TextDisplayLocation = TextLocation.None;

//Printing barcode on to the PDF 
barcode.Draw(page);

//Save the PDF document
doc.Save("Output.pdf");
//Close the PDF document
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Creating a new PDF document 
Dim doc As PdfDocument = New PdfDocument()
'Adding a new page to the PDF document 
Dim page As PdfPage = doc.Pages.Add()

'Create a new instance for the Codabar barcode 
Dim barcode As PdfCode39Barcode = New PdfCode39Barcode()
'Set the barcode location
barcode.Location = New PointF(10, 10)
'Set the barcode text
barcode.Text = "123456789"
'Disable the barcode text  
barcode.TextDisplayLocation = TextLocation.None

'Printing barcode on to the PDF 
barcode.Draw(page)

'Save the PDF document 
doc.Save("Output.pdf")
'Close the PDF document
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Add-a-barcode-to-the-PDF-document-without-displaying-text).

## Export Barcode as Image

Essential<sup>&reg;</sup> PDF supports converting one dimensional barcodes such as Code 39, Code 39 Extended, Code 11, Codabar, Code 32, Code 93, Code 93 Extended, Code 128A, Code 128B, UPC bar code, and Code 128C barcodes to image using the [ToImage()](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfUnidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfUnidimensionalBarcode_ToImage) method of [PdfUnidimensionalBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfUnidimensionalBarcode.html) instance. 

N> To export barcode as image in .NET Core, the following assembly should be referenced in your application [Syncfusion.Pdf.Imaging.Portable](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core/) .

The below code example shows how to convert one dimensional barcode to

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Export-one-dimensional-barcode-as-image/.NET/Export-one-dimensional-barcode-as-image/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Initialize a new PdfCode39Barcode instance
PdfCode39Barcode barcode = new PdfCode39Barcode();
//Set the height and text for barcode
barcode.BarHeight = 45;
barcode.Text = "CODE39$";

//Convert the barcode to image
Stream imageStream = barcode.ToImage(new SizeF(300, 300));

//Create file stream to save the image file
using (FileStream outputFileStream = new FileStream(@"Image.png", FileMode.Create, FileAccess.ReadWrite))
{
    //Save the image to disk
    imageStream.CopyTo(outputFileStream);
}    

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Initialize a new PdfCode39Barcode instance
PdfCode39Barcode barcode = new PdfCode39Barcode();
//Set the height and text for barcode
barcode.BarHeight = 45;
barcode.Text = "CODE39$";

//Convert the barcode to image
Image barcodeImage = barcode.ToImage(new SizeF(300, 200));

//Save the image
barcodeImage.Save("Image.png", ImageFormat.Png);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Initialize a new PdfCode39Barcode instance
Dim barcode As PdfCode39Barcode = New PdfCode39Barcode
'Set the height and text for barcode
barcode.BarHeight = 45
barcode.Text = "CODE39$"

'Convert the barcode to image
Dim barcodeImage As Image = barcode.ToImage(New SizeF(300, 200))

'Save the image
barcodeImage.Save("Image.png", ImageFormat.Png)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Export-one-dimensional-barcode-as-image/).

Essential<sup>&reg;</sup> PDF supports converting two-dimensional barcodes such as QR Code and Data Matrix barcode to image. The following code snippet explains how to convert a QR code to image using the [ToImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfQRBarcode.html#Syncfusion_Pdf_Barcode_PdfQRBarcode_ToImage) method of [PdfQRBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfQRBarcode.html) instance.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Barcode/Export-two-dimensional-barcode-as-image/.NET/Export-two-dimensional-barcode-as-image/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Initialize a new PdfQRBarcode instance 
PdfQRBarcode barcode = new PdfQRBarcode();
//Set the XDimension and text for barcode 
barcode.XDimension = 3;
barcode.Text = "http://www.google.com";
         
//Convert the barcode to image 
Stream imageStream = barcode.ToImage(new Syncfusion.Drawing.SizeF(300, 300));

//Create file stream to save the image file
using (FileStream outputFileStream = new FileStream("Output.png", FileMode.Create, FileAccess.ReadWrite))
{
    //Save the image to disk
    imageStream.CopyTo(outputFileStream);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Initialize a new PdfQRBarcode instance
PdfQRBarcode barcode = new PdfQRBarcode();
//Set the XDimension and text for barcode
barcode.XDimension = 3;
barcode.Text = "http://www.google.com";

//Convert the barcode to image
Image barcodeImage = barcode.ToImage(new SizeF(300, 300));

//Save the image
barcodeImage.Save("Image.png", ImageFormat.Png);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Initialize a new PdfQRBarcode instance
Dim barcode As PdfQRBarcode = New PdfQRBarcode
'Set the XDimension and text for barcode
barcode.XDimension = 3
barcode.Text = "http://www.google.com"

'Convert the barcode to image
Dim barcodeImage As Image = barcode.ToImage(New SizeF(300, 300))

'Save the image
barcodeImage.Save("Image.jpg", ImageFormat.Png)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Barcode/Export-two-dimensional-barcode-as-image/).

## Customizing the barcode appearance

The height of the barcode can be changed using the [BarHeight](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_barHeight) property. The equivalent property to change the block size for two dimensional barcode is [XDimension](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfBidimensionalBarcode_XDimension). You can also customize the barcode color by changing the DarkBarColor and LightBarColor properties.

N> This color customization is possible only for one dimensional barcodes and it is not supported for two dimensional barcodes.

The following code sample explains how to customize the one-dimensional barcode such as Code 39 using the [BarHeight](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_BarHeight), [BarColor](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBarcode.html#Syncfusion_Pdf_Barcode_PdfBarcode_BarColor), etc. in [PdfCode93Barcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfCode93Barcode.html) class. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page.
PdfPage page = document.Pages.Add();

//Creates a new PdfCode93Barcode.
PdfCode93Barcode code93 = new PdfCode93Barcode("CODE93");
//Set the barcode height.
code93.BarHeight = 40;
//Set the barcode color. 
code93.BarColor = Color.Blue;

//Draws a barcode on the new Page.
code93.Draw(page, new PointF(25, 500));

//Save document to disk.
document.Save("Output.pdf");
//Close the document. 
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page.
PdfPage page = document.Pages.Add();

//Creates a new PdfCode93Barcode.
PdfCode93Barcode code93 = new PdfCode93Barcode("CODE93");
//Set the barcode height.
code93.BarHeight = 40;
//Set the barcode color. 
code93.BarColor = Color.Blue;

//Draws a barcode on the new Page.
code93.Draw(page, new PointF(25, 500));

//Save document to disk.
document.Save("Output.pdf");
//Close the document. 
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Create a new PDF document. 
Dim document As PdfDocument = New PdfDocument()
'Creates a new page.
Dim page As PdfPage = document.Pages.Add()

'Creates a new PdfCode93Barcode.
Dim code93 As PdfCode93Barcode = New PdfCode93Barcode("CODE93")
'Set the barcode height.
code93.BarHeight = 40
'Set the barcode color. 
code93.BarColor = Color.Blue

'Draws a barcode on the new Page. 
code93.Draw(page, New PointF(25, 500))

'Save document to disk.
document.Save("Output.pdf")
'Close the document. 
document.Close(True)

{% endhighlight %}

{% endtabs %}

The following code example shows how to customize the two-dimensional barcode such as QR code using the [XDimension](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBidimensionalBarcode.html#Syncfusion_Pdf_Barcode_PdfBidimensionalBarcode_XDimension) property in [PdfBidimensionalBarcode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfBidimensionalBarcode.html) class. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Drawing QR Barcode
PdfQRBarcode barcode = new PdfQRBarcode();
//Set Error Correction Level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High;
//Set XDimension
barcode.XDimension = 3;
barcode.Text = "http://www.syncfusion.com";
//Set the background color
barcode.BackColor = Color.Green;

//Creating new PDF document
PdfDocument document = new PdfDocument();
//Adding new page to PDF document
PdfPage page = document.Pages.Add();

//Printing barcode on to the PDF. 
barcode.Draw(page, new PointF(25, 70));

//Saving the document
document.Save("QRBarcode.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Drawing QR Barcode
PdfQRBarcode barcode = new PdfQRBarcode();
//Set Error Correction Level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High;
//Set XDimension
barcode.XDimension = 3;
barcode.Text = "http://www.syncfusion.com";
//Set the background color
barcode.BackColor = Color.Green;

//Creating new PDF document
PdfDocument document = new PdfDocument();
//Adding new page to PDF document
PdfPage page = document.Pages.Add();

//Printing barcode on to the PDF. 
barcode.Draw(page, new PointF(25, 70));

//Saving the document
document.Save("QRBarcode.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Drawing QR Barcode 
Dim barcode As PdfQRBarcode = New PdfQRBarcode()
'Set Error Correction Level
barcode.ErrorCorrectionLevel = PdfErrorCorrectionLevel.High
'Set XDimension
barcode.XDimension = 3
barcode.Text = "http://www.syncfusion.com"
'Set the background color
barcode.BackColor = Color.Green

'Creating new PDF Document
Dim document As PdfDocument = New PdfDocument()
'Adding new page to PDF document
Dim page As PdfPage = document.Pages.Add()

'Printing barcode on to the PDF. 
barcode.Draw(page, New PointF(25, 70))

'Saving the Document
document.Save("QRBarcode.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

## Create QR code with logo 

The `QRCodeLogo` class serves as a representation of a logo image that can be utilized in a QR code, and the `Logo` property is employed to set the logo image in the QR barcode. By leveraging these functionalities, users gain the capability to generate QR codes that seamlessly incorporate custom logos or images, resulting in a visually appealing and branded QR code experience. 

The following code example demonstrates how to generate a QR barcode with a logo positioned at the center of it. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}		

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page.
PdfPage page = document.Pages.Add();

//Creates a new PDF QR barcode.
PdfQRBarcode qrBarcode = new PdfQRBarcode();
//Set the barcode text.
qrBarcode.Text = "https://www.syncfusion.com/";
//Create QR barcode logo.
QRCodeLogo qRCodeLogo = new QRCodeLogo("logo.png");
//Set the QR barcode logo.
qrBarcode.Logo = qRCodeLogo;
//Set the dimention of the barcode. 
qrBarcode.XDimension = 5;
//Draw the barcode to PDF page.
qrBarcode.Draw(page);

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Barcode;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page.
PdfPage page = document.Pages.Add();

//Creates a new PDF QR barcode.
PdfQRBarcode qrBarcode = new PdfQRBarcode();
//Set the barcode text.
qrBarcode.Text = "https://www.syncfusion.com/";
//Create QR barcode logo.
QRCodeLogo qRCodeLogo = new QRCodeLogo("logo.png");
//Set the QR barcode logo.
qrBarcode.Logo = qRCodeLogo;
//Set the dimention of the barcode. 
qrBarcode.XDimension = 5;
//Draw the barcode to PDF page.
qrBarcode.Draw(page);

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Barcode

'Create a new PDF document.
Dim document As PdfDocument = New PdfDocument()
'Creates a new page.
Dim page As PdfPage = document.Pages.Add()

'Creates a new PDF QR barcode.
Dim qrBarcode As PdfQRBarcode = New PdfQRBarcode()
'Set the barcode text.
qrBarcode.Text = "https://www.syncfusion.com/"
'Create QR barcode logo.
Dim qRCodeLogo As QRCodeLogo = New QRCodeLogo("logo.png")
'Set the QR barcode logo.
qrBarcode.Logo = qRCodeLogo
'Set the dimention of the barcode. 
qrBarcode.XDimension = 5
'Draw the barcode to PDF page.
qrBarcode.Draw(page)

'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

## Supported barcode error correction level

This [ErrorCorrectionLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Barcode.PdfErrorCorrectionLevel.html) property can be used in the code to specify the error correction level when generating QR codes, ensuring the QR code can withstand potential damage based on its intended usage.

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
      <td>Up to 7%	</td>
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
{{'[QR Code](https://en.wikipedia.org/wiki/QR_code#"")'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z (upper-case only)]; [space $ % * + - . / , :]; [Shift JIS characters]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[DataMatrix](https://en.wikipedia.org/wiki/Data_Matrix#"")'| markdownify }}<br/><br/></td><td>
All ASCII characters<br/><br/></td><td>
<br/><br/></td></tr>
<tr>
<td>
{{'[Code 39](https://en.wikipedia.org/wiki/Code_39#"")'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [- . $ / + % SPACE]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 39 Extended](https://en.wikipedia.org/wiki/Code_39#Full_ASCII_Code_39"")'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [a-z]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 11](https://en.wikipedia.org/wiki/Code_11#"")'| markdownify }}<br/><br/></td><td>
[0-9]; [-]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Codabar](https://en.wikipedia.org/wiki/Codabar#"")'| markdownify }}<br/><br/></td><td>
[0-9]; [- $ : / . +]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
Code 32<br/><br/></td><td>
[0-9]<br/><br/></td><td>
8<br/><br/></td></tr>
<tr>
<td>
{{'[Code 93](https://en.wikipedia.org/wiki/Code_93#"")'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [- . $ / + % SPACE]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 93 Extended](https://en.wikipedia.org/wiki/Code_93#Full_ASCII_Code_93"")'| markdownify }}<br/><br/></td><td>
All 128 ASCII characters<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 128A](https://en.wikipedia.org/wiki/Code_128#"")'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [NUL (0x00) SOH (0x01) STX (0x02) ETX (0x03) EOT(0x04) ENQ (0x05) ACK (0x06) BEL (0x07) BS (0x08) HT (0x09) LF (0x0A) VT(0x0B) FF (0x0C) CR (0x0D) SO (0x0E) SI (0x0F) DLE (0x10) DC1 (0x11) DC2(0x12) DC3 (0x13) DC4 (0x14) NAK (0x15) SYN (0x16) ETB (0x17) CAN(0x18) EM (0x19) SUB (0x1A) ESC (0x1B) FS (0x1C) GS (0x1D) RS (0x1E) US(0x1F) SPACE (0x20)]; [" ! # $ % & ' ( ) * + , - . / ; < = > ? @ [ / ]^ _ ]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 128B](https://en.wikipedia.org/wiki/Code_128#"")'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [a-z]; [SPACE (0x20) ! " # $ % & ' ( ) * + , - . / :; < = > ? @ [ / ]^ _ ` { | } ~ DEL (•) ]<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Code 128C](https://en.wikipedia.org/wiki/Code_128#"")'| markdownify }}<br/><br/></td><td>
ASCII 00-99(encodes each two digit with one code)<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[Pdf417 ](https://en.wikipedia.org/wiki/PDF417#"")'| markdownify }}<br/><br/></td><td>
[0-9]; [A-Z]; [a-z]; Mixed; Punctuation; Byte<br/><br/></td><td>
variable<br/><br/></td></tr>
<tr>
<td>
{{'[PdfEan8](https://en.wikipedia.org/wiki/EAN-8#"")'| markdownify }}<br/><br/></td><td>
[0-9];<br/><br/></td><td>
7 or 8<br/><br/></td></tr>
<tr>
<td>
{{'[PdfEan13](https://en.wikipedia.org/wiki/International_Article_Number#"")'| markdownify }}<br/><br/></td><td>
[0-9];<br/><br/></td><td>
12 or 13<br/><br/></td></tr>
</tbody>
</table>
