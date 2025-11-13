---
title: Working with pages | Syncfusion
description: This section explains how to add, rearrange, remove pages and detect empty pages from the PDF document
platform: document-processing
control: PDF
documentation: UG
---
# Working with PDF document Pages

## Adding a new page to the document

The following code sample explains you on how to add a [PdfPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPage.html) in a PDF document. When multiple pages are added, the new page is always added to the end of the document.

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

You can insert an empty page at any location in the existing PDF document using [Insert](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_Insert_System_Int32_) method. The below code snippet explains the same.

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

You can add margin to all the PDF pages of the PDF document using the [PageSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_PageSettings) property. The following code snippet illustrates the same.

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

//Creates a solid brush.
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
//Set margin for all the pages
document.PageSettings.Margins.All = 10;
//Add a page.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Creates a solid brush.
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

'Save ad close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Add-margin-to-the-PDF-pages/).

N> The default margin is set to 40 points, ensuring uniform spacing between the content and the page edges. This margin allows sufficient space for better readability and helps prevent content from being truncated during printing or viewing.

## Adding sections with different page settings

Essential<sup>&reg;</sup> PDF supports adding sections with different page settings like [Height](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Height), [Margins](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Margins), [Orientation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Orientation), [Rotate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Rotate), [Size](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Size), [Transition](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Transition) and [Width](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Width). You can add sections to a PDF document by using the [PdfSection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfSection.html) available in [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) instance and create page settings to the ``PdfSection`` using the [PageSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfSection.html#Syncfusion_Pdf_PdfSection_PageSettings) property. 

The following code snippet explains how to add more sections to a PDF document with different page settings.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Adding-sections-with-different-page-settings/.NET/Adding-sections-with-different-page-settings/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Create a solid brush and standard font
PdfBrush brush = new PdfSolidBrush(Color.Black);
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);

//Section - 1
//Add new section to the document
PdfSection section = document.Sections.Add();
//Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle0;
section.PageSettings.Size = PdfPageSize.A5;
section.PageSettings.Width = 300;
section.PageSettings.Height = 400;
//Add page to the section and initialize graphics for the page
PdfPage page = section.Pages.Add();
PdfGraphics graphics = page.Graphics;
//Draw simple text on the page
graphics.DrawString("Rotated by 0 degrees", font, brush, new PointF(20, 20));

//Section - 2
//Add new section to the document
section = document.Sections.Add();
//Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
section.PageSettings.Width = 300;
section.PageSettings.Height = 400;
//Add page to the section and initialize graphics for the page
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page
graphics.DrawString("Rotated by 90 degrees", font, brush, new PointF(20, 20));

//Section - 3
//Add new section to the document
section = document.Sections.Add();
//Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle180;
section.PageSettings.Width = 500;
section.PageSettings.Height = 200;
//Add page to the section and initialize graphics for the page
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page
graphics.DrawString("Rotated by 180 degrees", font, brush, new PointF(20, 20));

//Section - 4
//Add new section to the document
section = document.Sections.Add();
//Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle270;
section.PageSettings.Width = 300;
section.PageSettings.Height = 200;
//Add page to the section and initialize graphics for the page
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page
graphics.DrawString("Rotated by 270 degrees", font, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);


{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Create a solid brush and standard font
PdfBrush brush = new PdfSolidBrush(Color.Black);
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);

//Section - 1
//Add new section to the document
PdfSection section = document.Sections.Add();
//Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle0;
section.PageSettings.Size = PdfPageSize.A5;
section.PageSettings.Width = 300;
section.PageSettings.Height = 400;
//Add page to the section and initialize graphics for the page
PdfPage page = section.Pages.Add();
PdfGraphics graphics = page.Graphics;
//Draw simple text on the page
graphics.DrawString("Rotated by 0 degrees", font, brush, new PointF(20, 20));

//Section - 2
//Add new section to the document
section = document.Sections.Add();
//Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
section.PageSettings.Width = 300;
section.PageSettings.Height = 400;
//Add page to the section and initialize graphics for the page
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page
graphics.DrawString("Rotated by 90 degrees", font, brush, new PointF(20, 20));

//Section - 3
//Add new section to the document
section = document.Sections.Add();
//Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle180;
section.PageSettings.Width = 500;
section.PageSettings.Height = 200;
//Add page to the section and initialize graphics for the page
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page
graphics.DrawString("Rotated by 180 degrees", font, brush, new PointF(20, 20));

