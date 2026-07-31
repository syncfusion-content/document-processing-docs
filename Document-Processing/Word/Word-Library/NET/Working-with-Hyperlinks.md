---
title: Working with Hyperlinks in .NET Word library | Syncfusion
description: Learn how to work with hyperlinks in a Word document using the Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Working with Hyperlinks in the Word Library

Hyperlinks have two parts: the address and the display content. The Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library supports the following hyperlink types:

* Web hyperlink
* Email hyperlink
* File hyperlink
* Bookmark hyperlink
* Image hyperlink

## Prerequisites

To use the DocIO library, add a reference to the **Syncfusion.DocIO.Net.Core** (cross-platform) or **Syncfusion.DocIO.WinForms** (Windows-specific) NuGet package from [nuget.org](https://www.nuget.org/). For more information, refer to [NuGet packages required](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required).

**Starting with v16.2.0.x**, you must also install the **Syncfusion.Licensing** package and register a valid license key in your application. For details, refer to the [Syncfusion licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview).

The following namespaces are required in the samples below.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
Imports Syncfusion.DocIO
Imports Syncfusion.DocIO.DLS
{% endhighlight %}

{% endtabs %}

## Web hyperlink

The following code example shows how to insert a web link.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Add-web-link/.NET/Add-web-link/Program.cs" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Web hyperlink:  ");
paragraph = section.AddParagraph();
//Appends a web hyperlink to the paragraph
paragraph.AppendHyperlink("http://www.syncfusion.com", "Syncfusion", HyperlinkType.WebLink);
//Saves the Word document to a MemoryStream
using (MemoryStream stream = new MemoryStream())
{
    document.Save(stream, FormatType.Docx);
}
//Closes the Word document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Web hyperlink:  ");
paragraph = section.AddParagraph();
//Appends a web hyperlink to the paragraph
paragraph.AppendHyperlink("http://www.syncfusion.com", "Syncfusion", HyperlinkType.WebLink);
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.AppendText("Web hyperlink:  ")
paragraph = section.AddParagraph()
'Appends a web hyperlink to the paragraph
paragraph.AppendHyperlink("http://www.syncfusion.com", "Syncfusion", HyperlinkType.WebLink)
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Add-web-link).

## Email hyperlink

The following code example shows how to add an email link.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Add-an-email-link/.NET/Add-an-email-link/Program.cs" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Email hyperlink: ");
paragraph = section.AddParagraph();
//Appends an email hyperlink to the paragraph
paragraph.AppendHyperlink("mailto:sales@syncfusion.com", "Sales", HyperlinkType.EMailLink);
//Saves the Word document to a MemoryStream
using (MemoryStream stream = new MemoryStream())
{
    document.Save(stream, FormatType.Docx);
}
//Closes the Word document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Email hyperlink: ");
paragraph = section.AddParagraph();
//Appends an email hyperlink to the paragraph
paragraph.AppendHyperlink("mailto:sales@syncfusion.com", "Sales", HyperlinkType.EMailLink);
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.AppendText("Email hyperlink: ")
paragraph = section.AddParagraph()
'Appends an email hyperlink to the paragraph
paragraph.AppendHyperlink("mailto:sales@syncfusion.com", "Sales", HyperlinkType.EMailLink)
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Add-an-email-link).

## File hyperlink

The following code example shows how to add a file hyperlink.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Add-file-hyperlink/.NET/Add-file-hyperlink/Program.cs" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("File hyperlink: ");
paragraph = section.AddParagraph();
//Appends a file hyperlink to the paragraph
paragraph.AppendHyperlink(@"Template.docx", "File", HyperlinkType.FileLink);
//Saves the Word document to a MemoryStream
using (MemoryStream stream = new MemoryStream())
{
    document.Save(stream, FormatType.Docx);
}
//Closes the Word document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("File hyperlink: ");
paragraph = section.AddParagraph();
//Appends a file hyperlink to the paragraph
paragraph.AppendHyperlink(@"Template.docx", "File", HyperlinkType.FileLink);
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.AppendText("File hyperlink: ")
paragraph = section.AddParagraph()
'Appends a file hyperlink to the paragraph
paragraph.AppendHyperlink("Template.docx", "File", HyperlinkType.FileLink)
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Add-file-hyperlink).

