---
title: Working with PDF conformance in .NET PDF Library | Syncfusion
description: Learn how to create, convert, and validate PDF documents that conform to PDF/A, PDF/X, and PDF/UA standards using the Syncfusion .NET PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Working with PDF Conformance in File Formats PDF

Essential<sup>&reg;</sup> PDF enables working with PDF Conformance standards such as [PDF/A](https://en.wikipedia.org/wiki/PDF/A), [PDF/X](https://en.wikipedia.org/wiki/PDF/X), and [PDF/UA](https://en.wikipedia.org/wiki/PDF/UA) to ensure compliance with archival, prepress, and accessibility requirements. This topic covers the supported standards, the conformance levels you can produce, and the APIs to create, convert, and validate conformant documents.

To quickly get started with PDF Conformance in .NET using the Syncfusion PDF Library, watch this video:

{% youtube "https://youtu.be/jgvYqQlfs5Q?si=R8RE_KKenGVoFgzX" %}

## PDF/A standards and conformance levels

The following table summarizes the PDF/A versions, their conformance levels, and the key features and restrictions that distinguish them.

<table>
  <thead>
    <tr>
      <th>PDF/A Version</th>
      <th>Based On</th>
      <th>Conformance Levels</th>
      <th>Key Features</th>
      <th>Restrictions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PDF/A-1</td>
      <td>PDF 1.4</td>
      <td>a, b</td>
      <td>Basic archiving, embedded fonts, color profiles</td>
      <td>No JPEG2000, transparency, layers, or attachments</td>
    </tr>
    <tr>
      <td>PDF/A-2</td>
      <td>PDF 1.7</td>
      <td>a, b, u</td>
      <td>JPEG2000, transparency, layers, PDF/A attachments, digital signatures</td>
      <td>Only PDF/A files can be attached</td>
    </tr>
    <tr>
      <td>PDF/A-3</td>
      <td>PDF 1.7</td>
      <td>a, b, u</td>
      <td>Same as PDF/A-2 + arbitrary file attachments (e.g., XML, CSV)</td>
      <td>Risk of compromising archival integrity due to unsupported attachments</td>
    </tr>
    <tr>
      <td>PDF/A-4</td>
      <td>PDF 2.0</td>
      <td>e, f</td>
      <td>RichMedia, 3D annotations, modern engineering workflows</td>
      <td>No a, b, u levels; encryption and JavaScript still forbidden</td>
    </tr>
  </tbody>
</table>

## Conformance level details

<table>
  <thead>
    <tr>
      <th>Level</th>
      <th>Name</th>
      <th>Requirements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>b</td>
      <td>Basic</td>
      <td>Ensures visual reproducibility only. Fonts must be embedded.</td>
    </tr>
    <tr>
      <td>a</td>
      <td>Accessible</td>
      <td>Includes b + logical structure, tagged content, language metadata, alt text.</td>
    </tr>
    <tr>
      <td>u</td>
      <td>Unicode</td>
      <td>Includes b + Unicode mapping for searchable and copyable text.</td>
    </tr>
    <tr>
      <td>e</td>
      <td>Engineering</td>
      <td>PDF/A-4 only. Supports RichMedia, 3D, and embedded files for engineering use.</td>
    </tr>
    <tr>
      <td>f</td>
      <td>File Embedding</td>
      <td>PDF/A-4 only. Allows embedding of arbitrary file formats.</td>
    </tr>
  </tbody>
</table>

## Supported PDF conformances

Essential<sup>&reg;</sup> PDF currently supports the following PDF conformances:

* PDF/A-1a conformance
* PDF/A-1b conformance
* PDF/A-2a conformance
* PDF/A-2b conformance
* PDF/A-2u conformance
* PDF/A-3a conformance
* PDF/A-3b conformance
* PDF/A-3u conformance
* PDF/A-4 conformance
* PDF/A-4e conformance
* PDF/A-4f conformance
* PDF/X-1a conformance

N> 1. To know more details about the PDF/A standard, refer to the [PDF/A Wikipedia article](https://en.wikipedia.org/wiki/PDF/A).
N> 2. To know more details about the PDF/X standard, refer to the [PDF/X Wikipedia article](https://en.wikipedia.org/wiki/PDF/X).
N> Essential<sup>&reg;</sup> PDF supports PDF conformances only in Windows Forms, WPF, ASP.NET Core, ASP.NET MVC, and Xamarin platforms.

## PDF/A-1b conformance

You can create a PDF/A-1b document by specifying the conformance level as `Pdf_A1B` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as shown below.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA1B-document/.NET/Creating-the-new-PDFA1B-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-1b standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A1B);
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);

//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-1b standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A1B);
//Add a page.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);

//Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/A-1b standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A1B)
'Add a page.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)

'Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA1B-document).

## PDF/A-1a conformance

PDF/A-1a conformance includes all PDF/A-1b requirements in addition to the features intended to improve a document's accessibility. PDF/A-1a additionally requires the crucial properties of Tagged PDF, such as logical structure, tagged content, language metadata, and alt text.

You can create a PDF/A-1a document by specifying the conformance level as `Pdf_A1A` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as shown below.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA1A-document/.NET/Creating-the-new-PDFA1A-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-1a standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A1A);
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-1a standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A1A);
//Add a page.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/A-1a standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A1A)
'Add a page.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA1A-document).

