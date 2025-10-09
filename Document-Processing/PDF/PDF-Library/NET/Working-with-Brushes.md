---
title: Working with Brushes | Syncfusion
description: This section explains how to add shapes using different brushes such as solid brush, gradient brush, tiling brush, and more.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Brushes

Brushes are used to draw the content on PDF document with specific color and style. Various brushes available in Syncfusion Essential<sup>&reg;</sup> PDF are,

1. Solid Brush
2. Gradient Brush
	* Linear Gradient Brush
	* Radial Gradient Brush
3. Tiling Brush
4. Hatch Brush

## Solid Brush

The solid brush is used to fill an object with solid color. Essential<sup>&reg;</sup> PDF supports drawing shapes on PDF document with solid brush using the [PdfSolidBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfSolidBrush.html) class. The following code snippet illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Fill-an-object-with-solid-brush-in-a-PDF/.NET/Fill-an-object-with-solid-brush-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Create new PDF solid brush
PdfSolidBrush brush = new PdfSolidBrush(Color.Red);
//Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

//Save the PDF document
doc.Save("Output.pdf");
//Close the Pdf Document
doc.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Create new PDF solid brush
PdfSolidBrush brush = new PdfSolidBrush(Color.Red);
//Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

//Save the PDF document
doc.Save("SolidBrush.pdf");
//Close the instance of PdfDocument
doc.Close(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim doc As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = doc.Pages.Add

'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
'Create new PDF solid brush
Dim brush As PdfSolidBrush = New PdfSolidBrush(Color.Red)
'Draw ellipse on the page
graphics.DrawEllipse(brush, New RectangleF(0, 0, 200, 100))

'Save the PDF document
doc.Save("SolidBrush.pdf")
'Close the instance of PdfDocument
doc.Close(True)
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Fill-an-object-with-solid-brush-in-a-PDF/). 

## Linear gradient brush

The gradient brush is used to fill an object with blend of two or more colors. Essential<sup>&reg;</sup> PDF supports drawing shapes on PDF document with linear gradient brush using [PdfLinearGradientBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLinearGradientBrush.html) class. The following code snippet illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Fill-an-object-with-gradient-brush-in-a-PDF/.NET/Fill-an-object-with-gradient-brush-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Create new PDF linear gradient brush
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(new PointF(0, 0), new PointF(200, 100), Color.Red, Color.Blue);
//Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

//Save the PDF document
doc.Save("Output.pdf");
//Close the Pdf Document
doc.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Create new PDF linear gradient brush
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(new PointF(0, 0), new PointF(200, 100), Color.Red, Color.Blue);    
//Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

//Save the PDF document
doc.Save("LinearGradientBrush.pdf");
//Close the instance of PdfDocument
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim doc As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = doc.Pages.Add

'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
'Create new PDF linear gradient brush
Dim brush As PdfLinearGradientBrush = New PdfLinearGradientBrush(New PointF(0, 0), New PointF(200, 100), Color.Red, Color.Blue)
'Draw ellipse on the page
graphics.DrawEllipse(brush, New RectangleF(0, 0, 200, 100))

'Save the PDF document
doc.Save("LinearGradientBrush.pdf")
'Close the instance of PdfDocument
doc.Close(True)
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Fill-an-object-with-gradient-brush-in-a-PDF/). 

## Multi-color linear gradient brush

The gradient brush is used to fill an object with a smooth blend of two or more colors, creating a transition effect. Essential<sup>®</sup> PDF supports drawing shapes on a PDF document with a linear gradient brush using the [PdfLinearGradientBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLinearGradientBrush.html) class. This class allows you to define a gradient that smoothly interpolates between multiple colors, providing a visually appealing effect for shapes like rectangles, ellipses, and more.

