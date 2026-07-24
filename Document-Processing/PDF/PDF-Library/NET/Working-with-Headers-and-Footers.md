---
title: Working with Headers and Footers | Syncfusion
description: This section explains how to create headers and footers in a PDF document using the Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with PDF Headers and Footers

Syncfusion<sup>&reg;</sup> PDF supports drawing headers and footers in a PDF document using the [PdfPageTemplateElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageTemplateElement.html) class. A header and footer can contain any type of element, including images, text, shapes, and dynamic fields such as page numbers, page counts, dates, and times.

To quickly get started with adding headers and footers to PDF files using the Syncfusion<sup>&reg;</sup> PDF library for .NET, refer to this video tutorial.
{% youtube "https://youtu.be/zGcQEVw5v9Y?si=lI6qZLUJRw6UWUZi" %}

## Assemblies and NuGet packages

The following assemblies or NuGet packages are required to work with PDF headers and footers.

**Assemblies**

* Syncfusion.Pdf.Base
* Syncfusion.Drawing.Base

**NuGet packages**

* [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) (cross-platform)
* [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms) (Windows-specific)
* [Syncfusion.Pdf.Wpf](https://www.nuget.org/packages/Syncfusion.Pdf.Wpf) (Windows-specific)
* [Syncfusion.Pdf.AspNet](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet) (ASP.NET Web Forms)
* [Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5) (ASP.NET MVC5)
* [Syncfusion.Pdf.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc4) (ASP.NET MVC4)

For more information, refer to the [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) and [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) documentation.

## Page template areas

When you assign a template to a page, Syncfusion<sup>&reg;</sup> PDF divides each page into the following four areas:

* **Top** – The area at the top of the page (default header area).
* **Bottom** – The area at the bottom of the page (default footer area).
* **Left** – The area on the left side of the page.
* **Right** – The area on the right side of the page.

You can assign a [PdfPageTemplateElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageTemplateElement.html) to each area using the [Top](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html#Syncfusion_Pdf_PdfDocumentTemplate_Top), [Bottom](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html#Syncfusion_Pdf_PdfDocumentTemplate_Bottom), [Left](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html#Syncfusion_Pdf_PdfDocumentTemplate_Left), and [Right](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html#Syncfusion_Pdf_PdfDocumentTemplate_Right) properties of the [PdfDocumentTemplate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html) class, accessible through the [Template](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Template) property of [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html).

By default, the top and bottom templates share the same value across all pages in the document. To render different templates on odd and even pages, use the [OddEvenDifferenceEnabled](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentTemplate.html#Syncfusion_Pdf_PdfDocumentTemplate_OddEvenDifferenceEnabled) property of `PdfDocumentTemplate`.

## Adding an automatic field in the header and footer

Syncfusion<sup>&reg;</sup> PDF supports automatic fields such as [PdfPageCountField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageCountField.html), [PdfPageNumberField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageNumberField.html), [PdfDateTimeField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDateTimeField.html), and [PdfCompositeField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfCompositeField.html) for headers and footers. These fields are evaluated automatically for every page in the document.

The following code example shows how to draw a logo image in the header and a composite page-number field in the footer.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Header%20and%20Footer/Adding-an-automatic-field-in-header-and-footer/.NET/Adding-an-automatic-field-in-header-and-footer/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument pdfDocument = new PdfDocument();
//Add a page to the PDF document.
pdfDocument.Pages.Add();
//Create a header template with the full page width and a fixed height of 50 points.
RectangleF bounds = new RectangleF(0, 0, pdfDocument.Pages[0].GetClientSize().Width, 50);
PdfPageTemplateElement header = new PdfPageTemplateElement(bounds);
//Load the image for the header.
FileStream imageStream = new FileStream("Logo.png", FileMode.Open, FileAccess.Read);
PdfImage image = new PdfBitmap(imageStream);
//Draw the image in the header.
header.Graphics.DrawImage(image, new PointF(0, 0), new SizeF(100, 50));
//Add the header at the top.
pdfDocument.Template.Top = header;
//Create a page template that can be used as a footer.
PdfPageTemplateElement footer = new PdfPageTemplateElement(bounds);
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 7);
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Create the page number field.
PdfPageNumberField pageNumber = new PdfPageNumberField(font, brush);
//Create the page count field.
PdfPageCountField count = new PdfPageCountField(font, brush);
//Add the fields in a composite field.
PdfCompositeField compositeField = new PdfCompositeField(font, brush, "Page {0} of {1}", pageNumber, count);
compositeField.Bounds = footer.Bounds;
//Draw the composite field in the footer.
compositeField.Draw(footer.Graphics, new PointF(470, 40));
//Add the footer template at the bottom.
pdfDocument.Template.Bottom = footer;

//Save and close the document.
using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
{
    pdfDocument.Save(outputStream);
}
pdfDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new PDF document.
PdfDocument pdfDocument = new PdfDocument();
//Add a page to the PDF document.
pdfDocument.Pages.Add();
//Create a header template with the full page width and a fixed height of 50 points.
RectangleF bounds = new RectangleF(0, 0, pdfDocument.Pages[0].GetClientSize().Width, 50);
PdfPageTemplateElement header = new PdfPageTemplateElement(bounds);
PdfImage image = new PdfBitmap(@"Logo.png");
//Draw the image in the header.
header.Graphics.DrawImage(image, new PointF(0, 0), new SizeF(100, 50));
//Add the header at the top.
pdfDocument.Template.Top = header;
//Create a page template that can be used as a footer.
PdfPageTemplateElement footer = new PdfPageTemplateElement(bounds);
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 7);
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Create the page number field.
PdfPageNumberField pageNumber = new PdfPageNumberField(font, brush);
//Create the page count field.
PdfPageCountField count = new PdfPageCountField(font, brush);
//Add the fields in a composite field.
PdfCompositeField compositeField = new PdfCompositeField(font, brush, "Page {0} of {1}", pageNumber, count);
compositeField.Bounds = footer.Bounds;
//Draw the composite field in the footer.
compositeField.Draw(footer.Graphics, new PointF(470, 40));
//Add the footer template at the bottom.
pdfDocument.Template.Bottom = footer;

//Save and close the document.
pdfDocument.Save("Output.pdf");
pdfDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new PDF document.
Dim pdfDocument As New PdfDocument()
'Add a page to the PDF document.
pdfDocument.Pages.Add()
'Create a header template with the full page width and a fixed height of 50 points.
Dim bounds As New RectangleF(0, 0, pdfDocument.Pages(0).GetClientSize().Width, 50)
Dim header As New PdfPageTemplateElement(bounds)
Dim image As PdfImage = New PdfBitmap("Logo.png")
'Draw the image in the header.
header.Graphics.DrawImage(image, New PointF(0, 0), New SizeF(100, 50))
'Add the header at the top.
pdfDocument.Template.Top = header
'Create a page template that can be used as a footer.
Dim footer As New PdfPageTemplateElement(bounds)
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 7)
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Create the page number field.
Dim pageNumber As New PdfPageNumberField(font, brush)
'Create the page count field.
Dim count As New PdfPageCountField(font, brush)
'Add the fields in a composite field.
Dim compositeField As New PdfCompositeField(font, brush, "Page {0} of {1}", pageNumber, count)
compositeField.Bounds = footer.Bounds
'Draw the composite field in the footer.
compositeField.Draw(footer.Graphics, New PointF(470, 40))
'Add the footer template at the bottom.
pdfDocument.Template.Bottom = footer

