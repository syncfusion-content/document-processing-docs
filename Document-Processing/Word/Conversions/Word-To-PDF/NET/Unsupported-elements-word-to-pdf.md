---
title: Limitations in Word to PDF Conversion | DocIO | Syncfusion
description: Learn about the limitations in Word to PDF conversion in C# using the .NET Word (DocIO) library for effective application.
platform: document-processing
control: DocIO
documentation: UG
---

# Limitations in Word to PDF Conversion

The following table shows the limitations of Word to PDF conversion.

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
    Only DOCX and WordML format documents are supported on .NET Framework 4.0 and later, as well as on .NET, ASP.NET Core, Blazor, WinUI, .NET MAUI, and Xamarin.
    <br/><br/>
    The following chart types are not supported on all platforms:
    <ul>
      <li>Pie‑Bar of Pie</li>
      <li>Map‑Filled Map</li>
      <li>Surface‑3D Surface</li>
      <li>Surface‑Wireframe 3D Surface</li>
      <li>Surface‑Contour</li>
      <li>Surface‑Wireframe Contour</li>
    </ul><br/>
    In addition, the following chart types are not supported in the Framework only:
    <ul>
      <li>Pie‑Pie of Pie</li>
      <li>Stock‑Volume High‑Low‑Close</li>
      <li>Stock‑Volume Open‑High‑Low‑Close</li>
      <li>Treemap‑Treemap</li>
      <li>Sunburst‑Sunburst</li>
      <li>Box & Whisker</li>
    </ul>
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
Mathematical equations extending to multiple lines will be rendered in a single line and content exceeding the right margin will be clipped in the PDF.
</td>
</tr>
<tr>
<td>
SmartArt
</td>
<td>
Supported only in DOCX format document to PDF. Additional behavior is explained in the [SmartArt](#smartart) section below.
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
Drawing Canvas
</td>
<td>
Not supported programmatically. See the [Drawing Canvas](#drawing-canvas) section below for details.
</td>
</tr>
<tr>
<td>
Watermark
</td>
<td>
The first watermark of the Word document is applied to the entire converted PDF document when the Word document has multiple watermarks.
</td>
</tr>
<tr>
<td>
Multi-Column Texts
</td>
<td>
Multi-Column text positions are calculated dynamically when laying out the text. As a result, there may be some content position differences in the PDF document.
</td>
</tr>
<tr>
<td>
Footnote and Endnote
</td>
<td>
Number formats in Roman, Alphabets, and Arabic only supported.
</td>
</tr>
<tr>
<td>
TextBox
</td>
<td>
Linked text boxes are not supported.
</td>
</tr>
<tr>
<td>
Ink Elements
</td>
<td>
Supported only in DOCX format document to PDF. Additional behavior is explained in the [Ink](#ink) section below.
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
DocIO makes sensible decisions when laying out the text and its supported elements while generating the PDF documents. However, pagination is not guaranteed for all documents.
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
Pattern fills and 3D borders are not retained in the output PDF document.
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

**To resolve this**, save the document using DocIO first, then open the saved document in Microsoft Word and save it again. Finally, convert it to a PDF or image using DocIO. This regenerates the required SmartArt properties, ensuring accurate output.

### Drawing Canvas

Creating, editing, or cloning Drawing Canvas elements programmatically is not supported. These elements are not included in Find and Replace functionality or document comparison. Additionally, when opening Word 2003 or 2007 DOCX documents, the Drawing Canvas is treated as a group shape.

### Ink

During Word-to-PDF and Word-to-Image conversions, Syncfusion Word Library uses fallback images embedded in the document to preserve the Ink visual appearance. However, when Ink is created or modified using the Syncfusion Word Library, some Ink effects cannot be rendered accurately due to rendering engine limitations. Although the Ink stroke geometry is preserved, visual brush effects are lost.

**To resolve this**, save the created or modified document using DocIO first in DOCX format, then open the saved document in Microsoft Word and save it again. Finally, convert it to PDF or Image using DocIO. This process regenerates the required Ink fallback images, ensuring accurate visual output.

## Show Warning for Unsupported Elements

> **Prerequisites:** Refer to the [NuGet packages required for Word to PDF conversion](nuget-packages-required-word-to-pdf) and ensure the required assemblies are referenced in your project.

When converting a Word document to a PDF, the presence of unsupported elements in the input Word document can lead to preservation issues in the converted PDF. The .NET Word library (DocIO) provides the [Warning](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_Warning) API (and the equivalent [DocIORenderer.Settings.Warning](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIORenderer.DocIORendererSettings.html#Syncfusion_DocIORenderer_DocIORendererSettings_Warning) for cross-platform scenarios), which helps to detect and handle these unsupported elements during the conversion process. This API holds the information of unsupported elements found in the input Word document.

Users can display warning messages for the unsupported elements using the [WarningType](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WarningInfo.html#Syncfusion_DocIO_DLS_WarningInfo_WarningType) enumeration during Word to PDF conversion. Users can also set a flag to stop the conversion process when a warning is encountered.

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
                //If the IsCanceled property is true, the input document contained an unsupported element.
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
PdfDocument pdfDocument = converter.ConvertToPDF(wordDocument);
//If the IsCanceled property is true, the input document contained an unsupported element.
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
Dim pdfDocument As PdfDocument = converter.ConvertToPDF(wordDocument)

' If the IsCanceled property is true, the input document contained an unsupported element.
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

The following code demonstrates how to implement the [IWarning](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.IWarning.html) interface and display warning messages for all unsupported elements in the input document. Additionally, this code shows how to set a flag to stop Word to PDF conversion if an unsupported element is identified. The same `DocumentWarning` class is used by both the cross-platform (`DocIORenderer`) and Windows-specific (`DocToPDFConverter`) workflows.

The supported [WarningType](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WarningInfo.html#Syncfusion_DocIO_DLS_WarningInfo_WarningType) values include (but are not limited to): `SmartArt`, `Ink`, `Chart`, `Shape`, `TextBox`, `Watermark`, and `Equation`. Refer to the API reference for the complete list.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//The same class is used for the Windows-specific workflow.
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