The following code example demonstrates how to fill a rectangle with a gradient blend of multiple colors.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Linear-Gradient-Brush-with-Multiple-Colors/.NET/Linear-Gradient-Brush-with-Multiple-Colors/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
using (PdfDocument document = new PdfDocument())
{
    // Add a page to the document
    PdfPage page = document.Pages.Add();

    // Create PDF graphics for the page
    PdfGraphics graphics = page.Graphics;

    // Create a new PDF linear gradient brush
    PdfLinearGradientBrush brush = new PdfLinearGradientBrush(
        new RectangleF(new PointF(0, 0), new SizeF(200, 100)),
        Color.Red, Color.Blue,
        PdfLinearGradientMode.Horizontal
    );

    // Create and configure the color blend
    PdfColorBlend colorBlend = new PdfColorBlend(4)
    {
        // Define the colors for the gradient
        Colors = new PdfColor[]
        {
            Color.Red,
            Color.Yellow,
            Color.Green,
            Color.Blue
        },

        // Define the position of each color in the gradient
        Positions = new float[] { 0, 0.3f, 0.7f, 1 }
    };

    // Apply the color blend to the linear gradient brush
    brush.InterpolationColors = colorBlend;

    // Draw a rectangle filled with the gradient
    graphics.DrawRectangle(brush, new RectangleF(0, 0, 200, 100));

    //Save the PDF document
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

    // Create PDF graphics for the page
    PdfGraphics graphics = page.Graphics;

    // Create a new PDF linear gradient brush
    PdfLinearGradientBrush brush = new PdfLinearGradientBrush(
        new RectangleF(new PointF(0, 0), new SizeF(200, 100)),
        Color.Red, Color.Blue,
        PdfLinearGradientMode.Horizontal
    );

    // Create and configure the color blend
    PdfColorBlend colorBlend = new PdfColorBlend(4)
    {
        // Define the colors for the gradient
        Colors = new PdfColor[]
        {
            Color.Red,
            Color.Yellow,
            Color.Green,
            Color.Blue
        },

        // Define the position of each color in the gradient
        Positions = new float[] { 0, 0.3f, 0.7f, 1 }
    };

    // Apply the color blend to the linear gradient brush
    brush.InterpolationColors = colorBlend;

    // Draw a rectangle filled with the gradient
    graphics.DrawRectangle(brush, new RectangleF(0, 0, 200, 100));

    //Save the PDF document
    document.Save("Output.pdf");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Using document As New PdfDocument()
    ' Add a page to the document
    Dim page As PdfPage = document.Pages.Add()

    ' Create PDF graphics for the page
    Dim graphics As PdfGraphics = page.Graphics

    ' Create a new PDF linear gradient brush
    Dim brush As New PdfLinearGradientBrush(
        New RectangleF(New PointF(0, 0), New SizeF(200, 100)),
        Color.Red, Color.Blue,
        PdfLinearGradientMode.Horizontal
    )

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
    document.Save("Output.pdf")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Linear-Gradient-Brush-with-Multiple-Colors/.NET).

## Radial Gradient Brush

The gradient brush is used to fill an object with blend of two or more colors. You can draw any shape on PDF document with radial gradient brush using [PdfRadialGradientBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfRadialGradientBrush.html) class. The following code snippet explains this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Draw-shapes-on-PDF-with-radial-gradient-brush/.NET/Draw-shapes-on-PDF-with-radial-gradient-brush/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Create new PDF radial gradient brush
PdfRadialGradientBrush brush = new PdfRadialGradientBrush(new PointF(50, 50), 0, new PointF(50, 50), 50, Color.Red, Color.Blue);
//Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 100, 100));

//Save the PDF document
doc.Save("Output.pdf");
//Close the Pdf Document
doc.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Create new PDF radial gradient brush
PdfRadialGradientBrush brush = new PdfRadialGradientBrush(new PointF(50, 50), 0, new PointF(50, 50), 50, Color.Red, Color.Blue);      
//Draw ellipse on the page
graphics.DrawEllipse(brush, new RectangleF(0, 0, 100, 100));

//Save the PDF document
doc.Save("RadialGradientBrush.pdf");
//Close the instance of PdfDocument
doc.Close(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim doc As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = doc.Pages.Add

'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
'Create new PDF radial gradient brush
Dim brush As PdfRadialGradientBrush = New PdfRadialGradientBrush(New PointF(50, 50), 0, New PointF(50, 50), 50, Color.Red, Color.Blue)
'Draw ellipse on the page
graphics.DrawEllipse(brush, New RectangleF(0, 0, 100, 100))

'Save the PDF document
doc.Save("RadialGradientBrush.pdf")
'Close the instance of PdfDocument
doc.Close(True)
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Draw-shapes-on-PDF-with-radial-gradient-brush/). 

## Tiling Brush

The tiling brush is used to draw an object repeatedly. You can draw any shape on PDF page with tiling brush using [PdfTilingBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTilingBrush.html) class. The following code snippet explains this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Draw-shape-on-PDF-with-tiling-brush/.NET/Draw-shape-on-PDF-with-tiling-brush/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Create new PDF tiling brush
PdfTilingBrush brush = new PdfTilingBrush(new RectangleF(0, 0, 11, 11));
//Draw ellipse inside the tile
brush.Graphics.DrawEllipse(PdfPens.Red, new RectangleF(0, 0, 10, 10));
//Draw ellipse
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