'Save and close the document.
pdfDocument.Save("Output.pdf")
pdfDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Header%20and%20Footer/Adding-an-automatic-field-in-header-and-footer).

> **Note:** Replace `Logo.png` with the actual path to your image file. If the image is larger than the template bounds, it will be clipped. Use [PdfBitmap](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html) or [PdfImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfImage.html) appropriate for your platform.

## Adding dynamic headers and footers in PDF documents

You can add unique, dynamic headers and footers like page numbers or dates to each page in a PDF by handling the [PageAdded](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_PageAdded) event of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. By also using the [BeginPageLayout](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutElement.html#Syncfusion_Pdf_Graphics_PdfLayoutElement_BeginPageLayout) event of the [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) to reserve space, you ensure that your main content does not overlap with the headers or footers.

The following example illustrates how to implement a dynamic header and footer that are drawn on every page in a PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Header%20and%20Footer/Adding-dynamic-headers-and-footers-in-PDF/.NET/Adding-dynamic-headers-and-footers-in-PDF/Program.cs" %}

using System;
using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document.
PdfDocument document = new PdfDocument();

// Subscribe to the PageAdded event to add header and footer for every page.
document.Pages.PageAdded += PageAddedHandler;

// Define content font and brush for the main text.
PdfFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 18);
PdfBrush contentBrush = new PdfSolidBrush(Color.Black);

