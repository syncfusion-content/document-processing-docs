---
title: Working with Annotations | Syncfusion
description: This section explains how to create or modify or remove different type of interactive Annotation by using Essential PDF
platform: document-processing
control: PDF
documentation: UG
---
# Working with Annotations

Essential<sup>&reg;</sup> PDF provides support for interactive [annotations](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/pdf-annotation).

You can add, delete and modify the annotation from the PDF documents.

Check the following video to learn how to work with annotations in PDF documents using the .NET PDF Library.
{% youtube "https://youtu.be/0KnFyXd-KpM?si=qCVcijc5XxcbgaZ-" %}

## Adding annotations to a PDF document

You can add a popup annotation to the page using [PdfPopupAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfPopupAnnotation.html) class. The following code example explains this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-popup-annotation-to-the-PDF-document/.NET/Add-a-popup-annotation-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page .
PdfPage page = document.Pages.Add();
//Creates a rectangle.
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new popup annotation.
PdfPopupAnnotation popupAnnotation = new PdfPopupAnnotation(rectangle, "Test popup annotation");
popupAnnotation.Border.Width = 4;
popupAnnotation.Border.HorizontalRadius = 20;
popupAnnotation.Border.VerticalRadius = 30;
//Sets the pdf popup icon.
popupAnnotation.Icon = PdfPopupIcon.NewParagraph;
//Adds this annotation to the created page.
page.Annotations.Add(popupAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page 
PdfPage page = document.Pages.Add();
//Creates a rectangle
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new popup annotation.
PdfPopupAnnotation popupAnnotation = new PdfPopupAnnotation(rectangle,"Test popup annotation");
popupAnnotation.Border.Width = 4;
popupAnnotation.Border.HorizontalRadius = 20;
popupAnnotation.Border.VerticalRadius = 30;
//Sets the pdf popup icon.
popupAnnotation.Icon = PdfPopupIcon.NewParagraph;
//Adds this annotation to the created page.
page.Annotations.Add(popupAnnotation);

//Saves the document to disk.
document.Save("PopupAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Creates a new PDF document.
Dim document As New PdfDocument()
'Creates a new page 
Dim page As PdfPage = document.Pages.Add()
'Creates a new rectangle
Dim rectangle As New RectangleF(10, 40, 30, 30)

'Creates a new popup annotation.
Dim popupAnnotation As New PdfPopupAnnotation(rectangle, "Test popup annotation")
popupAnnotation.Border.Width = 4
popupAnnotation.Border.HorizontalRadius = 20
popupAnnotation.Border.VerticalRadius = 30
'Sets the pdf popup icon.
popupAnnotation.Icon = PdfPopupIcon.NewParagraph
'Adds this annotation to the created page.
page.Annotations.Add(popupAnnotation)

'Saves the document to disk.
document.Save("PopupAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-popup-annotation-to-the-PDF-document).

To add [PdfPopupAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfPopupAnnotation.html) to an existing PDF document using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.The following code example explain this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-popup-annotation-to-an-existing-PDF-document/.NET/Add-a-popup-annotation-to-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Creates a rectangle
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new popup annotation.
PdfPopupAnnotation popupAnnotation = new PdfPopupAnnotation(rectangle, "Test popup annotation");
popupAnnotation.Border.Width = 4;
popupAnnotation.Border.HorizontalRadius = 20;
popupAnnotation.Border.VerticalRadius = 30;
//Sets the pdf popup icon.
popupAnnotation.Icon = PdfPopupIcon.NewParagraph;
//Adds the annotation to loaded page
document.Pages[0].Annotations.Add(popupAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Creates a new PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("input.pdf");
//Creates a rectangle
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new popup annotation.
PdfPopupAnnotation popupAnnotation = new PdfPopupAnnotation(rectangle, "Test popup annotation");
popupAnnotation.Border.Width = 4;
popupAnnotation.Border.HorizontalRadius = 20;
popupAnnotation.Border.VerticalRadius = 30;
//Sets the pdf popup icon.
popupAnnotation.Icon = PdfPopupIcon.NewParagraph;
//Adds the annotation to loaded page
document.Pages[0].Annotations.Add(popupAnnotation);

//Saves the document to disk.
document.Save("PopupAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.
Imports Syncfusion.Pdf.Parsing

'Creates a new PDF document.
Dim document As New PdfLoadedDocument("input.pdf")
'Creates a rectangle.
Dim rectangle As New RectangleF(10, 40, 30, 30)

'Creates a new popup annotation.
Dim popupAnnotation As New PdfPopupAnnotation(rectangle, "Test popup annotation")
popupAnnotation.Border.Width = 4
popupAnnotation.Border.HorizontalRadius = 20
popupAnnotation.Border.VerticalRadius = 30
'Sets the pdf popup icon.
popupAnnotation.Icon = PdfPopupIcon.NewParagraph
'Adds the annotation to loaded page
document.Pages(0).Annotations.Add(popupAnnotation)

'Saves the document to disk.
document.Save("PopupAnnotation.pdf")
document.Close(True)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-popup-annotation-to-an-existing-PDF-document).

## Supported annotation types

### 3D Annotation

3D Annotations are used to represent 3D artworks in a PDF document. Essential<sup>&reg;</sup> PDF provides support to embed 3D files (u3d) in PDF. 

You can add a 3D annotation in PDF document using [Pdf3DAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.Pdf3DAnnotation.html) class. The following example illustrates this.
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-3D-annotation-in-PDF-document/.NET/Add-a-3D-annotation-in-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Creates a new pdf 3d annotation.
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), "3DAnnotation.U3D");
//Handles the activation of the 3d annotation
Pdf3DActivation activation = new Pdf3DActivation();
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation;
activation.ShowToolbar = true;
pdf3dAnnotation.Activation = activation;
//Adds annotation to page
page.Annotations.Add(pdf3dAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Creates a new pdf 3d annotation.
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), @"3DAnnotation.U3D");
//Handles the activation of the 3d annotation
Pdf3DActivation activation = new Pdf3DActivation();
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation;
activation.ShowToolbar = true;
pdf3dAnnotation.Activation = activation;
//Adds annotation to page
page.Annotations.Add(pdf3dAnnotation);

//Saves the document to disk.
document.Save("3DAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Creates a new PDF document.
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()

'Creates a new pdf 3d annotation.
Dim pdf3dAnnotation As New Pdf3DAnnotation(New RectangleF(10, 50, 300, 150), "3DAnnotation.U3D")
'Handles the activation of the 3d annotation
Dim activation As New Pdf3DActivation()
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation
activation.ShowToolbar = True
pdf3dAnnotation.Activation = activation
'Adds annotation to page
page.Annotations.Add(pdf3dAnnotation)

'Saves the document to disk.
document.Save("3DAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-3D-annotation-in-PDF-document).

You can add the JavaScript script to the 3D annotation using the [OnInstantiate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.Pdf3DAnnotation.html#Syncfusion_Pdf_Interactive_Pdf3DAnnotation_OnInstantiate) property, which is executed whenever a 3D stream is read to create an instance of the 3D artwork. The following code snippet illustrate this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-the-JavaScript-script-to-the-3D-annotation-in-a-PDF/.NET/Add-the-JavaScript-script-to-the-3D-annotation-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Creates a new PDF 3D annotation
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), "3DAnnotation.U3D");
//Assign JavaScript script
pdf3dAnnotation.OnInstantiate = "host.getURL(\"http://www.google.com\")";
//Adds annotation to page
page.Annotations.Add(pdf3dAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Create a new PDF 3D annotation
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), @"Input.u3d");
//Assign JavaScript script
pdf3dAnnotation.OnInstantiate = "host.getURL(\"http://www.google.com\")";
//Adds annotation to page
page.Annotations.Add(pdf3dAnnotation);

//Save the document to disk
document.Save("3DAnnotation.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Creates a new PDF document
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()

'Create a new PDF 3D annotation
Dim pdf3dAnnotation As New Pdf3DAnnotation(New RectangleF(10, 50, 300, 150), "Input.u3d")
'Assign JavaScript script
pdf3dAnnotation.OnInstantiate = "host.getURL(""http://www.google.com"")"
'Adds annotation to page
page.Annotations.Add(pdf3dAnnotation)
'Save the document to disk
document.Save("3DAnnotation.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-the-JavaScript-script-to-the-3D-annotation-in-a-PDF).

### File Link Annotation 

Links for external files can be added in a PDF document by using the [PdfFileLinkAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfFileLinkAnnotation.html) class.

The following code example explains how to add a file link annotation in PDF.
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//PDF doesn't support File Link Annotation C#.NET Cross platforms.

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Creates a new rectangle
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new pdf file link annotation.
PdfFileLinkAnnotation fileLinkAnnotation = new PdfFileLinkAnnotation(rectangle, @"logo.png");
//Adds this annotation to a new page.
page.Annotations.Add(fileLinkAnnotation);

//Saves the document to disk.
document.Save("FileLinkAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Creates a new PDF document
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
'Creates a new rectangle
Dim rectangle As New RectangleF(10, 40, 30, 30)

'Creates a new pdf file link annotation.
Dim fileLinkAnnotation As New PdfFileLinkAnnotation(rectangle, "logo.png")
'Adds this annotation to a new page.
page.Annotations.Add(fileLinkAnnotation)

'Saves the document to disk.
document.Save("FileLinkAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-file-link-annotation-in-PDF).

### Rich Media Annotation

A rich media annotation is used to play the media clip in a PDF Document.

The following rich media types are supported:

1. Video

2. Sound

The following code examples explain how to add a rich media annotation in a PDF document using the [PdfRichMediaAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRichMediaAnnotation.html).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-rich-media-annotation-to-PDF-document/.NET/Add-rich-media-annotation-to-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page. 
PdfLoadedPage lpage = loadedDocument.Pages[0] as PdfLoadedPage;

//Create the PDF richmedia annotation. 
PdfRichMediaAnnotation richMediaAnnotation = new PdfRichMediaAnnotation(new RectangleF(0, 0, 200, 100));
//Set properties to the annotation. 
richMediaAnnotation.ActivationMode = PdfRichMediaActivationMode.Click;
richMediaAnnotation.PresentationStyle = PdfRichMediaPresentationStyle.Windowed;
//Set the richmedia content.
FileStream fileStream = new FileStream("video.mp4", FileMode.Open, FileAccess.Read);
PdfRichMediaContent content = new PdfRichMediaContent("video", fileStream, "mp4");
richMediaAnnotation.Content = content;
//Create the appearance of the richmedia. 
richMediaAnnotation.Appearance.Normal.Graphics.DrawString("Click here to play video...", new PdfStandardFont(PdfFontFamily.Helvetica, 15), PdfBrushes.Blue, new RectangleF(0, 0, 200, 100), new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle));
//Add the annotation to the page. 
lpage.Annotations.Add(richMediaAnnotation);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document. 
loadedDocument.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");
//Get the page.
PdfLoadedPage lpage = loadedDocument.Pages[0] as PdfLoadedPage;

//Create the rich media annotation.
PdfRichMediaAnnotation richMediaAnnotation = new PdfRichMediaAnnotation(new RectangleF(0, 0, 200, 100));
//Sets properties to the annotation. 
richMediaAnnotation.ActivationMode = PdfRichMediaActivationMode.Click;
richMediaAnnotation.PresentationStyle = PdfRichMediaPresentationStyle.Windowed;
//Set the rich media content.
PdfRichMediaContent content = new PdfRichMediaContent(@"video.mp4");
richMediaAnnotation.Content = content;
//Create the appearance of the rich media.
richMediaAnnotation.Appearance.Normal.Graphics.DrawString("Click here to play video...", new PdfStandardFont(PdfFontFamily.Helvetica, 15), PdfBrushes.Blue, new RectangleF(0, 0, 200, 100), new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle));
//Add the annotation to the page.
lpage.Annotations.Add(richMediaAnnotation);

//Save the document to the disk.
loadedDocument.Save(@"RichMediaAnnotation.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document.
 Dim loadedDocument As New PdfLoadedDocument("input.pdf")
'Get the page. 
Dim lpage As PdfLoadedPage = TryCast(loadedDocument.Pages(0),PdfLoadedPage)

'Create the PDF richmedia annotation.
Dim richMediaAnnotation As New PdfRichMediaAnnotation (New RectangleF(0, 0, 200, 100)) 
richMediaAnnotation.ActivationMode = PdfRichMediaActivationMode.Click
richMediaAnnotation.PresentationStyle = PdfRichMediaPresentationStyle.Windowed
Dim content As New PdfRichMediaContent (@"video.mp4")
richMediaAnnotation.Content = content
'Create the appearance of the richmedia.
richMediaAnnotation.Appearance.Normal.Graphics.DrawString("Click here to play video...", New PdfStandardFont(PdfFontFamily.Helvetica, 15), PdfBrushes.Blue, New RectangleF(0, 0, 200, 100), New PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle))
'Add the annotation to the page. 
lpage.Annotations.Add(richMediaAnnotation)

'Save the document to the disk. 
loadedDocument.Save("RichMediaAnnotation.pdf") 
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-rich-media-annotation-to-PDF-document).

### Free Text Annotation

Free text annotation enables you to display the text directly on the page. When you want to add a comment directly without placing it on a pop-up window, [PdfFreeTextAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfFreeTextAnnotation.html) can be used.

The following code example explains how to add a free text annotation in the PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-free-text-annotation-in-the-PDF-document/.NET/Add-a-free-text-annotation-in-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new pdf document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Creates PDF free text annotation
PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(new RectangleF(50, 100, 100, 50));
//Sets properties to the annotation
freeText.MarkupText = "Free Text with Callout";
freeText.TextMarkupColor = new PdfColor(Color.Black);
freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 7f);
freeText.Color = new PdfColor(Color.Yellow);
freeText.BorderColor = new PdfColor(Color.Red);
freeText.Border = new PdfAnnotationBorder(.5f);
freeText.LineEndingStyle = PdfLineEndingStyle.OpenArrow;
freeText.AnnotationFlags = PdfAnnotationFlags.Default;
freeText.Text = "Free Text";
freeText.Opacity = 0.5f;
PointF[] points = { new PointF(100, 450), new PointF(100, 200), new PointF(100, 150) };
freeText.CalloutLines = points;
//Adds the annotation to page
page.Annotations.Add(freeText);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new pdf document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Creates PDF free text annotation
PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(new RectangleF(50, 100, 100, 50));
//Sets properties to the annotation
freeText.MarkupText = "Free Text with Callout";
freeText.TextMarkupColor = new PdfColor(Color.Black);
freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 7f);
freeText.Color = new PdfColor(Color.Yellow);
freeText.BorderColor = new PdfColor(Color.Red);
freeText.Border = new PdfAnnotationBorder(.5f);
freeText.LineEndingStyle = PdfLineEndingStyle.OpenArrow;
freeText.AnnotationFlags = PdfAnnotationFlags.Default;
freeText.Text = "Free Text";
freeText.Opacity = 0.5f;
PointF[] points = { new PointF(100, 450), new PointF(100, 200), new PointF(100, 150) };
freeText.CalloutLines = points;
//Adds the annotation to page
page.Annotations.Add(freeText);

//Saves the document to disk.
document.Save("FreeTextAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new pdf document
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()

'Creates PDF free text annotation
Dim freeText As New PdfFreeTextAnnotation(New RectangleF(50, 100, 100, 50))
'Sets properties to the annotation
freeText.MarkupText = "Free Text with Callout"
freeText.TextMarkupColor = New PdfColor(Color.Black)
freeText.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 7.0F)
freeText.Color = New PdfColor(Color.Yellow)
freeText.BorderColor = New PdfColor(Color.Red)
freeText.Border = New PdfAnnotationBorder(0.5F)
freeText.LineEndingStyle = PdfLineEndingStyle.OpenArrow
freeText.AnnotationFlags = PdfAnnotationFlags.[Default]
freeText.Text = "Free Text"
freeText.Opacity = 0.5F
Dim points As PointF() = { New PointF(100, 450), New PointF(100, 200), New PointF(100, 150) }
freeText.CalloutLines = points
'Adds the annotation to page
page.Annotations.Add(freeText)

