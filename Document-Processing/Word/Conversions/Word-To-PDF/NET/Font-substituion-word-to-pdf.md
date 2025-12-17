---
title: Font Substitution in Word to PDF Conversion in C# | DocIO | Syncfusion
description: Learn about how to substitute font during Word to PDF conversion using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Font Substitution in Word to PDF Conversion

When the necessary fonts used in the Word document has not been installed in the production machine, then Essential<sup>&reg;</sup> DocIO uses the ”Microsoft Sans Serif” as default font for rendering the text. This leads to preservation difference in generated PDF as each font has different glyphs for characters. To learn more about the default font substitution, click [here](https://support.syncfusion.com/kb/article/6821/what-happens-when-the-word-document-used-fonts-for-a-text-is-not-installed-in-production).

To avoid this, the Essential<sup>&reg;</sup> DocIO library allows you to set an alternate font for the missing font used in the Word document.

## Use alternate font from installed fonts

You can use any other alternate fonts instead of "Microsoft Sans Serif" to layout and render the text during Word to PDF conversion by using the [SubstituteFont](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.FontSettings.html) event.

N> Hook the [SubstituteFont](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.FontSettings.html#Syncfusion_DocIO_DLS_FontSettings_SubstituteFont) event only after the Word document is loaded to ensure it works correctly.

The following code example shows how to use alternate font instead of "Microsoft Sans Serif" when the specified font is not installed in the machine. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Use-alternate-installed-font/.NET/Use-alternate-installed-font/Program.cs" %}
//Open the file as Stream
FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read);
//Loads file stream into Word document
WordDocument wordDocument = new WordDocument(docStream, Syncfusion.DocIO.FormatType.Docx);
//Hooks the font substitution event
wordDocument.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
//Instantiation of DocIORenderer for Word to PDF conversion
DocIORenderer render = new DocIORenderer();
//Converts Word document into PDF document
PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);
//Unhooks the font substitution event after converting to PDF
wordDocument.FontSettings.SubstituteFont -= FontSettings_SubstituteFont;
//Releases all resources used by the Word document and DocIO Renderer objects
render.Dispose();
wordDocument.Dispose();
//Saves the PDF file
MemoryStream outputStream = new MemoryStream();
pdfDocument.Save(outputStream);
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to PDF conversion
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Hooks the font substitution event
wordDocument.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
//Creates an instance of the DocToPDFConverter
DocToPDFConverter converter = new DocToPDFConverter();
//Converts Word document into PDF document
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//Unhooks the font substitution event after converting to PDF
wordDocument.FontSettings.SubstituteFont -= FontSettings_SubstituteFont;
//Closes the instance of Word document object
wordDocument.Close();
//Releases the resources occupied by DocToPDFConverter instance
converter.Dispose();
//Saves the PDF file
pdfDocument.Save("WordtoPDF.pdf");
//Closes the instance of PDF document object
pdfDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document
Dim wordDocument As New WordDocument("Template.docx", FormatType.Docx)
'Initializes the ChartToImageConverter for converting charts during Word to PDF conversion
wordDocument.ChartToImageConverter = New ChartToImageConverter()
'Hooks the font substitution event
AddHandler wordDocument.FontSettings.SubstituteFont, AddressOf FontSettings_SubstituteFont
'Creates an instance of the DocToPDFConverter
Dim converter As DocToPDFConverter = New DocToPDFConverter
'Converts Word document into PDF document
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)
'Unhooks the font substitution event after converting to PDF
RemoveHandler wordDocument.FontSettings.SubstituteFont, AddressOf FontSettings_SubstituteFont
'Closes the instance of Word document object
wordDocument.Close()
'Releases the resources occupied by DocToPDFConverter instance
converter.Dispose()
'Saves the PDF file
pdfDocument.Save("WordtoPDF.pdf")
'Closes the instance of PDF document object
pdfDocument.Close()
{% endhighlight %}

{% endtabs %}

### Event Handler to use alternate installed font

The following code example shows how to set the **alternate installed font** instead of "Microsoft Sans Serif" during Word to PDF conversion.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    //Sets the alternate font when a specified font is not installed in the production environment
    //If "Arial Unicode MS" font is not installed, then it uses the "Arial" font
    //For other missing fonts, uses the "Times New Roman"
    if (args.OriginalFontName == "Arial Unicode MS")
        args.AlternateFontName = "Arial";
    else
        args.AlternateFontName = "Times New Roman";
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    //Sets the alternate font when a specified font is not installed in the production environment
    //If "Arial Unicode MS" font is not installed, then it uses the "Arial" font
    //For other missing fonts, uses the "Times New Roman"
    if (args.OriginalFontName == "Arial Unicode MS")
        args.AlternateFontName = "Arial";
    else
        args.AlternateFontName = "Times New Roman";
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub FontSettings_SubstituteFont(ByVal sender As Object, ByVal args As SubstituteFontEventArgs)
    'Sets the alternate font when a specified font is not installed in the production environment
    'If "Arial Unicode MS" font is not installed, then it uses the "Arial" font
    'For other missing fonts, uses the "Times New Roman"
    If args.OriginalFontName = "Arial Unicode MS" Then
        args.AlternateFontName = "Arial"
    Else
        args.AlternateFontName = "Times New Roman"
    End If
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Use-alternate-installed-font).

### Event Handler to use alternate font without installing

The following code example shows how to use the alternate fonts instead of "Microsoft Sans Serif" **without installing the fonts** into production machine.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-PDF-Conversion/Use-alternate-font-without-installing/.NET/Use-alternate-font-without-installing/Program.cs" %}
private void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    //Sets the alternate font when a specified font is not installed in the production environment
    if (args.OrignalFontName == "Arial Unicode MS")
    {
        //Sets the alternate font based on the font style.
        switch (args.FontStyle)
        {
            case FontStyle.Italic:
                args.AlternateFontStream = new FileStream("Arial_italic.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                break;
            case FontStyle.Bold:
                args.AlternateFontStream = new FileStream("Arial_bold.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                break;
            default:
                args.AlternateFontStream = new FileStream("Arial.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                break;
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
{
    //Sets the alternate font when a specified font is not installed in the production environment
    if (args.OrignalFontName == "Arial Unicode MS")
    {
        //Sets the alternate font based on the font style.
        switch (args.FontStyle)
        {
            case FontStyle.Italic:
                args.AlternateFontStream = new FileStream("Arial_italic.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                break;
            case FontStyle.Bold:
                args.AlternateFontStream = new FileStream("Arial_bold.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                break;
            default:
                args.AlternateFontStream = new FileStream("Arial.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
                break;
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub SubstituteFont(ByVal sender As Object, ByVal args As SubstituteFontEventArgs)
    'Sets the alternate font when a specified font is not installed in the production environment
    If args.OrignalFontName = "Arial Unicode MS" Then
        'Sets the alternate font based on the font style.
        Select Case args.FontStyle
           Case FontStyle.Italic
               args.AlternateFontStream = New FileStream("Arial_italic.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
           Case FontStyle.Bold
               args.AlternateFontStream = New FileStream("Arial_bold.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
           Case Else
               args.AlternateFontStream = New FileStream("Arial.TTF", FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
        End Select
    End If
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Use-alternate-font-without-installing).

N> The above event will be triggered only if the specified font is not installed in production machine.

## See Also

* [How to get the list of font names used in a Word document?](https://support.syncfusion.com/kb/article/22134/how-to-get-the-list-of-font-names-used-in-a-word-document-in-c-net-core)