// Define the main instructional text.
string overflowText =
@"Creating PDF documentation programmatically with Syncfusion .NET libraries enables automation of reports, invoices, and technical manuals.

Key Features:
- Multi-page automatic content flow using pagination.
- Support for rich text formatting: headers, bullets, and tables.
- Insert images, tables, and charts seamlessly.
- Add interactive elements: bookmarks, hyperlinks, and attachments.
- Control layout: margins, page breaks, and dynamic footers.

Usage Example:
This project demonstrates how to paginate multiple paragraphs of text describing PDF functionality. When the content exceeds a single page, the Syncfusion PdfTextElement automatically creates new pages and triggers the PageAdded event. This allows you to attach custom footers, such as page numbers or custom codes, to each page for improved navigation and a professional document appearance.

Adding dynamic footers is useful for:
- Section labeling in large documents.
- Including secure or traceable codes for each page.
- Ensuring readers always know their page context.

Other advanced scenarios:
- Creating a Table of Contents with page navigation.
- Inserting named destinations for quick jumps.
- Using graphics and interactive elements within the same document.

Experiment by updating this program to add headers, watermarks, or section-based page numbers based on your specific requirements.

This concludes the instructional workflow for auto-paginated, footer-enhanced PDF generation in .NET.";

// Set the header and footer heights.
float headerHeight = 40f;
float footerHeight = 30f;

// Create a text element for automatic pagination.
PdfTextElement textElement = new PdfTextElement(overflowText, contentFont, contentBrush);

// Subscribe to the BeginPageLayout event to offset text on each new page below the header.
textElement.BeginPageLayout += (sender, args) =>
{
    // Always start content below the header on every page.
    args.Bounds = new RectangleF(
        0, headerHeight,
        args.Page.GetClientSize().Width,
        args.Page.GetClientSize().Height - headerHeight - footerHeight
    );
};

// Add the first page.
PdfPage firstPage = document.Pages.Add();

// Start drawing content (pagination and the PageAdded event handle the rest).
textElement.Draw(firstPage, new PointF(0, 0));

// Save and close the document.
using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
{
    document.Save(outputStream);
}
document.Close(true);

// Add the header and footer to every page.
static void PageAddedHandler(object sender, Syncfusion.Pdf.PageAddedEventArgs e)
{
    PdfPage page = e.Page;
    int currentPage = page.Section.Pages.IndexOf(page) + 1;

    // Draw the header at the top (within the reserved header bounds).
    string headerText = $"This is the header - Page {currentPage}";
    page.Graphics.DrawString(
        headerText,
        new PdfStandardFont(PdfFontFamily.Helvetica, 14, PdfFontStyle.Bold),
        new PdfSolidBrush(Color.DimGray),
        new PointF(10, 10)
    );

    // Draw the footer at the bottom (within the reserved footer area).
    string timestamp = DateTime.Now.ToString("'Date:' yyyy-MM-dd 'Time:' HH:mm:ss");
    string footerText = $"Page {currentPage} {timestamp}";
    page.Graphics.DrawString(
        footerText,
        new PdfStandardFont(PdfFontFamily.Helvetica, 12),
        new PdfSolidBrush(Color.Black),
        new PointF(10, page.GetClientSize().Height - 30)
    );
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System;
using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document.
PdfDocument document = new PdfDocument();

// Subscribe to the PageAdded event to add header and footer for every page.
document.Pages.PageAdded += PageAddedHandler;

// Define content font and brush for the main text.
PdfFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 18);
PdfBrush contentBrush = new PdfSolidBrush(Color.Black);

