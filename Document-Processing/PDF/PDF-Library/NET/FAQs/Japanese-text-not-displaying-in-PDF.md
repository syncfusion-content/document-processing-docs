---
title: Japanese text not displaying in PDF
description: The text is not visible due to font compatibility issues with certain viewers like Edge. To resolve this, create a TrueTypeFont using the desired font.
platform: document-processing
control: PDF
documentation: UG
---

# FAQ: Japanese Text Not Displaying in PDF

## Why is Japanese text not visible in my PDF document?

The issue is most often caused by font compatibility with the viewer used to open the document. Some viewers, such as Microsoft Edge, do not support certain embedded font types and may fail to render the glyphs, leaving the text invisible. This is typically observed with PDF documents that use font types other than TrueType or with fonts that do not include the required Japanese (CJK) character set.

## How can I resolve this issue and display the Japanese text properly?

To ensure that Japanese text is rendered correctly across all viewers, create a [PdfTrueTypeFont](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTrueTypeFont.html) using a font file that contains the necessary Japanese glyphs, such as **MS Gothic**, **Yu Gothic**, or **Noto Sans CJK JP**. By creating and embedding the correct TrueType font in the document, the text becomes self-contained and visible on any platform.

N> The TrueType font file used must contain the Japanese character set. If you only need to render a small subset of characters, you can use Syncfusion's font subsetting feature to reduce the embedded font size.

## Code Example

The following code samples demonstrate how to load a Japanese TrueType font and draw Japanese text in a PDF document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Create a new PDF document.
using (PdfDocument document = new PdfDocument())
{
    //Add a page to the document.
    PdfPage page = document.Pages.Add();

    //Load the TrueType font that contains the Japanese character set.
    using (FileStream fontStream = new FileStream("msmincho.ttc", FileMode.Open, FileAccess.Read))
    {
        //Create a TrueType font from the stream.
        PdfFont font = new PdfTrueTypeFont(fontStream, 14);

        //Draw the Japanese text on the page.
        page.Graphics.DrawString("こんにちは、世界", font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));
    }

    //Save the PDF document.
    document.Save("Output.pdf");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new PDF document.
using (PdfDocument document = new PdfDocument())
{
    //Add a page to the document.
    PdfPage page = document.Pages.Add();

    //Load the TrueType font that contains the Japanese character set.
    using (FileStream fontStream = new FileStream("msmincho.ttc", FileMode.Open, FileAccess.Read))
    {
        //Create a TrueType font from the stream.
        PdfFont font = new PdfTrueTypeFont(fontStream, 14);

        //Draw the Japanese text on the page.
        page.Graphics.DrawString("こんにちは、世界", font, PdfBrushes.Black, new System.Drawing.PointF(0, 0));
    }

    //Save and close the PDF document.
    document.Save("Output.pdf");
    document.Close(true);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new PDF document.
Using document As New PdfDocument()
    'Add a page to the document.
    Dim page As PdfPage = document.Pages.Add()

    'Load the TrueType font that contains the Japanese character set.
    Using fontStream As New FileStream("msmincho.ttc", FileMode.Open, FileAccess.Read)
        'Create a TrueType font from the stream.
        Dim font As PdfFont = New PdfTrueTypeFont(fontStream, 14)

        'Draw the Japanese text on the page.
        page.Graphics.DrawString("こんにちは、世界", font, PdfBrushes.Black, New System.Drawing.PointF(0, 0))
    End Using

    'Save and close the PDF document.
    document.Save("Output.pdf")
    document.Close(True)
End Using
{% endhighlight %}
{% endtabs %}

N> In the C# [Cross-platform] tab, `Syncfusion.Drawing.PointF` is used because .NET Core and .NET 5+ do not include `System.Drawing` by default. For Windows-specific projects, you can use `System.Drawing.PointF` directly.
