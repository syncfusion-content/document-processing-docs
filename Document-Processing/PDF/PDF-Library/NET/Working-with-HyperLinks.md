---
title: Working with Hyperlinks in PDF | Syncfusion
description: This section explains how to add hyperlinks in new and existing PDF documents using the Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Hyperlinks in PDF

In a PDF, hyperlinks can be added to allow users to navigate to another part of the PDF file, a web page, or any other external content. Syncfusion<sup>&reg;</sup> PDF provides support for all of these hyperlink types.

To quickly get started with working with hyperlinks in PDF documents using the Syncfusion<sup>&reg;</sup> PDF library for .NET, refer to this video tutorial.
{% youtube "https://youtu.be/g6HhVg2Fbd8?si=1WFL_6RCfRQvZhKb" %}

## Working with Web navigation

You can navigate to a specified URL from a PDF document by using the [PdfTextWebLink](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfTextWebLink.html) class. The `PdfTextWebLink` class draws the link text in a given color and creates a clickable area that opens the URL in a browser when activated.

The following code example shows how to add a web link to a new PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Hyperlinks/Navigate-to-specific-URL-from-a-PDF-document/.NET/Navigate-to-specific-URL-from-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12f);

//Create the text web link.
PdfTextWebLink textLink = new PdfTextWebLink();
//Set the destination URL.
textLink.Url = "http://www.syncfusion.com";
//Set the link text.
textLink.Text = "Syncfusion .NET components and controls";
//Set the font.
textLink.Font = font;
//Draw the hyperlink in the PDF page.
textLink.DrawTextWebLink(page, new PointF(10, 40));

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
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12f);

//Create the text web link.
PdfTextWebLink textLink = new PdfTextWebLink();
//Set the destination URL.
textLink.Url = "http://www.syncfusion.com";
//Set the link text.
textLink.Text = "Syncfusion .NET components and controls";
//Set the font.
textLink.Font = font;
//Draw the hyperlink in the PDF page.
textLink.DrawTextWebLink(page, new PointF(10, 40));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create the font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 12.0F)

'Create the text web link.
Dim textLink As New PdfTextWebLink()
'Set the destination URL.
textLink.Url = "http://www.syncfusion.com"
'Set the link text.
textLink.Text = "Syncfusion .NET components and controls"
'Set the font.
textLink.Font = font
'Draw the hyperlink in the PDF page.
textLink.DrawTextWebLink(page.Graphics, New PointF(10, 40))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Hyperlinks/Navigate-to-specific-URL-from-a-PDF-document/).

The following code example shows how to add a web link to an existing PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Hyperlinks/Add-a-web-hyperlink-to-an-existing-PDF-document/.NET/Add-a-web-hyperlink-to-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Create the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12f);

//Create the text web link.
PdfTextWebLink textLink = new PdfTextWebLink();
//Set the destination URL.
textLink.Url = "http://www.syncfusion.com";
//Set the link text.
textLink.Text = "Syncfusion .NET components and controls";
//Set the font.
textLink.Font = font;
//Draw the hyperlink in the loaded page graphics.
textLink.DrawTextWebLink(loadedPage.Graphics, new PointF(10, 40));

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(@"Input.pdf");
//Load the first page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Create the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12f);

//Create the text web link.
PdfTextWebLink textLink = new PdfTextWebLink();
//Set the destination URL.
textLink.Url = "http://www.syncfusion.com";
//Set the link text.
textLink.Text = "Syncfusion .NET components and controls";
//Set the font.
textLink.Font = font;
//Draw the hyperlink in the loaded page graphics.
textLink.DrawTextWebLink(loadedPage.Graphics, new PointF(10, 40));

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Load the first page.
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)
'Create the font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 12.0F)

'Create the text web link.
Dim textLink As New PdfTextWebLink()
'Set the destination URL.
textLink.Url = "http://www.syncfusion.com"
'Set the link text.
textLink.Text = "Syncfusion .NET components and controls"
'Set the font.
textLink.Font = font
'Draw the hyperlink in the loaded page graphics.
textLink.DrawTextWebLink(loadedPage.Graphics, New PointF(10, 40))

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Hyperlinks/Add-a-web-hyperlink-to-an-existing-PDF-document).

## Working with internal document navigation

To allow the users to navigate to any other part of the same document, [PdfDocumentLinkAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfDocumentLinkAnnotation.html) class can be used. The below code explains how to add the hyperlink for internal document navigation.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Hyperlinks/Add-the-hyperlink-for-internal-document-navigation/.NET/Add-the-hyperlink-for-internal-document-navigation/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page.
PdfPage page = document.Pages.Add();
//Create a new rectangle that defines the clickable area of the annotation.
RectangleF docLinkAnnotationBounds = new RectangleF(10, 40, 30, 30);