'Saves the document to disk.
document.Save("FreeTextAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-free-text-annotation-in-the-PDF-document).

### Line Annotation 

Line annotation displays a single straight line on the page. When you open it, it displays a pop-up window containing text of the associated note.

[PdfLineAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLineAnnotation.html) is used to create and set the properties of the Line annotation.
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-line-annotation-to-the-PDF-document/.NET/Add-line-annotation-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Specifies the line end points
int[] points = new int[] { 80, 420, 150, 420 };

//Creates a new line annotation.
PdfLineAnnotation lineAnnotation = new PdfLineAnnotation(points, "Line Annotation");
//Creates pdf line border
LineBorder lineBorder = new LineBorder();
lineBorder.BorderStyle = PdfBorderStyle.Solid;
lineBorder.BorderWidth = 1;
lineAnnotation.lineBorder = lineBorder;
lineAnnotation.LineIntent = PdfLineIntent.LineDimension;
//Assigns the line ending style
lineAnnotation.BeginLineStyle = PdfLineEndingStyle.Butt;
lineAnnotation.EndLineStyle = PdfLineEndingStyle.Diamond;
lineAnnotation.AnnotationFlags = PdfAnnotationFlags.Default;
//Assigns the line color
lineAnnotation.InnerLineColor = new PdfColor(Color.Green);
lineAnnotation.BackColor = new PdfColor(Color.Green);
//Assigns the leader line
lineAnnotation.LeaderLineExt = 0;
lineAnnotation.LeaderLine = 0;
//Assigns the Line caption type
lineAnnotation.LineCaption = true;
lineAnnotation.CaptionType = PdfLineCaptionType.Inline;
//Adds this annotation to a new page.
page.Annotations.Add(lineAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Specifies the line end points
int[] points = new int[] { 80, 420, 150, 420 };

//Creates a new line annotation.
PdfLineAnnotation lineAnnotation = new PdfLineAnnotation(points, "Line Annotation");
//Creates pdf line border
LineBorder lineBorder = new LineBorder();
lineBorder.BorderStyle = PdfBorderStyle.Solid;
lineBorder.BorderWidth = 1;
lineAnnotation.lineBorder = lineBorder;
lineAnnotation.LineIntent = PdfLineIntent.LineDimension;
//Assigns the line ending style
lineAnnotation.BeginLineStyle = PdfLineEndingStyle.Butt;
lineAnnotation.EndLineStyle = PdfLineEndingStyle.Diamond;
lineAnnotation.AnnotationFlags = PdfAnnotationFlags.Default;
//Assigns the line color
lineAnnotation.InnerLineColor = new PdfColor(Color.Green);
lineAnnotation.BackColor = new PdfColor(Color.Green);
//Assigns the leader line
lineAnnotation.LeaderLineExt = 0;
lineAnnotation.LeaderLine = 0;
//Assigns the Line caption type
lineAnnotation.LineCaption = true;
lineAnnotation.CaptionType = PdfLineCaptionType.Inline;
//Adds this annotation to a new page.
page.Annotations.Add(lineAnnotation);

//Saves the document to disk.
document.Save("LineAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document.
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
'Specifies the line end points
Dim points As Integer() = New Integer() {80, 420, 150, 420}

'Creates a new line annotation.
Dim lineAnnotation As New PdfLineAnnotation(points, "Line Annotation")
'Creates pdf line border
Dim lineBorder As New LineBorder()
lineBorder.BorderStyle = PdfBorderStyle.Solid
lineBorder.BorderWidth = 1
lineAnnotation.lineBorder = lineBorder
lineAnnotation.LineIntent = PdfLineIntent.LineDimension
'Assigns the line ending style
lineAnnotation.BeginLineStyle = PdfLineEndingStyle.Butt
lineAnnotation.EndLineStyle = PdfLineEndingStyle.Diamond
lineAnnotation.AnnotationFlags = PdfAnnotationFlags.[Default]
'Assigns the line color
lineAnnotation.InnerLineColor = New PdfColor(Color.Green)
lineAnnotation.BackColor = New PdfColor(Color.Green)
'Assigns the leader line
lineAnnotation.LeaderLineExt = 0
lineAnnotation.LeaderLine = 0
'Assigns the Line caption type
lineAnnotation.LineCaption = True
lineAnnotation.CaptionType = PdfLineCaptionType.Inline
'Adds this annotation to a new page.
page.Annotations.Add(lineAnnotation)

'Saves the document to disk.
document.Save("LineAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-line-annotation-to-the-PDF-document).

### Rubber stamp Annotation

Rubber stamp annotation displays text or graphics intended to look like it is stamped on the page with a rubber stamp. 

When opened, it displays a pop-up window containing the text of the associated note.

[PdfRubberStampAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRubberStampAnnotation.html) is used to create rubber stamp annotation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-rubberstamp-annotation-to-the-PDF-document/.NET/Add-rubberstamp-annotation-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Creates a new pdf rubber stamp annotation.
RectangleF rectangle = new RectangleF(40, 60, 80, 20);
PdfRubberStampAnnotation rubberStampAnnotation = new PdfRubberStampAnnotation(rectangle, " Text Rubber Stamp Annotation");
rubberStampAnnotation.Icon = PdfRubberStampAnnotationIcon.Draft;
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation";
//Adds annotation to the page
page.Annotations.Add(rubberStampAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();

//Creates a new pdf rubber stamp annotation.
RectangleF rectangle = new RectangleF(40, 60, 80, 20);
PdfRubberStampAnnotation rubberStampAnnotation = new PdfRubberStampAnnotation(rectangle, " Text Rubber Stamp Annotation");
rubberStampAnnotation.Icon = PdfRubberStampAnnotationIcon.Draft;
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation";
//Adds annotation to the page
page.Annotations.Add(rubberStampAnnotation);

//Saves the document to disk.
document.Save("RubberStamp.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document.
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()

'Creates a new pdf rubber stamp annotation.
Dim rectangle As New RectangleF(40, 60, 80, 20)
Dim rubberStampAnnotation As New PdfRubberStampAnnotation(rectangle, " Text Rubber Stamp Annotation")
rubberStampAnnotation.Icon = PdfRubberStampAnnotationIcon.Draft
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation"
'Adds annotation to the page
page.Annotations.Add(rubberStampAnnotation)

'Saves the document to disk.
document.Save("RubberStamp.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-rubberstamp-annotation-to-the-PDF-document).

### Ink Annotation

Ink annotation represents freehand “scribble” comprising one or more disjoint paths. 

When you open it, it displays a pop-up window containing text of the associated note.

[PdfInkAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfInkAnnotation.html) is used to create ink annotation in a PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-ink-annotation-to-the-PDF-document/.NET/Add-ink-annotation-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
List<float> linePoints = new List<float> { 40, 300, 60, 100, 40, 50, 40, 300 };

//Creates a new ink annotation
RectangleF rectangle = new RectangleF(0, 0, 300, 400);
PdfInkAnnotation inkAnnotation = new PdfInkAnnotation(rectangle, linePoints);
inkAnnotation.Color = new PdfColor(Color.Red);
//Adds annotation to the page
page.Annotations.Add(inkAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
List<float> linePoints=new List<float>{40,300,60,100,40,50,40,300};

//Creates a new ink annotation
RectangleF rectangle = new RectangleF(0, 0, 300, 400);
PdfInkAnnotation inkAnnotation = new PdfInkAnnotation(rectangle,linePoints);
inkAnnotation.Color = new PdfColor(Color.Red);
//Adds annotation to the page
page.Annotations.Add(inkAnnotation);

//Saves the document to disk.
document.Save("InkAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document.
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
Dim linePoints As New List(Of Single)() From {40, 300, 60, 100, 40, 50, 40, 300}

'Creates a new ink annotation
Dim rectangle As New RectangleF(0, 0, 300, 400)
Dim inkAnnotation As New PdfInkAnnotation(rectangle, linePoints)
inkAnnotation.Color = New PdfColor(Color.Red)
'Adds annotation to the page
page.Annotations.Add(inkAnnotation)

'Saves the document to disk.
document.Save("InkAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-ink-annotation-to-the-PDF-document).

You can get ink list points from the [PdfLoadedInkAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedInkAnnotation.html), represented by [InkPointsCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedInkAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedInkAnnotation_InkPointsCollection). The following code illustrate this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Get-the-ink-list-points-from-the-existing-PDF-document/.NET/Get-the-ink-list-points-from-the-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
//Gets the first page from the document
PdfLoadedPage page = lDoc.Pages[0] as PdfLoadedPage;
//Gets the annotation collection
PdfLoadedAnnotationCollection annotations = page.Annotations;

//Gets the first ink annotation
PdfLoadedInkAnnotation inkAnnotation = annotations[0] as PdfLoadedInkAnnotation;
//Gets the ink points collection
List<List<float>> points = inkAnnotation.InkPointsCollection;

//Save the document
lDoc.Save("Output.pdf");
//Close the document
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
//Gets the first page from the document
PdfLoadedPage page = lDoc.Pages[0] as PdfLoadedPage;
//Gets the annotation collection
PdfLoadedAnnotationCollection annotations = page.Annotations;

//Gets the first ink annotation
PdfLoadedInkAnnotation inkAnnotation = annotations[0] as PdfLoadedInkAnnotation;
//Gets the ink points collection
List<List<float>> points = inkAnnotation.InkPointsCollection;

//Save the document
lDoc.Save("Output.pdf");
//Close the document
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Loads the document
Dim lDoc As New PdfLoadedDocument("Input.pdf")
'Gets the first page from the document
Dim page As PdfLoadedPage = TryCast(lDoc.Pages(0), PdfLoadedPage)
'Gets the annotation collection
Dim annotations As PdfLoadedAnnotationCollection = page.Annotations

'Gets the first ink annotation
Dim inkAnnotation As PdfLoadedInkAnnotation = TryCast(annotations(0), PdfLoadedInkAnnotation)
'Gets the ink points collection
Dim points As List(Of List(Of Single)) = inkAnnotation.InkPointsCollection

'Save the document
lDoc.Save("Output.pdf")
'Close the document
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Get-the-ink-list-points-from-the-existing-PDF-document).

### Pop-up Annotation

Pop-up annotation displays text in a pop-up window for entry and editing. 

It typically does not appear alone, but is associated with markup annotation, its parent annotation.

[PdfPopupAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfPopupAnnotation.html) is used to add pop-up annotation in a PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-popup-annotation-to-the-PDF-document/.NET/Add-a-popup-annotation-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create new PDF document
PdfDocument document = new PdfDocument();
//Create a new PDF page
PdfPage page = document.Pages.Add();
//Creates a new rectangle
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new popup annotation.
PdfPopupAnnotation popupAnnotation = new PdfPopupAnnotation(rectangle, "Test popup annotation");
popupAnnotation.Border.Width = 4;
popupAnnotation.Border.HorizontalRadius = 20;
popupAnnotation.Border.VerticalRadius = 30;
//Sets the PDF popup icon.
popupAnnotation.Icon = PdfPopupIcon.NewParagraph;
//Adds this annotation to a new page.
page.Annotations.Add(popupAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create new PDF document.
PdfDocument document = new PdfDocument();
//Create a new PDF page.
PdfPage page = document.Pages.Add();
//Creates a new rectangle.
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new popup annotation.
PdfPopupAnnotation popupAnnotation = new PdfPopupAnnotation(rectangle, "Test popup annotation");
popupAnnotation.Border.Width = 4;
popupAnnotation.Border.HorizontalRadius = 20;
popupAnnotation.Border.VerticalRadius = 30;
//Sets the PDF popup icon.
popupAnnotation.Icon = PdfPopupIcon.NewParagraph;
//Adds this annotation to a new page.
page.Annotations.Add(popupAnnotation);

//Saves the document to disk.
document.Save("PopupAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document.
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
'Creates a new rectangle
Dim rectangle As New RectangleF(10, 40, 30, 30)

'Creates a new popup annotation.
Dim popupAnnotation As New PdfPopupAnnotation(rectangle, "Test popup annotation")
popupAnnotation.Border.Width = 4
popupAnnotation.Border.HorizontalRadius = 20
popupAnnotation.Border.VerticalRadius = 30
'Sets the PDF popup icon.
popupAnnotation.Icon = PdfPopupIcon.NewParagraph
'Adds this annotation to a new page.
page.Annotations.Add(popupAnnotation)

'Saves the document to disk.
document.Save("PopupAnnotation.pdf")
document.Close(True)
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-popup-annotation-to-the-PDF-document).

### File Attachment Annotation

File attachment annotation contains reference to a file that typically is embedded in the PDF file.

[PdfAttachmentAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentAnnotation.html) is used to add a file attachment annotation in a PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-file-attachment-annotation-in-a-PDF-document/.NET/Add-file-attachment-annotation-in-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF Document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Creates a new rectangle
RectangleF attachmentRectangle = new RectangleF(10, 40, 30, 30);
//Load the PDF document
FileStream inputStream = new FileStream("logo.png", FileMode.Open, FileAccess.Read);

//Creates a new attachment annotation.
PdfAttachmentAnnotation attachmentAnnotation = new PdfAttachmentAnnotation(attachmentRectangle, @"logo.png", inputStream);
//Sets the attachment icon to attachment annotation.
attachmentAnnotation.Icon = PdfAttachmentIcon.PushPin;
//Adds this annotation to a new page.
page.Annotations.Add(attachmentAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF Document.
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Creates a new rectangle
RectangleF attachmentRectangle = new RectangleF(10, 40, 30, 30);

//Creates a new attachment annotation.
PdfAttachmentAnnotation attachmentAnnotation = new PdfAttachmentAnnotation(attachmentRectangle, @"logo.png");
//Sets the attachment icon to attachment annotation.
attachmentAnnotation.Icon = PdfAttachmentIcon.PushPin;
//Adds this annotation to a new page.
page.Annotations.Add(attachmentAnnotation);

//Saves the document to disk.
document.Save("AttachmentAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF Document.
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
'Creates a new rectangle
Dim attachmentRectangle As New RectangleF(10, 40, 30, 30)

'Creates a new attachment annotation.
Dim attachmentAnnotation As New PdfAttachmentAnnotation(attachmentRectangle, "logo.png")
'Sets the attachment icon to attachment annotation.
attachmentAnnotation.Icon = PdfAttachmentIcon.PushPin
'Adds this annotation to a new page.
page.Annotations.Add(attachmentAnnotation)

'Saves the document to disk.
document.Save("AttachmentAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-file-attachment-annotation-in-a-PDF-document).

### Sound Annotation

Sound annotation is used to play the sound clip in the PDF Document.

The following code example explains how to add a sound annotation in a PDF document using [PdfSoundAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfSoundAnnotation.html).
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-sound-annotation-in-a-PDF-document/.NET/Add-a-sound-annotation-in-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Creates a new rectangle
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new sound annotation.
FileStream inputStream = new FileStream("Startup.wav", FileMode.Open, FileAccess.Read);
PdfSoundAnnotation soundAnnotation = new PdfSoundAnnotation(rectangle, inputStream);
soundAnnotation.Sound.Encoding = PdfSoundEncoding.Signed;
soundAnnotation.Sound.Channels = PdfSoundChannels.Stereo;
soundAnnotation.Sound.Bits = 16;
soundAnnotation.Color = new PdfColor(Color.Red);
//Sets the pdf sound icon.
soundAnnotation.Icon = PdfSoundIcon.Speaker;
//Adds this annotation to a new page.
page.Annotations.Add(soundAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Creates a new rectangle
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new sound annotation.
PdfSoundAnnotation soundAnnotation = new PdfSoundAnnotation(rectangle, @"startup.wav");
soundAnnotation.Sound.Encoding = PdfSoundEncoding.Signed;
soundAnnotation.Sound.Channels = PdfSoundChannels.Stereo;
soundAnnotation.Sound.Bits = 16;
soundAnnotation.Color = new PdfColor(Color.Red);
//Sets the pdf sound icon.
soundAnnotation.Icon = PdfSoundIcon.Speaker;
//Adds this annotation to a new page.
page.Annotations.Add(soundAnnotation);
//Saves the document to disk.
document.Save("SoundIcon.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
'Creates a new rectangle
Dim rectangle As New RectangleF(10, 40, 30, 30)

'Creates a new sound annotation.
Dim soundAnnotation As New PdfSoundAnnotation(rectangle, "startup.wav")
soundAnnotation.Sound.Encoding = PdfSoundEncoding.Signed
soundAnnotation.Sound.Channels = PdfSoundChannels.Stereo
soundAnnotation.Sound.Bits = 16
soundAnnotation.Color = New PdfColor(Color.Red)
'Sets the pdf sound icon.
soundAnnotation.Icon = PdfSoundIcon.Speaker
'Adds this annotation to a new page.
page.Annotations.Add(soundAnnotation)

'Saves the document to disk.
document.Save("SoundIcon.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-sound-annotation-in-a-PDF-document).

### URI Annotation

URI annotation is used to navigate to a particular web URI

The following code example explains how to add URI annotation in a PDF document using [PdfUriAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfUriAnnotation.html).
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-URI-annotation-in-a-PDF-document/.NET/Add-URI-annotation-in-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Creates a new rectangle
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new Uri Annotation
PdfUriAnnotation uriAnnotation = new PdfUriAnnotation(rectangle, "http://www.google.com");
//Sets Text to uriAnnotation
uriAnnotation.Text = "Uri Annotation";
//Adds this annotation to a new page
page.Annotations.Add(uriAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Creates a new rectangle
RectangleF rectangle = new RectangleF(10, 40, 30, 30);

//Creates a new Uri Annotation
PdfUriAnnotation uriAnnotation = new PdfUriAnnotation(rectangle, "http://www.google.com");
//Sets Text to uriAnnotation
uriAnnotation.Text = "Uri Annotation";
//Adds this annotation to a new page
page.Annotations.Add(uriAnnotation);

//Saves the document to disk
document.Save("UriAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
'Creates a new rectangle
Dim rectangle As New RectangleF(10, 40, 30, 30)

'Creates a new Uri Annotation
Dim uriAnnotation As New PdfUriAnnotation(rectangle, "http://www.google.com")
'Sets Text to uriAnnotation.
uriAnnotation.Text = "Uri Annotation"
'Adds this annotation to a new page
page.Annotations.Add(uriAnnotation)

'Saves the document to disk.
document.Save("UriAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-URI-annotation-in-a-PDF-document).

### Document Link Annotation

This annotation is used to navigate to a specific destination within the document.

[PdfDocumentLinkAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfDocumentLinkAnnotation.html) is used to add a document link annotation in PDF document.
{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-document-link-annotation-in-PDF-document/.NET/Add-a-document-link-annotation-in-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Creates a page
PdfPage page2 = document.Pages.Add();
//Creates a new rectangle
RectangleF docLinkAnnotationRectangle = new RectangleF(10, 40, 30, 30);

//Creates a new document link annotation.
PdfDocumentLinkAnnotation documentLinkAnnotation = new PdfDocumentLinkAnnotation(docLinkAnnotationRectangle);
documentLinkAnnotation.AnnotationFlags = PdfAnnotationFlags.NoRotate;
documentLinkAnnotation.Text = "Document link annotation";
documentLinkAnnotation.Color = new PdfColor(Color.Navy);
//Sets the destination.
documentLinkAnnotation.Destination = new PdfDestination(page2);
documentLinkAnnotation.Destination.Location = new PointF(10, 0);
documentLinkAnnotation.Destination.Zoom = 5;
//Adds this annotation to a new page.
page.Annotations.Add(documentLinkAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
//Creates a page
PdfPage page2 = document.Pages.Add();
//Creates a new rectangle
RectangleF docLinkAnnotationRectangle = new RectangleF(10, 40, 30, 30);

//Creates a new document link annotation.
PdfDocumentLinkAnnotation documentLinkAnnotation = new PdfDocumentLinkAnnotation(docLinkAnnotationRectangle);
documentLinkAnnotation.AnnotationFlags = PdfAnnotationFlags.NoRotate;
documentLinkAnnotation.Text = "Document link annotation";
documentLinkAnnotation.Color = new PdfColor(Color.Navy);
//Sets the destination.
documentLinkAnnotation.Destination = new PdfDestination(page2);
documentLinkAnnotation.Destination.Location = new Point(10, 0);
documentLinkAnnotation.Destination.Zoom = 5;
//Adds this annotation to a new page.
page.Annotations.Add(documentLinkAnnotation);

//Saves the document to disk.
document.Save("DocumentLinkAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
'Creates a page
Dim page2 As PdfPage = document.Pages.Add()
'Creates a new rectangle
Dim docLinkAnnotationRectangle As New RectangleF(10, 40, 30, 30)

'Creates a new document link annotation.
Dim documentLinkAnnotation As New PdfDocumentLinkAnnotation(docLinkAnnotationRectangle)
documentLinkAnnotation.AnnotationFlags = PdfAnnotationFlags.NoRotate
documentLinkAnnotation.Text = "Document link annotation"
documentLinkAnnotation.Color = New PdfColor(Color.Navy)
'Sets the destination.
documentLinkAnnotation.Destination = New PdfDestination(page2)
documentLinkAnnotation.Destination.Location = New Point(10, 0)
documentLinkAnnotation.Destination.Zoom = 5
'Adds this annotation to a new page.
page.Annotations.Add(documentLinkAnnotation)

'Saves the document to disk.
document.Save("DocumentLinkAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-document-link-annotation-in-PDF-document).

### Redaction Annotation

The essential<sup>&reg;</sup> PDF supports removing or redacting the sensitive text and images from the PDF documents. The redaction is the process of permanently removing sensitive information from the PDF document, use the [PdfRedaction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html) class to remove content. Using the [PdfRedactionAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRedactionAnnotation.html) class, you can mark the content to redact or remove it from the PDF pages. The content will be redacted when performing the [Flatten](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedAnnotationCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedAnnotationCollection_Flatten) operation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Removing-the-sensitive-text-and-images-from-PDF-document/.NET/Removing-the-sensitive-text-and-images-from-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();			
//Create a new page.		
PdfPage page = document.Pages.Add();
			
//Create a new Redaction annotation.	
PdfRedactionAnnotation annot = new PdfRedactionAnnotation();	
//Assign the Bounds value	
annot.Bounds = new Rectangle(100, 120, 100, 100);	
//Assign the InnerColor	
annot.InnerColor = Color.Black;
//Assign the Bordercolor
annot.BorderColor = Color.Yellow;
//Assign the Textcolor
annot.TextColor = Color.Blue;
//Assign the font
annot.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 10);	
//Assign the OverlayText		
annot.OverlayText = "REDACTION";		
//Assign the TextAlignment		
annot.TextAlignment = PdfTextAlignment.Right;		
//Assign the RepeatText
annot.RepeatText = true;
annot.SetAppearance(true);
//Add the annotation to the page.
page.Annotations.Add(annot);
			
//Save the document
document.Save("Output.pdf");
//Close the document. 	
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page.
PdfPage page = document.Pages.Add();

//Create a new Redaction annotation.
PdfRedactionAnnotation annot = new PdfRedactionAnnotation();
//Assign the Bounds value
annot.Bounds = new Rectangle(100, 120, 100, 100);
//Assign the InnerColor
annot.InnerColor = Color.Black;
//Assign the Bordercolor
annot.BorderColor = Color.Yellow;
//Assign the Textcolor
annot.TextColor = Color.Blue;
//Assign the font
annot.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 10);
//Assign the OverlayText
annot.OverlayText = "REDACTION";
//Assign the TextAlignment
annot.TextAlignment = PdfTextAlignment.Right;
//Assign the RepeatText
annot.RepeatText = true;
annot.SetAppearance(true);
//Add the annotation to the page.
page.Annotations.Add(annot);

//Save the document to disk.
document.Save("output.pdf");
//Close the document

document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.     
Dim document As PdfDocument = New PdfDocument()
'Create a new page.
Dim page As PdfPage = document.Pages.Add()
		
'Create a New Redaction annotation.
Dim annot As PdfRedactionAnnotation = New PdfRedactionAnnotation()
'Assign the Bounds value
annot.Bounds = New Rectangle(100, 120, 100, 100)
'Assign the InnerColor 
annot.InnerColor = Color.Black	
'Assign the BorderColor	
annot.BorderColor = Color.Yellow	
'Assign the TextColor 	
annot.TextColor = Color.Blue	
'Assign the font value
annot.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 10)	
'Assign the OverlayText
annot.OverlayText = "REDACTION"
'Assign the TextAlignment
annot.TextAlignment = PdfTextAlignment.Right
'Assign the RepeatText
annot.RepeatText = True
annot.SetAppearance(True)
'Add the annotation to the page.
page.Annotations.Add(annot)
		
'Save the document to disk.
document.Save("output.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Removing-the-sensitive-text-and-images-from-PDF-document).

N>The redaction annotation flatten operation is currently supported in the .NET Framework and ASP.NET Core platforms only, it is not supported in the UWP, Xamarin platforms.

### Watermark Annotation

A watermark annotation is used to represent graphics that are expected to be printed at a fixed size and position on a page, regardless of the dimensions of the printed page. [PdfWatermarkAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfWatermarkAnnotation.html) can be used.
The following code example explains how to add a watermark annotation in the PDF document

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-watermark-annotation-in-the-PDF-document/.NET/Add-watermark-annotation-in-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page 
PdfLoadedPage lpage = loadedDocument.Pages[0] as PdfLoadedPage;

//Creates PDF watermark annotation 
PdfWatermarkAnnotation watermark = new PdfWatermarkAnnotation(new RectangleF(50, 100, 100, 50));
//Sets properties to the annotation 
watermark.Opacity = 0.5f; 
//Create the appearance of watermark 
watermark.Appearance.Normal.Graphics.DrawString("Watermark Text", new PdfStandardFont(PdfFontFamily.Helvetica, 20), PdfBrushes.Red, new RectangleF(0, 0, 200, 50), new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle));
//Adds the annotation to page 
lpage.Annotations.Add(watermark);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document 
loadedDocument.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");
//Get the page 
PdfLoadedPage lpage = loadedDocument.Pages[0] as PdfLoadedPage;

//Creates PDF watermark annotation 
PdfWatermarkAnnotation watermark = new PdfWatermarkAnnotation(new RectangleF(50, 100, 100, 50));
//Sets properties to the annotation 
watermark.Opacity = 0.5f; 
//Create the appearance of watermark 
watermark.Appearance.Normal.Graphics.DrawString("Watermark Text", new PdfStandardFont(PdfFontFamily.Helvetica, 20), PdfBrushes.Red, new RectangleF(0, 0, 200, 50), new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle));
//Adds the annotation to page 
lpage.Annotations.Add(watermark); 

//Saves the document to disk. 
loadedDocument.Save("WatermarkAnnotation.pdf"); 
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
 Dim loadedDocument As New PdfLoadedDocument("input.pdf")
'Get the page 
Dim lpage As PdfLoadedPage = TryCast(loadedDocument.Pages(0),PdfLoadedPage)

'Creates PDF watermark annotation
Dim watermark As New PdfWatermarkAnnotation(New RectangleF(50, 100, 100, 50)) 
watermark.Opacity = 0.5f; 
'Creates the appearance of watermark
watermark.Appearance.Normal.Graphics.DrawString("Watermark Text", New PdfStandardFont(PdfFontFamily.Helvetica, 20), PdfBrushes.Red, New RectangleF(0, 0, 200, 50), New PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle))
'Adds annotation to the page 
lpage.Annotations.Add(watermark)

'Saves the document to disk. 
loadedDocument.Save("WatermarkAnnotation.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-watermark-annotation-in-the-PDF-document).

### Text Markup Annotation

You can highlight the Markup Text using the [PdfTextMarkupAnnotationType](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfTextMarkupAnnotationType.html) enum of the [TextMarkupAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfTextMarkupAnnotation.html) class. This is explained in the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Highlight-text-in-the-newly-created-PDF-document/.NET/Highlight-text-in-the-newly-created-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page.
PdfPage page = document.Pages.Add();
FileStream fontStream = new FileStream("arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont pdfFont = new PdfTrueTypeFont(fontStream, 14);
//Create a new PDF brush.
PdfBrush pdfBrush = new PdfSolidBrush(Color.Black);
//Draw text in the new page.
page.Graphics.DrawString("Text Markup Annotation Demo", pdfFont, pdfBrush, new PointF(150, 10));
string markupText = "Text Markup";
SizeF size = pdfFont.MeasureString(markupText);
RectangleF rectangle = new RectangleF(175, 40, size.Width, size.Height);
page.Graphics.DrawString(markupText, pdfFont, pdfBrush, rectangle);

//Create a PDF text markup annotation.
PdfTextMarkupAnnotation markupAnnotation = new PdfTextMarkupAnnotation("Markup annotation", "Markup annotation with highlight style", markupText, new PointF(175, 40), pdfFont);
markupAnnotation.TextMarkupColor = new PdfColor(Color.BlueViolet);
markupAnnotation.TextMarkupAnnotationType = PdfTextMarkupAnnotationType.Highlight;
//Add this annotation to a new page.
page.Annotations.Add(markupAnnotation);

//Save the document
document.Save("Output.pdf");
//close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page.
PdfPage page = document.Pages.Add();
//Create a PDF font and font style.
Font font = new Font("Calibri", 10, FontStyle.Bold);
PdfFont pdfFont = new PdfTrueTypeFont(font, false);
//Create a new PDF brush.
PdfBrush pdfBrush = new PdfSolidBrush(Color.Black);
//Draw text in the new page.
page.Graphics.DrawString("Text Markup Annotation Demo", pdfFont, pdfBrush, new PointF(150, 10));
string markupText = "Text Markup";
SizeF size = pdfFont.MeasureString(markupText);
RectangleF rectangle = new RectangleF(175, 40, size.Width, size.Height);
page.Graphics.DrawString(markupText, pdfFont, pdfBrush, rectangle);

//Create a PDF text markup annotation.
PdfTextMarkupAnnotation markupAnnotation = new PdfTextMarkupAnnotation("Markup annotation", "Markup annotation with highlight style", markupText, new PointF(175, 40), pdfFont);
markupAnnotation.TextMarkupColor = new PdfColor(Color.BlueViolet);
markupAnnotation.TextMarkupAnnotationType = PdfTextMarkupAnnotationType.Highlight;
//Add this annotation to a new page.
page.Annotations.Add(markupAnnotation);

//Save the document to disk.
document.Save("Output.pdf");
//close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.
Dim document As New PdfDocument()
'Create a new page.
Dim page As PdfPage = document.Pages.Add()
'Create a pdf font and pdf font style.
Dim font As New Font("Calibri", 10, FontStyle.Bold)
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, False)
'Create a new PdfBrush.
Dim pdfBrush As PdfBrush = New PdfSolidBrush(Color.Black)
'Draw text in the new page.
page.Graphics.DrawString("Text Markup Annotation Demo", pdfFont, pdfBrush, New PointF(150, 10))
Dim markupText As String = "Text Markup"
Dim size As SizeF = pdfFont.MeasureString(markupText)
Dim rectangle As New RectangleF(175, 40, size.Width, size.Height)
page.Graphics.DrawString(markupText, pdfFont, pdfBrush, rectangle)

'Create a pdf text markup annotation.
Dim markupAnnotation As New PdfTextMarkupAnnotation("Markup annotation", "Markup annotation with highlight style", markupText, New PointF(175, 40), pdfFont)
markupAnnotation.TextMarkupColor = New PdfColor(Color.BlueViolet)
markupAnnotation.TextMarkupAnnotationType = PdfTextMarkupAnnotationType.Highlight
'Add this annotation to a new page.
page.Annotations.Add(markupAnnotation)

'Save the document to disk.
document.Save("Output.pdf")
'close the document.
document.Close(True)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Highlight-text-in-the-newly-created-PDF-document).


## Cloud border style Annotation

### PdfRectangleAnnotation

Cloud border style can be added to the [PdfRectangleAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRectangleAnnotation.html) class by using the [PdfBorderEffect](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBorderEffect.html) class. 
The following code sample explains how to add cloud border styled rectangle annotation in the PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-cloud-border-styled-rectangle-annotation-in-the-PDF/.NET/Add-cloud-border-styled-rectangle-annotation-in-the-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page
PdfPage page = document.Pages.Add();

// create a rectangle annotation
PdfRectangleAnnotation annotation = new PdfRectangleAnnotation(new RectangleF(0, 0, 200, 100), "rectangle");
//Assign the borderWidth value.
annotation.Border.BorderWidth = 1;
//Assign the color
annotation.Color = Color.Red;
//Assign the InnerColor
annotation.InnerColor = Color.Blue;
//Create a new PdfBorderEffect class.
PdfBorderEffect bordereffect = new PdfBorderEffect();
//Assign the intensity value
bordereffect.Intensity = 2;
//Assign the cloud style
bordereffect.Style = PdfBorderEffectStyle.Cloudy;
//Assign the BorderEffect.
annotation.BorderEffect = bordereffect;
// Adds the annotation to the page.
page.Annotations.Add(annotation);

//Save the document
document.Save("Output.pdf");
//Close the document 
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument ();
//Create a new page
PdfPage page = document.Pages.Add();

//Create a new rectangle annotation.
PdfRectangleAnnotation annotation = new PdfRectangleAnnotation(new RectangleF(0, 0, 200, 100), "rectangle");
//Assign the borderWidth value.
annotation. Border. BorderWidth = 1;
//Assign the color
annotation. Color = Color.Red;
//Assign the InnerColor
annotation.InnerColor = Color.Blue;
//Create a new PdfBorderEffect class.
PdfBorderEffect bordereffect = new PdfBorderEffect();
//Assign the intensity value
bordereffect.Intensity =2;
//Assign the cloud style
bordereffect.Style = PdfBorderEffectStyle.Cloudy;
//Assign the BorderEffect.
annotation.BorderEffect = bordereffect;
//Add the annotation to the page.
page.Annotations.Add(annotation);

//Save the document to disk.
document.Save("Output.pdf");
//close the document to disk.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.
Dim document As PdfDocument = New PdfDocument()
'Create a new page.	
Dim page As PdfPage = document.Pages.Add()
		
'Create a new Redaction annotation
Dim annotation As PdfRectangleAnnotation = New PdfRectangleAnnotation(New RectangleF(0, 0, 200, 100), "rectangle")
'Assign the borderWidth value.
annotation.Border.BorderWidth = 1
'Assign the color
annotation.Color = Color.Red
'Assign the InnerColor
annotation.InnerColor = Color.Blue	
'Create a new PdfBorderEffect class.	
Dim bordereffect As PdfBorderEffect = New PdfBorderEffect()	
'Assign the intensity value	
bordereffect.Intensity = 2	
'Assign the cloud style	
bordereffect.Style = PdfBorderEffectStyle.Cloudy	
'Assign the BorderEffect.		
annotation.BorderEffect = bordereffect	
'Add the annotation to the page.
page.Annotations.Add(annotation)
		
'Save the document to disk.	
document.Save("Output.pdf")
'close the document to disk.
document.Close(True) 

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-cloud-border-styled-rectangle-annotation-in-the-PDF).

### Polygon Annotation

Cloud border style can be added to the [PdfPolygonAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfPolygonAnnotation.html) class by using the [PdfBorderEffect](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBorderEffect.html) class. 
The following code sample explains how to add cloud border styled polygon annotation in the PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-cloud-border-styled-polygon-annotation-in-the-PDF/.NET/Add-a-cloud-border-styled-polygon-annotation-in-the-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page
PdfPage page = document. Pages. Add ();
//Create points
int[] points = new int[] { 100, 300, 150, 200, 300, 200, 350, 300, 300, 400, 150, 400 };

//Create a new polygon annotation.
PdfPolygonAnnotation annotation = new PdfPolygonAnnotation(points,"polygon");
//Assign the borderWidth value.
annotation.Border.BorderWidth = 1;
//Assign the color
annotation.Color = Color.Red;
//Assign the InnerColor
annotation.InnerColor = Color.Blue;
//Create a new PdfBorderEffect class.
PdfBorderEffect bordereffect = new PdfBorderEffect();
//Assign the intensity value
bordereffect.Intensity =2;
//Assign the cloud style
bordereffect.Style = PdfBorderEffectStyle.Cloudy;
//Assign the BorderEffect.
annotation.BorderEffect = bordereffect;
//Add the annotation to the page.
page.Annotations.Add(annotation);

//Save the document
document.Save("Output.pdf");
//Close the document 
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page
PdfPage page = document.Pages.Add();
//Create points
int[] points = new int[] { 100, 300, 150, 200, 300, 200, 350, 300, 300, 400, 150, 400 };

//Create a new polygon annotation.
PdfPolygonAnnotation annotation = new PdfPolygonAnnotation(points,"polygon");
//Assign the borderWidth value.
annotation.Border.BorderWidth = 1;
//Assign the color
annotation.Color = Color.Red;
//Assign the InnerColor
annotation.InnerColor = Color.Blue;
//Create a new PdfBorderEffect class.
PdfBorderEffect bordereffect = new PdfBorderEffect();
//Assign the intensity value
bordereffect.Intensity =2;
//Assign the cloud style
bordereffect.Style = PdfBorderEffectStyle.Cloudy;
//Assign the BorderEffect.
annotation.BorderEffect = bordereffect;
//Add the annotation to the page.
page.Annotations.Add(annotation);

//Save the document to disk.
document.Save("Output.pdf");
//close the document to disk.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Create a New PDF document.
Dim document As PdfDocument = New PdfDocument()
'Create a new page.	
Dim page As PdfPage = document.Pages.Add()	
'Create points.
Dim points As Integer() = New Integer() {100, 300, 150, 200, 300, 200, 350, 300, 300, 400, 150, 400}

'Create a new polygon annotation.
Dim annotation As PdfPolygonAnnotation = New PdfPolygonAnnotation(points, "polygon")
'Assign the borderWidth value.
annotation.Border.BorderWidth = 1
'Assign the color
annotation.Color = Color.Red
'Assign the InnerColor	
annotation.InnerColor = Color.Blue	
'Create a new PdfBorderEffect class.
Dim bordereffect As PdfBorderEffect = New PdfBorderEffect()
'Assign the intensity value
bordereffect.Intensity = 2
'Assign the cloud style
bordereffect.Style = PdfBorderEffectStyle.Cloudy
'Assign the BorderEffect.
annotation.BorderEffect = bordereffect	
'Add the annotation to the page.
page.Annotations.Add(annotation)
		
'Save the document to disk.
 document.Save("Output.pdf")
'close the document to disk.
document.Close(True)
		
{% endhighlight %}		

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-cloud-border-styled-polygon-annotation-in-the-PDF).

### PdfCircleAnnotation

Cloud border style can be added to the [PdfCircleAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfCircleAnnotation.html) class by using the [PdfBorderEffect](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBorderEffect.html) class. The following code sample explains how to add cloud border styled Circle annotation in the PDF document.  

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Annotation/Add-cloud-border-styled-circle-annotation-in-the-PDF/.NET/Add-cloud-border-styled-circle-annotation-in-the-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPage page = document.Pages.Add();
//Create a new circle annotation
PdfCircleAnnotation annotation = new PdfCircleAnnotation(new RectangleF(0, 0, 200, 200), "Circle");
//Assign the border width
annotation.Border.BorderWidth = 1;
//Assign the color
annotation.Color = Color.Red;
//Assign the InnerColor
annotation.InnerColor = Color.Blue;
//Create a new PdfBorderEffect class
PdfBorderEffect bordereffect = new PdfBorderEffect();
//Assign the intensity value
bordereffect.Intensity = 2;
//Assign the cloud style
bordereffect.Style = PdfBorderEffectStyle.Cloudy;
//Assign the BorderEffect to the annotation
annotation.BorderEffect = bordereffect;
//Set appearance for the annotation
annotation.SetAppearance(true);
//Adds the annotation to the page
page.Annotations.Add(annotation);
//Save the document
document.Save("Output.pdf");
//Close the document 
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPage page = document.Pages.Add();
//Create a new circle annotation
PdfCircleAnnotation annotation = new PdfCircleAnnotation(new RectangleF(0, 0, 200, 200), "Circle");
//Assign the border width
annotation.Border.BorderWidth = 1;
//Assign the color
annotation.Color = Color.Red;
//Assign the InnerColor
annotation.InnerColor = Color.Blue;
//Create a new PdfBorderEffect class.
PdfBorderEffect bordereffect = new PdfBorderEffect();
//Assign the intensity value
bordereffect.Intensity = 2;
//Assign the cloud style
bordereffect.Style = PdfBorderEffectStyle.Cloudy;
//Assign the BorderEffect.
annotation.BorderEffect = bordereffect;
//Set appearance for the annotation.
annotation.SetAppearance(true);
//Add the annotation to the page.
page.Annotations.Add(annotation);
//Save the document to disk.
document.Save("Output.pdf");
//Close the document to disk.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument()
'Add a new page	
Dim page As PdfPage = document.Pages.Add()
'Create a new circle annotation
Dim annotation As PdfCircleAnnotation = New PdfCircleAnnotation(New RectangleF(0, 0, 200, 200), "Circle")
'Assign the border width
annotation.Border.BorderWidth = 1
'Assign the color
annotation.Color = Color.Red
'Assign the InnerColor
annotation.InnerColor = Color.Blue
'Create a new PdfBorderEffect class.	
Dim bordereffect As PdfBorderEffect = New PdfBorderEffect()
'Assign the intensity value	
bordereffect.Intensity = 2
'Assign the cloud style	
bordereffect.Style = PdfBorderEffectStyle.Cloudy
'Assign the BorderEffect.		
annotation.BorderEffect = bordereffect
'Set appearance for the annotation.
annotation.SetAppearance(True)
'Add the annotation to the page.
page.Annotations.Add(annotation)
'Save the document to disk.	
document.Save("Output.pdf")
'close the document to disk.
document.Close(True)
		
{% endhighlight %}		

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-cloud-border-styled-circle-annotation-in-the-PDF/.NET).

### PdfEllipseAnnotation

Cloud border style can be added to the [PdfEllipseAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfEllipseAnnotation.html) class by using the [PdfBorderEffect](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBorderEffect.html) class. The following code sample explains how to add cloud border styled Ellipse annotation in the PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Annotation/Add-cloud-border-styled-ellipse-annotation-in-the-PDF/.NET/Add-cloud-border-styled-ellipse-annotation-in-the-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPage page = document.Pages.Add();
// create a new ellipse annotation
PdfEllipseAnnotation annotation = new PdfEllipseAnnotation(new RectangleF(0, 0, 200,100), "Ellipse");
//Assign the border width
annotation.Border.BorderWidth = 1;
//Assign the color
annotation.Color = Color.Red;
//Assign the InnerColor
annotation.InnerColor = Color.Blue;
//Create a new PdfBorderEffect class
PdfBorderEffect bordereffect = new PdfBorderEffect();
//Assign the intensity value
bordereffect.Intensity = 2;
//Assign the cloud style
bordereffect.Style = PdfBorderEffectStyle.Cloudy;
//Assign the BorderEffect
annotation.BorderEffect = bordereffect;
//Set appearance for the annotation.
annotation.SetAppearance(true);
// Adds the annotation to the page.
page.Annotations.Add(annotation);
//Save the document
document.Save("Output.pdf");
//Close the document 
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Add a new page
PdfPage page = document.Pages.Add();
//Create a new ellipse annotation
PdfEllipseAnnotation annotation = new PdfEllipseAnnotation(new RectangleF(0, 0, 200, 100), "Ellipse");
//Assign the borderWidth value
annotation.Border.BorderWidth = 1;
//Assign the color
annotation.Color = Color.Red;
//Assign the InnerColor
annotation.InnerColor = Color.Blue;
//Create a new PdfBorderEffect class
PdfBorderEffect bordereffect = new PdfBorderEffect();
//Assign the intensity value
bordereffect.Intensity = 2;
//Assign the cloud style
bordereffect.Style = PdfBorderEffectStyle.Cloudy;
//Assign the BorderEffect
annotation.BorderEffect = bordereffect;
//Set appearance for the annotation
annotation.SetAppearance(true);
//Add the annotation to the page.
page.Annotations.Add(annotation);
//Save the document to disk.
document.Save("Output.pdf");
//close the document to disk.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument()
'Add a new page.	
Dim page As PdfPage = document.Pages.Add()
'Create a new ellipse annotation
Dim annotation As PdfEllipseAnnotation = New PdfEllipseAnnotation(New RectangleF(0, 0, 200, 100), "Ellipse")
'Assign the borderWidth value
annotation.Border.BorderWidth = 1
'Assign the color
annotation.Color = Color.Red
'Assign the InnerColor
annotation.InnerColor = Color.Blue
'Create a new PdfBorderEffect class	
Dim bordereffect As PdfBorderEffect = New PdfBorderEffect()
'Assign the intensity value	
bordereffect.Intensity = 2
'Assign the cloud style	
bordereffect.Style = PdfBorderEffectStyle.Cloudy
'Assign the BorderEffect		
annotation.BorderEffect = bordereffect
'Set appearance for the annotation
annotation.SetAppearance(True)
'Add the annotation to the page
page.Annotations.Add(annotation)
'Save the document to disk	
document.Save("Output.pdf");
'close the document to disk.
document.Close(True)
		
{% endhighlight %}		

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-cloud-border-styled-ellipse-annotation-in-the-PDF/.NET).

## Measurement Annotations

Essential<sup>&reg;</sup> PDF supports interactive measurement annotations, which measures the distance, area, and angle of the line segments.

The following measurement annotation types are supported in Essential<sup>&reg;</sup> PDF:

### Line measurement annotation

The line measurement annotation is displayed as the straight line in the page. The distance of the line is measured automatically when you change the position of the line and is displayed in the pop-up window.

[PdfLineMeasurementAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLineMeasurementAnnotation.html) to add a line measurement annotation to the page.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-line-measurement-annotation-to-the-PDF-document/.NET/Add-a-line-measurement-annotation-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 10f, PdfFontStyle.Regular);
//Specifies the line end points
int[] points = new int[] { 100, 750, 500, 750 };

//Creates the line measurement annotation
PdfLineMeasurementAnnotation lineMeasureAnnotation = new PdfLineMeasurementAnnotation(points);
//Assign author to the line measurement annotation
lineMeasureAnnotation.Author = "Syncfusion";
//Assign subject to the line measurement annotation
lineMeasureAnnotation.Subject = "LineAnnotation";
//Assign unit to the line measurement annotation
lineMeasureAnnotation.Unit = PdfMeasurementUnit.Inch;
//Assign borderWidth to the line measurement annotation
lineMeasureAnnotation.lineBorder.BorderWidth = 2;
//Assign font to the line measurement annotation
lineMeasureAnnotation.Font = font;
//Assign color to the line measurement annotation
lineMeasureAnnotation.Color = new PdfColor(Syncfusion.Drawing.Color.Red);
//Adds the line measurement annotation to a new page
page.Annotations.Add(lineMeasureAnnotation);
//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document.
PdfDocument document= new PdfDocument();
//Creates a new page.
PdfPage page = document.Pages.Add();
PdfFont font= new PdfStandardFont(PdfFontFamily.Helvetica, 10f, PdfFontStyle.Regular);
//Specifies the line end points.
int[]  points = new int[] { 100, 750, 500, 750 };

//Creates the line measurement annotation
PdfLineMeasurementAnnotation lineMeasureAnnotation = new PdfLineMeasurementAnnotation(points);
//Assign author to the line measurement annotation.
lineMeasureAnnotation.Author = "Syncfusion";
//Assign subject to the line measurement annotation
lineMeasureAnnotation.Subject = "LineAnnotation";
//Assign unit to the line measurement annotation
lineMeasureAnnotation.Unit = PdfMeasurementUnit.Inch;
//Assign borderWidth to the line measurement annotation.
lineMeasureAnnotation.lineBorder.BorderWidth = 2;
//Assign font to the line measurement annotation.
lineMeasureAnnotation.Font = font;
//Assign color to the line measurement annotation.
lineMeasureAnnotation.Color = new PdfColor(Color.Red);
//Adds the line measurement annotation to a new page.
page.Annotations.Add(lineMeasureAnnotation);

//Saves the document to disk.
document.Save("LineMeasurementAnnotation.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

//Creates a new PDF document
Dim document As PdfDocument = New PdfDocument
//Creates a new page
Dim page As PdfPage = document.Pages.Add
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 10.0!, PdfFontStyle.Regular)
//Specifies the line end points.
Dim points() As Integer = New Integer() {100, 750, 500, 750}

//Creates the line measurement annotation
Dim lineMeasureAnnotation As PdfLineMeasurementAnnotation = New PdfLineMeasurementAnnotation(points)
'Assign author to the line measurement annotation
lineMeasureAnnotation.Author = "Syncfusion"
'Assign subject to the line measurement annotation
lineMeasureAnnotation.Subject = "LineAnnotation"
'Assign unit to the line measurement annotation
lineMeasureAnnotation.Unit = PdfMeasurementUnit.Inch
'Assign borderWidth to the line measurement annotation
lineMeasureAnnotation.lineBorder.BorderWidth = 2
'Assign font to the line measurement annotation
lineMeasureAnnotation.Font = font
'Assign color to the line measurement annotation
lineMeasureAnnotation.Color = New PdfColor(Color.Red)
'Adds the line measurement annotation to a new page
page.Annotations.Add(lineMeasureAnnotation)

'Saves the document to disk
document.Save("LineMeasurementAnnotation.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-line-measurement-annotation-to-the-PDF-document).

### Square measurement annotation

The square measurement annotation is displayed as square shape in the page. The area of the square is measured when you change the square bound and is displayed in the pop-up window.

[PdfSquareMeasurementAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfSquareMeasurementAnnotation.html) is used to add a square measurement annotation to the page.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-square-measurement-annotation-to-PDF-document/.NET/Add-a-square-measurement-annotation-to-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
Syncfusion.Drawing.RectangleF rect = new Syncfusion.Drawing.RectangleF(10, 100, 100, 100);

//Creates the square measurement annotation
PdfSquareMeasurementAnnotation squareMeasureAnnotation = new PdfSquareMeasurementAnnotation(rect);
//Assign author to the square measurement annotation
squareMeasureAnnotation.Author = "Syncfusion";
//Assign subject to the square measurement annotation
squareMeasureAnnotation.Subject = "Square measurement annotation";
//Assign color to the square measurement annotation
squareMeasureAnnotation.Color = new PdfColor(Syncfusion.Drawing.Color.Red);
//Assign measurement unit to the square measurement annotation
squareMeasureAnnotation.Unit = PdfMeasurementUnit.Centimeter;
//Adds the square measurement annotation to a page
page.Annotations.Add(squareMeasureAnnotation);

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document= new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
RectangleF rect = new RectangleF(10, 100, 100,100);

//Creates the square measurement annotation
PdfSquareMeasurementAnnotation squareMeasureAnnotation = new PdfSquareMeasurementAnnotation(rect);
//Assign author to the square measurement annotation
squareMeasureAnnotation.Author = "Syncfusion";
//Assign subject to the square measurement annotation
squareMeasureAnnotation.Subject = "Square measurement annotation";
//Assign color to the square measurement annotation
squareMeasureAnnotation.Color = new PdfColor(Color.Red);
//Assign measurement unit to the square measurement annotation
squareMeasureAnnotation.Unit = PdfMeasurementUnit.Centimeter;
//Adds the square measurement annotation to a page
page.Annotations.Add(squareMeasureAnnotation);

//Saves the document to disk
document.Save("SquareMeasurementAnnotation.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
Dim rect As New RectangleF(10, 100, 100, 100)

'Creates the square measurement annotation
Dim squareMeasureAnnotation As New PdfSquareMeasurementAnnotation(rect)
'Assign author to the square measurement annotation
squareMeasureAnnotation.Author = "Syncfusion"
'Assign subject to the square measurement annotation
squareMeasureAnnotation.Subject = "Square measurement annotation"
'Assign color to the square measurement annotation
squareMeasureAnnotation.Color = New PdfColor(Color.Red)
'Assign measurement unit to the square measurement annotation
squareMeasureAnnotation.Unit = PdfMeasurementUnit.Centimeter
'Adds the square measurement annotation to a page
page.Annotations.Add(squareMeasureAnnotation)

'Saves the document to disk
document.Save("SquareMeasurementAnnotation.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-square-measurement-annotation-to-PDF-document).

### Circle measurement annotation

The circle measurement annotation is displayed as circle shape in the page. The radius or diameter distance of the circle is measured and the value is displayed in the pop-up window.

[PdfCircleMeasurementAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfCircleMeasurementAnnotation.html) is used to add a circle measurement annotation to the page.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-circle-measurement-annotation-to-the-PDF-document/.NET/Add-a-circle-measurement-annotation-to-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
Syncfusion.Drawing.RectangleF rect = new Syncfusion.Drawing.RectangleF(10, 100, 100, 100);

//Creates the circle measurement annotation
PdfCircleMeasurementAnnotation circleMeasureAnnotation = new PdfCircleMeasurementAnnotation(rect);
//Assign author to the circle measurement annotation
circleMeasureAnnotation.Author = "Syncfusion";
//Assign subject to the circle measurement annotation
circleMeasureAnnotation.Subject = "Circle measurement annotation";
//Assign color to the square measurement annotation
circleMeasureAnnotation.Color = new PdfColor(Syncfusion.Drawing.Color.Red);
//Assign measurement unit to the circle measurement annotation
circleMeasureAnnotation.Unit = PdfMeasurementUnit.Centimeter;
//Sets the measurementType to the circle measurement annotation
circleMeasureAnnotation.MeasurementType = PdfCircleMeasurementType.Diameter;
//Adds the circle measurement annotation to a page
page.Annotations.Add(circleMeasureAnnotation);

//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
RectangleF rect = new RectangleF(10, 100, 100, 100);

//Creates the circle measurement annotation
PdfCircleMeasurementAnnotation circleMeasureAnnotation = new PdfCircleMeasurementAnnotation(rect);
//Assign author to the circle measurement annotation
circleMeasureAnnotation.Author = "Syncfusion";
//Assign subject to the circle measurement annotation
circleMeasureAnnotation.Subject = "Circle measurement annotation";
//Assign color to the square measurement annotation
circleMeasureAnnotation.Color = new PdfColor(Color.Red);
//Assign measurement unit to the circle measurement annotation
circleMeasureAnnotation.Unit = PdfMeasurementUnit.Centimeter;
//Sets the measurementType to the circle measurement annotation
circleMeasureAnnotation.MeasurementType = PdfCircleMeasurementType.Diameter;
//Adds the circle measurement annotation to a page
page.Annotations.Add(circleMeasureAnnotation);

//Saves the document to disk
document.Save("CircleMeasurementAnnotation.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
Dim rect As New RectangleF(10, 100, 100, 100)

'Creates the circle measurement annotation
Dim circleMeasureAnnotation As New PdfCircleMeasurementAnnotation(rect)
'Assign author to the circle measurement annotation
circleMeasureAnnotation.Author = "Syncfusion"
'Assign subject to the circle measurement annotation
circleMeasureAnnotation.Subject = "Circle measurement annotation"
'Assign color to the square measurement annotation
circleMeasureAnnotation.Color = New PdfColor(Color.Red)
'Assign measurement unit to the circle measurement annotation
circleMeasureAnnotation.Unit = PdfMeasurementUnit.Centimeter
'Sets the measurementType to the circle measurement annotation
circleMeasureAnnotation.MeasurementType = PdfCircleMeasurementType.Diameter
'Adds the circle measurement annotation to a page
page.Annotations.Add(circleMeasureAnnotation)

'Saves the document to disk
document.Save("CircleMeasurementAnnotation.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-circle-measurement-annotation-to-the-PDF-document).

### Angle measurement annotation

The angle measurement annotation calculates the angle between three points and draws arc between three points. The angle of the annotation is displayed in the pop-up window.

[PdfAngleMeasurementAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAngleMeasurementAnnotation.html) helps you to add angle measurement annotation to the page.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//PDF doesn't support angle measurement annotation C#.NET Cross platforms.

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page
PdfPage page = document.Pages.Add();
PointF[] points = new PointF[] { new PointF(100, 700), new PointF(150, 650), new PointF(100, 600) };

//Creates the angel measurement annotation
PdfAngleMeasurementAnnotation angleMeasureAnnotation = new PdfAngleMeasurementAnnotation(points);
//Set font to the angle measurement annotation
angleMeasureAnnotation.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 12f, PdfFontStyle.Regular);
//Assign color to the angle measurement annotation
angleMeasureAnnotation.Color = Color.Red;
//Adds angle measurement annotation
page.Annotations.Add(angleMeasureAnnotation);

//Saves the document to disk
document.Save("AngleMeasurementAnnotation.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

'Creates a new PDF document
Dim document As New PdfDocument()
'Creates a new page
Dim page As PdfPage = document.Pages.Add()
Dim points As PointF() = New PointF() {New PointF(100, 700), New PointF(150, 650), New PointF(100, 600)}

'Creates the angel measurement annotation
Dim angleMeasureAnnotation As New PdfAngleMeasurementAnnotation(points)
'Set font to the angle measurement annotation
angleMeasureAnnotation.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 12.0F, PdfFontStyle.Regular)
'Assign color to the angle measurement annotation
angleMeasureAnnotation.Color = Color.Red
'Adds angle measurement annotation
page.Annotations.Add(angleMeasureAnnotation)

'Saves the document to disk
document.Save("AngleMeasurementAnnotation.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-angle-measurement-annotation-to-PDF-document).

## Modifying the annotations

Essential<sup>&reg;</sup> PDF allows you to modify the annotation of existing document. The following code illustrates this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Modifying-annotation-of-existing-PDF-document/.NET/Modifying-annotation-of-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
//Gets the first page from the document
PdfLoadedPage page = lDoc.Pages[0] as PdfLoadedPage;
//Gets the annotation collection
PdfLoadedAnnotationCollection annotations = page.Annotations;

//Gets the first annotation and modify the properties
PdfLoadedPopupAnnotation popUp = annotations[0] as PdfLoadedPopupAnnotation;
popUp.Border = new PdfAnnotationBorder(4, 0, 0);
popUp.Color = new PdfColor(Color.Red);
popUp.Text = "Modified annotation";

// Update the appearance so the new content is visible
popUp.SetAppearance(true);  

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("inputAnnotation.pdf");
//Gets the first page from the document
PdfLoadedPage page = lDoc.Pages[0] as PdfLoadedPage;
//Gets the annotation collection
PdfLoadedAnnotationCollection annotations = page.Annotations;

//Gets the first annotation and modify the properties
PdfLoadedPopupAnnotation popUp = annotations[0] as PdfLoadedPopupAnnotation;
popUp.Border = new PdfAnnotationBorder(4, 0, 0);
popUp.Color = new PdfColor(Color.Red);
popUp.Text = "Modified annotation";

// Update the appearance so the new content is visible
popUp.SetAppearance(true); 

//Saves the document
lDoc.Save("sample.pdf");
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Loads the document
Dim lDoc As New PdfLoadedDocument("inputAnnotation.pdf")
'Gets the first page from the document
Dim page As PdfLoadedPage = TryCast(lDoc.Pages(0), PdfLoadedPage)
'Gets the annotation collections
Dim annotations As PdfLoadedAnnotationCollection = page.Annotations

'Gets the annotation at index 0 and modifying the properties
Dim popUp As PdfLoadedPopupAnnotation = TryCast(annotations(0), PdfLoadedPopupAnnotation)
popUp.Border = New PdfAnnotationBorder(4, 0, 0)
popUp.Color = New PdfColor(Color.Red)
popUp.Text = "Modified annotation"

' Update the appearance so the new content is visible
popUp.SetAppearance(True)

'Saves the document
lDoc.Save("sample.pdf")
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

N> When you modify the properties of an annotation such as its content, color, or position the visual representation in the PDF viewer may not automatically update; calling `SetAppearance(true)` ensures that the appearance stream is rebuilt so the annotation reflects all the latest changes visually.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Modifying-annotation-of-existing-PDF-document/.NET).


### Modifying the redaction annotations   

The redaction annotations from the existing document can be modified using the Essential<sup>&reg;</sup> PDF library. You can add, remove, or modify the [PdfLoadedRedactionAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedRedactionAnnotation.html) class in the existing PDF documents. 
The following code sample explains this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Modify-the-redaction-annotation-in-PDF-document/.NET/Modify-the-redaction-annotation-in-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
foreach (PdfAnnotation annot in loadedDocument.Pages[0].Annotations)
{
//Check for the Redaction annotation
if (annot is PdfLoadedRedactionAnnotation)
{
PdfLoadedRedactionAnnotation redactAnnot = annot as PdfLoadedRedactionAnnotation;
//Assign the Bounds values
redactAnnot.Bounds = new RectangleF(50, 50, 100, 100);
//Assign the OverlayText
redactAnnot.OverlayText = "Redaction";
//Assign the InnerColor
redactAnnot.InnerColor = Color.Yellow;
//Assign the BorderColor
redactAnnot.BorderColor = Color.Green;
//Assign the TextColor
redactAnnot.TextColor = Color.Red; 
//Assign the TextAlignment
redactAnnot.TextAlignment = PdfTextAlignment.Right;
//Assign the RepeatText
redactAnnot.RepeatText = true;
//Flatten the annotations in the page
redactAnnot.Flatten = true;
}
}
loadedDocument.Redact();

//Save the document
loadedDocument.Save("Output.pdf"); 
//Close the document 
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("input.pdf");
//Get the pages
foreach (PdfAnnotation annot in ldoc.Pages[0].Annotations)
{
//Check for the Redaction annotation
if (annot is PdfLoadedRedactionAnnotation)
{
PdfLoadedRedactionAnnotation redactAnnot = annot as PdfLoadedRedactionAnnotation;
//Assign the Bounds values
redactAnnot.Bounds = new RectangleF(50, 50, 100, 100);
//Assign the OverlayText
redactAnnot.OverlayText = "Redaction";
//Assign the InnerColor
redactAnnot.InnerColor = Color.Yellow;
//Assign the BorderColor
redactAnnot.BorderColor = Color.Green;
//Assign the TextColor
redactAnnot.TextColor = Color.Red;
//Assign the TextAlignment
redactAnnot.TextAlignment = PdfTextAlignment.Right;
//Assign the RepeatText
redactAnnot.RepeatText = true;
//Flatten the annotations in the page
redactAnnot.Flatten = true;  
}
}
//save the document
ldoc.Save("output.pdf");
//Close the document
ldoc.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim ldoc As PdfLoadedDocument = New PdfLoadedDocument("output.pdf")	
'Get the pages
For Each annot As PdfAnnotation In ldoc.Pages(0).Annotations
'Check for the Redaction annotation	
If TypeOf annot Is PdfLoadedRedactionAnnotation Then	
Dim redactAnnot As PdfLoadedRedactionAnnotation = TryCast(annot, PdfLoadedRedactionAnnotation)	
'Assign the Bounds values			
redactAnnot.Bounds = New RectangleF(50, 50, 100, 100)			
'Assign the OverlayText				
redactAnnot.OverlayText = "Redaction"		
'Assign the InnerColor			
redactAnnot.InnerColor = Color.Yellow			
'Assign the BorderColor 			
redactAnnot.BorderColor = Color.Green				
'Assign the TextColor			
redactAnnot.TextColor = Color.Red		
'Assign the TextAlignment	
redactAnnot.TextAlignment = PdfTextAlignment.Right		
'Assign the RepeatText		
redactAnnot.RepeatText = True			
'Flatten the annotations in the page			
redactAnnot.Flatten = True			
End If		
Next
		
'save the document
ldoc.Save("output.pdf")
'Close the document	
ldoc.Close()
		
{% endhighlight %}		

{% endtabs %}

N> To modify the redaction annotation from PDF document in ASP.NET Core, you need to include the Syncfusion.Pdf.Imaging.Portable assembly reference in the .NET Core project. 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Modify-the-redaction-annotation-in-PDF-document).

## Retrieve annotation

### Retrieve annotation types from an existing PDF

To identify annotation types in an existing PDF, the [PdfLoadedAnnotationTypes](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedAnnotationTypes.html) class can be used. This class facilitates recognizing the annotation types within the document.

The following code example demonstrates how to retrieve the annotation type from an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Get-annotation-type-from-pdf/.NET/Get-annotation-type-from-pdf/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document using a file stream
using (PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf"))
{
    //Get the pages of the PDF file
    for (int i = 0; i < document.PageCount; i++)
    {
        Console.WriteLine("Page Number: " + i);
        PdfLoadedPage page = document.Pages[i] as PdfLoadedPage;

        //Get the annotation type.
        foreach (PdfLoadedAnnotation annotation in page.Annotations)
        {
            Console.WriteLine("Annotation Type: " + annotation.Type.ToString());
        }
    }
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document using a file stream
using (PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf"))
{
    //Get the pages of the PDF file
    for (int i = 0; i < document.PageCount; i++)
    {
        Console.WriteLine("Page Number: " + i);
        PdfLoadedPage page = document.Pages[i] as PdfLoadedPage;

        //Get the annotation type.
        foreach (PdfLoadedAnnotation annotation in page.Annotations)
        {
            Console.WriteLine("Annotation Type: " + annotation.Type.ToString());
        }
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

Using document As New PdfLoadedDocument("Input.pdf")
    ' Iterate through the pages of the PDF file
    For i As Integer = 0 To document.Pages.Count - 1
        Console.WriteLine("Page Number: " & (i + 1))
        Dim page As PdfLoadedPage = TryCast(document.Pages(i), PdfLoadedPage)

        ' Check if the page contains annotations
        If page.Annotations IsNot Nothing Then
            ' Iterate through each annotation on the page
            For Each annotation As PdfLoadedAnnotation In page.Annotations
                ' Output the annotation type
                Console.WriteLine("Annotation Type: " & annotation.AnnotationType.ToString())
            Next
        End If
    Next
End Using

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Get-annotation-type-from-pdf/.NET).

### Retrieve annotation creation date from an existing PDF

The [CreationDate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedAnnotation_CreationDate) property is used to retrieve the creation date of an annotation from an existing PDF file. The following code example demonstrates how to access the creation date of an annotation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Get-annotation-creation-date-from-PDF/.NET/Get-annotation-creation-date-from-pdf/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
using (PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf"))
{
    //Get the first page from the document
    PdfLoadedPage firstPage = document.Pages[0] as PdfLoadedPage;

    //Get the annotation on that page
    PdfLoadedAnnotation annotation = firstPage.Annotations[0] as PdfLoadedAnnotation;

    //Get the annotation creation date.
    DateTime creationDate = annotation.CreationDate;

    Console.WriteLine("Annotation Creation Date: " + creationDate);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
using (PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf"))
{
    //Get the first page from the document
    PdfLoadedPage firstPage = document.Pages[0] as PdfLoadedPage;

    //Get the annotation on that page
    PdfLoadedAnnotation annotation = firstPage.Annotations[0] as PdfLoadedAnnotation;

    //Get the annotation creation date.
    DateTime creationDate = annotation.CreationDate;

    Console.WriteLine("Annotation Creation Date: " + creationDate);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Using document As New PdfLoadedDocument("Input.pdf")
    ' Get the first page from the document
    Dim firstPage As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

    ' Check if the page contains annotations
    If firstPage.Annotations IsNot Nothing AndAlso firstPage.Annotations.Count > 0 Then
        ' Get the first annotation on that page
        Dim annotation As PdfLoadedAnnotation = TryCast(firstPage.Annotations(0), PdfLoadedAnnotation)

        ' Check if the annotation is not null
        If annotation IsNot Nothing Then
            ' Get the annotation creation date
            Dim creationDate As DateTime = annotation.CreationDate

            ' Output the annotation creation date
            Console.WriteLine("Annotation Creation Date: " & creationDate.ToString())
        End If
    End If
End Using


{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Get-annotation-creation-date-from-PDF/.NET).

### Retrieving custom values from PDF annotations

The Essential&reg; PDF supports retrieving custom values from annotations using the [TryGetValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedAnnotation_TryGetValue_System_String_System_Object__) method available in the [PdfLoadedAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedAnnotation.html) class. This method allows developers to safely access custom properties embedded within a PDF annotation without throwing exceptions if the specified key is missing. 

Refer to the code snippet below to retrieve a custom value from an annotation using the TryGetValue method.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Get the first page of the document
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

// Get the annotation collection from the page
PdfLoadedAnnotationCollection annotations = page.Annotations;

// Get the first annotation (assumed to be a rectangle annotation)
PdfLoadedRectangleAnnotation annot = annotations[0] as PdfLoadedRectangleAnnotation;

// Try to get the custom value "Subtype" from the annotation
object values;
bool foundValue = annot.TryGetValue("Subtype", out values);

// Check and print the values if found
if (foundValue && values is List<string> stringValues)
{
    foreach (string value in stringValues)
    {
        // Print the custom value to the console
        Console.WriteLine($"Found Subtype value: {value}");
    }
}
else
{
    Console.WriteLine("Subtype value not found.");
}
// Close the document and release resources
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document using a file stream
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Get the first page of the document
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

// Get the annotation collection from the page
PdfLoadedAnnotationCollection annotations = page.Annotations;

// Get the first annotation (assumed to be a rectangle annotation)
PdfLoadedRectangleAnnotation annot = annotations[0] as PdfLoadedRectangleAnnotation;

// Try to get the custom value "Subtype" from the annotation
object values;
bool foundValue = annot.TryGetValue("Subtype", out values);

// Check and print the values if found
if (foundValue && values is List<string> stringValues)
{
    foreach (string value in stringValues)
    {
        // Print the custom value to the console
        Console.WriteLine($"Found Subtype value: {value}");
    }
}
else
{
    Console.WriteLine("Subtype value not found.");
}
// Close the document and release resources
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Get the first page of the document
Dim page As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

' Get the annotation collection from the page
Dim annotations As PdfLoadedAnnotationCollection = page.Annotations

' Get the first annotation (assumed to be a rectangle annotation)
Dim annot As PdfLoadedRectangleAnnotation = TryCast(annotations(0), PdfLoadedRectangleAnnotation)

' Try to get the custom value "Subtype" from the annotation
Dim values As Object = Nothing
Dim foundValue As Boolean = annot.TryGetValue("Subtype", values)

' Check and print the values if found
If foundValue AndAlso TypeOf values Is List(Of String) Then
    Dim stringValues As List(Of String) = CType(values, List(Of String))
    For Each value As String In stringValues
        ' Print the custom value to the console
        Console.WriteLine($"Found Subtype value: {value}")
    Next
Else
    Console.WriteLine("Subtype value not found.")
End If

' Close the document and release resources
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Removing annotations from an existing PDF 

You can remove the annotation from the annotation collection, represented by the [PdfLoadedAnnotationCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedAnnotationCollection.html) of the loaded page. The following code illustrates this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Removing-annotations-from-an-existing-PDF-document/.NET/Removing-annotations-from-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
//Gets the first page of the document
PdfLoadedPage page = lDoc.Pages[0] as PdfLoadedPage;
//Gets the annotation collection
PdfLoadedAnnotationCollection annotations = page.Annotations;
//Removes the first annotation
annotations.RemoveAt(0);

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("inputAnnotation.pdf");
//Gets the first page of the document
PdfLoadedPage page = lDoc.Pages[0] as PdfLoadedPage;
//Gets the annotation collection
PdfLoadedAnnotationCollection annotations = page.Annotations;
//Removes the first annotation
annotations.RemoveAt(0);
//Saves the document
lDoc.Save("sample.pdf");
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Loads the document
Dim lDoc As New PdfLoadedDocument("inputAnnotation.pdf")
'Gets the first page from the document
Dim page As PdfLoadedPage = TryCast(lDoc.Pages(0), PdfLoadedPage)
'Gets the annotation collection
Dim annotations As PdfLoadedAnnotationCollection = page.Annotations
'Removes the first annotation
annotations.RemoveAt(0)
'Saves the document
lDoc.Save("sample.pdf")
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Removing-annotations-from-an-existing-PDF-document).

## Flatten annotation

Annotations can be flattened by removing the existing annotation and replacing it with graphics objects that would resemble the annotation and cannot be edited.

This can be achieved by enabling the [Flatten](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedAnnotationCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedAnnotationCollection_Flatten) property. Please refer the sample for flattening all the annotations in the PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Flatten-the-annotations-in-an-existing-PDF-document/.NET/Flatten-the-annotations-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get all the pages
foreach (PdfLoadedPage loadedPage in loadedDocument.Pages)
{
    //Flatten all the annotations in the page
    loadedPage.Annotations.Flatten = true;
}

//Save the document
loadedDocument.Save("Output.pdf");
//Closes the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");
//Get all the pages.
foreach (PdfLoadedPage loadedPage in loadedDocument.Pages)
{
//Flatten all the annotations in the page
loadedPage.Annotations.Flatten = true;
}

//Save and close the PDF document instance.
loadedDocument.Save("output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("input.pdf")
'Get all the pages
For Each loadedPage As PdfLoadedPage In loadedDocument.Pages
'Flatten all the annotations in the page
loadedPage.Annotations.Flatten = True
Next

'Save and close the PDF document instance
loadedDocument.Save("output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Flatten-the-annotations-in-an-existing-PDF-document).

To flatten the specific annotation in the PDF document, use the below code example.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Flatten-the-specific-annotaiton-in-the-PDF-document/.NET/Flatten-the-specific-annotaiton-in-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get all the pages
foreach (PdfLoadedPage loadedPage in loadedDocument.Pages)
{
    //Flatten all the annotations in the page
    foreach (PdfLoadedAnnotation annotation in loadedPage.Annotations)
    {
        //Check for the circle annotation
        if (annotation is PdfLoadedCircleAnnotation)
        {
            //Flatten the circle annotation
            annotation.Flatten = true;
        }
    }
}

//Save the document
loadedDocument.Save("Output.pdf");
//Closes the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");
//Get all the pages
foreach (PdfLoadedPage loadedPage in loadedDocument.Pages)
{
//Flatten all the annotations in the page
foreach (PdfLoadedAnnotation annotation in loadedPage.Annotations)
{
//Check for the circle annotation
if (annotation is PdfLoadedCircleAnnotation)
{
//Flatten the circle annotation
annotation.Flatten = true;
}
}
}
//Save and close the PDF document instance
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("input.pdf")
'Get all the pages
For Each loadedPage As PdfLoadedPage In loadedDocument.Pages
	'Flatten all the annotations in the page
	For Each annotation As PdfLoadedAnnotation In loadedPage.Annotations
		'Check for the circle annotation
		If TypeOf annotation Is PdfLoadedCircleAnnotation Then
			'Flatten the circle annotation
			annotation.Flatten = True
		End If
	Next
Next

'Save and close the PDF document instance
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Flatten-the-specific-annotaiton-in-the-PDF-document).

To flatten pop-up annotation [Flatten](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedAnnotationCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedAnnotationCollection_Flatten) property to an existing PDF document using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.The following code example explain this.
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Flatten-popup-annotation-in-the-PDF-document/.NET/Flatten-popup-annotation-in-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get all the pages
foreach (PdfLoadedPage loadedPage in loadedDocument.Pages)
{
    foreach (PdfLoadedAnnotation annotation in loadedPage.Annotations)
    {
        if (annotation is PdfLoadedPopupAnnotation)
        {
            //Enable the flatten annotation
            annotation.Flatten = true;
            //Enable flatten for the pop-up window annotation
            annotation.FlattenPopUps = true;
        }
    }
}

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document
loadedDocument.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("PopupAnnotation.pdf");
//Get all the pages
foreach(PdfLoadedPage loadedPage in loadedDocument.Pages)
{
    foreach(PdfLoadedAnnotation annotation in loadedPage.Annotations)
    {
        if(annotation is PdfLoadedPopupAnnotation)
        {
            //Enable the flatten annotation
            annotation.Flatten = true;
            //Enable flatten for the pop-up window annotation
            annotation.FlattenPopUps = true;
        }
    }
}

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("PopupAnnotation.pdf")
'Get all the pages
For Each loadedPage As PdfLoadedPage In loadedDocument.Pages
    For Each annotation As PdfLoadedAnnotation In loadedPage.Annotations
        If TypeOf annotation Is PdfLoadedPopupAnnotation Then
            'Enable the flatten annotation
            annotation.Flatten = True
            'Enable flatten for the pop-up window annotation
            annotation.FlattenPopUps = True
        End If
    Next
Next

'Save the document
loadedDocument.Save("Output.pdf")
'Close the document
loadedDocument.Close(True)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Flatten-popup-annotation-in-the-PDF-document).

### Flattening redaction annotation

To flatten the redaction annotation in PDF document, use the following code example. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the annotation from annotation collection. 
foreach (PdfAnnotation annot in loadedDocument.Pages[0].Annotations)
{
    //Check for the Redaction annotation.
    if (annot is PdfLoadedRedactionAnnotation)
    {
        //Get the redaction annotation. 
        PdfLoadedRedactionAnnotation redactAnnot = annot as PdfLoadedRedactionAnnotation;

        //Flatten the redaction annotation. 
        redactAnnot.Flatten = true;
    }
}
loadedDocument.Redact();

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the annotation from annotation collection. 
foreach (PdfAnnotation annot in loadedDocument.Pages[0].Annotations)
{
    //Check for the Redaction annotation.
    if (annot is PdfLoadedRedactionAnnotation)
    {
        //Get the redaction annotation. 
        PdfLoadedRedactionAnnotation redactAnnot = annot as PdfLoadedRedactionAnnotation;

        //Flatten the redaction annotation.
        redactAnnot.Flatten = true;

    }
}

//Save the document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document. 
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("../../Data/Input.pdf")

'Get the annotation from annotation collection. 
For Each annot As PdfAnnotation In loadedDocument.Pages(0).Annotations

    'Check for redaction annotation. 
    If TypeOf annot Is PdfLoadedRedactionAnnotation Then

        'Load the redaction annotation. 
        Dim redactAnnot As PdfLoadedRedactionAnnotation = TryCast(annot, PdfLoadedRedactionAnnotation)

        'Flatten the redaction annotation.
        redactAnnot.Flatten = True

    End If

Next

'Save the PDF document. 
loadedDocument.Save("Output.pdf")
'Close the PDF document. 
loadedDocument.Close()

{% endhighlight %}

{% endtabs %}

N> To flatten the redaction annotation from PDF document in ASP.NET Core, you need to include the Syncfusion.Pdf.Imaging.Portable assembly reference in the .NET Core project. 

### Flattening annotations without calling save method 

Annotations can be flattened by removing the existing annotation and replacing it with graphic objects that would resemble the annotation and cannot be edited.

This can be achieved by calling the [FlattenAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FlattenAnnotations) method. Please refer to the sample for flattening all the annotations in the PDF document without calling the [save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Save) method.

To flatten the annotation without pop-ups [FlattenAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FlattenAnnotations) method to an existing PDF document using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.The following code example explain this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Flattening-annotations-without-calling-save-method/.NET/Flattening-annotations-without-calling-save-method/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Flatten all the annotations without popups in the document
loadedDocument.FlattenAnnotations();

//Save the document
loadedDocument.Save("Output.pdf");
//Closes the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");

//Flatten all the annotations without popups in the document
loadedDocument.FlattenAnnotations();

//Save and close the PDF document instance
loadedDocument.Save("output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("input.pdf")

'Flatten all the annotations without popups in the document
loadedDocument.FlattenAnnotations()
Next

'Save and close the PDF document instance
loadedDocument.Save("output.pdf")
loadedDocument.Close(True)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Flattening-annotations-without-calling-save-method).

To flatten the annotation with pop-ups [FlattenAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FlattenAnnotations_System_Boolean_) method to an existing PDF document using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.The following code example explain this.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Flattening-annotations-with-popups-in-PDF/.NET/Flattening-annotations-with-popups-in-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Flatten all the annotations without popups in the document
loadedDocument.FlattenAnnotations(true);

//Save the document
loadedDocument.Save("Output.pdf");
//Closes the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");
//Flatten all the annotations with popups in the document
loadedDocument.FlattenAnnotations(true);
//Save and close the PDF document instance
loadedDocument.Save("output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("input.pdf")
'Flatten all the annotations without popups in the document 
loadedDocument.FlattenAnnotations(true)
'Save and close the PDF document instance
loadedDocument.Save("output.pdf")
loadedDocument.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Flattening-annotations-with-popups-in-PDF).

### Flatten specific types of annotations

To flatten specific types of annotations in a PDF document, use the [FlattenAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FlattenAnnotations) method available in the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) instance by providing an array of the desired annotation types. Refer to the following code example for more details.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Flatten-specific-types-of-annotations/.NET/Flatten-specific-types-of-annotations/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"))
{
    // Specify the annotation types to flatten
    PdfLoadedAnnotationType[] pdfLoadedAnnotationTypes = new PdfLoadedAnnotationType[]
    {
                PdfLoadedAnnotationType.PolygonAnnotation
    };

    // Flatten the selected annotations
    loadedDocument.FlattenAnnotations(pdfLoadedAnnotationTypes);

    //Save the document
    loadedDocument.Save("Output.pdf");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"))
{
    // Specify the annotation types to flatten
    PdfLoadedAnnotationType[] pdfLoadedAnnotationTypes = new PdfLoadedAnnotationType[]
    {
                PdfLoadedAnnotationType.PolygonAnnotation
    };

    // Flatten the selected annotations
    loadedDocument.FlattenAnnotations(pdfLoadedAnnotationTypes);

    //Save the document
    loadedDocument.Save("Output.pdf");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

    ' Load the PDF document from a file path
    Dim loadedDocument As New PdfLoadedDocument("C:\path\to\input.pdf")

    ' Specify the annotation types to flatten
    Dim pdfLoadedAnnotationTypes As PdfLoadedAnnotationType() = {
        PdfLoadedAnnotationType.PolygonAnnotation
    }

    ' Flatten the selected annotations
    loadedDocument.FlattenAnnotations(pdfLoadedAnnotationTypes)

    ' Save the flattened PDF document to a file path
    loadedDocument.Save("C:\path\to\output.pdf")

    ' Close the document instance
    loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Flatten-specific-types-of-annotations/.NET).

## Importing annotations

### Importing annotations from FDF file

FDF stands for Forms Data Format. FDF is a file format for representing annotations present in a PDF document. You can import annotation data from the FDF file to PDF using the [ImportAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ImportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_) method in [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Importing-annotations-from-FDF-file-to-PDF-document/.NET/Importing-annotations-from-FDF-file-to-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
//Import annotation data from FDF stream
FileStream fdfStream = new FileStream("Annotations.fdf", FileMode.Open, FileAccess.Read);
lDoc.ImportAnnotations(fdfStream, AnnotationDataFormat.Fdf)

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
lDoc.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf");
//Import annotation data from FDF file
lDoc.ImportAnnotations("Annotations.fdf", AnnotationDataFormat.Fdf);
//Saves the document
lDoc.Save("Annotation.pdf");
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing;

'Loads the document
Dim lDoc As New PdfLoadedDocument("input.pdf")
'Import annotation data from FDF file
lDoc.ImportAnnotations("Annotations.fdf", AnnotationDataFormat.Fdf)
'Saves the document
lDoc.Save("Annotation.pdf")
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Importing-annotations-from-FDF-file-to-PDF-document).

### Importing annotations from XFDF file

XFDF stands for XML Forms Data Format. XFDF is the XML version of FDF for representing annotations that are contained in a PDF document. You can import annotation data from the XFDF file to PDF using the [ImportAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ImportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_) method in [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Importing-annotations-from-XFDF-file-to-PDF-document/.NET/Importing-annotations-from-XFDF-file-to-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
//Import annotation data from XFDF stream
FileStream xfdfStream = new FileStream("Annotations.xfdf", FileMode.Open, FileAccess.Read);
lDoc.ImportAnnotations(xfdfStream, AnnotationDataFormat.XFdf);

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf");
//Import annotation data from XFDF file
lDoc.ImportAnnotations("Annotations.xfdf", AnnotationDataFormat.XFdf);
//Saves the document
lDoc.Save("Annotation.pdf");
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing;

'Loads the document
Dim lDoc As New PdfLoadedDocument("input.pdf")
'Import annotation data from XFDF file
lDoc.ImportAnnotations("Annotations.xfdf", AnnotationDataFormat.XFdf)
'Saves the document
lDoc.Save("Annotation.pdf")
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Importing-annotations-from-XFDF-file-to-PDF-document).

### Importing annotations from JSON file

JSON stands for JavaScript Object Notation. It is a collection of key or value pairs and it is used for serializing and transmitting the structured data over a network connection. You can import the annotation data from the JSON file to PDF using the [ImportAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ImportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_) method in [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Importing-annotations-from-JSON-file-to-PDF-document/.NET/Importing-annotations-from-JSON-file-to-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document 
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf"); 
//Import the annotation data from the JSON stream 
FileStream jsonStream = new FileStream("Annotations.Json", FileMode.Open, FileAccess.Read); 
lDoc.ImportAnnotations(jsonStream, AnnotationDataFormat.Json); 

//Save the document
lDoc.Save("Output.pdf");
//Closes the document 
lDoc.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Loads the document 
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf"); 
//Import the annotation data from the JSON file 
lDoc.ImportAnnotations("Annotations.Json", AnnotationDataFormat.Json); 
//Saves the document 
lDoc.Save("Annotation.pdf"); 
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Loads the document 
Dim lDoc As New PdfLoadedDocument("input.pdf") 
'Import the annotation data from the JSON file 
lDoc.ImportAnnotations("Annotations.Json", AnnotationDataFormat.Json) 
'Saves the document 
lDoc.Save("Annotation.pdf") 
'close the document 
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Importing-annotations-from-JSON-file-to-PDF-document).

## Exporting annotations

### Exporting annotations to FDF file

To export annotation data to the FDF file from PDF document, you can use the [ExportAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ExportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_) method in [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Exporting-annotation-to-FDF-file-from-PDF-document/.NET/Exporting-annotation-to-FDF-file-from-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf");
//Export annotation data to FDF file
lDoc.ExportAnnotations("Annotations.fdf", AnnotationDataFormat.Fdf);
//Close the document
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf");
//Export annotation data to FDF file
lDoc.ExportAnnotations("Annotations.fdf", AnnotationDataFormat.Fdf);
//Close the document
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Loads the document
Dim lDoc As New PdfLoadedDocument("input.pdf")
'Export annotation data to FDF file
lDoc.ExportAnnotations("Annotations.fdf", AnnotationDataFormat.Fdf)
'Close the document
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Exporting-annotation-to-FDF-file-from-PDF-document).

### Exporting annotations to XFDF file

To export annotation data to the XFDF file from PDF document, you can use the [ExportAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ExportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_) method in [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Exporting-annotations-to-XFDF-file-from-PDF-document/.NET/Exporting-annotations-to-XFDF-file-from-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf");
//Export annotation data to XFDF file
lDoc.ExportAnnotations("Annotations.xfdf", AnnotationDataFormat.XFdf);
//Close the document
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf");
//Export annotation data to XFDF file
lDoc.ExportAnnotations("Annotations.xfdf", AnnotationDataFormat.XFdf);
//Close the document
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Loads the document
Dim lDoc As New PdfLoadedDocument("input.pdf")
'Export annotation data to XFDF file
lDoc.ExportAnnotations("Annotations.xfdf", AnnotationDataFormat.XFdf)
'Close the document
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Exporting-annotations-to-XFDF-file-from-PDF-document).

### Exporting annotations to JSON file

To export annotation data to the JSON file from PDF document, you can use the [ExportAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ExportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_) method in [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Exporting-annotations-to-JSON-file-from-PDF-document/.NET/Exporting-annotations-to-JSON-file-from-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Loads the document 
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf"); 
//Export the annotation data to the JSON file 
lDoc.ExportAnnotations("Annotations.Json", AnnotationDataFormat.Json); 
//Close the document 
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Loads the document 
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf"); 
//Export the annotation data to the JSON file 
lDoc.ExportAnnotations("Annotations.Json", AnnotationDataFormat.Json); 
//Close the document 
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Loads the document 
Dim lDoc As New PdfLoadedDocument("input.pdf") 
'Export the annotation data to the JSON file 
lDoc.ExportAnnotations("Annotations.Json", AnnotationDataFormat.Json) 
'Close the document 
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Exporting-annotations-to-JSON-file-from-PDF-document).

### Exporting Newly Added Annotations to a JSON File

To export newly added annotation data from a PDF document to a JSON file, use the [ExportAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ExportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_) method within the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Exporting-Newly-Added-Annotations-JSON-File/.NET/Exporting-Newly-Added-Annotations-JSON-File/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document from a file stream 
PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument("Input.pdf");
// Create a PDF free text annotation 
PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(new RectangleF(10, 0, 50, 50)); 

// Set properties for the annotation 
// Text displayed as markup
freeText.MarkupText = "Free Text with Callout"; 
// Set the text markup color
freeText.TextMarkupColor = new PdfColor(Color.Black); 
// Set font and size
freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 7f); 
// Set background color
freeText.Color = new PdfColor(Color.Yellow); 
// Set border color
freeText.BorderColor = new PdfColor(Color.Red); 
// Set border thickness
freeText.Border = new PdfAnnotationBorder(.5f); 

// Add the annotation to the first page of the PDF
pdfLoadedDocument.Pages[0].Annotations.Add(freeText);

// Export annotations to the JSON format 
pdfLoadedDocument.ExportAnnotations("Annotation.json", AnnotationDataFormat.Json); 

// Close the loaded PDF document
pdfLoadedDocument.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document from a file stream 
PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument("Input.pdf");
// Create a PDF free text annotation 
PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(new RectangleF(10, 0, 50, 50)); 

// Set properties for the annotation 
// Text displayed as markup
freeText.MarkupText = "Free Text with Callout"; 
// Set the text markup color
freeText.TextMarkupColor = new PdfColor(Color.Black); 
// Set font and size
freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 7f); 
// Set background color
freeText.Color = new PdfColor(Color.Yellow); 
// Set border color
freeText.BorderColor = new PdfColor(Color.Red); 
// Set border thickness
freeText.Border = new PdfAnnotationBorder(.5f); 

// Add the annotation to the first page of the PDF
pdfLoadedDocument.Pages[0].Annotations.Add(freeText);

// Export annotations to the JSON format 
pdfLoadedDocument.ExportAnnotations("Annotation.json", AnnotationDataFormat.Json); 

// Close the loaded PDF document
pdfLoadedDocument.Close(true); 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document from a file stream 
Dim pdfLoadedDocument As New PdfLoadedDocument("Input.pdf") 
' Create a PDF free text annotation 
Dim freeText As New PdfFreeTextAnnotation(New RectangleF(10, 0, 50, 50)) 

' Set properties for the annotation 
' Text displayed as markup 
freeText.MarkupText = "Free Text with Callout" 
' Set the text markup color 
freeText.TextMarkupColor = New PdfColor(Color.Black) 
' Set font and size 
freeText.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 7.0F) 
' Set background color 
freeText.Color = New PdfColor(Color.Yellow) 
' Set border color 
freeText.BorderColor = New PdfColor(Color.Red) 
' Set border thickness 
freeText.Border = New PdfAnnotationBorder(0.5F)

' Add the annotation to the first page of the PDF
pdfLoadedDocument.Pages(0).Annotations.Add(freeText) 

' Export annotations to the JSON format 
pdfLoadedDocument.ExportAnnotations("Annotation.json", AnnotationDataFormat.Json) 

' Close the loaded PDF document  
pdfLoadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Exporting-Newly-Added-Annotations-JSON-File/.NET).

### Exporting Newly Added Annotations to an FDF File

To export newly added annotation data from a PDF document to an FDF (Forms Data Format) file, you can use the [ExportAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ExportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_) method in the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Exporting-Newly-Added-Annotations-FDF-File/.NET/Exporting-Newly-Added-Annotations-FDF-File/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document from a file stream 
PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument("Input.pdf");
// Create a PDF free text annotation 
PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(new RectangleF(10, 0, 50, 50)); 

// Set properties for the annotation 
// Text displayed as markup
freeText.MarkupText = "Free Text with Callout"; 
// Set the text markup color
freeText.TextMarkupColor = new PdfColor(Color.Black); 
// Set font and size
freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 7f); 
// Set background color
freeText.Color = new PdfColor(Color.Yellow); 
// Set border color
freeText.BorderColor = new PdfColor(Color.Red); 
// Set border thickness
freeText.Border = new PdfAnnotationBorder(.5f); 

// Add the annotation to the first page of the PDF 
pdfLoadedDocument.Pages[0].Annotations.Add(freeText);

// Export annotations to the FDF format 
pdfLoadedDocument.ExportAnnotations("Annotation.fdf", AnnotationDataFormat.Fdf); 

// Close the loaded PDF document
pdfLoadedDocument.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document from a file stream 
PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument("Input.pdf");
// Create a PDF free text annotation 
PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(new RectangleF(10, 0, 50, 50)); 

// Set properties for the annotation 
// Text displayed as markup
freeText.MarkupText = "Free Text with Callout"; 
// Set the text markup color
freeText.TextMarkupColor = new PdfColor(Color.Black); 
// Set font and size
freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 7f); 
// Set background color
freeText.Color = new PdfColor(Color.Yellow); 
// Set border color
freeText.BorderColor = new PdfColor(Color.Red); 
// Set border thickness
freeText.Border = new PdfAnnotationBorder(.5f); 

// Add the annotation to the first page of the PDF 
pdfLoadedDocument.Pages[0].Annotations.Add(freeText);

// Export annotations to the FDF format 
pdfLoadedDocument.ExportAnnotations("Annotation.fdf", AnnotationDataFormat.Fdf); 

// Close the loaded PDF document
pdfLoadedDocument.Close(true); 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document from a file stream 
Dim pdfLoadedDocument As New PdfLoadedDocument("Input.pdf") 
' Create a PDF free text annotation 
Dim freeText As New PdfFreeTextAnnotation(New RectangleF(10, 0, 50, 50)) 

' Set properties for the annotation 
' Text displayed as markup 
freeText.MarkupText = "Free Text with Callout" 
' Set the text markup color 
freeText.TextMarkupColor = New PdfColor(Color.Black) 
' Set font and size 
freeText.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 7.0F) 
' Set background color 
freeText.Color = New PdfColor(Color.Yellow) 
' Set border color 
freeText.BorderColor = New PdfColor(Color.Red) 
' Set border thickness 
freeText.Border = New PdfAnnotationBorder(0.5F)

' Add the annotation to the first page of the PDF 
pdfLoadedDocument.Pages(0).Annotations.Add(freeText) 

' Export annotations to the FDF format 
pdfLoadedDocument.ExportAnnotations("Annotation.fdf", AnnotationDataFormat.Fdf) 

' Close the loaded PDF document  
pdfLoadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Exporting-Newly-Added-Annotations-FDF-File/.NET).

### Exporting Newly Added Annotations to an XFDF File

To export newly added annotation data from a PDF document to an XFDF (XML Forms Data Format) file, you can use the [ExportAnnotations](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ExportAnnotations_System_IO_Stream_Syncfusion_Pdf_Parsing_AnnotationDataFormat_) method in the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Exporting-Newly-Added-Annotations-XFDF-File/.NET/Exporting-Newly-Added-Annotations-XFDF-File/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document from a file stream 
PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument("Input.pdf");
// Create a PDF free text annotation 
PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(new RectangleF(10, 0, 50, 50)); 

// Set properties for the annotation 
// Text displayed as markup
freeText.MarkupText = "Free Text with Callout"; 
// Set the text markup color
freeText.TextMarkupColor = new PdfColor(Color.Black); 
// Set font and size
freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 7f); 
// Set background color
freeText.Color = new PdfColor(Color.Yellow); 
// Set border color
freeText.BorderColor = new PdfColor(Color.Red); 
// Set border thickness
freeText.Border = new PdfAnnotationBorder(.5f); 

// Add the annotation to the first page of the PDF 
pdfLoadedDocument.Pages[0].Annotations.Add(freeText);

// Export annotations to the XFDF format 
pdfLoadedDocument.ExportAnnotations("Annotation.xfdf", AnnotationDataFormat.XFdf); 

// Close the loaded PDF document
pdfLoadedDocument.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document from a file stream 
PdfLoadedDocument pdfLoadedDocument = new PdfLoadedDocument("Input.pdf");
// Create a PDF free text annotation 
PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(new RectangleF(10, 0, 50, 50)); 

// Set properties for the annotation 
// Text displayed as markup
freeText.MarkupText = "Free Text with Callout"; 
// Set the text markup color
freeText.TextMarkupColor = new PdfColor(Color.Black); 
// Set font and size
freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 7f); 
// Set background color
freeText.Color = new PdfColor(Color.Yellow); 
// Set border color
freeText.BorderColor = new PdfColor(Color.Red); 
// Set border thickness
freeText.Border = new PdfAnnotationBorder(.5f); 

// Add the annotation to the first page of the PDF 
pdfLoadedDocument.Pages[0].Annotations.Add(freeText);

// Export annotations to the XFDF format 
pdfLoadedDocument.ExportAnnotations("Annotation.xfdf", AnnotationDataFormat.XFdf); 

// Close the loaded PDF document
pdfLoadedDocument.Close(true); 


{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document from a file stream 
Dim pdfLoadedDocument As New PdfLoadedDocument("Input.pdf") 
' Create a PDF free text annotation 
Dim freeText As New PdfFreeTextAnnotation(New RectangleF(10, 0, 50, 50)) 

' Set properties for the annotation 
' Text displayed as markup 
freeText.MarkupText = "Free Text with Callout" 
' Set the text markup color 
freeText.TextMarkupColor = New PdfColor(Color.Black) 
' Set font and size 
freeText.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 7.0F) 
' Set background color 
freeText.Color = New PdfColor(Color.Yellow) 
' Set border color 
freeText.BorderColor = New PdfColor(Color.Red) 
' Set border thickness 
freeText.Border = New PdfAnnotationBorder(0.5F)

' Add the annotation to the first page of the PDF 
pdfLoadedDocument.Pages(0).Annotations.Add(freeText) 

' Export annotations to the XFDF format 
pdfLoadedDocument.ExportAnnotations("Annotation.xfdf", AnnotationDataFormat.XFdf) 

' Close the loaded PDF document  
pdfLoadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Exporting-Newly-Added-Annotations-XFDF-File/.NET).

N> In our PDF library, font resources are embedded into the document during the save operation. If a newly created annotation uses the [PdfTrueTypeFont](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTrueTypeFont.html), its font resources will not be exported when exporting the [PdfAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotation.html). To ensure proper export of [PdfAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotation.html) with [PdfTrueTypeFont](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTrueTypeFont.html), we recommend saving the document before exporting the annotation.

## Get and set custom values for PDF annotations

The Syncfusion<sup>&reg;</sup> PDF library provides robust functionality to manipulate PDF documents, including annotations. This document focuses on using the [GetValues](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedAnnotation_GetValues_System_String_) and [SetValues](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedAnnotation_SetValues_System_String_System_String_) methods with PDF annotations to retrieve and set annotation-specific values.

The following code example demonstrates how to get values from a PDF annotation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Get-value-from-PDF-annotation/.NET/Get-value-from-PDF-annotation/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;

// Load the PDF document from the input stream
using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"))
{
    // Access the first page of the document
    PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;
    // Get the collection of annotations from the page
    PdfLoadedAnnotationCollection annotations = page.Annotations;

    // Check if at least one annotation exists and it's a popup annotation
    if (annotations.Count > 0 && annotations[0] is PdfLoadedPopupAnnotation annotation)
    {
        // Get the custom value from the annotation
        List<string> customValue = annotation.GetValues("custom");

        foreach (string value in customValue)
        {
            // Print the custom value to the console
            Console.WriteLine("Custom value from annotation: " + value);
        }
    }
    // Close the document and release resources
    loadedDocument.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;

// Load the PDF document from the input stream
using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"))
{
    // Access the first page of the document
    PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;
    // Get the collection of annotations from the page
    PdfLoadedAnnotationCollection annotations = page.Annotations;

    // Check if at least one annotation exists and it's a popup annotation
    if (annotations.Count > 0 && annotations[0] is PdfLoadedPopupAnnotation annotation)
    {
        // Get the custom value from the annotation
        List<string> customValue = annotation.GetValues("custom");

        foreach (string value in customValue)
        {
            // Print the custom value to the console
            Console.WriteLine("Custom value from annotation: " + value);
        }
    }
    // Close the document and release resources
    loadedDocument.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

' Load the PDF document from the input stream
Using loadedDocument As New PdfLoadedDocument("Input.pdf")
' Access the first page of the document
Dim page As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

' Get the collection of annotations from the page
Dim annotations As PdfLoadedAnnotationCollection = page.Annotations

' Check if at least one annotation exists and it's a popup annotation
If annotations.Count > 0 AndAlso TypeOf annotations(0) Is PdfLoadedPopupAnnotation Then
Dim annotation As PdfLoadedPopupAnnotation = TryCast(annotations(0), PdfLoadedPopupAnnotation)

' Get the custom value(s) from the annotation
Dim customValues As List(Of String) = annotation.GetValues("custom")

' Print the custom values to the console
For Each value As String In customValues
Console.WriteLine("Custom value from annotation: " & value)
Next
End If

' Close the document and release resources
loadedDocument.Close(True)
End Using

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Get-value-from-PDF-annotation/.NET).

The following code example demonstrates how to set values from a PDF annotation.
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Set-value-from-PDF-annotation/.NET/Set-value-from-PDF-annotation/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;

// Load the PDF document from the input stream
using (PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf"))
{
    // Access the first page of the document
    PdfLoadedPage page = ldoc.Pages[0] as PdfLoadedPage;

    // Get the collection of annotations from the page
    PdfLoadedAnnotationCollection annotations = page.Annotations;

    // Check if at least one annotation exists and it's a popup annotation
    if (annotations.Count > 0 && annotations[0] is PdfLoadedPopupAnnotation annotation)
    {
        // Set a custom key-value pair in the annotation's metadata
        annotation.SetValues("custom", "This is the custom data for the annotation");
    }
    // Save changes to a new PDF file
    ldoc.Save("Output.pdf");

    // Close the document and release resources
    ldoc.Close(true);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;

// Load the PDF document from the input stream
using (PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf"))
{
    // Access the first page of the document
    PdfLoadedPage page = ldoc.Pages[0] as PdfLoadedPage;

    // Get the collection of annotations from the page
    PdfLoadedAnnotationCollection annotations = page.Annotations;

    // Check if at least one annotation exists and it's a popup annotation
    if (annotations.Count > 0 && annotations[0] is PdfLoadedPopupAnnotation annotation)
    {
        // Set a custom key-value pair in the annotation's metadata
        annotation.SetValues("custom", "This is the custom data for the annotation");
    }
    // Save changes to a new PDF file
    ldoc.Save("Output.pdf");

    // Close the document and release resources
    ldoc.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

Load the PDF document from the file
Using ldoc As New PdfLoadedDocument("Input.pdf")

' Access the first page of the document
Dim page As PdfLoadedPage = TryCast(ldoc.Pages(0), PdfLoadedPage)

' Get the collection of annotations from the page
Dim annotations As PdfLoadedAnnotationCollection = page.Annotations

' Check if at least one annotation exists and it's a popup annotation
If annotations.Count > 0 AndAlso TypeOf annotations(0) Is PdfLoadedPopupAnnotation Then
    Dim annotation As PdfLoadedPopupAnnotation = CType(annotations(0), PdfLoadedPopupAnnotation)

    ' Set a custom key-value pair in the annotation's metadata
    annotation.SetValues("custom", "This is the custom data for the annotation")
End If

' Save changes to a new PDF file
ldoc.Save("Output.pdf")

' Close the document and release resources
ldoc.Close(True)
End Using

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Set-value-from-PDF-annotation/.NET).

## Setting transparency for annotations 

The Syncfusion<sup>&reg;</sup> PDF Library enables you to adjust the transparency of annotations using the [Opacity](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotation.html#Syncfusion_Pdf_Interactive_PdfAnnotation_Opacity) property. This property defines the annotation's transparency level, where a value of 0 makes it fully transparent, and 1 makes it completely opaque.

The following code example how to add transparency to the PDF annotation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Adding-transparency-for-annotations/.NET/Adding-transparency-for-annotations/Program.cs" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf;
using Syncfusion.Drawing;

// Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a new page.
PdfPage page = document.Pages.Add();
//Create a new rectangle
RectangleF textAnnotationBounds = new RectangleF(10, 40, 100, 30);
//Create a new free text annotation.
PdfFreeTextAnnotation textAnnotation = new PdfFreeTextAnnotation(textAnnotationBounds);
//Set the text and font
textAnnotation.MarkupText = "Text Annotation";
textAnnotation.Font = new PdfStandardFont(PdfFontFamily.Courier, 10);

//Set transparency
textAnnotation.Opacity = 0.5F;

//Set the line caption type.
textAnnotation.AnnotationIntent = PdfAnnotationIntent.FreeTextCallout;
//Add this annotation to the PDF page.
page.Annotations.Add(textAnnotation);

//Save the document
document.Save("Output.pdf");
 //Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf;
using System.Drawing;

// Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a new page.
PdfPage page = document.Pages.Add();
//Create a new rectangle
RectangleF textAnnotationBounds = new RectangleF(10, 40, 100, 30);
//Create a new free text annotation.
PdfFreeTextAnnotation textAnnotation = new PdfFreeTextAnnotation(textAnnotationBounds);
//Set the text and font
textAnnotation.MarkupText = "Text Annotation";
textAnnotation.Font = new PdfStandardFont(PdfFontFamily.Courier, 10);

//Set transparency
textAnnotation.Opacity = 0.5F;

//Set the line caption type.
textAnnotation.AnnotationIntent = PdfAnnotationIntent.FreeTextCallout;
//Add this annotation to the PDF page.
page.Annotations.Add(textAnnotation);
//Save the document to disk.
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document.
Dim document As New PdfDocument()
' Add a new page.
Dim page As PdfPage = document.Pages.Add()
' Create a new rectangle
Dim textAnnotationBounds As New RectangleF(10, 40, 100, 30)
' Create a new free text annotation.
Dim textAnnotation As New PdfFreeTextAnnotation(textAnnotationBounds)
' Set the text and font
textAnnotation.MarkupText = "Text Annotation"
textAnnotation.Font = New PdfStandardFont(PdfFontFamily.Courier, 10)

' Set transparency
textAnnotation.Opacity = 0.5F

' Set the line caption type.
textAnnotation.AnnotationIntent = PdfAnnotationIntent.FreeTextCallout
' Add this annotation to the PDF page.
page.Annotations.Add(textAnnotation)
' Save the document to disk.
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Adding-transparency-for-annotations/.NET).

## Setting Annotation Intent in PdfFreeTextAnnotation

The [PdfAnnotationIntent.FreeTextTypeWriter](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotationIntent.html#fields) value specifies that a `free text annotation` in a PDF should behave like a `typewriter-style input field`. This intent is especially useful for simulating manual typing on forms or documents, enabling users to add clear, typed comments or responses.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

// Create a new PDF document
using (PdfDocument document = new PdfDocument())
{
    // Add a page
    PdfPage page = document.Pages.Add();

    // Define the bounds for the annotation
    RectangleF bounds = new RectangleF(100, 100, 200, 50);

    // Create a FreeText annotation
    PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(bounds);
    // Add content.
    freeText.Text = "Add Free Text Annotation with Intent";
    // Set the annotation intent to TypeWriter
    freeText.AnnotationIntent = PdfAnnotationIntent.FreeTextTypeWriter;

    // Customize appearance
    freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
    freeText.TextMarkupColor = Color.Black;
    freeText.BorderColor = Color.Gray;
    freeText.Color = Color.LightYellow;

    // Add the annotation to the page
    page.Annotations.Add(freeText);

    // Save the document
    document.Save("Output.pdf");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

// Create a new PDF document
using (PdfDocument document = new PdfDocument())
{
    // Add a page
    PdfPage page = document.Pages.Add();

    // Define the bounds for the annotation
    RectangleF bounds = new RectangleF(100, 100, 200, 50);

    // Create a FreeText annotation
    PdfFreeTextAnnotation freeText = new PdfFreeTextAnnotation(bounds);
    // Add content.
    freeText.Text = "Add Free Text Annotation with Intent";
    // Set the annotation intent to TypeWriter
    freeText.AnnotationIntent = PdfAnnotationIntent.FreeTextTypeWriter;

    // Customize appearance
    freeText.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
    freeText.TextMarkupColor = Color.Black;
    freeText.BorderColor = Color.Gray;
    freeText.Color = Color.LightYellow;

    // Add the annotation to the page
    page.Annotations.Add(freeText);

    // Save the document
    document.Save("Output.pdf");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

' Create a new PDF document
Using document As New PdfDocument()

    ' Add a page
    Dim page As PdfPage = document.Pages.Add()

    ' Define the bounds for the annotation
    Dim bounds As New RectangleF(100, 100, 200, 50)

    ' Create a FreeText annotation
    Dim freeText As New PdfFreeTextAnnotation(bounds)

    ' Add content
    freeText.Text = "Add Free Text Annotation with Intent"

    ' Set the annotation intent to TypeWriter
    freeText.AnnotationIntent = PdfAnnotationIntent.FreeTextTypeWriter

    ' Customize appearance
    freeText.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 12)
    freeText.TextMarkupColor = Color.Black
    freeText.BorderColor = Color.Gray
    freeText.Color = Color.LightYellow

    ' Add the annotation to the page
    page.Annotations.Add(freeText)

    ' Save the document
    document.Save("Output.pdf")
End Using

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Adding comments and review status to the PDF annotation

The PDF annotations may have an author-specific state associated with them. The state is not specified in the annotation itself, but it represents a separate text annotation ([Popup Annotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfPopupAnnotation.html)).

The Essential<sup>&reg;</sup> PDF supports adding the annotation comments and review status to the PDF document annotations.

<b> Adding comments to the PDF annotation </b>

The following code example explains how to add comments to the PDF annotation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-comments-to-the-PDF-annotation/.NET/Add-comments-to-the-PDF-annotation/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Create a new page
PdfPage page = document.Pages.Add();

//Create new rectangle annotation
PdfRectangleAnnotation rectangleAnnotation = new PdfRectangleAnnotation(new RectangleF(0, 0, 100, 50), "Rectangle Annotation");
//Set author
rectangleAnnotation.Author = "Syncfusion";
rectangleAnnotation.Border.BorderWidth = 1;
rectangleAnnotation.Color = Color.Red;
rectangleAnnotation.ModifiedDate = DateTime.Now;

//Create a new comment annotation
PdfPopupAnnotation comment = new PdfPopupAnnotation();
//Set author
comment.Author = "John";
//Set Text
comment.Text = "This is first comment";
//Set modification date
comment.ModifiedDate = DateTime.Now;
//Set subject
comment.Subject = "Annotation Comments";
//Add the comment to the annotation
rectangleAnnotation.Comments.Add(comment);
//Add the annotation to the PDF page
page.Annotations.Add(rectangleAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Create a new page
PdfPage page = document.Pages.Add();

//Create new rectangle annotation
PdfRectangleAnnotation rectangleAnnotation = new PdfRectangleAnnotation(new RectangleF(0, 0, 100, 50), "Rectangle Annotation");
//Set author
rectangleAnnotation.Author = "Syncfusion";
rectangleAnnotation.Border.BorderWidth = 1;
rectangleAnnotation.Color = Color.Red;
rectangleAnnotation.ModifiedDate = DateTime.Now;

//Create a new comment annotation
PdfPopupAnnotation comment = new PdfPopupAnnotation();
//Set author
comment.Author = "John";
//Set comment text
comment.Text = "This is first comment";
//Set modification date
comment.ModifiedDate = DateTime.Now;
//Set subject
comment.Subject = "Annotation Comments";
//Add the comments to the annotation
rectangleAnnotation.Comments.Add(comment);
//Add the annotation to the PDF page
page.Annotations.Add(rectangleAnnotation);

//Save the document to disk
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Create a new page
Dim page As PdfPage = document.Pages.Add

'Create new rectangle annotation
Dim rectangleAnnotation As PdfRectangleAnnotation = New PdfRectangleAnnotation(New RectangleF(0, 0, 100, 50), "Rectangle Annotation")
'Set author
rectangleAnnotation.Author = "Syncfusion"
rectangleAnnotation.Border.BorderWidth = 1
rectangleAnnotation.Color = Color.Red
rectangleAnnotation.ModifiedDate = DateTime.Now

'Create a new comment annotation
Dim comment As PdfPopupAnnotation = New PdfPopupAnnotation
'Set author
comment.Author = "John"
'Set Text
comment.Text = "This is first comment"
'Set modification date.
comment.ModifiedDate = DateTime.Now
'Set subject
comment.Subject = "Annotation Comments"
'Add the  comment to the annotation.
rectangleAnnotation.Comments.Add(comment)
'Add the annotation to the PDF page.
page.Annotations.Add(rectangleAnnotation)

'Save the document to disk.
document.Save("Output.pdf")
'Close the document
document.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-comments-to-the-PDF-annotation).

To add comments [PdfPopupAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfPopupAnnotation.html) class to an existing PDF document using [PDFLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.The following code example explain this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-comments-to-the-existing-PDF-annotation/.NET/Add-comments-to-the-existing-PDF-annotation/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = lDoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;

//Create a new comment annotation
PdfPopupAnnotation comment = new PdfPopupAnnotation();
//Set author
comment.Author = "John";
//Set Text
comment.Text = "This is first comment";
//Set modification date
comment.ModifiedDate = DateTime.Now;
//Set subject
comment.Subject = "Annotation Comments";
//Add the comments to the annotation
loadedRectangleAnnotation.Comments.Add(comment);

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing PDF annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;

//Create a new comment annotation
PdfPopupAnnotation comment = new PdfPopupAnnotation();
//Set author
comment.Author = "John";
//Set Text
comment.Text = "This is first comment";
//Set modification date
comment.ModifiedDate = DateTime.Now;
//Set subject
comment.Subject = "Annotation Comments";
//Add the comment to the annotation
loadedRectangleAnnotation.Comments.Add(comment);

//Save the document
ldoc.Save("Output.pdf");
//Close the document
ldoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the PDF document
Dim ldoc As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the existing PDF page
Dim lpage As PdfLoadedPage = CType(ldoc.Pages(0),PdfLoadedPage)
'Get the existing annotations
Dim annots As PdfLoadedAnnotationCollection = lpage.Annotations
'Get the existing rectangle annotation
Dim loadedRectangleAnnotation As PdfLoadedRectangleAnnotation = CType(annots(0),PdfLoadedRectangleAnnotation)

'Get the existing rectangle annotation
Dim comment As PdfPopupAnnotation = New PdfPopupAnnotation
'Set author
comment.Author = "John"
'Set Text
comment.Text = "This is first comment"
'Set modification date
comment.ModifiedDate = DateTime.Now
'Set subject
comment.Subject = "Annotation Comments"
'Add the comment to the annotation.
loadedRectangleAnnotation.Comments.Add(comment)

'Save the document
ldoc.Save("Output.pdf")
'Close the document
ldoc.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-comments-to-the-existing-PDF-annotation).

<b> Adding review status to the PDF annotation </b>

<table border="1">
<th style="font-size:14px" width="100px">State model</th>
<th style="font-size:14px">State</th>
<th style="font-size:14px">Description</th>
<tr>
    <td>Marked</td>
    <td>Marked</td>
    <td>The annotation has been marked by the user.</td>
</tr>
<tr>
    <td></td>
    <td>Unmarked</td>
    <td>The annotation has not been marked by the user (the default).</td>
</tr>
<tr>
    <td>Review</td>
    <td>Accepted</td>
    <td>The user agrees with the change.</td>
</tr>
<tr>
    <td></td>
    <td>Rejected</td>
    <td>The user disagrees with the change.</td>
</tr>
<tr>
    <td></td>
    <td>Canceled</td>
    <td>The change has been canceled.</td>
</tr>
<tr>
    <td></td>
    <td>Completed</td>
    <td>The changes has been completed.</td>
</tr>
<tr>
    <td></td>
    <td>None</td>
    <td>The user has indicated nothing about the change (the default).</td>
</tr>

</table>

You can add a review status in a newly created PDF annotation using [PdfAnnotationState](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotationState.html) Enum as shown the following code snippet.
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-a-review-status-in-a-newly-created-PDF-annotation/.NET/Add-a-review-status-in-a-newly-created-PDF-annotation/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Create a new page
PdfPage page = document.Pages.Add();

//Create new rectangle annotation
PdfRectangleAnnotation rectangleAnnotation = new PdfRectangleAnnotation(new RectangleF(0, 0, 100, 50), "Rectangle Annotation");
//Set author
rectangleAnnotation.Author = "Syncfusion";
rectangleAnnotation.Border.BorderWidth = 1;
rectangleAnnotation.Color = Color.Red;
rectangleAnnotation.ModifiedDate = DateTime.Now;

//Create a new review annotation
PdfPopupAnnotation review = new PdfPopupAnnotation();
//Set author
review.Author = "John";
//Set review state model
review.StateModel = PdfAnnotationStateModel.Review;
//Set review state
review.State = PdfAnnotationState.Accepted;
//Set modification date
review.ModifiedDate = DateTime.Now;
//Add the review to the annotation
rectangleAnnotation.ReviewHistory.Add(review);
//Add the annotation to the PDF page
page.Annotations.Add(rectangleAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Create a new page
PdfPage page = document.Pages.Add();

//Create new rectangle annotation
PdfRectangleAnnotation rectangleAnnotation = new PdfRectangleAnnotation(new RectangleF(0, 0, 100, 50), "Rectangle Annotation");
//Set author
rectangleAnnotation.Author = "Syncfusion";
rectangleAnnotation.Border.BorderWidth = 1;
rectangleAnnotation.Color = Color.Red;
rectangleAnnotation.ModifiedDate = DateTime.Now;

//Create a new review annotation
PdfPopupAnnotation review = new PdfPopupAnnotation();
//Set author
review.Author = "John";
//Set review state model
review.StateModel = PdfAnnotationStateModel.Review;
//Set review state
review.State = PdfAnnotationState.Accepted;
//Set modification date
review.ModifiedDate = DateTime.Now;
//Add the review to the annotation
rectangleAnnotation.ReviewHistory.Add(review);
//Add the annotation to the PDF page
page.Annotations.Add(rectangleAnnotation);

//Save the document to disk
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Create a new page
Dim page As PdfPage = document.Pages.Add

'Create new rectangle annotation
Dim rectangleAnnotation As PdfRectangleAnnotation = New PdfRectangleAnnotation(New RectangleF(0, 0, 100, 50), "Rectangle Annotation")
'Set author
rectangleAnnotation.Author = "Syncfusion"
rectangleAnnotation.Border.BorderWidth = 1
rectangleAnnotation.Color = Color.Red
rectangleAnnotation.ModifiedDate = DateTime.Now

'Create a new review annotation
Dim review As PdfPopupAnnotation = New PdfPopupAnnotation
'Set author
review.Author = "John"
'Set review state model
review.StateModel = PdfAnnotationStateModel.Review
'Set review state
review.State = PdfAnnotationState.Accepted
'Set modification date.
review.ModifiedDate = DateTime.Now
'Add the review to the annotation.
rectangleAnnotation.ReviewHistory.Add(review)
'Add the annotation to the PDF page.
page.Annotations.Add(rectangleAnnotation)

'Save the document to disk.
document.Save("Output.pdf")
'Close the document
document.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-a-review-status-in-a-newly-created-PDF-annotation).

To add the review status  [PdfAnnotationState](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotationState.html) Enum to an existing PDF document using [PDFLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.The following code example explain this.
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-the-review-status-to-the-existing-PDF-annotation/.NET/Add-the-review-status-to-the-existing-PDF-annotation/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = lDoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;

//Create a new review annotation
PdfPopupAnnotation review = new PdfPopupAnnotation();
//Set author
review.Author = "John";
//Set review state model
review.StateModel = PdfAnnotationStateModel.Review;
//Set review state
review.State = PdfAnnotationState.Accepted;
//Set modification date
review.ModifiedDate = DateTime.Now;
//Add the review to the annotation
loadedRectangleAnnotation.ReviewHistory.Add(review);

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
Using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;

//Create a new review annotation
PdfPopupAnnotation review = new PdfPopupAnnotation();
//Set author
review.Author = "John";
//Set review state model
review.StateModel = PdfAnnotationStateModel.Review;
//Set review state
review.State = PdfAnnotationState.Accepted;
//Set modification date
review.ModifiedDate = DateTime.Now;
//Add the review to the annotation
loadedRectangleAnnotation.ReviewHistory.Add(review);

//Save the document
ldoc.Save("Output.pdf");
//Close the document
ldoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document
Dim ldoc As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the existing PDF page
Dim lpage As PdfLoadedPage = CType(ldoc.Pages(0),PdfLoadedPage)
'Get the existing annotations
Dim annots As PdfLoadedAnnotationCollection = lpage.Annotations
'Get the existing rectangle annotation
Dim loadedRectangleAnnotation As PdfLoadedRectangleAnnotation = CType(annots(0),PdfLoadedRectangleAnnotation)

'Get the existing rectangle annotation
Dim review As PdfPopupAnnotation = New PdfPopupAnnotation
'Set author
review.Author = "John"
'Set review state model
review.StateModel = PdfAnnotationStateModel.Review
'Set review state
review.State = PdfAnnotationState.Accepted
'Set modification date
review.ModifiedDate = DateTime.Now
'Add the review to the annotation.
loadedRectangleAnnotation.ReviewHistory.Add(review)

'Save the document
ldoc.Save("Output.pdf")
'Close the document
ldoc.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-the-review-status-to-the-existing-PDF-annotation).

## Removing comments and review status from PDF annotation

The Essential<sup>&reg;</sup> PDF supports removing comments and reviewing status from the PDF annotation.

The following code example explains how to remove comments using [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_RemoveAt_System_Int32_) method from the existing PDF annotation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Remove-commets-from-the-existing-PDF-annotation/.NET/Remove-commets-from-the-existing-PDF-annotation/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;
//Get the annotation comments collection
PdfLoadedPopupAnnotationCollection commentsCollection = loadedRectangleAnnotation.Comments;
// Remove comments by index 
commentsCollection.RemoveAt(0);

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
ldoc.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;
//Get the annotation comments collection
PdfLoadedPopupAnnotationCollection commentsCollection = loadedRectangleAnnotation.Comments;
// Remove comments by index 
commentsCollection.RemoveAt(0);

//Save the document
ldoc.Save("Output.pdf");
//Close the document
ldoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Load the PDF document
Dim ldoc As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")'Load the PDF page
'Get the existing PDF page
Dim lpage As PdfLoadedPage = CType(ldoc.Pages(0),PdfLoadedPage)
'Get the existing annotations 
Dim annots As PdfLoadedAnnotationCollection = lpage.Annotations
'Get the existing rectangle annotation
Dim loadedRectangleAnnotation As PdfLoadedRectangleAnnotation =CType(annots(0),PdfLoadedRectangleAnnotation)
'Get the annotation comments collection
Dim commentsCollection As PdfLoadedPopupAnnotationCollection = loadedRectangleAnnotation.Comments
' Remove comments by index 
commentsCollection.RemoveAt(0)

'Save the document
ldoc.Save("Output.pdf")
'Close the document
ldoc.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Remove-commets-from-the-existing-PDF-annotation).

To remove review status [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_RemoveAt_System_Int32_) method to an existing PDF document using [PDFLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The following code example explain this.
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Remove-review-status-to-the-existing-PDF-document/.NET/Remove-review-status-to-the-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;
//Get the annotation  reviewcollection
PdfLoadedPopupAnnotationCollection reviewCollection = loadedRectangleAnnotation.ReviewHistory;
//Remove review status by index 
reviewCollection.RemoveAt(0);

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
ldoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;
//Get the annotation review collection
PdfLoadedPopupAnnotationCollection reviewCollection = loadedRectangleAnnotation.ReviewHistory;
// Remove review status by index 
reviewCollection.RemoveAt(0);

//Save the document
ldoc.Save("Output.pdf");
//Close the document
ldoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Loaded the PDF document
Dim ldoc As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the existing PDF page
Dim lpage As PdfLoadedPage = CType(ldoc.Pages(0),PdfLoadedPage)
'Get the existing annotations 
Dim annots As PdfLoadedAnnotationCollection = lpage.Annotations
'Get the existing rectangle annotation
Dim loadedRectangleAnnotation As PdfLoadedRectangleAnnotation = CType(annots(0),PdfLoadedRectangleAnnotation)
'Get the annotation review collection
Dim reviewCollection As PdfLoadedPopupAnnotationCollection = loadedRectangleAnnotation.ReviewHistory
' Remove review status by index 
reviewCollection.RemoveAt(0)

ldoc.Save("Output.pdf")
'Close the document
ldoc.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Remove-review-status-to-the-existing-PDF-document).

## Modifying comments and review status 

The Essential<sup>&reg;</sup> PDF supports modifying comments using [Comments](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedRectangleAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedRectangleAnnotation_Comments) property and reviewing status using [PdfAnnotationState](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotationState.html) Enum in the PDF annotation.

The following code example explains how to modify comments in the existing PDF annotation.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Modify-comments-in-the-existing-PDF-annotation/.NET/Modify-comments-in-the-existing-PDF-annotation/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Load the PDF document page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Load the annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;
//Get the annotation comments collection
PdfLoadedPopupAnnotationCollection commentsCollection = loadedRectangleAnnotation.Comments;
//Get the modified comment
PdfLoadedPopupAnnotation loadedComments = commentsCollection[0];
//Modify the comment Text
loadedComments.Text = "This is the modified comments";

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
ldoc.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;
//Get the annotation comments collection
PdfLoadedPopupAnnotationCollection commentsCollection = loadedRectangleAnnotation.Comments;
//Get the modified comments
PdfLoadedPopupAnnotation loadedComments = commentsCollection[0];
//Modify the comments Text
loadedComments.Text = "This is the modified comment";

//Save the document
ldoc.Save("Output.pdf");
//Close the document
ldoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Load the PDF document
Dim ldoc As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the existing PDF page
Dim lpage As PdfLoadedPage = CType(ldoc.Pages(0),PdfLoadedPage)
'Get the existing annotations
Dim annots As PdfLoadedAnnotationCollection = lpage.Annotations
'Get the existing rectangle annotation
Dim loadedRectangleAnnotation As PdfLoadedRectangleAnnotation = CType(annots(0),PdfLoadedRectangleAnnotation)
'Get the annotation comments collection
Dim commentsCollection As PdfLoadedPopupAnnotationCollection = loadedRectangleAnnotation.Comments
'Get the modified comment
Dim loadedComments As PdfLoadedPopupAnnotation = commentsCollection(0)
' Modify the comment Text
loadedComments.Text = "This is the modified comment"

'Save the document
ldoc.Save("Output.pdf")
'Close the document
ldoc.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Modify-comments-in-the-existing-PDF-annotation).

To modify review status [PdfAnnotationState](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAnnotationState.html) Enum to an existing PDF document using [PDFLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.  The following code example explain this.
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Modify-review-status-to-the-existing-PDF-annotation/.NET/Modify-review-status-to-the-existing-PDF-annotation/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;
//Get the annotation review collection
PdfLoadedPopupAnnotationCollection reviewCollection = loadedRectangleAnnotation.ReviewHistory;
// Get the modified review state
PdfLoadedPopupAnnotation loadedReview = reviewCollection[0];
// Modify the review State
loadedReview.State = PdfAnnotationState.Rejected;

//Save the document
lDoc.Save("Output.pdf");
//Closes the document
ldoc.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing annotations
PdfLoadedAnnotationCollection annots = lpage.Annotations;
//Get the existing rectangle annotation
PdfLoadedRectangleAnnotation loadedRectangleAnnotation = annots[0] as PdfLoadedRectangleAnnotation;
//Get the annotation review collection
PdfLoadedPopupAnnotationCollection reviewCollection = loadedRectangleAnnotation.ReviewHistory;
// Get the modified review state
PdfLoadedPopupAnnotation loadedReview = reviewCollection[0];
// Modify the review State
loadedReview.State = PdfAnnotationState.Rejected;

//Save the document
ldoc.Save("Output.pdf");
//Close the document
ldoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Loaded the PDF document
Dim ldoc As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the existing PDF page
Dim lpage As PdfLoadedPage = CType(ldoc.Pages(0),PdfLoadedPage)
'Get the existing annotations
Dim annots As PdfLoadedAnnotationCollection = lpage.Annotations
'Get the existing rectangle annotation
Dim loadedRectangleAnnotation As PdfLoadedRectangleAnnotation = CType(annots(0),PdfLoadedRectangleAnnotation)
'Get annotation review collection
Dim reviewCollection As PdfLoadedPopupAnnotationCollection = loadedRectangleAnnotation.ReviewHistory
Dim loadedReview As PdfLoadedPopupAnnotation = reviewCollection(0)
' Modify the review State
loadedReview.State = PdfAnnotationState.Rejected

'Save the document
ldoc.Save("Output.pdf")
'Close the document
ldoc.Close(true)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Modify-review-status-to-the-existing-PDF-annotation).

## Retrieve review status and comments from PDF annotation

The PDF annotations may have an author-specific state associated with them. The state is not specified in the annotation itself, but it represents a separate text annotation ([Popup Annotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfPopupAnnotation.html)).

The Essential<sup>&reg;</sup> PDF supports retrieving the annotation comments and review history from the existing PDF document annotations.

<b> Retrieve review status from PDF annotation </b>

You can retrieve the annotation review history from the existing PDF document annotations through the [ReviewHistory](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedPopupAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedPopupAnnotation_ReviewHistory) property.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Retrieve-review-status-from-the-existing-PDF-annotations/.NET/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the existing PDF page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Get the annotation.
PdfLoadedRectangleAnnotation rectangleAnnotation = loadedPage.Annotations[0] as PdfLoadedRectangleAnnotation;

//Get the review history collection for the annotation.
PdfLoadedPopupAnnotationCollection reviewCollection = rectangleAnnotation.ReviewHistory;

//Iterate through the review history collection.
foreach (PdfLoadedPopupAnnotation review in reviewCollection)
{
    //Get the author of the annotation.
    string author = review.Author;
    //Get the state of the annotation.
    PdfAnnotationState state = review.State;
    //Get the state model of the annotation.
    PdfAnnotationStateModel model = review.StateModel;

    Console.WriteLine("Author of the reviewer: " + author + "\r\nState: " + state + "\r\nState Model: " + model);
}

//Closes the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the existing PDF page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Get the annotation.
PdfLoadedRectangleAnnotation rectangleAnnotation = loadedPage.Annotations[0] as PdfLoadedRectangleAnnotation;

//Get the review history collection for the annotation.
PdfLoadedPopupAnnotationCollection reviewCollection = rectangleAnnotation.ReviewHistory;

//Iterate through the review history collection.
foreach (PdfLoadedPopupAnnotation review in reviewCollection)
{
    //Get the author of the annotation.
    string author = review.Author;
    //Get the state of the annotation.
    PdfAnnotationState state = review.State;
    //Get the state model of the annotation.
    PdfAnnotationStateModel model = review.StateModel;

    Console.WriteLine("Author of the reviewer: " + author + "\r\nState: " + state + "\r\nState Model: " + model);
}

//Closes the document.
loadedDocument.Close(true);

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

'Get the existing PDF page.
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

'Get the annotation.
Dim rectangleAnnotation As PdfLoadedRectangleAnnotation = TryCast(loadedPage.Annotations(0), PdfLoadedRectangleAnnotation)

'Get the review history collection for the annotation.
Dim reviewCollection As PdfLoadedPopupAnnotationCollection = rectangleAnnotation.ReviewHistory

'Iterate through the review history collection.
For Each review As PdfLoadedPopupAnnotation In reviewCollection
    'Get the author of the annotation.
    Dim author As String = review.Author
    'Get the state of the annotation.
    Dim state As PdfAnnotationState = review.State
    'Get the state model of the annotation.
    Dim model As PdfAnnotationStateModel = review.StateModel

    Console.WriteLine("Author of the reviewer: " & author & vbCrLf & "State: " & state.ToString() & vbCrLf & "State Model: " & model.ToString())
Next

'Closes the document.
loadedDocument.Close(True)


{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Retrieve-review-status-from-the-existing-PDF-annotations).

<b> Retrieve comments from PDF annotation </b>

The following code example explains how to retrieve the annotation comments from the existing PDF document annotations using [Comments](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedTextMarkupAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedTextMarkupAnnotation_Comments) property.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Retrieve-the-annotation-comments-from-the-existing-PDF/.NET/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the existing PDF page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Get the annotation.
PdfLoadedRectangleAnnotation rectangleAnnotation = loadedPage.Annotations[0] as PdfLoadedRectangleAnnotation;

//Get the comments of the annotation.
PdfLoadedPopupAnnotationCollection commentsCollection = rectangleAnnotation.Comments;

//Iterate through the comments collection.
foreach (PdfLoadedPopupAnnotation comment in commentsCollection)
{
    //Get the author of the comment.
    string author = comment.Author;
    //Get the content
    string content = comment.Text;

    Console.WriteLine("Author of the comment: " + author + "\r\nContent: " + content);
}

//Closes the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the existing PDF page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Get the annotation.
PdfLoadedRectangleAnnotation rectangleAnnotation = loadedPage.Annotations[0] as PdfLoadedRectangleAnnotation;

//Get the comments of the annotation.
PdfLoadedPopupAnnotationCollection commentsCollection = rectangleAnnotation.Comments;

//Iterate through the comments collection.
foreach (PdfLoadedPopupAnnotation comment in commentsCollection)
{
    //Get the author of the comment.
    string author = comment.Author;
    //Get the content
    string content = comment.Text;

    Console.WriteLine("Author of the comment: " + author + "\r\nContent: " + content);
}

//Closes the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

'Get the existing PDF page.
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

'Get the annotation.
Dim rectangleAnnotation As PdfLoadedRectangleAnnotation = TryCast(loadedPage.Annotations(0), PdfLoadedRectangleAnnotation)

'Get the comments of the annotation.
Dim commentsCollection As PdfLoadedPopupAnnotationCollection = rectangleAnnotation.Comments

'Iterate through the comments collection.
For Each comment As PdfLoadedPopupAnnotation In commentsCollection
    'Get the author of the comment.
    Dim author As String = comment.Author
    'Get the content
    Dim content As String = comment.Text

    Console.WriteLine("Author of the comment: " & author & vbCrLf & "Content: " & content)
Next

'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Retrieve-the-annotation-comments-from-the-existing-PDF).

## Add Custom Stamp using Rubber Stamp Annotation

Essential<sup>&reg;</sup> PDF supports adding custom stamp in an existing PDF document by using the [PdfRubberStampAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRubberStampAnnotation.html) class along with different appearance settings through [PdfAppearance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAppearance.html). This custom stamp is movable and resizable.

Rubber stamp annotation displays text or graphics intended to look like it is stamped on the page with a rubber stamp. When opened, it displays a pop-up window containing the text of the associated note. 

The following code snippet explains how to add custom stamp in an existing PDF document using rubber stamp annotation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Add-custom-stamp-in-an-existing-PDF-document/.NET/Add-custom-stamp-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page from loaded PDF document
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Create a new pdf rubber stamp annotation
RectangleF rectangleF = new RectangleF(350, 20, 200, 80);
PdfRubberStampAnnotation rubberStampAnnotation = new PdfRubberStampAnnotation(rectangleF);
//Custom stamp the rubber stamp annotation
PdfSolidBrush brush = new PdfSolidBrush(new PdfColor(Color.FromArgb(255, 173, 216, 230)));
PdfPath path = RoundedRect(new RectangleF(0, 0, 200, 80), 20);
rubberStampAnnotation.Appearance.Normal.Graphics.DrawPath(brush, path);
//Add text in rubber stamp annotation
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12, PdfFontStyle.Bold);
rubberStampAnnotation.Appearance.Normal.Graphics.DrawString("DD/2018/1234567890", font, PdfBrushes.Black, new PointF(10, 20));
rubberStampAnnotation.Appearance.Normal.Graphics.DrawString(DateTime.Now.ToString("dd-MM-yyyy HH:mm:ss"), font, PdfBrushes.Black, new PointF(10, 40));
//Set the content of annotation
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation";
//Add annotation to the page
loadedPage.Annotations.Add(rubberStampAnnotation);

//Save the document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

public static PdfPath RoundedRect(RectangleF bounds, int radius)
{
    int diameter = radius * 2;
    SizeF size = new SizeF(diameter, diameter);
    RectangleF arc = new RectangleF(bounds.Location, size);
    PdfPath path = new PdfPath();
    if (radius == 0)
    {
        path.AddRectangle(bounds);
        return path;
    }
    //Draw the top left arc  
    path.AddArc(arc, 180, 90);
    //Draw the top right arc  
    arc.X = bounds.Right - diameter;
    path.AddArc(arc, 270, 90);
    //Draw the bottom right arc  
    arc.Y = bounds.Bottom - diameter;
    path.AddArc(arc, 0, 90);
    //Draw the bottom left arc 
    arc.X = bounds.Left;
    path.AddArc(arc, 90, 90);

    //Close the figure
    path.CloseFigure();
    //Return the path
    return path;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page from loaded PDF document
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Create a new pdf rubber stamp annotation
RectangleF rectangleF = new RectangleF(350, 20, 200, 80);
PdfRubberStampAnnotation rubberStampAnnotation = new PdfRubberStampAnnotation(rectangleF);
//Custom stamp the rubber stamp annotation
PdfSolidBrush brush = new PdfSolidBrush(new PdfColor(Color.LightBlue));
PdfPath path = RoundedRect(new RectangleF(0, 0, 200, 80), 20);
rubberStampAnnotation.Appearance.Normal.Graphics.DrawPath(brush, path);
//Add text in rubber stamp annotation
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12, PdfFontStyle.Bold);
rubberStampAnnotation.Appearance.Normal.Graphics.DrawString("DD/2018/1234567890", font, PdfBrushes.Black, new PointF(10, 20));
rubberStampAnnotation.Appearance.Normal.Graphics.DrawString(DateTime.Now.ToString("dd-MM-yyyy HH:mm:ss"), font, PdfBrushes.Black, new PointF(10, 40));
//Set the content of annotation
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation";
//Add annotation to the page
loadedPage.Annotations.Add(rubberStampAnnotation);

//Save the PDF document
loadedDocument.Save("Output.pdf");
//Close the instance of PdfLoadedDocument
loadedDocument.Close(true);

public static PdfPath RoundedRect(RectangleF bounds, int radius)
{
    int diameter = radius * 2;
    SizeF size = new SizeF(diameter, diameter);
    RectangleF arc = new RectangleF(bounds.Location, size);
    PdfPath path = new PdfPath();
    if (radius == 0)
    {
        path.AddRectangle(bounds);
        return path;
    }
    //Draw the top left arc  
    path.AddArc(arc, 180, 90);
    //Draw the top right arc  
    arc.X = bounds.Right - diameter;
    path.AddArc(arc, 270, 90);
    //Draw the bottom right arc  
    arc.Y = bounds.Bottom - diameter;
    path.AddArc(arc, 0, 90);
    //Draw the bottom left arc 
    arc.X = bounds.Left;
    path.AddArc(arc, 90, 90);

    //Close the figure
    path.CloseFigure();
    //Return the path
    return path;
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing


'Load an existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page from loaded PDF document
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Create a new pdf rubber stamp annotation
Dim rectangleF As RectangleF = New RectangleF(350, 20, 200, 80)
Dim rubberStampAnnotation As PdfRubberStampAnnotation = New PdfRubberStampAnnotation(rectangleF)
'Custom stamp the rubber stamp annotation
Dim brush As PdfSolidBrush = New PdfSolidBrush(New PdfColor(Color.LightBlue))
Dim path As PdfPath = RoundedRect(New RectangleF(0, 0, 200, 80), 20)
rubberStampAnnotation.Appearance.Normal.Graphics.DrawPath(brush, path)
'Add text in rubber stamp annotation
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 12, PdfFontStyle.Bold)
rubberStampAnnotation.Appearance.Normal.Graphics.DrawString("DD/2018/1234567890", font, PdfBrushes.Black, New PointF(10, 20))
rubberStampAnnotation.Appearance.Normal.Graphics.DrawString(DateTime.Now.ToString("dd-MM-yyyy HH:mm:ss"), font, PdfBrushes.Black, New PointF(10, 40))
'Set the content of annotation
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation"
'Adds annotation to the page
loadedPage.Annotations.Add(rubberStampAnnotation)

'Save the PDF document
loadedDocument.Save("Output.pdf")
'Close the instance of PdfLoadedDocument
loadedDocument.Close(True)

Private Function RoundedRect(bounds As RectangleF, radius As Integer) As PdfPath
    Dim diameter As Integer = (radius * 2)
    Dim size As SizeF = New SizeF(diameter, diameter)
    Dim arc As RectangleF = New RectangleF(bounds.Location, size)
    Dim path As PdfPath = New PdfPath
    If (radius = 0) Then
        path.AddRectangle(bounds)
        Return path
    End If
    'Draw the top left arc  
    path.AddArc(arc, 180, 90)
    'Draw the top right arc  
    arc.X = (bounds.Right - diameter)
    path.AddArc(arc, 270, 90)
    'Draw the bottom right arc  
    arc.Y = (bounds.Bottom - diameter)
    path.AddArc(arc, 0, 90)
    'Draw the bottom left arc 
    arc.X = bounds.Left
    path.AddArc(arc, 90, 90)

    'Close the figure
    path.CloseFigure()
    'Return the path
    Return path
End Function
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Add-custom-stamp-in-an-existing-PDF-document).


## Get images from custom rubber stamp annotation

You can get the images from the custom rubber stamp annotation appearance using the [PdfLoadedRubberStampAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedRubberStampAnnotation.html) class. The following code explains this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document. 
PdfLoadedDocument ldoc = new PdfLoadedDocument("Input.pdf");
//Get the existing PDF page.
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the rubber stamp annotation.
PdfLoadedRubberStampAnnotation rubberStampAnnotation = lpage.Annotations[0] as PdfLoadedRubberStampAnnotation;
//Get the custom image streams.
Stream[] imageStreams = rubberStampAnnotation.GetImages();
//Close the PDF document.
ldoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument ldoc = new PdfLoadedDocument("input.pdf");
//Get the existing PDF page.
PdfLoadedPage lpage = ldoc.Pages[0] as PdfLoadedPage;
//Get the existing rubber stamp annotation.
PdfLoadedRubberStampAnnotation rubberStampAnnotation = lpage.Annotations[0] as PdfLoadedRubberStampAnnotation;
//Get the custom images used for the rubber stamp annotation.
Image[] images = rubberStampAnnotation.GetImages();
//Close the PDF document.
ldoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing


' Load an existing document.
Dim ldoc As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the existing PDF page.
Dim lpage As PdfLoadedPage = CType(ldoc.Pages(0), PdfLoadedPage)
'Get the existing rubber stamp annotation.
Dim rubberStampAnnotation As PdfLoadedRubberStampAnnotation = CType(lpage.Annotations(0), PdfLoadedRubberStampAnnotation)
'Get the custom images used for the rubber stamp annotation.
Dim images As Image() = rubberStampAnnotation.GetImages()
'Close the PDF document.
ldoc.Close(True)

{% endhighlight %}
{% endtabs %}

## Multi-line text redaction

The Essential&reg; PDF provides support for Quad Points, allowing users to select and redact multiple lines of text within a PDF document. This is achieved by setting the [BoundsCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRedactionAnnotation.html#Syncfusion_Pdf_Interactive_PdfRedactionAnnotation_BoundsCollection) property through the [PdfRedactionAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRedactionAnnotation.html) class.

Refer to the following code example to achieve the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Multi-line-text-redaction-using-quad-points/.NET/Multi-line-text-redaction-using-quad-points/Program.cs"  %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document. 
PdfDocument document = new PdfDocument(); 
//Create a new page. 
PdfPage page = document.Pages.Add(); 
//Creates a new Redaction annotation. 
PdfRedactionAnnotation annot = new PdfRedactionAnnotation(); 

//set the bounds collection of redaction annotation. 
List<RectangleF> bounds = new List<RectangleF>(); 
bounds.Add(new RectangleF(100, 100, 50, 20)); 
bounds.Add(new RectangleF(200, 150, 60, 25)); 
annot.BoundsCollection = bounds; 

//set the innercolor 
annot.InnerColor = Color.Black; 
//set the bordercolor 
annot.BorderColor = Color.Green; 
//set the textcolor 
annot.TextColor = Color.Yellow; 
//set the font 
annot.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 10); 
//set overlaytext 
annot.OverlayText = "Redact"; 
//set text alignment 
annot.TextAlignment = PdfTextAlignment.Right; 
//Assign the RepeatText 
annot.RepeatText = true; 

//Add the annotation to the page. 
page.Annotations.Add(annot);

//Save the document
document.Save("Output.pdf");
//Close the document. 	 
document.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document. 
PdfDocument document = new PdfDocument(); 
//Create a new page. 
PdfPage page = document.Pages.Add(); 
//Creates a new Redaction annotation. 
PdfRedactionAnnotation annot = new PdfRedactionAnnotation(); 

//set the bounds collection of redaction annotation. 
List<RectangleF> bounds = new List<RectangleF>(); 
bounds.Add(new RectangleF(100, 100, 50, 20)); 
bounds.Add(new RectangleF(200, 150, 60, 25)); 
annot.BoundsCollection = bounds; 

//set the innercolor 
annot.InnerColor = Color.Black; 
//set the bordercolor 
annot.BorderColor = Color.Green; 
//set the textcolor 
annot.TextColor = Color.Yellow; 
//set the font 
annot.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 10); 
//set overlaytext 
annot.OverlayText = "Redact"; 
//set text alignment 
annot.TextAlignment = PdfTextAlignment.Right; 
//Assign the RepeatText 
annot.RepeatText = true; 

//Add the annotation to the page. 
page.Annotations.Add(annot);

//Save the document		 
document.Save("Output.pdf"); 
//Close the document. 	 
document.Close(true); 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document.
Dim document As New PdfDocument()
' Create a new page.
Dim page As PdfPage = document.Pages.Add()
' Create a new Redaction annotation.
Dim annot As New PdfRedactionAnnotation()

' Set the bounds collection of redaction annotation.
Dim bounds As New List(Of RectangleF)()
bounds.Add(New RectangleF(100, 100, 50, 20))
bounds.Add(New RectangleF(200, 150, 60, 25))
annot.BoundsCollection = bounds

' Set the inner color.
annot.InnerColor = Color.Black
' Set the border color.
annot.BorderColor = Color.Green
' Set the text color.
annot.TextColor = Color.Yellow
' Set the font.
annot.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 10)
' Set overlay text.
annot.OverlayText = "Redact"
' Set text alignment.
annot.TextAlignment = PdfTextAlignment.Right
' Assign the RepeatText.
annot.RepeatText = True

' Add the annotation to the page.
page.Annotations.Add(annot)

' Save the document.
document.Save("Output.pdf")
' Close the document.
document.Close(True)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Multi-line-text-redaction-using-quad-points/.NET).

## Adding quad points to existing redaction annotations

The Essential&reg; PDF allows users to enhance redaction annotations in existing PDF documents by adding Quad Point support. This is done by setting the BoundsCollection property in the [PdfLoadedRedactionAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedRedactionAnnotation.html) class, enabling more precise redaction across multiple lines of text. 

Refer to the following code example to apply the BoundsCollection property to a loaded redaction annotation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Adding-quad-points-to-existing-redaction-annotations/.NET/Adding-quad-points-to-existing-redaction-annotations/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Load the existing PdfLoadedRedactionAnnotation 
PdfLoadedRedactionAnnotation annot = document.Pages[0].Annotations[0] as PdfLoadedRedactionAnnotation; 

//set the bounds 
List<RectangleF> bounds = new List<RectangleF>(); 
bounds.Add(new RectangleF(100, 100, 50, 20)); 
bounds.Add(new RectangleF(200, 150, 60, 25)); 
annot.BoundsCollection = bounds; 

//set the inner color 
annot.InnerColor = Color.Black; 
//set the border color 
annot.BorderColor = Color.Green; 
//set the text color 
annot.TextColor = Color.Yellow; 
//set the font 
annot.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 10); 
//set overlay text 
annot.OverlayText = "Redact"; 
//set text alignment 
annot.TextAlignment = PdfTextAlignment.Center; 
annot.RepeatText = true; 
  
//Save the document
document.Save("Output.pdf"); 
//Close the document  
document.Close(true);  

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load an existing document. 
PdfLoadedDocument document = new PdfLoadedDocument(@"Input.pdf"); 
//Load the existing PdfLoadedRedactionAnnotation 
PdfLoadedRedactionAnnotation annot = document.Pages[0].Annotations[0] as PdfLoadedRedactionAnnotation; 

//set the bounds 
List<RectangleF> bounds = new List<RectangleF>(); 
bounds.Add(new RectangleF(100, 100, 50, 20)); 
bounds.Add(new RectangleF(200, 150, 60, 25)); 
annot.BoundsCollection = bounds; 

//set the inner color 
annot.InnerColor = Color.Black; 
//set the border color 
annot.BorderColor = Color.Green; 
//set the text color 
annot.TextColor = Color.Yellow; 
//set the font 
annot.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 10); 
//set overlay text 
annot.OverlayText = "Redact"; 
//set text alignment 
annot.TextAlignment = PdfTextAlignment.Center; 
annot.RepeatText = true; 
  
//Save the document into stream  
document.Save("Output.pdf");  
//Close the document  
document.Close(true);  

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

' Load an existing document.
Dim document As New PdfLoadedDocument("Input.pdf")
' Load the existing PdfLoadedRedactionAnnotation.
Dim annot As PdfLoadedRedactionAnnotation = TryCast(document.Pages(0).Annotations(0), PdfLoadedRedactionAnnotation)

' Set the bounds.
Dim bounds As New List(Of RectangleF)()
bounds.Add(New RectangleF(100, 100, 50, 20))
bounds.Add(New RectangleF(200, 150, 60, 25))
annot.BoundsCollection = bounds

' Set the inner color.
annot.InnerColor = Color.Black
' Set the border color.
annot.BorderColor = Color.Green
' Set the text color.
annot.TextColor = Color.Yellow
' Set the font.
annot.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 10)
' Set overlay text.
annot.OverlayText = "Redact"
' Set text alignment.
annot.TextAlignment = PdfTextAlignment.Center
' Repeat the overlay text.
annot.RepeatText = True

' Save the document.
document.Save("Output.pdf")
' Close the document.
document.Close(True)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Adding-quad-points-to-existing-redaction-annotations/.NET).

## Printing Annotations

The Essential&reg; PDF supports printing the annotation in a PDF document by setting the annotation flag to ```Print``` using the [AnnotationFlags](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLoadedStyledAnnotation.html#Syncfusion_Pdf_Interactive_PdfLoadedStyledAnnotation_AnnotationFlags) property.

The following code example illustrates how to print annotation in the PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Annotation/Print-annotation-in-the-PDF-document/.NET/Print-annotation-in-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page 
PdfPage page = document.Pages.Add();
//Creates a new PDF rubber stamp annotation
RectangleF rectangle = new RectangleF(40, 60, 80, 20);
PdfRubberStampAnnotation rubberStampAnnotation = new PdfRubberStampAnnotation(rectangle, " Text Rubber Stamp Annotation");
rubberStampAnnotation.Icon = PdfRubberStampAnnotationIcon.Draft;
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation";
//Set the AnnotationFlags to print 
rubberStampAnnotation.AnnotationFlags = PdfAnnotationFlags.Print;
//Adds annotation to the page 
page.Annotations.Add(rubberStampAnnotation);

//Save the document
document.Save("Output.pdf");
//Closes the document
document.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Creates a new page 
PdfPage page = document.Pages.Add();
//Creates a new PDF rubber stamp annotation
RectangleF rectangle = new RectangleF(40, 60, 80, 20);
PdfRubberStampAnnotation rubberStampAnnotation = new PdfRubberStampAnnotation(rectangle, " Text Rubber Stamp Annotation");
rubberStampAnnotation.Icon = PdfRubberStampAnnotationIcon.Draft;
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation";
//Set the AnnotationFlags to print 
rubberStampAnnotation.AnnotationFlags = PdfAnnotationFlags.Print;
//Adds annotation to the page 
page.Annotations.Add(rubberStampAnnotation);

//Saves the document
document.Save("RubberStamp.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Creates a new PDF document
Dim document As PdfDocument = New PdfDocument()
'Creates a new page 
Dim page As PdfPage = document.Pages.Add()
'Creates a new PDF rubber stamp annotation
Dim rectangle As RectangleF = New RectangleF(40, 60, 80, 20)
Dim rubberStampAnnotation As PdfRubberStampAnnotation = New 
PdfRubberStampAnnotation(rectangle, " Text Rubber Stamp Annotation")
rubberStampAnnotation.Icon = PdfRubberStampAnnotationIcon.Draft
rubberStampAnnotation.Text = "Text Properties Rubber Stamp Annotation"
'Set the AnnotationFlags to print 
rubberStampAnnotation.AnnotationFlags = PdfAnnotationFlags.Print
'Adds annotation to the page 
page.Annotations.Add(rubberStampAnnotation)

'Saves the document
document.Save("RubberStamp.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Annotation/Print-annotation-in-the-PDF-document).

The following table explains annotation flags.

<table>
<thead>
<tr>
<th>
Member<br/><br/></th><th>
Meaning<br/><br/></th></tr>
</thead>
<tbody>
<tr>
<td>
Invisible<br/><br/></td><td>
If set, do not display the annotation if it does not belong to one of the standard annotation types and no annotation handler is available.<br/><br/></td></tr>
<tr>
<td>
Hidden<br/><br/></td><td>
If set, do not display or print the annotation, or allow user interact with annotation, regardless of annotation type or annotation handler.<br/><br/></td></tr>
<tr>
<td>
Print<br/><br/></td><td>
If set, prints the annotation when the page is printed.<br/><br/></td></tr>
<tr>
<td>
NoZoom<br/><br/></td><td>
If set, do not scale the annotation’s appearance to match the magnification of the page.<br/><br/></td></tr>
<tr>
<td>
NoRotate<br/><br/></td><td>
If set, do not rotate the annotation’s appearance to match the rotation of the page.<br/><br/></td></tr>
<tr>
<td>
NoView<br/><br/></td><td>
If set, do not display the annotation on the screens or allow user interact with annotation.<br/><br/></td></tr>
<tr>
<td>
ReadOnly<br/><br/></td><td>
If set, do not allow user interact with annotation.<br/><br/></td></tr>
<tr>
<td>
Locked<br/><br/></td><td>
If set, do not allow the annotation to be deleted or its properties to be modified by the user.<br/><br/></td></tr>
<tr>
<td>
ToggleNoView<br/><br/></td><td>
If set, inverts the interpretation of the NoView flat for certain events.<br/><br/></td></tr>
</tbody>
</table>


## Troubleshooting and FAQ's

<th style="font-size:14px"><b>Annotations are sometimes missing in the acrobat and the other PDF Viewer applications.
</b></th>

<table>
<tr>
<th style="font-size:14px">Reason
</th>
<td style="font-size:14px">
<b>Due to the absence of the appearance dictionary, Annotation may sometimes disappear in adobe reader and other pdf viewer.</b>
</td>
</tr>
<tr>
<th style="font-size:14px"> Solution
</th>
<td>By enabling the appearance [Graphical representation] for the annotation by using the "SetAppearance" method as below, PDF Annotations will be preserved properly on saving the file.
{% tabs %}

{% highlight c# tabtitle="C#" %}

//Enable the appearance of free text annotation.
freeText.SetAppearance(true);

{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

<b> Missing annotation after importing the data into the PDF document</b>

<table>
<th style="font-size:14px" width="100px">Issue</th>
<th style="font-size:14px">Annotation appearances are not preserved when importing annotation data into a PDF document</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>By default, annotation appearances are not created when importing annotation data, as annotations may be rendered differently across various viewers. 
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
Enabling the appearance ensures that annotations are displayed consistently across all viewers. Refer to the following to update the annotation appearance.

<br/><br/>
Please refer to the below code example to achieve this on your end.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf");
//Import the annotation data from the JSON file
lDoc.ImportAnnotations("Annotations.xfdf", AnnotationDataFormat.XFdf);
//Set appearance for all the annotations
foreach (PdfLoadedPage page in lDoc.Pages)
{
    foreach (PdfAnnotation annotation in page.Annotations)
    {
        annotation.SetAppearance(true);
    }
}

//Saves the document
lDoc.Save("Annotation.pdf");
lDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Loads the document
PdfLoadedDocument lDoc = new PdfLoadedDocument("input.pdf");
//Import the annotation data from the JSON file
lDoc.ImportAnnotations("Annotations.xfdf", AnnotationDataFormat.XFdf);
//Set appearance for all the annotations
foreach (PdfLoadedPage page in lDoc.Pages)
{
    foreach (PdfAnnotation annotation in page.Annotations)
    {
        annotation.SetAppearance(true);
    }
}

//Saves the document
lDoc.Save("Annotation.pdf");
lDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

' Load the PDF document from the file
Dim lDoc As PdfLoadedDocument = New PdfLoadedDocument("input.pdf")

' Import annotations from a JSON file
lDoc.ImportAnnotations("Annotations.xfdf", AnnotationDataFormat.XFDF)

'Iterate through each page in the loaded document
For Each pages As PdfLoadedPage In lDoc.Pages
    'Iterate through each annotation in the page
    For Each annot As PdfLoadedAnnotation In pages.Annotations
        'Set the appearance for each annotation
        annot.SetAppearance(True)
    Next
Next

'Save the updated document
lDoc.Save("Annotation.pdf")

'Close the document instances
lDoc.Close(True)

{% endhighlight %}

{% endtabs %}

</td>
</tr>

</table>

