---
title: Limitations in Word to PDF Conversion | DocIO | Syncfusion
description: Learn about the limitations in Word to PDF conversion in C# using the .NET Word (DocIO) library for effective application.
platform: document-processing
control: DocIO
documentation: UG
---

# Limitations in Word to PDF Conversion

The following tables shows the limitations of Word to PDF conversion.

<table>
<thead> 
<tr>
<th>Document Element</th>
<th>Limitation</th>
</tr>
</thead>
<tr>
<td>
Predefined shapes
</td>
<td>
Only DOCX and WordML format documents are supported.
</td>
</tr>
<tr>
<td>
Chart
</td>
<td>
Only DOCX and WordML format documents are supported from .NET Framework 4.0 onwards. The following chart types are not supported: Pie-Bar of Pie, Map-Filled Map, Surface-3D Surface, Surface-Wireframe 3D Surface, Surface-Contour and Surface-Wireframe Contour.
</td>
</tr>
<tr>
<td>
Grouped Shapes
</td>
<td>
Only DOCX and WordML format documents are supported.
</td>
</tr>
<tr>
<td>
Custom Shapes 
</td>
<td>
Only DrawingML custom shapes in DOCX and WordML format documents are supported.
</td>
</tr>
<tr>
<td>
Equation
</td>
<td>
Mathematical equations extending to multiple lines will be rendered in a single line and content exceeding the right margin will clip in the PDF.
</td>
</tr>
<tr>
<td>
SmartArt
</td>
<td>
Supported only in DOCX format document to PDF. Additional behavior explained {{ '[here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/unsupported-elements-word-to-pdf#smartart)' | markdownify }}.
</td>
</tr>
<tr>
<td>
WordArt
</td>
<td>
Not supported
</td>
</tr>
<tr>
<td>
Watermark
</td>
<td>
First watermark of the Word document should be applied to the entire converted PDF document when the Word document have multiple watermarks.
</td>
</tr>
<tr>
<td>
Multi-Column Texts
</td>
<td>
Multi-Column text positions are calculated dynamically when layout the text. So, there may be some content position differences occur in the PDF document.
</td>
</tr>
<tr>
<td>
Footnote and endnote
</td>
<td>
Number formats in Roman, Alphabets, and Arabic only supported.
</td>
</tr>
<tr>
<td>
Textbox
</td>
<td>
Linked text boxes are not supported.
</td>
</tr>
</table>

<table>
<thead> 
<tr>
<th>Formatting</th>
<th>Limitation</th>
</tr>
</thead>
<tr>
<td>
Table Styles
</td>
<td>
Only DOCX and WordML format documents are supported.
</td>
</tr>
<tr>
<td>
Pagination
</td>
<td>
The Essential<sup>&reg;</sup> DocIO makes sensible decision when layout the text, and its supported elements while generating the PDF documents. But however, there may not be guaranteed pagination with all the documents.
</td>
</tr>
<tr>
<td>
Fit Text - Table cell
</td>
<td>
Not supported
</td>
</tr>
<tr>
<td>
Vertical Alignment of the section
</td>
<td>
Not supported
</td>
</tr>
<tr>
<td>
Borders
</td>
<td>
Using of patterns and 3D borders are not retained in the output PDF document.
</td>
</tr>
<tr>
<td>
Break – Page break, column break and Line break
</td>
<td>
Text wrapping break is not supported.
</td>
</tr>
<tr>
<td>
Font kerning
</td>
<td>
Partially supported. At present, the text in a line is scaled uniformly to match the width of kerned text, instead of adjusting the space between each pair of characters.
</td>
</tr>
<tr>
<td>
Transparency and Pattern fill in shapes
</td>
<td>
Supported only in DOCX format during Word to PDF conversion.
</td>
</tr>
<tr>
<td>
Recolor picture
</td>
<td>
Supported only in DOCX format during Word to PDF conversion.
</td>
</tr>
<tr>
<td>
Gradient fill in Shapes
</td>
<td>
Supported only in DOCX format. Rectangular and Path gradient types are not supported in PDF conversions in ASP.NET Core, Blazor, WinUI, .NET MAUI, and Xamarin platforms. These are currently rendered as Radial gradients.
</td>
</tr>
<tr>
<td>
Metafile images (WMF, EMF)
</td>
<td>
Supported. Text within WMF or EMF images is searchable in the converted PDF only when the image is not cropped, recolored, or made transparent.
</td>
</tr>
</table>

## Detailed limitations

Some elements have additional limitations or require manual steps to ensure accurate conversion results. These are detailed below:

### SmartArt

SmartArt typically contains graphic properties, including bounds information for SmartArt and its nodes. When creating or modifying SmartArt using the Syncfusion Word Library, these graphic properties (e.g., bounds information) are not generated. Due to this limitation, SmartArt created or modified using the Syncfusion Word Library may not be accurately preserved during Word-to-PDF and image conversions.

**To resolve this**, first save the document using DocIO before converting it to a PDF or image. Then, open the saved document in Microsoft Word, save it again, and finally convert it to a PDF or image using DocIO. This regenerates the required SmartArt properties, ensuring accurate output.

### Drawing Canvas

Creating, editing, or cloning Drawing Canvas elements programmatically is not supported. These elements are not included in Find and Replace functionality or document comparison. Additionally, when opening Word 2003 or 2007 DOCX documents, the Drawing Canvas is treated as a group shape.

## Show Warning for Unsupported Elements

