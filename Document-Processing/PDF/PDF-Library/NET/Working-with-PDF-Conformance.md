---
title: Working with PDF conformance in .NET PDF Library | Syncfusion
description: This section explains how to create a PDF conformance documents and convert PDF to PDF/A conformance document.
platform: document-processing
control: PDF
documentation: UG
---
# Working with PDF Conformance in File Formats PDF

Essential<sup>&reg;</sup> PDF enables working with PDF Conformance standards such as PDF/A, PDF/X, and PDF/UA to ensure compliance with archival and accessibility requirements.

To quickly get started, work with PDF Conformance standards in .NET using the PDF Library. Please, check this video:
{% youtube "https://youtu.be/jgvYqQlfs5Q?si=R8RE_KKenGVoFgzX" %}

<b>PDF/A Standards & Conformance Levels Comparison</b>

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
      <td> No JPEG2000, transparency, layers, or attachments</td>
    </tr>
    <tr>
      <td>PDF/A-2</td>
      <td>PDF 1.7</td>
      <td>a, b, u</td>
      <td>JPEG2000, transparency, layers, PDF/A attachments, digital signatures</td>
      <td> Only PDF/A files can be attached</td>
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
      <td> No a, b, u levels; encryption and JavaScript still forbidden</td>
    </tr>
  </tbody>
</table>

<b>Conformance Level Details</b>

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

The Essential<sup>&reg;</sup> PDF currently supports the following PDF conformances:

* PDF/A-1a conformance
* PDF/A-1b conformance
* PDF/X-1a conformance
* PDF/A-2a conformance
* PDF/A-2b conformance
* PDF/A-2u conformance
* PDF/A-3a conformance
* PDF/A-3b conformance
* PDF/A-3u conformance
* PDF/A-4 conformance
* PDF/A-4e conformance
* PDF/A-4f conformance

N> 1. To know more details about PDF/A standard refer [https://en.wikipedia.org/wiki/PDF/A#Description](https://en.wikipedia.org/wiki/PDF/A#Description )
N> 2. To know more details about PDF/X standard refer [https://en.wikipedia.org/wiki/PDF/X](https://en.wikipedia.org/wiki/PDF/X)

N> Essential<sup>&reg;</sup> PDF supports PDF conformances only in Windows Forms, WPF, ASP.NET Core, ASP.NET MVC and Xamarin platforms.

## PDF/A-1b conformance

You can create a PDF/A-1b document by specifying the conformance level as ```Pdf_A1B``` through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document, as shown below.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA1B-document/.NET/Creating-the-new-PDFA1B-document/Program.cs" %}	

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-1b standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A1B);
//Add a page to the document
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);

//Draw the text
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
Font font = new Font("Arial", 20f, FontStyle.Regular);
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);

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
Dim font As New Font("Arial", 20.0F, FontStyle.Regular)
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True)

'Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)    

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA1B-document).

## PDF/A-2b conformance

You can create a PDF/A-2b document by specifying the conformance level as ```Pdf_A2B``` through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document as follows.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA2B-document/.NET/Creating-the-new-PDFA2B-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2b standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2B);
//Add a page to the document
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);

//Draw the text
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2b standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2B);
//Add a page
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Create a solid brush
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font
Font font = new Font("Arial", 20f, FontStyle.Regular);
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);

//Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/A-2b standard
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A2B)
'Add a page
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font
Dim font As New Font("Arial", 20.0F, FontStyle.Regular)
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True)

'Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA2B-document).

## PDF/A-3b conformance

The PDF/A-3b conformance supports the external files as attachment to the PDF document. So you can attach any document format such as Excel, Word, HTML, CAD, or XML files.

You can create a PDF/A-3b document by specifying the conformance level as Pdf_A3B through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document as follows.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA3B-document/.NET/Creating-the-new-PDFA3B-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3b standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3B);
//Add a page to the document
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
//Load the TrueType font from the local file
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3b standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3B);
//Add a page
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
//Create a solid brush
PdfBrush brush = new PdfSolidBrush(Color.Black);
Font font = new Font("Arial", 20f, FontStyle.Regular);
//Set the font
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);
//Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new document with PDF/A-3b standard
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A3B)
'Add a page
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
'Create a solid brush
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
Dim font As New Font("Arial", 20.0F, FontStyle.Regular)
'Set the font
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True)
'Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA3B-document).

