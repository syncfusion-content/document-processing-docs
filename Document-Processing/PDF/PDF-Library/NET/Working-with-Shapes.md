---
title: PDF Working with Shapes | Syncfusion
description: This section explains how to add shapes such as Line, curve, path, text, rectangle, pie, arc, Bezier, ellipse in the PDF document
platform: document-processing
control: PDF
documentation: UG
---
# Working with Shapes for Document-Processing Platform PDF Control

Essential<sup>&reg;</sup> PDF has support for adding the below shapes.

* Line
* Curve
* Path
* Text 
* Rectangle
* Pie
* Arc
* Bezier
* Ellipse

## Adding Shapes to a PDF document

Essential<sup>&reg;</sup> PDF supports adding shapes with different types of brushes like solid bush, gradient brush, tiling brush, and image brush along with various [color spaces](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-colorspace) and transparency levels.

### Polygon

You can draw a polygon in PDF document by using the [DrawPolygon](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawPolygon_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF___) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The following code snippet explains how to draw a polygon in new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-polygon-in-new-PDF-document/.NET/Draw-polygon-in-new-PDF-document/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize PdfPen to draw the polygon
PdfPen pen = new PdfPen(PdfBrushes.Brown, 10f);
//Initialize PdfLinearGradientBrush for drawing the polygon
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(new PointF(10, 100), new PointF(100, 200), new PdfColor(Color.Red), new PdfColor(Color.Green));
//Create the polygon points
PointF p1 = new PointF(10, 100);
PointF p2 = new PointF(10, 200);
PointF p3 = new PointF(100, 100);
PointF p4 = new PointF(100, 200);
PointF p5 = new PointF(55, 150);
PointF[] points = { p1, p2, p3, p4, p5 };
//Draw the polygon on PDF document
page.Graphics.DrawPolygon(pen, brush, points);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();
//Initialize PdfPen to draw the polygon
PdfPen pen = new PdfPen(PdfBrushes.Brown, 10f);
//Initialize PdfLinearGradientBrush for drawing the polygon
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(new PointF(10, 100), new PointF(100, 200), new PdfColor(Color.Red), new PdfColor(Color.Green));
//Create the polygon points
PointF p1 = new PointF(10, 100);
PointF p2 = new PointF(10, 200);
PointF p3 = new PointF(100, 100);
PointF p4 = new PointF(100, 200);
PointF p5 = new PointF(55, 150);
PointF[] points = { p1, p2, p3, p4, p5 };
//Draw the polygon on PDF document
page.Graphics.DrawPolygon(pen, brush, points);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = document.Pages.Add
'Initialize PdfPen to draw the polygon
Dim pen As PdfPen = New PdfPen(PdfBrushes.Brown, 10.0F)
'Initialize PdfLinearGradientBrush for drawing the polygon
Dim brush As PdfLinearGradientBrush = New PdfLinearGradientBrush(New PointF(10, 100), New PointF(100, 200), New PdfColor(Color.Red), New PdfColor(Color.Green))
'Create the polygon points
Dim p1 As PointF = New PointF(10, 100)
Dim p2 As PointF = New PointF(10, 200)
Dim p3 As PointF = New PointF(100, 100)
Dim p4 As PointF = New PointF(100, 200)
Dim p5 As PointF = New PointF(55, 150)
Dim points As PointF() = {p1, p2, p3, p4, p5}
'Draw the polygon on PDF document
page.Graphics.DrawPolygon(pen, brush, points)

'Save the PDF document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-polygon-in-new-PDF-document/). 

