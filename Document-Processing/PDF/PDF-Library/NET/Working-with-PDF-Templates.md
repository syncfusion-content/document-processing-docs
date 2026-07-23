---
title: Working with PDF templates | Syncfusion
description: This section explains how to create and use PDF templates as reusable drawing surfaces, build page template elements for headers and footers, overlay templates, and add page templates to existing PDF documents.
platform: document-processing
control: PDF
documentation: UG
---

# Working with PDF Templates

A PDF template is a drawing surface on which you can add contents. Every element that can be drawn on a [PdfPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPage.html) can also be drawn on a [PdfTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTemplate.html). A template can be drawn at any location on a page, or used to build headers, footers, watermarks, and document overlays.

## Creating a new PDF template

The [PdfTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTemplate.html) class is used to create a new PDF template. The template is initialized with a width and height (in points) and exposes a [Graphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTemplate.html#Syncfusion_Pdf_Graphics_PdfTemplate_Graphics) property that you can use to draw shapes, text, and images. After drawing on the template, call [DrawPdfTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawPdfTemplate_Syncfusion_Pdf_Graphics_PdfTemplate_Syncfusion_Drawing_PointF_) on a page's graphics to place the rendered template at the desired location.

The following code snippet illustrates how to add contents to a [PdfTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTemplate.html) and render it onto a new PDF page.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Templates/Add-the-contents-to-template-and-render-into-PDF-page/.NET/Add-the-contents-to-template-and-render-into-PDF-page/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument pdfDocument = new PdfDocument();
//Add a page to the PDF document.
PdfPage pdfPage = pdfDocument.Pages.Add();

//Create a PDF Template with a width of 100 and height of 50.
PdfTemplate template = new PdfTemplate(100, 50);
//Draw a rectangle on the template graphics.
template.Graphics.DrawRectangle(PdfBrushes.BurlyWood, new Syncfusion.Drawing.RectangleF(0, 0, 100, 50));
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Set the brush.
PdfBrush brush = new PdfSolidBrush(Syncfusion.Drawing.Color.Black);
//Draw a string using the graphics of the template.
template.Graphics.DrawString("Hello World", font, brush, new Syncfusion.Drawing.PointF(5, 5));
//Draw the template on the page graphics of the document.
pdfPage.Graphics.DrawPdfTemplate(template, PointF.Empty);

//Save the document.
pdfDocument.Save("Output.pdf");
//Close the document.
pdfDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument pdfDocument = new PdfDocument();
//Add a page to the PDF document.
PdfPage pdfPage = pdfDocument.Pages.Add();

//Create a PDF Template with a width of 100 and height of 50.
PdfTemplate template = new PdfTemplate(100, 50);
//Draw a rectangle on the template graphics.
template.Graphics.DrawRectangle(PdfBrushes.BurlyWood, new System.Drawing.RectangleF(0, 0, 100, 50));
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Set the brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Draw a string using the graphics of the template.
template.Graphics.DrawString("Hello World", font, brush, new PointF(5, 5));
//Draw the template on the page graphics of the document.
pdfPage.Graphics.DrawPdfTemplate(template, PointF.Empty);

//Save the document.
pdfDocument.Save("Output.pdf");
//Close the document.
pdfDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Create a new PDF document.
Dim pdfDocument As New PdfDocument()
'Add a page to the PDF document.
Dim pdfPage As PdfPage = pdfDocument.Pages.Add()

'Create a PDF Template with a width of 100 and height of 50.
Dim template As New PdfTemplate(100, 50)
'Draw a rectangle on the template graphics.
template.Graphics.DrawRectangle(PdfBrushes.BurlyWood, New System.Drawing.RectangleF(0, 0, 100, 50))
'Set the standard font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 14)
'Set the brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Draw a string using the graphics of the template.
template.Graphics.DrawString("Hello World", font, brush, New PointF(5, 5))
'Draw the template on the page graphics of the document.
pdfPage.Graphics.DrawPdfTemplate(template, PointF.Empty)

'Save the document.
pdfDocument.Save("Output.pdf")
'Close the document.
pdfDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Templates/Add-the-contents-to-template-and-render-into-PDF-page/).

The following code snippet illustrates how to render a [PdfTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTemplate.html) on an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Templates/Render-the-template-in-an-existing-PDF-document/.NET/Render-the-template-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page of the document.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Create a PDF Template.
PdfTemplate template = new PdfTemplate(100, 50);
//Draw a rectangle on the template graphics.
template.Graphics.DrawRectangle(PdfBrushes.BurlyWood, new Syncfusion.Drawing.RectangleF(0, 0, 100, 50));
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Set the brush.
PdfBrush brush = new PdfSolidBrush(Syncfusion.Drawing.Color.Black);
//Draw a string on the graphics of the template.
template.Graphics.DrawString("Hello World", font, brush, new Syncfusion.Drawing.PointF(5, 5));
//Draw the template on the page graphics of the document.
loadedPage.Graphics.DrawPdfTemplate(template, Syncfusion.Drawing.PointF.Empty);