## PDF/A-1a conformance

PDF/A-1a conformance includes all PDF/A-1b requirements in addition to the features intended to improve a document's accessibility. PDF/A-1a conformance additionally have crucial properties of Tagged PDF.

You can create a PDF/A-1a document by specifying the conformance level as ```Pdf_A1A``` through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document, as shown below.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA1A-document/.NET/Creating-the-new-PDFA1A-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-1a standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A1A);
//Add a page to the document
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text
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
Font font = new Font("Arial", 20f, FontStyle.Regular);
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);
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
Dim font As New Font("Arial", 20.0F, FontStyle.Regular)
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA1A-document).

## PDF/A-2a conformance

PDF/A-2a conformance includes all PDF/A-2b requirements in addition to the features intended to improve a document's accessibility. PDF/A-2a conformance additionally have crucial properties of Tagged PDF.

You can create a PDF/A-2a document by specifying the conformance level as ```Pdf_A2A``` through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document as follows.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA2A-document/.NET/Creating-the-new-PDFA2A-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2a standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2A);
//Add a page to the document
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2a standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2A);
//Add a page
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Create a solid brush
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font
Font font = new Font("Arial", 20f, FontStyle.Regular);
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);
//Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/A-2a standard
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A2A)
'Add a page
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font
Dim font As New Font("Arial", 20.0F, FontStyle.Regular)
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True)
'Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA2A-document).

## PDF/A-3a conformance

PDF/A-3a conformance includes all PDF/A-3b requirements in addition to the features intended to improve a document's accessibility. PDF/A-3a conformance additionally have crucial properties of Tagged PDF.

You can create a PDF/A-3a document by specifying the conformance level as ``Pdf_A3A`` through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document as follows.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA3A-document/.NET/Creating-the-new-PDFA3A-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3a standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3A);
//Add a page to the document
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
//Load the TrueType font from the local file
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3a standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3A);
//Add a page
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

//Create a solid brush
PdfBrush brush = new PdfSolidBrush(Color.Black);
Font font = new Font("Arial", 20f, FontStyle.Regular);
//Set the font
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);
//Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new document with PDF/A-3a standard
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A3A)
'Add a page
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
'Create a solid brush
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font
Dim font As New Font("Arial", 20.0F, FontStyle.Regular)
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True)

'Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA3A-document).

## PDF/A-2u conformance

PDF/A-2u conformance includes all PDF/A-2b requirements, and additionally Unicode mapping for all text in the document. 

You can create a PDF/A-2u document by specifying the conformance level as ```Pdf_A2U``` through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document as follows.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA2U-document/.NET/Creating-the-new-PDFA2U-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2u standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2U);
//Add a page to the document
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Load the TrueType font from the local file
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/A-2u standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A2U);
//Add a page
PdfPage page = document.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Create a solid brush
PdfBrush brush = new PdfSolidBrush(Color.Black);
Font font = new Font("Arial", 20f, FontStyle.Regular);
//Set the font
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);
//Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/A-2u standard
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A2U)
'Add a page
Dim page As PdfPage = document.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Create a solid brush
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
Dim font As New Font("Arial", 20.0F, FontStyle.Regular)
'Set the font
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True)
'Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA2U-document).

## PDF/A-3u conformance

PDF/A-3u conformance includes all PDF/A-3b requirements, and additionally Unicode mapping for all text in the document. 

You can create a PDF/A-3u document by specifying the conformance level as ``Pdf_A3U`` through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document as follows.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA3U-document/.NET/Creating-the-new-PDFA3U-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3u standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3U);
//Add a page to the document
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
//Load the TrueType font from the local file
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;

//Create a new document with PDF/A-3u standard
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A3U);
//Add a page
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
//Create a solid brush
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font
Font font = new Font("Arial", 20f, FontStyle.Regular);
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);

//Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive

'Create a new document with PDF/A-3u standard
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A3U)
'Add a page
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
'Create a solid brush
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font
Dim font As New Font("Arial", 20.0F, FontStyle.Regular)
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True)

'Draw the text
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20))

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA3U-document).

## PDF/A-4 conformance

The separate conformance levels a, b, and u are not used in a PDF/A-4. Instead, PDF/A-4 encourages but does not require the addition of higher-level logical structures, and it requires Unicode mappings for all fonts.

Create a PDF/A-4 document by specifying the conformance level as ``Pdf_A4`` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating a new PDF document as follows.

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

//Create a solid brush. 
PdfBrush brush = new PdfSolidBrush(Color.Black); 
//Set the font. 
Font font = new Font("Arial", 20f, FontStyle.Regular); 
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true); 
//Draw the text. 
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20)); 

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

'Create a solid brush. 
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black) 
'Set the font. 
Dim font As New Font("Arial", 20.0F, FontStyle.Regular) 
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True) 
'Draw the text. 
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20)) 

'Save and close the document. 
document.Save("Output.pdf") 
document.Close(True)

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-the-new-PDFA4-document).
	
## PDF/A-4e conformance

The PDF/A-4E ("Engineering") is intended for technical documents and replaces PDF/E. PDF/A-4e supports 3D models, rich media, and 3D annotations as well as embedded files.

Create a PDF/A-4E document by specifying the conformance level as ``Pdf_A4E`` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document as follows.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-the-new-PDFA4E-document/.NET/Creating-the-new-PDFA4E-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with the PDF/A-4 standard. 
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A4); 
//Creates a new page. 
PdfPage page = document.Pages.Add(); 

//Create a new pdf 3d annotation. 
FileStream inputStream = new FileStream("3DAnnotation.U3D", FileMode.Open, FileAccess.Read); 
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), inputStream); 
//Handle the activation of the 3d annotation. 
Pdf3DActivation activation = new Pdf3DActivation(); 
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation; 
activation.ShowToolbar = true; pdf3dAnnotation.Activation = activation; 
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

//Create a new pdf 3d annotation. 
Pdf3DAnnotation pdf3dAnnotation = new Pdf3DAnnotation(new RectangleF(10, 50, 300, 150), @"3DAnnotation.U3D"); 
//Handle the activation of the 3d annotation. 
Pdf3DActivation activation = new Pdf3DActivation(); 
activation.ActivationMode = Pdf3DActivationMode.ExplicitActivation; 
activation.ShowToolbar = true; pdf3dAnnotation.Activation = activation; 
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

'Create a new document with the PDF/A-4 standard. 
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_A4E) 
'Creates a new page. 
Dim page As PdfPage = document.Pages.Add()
 
'Create a new pdf 3d annotation. 
Dim pdf3dAnnotation As New Pdf3DAnnotation(New RectangleF(10, 50, 300, 150), "3DAnnotation.U3D") 
'Handle the activation of the 3d annotation. 
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

The requirements of the PDF/A-3 have also been partially incorporated into PDF/A-4. Thus, the PDF/A-4f allows the embedding of arbitrary files.

Create a PDF/A-4f document by specifying the conformance level as ``Pdf_A4F`` through the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating a new PDF document as follows.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Creating-a-new-PDFA4F-document/.NET/Creating-a-new-PDFA4F-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with the PDF/A-4F standard. 
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_A4F); 
//Add a page to the document. 
PdfPage page = document.Pages.Add(); 

//Create an attachment. 
Stream fileStream = typeof(MainPage).GetTypeInfo().Assembly.GetManifestResourceStream("Sample.Assets.Data.Input.txt"); 
PdfAttachment attachment = new PdfAttachment(@"Input.txt", fileStream); 
attachment.Relationship = PdfAttachmentRelationship.Alternative; 
attachment.ModificationDate = DateTime.Now; 
attachment.Description = "Input.txt"; 
attachment.MimeType = "application/txt"; 

//Add the attachment to the document. 
document.Attachments.Add(attachment); 

