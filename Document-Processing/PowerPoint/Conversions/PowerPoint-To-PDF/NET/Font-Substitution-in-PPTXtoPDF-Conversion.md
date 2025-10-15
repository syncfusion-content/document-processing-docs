---
title: Font substitution in PowerPoint to PDF conversion| Syncfusion
description: Learn about how to substitute font during PowerPoint to PDF conversion using the .NET PowerPoint (Presentation) library.
platform: document-processing
control: PowerPoint
documentation: UG
---
# Font substitution for unavailable fonts

When a font used in a PowerPoint presentation is unavailable in the environment where it is converted to PDF, then the library substitutes the ‘Microsoft Sans Serif’ as a default font for text rendering. This leads to a difference in text layouts of PowerPoint presentation and the converted PDF document.  To avoid this, the Essential<sup>&reg;</sup> Presentation library allows you to set an alternate font for the missing font used in the PowerPoint presentation.

## Set alternate font

The following code example demonstrates how to set alternate font name for a missing font while converting a PowerPoint presentation to PDF. The provided alternate font should be installed in the production environment.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight C# tabtitle="C# [Cross-platform]"
playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/PPTX-to-PDF-conversion/Apply-substitution-font-name/.NET/Apply-substitution-font-name/Program.cs" %}
//Load the PowerPoint presentation as stream
using (FileStream fileStream = new FileStream("Sample.pptx", FileMode.Create))
{
    //Load the PowerPoint presentation from stream
    using (IPresentation pptxDoc = Presentation.Open(fileStream))
    {
        // Initializes the 'SubstituteFont' event to set the replacement font
        pptxDoc.FontSettings.SubstituteFont += SubstituteFont;
        //Convert the PowerPoint presentation to PDF file
        PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc);
        //Save the PDF file.
        pdfDocument.Save("Output.pdf");
        pdfDocument.Close(true);
    }
}
/// <summary>
/// Sets the alternate font when a specified font is unavailable in the production environment
/// </summary>
/// <param name="sender">FontSettings type of the Presentation in which the specified font is used but unavailable in production environment. </param>
/// <param name="args">Retrieves the unavailable font name and receives the substitute font name for conversion. </param>
private static void SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    if (args.OriginalFontName == "Arial Unicode MS")
        args.AlternateFontName = "Arial";
    else
        args.AlternateFontName = "Times New Roman";
}
{% endhighlight %}

