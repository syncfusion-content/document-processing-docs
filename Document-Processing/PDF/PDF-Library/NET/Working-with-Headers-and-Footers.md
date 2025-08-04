---
title: Working with Headers and Footers | Syncfusion
description: This section explains how to create Headers and Footers in the PDF document using Syncfusion .NET PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Working with Headers and Footers 

Essential<sup>&reg;</sup> PDF supports to draw the header and footer in PDF document using [PdfPageTemplateElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageTemplateElement.html) class. The header and footer can contain any types of element including dynamic fields.

To quickly get started with adding headers and footers to PDF files using the Syncfusion<sup>®</sup> PDF library for .NET, refer to this video tutorial:
{% youtube "https://youtu.be/zGcQEVw5v9Y?si=lI6qZLUJRw6UWUZi" %}

## Adding an automatic field in header and footer

Essential<sup>&reg;</sup> PDF supports to add page count, page numbers, date and time using dynamic fields such as [PdfPageCountField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageCountField.html), [PdfPageNumberField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageNumberField.html) etc.

The below code snippet explains how to draw the page numbers in footer using automatic fields.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Header%20and%20Footer/Adding-an-automatic-field-in-header-and-footer/.NET/Adding-an-automatic-field-in-header-and-footer/Program.cs" %} 

//Create a new PDF document.
PdfDocument pdfDocument = new PdfDocument();
//Add a page to the PDF document
PdfPage pdfPage = pdfDocument.Pages.Add();
//Create a header and draw the image.
RectangleF bounds = new RectangleF(0, 0, pdfDocument.Pages[0].GetClientSize().Width, 50);
PdfPageTemplateElement header = new PdfPageTemplateElement(bounds);
//Load the PDF document
FileStream imageStream = new FileStream("Logo.png", FileMode.Open, FileAccess.Read);
PdfImage image = new PdfBitmap(imageStream);
//Draw the image in the header.
header.Graphics.DrawImage(image, new PointF(0, 0), new SizeF(100, 50));
//Add the header at the top.
pdfDocument.Template.Top = header;
//Create a Page template that can be used as footer.
PdfPageTemplateElement footer = new PdfPageTemplateElement(bounds);
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 7);
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Create page number field.
PdfPageNumberField pageNumber = new PdfPageNumberField(font, brush);
//Create page count field.
PdfPageCountField count = new PdfPageCountField(font, brush);
//Add the fields in composite fields.
PdfCompositeField compositeField = new PdfCompositeField(font, brush, "Page {0} of {1}", pageNumber, count);
compositeField.Bounds = footer.Bounds;
//Draw the composite field in footer.
compositeField.Draw(footer.Graphics, new PointF(470, 40));
//Add the footer template at the bottom.
pdfDocument.Template.Bottom = footer;

//Save the document into stream.
MemoryStream stream = new MemoryStream();
pdfDocument.Save(stream);
//Closes the document.
pdfDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Create a new PDF document.
PdfDocument pdfDocument = new PdfDocument();
//Add a page to the PDF document
PdfPage pdfPage = pdfDocument.Pages.Add();
//Create a header and draw the image.
RectangleF bounds = new RectangleF(0, 0, pdfDocument.Pages[0].GetClientSize().Width, 50);
PdfPageTemplateElement header = new PdfPageTemplateElement(bounds);
PdfImage image = new PdfBitmap(@"Logo.png");
//Draw the image in the header.
header.Graphics.DrawImage(image, new PointF(0, 0), new SizeF(100, 50));
//Add the header at the top.
pdfDocument.Template.Top = header;
//Create a Page template that can be used as footer.
PdfPageTemplateElement footer = new PdfPageTemplateElement(bounds);
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 7);
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Create page number field.
PdfPageNumberField pageNumber = new PdfPageNumberField(font, brush);
//Create page count field.
PdfPageCountField count = new PdfPageCountField(font, brush);
//Add the fields in composite fields.
PdfCompositeField compositeField = new PdfCompositeField(font, brush, "Page {0} of {1}", pageNumber, count);
compositeField.Bounds = footer.Bounds;
//Draw the composite field in footer.
compositeField.Draw(footer.Graphics, new PointF(470, 40));
//Add the footer template at the bottom.
pdfDocument.Template.Bottom = footer;

