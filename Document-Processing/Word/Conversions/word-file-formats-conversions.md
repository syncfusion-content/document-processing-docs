---
title: Word file format conversions in C# | DocIO | Syncfusion
description: Learn about the supported Word file format conversions such a Word open XML formats, Word processing XML, and Word binary in the .NET Word library.
platform: document-processing
control: DocIO
documentation: UG
---

# Word File Formats in Essential<sup>&reg;</sup> DocIO

[Microsoft Word](https://learn.microsoft.com/en-us/office/compatibility/office-file-format-reference#file-formats-that-are-supported-in-word) supports multiple file formats that differ in structure, capabilities, and intended usage. Essential<sup>&reg;</sup> DocIO provides read and write support for modern XML-based formats (DOCX, DOTX, DOCM, DOTM), Word Processing XML formats (WordML), and binary Word documents (DOC, DOT), as well as [HTML](https://help.syncfusion.com/document-processing/word/word-library/net/html), [RTF](https://help.syncfusion.com/document-processing/word/word-library/net/rtf), and [Markdown](https://help.syncfusion.com/document-processing/word/word-library/net/convert-word-document-to-markdown-in-csharp) formats.

This documentation categorizes the major Word file formats into:

1. Word Open XML formats (2007 & later)
2. Word Processing XML (.xml)
3. Word Binary (97-2003) format (classic)

## Word Open XML formats (2007 & later)

[Word Open XML formats](https://support.microsoft.com/en-us/office/open-xml-formats-and-file-name-extensions-5200d93c-3449-4380-8e11-31ef14555b18) (DOCX, DOTX, DOCM, DOTM) are ZIP-compressed file packages that contain multiple XML parts representing document content, styles, settings, and relationships. These documents store their content using WordprocessingML, an XML-based markup language defined by the Office Open XML standard.

Essential<sup>&reg;</sup> DocIO supports Word Open XML documents compatible with:

* Microsoft Word 2007
* Microsoft Word 2010
* Microsoft Word 2013
* Microsoft Word 2016
* Microsoft Word 2019

### Word Document (DOCX)

DOCX is the default XML-based file format introduced in Microsoft Word 2007 and is commonly used for general document processing scenarios.

Click [here](https://help.syncfusion.com/document-processing/word/word-library/net/getting-started#creating-a-new-word-document-with-few-lines-of-code) to learn how to create a new Word document with a few lines of code.

### Word Template (DOTX)

DOTX is a Word document template. Templates are useful when you regularly produce similar types of documents, as they let you start from a ready-made structure instead of building the document from scratch each time.

The following code example illustrates how to create the Word document template with a few lines of code.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-file-formats/Create-Dotx-format-Word-document/.NET/Create-Dotx-format-Word-document/Program.cs" %}
//Creates a new instance of WordDocument (Empty Word Document)
using (WordDocument document = new WordDocument())
{
    //Adds a section and a paragraph to the document
    document.EnsureMinimal();
    //Appends text to the last paragraph of the document
    document.LastParagraph.AppendText("Hello World");
    //Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Dotx);
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an instance of WordDocument Instance (Empty Word Document)
WordDocument document = new WordDocument();
//Adds a section and a paragraph to the document
document.EnsureMinimal();
//Appends text to the last paragraph of the document
document.LastParagraph.AppendText("Hello World");
//Saves and closes the Word document
document.Save("Sample.dotx");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an instance of WordDocument Instance (Empty Word Document)
Dim document As New WordDocument()
'Adds a section and a paragraph to the document
document.EnsureMinimal()
'Appends text to the last paragraph of the document
document.LastParagraph.AppendText("Hello World")
'Saves and closes the Word document
document.Save("Sample.dotx")
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-file-formats/Create-Dotx-format-Word-document).

### Macros (DOCM, DOTM)

DOCM and DOTM are macro-enabled Word Open XML formats. DOCM represents a macro-enabled Word document, while DOTM represents a macro-enabled Word template. These formats are structurally similar to DOCX and DOTX, but additionally contain embedded VBA macro code.

Essential<sup>&reg;</sup> DocIO allows macro-enabled Word documents to be loaded and saved with macros preserved. In addition, macros can be removed explicitly by using the [RemoveMacros](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_RemoveMacros) method when required.

For further information, click [here](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-macros).

## Word Processing XML (.xml)

Word Processing XML (WordML) is a single-file XML format introduced in Microsoft Word 2003 to represent Word document content in XML.

The Essential<sup>&reg;</sup> DocIO supports converting the Word document into Word Processing XML document and vice versa.

N> 1. Importing and exporting Word Processing 2007 XML documents is supported.
N> 2. Exporting Word Processing 2003 XML documents is not supported. However, you can import Word Processing 2003 XML documents and export them to other supported file formats.
N> 3. Custom XML elements present in Word Processing 2003 XML documents are removed automatically during import, similar to the behavior of recent versions of Microsoft Word. Custom XML elements are a deprecated feature in newer Word versions.

### Word to WordML 

The following code example illustrates how to convert a Word document into a Word Processing XML document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-file-formats/Convert-Word-to-WordML/.NET/Convert-Word-to-WordML/Program.cs" %}
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
//Opens an existing document from file system through constructor of WordDocument class
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
{
    //Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.WordML);
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document
WordDocument document = new WordDocument("Template.docx");
//Saves the document as Word Processing XML document
document.Save("WordToWordML.xml", FormatType.WordML);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document 
Dim document As New WordDocument("Template.docx")
'Saves the document as Word Processing XML document
document.Save("WordToWordML.xml", FormatType.WordML)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-file-formats/Convert-Word-to-WordML).

### WordML to Word

The following code example illustrates how to convert a Word Processing XML document into a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-file-formats/Convert-WordML-to-Word/.NET/Convert-WordML-to-Word/Program.cs" %}
FileStream fileStreamPath = new FileStream("Template.xml", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
//Opens an existing document from file system through constructor of WordDocument class
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.WordML))
{
    //Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Docx);
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document 
WordDocument document = new WordDocument("Template.xml");
//Saves the Word Processing XML document as docx
document.Save("WordMLToWord.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document 
Dim document As New WordDocument("Template.xml")
'Saves the Word Processing XML document as docx 
document.Save("WordMLToWord.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-file-formats/Convert-WordML-to-Word).

### Supported elements in Word Processing XML conversion

Word Processing XML conversion supports all common Word document elements such as paragraphs, text, tables, images, and other standard formatting elements. The following table highlights the support status of specific elements that may have limitations or behavior differences during conversion.

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Word to WordML</th>
      <th>Word Processing 2007 XML document to Word</th>
      <th>Word Processing 2007 XML document to WordML</th>
      <th>Word Processing 2003 XML document to Word / WordML</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Custom Shapes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
    </tr>
    <tr>
      <td>Embedded fonts<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>No<br/><br/></td>
    </tr>
    <tr>
      <td>Equation<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>No<br/><br/></td>
    </tr>
    <tr>
      <td>SmartArt<br/><br/></td>
      <td>No<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>No<br/><br/></td>
      <td>No<br/><br/></td>
    </tr>
    <tr>
      <td>WordArt<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>No<br/><br/></td>
    </tr>
    <tr>
      <td>Form Fields<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>No<br/><br/></td>
    </tr>
    <tr>
      <td>Ole Object<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>Yes<br/><br/></td>
      <td>No<br/><br/></td>
    </tr>
  </tbody>
</table>

## Word Binary (97-2003) format

DOC is the binary file format used in Word 97–Word 2003 and is one of the classic file formats for Word processing documents. It is a proprietary binary format developed by Microsoft that is supported across Microsoft Word versions and maintained mainly for backward compatibility.

The Essential<sup>&reg;</sup> DocIO library supports importing and exporting DOC format documents.

The following code example illustrates how to create a binary format document with a few lines of code.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-file-formats/Create-Doc-format-Word-document/.NET/Create-Doc-format-Word-document/Program.cs" %}
//Creates a new instance of WordDocument (Empty Word Document)
using (WordDocument document = new WordDocument())
{
    //Adds a section and a paragraph to the document
    document.EnsureMinimal();
    //Appends text to the last paragraph of the document
    document.LastParagraph.AppendText("Hello World");
    MemoryStream stream = new MemoryStream();
    //Saves and closes the Word document to MemoryStream
    document.Save(stream, FormatType.Doc);
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an instance of WordDocument Instance (Empty Word Document)
WordDocument document = new WordDocument();
//Adds a section and a paragraph to the document
document.EnsureMinimal();
//Appends text to the last paragraph of the document
document.LastParagraph.AppendText("Hello World");
//Saves and closes the Word document
document.Save("BinaryDocument.doc");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an instance of WordDocument Instance (Empty Word Document)
Dim document As New WordDocument()
'Adds a section and a paragraph to the document
document.EnsureMinimal()
'Appends text to the last paragraph of the document
document.LastParagraph.AppendText("Hello World")
'Saves and closes the Word document
document.Save("BinaryDocument.doc ")
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-file-formats/Create-Doc-format-Word-document).

### DOC to DOCX

The following code example illustrates how to convert a DOC file into the DOCX file format using DocIO.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-file-formats/Convert-Doc-to-Docx/.NET/Convert-Doc-to-Docx/Program.cs" %}
FileStream fileStreamPath = new FileStream("Template.doc", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
//Opens an existing document from file system through constructor of WordDocument class
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Doc))
{
    //Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Docx);
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing document
WordDocument document = new WordDocument("Template.doc", FormatType.Doc);
//Saves the binary document(.doc) as Word Document(.docx) file
document.Save("DocToWord.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing document
Dim document As New WordDocument("Template.doc", FormatType.Doc)
'Saves the binary document(.doc) as Word Document(.docx) file
document.Save("DocToWord.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-file-formats/Convert-Doc-to-Docx).

### DOCX to DOC

The following code example illustrates how to convert a DOCX file into the DOC file format using DocIO.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-file-formats/Convert-Docx-to-Doc/.NET/Convert-Docx-to-Doc/Program.cs" %}
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
//Opens an existing document from file system through constructor of WordDocument class
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
{
    //Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Doc);
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Saves the Word document(.docx) as binary document(.doc) file
document.Save("DocxToBinary.doc", FormatType.Doc);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Saves the Word document(.docx) as binary document(.doc) file 
document.Save("DocxToBinary.doc", FormatType.Doc)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-file-formats/Convert-Docx-to-Doc).

### Word 97-2003 Template (DOT)

DOT is the binary template file format used in Word 97–Word 2003 and is used to create new documents from an existing template.

The following code example illustrates how to create a binary format document template with a few lines of code.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-file-formats/Create-Dot-format-Word-document/.NET/Create-Dot-format-Word-document/Program.cs" %}
//Creates a new instance of WordDocument (Empty Word Document)
using (WordDocument document = new WordDocument())
{
    //Adds a section and a paragraph to the document
    document.EnsureMinimal();
    //Appends text to the last paragraph of the document
    document.LastParagraph.AppendText("Hello World");
    //Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Dot);
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an instance of WordDocument Instance (Empty Word Document)
WordDocument document = new WordDocument();
//Adds a section and a paragraph to the document
document.EnsureMinimal();
//Appends text to the last paragraph of the document
document.LastParagraph.AppendText("Hello World");
//Saves and closes the Word document
document.Save("Sample.dot");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an instance of WordDocument Instance (Empty Word Document)
Dim document As New WordDocument()
'Adds a section and a paragraph to the document
document.EnsureMinimal()
'Appends text to the last paragraph of the document
document.LastParagraph.AppendText("Hello World")
'Saves and closes the Word document
document.Save("Sample.dot")
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-file-formats/Create-Dot-format-Word-document).

### Saving Word document with compatibility

#### Maintain existing compatibility

The following code example illustrates how to save a Word document with the same Word version compatibility.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-file-formats/Save-Word-with-compatibility/.NET/Save-Word-with-compatibility/Program.cs" %}
//Creates an empty WordDocument instance
using (WordDocument document = new WordDocument())
{
    //Loads or opens an existing Word document from stream
    FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
    //Loads or opens an existing Word document through Open method of WordDocument class 
    document.Open(fileStreamPath, FormatType.Automatic);
    //Enables flag to maintain compatibility with same Word version
    document.SaveOptions.MaintainCompatibilityMode = true;
    //Creates an instance of memory stream
    MemoryStream stream = new MemoryStream();
    //Saves the document to stream
    document.Save(stream, FormatType.Docx);
    //Closes the document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Word document
WordDocument document = new WordDocument("Template.docx");
//Enables flag to maintain compatibility with same Word version
document.SaveOptions.MaintainCompatibilityMode = true;
//Saves and closes the Word document
document.Save("Sample.docx");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Word document
Dim document As WordDocument = New WordDocument("Template.docx")
'Enables flag to maintain compatibility with same Word version
document.SaveOptions.MaintainCompatibilityMode = true
'Saves and closes the Word document
document.Save("Sample.docx")
document.Close
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-file-formats/Save-Word-with-compatibility).

#### Save Word in old compatibility

The following code example illustrates how to save a Word document in old compatibility using DocIO.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-file-formats/Save-Word-in-old-compatibility/.NET/Save-Word-in-old-compatibility/Program.cs" %}

//Create an instance of WordDocument.
using (WordDocument document = new WordDocument())
{
    document.EnsureMinimal();
    //Appends paragraph.
    document.LastParagraph.AppendText("Hello World");
    //Sets the compatibility mode to Word 2007.
    document.Settings.CompatibilityMode = CompatibilityMode.Word2007;
    //Creates an instance of memory stream
    MemoryStream stream = new MemoryStream();
    //Saves the document to stream
    document.Save(stream, FormatType.Docx);
    //Closes the document
    document.Close();
} 

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

//Create an instance of WordDocument.
using(WordDocument document = new WordDocument())
{
    document.EnsureMinimal();
    //Appends paragraph.
    document.LastParagraph.AppendText("Hello World");
    //Sets the compatibility mode to Word 2007.
    document.Settings.CompatibilityMode = CompatibilityMode.Word2007;
    //Saves and closes the Word document
    document.Save("Sample.docx");
    document.Close();
}
            
{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Create an instance of WordDocument.
Using document As New WordDocument()
    document.EnsureMinimal()
    'Appends paragraph.
    document.LastParagraph.AppendText("Hello World")
    'Sets the compatibility mode to Word 2007.
    document.Settings.CompatibilityMode = CompatibilityMode.Word2007
    'Saves and closes the Word document
    document.Save("Sample.docx")
    document.Close()
End Using

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-file-formats/Save-Word-in-old-compatibility/.NET).

### Open a Word (*.doc) document containing incremental save information

Essential<sup>&reg;</sup> DocIO process the content that are preserved in the last complete save operation alone from a Word (.doc) document and it doesn't process the incremental save information. Hence it throws "Complex format is not supported" exception when attempting to open a Word (.doc) document containing incremental save information.

You can open the Word (*.doc) documents containing incremental save information without exception by setting [SkipIncrementalSaveValidation](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.Settings.html#Syncfusion_DocIO_DLS_Settings_SkipIncrementalSaveValidation) property of Settings class as true. Whereas the recent changes saved as incremental save information using older Microsoft Word application can't be preserved.

The following code example illustrates how to open a Word (*.doc) document containing incremental save information without exception.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creates a new instance of WordDocument (Empty Word Document)
using (WordDocument document = new WordDocument())
{
    //Loads or opens an existing Word document from stream
    FileStream fileStreamPath = new FileStream("Template.doc", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
    //Sets flag to skip old file format exception while opening document
    document.Settings.SkipIncrementalSaveValidation = true;
    //Loads or opens an existing Word document through Open method of WordDocument class 
    document.Open(fileStreamPath, FormatType.Automatic);
    MemoryStream stream = new MemoryStream();
    //Saves and closes the destination document to MemoryStream
    document.Save(stream, FormatType.Doc);
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an empty Word document instance
WordDocument document = new WordDocument();
//Sets flag to skip old file format exception while opening document
document.Settings.SkipIncrementalSaveValidation = true;
//Loads or opens an existing incrementally saved DOC format through Open method of WordDocument class
document.Open(fileName);
//Saves the Word Document
document.Save("Sample.doc", FormatType.Doc);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an empty Word document instance
Dim document As New WordDocument()
'Sets flag to skip old file format exception while opening document
document.Settings.SkipIncrementalSaveValidation = True
'Loads or opens an existing incrementally saved DOC format through Open method of WordDocument class
document.Open(fileName)
'Saves the Word Document
document.Save("Sample.doc", FormatType.Doc)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

## Online Demo

* Explore how to convert the Word document to Word processing XML using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/wordtowordml#/tailwind).
* See how to convert the Word processing XML to Word document using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/wordmltoword#/tailwind).
