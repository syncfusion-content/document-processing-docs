---
title: Working with Text Extraction | Syncfusion
description: This section explains how to extract text and its bounds from a particular page or the entire PDF document.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Text Extraction

Essential PDF allows you to extract the text from a particular page or the entire PDF document. 

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

#### Get the word bounds for each word in a line
 
You can get the word bounds for each word in a line using the [TextLine](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.TextLine.html) [WordCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.TextLine.html#Syncfusion_Pdf_TextLine_WordCollection) property.Refer to the following code sample.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
int iPage = 0;

// Get the page
PdfPageBase pdfPage = loadedDocument.Pages[iPage];
TextLines listPageLines = new TextLines();
string lineContent;
string wordContent;
RectangleF lineBounds;
RectangleF wordBounds;

// Get all the text from this page
string extracted_text = pdfPage.ExtractText(out listPageLines);

foreach (TextLine textLine in listPageLines)
{
    lineBounds = textLine.Bounds;
    lineContent = textLine.Text;
    
    // Get the word bounds for each word in a line
    foreach (TextWord textWord in textLine.WordCollection)
    {
        wordContent = textWord.Text;
        wordBounds = textWord.Bounds;
    }
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
string lineText = line.Text;
// Gets collection of the words in the line
List<TextWord> textWordCollection = line.WordCollection;
//Gets word from the collection using index
TextWord textWord = textWordCollection[0];
// Gets bounds of the word
RectangleF wordBounds = textWord.Bounds;
// Gets text in the word
string wordText = textWord.Text;

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
Dim lineText As String = line.Text
' Gets collection of the words in the line
Dim textWordCollection As List(Of TextWord) = line.WordCollection
' Get a word from the collection using an index 
Dim textWord As TextWord = textWordCollection(0) 
' Gets bounds of the word
Dim wordBounds As RectangleF = textWord.Bounds
' Gets text in the word
Dim wordText As String =textWord .Text

{% endhighlight %}

{% endtabs %}

### Working with characters

You can retrieve a single character and its properties, including bounds, font name, font size, and text color, using the instance. Refer to the code sample below.  

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Text%20Extraction/Get-text-glyph-details-from-extract-text/.NET/Get-text-glyph-details-from-extract-text/Program.cs" %} 

//Load the existing PDF document
PdfLoadedDocument m_loadedDocument = new PdfLoadedDocument(stream);
//Get the first page of the loaded PDF document
PdfPageBase page = m_loadedDocument.Pages[0];
TextLineCollection lineCollection = new TextLineCollection();

//Extract text from the first page
string m_extractedText = page.ExtractText(out lineCollection);
//Gets specific line from the collection
TextLine line = lineCollection.TextLine[0];
//Gets collection of the words in the line
List<TextWord> textWordCollection = line.WordCollection;
//Gets word from the collection using index
TextWord textWord = textWordCollection[0];
// Gets Glyph details of the word
List<TextGlyph> textGlyphCollection = textWord.Glyphs;

//Gets character of the word
TextGlyph textGlyph = textGlyphCollection[0];
//Gets bounds of the character
RectangleF glyphBounds = textGlyph.Bounds;
//Gets font name of the character
string GlyphFontName = textGlyph.FontName;
//Gets font size of the character
float GlyphFontSize = textGlyph.FontSize;
//Gets font style of the character
FontStyle GlyphFontStyle = textGlyph.FontStyle;
//Gets character in the word
char GlyphText = textGlyph.Text;
//Gets the color of the character 
Color GlyphColor = textGlyph.TextColor; 

{% endhighlight %}


{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load the existing PDF document 
Dim m_loadedDocument As PdfLoadedDocument = New PdfLoadedDocument(stream) 
' Get the first page of the loaded PDF document 
Dim page As PdfPageBase = m_loadedDocument.Pages(0) 
Dim lineCollection As New TextLineCollection() 

' Extract text from the first page 
Dim m_extractedText As String = page.ExtractText(lineCollection) 
' Get a specific line from the collection 
Dim line As TextLine = lineCollection.TextLine(0) 
' Get a collection of the words in the line 
Dim textWordCollection As List(Of TextWord) = line.WordCollection 
' Get a word from the collection using an index 
Dim textWord As TextWord = textWordCollection(0) 
' Get Glyph details of the word 
Dim textGlyphCollection As List(Of TextGlyph) = textWord.Glyphs 

' Get a character of the word 
Dim textGlyph As TextGlyph = textGlyphCollection(0) 
' Get bounds of the character 
Dim glyphBounds As RectangleF = textGlyph.Bounds 
' Get font name of the character 
Dim GlyphFontName As String = textGlyph.FontName 
' Get font size of the character 
Dim GlyphFontSize As Single = textGlyph.FontSize 
' Get font style of the character 
Dim GlyphFontStyle As FontStyle = textGlyph.FontStyle 
' Get the character in the word 
Dim GlyphText As Char = textGlyph.Text 
' Get the color of the character 
Dim GlyphColor As Color = textGlyph.TextColor 

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Text%20Extraction/Get-text-glyph-details-from-extract-text/).