//Create a new document link annotation.
PdfDocumentLinkAnnotation documentLinkAnnotation = new PdfDocumentLinkAnnotation(docLinkAnnotationBounds);
//Set the annotation flags.
documentLinkAnnotation.AnnotationFlags = PdfAnnotationFlags.NoRotate;
//Set the annotation text (tooltip).
documentLinkAnnotation.Text = "Document link annotation";
//Set the annotation border color.
documentLinkAnnotation.Color = new PdfColor(Color.Navy);
//Create another page that the link will navigate to.
PdfPage navigationPage = document.Pages.Add();
//Set the destination page.
documentLinkAnnotation.Destination = new PdfDestination(navigationPage);
//Set the document link annotation location on the destination page.
documentLinkAnnotation.Destination.Location = new PointF(10, 0);
//Set the zoom level used when the destination is opened.
documentLinkAnnotation.Destination.Zoom = 5;
//Add this annotation to the source page.
page.Annotations.Add(documentLinkAnnotation);
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
//Create a new page.
PdfPage page = document.Pages.Add();
//Create a new rectangle that defines the clickable area of the annotation.
RectangleF docLinkAnnotationBounds = new RectangleF(10, 40, 30, 30);

//Create a new document link annotation.
PdfDocumentLinkAnnotation documentLinkAnnotation = new PdfDocumentLinkAnnotation(docLinkAnnotationBounds);
//Set the annotation flags.
documentLinkAnnotation.AnnotationFlags = PdfAnnotationFlags.NoRotate;
//Set the annotation text (tooltip).
documentLinkAnnotation.Text = "Document link annotation";
//Set the annotation border color.
documentLinkAnnotation.Color = new PdfColor(Color.Navy);
//Create another page that the link will navigate to.
PdfPage navigationPage = document.Pages.Add();
//Set the destination page.
documentLinkAnnotation.Destination = new PdfDestination(navigationPage);
//Set the document link annotation location on the destination page.
documentLinkAnnotation.Destination.Location = new PointF(10, 0);
//Set the zoom level used when the destination is opened.
documentLinkAnnotation.Destination.Zoom = 5;
//Add this annotation to the source page.
page.Annotations.Add(documentLinkAnnotation);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document.
Dim document As New PdfDocument()
'Create a new page.
Dim page As PdfPage = document.Pages.Add()
'Create a new rectangle that defines the clickable area of the annotation.
Dim docLinkAnnotationBounds As New RectangleF(10, 40, 30, 30)

'Create a new document link annotation.
Dim documentLinkAnnotation As New PdfDocumentLinkAnnotation(docLinkAnnotationBounds)
'Set the annotation flags.
documentLinkAnnotation.AnnotationFlags = PdfAnnotationFlags.NoRotate
'Set the annotation text (tooltip).
documentLinkAnnotation.Text = "Document link annotation"
'Set the annotation border color.
documentLinkAnnotation.Color = New PdfColor(Color.Navy)
'Create another page that the link will navigate to.
Dim navigationPage As PdfPage = document.Pages.Add()
'Set the destination page.
documentLinkAnnotation.Destination = New PdfDestination(navigationPage)
'Set the document link annotation location on the destination page.
documentLinkAnnotation.Destination.Location = New PointF(10, 0)
'Set the zoom level used when the destination is opened.
documentLinkAnnotation.Destination.Zoom = 5
'Add this annotation to the source page.
page.Annotations.Add(documentLinkAnnotation)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Hyperlinks/Add-the-hyperlink-for-internal-document-navigation/).

The following code example shows how to add a [PdfDocumentLinkAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfDocumentLinkAnnotation.html) to an existing PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Hyperlinks/Internal-document-navigation-to-an-existing-PDF/.NET/Internal-document-navigation-to-an-existing-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the source page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Create a new rectangle that defines the clickable area of the annotation.
RectangleF docLinkAnnotationBounds = new RectangleF(10, 40, 30, 30);

//Create a new document link annotation.
PdfDocumentLinkAnnotation documentLinkAnnotation = new PdfDocumentLinkAnnotation(docLinkAnnotationBounds);
//Set the annotation text (tooltip).
documentLinkAnnotation.Text = "Document link annotation";
//Set the destination page from the loaded document.
PdfLoadedPage navigationPage = loadedDocument.Pages[1] as PdfLoadedPage;
//Set the PDF destination.
documentLinkAnnotation.Destination = new PdfDestination(navigationPage);
//Set the location on the destination page.
documentLinkAnnotation.Destination.Location = new PointF(10, 0);
//Add this annotation to the source page.
loadedPage.Annotations.Add(documentLinkAnnotation);
//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(@"Input.pdf");
//Load the source page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Create a new rectangle that defines the clickable area of the annotation.
RectangleF docLinkAnnotationBounds = new RectangleF(10, 40, 30, 30);