//Create the PDF graphics for the page. 
PdfGraphics graphics = page.Graphics; 
//Load the TrueType font from the local file.
Stream fontStream = typeof(MainPage).GetTypeInfo().Assembly.GetManifestResourceStream("Sample.Assets.Data.Arial.ttf"); 
//Initialize the PDF TrueType font. 
PdfFont font = new PdfTrueTypeFont(fontStream, 14); 
//Draw the text. 
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0)); 

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with the PDF/A-3b standard. 
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
//Create a solid brush. 
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font. 
Font font = new Font("Arial", 20f, FontStyle.Regular); 
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);
//Draw the text. 
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20)); 

//Save and close the document. 
document.Save("Output.pdf"); 
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with the PDF/A-3b standard. 
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
'Create a solid brush. 
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black) 
'Set the font. 
Dim font As New Font("Arial", 20.0F, FontStyle.Regular) 
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True) 

'Draw the text. 
graphics.DrawString("Hello world!", pdfFont, brush, New PointF(20, 20)) 

'Save and close the document. 
document.Save("Output.pdf") 
document.Close(True)

{% endhighlight %}

{% endtabs %}   

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Creating-a-new-PDFA4F-document).

## PDF/X-1a conformance

You can create a PDF/X-1a document by specifying the conformance level as ```Pdf_X1A2001``` through [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) Enum when creating the new PDF document, as shown below.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %} 

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/x standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_X1A2001);
//Add a page.
PdfPage page = document.Pages.Add();
//Set color space. 
document.ColorSpace = PdfColorSpace.CMYK;

//Create Pdf graphics for the page.
PdfGraphics graphics = page.Graphics;
//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Load the TrueType font from the local file.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read); 
//Set the font.
PdfFont font = new PdfTrueTypeFont(fontStream, 14);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

//Create a new document with PDF/x standard.
PdfDocument document = new PdfDocument(PdfConformanceLevel.Pdf_X1A2001);
//Add a page.
PdfPage page = document.Pages.Add();
//Set color space. 
document.ColorSpace = PdfColorSpace.CMYK;

//Create Pdf graphics for the page.
PdfGraphics graphics = page.Graphics;
//Create a solid brush.
PdfBrush brush = new PdfSolidBrush(Color.Black);
//Set the font.
Font font = new Font("Arial",20f, FontStyle.Regular);
PdfFont pdfFont = new PdfTrueTypeFont(font, FontStyle.Regular, 12, false, true);
//Draw the text.
graphics.DrawString("Hello world!", pdfFont, brush, new PointF(20, 20));

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

'Create a new document with PDF/x standard.
Dim document As New PdfDocument(PdfConformanceLevel.Pdf_X1A2001)
'Add a page.
Dim page As PdfPage = document.Pages.Add()

'Set ColorSpace
document.ColorSpace = PdfColorSpace.CMYK

'Create Pdf graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
'Create a solid brush.
Dim brush As PdfBrush = New PdfSolidBrush(Color.Black)
'Set the font.
Dim font As New Font("Arial", 20.0F, FontStyle.Regular)
Dim pdfFont As PdfFont = New PdfTrueTypeFont(font, FontStyle.Regular, 12, False, True)
'Draw the text.
graphics.DrawString("Hello world!", font, brush, New PointF(20, 20))

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Create-a-PDFX1A-conformance-document).

## PDF to PDF/A conversion

An existing PDF document can be converted to a PDF/A conformance document by setting the [Conformance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Conformance) property of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class to one of the following values from the [PdfConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfConformanceLevel.html) enumeration:

<b>Available PDF/A Conformance Options:</b>
* Pdf_A1B
* Pdf_A2B
* Pdf_A3B 
* Pdf_A4
* Pdf_A4E
* Pdf_A4F

N> 1.To convert the existing PDF to PDF/A conformance document in .NET Core, you need to add the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) package from [NuGet.org](https://www.nuget.org/) as a reference in your project.
N> 2.For Linux environments, refer to the [documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) for detailed information on the additional NuGet packages required.

Refer to the following code sample to implement this conversion.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Convert-PDF-to-PDFA-conformance-document/.NET/Convert-PDF-to-PDFA-conformance-document/Program.cs" %}

using SkiaSharp;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Sample level font event handling
loadedDocument.SubstituteFont += LoadedDocument_SubstituteFont ;
//Convert the loaded document to PDF/A document
loadedDocument.ConvertToPDFA(PdfConformanceLevel.Pdf_A1B);

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true)

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
Dim document As New PdfLoadedDocument("Input.pdf")

