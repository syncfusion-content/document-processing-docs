---
title: Working with Paragraph in .NET Markdown Library | Syncfusion
description: Learn how to add, format, and modify paragraphs in a Markdown document using the .NET Markdown library.
platform: document-processing
control: Markdown
documentation: UG
---

# Working with Paragraph in Markdown Library

A paragraph is the basic building block of a Markdown document. All textual content in a Markdown document is represented by the `MdParagraph` class. Each paragraph contains a collection of inline elements such as text ranges, hyperlinks, and images, which are represented by the `Inlines` property. The `IMdInline` interface is the base interface for all inline elements. The following elements can be the child elements of a paragraph:

- **Text**: Represented by an instance of `MdTextRange`.
- **Hyperlink**: Represented by an instance of `MdHyperlink`.
- **Image**: Represented by an instance of `MdPicture`.


## Adding a paragraph

The following code example demonstrates how to create a new paragraph in a Markdown document.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new Markdown document
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph paragraph = markdownDocument.AddParagraph();
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.";
// Retrieves the Markdown document content
string mdContent = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system
File.WriteAllText("Output.md", mdContent, Encoding.UTF8);
// Disposes the document to release all memory
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new Markdown document
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph to the document
Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
' Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company."
' Retrieves the Markdown document content
Dim mdContent As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system
File.WriteAllText("Output.md", mdContent, Encoding.UTF8)
' Disposes the document to release all memory
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Modifying an existing paragraph
	
Modify the content of an existing paragraph in a Markdown document by iterating over the `Blocks` collection and accessing the inline elements. The following code example demonstrates how to modify an existing paragraph.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 // Opens an existing Markdown document
 FileStream fileStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
 MdImportSettings settings = new MdImportSettings();
 MarkdownDocument markdownDocument = new MarkdownDocument(fileStream, settings);
 // Iterates through the blocks of the document
 foreach (IMdBlock block in markdownDocument.Blocks)
 {
     if (block is MdParagraph)
     {
         MdParagraph paragraph = block as MdParagraph;
         // Iterates through the inline elements of the paragraph
         foreach (IMdInline inline in paragraph.Inlines)
         {
             if (inline is MdTextRange)
             {
                 MdTextRange textRange = inline as MdTextRange;
                 // Modifies the text content
                 textRange.Text = "Modified paragraph content.";
                 break;
             }
         }
         break;
     }
 }
 // Gets the Markdown text of the document
 string markdownText = markdownDocument.GetMarkdownText();
 // Saves the Markdown document to the file system
 File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
 // Disposes the document
 markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document
