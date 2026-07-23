---
title: Working with Redaction | Syncfusion
description: Learn how to redact sensitive content in PDF documents with .NET PDF, including text, images, patterns, colors, and regex-based redaction
platform: document-processing
control: PDF
documentation: UG
---

# Working with PDF Redaction

Redacting a PDF is the process of permanently removing sensitive or confidential information from PDF documents. Syncfusion's [.NET PDF Library](https://www.syncfusion.com/document-sdk/net-pdf-library) provides an easy way to redact PDF documents by replacing the content within a specified rectangle with an optional fill color, overlay text, image, or pattern. The underlying text and graphics inside the redaction rectangle are removed during the [Redact](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Redact) call, so the operation cannot be undone.

N> 1. CJK text without a TrueType font and complex script text cannot be redacted.
N> 2. To redact content from an existing PDF document in .NET Core, you need to add the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package from [NuGet.org](https://www.nuget.org/) as a reference in your project.
N> 3. For Linux environments, refer to the [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) documentation for detailed information on the additional NuGet packages required.

To quickly get started with redacting PDF documents in .NET using the PDF Library, watch this video:

{% youtube "https://www.youtube.com/watch?v=sSnHbKm3WTk" %}

## Removing sensitive content from a PDF document

The following code example demonstrates the redaction of PDF documents from the specified bounds using the [PdfRedaction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html) class. The rectangle defines the area to be redacted, and the redaction is added to the page through the [AddRedaction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPage.html#Syncfusion_Pdf_Parsing_PdfLoadedPage_AddRedaction_Syncfusion_Pdf_Redaction_PdfRedaction_) method (or the [Redactions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPage.html#Syncfusion_Pdf_Parsing_PdfLoadedPage_Redactions) collection on Windows-specific targets). After all redactions are added, calling [Redact](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Redact) on the document permanently removes the content.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Removing-sensitive-content-from-the-PDF-document/.NET/Removing-sensitive-content-from-the-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load the existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a redaction object with the bounds of the area to remove.
PdfRedaction redaction = new PdfRedaction(new RectangleF(343, 147, 60, 17));
//Add the redaction to the redaction collection of the loaded page.
page.AddRedaction(redaction);
//Redact the contents from the PDF document.
document.Redact();

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load a PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(343, 147, 60, 17), System.Drawing.Color.Black);
//Add the redaction to the loaded page.
page.Redactions.Add(redaction);

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Redaction

'Load a PDF document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the first page from the document.
Dim page As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Create a PDF redaction for the page.
Dim redaction As PdfRedaction = New PdfRedaction(New RectangleF(343, 147, 60, 17), System.Drawing.Color.Black)
'Add the redaction to the loaded page.
page.Redactions.Add(redaction)

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Removing-sensitive-content-from-the-PDF-document/).

## Displaying text on the redacted area

You can draw overlay text on the redacted area using the [Appearance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html#Syncfusion_Pdf_Redaction_PdfRedaction_Appearance) property of the [PdfRedaction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html) class, and customize the overlay text with different fonts, styles, colors, and brushes.

The following code example explains how to add overlay text in the redacted area.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Display-text-on-the-redacted-area/.NET/Display-text-on-the-redacted-area/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load the existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a redaction object with the bounds of the area to remove.
PdfRedaction redaction = new PdfRedaction(new RectangleF(343, 167, 100, 25), Syncfusion.Drawing.Color.Black);
//Set the font for the overlay text.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.Courier, 10);
//Draw the overlay text on the redacted area.
redaction.Appearance.Graphics.DrawString("Redacted", font, PdfBrushes.Red, new PointF(5, 5));
//Add the redaction to the redaction collection of the loaded page.
page.AddRedaction(redaction);
//Redact the contents from the PDF document.
document.Redact();

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load a PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(343, 147, 60, 17));
//Set the font for the overlay text.
PdfStandardFont font = new PdfStandardFont(PdfFontFamily.Courier, 10);
//Draw the overlay text on the redacted area.
redaction.Appearance.Graphics.DrawString("Redacted", font, PdfBrushes.Red, new PointF(5, 5));
//Add the redaction to the loaded page.
page.Redactions.Add(redaction);

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Redaction

