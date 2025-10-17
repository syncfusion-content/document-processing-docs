---
title: Split PDF Documents | Syncfusion
description:  Effortlessly Split large PDF documents into smaller ones, each comprising single or multiple pages, using the Syncfusion .NET PDF C# library.
platform: document-processing
control: PDF
documentation: UG
---

# Split PDF Documents using .NET PDF Library

The Syncfusion<sup>&reg;</sup> .NET PDF library supports [Splitting PDF file](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/split-pdf) into single-page or multiple-page PDF documents.

Check the following video to quickly get started with split PDF document in .NET using the PDF Library.
{% youtube "https://www.youtube.com/watch?v=GfPY3wwAKF4" %}

## Splitting a PDF file into individual pages

The Syncfusion<sup>&reg;</sup> .NET PDF library allows splitting the pages of an existing PDF document into multiple individual PDF documents using [Split](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Split_System_String_) method of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

Refer to the following code example to split a PDF into individual pages.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Pages/Splitting-PDF-file-into-individual-pages/.NET/Splitting-PDF-file-into-individual-pages/Program.cs" %} 

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set a output path
const string destinationFilePattern = "Output" + "{0}.pdf";
//Split the pages into separate documents
loadedDocument.Split(destinationFilePattern);
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set a output path
const string destinationFilePattern = "Output" + "{0}.pdf";
//Split the pages into separate documents
loadedDocument.Split(destinationFilePattern);
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Load the PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Set a output path
Const destinationFilePattern As String = "Output" + "{0}.pdf"
'Split the pages into separate documents
loadedDocument.Split(destinationFilePattern)
'Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Pages/Splitting-PDF-file-into-individual-pages/). 

## Split a range of pages into a separate PDF document

The Syncfusion<sup>&reg;</sup> .NET PDF library allows splitting a certain range of pages into a separate PDF document using the [SplitByRanges](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_SplitByRanges_System_String_System_Int32_0__0___) method of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. 

Refer to the following code example to split a range of pages.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Split%20PDFs/Split-a-Range-of-Pages/.NET/Split-a-Range-of-Pages/Program.cs" %} 

{% raw %}

using Syncfusion.Pdf.Parsing;

//Create the values.
int[,] values = new int[,] { { 2, 5 }, { 8, 10 } };
//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set a output path
const string destinationFilePattern = "Output" + "{0}.pdf";
//Split the pages into fixed number
loadedDocument.SplitByRanges(destinationFilePattern, values);
//close the document
loadedDocument.Close(true);

{% endraw %}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

{% raw %}

using Syncfusion.Pdf.Parsing;

//Create the values.
int[,] values = new int[,] { { 2, 5 }, { 8, 10 } };
//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set a output path
const string destinationFilePattern = "Output" + "{0}.pdf";
//Split the pages into fixed number
loadedDocument.SplitByRanges(destinationFilePattern, values);
//close the document
loadedDocument.Close(true);

{% endraw %}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
{% raw %}

Imports Syncfusion.Pdf.Parsing

'Create the values.
Dim values As Integer(,) = New Integer(,) {{2, 5},{8, 10}}
'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Set a output path
Const destinationFilePattern As String = "Output" + "{0}.pdf"
'Split the pages into fixed number.
loadedDocument.SplitByRanges(destinationFilePattern, values)
'Close the document.
loadedDocument.Close(True)
{% endraw %}
{% endhighlight %}

{% endtabs %}  

Download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Split%20PDFs/Split-a-Range-of-Pages).

## Split by a fixed number of pages into a PDF document

The Syncfusion<sup>&reg;</sup> .NET PDF library allows splitting by fixed number of pages of an existing PDF document using the [SplitByFixedNumber](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_SplitByFixedNumber_System_String_System_Int32_) method of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.
Refer to the following code example to split by a fixed number of pages.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Split%20PDFs/Split-by-FixedNumber/.NET/Split-by-FixedNumber/Program.cs" %} 

using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set a output path
const string destinationFilePattern = "Output" + "{0}.pdf";
//Split the pages into fixed number
loadedDocument.SplitByFixedNumber(destinationFilePattern, 4);

