---
title: Working with pages | Syncfusion
description: This section explains how to add, insert, rearrange, remove, and split pages, detect empty pages, customize page numbering, and configure page-level actions in a PDF document.
platform: document-processing
control: PDF
documentation: UG
---

# Working with PDF document Pages

Essential<sup>&reg;</sup> PDF provides comprehensive APIs to manage the pages of a [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html). You can create new pages, insert blank or duplicate pages, rearrange the page order, set page size, margins, orientation, and rotation, customize page numbering, remove pages, split a document, and detect blank pages.

## Adding a new page to the document

The following code sample explains how to add a [PdfPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPage.html) to a PDF document. When multiple pages are added, the new page is always appended to the end of the document. Each page exposes a [Graphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPage.html#Syncfusion_Pdf_PdfPage_Graphics) object that you can use to draw text, images, and shapes.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Add-a-new-page-to-the-PDF-document/.NET/Add-a-new-page-to-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Syncfusion.Drawing.Color.Black);
//Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Draw the text.
graphics.DrawString("Hello world!", font, brush, new Syncfusion.Drawing.PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a page.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Draw the text.
graphics.DrawString("Hello world!", font, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a page.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 14)
'Draw the text.
graphics.DrawString("Hello world!", font, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Add-a-new-page-to-the-PDF-document/).

## Inserting pages in a document

You can insert an empty page at any location in an existing PDF document using the [Insert](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_Insert_System_Int32_) method. The index is zero-based; passing `0` inserts the page at the beginning of the document. The following code snippet illustrates the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Insert-pages-in-a-PDF-document/.NET/Insert-pages-in-a-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Insert a new page in the beginning of the document.
loadedDocument.Pages.Insert(0);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Insert a new page in the beginning of the document.
loadedDocument.Pages.Insert(0);
//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Insert a new page in the beginning of the document.
loadedDocument.Pages.Insert(0)
'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Insert-pages-in-a-PDF-document/).

## Adding margin to the PDF pages

You can add margins to all the pages of a PDF document using the [PageSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_PageSettings) property. The [Margins](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageMargins.html) object exposes individual sides (`Left`, `Right`, `Top`, `Bottom`) as well as the convenient `All` property to set the same value on every side. The following code snippet illustrates the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Add-margin-to-the-PDF-pages/.NET/Add-margin-to-the-PDF-pages/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Set margin for all the pages.
document.PageSettings.Margins.All = 10;
//Add a page.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Syncfusion.Drawing.Color.Black);
//Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Draw the text.
graphics.DrawString("Hello world!", font, brush, new Syncfusion.Drawing.PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Set margin for all the pages.
document.PageSettings.Margins.All = 10;
//Add a page.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Draw the text.
graphics.DrawString("Hello world!", font, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.
Dim document As New PdfDocument()
'Set margin for all the pages.
document.PageSettings.Margins.All = 10
'Add a page.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 14)
'Draw the text.
graphics.DrawString("Hello world!", font, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Add-margin-to-the-PDF-pages/).

N> The default margin is set to 40 points, ensuring uniform spacing between the content and the page edges. This margin allows sufficient space for better readability and helps prevent content from being truncated during printing or viewing.

## Adding sections with different page settings

Essential<sup>&reg;</sup> PDF supports adding sections with different page settings like [Height](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Height), [Margins](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Margins), [Orientation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Orientation), [Rotate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Rotate), [Size](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Size), [Transition](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Transition), and [Width](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Width). You can add sections to a PDF document by using the [PdfSection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfSection.html) available in the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) instance, and create page settings to the `PdfSection` using the [PageSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfSection.html#Syncfusion_Pdf_PdfSection_PageSettings) property.

The following code snippet explains how to add sections to a PDF document with different page settings.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Adding-sections-with-different-page-settings/.NET/Adding-sections-with-different-page-settings/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a solid brush and standard font.
PdfBrush brush = new PdfSolidBrush(Syncfusion.Drawing.Color.Black);
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);

//Section - 1
//Add new section to the document.
PdfSection section = document.Sections.Add();
//Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle0;
section.PageSettings.Size = PdfPageSize.A5;
section.PageSettings.Width = 300;
section.PageSettings.Height = 400;
//Add page to the section and initialize graphics for the page.
PdfPage page = section.Pages.Add();
PdfGraphics graphics = page.Graphics;
//Draw simple text on the page.
graphics.DrawString("Rotated by 0 degrees", font, brush, new Syncfusion.Drawing.PointF(20, 20));

//Section - 2
//Add new section to the document.
section = document.Sections.Add();
//Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
section.PageSettings.Width = 300;
section.PageSettings.Height = 400;
//Add page to the section and initialize graphics for the page.
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page.
graphics.DrawString("Rotated by 90 degrees", font, brush, new Syncfusion.Drawing.PointF(20, 20));

//Section - 3
//Add new section to the document.
section = document.Sections.Add();
//Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle180;
section.PageSettings.Width = 500;
section.PageSettings.Height = 200;
//Add page to the section and initialize graphics for the page.
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page.
graphics.DrawString("Rotated by 180 degrees", font, brush, new Syncfusion.Drawing.PointF(20, 20));

//Section - 4
//Add new section to the document.
section = document.Sections.Add();
//Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle270;
section.PageSettings.Width = 300;
section.PageSettings.Height = 200;
//Add page to the section and initialize graphics for the page.
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page.
graphics.DrawString("Rotated by 270 degrees", font, brush, new Syncfusion.Drawing.PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Create a solid brush and standard font.
PdfBrush brush = new PdfSolidBrush(Color.Black);
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);

//Section - 1
//Add new section to the document.
PdfSection section = document.Sections.Add();
//Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle0;
section.PageSettings.Size = PdfPageSize.A5;
section.PageSettings.Width = 300;
section.PageSettings.Height = 400;
//Add page to the section and initialize graphics for the page.
PdfPage page = section.Pages.Add();
PdfGraphics graphics = page.Graphics;
//Draw simple text on the page.
graphics.DrawString("Rotated by 0 degrees", font, brush, new PointF(20, 20));

//Section - 2
//Add new section to the document.
section = document.Sections.Add();
//Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
section.PageSettings.Width = 300;
section.PageSettings.Height = 400;
//Add page to the section and initialize graphics for the page.
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page.
graphics.DrawString("Rotated by 90 degrees", font, brush, new PointF(20, 20));

//Section - 3
//Add new section to the document.
section = document.Sections.Add();
//Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle180;
section.PageSettings.Width = 500;
section.PageSettings.Height = 200;
//Add page to the section and initialize graphics for the page.
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page.
graphics.DrawString("Rotated by 180 degrees", font, brush, new PointF(20, 20));

//Section - 4
//Add new section to the document.
section = document.Sections.Add();
//Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle270;
section.PageSettings.Width = 300;
section.PageSettings.Height = 200;
//Add page to the section and initialize graphics for the page.
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page.
graphics.DrawString("Rotated by 270 degrees", font, brush, new PointF(20, 20));

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.
Dim document As PdfDocument = New PdfDocument()
'Create a solid brush and standard font.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 14)

'Section - 1
'Add new section to the document.
Dim section As PdfSection = document.Sections.Add()
'Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle0
section.PageSettings.Size = PdfPageSize.A5
section.PageSettings.Width = 300
section.PageSettings.Height = 400
'Add page to the section and initialize graphics for the page.
Dim page As PdfPage = section.Pages.Add()
Dim graphics As PdfGraphics = page.Graphics
'Draw simple text on the page.
graphics.DrawString("Rotated by 0 degrees", font, brush, New PointF(20, 20))

'Section - 2
'Add new section to the document.
section = document.Sections.Add()
'Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90
section.PageSettings.Width = 300
section.PageSettings.Height = 400
'Add page to the section and initialize graphics for the page.
page = section.Pages.Add()
graphics = page.Graphics
'Draw simple text on the page.
graphics.DrawString("Rotated by 90 degrees", font, brush, New PointF(20, 20))

'Section - 3
'Add new section to the document.
section = document.Sections.Add()
'Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle180
section.PageSettings.Width = 500
section.PageSettings.Height = 200
'Add page to the section and initialize graphics for the page.
page = section.Pages.Add()
graphics = page.Graphics
'Draw simple text on the page.
graphics.DrawString("Rotated by 180 degrees", font, brush, New PointF(20, 20))

'Section - 4
'Add new section to the document.
section = document.Sections.Add()
'Create page settings to the section.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle270
section.PageSettings.Width = 300
section.PageSettings.Height = 200
'Add page to the section and initialize graphics for the page.
page = section.Pages.Add()
graphics = page.Graphics
'Draw simple text on the page.
graphics.DrawString("Rotated by 270 degrees", font, brush, New PointF(20, 20))

'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Adding-sections-with-different-page-settings/).

## Customizing section page numbering styles in PDF documents

You can customize the numbering style of page labels in a PDF section by setting the [NumberStyle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfMultipleNumberValueField.html#Syncfusion_Pdf_PdfMultipleNumberValueField_NumberStyle) property of a [PdfSectionPageNumberField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfSectionPageNumberField.html). For example, to use lowercase Roman numerals (i, ii, iii, ...), assign `PdfNumberStyle.LowerRoman` to the [NumberStyle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfMultipleNumberValueField.html#Syncfusion_Pdf_PdfMultipleNumberValueField_NumberStyle) property.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Customize-section-page-numbering-styles-in-PDF/.NET/Customize-section-page-numbering-styles-in-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document.
PdfDocument document = new PdfDocument();
//Add a section to the document.
PdfSection section = document.Sections.Add();
//Set the font for the page number.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
//Create a section page number field.
PdfSectionPageNumberField sectionPageNumber = new PdfSectionPageNumberField();

//Set the page number style to LowerRoman (i, ii, iii, etc.).
sectionPageNumber.NumberStyle = PdfNumberStyle.LowerRoman;
sectionPageNumber.Font = font;

//Add pages to the section and draw the page number field in the footer.
for (int i = 0; i < 3; i++)
{
    //Add a new page to the section.
    PdfPage page = section.Pages.Add();

    //Get the page's client size to calculate the footer position.
    SizeF pageSize = page.GetClientSize();

    //Define the position for the page number in the footer (bottom-left).
    PointF footerPosition = new PointF(10, pageSize.Height - 20);

    //Draw the section page number at the calculated footer position.
    sectionPageNumber.Draw(page.Graphics, footerPosition);

    //Draw the main body content at the top of the page.
    page.Graphics.DrawString("This is the main content of a page with a footer.", font, PdfBrushes.Black, new PointF(10, 10));
}

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document.
PdfDocument document = new PdfDocument();
//Add a section to the document.
PdfSection section = document.Sections.Add();
//Set the font for the page number.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
//Create a section page number field.
PdfSectionPageNumberField sectionPageNumber = new PdfSectionPageNumberField();

//Set the page number style to LowerRoman (i, ii, iii, etc.).
sectionPageNumber.NumberStyle = PdfNumberStyle.LowerRoman;
sectionPageNumber.Font = font;

//Add pages to the section and draw the page number field in the footer.
for (int i = 0; i < 3; i++)
{
    //Add a new page to the section.
    PdfPage page = section.Pages.Add();

    //Get the page's client size to calculate the footer position.
    SizeF pageSize = page.GetClientSize();

    //Define the position for the page number in the footer (bottom-left).
    PointF footerPosition = new PointF(10, pageSize.Height - 20);

    //Draw the section page number at the calculated footer position.
    sectionPageNumber.Draw(page.Graphics, footerPosition);

    //Draw the main body content at the top of the page.
    page.Graphics.DrawString("This is the main content of a page with a footer.", font, PdfBrushes.Black, new PointF(10, 10));
}

//Save the PDF document to file stream.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document.
Dim document As New PdfDocument()
'Add a section to the document.
Dim section As PdfSection = document.Sections.Add()
'Set the font for the page number.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 12)
'Create a section page number field.
Dim sectionPageNumber As New PdfSectionPageNumberField()

'Set the page number style to LowerRoman (i, ii, iii, etc.).
sectionPageNumber.NumberStyle = PdfNumberStyle.LowerRoman
sectionPageNumber.Font = font

'Add pages to the section and draw the page number field in the footer.
For i As Integer = 0 To 2
    'Add a new page to the section.
    Dim page As PdfPage = section.Pages.Add()

    'Get the page's client size to calculate the footer position.
    Dim pageSize As SizeF = page.GetClientSize()

    'Define the position for the page number in the footer (bottom-left).
    Dim footerPosition As New PointF(10, pageSize.Height - 20)

    'Draw the section page number at the calculated footer position.
    sectionPageNumber.Draw(page.Graphics, footerPosition)

    'Draw the main body content at the top of the page.
    page.Graphics.DrawString("This is the main content of a page with a footer.", font, PdfBrushes.Black, New PointF(10, 10))
Next

'Save the PDF document to file stream.
document.Save("Output.pdf")

'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Customize-section-page-numbering-styles-in-PDF/).

## Getting the number of pages from a PDF document

You can get the page count from an existing PDF document using the [Count](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageCollection.html#Syncfusion_Pdf_PdfPageCollection_Count) property of the page collection, as shown in the following code snippet.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Get-number-of-pages-from-PDF-document/.NET/Get-number-of-pages-from-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page count.
int pageCount = loadedDocument.Pages.Count;
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the page count.
int pageCount = loadedDocument.Pages.Count;
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Get the page count.
Dim pageCount As Integer = loadedDocument.Pages.Count
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Get-number-of-pages-from-PDF-document/).

## Importing pages from an existing document

Essential<sup>&reg;</sup> PDF allows you to import a page or a range of pages from one document to another. The following code sample illustrates how to import a range of pages from an existing document using the [ImportPageRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_ImportPageRange_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_Int32_System_Int32_) method. The `startIndex` and `endIndex` parameters are zero-based and inclusive.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Importing-pages-from-one-PDF-to-another-PDF/.NET/Importing-pages-from-one-PDF-to-another-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the source PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Create a new PDF document.
PdfDocument document = new PdfDocument();
int startIndex = 0;
int endIndex = loadedDocument.Pages.Count - 1;
//Import all the pages to the new PDF document.
document.ImportPageRange(loadedDocument, startIndex, endIndex);

//Save the new document and close the source document.
document.Save("Output.pdf");
document.Close(true);
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the source PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Create a new PDF document.
PdfDocument document = new PdfDocument();
int startIndex = 0;
int endIndex = loadedDocument.Pages.Count - 1;
//Import all the pages to the new PDF document.
document.ImportPageRange(loadedDocument, startIndex, endIndex);

//Save the document.
document.Save("Output.pdf");
//Close both document instances.
loadedDocument.Close(true);
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the source PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Create a new PDF document.
Dim document As New PdfDocument()
Dim startIndex As Integer = 0
Dim endIndex As Integer = loadedDocument.Pages.Count - 1
'Import all the pages to the new PDF document.
document.ImportPageRange(loadedDocument, startIndex, endIndex)

'Save the document.
document.Save("Output.pdf")
'Close both document instances.
loadedDocument.Close(True)
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Importing-pages-from-one-PDF-to-another-PDF/).

## Importing pages from an existing document without bookmarks

You can import a page or range of pages from one document to another without bookmarks by using the [ImportPageRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_ImportPageRange_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_Int32_System_Int32_System_Boolean_) overload that accepts a `Boolean` parameter. Pass `false` to skip copying the bookmarks. Refer to the following code sample.

N> Performance improvements are most effective when working with large PDF documents.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Import-pages-from-PDF-without-bookmarks/.NET/Import-pages-from-PDF-without-bookmarks/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the source PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Create the new PDF document.
PdfDocument document = new PdfDocument();
int startIndex = 0;
int endIndex = loadedDocument.Pages.Count - 1;
//Import all the pages to the new PDF document without bookmarks.
document.ImportPageRange(loadedDocument, startIndex, endIndex, false);

//Save the new document and close the source document.
document.Save("Output.pdf");
document.Close(true);
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the source PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Create the new PDF document.
PdfDocument document = new PdfDocument();
int startIndex = 0;
int endIndex = loadedDocument.Pages.Count - 1;
//Import all the pages to the new PDF document without bookmarks.
document.ImportPageRange(loadedDocument, startIndex, endIndex, false);

//Save the document.
document.Save("Output.pdf");
//Close both document instances.
loadedDocument.Close(true);
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the source PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Create the new PDF document.
Dim document As PdfDocument = New PdfDocument()
Dim startIndex As Integer = 0
Dim endIndex As Integer = loadedDocument.Pages.Count - 1
'Import all the pages to the new PDF document without bookmarks.
document.ImportPageRange(loadedDocument, startIndex, endIndex, False)

'Save the document.
document.Save("Output.pdf")
'Close both document instances.
loadedDocument.Close(True)
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Import-pages-from-PDF-without-bookmarks/).

## Rearranging pages in an existing document

You can rearrange the pages in an existing PDF document using the [ReArrange](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_ReArrange_System_Int32___) method. This method uses a zero-based start index and accepts an array of indices that defines the new page order. The following code snippet illustrates the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Rearrange-pages-in-an-existing-PDF-document/.NET/Rearrange-pages-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Rearrange the pages by index (swap the first two pages).
loadedDocument.Pages.ReArrange(new int[] { 1, 0 });

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Rearrange the pages by index (swap the first two pages).
loadedDocument.Pages.ReArrange(new int[] { 1, 0 });
//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Rearrange the pages by index (swap the first two pages).
loadedDocument.Pages.ReArrange(New Integer() {1, 0})
'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Rearrange-pages-in-an-existing-PDF-document/).

## Changing the page numbers in a PDF document

You can alter the page label for an existing PDF document using the [PdfPageLabel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLabel.html) class. The [NumberStyle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLabel.html#Syncfusion_Pdf_PdfPageLabel_NumberStyle) property defines the numbering style (for example, upper-case Roman letters), and the [StartNumber](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLabel.html#Syncfusion_Pdf_PdfPageLabel_StartNumber) property defines the starting value. Refer to the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Changing-page-numbers-in-a-PDF-document/.NET/Changing-page-numbers-in-a-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Create a page label.
PdfPageLabel pageLabel = new PdfPageLabel();
//Set the number style with upper case Roman letters.
pageLabel.NumberStyle = PdfNumberStyle.UpperRoman;
//Set the starting number as 1.
pageLabel.StartNumber = 1;
loadedDocument.LoadedPageLabel = pageLabel;

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Create a page label.
PdfPageLabel pageLabel = new PdfPageLabel();
//Set the number style with upper case Roman letters.
pageLabel.NumberStyle = PdfNumberStyle.UpperRoman;
//Set the starting number as 1.
pageLabel.StartNumber = 1;
loadedDocument.LoadedPageLabel = pageLabel;

//Save the document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Create a page label.
Dim pageLabel As New PdfPageLabel()
'Set the number style with upper case Roman letters.
pageLabel.NumberStyle = PdfNumberStyle.UpperRoman
'Set the starting number as 1.
pageLabel.StartNumber = 1
loadedDocument.LoadedPageLabel = pageLabel

'Save the document.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Changing-page-numbers-in-a-PDF-document/).

## Removing pages from a document

You can remove pages from an existing PDF document using the [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_RemoveAt_System_Int32_) method, as shown in the following code example. The index is zero-based.

N> Most PDF creators optimize file size by identifying identical images and storing them as shared resources. These shared objects are referenced across multiple pages rather than being duplicated. Therefore, removing a specific page does not automatically remove the shared image resource, as it may still be used on other pages.

This behavior is by design and not considered an issue. If a shared resource is still referenced by other pages, removing it would result in missing content on those pages. In the current implementation, shared resources (such as images, fonts, and other objects) are only removed when all pages that reference them are deleted.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Remove-pages-from-the-existing-PDF-document/.NET/Remove-pages-from-the-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Remove the first page in the PDF document.
loadedDocument.Pages.RemoveAt(0);
//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Remove the first page in the PDF document.
loadedDocument.Pages.RemoveAt(0);
//Save the document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Remove the first page in the PDF document.
loadedDocument.Pages.RemoveAt(0)
'Save the document.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Remove-pages-from-the-existing-PDF-document/).

## Rotating a PDF page

You can rotate a particular PDF page in a new PDF document using the [PdfPageRotateAngle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageRotateAngle.html) enum, as shown in the following code example. The rotation is applied through the section's [PageSettings.Rotate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Rotate) property and affects all pages added to that section.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Rotating-a-PDF-page/.NET/Rotating-a-PDF-page/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a section.
PdfSection section = document.Sections.Add();
//Rotate the section/page.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
PdfPage page = section.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Syncfusion.Drawing.Color.Black);
//Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Draw the text.
graphics.DrawString("Rotated by 90 degree", font, brush, new Syncfusion.Drawing.PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a section.
PdfSection section = document.Sections.Add();
//Rotate the section/page.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
PdfPage page = section.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Draw the text.
graphics.DrawString("Rotated by 90 degree", font, brush, new PointF(20, 20));

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.
Dim document As New PdfDocument()
'Add a section.
Dim section As PdfSection = document.Sections.Add()
'Rotate the section/page.
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90
Dim page As PdfPage = section.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 14)
'Draw the text.
graphics.DrawString("Rotated by 90 degree", font, brush, New PointF(20, 20))

'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Rotating-a-PDF-page/).

## Rotating an existing PDF page

You can also rotate a specific page in an existing PDF document by assigning a [PdfPageRotateAngle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageRotateAngle.html) value to the [Rotation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_Rotation) property of the loaded page, as shown in the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Rotate-an-existing-PDF-page/.NET/Rotate-an-existing-PDF-page/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page.
PdfPageBase loadedPage = loadedDocument.Pages[0] as PdfPageBase;
//Set the rotation for the loaded page.
loadedPage.Rotation = PdfPageRotateAngle.RotateAngle90;

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page.
PdfPageBase loadedPage = loadedDocument.Pages[0] as PdfPageBase;
//Set the rotation for the loaded page.
loadedPage.Rotation = PdfPageRotateAngle.RotateAngle90;

//Save the document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Get the first page.
Dim page As PdfPageBase = TryCast(loadedDocument.Pages(0), PdfPageBase)
'Set the rotation for the loaded page.
page.Rotation = PdfPageRotateAngle.RotateAngle90

'Save the document.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Rotate-an-existing-PDF-page/).

## Detecting empty pages from a PDF document

You can determine whether a page is empty in a PDF document by using the [IsBlank](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_IsBlank) property, as shown in the following code sample. `IsBlank` returns `true` when the page has no visible text, images, annotations, or form fields. A page that contains only a background color is still considered blank.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Detect-empty-pages-from-PDF/.NET/Detect-empty-pages-from-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page.
PdfPageBase loadedPage = loadedDocument.Pages[0] as PdfPageBase;
//Get whether the page is blank or not.
bool isEmpty = loadedPage.IsBlank;

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page.
PdfPageBase loadedPage = loadedDocument.Pages[0] as PdfPageBase;
//Get whether the page is blank or not.
bool isEmpty = loadedPage.IsBlank;

//Save the document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Get the first page.
Dim page As PdfPageBase = TryCast(loadedDocument.Pages(0), PdfPageBase)
'Get whether the page is blank or not.
Dim isEmpty As Boolean = page.IsBlank

'Save the document.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Detect-empty-pages-from-PDF/).

## Splitting a PDF file into individual pages

Essential<sup>&reg;</sup> PDF allows you to split the pages of an existing PDF document into multiple individual PDF documents using the [Split](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Split_System_String_) method of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The `destinationFilePattern` parameter accepts a .NET format string such as `"Output{0}.pdf"`, where `{0}` is replaced with the one-based page index to produce each output file. The following code snippet explains the same.

N> The `Split` method is available only on Windows-specific platforms (Windows Forms, WPF, ASP.NET, and ASP.NET MVC). On cross-platform targets, you can achieve the same result by using `ImportPage` inside a loop, as shown in the cross-platform tab.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Splitting-PDF-file-into-individual-pages/.NET/Splitting-PDF-file-into-individual-pages/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the source PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
for (int i = 0; i < loadedDocument.PageCount; i++)
{
    //Create a new document for each page.
    PdfDocument document = new PdfDocument();
    //Import the page from the loaded document.
    document.ImportPage(loadedDocument, i);

    //Save and close the new document.
    document.Save(string.Format("Output{0}.pdf", i + 1));
    document.Close(true);
}

//Close the source document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set the file name pattern for the split pages.
const string destinationFilePattern = "Output" + "{0}.pdf";
//Split the pages into separate documents.
loadedDocument.Split(destinationFilePattern);
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Set the file name pattern for the split pages.
Const destinationFilePattern As String = "Output" + "{0}.pdf"
'Split the pages into separate documents.
loadedDocument.Split(destinationFilePattern)
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Splitting-PDF-file-into-individual-pages/).

## Spanning a text element across multiple pages and drawing the next element

The [PdfLayoutFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutFormat.html) class allows text to flow across pages. The [PdfLayoutResult](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutResult.html) class provides the rendered bounds of the previously added text, which can be used to place successive elements without overlapping. The Syncfusion PDF library also provides [PageAddedEventArgs](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PageAddedEventArgs.html) to get the details of the page that was just added, so that you can draw a new text element from where the previous one ended.

The following code example illustrates the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Span-text-element-to-multiple-pages-in-a-PDF/.NET/Span-text-element-to-multiple-pages-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Text;

//Create a PDF document instance.
PdfDocument document = new PdfDocument();
//Subscribe to the PageAdded event.
document.Pages.PageAdded += Pages_PageAdded;
//Create a new page and add it as the last page of the document.
PdfPage page = document.Pages.Add();
PdfGraphics graphics = page.Graphics;

//Read the long text from the text file.
FileStream inputStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
StreamReader reader = new StreamReader(inputStream, Encoding.ASCII);
string text = reader.ReadToEnd();
reader.Dispose();
const int paragraphGap = 10;
//Create a text element with the text and font.
PdfTextElement textElement = new PdfTextElement(text, new PdfStandardFont(PdfFontFamily.TimesRoman, 14));
PdfLayoutFormat layoutFormat = new PdfLayoutFormat();
layoutFormat.Layout = PdfLayoutType.Paginate;
layoutFormat.Break = PdfLayoutBreakType.FitPage;
//Draw the first paragraph.
PdfLayoutResult result = textElement.Draw(page, new RectangleF(0, 0, page.GetClientSize().Width / 2, page.GetClientSize().Height), layoutFormat);
//Draw the second paragraph from the first paragraph's end position.
result = textElement.Draw(result.Page, new RectangleF(0, result.Bounds.Bottom + paragraphGap, page.GetClientSize().Width / 2, page.GetClientSize().Height), layoutFormat);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

//Event handler for the PageAdded event.
void Pages_PageAdded(object sender, PageAddedEventArgs args)
{
    PdfPage page = args.Page;
    page.Graphics.DrawRectangle(PdfPens.Black, new RectangleF(0, 0, page.GetClientSize().Width, page.GetClientSize().Height));
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Text;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Subscribe to the PageAdded event.
document.Pages.PageAdded += Pages_PageAdded;
//Create a new page and add it as the last page of the document.
PdfPage page = document.Pages.Add();
PdfGraphics graphics = page.Graphics;

//Read the long text from the text file.
StreamReader reader = new StreamReader(@"input.txt", Encoding.ASCII);
string text = reader.ReadToEnd();
reader.Close();
const int paragraphGap = 10;
//Create a text element with the text and font.
PdfTextElement textElement = new PdfTextElement(text, new PdfStandardFont(PdfFontFamily.TimesRoman, 14));
PdfLayoutFormat layoutFormat = new PdfLayoutFormat();
layoutFormat.Layout = PdfLayoutType.Paginate;
layoutFormat.Break = PdfLayoutBreakType.FitPage;

//Draw the first paragraph.
PdfLayoutResult result = textElement.Draw(page, new RectangleF(0, 0, page.GetClientSize().Width / 2, page.GetClientSize().Height), layoutFormat);
//Draw the second paragraph from the first paragraph's end position.
result = textElement.Draw(result.Page, new RectangleF(0, result.Bounds.Bottom + paragraphGap, page.GetClientSize().Width / 2, page.GetClientSize().Height), layoutFormat);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

//Event handler for the PageAdded event.
void Pages_PageAdded(object sender, PageAddedEventArgs args)
{
    PdfPage page = args.Page;
    page.Graphics.DrawRectangle(PdfPens.Black, new RectangleF(0, 0, page.GetClientSize().Width, page.GetClientSize().Height));
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Text

'Create a new PDF document.
Dim document As New PdfDocument()
'Subscribe to the PageAdded event.
AddHandler document.Pages.PageAdded, AddressOf Pages_PageAdded
'Create a new page and add it as the last page of the document.
Dim page As PdfPage = document.Pages.Add()
Dim graphics As PdfGraphics = page.Graphics

'Read the long text from the text file.
Dim reader As New StreamReader("input.txt", Encoding.ASCII)
Dim text As String = reader.ReadToEnd()
reader.Close()
Const paragraphGap As Integer = 10
'Create a text element with the text and font.
Dim textElement As New PdfTextElement(text, New PdfStandardFont(PdfFontFamily.TimesRoman, 14))
Dim layoutFormat As New PdfLayoutFormat()
layoutFormat.Layout = PdfLayoutType.Paginate
layoutFormat.Break = PdfLayoutBreakType.FitPage

'Draw the first paragraph.
Dim result As PdfLayoutResult = textElement.Draw(page, New RectangleF(0, 0, page.GetClientSize().Width / 2, page.GetClientSize().Height), layoutFormat)
'Draw the second paragraph from the first paragraph's end position.
result = textElement.Draw(result.Page, New RectangleF(0, result.Bounds.Bottom + paragraphGap, page.GetClientSize().Width / 2, page.GetClientSize().Height), layoutFormat)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

'Event handler for the PageAdded event.
Private Sub Pages_PageAdded(sender As Object, args As PageAddedEventArgs)
    Dim page As PdfPage = args.Page
    page.Graphics.DrawRectangle(PdfPens.Black, New RectangleF(0, 0, page.GetClientSize().Width, page.GetClientSize().Height))
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Span-text-element-to-multiple-pages-in-a-PDF/).

## Inserting duplicate pages in an existing PDF document

The Syncfusion PDF library enables you to duplicate existing pages and insert them at various locations within a document. This functionality is useful for creating templates, replicating forms, and expanding content without recreating each page. The [Insert](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_Insert_System_Int32_) overload that accepts a `PdfLoadedPage` instance allows you to insert a copy of an existing page.

Refer to the following code example for inserting a duplicate page in a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Inserting-duplicate-pages-in-the-existing-pdf/.NET/Inserting-duplicate-pages-in-the-existing-pdf/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Insert the duplicate page at the beginning of the document.
loadedDocument.Pages.Insert(0, loadedPage);
//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the first page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;
//Insert the duplicate page at the beginning of the document.
loadedDocument.Pages.Insert(0, loadedPage);
//Save and close the document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Get the first page.
Dim page As PdfPageBase = TryCast(loadedDocument.Pages(0), PdfPageBase)
'Insert the duplicate page at the beginning of the document.
loadedDocument.Pages.Insert(0, page)
'Save and close the document.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Inserting-duplicate-pages-in-the-existing-pdf).

## Adding a new page to an existing PDF while preserving its original size

A new page can be inserted into an existing PDF document while retaining the dimensions of the existing pages by passing the source page's [Size](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_Size) to the `Insert` overload that accepts a `SizeF` value.

Refer to the following code example to create a new page in a PDF document while maintaining its original size.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Insert-New-Page-in-Existing-PDF-with-Same-Size/.NET/Insert-New-Page-in-Existing-PDF-with-Same-Size/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the size of the first page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Insert a new page at the beginning with the same size as the first page.
PdfPageBase page = loadedDocument.Pages.Insert(0, loadedPage.Size);

//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
//Draw the text on the page.
page.Graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
//Save the updated PDF document.
loadedDocument.Save("Output.pdf");
//Close the loaded document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Get the size of the first page.
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

//Insert a new page at the beginning with the same size as the first page.
PdfPageBase page = loadedDocument.Pages.Insert(0, loadedPage.Size);

//Set the standard font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
//Draw the text on the page.
page.Graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
//Save the updated PDF document.
loadedDocument.Save("Output.pdf");
//Close the loaded document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Get the size of the first page.
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

'Insert a new page at the beginning with the same size as the first page.
Dim page As PdfPageBase = loadedDocument.Pages.Insert(0, loadedPage.Size)

'Set the standard font.
Dim font As New PdfStandardFont(PdfFontFamily.Helvetica, 20)
'Draw the text on the page.
page.Graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))
'Save the updated PDF document.
loadedDocument.Save("Output.pdf")
'Close the loaded document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Insert-New-Page-in-Existing-PDF-with-Same-Size/).