//Save and close the document.
pdfDocument.Save("Output.pdf");
pdfDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Create a new PDF document.
Dim pdfDocument As New PdfDocument()
'Add a page to the PDF document.
Dim pdfPage As PdfPage = pdfDocument.Pages.Add()
'Create a header and draw the image.
Dim bounds As New RectangleF(0, 0, pdfDocument.Pages(0).GetClientSize().Width, 50)
Dim header As New PdfPageTemplateElement(bounds)
Dim image As PdfImage = New PdfBitmap("Logo.jpg")
'Draw the image in the Header.
header.Graphics.DrawImage(image, New PointF(0, 0), New SizeF(100, 50))
'Add the header at the top.
pdfDocument.Template.Top = header
'Create a page template that can be used as footer.
Dim footer As New PdfPageTemplateElement(bounds)
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 7)
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Create page number field.
Dim pageNumber As New PdfPageNumberField(font, brush)
'Create page count field.
Dim count As New PdfPageCountField(font, brush)
'Add the fields in composite fields.
Dim compositeField As New PdfCompositeField(font, brush, "Page {0} of {1}", pageNumber, count)
compositeField.Bounds = footer.Bounds
'Draw the composite field in footer.
compositeField.Draw(footer.Graphics, New PointF(470, 40))
'Add the footer template at the bottom.
pdfDocument.Template.Bottom = footer

'Save and close the document.
pdfDocument.Save("Output.pdf")
pdfDocument.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Header%20and%20Footer/Adding-an-automatic-field-in-header-and-footer).

### Adding Dynamic Footers to Each PDF Page

Essential<sup>&reg;</sup> PDF enables you to add custom dynamic footers to every page of a PDF document. You can display information such as section numbers, page numbers, dates, and custom codes in the footer by handling page events such as PageAdded.

The following code example demonstrates how to add a custom dynamic footer to every page of a PDF document.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %} 

// Create a new PDF document
PdfDocument document = new PdfDocument();

// Add a section with space at the bottom for the footer
PdfSection section1 = document.Sections.Add();
section1.PageSettings.Margins.Bottom = 30;

// Subscribe to the PageAdded event to add dynamic footer on each new page
section1.PageAdded += (sender, e) => PageAddedHandler(sender, e, 1);

// Add the first page (the rest will be added with page overflow)
section1.Pages.Add();

// Prepare the content font and brush
PdfFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 18);
PdfBrush contentBrush = new PdfSolidBrush(Color.Black);

// Define formatting for the main content
PdfStringFormat format = new PdfStringFormat()
{
    ParagraphIndent = 35f,
    LineSpacing = 20f
};

// Instructional content (long enough to require multiple pages)
string overflowText =
@"Creating PDF documentation programmatically with Syncfusion .NET libraries enables automation of reports, invoices, and technical manuals.
Key Features:
- Multi-page automatic content flow using pagination
- Support for rich text formatting: headers, bullets, and tables
- Insert images, tables, and charts seamlessly
- Add interactive elements: bookmarks, hyperlinks, and attachments
- Control layout: margins, page breaks, and dynamic footers
Usage Example:
This project demonstrates how to paginate multiple paragraphs of text describing PDF functionality. When the content exceeds a single page, Syncfusion’s PdfTextElement automatically creates new pages and triggers the PageAdded event. This allows you to attach custom footers, such as page numbers or custom codes, to each page for improved navigation and professional document appearance.
Adding dynamic footers is useful for:
- Section labeling in large documents
- Including secure or traceable codes for each page
- Ensuring readers always know their page context
Other advanced scenarios:
- Creating Table of Contents with page navigation
- Inserting named destinations for quick jumps
- Using graphics and interactive elements within the same document
Experiment by updating this program to add headers, watermarks, or section-based page numbers based on your specific requirements.
For more information, visit:
https://help.syncfusion.com/file-formats/pdf/working-with-text
https://help.syncfusion.com/file-formats/pdf/working-with-graphics
This concludes the instructional workflow for auto-paginated, footer-enhanced PDF generation in .NET.";

// Draw text with automatic pagination (triggers PageAdded for each extra page)
var textElement = new PdfTextElement(overflowText, contentFont, PdfPens.Black, contentBrush, format);
PdfLayoutFormat layoutFormat = new PdfLayoutFormat
{
    Layout = PdfLayoutType.Paginate,
    PaginateBounds = new RectangleF(0, 0, section1.Pages[0].GetClientSize().Width, section1.Pages[0].GetClientSize().Height - 30)
};

textElement.Draw(
    section1.Pages[0],
    new RectangleF(0, 0, section1.Pages[0].GetClientSize().Width, section1.Pages[0].GetClientSize().Height - 30),
    layoutFormat
);

