---
title: Convert Word to Markdown in C# | DocIO | Syncfusion
description: Learn how to convert a Word document to Markdown using the .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Word to Markdown Conversion

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The .NET Word (DocIO) library supports the conversion of a Word document to a Markdown file, which mostly follows the CommonMark specification and GitHub-flavored syntax.

To quickly start converting a Word document to Markdown and vice versa, please check out this video:
{% youtube "https://www.youtube.com/watch?v=7iMVgVKXRdU" %}

## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert a Word document to a Markdown file using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO).

* [Word to Markdown conversion assemblies](https://help.syncfusion.com/document-processing/word/word-library/net/assemblies-required)
* [Word to Markdown conversion NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required)

## Convert Word to Markdown

Convert an existing Word document or document that is created from scratch into a Markdown file using the .NET Word (DocIO) library.

The following code example shows how to convert a Word document to a Markdown file.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-Markdown-conversion/Convert-Word-to-Markdown/.NET/Convert-Word-to-Markdown/Program.cs" %}
// Open an existing Word document.
using (WordDocument document = new WordDocument(Path.GetFullPath(@"Data/Input.docx")))
{
    // Save the document as a Markdown file.
    document.Save(Path.GetFullPath(@"Output/Output.md"));
}  
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Word document.
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    //Save the document as a Markdown file.
    document.Save("WordtoMd.md", FormatType.Markdown);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document.
Using document As WordDocument = New WordDocument("Input.docx", FormatType.Docx)
    'Save the document as a Markdown file.
    document.Save("WordtoMd.md", FormatType.Markdown)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Markdown-conversion/Convert-Word-to-Markdown).

## Design Word document for Markdown conversion

The following table illustrates the supported Markdown elements in Word to Markdown conversion and how to set that Markdown elements in input Word document.

<table style="width: 760px;">
<thead>
<tr>
<td style="width: 182.986px;"><strong>Markdown elements</strong></td>
<td style="width: 557.014px;"><strong>How to set in Word document</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td style="width: 182.986px;">Thematic breaks</td>
<td style="width: 557.014px;">Add an horizontal rule.&nbsp;</td>
</tr>
<tr>
<td style="width: 182.986px;">Headings</td>
<td style="width: 557.014px;">
<p>Apply heading style for paragraphs. DocIO supports converting 6 levels of headings from a Word document to their equivalent headings' syntax in Markdown.</p>
<p>Heading style paragraph. &nbsp;</p>
6 level headings only supported in Markdown.</td>
</tr>
<tr>
<td style="width: 182.986px;">Indented code block</td>
<td style="width: 557.014px;">Paragraph with &ldquo;IndentedCode&rdquo; style name.</td>
</tr>
<tr>
<td style="width: 182.986px;">Fenced code block</td>
<td style="width: 557.014px;">Paragraph with &ldquo;FencedCode&rdquo; style name.</td>
</tr>
<tr>
<td style="width: 182.986px;">Block quotes</td>
<td style="width: 557.014px;">Paragraph with &ldquo;Quote&rdquo; style name</td>
</tr>
<tr>
<td style="width: 182.986px;">List items</td>
<td style="width: 557.014px;">Apply numbered or bulleted list format to paragraphs.&nbsp;</td>
</tr>
<tr>
<td style="width: 182.986px;">Code span</td>
<td style="width: 557.014px;">Set &ldquo;InlineCode&rdquo; character style for text.</td>
</tr>
<tr>
<td style="width: 182.986px;">Emphasis and strong emphasis</td>
<td style="width: 557.014px;">Bold and Italic formats for text.</td>
</tr>
<tr>
<td style="width: 182.986px;">Links</td>
<td style="width: 557.014px;">Set hyperlinks in Word document.</td>
</tr>
<tr>
<td style="width: 182.986px;">Task items</td>
<td style="width: 557.014px;">Set checkbox content control as the first item of the paragraph.</td>
</tr>
</tbody>
</table>

### Code blocks