//Save the PDF document
doc.Save("Output.pdf");
//Close the Pdf Document
doc.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;
//Create new PDF tiling brush
PdfTilingBrush brush = new PdfTilingBrush(new RectangleF(0, 0, 11, 11));
//Draw ellipse inside the tile
brush.Graphics.DrawEllipse(PdfPens.Red, new RectangleF(0, 0, 10, 10));
//Draw ellipse
graphics.DrawEllipse(brush, new RectangleF(0, 0, 200, 100));

//Save the PDF document
doc.Save("TilingBrush.pdf");
//Close the instance of PdfDocument
doc.Close(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim doc As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = doc.Pages.Add

'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics
'Create new PDF tiling brush
Dim brush As PdfTilingBrush = New PdfTilingBrush(New RectangleF(0, 0, 11, 11))
'Draw ellipse inside the tile
brush.Graphics.DrawEllipse(PdfPens.Red, New RectangleF(0, 0, 10, 10))
'Draw ellipse
graphics.DrawEllipse(brush, New RectangleF(0, 0, 200, 100))

'Save the PDF document
doc.Save("TilingBrush.pdf")
'Close the instance of PdfDocument
doc.Close(True)
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Draw-shape-on-PDF-with-tiling-brush/).

## Hatch Brush

The hatch brush is used to fill an object with hatch patterns. Essential<sup>&reg;</sup> PDF supports drawing shapes in a PDF document using a hatch brush with the [PdfHatchBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfHatchBrush.html) class. The following code example illustrates this. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Brushes/Hatch-brush/.NET/Hatch-brush/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument(); 
//Add a page to the document 
PdfPage page = doc.Pages.Add(); 
//Create PDF graphics for the page 
PdfGraphics graphics = page.Graphics; 
//Define colors for the hatch brush 
Color systemForeColor = Color.FromArgb(255, 255, 255, 0); 
Color systemBackColor = Color.FromArgb(255, 78, 167, 46); 

// Create a new PDF hatch brush with a pattern and colors 
PdfHatchBrush pdfHatchBrush = new PdfHatchBrush(PdfHatchStyle.Plaid, new PdfColor(systemForeColor), new PdfColor(systemBackColor)); 

//Draw rectangle on the page 
graphics.DrawRectangle(PdfPens.Black, pdfHatchBrush, new Rectangle(100, 100, 300, 200)); 

//Save the PDF document
doc.Save("Output.pdf");
//Close the Pdf Document 
doc.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument doc = new PdfDocument(); 
//Add a page to the document 
PdfPage page = doc.Pages.Add(); 
//Create PDF graphics for the page 
PdfGraphics graphics = page.Graphics; 
//Define colors for the hatch brush 
Color systemForeColor = Color.FromArgb(255, 255, 255, 0); 
Color systemBackColor = Color.FromArgb(255, 78, 167, 46); 

// Create a new PDF hatch brush with a pattern and colors 
PdfHatchBrush pdfHatchBrush = new PdfHatchBrush(PdfHatchStyle.Plaid, new PdfColor(systemForeColor), new PdfColor(systemBackColor)); 

//Draw rectangle on the page 
graphics.DrawRectangle(PdfPens.Black, pdfHatchBrush, new Rectangle(100, 100, 300, 200)); 

//Save the PDF document
doc.Save("Output.pdf"); 
//Close the Pdf Document 
doc.Close(true); 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim doc As PdfDocument = New PdfDocument 
' Add a page to the document 
Dim page As PdfPage = doc.Pages.Add 
' Create PDF graphics for the page 
Dim graphics As PdfGraphics = page.Graphics 
' Define colors for the hatch brush 
Dim systemForeColor As Color = Color.FromArgb(255, 255, 255, 0) 
Dim systemBackColor As Color = Color.FromArgb(255, 78, 167, 46) 

' Create a new PDF hatch brush with a pattern and colors 
Dim pdfHatchBrush As PdfHatchBrush = New PdfHatchBrush(PdfHatchStyle.Plaid, New PdfColor(systemForeColor), New PdfColor(systemBackColor)) 

' Draw rectangle on the page 
graphics.DrawRectangle(PdfPens.Black, pdfHatchBrush, New Rectangle(100, 100, 300, 200)) 

' Save the PDF document
doc.Save("Output.pdf") 
' Close the PDF document 
doc.Close(True) 

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Brushes/Hatch-brush/.NET).