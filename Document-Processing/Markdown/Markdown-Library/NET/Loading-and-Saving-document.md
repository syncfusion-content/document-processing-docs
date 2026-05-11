---
title: Loading and Saving Markdown document in C# | Syncfusion
description: Learn how to load and save a Markdown document in C# and VB.NET using Syncfusion<sup>&reg;</sup> .NET Markdown library without external dependencies.
platform: document-processing
control: Markdown
documentation: UG
---


# Loading and Saving a Markdown Document

The Syncfusion<sup>&reg;</sup> Markdown library allows you to load an existing Markdown document and save it to the file system programmatically.

## Namespaces required

The following namespaces of Essential<sup>&reg;</sup> Markdown need to be included in your application to load and save the Markdown document.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Syncfusion.Office.Markdown;
using System.Text;
using System.IO;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports System.IO
Imports System.Text
Imports Syncfusion.Office.Markdown

{% endhighlight %}

{% endtabs %}

## Opening an existing Markdown document

You can open an existing Markdown document by using either the **Open** method or the constructor of the **MarkdownDocument** class.

### Opening using constructor

The `MarkdownDocument` class allows you to open an existing Markdown document by passing the stream and import settings as constructor parameters.

The following code example demonstrates how to open an existing Markdown document using the constructor.


{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document using constructor.
FileStream fileStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read);
MdImportSettings mdImportSettings = new MdImportSettings();
MarkdownDocument markdownDocument = new MarkdownDocument(fileStream, mdImportSettings);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document using constructor.
Dim fileStream As New FileStream("Input.md", FileMode.Open, FileAccess.Read)
Dim mdImportSettings As New MdImportSettings()
Dim markdownDocument As New MarkdownDocument(fileStream, mdImportSettings)

{% endhighlight %}

{% endtabs %}

### Opening using Open Method

The `MarkdownDocument` class also provides the `Open` method to open an existing Markdown document from a stream.

The following code example demonstrates how to open an existing Markdown document using the `Open` method.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates an empty MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Opens an existing Markdown document using the Open method.
FileStream fileStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read);
MdImportSettings settings = new MdImportSettings();
markdownDocument.Open(fileStream, settings);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new instance of MarkdownDocument.
Dim markdownDocument As New MarkdownDocument()
' Opens an existing Markdown document using the Open method.
Dim fileStream As New FileStream("Input.md", FileMode.Open, FileAccess.Read)
Dim mdImportSettings As New MdImportSettings()
markdownDocument.Open(fileStream, mdImportSettings)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from GitHub.

## Saving a Markdown Document

After modifying a Markdown document, you can save it to the file system using the `GetMarkdownText` method, which retrieves the Markdown content as a string, and then write the content to a file using the `File.WriteAllText` method.

The following code example demonstrates how to save a Markdown document to the file system.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates an empty MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Opens an existing Markdown document using the Open method.
FileStream fileStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
MdImportSettings settings = new MdImportSettings();
markdownDocument.Open(fileStream, settings);
// To-Do some manipulation
// To-Do some manipulation
// Retrieves the Markdown document content.
string mdContent = markdownDocument.GetMarkdownText();
// Saves the Markdown document to the file system.
File.WriteAllText("Output.md", mdContent, Encoding.UTF8);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new instance of MarkdownDocument.
Dim markdownDocument As New MarkdownDocument()
' Opens an existing Markdown document using the Open method.
Dim fileStream As New FileStream("Input.md", FileMode.Open, FileAccess.Read)
Dim mdImportSettings As New MdImportSettings()
markdownDocument.Open(fileStream, mdImportSettings)
'To-Do some manipulation
'To-Do some manipulation
' Retrieves the Markdown document content.
Dim mdContent As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system.
File.WriteAllText("Output.md", mdContent, Encoding.UTF8)

{% endhighlight %}

{% endtabs %}

## Closing a document

Once the document manipulation and save operations are completed, you should close or dispose the instance of MarkdownDocument instance in order to release all the memory consumed by the Markdown library's DOM. The following code example illustrates how to close a `MarkdownDocument` instance.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens, saves and closes a Markdown document.
FileStream fileStream = new FileStream("Input.md", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
MdImportSettings settings = new MdImportSettings();
MarkdownDocument markdownDocument = new MarkdownDocument(fileStream, settings);

// To-Do some manipulation
// To-Do some manipulation

// Retrieves the Markdown document content.
string markdownText = markdownDocument.GetMarkdownText();
//Save the Markdown content to the file system
File.WriteAllText("Output.md", markdownText, Encoding.UTF8);

//Dispose the document to release all memory
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens, saves and closes a Markdown document.
Dim fileStream As New FileStream("Input.md", FileMode.Open, FileAccess.Read)
Dim settings As New MdImportSettings()
Dim markdownDocument As New MarkdownDocument(fileStream, settings)

'To-Do some manipulation
'To-Do some manipulation

' Retrieves the Markdown document content.
Dim markdownText As String = markdownDocument.GetMarkdownText()
' Saves the Markdown document to the file system.
File.WriteAllText("Output.md", markdownText, Encoding.UTF8)

' Disposes the document to release all memory.
markdownDocument.Dispose()

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from GitHub.
