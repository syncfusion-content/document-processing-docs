---
title: Working with Markdown document in C# | Markdown | Syncfusion
description: Learn to clone and merge Markdown documents with ease, as well as iterate through DOM elements using .NET Markdown library.
platform: document-processing
control: Markdown
documentation: UG
---
# Working with Markdown document

## Cloning a Markdown document

You can create a deep copy of a Markdown document by using `Clone` method of `MarkdownDocument` class. You can read the template document from file system or stream and create multiple document copies by cloning it. This improves the performance of document generation, as there is no need to read the Markdown document each time.

N> Refer to the appropriate tabs in the code snippets section: ***C#*** for ASP.NET Core, Blazor, ASP.NET MVC, UWP, .NET MAUI, WinUI, WinForms and WPF; ***VB.NET*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C#" %}
//Opens an existing Markdown document
using (MarkdownDocument sourceDocument = new MarkdownDocument("Input.md"))
{
    //Creates a clone of Input Template 
    MarkdownDocument clonedDocument = sourceDocument.Clone();
    //Saves and closes the cloned document instance
    clonedDocument.Save("Output.md");
    //Closes the document
    clonedDocument.Dispose();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
'Opens an existing Markdown document
Using sourceDocument As MarkdownDocument = New MarkdownDocument("Input.md")
    'Creates a clone of Input Template 
    Dim clonedDocument As MarkdownDocument = sourceDocument.Clone()
    'Saves and closes the cloned document instance
    clonedDocument.Save("Output.md")
    'Closes the document
    clonedDocument.Dispose()
End Using
{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Working-with-Markdown-document/Clone-whole-Markdown-document/.NET).

You can also create a deep copy of Markdown document elements such as paragraphs, headings, blockquotes, code blocks, lists, tables, images, and more. The following code example illustrates how to clone blocks of a Markdown document and save each cloned blocks as a separate Markdown document.

{% tabs %}

{% highlight c# tabtitle="C#" %}
//Opens an existing Markdown document
MarkdownDocument sourceDocument = new MarkdownDocument("Input.md");
//Processes each blocks in the Markdown document
for (int i = 0; i < sourceDocument.Blocks.Count; i++)
{
    //Creates new MarkdownDocument instance to add cloned section
    MarkdownDocument destinationDocument = new MarkdownDocument();
    //Clones and adds source document Blocks to the destination document
    destinationDocument.Blocks.Add((IMdBlock)sourceDocument.Blocks[i].Clone());
    //Saves and closes the document instance
    destinationDocument.Save("Block_" + i + ".md");
    destinationDocument.Dispose();
}
//Closes the source document instance
sourceDocument.Dispose();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
'Opens an existing Markdown document
Dim sourceDocument As MarkdownDocument = New MarkdownDocument("Input.md")
'Processes each blocks in the Markdown document
For i As Integer = 0 To sourceDocument.Blocks.Count - 1
    'Creates new MarkdownDocument instance to add cloned section
    Dim destinationDocument As New MarkdownDocument()
    'Clones and adds source document Blocks to the destination document
    destinationDocument.Blocks.Add(CType(sourceDocument.Blocks(i).Clone(), IMdBlock))
    'Saves and closes the document instance
    destinationDocument.Save("Block_" + i + ".md")
    destinationDocument.Dispose()
Next
'Closes the source document instance
sourceDocument.Dispose()
{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Working-with-Markdown-document/Split-by-blocks/.NET).