//Save the modified document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page of the document.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Create a PDF Template.
PdfTemplate template = new PdfTemplate(100, 50);
//Draw a rectangle on the template graphics.
template.Graphics.DrawRectangle(PdfBrushes.BurlyWood, new System.Drawing.RectangleF(0, 0, 100, 50));
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Set the brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Draw a string on the graphics of the template.
template.Graphics.DrawString("Hello World", font, brush, new PointF(5, 5));
//Draw the template on the page graphics of the document.
loadedPage.Graphics.DrawPdfTemplate(template, PointF.Empty);

//Save the modified document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Load the existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Load the first page of the document.
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)

'Create a PDF Template.
Dim template As New PdfTemplate(100, 50)
'Draw a rectangle on the template graphics.
template.Graphics.DrawRectangle(PdfBrushes.BurlyWood, New System.Drawing.RectangleF(0, 0, 100, 50))
'Set the standard font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 14)
'Set the brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Draw a string on the graphics of the template.
template.Graphics.DrawString("Hello World", font, brush, New PointF(5, 5))
'Draw the template on the page graphics of the document.
loadedPage.Graphics.DrawPdfTemplate(template, PointF.Empty)

'Save the modified document.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Templates/Render-the-template-in-an-existing-PDF-document/).

## Creating templates from an existing PDF document

Essential<sup>&reg;</sup> PDF supports creating templates from the page of an existing PDF document using the [CreateTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_CreateTemplate) method. The resulting template can then be drawn on a new PDF page at a specific position and size. This is useful for reusing artwork, watermarks, or other repeating visual elements across documents.

The following code illustrates how to create a template from an existing page and draw it in a new PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Templates/Create-template-from-an-existing-PDF-document/.NET/Create-template-from-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Create the template from the page.
PdfTemplate template = loadedPage.CreateTemplate();

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();
//Get the page's graphics.
PdfGraphics graphics = page.Graphics;
//Draw the template at the top-left of the page, scaled to half the page width.
graphics.DrawPdfTemplate(template, Syncfusion.Drawing.PointF.Empty, new Syncfusion.Drawing.SizeF(page.Size.Width / 2, page.Size.Height));

//Save the new document.
document.Save("Output.pdf");
//Close both documents.
loadedDocument.Close(true);
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Create the template from the page.
PdfTemplate template = loadedPage.CreateTemplate();

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();
//Get the page's graphics.
PdfGraphics graphics = page.Graphics;
//Draw the template at the top-left of the page, scaled to half the page width.
graphics.DrawPdfTemplate(template, PointF.Empty, new SizeF(page.Size.Width / 2, page.Size.Height));

//Save the new document.
document.Save("Output.pdf");
//Close both documents.
loadedDocument.Close(true);
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Load the existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Load the first page.
Dim loadedPage As PdfLoadedPage = TryCast(loadedDocument.Pages(0), PdfLoadedPage)
'Create the template from the page.
Dim template As PdfTemplate = loadedPage.CreateTemplate()

'Create a new PDF document.
Dim document As New PdfDocument()
'Add the page.
Dim page As PdfPage = document.Pages.Add()
'Get the page's graphics.
Dim graphics As PdfGraphics = page.Graphics
'Draw the template at the top-left of the page, scaled to half the page width.
graphics.DrawPdfTemplate(template, PointF.Empty, New SizeF(page.Size.Width \ 2, page.Size.Height))

'Save the new document.
document.Save("Output.pdf")
'Close both documents.
loadedDocument.Close(True)
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Templates/Create-template-from-an-existing-PDF-document/).

## Working with PdfPageTemplateElement

[PdfPageTemplateElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageTemplateElement.html) is a template element that can be added to any part of every page in a PDF document, such as the header, footer, or margins. The [Template](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_Template) property of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class exposes the [Top](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html#Syncfusion_Pdf_PdfDocumentTemplate_Top), [Bottom](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html#Syncfusion_Pdf_PdfDocumentTemplate_Bottom), [Left](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html#Syncfusion_Pdf_PdfDocumentTemplate_Left), and [Right](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html#Syncfusion_Pdf_PdfDocumentTemplate_Right) margins where you can place a `PdfPageTemplateElement`.

The following code illustrates how to add page template elements (a header and a footer) in a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Templates/Add-the-page-template-elements-in-a-PDF-document/.NET/Add-the-page-template-elements-in-a-PDF-document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument pdfDocument = new PdfDocument();
//Add a page to the PDF document.
PdfPage pdfPage = pdfDocument.Pages.Add();

//Create a header and draw the image.
RectangleF bounds = new RectangleF(0, 0, pdfDocument.Pages[0].GetClientSize().Width, 50);
PdfPageTemplateElement header = new PdfPageTemplateElement(bounds);
//Load the image file.
FileStream imageStream = new FileStream("Logo.png", FileMode.Open, FileAccess.Read);
PdfImage image = new PdfBitmap(imageStream);
//Draw the image in the header.
header.Graphics.DrawImage(image, new PointF(0, 0), new SizeF(100, 50));
//Add the header at the top of every page.
pdfDocument.Template.Top = header;

//Create a page template that can be used as footer.
PdfPageTemplateElement footer = new PdfPageTemplateElement(bounds);
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 7);
//Set the brush.
PdfBrush brush = new PdfSolidBrush(Syncfusion.Drawing.Color.Black);
//Create a page number field.
PdfPageNumberField pageNumber = new PdfPageNumberField(font, brush);
//Create a page count field.
PdfPageCountField count = new PdfPageCountField(font, brush);
//Combine the fields in a composite field.
PdfCompositeField compositeField = new PdfCompositeField(font, brush, "Page {0} of {1}", pageNumber, count);
compositeField.Bounds = footer.Bounds;
//Draw the composite field in the footer.
compositeField.Draw(footer.Graphics, new PointF(470, 40));
//Add the footer template at the bottom of every page.
pdfDocument.Template.Bottom = footer;

//Save the document.
pdfDocument.Save("Output.pdf");
//Close the document.
pdfDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument pdfDocument = new PdfDocument();
//Add a page to the PDF document.
PdfPage pdfPage = pdfDocument.Pages.Add();

//Create a header and draw the image.
RectangleF bounds = new RectangleF(0, 0, pdfDocument.Pages[0].GetClientSize().Width, 50);
PdfPageTemplateElement header = new PdfPageTemplateElement(bounds);
//Load the image.
PdfImage image = new PdfBitmap(@"Logo.png");
//Draw the image in the header.
header.Graphics.DrawImage(image, new PointF(0, 0), new SizeF(100, 50));
//Add the header at the top of every page.
pdfDocument.Template.Top = header;

//Create a page template that can be used as footer.
PdfPageTemplateElement footer = new PdfPageTemplateElement(bounds);
//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 7);
//Set the brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Create a page number field.
PdfPageNumberField pageNumber = new PdfPageNumberField(font, brush);
//Create a page count field.
PdfPageCountField count = new PdfPageCountField(font, brush);
//Combine the fields in a composite field.
PdfCompositeField compositeField = new PdfCompositeField(font, brush, "Page {0} of {1}", pageNumber, count);
compositeField.Bounds = footer.Bounds;
//Draw the composite field in the footer.
compositeField.Draw(footer.Graphics, new PointF(470, 40));
//Add the footer template at the bottom of every page.
pdfDocument.Template.Bottom = footer;

//Save and close the document.
pdfDocument.Save("Output.pdf");
pdfDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Create a new PDF document.
Dim pdfDocument As New PdfDocument()
'Add a page to the PDF document.
Dim pdfPage As PdfPage = pdfDocument.Pages.Add()

'Create a header and draw the image.
Dim bounds As New RectangleF(0, 0, pdfDocument.Pages(0).GetClientSize().Width, 50)
Dim header As New PdfPageTemplateElement(bounds)
'Load the image.
Dim image As PdfImage = New PdfBitmap("Logo.png")
'Draw the image in the header.
header.Graphics.DrawImage(image, New PointF(0, 0), New SizeF(100, 50))
'Add the header at the top of every page.
pdfDocument.Template.Top = header

'Create a page template that can be used as footer.
Dim footer As New PdfPageTemplateElement(bounds)
'Set the standard font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 7)
'Set the brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Create a page number field.
Dim pageNumber As New PdfPageNumberField(font, brush)
'Create a page count field.
Dim count As New PdfPageCountField(font, brush)
'Combine the fields in a composite field.
Dim compositeField As New PdfCompositeField(font, brush, "Page {0} of {1}", pageNumber, count)
compositeField.Bounds = footer.Bounds
'Draw the composite field in the footer.
compositeField.Draw(footer.Graphics, New PointF(470, 40))
'Add the footer template at the bottom of every page.
pdfDocument.Template.Bottom = footer

'Save and close the document.
pdfDocument.Save("Output.pdf")
pdfDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Templates/Add-the-page-template-elements-in-a-PDF-document/).

## Creating document overlays

