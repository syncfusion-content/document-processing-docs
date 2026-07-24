---
title: Working with Layers | Syncfusion
description: Manage PDF layers (Optional Content Groups) with Syncfusion .NET PDF to add, edit, remove, and control layer visibility dynamically
platform: document-processing
control: PDF
documentation: UG
---

# Working with PDF Layers

Layers, also known as **Optional Content Groups** (OCG), are sections of content in a PDF document that can be selectively viewed or hidden by document authors or consumers. This capability is useful in items such as CAD drawings, layered artwork, maps, and multi-language documents.

Syncfusion<sup>&reg;</sup> PDF provides support to create, add, and remove layers in PDF documents.

Check the following video to learn how to work with PDF layers using the .NET PDF library.
{% youtube "https://youtu.be/xvQ7yM0Pddk?si=T8guG9seZNX09pFb" %}

## Adding Layers in a PDF document

Essential<sup>&reg;</sup> PDF allows the users to create a layer in a PDF page using [PdfPageLayer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLayer.html) class. The below code example illustrates how to add the multiple layers in a new PDF document.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Adding-layers-in-a-PDF-document/.NET/Adding-layers-in-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create PDF document.
PdfDocument document = new PdfDocument();
//Add the page. 
PdfPage page = document.Pages.Add();

//Add the first layer.
PdfPageLayer layer = page.Layers.Add("Layer1");
PdfGraphics graphics = layer.Graphics;
graphics.TranslateTransform(100, 60);
//Draw arc. 
PdfPen pen = new PdfPen(Syncfusion.Drawing.Color.Red, 50);
RectangleF bounds = new RectangleF(0, 0, 50, 50);
graphics.DrawArc(pen, bounds, 360, 360);

//Add another layer on the page.
PdfPageLayer layer2 = page.Layers.Add("Layer2");
graphics = layer2.Graphics;
graphics.TranslateTransform(100, 180);
//Draw ellipse. 
graphics.DrawEllipse(pen, bounds);

