---
title: Working with Color Spaces | PDF library | Syncfusion
description: Learn how to apply color spaces such as CalGray, CalRGB, ICC, and Pantone colors when drawing graphics in a PDF document using the Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Color Spaces

The Syncfusion<sup>&reg;</sup> [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) allows you to apply color spaces in the following ways:

* [Document color space](#working-with-color-spaces-in-a-document)
* [Graphics color space](#working-with-color-spaces-in-graphics)

## Working with color spaces in a document

You can set the color space by using the [ColorSpace](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_ColorSpace) property of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The following color space categories are supported:

* [Device color spaces](#device-color-space)
* [CIE-based color spaces](#cie-based-color-spaces)
* [ICC-based color spaces](#icc-based-color-spaces)

## Device color space

Device color space simply describes the range of colors that a camera can see, a printer can print, or a monitor can display. These color spaces depend on the device on which the document is displayed. The following types are supported:

* DeviceGray
* DeviceRGB
* DeviceCMYK

## CIE-based color spaces

CIE-based color space in the PDF document is classified as follows:

* CalGray
* CalRGB
* Lab

You can draw a rectangle on a new PDF document with a **CalGray** brush using the [PdfCalGrayColorSpace](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.ColorSpace.PdfCalGrayColorSpace.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/ColorSpace/Draw-rectangle-on-new-PDF-with-CalGray-brush/.NET/Draw-rectangle-on-new-PDF-with-CalGray-brush/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the PDF document
PdfPage page = document.Pages.Add();
// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;

// Create a CalGray color space
PdfCalGrayColorSpace calGrayColorSpace = new PdfCalGrayColorSpace();
// Update the color values
calGrayColorSpace.Gamma = 0.7;
calGrayColorSpace.WhitePoint = new double[] { 0.2, 1, 0.8 };
// Apply the color space to a brush
PdfCalGrayColor calGrayColor = new PdfCalGrayColor(calGrayColorSpace);
calGrayColor.Gray = 0.1;
PdfBrush brush = new PdfSolidBrush(calGrayColor);
RectangleF bounds = new RectangleF(0, 0, 300, 300);

// Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds);

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the PDF document
PdfPage page = document.Pages.Add();
// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;

// Create a CalGray color space
PdfCalGrayColorSpace calGrayColorSpace = new PdfCalGrayColorSpace();
// Update the color values
calGrayColorSpace.Gamma = 0.7;
calGrayColorSpace.WhitePoint = new double[] { 0.2, 1, 0.8 };
// Apply the color space to a brush
PdfCalGrayColor calGrayColor = new PdfCalGrayColor(calGrayColorSpace);
calGrayColor.Gray = 0.1;
PdfBrush brush = new PdfSolidBrush(calGrayColor);
RectangleF bounds = new RectangleF(0, 0, 300, 300);

// Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds);

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.ColorSpace
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics

' Create a CalGray color space
Dim calGrayColorSpace As New PdfCalGrayColorSpace()
' Update the color values
calGrayColorSpace.Gamma = 0.7
calGrayColorSpace.WhitePoint = New Double() {0.2, 1, 0.8}
' Apply the color space to a brush
Dim calGrayColor As New PdfCalGrayColor(calGrayColorSpace)
calGrayColor.Gray = 0.1
Dim brush As PdfBrush = New PdfSolidBrush(calGrayColor)
Dim bounds As New RectangleF(0, 0, 300, 300)

' Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds)

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/ColorSpace/Draw-rectangle-on-new-PDF-with-CalGray-brush).

The following code example illustrates how to draw a rectangle with a **CalGray** brush in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/ColorSpace/Draw-rectangle-with-CalGray-brush-in-an-existing-PDF/.NET/Draw-rectangle-with-CalGray-brush-in-an-existing-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Load the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
// Acquire the graphics of the page
PdfGraphics graphics = loadedPage.Graphics;

// Create a CalGray color space
PdfCalGrayColorSpace calGrayColorSpace = new PdfCalGrayColorSpace();
// Update the color values
calGrayColorSpace.Gamma = 0.7;
calGrayColorSpace.WhitePoint = new double[] { 0.2, 1, 0.8 };
// Apply the color space to a brush
PdfCalGrayColor calGrayColor = new PdfCalGrayColor(calGrayColorSpace);
calGrayColor.Gray = 0.1;
PdfBrush brush = new PdfSolidBrush(calGrayColor);
RectangleF bounds = new RectangleF(0, 0, 300, 300);

// Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds);

// Save the modified document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Load the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
// Acquire the graphics of the page
PdfGraphics graphics = loadedPage.Graphics;

// Create a CalGray color space
PdfCalGrayColorSpace calGrayColorSpace = new PdfCalGrayColorSpace();
// Update the color values
calGrayColorSpace.Gamma = 0.7;
calGrayColorSpace.WhitePoint = new double[] { 0.2, 1, 0.8 };
// Apply the color space to a brush
PdfCalGrayColor calGrayColor = new PdfCalGrayColor(calGrayColorSpace);
calGrayColor.Gray = 0.1;
PdfBrush brush = new PdfSolidBrush(calGrayColor);
RectangleF bounds = new RectangleF(0, 0, 300, 300);

// Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds);

// Save the modified document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.ColorSpace
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
' Load the first page
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)
' Acquire the graphics of the page
Dim graphics As PdfGraphics = loadedPage.Graphics

' Create a CalGray color space
Dim calGrayColorSpace As New PdfCalGrayColorSpace()
' Update the color values
calGrayColorSpace.Gamma = 0.7
calGrayColorSpace.WhitePoint = New Double() {0.2, 1, 0.8}
' Apply the color space to a brush
Dim calGrayColor As New PdfCalGrayColor(calGrayColorSpace)
calGrayColor.Gray = 0.1
Dim brush As PdfBrush = New PdfSolidBrush(calGrayColor)
Dim bounds As New RectangleF(0, 0, 300, 300)

' Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds)

' Save the modified document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/ColorSpace/Draw-rectangle-with-CalGray-brush-in-an-existing-PDF).

## ICC-based color spaces

To create a color for a brush or pen used to render a shape or text in the PDF document, you can use ICC-based color spaces.

The following types are supported:

* Special color spaces – Pantone colors
* Indexed
* Separation

The following code example illustrates how to set the indexed ICC color space using the [PdfCalRGBColorSpace](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.ColorSpace.PdfCalRGBColorSpace.html) and [PdfICCColorSpace](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.ColorSpace.PdfICCColorSpace.html) classes in a new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/ColorSpace/Create-PDF-document-with-ICC-color-space/.NET/Create-PDF-document-with-ICC-color-space/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the PDF document
PdfPage page = document.Pages.Add();
// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;

// Create a CalRGB color space to use as the alternate color space
PdfCalRGBColorSpace calRgbCS = new PdfCalRGBColorSpace();
calRgbCS.Gamma = new double[] { 7.6, 5.1, 8.5 };
calRgbCS.Matrix = new double[] { 1, 0, 0, 0, 1, 0, 0, 0, 1 };
calRgbCS.WhitePoint = new double[] { 0.7, 1, 0.8 };

// Read the ICC profile from a file
byte[] profileData;
using (FileStream fileStream = new FileStream("input.icc", FileMode.Open, FileAccess.Read))
{
    profileData = new byte[fileStream.Length];
    fileStream.Read(profileData, 0, profileData.Length);
}

// Instantiate the ICC color space and configure it
PdfICCColorSpace iccBasedCS = new PdfICCColorSpace();
iccBasedCS.ProfileData = profileData;
iccBasedCS.AlternateColorSpace = calRgbCS;
iccBasedCS.ColorComponents = 3;
iccBasedCS.Range = new double[] { 0.0, 1.0, 0.0, 1.0, 0.0, 1.0 };
PdfICCColor redColor = new PdfICCColor(iccBasedCS);
redColor.ColorComponents = new double[] { 1, 0, 1 };
PdfBrush brush = new PdfSolidBrush(redColor);
RectangleF bounds = new RectangleF(0, 0, 300, 300);

// Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds);

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;

using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the PDF document
PdfPage page = document.Pages.Add();
// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;

// Create a CalRGB color space to use as the alternate color space
PdfCalRGBColorSpace calRgbCS = new PdfCalRGBColorSpace();
calRgbCS.Gamma = new double[] { 7.6, 5.1, 8.5 };
calRgbCS.Matrix = new double[] { 1, 0, 0, 0, 1, 0, 0, 0, 1 };
calRgbCS.WhitePoint = new double[] { 0.7, 1, 0.8 };

// Read the ICC profile from a file
byte[] profileData;
using (FileStream fileStream = new FileStream("input.icc", FileMode.Open, FileAccess.Read))
{
    profileData = new byte[fileStream.Length];
    fileStream.Read(profileData, 0, profileData.Length);
}

// Instantiate the ICC color space and configure it
PdfICCColorSpace iccBasedCS = new PdfICCColorSpace();
iccBasedCS.ProfileData = profileData;
iccBasedCS.AlternateColorSpace = calRgbCS;
iccBasedCS.ColorComponents = 3;
iccBasedCS.Range = new double[] { 0.0, 1.0, 0.0, 1.0, 0.0, 1.0 };
PdfICCColor redColor = new PdfICCColor(iccBasedCS);
redColor.ColorComponents = new double[] { 1, 0, 1 };
PdfBrush brush = new PdfSolidBrush(redColor);
RectangleF bounds = new RectangleF(0, 0, 300, 300);

// Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds);

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.ColorSpace
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a page to the PDF document
Dim page As PdfPage = document.Pages.Add()
' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics

' Create a CalRGB color space to use as the alternate color space
Dim calRgbCS As New PdfCalRGBColorSpace()
calRgbCS.Gamma = New Double() {7.6, 5.1, 8.5}
calRgbCS.Matrix = New Double() {1, 0, 0, 0, 1, 0, 0, 0, 1}
calRgbCS.WhitePoint = New Double() {0.7, 1, 0.8}

' Read the ICC profile from a file
Dim profileData As Byte()
Using fileStream As New FileStream("input.icc", FileMode.Open, FileAccess.Read)
    ReDim profileData(CInt(fileStream.Length) - 1)
    fileStream.Read(profileData, 0, profileData.Length)
End Using

' Instantiate the ICC color space and configure it
Dim iccBasedCS As New PdfICCColorSpace()
iccBasedCS.ProfileData = profileData
iccBasedCS.AlternateColorSpace = calRgbCS
iccBasedCS.ColorComponents = 3
iccBasedCS.Range = New Double() {0.0, 1.0, 0.0, 1.0, 0.0, 1.0}
Dim redColor As New PdfICCColor(iccBasedCS)
redColor.ColorComponents = New Double() {1, 0, 1}
Dim brush As PdfBrush = New PdfSolidBrush(redColor)
Dim bounds As New RectangleF(0, 0, 300, 300)

' Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds)

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/ColorSpace/Create-PDF-document-with-ICC-color-space).

The following code example illustrates how to set the indexed ICC color space in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/ColorSpace/Set-ICC-color-space-in-an-existing-PDF-document/.NET/Set-ICC-color-space-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Load the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
// Acquire the graphics of the page
PdfGraphics graphics = loadedPage.Graphics;

// Create a CalRGB color space to use as the alternate color space
PdfCalRGBColorSpace calRgbCS = new PdfCalRGBColorSpace();
calRgbCS.Gamma = new double[] { 7.6, 5.1, 8.5 };
calRgbCS.Matrix = new double[] { 1, 0, 0, 0, 1, 0, 0, 0, 1 };
calRgbCS.WhitePoint = new double[] { 0.7, 1, 0.8 };

// Read the ICC profile from a file
byte[] profileData;
using (FileStream fileStream = new FileStream("input.icc", FileMode.Open, FileAccess.Read))
{
    profileData = new byte[fileStream.Length];
    fileStream.Read(profileData, 0, profileData.Length);
}

// Instantiate the ICC color space and configure it
PdfICCColorSpace iccBasedCS = new PdfICCColorSpace();
iccBasedCS.ProfileData = profileData;
iccBasedCS.AlternateColorSpace = calRgbCS;
iccBasedCS.ColorComponents = 3;
iccBasedCS.Range = new double[] { 0.0, 1.0, 0.0, 1.0, 0.0, 1.0 };
PdfICCColor redColor = new PdfICCColor(iccBasedCS);
redColor.ColorComponents = new double[] { 1, 0, 1 };
PdfBrush brush = new PdfSolidBrush(redColor);
RectangleF bounds = new RectangleF(0, 0, 300, 300);

// Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds);

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Load the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
// Acquire the graphics of the page
PdfGraphics graphics = loadedPage.Graphics;

// Create a CalRGB color space to use as the alternate color space
PdfCalRGBColorSpace calRgbCS = new PdfCalRGBColorSpace();
calRgbCS.Gamma = new double[] { 7.6, 5.1, 8.5 };
calRgbCS.Matrix = new double[] { 1, 0, 0, 0, 1, 0, 0, 0, 1 };
calRgbCS.WhitePoint = new double[] { 0.7, 1, 0.8 };

// Read the ICC profile from a file
byte[] profileData;
using (FileStream fileStream = new FileStream("input.icc", FileMode.Open, FileAccess.Read))
{
    profileData = new byte[fileStream.Length];
    fileStream.Read(profileData, 0, profileData.Length);
}

// Instantiate the ICC color space and configure it
PdfICCColorSpace iccBasedCS = new PdfICCColorSpace();
iccBasedCS.ProfileData = profileData;
iccBasedCS.AlternateColorSpace = calRgbCS;
iccBasedCS.ColorComponents = 3;
iccBasedCS.Range = new double[] { 0.0, 1.0, 0.0, 1.0, 0.0, 1.0 };
PdfICCColor redColor = new PdfICCColor(iccBasedCS);
redColor.ColorComponents = new double[] { 1, 0, 1 };
PdfBrush brush = new PdfSolidBrush(redColor);
RectangleF bounds = new RectangleF(0, 0, 300, 300);

// Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds);

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.ColorSpace
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
' Load the first page
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)
' Acquire the graphics of the page
Dim graphics As PdfGraphics = loadedPage.Graphics

' Create a CalRGB color space to use as the alternate color space
Dim calRgbCS As New PdfCalRGBColorSpace()
calRgbCS.Gamma = New Double() {7.6, 5.1, 8.5}
calRgbCS.Matrix = New Double() {1, 0, 0, 0, 1, 0, 0, 0, 1}
calRgbCS.WhitePoint = New Double() {0.7, 1, 0.8}

' Read the ICC profile from a file
Dim profileData As Byte()
Using fileStream As New FileStream("input.icc", FileMode.Open, FileAccess.Read)
    ReDim profileData(CInt(fileStream.Length) - 1)
    fileStream.Read(profileData, 0, profileData.Length)
End Using

' Instantiate the ICC color space and configure it
Dim iccBasedCS As New PdfICCColorSpace()
iccBasedCS.ProfileData = profileData
iccBasedCS.AlternateColorSpace = calRgbCS
iccBasedCS.ColorComponents = 3
iccBasedCS.Range = New Double() {0.0, 1.0, 0.0, 1.0, 0.0, 1.0}
Dim redColor As New PdfICCColor(iccBasedCS)
redColor.ColorComponents = New Double() {1, 0, 1}
Dim brush As PdfBrush = New PdfSolidBrush(redColor)
Dim bounds As New RectangleF(0, 0, 300, 300)

' Draw a rectangle using the brush
graphics.DrawRectangle(brush, bounds)

' Save the document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/ColorSpace/Set-ICC-color-space-in-an-existing-PDF-document).

## Pantone colors

The following code example illustrates how to draw graphics elements by using Pantone colors through the [PdfSeparationColorSpace](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.ColorSpace.PdfSeparationColorSpace.html) class in a new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/ColorSpace/Draw-graphics-elements-by-using-Pantone-colors-in-a-PDF/.NET/Draw-graphics-elements-by-using-Pantone-colors-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Functions;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the PDF document
PdfPage page = document.Pages.Add();

// Create an exponential interpolation function used to map the tint value
PdfExponentialInterpolationFunction function = new PdfExponentialInterpolationFunction(true);
function.C1 = new float[] { 0.38f, 0.88f };

// Create the separation color space for the Pantone color
PdfSeparationColorSpace colorSpace = new PdfSeparationColorSpace();
colorSpace.TintTransform = function;
colorSpace.Colorant = "PANTONE Orange 021 C";

// Apply the color space to a pen
PdfSeparationColor color = new PdfSeparationColor(colorSpace);
color.Tint = 0.7;
RectangleF bounds = new RectangleF(20, 70, 200, 100);
PdfPen pen = new PdfPen(color);

// Draw a rectangle using the pen
page.Graphics.DrawRectangle(pen, bounds);

// Save the document
document.Save("SeparationColor.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Functions;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the PDF document
PdfPage page = document.Pages.Add();

// Create an exponential interpolation function used to map the tint value
PdfExponentialInterpolationFunction function = new PdfExponentialInterpolationFunction(true);
function.C1 = new float[] { 0.38f, 0.88f };

// Create the separation color space for the Pantone color
PdfSeparationColorSpace colorSpace = new PdfSeparationColorSpace();
colorSpace.TintTransform = function;
colorSpace.Colorant = "PANTONE Orange 021 C";

// Apply the color space to a pen
PdfSeparationColor color = new PdfSeparationColor(colorSpace);
color.Tint = 0.7;
RectangleF bounds = new RectangleF(20, 70, 200, 100);
PdfPen pen = new PdfPen(color);

// Draw a rectangle using the pen
page.Graphics.DrawRectangle(pen, bounds);

// Save the document
document.Save("SeparationColor.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.ColorSpace
Imports Syncfusion.Pdf.Functions
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a page to the PDF document
Dim page As PdfPage = document.Pages.Add()

' Create an exponential interpolation function used to map the tint value
Dim function As New PdfExponentialInterpolationFunction(True)
function.C1 = New Single() {0.38F, 0.88F}

' Create the separation color space for the Pantone color
Dim colorSpace As New PdfSeparationColorSpace()
colorSpace.TintTransform = function
colorSpace.Colorant = "PANTONE Orange 021 C"

' Apply the color space to a pen
Dim color As New PdfSeparationColor(colorSpace)
color.Tint = 0.7
Dim bounds As New RectangleF(20, 70, 200, 100)
Dim pen As New PdfPen(color)

' Draw a rectangle using the pen
page.Graphics.DrawRectangle(pen, bounds)

' Save the document
document.Save("SeparationColor.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/ColorSpace/Draw-graphics-elements-by-using-Pantone-colors-in-a-PDF).

The following code example illustrates how to draw graphics elements by using Pantone colors in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/ColorSpace/Add-graphics-elemets-by-Pantone-color-in-existing-PDF/.NET/Add-graphics-elemets-by-Pantone-color-in-existing-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Functions;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Load the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

// Create an exponential interpolation function used to map the tint value
PdfExponentialInterpolationFunction function = new PdfExponentialInterpolationFunction(true);
function.C1 = new float[] { 0.38f, 0.88f };

// Create the separation color space for the Pantone color
PdfSeparationColorSpace colorSpace = new PdfSeparationColorSpace();
colorSpace.TintTransform = function;
colorSpace.Colorant = "PANTONE Orange 021 C";

// Apply the color space to a pen
PdfSeparationColor color = new PdfSeparationColor(colorSpace);
color.Tint = 0.7;
RectangleF bounds = new RectangleF(20, 70, 200, 100);
PdfPen pen = new PdfPen(color);

// Draw a rectangle using the pen
loadedPage.Graphics.DrawRectangle(pen, bounds);

// Save the document
loadedDocument.Save("SeparationColor.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.ColorSpace;
using Syncfusion.Pdf.Functions;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Load the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

// Create an exponential interpolation function used to map the tint value
PdfExponentialInterpolationFunction function = new PdfExponentialInterpolationFunction(true);
function.C1 = new float[] { 0.38f, 0.88f };

// Create the separation color space for the Pantone color
PdfSeparationColorSpace colorSpace = new PdfSeparationColorSpace();
colorSpace.TintTransform = function;
colorSpace.Colorant = "PANTONE Orange 021 C";

// Apply the color space to a pen
PdfSeparationColor color = new PdfSeparationColor(colorSpace);
color.Tint = 0.7;
RectangleF bounds = new RectangleF(20, 70, 200, 100);
PdfPen pen = new PdfPen(color);

// Draw a rectangle using the pen
loadedPage.Graphics.DrawRectangle(pen, bounds);

// Save the document
loadedDocument.Save("SeparationColor.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.ColorSpace
Imports Syncfusion.Pdf.Functions
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
' Load the first page
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

' Create an exponential interpolation function used to map the tint value
Dim function As New PdfExponentialInterpolationFunction(True)
function.C1 = New Single() {0.38F, 0.88F}

' Create the separation color space for the Pantone color
Dim colorSpace As New PdfSeparationColorSpace()
colorSpace.TintTransform = function
colorSpace.Colorant = "PANTONE Orange 021 C"

' Apply the color space to a pen
Dim color As New PdfSeparationColor(colorSpace)
color.Tint = 0.7
Dim bounds As New RectangleF(20, 70, 200, 100)
Dim pen As New PdfPen(color)

' Draw a rectangle using the pen
loadedPage.Graphics.DrawRectangle(pen, bounds)

' Save the document
loadedDocument.Save("SeparationColor.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/ColorSpace/Add-graphics-elemets-by-Pantone-color-in-existing-PDF).

## Working with color spaces in graphics

You can set the color space for a particular object in a PDF document by using the [ColorSpace](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_ColorSpace) property of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) class and specifying the color space as `GrayScale` or `CMYK` from the [PdfColorSpace](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfColorSpace.html) enumeration.

The following code example illustrates how to use the color spaces on particular objects in a new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/ColorSpace/Use-color-space-in-particular-object-in-a-new-PDF/.NET/Use-color-space-in-particular-object-in-a-new-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the PDF document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
PdfPen pen = new PdfPen(Color.Red);
PdfBrush brush = new PdfSolidBrush(Color.Blue);
RectangleF rectangle = new RectangleF(0, 0, 100, 100);

// Draw using the default color space
graphics.DrawRectangle(pen, brush, rectangle);
graphics.Save();

// Use the GrayScale color space
graphics.ColorSpace = PdfColorSpace.GrayScale;
graphics.DrawRectangle(pen, brush, rectangle);

// Use the CMYK color space
graphics.ColorSpace = PdfColorSpace.CMYK;
graphics.DrawRectangle(pen, brush, rectangle);
graphics.Restore();

// Draw using the default color space again
graphics.DrawRectangle(pen, brush, rectangle);
graphics.DrawRectangle(brush, rectangle);

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
// Add a page to the PDF document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
PdfPen pen = new PdfPen(Color.Red);
PdfBrush brush = new PdfSolidBrush(Color.Blue);
RectangleF rectangle = new RectangleF(0, 0, 100, 100);

// Draw using the default color space
graphics.DrawRectangle(pen, brush, rectangle);
graphics.Save();

// Use the GrayScale color space
graphics.ColorSpace = PdfColorSpace.GrayScale;
graphics.DrawRectangle(pen, brush, rectangle);

// Use the CMYK color space
graphics.ColorSpace = PdfColorSpace.CMYK;
graphics.DrawRectangle(pen, brush, rectangle);
graphics.Restore();

// Draw using the default color space again
graphics.DrawRectangle(pen, brush, rectangle);
graphics.DrawRectangle(brush, rectangle);

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
' Add a page to the PDF document
Dim page As PdfPage = document.Pages.Add()

' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics
Dim pen As New PdfPen(Color.Red)
Dim brush As New PdfSolidBrush(Color.Blue)
Dim rectangle As New RectangleF(0, 0, 100, 100)

' Draw using the default color space
graphics.DrawRectangle(pen, brush, rectangle)
graphics.Save()

' Use the GrayScale color space
graphics.ColorSpace = PdfColorSpace.GrayScale
graphics.DrawRectangle(pen, brush, rectangle)

' Use the CMYK color space
graphics.ColorSpace = PdfColorSpace.CMYK
graphics.DrawRectangle(pen, brush, rectangle)
graphics.Restore()

' Draw using the default color space again
graphics.DrawRectangle(pen, brush, rectangle)
graphics.DrawRectangle(brush, rectangle)

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/ColorSpace/Use-color-space-in-particular-object-in-a-new-PDF).

The following code example illustrates how to use the color spaces on particular objects in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/ColorSpace/Add-color-space-in-particular-object-in-an-existing-PDF/.NET/Add-color-space-in-particular-object-in-an-existing-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Load the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

// Acquire the graphics of the page
PdfGraphics graphics = loadedPage.Graphics;
PdfPen pen = new PdfPen(Color.Red);
PdfBrush brush = new PdfSolidBrush(Color.Blue);
RectangleF rectangle = new RectangleF(0, 0, 100, 100);

// Draw using the default color space
graphics.DrawRectangle(pen, brush, rectangle);
graphics.Save();

// Use the GrayScale color space
graphics.ColorSpace = PdfColorSpace.GrayScale;
graphics.DrawRectangle(pen, brush, rectangle);

// Use the CMYK color space
graphics.ColorSpace = PdfColorSpace.CMYK;
graphics.DrawRectangle(pen, brush, rectangle);
graphics.Restore();

// Draw using the default color space again
graphics.DrawRectangle(pen, brush, rectangle);
graphics.DrawRectangle(brush, rectangle);

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Load the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

// Acquire the graphics of the page
PdfGraphics graphics = loadedPage.Graphics;
PdfPen pen = new PdfPen(Color.Red);
PdfBrush brush = new PdfSolidBrush(Color.Blue);
RectangleF rectangle = new RectangleF(0, 0, 100, 100);

// Draw using the default color space
graphics.DrawRectangle(pen, brush, rectangle);
graphics.Save();

// Use the GrayScale color space
graphics.ColorSpace = PdfColorSpace.GrayScale;
graphics.DrawRectangle(pen, brush, rectangle);

// Use the CMYK color space
graphics.ColorSpace = PdfColorSpace.CMYK;
graphics.DrawRectangle(pen, brush, rectangle);
graphics.Restore();

// Draw using the default color space again
graphics.DrawRectangle(pen, brush, rectangle);
graphics.DrawRectangle(brush, rectangle);

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
' Load the first page
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

' Acquire the graphics of the page
Dim graphics As PdfGraphics = loadedPage.Graphics
Dim pen As New PdfPen(Color.Red)
Dim brush As New PdfSolidBrush(Color.Blue)
Dim rectangle As New RectangleF(0, 0, 100, 100)

' Draw using the default color space
graphics.DrawRectangle(pen, brush, rectangle)
graphics.Save()

' Use the GrayScale color space
graphics.ColorSpace = PdfColorSpace.GrayScale
graphics.DrawRectangle(pen, brush, rectangle)

' Use the CMYK color space
graphics.ColorSpace = PdfColorSpace.CMYK
graphics.DrawRectangle(pen, brush, rectangle)
graphics.Restore()

' Draw using the default color space again
graphics.DrawRectangle(pen, brush, rectangle)
graphics.DrawRectangle(brush, rectangle)

' Save the document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/ColorSpace/Add-color-space-in-particular-object-in-an-existing-PDF).