//Section - 4
//Add new section to the document
section = document.Sections.Add();
//Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle270;
section.PageSettings.Width = 300;
section.PageSettings.Height = 200;
//Add page to the section and initialize graphics for the page
page = section.Pages.Add();
graphics = page.Graphics;
//Draw simple text on the page
graphics.DrawString("Rotated by 270 degrees", font, brush, new PointF(20, 20));

//Save the document
document.Save("Output.pdf");
//Close the instance of PdfDocument
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document
Dim document As PdfDocument = New PdfDocument
'Create a solid brush and standard font
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 14)

'Section - 1
'Add new section to the document
Dim section As PdfSection = document.Sections.Add
'Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle0
section.PageSettings.Size = PdfPageSize.A5
section.PageSettings.Width = 300
section.PageSettings.Height = 400
'Add page to the section and initialize graphics for the page
Dim page As PdfPage = section.Pages.Add
Dim graphics As PdfGraphics = page.Graphics
'Draw simple text on the page
graphics.DrawString("Rotated by 0 degrees", font, brush, New PointF(20, 20))

'Section - 2
'Add new section to the document
section = document.Sections.Add
'Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90
section.PageSettings.Width = 300
section.PageSettings.Height = 400
'Add page to the section and initialize graphics for the page
page = section.Pages.Add
graphics = page.Graphics
'Draw simple text on the page
graphics.DrawString("Rotated by 90 degrees", font, brush, New PointF(20, 20))

'Section - 3
'Add new section to the document
section = document.Sections.Add
'Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle180
section.PageSettings.Width = 500
section.PageSettings.Height = 200
'Add page to the section and initialize graphics for the page
page = section.Pages.Add
graphics = page.Graphics
'Draw simple text on the page
graphics.DrawString("Rotated by 180 degrees", font, brush, New PointF(20, 20))

'Section - 4
'Add new section to the document
section = document.Sections.Add
'Create page settings to the section
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle270
section.PageSettings.Width = 300
section.PageSettings.Height = 200
'Add page to the section and initialize graphics for the page
page = section.Pages.Add
graphics = page.Graphics
'Draw simple text on the page
graphics.DrawString("Rotated by 270 degrees", font, brush, New PointF(20, 20))

'Save the document
document.Save("Output.pdf")
'Close the instance of PdfDocument
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Adding-sections-with-different-page-settings/). 

## Customize section page numbering styles in PDF documents