## PDF/A-2b conformance

You can create a PDF/A-2b document by specifying the conformance level as `Pdf_A2B` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA2B-document/.NET/Creating-the-new-PDFA2B-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2b standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2B);
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Creates an attachment
Stream fileStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
PdfAttachment attachment = new PdfAttachment("Input.txt", fileStream);
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Adds the attachment to the document
document.Attachments.Add(attachment);

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);

//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2b standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2B);
//Add a page.
PdfPage page = document.Pages.Add();

//Creates an attachment
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Adds the attachment to the document
document.Attachments.Add(attachment);

//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);

//Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/A-2b standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A2B)
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Creates an attachment
Dim attachment As New PdfAttachment("Input.txt")
attachment.Relationship = PdfAttachmentRelationship.Alternative
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt"
attachment.MimeType = "application/txt"
'Adds the attachment to the document
document.Attachments.Add(attachment)

'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)

'Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA2B-document).

## PDF/A-2a conformance

PDF/A-2a conformance includes all PDF/A-2b requirements in addition to the features intended to improve a document's accessibility. PDF/A-2a additionally requires the crucial properties of Tagged PDF.

You can create a PDF/A-2a document by specifying the conformance level as `Pdf_A2A` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA2A-document/.NET/Creating-the-new-PDFA2A-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2a standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2A);
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2a standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2A);
//Add a page.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/A-2a standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A2A)
'Add a page.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA2A-document).

## PDF/A-2u conformance

PDF/A-2u conformance includes all PDF/A-2b requirements, and additionally provides Unicode mapping for all text in the document.

You can create a PDF/A-2u document by specifying the conformance level as `Pdf_A2U` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA2U-document/.NET/Creating-the-new-PDFA2U-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2u standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2U);
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2u standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2U);
//Add a page.
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/A-2u standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A2U)
'Add a page.
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA2U-document).

## PDF/A-3b conformance

The PDF/A-3b conformance supports external files as attachments to the PDF document. You can attach any document format such as Excel, Word, HTML, CAD, or XML files.

You can create a PDF/A-3b document by specifying the conformance level as `Pdf_A3B` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA3B-document/.NET/Creating-the-new-PDFA3B-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3b standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3B);
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create an attachment.
FileStream fileStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
PdfAttachment attachment = new PdfAttachment("Input.txt", fileStream);
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Add the attachment to the document.
document.Attachments.Add(attachment);

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3b standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3B);
//Add a page.
PdfPage page = document.Pages.Add();

//Create an attachment.
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Add the attachment to the document.
document.Attachments.Add(attachment);

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Create a solid brush
PdfBrush brush = new PdfSolidBrush(Color.Black);
Font font = new Font("Arial", 20f, FontStyle.Regular);
//Set the font
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);
//Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new document with PDF/A-3b standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A3B)
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Create an attachment.
Dim attachment As New PdfAttachment("Input.txt")
attachment.Relationship = PdfAttachmentRelationship.Alternative
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt"
attachment.MimeType = "application/txt"
'Add the attachment to the document.
document.Attachments.Add(attachment)

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA3B-document).

