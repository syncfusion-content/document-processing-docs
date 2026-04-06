---
title: RTF conversions in C# | DocIO | Syncfusion
description: Learn how to convert Word document to RTF and vice versa using the .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# RTF Conversions in Word Library

## RTF
The [Rich Text Format (RTF)](https://en.wikipedia.org/wiki/Rich_Text_Format) is one of the document formats supported by Microsoft Word and many other Word processing applications. RTF is human readable file format invented for interchanging formatted text between applications. It is an optional format for Word that retains most formatting and all content of the original document.

Most of the Word processors (including Microsoft Word) uses the XML-based file formats, Microsoft has discontinued enhancements to the RTF and still supporting it. The last version was 1.9.1 released in 2008.

To quickly start converting a Word document to RTF and vice versa, please check out this video:
{% youtube "https://www.youtube.com/watch?v=U5JRWJ42U3s" %}

## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert the RTF document into Word document and vice versa using the .NET Word Library (DocIO).

* [RTF conversions assemblies](https://help.syncfusion.com/document-processing/word/word-library/net/assemblies-required)
* [RTF conversions NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required)

The Essential<sup>&reg;</sup> DocIO converts the RTF document into Word document and vice versa. The following code shows how to convert RTF document into Word document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/RTF-conversions/Convert-RTF-to-Word/.NET/Convert-RTF-to-Word/Program.cs" %}
FileStream fileStreamPath = new FileStream("Input.rtf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
//Opens an existing document from file system through constructor of WordDocument class
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Rtf))
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
WordDocument document = new WordDocument("Input.rtf", FormatType.Rtf);
//Saves the Word document as RTF file
document.Save("RtfToWord.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing document
Dim document As New WordDocument("Input.rtf", FormatType.Rtf)
'Saves the Word document as RTF file
document.Save("RtfToWord.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/RTF-conversions/Convert-RTF-to-Word).

The following code example shows how to convert Word document into RTF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/RTF-conversions/Convert-Word-to-RTF/.NET/Convert-Word-to-RTF/Program.cs" %}
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
//Opens an existing document from file system through constructor of WordDocument class
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
{
    //Saves the Word document to MemoryStream
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Rtf);
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Saves the Word document as RTF file
document.Save("WordToRtf.rtf", FormatType.Rtf);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Saves the Word document as RTF file
document.Save("WordToRtf.rtf", FormatType.Rtf)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/RTF-conversions/Convert-Word-to-RTF).

## Supported and Unsupported features
The supported and unsupported features of DocIO based on file formats can be referred [here](https://help.syncfusion.com/document-processing/word/word-library/net/supported-and-unsupported-features)

## Online Demo

* Explore how to convert the RTF file to Word document using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/rtftodoc#/tailwind).
* See how to convert a Word document to an RTF file using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/wordtortf#/tailwind).

## See Also

* [How to copy the format of the text from an RTF string and apply it to text in DOCX format document?](https://support.syncfusion.com/kb/article/17903/how-to-copy-the-format-of-the-text-from-an-rtf-string-and-apply-it-to-text-in-docx-format-document)
* [How to Convert RTF to HTML and Vice Versa using .NET Core DocIO?](https://support.syncfusion.com/kb/article/19608/how-to-convert-rtf-to-html-and-vice-versa-using-net-core-docio?)
* [How to convert RTF string to HTML string in .NET Word Library?](https://support.syncfusion.com/kb/article/22471/how-to-convert-rtf-string-to-html-string-in-net-word-library)
