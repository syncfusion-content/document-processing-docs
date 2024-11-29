---
title: Unsupported elements in Word to PDF Conversion in C# | DocIO | Syncfusion&reg;
description: Learn about unsupported elements in Word to PDF conversion using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Unsupported elements in Word to PDF Conversion

The following table shows the unsupported elements of Word to PDF conversion.

<table>
<thead> 
<tr>
<th>Element</th>
<th>Unsupported elements</th>
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
Only DOCX and WordML format documents are supported from .NET Framework 4.0 onwards.
</td>
</tr>
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
The Essential&reg; DocIO makes sensible decision when layout the text, and its supported elements while generating the PDF documents. But however, there may not be guaranteed pagination with all the documents.
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
Fit Text – Table cell
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
Not supported
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
Images
</td>
<td>
In .NET Core and latest target, we have limitation in metafile. Refer {{'[here](https://help.syncfusion.com/document-processing/word/word-library/net/faq#why-images-are-preserved-as-redx-images-in-word-to-pdf-conversion)'| markdownify }}
</td>
</tr>
</table>

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