## PDF/A-3a conformance

PDF/A-3a conformance includes all PDF/A-3b requirements in addition to the features intended to improve a document's accessibility. PDF/A-3a additionally requires the crucial properties of Tagged PDF.

You can create a PDF/A-3a document by specifying the conformance level as `Pdf_A3A` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA3A-document/.NET/Creating-the-new-PDFA3A-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3a standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3A);
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create an attachment.
FileStream fileStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
PdfAttachment attachment = new PdfAttachment("Input.txt", fileStream);
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Add the attachment to the document.
document.Attachments.Add(attachment);

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3a standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3A);
//Add a page.
PdfPage page = document.Pages.Add();

//Create an attachment.
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Add the attachment to the document.
document.Attachments.Add(attachment);

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new document with PDF/A-3a standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A3A)
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Create an attachment.
Dim attachment As New PdfAttachment("Input.txt")
attachment.Relationship = PdfAttachmentRelationship.Alternative
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt"
attachment.MimeType = "application/txt"
'Add the attachment to the document.
document.Attachments.Add(attachment)

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA3A-document).

## PDF/A-3u conformance

PDF/A-3u conformance includes all PDF/A-3b requirements, and additionally provides Unicode mapping for all text in the document.

You can create a PDF/A-3u document by specifying the conformance level as `Pdf_A3U` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA3U-document/.NET/Creating-the-new-PDFA3U-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3u standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3U);
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create an attachment.
FileStream fileStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
PdfAttachment attachment = new PdfAttachment("Input.txt", fileStream);
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Add the attachment to the document.
document.Attachments.Add(attachment);

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3u standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3U);
//Add a page.
PdfPage page = document.Pages.Add();

//Create an attachment.
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Add the attachment to the document.
document.Attachments.Add(attachment);

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new document with PDF/A-3u standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A3U)
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Create an attachment.
Dim attachment As New PdfAttachment("Input.txt")
attachment.Relationship = PdfAttachmentRelationship.Alternative
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt"
attachment.MimeType = "application/txt"
'Add the attachment to the document.
document.Attachments.Add(attachment)

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA3U-document).

## PDF/A-4 conformance

The separate conformance levels a, b, and u are not used in PDF/A-4. Instead, PDF/A-4 encourages but does not require the addition of higher-level logical structures, and it requires Unicode mappings for all fonts.

Create a PDF/A-4 document by specifying the conformance level as `Pdf_A4` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA4-document/.NET/Creating-the-new-PDFA4-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with the PDF/A-4 standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A4);
//Add a page to the document.
PdfPage page = document.Pages.Add();
//Create the PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with the PDF/A-4 standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A4);
//Add a page.
PdfPage page = document.Pages.Add();
//Create the PDF graphics for the page.
PdfGraphics graphics = page.Graphics;

//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with the PDF/A-4 standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A4)
'Add a page.
Dim page As PdfPage = document.Pages.Add()
'Create the PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics

'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA4-document).

## PDF/A-4e conformance

PDF/A-4E (Engineering) is intended for technical documents and replaces PDF/E. PDF/A-4e supports 3D models, rich media, and 3D annotations as well as embedded files.

Create a PDF/A-4E document by specifying the conformance level as `Pdf_A4E` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA4E-document/.NET/Creating-the-new-PDFA4E-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with the PDF/A-4E standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A4E);
//Create a new page.
PdfPage page = document.Pages.Add();

//Create a new PDF 3D annotation.
FileStream inputStream = new FileStream("3DAnnotation.U3D", FileMode.Open, FileAccess.Read);
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), inputStream);
//Handle the activation of the 3D annotation.
Pdf3DActivation activation = new Pdf3DActivation();
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation;
activation.ShowToolbar = true;
pdf3dAnnotation.Activation = activation;
//Add the annotation to the page.
page.Annotations.Add(pdf3dAnnotation);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with the PDF/A-4E standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A4E);
//Create a new page.
PdfPage page = document.Pages.Add();

