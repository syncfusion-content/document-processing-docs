---
title: Fallback fonts in PowerPoint to PDF conversion| Syncfusion
description: Learn about how to specify fallback fonts during PowerPoint to PDF conversion using the .NET PowerPoint (Presentation) library.
platform: document-processing
control: PowerPoint
documentation: UG
---
# Fallback fonts in PowerPoint to PDF conversion

During PowerPoint to PDF conversions, if a glyph of the input text is unavailable in the specified font, the text will not be rendered properly. To address this, the Syncfusion<sup>&reg;</sup> PowerPoint (Presentation) library allows users to specify fallback fonts. When a glyph is missing, the library will use one of the fallback fonts to render the text correctly in the output PDF document.

Users can configure fallback fonts in the following ways:
* Initialize default fallback fonts.
* Set custom fonts as fallback fonts for specific script types, including Arabic, Hebrew, Chinese, Japanese, and more.
* Set custom fonts as fallback fonts for a particular range of Unicode text.

N> Presentation internally uses user-initialized or specified fallback fonts for Unicode characters during PowerPoint to PDF conversion. Therefore, the specified fallback fonts must be installed in the production environment. Otherwise, it will not render the text properly using the fallback fonts.

## Initialize default fallback fonts

The following code example demonstrates how to initialize a default fallback font while converting a PowerPoint presentation to PDF. The *InitializeDefault* API sets the default fallback fonts for specific script types like Arabic, Hebrew, Chinese, Japanese etc.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight C# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/PPTX-to-PDF-conversion/Initialize-default-fallback-fonts/.NET/Initialize-default-fallback-fonts/Program.cs" %}
//Load the PowerPoint presentation into stream.
using (FileStream fileStreamInput = new FileStream("Template.pptx", FileMode.Open, FileAccess.Read))
{
    //Open the existing PowerPoint presentation with loaded stream.
    using (IPresentation pptxDoc = Presentation.Open(fileStreamInput))
    {
        //Use a sets of default FallbackFont collection to IPresentation.
        pptxDoc.FontSettings.FallbackFonts.InitializeDefault();
		//Convert the PowerPoint document to PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            //Save the converted PDF document.
            pdfDocument.Save("Output.pdf");                
        }
    }
}
{% endhighlight %}

{% highlight C# tabtitle="C# [Windows-specific]" %}
//Opens a PowerPoint Presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Initialize the conversion settings.
PresentationToPdfConverterSettings pdfConverterSettings = new PresentationToPdfConverterSettings();
//Enable the portable rendering.
pdfConverterSettings.EnablePortableRendering = true;
//Use a sets of default FallbackFont collection to IPresentation.
pptxDoc.FontSettings.FallbackFonts.InitializeDefault();
//Converts the PowerPoint Presentation into PDF document with Portable rendering option.
PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc);
//Saves the PDF document.
pdfDocument.Save("Sample.pdf");
//Closes the PDF document.
pdfDocument.Close(true);
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens a PowerPoint Presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Initialize the conversion settings.
Dim pdfConverterSettings As PresentationToPdfConverterSettings = new PresentationToPdfConverterSettings()
'Enable the portable rendering.
pdfConverterSettings.EnablePortableRendering = true
'Use a sets of default FallbackFont collection to IPresentation.
pptxDoc.FontSettings.FallbackFonts.InitializeDefault
'Converts the PowerPoint Presentation into PDF document.
Dim pdfDocument As PdfDocument = PresentationToPdfConverter.Convert(pptxDoc)
'Saves the PDF document.
pdfDocument.Save("Sample.pdf")
'Closes the PDF document.
pdfDocument.Close(True)
'Closes the Presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Initialize-default-fallback-fonts).

## Fallback fonts based on script type

The following code example demonstrates how a user can add fallback fonts based on the script types, which Presentation considers internally when converting a PowerPoint presentation to PDF.

{% tabs %}

