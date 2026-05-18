---
title: Working with Blockquotes in .NET Markdown Library | Syncfusion
description: Learn how to create, format, and manipulate blockquotes in a Markdown document using the Syncfusion .NET Markdown library.
platform: document-processing
control: Markdown
documentation: UG
---

# Working with Blockquotes in Markdown Library

Blockquotes are used to highlight quoted text, notes, warnings, or other content that needs visual distinction from the main text. In the Syncfusion Markdown library, blockquotes are created using the `HasBlockquote` and `BlockQuoteLevel` properties of the `MdParagraph` class. Blockquotes support single-level and multi-level nesting, and can contain formatted text, links, and other inline elements.

## Adding a Blockquote

The following code example demonstrates how to add a simple blockquote to a Markdown document.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 // Creates a new MarkdownDocument instance
 MarkdownDocument markdownDocument = new MarkdownDocument();
 // Adds a new paragraph to the document
 MdParagraph paragraph = markdownDocument.AddParagraph();
 // Enables blockquote for the paragraph
 paragraph.HasBlockquote = true;
 // Sets the blockquote level to 1
 paragraph.BlockQuoteLevel = 1;
 // Adds text to the blockquote paragraph.
 paragraph.AddTextRange().Text = "This is a simple blockquote in a Markdown document.";
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
' Enables blockquote for the paragraph
paragraph.HasBlockquote = True
' Sets the blockquote level to 1
paragraph.BlockQuoteLevel = 1
' Adds text to the blockquote paragraph.
paragraph.AddTextRange().Text = "This is a simple blockquote in a Markdown document."
' Gets the Markdown text of the document
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Applying Blockquote Style Using ApplyParagraphStyle

You can also create a blockquote by applying the `"Quote"` style using the `ApplyParagraphStyle` method of the `MdParagraph` class. This is equivalent to setting `HasBlockquote = true` and `BlockQuoteLevel = 1`.

The following code example demonstrates how to create a blockquote using the `ApplyParagraphStyle` method.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 // Creates a new Markdown document.
 MarkdownDocument markdownDocument = new MarkdownDocument();
 // Adds a new paragraph
 MdParagraph paragraph = markdownDocument.AddParagraph();
 // Applies the Quote paragraph style
 paragraph.ApplyParagraphStyle("Quote");
 // Adds text to the blockquote paragraph.
 paragraph.AddTextRange().Text = "This blockquote is created using paragraph style.";
 // Gets the Markdown text of the document.
 string markdownText = markdownDocument.GetMarkdownText();
 // Saves the Markdown document to the file system.
 File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
 // Disposes the document to release all memory.
 markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

 ' Creates a new Markdown document.
 Dim markdownDocument As New MarkdownDocument()
 ' Adds a new paragraph
 Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
 ' Applies the Quote paragraph style
 paragraph.ApplyParagraphStyle("Quote")
 ' Adds text to the blockquote paragraph.
 paragraph.AddTextRange().Text = "This blockquote is created using paragraph style."
 ' Gets the Markdown text of the document.
 Dim markdownText As String = markdownDocument.GetMarkdownText()
 ' Saves the Markdown document to the file system.
 File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
 ' Disposes the document to release all memory.
 markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Adding Leading Space

By default, blockquote are followed by without a leading space. You can add a leading space after the blockquote paragraph by setting the `BlockQuoteHasLeadingSpace` property to `true`.