//close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set a output path
const string destinationFilePattern = "Output" + "{0}.pdf";
//Split the pages into fixed number
loadedDocument.SplitByFixedNumber(destinationFilePattern, 4);

//close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Set a output path
Const destinationFilePattern As String = "Output" + "{0}.pdf"
'Split the pages into fixed number
loadedDocument.SplitByFixedNumber(destinationFilePattern, 4)
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

Download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Split%20PDFs/Split-by-FixedNumber).

## Split a PDF document based on PDF bookmarks

A PDF document may contain bookmarks that indicate different sections.The Syncfusion<sup>&reg;</sup> .NET PDF library allows splitting a PDF document into sections using the [PdfBookmark](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfBookmark.html) class.

Refer to the following code example to split a PDF using bookmarks.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Split%20PDFs/Split-PDF-based-Bookmarks/.NET/Split-PDF-based-Bookmarks/Program.cs" %} 

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;

// Load the PDF document 
using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf")) 
{ 
    PdfBookmarkBase bookmarks = loadedDocument.Bookmarks; 
    // Iterate all the bookmarks and their page ranges 
    foreach (PdfBookmark bookmark in bookmarks) 
    { 
        if (bookmark.Destination != null) 
        { 
            if (bookmark.Destination.Page != null) 
            { 
                int endIndex = bookmark.Destination.PageIndex; 
                // Create a new PDF document
                using (PdfDocument document = new PdfDocument()) 
                { 
                    foreach (PdfLoadedBookmark childBookmark in bookmark) 
                    { 
                        endIndex = childBookmark.Destination.PageIndex; 
                    } 
                    // Import the pages to the new PDF document 
                    document.ImportPageRange(loadedDocument, bookmark.Destination.PageIndex, endIndex); 
                    //Save the document
                    document.Save("Output.pdf");
                } 
            } 
        } 
    } 
} 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf;

// Load the PDF document 
using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf"))
{
     PdfBookmarkBase bookmarks = loadedDocument.Bookmarks;
     // Iterate all the bookmarks and their page ranges 
     foreach (PdfBookmark bookmark in bookmarks)
    {
        if (bookmark.Destination != null)
        {
           if (bookmark.Destination.Page != null)
            {
              int endIndex = bookmark.Destination.PageIndex;
              // Create a new PDF document
              using (PdfDocument document = new PdfDocument())
                {
                    foreach (PdfLoadedBookmark childBookmark in bookmark)
                    {
                        endIndex = childBookmark.Destination.PageIndex;
                    }
                    // Import the pages to the new PDF document 
                    document.ImportPageRange(loadedDocument, bookmark.Destination.PageIndex, endIndex);
                    //Save the document
                    document.Save("Output.pdf");
                }
            }
        }
    }
} 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Interactive

Using loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
Dim bookmarks As PdfBookmarkBase = loadedDocument.Bookmarks
For Each bookmark As PdfBookmark In bookmarks
If bookmark.Destination IsNot Nothing Then
If bookmark.Destination.Page IsNot Nothing Then
Dim endIndex As Integer = bookmark.Destination.PageIndex
Using document As PdfDocument = New PdfDocument()
For Each childBookmark As PdfLoadedBookmark In bookmark
endIndex = childBookmark.Destination.PageIndex
Next
document.ImportPageRange(loadedDocument, bookmark.Destination.PageIndex, endIndex)
document.Save("Output.pdf")
End Using
End If
End If
Next
End Using

{% endhighlight %}

{% endtabs %}

Download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Split%20PDFs/Split-PDF-based-Bookmarks/.NET).

## Remove Unused Resources when Splitting PDF Documents

The Syncfusion<sup>&reg;</sup> PDF library enables the splitting of PDF documents and offers the capability to eliminate unused resources during the process. By enabling the `RemoveUnusedResources` property on the `PdfSplitOptions` class, any resources that are not in use will be deleted, thereby optimizing the final PDF document. The default value for this property is false.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Split%20PDFs/Remove-Unused-Resources-when-Splitting-PDF-Documents/.NET/Remove-Unused-Resources-when-Splitting-PDF-Documents/Program.cs" %} 