{% highlight C# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/PPTX-to-PDF-conversion/Fallback-fonts-based-on-scripttype/.NET/Fallback-fonts-based-on-scripttype/Program.cs" %}
//Load the PowerPoint presentation into stream.
using (FileStream fileStreamInput = new FileStream("Template.pptx", FileMode.Open, FileAccess.Read))
{
    //Open the existing PowerPoint presentation with loaded stream.
    using (IPresentation pptxDoc = Presentation.Open(fileStreamInput))
    {
        //Adds fallback font for "Arabic" script type.
        pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman");
        //Adds fallback font for "Hebrew" script type.
        pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Hebrew, "Arial, Courier New");
        //Adds fallback font for "Hindi" script type.
        pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Hindi, "Mangal, Nirmala UI");
        //Adds fallback font for "Chinese" script type.
        pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Chinese, "DengXian, MingLiU");
        //Adds fallback font for "Japanese" script type.
        pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Japanese, "Yu Mincho, MS Mincho");
        //Adds fallback font for "Thai" script type.
        pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Thai, "Tahoma, Microsoft Sans Serif");
        //Adds fallback font for "Korean" script type.
        pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Korean, "Malgun Gothic, Batang");
        //Convert the PowerPoint document to PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            //Save the converted PDF document.
            pdfDocument.Save("Output.pdf");                
        }
    }
}
{% endhighlight %}

{% highlight C# tabtitle="C# [Windows-specific]" %}
//Opens a PowerPoint Presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Initialize the conversion settings.
PresentationToPdfConverterSettings pdfConverterSettings = new PresentationToPdfConverterSettings();
//Enable the portable rendering.
pdfConverterSettings.EnablePortableRendering = true;
//Adds fallback font for "Arabic" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman");
//Adds fallback font for "Hebrew" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Hebrew, "Arial, Courier New");
//Adds fallback font for "Hindi" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Hindi, "Mangal, Nirmala UI");
//Adds fallback font for "Chinese" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Chinese, "DengXian, MingLiU");
//Adds fallback font for "Japanese" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Japanese, "Yu Mincho, MS Mincho");
//Adds fallback font for "Thai" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Thai, "Tahoma, Microsoft Sans Serif");
//Adds fallback font for "Korean" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Korean, "Malgun Gothic, Batang");
//Converts the PowerPoint Presentation into PDF document with Portable rendering option.
PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc);
//Saves the PDF document.
pdfDocument.Save("Sample.pdf");
//Closes the PDF document.
pdfDocument.Close(true);
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens a PowerPoint Presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Initialize the conversion settings.
Dim pdfConverterSettings As PresentationToPdfConverterSettings = new PresentationToPdfConverterSettings()
'Enable the portable rendering.
pdfConverterSettings.EnablePortableRendering = true
'Adds fallback font for "Arabic" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Arabic, "Arial, Times New Roman")
'Adds fallback font for "Hebrew" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Hebrew, "Arial,Courier New")
'Adds fallback font for "Hindi" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Hindi, "Mangal, Nirmala UI")
'Adds fallback font for "Chinese" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Chinese, "DengXian, MingLiU")
'Adds fallback font for "Japanese" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Japanese, "Yu Mincho, MS Mincho")
'Adds fallback font for "Thai" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Thai, "Tahoma, Microsoft Sans Serif")
'Adds fallback font for "Korean" script type.
pptxDoc.FontSettings.FallbackFonts.Add(ScriptType.Korean, "Malgun Gothic, Batang")
'Converts the PowerPoint Presentation into PDF document.
Dim pdfDocument As PdfDocument = PresentationToPdfConverter.Convert(pptxDoc)
'Saves the PDF document.
pdfDocument.Save("Sample.pdf")
'Closes the PDF document.
pdfDocument.Close(True)
'Closes the Presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Fallback-fonts-based-on-scripttype).

## Fallback fonts for range of Unicode text