The following code example demonstrates how to add the leading space to blockquotes.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new Markdown document.
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph
MdParagraph firstParagraph = markdownDocument.AddParagraph();
// Adds text to the blockquote paragraph.
firstParagraph.AddTextRange().Text = "First paragraph of the document";
// Adds a new paragraph
MdParagraph secondParagraph = markdownDocument.AddParagraph();
// Enables blockquote for the paragraph
secondParagraph.HasBlockquote = true;
// Sets the blockquote level to 1
secondParagraph.BlockQuoteLevel = 1;
// Enables blockquote has leading space for the paragraph
secondParagraph.BlockQuoteHasLeadingSpace = true;
// Adds text to the blockquote paragraph.
secondParagraph.AddTextRange().Text = "This quote shows a leading space.";
// Adds a new paragraph
MdParagraph thirdParagraph = markdownDocument.AddParagraph();
// Enables blockquote for the paragraph
thirdParagraph.HasBlockquote = true;
// Sets the blockquote level to 1
thirdParagraph.BlockQuoteLevel = 1;
// Blockquote has no leading space for the paragraph - Default values as False. 
thirdParagraph.BlockQuoteHasLeadingSpace = false;
// Adds text to the blockquote paragraph.
thirdParagraph.AddTextRange().Text = "This quote has no leading space.";
// Gets the Markdown text of the document
string markdownText = markdownDocument.GetMarkdownText();
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new Markdown document.
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph
Dim firstParagraph As MdParagraph = markdownDocument.AddParagraph()
' Adds text to the blockquote paragraph.
firstParagraph.AddTextRange().Text = "First paragraph of the document"
' Adds a new paragraph
Dim secondParagraph As MdParagraph = markdownDocument.AddParagraph()
' Enables blockquote for the paragraph
secondParagraph.HasBlockquote = True
' Sets the blockquote level to 1
secondParagraph.BlockQuoteLevel = 1
' Enables blockquote has leading space for the paragraph
secondParagraph.BlockQuoteHasLeadingSpace = True
' Adds text to the blockquote paragraph.
secondParagraph.AddTextRange().Text = "This quote shows a leading space."
' Adds a new paragraph
Dim thirdParagraph As MdParagraph = markdownDocument.AddParagraph()
' Enables blockquote for the paragraph
thirdParagraph.HasBlockquote = True
' Sets the blockquote level to 1
thirdParagraph.BlockQuoteLevel = 1
' Blockquote has no leading space for the paragraph - Default values as False.
thirdParagraph.BlockQuoteHasLeadingSpace = False
' Adds text to the blockquote paragraph.
thirdParagraph.AddTextRange().Text = "This quote has no leading space."
' Gets the Markdown text of the document
Dim markdownText As String = markdownDocument.GetMarkdownText()
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.


## Creating Nested Blockquotes

Blockquotes can be nested to represent hierarchical quoted content, such as replies in email threads or multi-level notes. The `BlockQuoteLevel` property controls the nesting level, with values starting from 1 for the first level.

The following code example demonstrates how to create nested blockquotes.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph
MdParagraph blockLevel1 = markdownDocument.AddParagraph();
// Enables blockquote for the paragraph
blockLevel1.HasBlockquote = true;
// Sets the blockquote level
blockLevel1.BlockQuoteLevel = 1;
// Adds text to the blockquote paragraph.
blockLevel1.AddTextRange().Text = "This is the first level blockquote.";
// Adds a level 2 blockquote (nested)
MdParagraph blockLevel2 = markdownDocument.AddParagraph();
// Enables blockquote for the paragraph
blockLevel2.HasBlockquote = true;
// Sets the blockquote level
blockLevel2.BlockQuoteLevel = 2;
// Adds text to the blockquote paragraph.
blockLevel2.AddTextRange().Text = "This is the second level blockquote.";
// Adds a level 3 blockquote (double nested)
MdParagraph blockLevel3 = markdownDocument.AddParagraph();
// Enables blockquote for the paragraph
blockLevel3.HasBlockquote = true;
// Sets the blockquote level
blockLevel3.BlockQuoteLevel = 3;
// Adds text to the blockquote paragraph.
blockLevel3.AddTextRange().Text = "This is the third level blockquote.";
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
' Adds a new paragraph
Dim blockLevel1 As MdParagraph = markdownDocument.AddParagraph()
' Enables blockquote for the paragraph
blockLevel1.HasBlockquote = True
' Sets the blockquote level
blockLevel1.BlockQuoteLevel = 1
' Adds text to the blockquote paragraph.
blockLevel1.AddTextRange().Text = "This is the first level blockquote."
' Adds a level 2 blockquote (nested)
Dim blockLevel2 As MdParagraph = markdownDocument.AddParagraph()
' Enables blockquote for the paragraph
blockLevel2.HasBlockquote = True
' Sets the blockquote level
blockLevel2.BlockQuoteLevel = 2
' Enables blockquote has leading space for the paragraph
blockLevel2.BlockQuoteHasLeadingSpace = True
' Adds text to the blockquote paragraph.
blockLevel2.AddTextRange().Text = "This is the second level blockquote."
' Adds a level 3 blockquote (double nested)
Dim blockLevel3 As MdParagraph = markdownDocument.AddParagraph()
' Enables blockquote for the paragraph
blockLevel3.HasBlockquote = True
' Sets the blockquote level
blockLevel3.BlockQuoteLevel = 3
' Enables blockquote has leading space for the paragraph
blockLevel3.BlockQuoteHasLeadingSpace = True
' Adds text to the blockquote paragraph.
blockLevel3.AddTextRange().Text = "This is the third level blockquote."
' Gets the Markdown text of the document
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Applying Text Formatting in a Blockquote