{% raw %}
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Create the values.
int[,] values = new int[,] { { 2, 5 }, { 8, 10 } };
//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set an output file pattern.
const string destinationFilePattern = "Output{0}.pdf";
//Create the split options object.
PdfSplitOptions splitOptions = new PdfSplitOptions();
//Enable the removal of unused resources property.
splitOptions.RemoveUnusedResources = true;
//Split the document by ranges.
loadedDocument.SplitByRanges(destinationFilePattern, values, splitOptions);
//Close the document.
loadedDocument.Close(true);

{% endraw %}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
{% raw %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Create the values.
int[,] values = new int[,] { { 2, 5 }, { 8, 10 } };
//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set an output file pattern.
const string destinationFilePattern = "Output{0}.pdf";
//Create the split options object.
PdfSplitOptions splitOptions = new PdfSplitOptions();
//Enable the removal of unused resources property.
splitOptions.RemoveUnusedResources = true;
//Split the document by ranges.
loadedDocument.SplitByRanges(destinationFilePattern, values, splitOptions);
//Close the document.
loadedDocument.Close(true);

{% endraw %}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
{% raw %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Create the values.
Dim values As Integer(,) = New Integer(,) {{2, 5},{8, 10}}
'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Set an output path.
Const destinationFilePattern As String = "Output" + "{0}.pdf"
'Create the split options object.
Dim splitOptions As New PdfSplitOptions()
'Enable the removal of unused resources property. 
splitOptions.RemoveUnusedResources = True
'Split the document by ranges.
loadedDocument.SplitByRanges(destinationFilePattern, values, splitOptions)

'Close the document.
loadedDocument.Close(True)
{% endraw %}
{% endhighlight %}

{% endtabs %}


Download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Split%20PDFs/Remove-Unused-Resources-when-Splitting-PDF-Documents/.NET).

## Import Tagged structure when Splitting PDF Documents

The Syncfusion<sup>&reg;</sup> PDF library enables the splitting of PDF documents and offers the capability to import tagged structure during the process. By enabling the `SplitTags` property on the `PdfSplitOptions` class, thereby tagged structure will be imported into the final PDF document. The default value for this property is false.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Split%20PDFs/Import-tagged-structure-when-splitting-PDF-documents/.NET/Import-tagged-structure-when-splitting-PDF-documents/Program.cs" %} 
{% raw %}
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Create the values.
int[,] values = new int[,] { { 0, 1 }, { 1, 2 } };
//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set an output file pattern.
const string destinationFilePattern = "Output{0}.pdf";
//Create the split options object.
PdfSplitOptions splitOptions = new PdfSplitOptions();
//Enable the Split tags property.
splitOptions.SplitTags = true;
//Split the document by ranges.
loadedDocument.SplitByRanges(destinationFilePattern, values, splitOptions);

//Close the document.
loadedDocument.Close(true);
{% endraw %}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
{% raw %}
using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

//Create the values.
int[,] values = new int[,] { { 0, 1 }, { 1, 2 } };
//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Set an output file pattern.
const string destinationFilePattern = "Output{0}.pdf";
//Create the split options object.
PdfSplitOptions splitOptions = new PdfSplitOptions();
//Enable the Split tags property.
splitOptions.SplitTags = true;
//Split the document by ranges.
loadedDocument.SplitByRanges(destinationFilePattern, values, splitOptions);

//Close the document.
loadedDocument.Close(true);
{% endraw %}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
{% raw %}
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing

'Create the values.
Dim values As Integer(,) = New Integer(,) {{0, 1},{1, 2}}
'Load the PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'Set an output path.
Const destinationFilePattern As String = "Output" + "{0}.pdf"
'Create the split options object.
Dim splitOptions As New PdfSplitOptions()
'Enable the Split tags property.
splitOptions.SplitTags = True
'Split the document by ranges.
loadedDocument.SplitByRanges(destinationFilePattern, values, splitOptions)

'Close the document.
loadedDocument.Close(True)
{% endraw %}
{% endhighlight %}

{% endtabs %}

Download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Split%20PDFs/Import-tagged-structure-when-splitting-PDF-documents/.NET).