Multiple templates can be drawn on a single PDF page to create a document overlay using the [PdfTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTemplate.html) class. The following code illustrates how to overlay content from two source documents onto a single new page.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Templates/Creating-the-document-overlays/.NET/Creating-the-document-overlays/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the source documents.
PdfLoadedDocument loadedDocument1 = new PdfLoadedDocument("Input1.pdf");
PdfLoadedDocument loadedDocument2 = new PdfLoadedDocument("Input2.pdf");
//Create the new document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create a template from the first document and draw it on the new page.
PdfPageBase loadedPage = loadedDocument1.Pages[0];
PdfTemplate template = loadedPage.CreateTemplate();
page.Graphics.DrawPdfTemplate(template, new PointF(0, 0), new SizeF(500, 700));

//Create a template from the second document and draw it on top of the first.
loadedPage = loadedDocument2.Pages[0];
template = loadedPage.CreateTemplate();
page.Graphics.DrawPdfTemplate(template, new PointF(10, 10), new SizeF(400, 500));

//Save the new document.
document.Save("Output.pdf");
//Close the documents.
loadedDocument1.Close(true);
loadedDocument2.Close(true);
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the source documents.
PdfLoadedDocument loadedDocument1 = new PdfLoadedDocument("Input1.pdf");
PdfLoadedDocument loadedDocument2 = new PdfLoadedDocument("Input2.pdf");
//Create the new document.
PdfDocument document = new PdfDocument();
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create a template from the first document and draw it on the new page.
PdfPageBase loadedPage = loadedDocument1.Pages[0];
PdfTemplate template = loadedPage.CreateTemplate();
page.Graphics.DrawPdfTemplate(template, new PointF(0, 0), new SizeF(500, 700));

//Create a template from the second document and draw it on top of the first.
loadedPage = loadedDocument2.Pages[0];
template = loadedPage.CreateTemplate();
page.Graphics.DrawPdfTemplate(template, new PointF(10, 10), new SizeF(400, 500));

//Save the new document.
document.Save("Output.pdf");
//Close the documents.
loadedDocument1.Close(true);
loadedDocument2.Close(true);
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Drawing

'Load the source documents.
Dim loadedDocument1 As New PdfLoadedDocument("Input1.pdf")
Dim loadedDocument2 As New PdfLoadedDocument("Input2.pdf")
'Create the new document.
Dim document As New PdfDocument()
'Add a page to the document.
Dim page As PdfPage = document.Pages.Add()

'Create a template from the first document and draw it on the new page.
Dim loadedPage As PdfPageBase = loadedDocument1.Pages(0)
Dim template As PdfTemplate = loadedPage.CreateTemplate()
page.Graphics.DrawPdfTemplate(template, New PointF(0, 0), New SizeF(500, 700))

'Create a template from the second document and draw it on top of the first.
loadedPage = loadedDocument2.Pages(0)
template = loadedPage.CreateTemplate()
page.Graphics.DrawPdfTemplate(template, New PointF(10, 10), New SizeF(400, 500))

'Save the new document.
document.Save("Output.pdf")
'Close the documents.
loadedDocument1.Close(True)
loadedDocument2.Close(True)
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Templates/Creating-the-document-overlays/).

## Adding a PdfPageTemplate to a PDF document

The following code sample shows how to add a [PdfPageTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfPageTemplate.html) from an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Templates/Add-a-template-from-an-existing-PDF-document/.NET/Add-a-template-from-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page of the document.
PdfPageBase page = loadedDocument.Pages[0];

//Create a page template from the page.
PdfPageTemplate pageTemplate = new PdfPageTemplate(page);
//Set the PdfPageTemplate name.
pageTemplate.Name = "pageTemplate";
//Set whether the PdfPageTemplate is visible.
pageTemplate.IsVisible = true;
//Add the page template to the document.
loadedDocument.PdfPageTemplates.Add(pageTemplate);

//Save the PDF document.
loadedDocument.Save("Output.pdf");
//Close the PDF document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page of the document.
PdfPageBase page = loadedDocument.Pages[0];

//Create a page template from the page.
PdfPageTemplate pageTemplate = new PdfPageTemplate(page);
//Set the PdfPageTemplate name.
pageTemplate.Name = "pageTemplate";
//Set whether the PdfPageTemplate is visible.
pageTemplate.IsVisible = true;
//Add the page template to the document.
loadedDocument.PdfPageTemplates.Add(pageTemplate);

//Save the PDF document.
loadedDocument.Save("Output.pdf");
//Close the PDF document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the first page of the document.
Dim page As PdfPageBase = loadedDocument.Pages(0)

'Create a page template from the page.
Dim pageTemplate As PdfPageTemplate = New PdfPageTemplate(page)
'Set the PdfPageTemplate name.
pageTemplate.Name = "pageTemplate"
'Set whether the PdfPageTemplate is visible.
pageTemplate.IsVisible = True
'Add the page template to the document.
loadedDocument.PdfPageTemplates.Add(pageTemplate)

'Save the PDF document.
loadedDocument.Save("Output.pdf")
'Close the PDF document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Templates/Add-a-template-from-an-existing-PDF-document).
