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

## Fallback Symbols based on script type

The following code example demonstrates how a user can add fallback fonts for Symbols and Emojis, which DocIO considers internally when converting a Word document to PDF.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Opens the file as stream.
using (FileStream inputStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Loads an existing Word document file stream.
    using (WordDocument wordDocument = new WordDocument(inputStream, Syncfusion.DocIO.FormatType.Docx))
    {
        //Adds fallback font for basic symbols like bullet characters.
        wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Symbols, "Segoe UI Symbol, Arial Unicode MS, Wingdings");
        //Adds fallback font for mathematics symbols.
        wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Mathematics, "Cambria Math, Noto Sans Math, Segoe UI Symbol, Arial Unicode MS");
        //Adds fallback font for emojis.
        wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Emoji, "Segoe UI Emoji, Noto Color Emoji, Arial Unicode MS");        
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
   //Adds fallback font for basic symbols like bullet characters.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Symbols, "Segoe UI Symbol, Arial Unicode MS, Wingdings");
   //Adds fallback font for mathematics symbols.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Mathematics, "Cambria Math, Noto Sans Math, Segoe UI Symbol, Arial Unicode MS");
   //Adds fallback font for emojis.
   wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Emoji, "Segoe UI Emoji, Noto Color Emoji, Arial Unicode MS");     
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
    'Adds fallback font for basic symbols Like bullet characters.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Symbols, "Segoe UI Symbol, Arial Unicode MS, Wingdings")
    'Adds fallback font for mathematics symbols.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Mathematics, "Cambria Math, Noto Sans Math, Segoe UI Symbol, Arial Unicode MS")
    'Adds fallback font for emojis.
    wordDocument.FontSettings.FallbackFonts.Add(ScriptType.Emoji, "Segoe UI Emoji, Noto Color Emoji, Arial Unicode MS")
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
<tr>
  <td>Tamil</td>
  <td>0x0B80 - 0x0BFF</td>
  <td>Latha, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Bengali</td>
  <td>0x0980 - 0x09FF</td>
  <td>Vrinda, Arial Unicode MS, Nikosh, Siyam Rupali, Nirmala UI</td>
</tr>
<tr>
  <td>Gujarati</td>
  <td>0x0A80 - 0x0AFF</td>
  <td>Shruti, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Telugu</td>
  <td>0x0C00 - 0x0C7F</td>
  <td>Gautami, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Malayalam</td>
  <td>0x0D00 - 0x0D7F</td>
  <td>Kartika, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Kannada</td>
  <td>0x0C80 - 0x0CFF</td>
  <td>Tunga, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Ethiopic</td>
  <td>0x1200 - 0x137F<br>
  0x1380 - 0x139F</td>
  <td>Nyala, Ebrima</td>
</tr>
<tr>
  <td>Khmer</td>
  <td>0x1780 - 0x17FF<br>
  0x19E0 - 0x19FF</td>
  <td>MoolBoran, DaunPenh, Leelawadee, Leelawadee UI</td>
</tr>
<tr>
  <td>Gurmukhi</td>
  <td>0x0A00 - 0x0A7F</td>
  <td>Raavi, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Canadian</td>
  <td>0x1400 - 0x167F</td>
  <td>Euphemia, Gadugi</td>
</tr>
<tr>
  <td>Cherokee</td>
  <td>0x13A0 - 0x13FF<br>
  0xAB70 - 0xABBF</td>
  <td>Plantagenet Cherokee, Gadugi, Arial Unicode MS</td>
</tr>
<tr>
  <td>Yi</td>
  <td>0xA000 - 0xA48F<br>
  0xA490 - 0xA4CF</td>
  <td>Microsoft Yi Baiti, Arial Unicode MS</td>
</tr>
<tr>
  <td>Tibetan</td>
  <td>0x0F00 - 0x0FFF</td>
  <td>Microsoft Himalaya, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Thaana</td>
  <td>0x0780 - 0x07BF</td>
  <td>MV Boli, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Syriac</td>
  <td>0x0700 - 0x074F</td>
  <td>Estrangelo Edessa, Segoe UI Historic, Arial Unicode MS</td>
</tr>
<tr>
  <td>Odia</td>
  <td>0x0B00 - 0x0B7F</td>
  <td>Kalinga, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Lao</td>
  <td>0x0E80 - 0x0EFF</td>
  <td>DokChampa, Lao UI, Leelawadee UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Sinhala</td>
  <td>0x0D80 - 0x0DFF</td>
  <td>Iskoola Pota, Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Mongolian</td>
  <td>0x1800 - 0x18AF</td>
  <td>Mongolian Baiti, Microsoft YaHei, Arial Unicode MS</td>