The following code snippet explains how to draw a polygon in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-polygon-in-an-existing-PDF-document/.NET/Draw-a-polygon-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Load the PDF document as stream
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Initialize PdfPen to draw the polygon
PdfPen pen = new PdfPen(PdfBrushes.Brown, 10f);
//Initialize PdfLinearGradientBrush for drawing the polygon
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(new PointF(10, 100), new PointF(100, 200), new PdfColor(Color.Red), new PdfColor(Color.Green));
//Create the polygon points
PointF p1 = new PointF(10, 100);
PointF p2 = new PointF(10, 200);
PointF p3 = new PointF(100, 100);
PointF p4 = new PointF(100, 200);
PointF p5 = new PointF(55, 150);
PointF[] points = { p1, p2, p3, p4, p5 };
//Draw the polygon on PDF document
loadedPage.Graphics.DrawPolygon(pen, brush, points);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Initialize PdfPen to draw the polygon
PdfPen pen = new PdfPen(PdfBrushes.Brown, 10f);
//Initialize PdfLinearGradientBrush for drawing the polygon
PdfLinearGradientBrush brush = new PdfLinearGradientBrush(new PointF(10, 100), new PointF(100, 200), new PdfColor(Color.Red), new PdfColor(Color.Green));
//Create the polygon points
PointF p1 = new PointF(10, 100);
PointF p2 = new PointF(10, 200);
PointF p3 = new PointF(100, 100);
PointF p4 = new PointF(100, 200);
PointF p5 = new PointF(55, 150);
PointF[] points = { p1, p2, p3, p4, p5 };
//Draw the polygon on PDF document
loadedPage.Graphics.DrawPolygon(pen, brush, points);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page into PdfLoadedPage
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)
'Initialize PdfPen to draw the polygon
Dim pen As PdfPen = New PdfPen(PdfBrushes.Brown, 10.0F)
'Initialize PdfLinearGradientBrush for drawing the polygon
Dim brush As PdfLinearGradientBrush = New PdfLinearGradientBrush(New PointF(10, 100), New PointF(100, 200), New PdfColor(Color.Red), New PdfColor(Color.Green))
'Create the polygon points
Dim p1 As PointF = New PointF(10, 100)
Dim p2 As PointF = New PointF(10, 200)
Dim p3 As PointF = New PointF(100, 100)
Dim p4 As PointF = New PointF(100, 200)
Dim p5 As PointF = New PointF(55, 150)
Dim points As PointF() = {p1, p2, p3, p4, p5}
'Draw the polygon on PDF document
loadedPage.Graphics.DrawPolygon(pen, brush, points)

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-polygon-in-an-existing-PDF-document/). 

### Line

You can draw a line in PDF document by using the [DrawLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawLine_Syncfusion_Pdf_Graphics_PdfPen_System_Drawing_PointF_System_Drawing_PointF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The following code snippet explains how to draw a line in new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-line-in-new-PDF-document/.NET/Draw-a-line-in-new-PDF-document/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize pen to draw the line
PdfPen pen = new PdfPen(PdfBrushes.Black, 5f);
//Create the line points
PointF point1 = new PointF(10, 10);
PointF point2 = new PointF(10, 100);
//Draw the line on PDF document
page.Graphics.DrawLine(pen, point1, point2);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();
//Initialize pen to draw the line
PdfPen pen = new PdfPen(PdfBrushes.Black, 5f);
//Create the line points
PointF point1 = new PointF(10, 10);
PointF point2 = new PointF(10, 100);
//Draw the line on PDF document
page.Graphics.DrawLine(pen, point1, point2);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = document.Pages.Add
'Initialize pen to draw the line
Dim pen As PdfPen = New PdfPen(PdfBrushes.Black, 5.0F)
'Create the line points
Dim point1 As PointF = New PointF(10, 10)
Dim point2 As PointF = New PointF(10, 100)
'Draw the line on PDF document
page.Graphics.DrawLine(pen, point1, point2)

'Save the PDF document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-line-in-new-PDF-document/). 

The following code snippet explains how to draw a line in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-line-in-an-existing-PDF-document/.NET/Draw-a-line-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Initialize pen to draw the line
PdfPen pen = new PdfPen(PdfBrushes.Black, 5f);
//Create the line points
PointF point1 = new PointF(10, 10);
PointF point2 = new PointF(10, 100);
//Draw the line on PDF document
loadedPage.Graphics.DrawLine(pen, point1, point2);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Initialize pen to draw the line
PdfPen pen = new PdfPen(PdfBrushes.Black, 5f);
//Create the line points
PointF point1 = new PointF(10, 10);
PointF point2 = new PointF(10, 100);
//Draw the line on PDF document
loadedPage.Graphics.DrawLine(pen, point1, point2);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page into PdfLoadedPage
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Initialize pen to draw the line
Dim pen As PdfPen = New PdfPen(PdfBrushes.Black, 5.0F)
'Create the line points
Dim point1 As PointF = New PointF(10, 10)
Dim point2 As PointF = New PointF(10, 100)
'Draw the line on PDF document
loadedPage.Graphics.DrawLine(pen, point1, point2)

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-line-in-an-existing-PDF-document/). 

### Curve