You can customize the numbering style of page labels in a PDF section by setting the [NumberStyle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfMultipleNumberValueField.html#Syncfusion_Pdf_PdfMultipleNumberValueField_NumberStyle) property of a [PdfSectionPageNumberField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfSectionPageNumberField.html).
For example, to use lowercase Roman numerals (i, ii, iii, ...), assign `PdfNumberStyle.LowerRoman` to the [NumberStyle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfMultipleNumberValueField.html#Syncfusion_Pdf_PdfMultipleNumberValueField_NumberStyle) property.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}

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

    // You can add other content to the main body of the page here.
    // For example, let's draw text at the top, leaving space for the footer.
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

    // You can add other content to the main body of the page here.
    // For example, let's draw text at the top, leaving space for the footer.
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

    'Draw main content at the top.
    page.Graphics.DrawString("This is the main content of a page with a footer.", font, PdfBrushes.Black, New PointF(10, 10))
Next

'Save the PDF document to file stream.
document.Save("Output.pdf")

'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from GitHub.

## Get number of pages from a PDF document 

You can get page count from the existing PDF document as shown in the following code snippet.

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


## Importing pages from an existing document.

Essential<sup>&reg;</sup> PDF allows you to import a page or import a range of pages from one document to the other. The following code sample illustrates how to import a range of pages from an existing document using [ImportPageRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_ImportPageRange_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_Int32_System_Int32_) method.

{% tabs %}   

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Importing-pages-from-one-PDF-to-another-PDF/.NET/Importing-pages-from-one-PDF-to-another-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Create a new PDF document.
PdfDocument document = new PdfDocument();
int startIndex = 0;
int endIndex = loadedDocument.Pages.Count - 1;
//Import all the pages to the new PDF document.
document.ImportPageRange(loadedDocument, startIndex, endIndex);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
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

'Load the PDF document.
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

## Importing pages from an existing document without bookmarks.

You can import a page or range of pages from one document to other without bookmarks using [ImportPageRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_ImportPageRange_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_Int32_System_Int32_System_Boolean_) method. Refer to the following code sample. 

N> Performance will be effective only in the large PDF document.

{% tabs %}   

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Import-pages-from-PDF-without-bookmarks/.NET/Import-pages-from-PDF-without-bookmarks/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Create the new PDF document
PdfDocument document = new PdfDocument();
int startIndex = 0;
int endIndex = loadedDocument.Pages.Count - 1;
//Import all the pages to the new PDF document
document.ImportPageRange(loadedDocument, startIndex, endIndex, false);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Create the new PDF document
PdfDocument document = new PdfDocument();
int startIndex = 0;
int endIndex = loadedDocument.Pages.Count - 1;
//Import all the pages to the new PDF document without bookmarks
document.ImportPageRange(loadedDocument, startIndex, endIndex,false);

//Save the document
document.Save("Output.pdf");
//Close both document instances
loadedDocument.Close(true);
document.Close(true);
System.Diagnostics.Process.Start("Output.pdf");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Create the new PDF document
Dim document As PdfDocument = New PdfDocument()
Dim startIndex As Integer = 0
Dim endIndex As Integer = loadedDocument.Pages.Count - 1
'Import all the pages to the new PDF document without bookmarks
document.ImportPageRange(loadedDocument, startIndex, endIndex, False)

'Save the document
document.Save("Output.pdf")
'Close both the document instances
loadedDocument.Close(True)
document.Close(True)

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Import-pages-from-PDF-without-bookmarks/.NET). 

## Rearranging pages in an existing document

You can rearrange the pages in an existing PDF document using [ReArrange](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_ReArrange_System_Int32___) method. This method uses zero based start index. The following code snippet illustrates the same.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Rearrange-pages-in-an-existing-PDF-document/.NET/Rearrange-pages-in-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Rearrange the page by index
loadedDocument.Pages.ReArrange(new int[] { 1, 0 });

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Rearrange the page by index
loadedDocument.Pages.ReArrange(new int[] {1, 0});
//Save and close the document
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Rearrange the page by index
loadedDocument.Pages.ReArrange(New Integer() {1, 0})
'Save and close the document
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Rearrange-pages-in-an-existing-PDF-document/). 


## Changing the page numbers in a PDF document

You can alter the page label for the existing PDF document using [PdfPageLabel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageLabel.html) class. Refer to the following code example. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Changing-page-numbers-in-a-PDF-document/.NET/Changing-page-numbers-in-a-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Create a page label
PdfPageLabel pageLabel = new PdfPageLabel();
//Set the number style with upper case roman letters
pageLabel.NumberStyle = PdfNumberStyle.UpperRoman;
//Set the staring number as 1
pageLabel.StartNumber = 1;
loadedDocument.LoadedPageLabel = pageLabel;

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Create a page label
PdfPageLabel pageLabel = new PdfPageLabel();
//Set the number style with upper case roman letters
pageLabel.NumberStyle = PdfNumberStyle.UpperRoman;
//Set the staring number as 1
pageLabel.StartNumber = 1;
loadedDocument.LoadedPageLabel = pageLabel;

//Save the document
loadedDocument.Save("Output.pdf");
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Create a page label
Dim pageLabel As New PdfPageLabel()
'Set the number style with upper case roman letters
pageLabel.NumberStyle = PdfNumberStyle.UpperRoman
'Set the staring number as 1
pageLabel.StartNumber = 1
loadedDocument.LoadedPageLabel = pageLabel

'Save the document
loadedDocument.Save("Output.pdf")
'Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Changing-page-numbers-in-a-PDF-document/). 

## Removing pages from a document

You can remove the pages from the existing PDF document using [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_RemoveAt_System_Int32_) method as shown in the below code example. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Remove-pages-from-the-existing-PDF-document/.NET/Remove-pages-from-the-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Remove the first page in the PDF document
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
//Remove the first page in the PDF document
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
'Remove the first page in the PDF document
loadedDocument.Pages.RemoveAt(0)
'Save the document.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Remove-pages-from-the-existing-PDF-document/). 

## Rotating a PDF page

You can rotate a particular PDF page in the PDF document using [PdfPageRotateAngle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageRotateAngle.html) Enum as shown the following code example. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Rotating-a-PDF-page/.NET/Rotating-a-PDF-page/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Add a section.
PdfSection section = document.Sections.Add();
//Rotate a section/page
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
PdfPage page = section.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Syncfusion.Drawing.Color.Black);
//Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Draws the text.
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
//Rotate a section/page
section.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
PdfPage page = section.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 14);
//Draws the text.
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
'Rotate a section/page
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