</tr>
<tr>
  <td>Vietnamese</td>
  <td>0x00C0 - 0x00FF<br>
  0x0102 - 0x0103<br>
  0x0110 - 0x0111<br>
  0x0128 - 0x0129<br>
  0x0168 - 0x0169<br>
  0x01A0 - 0x01A1<br>
  0x01AF - 0x01B0<br>
  0x0300 - 0x036F</td>
  <td>Times New Roman, Arial, Tahoma, Arial Unicode MS</td>
</tr>
<tr>
  <td>Georgian</td>
  <td>0x10A0 - 0x10FF<br>
  0x2D00 - 0x2D2F</td>
  <td>Sylfaen, Arial Unicode MS</td>
</tr>
<tr>
  <td>Armenian</td>
  <td>0x0530 - 0x058F<br>
  0xFB13 - 0xFB17</td>
  <td>Arial, Sylfaen, Arial Unicode MS</td>
</tr>
<tr>
  <td>Buginese</td>
  <td>0x1A00 - 0x1A1F</td>
  <td>Leelawadee UI, Segoe UI Symbol</td>
</tr>
<tr>
  <td>Bopomofo</td>
  <td>0x3100 - 0x312F<br>
  0x31A0 - 0x31BF</td>
  <td>Microsoft JhengHei, PMingLiU, SimSun, Arial Unicode MS</td>
</tr>
<tr>
  <td>Javanese</td>
  <td>0xA980 - 0xA9DF</td>
  <td>Javanese Text, Segoe UI Symbol</td>
</tr>
<tr>
  <td>Lisu</td>
  <td>0xA4D0 - 0xA4FF</td>
  <td>Segoe UI Symbol, Arial Unicode MS</td>
</tr>
<tr>
  <td>Burmese</td>
  <td>0x1000 - 0x109F<br>
  0xAA60 - 0xAA7F</td>
  <td>Myanmar Text, Noto Sans Myanmar, Padauk</td>
</tr>
<tr>
  <td>NKo</td>
  <td>0x07C0 - 0x07FF</td>
  <td>Ebrima, Arial Unicode MS</td>
</tr>
<tr>
  <td>OlChiki</td>
  <td>0x1C50 - 0x1C7F</td>
  <td>Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>Osmanya</td>
  <td>0x10480 - 0x104AF</td>
  <td>Ebrima, Noto Sans Osmanya</td>
</tr>
<tr>
  <td>PhagsPa</td>
  <td>0xA840 - 0xA87F</td>
  <td>Phagspa, Microsoft PhagsPa, Noto Sans PhagsPa, Arial Unicode MS</td>
</tr>
<tr>
  <td>SoraSompeng</td>
  <td>0x110D0 - 0x110FF</td>
  <td>Nirmala UI, Arial Unicode MS</td>
</tr>
<tr>
  <td>TaiLe</td>
  <td>0x1950 - 0x197F</td>
  <td>Microsoft Tai Le, Arial Unicode MS</td>
</tr>
<tr>
  <td>NewTaiLue</td>
  <td>0x1980 - 0x19DF</td>
  <td>Microsoft New Tai Lue, Arial Unicode MS</td>
</tr>
<tr>
  <td>Tifinagh</td>
  <td>0x2D30 - 0x2D7F</td>
  <td>Ebrima, Arial Unicode MS</td>
</tr>
<tr>
  <td>Symbols</td>
  <td>0x2000 - 0x27BF<br>
  0x2300 - 0x23FF<br>
  0xF000 - 0xF104</td>
  <td>Segoe UI Symbol, Arial Unicode MS, Wingdings</td>
</tr>
<tr>
  <td>Mathematics</td>
  <td>0x2200 - 0x2AFF<br>
  0x1D400 - 0x1D7FF</td>
  <td>Cambria Math, Noto Sans Math, Segoe UI Symbol, Arial Unicode MS</td>
</tr>
<tr>
  <td>Emoji</td>
  <td>0x1F300 - 0x1FAFF<br>
  0xFE0F - 0xFE0F</td>
  <td>Segoe UI Emoji, Noto Color Emoji, Arial Unicode MS</td>
</tr>
</table>
