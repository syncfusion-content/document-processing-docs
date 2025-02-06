---
title: Fallback fonts in Word to PDF Conversion in C# | DocIO | Syncfusion
description: Learn about how to specify fallback fonts during Word to PDF conversion using the .NET Word (DocIO) library..
platform: document-processing
control: DocIO
documentation: UG
---

# Fallback fonts in Word to PDF Conversion

During Word to PDF conversions, if a glyph of the input text is unavailable in the specified font, the text will not be rendered properly. To address this, the Syncfusion<sup>&reg;</sup> Word (DocIO) library allows users to specify fallback fonts. When a glyph is missing, the library will use one of the fallback fonts to render the text correctly in the output PDF document.

Users can configure fallback fonts in the following ways:
* Initialize default fallback fonts.
* Set custom fonts as fallback fonts for specific script types, including Arabic, Hebrew, Chinese, Japanese, and more.
* Set custom fonts as fallback fonts for a particular range of Unicode text.

N> DocIO internally uses user-initialized or specified fallback fonts for Unicode characters during Word to PDF conversion. Therefore, the specified fallback fonts must be installed in the production environment or embedded in the input Word document (DOCX). Otherwise, it will not render the text properly using the fallback fonts.

## Initialize default fallback fonts

The following code example demonstrates how to initialize a default fallback fonts while converting a Word document to PDF. The *InitializeDefault* API sets the default fallback fonts for specific script types like Arabic, Hebrew, Chinese, Japanese etc.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Initialize-default-fallback-fonts/.NET/Initialize-default-fallback-fonts/Program.cs" %}
//Opens the file as stream.
using (FileStream inputStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
   //Loads an existing Word document file stream.
   using (WordDocument wordDocument = new WordDocument(inputStream, Syncfusion.DocIO.FormatType.Docx))
   {
      //Initialize the default fallback fonts collection.
      wordDocument.FontSettings.FallbackFonts.InitializeDefault();
      //Instantiation of DocIORenderer for Word to PDF conversion.
      using (DocIORenderer render = new DocIORenderer())
      {
         //Converts Word document into PDF document.
         using (PdfDocument pdfDocument = render.ConvertToPDF(wordDocument))
         {
            //Saves the PDF file to file system.
            using (FileStream outputStream = new FileStream("WordToPDF.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite))
            {
               pdfDocument.Save(outputStream);
            }
         }
      }
   }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document.
using (WordDocument wordDocument = new WordDocument("Template.docx", Syncfusion.DocIO.FormatType.Docx))
{
   //Initialize the default fallback fonts collection.
   wordDocument.FontSettings.FallbackFonts.InitializeDefault();
   //Instantiation of DocToPDFConverter for Word to PDF conversion.
   using (DocToPDFConverter converter = new DocToPDFConverter())
   {
      //Converts Word document into PDF document.
      using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument))
      {
         //Saves the PDF file to file system.
         pdfDocument.Save("WordToPDF.pdf");
      }
   }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document.
Using wordDocument As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Initialize the default fallback fonts collection.
    wordDocument.FontSettings.FallbackFonts.InitializeDefault()
    'Instantiation of DocToPDFConverter for Word to PDF conversion.
    Using converter As New DocToPDFConverter()
        'Converts Word document into PDF document.
        Using pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
            'Saves the PDF file to file system.
            pdfDocument.Save("WordToPDF.pdf")
        End Using
    End Using
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Initialize-default-fallback-fonts).

## Fallback fonts based on script type

The following code example demonstrates how a user can add fallback fonts based on the script types, which DocIO considers internally when converting a Word document to PDF.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Fallback-fonts-based-on-scripttype/.NET/Fallback-fonts-based-on-scripttype/Program.cs" %}
//Opens the file as stream.
using (FileStream inputStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
   //Loads an existing Word document file stream.
   using (WordDocument wordDocument = new WordDocument(inputStream, Syncfusion.DocIO.FormatType.Docx))
   {
      //Adds fallback font for "Arabic" script type.
      wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman");
      //Adds fallback font for "Hebrew" script type.
      wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Hebrew, "Arial, Courier New");
      //Adds fallback font for "Hindi" script type.
      wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Hindi, "Mangal, Nirmala UI");
      //Adds fallback font for "Chinese" script type.
      wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Chinese, "DengXian, MingLiU");
      //Adds fallback font for "Japanese" script type.
      wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Japanese, "Yu Mincho, MS Mincho");
      //Adds fallback font for "Thai" script type.
      wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Thai, "Tahoma, Microsoft Sans Serif");
      //Adds fallback font for "Korean" script type.
      wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Korean, "Malgun Gothic, Batang");
      //Instantiation of DocIORenderer for Word to PDF conversion.
      using (DocIORenderer render = new DocIORenderer())
      {
         //Converts Word document into PDF document.
         using (PdfDocument pdfDocument = render.ConvertToPDF(wordDocument))
         {
            //Saves the PDF file to file system.
            using (FileStream outputStream = new FileStream("WordToPDF.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite))
            {
               pdfDocument.Save(outputStream);
            }
         }
      }
   }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document.
using (WordDocument wordDocument = new WordDocument("Template.docx", Syncfusion.DocIO.FormatType.Docx))
{
   //Adds fallback font for "Arabic" script type.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman");
   //Adds fallback font for "Hebrew" script type.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Hebrew, "Arial, Courier New");
   //Adds fallback font for "Hindi" script type.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Hindi, "Mangal, Nirmala UI");
   //Adds fallback font for "Chinese" script type.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Chinese, "DengXian, MingLiU");
   //Adds fallback font for "Japanese" script type.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Japanese, "Yu Mincho, MS Mincho");
   //Adds fallback font for "Thai" script type.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Thai, "Tahoma, Microsoft Sans Serif");
   //Adds fallback font for "Korean" script type.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Korean, "Malgun Gothic, Batang");
   //Instantiation of DocToPDFConverter for Word to PDF conversion.
   using (DocToPDFConverter converter = new DocToPDFConverter())
   {
      //Converts Word document into PDF document.
      using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument))
      {
         //Saves the PDF file to file system.
         pdfDocument.Save("WordToPDF.pdf");
      }
   }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document.