'Set the conformance for PDF/A-1b conversion.
loadedDocument.Conformance = PdfConformanceLevel.Pdf_A1B

'Save and close the document.
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}  

To convert an existing PDF document to the PDFA document in .NET Core, you need to substitute the non-embedded fonts in the input document. Refer to the the following code sample to achieve the same.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Convert-PDF-to-PDFA-conformance-document/.NET/Convert-PDF-to-PDFA-conformance-document/Program.cs" %}

static void LoadedDocument_SubstituteFont(object sender, PdfFontEventArgs args)
{
     //get the font name
     string fontName = args.FontName.Split(',')[0];
     //get the font style
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
         byte[] fontData = new byte[typeFaceStream.Length - 1];	 
         typeFaceStream.Read(fontData, typeFaceStream.Length);	 
         typeFaceStream.Dispose();	 
         //Create the new memory stream from the font data.	 
         memoryStream = new MemoryStream(fontData);
    }	
    //set the font stream to the event args.	
    args.FontStream = memoryStream;
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Get-PDF-to-PDFA-conversion-progress).

N> 1. Converting PDF to PDF/X-1a conformance document is not supported.
N> 2. CMYK color space images and symbolic fonts are not supported.
N> 3. From the .NET Framework 3.5 version, the Essential<sup>&reg;</sup> PDF is compatible with the PDF to PDF/A conversion. 

## Font subsetting during PDF to PDF/A conversion

You can optimize the size of PDF/A documents by embedding only the required font glyphs during conversion. This is achieved by setting the SubsetFonts and [ConformanceLevel](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfConformanceOptions.html#Syncfusion_Pdf_Parsing_PdfConformanceOptions_ConformanceLevel) properties using the [PdfConformanceOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfConformanceOptions.html) class. 

Refer to the following code sample for implementation. 

N> To convert an existing PDF to a PDF/A-compliant document in .NET Core, ensure that the **Syncfusion.Pdf.Imaging.Net.Core** assembly package is referenced in your project.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Font_Subsetting_in_PDFA_conversion/.NET/Font_Subsetting_in_PDFA_conversion/Program.cs" %}	

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;
using System.Reflection.Metadata;
using Syncfusion.Drawing;
using Syncfusion.Pdf.Graphics;
using SkiaSharp;

//Load an existing PDF document  
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"); 

//Sample level font event handling  
loadedDocument.SubstituteFont += LoadedDocument_SubstituteFont;  

//Create conformance options 
PdfConformanceOptions options = new PdfConformanceOptions();  
//Set the conformance level 
options.ConformanceLevel = PdfConformanceLevel.Pdf_A1B;  

//Embed fonts as subsets  
options.SubsetFonts = true;  

// Convert to PDF/A conformance 
loadedDocument.ConvertToPDFA(options); 

//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;
using System.Reflection.Metadata;
using System.Drawing;
using Syncfusion.Pdf.Graphics;
using SkiaSharp;

//Load an existing PDF document  
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"); 

//Convert to PDF/A conformance  
PdfConformanceOptions options = new PdfConformanceOptions(); 
options.ConformanceLevel = PdfConformanceLevel.Pdf_A1B; 

//Embed fonts as subsets  
options.SubsetFonts = true; 
loadedDocument.ConvertToPDFA(options); 

//Save the PDF document
loadedDocument.Save("Output.pdf"); 
//Closes the document 
loadedDocument.Close(true); 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf
Imports System.Reflection.Metadata
Imports System.Drawing
Imports Syncfusion.Pdf.Graphics
Imports SkiaSharp

' Load an existing PDF document. 
Dim document As New PdfLoadedDocument("Input.pdf") 

' Convert to PDF/A conformance 
 Dim options As PdfConformanceOptions = New PdfConformanceOptions() 
 options.ConformanceLevel = PdfConformanceLevel.Pdf_A1B 

' Embed fonts as subsets 
 options.SubsetFonts = True 
 document.ConvertToPDFA(options) 

' Save the PDF document
document.Save("Output.pdf")  
' Closes the document 
document.Close(True) 

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Font_Subsetting_in_PDFA_conversion/.NET).

