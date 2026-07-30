---
title: Working with Brushes | PDF library | Syncfusion
description: This section explains how to fill shapes in a PDF document with different brushes such as solid brush, gradient brush, tiling brush, and hatch brush.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Brushes

Brushes are used to draw content on a PDF document with a specific color and style. The various brushes available in Syncfusion<sup>&reg;</sup> Essential<sup>&reg;</sup> PDF are:

1. [Solid brush](#solid-brush)
2. [Gradient brush](#gradient-brush)
	* [Linear gradient brush](#linear-gradient-brush)
	* [Multi-color linear gradient brush](#multi-color-linear-gradient-brush)
	* [Radial gradient brush](#radial-gradient-brush)
3. [Tiling brush](#tiling-brush)
4. [Hatch brush](#hatch-brush)

## Solid brush

The solid brush is used to fill an object with a solid color. Essential<sup>&reg;</sup> PDF supports drawing shapes on a PDF document with a solid brush using the [PdfSolidBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfSolidBrush.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Fill-an-object-with-solid-brush-in-a-PDF/.NET/Fill-an-object-with-solid-brush-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF solid brush
PdfSolidBrush brush = new PdfSolidBrush(Color.Red);
// Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

// Save the PDF document
document.Save("SolidBrush.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF solid brush
PdfSolidBrush brush = new PdfSolidBrush(Color.Red);
// Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

// Save the PDF document
document.Save("SolidBrush.pdf");
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

' Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
' Create a new PDF solid brush
Dim brush As New PdfSolidBrush(Color.Red)
' Draw ellipse on the page
graphics.DrawEllipse(brush, New RectangleF(0, 0, 200, 100))

' Save the PDF document
document.Save("SolidBrush.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Fill-an-object-with-solid-brush-in-a-PDF/). 

## Linear gradient brush

The linear gradient brush is used to fill an object with a blend of two colors along a straight line. Essential<sup>&reg;</sup> PDF supports drawing shapes on a PDF document with a linear gradient brush using the [PdfLinearGradientBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLinearGradientBrush.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Fill-an-object-with-gradient-brush-in-a-PDF/.NET/Fill-an-object-with-gradient-brush-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF linear gradient brush
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(new PointF(0, 0), new PointF(200, 100), Color.Red, Color.Blue);
// Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

// Save the PDF document
document.Save("LinearGradientBrush.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF linear gradient brush
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(new PointF(0, 0), new PointF(200, 100), Color.Red, Color.Blue);
// Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

// Save the PDF document
document.Save("LinearGradientBrush.pdf");
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

' Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
' Create a new PDF linear gradient brush
Dim brush As New PdfLinearGradientBrush(New PointF(0, 0), New PointF(200, 100), Color.Red, Color.Blue)
' Draw ellipse on the page
graphics.DrawEllipse(brush, New RectangleF(0, 0, 200, 100))

' Save the PDF document
document.Save("LinearGradientBrush.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Fill-an-object-with-gradient-brush-in-a-PDF/).

## Multi-color linear gradient brush

The multi-color linear gradient brush is used to fill an object with a smooth blend of two or more colors, creating a transition effect. Essential<sup>&reg;</sup> PDF supports drawing shapes on a PDF document with a linear gradient brush using the [PdfLinearGradientBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLinearGradientBrush.html) class. This class allows you to define a gradient that smoothly interpolates between multiple colors by using a [PdfColorBlend](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfColorBlend.html) object, providing a visually appealing effect for shapes like rectangles, ellipses, and more.

The following code example demonstrates how to fill a rectangle with a gradient blend of multiple colors.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Linear-Gradient-Brush-with-Multiple-Colors/.NET/Linear-Gradient-Brush-with-Multiple-Colors/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF linear gradient brush
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(
    new RectangleF(new PointF(0, 0), new SizeF(200, 100)),
    Color.Red, Color.Blue,
    PdfLinearGradientMode.Horizontal);
// Create and configure the color blend
PdfColorBlend colorBlend = new PdfColorBlend(4)
{
    // Define the colors for the gradient
    Colors = new PdfColor[] { Color.Red, Color.Yellow, Color.Green, Color.Blue },
    // Define the position of each color in the gradient
    Positions = new float[] { 0, 0.3f, 0.7f, 1 }
};
// Apply the color blend to the linear gradient brush
brush.InterpolationColors = colorBlend;
// Draw a rectangle filled with the gradient
graphics.DrawRectangle(brush, new RectangleF(0, 0, 200, 100));
// Save the PDF document
document.Save("MultiColorGradient.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF linear gradient brush
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(
    new RectangleF(new PointF(0, 0), new SizeF(200, 100)),
    Color.Red, Color.Blue,
    PdfLinearGradientMode.Horizontal);
// Create and configure the color blend
PdfColorBlend colorBlend = new PdfColorBlend(4)
{
    // Define the colors for the gradient
    Colors = new PdfColor[] { Color.Red, Color.Yellow, Color.Green, Color.Blue },
    // Define the position of each color in the gradient
    Positions = new float[] { 0, 0.3f, 0.7f, 1 }
};
// Apply the color blend to the linear gradient brush
brush.InterpolationColors = colorBlend;
// Draw a rectangle filled with the gradient
graphics.DrawRectangle(brush, new RectangleF(0, 0, 200, 100));
// Save the PDF document
document.Save("MultiColorGradient.pdf");
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
' Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
' Create a new PDF linear gradient brush
Dim brush As New PdfLinearGradientBrush(
    New RectangleF(New PointF(0, 0), New SizeF(200, 100)),
    Color.Red, Color.Blue,
    PdfLinearGradientMode.Horizontal)
' Create and configure the color blend
Dim colorBlend As New PdfColorBlend(4) With {
    ' Define the colors for the gradient
    .Colors = New PdfColor() {Color.Red, Color.Yellow, Color.Green, Color.Blue},
    ' Define the position of each color in the gradient
    .Positions = New Single() {0, 0.3F, 0.7F, 1}
}
' Apply the color blend to the linear gradient brush
brush.InterpolationColors = colorBlend
' Draw a rectangle filled with the gradient
graphics.DrawRectangle(brush, New RectangleF(0, 0, 200, 100))
' Save the PDF document
document.Save("MultiColorGradient.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Linear-Gradient-Brush-with-Multiple-Colors/.NET).

## Radial gradient brush

The radial gradient brush is used to fill an object with a blend of two or more colors that radiate outward from a center point. You can draw any shape on a PDF document with a radial gradient brush using the [PdfRadialGradientBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfRadialGradientBrush.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Draw-shapes-on-PDF-with-radial-gradient-brush/.NET/Draw-shapes-on-PDF-with-radial-gradient-brush/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF radial gradient brush
PdfRadialGradientBrush brush = new PdfRadialGradientBrush(new PointF(50, 50), 0, new PointF(50, 50), 50, Color.Red, Color.Blue);
// Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 100, 100));

// Save the PDF document
document.Save("RadialGradientBrush.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF radial gradient brush
PdfRadialGradientBrush brush = new PdfRadialGradientBrush(new PointF(50, 50), 0, new PointF(50, 50), 50, Color.Red, Color.Blue);
// Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 100, 100));

// Save the PDF document
document.Save("RadialGradientBrush.pdf");
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

' Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
' Create a new PDF radial gradient brush
Dim brush As New PdfRadialGradientBrush(New PointF(50, 50), 0, New PointF(50, 50), 50, Color.Red, Color.Blue)
' Draw ellipse on the page
graphics.DrawEllipse(brush, New RectangleF(0, 0, 100, 100))

' Save the PDF document
document.Save("RadialGradientBrush.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Draw-shapes-on-PDF-with-radial-gradient-brush/).

## Tiling brush

The tiling brush is used to draw a shape repeatedly. You can draw any shape on a PDF page with a tiling brush using the [PdfTilingBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTilingBrush.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Draw-shape-on-PDF-with-tiling-brush/.NET/Draw-shape-on-PDF-with-tiling-brush/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF tiling brush
PdfTilingBrush brush = new PdfTilingBrush(new RectangleF(0, 0, 11, 11));
// Draw an ellipse inside the tile
brush.Graphics.DrawEllipse(PdfPens.Red, new RectangleF(0, 0, 10, 10));
// Draw an ellipse using the tiling brush
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

// Save the PDF document
document.Save("TilingBrush.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Create a new PDF tiling brush
PdfTilingBrush brush = new PdfTilingBrush(new RectangleF(0, 0, 11, 11));
// Draw an ellipse inside the tile
brush.Graphics.DrawEllipse(PdfPens.Red, new RectangleF(0, 0, 10, 10));
// Draw an ellipse using the tiling brush
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

// Save the PDF document
document.Save("TilingBrush.pdf");
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

' Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
' Create a new PDF tiling brush
Dim brush As New PdfTilingBrush(New RectangleF(0, 0, 11, 11))
' Draw an ellipse inside the tile
brush.Graphics.DrawEllipse(PdfPens.Red, New RectangleF(0, 0, 10, 10))
' Draw an ellipse using the tiling brush
graphics.DrawEllipse(brush, New RectangleF(0, 0, 200, 100))

' Save the PDF document
document.Save("TilingBrush.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Draw-shape-on-PDF-with-tiling-brush/).

## Hatch brush

The hatch brush is used to fill an object with hatch patterns. Essential<sup>&reg;</sup> PDF supports drawing shapes on a PDF document using a hatch brush with the [PdfHatchBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfHatchBrush.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Hatch-brush/.NET/Hatch-brush/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Define the foreground and background colors for the hatch brush
Color systemForeColor = Color.FromArgb(255, 255, 255, 0);
Color systemBackColor = Color.FromArgb(255, 78, 167, 46);

// Create a new PDF hatch brush with a pattern and colors
PdfHatchBrush hatchBrush = new PdfHatchBrush(PdfHatchStyle.Plaid, new PdfColor(systemForeColor), new PdfColor(systemBackColor));

// Draw a rectangle on the page
graphics.DrawRectangle(PdfPens.Black, hatchBrush, new RectangleF(100, 100, 300, 200));

// Save the PDF document
document.Save("HatchBrush.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
// Define the foreground and background colors for the hatch brush
Color systemForeColor = Color.FromArgb(255, 255, 255, 0);
Color systemBackColor = Color.FromArgb(255, 78, 167, 46);

// Create a new PDF hatch brush with a pattern and colors
PdfHatchBrush hatchBrush = new PdfHatchBrush(PdfHatchStyle.Plaid, new PdfColor(systemForeColor), new PdfColor(systemBackColor));

// Draw a rectangle on the page
graphics.DrawRectangle(PdfPens.Black, hatchBrush, new RectangleF(100, 100, 300, 200));

// Save the PDF document
document.Save("HatchBrush.pdf");
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
' Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
' Define the foreground and background colors for the hatch brush
Dim systemForeColor As Color = Color.FromArgb(255, 255, 255, 0)
Dim systemBackColor As Color = Color.FromArgb(255, 78, 167, 46)

' Create a new PDF hatch brush with a pattern and colors
Dim hatchBrush As New PdfHatchBrush(PdfHatchStyle.Plaid, New PdfColor(systemForeColor), New PdfColor(systemBackColor))

' Draw a rectangle on the page
graphics.DrawRectangle(PdfPens.Black, hatchBrush, New RectangleF(100, 100, 300, 200))

' Save the PDF document
document.Save("HatchBrush.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Hatch-brush/.NET).