You can also rotate a PDF page in the existing PDF document using [PdfPageRotateAngle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageRotateAngle.html) as shown in the following code example.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Rotate-an-existing-PDF-page/.NET/Rotate-an-existing-PDF-page/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Gets the page
PdfPageBase loadedPage = loadedDocument.Pages[0] as PdfPageBase;
//Set the rotation for loaded page
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
//Gets the page.
PdfPageBase loadedPage = loadedDocument.Pages[0] as PdfPageBase;
//Set the rotation for loaded page.
loadedPage.Rotation = PdfPageRotateAngle.RotateAngle90;
             
//Save the document.
loadedDocument.Save("Output.pdf");
//Close the Document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document. 
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Gets the page.
Dim page As PdfPageBase = TryCast(loadedDocument.Pages(0), PdfPageBase)
'Set the rotation for loaded page.
page.Rotation = PdfPageRotateAngle.RotateAngle90

'Save the document. 
loadedDocument.Save("Output.pdf")
'Closes the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Rotate-an-existing-PDF-page). 

## Detect empty pages from a PDF document

You can find the empty pages from the PDF document using the [IsBlank](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_IsBlank) property as shown in the following code sample.  

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Detect-empty-pages-from-PDF/.NET/Detect-empty-pages-from-PDF/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Gets the page.
PdfPageBase loadedPage = loadedDocument.Pages[0] as PdfPageBase;
//get the page is blank or not.
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
//Gets the page.
PdfPageBase loadedPage = loadedDocument.Pages[0] as PdfPageBase;
//Get the page is blank or not.
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
 Dim loadedDocument As New PdfLoadedDocument("input.pdf")
'Gets the page.
 Dim page As PdfPageBase = TryCast(loadedDocument.Pages(0), PdfPageBase)
'Get the page is blank or not.
 bool isEmpty = loadedPage.IsBlank
 
'Save the document.
loadedDocument.Save("Output.pdf")
'Closes the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Detect-empty-pages-from-PDF/). 

## Splitting a PDF file to individual pages