Users can set fallback fonts for specific Unicode range of text to be used in presentation to PDF conversion.

The following code example demonstrates how users can add fallback fonts by using a specific Unicode range of text that Presentation considers internally while converting a PowerPoint presentation to PDF.

{% tabs %}

{% highlight C# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/PPTX-to-PDF-conversion/Fallback-fonts-for-Unicode-range/.NET/Fallback-fonts-for-Unicode-range/Program.cs" %}
//Load the PowerPoint presentation into stream.
using (FileStream fileStreamInput = new FileStream("Template.pptx", FileMode.Open, FileAccess.Read))
{
    //Open the existing PowerPoint presentation with loaded stream.
    using (IPresentation pptxDoc = Presentation.Open(fileStreamInput))
    {
        //Adds fallback font for specific unicode range.
        // Arabic.
        pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x0600, 0x06ff, "Arial"));
        // Hebrew.
        pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x0590, 0x05ff, "Arial"));
        // Hindi.
        pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x0900, 0x097F, "Mangal"));
        // Chinese.
        pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x4E00, 0x9FFF, "DengXian"));
        // Japanese.
        pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x3040, 0x309F, "MS Mincho"));
        // Korean.
        pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0xAC00, 0xD7A3, "Malgun Gothic"));
        //Convert the PowerPoint document to PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            //Save the converted PDF document.
            pdfDocument.Save("Output.pdf");                
        }
    }
}
{% endhighlight %}

{% highlight C# tabtitle="C# [Windows-specific]" %}
//Opens a PowerPoint Presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Initialize the conversion settings.
PresentationToPdfConverterSettings pdfConverterSettings = new PresentationToPdfConverterSettings();
//Enable the portable rendering.
pdfConverterSettings.EnablePortableRendering = true;
//Adds fallback font for specific unicode range.
// Arabic.
pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x0600, 0x06ff, "Arial"));
// Hebrew.
pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x0590, 0x05ff, "Arial"));
// Hindi.
pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x0900, 0x097F, "Mangal"));
// Chinese.
pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x4E00, 0x9FFF, "DengXian"));
// Japanese.
pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0x3040, 0x309F, "MS Mincho"));
// Korean.
pptxDoc.FontSettings.FallbackFonts.Add(new FallbackFont(0xAC00, 0xD7A3, "Malgun Gothic"));
//Converts the PowerPoint Presentation into PDF document.
PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc);
//Saves the PDF document.
pdfDocument.Save("Sample.pdf");
//Closes the PDF document.
pdfDocument.Close(true);
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens a PowerPoint Presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Initialize the conversion settings.
Dim pdfConverterSettings As PresentationToPdfConverterSettings = new PresentationToPdfConverterSettings()
'Enable the portable rendering.
pdfConverterSettings.EnablePortableRendering = true
'Adds fallback font for specific unicode range.
' Arabic.
pptxDoc.FontSettings.FallbackFonts.Add(New FallbackFont(1536, 1791, "Arial"))
' Hebrew.
pptxDoc.FontSettings.FallbackFonts.Add(New FallbackFont(1424, 1535, "Arial"))
' Hindi.
pptxDoc.FontSettings.FallbackFonts.Add(New FallbackFont(2304, 2431, "Mangal"))
' Chinese.
pptxDoc.FontSettings.FallbackFonts.Add(New FallbackFont(19968, 40959, "DengXian"))
' Japanese.
pptxDoc.FontSettings.FallbackFonts.Add(New FallbackFont(12352, 12447, "MS Mincho"))
' Korean.
pptxDoc.FontSettings.FallbackFonts.Add(New FallbackFont(44032, 55203, "Malgun Gothic"))
'Converts the PowerPoint Presentation into PDF document.
Dim pdfDocument As PdfDocument = PresentationToPdfConverter.Convert(pptxDoc)
'Saves the PDF document.
pdfDocument.Save("Sample.pdf")
'Closes the PDF document.
pdfDocument.Close(True)
'Closes the Presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Fallback-fonts-for-Unicode-range).