## Page-level actions in PDF documents

Essential<sup>&reg;</sup> PDF supports page-level actions that allow you to add, retrieve, edit, and remove actions triggered by PDF page events such as `OnOpen` and `OnClose`. You can assign a [PdfJavaScriptAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfJavaScriptAction.html), [PdfUriAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfUriAction.html), [PdfSoundAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfSoundAction.html), or [PdfLaunchAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfLaunchAction.html) to these events. Multiple actions can be chained by using the [Next](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAction.html#Syncfusion_Pdf_Interactive_PdfAction_Next) property.

Refer to the following code example to define custom behavior for PDF page-level actions.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Add-Page-Level-Actions-in-PDF/.NET/Add-Page-Level-Actions-in-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
using (PdfDocument document = new PdfDocument())
{
    //Add a page to the document.
    PdfPage page1 = document.Pages.Add();
    //Create and add a new JavaScript action to execute when the first page opens.
    page1.Actions.OnOpen = new PdfJavaScriptAction("app.alert(\"Welcome! This page has just been opened.\");");
    //Create and add a new URI action to execute when the first page closes.
    page1.Actions.OnClose = new PdfUriAction("http://www.google.com");

    //Add a second page to the document.
    PdfPage page2 = document.Pages.Add();
    //Create a sound action.
    PdfSoundAction soundAction = new PdfSoundAction("Startup.wav");
    soundAction.Sound.Bits = 16;
    soundAction.Sound.Channels = PdfSoundChannels.Stereo;
    soundAction.Sound.Encoding = PdfSoundEncoding.Signed;
    soundAction.Volume = 0.9f;
    //Set the sound action to execute when the second page opens.
    page2.Actions.OnOpen = soundAction;
    //Create and add a new Launch action to execute when the second page closes.
    page2.Actions.OnClose = new PdfLaunchAction("logo.png");

    //Add a third page to the document.
    PdfPage page3 = document.Pages.Add();
    //Create and add chained JavaScript actions to execute when the third page opens.
    PdfAction jsAction = new PdfJavaScriptAction("app.alert(\"Welcome! Third page has just been opened.\");");
    jsAction.Next = new PdfJavaScriptAction("app.alert(\"This is the second action.\");");
    jsAction.Next.Next = new PdfJavaScriptAction("app.alert(\"This is the third action.\");");
    page3.Actions.OnOpen = jsAction;

    //Save the document.
    document.Save("Output.pdf");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new PDF document.
using (PdfDocument document = new PdfDocument())
{
    //Add a page to the document.
    PdfPage page1 = document.Pages.Add();
    //Create and add a new JavaScript action to execute when the first page opens.
    page1.Actions.OnOpen = new PdfJavaScriptAction("app.alert(\"Welcome! This page has just been opened.\");");
    //Create and add a new URI action to execute when the first page closes.
    page1.Actions.OnClose = new PdfUriAction("http://www.google.com");

    //Add a second page to the document.
    PdfPage page2 = document.Pages.Add();
    //Create a sound action.
    PdfSoundAction soundAction = new PdfSoundAction("Startup.wav");
    soundAction.Sound.Bits = 16;
    soundAction.Sound.Channels = PdfSoundChannels.Stereo;
    soundAction.Sound.Encoding = PdfSoundEncoding.Signed;
    soundAction.Volume = 0.9f;
    //Set the sound action to execute when the second page opens.
    page2.Actions.OnOpen = soundAction;
    //Create and add a new Launch action to execute when the second page closes.
    page2.Actions.OnClose = new PdfLaunchAction("logo.png");

    //Add a third page to the document.
    PdfPage page3 = document.Pages.Add();
    //Create and add chained JavaScript actions to execute when the third page opens.
    PdfAction jsAction = new PdfJavaScriptAction("app.alert(\"Welcome! Third page has just been opened.\");");
    jsAction.Next = new PdfJavaScriptAction("app.alert(\"This is the second action.\");");
    jsAction.Next.Next = new PdfJavaScriptAction("app.alert(\"This is the third action.\");");
    page3.Actions.OnOpen = jsAction;

    //Save the document.
    document.Save("Output.pdf");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

'Create a new PDF document.
Using document As New PdfDocument()

    'Add a page to the document.
    Dim page1 As PdfPage = document.Pages.Add()
    'Create and add a new JavaScript action to execute when the first page opens.
    page1.Actions.OnOpen = New PdfJavaScriptAction(
        "app.alert(""Welcome! This page has just been opened."");"
    )
    'Create and add a new URI action to execute when the first page closes.
    page1.Actions.OnClose = New PdfUriAction("http://www.google.com")

    'Add a second page to the document.
    Dim page2 As PdfPage = document.Pages.Add()
    'Create a sound action.
    Dim soundAction As New PdfSoundAction("Startup.wav")
    soundAction.Sound.Bits = 16
    soundAction.Sound.Channels = PdfSoundChannels.Stereo
    soundAction.Sound.Encoding = PdfSoundEncoding.Signed
    soundAction.Volume = 0.9F
    'Set the sound action to execute when the second page opens.
    page2.Actions.OnOpen = soundAction
    'Create and add a new Launch action to execute when the second page closes.
    page2.Actions.OnClose = New PdfLaunchAction("logo.png")

    'Add a third page to the document.
    Dim page3 As PdfPage = document.Pages.Add()
    'Create and add chained JavaScript actions to execute when the third page opens.
    Dim jsAction As PdfAction = New PdfJavaScriptAction(
        "app.alert(""Welcome! Third page has just been opened."");"
    )
    jsAction.Next = New PdfJavaScriptAction(
        "app.alert(""This is the second action."");"
    )
    jsAction.Next.Next = New PdfJavaScriptAction(
        "app.alert(""This is the third action."");"
    )
    page3.Actions.OnOpen = jsAction

    'Save the document.
    document.Save("Output.pdf")
End Using

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Add-Page-Level-Actions-in-PDF/).

## Removing page-level actions from a PDF

You can remove page-level actions from a PDF document by setting `OnOpen` and `OnClose` to `null` (or `Nothing` in Visual Basic) for each page. This disables any actions that execute on page open or close while preserving existing annotation actions where required.

Refer to the following code example for removing PDF page-level actions.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Removing-page-level-actions-from-PDF/.NET/Removing-page-level-actions-from-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
using (PdfLoadedDocument document = new PdfLoadedDocument(Path.GetFullPath(@"Data/Input.pdf")))
{
    //Iterate through all pages in the document.
    foreach (PdfLoadedPage page in document.Pages)
    {
        //Remove any JavaScript or actions that execute
        //when the page is opened.
        page.Actions.OnOpen = null;

        //Remove any JavaScript or actions that execute
        //when the page is closed.
        page.Actions.OnClose = null;
    }
    //Save the modified PDF document.
    document.Save(Path.GetFullPath(@"Output/Output.pdf"));
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document.
using (PdfLoadedDocument document = new PdfLoadedDocument(Path.GetFullPath(@"Data/Input.pdf")))
{
    //Iterate through all pages in the document.
    foreach (PdfLoadedPage page in document.Pages)
    {
        //Remove any JavaScript or actions that execute
        //when the page is opened.
        page.Actions.OnOpen = null;
        //Remove any JavaScript or actions that execute
        //when the page is closed.
        page.Actions.OnClose = null;
    }
    //Save the modified PDF document.
    document.Save(Path.GetFullPath(@"Output/Output.pdf"));
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the existing PDF document.
Using document As New PdfLoadedDocument(
        Path.GetFullPath("Data/Input.pdf"))
    'Iterate through all pages in the document.
    For Each page As PdfLoadedPage In document.Pages
        'Remove any JavaScript or actions that execute
        'when the page is opened.
        page.Actions.OnOpen = Nothing
        'Remove any JavaScript or actions that execute
        'when the page is closed.
        page.Actions.OnClose = Nothing
    Next
    'Save the modified PDF document.
    document.Save(Path.GetFullPath("Output/Output.pdf"))

    'Close the document.
    document.Close(True)
End Using

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Removing-page-level-actions-from-PDF/).
