---
title: FAQ about HTML and EPUB Conversions | DocIO | Syncfusion&reg;
description: Learn about the frequently asked questions about HTML and EPUB conversions in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about HTML and EPUB conversions 

The frequently asked questions about HTML and EPUB conversions using DocIO are listed below.

## How to set title when converting Word document to EPUB?

You can set title for EPUB file by setting the required title (string) to the built-in property "Title". If the built-in property "Title" doesn't have value, then no title will be applied for EPUB file.
![Create Title for EPUB file](../FAQ_images/Title_EPUB_img.png)

The following code example illustrates how to set title for EPUB when converting a Word document to EPUB using DocIO.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//DocIO supports Word to EPUB in Windows Forms, UWP, WPF, ASP.NET Web, and MVC platforms alone
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the existing Word document by using DocIO instance
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Sets title for Word document, which will be applied as title for the output EPUB file.
document.BuiltinDocumentProperties.Title = "This is a title in EPub document";
//Saves and closes the document
document.Save("Sample.epub", FormatType.EPub);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the existing Word document by using DocIO instance
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Sets title for Word document, which will be applied as title for the output EPUB file.
document.BuiltinDocumentProperties.Title = "This is a title in EPub document"
'Saves and closes the document.
document.Save("Sample.epub", FormatType.EPub)
document.Close()'Loads the existing Word document by using DocIO instance
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Sets title for Word document
document.BuiltinDocumentProperties.Title = "This is a title in EPub document"
'Saves and closes the document.
document.Save("Sample.epub", FormatType.EPub)
document.Close()
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Loads an existing Word document into DocIO instance
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
using (WordDocument document = new WordDocument(assembly.GetManifestResourceStream("CreateWordSample.Assets.Template.docx"), FormatType.Docx))
{
    //Sets title for Word document, which will be applied as title for the output EPUB file.
    document.BuiltinDocumentProperties.Title = "This is a title in EPub document";
    //Saves the Word file to MemoryStream
    MemoryStream stream = new MemoryStream();
    await document.SaveAsync(stream, FormatType.EPub);
    //Saves the stream as Word file in local machine
    Save(stream, "Sample.epub");
    //Closes the document
    document.Close();
    //Please refer the below link to save Word document in UWP platform
    //https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-uwp#save-word-document-in-uwp
}
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-EPUB-conversion/Set-title-for-EPUB).
