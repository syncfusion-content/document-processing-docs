---
title: Working with Lists in .NET Markdown library | Syncfusion
description: Learn to create, format, and modify lists in a Markdown document using .NET Markdown library without any third-party dependencies.
platform: document-processing
control: Markdown
documentation: UG
---

# Working with Lists in Markdown Library

Lists are essential elements in Markdown documents that organize and present information in a hierarchical and structured manner. The Syncfusion<sup>&reg;</sup> .NET Markdown library supports creating, modifying, and managing both numbered (ordered) and bulleted (unordered) lists in a Markdown document. Lists are not separate block types; they are produced by applying an `MdListFormat` instance to an `MdParagraph`. The library supports up to nine nesting levels (level `0` to level `8`), allowing for complex hierarchical structures.

The Syncfusion<sup>&reg;</sup> .NET Markdown library supports two primary types of lists:

* **Numbered lists (Ordered lists)**: Lists with sequential numbering such as 1., 2., 3., etc.
* **Bulleted lists (Unordered lists)**: Lists with bullet markers such as -, *, or +.

## Creating bulleted list

A bulleted list can be created by setting the `ListFormat` property of a paragraph and configuring it for an unordered list. 

The following code example demonstrates how to create a simple bulleted list.

N> Refer to the appropriate tabs in the code snippets section: ***C#*** for ASP.NET Core, Blazor, ASP.NET MVC, UWP, .NET MAUI, WinUI, WinForms and WPF; ***VB.NET*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds new paragraph to the document
MdParagraph paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Sets the list marker to "- " 
paragraph.ListFormat.ListValue = "- ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "First item";
// Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Sets the list marker to "- " 
paragraph.ListFormat.ListValue = "- ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Second item";
// Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Sets the list marker to "- " 
paragraph.ListFormat.ListValue = "- ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Third item";
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

 ' Creates a new MarkdownDocument instance
 Dim markdownDocument As MarkdownDocument = New MarkdownDocument()
 ' Adds new paragraph to the document
 Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
 ' Initializes list formatting for the paragraph
 paragraph.ListFormat = New MdListFormat()
 ' Sets the list marker to "- " 
 paragraph.ListFormat.ListValue = "- "
 ' Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "First item"
 ' Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph()
 ' Initializes list formatting for the paragraph
 paragraph.ListFormat = New MdListFormat()
 ' Sets the list marker to "- " 
 paragraph.ListFormat.ListValue = "- "
 ' Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Second item"
 ' Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph()
 ' Initializes list formatting for the paragraph
 paragraph.ListFormat = New MdListFormat()
 ' Sets the list marker to "- " 
 paragraph.ListFormat.ListValue = "- "
 ' Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Third item"
 ' Saves the Markdown document to the file system
 markdownDocument.Save("Output.md")
 ' Disposes the document
 markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/List/Add-bullet-list/.NET).

N> The `ListValue` property specifies the complete list prefix including the marker and spacing. For bulleted lists, typical values are "- ", "* ", or "+ ".

## Creating a numbered list

A numbered list can be created by setting the `ListFormat` property of a paragraph and `IsNumbered` property to true and configuring the appropriate marker. 

The following code example demonstrates how to create a simple numbered list.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds new paragraph to the document
MdParagraph paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Enables numbered list formatting
paragraph.ListFormat.IsNumbered = true;
// Sets the list marker to "1. "
paragraph.ListFormat.ListValue = "1. ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "First item";
// Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Enables numbered list formatting
paragraph.ListFormat.IsNumbered = true;
// Sets the list marker to "2. "
paragraph.ListFormat.ListValue = "2. ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Second item";
// Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Enables numbered list formatting
paragraph.ListFormat.IsNumbered = true;
// Sets the list marker to "3. "
paragraph.ListFormat.ListValue = "3. ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Third item";
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As MarkdownDocument = New MarkdownDocument()
' Adds new paragraph to the document
Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
' Initializes list formatting for the paragraph
paragraph.ListFormat = New MdListFormat()
' Enables numbered list formatting
paragraph.ListFormat.IsNumbered = True
' Sets the list marker to "1. "
paragraph.ListFormat.ListValue = "1. "
' Adds a text range to the paragraph
paragraph.AddTextRange().Text = "First item"
' Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph()
' Initializes list formatting for the paragraph
paragraph.ListFormat = New MdListFormat()
' Enables numbered list formatting
paragraph.ListFormat.IsNumbered = True
' Sets the list marker to "2. "
paragraph.ListFormat.ListValue = "2. "
' Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Second item"
' Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph()
' Initializes list formatting for the paragraph
paragraph.ListFormat = New MdListFormat()
' Enables numbered list formatting
paragraph.ListFormat.IsNumbered = True
' Sets the list marker to "3. "
paragraph.ListFormat.ListValue = "3. "
' Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Third item"
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/List/Add-number-list/.NET).