'Load a PDF document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the first page from the document.
Dim page As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Create a PDF redaction for the page.
Dim redaction As PdfRedaction = New PdfRedaction(New RectangleF(343, 147, 60, 17))
'Set the font for the overlay text.
Dim font As PdfStandardFont = New PdfStandardFont(PdfFontFamily.Courier, 10)
'Draw the overlay text on the redacted area.
redaction.Appearance.Graphics.DrawString("Redacted", font, PdfBrushes.Red, New PointF(5, 5))
'Add the redaction to the loaded page.
page.Redactions.Add(redaction)

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Display-text-on-the-redacted-area/).

## Drawing an image on the redacted area

You can draw an image on the redacted area using the [Appearance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html#Syncfusion_Pdf_Redaction_PdfRedaction_Appearance) property of the [PdfRedaction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html) class. The image is positioned and sized through the bounds passed to the appearance's `DrawImage` call.

The following code example explains how to redact information from a page by drawing an image on the redacted area using the appearance.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Draw-image-on-the-redacted-area-in-PDF-document/.NET/Draw-image-on-the-redacted-area-in-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load the existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(63, 57, 182, 157));
//Draw the image on the redacted bounds.
PdfImage image = new PdfBitmap("Image.png");
redaction.Appearance.Graphics.DrawImage(image, new RectangleF(0, 0, 182, 157));
//Add the redaction to the redaction collection of the loaded page.
page.AddRedaction(redaction);
//Redact the contents from the PDF document.
document.Redact();

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load a PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(63, 57, 182, 157));
//Draw the image on the redacted bounds.
PdfImage image = new PdfBitmap("Image.png");
redaction.Appearance.Graphics.DrawImage(image, new RectangleF(0, 0, 182, 157));
//Add the redaction to the loaded page.
page.Redactions.Add(redaction);

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Redaction

'Load a PDF document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the first page from the document.
Dim page As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Create a PDF redaction for the page.
Dim redaction As PdfRedaction = New PdfRedaction(New RectangleF(63, 57, 182, 157))
'Draw the image on the redacted bounds.
Dim image As PdfImage = New PdfBitmap("Image.png")
redaction.Appearance.Graphics.DrawImage(image, New RectangleF(0, 0, 182, 157))
'Add the redaction to the loaded page.
page.Redactions.Add(redaction)

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Draw-image-on-the-redacted-area-in-PDF-document/).

## Drawing a pattern on the redacted area

You can draw different patterns on the redacted area using the [Appearance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html#Syncfusion_Pdf_Redaction_PdfRedaction_Appearance) property of the [PdfRedaction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html) class. The example below uses a [PdfTilingBrush](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTilingBrush.html) to compose a small mosaic tile and then paints the redaction bounds with that tile.

The following code example explains how to redact information from a page by drawing a mosaic pattern on the redacted area using the appearance.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Draw-pattern-on-the-redacted-area-in-PDF-document/.NET/Draw-pattern-on-the-redacted-area-in-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load the existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(341, 149, 64, 14));

