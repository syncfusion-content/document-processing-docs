---
title: Working with Text Extraction | Syncfusion
description: This section explains how to extract text and its bounds from a particular page or the entire PDF document.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Text Extraction

Essential<sup>&reg;</sup> PDF allows you to extract the text from a particular page or the entire PDF document. 

Check the following video to quickly get started with extracting text from a PDF document in .NET using the PDF Library.
{% youtube "https://www.youtube.com/watch?v=CB4tQC-LhUU" %}

## Working with basic text extraction

You can extract the text from a page using [ExtractText](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ExtractText) method in [PdfPageBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html) class.

The following code snippet explains how to extract the texts from a page.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Text%20Extraction/Extract-the-texts-from-a-page-in-the-PDF-document/.NET/Extract-the-texts-from-a-page-in-the-PDF-document/Program.cs" %} 

//Load the PDF document.
FileStream docStream = new FileStream("Sample.pdf", FileMode.Open, FileAccess.Read);
//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);
//Load the first page.
PdfPageBase page = loadedDocument.Pages[0];

//Extract text from first page.
string extractedText = page.ExtractText();
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
//Load the first page.
PdfPageBase page = loadedDocument.Pages[0];

//Extract text from first page.
string extractedText = page.ExtractText();
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF.
Dim loadedDocument As New PdfLoadedDocument(fileName)
'Load the first page.
Dim page As PdfPageBase = loadedDocument.Pages(0)

'Extract the text from first page.
Dim extractedText As String = page.ExtractText()
'close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-the-texts-from-a-page-in-the-PDF-document/). 

N> In this method, the text is extracted in the order in which it is written in the document stream and it may not be in the order in which it is viewed in the PDF reader application.

N> Extracting text from the PDF document pages will not load the entire document content into memory.

The below code illustrates how to extract the text from entire PDF document:

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Text%20Extraction/Extract-text-from-the-entire-PDF-document/.NET/Extract-text-from-the-entire-PDF-document/Program.cs" %} 

//Load the PDF document.
FileStream docStream = new FileStream("Sample.pdf", FileMode.Open, FileAccess.Read);
//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);
// Loading page collections
PdfLoadedPageCollection loadedPages = loadedDocument.Pages;

string extractedText = string.Empty;
// Extract text from existing PDF document pages
foreach (PdfLoadedPage loadedPage in loadedPages)
{
    extractedText += loadedPage.ExtractText();
}
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
// Loading page collections
PdfLoadedPageCollection loadedPages = loadedDocument.Pages;

string extractedText = string.Empty;
// Extract text from existing PDF document pages
foreach (PdfLoadedPage loadedPage in loadedPages)
{
extractedText += loadedPage.ExtractText();
}
// Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument(fileName)
' Loading page collections
Dim loadedPages As PdfLoadedPageCollection = loadedDocument.Pages

Dim extractedText As String = String.Empty
' Extract text from existing PDF document pages
For Each loadedPage As PdfLoadedPage In loadedPages
extractedText &= loadedPage.ExtractText()
Next loadedPage
' Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-text-from-the-entire-PDF-document/). 

## Working with layout based text extraction

You can extract text from the given PDF page based on its layout using [ExtractText(bool)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ExtractText_System_Boolean_) overload. In this method, the text is extracted in the layout as it is viewed in the reader application.

Please refer the following code snippet to extract the text with layout.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Text%20Extraction/Extract-the-text-with-layout-in-a-PDF-document/.NET/Extract-the-text-with-layout-in-a-PDF-document/Program.cs" %} 

//Load the PDF document.
FileStream docStream = new FileStream("Sample.pdf", FileMode.Open, FileAccess.Read);
//Load the PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);
//Load first page.
PdfPageBase page = loadedDocument.Pages[0];

//Extract text from first page.
string extractedTexts = page.ExtractText(true);
//Close the document.
loadedDocument.Close(true);

//Save the document into stream
MemoryStream stream = new MemoryStream();
loadedDocument.Save(stream);
//Closes the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
//Load first page.
PdfPageBase page = loadedDocument.Pages[0];

//Extract text from first page.
string extractedTexts = page.ExtractText(true);
//close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