// Define the main instructional text.
string overflowText =
@"Creating PDF documentation programmatically with Syncfusion .NET libraries enables automation of reports, invoices, and technical manuals.

Key Features:
- Multi-page automatic content flow using pagination.
- Support for rich text formatting: headers, bullets, and tables.
- Insert images, tables, and charts seamlessly.
- Add interactive elements: bookmarks, hyperlinks, and attachments.
- Control layout: margins, page breaks, and dynamic footers.

Usage Example:
This project demonstrates how to paginate multiple paragraphs of text describing PDF functionality. When the content exceeds a single page, the Syncfusion PdfTextElement automatically creates new pages and triggers the PageAdded event. This allows you to attach custom footers, such as page numbers or custom codes, to each page for improved navigation and a professional document appearance.

Adding dynamic footers is useful for:
- Section labeling in large documents.
- Including secure or traceable codes for each page.
- Ensuring readers always know their page context.

Other advanced scenarios:
- Creating a Table of Contents with page navigation.
- Inserting named destinations for quick jumps.
- Using graphics and interactive elements within the same document.

Experiment by updating this program to add headers, watermarks, or section-based page numbers based on your specific requirements.

This concludes the instructional workflow for auto-paginated, footer-enhanced PDF generation in .NET.";

// Set the header and footer heights.
float headerHeight = 40f;
float footerHeight = 30f;

// Create a text element for automatic pagination.
PdfTextElement textElement = new PdfTextElement(overflowText, contentFont, contentBrush);

// Subscribe to the BeginPageLayout event to offset text on each new page below the header.
textElement.BeginPageLayout += (sender, args) =>
{
    // Always start content below the header on every page.
    args.Bounds = new RectangleF(
        0, headerHeight,
        args.Page.GetClientSize().Width,
        args.Page.GetClientSize().Height - headerHeight - footerHeight
    );
};

// Add the first page.
PdfPage firstPage = document.Pages.Add();

// Start drawing content (pagination and the PageAdded event handle the rest).
textElement.Draw(firstPage, new PointF(0, 0));

// Save and close the document.
document.Save("Output.pdf");
document.Close(true);