//Draw a mosaic pattern on the redaction bounds.
RectangleF rect = new RectangleF(0, 0, 8, 8);
PdfTilingBrush tillingBrush = new PdfTilingBrush(rect);
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Gray, new RectangleF(0, 0, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.White, new RectangleF(2, 0, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(4, 0, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.DarkGray, new RectangleF(6, 0, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.White, new RectangleF(0, 2, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(2, 2, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Black, new RectangleF(4, 2, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(6, 2, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(0, 4, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.DarkGray, new RectangleF(2, 4, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(4, 4, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.White, new RectangleF(6, 4, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Black, new RectangleF(0, 6, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(2, 6, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Black, new RectangleF(4, 6, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.DarkGray, new RectangleF(6, 6, 2, 2));
rect = new RectangleF(0, 0, 16, 14);
PdfTilingBrush tillingBrushNew = new PdfTilingBrush(rect);
tillingBrushNew.Graphics.DrawRectangle(tillingBrush, rect);

//Draw the rectangle on the redacted bounds.
redaction.Appearance.Graphics.DrawRectangle(tillingBrushNew, new RectangleF(0, 0, 64, 14));
//Add the redaction to the redaction collection of the loaded page.
page.AddRedaction(redaction);
//Redact the contents from the PDF document.
document.Redact();

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load a PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(341, 149, 64, 14));

//Draw the mosaic pattern on the redaction bounds.
RectangleF rect = new RectangleF(0, 0, 8, 8);
PdfTilingBrush tillingBrush = new PdfTilingBrush(rect);
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Gray, new RectangleF(0, 0, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.White, new RectangleF(2, 0, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(4, 0, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.DarkGray, new RectangleF(6, 0, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.White, new RectangleF(0, 2, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(2, 2, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Black, new RectangleF(4, 2, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(6, 2, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(0, 4, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.DarkGray, new RectangleF(2, 4, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(4, 4, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.White, new RectangleF(6, 4, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Black, new RectangleF(0, 6, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, new RectangleF(2, 6, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Black, new RectangleF(4, 6, 2, 2));
tillingBrush.Graphics.DrawRectangle(PdfBrushes.DarkGray, new RectangleF(6, 6, 2, 2));
rect = new RectangleF(0, 0, 16, 14);
PdfTilingBrush tillingBrushNew = new PdfTilingBrush(rect);
tillingBrushNew.Graphics.DrawRectangle(tillingBrush, rect);

//Draw the rectangle on the redacted bounds.
redaction.Appearance.Graphics.DrawRectangle(tillingBrushNew, new RectangleF(0, 0, 64, 14));
//Add the redaction to the loaded page.
page.Redactions.Add(redaction);

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Redaction

'Load a PDF document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the first page from the document.
Dim page As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Create a PDF redaction for the page.
Dim redaction As PdfRedaction = New PdfRedaction(New RectangleF(341, 149, 64, 14))

'Draw the mosaic pattern on the redaction bounds.
Dim rect As RectangleF = New RectangleF(0, 0, 8, 8)
Dim tillingBrush As PdfTilingBrush = New PdfTilingBrush(rect)
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Gray, New RectangleF(0, 0, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.White, New RectangleF(2, 0, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, New RectangleF(4, 0, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.DarkGray, New RectangleF(6, 0, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.White, New RectangleF(0, 2, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, New RectangleF(2, 2, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Black, New RectangleF(4, 2, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, New RectangleF(6, 2, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, New RectangleF(0, 4, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.DarkGray, New RectangleF(2, 4, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, New RectangleF(4, 4, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.White, New RectangleF(6, 4, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Black, New RectangleF(0, 6, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.LightGray, New RectangleF(2, 6, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.Black, New RectangleF(4, 6, 2, 2))
tillingBrush.Graphics.DrawRectangle(PdfBrushes.DarkGray, New RectangleF(6, 6, 2, 2))
rect = New RectangleF(0, 0, 16, 14)
Dim tillingBrushNew As PdfTilingBrush = New PdfTilingBrush(rect)
tillingBrushNew.Graphics.DrawRectangle(tillingBrush, rect)

'Draw the rectangle on the redacted bounds.
redaction.Appearance.Graphics.DrawRectangle(tillingBrushNew, New RectangleF(0, 0, 64, 14))
'Add the redaction to the loaded page.
page.Redactions.Add(redaction)

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Draw-pattern-on-the-redacted-area-in-PDF-document/).

## Filling a color on the redacted area

You can draw a filled rectangle on the redacted bounds using the [FillColor](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html#Syncfusion_Pdf_Redaction_PdfRedaction_FillColor) property of the [PdfRedaction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html) class.

The following code example explains how to redact information from a page with a filled rectangle.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Fill-color-on-the-redacted-area-in-a-PDF/.NET/Fill-color-on-the-redacted-area-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load the existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(343, 147, 60, 17));
//Set the fill color for the redaction bounds.
redaction.FillColor = System.Drawing.Color.Black;
//Add the redaction to the redaction collection of the loaded page.
page.AddRedaction(redaction);
//Redact the contents from the PDF document.
document.Redact();

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load a PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(343, 147, 60, 17));
//Set the fill color for the redaction bounds.
redaction.FillColor = System.Drawing.Color.Black;
//Add the redaction to the loaded page.
page.Redactions.Add(redaction);

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Redaction

'Load a PDF document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the first page from the document.
Dim page As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Create a PDF redaction for the page.
Dim redaction As PdfRedaction = New PdfRedaction(New RectangleF(343, 147, 60, 17))
'Set the fill color for the redaction bounds.
redaction.FillColor = System.Drawing.Color.Black
'Add the redaction to the loaded page.
page.Redactions.Add(redaction)

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Fill-color-on-the-redacted-area-in-a-PDF/).

## Redaction without fill color and appearance

You can redact a PDF without drawing a filled rectangle or any overlay content on the redacted bounds. Use the [PdfRedaction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html) constructor that accepts only the rectangle.

The following code snippet explains how to redact information from a page without drawing a fill color or appearance on the redaction bounds.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Redaction-without-fill-color-and-appearance/.NET/Redaction-without-fill-color-and-appearance/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load the existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(343, 147, 60, 17));

//Add the redaction to the redaction collection of the loaded page.
page.AddRedaction(redaction);
//Redact the contents from the PDF document.
document.Redact();

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load a PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(343, 147, 60, 17));
//Add the redaction to the loaded page.
page.Redactions.Add(redaction);

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Redaction

'Load a PDF document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the first page from the document.
Dim page As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Create a PDF redaction for the page.
Dim redaction As PdfRedaction = New PdfRedaction(New RectangleF(343, 147, 60, 17))
'Add the redaction to the loaded page.
page.Redactions.Add(redaction)

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Redaction-without-fill-color-and-appearance/).

## Customizing the redaction annotation appearance

Essential<sup>&reg;</sup> PDF allows you to enhance redaction annotations by applying a fill color through the [AppearanceFillColor](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRedactionAnnotation.html#Syncfusion_Pdf_Interactive_PdfRedactionAnnotation_AppearanceFillColor) property of the [PdfRedactionAnnotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRedactionAnnotation.html) class. You can also customize the inner color, border color, text color, overlay text, font, text alignment, and whether the overlay text repeats across the annotation bounds. The [SetAppearance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfRedactionAnnotation.html#Syncfusion_Pdf_Interactive_PdfRedactionAnnotation_SetAppearance_System_Boolean_) method must be called to apply the configured appearance to the annotation.

The following code example demonstrates how to configure the appearance of a redaction annotation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Redaction-fill-color-customization/.NET/Redaction-fill-color-customization/Program.cs" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf;
using Syncfusion.Drawing;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create a new redaction annotation.
PdfRedactionAnnotation annot = new PdfRedactionAnnotation();
//Assign the bounds.
annot.Bounds = new RectangleF(100, 120, 100, 100);
//Assign the inner color.
annot.InnerColor = Syncfusion.Drawing.Color.Black;
//Assign the border color.
annot.BorderColor = Syncfusion.Drawing.Color.Yellow;
//Assign the appearance fill color.
annot.AppearanceFillColor = Syncfusion.Drawing.Color.BlueViolet;
//Assign the text color.
annot.TextColor = Syncfusion.Drawing.Color.Blue;
//Assign the font.
annot.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 10);
//Assign the overlay text.
annot.OverlayText = "REDACTION";
//Assign the text alignment.
annot.TextAlignment = PdfTextAlignment.Right;
//Assign the repeat text.
annot.RepeatText = true;
//Apply the configured appearance to the annotation.
annot.SetAppearance(true);

//Add the annotation to the page.
page.Annotations.Add(annot);

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf;
using Syncfusion.Drawing;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create a new redaction annotation.
PdfRedactionAnnotation annot = new PdfRedactionAnnotation();
//Assign the bounds.
annot.Bounds = new RectangleF(100, 120, 100, 100);
//Assign the inner color.
annot.InnerColor = Syncfusion.Drawing.Color.Black;
//Assign the border color.
annot.BorderColor = Syncfusion.Drawing.Color.Yellow;
//Assign the appearance fill color.
annot.AppearanceFillColor = Syncfusion.Drawing.Color.BlueViolet;
//Assign the text color.
annot.TextColor = Syncfusion.Drawing.Color.Blue;
//Assign the font.
annot.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 10);
//Assign the overlay text.
annot.OverlayText = "REDACTION";
//Assign the text alignment.
annot.TextAlignment = PdfTextAlignment.Right;
//Assign the repeat text.
annot.RepeatText = true;
//Apply the configured appearance to the annotation.
annot.SetAppearance(true);

//Add the annotation to the page.
page.Annotations.Add(annot);

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf
Imports System.Drawing

'Create a new PDF document.
Dim document As PdfDocument = New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()

'Create a new redaction annotation.
Dim annot As PdfRedactionAnnotation = New PdfRedactionAnnotation()
'Assign the bounds.
annot.Bounds = New RectangleF(100, 120, 100, 100)
'Assign the inner color.
annot.InnerColor = Color.Black
'Assign the border color.
annot.BorderColor = Color.Yellow
'Assign the appearance fill color.
annot.AppearanceFillColor = Color.BlueViolet
'Assign the text color.
annot.TextColor = Color.Blue
'Assign the font.
annot.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 10)
'Assign the overlay text.
annot.OverlayText = "REDACTION"
'Assign the text alignment.
annot.TextAlignment = PdfTextAlignment.Right
'Assign the repeat text.
annot.RepeatText = True
'Apply the configured appearance to the annotation.
annot.SetAppearance(True)

'Add the annotation to the page.
page.Annotations.Add(annot)

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Redaction-fill-color-customization/).

## Tracking redaction progress

You can track the progress of a redaction operation by handling the [RedactionProgress](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_RedactionProgress) event of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The event handler receives a [RedactionProgressEventArgs](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.RedactionProgressEventArgs.html) instance whose [Progress](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.RedactionProgressEventArgs.html#Syncfusion_Pdf_Redaction_RedactionProgressEventArgs_Progress) property indicates the percentage of the operation that has completed.

The code snippet to illustrate the same is given below.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Get-the-redaction-progress-from-PDF-document/.NET/Get-the-redaction-progress-from-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(37, 94, 50, 10), Syncfusion.Drawing.Color.Black);
//Add the redaction to the loaded page.
page.AddRedaction(redaction);
//Subscribe to the RedactionProgress event.
loadedDocument.RedactionProgress += redaction_TrackProgress;
//Redact the contents from the PDF document.
loadedDocument.Redact();

//Save and close the PDF document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

//Event handler to track the redaction process.
void redaction_TrackProgress(object sender, RedactionProgressEventArgs arguments)
{
    Console.WriteLine(String.Format("Redaction process {0}% completed", arguments.Progress));
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load a PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(37, 94, 50, 10), Syncfusion.Drawing.Color.Black);
//Add the redaction to the loaded page.
page.Redactions.Add(redaction);
//Subscribe to the RedactionProgress event.
loadedDocument.RedactionProgress += redaction_TrackProgress;
//Redact the contents from the PDF document.
loadedDocument.Redact();

//Save and close the PDF document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

//Event handler to track the redaction process.
void redaction_TrackProgress(object sender, RedactionProgressEventArgs arguments)
{
    Console.WriteLine(String.Format("Redaction process {0}% completed", arguments.Progress));
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Redaction

'Load a PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Load the first page.
Dim page As PdfLoadedPage = loadedDocument.Pages(0)

'Create a PDF redaction for the page.
Dim redaction As PdfRedaction = New PdfRedaction(New RectangleF(37, 94, 50, 10), System.Drawing.Color.Black)
'Add the redaction to the loaded page.
page.Redactions.Add(redaction)
'Subscribe to the RedactionProgress event.
AddHandler loadedDocument.RedactionProgress, AddressOf redaction_TrackProgress
'Redact the contents from the PDF document.
loadedDocument.Redact()

'Save and close the PDF document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

'Event handler to track the redaction process.
Private Sub redaction_TrackProgress(ByVal sender As Object, ByVal arguments As RedactionProgressEventArgs)
    Console.WriteLine(String.Format("Redaction process {0}% completed", arguments.Progress))
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Get-the-redaction-progress-from-PDF-document).

## Getting the redaction result

You can use the [PdfRedactionResult](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedactionResult.html) class to inspect the outcome of a redaction operation. The [Redact](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Redact) method returns a `List<PdfRedactionResult>` where each item's [IsRedactionSuccess](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedactionResult.html#Syncfusion_Pdf_Redaction_PdfRedactionResult_IsRedactionSuccess) property indicates whether the corresponding redaction was applied successfully. The result of the redaction operation is obtained as shown in the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Get-the-result-of-redaction-with-other-information/.NET/Get-the-result-of-redaction-with-other-information/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfLoadedPage page = loadedDocument.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(37, 94, 50, 10), Syncfusion.Drawing.Color.Black);
//Add the redaction to the loaded page.
page.AddRedaction(redaction);

//Redact the contents from the PDF document and inspect the result.
List<PdfRedactionResult> results = loadedDocument.Redact();
foreach (PdfRedactionResult result in results)
{
    if (result.IsRedactionSuccess)
        Console.WriteLine("Content redacted successfully.");
    else
        Console.WriteLine("Content not redacted properly.");
}

//Save and close the PDF document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;

//Load the existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Create a PDF redaction for the page.
PdfRedaction redaction = new PdfRedaction(new RectangleF(37, 94, 50, 10), System.Drawing.Color.Black);
//Add the redaction to the loaded page.
page.Redactions.Add(redaction);

//Redact the contents from the PDF document and inspect the result.
List<PdfRedactionResult> redactionResults = document.Redact();
foreach (PdfRedactionResult result in redactionResults)
{
    if (result.IsRedactionSuccess)
        Console.WriteLine("Content redacted successfully.");
    else
        Console.WriteLine("Content not redacted properly.");
}

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Redaction

'Load the existing PDF document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Load the first page.
Dim page As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Create a PDF redaction for the page.
Dim redaction As PdfRedaction = New PdfRedaction(New RectangleF(37, 94, 50, 10), System.Drawing.Color.Black)
'Add the redaction to the loaded page.
page.Redactions.Add(redaction)

'Redact the contents from the PDF document and inspect the result.
Dim redactionResults As List(Of PdfRedactionResult) = document.Redact()
For Each result As PdfRedactionResult In redactionResults
    If result.IsRedactionSuccess Then
        Console.WriteLine("Content redacted successfully.")
    Else
        Console.WriteLine("Content not redacted properly.")
    End If
Next

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Get-the-result-of-redaction-with-other-information/).

## Finding text by regular expression and redacting it

You can extract text from a page, match it against a regular expression pattern, and redact each match using the [PdfRedaction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Redaction.PdfRedaction.html) class. The bounds returned by the text extraction API are passed to the redaction so that the matched text is removed at its actual location on the page.

The following code snippet explains how to find text by regular expression pattern and redact it from a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Redaction/Find-text-by-regular-expression-pattern-and-redact-it-from-PDF-document/.NET/Find_text_by_regular_expression/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;
using Syncfusion.Pdf;
using System.Text.RegularExpressions;

//Load the existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Extract text and layout information from the page.
TextLineCollection collection = new TextLineCollection();
string extractedText = page.ExtractText(out collection);

//Iterate through the words on the page and find matches for the regular expression.
foreach (TextLine line in collection.TextLine)
{
    foreach (TextWord word in line.WordCollection)
    {
        //Define a regular expression pattern to search for dates in the format MM/DD/YYYY.
        string datePattern = @"\b\d{1,2}\/\d{1,2}\/\d{4}\b";
        //Search for dates in the word.
        MatchCollection dateMatches = Regex.Matches(word.Text, datePattern);
        //Add a redaction for each matching word.
        foreach (Match dateMatch in dateMatches)
        {
            string textToFindAndRedact = dateMatch.Value;
            if (textToFindAndRedact == word.Text)
            {
                //Create a redaction object at the word's bounds.
                PdfRedaction redaction = new PdfRedaction(word.Bounds, Syncfusion.Drawing.Color.Black);
                //Add the redaction to the redaction collection of the loaded page.
                page.AddRedaction(redaction);
            }
        }
    }
}

//Redact the contents from the PDF document.
document.Redact();

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Redaction;
using Syncfusion.Pdf;
using System.Text.RegularExpressions;

//Load a PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Get the first page from the document.
PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;

//Extract text and layout information from the page.
TextLineCollection collection = new TextLineCollection();
string extractedText = page.ExtractText(out collection);

//Iterate through the words on the page and find matches for the regular expression.
foreach (TextLine line in collection.TextLine)
{
    foreach (TextWord word in line.WordCollection)
    {
        //Define a regular expression pattern to search for dates in the format MM/DD/YYYY.
        string datePattern = @"\b\d{1,2}\/\d{1,2}\/\d{4}\b";
        //Search for dates in the word.
        MatchCollection dateMatches = Regex.Matches(word.Text, datePattern);
        //Add a redaction for each matching word.
        foreach (Match dateMatch in dateMatches)
        {
            string textToFindAndRedact = dateMatch.Value;
            if (textToFindAndRedact == word.Text)
            {
                //Create a redaction object at the word's bounds.
                PdfRedaction redaction = new PdfRedaction(word.Bounds, Syncfusion.Drawing.Color.Black);
                //Add the redaction to the loaded page.
                page.Redactions.Add(redaction);
            }
        }
    }
}

//Redact the contents from the PDF document.
document.Redact();

//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Redaction
Imports Syncfusion.Pdf
Imports System.Text.RegularExpressions

'Load the existing PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

'Get the first page from the document.
Dim page As PdfLoadedPage = TryCast(document.Pages(0), PdfLoadedPage)

'Extract text and layout information from the page.
Dim collection As New TextLineCollection()
Dim extractedText As String = page.ExtractText(collection)

'Iterate through the words on the page and find matches for the regular expression.
For Each line As TextLine In collection.TextLine
    For Each word As TextWord In line.WordCollection
        'Define a regular expression pattern to search for dates in the format MM/DD/YYYY.
        Dim datePattern As String = "\b\d{1,2}\/\d{1,2}\/\d{4}\b"
        'Search for dates in the word.
        Dim dateMatches As MatchCollection = Regex.Matches(word.Text, datePattern)
        'Add a redaction for each matching word.
        For Each dateMatch As Match In dateMatches
            Dim textToFindAndRedact As String = dateMatch.Value
            If textToFindAndRedact = word.Text Then
                'Create a redaction object at the word's bounds.
                Dim redaction As New PdfRedaction(word.Bounds, Syncfusion.Drawing.Color.Black)
                'Add the redaction to the loaded page.
                page.Redactions.Add(redaction)
            End If
        Next
    Next
Next

'Redact the contents from the PDF document.
document.Redact()

'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Redaction/Find-text-by-regular-expression-pattern-and-redact-it-from-PDF-document/).