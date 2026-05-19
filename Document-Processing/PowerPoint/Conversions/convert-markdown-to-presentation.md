---
title: Convert Markdown to PowerPoint Presentation document in C# | Presentation | Syncfusion
description: Convert Markdown to PowerPoint Presentation document in C# using Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library without Microsoft PowerPoint or interop dependencies
platform: document-processing
control: Presentation
documentation: UG
---

# Markdown to Presentation Conversion

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The .NET PowerPoint library supports the conversion of Markdown to PowerPoint Presentation document  (.PPTX, .PPTM, .POTX, .POTM) and vice versa, which mostly follows the CommonMark specification and GitHub-flavored syntax.


## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert a Markdown file to a PowerPoint Presentation document using the .NET PowerPoint Library.

* [Markdown to Presentation assemblies](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/assemblies-required)
* [Markdown to Presentation NuGet packages](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/nuget-packages-required)

## Convert Markdown to Presentation

Convert an existing markdown file to a PowerPoint Presentation document using the .NET PowerPoint library.

The following code example shows how to convert Markdown to PowerPoint Presentation document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/main/Markdown-to-Presentation-conversion/Convert-Markdown-to-Presentation/.NET/Convert-Markdown-to-Presentation/Program.cs" %}
//Open the file as a Stream.
using (FileStream fileStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read))
{
    //Load the file stream.
    using (IPresentation presentation = Presentation.Open(fileStream))
    {
        //Save as a Markdown document into the PPTX FileStream.
        using (FileStream outputStream = new FileStream("MarkdownToPPTX.pptx", FileMode.Create))
        {
            presentation.Save(outputStream);
        }
    } 
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Markdown file.
using (IPresentation presentation = Presentation.Open("Input.md"))
{
    //Save as a Presentation document.
    presentation.Save("MarkdownToPPTX.pptx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Markdown file.
Using presentation As IPresentation = Presentation.Open("Input.md")
    ' Save as a Presentation document
    presentation.Save("MarkdownToPPTX.pptx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/Presentation-Examples/tree/main/Markdown-to-Presentation-conversion/Convert-Markdown-to-Presentation).

T> You can also save the markdown file as [HTML](https://help.syncfusion.com/document-processing/word/word-library/net/html), [PDF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf), [Image](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/word-to-image), and [Word](https://help.syncfusion.com/document-processing/word/conversions/markdown-to-word-conversion)

N> 1. In Markdown to Presentation conversion, invalid images are replaced with a red "X" image instead of the original image.

## Supported Markdown Syntax

<table style="width: 85.7072%;">
<tbody>
<tr>
<td style="width: 16%;">
<p><strong>Element</strong></p>
</td>
<td style="width: 26%;">
<p><strong>Syntax</strong></p>
</td>
<td style="width: 41.7072%;">
<p><strong>Description</strong></p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Bold</p>
</td>
<td style="width: 26%;">
<p>Sample content for **bold text**.</p>
</td>
<td style="width: 41.7072%;">
<p>For bold, add ** to front and back of the text.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Italic</p>
</td>
<td style="width: 26%;">
<p>Sample content for *Italic text*.</p>
</td>
<td style="width: 41.7072%;">
<p>For Italic, add * to front and back of the text.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Bold and Italics</p>
</td>
<td style="width: 26%;">
<p>Sample content for ***bold and Italic text***.</p>
</td>
<td style="width: 41.7072%;">
<p>For bold and Italics, add *** to the front and back of the text.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Strikethrough</p>
</td>
<td style="width: 26%;">
<p>Sample content for ~~strike through text~~.</p>
</td>
<td style="width: 41.7072%;">
<p>For strike through, add ~~ to front and back of the text.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Subscript</p>
</td>
<td style="width: 26%;">
<p>&lt;sub&gt;Subscript text&lt;/sub&gt;</p>
</td>
<td style="width: 41.7072%;">
<p>For subscript, add &lt;sub&gt; to the front and &lt;/sub&gt; to the back of the text.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Superscript</p>
</td>
<td style="width: 26%;">
<p>&lt;sup&gt;Superscript text&lt;/sup&gt;</p>
</td>
<td style="width: 41.7072%;">
<p>For superscript, add &lt;sup&gt; to the front and &lt;/sup&gt; to the back of the text.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Heading 1</p>
</td>
<td style="width: 26%;">
<p>#Heading 1 content</p>
</td>
<td style="width: 41.7072%;">
<p>For heading 1, add # to start of the line.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Heading 2</p>
</td>
<td style="width: 26%;">
<p>##Heading 2 content</p>
</td>
<td style="width: 41.7072%;">
<p>For heading 2, add ## to start of the line.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Heading 3</p>
</td>
<td style="width: 26%;">
<p>###Heading 3 content</p>
</td>
<td style="width: 41.7072%;">
<p>For heading 3, add ### to start of the line.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Heading 4</p>
</td>
<td style="width: 26%;">
<p>####Heading 4 content</p>
</td>
<td style="width: 41.7072%;">
<p>For heading 4, add #### to start of the line.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Heading 5</p>
</td>
<td style="width: 26%;">
<p>#####Heading 5 content</p>
</td>
<td style="width: 41.7072%;">
<p>For heading 5, add ##### to start of the line.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Heading 6</p>
</td>
<td style="width: 26%;">
<p>######Heading 6 content</p>
</td>
<td style="width: 41.7072%;">
<p>For heading 6, add ###### to start of the line.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Block quotes</p>
</td>
<td style="width: 26%;">
<p>&gt;Block quotes text</p>
</td>
<td style="width: 41.7072%;">
<p>For block quotes, add&gt;to start of the line.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Code span</p>
</td>
<td style="width: 26%;">
<p>`Code span text`</p>
</td>
<td style="width: 41.7072%;">
<p>For code span, add ` to front and back of the text.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Indented code block</p>
</td>
<td style="width: 26%;">
<p>4 spaces</p>
</td>
<td style="width: 41.7072%;">
<p>For indented code block, add 4 spaces at the beginning of line.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Fenced code block</p>
</td>
<td style="width: 26%;">
<p>```<br /> Multi line code text<br /> Multi line code text<br /> ```</p>
</td>
<td style="width: 41.7072%;">
<p>For fenced code block, add ``` in the new line before and after the content.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Ordered List</p>
</td>
<td style="width: 26%;">
<p>1. First<br /> 2. Second</p>
</td>
<td style="width: 41.7072%;">
<p>For ordered list, preceding the text with 1. (number with dot and one space)</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Unordered List</p>
</td>
<td style="width: 26%;">
<p>- First<br /> - second</p>
</td>
<td style="width: 41.7072%;">
<p>For unordered list, preceding the text with &ndash; (hyphen and space).</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Links</p>
</td>
<td style="width: 26%;">
<p><strong>Link text without title text</strong> :<br /> [Link text](URL)<br /> <strong>Link text with title text</strong> :<br /> [Link text](URL , &ldquo;title text&rdquo;)</p>
</td>
<td style="width: 41.7072%;">
<p>For hyperlink, enclose the link text within the brackets [ ], and then enclose the URL as first parameter and title as second parameter within the parentheses().<br /> <strong>Note:</strong>The title text is optional.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Table</p>
</td>
<td style="width: 26%;"><img src="MarkdownToWord_images/Created_Table.png" alt="Table Syntax in Markdown"></td>
<td style="width: 41.7072%;">
<p>Create a table using the pipes and underscores as given in the syntax to create 2 x 2 table.</p>
<p></p>
<p>You can also set column alignments using the syntax below, default it is left aligned.</p>
<p>Right alignment:<br/><img src="MarkdownToWord_images/RightAligned_Table.png" alt="Right aligned table Syntax in Markdown"><br /> <br /> Center alignment:<br/><img src="MarkdownToWord_images/CenterAligned_Table.png" alt="Center aligned table Syntax in Markdown"></p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Horizontal Line</p>
</td>
<td style="width: 26%;">
<p>--- (three hyphen characters)</p>
</td>
<td style="width: 41.7072%;">
<p>For horizontal line, add --- (three hyphens) in a new line.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Image</p>
</td>
<td style="width: 26%;">
<p>![Alternate text] (URL path)</p>
</td>
<td style="width: 41.7072%;">
<p>For image, enclose an alternative text within the brackets [], and then link of the image source within parentheses ().</p>
<p>If URL path is base64string, then it will be preserved properly in PowerPoint Presentation document.</p>
</td>
</tr>
<tr>
<td style="width: 16%;">
<p>Escape Character</p>
</td>
<td style="width: 26%;">
<p>\(any syntax)</p>
</td>
<td style="width: 41.7072%;">
<p>Escape any markdown syntax by adding \ as prefix to the syntax.<br /> Example:<br /> \**non-bold text**</p>
</td>
</tr>
</tbody>
</table>