//Create a new PDF 3D annotation.
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), @"3DAnnotation.U3D");
//Handle the activation of the 3D annotation.
Pdf3DActivation activation = new Pdf3DActivation();
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation;
activation.ShowToolbar = true;
pdf3dAnnotation.Activation = activation;
//Add the annotation to the page.
page.Annotations.Add(pdf3dAnnotation);

//Save the document to the disk.
document.Save("3DAnnotation.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with the PDF/A-4E standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A4E)
'Create a new page.
Dim page As PdfPage = document.Pages.Add()

'Create a new PDF 3D annotation.
Dim pdf3dAnnotation As New Pdf3DAnnotation(New RectangleF(10, 50, 300, 150), "3DAnnotation.U3D")
'Handle the activation of the 3D annotation.
Dim activation As New Pdf3DActivation()
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation
activation.ShowToolbar = True
pdf3dAnnotation.Activation = activation
'Add the annotation to the page.
page.Annotations.Add(pdf3dAnnotation)

'Save the document to the disk.
document.Save("3DAnnotation.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA4E-document).

## PDF/A-4f conformance

The requirements of the PDF/A-3 standard have also been partially incorporated into PDF/A-4. Thus, PDF/A-4f allows the embedding of arbitrary files.

Create a PDF/A-4f document by specifying the conformance level as `Pdf_A4F` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-a-new-PDFA4F-document/.NET/Creating-a-new-PDFA4F-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with the PDF/A-4F standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A4F);
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create an attachment.
FileStream fileStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
PdfAttachment attachment = new PdfAttachment("Input.txt", fileStream);
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";

//Add the attachment to the document.
document.Attachments.Add(attachment);

//Create the PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
//Initialize the PDF TrueType font.
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with the PDF/A-4F standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A4F);
//Add a page.
PdfPage page = document.Pages.Add();

//Create an attachment.
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.Relationship = PdfAttachmentRelationship.Alternative;
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Add the attachment to the document.
document.Attachments.Add(attachment);

//Create the PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new document with the PDF/A-4F standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A4F)
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Create an attachment.
Dim attachment As New PdfAttachment("Input.txt")
attachment.Relationship = PdfAttachmentRelationship.Alternative
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt"
attachment.MimeType = "application/txt"
'Add the attachment to the document.
document.Attachments.Add(attachment)

'Create the PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-a-new-PDFA4F-document).

## PDF/X-1a conformance

You can create a PDF/X-1a document by specifying the conformance level as `Pdf_X1A2001` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enum when creating a new PDF document, as shown below. PDF/X-1a requires a CMYK color space, which is enforced by setting the [ColorSpace](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_ColorSpace) property to [PdfColorSpace.CMYK](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfColorSpace.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Create-a-PDFX1A-conformance-document/.NET/Create-a-PDFX1A-conformance-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/X-1a standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_X1A2001);
//Add a page.
PdfPage page = document.Pages.Add();
//Set the color space.
document.ColorSpace = PdfColorSpace.CMYK;

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello world!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/X-1a standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_X1A2001);
//Add a page.
PdfPage page = document.Pages.Add();
//Set the color space.
document.ColorSpace = PdfColorSpace.CMYK;

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Set the font.
PdfFont pdfFont = new PdfTrueTypeFont(new Font("Arial", 14f, FontStyle.Regular), FontStyle.Regular, 12, false, true);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/X-1a standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_X1A2001)
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Set the color space.
document.ColorSpace = PdfColorSpace.CMYK

'Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Set the font.
Dim pdfFont As PdfFont = New PdfTrueTypeFont(New Font("Arial", 14.0F, FontStyle.Regular), FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, PdfBrushes.Black, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Create-a-PDFX1A-conformance-document).

## PDF to PDF/A conversion

An existing PDF document can be converted to a PDF/A conformant document by calling the [ConvertToPDFA](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_ConvertToPDFA_Syncfusion_Pdf_PdfConformanceLevel_) method on a [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) instance and passing one of the following [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) values:

<b>Available PDF/A conformance options for conversion:</b>
* `Pdf_A1B`
* `Pdf_A2B`
* `Pdf_A3B`
* `Pdf_A2U`
* `Pdf_A3U`
* `Pdf_A4`
* `Pdf_A4E`
* `Pdf_A4F`

The [Conformance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Conformance) property is a convenient alternative for Windows-specific targets that does the same thing for the supported `Pdf_A1B` and `Pdf_A2B` levels.

N> 1. To convert an existing PDF to a PDF/A conformant document in .NET Core, you need to add the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package from [NuGet.org](https://www.nuget.org/) as a reference in your project.
N> 2. For Linux environments, refer to the [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) documentation for detailed information on the additional NuGet packages required.

Refer to the following code sample to implement this conversion.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Convert-PDF-to-PDFA-conformance-document/.NET/Convert-PDF-to-PDFA-conformance-document/Program.cs" %}

using SkiaSharp;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Handle the SubstituteFont event to provide replacement fonts for non-embedded ones.
loadedDocument.SubstituteFont += LoadedDocument_SubstituteFont;

//Convert the loaded document to a PDF/A document.
loadedDocument.ConvertToPDFA(PdfConformanceLevel.Pdf_A1B);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using SkiaSharp;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Set the conformance for PDF/A-1b conversion.
loadedDocument.Conformance = PdfConformanceLevel.Pdf_A1B;

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports SkiaSharp

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

'Set the conformance for PDF/A-1b conversion.
loadedDocument.Conformance = PdfConformanceLevel.Pdf_A1B

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

To convert an existing PDF document to a PDF/A document in .NET Core, you need to substitute the non-embedded fonts in the input document. Refer to the following code sample to achieve the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Convert-PDF-to-PDFA-conformance-document/.NET/Convert-PDF-to-PDFA-conformance-document/Program.cs" %}

static void LoadedDocument_SubstituteFont(object sender, PdfFontEventArgs args)
{
    //Get the font name.
    string fontName = args.FontName.Split(',')[0];
    //Get the font style.
    PdfFontStyle fontStyle = args.FontStyle;
    SKFontStyle sKFontStyle = SKFontStyle.Normal;
    if (fontStyle != PdfFontStyle.Regular)
    {
        if (fontStyle == PdfFontStyle.Bold)
        {
            sKFontStyle = SKFontStyle.Bold;
        }
        else if (fontStyle == PdfFontStyle.Italic)
        {
            sKFontStyle = SKFontStyle.Italic;
        }
        else if (fontStyle == (PdfFontStyle.Italic | PdfFontStyle.Bold))
        {
            sKFontStyle = SKFontStyle.BoldItalic;
        }
    }
    SKTypeface typeface = SKTypeface.FromFamilyName(fontName, sKFontStyle);
    SKStreamAsset typeFaceStream = typeface.OpenStream();
    MemoryStream memoryStream = null;
    if (typeFaceStream != null && typeFaceStream.Length > 0)
    {
        //Create the fontData from the type face stream.
        byte[] fontData = new byte[typeFaceStream.Length];
        typeFaceStream.Read(fontData, typeFaceStream.Length);
        typeFaceStream.Dispose();

        //Create the new memory stream from the font data.
        memoryStream = new MemoryStream(fontData);
    }
    //Set the font stream to the event args.
    args.FontStream = memoryStream;
}

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Convert-PDF-to-PDFA-conformance-document).

N> 1. Converting a PDF to a PDF/X-1a conformant document is not supported.
N> 2. CMYK color space images and symbolic fonts are not supported during PDF/A conversion.
N> 3. From the .NET Framework 3.5 version onward, Essential<sup>&reg;</sup> PDF is compatible with PDF to PDF/A conversion.

## Font subsetting during PDF to PDF/A conversion