Using wordDocument As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Adds fallback font for "Arabic" script type.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman")
    'Adds fallback font for "Hebrew" script type.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Hebrew, "Arial, Courier New")
    'Adds fallback font for "Hindi" script type.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Hindi, "Mangal, Nirmala UI")
    'Adds fallback font for "Chinese" script type.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Chinese, "DengXian, MingLiU")
    'Adds fallback font for "Japanese" script type.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Japanese, "Yu Mincho, MS Mincho")
    'Adds fallback font for "Thai" script type.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Thai, "Tahoma, Microsoft Sans Serif")
    'Adds fallback font for "Korean" script type.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Korean, "Malgun Gothic, Batang")
    'Instantiation of DocToPDFConverter for Word to PDF conversion.
    Using converter As New DocToPDFConverter()
        'Converts Word document into PDF document.
        Using pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
            'Saves the PDF file to file system.
            pdfDocument.Save("WordToPDF.pdf")
        End Using
    End Using
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Fallback-fonts-based-on-scripttype).

## Fallback fonts for range of Unicode text

Users can set fallback fonts for specific Unicode range of text to be used in Word to PDF conversion.

The following code example demonstrates how users can add fallback fonts by using a specific Unicode range of text that DocIO considers internally while converting a Word document to PDF.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Fallback-fonts-for-Unicode-range/.NET/Fallback-fonts-for-Unicode-range/Program.cs" %}
//Opens the file as stream.
using (FileStream inputStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
   //Loads an existing Word document file stream.
   using (WordDocument wordDocument = new WordDocument(inputStream, Syncfusion.DocIO.FormatType.Docx))
   {
      //Adds fallback font for "Arabic" specific unicode range.
      wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x0600, 0x06ff, "Arial"));
      //Adds fallback font for "Hebrew" specific unicode range.
      wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x0590, 0x05ff, "Times New Roman"));
      //Adds fallback font for "Hindi" specific unicode range.
      wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x0900, 0x097F, "Nirmala UI"));
      //Adds fallback font for "Chinese" specific unicode range.
      wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x4E00, 0x9FFF, "DengXian"));
      //Adds fallback font for "Japanese" specific unicode range.
      wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x3040, 0x309F, "MS Gothic"));
      //Adds fallback font for "Thai" specific unicode range.
      wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x0E00, 0x0E7F, "Tahoma"));
      //Adds fallback font for "Korean" specific unicode range.
      wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0xAC00, 0xD7A3, "Malgun Gothic"));
      //Instantiation of DocIORenderer for Word to PDF conversion.
      using (DocIORenderer render = new DocIORenderer())
      {
         //Converts Word document into PDF document.
         using (PdfDocument pdfDocument = render.ConvertToPDF(wordDocument))
         {
            //Saves the PDF file to file system.
            using (FileStream outputStream = new FileStream("WordToPDF.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite))
            {
               pdfDocument.Save(outputStream);
            }
         }
      }
   }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document.
using (WordDocument wordDocument = new WordDocument("Template.docx", Syncfusion.DocIO.FormatType.Docx))
{
   //Adds fallback font for "Arabic" specific unicode range.
   wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x0600, 0x06ff, "Arial"));
   //Adds fallback font for "Hebrew" specific unicode range.
   wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x0590, 0x05ff, "Times New Roman"));
   //Adds fallback font for "Hindi" specific unicode range.
   wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x0900, 0x097F, "Nirmala UI"));
   //Adds fallback font for "Chinese" specific unicode range.
   wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x4E00, 0x9FFF, "DengXian"));
   //Adds fallback font for "Japanese" specific unicode range.
   wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x3040, 0x309F, "MS Gothic"));
   //Adds fallback font for "Thai" specific unicode range.
   wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0x0E00, 0x0E7F, "Tahoma"));
   //Adds fallback font for "Korean" specific unicode range.
   wordDocument.FontSettings.FallbackFonts.Add(new FallbackFont(0xAC00, 0xD7A3, "Malgun Gothic"));
   //Instantiation of DocToPDFConverter for Word to PDF conversion.
   using (DocToPDFConverter converter = new DocToPDFConverter())
   {
      //Converts Word document into PDF document.
      using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument))
      {
         //Saves the PDF file to file system.
         pdfDocument.Save("WordToPDF.pdf");
      }
   }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document.