You can draw a curve in PDF document by using the [Draw](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutElement.html#Syncfusion_Pdf_Graphics_PdfLayoutElement_Draw_Syncfusion_Pdf_PdfPage_System_Drawing_PointF_) method of [PdfBezierCurve](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBezierCurve.html). The following code snippet explains how to draw a curve in new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-curve-in-new-PDF-document/.NET/Draw-a-curve-in-new-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize PdfGraphics for PdfPage
PdfGraphics graphics = page.Graphics;
//Create new instance of PdfBezierCurve
PdfBezierCurve bezier = new PdfBezierCurve(new PointF(0, 0), new PointF(100, 50), new PointF(50, 50), new PointF(100, 100));
//Draw the bezier curve on PDF document
bezier.Draw(graphics, new PointF(10, 10));

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize PdfGraphics for PdfPage
PdfGraphics graphics = page.Graphics;
//Create new instance of PdfBezierCurve
PdfBezierCurve bezier = new PdfBezierCurve(new PointF(0, 0), new PointF(100, 50), new PointF(50, 50), new PointF(100, 100));
//Draw the bezier curve on PDF document
bezier.Draw(graphics, new PointF(10, 10));

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = document.Pages.Add

'Initialize PdfGraphics for PdfPage
Dim graphics As PdfGraphics = page.Graphics
'Create new instance of PdfBezierCurve
Dim bezier As PdfBezierCurve = New PdfBezierCurve(New PointF(0, 0), New PointF(100, 50), New PointF(50, 50), New PointF(100, 100))
'Draw the bezier curve on PDF document
bezier.Draw(graphics, New PointF(10, 10))

'Save the PDF document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-curve-in-new-PDF-document/). 

The following code snippet explains how to draw a curve in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-curve-in-an-existing-PDF-document/.NET/Draw-a-curve-in-an-existing-PDF-document/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Get the graphics of PdfLoadedPage
PdfGraphics graphics = loadedPage.Graphics;
//Create new instance of PdfBezierCurve
PdfBezierCurve bezier = new PdfBezierCurve(new PointF(0, 0), new PointF(100, 50), new PointF(50, 50), new PointF(100, 100));          
//Draw the bezier curve on PDF document
bezier.Draw(graphics, new PointF(10, 10));

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Get the graphics of PdfLoadedPage
PdfGraphics graphics = loadedPage.Graphics;
//Create new instance of PdfBezierCurve
PdfBezierCurve bezier = new PdfBezierCurve(new PointF(0, 0), new PointF(100, 50), new PointF(50, 50), new PointF(100, 100));          
//Draw the bezier curve on PDF document
bezier.Draw(graphics, new PointF(10, 10));

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page into PdfLoadedPage
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Get the graphics of PdfLoadedPage
Dim graphics As PdfGraphics = loadedPage.Graphics
'Create new instance of PdfBezierCurve
Dim bezier As PdfBezierCurve = New PdfBezierCurve(New PointF(0, 0), New PointF(100, 50), New PointF(50, 50), New PointF(100, 100))
'Draw the bezier curve on PDF document
bezier.Draw(graphics, New PointF(10, 10))

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-curve-in-an-existing-PDF-document/). 

### Path