//Load an existing PDF.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
//Load first page.
PdfPageBase page = loadedDocument.Pages[0];

//Extract text from first page.
string extractedTexts = page.ExtractText(true);
//close the document
loadedDocument.Close(true);

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-the-text-with-layout-in-a-PDF-document/). 

N> Layout based text extraction may take additional processing time when compared to the normal extraction mode.

## Text Extraction with Bounds

### Working with Lines

You can get the line and its properties that contains texts by using [TextLine](https://help.syncfusion.com/cr/xamarin/Syncfusion.Pdf.TextLine.html). Refer to the following code sample.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Text%20Extraction/Extract-each-lines-from-an-existing-PDF-document/.NET/Extract-each-lines-from-an-existing-PDF-document/Program.cs" %} 

//PDF supports getting the lines and its properties using TextLine only in WinForms, WPF and Xamarin platforms. Instead of TextLine, TextLineCollection can be used in ASP.NET Core.

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
// Get the first page of the loaded PDF document
PdfPageBase page = loadedDocument.Pages[0];
var lineCollection = new TextLineCollection();

// Extract text from the first page
string extractedText = page.ExtractText(out lineCollection);
// Gets each line from the collection
foreach (var line in lineCollection.TextLine)
{
    // Gets bounds of the line
    RectangleF lineBounds = line.Bounds;
    // Gets text in the line
    string text = line.Text;
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
// Get the first page of the loaded PDF document
PdfPageBase page = loadedDocument.Pages[0];
TextLines lineCollection = new TextLines();

// Extract text from the first page
string extractedText = page.ExtractText(out lineCollection);
// Gets specific line from the collection
TextLine line = lineCollection[0];
// Gets bounds of the line
RectangleF lineBounds = line.Bounds;
// Gets text in the line
string text = line.Text;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Load the existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument(fileName)
' Get the first page of the loaded PDF document
Dim page As PdfPageBase = loadedDocument.Pages(0)
Dim lineCollection As TextLines = New TextLines()

' Extract text from the first page
Dim extractedText As String = page.ExtractText(lineCollection)
' Gets specific line from the collection
Dim line As TextLine = lineCollection(0)
' Gets bounds of the line
Dim lineBounds As RectangleF = line.Bounds
' Gets text in the line
Dim text As String = line.Text

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-each-lines-from-an-existing-PDF-document). 

### Working with words
 
You can get the single word and its properties by using [TextWord](https://help.syncfusion.com/cr/xamarin/Syncfusion.Pdf.TextWord.html). Refer to the following code sample.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Text%20Extraction/Extract-collection-of-words-from-PDF-document/.NET/Extract-collection-of-words-from-PDF-document/Program.cs" %} 

//PDF supports getting the word and its properties using TextWord only in WinForms, WPF and Xamarin platforms. Instead of TextLine, TextLineCollection can be used in ASP.NET Core.

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
// Get the first page of the loaded PDF document
PdfPageBase page = loadedDocument.Pages[0];
var lineCollection = new TextLineCollection();

// Extract text from the first page
string extractedText = page.ExtractText(out lineCollection);
// Gets each line from the collection
foreach (var line in lineCollection.TextLine)
{   
    // Gets bounds of the line
    RectangleF lineBounds = line.Bounds;
    // Gets text in the line
    string text = line.Text;
    // Gets collection of the words in the line
    List<TextWord> textWordCollection = line.WordCollection;
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
// Get the first page of the loaded PDF document
PdfPageBase page = loadedDocument.Pages[0];
TextLines lineCollection = new TextLines();

// Extract text from the first page
string extractedText = page.ExtractText(out lineCollection);
// Gets specific line from the collection
TextLine line = lineCollection[0];
// Gets bounds of the line
RectangleF lineBounds = line.Bounds;
// Gets text in the line
string text = line.Text;
// Gets collection of the words in the line
List<TextWord> textWordCollection = line.WordCollection;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load the existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument(fileName)
' Get the first page of the loaded PDF document
Dim page As PdfPageBase = loadedDocument.Pages(0)
Dim lineCollection As TextLines = New TextLines()

' Extract text from the first page
Dim extractedText As String = page.ExtractText(lineCollection)
' Gets specific line from the collection
Dim line As TextLine = lineCollection(0)
' Gets bounds of the line
Dim lineBounds As RectangleF = line.Bounds
' Gets text in the line
Dim text As String = line.Text
' Gets collection of the words in the line
Dim textWordCollection As List(Of TextWord) = line.WordCollection

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Extract-collection-of-words-from-PDF-document/). 

### Working with characters

You can retrieve a single character and its properties, including bounds, font name, font size, and text color, using the instance. Refer to the code sample below.  

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Text%20Extraction/Get-text-glyph-details-from-extract-text/.NET/Get-text-glyph-details-from-extract-text/Program.cs" %} 

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(stream);
// Get the first page of the loaded PDF document
PdfPageBase page = loadedDocument.Pages[0];
TextLineCollection lineCollection = new TextLineCollection();

// Extract text from the first page
string extractedText = page.ExtractText(out lineCollection);
// Get a specific line from the collection
TextLine line = lineCollection.TextLine[0];
// Get the collection of words in the line
List<TextWord> textWordCollection = line.WordCollection;
// Get a word from the collection using an index
TextWord textWord = textWordCollection[0];
// Get Glyph details of the word
List<TextGlyph> textGlyphCollection = textWord.Glyphs;

// Get a character from the word
TextGlyph textGlyph = textGlyphCollection[0];
// Get bounds of the character
RectangleF glyphBounds = textGlyph.Bounds;
// Get font name of the character
string glyphFontName = textGlyph.FontName;
// Get font size of the character
float glyphFontSize = textGlyph.FontSize;
// Get font style of the character
FontStyle glyphFontStyle = textGlyph.FontStyle;
// Get the character in the word
char glyphText = textGlyph.Text;
// Get the color of the character
Color glyphColor = textGlyph.TextColor;

{% endhighlight %}


{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load the existing PDF document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument(stream)
' Get the first page of the loaded PDF document
Dim page As PdfPageBase = loadedDocument.Pages(0)
Dim lineCollection As New TextLineCollection()

' Extract text from the first page
Dim extractedText As String = page.ExtractText(lineCollection)
' Get a specific line from the collection
Dim line As TextLine = lineCollection.TextLine(0)
' Get a collection of words in the line
Dim textWordCollection As List(Of TextWord) = line.WordCollection
' Get a word from the collection using an index
Dim textWord As TextWord = textWordCollection(0)
' Get Glyph details of the word
Dim textGlyphCollection As List(Of TextGlyph) = textWord.Glyphs

' Get a character from the word
Dim textGlyph As TextGlyph = textGlyphCollection(0)
' Get bounds of the character
Dim glyphBounds As RectangleF = textGlyph.Bounds
' Get font name of the character
Dim glyphFontName As String = textGlyph.FontName
' Get font size of the character
Dim glyphFontSize As Single = textGlyph.FontSize
' Get font style of the character
Dim glyphFontStyle As FontStyle = textGlyph.FontStyle
' Get the character in the word
Dim glyphText As Char = textGlyph.Text
' Get the color of the character
Dim glyphColor As Color = textGlyph.TextColor
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Get-text-glyph-details-from-extract-text/).

## Find Text

The code example provided below demonstrates the utilization of the [FindText](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_String_System_Collections_Generic_Dictionary_System_Int32_System_Collections_Generic_List_System_Drawing_RectangleF____) method from the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class to locate text within a PDF document. This method facilitates the retrieval of both the page number and the rectangular coordinates of the identified text occurrences.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Text/Find-text-in-PDF-document/.NET/Find-text-in-PDF-document/Program.cs" %}

//Load an existing PDF document. 
FileStream docStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);
//Returns page number and rectangle positions of the text maches. 
Dictionary<int, List<Syncfusion.Drawing.RectangleF>> matchRects = new Dictionary<int, List<Syncfusion.Drawing.RectangleF>>();
loadedDocument.FindText("document", out matchRects);
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF document. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Returns page number and rectangle positions of the text maches.
Dictionary<int, List<System.Drawing.RectangleF>> matchRects = new Dictionary<int, List<System.Drawing.RectangleF>>();
loadedDocument.FindText("document", out matchRects);           
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document. 
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")
'Returns page number and rectangle positions of the text maches.
Dim matchRects As Dictionary(Of Integer, List(Of System.Drawing.RectangleF)) = New Dictionary(Of Integer, List(Of System.Drawing.RectangleF))()
loadedDocument.FindText("document", matchRects)
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text/Find-text-in-PDF-document).