Using wordDocument As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Adds fallback font for "Arabic" specific unicode range.
    wordDocument.FontSettings.FallbackFonts.Add(New FallbackFont(0x0600, 0x06ff, "Arial"))
    'Adds fallback font for "Hebrew" specific unicode range.
    wordDocument.FontSettings.FallbackFonts.Add(New FallbackFont(0x0590, 0x05ff, "Times New Roman"))
    'Adds fallback font for "Hindi" specific unicode range.
    wordDocument.FontSettings.FallbackFonts.Add(New FallbackFont(0x0900, 0x097F, "Nirmala UI"))
    'Adds fallback font for "Chinese" specific unicode range.
    wordDocument.FontSettings.FallbackFonts.Add(New FallbackFont(0x4E00, 0x9FFF, "DengXian"))
    'Adds fallback font for "Japanese" specific unicode range.
    wordDocument.FontSettings.FallbackFonts.Add(New FallbackFont(0x3040, 0x309F, "MS Gothic"))
    'Adds fallback font for "Thai" specific unicode range.
    wordDocument.FontSettings.FallbackFonts.Add(New FallbackFont(0x0E00, 0x0E7F, "Tahoma"))
    'Adds fallback font for "Korean" specific unicode range.
    wordDocument.FontSettings.FallbackFonts.Add(New FallbackFont(0xAC00, 0xD7A3, "Malgun Gothic"))
    'Instantiation of DocToPDFConverter for Word to PDF conversion.
    Using converter As New DocToPDFConverter()
        'Converts Word document into PDF document.
        Using pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
            'Saves the PDF file to file system.
            pdfDocument.Save("WordToPDF.pdf")
        End Using
    End Using
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Fallback-fonts-for-Unicode-range).

## Modify the exiting fallback fonts