When converting a Word document to a PDF, the presence of unsupported elements in the input Word document can lead to preservation issues in the converted PDF. The .NET Word library (DocIO) contains [Warning](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_Warning) API, which helps to detect and handle these unsupported elements during the conversion process. This API holds the information of unsupported elements once found in the input Word document. 

Users can display warning messages for the unsupported elements using the [WarningType](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WarningInfo.html#Syncfusion_DocIO_DLS_WarningInfo_WarningType) during Word to PDF conversion. Users can set a flag to stop the conversion process based on the warning. 

The following code demonstrates how to stop conversion if the input Word document has an unsupported element like SmartArt during Word to PDF conversion.


{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
using (FileStream fileStream = new FileStream("Input.docx", FileMode.Open))
{
    //Loads an existing Word document.
    using (WordDocument wordDocument = new WordDocument(fileStream, Syncfusion.DocIO.FormatType.Automatic))
    {
        //Creates an instance of DocIORenderer.
        using (DocIORenderer renderer = new DocIORenderer())
        {
            renderer.Settings.Warning = new DocumentWarning();
            //Converts Word document into a PDF document.
            using (PdfDocument pdfDocument = renderer.ConvertToPDF(wordDocument))
            {
                //If the IsCanceled boolean is enabled, the input document will contain an unsupported element.
                if (renderer.IsCanceled)
                {
                    Console.WriteLine("The execution stopped due to unsupported element.");
                    Console.ReadKey();
                }
                else
                {
                    //Saves the PDF file.
                    FileStream outputFile = new FileStream("Output.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite);
                    pdfDocument.Save(outputFile);
                    outputFile.Dispose();
                    Console.WriteLine("Success");
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument wordDocument = new WordDocument("Input.docx");
DocToPDFConverter converter = new DocToPDFConverter();
converter.Settings.Warning = new DocumentWarning();
PdfDocument pdfDocument = converter.ConvertToPDF(document);
//If the IsCanceled boolean is enabled, the input document will contain an unsupported element.
if (converter.IsCanceled)
{
    Console.WriteLine("The execution stopped due to unsupported element.");
    Console.ReadKey();
}
else
{
    //Saves the PDF file.
    FileStream outputFile = new FileStream("Output.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite);
    pdfDocument.Save(outputFile);
    outputFile.Dispose();
    Console.WriteLine("Success");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim wordDocument As New WordDocument("Input.docx")
Dim converter As New DocToPDFConverter()
converter.Settings.Warning = New DocumentWarning()
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(document)

' If the IsCanceled boolean is enabled, the input document will contain an unsupported element.
If converter.IsCanceled Then
    Console.WriteLine("The execution stopped due to unsupported element.")
    Console.ReadKey()
Else
    ' Saves the PDF file.
    Using outputFile As New FileStream("Output.pdf", FileMode.OpenOrCreate, FileAccess.ReadWrite)
        pdfDocument.Save(outputFile)
        Console.WriteLine("Success")
    End Using
End If
{% endhighlight %}

{% endtabs %}

The following code demonstrates how to initialize the [Warning](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_Warning) API and display warning messages for all unsupported elements in the input document. Additionally, this code shows how to set a flag to stop Word to PDF conversion if an unsupported element is identified.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
public class DocumentWarning : IWarning
{
    public bool ShowWarnings(List<WarningInfo> warningInfo)
    {
        bool isContinueConversion = true;
        foreach (WarningInfo warning in warningInfo)
        {
            //Based on the WarningType enumeration, you can do your manipulation.
            //Skip the Word to PDF conversion by setting the isContinueConversion value to false.
            //To stop execution if the input document has a SmartArt.
            if (warning.WarningType == WarningType.SmartArt)
                isContinueConversion = false;

            //Warning messages for unsupported elements in the input document.
            Console.WriteLine("The input document contains " + warning.WarningType + " unsupported element.");
        }
        return isContinueConversion;
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
public class DocumentWarning : IWarning
{
    public bool ShowWarnings(List<WarningInfo> warningInfo)
    {
        bool isContinueConversion = true;
        foreach (WarningInfo warning in warningInfo)
        {
            //Based on the WarningType enumeration, you can do your manipulation.
            //Skip the Word to PDF conversion by setting the isContinueConversion value to false.
            //To stop execution if the input document has a SmartArt.
            if (warning.WarningType == WarningType.SmartArt)
                isContinueConversion = false;

            //Warning messages for unsupported elements in the input document.
            Console.WriteLine("The input document contains " + warning.WarningType + " unsupported element.");
        }
        return isContinueConversion;
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Public Class DocumentWarning
    Implements IWarning

    Public Function ShowWarnings(warningInfo As List(Of WarningInfo)) As Boolean Implements IWarning.ShowWarnings
        Dim isContinueConversion As Boolean = True

        For Each warning As WarningInfo In warningInfo
            ' Based on the WarningType enumeration, you can perform your manipulation.
            ' Skip the Word to PDF conversion by setting the isContinueConversion value to false.
            ' To stop execution if the input document has a SmartArt.
            If warning.WarningType = WarningType.SmartArt Then
                isContinueConversion = False
            End If

            ' Warning messages for unsupported elements in the input document.
            Console.WriteLine("The input document contains " & warning.WarningType & " unsupported element.")
        Next

        Return isContinueConversion
    End Function
End Class
{% endhighlight %}

{% endtabs %}

T> Using the above Warning API, handle logic to identify the documents with unsupported elements and notify the end users to use supported elements for good preservation in the output PDF.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Show-Warning-for-unsupported-elements)