N> The `ListValue` property contains the actual number and marker for each item.

## Creating a multilevel bulleted list

Multilevel bulleted lists can be created by varying the `ListLevel` property. The list level ranges from 0 (root level) to 8 (deepest nested level), supporting up to nine levels of nesting. 

The following code example demonstrates how to create a multilevel bulleted list.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 // Creates a new MarkdownDocument instance
 MarkdownDocument markdownDocument = new MarkdownDocument();
 // Adds new paragraph to the document
 MdParagraph paragraph = markdownDocument.AddParagraph();
 // Initializes list formatting for the paragraph
 paragraph.ListFormat = new MdListFormat();
 // Sets the list level 
 paragraph.ListFormat.ListLevel = 0;
 // Sets the list marker to "- " 
 paragraph.ListFormat.ListValue = "- ";
 // Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Parent item 1";
 // Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph();
 // Initializes list formatting for the paragraph
 paragraph.ListFormat = new MdListFormat();
 // Sets the list level 
 paragraph.ListFormat.ListLevel = 1;
 // Sets the list marker to "  - " 
 paragraph.ListFormat.ListValue = "  - ";
 // Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Child item 1";
 // Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph();
 // Initializes list formatting for the paragraph
 paragraph.ListFormat = new MdListFormat();
 // Sets the list level 
 paragraph.ListFormat.ListLevel = 1;
 // Sets the list marker to "  - " 
 paragraph.ListFormat.ListValue = "  - ";
 // Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Child item 2";
 // Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph();
 // Initializes list formatting for the paragraph
 paragraph.ListFormat = new MdListFormat();
 // Sets the list level 
 paragraph.ListFormat.ListLevel = 2;
 // Sets the list marker to "    - " 
 paragraph.ListFormat.ListValue = "    - ";
 // Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Grandchild item";
 // Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph();
 // Initializes list formatting for the paragraph
 paragraph.ListFormat = new MdListFormat();
 // Sets the list level 
 paragraph.ListFormat.ListLevel = 0;
 // Sets the list marker to "- " 
 paragraph.ListFormat.ListValue = "- ";
 // Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Parent item 2";
 // Saves the Markdown document to the file system
 markdownDocument.Save("Output.md");
 // Disposes the document
 markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

 ' Creates a new MarkdownDocument instance
 Dim markdownDocument As MarkdownDocument = New MarkdownDocument()
 ' Adds new paragraph to the document
 Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
 ' Initializes list formatting for the paragraph
 paragraph.ListFormat = New MdListFormat()
 ' Sets the list level 
 paragraph.ListFormat.ListLevel = 0
 ' Sets the list marker to "- " 
 paragraph.ListFormat.ListValue = "- "
 ' Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Parent item 1"
 ' Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph()
 ' Initializes list formatting for the paragraph
 paragraph.ListFormat = New MdListFormat()
 ' Sets the list level 
 paragraph.ListFormat.ListLevel = 1
 ' Sets the list marker to "  - " 
 paragraph.ListFormat.ListValue = "  - "
 ' Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Child item 1"
 ' Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph()
 ' Initializes list formatting for the paragraph
 paragraph.ListFormat = New MdListFormat()
 ' Sets the list level 
 paragraph.ListFormat.ListLevel = 1
 ' Sets the list marker to "  - " 
 paragraph.ListFormat.ListValue = "  - "
 ' Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Child item 2"
 ' Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph()
 ' Initializes list formatting for the paragraph
 paragraph.ListFormat = New MdListFormat()
 ' Sets the list level 
 paragraph.ListFormat.ListLevel = 2
 ' Sets the list marker to "    - " 
 paragraph.ListFormat.ListValue = "    - "
 ' Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Grandchild item"
 ' Adds new paragraph to the document
 paragraph = markdownDocument.AddParagraph()
 ' Initializes list formatting for the paragraph
 paragraph.ListFormat = New MdListFormat()
 ' Sets the list level 
 paragraph.ListFormat.ListLevel = 0
 ' Sets the list marker to "- " 
 paragraph.ListFormat.ListValue = "- "
 ' Adds a text range to the paragraph
 paragraph.AddTextRange().Text = "Parent item 2"
 ' Saves the Markdown document to the file system
 markdownDocument.Save("Output.md")
 ' Disposes the document
 markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/List/Add-nested-bullet-list/.NET).