//Create a new document link annotation.
PdfDocumentLinkAnnotation documentLinkAnnotation = new PdfDocumentLinkAnnotation(docLinkAnnotationBounds);
//Set the annotation text (tooltip).
documentLinkAnnotation.Text = "Document link annotation";
//Set the destination page from the loaded document.
PdfLoadedPage navigationPage = loadedDocument.Pages[1] as PdfLoadedPage;
//Set the PDF destination.
documentLinkAnnotation.Destination = new PdfDestination(navigationPage);
//Set the location on the destination page.
documentLinkAnnotation.Destination.Location = new PointF(10, 0);
//Add this annotation to the source page.
loadedPage.Annotations.Add(documentLinkAnnotation);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Load the source page.
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)
'Create a new rectangle that defines the clickable area of the annotation.
Dim docLinkAnnotationBounds As New RectangleF(10, 40, 30, 30)

'Create a new document link annotation.
Dim documentLinkAnnotation As New PdfDocumentLinkAnnotation(docLinkAnnotationBounds)
'Set the annotation text (tooltip).
documentLinkAnnotation.Text = "Document link annotation"
'Set the destination page from the loaded document.
Dim navigationPage As PdfLoadedPage = TryCast(loadedDocument.Pages(1), PdfLoadedPage)
'Set the PDF destination.
documentLinkAnnotation.Destination = New PdfDestination(navigationPage)
'Set the location on the destination page.
documentLinkAnnotation.Destination.Location = New PointF(10, 0)
'Add this annotation to the source page.
loadedPage.Annotations.Add(documentLinkAnnotation)

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Hyperlinks/Internal-document-navigation-to-an-existing-PDF/).

## Working with external document navigation

You can open external documents such as images, text files, or PDF files using the [PdfFileLinkAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfFileLinkAnnotation.html) class.

The following code example shows how to add a file link annotation that opens an external image when clicked.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %} 

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create the PDF document.
PdfDocument document = new PdfDocument();
//Add a new page to the document.
PdfPage page = document.Pages.Add();
//Create a rectangle that defines the clickable area of the annotation.
RectangleF bounds = new RectangleF(10, 40, 30, 30);
//Set the file path of the external file to be opened.
string filePath = "logo.png";

//Create a file link annotation that opens the specified file when clicked.
PdfFileLinkAnnotation fileLinkAnnotation = new PdfFileLinkAnnotation(bounds, filePath);
//Add this annotation to the page.
page.Annotations.Add(fileLinkAnnotation);

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
using Syncfusion.Pdf.Interactive;

//Create the PDF document.
PdfDocument document = new PdfDocument();
//Add a new page to the document.
PdfPage page = document.Pages.Add();
//Create a rectangle that defines the clickable area of the annotation.
RectangleF bounds = new RectangleF(10, 40, 30, 30);

//Create a file link annotation that opens the specified file when clicked.
PdfFileLinkAnnotation fileLinkAnnotation = new PdfFileLinkAnnotation(bounds, @"..\..\Data\logo.png");
//Add this annotation to the page.
page.Annotations.Add(fileLinkAnnotation);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create the PDF document.
Dim document As New PdfDocument()
'Add a new page to the document.
Dim page As PdfPage = document.Pages.Add()
'Create a rectangle that defines the clickable area of the annotation.
Dim rectangle As New RectangleF(10, 40, 30, 30)

'Create a file link annotation that opens the specified file when clicked.
Dim fileLinkAnnotation As New PdfFileLinkAnnotation(rectangle, "..\..\Data\logo.png")
'Add this annotation to the page.
page.Annotations.Add(fileLinkAnnotation)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Hyperlinks/Navigate-to-external-document/).

N> The above link uses the absolute path of the file for navigation. Moving the files to another machine or location may produce a file not found error in PDF reader applications.

To open a file using a relative path, the [PdfLaunchAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLaunchAction.html) can be used. When you use a relative path in the launch action, the files can be moved to any machine as long as the relative path is maintained. The following code example demonstrates the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//PDF doesn't support external document navigation in C# .NET Cross platforms. 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a new page.
PdfPage page = document.Pages.Add();

//Create the button field.
PdfButtonField submitButton = new PdfButtonField(loadedPage, "submitButton");
submitButton.Bounds = new RectangleF(100, 160, 100, 20);
submitButton.Text = "Launch";
//Create the PdfLaunchAction.
PdfLaunchAction launchAction = new PdfLaunchAction(@"Document.txt", PdfFilePathType.Relative);
//Set the launch action to the submit button.
submitButton.Actions.GotFocus = launchAction;
//Add the form field to the document.
loadedDocument.Form.Fields.Add(submitButton);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Create a new PDF document
Dim document As New PdfDocument()
'Create a new page
Dim page As PdfPage = document.Pages.Add()

'Create the button field.
Dim submitButton As New PdfButtonField(loadedPage, "submitButton")
submitButton.Bounds = New RectangleF(25, 160, 100, 20)
submitButton.Text = "Launch"
'Create the PdfLaunchAction.
Dim launchAction As New PdfLaunchAction("Document.txt", PdfFilePathType.Relative)
'Set the launch action to the submit button.
submitButton.Actions.GotFocus = launchAction
'Add the form field to the document.
loadedDocument.Form.Fields.Add(submitButton)

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Hyperlinks/Open-a-file-in-relative-path-using-action/).