## Bookmark hyperlink

The following code example explains how to add a bookmark hyperlink.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Add-bookmark-hyperlink/.NET/Add-bookmark-hyperlink/Program.cs" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
//Creates a new bookmark
paragraph.AppendBookmarkStart("Introduction");
paragraph.AppendText("Hyperlink");
paragraph.AppendBookmarkEnd("Introduction");
paragraph.AppendText("\nA hyperlink is a reference or navigation element in a document to another section of the same document or to another document that may be on or part of a (different) domain.");
paragraph = section.AddParagraph();
paragraph.AppendText("Bookmark hyperlink: ");
paragraph = section.AddParagraph();
//Appends a bookmark hyperlink to the paragraph
paragraph.AppendHyperlink("Introduction", "Bookmark", HyperlinkType.Bookmark);
//Saves the Word document to a MemoryStream
using (MemoryStream stream = new MemoryStream())
{
    document.Save(stream, FormatType.Docx);
}
//Closes the Word document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
//Creates a new bookmark
paragraph.AppendBookmarkStart("Introduction");
paragraph.AppendText("Hyperlink");
paragraph.AppendBookmarkEnd("Introduction");
paragraph.AppendText("\nA hyperlink is a reference or navigation element in a document to another section of the same document or to another document that may be on or part of a (different) domain.");
paragraph = section.AddParagraph();
paragraph.AppendText("Bookmark hyperlink: ");
paragraph = section.AddParagraph();
//Appends a bookmark hyperlink to the paragraph
paragraph.AppendHyperlink("Introduction", "Bookmark", HyperlinkType.Bookmark);
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
'Creates a new bookmark
paragraph.AppendBookmarkStart("Introduction")
paragraph.AppendText("Hyperlink")
paragraph.AppendBookmarkEnd("Introduction")
paragraph.AppendText(vbLf & "A hyperlink is a reference or navigation element in a document to another section of the same document or to another document that may be on or part of a (different) domain.")
paragraph = section.AddParagraph()
paragraph.AppendText("Bookmark hyperlink: ")
paragraph = section.AddParagraph()
'Appends a bookmark hyperlink to the paragraph
paragraph.AppendHyperlink("Introduction", "Bookmark", HyperlinkType.Bookmark)
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Add-bookmark-hyperlink).

## Image hyperlink

The display content for a hyperlink can also be an image that redirects to other content.

The following code example explains how to add an image hyperlink.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Add-image-hyperlink/.NET/Add-image-hyperlink/Program.cs" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Image hyperlink: ");
paragraph = section.AddParagraph();
//Creates a new image instance and loads the image
WPicture picture = new WPicture(document);
using (FileStream imageStream = new FileStream(@"Mountain-200.jpg", FileMode.Open, FileAccess.ReadWrite))
{
    picture.LoadImage(imageStream);
}
//Appends an image hyperlink to the paragraph
paragraph.AppendHyperlink("http://www.syncfusion.com", picture, HyperlinkType.WebLink);
//Saves the Word document to a MemoryStream
using (MemoryStream stream = new MemoryStream())
{
    document.Save(stream, FormatType.Docx);
}
//Closes the Word document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Image hyperlink: ");
paragraph = section.AddParagraph();
//Creates a new image instance and loads the image
WPicture picture = new WPicture(document);
picture.LoadImage(Image.FromFile("Image.png"));
//Appends an image hyperlink to the paragraph
paragraph.AppendHyperlink("http://www.syncfusion.com", picture, HyperlinkType.WebLink);
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.AppendText("Image hyperlink: ")
paragraph = section.AddParagraph()
'Creates a new image instance and loads the image
Dim picture As New WPicture(document)
picture.LoadImage(Image.FromFile("Image.png"))
'Appends an image hyperlink to the paragraph
paragraph.AppendHyperlink("http://www.syncfusion.com", picture, HyperlinkType.WebLink)
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Add-image-hyperlink).

