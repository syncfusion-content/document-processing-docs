---
title: Convert Word to Text document and vice versa in C# | Syncfusion
description: Learn how to convert Word document to text file and vice versa  using the .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word to Text Document and Vice Versa

The Essential<sup>&reg;</sup> DocIO converts a Word document to a Text file and vice versa without Microsoft Word or interop dependencies.

To quickly start converting a Word document to Text and vice versa, please check out this video:
{% youtube "https://www.youtube.com/watch?v=sK71TfWEtk8" %}

## Convert Word to Text

The following code example shows how to convert a Word document into a text file.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

N> The output text file contains only the textual content of the Word document. Document formatting such as bold, italics, lists, tables, and images is not preserved in the text file. For full-fidelity conversion, consider Word-to-PDF or Word-to-DOCX.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Text-file-conversion/Convert-Word-to-text-file/.NET/Convert-Word-to-text-file/Program.cs" %}
//Opens an existing document from the file system through the constructor of the WordDocument class
using (FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
{
    //Saves the Word document to a MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Txt);
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a template document
WordDocument document = new WordDocument("Template.docx");
//Saves the document as a text file
document.Save("WordToText.txt", FormatType.Txt);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a Word document
Dim document As New WordDocument("Template.docx")
'Saves the document as a text file
document.Save("WordToText.txt", FormatType.Txt)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Text-file-conversion/Convert-Word-to-text-file).

## Convert Text to Word

The following code example shows how to convert a Text file into a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Text-file-conversion/Convert-text-file-to-Word/.NET/Convert-text-file-to-Word/Program.cs" %}
FileStream fileStreamPath = new FileStream("Template.txt", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
//Opens an existing document from file system through constructor of WordDocument class
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Txt))
{
    //Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Docx);
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a text file
WordDocument document = new WordDocument("Template.txt");
//Saves the document as a Word document
document.Save("TextToWord.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a text file
Dim document As New WordDocument("Template.txt")
'Saves the document as a Word document
document.Save("TextToWord.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Text-file-conversion/Convert-text-file-to-Word).

## Retrieve Word Document as Plain Text

The following code example shows how to retrieve the textual contents of a Word document and place them into a new Word document. This is useful when you need to strip out section breaks, page breaks, and other non-textual elements while keeping the content editable.

N> `document.GetText()` returns the document's content as a `string` that may include section breaks, paragraph marks, and other control characters. If you only need the visible text, iterate the body items (sections, paragraphs, tables) and concatenate the inner text instead.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Text-file-conversion/Retrieve-Word-document-as-plain-text/.NET/Retrieve-Word-document-as-plain-text/Program.cs" %}
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
//Opens an existing document from file system through constructor of WordDocument class
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
{
    //Gets the document text
    string text = document.GetText();
    //Creates a new Word document
    WordDocument newdocument = new WordDocument();
    //Adds a new section
    IWSection section = newdocument.AddSection();
    //Adds a new paragraph
    IWParagraph paragraph = section.AddParagraph();
    //Appends the text to the paragraph
    paragraph.AppendText(text);
    //Saves the new Word document to a MemoryStream
    MemoryStream stream = new MemoryStream();
    newdocument.Save(stream, FormatType.Docx);
    //Closes the Word document
    document.Close();
    newdocument.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a template document
WordDocument document = new WordDocument("Template.docx");
//Gets the document text
string text = document.GetText();
//Creates a new Word document
WordDocument newdocument = new WordDocument();
//Adds a new section
IWSection section = newdocument.AddSection();
//Adds a new paragraph
IWParagraph paragraph = section.AddParagraph();
//Appends the text to the paragraph
paragraph.AppendText(text);
//Saves and closes the document
newdocument.Save("Sample.docx", FormatType.Docx);
newdocument.Close();
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a template document
Dim document As New WordDocument("Template.docx")
'Gets the document text
Dim text As String = document.GetText()
'Creates a new Word document
Dim newdocument As New WordDocument()
'Adds a new section
Dim section As IWSection = newdocument.AddSection()
'Adds a new paragraph
Dim paragraph As IWParagraph = section.AddParagraph()
'Appends the text to the paragraph
paragraph.AppendText(text)
'Saves and closes the document
newdocument.Save("Sample.docx", FormatType.Docx)
newdocument.Close()
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Text-file-conversion/Retrieve-Word-document-as-plain-text).

## See Also

* [How to convert text file to RTF in .NET?](https://support.syncfusion.com/kb/article/22691/how-to-convert-text-file-to-rtf-in-net)