Blockquotes can contain formatted text such as bold, italic, strikethrough, and inline code. You can apply formatting to text within a blockquote using the `MdTextFormat` class.

The following code example demonstrates how to apply text formatting within a blockquote.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new Markdown document.
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph firstQuote = markdownDocument.AddParagraph();
// Enables blockquote for the paragraph
firstQuote.HasBlockquote = true;
// Enables blockquote has leading space for the paragraph
firstQuote.BlockQuoteHasLeadingSpace = true;
// Sets the blockquote level to 1
firstQuote.BlockQuoteLevel = 1;
// Adds plain text to the blockquote paragraph.
firstQuote.AddTextRange().Text = "This is the ";
// Adds bold text to the blockquote paragraph.
MdTextRange boldText = firstQuote.AddTextRange();
boldText.Text = "first level";
boldText.TextFormat.Bold = true;
// Adds a new paragraph to the document
MdParagraph secondQuote = markdownDocument.AddParagraph();
// Enables blockquote for the paragraph
secondQuote.HasBlockquote = true;
// Enables blockquote has leading space for the paragraph
secondQuote.BlockQuoteHasLeadingSpace = true;
// Sets the blockquote level to 1
secondQuote.BlockQuoteLevel = 1;
// Adds plain text to the blockquote paragraph.
secondQuote.AddTextRange().Text = "This is the ";
// Adds italic text to the blockquote paragraph.
MdTextRange italicText = secondQuote.AddTextRange();
italicText.Text = "first level";
italicText.TextFormat.Italic = true;
// Adds a new paragraph to the document
MdParagraph thirdQuote = markdownDocument.AddParagraph();
// Enables blockquote for the paragraph
thirdQuote.HasBlockquote = true;
// Enables blockquote has leading space for the paragraph
thirdQuote.BlockQuoteHasLeadingSpace = true;
// Sets the blockquote level to 1
thirdQuote.BlockQuoteLevel = 1;
// Adds plain text to the blockquote paragraph.
thirdQuote.AddTextRange().Text = "This is the ";
// Adds italic text to the blockquote paragraph.
MdTextRange codespanText = thirdQuote.AddTextRange();
codespanText.Text = "first level";
codespanText.TextFormat.CodeSpan = true;
// Gets the Markdown text of the document.
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system.
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document to release all memory.
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new Markdown document.
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph to the document
Dim firstQuote As MdParagraph = markdownDocument.AddParagraph()
' Enables blockquote for the paragraph
firstQuote.HasBlockquote = True
' Enables blockquote has leading space for the paragraph
firstQuote.BlockQuoteHasLeadingSpace = True
' Sets the blockquote level to 1
firstQuote.BlockQuoteLevel = 1
' Adds plain text to the blockquote paragraph.
firstQuote.AddTextRange().Text = "This is the "
' Adds bold text to the blockquote paragraph.
Dim boldText As MdTextRange = firstQuote.AddTextRange()
boldText.Text = "first level"
boldText.TextFormat.Bold = True
' Adds a new paragraph to the document
Dim secondQuote As MdParagraph = markdownDocument.AddParagraph()
' Enables blockquote for the paragraph
secondQuote.HasBlockquote = True
' Enables blockquote has leading space for the paragraph
secondQuote.BlockQuoteHasLeadingSpace = True
' Sets the blockquote level to 1
secondQuote.BlockQuoteLevel = 1
' Adds plain text to the blockquote paragraph.
secondQuote.AddTextRange().Text = "This is the "
' Adds italic text to the blockquote paragraph.
Dim italicText As MdTextRange = secondQuote.AddTextRange()
italicText.Text = "first level"
italicText.TextFormat.Italic = True
' Adds a new paragraph to the document
Dim thirdQuote As MdParagraph = markdownDocument.AddParagraph()
' Enables blockquote for the paragraph
thirdQuote.HasBlockquote = True
' Enables blockquote has leading space for the paragraph
thirdQuote.BlockQuoteHasLeadingSpace = True
' Sets the blockquote level to 1
thirdQuote.BlockQuoteLevel = 1
' Adds plain text to the blockquote paragraph.
thirdQuote.AddTextRange().Text = "This is the "
' Adds italic text to the blockquote paragraph.
Dim codespanText As MdTextRange = thirdQuote.AddTextRange()
codespanText.Text = "first level"
codespanText.TextFormat.CodeSpan = True
' Gets the Markdown text of the document.
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system.
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document to release all memory.
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Modifying an Existing Blockquote