## Modify hyperlink

The following code example explains how to modify the URL of an existing hyperlink.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Modify-url-of-hyperlink/.NET/Modify-url-of-hyperlink/Program.cs" %}
using (FileStream fileStream = new FileStream(@"Sample.docx", FileMode.Open, FileAccess.ReadWrite))
{
    //Loads the template document
    WordDocument document = new WordDocument(fileStream, FormatType.Docx);
    WParagraph paragraph = document.LastParagraph;
    //Iterates through the paragraph items
    foreach (ParagraphItem item in paragraph.ChildEntities)
    {
        if (item is WField)
        {
            if ((item as WField).FieldType == FieldType.FieldHyperlink)
            {
                //Gets the hyperlink field
                Hyperlink link = new Hyperlink(item as WField);
                if (link.Type == HyperlinkType.WebLink)
                {
                    //Modifies the URL of the hyperlink
                    link.Uri = "http://www.google.com";
                    link.TextToDisplay = "Google";
                    break;
                }
            }
        }
    }
    //Saves the Word document to a MemoryStream
    using (MemoryStream stream = new MemoryStream())
    {
        document.Save(stream, FormatType.Docx);
    }
    //Closes the Word document
    document.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Sample.docx", FormatType.Docx);
WParagraph paragraph = document.LastParagraph;
//Iterates through the paragraph items
foreach (ParagraphItem item in paragraph.ChildEntities)
{
    if (item is WField)
    {
        if ((item as WField).FieldType == FieldType.FieldHyperlink)
        {
            //Gets the hyperlink field
            Hyperlink link = new Hyperlink(item as WField);
            if (link.Type == HyperlinkType.WebLink)
            {
                //Modifies the URL of the hyperlink
                link.Uri = "http://www.google.com";
                link.TextToDisplay = "Google";
                break;
            }
        }
    }
}
//Saves and closes the Word document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Sample.docx", FormatType.Docx)
Dim paragraph As WParagraph = document.LastParagraph
'Iterates through the paragraph items
For Each item As ParagraphItem In paragraph.ChildEntities
    If TypeOf item Is WField Then
        Dim field As WField = DirectCast(item, WField)
        If field.FieldType = FieldType.FieldHyperlink Then
            'Gets the hyperlink field
            Dim link As New Hyperlink(field)
            If link.Type = HyperlinkType.WebLink Then
                'Modifies the URL of the hyperlink
                link.Uri = "http://www.google.com"
                link.TextToDisplay = "Google"
                Exit For
            End If
        End If
    End If
Next
'Saves and closes the Word document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Modify-url-of-hyperlink).

## See Also

The following knowledge base articles cover scenarios not discussed above — removing hyperlinks, replacing text with hyperlinks, and stripping hyperlink styling.

* [How to find and modify hyperlink address in Word document in C#, VB.NET](https://support.syncfusion.com/kb/article/12198/find-and-modify-hyperlink-address-in-word-document)
* [How to replace particular text with hyperlink in the Word document](https://support.syncfusion.com/kb/article/10326/how-to-replace-the-particular-text-with-hyperlink-in-word-document)
* [How to replace the URL of image hyperlink in Word document in C# and VB](https://support.syncfusion.com/kb/article/11259/how-to-replace-url-of-image-hyperlink-in-word-document)
* [How to remove a hyperlink from Word document in C# and VB](https://support.syncfusion.com/kb/article/9534/how-to-remove-hyperlink-from-a-word-document-using-c-vb-net)
* [How to Remove the Underline from a Hyperlink in a Word Document?](https://support.syncfusion.com/kb/article/22778/how-to-remove-the-underline-from-a-hyperlink-in-a-word-document)
