---
title: Working with Document | PDF library | Syncfusion
description: Learn how to configure page settings, sections, document properties, viewer preferences, compression, multi-threading, and uniform resource naming in PDF documents using the Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Document

Essential<sup>&reg;</sup> PDF provides a comprehensive set of APIs for configuring the page layout, document information, viewer behavior, and runtime options of a PDF document. The following sections cover the most common scenarios:

* [Document settings – page size, orientation, and rotation](#adding-the-document-settings)
* [Sections](#creating-sections-in-a-pdf)
* [Printing a PDF document](#printing-pdf-document)
* [Document properties](#working-with-document-properties)
* [Removing specific document information entries](#remove-specific-keys-from-the-existing-document-information)
* [Incremental updates](#performing-incremental-update-for-pdf-document)
* [Viewer preferences](#choosing-the-viewer-preferences)
* [Document actions](#adding-document-action)
* [Multi-threading](#working-in-multi-threading-environment)
* [Uniform resource naming](#uniform-resource-naming-in-pdf-document)
* [Memory optimization](#memory-optimization)
* [Finding corrupted PDF documents](#find-corrupted-pdf-document)
* [Embedding fonts](#embed-all-the-non-embedded-fonts-in-the-existing-pdf-document)
* [Base URI](#add-or-retrieve-baseuri-in-a-pdf-document)
* [Tracking save progress](#tracking-save-progress)

## Adding the document settings

Essential<sup>&reg;</sup> PDF supports various page setting options that control the page display, available through the [PageSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_PageSettings) property of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The [PdfPageSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html) class exposes the [Size](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Size), [Orientation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Orientation), [Rotate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Rotate), [Margins](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Margins), and [Transition](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Transition) properties, which can be configured before pages are added to the document.

You can choose a standard or custom page size when you add a page to a PDF document. The following code example illustrates how to create a PDF document with a standard page size.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Create-a-PDF-document-with-standard-page-size/.NET/Create-a-PDF-document-with-standard-page-size/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the page size
document.PageSettings.Size = PdfPageSize.A4;
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the page size
document.PageSettings.Size = PdfPageSize.A4;
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Set the page size
document.PageSettings.Size = PdfPageSize.A4
' Add a page to the document
Dim page As PdfPage = document.Pages.Add()

' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics
' Set the font
Dim font As New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Create-a-PDF-document-with-standard-page-size/).

> **NOTE:** The [PdfPageSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSize.html) enumeration includes common presets such as A0–A6, B0–B6, Letter, Legal, Ledger, and Executive. Choose a preset for built-in sizes, or assign a custom [SizeF](https://learn.microsoft.com/dotnet/api/system.drawing.sizef) value to the [PdfPageSettings.Size](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Size) property for any other size, expressed in points (1 point = 1/72 inch).

You can create a PDF document with a custom page size by assigning a custom [SizeF](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Size) value to the [PdfPageSettings.Size](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Size) property, as illustrated in the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Create-a-PDF-document-with-custom-page-size/.NET/Create-a-PDF-document-with-custom-page-size/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the custom page size
document.PageSettings.Size = new SizeF(200, 300);
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the custom page size
document.PageSettings.Size = new SizeF(200, 300);
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Set the custom page size
document.PageSettings.Size = New SizeF(200, 300)
' Add a page to the document
Dim page As PdfPage = document.Pages.Add()

' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics
' Set the font
Dim font As New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Create-a-PDF-document-with-custom-page-size/).

You can change the page orientation from portrait to landscape by using the [PdfPageOrientation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageOrientation.html) enumeration, as illustrated in the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Change-the-page-orientation-from-portrait-to-landscape/.NET/Change-the-page-orientation-from-portrait-to-landscape/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the page size
document.PageSettings.Size = PdfPageSize.A4;
// Change the page orientation to landscape
document.PageSettings.Orientation = PdfPageOrientation.Landscape;
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the page size
document.PageSettings.Size = PdfPageSize.A4;
// Change the page orientation to landscape
document.PageSettings.Orientation = PdfPageOrientation.Landscape;
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Set the page size
document.PageSettings.Size = PdfPageSize.A4
' Change the page orientation to landscape
document.PageSettings.Orientation = PdfPageOrientation.Landscape
' Add a page to the document
Dim page As PdfPage = document.Pages.Add()

' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics
' Set the font
Dim font As New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Change-the-page-orientation-from-portrait-to-landscape/).

> **NOTE:** The PDF page orientation is normally inferred from the custom page size. However, if you set a custom orientation using the [Orientation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html#Syncfusion_Pdf_PdfPageSettings_Orientation) property, the page dimensions are adjusted to match the selected orientation (for example, an A4 page set to landscape becomes 842 x 595 points). The `Orientation` property is intended for new documents; for existing documents, use the `Rotate` property of the `PdfPageSettings` class instead.

You can also change the orientation by setting a rotation angle using the [PdfPageRotateAngle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageRotateAngle.html) enumeration, as illustrated in the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Rotate_PDF_based_on_angle/.NET/Rotate_PDF_based_on_angle/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the page size
document.PageSettings.Size = PdfPageSize.A4;
// Rotate the page by 90 degrees
document.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Set the page size
document.PageSettings.Size = PdfPageSize.A4;
// Rotate the page by 90 degrees
document.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90;
// Add a page to the document
PdfPage page = document.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Set the page size
document.PageSettings.Size = PdfPageSize.A4
' Rotate the page by 90 degrees
document.PageSettings.Rotate = PdfPageRotateAngle.RotateAngle90
' Add a page to the document
Dim page As PdfPage = document.Pages.Add()

' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics
' Set the font
Dim font As New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Rotate_PDF_based_on_angle/).

> **TIP:** The [PdfPageRotateAngle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageRotateAngle.html) enumeration accepts the values **RotateAngle0**, **RotateAngle90**, **RotateAngle180**, and **RotateAngle270**. Rotation is a view-time setting; it does not change the underlying page dimensions, so existing layout and coordinates remain valid. Use the `Rotate` property for rotating pages in existing PDF documents, where the `Orientation` property cannot be applied.

## Creating sections in a PDF

A PDF section is a logical grouping of one or more pages that can share common page settings such as size, orientation, margins, and template. A single [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) can contain multiple [PdfSection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfSection.html) objects, allowing pages with different page settings to coexist in the same document (for example, landscape title pages followed by portrait body pages). Each section maintains its own [PageSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfSection.html#Syncfusion_Pdf_PdfSection_PageSettings) through the `PdfSection.PageSettings` property. The following code example illustrates how to create a `PdfSection` in a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Create_sections_in_PDF_document/.NET/Create_sections_in_PDF_document/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a section to the PDF document
PdfSection section = document.Sections.Add();
// Add a page to the section
PdfPage page = section.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Add a section to the PDF document
PdfSection section = document.Sections.Add();
// Add a page to the section
PdfPage page = section.Pages.Add();

// Acquire the graphics of the page
PdfGraphics graphics = page.Graphics;
// Set the font
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document
Dim document As New PdfDocument()
' Add a section to the PDF document
Dim section As PdfSection = document.Sections.Add()
' Add a page to the section
Dim page As PdfPage = section.Pages.Add()

' Acquire the graphics of the page
Dim graphics As PdfGraphics = page.Graphics
' Set the font
Dim font As New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text on the page
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))

' Save the document
document.Save("Output.pdf")
' Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Create_sections_in_PDF_document/).

## Printing a PDF document

To print a PDF document, add the [Syncfusion.PdfViewer.Windows](https://www.nuget.org/packages/Syncfusion.PdfViewer.Windows) NuGet package to your project. Printing is supported only in Windows-specific applications because the [PdfDocumentView](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfDocumentView.html) control is a Windows Forms component.

The following code example illustrates how to print a PDF document to the default printer without showing a dialog.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Windows.Forms.PdfViewer;

// Prints the supplied PDF file using the default printer.
private void SendToPrinter(string fileName)
{
    using (PdfDocumentView viewer = new PdfDocumentView())
    {
        viewer.Load(fileName);
        // Send the document directly to the default printer.
        viewer.PrintDocument.Print();
        viewer.Dispose();
    }
}

SendToPrinter("Input.pdf");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.PdfViewer

Private Sub SendToPrinter(ByVal fileName As String)
    Using viewer As New PdfDocumentView()
        viewer.Load(fileName)
        ' Send the document directly to the default printer
        viewer.PrintDocument.Print()
        viewer.Dispose()
    End Using
End Sub

SendToPrinter("Input.pdf")

{% endhighlight %}

{% endtabs %}

> **TIP:** To show the standard print dialog before printing, use the `PrintDialog` pattern so that the user can select a printer, choose a page range, or export to a file:
>
> ```csharp
> using System.Drawing.Printing;
> using System.Windows.Forms;
> using Syncfusion.Windows.Forms.PdfViewer;
>
> using (PdfDocumentView viewer = new PdfDocumentView())
> {
>     viewer.Load("Input.pdf");
>
>     PrintDialog dialog = new PrintDialog();
>     dialog.AllowPrintToFile = true;
>     dialog.AllowSomePages = true;
>     dialog.AllowCurrentPage = true;
>     dialog.Document = viewer.PrintDocument;
>     if (dialog.ShowDialog() == DialogResult.OK)
>     {
>         viewer.PrintDocument.Print();
>     }
> }
> ```

## Working with document properties

Essential<sup>&reg;</sup> PDF allows you to set, read, and modify the document information of a PDF, such as Author, CreationDate, Subject, Title, and Producer. The [DocumentInformation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_DocumentInformation) property of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) or [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) provides access to this information through the [PdfDocumentInformation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfDocumentInformation.html) class. These values are stored in the PDF information dictionary and are visible from the **File &gt; Properties &gt; Description** dialog in most PDF viewers.

The following code snippet illustrates how to set PDF document information.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Add_PDF_document_properties/.NET/Add_PDF_document_properties/Program.cs" %}

using System;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document.
PdfDocument document = new PdfDocument();

// Set document information.
document.DocumentInformation.Author = "Syncfusion";
document.DocumentInformation.CreationDate = DateTime.Now;
document.DocumentInformation.Creator = "Essential PDF";
document.DocumentInformation.Keywords = "PDF";
document.DocumentInformation.Subject = "Document information DEMO";
document.DocumentInformation.Title = "Essential PDF Sample";

// Add a page to the document.
PdfPage page = document.Pages.Add();
// Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
// Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System;
using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document.
PdfDocument document = new PdfDocument();

// Set document information.
document.DocumentInformation.Author = "Syncfusion";
document.DocumentInformation.CreationDate = DateTime.Now;
document.DocumentInformation.Creator = "Essential PDF";
document.DocumentInformation.Keywords = "PDF";
document.DocumentInformation.Subject = "Document information DEMO";
document.DocumentInformation.Title = "Essential PDF Sample";

// Add a page to the document.
PdfPage page = document.Pages.Add();
// Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
// Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document.
Dim document As New PdfDocument()

' Set document information.
document.DocumentInformation.Author = "Syncfusion"
document.DocumentInformation.CreationDate = DateTime.Now
document.DocumentInformation.Creator = "Essential PDF"
document.DocumentInformation.Keywords = "PDF"
document.DocumentInformation.Subject = "Document information DEMO"
document.DocumentInformation.Title = "Essential PDF Sample"

' Add a page to the document.
Dim page As PdfPage = document.Pages.Add()
' Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
' Set the font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))

' Save the document.
document.Save("Output.pdf")
' Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Add_PDF_document_properties/).

> **NOTE:** The standard information entries that can be set or read through the [DocumentInformation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_DocumentInformation) property are **Author**, **Creator**, **Keywords**, **Subject**, **Title**, **Producer**, **CreationDate**, and **ModDate**. The **Producer** and **ModDate** entries are populated automatically by the library and should not be set manually in most scenarios.

To read and modify the [DocumentInformation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_DocumentInformation) property of an existing PDF document, use the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The following code example explains how to do this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Change_existing_PDF_properties/.NET/Change_existing_PDF_properties/Program.cs" %}

using System;
using Syncfusion.Pdf.Parsing;

// Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Modify document information.
document.DocumentInformation.Author = "Syncfusion";
document.DocumentInformation.CreationDate = DateTime.Now;
document.DocumentInformation.Creator = "Essential PDF";
document.DocumentInformation.Keywords = "PDF";
document.DocumentInformation.Subject = "Document information DEMO";
document.DocumentInformation.Title = "Essential PDF Sample";

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

// Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Modify document information.
document.DocumentInformation.Author = "Syncfusion";
document.DocumentInformation.CreationDate = DateTime.Now;
document.DocumentInformation.Creator = "Essential PDF";
document.DocumentInformation.Keywords = "PDF";
document.DocumentInformation.Subject = "Document information DEMO";
document.DocumentInformation.Title = "Essential PDF Sample";

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

' Load an existing PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

' Modify document information.
document.DocumentInformation.Author = "Syncfusion"
document.DocumentInformation.CreationDate = DateTime.Now
document.DocumentInformation.Creator = "Essential PDF"
document.DocumentInformation.Keywords = "PDF"
document.DocumentInformation.Subject = "Document information DEMO"
document.DocumentInformation.Title = "Essential PDF Sample"

' Save the document.
document.Save("Output.pdf")
' Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Change_existing_PDF_properties).

## Remove specific keys from the existing document information

To remove specific details from the existing document information, use the [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfDocumentInformation.html#Syncfusion_Pdf_Parsing_PdfDocumentInformation_Remove_System_String_) method of the [DocumentInformation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_DocumentInformation) property. The method accepts the case-sensitive information dictionary key (for example, **"Title"**, **"Author"**, **"Subject"**, **"Keywords"**, **"Creator"**, **"Producer"**, **"CreationDate"**, or **"ModDate"**). The following code example illustrates how to do this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Remove-specific-keys-from-the-existing-document-information/.NET/Program.cs" %}

using Syncfusion.Pdf.Parsing;

// Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Remove the document information properties.
document.DocumentInformation.Remove("Title");
document.DocumentInformation.Remove("Author");
document.DocumentInformation.Remove("Subject");
document.DocumentInformation.Remove("Keywords");
document.DocumentInformation.Remove("Creator");
document.DocumentInformation.Remove("Producer");
document.DocumentInformation.Remove("CreationDate");

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

// Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Remove the document information properties.
document.DocumentInformation.Remove("Title");
document.DocumentInformation.Remove("Author");
document.DocumentInformation.Remove("Subject");
document.DocumentInformation.Remove("Keywords");
document.DocumentInformation.Remove("Creator");
document.DocumentInformation.Remove("Producer");
document.DocumentInformation.Remove("CreationDate");

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

' Load an existing PDF document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")

' Remove the document information properties.
document.DocumentInformation.Remove("Title")
document.DocumentInformation.Remove("Author")
document.DocumentInformation.Remove("Subject")
document.DocumentInformation.Remove("Keywords")
document.DocumentInformation.Remove("Creator")
document.DocumentInformation.Remove("Producer")
document.DocumentInformation.Remove("CreationDate")

'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Remove-specific-keys-from-the-existing-document-information).

> **IMPORTANT:** The **ModDate** entry is maintained automatically by the library when the document is saved and cannot be removed through the `Remove` method. Removing **Producer** is also not recommended in most workflows because it identifies the library that generated the document. If a key does not exist in the document information dictionary, the `Remove` method has no effect, and no exception is thrown.

## Performing incremental update for PDF document

Essential<sup>&reg;</sup> PDF supports incremental updates for a PDF document. The content of a PDF file can be updated incrementally without rewriting the entire file. Changes are appended to the end of the file, leaving its original contents intact. The main benefit is that small changes to a large PDF document can be saved quickly, but the resulting document size increases compared with the original PDF document. By default, the [IncrementalUpdate](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfFileStructure.html#Syncfusion_Pdf_PdfFileStructure_IncrementalUpdate) property of [PdfFileStructure](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfFileStructure.html) is set to `true` (incremental mode). Disabling the property rewrites the entire file, which results in a smaller PDF and is recommended when you want to produce a compact output for distribution. This is illustrated in the following code sample.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Perform-incremental-update-for-the-PDF-document/.NET/Perform-incremental-update-for-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Disable the incremental update.
loadedDocument.FileStructure.IncrementalUpdate = false;
// Set the compression level.
loadedDocument.Compression = PdfCompressionLevel.Best;

// Save the document.
loadedDocument.Save("Output.pdf");
// Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Disable the incremental update.
loadedDocument.FileStructure.IncrementalUpdate = false;
// Set the compression level.
loadedDocument.Compression = PdfCompressionLevel.Best;

// Save the document.
loadedDocument.Save("Output.pdf");
// Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf

' Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Disable the incremental update.
loadedDocument.FileStructure.IncrementalUpdate = False
' Set the compression level.
loadedDocument.Compression = PdfCompressionLevel.Best

' Save the document.
loadedDocument.Save("Output.pdf")
' Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Perform-incremental-update-for-the-PDF-document/).

## Choosing the viewer preferences

Essential<sup>&reg;</sup> PDF allows you to set various PDF viewer preferences to be used when the generated PDF document is displayed in a PDF reader application. The [ViewerPreferences](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_ViewerPreferences) property of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class returns a [PdfViewerPreferences](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html) instance that exposes flags such as [HideMenubar](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html#Syncfusion_Pdf_PdfViewerPreferences_HideMenubar), [HideToolbar](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html#Syncfusion_Pdf_PdfViewerPreferences_HideToolbar), [HideWindowUI](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html#Syncfusion_Pdf_PdfViewerPreferences_HideWindowUI), [FitWindow](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html#Syncfusion_Pdf_PdfViewerPreferences_FitWindow), [CenterWindow](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html#Syncfusion_Pdf_PdfViewerPreferences_CenterWindow), [DisplayTitle](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html#Syncfusion_Pdf_PdfViewerPreferences_DisplayTitle), and the [PageMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html#Syncfusion_Pdf_PdfViewerPreferences_PageMode) selector.

You can hide the menu bar and toolbar by enabling the [HideMenubar](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html#Syncfusion_Pdf_PdfViewerPreferences_HideMenubar) and [HideToolbar](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html#Syncfusion_Pdf_PdfViewerPreferences_HideToolbar) properties of [PdfViewerPreferences](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfViewerPreferences.html), respectively. This is illustrated in the following code sample.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Create_PDF_with_viewer_preference/.NET/Create_PDF_with_viewer_preference/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document.
PdfDocument document = new PdfDocument();
// Add a page to the document.
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
// Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));
// Hide viewer application's menu bar.
document.ViewerPreferences.HideMenubar = true;
// Hide viewer application's toolbar.
document.ViewerPreferences.HideToolbar = true;
// Show user interface elements in the document's window (such as scroll bars and navigation controls).
document.ViewerPreferences.HideWindowUI = false;

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document.
PdfDocument document = new PdfDocument();
// Add a page to the document.
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
// Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
// Hide viewer application's menu bar.
document.ViewerPreferences.HideMenubar = true;
// Hide viewer application's toolbar.
document.ViewerPreferences.HideToolbar = true;
// Show user interface elements in the document's window (such as scroll bars and navigation controls).
document.ViewerPreferences.HideWindowUI = false;

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document.
Dim document As New PdfDocument()
' Add a page to the document.
Dim page As PdfPage = document.Pages.Add()

' Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
' Set the font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))
' Hide viewer application's menu bar.
document.ViewerPreferences.HideMenubar = True
' Hide viewer application's toolbar.
document.ViewerPreferences.HideToolbar = True
' Show user interface elements in the document's window (such as scroll bars and navigation controls).
document.ViewerPreferences.HideWindowUI = False

'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Create_PDF_with_viewer_preference/).

You can also allow the reader application to initially display the bookmarks, thumbnails, or attachments using the [PdfPageMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageMode.html) enumeration. The [PdfPageMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageMode.html) enumeration supports the following values: **UseNone** (display the document only), **UseOutlines** (display the bookmarks panel), **UseThumbs** (display the thumbnails panel), **FullScreen** (open the document in full-screen mode), **UseOC** (display the optional content group panel), and **UseAttachments** (display the attachments panel). The default value is **UseNone**.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Create-PDF-with-display-of-specific-panel/.NET/Create-PDF-with-display-of-specific-panel/Program.cs" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document.
PdfDocument document = new PdfDocument();
// Add a page to the document.
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
// Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));
// Show the attachments panel.
document.ViewerPreferences.PageMode = PdfPageMode.UseAttachments;

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Create a new PDF document.
PdfDocument document = new PdfDocument();
// Add a page to the document.
PdfPage page = document.Pages.Add();

// Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
// Set the font.
PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
// Show the attachments panel.
document.ViewerPreferences.PageMode = PdfPageMode.UseAttachments;

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Create a new PDF document.
Dim document As New PdfDocument()
' Add a page to the document.
Dim page As PdfPage = document.Pages.Add()

' Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
' Set the font.
Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text.
graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))
' Show the attachments panel.
document.ViewerPreferences.PageMode = PdfPageMode.UseAttachments

'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Create-PDF-with-display-of-specific-panel/).

## Adding document action

Document actions are events that the PDF viewer triggers in response to document-level events, such as **opening**, **closing**, **printing**, or **saving** the document. The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class exposes the [AfterSave](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_AfterSave), [BeforeSave](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_BeforeSave), [AfterPrint](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_AfterPrint), [BeforePrint](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_BeforePrint), [AfterClose](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_AfterClose), and [BeforeClose](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_BeforeClose) events, and the [OpenAction](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_OpenAction) property for actions to run when the document is opened. For more document-level operations using JavaScript actions, refer to the [Working with JavaScript and Actions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-action) section.

## Working in multi-threading environment

Essential<sup>&reg;</sup> PDF allows you to create or modify PDF documents simultaneously in a multi-threading environment using the [EnableThreadSafe](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_EnableThreadSafe) property of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. By default, the property is set to `false`, which means that concurrent access to shared resources is not synchronized. Set the property to `true` once at application startup before any threads access the library to enable thread-safe operations such as parallel document generation. The setting is a static, process-wide flag and should be toggled with care.

The following code sample illustrates how to create a PDF document in a multi-threading environment.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

IEnumerable<int> works = Enumerable.Range(0, 100);
Parallel.ForEach(works, index => GeneratePDF(index));

void GeneratePDF(int index)
{
    // Enable the thread safe in PDF document.
    PdfDocument.EnableThreadSafe = true;

    // Create a new PDF document.
    PdfDocument document = new PdfDocument();
    // Add a page to the document.
    PdfPage page = document.Pages.Add();

    // Create PDF graphics for the page.
    PdfGraphics graphics = page.Graphics;
    // Set the standard font.
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
    // Draw the text.
    graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
    string name = Guid.NewGuid().ToString();

    // Save the document.
    document.Save(name + ".pdf");
    // Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

IEnumerable<int> works = Enumerable.Range(0, 100);
Parallel.ForEach(works, index => GeneratePDF(index));

void GeneratePDF(int index)
{
    // Enable the thread safe in PDF document.
    PdfDocument.EnableThreadSafe = true;

    // Create a new PDF document.
    PdfDocument document = new PdfDocument();
    // Add a page to the document.
    PdfPage page = document.Pages.Add();

    // Create PDF graphics for the page.
    PdfGraphics graphics = page.Graphics;
    // Set the standard font.
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
    // Draw the text.
    graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
    string name = Guid.NewGuid().ToString();

    // Save the document.
    document.Save(name + ".pdf");
    // Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

Module Program
    Sub Main()
        Dim works As IEnumerable(Of Integer) = Enumerable.Range(0, 100)
        Parallel.ForEach(works, Sub(index) GeneratePDF(index))
    End Sub

    Private Sub GeneratePDF(ByVal index As Integer)
        ' Enable the thread safe in PDF document.
        PdfDocument.EnableThreadSafe = True

        ' Create a new PDF document.
        Dim document As PdfDocument = New PdfDocument()
        ' Add a page to the document.
        Dim page As PdfPage = document.Pages.Add()

        ' Create PDF graphics for the page.
        Dim graphics As PdfGraphics = page.Graphics
        ' Set the standard font.
        Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
        ' Draw the text.
        graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))
        Dim name As String = Guid.NewGuid().ToString()

        ' Save the document.
        document.Save(name + ".pdf")
        ' Close the document.
        document.Close(True)
    End Sub
End Module

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Create-a-PDF-in-multi-threading-environment).

To modify an existing PDF document in a multi-threading environment, set the [EnableThreadSafe](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_EnableThreadSafe) property and use the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The following code example explains how to do this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

IEnumerable<int> works = Enumerable.Range(0, 100);
Parallel.ForEach(works, index => GeneratePDF(index));

void GeneratePDF(int index)
{
    // Enable the thread safe in PDF document.
    PdfDocument.EnableThreadSafe = true;
    // Load a PDF document.
    PdfLoadedDocument doc = new PdfLoadedDocument("input.pdf");
    // Get the first page from the document.
    PdfLoadedPage page = doc.Pages[0] as PdfLoadedPage;

    // Create PDF graphics for the page.
    PdfGraphics graphics = page.Graphics;
    // Set the standard font.
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
    // Draw the text.
    graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
    string name = Guid.NewGuid().ToString();

    // Save the document.
    doc.Save(name + ".pdf");
    // Close the document.
    doc.Close(true);
}

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using System.Linq;
using System.Threading.Tasks;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Parsing;

IEnumerable<int> works = Enumerable.Range(0, 100);
Parallel.ForEach(works, index => GeneratePDF(index));

void GeneratePDF(int index)
{
    // Enable the thread safe in PDF document.
    PdfDocument.EnableThreadSafe = true;
    // Load a PDF document.
    PdfLoadedDocument doc = new PdfLoadedDocument("input.pdf");
    // Get the first page from the document.
    PdfLoadedPage page = doc.Pages[0] as PdfLoadedPage;

    // Create PDF graphics for the page.
    PdfGraphics graphics = page.Graphics;
    // Set the standard font.
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
    // Draw the text.
    graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
    string name = Guid.NewGuid().ToString();

    // Save the document.
    doc.Save(name + ".pdf");
    // Close the document.
    doc.Close(true);
}

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Parsing

Module Program
    Sub Main()
        Dim works As IEnumerable(Of Integer) = Enumerable.Range(0, 100)
        Parallel.ForEach(works, Sub(index) GeneratePDF(index))
    End Sub

    Private Sub GeneratePDF(ByVal index As Integer)
        ' Enable the thread safe in PDF document.
        PdfDocument.EnableThreadSafe = True

        ' Load a PDF document.
        Dim doc As PdfLoadedDocument = New PdfLoadedDocument("input.pdf")
        ' Get the first page from the document.
        Dim page As PdfLoadedPage = doc.Pages(0)

        ' Create PDF graphics for the page.
        Dim graphics As PdfGraphics = page.Graphics
        ' Set the standard font.
        Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
        ' Draw the text.
        graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))
        Dim name As String = Guid.NewGuid().ToString()

        ' Save the document.
        doc.Save(name + ".pdf")
        ' Close the document.
        doc.Close(True)
    End Sub
End Module

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Modify-existing-PDF-in-multi-threading/).

## Uniform resource naming in PDF document

Essential<sup>&reg;</sup> PDF allows you to create a PDF document with proper uniform resource naming by using the [EnableUniqueResourceNaming](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_EnableUniqueResourceNaming) property available in the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) instance. By default, the property is set to `true`, which causes the library to assign a unique name to every resource (such as fonts, images, and color spaces) on each page. Setting the property to `false` enables uniform resource naming, where identical resources across pages share the same resource name, producing a smaller output file. The setting is a static, process-wide flag and should be configured before generating or modifying any document.

The following code snippet explains how to enable uniform resource naming in a PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Create_PDF_with_Uniform_Resouce_Naming/.NET/Create_PDF_with_Uniform_Resouce_Naming/Program.cs" %}

using System.IO;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Disable unique resource naming.
PdfDocument.EnableUniqueResourceNaming = false;

// Create a new PDF document.
PdfDocument doc = new PdfDocument();
// Add a page to the document.
PdfPage page = doc.Pages.Add();

// Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
// Create a new instance for PDF font.
PdfFont font1 = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text.
graphics.DrawString("Hello World!!!", font1, PdfBrushes.Blue, new PointF(50, 50));
// Create a new instance for PDF font.
FileStream fontStream = new FileStream("Arial.ttf", FileMode.Open, FileAccess.Read);
PdfFont font2 = new PdfTrueTypeFont(fontStream, 20);
// Draw the text.
graphics.DrawString("Hello World!!!", font2, PdfBrushes.Blue, new PointF(50, 100));
// Create a new instance for PDF font.
PdfFont font3 = new PdfCjkStandardFont(PdfCjkFontFamily.HeiseiMinchoW3, 20);
// Draw the text.
graphics.DrawString("こんにちは世界", font3, PdfBrushes.Blue, new PointF(50, 150));

// Save the document.
doc.Save("Output.pdf");
// Close the document.
doc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

// Disable unique resource naming.
PdfDocument.EnableUniqueResourceNaming = false;

// Create a new PDF document.
PdfDocument doc = new PdfDocument();
// Add a page to the document.
PdfPage page = doc.Pages.Add();

// Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
// Create a new instance for PDF font.
PdfFont font1 = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
// Draw the text.
graphics.DrawString("Hello World!!!", font1, PdfBrushes.Blue, new PointF(50, 50));
// Create a new instance for PDF font.
PdfFont font2 = new PdfTrueTypeFont(new Font("Arial", 20), true);
// Draw the text.
graphics.DrawString("Hello World!!!", font2, PdfBrushes.Blue, new PointF(50, 100));
// Create a new instance for PDF font.
PdfFont font3 = new PdfCjkStandardFont(PdfCjkFontFamily.HeiseiMinchoW3, 20);
// Draw the text.
graphics.DrawString("こんにちは世界", font3, PdfBrushes.Blue, new PointF(50, 150));

// Save the document.
doc.Save("Output.pdf");
// Close the document.
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

' Disable unique resource naming.
PdfDocument.EnableUniqueResourceNaming = False

' Create a new PDF document.
Dim doc As PdfDocument = New PdfDocument()
' Add a page to the document.
Dim page As PdfPage = doc.Pages.Add()

' Create PDF graphics for the page.
Dim graphics As PdfGraphics = page.Graphics
' Create a new instance for PDF font.
Dim font1 As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
' Draw the text.
graphics.DrawString("Hello World!!!", font1, PdfBrushes.Blue, New PointF(50, 50))
' Create a new instance for PDF font.
Dim font2 As PdfFont = New PdfTrueTypeFont(New Font("Arial", 20), True)
' Draw the text.
graphics.DrawString("Hello World!!!", font2, PdfBrushes.Blue, New PointF(50, 100))
' Create a new instance for PDF font.
Dim font3 As PdfFont = New PdfCjkStandardFont(PdfCjkFontFamily.HeiseiMinchoW3, 20)
' Draw the text.
graphics.DrawString("こんにちは世界", font3, PdfBrushes.Blue, New PointF(50, 150))

' Save the document.
doc.Save("Output.pdf")
' Close the document.
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Create_PDF_with_Uniform_Resouce_Naming/).

## Memory optimization

Essential<sup>&reg;</sup> PDF provides support for memory optimization using the [EnableMemoryOptimization](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_EnableMemoryOptimization) property in the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) instance. By default, the property is set to `false`. Setting it to `true` reduces the memory footprint of the resulting document, but the time taken to save may increase because the library streams the document content rather than holding it all in memory. Optimization is effective only with the merge, append, and import operations, and it does not affect the visual output of the document.

Enabling this property optimizes memory usage, but the time taken may vary based on the document size. This is illustrated in the following code sample.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Manage_memory_while_appending_PDF_document/.NET/Manage_memory_while_appending_PDF_document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

// Create a new PDF document.
PdfDocument document = new PdfDocument();

// Enable memory optimization.
document.EnableMemoryOptimization = true;
// Append the source document to the new document.
document.Append(loadedDocument);

// Save the document.
document.Save("Output.pdf");
// Close the documents.
document.Close(true);
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("file1.pdf");

// Create a new PDF document.
PdfDocument document = new PdfDocument();

// Enable memory optimization.
document.EnableMemoryOptimization = true;
// Append the source document to the new document.
document.Append(loadedDocument);

// Save the PDF document.
document.Save("Output.pdf");
// Close the documents.
document.Close(true);
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

' Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("file1.pdf")

' Create a new PDF document.
Dim document As New PdfDocument()

' Enable memory optimization.
document.EnableMemoryOptimization = True
' Append the source document to the new document.
document.Append(loadedDocument)

' Save the PDF document.
document.Save("Output.pdf")
' Close the documents.
document.Close(True)
loadedDocument.Close(True)
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Manage_memory_while_appending_PDF_document/).

## Find corrupted PDF document

Syncfusion<sup>&reg;</sup> PDF Library provides support to check whether an existing PDF document is corrupted, along with corruption details, using the [PdfDocumentAnalyzer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfDocumentAnalyzer.html) class. The analyzer reads the cross-reference table and trailer of the PDF to validate the document structure without loading all of its content into memory. The [AnalyzeSyntax](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfDocumentAnalyzer.html#Syncfusion_Pdf_Parsing_PdfDocumentAnalyzer_AnalyzeSyntax) method returns a [SyntaxAnalyzerResult](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.SyntaxAnalyzerResult.html) object that exposes the [IsCorrupted](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.SyntaxAnalyzerResult.html#Syncfusion_Pdf_Parsing_SyntaxAnalyzerResult_IsCorrupted) flag and an [Errors](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.SyntaxAnalyzerResult.html#Syncfusion_Pdf_Parsing_SyntaxAnalyzerResult_Errors) collection of [PdfException](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfException.html) entries describing the issues that were found. The analyzer does not repair the document; it only reports the corruption. The following code snippet explains how to find a corrupted PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Find_corrupted_PDF_document/.NET/Find_corrupted_PDF_document/Program.cs" %}

using System;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using System.Text;

// Load the PDF document.
PdfDocumentAnalyzer analyzer = new PdfDocumentAnalyzer("Input.pdf");

// Get the syntax errors.
SyntaxAnalyzerResult result = analyzer.AnalyzeSyntax();
// Check whether the document is corrupted or not.
if (result.IsCorrupted)
{
    // Get syntax error details from the result.
    StringBuilder builder = new StringBuilder();
    builder.AppendLine("The PDF document is corrupted.");
    int count = 1;
    foreach (PdfException exception in result.Errors)
    {
        builder.AppendLine(count++.ToString() + ": " + exception.Message);
    }
    Console.WriteLine(builder.ToString());
}
else
{
    // No syntax error found in the provided PDF document.
    Console.WriteLine("The PDF document is not corrupted.");
}
analyzer.Close();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System;
using System.Text;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

// Create a new instance for the PDF analyzer.
PdfDocumentAnalyzer analyzer = new PdfDocumentAnalyzer("Input.pdf");

// Get the syntax errors.
SyntaxAnalyzerResult result = analyzer.AnalyzeSyntax();
// Check whether the document is corrupted or not.
if (result.IsCorrupted)
{
    // Get syntax error details from the result.
    StringBuilder builder = new StringBuilder();
    builder.AppendLine("The PDF document is corrupted.");
    int count = 1;
    foreach (PdfException exception in result.Errors)
    {
        builder.AppendLine(count++.ToString() + ": " + exception.Message);
    }
    Console.WriteLine(builder.ToString());
}
else
{
    // No syntax error found in the provided PDF document.
    Console.WriteLine("The PDF document is not corrupted.");
}
analyzer.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

' Create a new instance for the PDF analyzer.
Dim analyzer As PdfDocumentAnalyzer = New PdfDocumentAnalyzer("Input.pdf")

' Get the syntax errors.
Dim result As SyntaxAnalyzerResult = analyzer.AnalyzeSyntax

' Check whether the document is corrupted or not.
If result.IsCorrupted Then
    ' Get syntax error details from the result.
    Dim builder As New StringBuilder()
    builder.AppendLine("The PDF document is corrupted.")
    Dim count As Integer = 1
    For Each exception As PdfException In result.Errors
        builder.AppendLine(count.ToString() & ": " & exception.Message)
        count += 1
    Next
    Console.WriteLine(builder.ToString())
Else
    ' No syntax error found in the provided PDF document.
    Console.WriteLine("The PDF document is not corrupted.")
End If
analyzer.Close()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Find_corrupted_PDF_document/).

## Embed all the non-embedded fonts in the existing PDF document

You can embed all the non-embedded fonts in an existing PDF document using the [EmbedFonts](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_EmbedFonts) method. Use the [IsAllFontsEmbedded](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_IsAllFontsEmbedded) property to check whether the document already contains all the required fonts before embedding. Embedding fonts increases the document size but ensures consistent rendering on devices that do not have the original fonts installed. The source font files used by the document must be available to the library at runtime; otherwise, the corresponding fonts cannot be embedded.

Refer to the following code sample to achieve the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Embedding all fonts requires the TrueType/OpenType font files referenced by the document.
// Cross-platform code should ensure the required font files are accessible at runtime.

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

// Load an existing document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("input.pdf");

// Embed all the non-embedded fonts.
if (loadedDocument.IsAllFontsEmbedded == false)
{
    loadedDocument.EmbedFonts();
}

// Save the document.
loadedDocument.Save("Output.pdf");
// Close the document.
loadedDocument.Close(true);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

' Load an existing document.
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("input.pdf")

' Embed all the non-embedded fonts.
If loadedDocument.IsAllFontsEmbedded = False Then
    loadedDocument.EmbedFonts()
End If

' Save the document.
loadedDocument.Save("Output.pdf")
' Close the document.
loadedDocument.Close(True)

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Embed-all-fonts-in-an-existing-PDF-document/).

## Add or retrieve BaseUri in a PDF document

Essential<sup>&reg;</sup> PDF allows you to get or set the [BaseUri](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_BaseUri) of the PDF document. The `BaseUri` is a string value used to resolve relative URLs that appear in PDF actions, annotations, bookmarks, and other interactive elements. When a relative URL is encountered, the viewer combines it with `BaseUri` to construct the absolute URL. If `BaseUri` is not set, relative URLs cannot be resolved. The following code example illustrates how to set the BaseUri in a PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Add_BaseUri_in_the_PDF_document/.NET/Add_BaseUri_in_the_PDF_document/Program.cs" %}

using Syncfusion.Pdf;

// Create a new instance of the PdfDocument class.
PdfDocument document = new PdfDocument();
// Set the Base URI.
document.BaseUri = "https://www.syncfusion.com/";
// Add a new page.
PdfPage page = document.Pages.Add();

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;

// Create a new instance of the PdfDocument class.
PdfDocument document = new PdfDocument();
// Set the Base URI.
document.BaseUri = "https://www.syncfusion.com/";
// Add a new page.
PdfPage page = document.Pages.Add();

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

' Create a new instance of the PdfDocument class.
Dim document As PdfDocument = New PdfDocument()
' Set the Base URI.
document.BaseUri = "https://www.syncfusion.com/"
' Add a new page.
Dim page As PdfPage = document.Pages.Add()

' Save the document.
document.Save("Output.pdf")
' Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Add_BaseUri_in_the_PDF_document/).

The following code example illustrates the retrieval of [BaseUri](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_BaseUri) from the loaded document. If the document does not have a base URI defined, the returned value is `null` (in C#) or `Nothing` (in VB.NET) and should be checked before use.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Retrieve_BaseUri_from_the_existing_PDF/.NET/Retrieve_BaseUri_from_the_existing_PDF/Program.cs" %}

using Syncfusion.Pdf.Parsing;

// Load an existing PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Get the Base URI.
string baseUri = document.BaseUri;
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

// Load an existing document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Get the Base URI.
string baseUri = document.BaseUri;
// Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

' Load an existing document.
Dim document As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
' Get the Base URI.
Dim baseUri As String = document.BaseUri
' Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Retrieve_BaseUri_from_the_existing_PDF/).

## Tracking save progress

Essential<sup>&reg;</sup> PDF enables you to track the save progress through the [SaveProgress](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_SaveProgress) event available in the [PdfDocumentBase](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html) instance. The event is raised periodically as the document is being written to the underlying stream, which is useful for providing progress feedback in user interfaces when saving large documents. The [ProgressEventArgs](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.ProgressEventArgs.html) provides the `Current`, `Total`, and `Progress` (percentage) values to monitor the save operation. Subscribe to the event before calling `Save` so that no progress notifications are missed.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/PDF%20Document/Create-a-PDF-document-with-save-progress/.NET/PDF-document-with-save-progress/Program.cs" %}

using System;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using Syncfusion.Drawing;

// Create a new PDF document.
PdfDocument document = new PdfDocument();

// Add multiple pages to the document.
for (int i = 0; i < 10; i++)
{
   // Add a new page.
   PdfPage page = document.Pages.Add();

   // Create PDF graphics for the page.
   PdfGraphics graphics = page.Graphics;

   // Set the font to Helvetica with size 20.
   PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);

   // Draw text on the page.
   graphics.DrawString($"This is page {i + 1}", font, PdfBrushes.Black, new PointF(0, 0));
}

// Subscribe to the SaveProgress event.
document.SaveProgress += new PdfDocument.ProgressEventHandler(document_SaveProgress);

// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

// Event handler for the SaveProgress event.
void document_SaveProgress(object sender, ProgressEventArgs arguments)
{
   // Output the current progress of the save operation.
   Console.WriteLine(String.Format("Current: {0}, Progress: {1}, Total: {2}", arguments.Current, arguments.Progress, arguments.Total));
}

{% endhighlight %}


{% highlight c# tabtitle="C# [Windows-specific]" %}

using System;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using System.Drawing;

// Create a new PDF document.
PdfDocument document = new PdfDocument();
// Add multiple pages to the document.
for (int i = 0; i < 10; i++)
{
   // Add a new page.
   PdfPage page = document.Pages.Add();
   // Create PDF graphics for the page.
   PdfGraphics graphics = page.Graphics;
   // Set the font to Helvetica with size 20.
   PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
   // Draw text on the page.
   graphics.DrawString($"This is page {i + 1}", font, PdfBrushes.Black, new PointF(0, 0));
}
// Subscribe to the SaveProgress event.
document.SaveProgress += new PdfDocument.ProgressEventHandler(document_SaveProgress);
// Save the document.
document.Save("Output.pdf");
// Close the document.
document.Close(true);

// Event handler for the SaveProgress event.
void document_SaveProgress(object sender, ProgressEventArgs arguments)
{
   // Output the current progress of the save operation.
   Console.WriteLine(String.Format("Current: {0}, Progress: {1}, Total: {2}", arguments.Current, arguments.Progress, arguments.Total));
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf
Imports Syncfusion.Drawing

Module Program
   Sub Main()
      ' Create a new PDF document.
      Dim document As New PdfDocument()
      ' Add multiple pages to the document.
      For i As Integer = 0 To 9
         ' Add a new page.
         Dim page As PdfPage = document.Pages.Add()
         ' Create PDF graphics for the page.
         Dim graphics As PdfGraphics = page.Graphics
         ' Set the font to Helvetica with size 20.
         Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
         ' Draw text on the page.
         graphics.DrawString(String.Format("This is page {0}", i + 1), font, PdfBrushes.Black, New PointF(0, 0))
      Next
      ' Subscribe to the SaveProgress event.
      AddHandler document.SaveProgress, AddressOf document_SaveProgress
      ' Save the document.
      document.Save("Output.pdf")
      ' Close the document.
      document.Close(True)
   End Sub

   ' Event handler for the SaveProgress event.
   Private Sub document_SaveProgress(ByVal sender As Object, ByVal arguments As ProgressEventArgs)
      ' Output the current progress of the save operation.
      Console.WriteLine(String.Format("Current: {0}, Progress: {1}, Total: {2}", arguments.Current, arguments.Progress, arguments.Total))
   End Sub
End Module

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/PDF%20Document/Create-a-PDF-document-with-save-progress/.NET/PDF-document-with-save-progress). 