You can draw a path in PDF document by using the [DrawPath](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawPath_Syncfusion_Pdf_Graphics_PdfBrush_Syncfusion_Pdf_Graphics_PdfPath_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The following code snippet explains how to draw path in a new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-path-in-a-new-PDF-document/.NET/Draw-path-in-a-new-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize a new PDF path
PdfPath path = new PdfPath();
//Add line path points
path.AddLine(new PointF(10, 100), new PointF(10, 200));
path.AddLine(new PointF(10, 200), new PointF(100, 100));
path.AddLine(new PointF(100, 100), new PointF(100, 200));
path.AddLine(new PointF(100, 200), new PointF(10, 100));
//Draw the PDF path on page
page.Graphics.DrawPath(PdfPens.Black, path);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize a new PDF path
PdfPath path = new PdfPath();
//Add line path points
path.AddLine(new PointF(10, 100), new PointF(10, 200));
path.AddLine(new PointF(10, 200), new PointF(100, 100));
path.AddLine(new PointF(100, 100), new PointF(100, 200));
path.AddLine(new PointF(100, 200), new PointF(10, 100));
//Draw the PDF path on page
page.Graphics.DrawPath(PdfPens.Black, path);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = document.Pages.Add

'Initialize a new PDF path
Dim path As New PdfPath()
'Add line path points
path.AddLine(New PointF(10, 100), New PointF(10, 200))
path.AddLine(New PointF(10, 200), New PointF(100, 100))
path.AddLine(New PointF(100, 100), New PointF(100, 200))
path.AddLine(New PointF(100, 200), New PointF(10, 100))
'Draw the PDF path on page
page.Graphics.DrawPath(PdfPens.Black, path)

'Save the PDF document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-path-in-a-new-PDF-document/). 

The following code snippet explains how to draw path in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-path-in-an-existing-PDF-document/.NET/Draw-path-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize a new PDF path
PdfPath path = new PdfPath();
//Add line path points
path.AddLine(new PointF(10, 100), new PointF(10, 200));
path.AddLine(new PointF(10, 200), new PointF(100, 100));
path.AddLine(new PointF(100, 100), new PointF(100, 200));
path.AddLine(new PointF(100, 200), new PointF(10, 100));
//Draw the PDF path on page
loadedPage.Graphics.DrawPath(PdfPens.Black, path);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize a new PDF path
PdfPath path = new PdfPath();
//Add line path points
path.AddLine(new PointF(10, 100), new PointF(10, 200));
path.AddLine(new PointF(10, 200), new PointF(100, 100));
path.AddLine(new PointF(100, 100), new PointF(100, 200));
path.AddLine(new PointF(100, 200), new PointF(10, 100));
//Draw the PDF path on page
loadedPage.Graphics.DrawPath(PdfPens.Black, path);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page into PdfLoadedPage
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Initialize a new PDF path
Dim path As New PdfPath()
'Add line path points
path.AddLine(New PointF(10, 100), New PointF(10, 200))
path.AddLine(New PointF(10, 200), New PointF(100, 100))
path.AddLine(New PointF(100, 100), New PointF(100, 200))
path.AddLine(New PointF(100, 200), New PointF(10, 100))
'Draw the PDF path on page
loadedPage.Graphics.DrawPath(PdfPens.Black, path)

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-path-in-an-existing-PDF-document/). 

### Text