Dim fileStream As New FileStream("Input.md", FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
Dim settings As New MdImportSettings()
Dim markdownDocument As New MarkdownDocument(fileStream, settings)
' Iterates through the blocks of the document
For Each block As IMdBlock In markdownDocument.Blocks
    If TypeOf block Is MdParagraph Then
        Dim paragraph As MdParagraph = TryCast(block, MdParagraph)
        ' Iterates through the inline elements of the paragraph
        For Each inline As IMdInline In paragraph.Inlines
            If TypeOf inline Is MdTextRange Then
                Dim textRange As MdTextRange = TryCast(inline, MdTextRange)
                ' Modifies the text content
                textRange.Text = "Modified paragraph content."
                Exit For
            End If
        Next
        Exit For
    End If
Next
' Gets the Markdown text of the document
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Removing an existing paragraph
	
Remove the existing paragraph in a Markdown document by iterating over the `Blocks` collection and accessing the paragraph. The following code example demonstrates how to remove an existing paragraph.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document
FileStream fileStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
MdImportSettings settings = new MdImportSettings();
MarkdownDocument markdownDocument = new MarkdownDocument(fileStream, settings);
// Iterates through the blocks of the document
foreach (IMdBlock block in markdownDocument.Blocks)
{
    // Retrieves the first paragraph of the Blocks 
    if (block is MdParagraph)
    {
        // Removes the first paragraph from the document
        markdownDocument.Blocks.Remove(block);                    
        break;
    }
}
// Gets the Markdown text of the document
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document
 Dim fileStream As New FileStream("Input.md", FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
 Dim settings As New MdImportSettings()
 Dim markdownDocument As New MarkdownDocument(fileStream, settings)
 ' Iterates through the blocks of the document
 For Each block As IMdBlock In markdownDocument.Blocks
     ' Retrieves the first paragraph of the Blocks
     If TypeOf block Is MdParagraph Then
         ' Removes the first paragraph from the document
         markdownDocument.Blocks.Remove(block)
         Exit For
     End If
 Next
 ' Gets the Markdown text of the document
 Dim markdownText As String = markdownDocument.GetMarkdownText()
 ' Saves the Markdown document to the file system
 File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
 ' Disposes the document
 markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Applying paragraph styles

Paragraph styles define the visual appearance of a paragraph in a Markdown document. The Syncfusion Markdown library supports heading styles (Heading 1 through Heading 6), blockquote style, and the default normal paragraph style. You can apply a style to a paragraph by using the `ApplyParagraphStyle` method of the `MdParagraph` class.

The following are the supported paragraph styles in the Syncfusion Markdown library:

| Style Name | `ApplyParagraphStyle` argument | Markdown output |
|---|---|---|
| Normal | `"None"` | Plain paragraph |
| Heading 1 | `"Heading 1"` | `# Heading` |
| Heading 2 | `"Heading 2"` | `## Heading` |
| Heading 3 | `"Heading 3"` | `### Heading` |
| Heading 4 | `"Heading 4"` | `#### Heading` |
| Heading 5 | `"Heading 5"` | `##### Heading` |
| Heading 6 | `"Heading 6"` | `###### Heading` |
| Blockquote | `"Quote"` | `> Quote text` |

### Applying heading styles

The following code example demonstrates how to apply heading styles (Heading 1 through Heading 6) to paragraphs in a Markdown document.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a paragraph and applies the Heading 1 style
MdParagraph heading1 = markdownDocument.AddParagraph();
heading1.ApplyParagraphStyle("Heading 1");
heading1.AddTextRange().Text = "Heading 1";
// Adds a paragraph and applies the Heading 2 style
MdParagraph heading2 = markdownDocument.AddParagraph();
heading2.ApplyParagraphStyle("Heading 2");
heading2.AddTextRange().Text = "Heading 2";
// Adds a paragraph and applies the Heading 3 style
MdParagraph heading3 = markdownDocument.AddParagraph();
heading3.ApplyParagraphStyle("Heading 3");
heading3.AddTextRange().Text = "Heading 3";
// Adds a paragraph and applies the Heading 4 style
MdParagraph heading4 = markdownDocument.AddParagraph();
heading4.ApplyParagraphStyle("Heading 4");
heading4.AddTextRange().Text = "Heading 4";
// Adds a paragraph and applies the Heading 5 style
MdParagraph heading5 = markdownDocument.AddParagraph();
heading5.ApplyParagraphStyle("Heading 5");
heading5.AddTextRange().Text = "Heading 5";
// Adds a paragraph and applies the Heading 6 style
MdParagraph heading6 = markdownDocument.AddParagraph();
heading6.ApplyParagraphStyle("Heading 6");
heading6.AddTextRange().Text = "Heading 6";
// Gets the Markdown text of the document
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As New MarkdownDocument()
' Adds a paragraph and applies the Heading 1 style
Dim heading1 As MdParagraph = markdownDocument.AddParagraph()
heading1.ApplyParagraphStyle("Heading 1")
heading1.AddTextRange().Text = "Heading 1"
' Adds a paragraph and applies the Heading 2 style
Dim heading2 As MdParagraph = markdownDocument.AddParagraph()
heading2.ApplyParagraphStyle("Heading 2")
heading2.AddTextRange().Text = "Heading 2"
' Adds a paragraph and applies the Heading 3 style
Dim heading3 As MdParagraph = markdownDocument.AddParagraph()
heading3.ApplyParagraphStyle("Heading 3")
heading3.AddTextRange().Text = "Heading 3"
' Adds a paragraph and applies the Heading 4 style
Dim heading4 As MdParagraph = markdownDocument.AddParagraph()
heading4.ApplyParagraphStyle("Heading 4")
heading4.AddTextRange().Text = "Heading 4"
' Adds a paragraph and applies the Heading 5 style
Dim heading5 As MdParagraph = markdownDocument.AddParagraph()
heading5.ApplyParagraphStyle("Heading 5")
heading5.AddTextRange().Text = "Heading 5"
' Adds a paragraph and applies the Heading 6 style
Dim heading6 As MdParagraph = markdownDocument.AddParagraph()
heading6.ApplyParagraphStyle("Heading 6")
heading6.AddTextRange().Text = "Heading 6"
' Gets the Markdown text of the document
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Working with text

Text within a paragraph is represented by one or more instances of `MdTextRange`. Each `MdTextRange` instance can have its own text formatting applied through the `MdTextFormat` class.

The following code example demonstrates how to add text with formatting to a paragraph.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph paragraph = markdownDocument.AddParagraph();
// Adds a bold text range
MdTextRange firstText = paragraph.AddTextRange();
firstText.Text = "A new text is added to the paragraph";
firstText.TextFormat.Bold = true;
// Gets the Markdown text of the document
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

 ' Creates a new MarkdownDocument instance
 Dim markdownDocument As New MarkdownDocument()
 ' Adds a new paragraph to the document
 Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
 ' Adds a bold text range
 Dim firstText As MdTextRange = paragraph.AddTextRange()
 firstText.Text = "A new text is added to the paragraph"
 firstText.TextFormat.Bold = True
 ' Gets the Markdown text of the document
 Dim markdownText As String = markdownDocument.GetMarkdownText()
 ' Saves the Markdown document to the file system
 File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
 ' Disposes the document
 markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

### Appending a line break

The following code example demonstrates how to add a line break to a paragraph.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph paragraph = markdownDocument.AddParagraph();
// Adds the first text range with bold formatting
MdTextRange firstText = paragraph.AddTextRange();
firstText.Text = "A first text range is added to the paragraph";
firstText.TextFormat.Bold = true;
// Adds the text range for line break and enable the line break
MdTextRange lineBreak = paragraph.AddTextRange();
lineBreak.IsLineBreak = true;
MdTextRange secondText = paragraph.AddTextRange();
secondText.Text = "A second text range is added to the paragraph";
secondText.TextFormat.Bold = true;
// Gets the Markdown text of the document
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph to the document
Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
' Adds the first text range with bold formatting
Dim firstText As MdTextRange = paragraph.AddTextRange()
firstText.Text = "A first text range is added to the paragraph"
firstText.TextFormat.Bold = True
' Adds the text range for line break and enable the line break
Dim lineBreak = paragraph.AddTextRange()
lineBreak.IsLineBreak = True
Dim secondText As MdTextRange = paragraph.AddTextRange()
secondText.Text = "A second text range is added to the paragraph"
secondText.TextFormat.Bold = True
' Gets the Markdown text of the document
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Applying text formatting

Text formatting enhances the appearance of text in a Markdown document. The `MdTextFormat` class provides formatting options such as bold, italic, strikethrough, inline code, subscript, and superscript.

The following code example demonstrates how to apply various text formatting options.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph firstParagraph = markdownDocument.AddParagraph();
// Apply bold for the text range
MdTextRange firstTextRange = firstParagraph.AddTextRange();
firstTextRange.Text = "This is the first text range";
firstTextRange.TextFormat.Bold = true;
// Add line break
MdTextRange lineBreak = firstParagraph.AddTextRange();
lineBreak.IsLineBreak = true;
// Apply strikethrough for the second text range
MdTextRange secondTextRange = firstParagraph.AddTextRange();
secondTextRange.Text = "This is the second text range";
secondTextRange.TextFormat.StrikeThrough = true;
lineBreak = firstParagraph.AddTextRange();
lineBreak.IsLineBreak = true;
// Apply italic for the third text range
MdTextRange thirdTextRange = firstParagraph.AddTextRange();
thirdTextRange.Text = "This is the third text range";
thirdTextRange.TextFormat.Italic = true;
// Add a Second Paragraph
MdParagraph secondParagraph = markdownDocument.AddParagraph();
// Add text to the second paragraph
MdTextRange fourthTextRange = secondParagraph.AddTextRange();
fourthTextRange.Text = "X";
MdTextRange fifthTextRange = secondParagraph.AddTextRange();
fifthTextRange.Text = "2";
// Apply super script formatting for fifth text range.
fifthTextRange.TextFormat.SubSuperScriptType = MdSubSuperScript.SuperScript;
// Add a third Paragraph
MdParagraph thirdParagraph = markdownDocument.AddParagraph();
// Add text to the third Paragraph
MdTextRange sixthTextRange = thirdParagraph.AddTextRange();
sixthTextRange.Text = "m";
MdTextRange seventhTextRange = thirdParagraph.AddTextRange();
seventhTextRange.Text = "3";
// Apply sub script formatting for seventh text range
seventhTextRange.TextFormat.SubSuperScriptType = MdSubSuperScript.SubScript;
// Add a fourth paragraph
MdParagraph fourthParagraph = markdownDocument.AddParagraph();
// Add a text to the fourth paragraph
MdTextRange eighthTextRange = fourthParagraph.AddTextRange();
eighthTextRange.Text = "This is the last text range";
// Apply code span for the eight text range
eighthTextRange.TextFormat.CodeSpan = true;
MdTextRange ninthTextRange = fourthParagraph.AddTextRange();
ninthTextRange.Text = "It's a hidden text range";
ninthTextRange.TextFormat.IsHidden = true;
// Gets the Markdown text of the document
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph to the document
Dim firstParagraph As MdParagraph = markdownDocument.AddParagraph()
' Apply bold for the text range
Dim firstTextRange As MdTextRange = firstParagraph.AddTextRange()
firstTextRange.Text = "This is the first text range"
firstTextRange.TextFormat.Bold = True
' Add line break
Dim lineBreak As MdTextRange = firstParagraph.AddTextRange()
lineBreak.IsLineBreak = True
' Apply strikethrough for the second text range
Dim secondTextRange As MdTextRange = firstParagraph.AddTextRange()
secondTextRange.Text = "This is the second text range"
secondTextRange.TextFormat.StrikeThrough = True
lineBreak = firstParagraph.AddTextRange()
lineBreak.IsLineBreak = True
' Apply italic for the third text range
Dim thirdTextRange As MdTextRange = firstParagraph.AddTextRange()
thirdTextRange.Text = "This is the third text range"
thirdTextRange.TextFormat.Italic = True
' Add a Second Paragraph
Dim secondParagraph As MdParagraph = markdownDocument.AddParagraph()
' Add text to the second paragraph
Dim fourthTextRange As MdTextRange = secondParagraph.AddTextRange()
fourthTextRange.Text = "X"
Dim fifthTextRange As MdTextRange = secondParagraph.AddTextRange()
fifthTextRange.Text = "2"
' Apply super script formatting for fifth text range.
fifthTextRange.TextFormat.SubSuperScriptType = MdSubSuperScript.SuperScript
' Add a third Paragraph
Dim thirdParagraph As MdParagraph = markdownDocument.AddParagraph()
' Add text to the third Paragraph
Dim sixthTextRange As MdTextRange = thirdParagraph.AddTextRange()
sixthTextRange.Text = "m"
Dim seventhTextRange As MdTextRange = thirdParagraph.AddTextRange()
seventhTextRange.Text = "3"
' Apply sub script formatting for seventh text range
seventhTextRange.TextFormat.SubSuperScriptType = MdSubSuperScript.SubScript
' Add a fourth paragraph
Dim fourthParagraph As MdParagraph = markdownDocument.AddParagraph()
' Add a text to the fourth paragraph
Dim eighthTextRange As MdTextRange = fourthParagraph.AddTextRange()
eighthTextRange.Text = "This is the last text range"
' Apply code span for the eight text range
eighthTextRange.TextFormat.CodeSpan = True
Dim ninthTextRange As MdTextRange = fourthParagraph.AddTextRange()
ninthTextRange.Text = "It's a hidden text range"
ninthTextRange.TextFormat.IsHidden = True
' Gets the Markdown text of the document
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.


## Working with hyperlinks

Hyperlink is a reference to data that can link to external content like images, files, webpage, and more. In a Markdown document, a hyperlink may target to any one of the following sources:

...
* Webpage: Represents the web content.
* File: Represents the file in some location.
* Email: Represents an Email.

The following code example demonstrates how to add a hyperlink to a paragraph.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph firstParagraph = markdownDocument.AddParagraph();
// Adds a hyperlink to the paragraph
MdHyperlink hyperlink = firstParagraph.AddHyperlink();
// Sets the display text of the hyperlink
hyperlink.DisplayText = "Syncfusion";
// Sets the URL of the hyperlink
hyperlink.Url = "http://www.syncfusion.com";
// Gets the Markdown text of the document
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph to the document
Dim firstParagraph As MdParagraph = markdownDocument.AddParagraph()
' Adds a hyperlink to the paragraph
Dim hyperlink As MdHyperlink = firstParagraph.AddHyperlink()
' Sets the display text of the hyperlink
hyperlink.DisplayText = "Syncfusion"
' Sets the URL of the hyperlink
hyperlink.Url = "http://www.syncfusion.com"
' Gets the Markdown text of the document
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

### Link with screen tip

The following code example demonstrates how to add a hyperlink with a screen tip to a paragraph.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph firstParagraph = markdownDocument.AddParagraph();
// Adds a hyperlink to the paragraph
MdHyperlink hyperlink = firstParagraph.AddHyperlink();
// Sets the display text of the hyperlink
hyperlink.DisplayText = "Syncfusion";
// Sets the URL of the hyperlink
hyperlink.Url = "http://www.syncfusion.com";
// Sets the screen tip of the hyperlink
hyperlink.ScreenTip = "Visit our site";
// Gets the Markdown text of the document
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph to the document
Dim firstParagraph As MdParagraph = markdownDocument.AddParagraph()
' Adds a hyperlink to the paragraph
Dim hyperlink As MdHyperlink = firstParagraph.AddHyperlink()
' Sets the display text of the hyperlink
hyperlink.DisplayText = "Syncfusion"
' Sets the URL of the hyperlink
hyperlink.Url = "http://www.syncfusion.com"
' Sets the screen tip of the hyperlink
hyperlink.ScreenTip = "Visit our site"
' Gets the Markdown text of the document
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

### Applying formatting for the display text

The following code example demonstrates how to apply formatting to the display text of a hyperlink.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph firstParagraph = markdownDocument.AddParagraph();
MdHyperlink boldHyperlink = firstParagraph.AddHyperlink();
boldHyperlink.DisplayText = "**Syncfusion**";
boldHyperlink.Url = "http://www.syncfusion.com";
// Adds a new paragraph to the document
MdParagraph secondParagraph = markdownDocument.AddParagraph();
MdHyperlink italicHyperlink = secondParagraph.AddHyperlink();
italicHyperlink.DisplayText = "*Syncfusion*";
italicHyperlink.Url = "http://www.syncfusion.com";
// Gets the Markdown text of the document
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

 ' Creates a new MarkdownDocument instance
 Dim markdownDocument As New MarkdownDocument()
 ' Adds a new paragraph to the document
 Dim firstParagraph As MdParagraph = markdownDocument.AddParagraph()
 Dim boldHyperlink As MdHyperlink = firstParagraph.AddHyperlink()
 boldHyperlink.DisplayText = "**Syncfusion**"
 boldHyperlink.Url = "http://www.syncfusion.com"
 ' Adds a new paragraph to the document
 Dim secondParagraph As MdParagraph = markdownDocument.AddParagraph()
 Dim italicHyperlink As MdHyperlink = secondParagraph.AddHyperlink()
 italicHyperlink.DisplayText = "*Syncfusion*"
 italicHyperlink.Url = "http://www.syncfusion.com"
 ' Gets the Markdown text of the document
 Dim markdownText As String = markdownDocument.GetMarkdownText()
 ' Saves the Markdown document to the file system
 File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
 ' Disposes the document
 markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.
