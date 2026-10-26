---
title: Markdown Documents in .NET Markdown Library | Syncfusion
description: Learn how to clone, merge, and traverse elements in Markdown documents programmatically using the .NET Markdown library.
platform: document-processing
control: Markdown
documentation: UG
---
# Markdown documents in .NET Markdown Library

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

## Merging Markdown Documents

You can merge multiple Markdown documents by combining blocks from a source document into a destination document. This is useful when you want to consolidate content from multiple Markdown files into one unified document. The merge operation allows you to clone and add blocks from a source document to a destination document while preserving the formatting and structure of both documents.

The following code example demonstrates how to merge two Markdown documents:

{% tabs %}

{% highlight c# tabtitle="C#" %}
//Opens an existing Markdown documents
MarkdownDocument sourceDocument = new MarkdownDocument(Path.GetFullPath("Data/SourceDocument.md"));
MarkdownDocument destinationDocument = new MarkdownDocument(Path.GetFullPath("Data/DestinationDocument.md"));
//Processes each blocks in the Markdown document
for (int i = 0; i < sourceDocument.Blocks.Count; i++)
{
    //Clones and adds source document Blocks to the destination document
    destinationDocument.Blocks.Add((IMdBlock)sourceDocument.Blocks[i].Clone());
}
//Saves and closes the document instance
destinationDocument.Save(Path.GetFullPath("Output/MergedDocument.md"));
destinationDocument.Dispose();
//Closes the source document instance
sourceDocument.Dispose();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
'Opens an existing Markdown documents
Dim sourceDocument As MarkdownDocument = New MarkdownDocument(Path.GetFullPath("Data/SourceDocument.md"))
Dim destinationDocument As MarkdownDocument = New MarkdownDocument(Path.GetFullPath("Data/DestinationDocument.md"))
'Processes each blocks in the Markdown document
For i As Integer = 0 To sourceDocument.Blocks.Count - 1
    'Clones and adds source document Blocks to the destination document
    destinationDocument.Blocks.Add(CType(sourceDocument.Blocks(i).Clone(), IMdBlock))
Next
'Saves and closes the document instance
destinationDocument.Save(Path.GetFullPath("Output/MergedDocument.md"))
destinationDocument.Dispose()
'Closes the source document instance
sourceDocument.Dispose()
{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Working-with-Markdown-document/Merge-Markdown/.NET).