You can draw text in a PDF document by using the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). To draw different PDF elements based on the position of previously drawn element, draw the text by using [Draw](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html#Syncfusion_Pdf_Graphics_PdfTextElement_Draw_Syncfusion_Pdf_PdfPage_System_Drawing_PointF_Syncfusion_Pdf_Graphics_PdfLayoutFormat_) method of [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) and store its bounds in [PdfLayoutResult](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutResult.html). Refer to the [Working with Text](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-text) section for more information.

### Rectangle

You can draw a rectangle in PDF document by using the [DrawRectangle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawRectangle_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_RectangleF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The following code snippet explains how to draw a rectangle in new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-rectangle-in-a-new-PDF-document/.NET/Draw-a-rectangle-in-a-new-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize PdfSolidBrush for drawing the rectangle
PdfSolidBrush brush = new PdfSolidBrush(Color.Green);
//Set the bounds for rectangle
RectangleF bounds = new RectangleF(10, 10, 100, 50);
//Draw the rectangle on PDF document
page.Graphics.DrawRectangle(brush, bounds);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize PdfSolidBrush for drawing the rectangle
PdfSolidBrush brush = new PdfSolidBrush(Color.Green);
//Set the bounds for rectangle
RectangleF bounds = new RectangleF(10, 10, 100, 50);
//Draw the rectangle on PDF document
page.Graphics.DrawRectangle(brush, bounds);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = document.Pages.Add

'Initialize PdfSolidBrush for drawing the rectangle
Dim brush As PdfSolidBrush = New PdfSolidBrush(Color.Green)
'Set the bounds for rectangle
Dim bounds As RectangleF = New RectangleF(10, 10, 100, 50)
'Draw the rectangle on PDF document
page.Graphics.DrawRectangle(brush, bounds)

'Save the PDF document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-rectangle-in-a-new-PDF-document/). 

The following code snippet explains how to draw a rectangle in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-rectangle-in-an-existing-PDF-document/.NET/Draw-a-rectangle-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize PdfSolidBrush for drawing the rectangle
PdfSolidBrush brush = new PdfSolidBrush(Color.Green);
//Set the bounds for rectangle
RectangleF bounds = new RectangleF(10, 10, 100, 50);
//Draw the rectangle on PDF document
loadedPage.Graphics.DrawRectangle(brush, bounds);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize PdfSolidBrush for drawing the rectangle
PdfSolidBrush brush = new PdfSolidBrush(Color.Green);
//Set the bounds for rectangle
RectangleF bounds = new RectangleF(10, 10, 100, 50);
//Draw the rectangle on PDF document
loadedPage.Graphics.DrawRectangle(brush, bounds);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page into PdfLoadedPage
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Initialize PdfSolidBrush for drawing the rectangle
Dim brush As PdfSolidBrush = New PdfSolidBrush(Color.Green)
'Set the bounds for rectangle
Dim bounds As RectangleF = New RectangleF(10, 10, 100, 50)
'Draw the rectangle on PDF document
loadedPage.Graphics.DrawRectangle(brush, bounds)

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-rectangle-in-an-existing-PDF-document/). 

### Pie

You can draw a pie in PDF document by using the [DrawPie](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawPie_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_RectangleF_System_Single_System_Single_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The following code snippet explains how to draw a pie in new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-pie-in-new-PDF-document/.NET/Draw-a-pie-in-new-PDF-document/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize the pen for drawing pie
PdfPen pen = new PdfPen(PdfBrushes.Brown, 5f);
//Set the line join style of the pen
pen.LineJoin = PdfLineJoin.Round;
//Set the bounds for pie
RectangleF rectangle = new RectangleF(10, 50, 200, 200);
//Draw the pie on PDF document
page.Graphics.DrawPie(pen, PdfBrushes.Green, rectangle, 180, 60);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C#" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize the pen for drawing pie
PdfPen pen = new PdfPen(PdfBrushes.Brown, 5f);
//Set the line join style of the pen
pen.LineJoin = PdfLineJoin.Round;
//Set the bounds for pie
RectangleF rectangle = new RectangleF(10, 50, 200, 200);
//Draw the pie on PDF document
page.Graphics.DrawPie(pen, PdfBrushes.Green, rectangle, 180, 60);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = document.Pages.Add

'Initialize the pen for drawing pie
Dim pen As PdfPen = New PdfPen(PdfBrushes.Brown, 5.0F)
'Set the line join style of the pen
pen.LineJoin = PdfLineJoin.Round
'Set the bounds for pie
Dim rectangle As RectangleF = New RectangleF(10, 50, 200, 200)
'Draw the pie on PDF document
page.Graphics.DrawPie(pen, PdfBrushes.Green, rectangle, 180, 60)

'Save the PDF document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-pie-in-new-PDF-document/). 

The following code snippet explains how to draw a pie in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-pie-in-an-existing-PDF-document/.NET/Draw-a-pie-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the PDF document as stream
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize the pen for drawing pie
PdfPen pen = new PdfPen(PdfBrushes.Brown, 5f);
//Set the line join style of the pen
pen.LineJoin = PdfLineJoin.Round;                   
//Set the bounds for pie
RectangleF rectangle = new RectangleF(10, 50, 200, 200);
//Draw the pie on PDF document
loadedPage.Graphics.DrawPie(pen, PdfBrushes.Green, rectangle, 180, 60);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize the pen for drawing pie
PdfPen pen = new PdfPen(PdfBrushes.Brown, 5f);
//Set the line join style of the pen
pen.LineJoin = PdfLineJoin.Round;
//Set the bounds for pie
RectangleF rectangle = new RectangleF(10, 50, 200, 200);
//Draw the pie on PDF document
loadedPage.Graphics.DrawPie(pen, PdfBrushes.Green, rectangle, 180, 60);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page into PdfLoadedPage
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Initialize the pen for drawing pie
Dim pen As PdfPen = New PdfPen(PdfBrushes.Brown, 5.0F)
'Set the line join style of the pen
pen.LineJoin = PdfLineJoin.Round
'Set the bounds for pie
Dim rectangle As RectangleF = New RectangleF(10, 50, 200, 200)
'Draw the pie on PDF document
loadedPage.Graphics.DrawPie(pen, PdfBrushes.Green, rectangle, 180, 60)

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-pie-in-an-existing-PDF-document/). 

### Arc

You can draw an arc in PDF document by using the [DrawArc](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawArc_Syncfusion_Pdf_Graphics_PdfPen_System_Drawing_RectangleF_System_Single_System_Single_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The following code snippet explains how to draw an arc in new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-an-arc-in-new-PDF-document/.NET/Draw-an-arc-in-new-PDF-document/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();
//Initialize the pen for drawing an arc
PdfPen pen = new PdfPen(Color.Brown, 10f);
//Set the line join style of the pen
pen.LineCap = PdfLineCap.Square;
//Set the bounds for arc
RectangleF bounds = new RectangleF(20, 40, 200, 200);
//Draw the arc on PDF document
page.Graphics.DrawArc(pen, bounds, 270, 90);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize the pen for drawing an arc
PdfPen pen = new PdfPen(Color.Brown, 10f);
//Set the line join style of the pen
pen.LineCap = PdfLineCap.Square;
//Set the bounds for arc
RectangleF bounds = new RectangleF(20, 40, 200, 200);
//Draw the arc on PDF document
page.Graphics.DrawArc(pen, bounds, 270, 90);

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = document.Pages.Add

'Initialize the pen for drawing an arc
Dim pen As PdfPen = New PdfPen(Color.Brown, 10.0F)
'Set the line join style of the pen
pen.LineCap = PdfLineCap.Square
'Set the bounds for arc
Dim bounds As RectangleF = New RectangleF(20, 40, 200, 200)
'Draw the arc on PDF document
page.Graphics.DrawArc(pen, bounds, 270, 90)

'Save the PDF document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-an-arc-in-new-PDF-document/). 

The following code snippet explains how to draw an arc in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-an-arc-in-an-existing-PDF-document/.NET/Draw-an-arc-in-an-existing-PDF-document/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize the pen for drawing an arc
PdfPen pen = new PdfPen(Color.Brown, 10f);
//Set the line join style of the pen
pen.LineCap = PdfLineCap.Square;
//Set the bounds for arc
RectangleF bounds = new RectangleF(20, 40, 200, 200);
//Draw the arc on PDF document
loadedPage.Graphics.DrawArc(pen, bounds, 270, 90);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize the pen for drawing an arc
PdfPen pen = new PdfPen(Color.Brown, 10f);
//Set the line join style of the pen
pen.LineCap = PdfLineCap.Square;
//Set the bounds for arc
RectangleF bounds = new RectangleF(20, 40, 200, 200);
//Draw the arc on PDF document
loadedPage.Graphics.DrawArc(pen, bounds, 270, 90);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page into PdfLoadedPage
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Initialize the pen for drawing an arc
Dim pen As PdfPen = New PdfPen(Color.Brown, 10.0F)
'Set the line join style of the pen
pen.LineCap = PdfLineCap.Square
'Set the bounds for arc
Dim bounds As RectangleF = New RectangleF(20, 40, 200, 200)
'Draw the arc on PDF document
loadedPage.Graphics.DrawArc(pen, bounds, 270, 90)

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-an-arc-in-an-existing-PDF-document). 

### Bezier

You can draw a bezier in PDF document by using the [DrawBezier](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawBezier_Syncfusion_Pdf_Graphics_PdfPen_System_Drawing_PointF_System_Drawing_PointF_System_Drawing_PointF_System_Drawing_PointF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The following code snippet explains how to draw a bezier in new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-bazier-in-new-PDF-document/.NET/Draw-a-bazier-in-new-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize pen to draw the bezier
PdfPen pen = new PdfPen(PdfBrushes.Brown, 1f);
//Draw the bezier on PDF document
page.Graphics.DrawBezier(pen, new PointF(10, 10), new PointF(10, 50), new PointF(50, 80), new PointF(80, 10));

//Save the PDF document
document.Save("Output.pdf");   
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize pen to draw the bezier
PdfPen pen = new PdfPen(PdfBrushes.Brown, 1f);    
//Draw the bezier on PDF document
page.Graphics.DrawBezier(pen, new PointF(10, 10), new PointF(10, 50), new PointF(50, 80), new PointF(80, 10));

//Save the PDF document
document.Save("Output.pdf");   
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = document.Pages.Add

'Initialize pen to draw the bezier
Dim pen As PdfPen = New PdfPen(PdfBrushes.Brown, 1.0F)
'Draw the bezier on PDF document
page.Graphics.DrawBezier(pen, New PointF(10, 10), New PointF(10, 50), New PointF(50, 80), New PointF(80, 10))

'Save the PDF document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-bazier-in-new-PDF-document/). 

The following code snippet explains how to draw a bezier in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-a-bazier-in-an-existing-PDF-document/.NET/Draw-a-bazier-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize pen to draw the bezier
PdfPen pen = new PdfPen(PdfBrushes.Brown, 1f);
//Draw the bezier on PDF document
loadedPage.Graphics.DrawBezier(pen, new PointF(10, 10), new PointF(10, 50), new PointF(50, 80), new PointF(80, 10));

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize pen to draw the bezier
PdfPen pen = new PdfPen(PdfBrushes.Brown, 1f);
//Draw the bezier on PDF document
loadedPage.Graphics.DrawBezier(pen, new PointF(10, 10), new PointF(10, 50), new PointF(50, 80), new PointF(80, 10));

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page into PdfLoadedPage
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Initialize pen to draw the bezier
Dim pen As PdfPen = New PdfPen(PdfBrushes.Brown, 1.0F)
'Draw the bezier on PDF document
loadedPage.Graphics.DrawBezier(pen, New PointF(10, 10), New PointF(10, 50), New PointF(50, 80), New PointF(80, 10))

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-a-bazier-in-an-existing-PDF-document/). 

### Ellipse

You can draw an ellipse in PDF document by using the [DrawEllipse](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawEllipse_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_RectangleF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The following code snippet explains how to draw an ellipse in new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-an-ellipse-in-new-PDF-document/.NET/Draw-an-ellipse-in-new-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize PdfSolidBrush for drawing the ellipse
PdfSolidBrush brush = new PdfSolidBrush(Color.Red);
//Draw ellipse on the page
page.Graphics.DrawEllipse(brush, new RectangleF(10, 10, 200, 100));

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a page to the document
PdfPage page = document.Pages.Add();

//Initialize PdfSolidBrush for drawing the ellipse
PdfSolidBrush brush = new PdfSolidBrush(Color.Red);
//Draw ellipse on the page
page.Graphics.DrawEllipse(brush, new RectangleF(10, 10, 200, 100));

//Save the PDF document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Add a page to the document
Dim page As PdfPage = document.Pages.Add

'Initialize PdfSolidBrush for drawing the ellipse
Dim brush As PdfSolidBrush = New PdfSolidBrush(Color.Red)
'Draw ellipse on the page
page.Graphics.DrawEllipse(brush, New RectangleF(10, 10, 200, 100))

'Save the PDF document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-an-ellipse-in-new-PDF-document/). 

The following code snippet explains how to draw an ellipse in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-an-ellipse-in-an-existing-PDF-document/.NET/Draw-an-ellipse-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize PdfSolidBrush for drawing the ellipse
PdfSolidBrush brush = new PdfSolidBrush(Color.Red);
//Draw ellipse on the page
loadedPage.Graphics.DrawEllipse(brush, new RectangleF(10, 10, 200, 100));

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page into PdfLoadedPage
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Initialize PdfSolidBrush for drawing the ellipse
PdfSolidBrush brush = new PdfSolidBrush(Color.Red);
//Draw ellipse on the page
loadedPage.Graphics.DrawEllipse(brush, new RectangleF(10, 10, 200, 100));

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page into PdfLoadedPage
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Initialize PdfSolidBrush for drawing the ellipse
Dim brush As PdfSolidBrush = New PdfSolidBrush(Color.Red)
'Draw ellipse on the page
loadedPage.Graphics.DrawEllipse(brush, New RectangleF(10, 10, 200, 100))

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-an-ellipse-in-an-existing-PDF-document/). 

## Working with shape pagination

You can also allow large shapes to paginate across pages by assigning ```Paginate``` of [PdfLayoutType](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutType.html) Enum to [Layout](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutFormat.html#Syncfusion_Pdf_Graphics_PdfLayoutFormat_Layout) property of [PdfLayoutFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutFormat.html) class. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Draw-large-shapes-across-multiple-pages/.NET/Draw-large-shapes-across-multiple-pages/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create Document
PdfDocument doc = new PdfDocument();
//Add new page
PdfPage page = doc.Pages.Add();

//Set bounds for ellipse
RectangleF rect = new RectangleF(0, 0, 100, 1000);
//Create ellipse
PdfEllipse ellipse = new PdfEllipse(rect);
//Set layout property to make the ellipse break across the pages.
PdfLayoutFormat format = new PdfLayoutFormat();
format.Break = PdfLayoutBreakType.FitPage;
format.Layout = PdfLayoutType.Paginate;
ellipse.Brush = PdfBrushes.Brown;
//Draw ellipse.
ellipse.Draw(page, 20, 20, format);

//Save and close the PDF document
doc.Save("Shapes.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create Document
PdfDocument doc = new PdfDocument();
//Add new page
PdfPage page = doc.Pages.Add();

//Set bounds for ellipse
RectangleF rect = new RectangleF(0, 0, 100, 1000);
//Create ellipse
PdfEllipse ellipse = new PdfEllipse(rect);
//Set layout property to make the ellipse break across the pages.
PdfLayoutFormat format = new PdfLayoutFormat();
format.Break = PdfLayoutBreakType.FitPage;
format.Layout = PdfLayoutType.Paginate;
ellipse.Brush = PdfBrushes.Brown;
//Draw ellipse.
ellipse.Draw(page, 20, 20, format);

//Save and close the PDF document
doc.Save("Shapes.pdf");
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create Document
Dim doc As New PdfDocument()
'Add new page
Dim page As PdfPage = doc.Pages.Add()

'Set bounds for ellipse
Dim rect As New RectangleF(0, 0, 100, 1000)
'Create ellipse
Dim ellipse As New PdfEllipse(rect)
'Set layout property to make the ellipse break across the pages.
Dim format As New PdfLayoutFormat()
format.Break = PdfLayoutBreakType.FitPage
format.Layout = PdfLayoutType.Paginate
ellipse.Brush = PdfBrushes.Brown
'Draw ellipse.
ellipse.Draw(page, 20, 20, format)

'Save and close the PDF document
doc.Save("Shapes.pdf")
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Draw-large-shapes-across-multiple-pages/).

## Dash pattern

The [DashPattern](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfPen.html#Syncfusion_Pdf_Graphics_PdfPen_DashPattern) property allows you to create custom dashed or dotted lines when drawing paths, rectangles, or borders using the [PdfPen](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfPen.html) class.

The following code example demonstrates applying a dash pattern to a line shape.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Shapes/Dash-pattern-in-shapes/.NET/Dash-pattern-in-shapes/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a page to the document
PdfPage page = document.Pages.Add();
// Create a PdfGraphics object to draw on the page
PdfGraphics graphics = page.Graphics;

// Create a custom dashed line pattern (5-point dash, 2-point gap)
float[] dashPattern = { 5, 2 }; // Dash length, gap length

// Create a PdfPen with the dash pattern and color
PdfPen dashPen = new PdfPen(PdfBrushes.Black, 2);  // 2 is the line width

// Set the DashStyle to Custom before applying DashPattern
dashPen.DashStyle = PdfDashStyle.Custom;  // Use Custom style to enable DashPattern
dashPen.DashPattern = dashPattern;

// Draw a line with the custom dash pattern
graphics.DrawLine(dashPen, new Syncfusion.Drawing.PointF(10, 10), new PointF(300, 10));

//Save the PDF document to file stream.
document.Save("Output.pdf");
//Close the document.
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
// Create a PdfGraphics object to draw on the page
PdfGraphics graphics = page.Graphics;

// Create a custom dashed line pattern (5-point dash, 2-point gap)
float[] dashPattern = { 5, 2 }; // Dash length, gap length

// Create a PdfPen with the dash pattern and color
PdfPen dashPen = new PdfPen(PdfBrushes.Black, 2);  // 2 is the line width

// Set the DashStyle to Custom before applying DashPattern
dashPen.DashStyle = PdfDashStyle.Custom;  // Use Custom style to enable DashPattern
dashPen.DashPattern = dashPattern;

// Draw a line with the custom dash pattern
graphics.DrawLine(dashPen, new Syncfusion.Drawing.PointF(10, 10), new PointF(300, 10));

//Save the PDF document to file stream.
document.Save("Output.pdf");
//Close the document.
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
' Create a PdfGraphics object to draw on the page
Dim graphics As PdfGraphics = page.Graphics

' Create a custom dashed line pattern (5-point dash, 2-point gap)
Dim dashPattern As Single() = {5, 2} ' Dash length, gap length

' Create a PdfPen with the dash pattern and color
Dim dashPen As New PdfPen(PdfBrushes.Black, 2) ' 2 is the line width

' Set the DashStyle to Custom before applying DashPattern
dashPen.DashStyle = PdfDashStyle.Custom ' Use Custom style to enable DashPattern
dashPen.DashPattern = dashPattern

' Draw a line with the custom dash pattern
graphics.DrawLine(dashPen, New Syncfusion.Drawing.PointF(10, 10), New Syncfusion.Drawing.PointF(300, 10))
' Save the document to the specified file path
document.Save(outputFilePath)
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Shapes/Dash-pattern-in-shapes/.NET).