The following code example demonstrates how user can modify or customize the existing fallback fonts using *FontNames* API while converting a Word document to PDF.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Modify-the-exiting-fallback-fonts/.NET/Modify-the-exiting-fallback-fonts/Program.cs" %}
//Opens the file as stream.
using (FileStream inputStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
   //Loads an existing Word document file stream.
   using (WordDocument wordDocument = new WordDocument(inputStream, Syncfusion.DocIO.FormatType.Docx))
   {
      //Initialize the default fallback fonts collection.
      wordDocument.FontSettings.FallbackFonts.InitializeDefault();
      FallbackFonts fallbackFonts = wordDocument.FontSettings.FallbackFonts;
      foreach (FallbackFont fallbackFont in fallbackFonts) 
      {
         //Customize a default fallback font name as "David" for the Hebrew script.
         if (fallbackFont.ScriptType == ScriptType.Hebrew)
            fallbackFont.FontNames = "David";
         //Customize a default fallback font name as "Microsoft Sans Serif" for the Thai script.
         else if (fallbackFont.ScriptType == ScriptType.Thai)
            fallbackFont.FontNames = "Microsoft Sans Serif";
      }
      //Instantiation of DocIORenderer for Word to PDF conversion.
      using (DocIORenderer render = new DocIORenderer())
      {
         //Converts Word document into PDF document.
         using (PdfDocument pdfDocument = render.ConvertToPDF(wordDocument))
         {
            //Saves the PDF file to file system.
            using (FileStream outputStream = new FileStream("WordToPDF.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite))
            {
               pdfDocument.Save(outputStream);
            }
         }
      }
   }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document.
using (WordDocument wordDocument = new WordDocument("Template.docx", Syncfusion.DocIO.FormatType.Docx))
{
   //Initialize the default fallback fonts collection.
   wordDocument.FontSettings.FallbackFonts.InitializeDefault();
   FallbackFonts fallbackFonts = wordDocument.FontSettings.FallbackFonts;
   foreach (FallbackFont fallbackFont in fallbackFonts) 
   {
      //Customize a default fallback font name as "David" for the Hebrew script.
      if (fallbackFont.ScriptType == ScriptType.Hebrew)
         fallbackFont.FontNames = "David";
      //Customize a default fallback font name as "Microsoft Sans Serif" for the Thai script.
      else if (fallbackFont.ScriptType == ScriptType.Thai)
         fallbackFont.FontNames = "Microsoft Sans Serif";
   }
   //Instantiation of DocToPDFConverter for Word to PDF conversion.
   using (DocToPDFConverter converter = new DocToPDFConverter())
   {
      //Converts Word document into PDF document.
      using (PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument))
      {
         //Saves the PDF file to file system.
         pdfDocument.Save("WordToPDF.pdf");
      }
   }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document.
Using wordDocument As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Initialize the default fallback fonts collection.
    wordDocument.FontSettings.FallbackFonts.InitializeDefault()
    Dim fallbackFonts As FallbackFonts = wordDocument.FontSettings.FallbackFonts
    For Each fallbackFont As FallbackFont In fallbackFonts
      'Customize a default fallback font name as "David" for the Hebrew script.
      If fallbackFont.ScriptType = ScriptType.Hebrew Then
         fallbackFont.FontNames = "David"
      'Customize a default fallback font name as "Microsoft Sans Serif" for the Thai script.
      ElseIf fallbackFont.ScriptType = ScriptType.Thai Then
         fallbackFont.FontNames = "Microsoft Sans Serif"
      End If
    Next
    'Instantiation of DocToPDFConverter for Word to PDF conversion.
    Using converter As New DocToPDFConverter()
        'Converts Word document into PDF document.
        Using pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
            'Saves the PDF file to file system.
            pdfDocument.Save("WordToPDF.pdf")
        End Using
    End Using
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Modify-the-exiting-fallback-fonts).

## Supported script types

The following table illustrates the supported script types by the .NET Word library (DocIO) in Word to PDF conversion.

<table>
<thead> 
<tr>
<th>Script types</th>
<th>Ranges</th>
<th>Default fallback fonts considered in InitializeDefault() API</th>
</tr>
</thead>
<tr>
<td>
Arabic
</td>
<td>
0x0600 - 0x06ff<br>
0x0750 - 0x077f<br>
0x08a0 - 0x08ff<br>
0xfb50 - 0xfdff<br>
0xfe70 - 0xfeff<br>
</td>
<td>
Arial, Times New Roman, Microsoft Uighur
</td>
</tr>
<tr>
<td>
Hebrew
</td>
<td>
0x0590 - 0x05ff<br>
0xfb1d - 0xfb4f<br>
</td>
<td>
Arial, Times New Roman, David
</td>
</tr>
<tr>
<td>
Hindi
</td>
<td>
0x0900 - 0x097F<br>
0xa8e0 - 0xa8ff<br>
0x1cd0 - 0x1cff<br>
</td>
<td>
Mangal, Utsaah
</td>
</tr>
<tr>
<td>
Chinese
</td>
<td>
0x4E00 - 0x9FFF<br>
0x3400 - 0x4DBF<br>
0xd840 - 0xd869<br>
0xdc00 - 0xdedf<br>
0xA960 - 0xA97F<br>
0xFF00 - 0xFFEF<br>
0x3000 - 0x303F<br>
</td>
<td>
DengXian, MingLiU, MS Gothic
</td>
</tr>
<tr>
<td>
Japanese
</td>
<td>
0x30A0 - 0x30FF<br>
0x3040 - 0x309F<br>
</td>
<td>
Yu Mincho, MS Mincho
</td>
</tr>
<tr>
<td>
Thai 
</td>
<td>
0x0E00 - 0x0E7F
</td>
<td>
Tahoma, Microsoft Sans Serif
</td>
</tr>
<tr>
<td>
Korean 
</td>
<td>
0xAC00 - 0xD7A3<br>
0x1100 - 0x11FF<br>
0x3130 - 0x318F<br>
0xA960 - 0xA97F<br>
0xD7B0 - 0xD7FF<br>
0xAC00 - 0xD7AF<br>
</td>
<td>
Malgun Gothic, Batang
</td>
</tr>
</table>