To convert an existing PDF document to the PDFA document in .NET Core, you need to substitute the non-embedded fonts in the input document. Refer to the following code sample to achieve the same.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" %}	

static void LoadedDocument_SubstituteFont(object sender, PdfFontEventArgs args) 

{ 
     //get the font name 
     string fontName = args.FontName.Split(',')[0]; 

     //get the font style 
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

    //set the font stream to the event args.	 
    args.FontStream = memoryStream; 
}

{% endhighlight %}

{% endtabs %} 

## Get PDF Conformance Level

You can find the conformance level of the existing PDF document using the [Conformance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Conformance) property in the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. Refer to the following code sample to get the conformance level of the existing PDF document. 

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

'Load an existing PDF. 
Dim document As New PdfLoadedDocument("Input.pdf") 

'Get the conformance level of the loaded document. 
PdfConformanceLevel conformance = loadedDocument.Conformance;

'Close the document. 
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Get-the-conformance-level-of-the-existing-PDF-document).

## Get PDF to PDF/A conversion progress

You can get conversion progress using [PdfAConversionProgress](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_PdfAConversionProgress) event.

The following code sample shows the delegate for handling PDF to PDF/A conversion process

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Conformance/Get-PDF-to-PDFA-conversion-progress/.NET/Get-PDF-to-PDFA-conversion-progress/Program.cs" %}
 
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
 
//Subscribe to the PdfAConversionProgress event to track the PDF to PDF/A conversion process
loadedDocument.PdfAConversionProgress += new PdfLoadedDocument.PdfAConversionProgressEventHandler(pdfAConversion_TrackProgress);
 
loadedDocument.ConvertToPDFA(PdfConformanceLevel.Pdf_A1B);
 
//Save and close the document.
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);
 
 
//Event handler for Track PDF to PDF/A conversion process
void pdfAConversion_TrackProgress(object sender, PdfAConversionProgressEventArgs arguments)
{
    Console.WriteLine(String.Format("PDF to PDF/A conversion process " + arguments.ProgressValue + "% completed"));
}
 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load a PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");

//Set the conformance for PDF/A-1b conversion
loadedDocument.Conformance = PdfConformanceLevel.Pdf_A1B;
loadedDocument.PdfAConversionProgress += pdfAConversion_TrackProgress;

//Save the document
loadedDocument.Save("Output.pdf");

//Close the document
loadedDocument.Close(true);

//Event handler for Track PDF to PDF/A conversion process
void pdfAConversion_TrackProgress(object sender, PdfAConversionProgressEventArgs arguments)
{
Console.WriteLine(String.Format("PDF to PDF/A conversion Process " + arguments. ProgressValue + " % completed"));
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf

'Load a PDF document. 
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("input.pdf") 

'Set the conformance for PDF/A-1b conversion.
loadedDocument.Conformance = PdfConformanceLevel.Pdf_A1B
loadedDocument.PdfAConversionProgress += pdfAConversion_TrackProgress

'Save the document.
loadedDocument.Save("Output.pdf")

'Close the document.
loadedDocument.Close(True)

'Event handler for Track PDF to PDF/A conversion process.
Private  Sub pdfAConversion_TrackProgress(ByVal sender As Object, ByVal arguments As PdfAConversionProgressEventArgs)
Console.WriteLine(String.Format(PDF to PDF/A conversion Process " + arguments. ProgressValue + " % completed"))

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Conformance/Get-PDF-to-PDFA-conversion-progress).

## PDF/A to PDF conversion

An existing PDF/A conformance document can be converted to a PDF document using the [RemoveConformance](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_RemoveConformance) method in the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. Refer to the following code sample to achieve the same,

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

<b>Supported PDF standards for creation and conversion</b>
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