{% highlight C# tabtitle="C# [Windows-specific]" %}
//Load the PowerPoint presentation and convert to PDF
using (IPresentation pptxDoc = Presentation.Open("Sample.pptx"))
{
    //Initialize 'ChartToImageConverter' to convert charts in the slides, and this is optional
    pptxDoc.ChartToImageConverter = new ChartToImageConverter();
    // Initializes the 'SubstituteFont' event to set the replacement font
    pptxDoc.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
    //Convert the PowerPoint presentation to PDF file
    using (PdfDocument pdfDoc = PresentationToPdfConverter.Convert(pptxDoc))
    {
        //Save the PDF file
        pdfDoc.Save("Sample.pdf");
    }
}
/// <summary>
/// Sets the alternate font when a specified font is unavailable in the production environment
/// </summary>
/// <param name="sender">FontSettings type of the Presentation in which the specified font is used but unavailable in production environment. </param>
/// <param name="args">Retrieves the unavailable font name and receives the substitute font name for conversion. </param>
private static void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    if (args.OriginalFontName == "Arial Unicode MS")
        args.AlternateFontName = "Arial";
    else
        args.AlternateFontName = "Times New Roman";
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load the PowerPoint presentation and convert to PDF
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Initialize 'ChartToImageConverter' to convert charts in the slides, and this is optional
pptxDoc.ChartToImageConverter = New ChartToImageConverter()
'Initializes the 'SubstituteFont' event to set the replacement font
AddHandler pptxDoc.FontSettings.SubstituteFont, AddressOf SubstituteFont
'Convert the PowerPoint presentation to PDF file
Dim pdfDoc As PdfDocument = PresentationToPdfConverter.Convert(pptxDoc)
'Save the PDF file.
pdfDoc.Save("Sample.pdf")
'Dispose the PowerPoint presentation instance
pptxDoc.Dispose()
'Dispose the PDF document instance
pdfDoc.Dispose()
''' <summary>
''' Sets the alternate font when a specified font is unavailable in the production environment
''' </summary>
''' <param name="sender">FontSettings type of the Presentation in which the specified font is used but unavailable in production environment. </param>
''' <param name="args">Retrieves the unavailable font name and receives the substitute font name for conversion. </param>
Private Sub SubstituteFont(ByVal sender As Object, ByVal args As SubstituteFontEventArgs)
    ' Sets the alternate font when a specified font is not installed in the production environment
    If args.OriginalFontName = "Arial Unicode MS" Then
        args.AlternateFontName = "Arial"
    Else
        args.AlternateFontName = "Times New Roman"
    End If
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Apply-substitution-font-name).

N> Hook the SubstituteFont event only after the presentation is loaded to ensure it works correctly.  

## Upload font stream

The following code example demonstrates how to upload a font stream for missing font while converting a PowerPoint presentation to PDF. The provided alternate font stream is not mandatory to be installed in the production environment.

{% tabs %}

{% highlight C# tabtitle="C# [Cross-platform]"
playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/PPTX-to-PDF-conversion/Apply-substitution-font-stream/.NET/Apply-substitution-font-stream/Program.cs" %}
//Load the PowerPoint presentation as stream
using (FileStream fileStream = new FileStream("Sample.pptx", FileMode.Create))
{
    //Load the PowerPoint presentation from stream
    using (IPresentation pptxDoc = Presentation.Open(fileStream))
    {
        // Initializes the 'SubstituteFont' event to set the replacement font
        pptxDoc.FontSettings.SubstituteFont += SubstituteFont;
        //Convert the PowerPoint presentation to PDF file
        PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc);
        //Save the PDF file.
        pdfDocument.Save("Output.pdf");
		// Close the PDF Document
        pdfDocument.Close(true);
    }
}
/// <summary>
/// Sets the alternate font stream when a specified font is unavailable in the production environment
/// </summary>
/// <param name="sender">FontSettings type of the Presentation in which the specified font stream is used but unavailable in production environment. </param>
/// <param name="args">Retrieves the unavailable font name and receives the substitute font stream for conversion. </param>
private static void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    if (args.OriginalFontName == "Arial" && args.FontStyle == FontStyle.Bold)
        args.AlternateFontStream = new FileStream("cambriab.ttf", FileMode.Open);
    else if (args.OriginalFontName == "Arial" && args.FontStyle == FontStyle.Regular)
        args.AlternateFontStream = new FileStream("BROADW.TTF", FileMode.Open);
    else
        args.AlternateFontStream = new FileStream("COOPBL.TTF", FileMode.Open);
}
{% endhighlight %}

{% highlight C# tabtitle="C# [Windows-specific]" %}
//Load the PowerPoint presentation and convert to PDF
using (IPresentation pptxDoc = Presentation.Open("Sample.pptx"))
{
    //Initialize 'ChartToImageConverter' to convert charts in the slides, and this is optional
    pptxDoc.ChartToImageConverter = new ChartToImageConverter();
    // Initializes the 'SubstituteFont' event to set the replacement font
    pptxDoc.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
    //Convert the PowerPoint presentation to PDF file
    using (PdfDocument pdfDoc = PresentationToPdfConverter.Convert(pptxDoc))
    {
        //Save the PDF file
        pdfDoc.Save("Sample.pdf");
    }
}
/// <summary>
/// Sets the alternate font stream when a specified font is unavailable in the production environment
/// </summary>
/// <param name="sender">FontSettings type of the Presentation in which the specified font stream is used but unavailable in production environment. </param>
/// <param name="args">Retrieves the unavailable font name and receives the substitute font stream for conversion. </param>
private static void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    if (args.OriginalFontName == "Arial" && args.FontStyle == FontStyle.Bold)
        args.AlternateFontStream = new FileStream("cambriab.ttf", FileMode.Open);
    else if (args.OriginalFontName == "Arial" && args.FontStyle == FontStyle.Regular)
        args.AlternateFontStream = new FileStream("BROADW.TTF", FileMode.Open);
    else
        args.AlternateFontStream = new FileStream("COOPBL.TTF", FileMode.Open);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load the PowerPoint presentation and convert to PDF
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Initialize 'ChartToImageConverter' to convert charts in the slides, and this is optional
pptxDoc.ChartToImageConverter = New ChartToImageConverter()
'Initializes the 'SubstituteFont' event to set the replacement font
AddHandler pptxDoc.FontSettings.SubstituteFont, AddressOf SubstituteFont
'Convert the PowerPoint presentation to PDF file
Dim pdfDoc As PdfDocument = PresentationToPdfConverter.Convert(pptxDoc)
'Save the PDF file.
pdfDoc.Save("Sample.pdf")
'Dispose the PowerPoint presentation instance
pptxDoc.Dispose()
'Dispose the PDF document instance
pdfDoc.Dispose()
''' <summary>
''' Sets the alternate font stream when a specified font is unavailable in the production environment
''' </summary>
''' <param name="sender">FontSettings type of the Presentation in which the specified font stream is used but unavailable in production environment.</param>
''' <param name="args">Retrieves the unavailable font name and receives the substitute font stream for conversion. </param>
Private Sub SubstituteFont(ByVal sender As Object, ByVal args As SubstituteFontEventArgs)
    ' Sets the alternate font when a specified font is not installed in the production environment
    If args.OriginalFontName = "Arial" AndAlso args.FontStyle = FontStyle.Bold Then
        args.AlternateFontStream = New FileStream("cambriab.ttf", FileMode.Open)
    ElseIf args.OriginalFontName = "Arial" AndAlso args.FontStyle = FontStyle.Regular Then
        args.AlternateFontStream = New FileStream("BROADW.TTF", FileMode.Open)
    Else
        args.AlternateFontStream = New FileStream("COOPBL.TTF", FileMode.Open)
    End If
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Apply-substitution-font-stream).
