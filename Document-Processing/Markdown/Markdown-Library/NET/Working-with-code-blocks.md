---
title: Working with Code Blocks in .NET Markdown library | Syncfusion
description: Learn to add, format, and modify code blocks in a Markdown document using Syncfusion .NET Markdown library without any third-party dependencies.
platform: document-processing
control: Markdown
documentation: UG
---

# Working with Code Blocks

Code blocks are fundamental elements in technical documentation and Markdown documents. They are used to display programming code, configuration files, command-line instructions, and other preformatted text. The Syncfusion<sup>&reg;</sup> .NET Markdown library enables you to create, modify, and manage code blocks programmatically in a Markdown document. Code blocks are represented by the `MdCodeBlock` class.

## Types of code blocks

The Syncfusion<sup>&reg;</sup> .NET Markdown library supports two primary types of code blocks:

* **Fenced code blocks**: Code blocks enclosed with triple backticks (```) or triple tildes (~~~), allowing optional language specification for syntax highlighting.
* **Indented code blocks**: Traditional code blocks created by indenting each line with four spaces or one tab.

N> The `IsFencedCode` property controls the code block type. By default, code blocks are created as fenced code blocks.

## Creating a fenced code block

You can add a code block to a `MarkdownDocument` by using the `AddCodeBlock` method. The following code example demonstrates how to create a fenced code block explicitly.

N> Refer to the appropriate tabs in the code snippets section: ***C#*** for ASP.NET Core, Blazor, ASP.NET MVC, UWP, .NET MAUI, WinUI, WinForms and WPF; ***VB.NET*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new code block to the document
MdCodeBlock codeBlock = markdownDocument.AddCodeBlock();
//Sets the code block as fenced (default behavior)
codeBlock.IsFencedCode = true;
// Adds code lines to the code block
codeBlock.Lines.Add("public class Person");
codeBlock.Lines.Add("{");
codeBlock.Lines.Add("    public string Name { get; set; }");
codeBlock.Lines.Add("    public int Age { get; set; }");
codeBlock.Lines.Add("}");
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

 ' Creates a new MarkdownDocument instance
 Dim markdownDocument As MarkdownDocument = New MarkdownDocument()
 ' Adds a new code block to the document
 Dim codeBlock As MdCodeBlock = markdownDocument.AddCodeBlock()
 'Sets the code block as fenced (default behavior)
 codeBlock.IsFencedCode = True
 ' Adds code lines to the code block
 codeBlock.Lines.Add("public class Person")
 codeBlock.Lines.Add("{")
 codeBlock.Lines.Add("    public string Name { get; set; }")
 codeBlock.Lines.Add("    public int Age { get; set; }")
 codeBlock.Lines.Add("}")
 ' Saves the Markdown document to the file system
 markdownDocument.Save("Output.md")
 ' Disposes the document
 markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Code-Blocks/Add-fenced-code-blocks/.NET).

## Creating indented code blocks

Indented code blocks represent the traditional Markdown approach for code blocks. Each line is indented with four spaces or one tab. The following code example demonstrates how to create an indented code block.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new code block to the document
MdCodeBlock codeBlock = markdownDocument.AddCodeBlock();
//Sets the code block as indented
codeBlock.IsFencedCode = false;
// Adds code lines to the code block
codeBlock.Lines.Add("public class Person");
codeBlock.Lines.Add("{");
codeBlock.Lines.Add("    public string Name { get; set; }");
codeBlock.Lines.Add("    public int Age { get; set; }");
codeBlock.Lines.Add("}");
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As MarkdownDocument = New MarkdownDocument()
' Adds a new code block to the document
Dim codeBlock As MdCodeBlock = markdownDocument.AddCodeBlock()
'Sets the code block as indented
codeBlock.IsFencedCode = False
' Adds code lines to the code block
codeBlock.Lines.Add("public class Person")
codeBlock.Lines.Add("{")
codeBlock.Lines.Add("    public string Name { get; set; }")
codeBlock.Lines.Add("    public int Age { get; set; }")
codeBlock.Lines.Add("}")
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Code-Blocks/Add-indented-code-block/.NET).

## Modifying an existing code block

Existing code blocks in a parsed Markdown document can be modified by iterating through the blocks and updating the `Lines` collection. The following code example demonstrates how to modify a code block.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document
MarkdownDocument markdownDocument = new MarkdownDocument(Path.GetFullPath("Input.md"));
// Iterates through the blocks of the document
foreach (IMdBlock block in markdownDocument.Blocks)
{
    if (block is MdCodeBlock codeBlock)
    {
        // Adds a comment at the beginning of each code block
        codeBlock.Lines.Insert(0, "// Code modified by Markdown Library");
        // Converts to fenced code block if it's indented
        if (!codeBlock.IsFencedCode)
        {
            codeBlock.IsFencedCode = true;
        }
    }
}
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document
Dim markdownDocument As MarkdownDocument = New MarkdownDocument(Path.GetFullPath("Input.md"))
' Iterates through the blocks of the document
For Each block As IMdBlock In markdownDocument.Blocks
    Dim codeBlock As MdCodeBlock = TryCast(block, MdCodeBlock)
    If codeBlock IsNot Nothing Then
        ' Adds a comment at the beginning of each code block
        codeBlock.Lines.Insert(0, "// Code modified by Markdown Library")
        ' Converts to fenced code block if it's indented
        If Not codeBlock.IsFencedCode Then
            codeBlock.IsFencedCode = True
        End If
    End If
Next
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Code-Blocks/Modifying-an-existing-code-block/.NET).