Modify an existing blockquote in a Markdown document by iterating over the `Blocks` collection and updating the `HasBlockquote`, `BlockQuoteLevel`, or inline text content. 

The following code example demonstrates how to modify an existing blockquote.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 FileStream fileStream = new FileStream(Path.GetFullPath(@"Data\Input.md"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
 MdImportSettings settings = new MdImportSettings();
 // Opens an existing document
 MarkdownDocument markdownDocument = new MarkdownDocument(fileStream, settings);
 // Iterates through the blocks of the document
 foreach (IMdBlock block in markdownDocument.Blocks)
 {
	// Checks whether the block is a paragraph
     if (block is MdParagraph)
     {
         MdParagraph paragraph = block as MdParagraph;
        // Checks whether the paragraph is a blockquote
         if (paragraph.HasBlockquote)
         {
             // Increases the nesting level of the blockquote.
             paragraph.BlockQuoteLevel++;
             // Iterates through the inline elements of the blockquote.
             foreach (IMdInline inline in paragraph.Inlines)
             {
                 if (inline is MdTextRange textRange)
                 {
                     // Modifies the text content.
                     textRange.Text = "Modified blockquote content.";
                     break;
                 }
             }
             break;
         }
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

Dim fileStream As New FileStream(Path.GetFullPath("Data\Input.md"), FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
Dim settings As New MdImportSettings()
' Opens an existing document
Dim markdownDocument As New MarkdownDocument(fileStream, settings)
' Iterates through the blocks of the document
For Each block As IMdBlock In markdownDocument.Blocks
    ' Checks whether the block is a paragraph
    If TypeOf block Is MdParagraph Then
        Dim paragraph As MdParagraph = TryCast(block, MdParagraph)
        ' Checks whether the paragraph is a blockquote
        If paragraph.HasBlockquote Then
            ' Increases the nesting level of the blockquote.
            paragraph.BlockQuoteLevel += 1
            ' Iterates through the inline elements of the blockquote.
            For Each inline As IMdInline In paragraph.Inlines
                If TypeOf inline Is MdTextRange Then
                    Dim textRange As MdTextRange = TryCast(inline, MdTextRange)
                    ' Modifies the text content.
                    textRange.Text = "Modified blockquote content."
                    Exit For
                End If
            Next
            Exit For
        End If
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

## Removing a Blockquote

The following code example demonstrates how to remove blockquote from paragraphs.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document.
FileStream fileStream = new FileStream(Path.GetFullPath(@"Data\Input.md"), FileMode.Open, FileAccess.Read);
MdImportSettings settings = new MdImportSettings();
MarkdownDocument markdownDocument = new MarkdownDocument(fileStream, settings);
 // Iterates through the blocks of the document.
 foreach (IMdBlock block in markdownDocument.Blocks)
 {
	// Checks whether the block is a paragraph
     if (block is MdParagraph)
     {
         MdParagraph paragraph = block as MdParagraph;
         // Checks whether the paragraph is a blockquote
         if (paragraph.HasBlockquote)
         {
             // Removes the blockquote.
             paragraph.HasBlockquote = false;
             paragraph.BlockQuoteLevel = 0;
             break;
         }                       
     }
 }
// Gets the Markdown text of the document.
string markdownText = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system.
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);
// Disposes the document to release all memory.
markdownDocument.Dispose();

{% endhighlight %} 

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document.
Dim fileStream As New FileStream(Path.GetFullPath("Data\Input.md"), FileMode.Open, FileAccess.Read)
Dim settings As New MdImportSettings()
Dim markdownDocument As New MarkdownDocument(fileStream, settings)
' Iterates through the blocks of the document.
For Each block As IMdBlock In markdownDocument.Blocks
    ' Checks whether the block is a paragraph
    If TypeOf block Is MdParagraph Then
        Dim paragraph As MdParagraph = TryCast(block, MdParagraph)
        ' Checks whether the paragraph is a blockquote
        If paragraph.HasBlockquote Then
            ' Removes the blockquote.
            paragraph.HasBlockquote = False
            paragraph.BlockQuoteLevel = 0
            Exit For
        End If
    End If
Next
' Gets the Markdown text of the document.
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system.
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)
' Disposes the document to release all memory.
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.