You can optimize the size of PDF/A documents by embedding only the required font glyphs during conversion. This is achieved by setting the [SubsetFonts](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfConformanceOptions.html#Syncfusion_Pdf_Parsing_PdfConformanceOptions_SubsetFonts) and [ConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfConformanceOptions.html#Syncfusion_Pdf_Parsing_PdfConformanceOptions_ConformanceLevel) properties through the [PdfConformanceOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfConformanceOptions.html) class.

Refer to the following code sample for implementation.

N> To convert an existing PDF to a PDF/A-compliant document in .NET Core, ensure that the **Syncfusion.Pdf.Imaging.Net.Core** assembly package is referenced in your project.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Font_Subsetting_in_PDFA_conversion/.NET/Font_Subsetting_in_PDFA_conversion/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;
using Syncfusion.Drawing;
using Syncfusion.Pdf.Graphics;
using SkiaSharp;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Handle the SubstituteFont event to provide replacement fonts.
loadedDocument.SubstituteFont += LoadedDocument_SubstituteFont;

//Create conformance options.
PdfConformanceOptions options = new PdfConformanceOptions();
//Set the conformance level.
options.ConformanceLevel = PdfConformanceLevel.Pdf_A1B;

//Embed fonts as subsets.
options.SubsetFonts = true;

//Convert to the PDF/A conformance.
loadedDocument.ConvertToPDFA(options);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;
using System.Drawing;
using Syncfusion.Pdf.Graphics;
using SkiaSharp;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Create conformance options.
PdfConformanceOptions options = new PdfConformanceOptions();
//Set the conformance level.
options.ConformanceLevel = PdfConformanceLevel.Pdf_A1B;

//Embed fonts as subsets.
options.SubsetFonts = true;

//Convert to the PDF/A conformance.
loadedDocument.ConvertToPDFA(options);

//Save the PDF document.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports System.Drawing
Imports Syncfusion.Pdf.Graphics
Imports SkiaSharp

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

'Create conformance options.
Dim options As New PdfConformanceOptions()
'Set the conformance level.
options.ConformanceLevel = PdfConformanceLevel.Pdf_A1B

'Embed fonts as subsets.
options.SubsetFonts = True

'Convert to the PDF/A conformance.
loadedDocument.ConvertToPDFA(options)

'Save the PDF document.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Font_Subsetting_in_PDFA_conversion/.NET).

To convert an existing PDF document to a PDF/A document in .NET Core, you need to substitute the non-embedded fonts in the input document. Refer to the following code sample to achieve the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

static void LoadedDocument_SubstituteFont(object sender, PdfFontEventArgs args)
{
    //Get the font name.
    string fontName = args.FontName.Split(',')[0];
    //Get the font style.
    PdfFontStyle fontStyle = args.FontStyle;
    SKFontStyle sKFontStyle = SKFontStyle.Normal;
    if (fontStyle != PdfFontStyle.Regular)
    {
        if (fontStyle == PdfFontStyle.Bold)
        {
            sKFontStyle = SKFontStyle.Bold;
        }
        else if (fontStyle == PdfFontStyle.Italic)
        {
            sKFontStyle = SKFontStyle.Italic;
        }
        else if (fontStyle == (PdfFontStyle.Italic | PdfFontStyle.Bold))
        {
            sKFontStyle = SKFontStyle.BoldItalic;
        }
    }
    SKTypeface typeface = SKTypeface.FromFamilyName(fontName, sKFontStyle);
    SKStreamAsset typeFaceStream = typeface.OpenStream();
    MemoryStream memoryStream = null;
    if (typeFaceStream != null && typeFaceStream.Length > 0)
    {
        //Create the font data from the type face stream.
        byte[] fontData = new byte[typeFaceStream.Length];
        typeFaceStream.Read(fontData, typeFaceStream.Length);
        typeFaceStream.Dispose();

        //Create the new memory stream from the font data.
        memoryStream = new MemoryStream(fontData);
    }
    //Set the font stream to the event args.
    args.FontStream = memoryStream;
}

{% endhighlight %}

{% endtabs %}

## Get the PDF conformance level

You can find the conformance level of an existing PDF document by using the [Conformance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Conformance) property of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. Refer to the following code sample to get the conformance level of an existing PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Get-the-conformance-level-of-the-existing-PDF-document/.NET/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the conformance level of the loaded document.
PdfConformanceLevel conformance = loadedDocument.Conformance;

//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Get the conformance level of the loaded document.
PdfConformanceLevel conformance = loadedDocument.Conformance;

//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

'Get the conformance level of the loaded document.
Dim conformance As PdfConformanceLevel = loadedDocument.Conformance

'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Get-the-conformance-level-of-the-existing-PDF-document).

## Get PDF to PDF/A conversion progress

You can track the progress of a PDF to PDF/A conversion by handling the [PdfAConversionProgress](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_PdfAConversionProgress) event. The event handler receives a [PdfAConversionProgressEventArgs](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfAConversionProgressEventArgs.html) instance whose [ProgressValue](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfAConversionProgressEventArgs.html#Syncfusion_Pdf_Parsing_PdfAConversionProgressEventArgs_ProgressValue) property indicates the percentage of the conversion that has completed.

The following code sample shows the delegate for handling the PDF to PDF/A conversion process.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Get-PDF-to-PDFA-conversion-progress/.NET/Get-PDF-to-PDFA-conversion-progress/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Subscribe to the PdfAConversionProgress event to track the PDF to PDF/A conversion process.
loadedDocument.PdfAConversionProgress += new PdfLoadedDocument.PdfAConversionProgressEventHandler(pdfAConversion_TrackProgress);

loadedDocument.ConvertToPDFA(PdfConformanceLevel.Pdf_A1B);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

//Event handler to track the PDF to PDF/A conversion process.
void pdfAConversion_TrackProgress(object sender, PdfAConversionProgressEventArgs arguments)
{
    Console.WriteLine(String.Format("PDF to PDF/A conversion process {0}% completed", arguments.ProgressValue));
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load a PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");

//Set the conformance for PDF/A-1b conversion.
loadedDocument.Conformance = PdfConformanceLevel.Pdf_A1B;
loadedDocument.PdfAConversionProgress += pdfAConversion_TrackProgress;

//Save the document.
loadedDocument.Save("Output.pdf");

//Close the document.
loadedDocument.Close(true);

//Event handler to track the PDF to PDF/A conversion process.
void pdfAConversion_TrackProgress(object sender, PdfAConversionProgressEventArgs arguments)
{
    Console.WriteLine(String.Format("PDF to PDF/A conversion process {0}% completed", arguments.ProgressValue));
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf

'Load a PDF document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("input.pdf")

'Set the conformance for PDF/A-1b conversion.
loadedDocument.Conformance = PdfConformanceLevel.Pdf_A1B
AddHandler loadedDocument.PdfAConversionProgress, AddressOf pdfAConversion_TrackProgress

'Save the document.
loadedDocument.Save("Output.pdf")

'Close the document.
loadedDocument.Close(True)

'Event handler to track the PDF to PDF/A conversion process.
Private Sub pdfAConversion_TrackProgress(ByVal sender As Object, ByVal arguments As PdfAConversionProgressEventArgs)
    Console.WriteLine(String.Format("PDF to PDF/A conversion process {0}% completed", arguments.ProgressValue))
End Sub

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Get-PDF-to-PDFA-conversion-progress).

## PDF/A to PDF conversion

An existing PDF/A conformance document can be converted to a standard PDF document by using the [RemoveConformance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_RemoveConformance) method of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. Refer to the following code sample.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Convert-PDFA-to-PDF-document/.NET/Convert-PDFA-to-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load a PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Remove PDF/A conformance.
document.RemoveConformance();

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Load an existing document.
PdfLoadedDocument document = new PdfLoadedDocument("input.pdf");

//Remove PDF/A conformance.
document.RemoveConformance();

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Load an existing document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("input.pdf")

'Remove PDF/A conformance.
document.RemoveConformance()

'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Convert-PDFA-to-PDF-document).

## Supported PDF standards for creation and conversion

<table>
  <thead>
    <tr>
      <th>Conformance Level</th>
      <th>Creation Support</th>
      <th>Conversion Support</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PDF/A-1a</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>PDF/A-1b</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>PDF/X-1a</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>PDF/A-2a</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>PDF/A-2b</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>PDF/A-2u</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>PDF/A-3a</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>PDF/A-3b</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>PDF/A-3u</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>PDF/A-4</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>PDF/A-4e</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>PDF/A-4f</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>
