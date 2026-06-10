---
title: Loading and Saving Markdown document in C# | Syncfusion
description: Learn how to load and save a Markdown document in C# and VB.NET using Syncfusion<sup>&reg;</sup> .NET Markdown library without external dependencies.
platform: document-processing
control: Markdown
documentation: UG
---


# Loading and Saving a Markdown Document

The Syncfusion<sup>&reg;</sup> Markdown library allows you to load an existing Markdown document and save it to the file system or stream programmatically.

## Namespaces required

The following namespaces of Essential<sup>&reg;</sup> Markdown need to be included in your application to load and save the Markdown document.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Syncfusion.Office.Markdown;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports Syncfusion.Office.Markdown

{% endhighlight %}

{% endtabs %}

## Opening an existing Markdown document

You can open an existing Markdown document by using either the **Open** method or the constructor of the **MarkdownDocument** class.

### Opening using constructor

The `MarkdownDocument` class allows you to open an existing Markdown document by passing the stream or string as constructor parameters.

The following code example demonstrates how to open an existing Markdown document using the constructor.


{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document using constructor.
FileStream fileStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read);
MarkdownDocument markdownDocument = new MarkdownDocument(fileStream);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document using constructor.
Dim fileStream As New FileStream("Input.md", FileMode.Open, FileAccess.Read)
Dim markdownDocument As New MarkdownDocument(fileStream)

{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document using constructor.
MarkdownDocument markdownDocument = new MarkdownDocument(Path.GetFullPath("Input.md"));

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document using constructor.
Dim markdownDocument As New MarkdownDocument(Path.GetFullPath("Input.md"))

{% endhighlight %}

{% endtabs %}

### Opening using Open Method

The `MarkdownDocument` class also provides the `Open` method to open an existing Markdown document from a stream or string.

The following code example demonstrates how to open an existing Markdown document using the `Open` method.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates an empty MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Opens an existing Markdown document using the Open method.
FileStream fileStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read);
markdownDocument.Open(fileStream);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new instance of MarkdownDocument.
Dim markdownDocument As New MarkdownDocument()
' Opens an existing Markdown document using the Open method.
Dim fileStream As New FileStream("Input.md", FileMode.Open, FileAccess.Read)
markdownDocument.Open(fileStream)

{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates an empty MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Opens an existing Markdown document using the Open method.
markdownDocument.Open("Input.md");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new instance of MarkdownDocument.
Dim markdownDocument As New MarkdownDocument()
' Opens an existing Markdown document using the Open method.
markdownDocument.Open("Input.md")

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Saving a Markdown Document to file system

You can save the created or manipulated Markdown document to file system using `Save` method of `MarkdownDocument` class.

The following code example demonstrates how to save a Markdown document to the file system.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates an empty MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Opens an existing Markdown document using the Open method.
markdownDocument.Open("Input.md");
// To-Do some manipulation
// To-Do some manipulation
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new instance of MarkdownDocument.
Dim markdownDocument As New MarkdownDocument()
' Opens an existing Markdown document using the Open method.
markdownDocument.Open("Input.md")
'To-Do some manipulation
'To-Do some manipulation
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")

{% endhighlight %}

{% endtabs %}

## Saving a Markdown Document to stream

You can also save the created or manipulated Markdown document to stream by using overloads of `Save` methods.

The following code example demonstrates how to save a Markdown document to the file system.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates an empty MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Opens an existing Markdown document using the Open method.
markdownDocument.Open("Input.md");
// To-Do some manipulation
// To-Do some manipulation
// Creates an instance of memory stream
MemoryStream stream = new MemoryStream();
// Saves the Markdown document to the stream
markdownDocument.Save(stream);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new instance of MarkdownDocument.
Dim markdownDocument As New MarkdownDocument()
' Opens an existing Markdown document using the Open method.
markdownDocument.Open("Input.md")
'To-Do some manipulation
'To-Do some manipulation
'Creates an instance of memory stream
Dim stream As New MemoryStream()
' Saves the Markdown document to the stream
markdownDocument.Save(stream)

{% endhighlight %}

{% endtabs %}

## Closing a document

Once the document manipulation and save operations are completed, you should close or dispose the instance of MarkdownDocument instance in order to release all the memory consumed by the Markdown library's DOM. The following code example illustrates how to close a `MarkdownDocument` instance.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens, saves and closes a Markdown document.
MarkdownDocument markdownDocument = new MarkdownDocument("Input.md");

// To-Do some manipulation
// To-Do some manipulation

// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");

//Dispose the document to release all memory
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens, saves and closes a Markdown document.
Dim markdownDocument As New MarkdownDocument("Input.md")

'To-Do some manipulation
'To-Do some manipulation

' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")

' Disposes the document to release all memory.
markdownDocument.Dispose()

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.