**FindText Module API Reference**

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Return Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>{{'[FindText(List<string> searchItems, out TextSearchResultCollection searchResult)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_Collections_Generic_List_System_String__Syncfusion_Pdf_Parsing_TextSearchResultCollection__)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a list of text strings (`searchItems`) across the entire document, storing the results in `searchResult`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(List<string> searchItems, out TextSearchResultCollection searchResult, bool enableMultiThreading)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_Collections_Generic_List_System_String__Syncfusion_Pdf_Parsing_TextSearchResultCollection__System_Boolean_)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a list of text strings across the entire document with multi-threading enabled for faster results, storing the results in `searchResult`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(List<string> searchItems, int pageIndex, out List<MatchedItem> searchResults)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_Collections_Generic_List_System_String__System_Int32_System_Collections_Generic_List_Syncfusion_Pdf_Parsing_MatchedItem___)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a list of text strings on a specific page (`pageIndex`), returning matching items in `searchResults`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(List<string> searchItems, int pageIndex, TextSearchOptions textSearchOption, out List<MatchedItem> searchResults)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_Collections_Generic_List_System_String__System_Int32_TextSearchOptions_System_Collections_Generic_List_Syncfusion_Pdf_Parsing_MatchedItem___)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a list of text strings on a specific page with customizable search options (`textSearchOption`), returning matching items in `searchResults`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(List<string> searchItems, TextSearchOptions textSearchOption, out TextSearchResultCollection searchResult)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_Collections_Generic_List_System_String__TextSearchOptions_Syncfusion_Pdf_Parsing_TextSearchResultCollection__)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a list of text strings across the entire document with customizable search options (`textSearchOption`), storing the results in `searchResult`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(List<string> searchItems, TextSearchOptions textSearchOption, out TextSearchResultCollection searchResult, bool enableMultiThreading)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_Collections_Generic_List_System_String__TextSearchOptions_Syncfusion_Pdf_Parsing_TextSearchResultCollection__System_Boolean_)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a list of text strings across the entire document with search options and multi-threading enabled, storing results in `searchResult`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(List<TextSearchItem> searchItems, out TextSearchResultCollection searchResult)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_Collections_Generic_List_TextSearchItem__Syncfusion_Pdf_Parsing_TextSearchResultCollection__)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a list of `TextSearchItem` objects across the entire document, returning results in `searchResult`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(List<TextSearchItem> searchItems, out TextSearchResultCollection searchResult, bool enableMultiThreading)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_Collections_Generic_List_TextSearchItem__Syncfusion_Pdf_Parsing_TextSearchResultCollection__System_Boolean_)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a list of `TextSearchItem` objects across the entire document with multi-threading enabled, storing results in `searchResult`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(List<TextSearchItem> searchItems, int pageIndex, out List<MatchedItem> searchResults)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_Collections_Generic_List_TextSearchItem__System_Int32_System_Collections_Generic_List_Syncfusion_Pdf_Parsing_MatchedItem___)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a list of `TextSearchItem` objects on a specific page (`pageIndex`), returning matching items in `searchResults`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(string text, out Dictionary<int, List<RectangleF>> matchRect)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_String_System_Collections_Generic_Dictionary_System_Int32_System_Collections_Generic_List_System_Drawing_RectangleF____)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a single text string across the entire document, returning the match locations (rectangles) for each page in `matchRect`.</td>
    </tr>
    <tr>
      <td><b>{{'[FindText(string text, int index, out List<RectangleF> matchRect)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_FindText_System_String_System_Int32_System_Collections_Generic_List_System_Drawing_RectangleF___)'| markdownify }}</b></td>
      <td>bool</td>
      <td>Searches for a single text string on a specific page (`index`), returning the match locations (rectangles) in `matchRect`.</td>
    </tr>
  </tbody>
</table>