## Modify the exiting fallback fonts

The following code example demonstrates how user can modify or customize the existing fallback fonts using *FontNames* API while converting a PowerPoint presentation to PDF.

{% tabs %}

{% highlight C# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/PPTX-to-PDF-conversion/Modify-the-exiting-fallback-fonts/.NET/Modify-the-exiting-fallback-fonts/Program.cs" %}
//Load the PowerPoint presentation into stream.
using (FileStream fileStreamInput = new FileStream("Template.pptx", FileMode.Open, FileAccess.Read))
{
    //Open the existing PowerPoint presentation with loaded stream.
    using (IPresentation pptxDoc = Presentation.Open(fileStreamInput))
    {
        //Use a sets of default FallbackFont collection to IPresentation.
        pptxDoc.FontSettings.FallbackFonts.InitializeDefault();
        // Customize a default fallback font name.
        FallbackFonts fallbackFonts = pptxDoc.FontSettings.FallbackFonts;
        foreach (FallbackFont fallbackFont in fallbackFonts) 
        {
           //Customize a default fallback font name as "David" for the Hebrew script.
           if (fallbackFont.ScriptType == ScriptType.Hebrew)
              fallbackFont.FontNames = "David";
        }
        //Convert the PowerPoint document to PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            //Save the converted PDF document.
            pdfDocument.Save("Output.pdf");                
        }
    }
}
{% endhighlight %}

{% highlight C# tabtitle="C# [Windows-specific]" %}
//Opens a PowerPoint Presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Initialize the conversion settings.
PresentationToPdfConverterSettings pdfConverterSettings = new PresentationToPdfConverterSettings();
//Enable the portable rendering.
pdfConverterSettings.EnablePortableRendering = true;
//Use a sets of default FallbackFont collection to IPresentation.
pptxDoc.FontSettings.FallbackFonts.InitializeDefault();
// Customize a default fallback font name.
FallbackFonts fallbackFonts = pptxDoc.FontSettings.FallbackFonts;
foreach (FallbackFont fallbackFont in fallbackFonts) 
{
   //Customize a default fallback font name as "David" for the Hebrew script.
   if (fallbackFont.ScriptType == ScriptType.Hebrew)
      fallbackFont.FontNames = "David";
}
//Converts the PowerPoint Presentation into PDF document.
PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc);
//Saves the PDF document.
pdfDocument.Save("Sample.pdf");
//Closes the PDF document.
pdfDocument.Close(true);
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens a PowerPoint Presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Initialize the conversion settings.
Dim pdfConverterSettings As PresentationToPdfConverterSettings = new PresentationToPdfConverterSettings()
'Enable the portable rendering.
pdfConverterSettings.EnablePortableRendering = true
'Use a sets of default FallbackFont collection to IPresentation.
pptxDoc.FontSettings.FallbackFonts.InitializeDefault()
'Customize a default fallback font name.
Dim fallbackFonts As FallbackFonts = pptxDoc.FontSettings.FallbackFonts
For Each fallbackFont As FallbackFont In fallbackFonts 
   'Customize a default fallback font name as "David" for the Hebrew script.
   If fallbackFont.ScriptType = ScriptType.Hebrew Then
      fallbackFont.FontNames = "David"
   End If  
Next
'Converts the PowerPoint Presentation into PDF document.
Dim pdfDocument As PdfDocument = PresentationToPdfConverter.Convert(pptxDoc)
'Saves the PDF document.
pdfDocument.Save("Sample.pdf")
'Closes the PDF document.
pdfDocument.Close(True)
'Closes the Presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Modify-the-exiting-fallback-fonts).

## Supported script types

The following table illustrates the supported script types by the .NET PowerPoint library (Presentation) in Presentation to PDF conversion.

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