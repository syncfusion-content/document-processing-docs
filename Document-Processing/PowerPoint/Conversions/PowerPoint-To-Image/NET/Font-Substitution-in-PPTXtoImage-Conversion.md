---
title: Font substitution in PowerPoint to Image conversion| Syncfusion
description: Learn about how to substitute font during PowerPoint to Image conversion using the .NET PowerPoint (Presentation) library.
platform: document-processing
control: PowerPoint
documentation: UG
---
# Font substitution for unavailable fonts

When a font used in a PowerPoint presentation is unavailable in the environment where it is converted to image, then the library substitutes the ‘Microsoft Sans Serif’ as a default font for text rendering. This leads to a difference in text layouts of PowerPoint presentation and the converted image.  To avoid this, the Essential<sup>&reg;</sup> Presentation library allows you to set an alternate font for the missing font used in the PowerPoint presentation.

N> Font substitution for Unavailable fonts is not supported in UWP platform.

The following code sample demonstrates how to set a substitute font for a missing font while converting a PowerPoint presentation to image.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/PPTX-to-Image-conversion/Add-font-substitution/.NET/Add-font-substitution/Program.cs" %}
//Load the PowerPoint presentation and convert to image
using (IPresentation pptxDoc = Presentation.Open("Sample.pptx"))
{
    //Initialize the PresentationRenderer to perform image conversion.
    pptxDoc.PresentationRenderer = new PresentationRenderer();
    // Initializes the 'SubstituteFont' event to set the replacement font
    pptxDoc.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
    //Convert PowerPoint slide to image as stream.
    using (Stream stream = pptxDoc.Slides[0].ConvertToImage(ExportImageFormat.Jpeg))
    {
        //Create the output image file stream
        using (FileStream fileStreamOutput = File.Create("Output.jpg"))
        {
         //Copy the converted image stream into created output stream
         stream.CopyTo(fileStreamOutput);
        }
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

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load the PowerPoint presentation and convert to image
using (IPresentation pptxDoc = Presentation.Open("Sample.pptx"))
{
    //Initialize 'ChartToImageConverter' to convert charts in the slides, and this is optional
    pptxDoc.ChartToImageConverter = new ChartToImageConverter();
    // Initializes the 'SubstituteFont' event to set the replacement font
    pptxDoc.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
    //Converts the first slide into image
    Image image = pptxDoc.Slides[0].ConvertToImage(Syncfusion.Drawing.ImageType.Metafile);
    //Saves the image as file
    image.Save("slide1.png");
    //Disposes the image
    image.Dispose();
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
'Load the PowerPoint presentation and convert to image
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Initialize 'ChartToImageConverter' to convert charts in the slides, and this is optional
pptxDoc.ChartToImageConverter = New ChartToImageConverter()
'Initializes the 'SubstituteFont' event to set the replacement font
AddHandler pptxDoc.FontSettings.SubstituteFont, AddressOf SubstituteFont
'Convert the PowerPoint presentation to image.
Dim image As Image = pptxDoc.Slides(0).ConvertToImage(Syncfusion.Drawing.ImageType.Metafile)
'Save the image.
image.Save("slide1.png")
'Dispose the Presentation instance
pptxDoc.Dispose()
'Dispose the image
image.Dispose()
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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Add-font-substitution).