//Save the document.
document.Save("Sample.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create PDF document.
PdfDocument document = new PdfDocument();
//Add the page. 
PdfPage page = document.Pages.Add();

//Add the first layer.
PdfPageLayer layer = page.Layers.Add("Layer1");
PdfGraphics graphics = layer.Graphics;
graphics.TranslateTransform(100, 60);
//Draw arc.
PdfPen pen = new PdfPen(System.Drawing.Color.Red, 50);
RectangleF bounds = new RectangleF(0, 0, 50, 50);
graphics.DrawArc(pen, bounds, 360, 360);

//Add another layer on the page.
PdfPageLayer layer2 = page.Layers.Add("Layer2");
graphics = layer2.Graphics;
graphics.TranslateTransform(100, 180);
//Draw ellipse. 
graphics.DrawEllipse(pen, bounds);

//Save the document.
document.Save("Sample.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Create PDF document.
Dim document As New PdfDocument()
'Add the page. 
Dim page As PdfPage = document.Pages.Add()

'Add the first layer.
Dim layer As PdfPageLayer = page.Layers.Add("Layer1")
Dim graphics As PdfGraphics = layer.Graphics
graphics.TranslateTransform(100, 60)
'Draw arc. 
Dim pen As New PdfPen(System.Drawing.Color.Red, 50)
Dim bounds As New RectangleF(0, 0, 50, 50)
graphics.DrawArc(pen, bounds, 360, 360)

'Add another layer on the page.
Dim layer2 As PdfPageLayer = page.Layers.Add("Layer2")
graphics = layer2.Graphics
graphics.TranslateTransform(100, 180)
'Draw ellipse. 
graphics.DrawEllipse(pen, bounds)

'Save the document.
document.Save("Sample.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Adding-layers-in-a-PDF-document).

The following code example illustrates how to add multiple layers to an existing PDF document using the [PdfPageLayer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLayer.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Add-the-multiple-layers-in-an-existing-PDF-document/.NET/Add-the-multiple-layers-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Add the first layer.
PdfPageLayer layer = loadedPage.Layers.Add("Layer1");
PdfGraphics graphics = layer.Graphics;
graphics.TranslateTransform(100, 60);
//Draw an arc.
PdfPen pen = new PdfPen(Syncfusion.Drawing.Color.Gray, 50);
RectangleF bounds = new RectangleF(0, 0, 50, 50);
graphics.DrawArc(pen, bounds, 360, 360);

//Add another layer on the page.
PdfPageLayer layer2 = loadedPage.Layers.Add("Layer2");
graphics = layer2.Graphics;
graphics.TranslateTransform(100, 180);
//Draw an ellipse.
graphics.DrawEllipse(pen, bounds);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Add the first layer.
PdfPageLayer layer = loadedPage.Layers.Add("Layer1");
PdfGraphics graphics = layer.Graphics;
graphics.TranslateTransform(100, 60);
//Draw an arc.
PdfPen pen = new PdfPen(System.Drawing.Color.Gray, 50);
RectangleF bounds = new RectangleF(0, 0, 50, 50);
graphics.DrawArc(pen, bounds, 360, 360);

//Add another layer on the page.
PdfPageLayer layer2 = loadedPage.Layers.Add("Layer2");
graphics = layer2.Graphics;
graphics.TranslateTransform(100, 180);
//Draw an ellipse.
graphics.DrawEllipse(pen, bounds);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing
Imports System.Drawing

'Load the existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Get the first page from the document.
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

'Add the first layer.
Dim layer As PdfPageLayer = loadedPage.Layers.Add("Layer1")
Dim graphics As PdfGraphics = layer.Graphics
graphics.TranslateTransform(100, 60)
'Draw an arc.
Dim pen As New PdfPen(System.Drawing.Color.Gray, 50)
Dim bounds As New RectangleF(0, 0, 50, 50)
graphics.DrawArc(pen, bounds, 360, 360)

'Add another layer on the page.
Dim layer2 As PdfPageLayer = loadedPage.Layers.Add("Layer2")
graphics = layer2.Graphics
graphics.TranslateTransform(100, 180)
'Draw an ellipse.
graphics.DrawEllipse(pen, bounds)

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Add-the-multiple-layers-in-an-existing-PDF-document).

## Adding annotations to a layer

Syncfusion<sup>&reg;</sup> PDF allows the users to add different types of [annotations](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-annotations) to layers in the PDF document using the [Layer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotation.html#Syncfusion_Pdf_Interactive_PdfAnnotation_Layer) property of the [PdfAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotation.html) class. The [Layers](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_Layers) property of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class returns a [PdfDocumentLayerCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentLayerCollection.html) used to create document-level layers.

The following code example illustrates how to add an annotation to a layer.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Adding-annotation-to-layer-in-the-PDF-document/.NET/Adding-annotation-to-layer-in-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();

//Add the layer.
PdfLayer layer = document.Layers.Add("Layer");
//Create graphics for the layer.
PdfGraphics graphics = layer.CreateGraphics(page);
//Draw an ellipse.
graphics.DrawEllipse(PdfPens.Red, new RectangleF(50, 50, 40, 40));

//Create a square annotation.
PdfSquareAnnotation annotation = new PdfSquareAnnotation(new RectangleF(200, 260, 50, 50), "Square annotation");
annotation.Color = new PdfColor(Syncfusion.Drawing.Color.Red);
//Set the layer for the annotation.
annotation.Layer = layer;
//Add the annotation to the page.
page.Annotations.Add(annotation);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();

//Add the layer.
PdfLayer layer = document.Layers.Add("Layer");
//Create graphics for the layer.
PdfGraphics graphics = layer.CreateGraphics(page);
//Draw an ellipse.
graphics.DrawEllipse(PdfPens.Red, new RectangleF(50, 50, 40, 40));

//Create a square annotation.
PdfSquareAnnotation annotation = new PdfSquareAnnotation(new RectangleF(200, 260, 50, 50), "Square annotation");
annotation.Color = new PdfColor(Color.Red);
//Set the layer for the annotation.
annotation.Layer = layer;
//Add the annotation to the page.
page.Annotations.Add(annotation);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive
Imports System.Drawing

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Add the layer.
Dim layer As PdfLayer = document.Layers.Add("Layer")
'Create graphics for the layer.
Dim graphics As PdfGraphics = layer.CreateGraphics(page)
'Draw an ellipse.
graphics.DrawEllipse(PdfPens.Red, New RectangleF(50, 50, 40, 40))

'Create a square annotation.
Dim annotation As New PdfSquareAnnotation(New RectangleF(200, 260, 50, 50), "Square annotation")
annotation.Color = New PdfColor(Color.Red)
'Set the layer for the annotation.
annotation.Layer = layer
'Add the annotation to the page.
page.Annotations.Add(annotation)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Adding-annotation-to-layer-in-the-PDF-document).

The following code example illustrates how to add an annotation to a layer in an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Add-annotation-to-the-layer-in-an-existing-PDF-document/.NET/Add-annotation-to-the-layer-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Add the layer.
PdfLayer layer = loadedDocument.Layers.Add("Layer");
//Create graphics for the layer.
PdfGraphics graphics = layer.CreateGraphics(loadedPage);
//Draw an ellipse.
graphics.DrawEllipse(PdfPens.Red, new RectangleF(50, 50, 40, 40));

//Create a square annotation.
PdfSquareAnnotation annotation = new PdfSquareAnnotation(new RectangleF(200, 260, 50, 50), "Square annotation");
annotation.Color = new PdfColor(Syncfusion.Drawing.Color.Red);
//Set the layer for the annotation.
annotation.Layer = layer;
//Add the annotation to the page.
loadedPage.Annotations.Add(annotation);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);
inputStream.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Add the layer.
PdfLayer layer = loadedDocument.Layers.Add("Layer");
//Create graphics for the layer.
PdfGraphics graphics = layer.CreateGraphics(loadedPage);
//Draw an ellipse.
graphics.DrawEllipse(PdfPens.Red, new RectangleF(50, 50, 40, 40));

//Create a square annotation.
PdfSquareAnnotation annotation = new PdfSquareAnnotation(new RectangleF(200, 260, 50, 50), "Square annotation");
annotation.Color = new PdfColor(Color.Red);
//Set the layer for the annotation.
annotation.Layer = layer;
//Add the annotation to the page.
loadedPage.Annotations.Add(annotation);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Interactive
Imports System.Drawing

'Load the existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Get the first page from the document.
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

'Add the layer.
Dim layer As PdfLayer = loadedDocument.Layers.Add("Layer")
'Create graphics for the layer.
Dim graphics As PdfGraphics = layer.CreateGraphics(loadedPage)
'Draw an ellipse.
graphics.DrawEllipse(PdfPens.Red, New RectangleF(50, 50, 40, 40))

'Create a square annotation.
Dim annotation As New PdfSquareAnnotation(New RectangleF(200, 260, 50, 50), "Square annotation")
annotation.Color = New PdfColor(Color.Red)
'Set the layer for the annotation.
annotation.Layer = layer
'Add the annotation to the page.
loadedPage.Annotations.Add(annotation)

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Add-annotation-to-the-layer-in-an-existing-PDF-document).

## Nested layers

Syncfusion<sup>&reg;</sup> PDF allows users to add nested layers in the PDF document by adding a child layer to a parent layer using the [Layers](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfLayer.html#Syncfusion_Pdf_PdfLayer_Layers) property of the [PdfLayer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfLayer.html) class. Refer to the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Add-nested-layers-in-the-PDF-document/.NET/Add-nested-layers-in-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create the PDF document.
PdfDocument document = new PdfDocument();
//Add the page.
PdfPage page = document.Pages.Add();

//Add the parent layer.
PdfLayer layer = document.Layers.Add("Layer1");
PdfGraphics graphics = layer.CreateGraphics(page);
graphics.TranslateTransform(100, 60);

//Draw an arc.
PdfPen pen = new PdfPen(Syncfusion.Drawing.Color.Red, 50);
RectangleF bounds = new RectangleF(0, 0, 50, 50);
graphics.DrawArc(pen, bounds, 360, 360);

//Add the child layer.
PdfLayer layer2 = layer.Layers.Add("Layer2");
graphics = layer2.CreateGraphics(page);
graphics.TranslateTransform(100, 180);
//Draw an ellipse.
graphics.DrawEllipse(pen, bounds);

//Save and close the document.
using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
{
    document.Save(outputStream);
}
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create the PDF document.
PdfDocument document = new PdfDocument();
//Add the page.
PdfPage page = document.Pages.Add();

//Add the parent layer.
PdfLayer layer = document.Layers.Add("Layer1");
PdfGraphics graphics = layer.CreateGraphics(page);
graphics.TranslateTransform(100, 60);

//Draw an arc.
PdfPen pen = new PdfPen(Color.Red, 50);
RectangleF bounds = new RectangleF(0, 0, 50, 50);
graphics.DrawArc(pen, bounds, 360, 360);

//Add the child layer.
PdfLayer layer2 = layer.Layers.Add("Layer2");
graphics = layer2.CreateGraphics(page);
graphics.TranslateTransform(100, 180);
//Draw an ellipse.
graphics.DrawEllipse(pen, bounds);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Create the PDF document.
Dim document As New PdfDocument()
'Add the page.
Dim page As PdfPage = document.Pages.Add()

'Add the parent layer.
Dim layer As PdfLayer = document.Layers.Add("Layer1")
Dim graphics As PdfGraphics = layer.CreateGraphics(page)
graphics.TranslateTransform(100, 60)

'Draw an arc.
Dim pen As New PdfPen(Color.Red, 50)
Dim bounds As New RectangleF(0, 0, 50, 50)
graphics.DrawArc(pen, bounds, 360, 360)

'Add the child layer.
Dim layer2 As PdfLayer = layer.Layers.Add("Layer2")
graphics = layer2.CreateGraphics(page)
graphics.TranslateTransform(100, 180)
'Draw an ellipse.
graphics.DrawEllipse(pen, bounds)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Add-nested-layers-in-the-PDF-document).

## Removing layers from an existing PDF document

You can remove the layers using [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLayerCollection.html#Syncfusion_Pdf_PdfPageLayerCollection_RemoveAt_System_Int32_) method or [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLayerCollection.html#Syncfusion_Pdf_PdfPageLayerCollection_Remove_System_String_) method from layer collection, represented by the [PdfPageLayerCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLayerCollection.html) of the [PdfLoadedPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfLoadedPage.html). This is illustrated in the following code sample.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Removing-layers-from-an-existing-PDF-document/.NET/Removing-layers-from-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Gets the first page from the document
PdfLoadedPage loadedPage = document.Pages[0] as PdfLoadedPage;

//Get the layer collection
PdfPageLayerCollection layers = loadedPage.Layers;
//Remove the layer
layers.RemoveAt(0);

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Gets the first page from the document
PdfLoadedPage loadedPage = document.Pages[0] as PdfLoadedPage;

//Get the layer collection
PdfPageLayerCollection layers = loadedPage.Layers;
//Remove the layer
layers.RemoveAt(0);

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Gets the first page from the document
Dim loadedPage As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Get the layer collection
Dim layers As PdfPageLayerCollection = loadedPage.Layers
'Remove the layer.
layers.RemoveAt(0)

'Save the document
document.Save("Output.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Removing-layers-from-an-existing-PDF-document).
 
## Flattening the layers in an existing PDF document

You can flatten a layer in a PDF document by removing it from the [PdfDocumentLayerCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentLayerCollection.html) using [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentLayerCollection.html#Syncfusion_Pdf_PdfDocumentLayerCollection_RemoveAt_System_Int32_) method or [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentLayerCollection.html#Syncfusion_Pdf_PdfDocumentLayerCollection_Remove_System_String_) method. The following code snippet explains this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Flattening-the-layers-in-an-existing-PDF-document/.NET/Flattening-the-layers-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the layer collection
PdfDocumentLayerCollection layers = loadedDocument.Layers;
//Flatten a layer in the PDF document
layers.RemoveAt(0);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Layers.pdf");

//Get the layer collection
PdfDocumentLayerCollection layers = loadedDocument.Layers;
//Flatten a layer in the PDF document
layers.RemoveAt(0);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Layers.pdf")

'Get the layer collection
Dim layers As PdfDocumentLayerCollection = loadedDocument.Layers
'Flatten a layer in the PDF document
layers.RemoveAt(0)

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Flattening-the-layers-in-an-existing-PDF-document/).

## Toggling the visibility of layers

The visibility of a layer can be controlled when creating a new page layer using the [Add(name, visibility)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLayerCollection.html#Syncfusion_Pdf_PdfPageLayerCollection_Add_System_String_System_Boolean_) overload of the [PdfPageLayerCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLayerCollection.html) class. Pass `true` to make the layer visible or `false` to hide it by default.

The following code example illustrates how to toggle the visibility of layers in a new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Toggle-the-visibility-of-layers-in-new-PDF-document/.NET/Toggle-the-visibility-of-layers-in-new-PDF-document/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create the document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();

//Add the first layer and enable the visibility.
PdfPageLayer layer = page.Layers.Add("Layer1", true);
PdfGraphics graphics = layer.Graphics;
graphics.TranslateTransform(100, 60);

//Draw an arc.
PdfPen pen = new PdfPen(Syncfusion.Drawing.Color.Red, 50);
RectangleF bounds = new RectangleF(0, 0, 50, 50);
graphics.DrawArc(pen, bounds, 360, 360);

//Add another layer on the page and disable the visibility.
PdfPageLayer layer2 = page.Layers.Add("Layer2", false);
graphics = layer2.Graphics;
graphics.TranslateTransform(100, 180);
//Draw an ellipse.
graphics.DrawEllipse(pen, bounds);

//Save and close the document.
using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
{
    document.Save(outputStream);
}
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create the document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();

//Add the first layer and enable the visibility.
PdfPageLayer layer = page.Layers.Add("Layer1", true);
PdfGraphics graphics = layer.Graphics;
graphics.TranslateTransform(100, 60);

//Draw an arc.
PdfPen pen = new PdfPen(Color.Red, 50);
RectangleF bounds = new RectangleF(0, 0, 50, 50);
graphics.DrawArc(pen, bounds, 360, 360);

//Add another layer on the page and disable the visibility.
PdfPageLayer layer2 = page.Layers.Add("Layer2", false);
graphics = layer2.Graphics;
graphics.TranslateTransform(100, 180);
//Draw an ellipse.
graphics.DrawEllipse(pen, bounds);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Create the document.
Dim document As New PdfDocument()
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Add the first layer and enable the visibility.
Dim layer As PdfPageLayer = page.Layers.Add("Layer1", True)
Dim graphics As PdfGraphics = layer.Graphics
graphics.TranslateTransform(100, 60)

'Draw an arc.
Dim pen As New PdfPen(Color.Red, 50)
Dim bounds As New RectangleF(0, 0, 50, 50)
graphics.DrawArc(pen, bounds, 360, 360)

'Add another layer on the page and disable the visibility.
Dim layer2 As PdfPageLayer = page.Layers.Add("Layer2", False)
graphics = layer2.Graphics
graphics.TranslateTransform(100, 180)
'Draw an ellipse.
graphics.DrawEllipse(pen, bounds)

'Save and close the document.
document.Save("Output.pdf")
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Toggle-the-visibility-of-layers-in-new-PDF-document).

The following code illustrates how to toggle the visibility of layers in an existing PDF document by disabling the [Visible](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfLayer.html#Syncfusion_Pdf_PdfLayer_Visible) property of the [PdfLayer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfLayer.html) class.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Toggle-the-visibility-of-layers-in-an-existing-PDF/.NET/Toggle-the-visibility-of-layers-in-an-existing-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Gets the first layer from the layer collection
PdfLayer layer = document.Layers[0];
//Disable the visibility
layer.Visible = false;

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Gets the first layer from the layer collection
PdfLayer layer = document.Layers[0];
//Disable the visibility
layer.Visible = false;

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")

'Get the first layer from the layer collection
Dim layer As PdfLayer = document.Layers(0)
'Disable the visibility
layer.Visible = False

'Save the document
document.Save("Output.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Toggle-the-visibility-of-layers-in-an-existing-PDF).

## Lock or Unlock layers

The layers can be locked or unlocked while creating a new layer in a PDF document by enabling or disabling the [Locked](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfLayer.html#Syncfusion_Pdf_PdfLayer_Locked) property in [PdfLayer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfLayer.html) class.  

The following code sample shows how to add a lock state to the layer in a new PDF document.
 
{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Layer/Add-a-lock-state-to-the-layer-in-a-new-PDF-document/.NET/Add-a-lock-state-to-the-layer-in-a-new-PDF-document/Program.cs" %}	

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Creating a new PDF document. 
PdfDocument document = new PdfDocument();
//Adding a new page to the PDF document.
PdfPage page = document.Pages.Add();

//Create a layer.
PdfLayer layer = document.Layers.Add("Layer");
//Set a lock state.  
layer.Locked = true;

//Create graphics for a layer.
PdfGraphics graphics = layer.CreateGraphics(page);
//Draw ellipse.
graphics.DrawEllipse(PdfPens.Red, new RectangleF(50, 50, 40, 40));

//Save the PDF document.
document.Save("Output.pdf");
//Close the PDF document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Creating a new PDF document. 
PdfDocument document = new PdfDocument();
//Adding a new page to the PDF document. 
PdfPage page = document.Pages.Add();

//Create a layer.
PdfLayer layer = document.Layers.Add("Layer");
//Set a lock state.  
layer.Locked = true;

//Create graphics for a layer.
PdfGraphics graphics = layer.CreateGraphics(page);
//Draw ellipse.
graphics.DrawEllipse(PdfPens.Red, new RectangleF(50, 50, 40, 40));

//Save the PDF document.
document.Save("Output.pdf");
//Close the PDF document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Creating a new PDF document. 
Dim document As PdfDocument =  New PdfDocument() 
'Adding a new page to the PDF document. 
Dim page As PdfPage =  document.Pages.Add() 
 
'Create a layer. 
Dim layer As PdfLayer =  document.Layers.Add("Layer") 

'Set a lock state.
layer.Locked = True
 
'Create graphics for a layer.
Dim graphics As PdfGraphics =  layer.CreateGraphics(page) 
'Draw ellipse.
graphics.DrawEllipse(PdfPens.Red,New RectangleF(50,50,40,40))
 
'Save the PDF document.
document.Save("Output.pdf")
'Close the PDF document.
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Add-a-lock-state-to-the-layer-in-a-new-PDF-document).

## Removing a layer and its graphical content

The Syncfusion<sup>&reg;</sup> PDF library allows you to remove layers from PDF documents, and you can also recursively remove the graphical content of nested layers. The [RemoveAt(index)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentLayerCollection.html#Syncfusion_Pdf_PdfDocumentLayerCollection_RemoveAt_System_Int32_) method removes the layer at the specified index while preserving its graphical content. The [RemoveAt(index, removeGraphicalContent)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentLayerCollection.html#Syncfusion_Pdf_PdfDocumentLayerCollection_RemoveAt_System_Int32_System_Boolean_) overload additionally removes the graphical content of the layer when the second parameter is set to `true`.

The following code example shows how to remove a nested layer along with its graphical content.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//PDF doesn't support removing the layer with its graphical content in C#/.NET cross platforms. 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Layers.pdf");

//Get the layer collection.
PdfDocumentLayerCollection layers = loadedDocument.Layers;
if (layers != null && layers.Count > 0)
{
    if (layers[0].Layers.Count > 0)
    {
        //Remove the first child layer with graphical content.
        layers[0].Layers.RemoveAt(0, true);
    }
}

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Layers.pdf")

'Get the layer collection.
Dim layers As PdfDocumentLayerCollection = loadedDocument.Layers
If layers IsNot Nothing AndAlso layers.Count > 0 Then
    If layers(0).Layers.Count > 0 Then
        'Remove the first child layer with graphical content.
        layers(0).Layers.RemoveAt(0, True)
    End If
End If

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Layer/Removing-the-layer-with-its-graphical-content).