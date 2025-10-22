---
title: Font stream dispose before saving PDF document | Syncfusion
description: This page explains how to manage font streams and prevent disposal errors when saving PDF documents using Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---

# Font Stream Disposed Before Saving PDF Document

**Overview:**

This error occurs when a font stream is disposed of (i.e., released from memory) before the PDF document is saved. The Syncfusion<sup>&reg;</sup> PDF library requires that the font stream remains valid until the document is saved. Disposing of it too early can cause the document to fail to render correctly or throw errors during the saving process.

**Solution:**

## Keep the font stream open until after the PDF is saved:

Ensure that the font stream remains valid throughout the entire document creation and saving process.

## Dispose of the font stream only after saving the document:

Once the PDF document is successfully saved, you can safely dispose of the font stream without causing any issues.

The following code example demonstrates how to dispose of the font stream after saving the PDF document.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}

// Open the font stream and keep it valid until after saving the PDF
using (FileStream fontStream = new FileStream("path_to_custom_font.ttf", FileMode.Open, FileAccess.Read))
{
    // Create a PDF document
    using (PdfDocument document = new PdfDocument())
    {
        // Define font from the stream
        PdfFont font = new PdfTrueTypeFont(fontStream, 12);

        // Create a page and draw text
        PdfPage page = document.Pages.Add();
        page.Graphics.DrawString("Hello, Syncfusion PDF!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(100, 100));

        // Save the document to a file
        document.Save("Output.pdf");
    } // PdfDocument is disposed here
} // Font stream is disposed here after saving

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Open the font stream and keep it valid until after saving the PDF
using (FileStream fontStream = new FileStream("path_to_custom_font.ttf", FileMode.Open, FileAccess.Read))
{
    // Create a PDF document
    using (PdfDocument document = new PdfDocument())
    {
        // Define font from the stream
        PdfFont font = new PdfTrueTypeFont(fontStream, 12);

        // Create a page and draw text
        PdfPage page = document.Pages.Add();
        page.Graphics.DrawString("Hello, Syncfusion PDF!", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(100, 100));

        // Save the document to a file
        document.Save("Output.pdf");
    } // PdfDocument is disposed here
} // Font stream is disposed here after saving

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Open the font stream and keep it valid until after saving the PDF
Using fontStream As New FileStream("path_to_custom_font.ttf", FileMode.Open, FileAccess.Read)
    ' Create a PDF document
    Using document As New PdfDocument()
        ' Define font from the stream
        Dim font As New PdfTrueTypeFont(fontStream, 12)

        ' Create a page and draw text
        Dim page As PdfPage = document.Pages.Add()
        page.Graphics.DrawString("Hello, Syncfusion PDF!", font, PdfBrushes.Black, New Syncfusion.Drawing.PointF(100, 100))

        ' Save the document to a file
        document.Save("Output.pdf")
    End Using ' PdfDocument is disposed here
End Using ' Font stream is disposed here after saving

{% endhighlight %}
{% endtabs %}