The Essential<sup>&reg;</sup> DocIO supports two types of code blocks in Word to Markdown conversion. 

* Indented code block: Set the paragraph style as “IndentedCode.”
* Fenced code block: Set the paragraph style as “FencedCode.”

The following code example shows how to create code blocks in a Word document using DocIO.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-Markdown-conversion/Code-block-in-Markdown/.NET/Code-block-in-Markdown/Program.cs" %}
//Create a new Word document.
using (WordDocument document = new WordDocument())
{
    //Add a new section to the document.
    IWSection section = document.AddSection();
    //Add a new paragraph to the section.
    IWParagraph paragraph = section.AddParagraph();
    //Append text to the paragraph.
    IWTextRange textRange = paragraph.AppendText("Fenced Code");
    //Add a new paragraph to the section.
    paragraph = section.AddParagraph();
    //Create a user-defined style as FencedCode.
    IWParagraphStyle style = document.AddParagraphStyle("FencedCode");
    //Apply FencedCode style for the paragraph.
    paragraph.ApplyStyle("FencedCode");
    //Append text.
    textRange = paragraph.AppendText("class Hello\n{\n\tStatic void Main()\n\t{\n\t\tConsole.WriteLine(\"Fenced Code\")\n\t}\n}");
    //Add a new paragraph and append text to the paragraph.
    section.AddParagraph().AppendText("Indented Code");
    //Add a new paragraph to the section.
    paragraph = section.AddParagraph();
    //Create a user-defined style as IndentedCode.
    style = document.AddParagraphStyle("IndentedCode");
    //Apply IndentedCode style for the paragraph.
    paragraph.ApplyStyle("IndentedCode");
    //Append text.
	textRange = paragraph.AppendText("class Hello\n\t{\n\t\tStatic void Main()\n\t\t{\n\t\t\tConsole.WriteLine(\"Indented Code\")\n\t\t}\n\t}");
	//Save the document as a Markdown file.
	document.Save(Path.GetFullPath(@"Output/Output.md"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new Word document.
using (WordDocument document = new WordDocument())
{
    //Add a new section to the document.
    IWSection section = document.AddSection();
    //Add a new paragraph to the section.
    IWParagraph paragraph = section.AddParagraph();
    //Append text to the paragraph.
    IWTextRange textRange = paragraph.AppendText("Fenced Code");
    //Add a new paragraph to the section.
    paragraph = section.AddParagraph();
    //Create a user-defined style as FencedCode.
    IWParagraphStyle style = document.AddParagraphStyle("FencedCode");
    //Apply FencedCode style for the paragraph.
    paragraph.ApplyStyle("FencedCode");
    //Append text.
    textRange = paragraph.AppendText("class Hello\n{\n\tStatic void Main()\n\t{\n\t\tConsole.WriteLine(\"Fenced Code\")\n\t}\n}");
    //Add a new paragraph and append text to the paragraph.
    section.AddParagraph().AppendText("Indented Code");
    //Add a new paragraph to the section.
    paragraph = section.AddParagraph();
    //Create a user-defined style as IndentedCode.
    style = document.AddParagraphStyle("IndentedCode");
    //Apply IndentedCode style for the paragraph.
    paragraph.ApplyStyle("IndentedCode");
    //Append text.
    textRange = paragraph.AppendText("class Hello\n\t{\n\t\tStatic void Main()\n\t\t{\n\t\t\tConsole.WriteLine(\"Indented Code\")\n\t\t}\n\t}");
    //Save the document as a Markdown file.
    document.Save("WordtoMd.md", FormatType.Markdown);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new Word document.
Using document As WordDocument = New WordDocument()
    'Add a new section to the document.
    Dim section As IWSection = document.AddSection()
    'Add a new paragraph to the section.
    Dim paragraph As IWParagraph = section.AddParagraph()
    'Append text to the paragraph.
    Dim textRange As IWTextRange = paragraph.AppendText("Fenced Code")
    'Add a new paragraph to the section.
    paragraph = section.AddParagraph()
    'Create a user-defined style as FencedCode.
    Dim style As IWParagraphStyle = document.AddParagraphStyle("FencedCode")
    'Apply FencedCode style for the paragraph.
    paragraph.ApplyStyle("FencedCode")
    'Append text.
    textRange = paragraph.AppendText("class Hello" & vbLf & "{" & vbLf & vbTab & "Static void Main()" & vbLf & vbTab & "{" & vbLf & vbTab & vbTab & "Console.WriteLine(""Fenced Code"")" & vbLf & vbTab & "}" & vbLf & "}")
    'Add a new paragraph and append text to the paragraph.
    section.AddParagraph().AppendText("Indented Code")
    'Add a new paragraph to the section.
    paragraph = section.AddParagraph()
    'Create a user-defined style as IndentedCode.
    style = document.AddParagraphStyle("IndentedCode")
    'Apply IndentedCode style for the paragraph.
    paragraph.ApplyStyle("IndentedCode")
    'Append text.
    textRange = paragraph.AppendText("class Hello" & vbLf & vbTab & "{" & vbLf & vbTab & vbTab & "Static void Main()" & vbLf & vbTab & vbTab & "{" & vbLf & vbTab & vbTab & vbTab & "Console.WriteLine(""Indented Code"")" & vbLf & vbTab & vbTab & "}" & vbLf & vbTab & "}")
    'Save the document as a Markdown file.
    document.Save("WordtoMd.md", FormatType.Markdown)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Markdown-conversion/Code-block-in-Markdown).

### Block quotes

Create block quotes in a Word document by applying the “Quote” paragraph style to the paragraphs.

The following code example shows how to create block quotes in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-Markdown-conversion/Block-quote-in-Markdown/.NET/Block-quote-in-Markdown/Program.cs" %}
//Create a new Word document.
using (WordDocument document = new WordDocument())
{
    //Add a new section to the document.
    IWSection section = document.AddSection();
    //Create a user-defined style.
    IWParagraphStyle style = document.AddParagraphStyle("Quote");
    //Add a new paragraph to the section.
    IWParagraph paragraph = section.AddParagraph();
    //Apply Quote style to simple hello world text.
    paragraph.ApplyStyle("Quote");
    //Append text.
    IWTextRange textRange = paragraph.AppendText("Hello World");
    //Save the document as a Markdown file.
	document.Save(Path.GetFullPath(@"Output/Output.md"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new Word document.
using (WordDocument document = new WordDocument())
{
    //Add a new section to the document.
    IWSection section = document.AddSection();
    //Create a user-defined style.
    IWParagraphStyle style = document.AddParagraphStyle("Quote");
    //Add a new paragraph to the section.
    IWParagraph paragraph = section.AddParagraph();
    //Apply Quote style to simple hello world text.
    paragraph.ApplyStyle("Quote");
    //Append text.
    IWTextRange textRange = paragraph.AppendText("Hello World");
    document.Save("WordToMd.md", FormatType.Markdown);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new Word document.
Using document As WordDocument = New WordDocument()
    'Add a new section to the document.
    Dim section As IWSection = document.AddSection()
    'Create a user-defined style.
    Dim style As IWParagraphStyle = document.AddParagraphStyle("Quote")
    'Add a new paragraph to the section.
    Dim paragraph As IWParagraph = section.AddParagraph()
    'Apply Quote style to simple hello world text.
    paragraph.ApplyStyle("Quote")
    'Append text.
    Dim textRange As IWTextRange = paragraph.AppendText("Hello World")
    document.Save("WordToMd.md", FormatType.Markdown)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Markdown-conversion/Block-quote-in-Markdown).

N> Nested block quotes are not supported in a Word to the Markdown conversion. To preserve nested block quotes, add the number of “>” characters at the beginning of the paragraph in a Word document as equivalent to the nth nested level of the block quote. For example, to insert the 2nd nested level block quote, add two “>” characters at the start of the sentence, and no need to apply the “Quote” style to the paragraph.

## Save Options

When converting a Word document to Markdown, the .NET Word (DocIO) library provides various save options to customize the output Markdown file. These options allow you to control the image export folder, customize image paths, and set the character encoding used to write the output.

When converting a Word document to Markdown using the [Save(fileName)](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Save_System_String_) overloads, DocIO creates a new folder parallel to the output file name and exports all the images into it as default.

When converting a Word document to Markdown using the [Save(Stream, FormatType)](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Save_System_IO_Stream_Syncfusion_DocIO_FormatType_) overloads, DocIO preserves the images as base64 format in the output Markdown file as default.

Also, customize the above default behaviors using the following options in DocIO.


### Export images to folder

Specify the folder location to export the images using the [MarkdownExportImagesFolder](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.SaveOptions.html#Syncfusion_DocIO_DLS_SaveOptions_MarkdownExportImagesFolder) API. If the folder does not exist, DocIO creates it automatically.

The following code example illustrates how to set the images folder to export the images while converting a Word document to a Markdown file.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Open an existing Word document.
using (WordDocument document = new WordDocument(Path.GetFullPath(@"Data/Input.docx")))
{
    //Set images folder to export images. 
    document.SaveOptions.MarkdownExportImagesFolder = "D:\\WordToMdConversion";
    //Save the document as a Markdown file.
    document.Save(Path.GetFullPath(@"Output/Output.md"));  
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Word document. 
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    //Set images folder to export images. 
    document.SaveOptions.MarkdownExportImagesFolder = "D:\\WordToMdConversion ";
    //Save a Word document as a Markdown file.
    document.Save("WordtoMd.md", FormatType.Markdown);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document.
Using document As WordDocument = New WordDocument("Input.docx", FormatType.Docx)
    'Set images folder to export images. 
    document.SaveOptions.MarkdownExportImagesFolder = "D:\\WordToMdConversion ";
    'Save a document as a Markdown file.
    document.Save("WordtoMd.md")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Markdown-conversion/Export-images-to-folder).

### Customize the image path

DocIO provides an `ImageNodeVisited` event, which is used to customize the image path to set in the output Markdown file and save images externally while converting a Word document to Markdown.

The following code example illustrates how to save Image files during a Word to Markdown Conversion.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-Markdown-conversion/Customize-image-path/.NET/Customize-image-path/Program.cs" %}
 //Open an existing Word document.
 using (WordDocument document = new WordDocument(Path.GetFullPath(@"Data/Input.docx")))
 {
     //Hook the event to customize the image. 
     document.SaveOptions.MarkdownSaveOptions.ImageNodeVisited += SaveImage;
     //Save the document as a Markdown file.
     document.Save(Path.GetFullPath(@"Output/Output.md"));
 }
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Word document. 
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    //Hook the event to customize the image. 
    document.SaveOptions.MarkdownSaveOptions.ImageNodeVisited += SaveImage;
    //Save a Word document as a Markdown file.
    document.Save("WordtoMd.md", FormatType.Markdown);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document. 
Using document As WordDocument = New WordDocument("Input.docx", FormatType.Docx)
    'Hook the event to customize the image. 
    document.SaveOptions.MarkdownSaveOptions.ImageNodeVisited += SaveImage
    'Save a Word document as a Markdown file.
    document.Save("WordtoMd.md", FormatType.Markdown)
End Using
{% endhighlight %}

{% endtabs %}

The following code examples show the event handler to customize the image path and save the image in an external folder.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
    //Save the image stream as a file.
    using (FileStream fileStreamOutput = File.Create(imagepath))
        args.ImageStream.CopyTo(fileStreamOutput);
    //Set the URI to be used for the image in the output Markdown. 
    args.Uri = imagepath;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
    //Save the image stream as a file. 
    using (FileStream fileStreamOutput = File.Create(imagepath))
        args.ImageStream.CopyTo(fileStreamOutput);
    //Set the image URI to be used in the output markdown.
    args.Uri = imagepath;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Shared Sub SaveImage(ByVal sender As Object, ByVal args As MdImageNodeVisitedEventArgs)
    Dim imagepath = "D:\Temp\Image1.png"
    'Save the image stream as a file. 
    Using fileStreamOutput = File.Create(imagepath)
        args.ImageStream.CopyTo(fileStreamOutput)
    End Using
    'Set the URI to be used for the image in the output markdown. 
    args.Uri = imagepath
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Markdown-conversion/Customize-image-path).

N> The `MarkdownExportImagesFolder` property and `MarkdownSaveOptions.ImageNodeVisited` event are not supported on the UWP platform.

### Encoding

The .NET Word (DocIO) library provides an `Encoding` property to specify the character encoding to use when saving the Markdown file. This property is useful when you need to save the output Markdown file with specific character encodings such as UTF-8, UTF-16, ASCII, or other encodings.

The following code example shows how to save a Markdown file with a specific encoding.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Open an existing Word document.
using (WordDocument document = new WordDocument(Path.GetFullPath(@"Data/Input.docx")))
{
    //Set the encoding values.
    document.SaveOptions.MarkdownSaveOptions.Encoding = Encoding.ASCII;
    //Save the document as a Markdown file.
    document.Save(Path.GetFullPath(@"Output/Output.md"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Word document.
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    //Set the encoding values.
    document.SaveOptions.MarkdownSaveOptions.Encoding = Encoding.ASCII;
    //Save the document as a Markdown file.
    document.Save("WordtoMd.md");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document.
Using document As WordDocument = New WordDocument("Input.docx", FormatType.Docx)
    'Specify the character encoding for the output Markdown file.
    document.SaveOptions.MarkdownSaveOptions.Encoding = Encoding.ASCII
    'Save the document as a Markdown file.
    document.Save("WordtoMd.md")
End Using
{% endhighlight %}

{% endtabs %}

N> Set the encoding value before saving the document as per the above code example.

## Get Markdown document

Convert an existing Word document to a `MarkdownDocument` instance using the `GetMarkdownDocument` API. This allows you to access and manipulate the Markdown DOM before saving or further processing.

The following code example shows how to convert a Word document to a Markdown document instance.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
// Open an existing Word document.
using (WordDocument document = new WordDocument(Path.GetFullPath(@"Data/Input.docx")))
{
    // Convert the Word document to Markdown.
    MarkdownDocument markdownDocument = document.GetMarkdownDocument();
    // Save or process the Markdown document as needed.
    markdownDocument.Save(Path.GetFullPath(@"Output/Output.md"));
    // Dispose the Markdown document.
    markdownDocument.Dispose();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Open an existing Word document.
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    // Convert the Word document to Markdown.
    MarkdownDocument markdownDocument = document.GetMarkdownDocument();
    // Save or process the Markdown document as needed.
    markdownDocument.Save("Output.md");
    // Dispose the Markdown document.
    markdownDocument.Dispose();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Word document.
Using document As WordDocument = New WordDocument("Input.docx", FormatType.Docx)
    'Convert the Word document to Markdown.
    Dim markdownDocument As MarkdownDocument = document.GetMarkdownDocument()
    'Save or process the Markdown document as needed.
    markdownDocument.Save("Output.md")
    'Dispose the Markdown document.
    markdownDocument.Dispose()
End Using
{% endhighlight %}

{% endtabs %}

## Supported Word document elements

The following table shows the list of Word document elements supported in Word to Markdown conversion.

### Body items

<table style="width: 760px;">
<thead>
<tr style="height: 13px;">
<td style="width: 269.931px; height: 13px;"><strong>Element in Word document</strong></td>
<td style="width: 465.069px; height: 13px;"><strong>Notes</strong></td>
</tr>
</thead>
<tbody>
<tr style="height: 13px;">
<td style="width: 269.931px; height: 13px;">Paragraph</td>
<td style="width: 465.069px; height: 13px;">Preserved as one line.</td>
</tr>
<tr style="height: 13px;">
<td style="width: 269.931px; height: 13px;">Table</td>
<td style="width: 465.069px; height: 13px;">
<ul>
<li>Preserves as per GitHub flavored Markdown syntax.</li>
<li>Column alignment is based on alignment of first paragraph in cells of row.</li>
<li>Nested tables are not supported in Markdown, and they are merged with contents of parent cell.</li>
</ul>
</td>
</tr>
<tr style="height: 13px;">
<td style="width: 269.931px; height: 13px;">Block Content Control</td>
<td style="width: 465.069px; height: 13px;">Contents inside control controls are preserved as normal text. If the first item of the paragraph is a checkbox content control, then it preserves as a task item.</td>
</tr>
</tbody>
</table>

### Paragraph items

<table style="width: 760px;">
<thead>
<tr style="height: 13px;">
<td style="width: 262.889px; height: 13px;"><strong>Element in Word document</strong></td>
<td style="width: 479.111px; height: 13px;"><strong>Notes</strong></td>
</tr>
</thead>
<tbody>
<tr style="height: 13px;">
<td style="width: 262.889px; height: 13px;">Field</td>
<td style="width: 479.111px; height: 13px;">Field result is preserved.</td>
</tr>
<tr style="height: 13px;">
<td style="width: 262.889px; height: 13px;">Form Field</td>
<td style="width: 479.111px; height: 13px;">Result of text and dropdown form fields are preserved.</td>
</tr>
<tr style="height: 13px;">
<td style="width: 262.889px; height: 13px;">Hyperlink</td>
<td style="width: 479.111px; height: 13px;">-</td>
</tr>
<tr style="height: 13px;">
<td style="width: 262.889px; height: 13px;">Image</td>
<td style="width: 479.111px; height: 13px;">-</td>
</tr>
<tr style="height: 13px;">
<td style="width: 262.889px; height: 13px;">Horizontal rule</td>
<td style="width: 479.111px; height: 13px;">-</td>
</tr>
<tr style="height: 13px;">
<td style="width: 262.889px; height: 13px;">Content Control</td>
<td style="width: 479.111px; height: 13px;">
<p>Contents inside control controls are preserved as normal text.</p>
<p>If the first item of the paragraph is checkbox content control, then it preserves as a task item.</p>
</td>
</tr>
<tr style="height: 13.6667px;">
<td style="width: 262.889px; height: 13.6667px;">Breaks</td>
<td style="width: 479.111px; height: 13.6667px;">Line and text wrapping breaks are supported.</td>
</tr>
</tbody>
</table>

### Formatting

<table style="width: 760px;">
<thead>
<tr>
<td style="width: 318.625px;"><strong>Element in Word document</strong></td>
<td style="width: 424.375px;"><strong>Notes</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td style="width: 318.625px;">Bold</td>
<td style="width: 424.375px;">-</td>
</tr>
<tr>
<td style="width: 318.625px;">Italic</td>
<td style="width: 424.375px;">-</td>
</tr>
<tr>
<td style="width: 318.625px;">StrikeThrough</td>
<td style="width: 424.375px;">-</td>
</tr>
<tr>
<td style="width: 318.625px;">Subscript and Superscript</td>
<td style="width: 424.375px;">-</td>
</tr>
<tr>
<td style="width: 318.625px;">Hidden</td>
<td style="width: 424.375px;">Considered as comments in Markdown syntax</td>
</tr>
<tr>
<td style="width: 318.625px;">List</td>
<td style="width: 424.375px;">
<ul>
<li>Numbered and bulleted lists are supported.</li>
<li>To restart numbering for the continuous list in the output markdown syntax, you should specify a non-empty paragraph in between the two lists in a Word document.</li>
</ul>
</td>
</tr>
</tbody>
</table>

## Online Demo

* Explore how to convert the Word document to Markdown using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/wordtomarkdown#/tailwind).