// Add the header and footer to every page.
static void PageAddedHandler(object sender, Syncfusion.Pdf.PageAddedEventArgs e)
{
    PdfPage page = e.Page;
    int currentPage = page.Section.Pages.IndexOf(page) + 1;

    // Draw the header at the top (within the reserved header bounds).
    string headerText = $"This is the header - Page {currentPage}";
    page.Graphics.DrawString(
        headerText,
        new PdfStandardFont(PdfFontFamily.Helvetica, 14, PdfFontStyle.Bold),
        new PdfSolidBrush(Color.DimGray),
        new PointF(10, 10)
    );

    // Draw the footer at the bottom (within the reserved footer area).
    string timestamp = DateTime.Now.ToString("'Date:' yyyy-MM-dd 'Time:' HH:mm:ss");
    string footerText = $"Page {currentPage} {timestamp}";
    page.Graphics.DrawString(
        footerText,
        new PdfStandardFont(PdfFontFamily.Helvetica, 12),
        new PdfSolidBrush(Color.Black),
        new PointF(10, page.GetClientSize().Height - 30)
    );
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System
Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document.
Dim document As New PdfDocument()

' Subscribe to the PageAdded event to add header and footer for every page.
AddHandler document.Pages.PageAdded, AddressOf PageAddedHandler

' Define content font and brush for the main text.
Dim contentFont As New PdfStandardFont(PdfFontFamily.TimesRoman, 18)
Dim contentBrush As New PdfSolidBrush(Color.Black)

' Define the main instructional text.
Dim overflowText As String =
"Creating PDF documentation programmatically with Syncfusion .NET libraries enables automation of reports, invoices, and technical manuals." & vbCrLf & vbCrLf &
"Key Features:" & vbCrLf &
"- Multi-page automatic content flow using pagination." & vbCrLf &
"- Support for rich text formatting: headers, bullets, and tables." & vbCrLf &
"- Insert images, tables, and charts seamlessly." & vbCrLf &
"- Add interactive elements: bookmarks, hyperlinks, and attachments." & vbCrLf &
"- Control layout: margins, page breaks, and dynamic footers." & vbCrLf & vbCrLf &
"Usage Example:" & vbCrLf &
"This project demonstrates how to paginate multiple paragraphs of text describing PDF functionality. When the content exceeds a single page, the Syncfusion PdfTextElement automatically creates new pages and triggers the PageAdded event. This allows you to attach custom footers, such as page numbers or custom codes, to each page for improved navigation and a professional document appearance." & vbCrLf & vbCrLf &
"Adding dynamic footers is useful for:" & vbCrLf &
"- Section labeling in large documents." & vbCrLf &
"- Including secure or traceable codes for each page." & vbCrLf &
"- Ensuring readers always know their page context." & vbCrLf & vbCrLf &
"Other advanced scenarios:" & vbCrLf &
"- Creating a Table of Contents with page navigation." & vbCrLf &
"- Inserting named destinations for quick jumps." & vbCrLf &
"- Using graphics and interactive elements within the same document." & vbCrLf & vbCrLf &
"Experiment by updating this program to add headers, watermarks, or section-based page numbers based on your specific requirements." & vbCrLf & vbCrLf &
"This concludes the instructional workflow for auto-paginated, footer-enhanced PDF generation in .NET."

' Set the header and footer heights.
Dim headerHeight As Single = 40.0F
Dim footerHeight As Single = 30.0F

' Create a text element for automatic pagination.
Dim textElement As New PdfTextElement(overflowText, contentFont, contentBrush)

' Subscribe to the BeginPageLayout event to offset text on each new page below the header.
AddHandler textElement.BeginPageLayout, Sub(sender As Object, args As BeginPageLayoutEventArgs)
    ' Always start content below the header on every page.
    args.Bounds = New RectangleF(0, headerHeight, args.Page.GetClientSize().Width, args.Page.GetClientSize().Height - headerHeight - footerHeight)
End Sub

' Add the first page.
Dim firstPage As PdfPage = document.Pages.Add()

' Start drawing content (pagination and the PageAdded event handle the rest).
textElement.Draw(firstPage, New PointF(0, 0))

' Save and close the document.
document.Save("Output.pdf")
document.Close(True)

' Add the header and footer to every page.
Private Sub PageAddedHandler(sender As Object, e As PageAddedEventArgs)
    Dim page As PdfPage = e.Page
    Dim currentPage As Integer = page.Section.Pages.IndexOf(page) + 1

    ' Draw the header at the top (within the reserved header bounds).
    Dim headerText As String = $"This is the header - Page {currentPage}"
    page.Graphics.DrawString(
        headerText,
        New PdfStandardFont(PdfFontFamily.Helvetica, 14, PdfFontStyle.Bold),
        New PdfSolidBrush(Color.DimGray),
        New PointF(10, 10)
    )

    ' Draw the footer at the bottom (within the reserved footer area).
    Dim timestamp As String = DateTime.Now.ToString("'Date:' yyyy-MM-dd 'Time:' HH:mm:ss")
    Dim footerText As String = $"Page {currentPage} {timestamp}"
    page.Graphics.DrawString(
        footerText,
        New PdfStandardFont(PdfFontFamily.Helvetica, 12),
        New PdfSolidBrush(Color.Black),
        New PointF(10, page.GetClientSize().Height - 30)
    )
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Header%20and%20Footer/Adding-dynamic-headers-and-footers-in-PDF).