Essential<sup>&reg;</sup> PDF allows to split the pages of an existing PDF document into multiple individual PDF documents using [Split](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Split_System_String_) method of [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The following code snippet explains the same.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Splitting-PDF-file-into-individual-pages/.NET/Splitting-PDF-file-into-individual-pages/Program.cs" %}

//Due to platform limitations, Essential<sup>&reg;</sup> PDF supports splitting a PDF file into individual pages only in Windows Forms, WPF, ASP.NET, and ASP.NET MVC platforms. However this can be achieved by using the following code snippet. 

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
for (int i = 0; i < loadedDocument.PageCount; i++)
{
//Creates a new document
PdfDocument document = new PdfDocument();
//Imports the pages from the loaded document
document.ImportPage(loadedDocument, i);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Sets pattern.
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
'Sets pattern.
Const destinationFilePattern As String = "Output" + "{0}.pdf"
'Split the pages into separate documents.
loadedDocument.Split(destinationFilePattern)
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Splitting-PDF-file-into-individual-pages/). 

## Span a text element to multiple pages and draw the next element

The ['PdfLayoutFormat'](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutFormat.html) class helps to allow the text to flow across pages. The ['PdfLayoutResult'](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutResult.html) class provides the rendered bounds of the previously added text, which can be used to place successive elements without overlapping. 
The ['Syncfusion PDF library'](https://www.syncfusion.com/document-processing/pdf-framework/net) provides ['PageAddedEventArgs'](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PageAddedEventArgs.html) to get the current Page details, and we can draw the next new text element from where the last text element ends.
The following code example illustrates the same.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Span-text-element-to-multiple-pages-in-a-PDF/.NET/Span-text-element-to-multiple-pages-in-a-PDF/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Text;

//Create a PDF document instance.
PdfDocument document = new PdfDocument();
//Add the event.
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
//Draw the second paragraph from the first paragraph’s end position.
result = textElement.Draw(result.Page, new RectangleF(0, result.Bounds.Bottom + paragraphGap, page.GetClientSize().Width / 2, page.GetClientSize().Height), layoutFormat);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

//Event handler for PageAdded event.
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
//Add the event.
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
//Draw the second paragraph from the first paragraph’s end position.
result = textElement.Draw(result.Page, new RectangleF(0, result.Bounds.Bottom + paragraphGap, page.GetClientSize().Width / 2, page.GetClientSize().Height), layoutFormat);

//Save and close the document.
document.Save("Sample.pdf");
document.Close(true);

//Event handler for PageAdded event.
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
'Add the event.
AddHandler document.Pages.PageAdded, AddressOf Pages_PageAdded
'Create a new page and add it as the last page of the document.
Dim page As PdfPage = document.Pages.Add()
Dim graphics As PdfGraphics = page.Graphics

'Read the RTL text from the text file.
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
'Draw the second paragraph from the first paragraph’s end position.
result = textElement.Draw(result.Page, New RectangleF(0, result.Bounds.Bottom + paragraphGap, page.GetClientSize().Width / 2, page.GetClientSize().Height), layoutFormat)

'Save and close the document.
document.Save("Sample.pdf")
document.Close(True)

'Event handler for PageAdded event.
Private Sub Pages_PageAdded(sender As Object, args As PageAddedEventArgs)
Dim page As PdfPage = args.Page
page.Graphics.DrawRectangle(PdfPens.Black, New RectangleF(0, 0, page.GetClientSize().Width, page.GetClientSize().Height))
End Sub

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Span-text-element-to-multiple-pages-in-a-PDF/). 


## Inserting duplicate pages in the existing pdf document

The Syncfusion PDF library enables users to duplicate existing pages and insert them at various locations within a document. This functionality is especially valuable for creating templates, replicating forms, and expanding content without the need to manually recreate each page. The [Insert](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedPageCollection.html#Syncfusion_Pdf_Parsing_PdfLoadedPageCollection_Insert_System_Int32_) method in the PdfLoadedPageCollection facilitates the creation of duplicate pages. 

Refer to the following code example for creating duplicate page in a PDF document. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Inserting-duplicate-pages-in-the-existing-pdf/.NET/Inserting-duplicate-pages-in-the-existing-pdf/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"); 
//Gets the page 
PdfLoadedPage loadedPage= loadedDocument.Pages[0] as PdfLoadedPage; 
//Inserts the duplicate page in the beginning of the document. 
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
//Gets the Page 
PdfLoadedPage loadedPage= loadedDocument.Pages[0] as PdfLoadedPage; 
//Inserts the duplicate page in the beginning of the document. 
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
'Gets the page. 
Dim page As PdfPageBase = TryCast(loadedDocument.Pages(0), PdfPageBase)  
'Inserts the duplicate page in the beginning of the document. 
loadedDocument.Pages.Insert(0, page) 
'Save and close the document. 
loadedDocument.Save("Output.pdf") 
'Close the document.
loadedDocument.Close(True) 

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Inserting-duplicate-pages-in-the-existing-pdf). 

## Adding a new page to an existing PDF while preserving its original size

A new page can be inserted into an existing PDF document while retaining the dimensions of the existing pages.

Refer to the following code example to create a new page in a PDF document while maintaining its original size.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Insert-New-Page-in-Existing-PDF-with-Same-Size/.NET/Insert-New-Page-in-Existing-PDF-with-Same-Size/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Get the size of the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

// Insert a new page at the beginning with the same size as the first page
PdfPageBase page = loadedDocument.Pages.Insert(0, loadedPage.Size);

// Set the standard font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page, centered
page.Graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
// Save the updated PDF document
loadedDocument.Save("Output.pdf");
// Close the loaded document
loadedDocument.Close(true); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Get the size of the first page
PdfLoadedPage loadedPage = loadedDocument.Pages[0] as PdfLoadedPage;

// Insert a new page at the beginning with the same size as the first page
PdfPageBase page = loadedDocument.Pages.Insert(0, loadedPage.Size);

// Set the standard font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page, centered
page.Graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
// Save the updated PDF document
loadedDocument.Save("Output.pdf");
// Close the loaded document
loadedDocument.Close(true); 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
' Get the size of the first page
Dim loadedPage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

' Insert a new page at the beginning with the same size as the first page
Dim page As PdfPageBase = loadedDocument.Pages.Insert(0, loadedPage.Size)

' Set the standard font
Dim font As New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text on the page, centered
page.Graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))
' Save the updated PDF document
loadedDocument.Save("Output.pdf")
' Close the loaded document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Insert-New-Page-in-Existing-PDF-with-Same-Size/.NET).