// Save and close
using (FileStream outputFileStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
{
    document.Save(outputFileStream);
}
document.Close(true);

// Handles the PageAdded event to draw a dynamic footer on each page.
static void PageAddedHandler(object sender, PageAddedEventArgs e, int sectionNumber)
{
    PdfPage page = e.Page;
    int currentPage = page.Section.Pages.IndexOf(page) + 1;

    // Generate a human-readable timestamp for the footer
    string timestamp = DateTime.Now.ToString("'Date:' yyyy-MM-dd 'Time:' HH:mm:ss");
    string footerText = $"Section {sectionNumber} - Page {currentPage} - {timestamp}";

    // Draw footer on the current page
    page.Graphics.DrawString(
        footerText,
        new PdfStandardFont(PdfFontFamily.Helvetica, 12),
        new PdfSolidBrush(Color.Black),
        new PointF(10, page.GetClientSize().Height - 30)
    );
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Create a new PDF document
PdfDocument document = new PdfDocument();

// Add a section with space at the bottom for the footer
PdfSection section1 = document.Sections.Add();
section1.PageSettings.Margins.Bottom = 30;

// Subscribe to the PageAdded event to add dynamic footer on each new page
section1.PageAdded += (sender, e) => PageAddedHandler(sender, e, 1);

// Add the first page (the rest will be added with page overflow)
section1.Pages.Add();

// Prepare the content font and brush
PdfFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 18);
PdfBrush contentBrush = new PdfSolidBrush(Color.Black);

// Define formatting for the main content
PdfStringFormat format = new PdfStringFormat()
{
    ParagraphIndent = 35f,
    LineSpacing = 20f
};

// Instructional content (long enough to require multiple pages)
string overflowText =
@"Creating PDF documentation programmatically with Syncfusion .NET libraries enables automation of reports, invoices, and technical manuals.
Key Features:
- Multi-page automatic content flow using pagination
- Support for rich text formatting: headers, bullets, and tables
- Insert images, tables, and charts seamlessly
- Add interactive elements: bookmarks, hyperlinks, and attachments
- Control layout: margins, page breaks, and dynamic footers
Usage Example:
This project demonstrates how to paginate multiple paragraphs of text describing PDF functionality. When the content exceeds a single page, Syncfusion’s PdfTextElement automatically creates new pages and triggers the PageAdded event. This allows you to attach custom footers, such as page numbers or custom codes, to each page for improved navigation and professional document appearance.
Adding dynamic footers is useful for:
- Section labeling in large documents
- Including secure or traceable codes for each page
- Ensuring readers always know their page context
Other advanced scenarios:
- Creating Table of Contents with page navigation
- Inserting named destinations for quick jumps
- Using graphics and interactive elements within the same document
Experiment by updating this program to add headers, watermarks, or section-based page numbers based on your specific requirements.
For more information, visit:
https://help.syncfusion.com/file-formats/pdf/working-with-text
https://help.syncfusion.com/file-formats/pdf/working-with-graphics
This concludes the instructional workflow for auto-paginated, footer-enhanced PDF generation in .NET.";

// Draw text with automatic pagination (triggers PageAdded for each extra page)
var textElement = new PdfTextElement(overflowText, contentFont, PdfPens.Black, contentBrush, format);
PdfLayoutFormat layoutFormat = new PdfLayoutFormat
{
    Layout = PdfLayoutType.Paginate,
    PaginateBounds = new RectangleF(0, 0, section1.Pages[0].GetClientSize().Width, section1.Pages[0].GetClientSize().Height - 30)
};

textElement.Draw(
    section1.Pages[0],
    new RectangleF(0, 0, section1.Pages[0].GetClientSize().Width, section1.Pages[0].GetClientSize().Height - 30),
    layoutFormat
);

// Save and close the document.
document.Save("Output.pdf");
document.Close(true);

// Handles the PageAdded event to draw a dynamic footer on each page.
static void PageAddedHandler(object sender, PageAddedEventArgs e, int sectionNumber)
{
    PdfPage page = e.Page;
    int currentPage = page.Section.Pages.IndexOf(page) + 1;

    // Generate a human-readable timestamp for the footer
    string timestamp = DateTime.Now.ToString("'Date:' yyyy-MM-dd 'Time:' HH:mm:ss");
    string footerText = $"Section {sectionNumber} - Page {currentPage} - {timestamp}";

    // Draw footer on the current page
    page.Graphics.DrawString(
        footerText,
        new PdfStandardFont(PdfFontFamily.Helvetica, 12),
        new PdfSolidBrush(Color.Black),
        new PointF(10, page.GetClientSize().Height - 30)
    );
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Create a new PDF document
Dim document As New PdfDocument()

' Add a section with space at the bottom for the footer
Dim section1 As PdfSection = document.Sections.Add()
section1.PageSettings.Margins.Bottom = 30

' Subscribe to the PageAdded event to add dynamic footer on each new page
AddHandler section1.PageAdded, Sub(sender, e) PageAddedHandler(sender, e, 1)

' Add the first page (the rest will be added with page overflow)
section1.Pages.Add()

' Prepare the content font and brush
Dim contentFont As New PdfStandardFont(PdfFontFamily.TimesRoman, 18)
Dim contentBrush As New PdfSolidBrush(Color.Black)

' Define formatting for the main content
Dim format As New PdfStringFormat()
format.ParagraphIndent = 35.0F
format.LineSpacing = 20.0F

' Instructional content (long enough to require multiple pages)
Dim overflowText As String =
"Creating PDF documentation programmatically with Syncfusion .NET libraries enables automation of reports, invoices, and technical manuals." & vbCrLf &
"Key Features:" & vbCrLf &
"- Multi-page automatic content flow using pagination" & vbCrLf &
"- Support for rich text formatting: headers, bullets, and tables" & vbCrLf &
"- Insert images, tables, and charts seamlessly" & vbCrLf &
"- Add interactive elements: bookmarks, hyperlinks, and attachments" & vbCrLf &
"- Control layout: margins, page breaks, and dynamic footers" & vbCrLf &
"Usage Example:" & vbCrLf &
"This project demonstrates how to paginate multiple paragraphs of text describing PDF functionality. When the content exceeds a single page, Syncfusion’s PdfTextElement automatically creates new pages and triggers the PageAdded event. This allows you to attach custom footers, such as page numbers or custom codes, to each page for improved navigation and professional document appearance." & vbCrLf &
"Adding dynamic footers is useful for:" & vbCrLf &
"- Section labeling in large documents" & vbCrLf &
"- Including secure or traceable codes for each page" & vbCrLf &
"- Ensuring readers always know their page context" & vbCrLf &
"Other advanced scenarios:" & vbCrLf &
"- Creating Table of Contents with page navigation" & vbCrLf &
"- Inserting named destinations for quick jumps" & vbCrLf &
"- Using graphics and interactive elements within the same document" & vbCrLf &
"Experiment by updating this program to add headers, watermarks, or section-based page numbers based on your specific requirements." & vbCrLf &
"For more information, visit:" & vbCrLf &
"https://help.syncfusion.com/file-formats/pdf/working-with-text" & vbCrLf &
"https://help.syncfusion.com/file-formats/pdf/working-with-graphics" & vbCrLf &
"This concludes the instructional workflow for auto-paginated, footer-enhanced PDF generation in .NET."

' Draw text with automatic pagination (triggers PageAdded for each extra page)
Dim textElement As New PdfTextElement(overflowText, contentFont, PdfPens.Black, contentBrush, format)
Dim layoutFormat As New PdfLayoutFormat()
layoutFormat.Layout = PdfLayoutType.Paginate
layoutFormat.PaginateBounds = New RectangleF(0, 0, section1.Pages(0).GetClientSize().Width, section1.Pages(0).GetClientSize().Height - 30)

textElement.Draw(
    section1.Pages(0),
    New RectangleF(0, 0, section1.Pages(0).GetClientSize().Width, section1.Pages(0).GetClientSize().Height - 30),
    layoutFormat
)

' Save and close the document.
document.Save("Output.pdf")
document.Close(True)

' Handles the PageAdded event to draw a dynamic footer on each page.
Private Shared Sub PageAddedHandler(sender As Object, e As PageAddedEventArgs, sectionNumber As Integer)
    Dim page As PdfPage = e.Page
    Dim currentPage As Integer = page.Section.Pages.IndexOf(page) + 1
    ' Generate a human-readable timestamp for the footer
    Dim timestamp As String = DateTime.Now.ToString("'Date:' yyyy-MM-dd 'Time:' HH:mm:ss")
    Dim footerText As String = $"Section {sectionNumber} - Page {currentPage} - {timestamp}"
    ' Draw footer on the current page
    page.Graphics.DrawString(
        footerText,
        New PdfStandardFont(PdfFontFamily.Helvetica, 12),
        New PdfSolidBrush(Color.Black),
        New PointF(10, page.GetClientSize().Height - 30)
    )
End Sub

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from GitHub.