N> Each nesting level typically adds spaces of indentation. Level 0 has no indentation.

## Creating a multilevel numbered list

Multilevel numbered lists can be created by varying the `ListLevel` property. The list level ranges from `0` (root level) to `8` (deepest nested level), supporting up to nine levels of nesting. A multilevel numbered list combines a hierarchical structure with sequential numbering at each level.

The following code example demonstrates how to create a multilevel numbered list.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds new paragraph to the document
MdParagraph paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Enables numbered list formatting
paragraph.ListFormat.IsNumbered = true;
// Sets the list level to 0
paragraph.ListFormat.ListLevel = 0;
// Sets the list marker to "1. "
paragraph.ListFormat.ListValue = "1. ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Main topic 1";
// Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Enables numbered list formatting
paragraph.ListFormat.IsNumbered = true;
// Sets the list level to 1
paragraph.ListFormat.ListLevel = 1;
// Sets the list marker to "  1. "
paragraph.ListFormat.ListValue = "  1. ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Subtopic 1.1";
// Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Enables numbered list formatting
paragraph.ListFormat.IsNumbered = true;
// Sets the list level to 1
paragraph.ListFormat.ListLevel = 1;
// Sets the list marker to "  2. "
paragraph.ListFormat.ListValue = "  2. ";
paragraph.AddTextRange().Text = "Subtopic 1.2";
// Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Enables numbered list formatting
paragraph.ListFormat.IsNumbered = true;
// Sets the list level to 2
paragraph.ListFormat.ListLevel = 2;
// Sets the list marker to "    1. "
paragraph.ListFormat.ListValue = "    1. ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Detail 1.2.1";
// Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph();
// Initializes list formatting for the paragraph
paragraph.ListFormat = new MdListFormat();
// Enables numbered list formatting
paragraph.ListFormat.IsNumbered = true;
// Sets the list level to 0
paragraph.ListFormat.ListLevel = 0;
// Sets the list marker to "2. "
paragraph.ListFormat.ListValue = "2. ";
// Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Main topic 2";
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As MarkdownDocument = New MarkdownDocument()
' Adds new paragraph to the document
Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
' Initializes list formatting for the paragraph
paragraph.ListFormat = New MdListFormat()
' Enables numbered list formatting
paragraph.ListFormat.IsNumbered = True
' Sets the list level to 0
paragraph.ListFormat.ListLevel = 0
' Sets the list marker to "1. "
paragraph.ListFormat.ListValue = "1. "
' Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Main topic 1"
' Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph()
' Initializes list formatting for the paragraph
paragraph.ListFormat = New MdListFormat()
' Enables numbered list formatting
paragraph.ListFormat.IsNumbered = True
' Sets the list level to 1
paragraph.ListFormat.ListLevel = 1
' Sets the list marker to "  1. "
paragraph.ListFormat.ListValue = "  1. "
' Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Subtopic 1.1"
' Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph()
' Initializes list formatting for the paragraph
paragraph.ListFormat = New MdListFormat()
' Enables numbered list formatting
paragraph.ListFormat.IsNumbered = True
' Sets the list level to 1
paragraph.ListFormat.ListLevel = 1
' Sets the list marker to "  2. "
paragraph.ListFormat.ListValue = "  2. "
paragraph.AddTextRange().Text = "Subtopic 1.2"
' Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph()
' Initializes list formatting for the paragraph
paragraph.ListFormat = New MdListFormat()
' Enables numbered list formatting
paragraph.ListFormat.IsNumbered = True
' Sets the list level to 2
paragraph.ListFormat.ListLevel = 2
' Sets the list marker to "    1. "
paragraph.ListFormat.ListValue = "    1. "
' Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Detail 1.2.1"
' Adds new paragraph to the document
paragraph = markdownDocument.AddParagraph()
' Initializes list formatting for the paragraph
paragraph.ListFormat = New MdListFormat()
' Enables numbered list formatting
paragraph.ListFormat.IsNumbered = True
' Sets the list level to 0
paragraph.ListFormat.ListLevel = 0
' Sets the list marker to "2. "
paragraph.ListFormat.ListValue = "2. "
' Adds a text range to the paragraph
paragraph.AddTextRange().Text = "Main topic 2"
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/List/Add-nested-number-list/.NET).

N> Each nesting level typically adds spaces of indentation. Level 0 has no indentation.