---
title: Loading and Saving Markdown document in C# | Syncfusion
description: Learn how to load and save a Markdown document in C# and VB.NET using Syncfusion<sup>&reg;</sup> .NET Markdown library without external dependencies.
platform: document-processing
control: Markdown
documentation: UG
---

# Loading and Saving a Markdown Document

The Syncfusion<sup>&reg;</sup> .NET Markdown library allows you to load an existing Markdown document and save it to the file system or stream programmatically.

## Namespaces required

The following namespaces need to be included in your application to load and save a Markdown document.

N> Refer to the appropriate tabs in the code snippets section: ***C#*** for ASP.NET Core, Blazor, ASP.NET MVC, UWP, .NET MAUI, WinUI, WinForms and WPF; ***VB.NET*** for VB.NET applications.

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

// Creates a MarkdownDocument instance
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

// Creates a MarkdownDocument instance
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



### Opening a document with import settings

You can open an existing Markdown document with custom import settings by using **MdImportSettings** parameter. This allows you to customize how the Markdown content is parsed and imported.

The following table describes the available properties in the `MdImportSettings` class:

|**Property** |**Description**|
|-------------|---------------|
|Encoding|Gets or sets the text encoding to use when reading Markdown files. The default value is UTF8.|
|ImageNodeVisited|When an image node is encountered during import. Use this event to customize image loading by providing the image stream.|

N> Hook the `ImageNodeVisited` event before opening the input Markdown document.

The following code example demonstrates how to open a Markdown document with import settings.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 // Creates a new MarkdownDocument instance.
 MarkdownDocument markdownDocument = new MarkdownDocument();
 // Hooks the ImageNodeVisited event to open the image from a specific location.
 MdImportSettings mdImportSettings = new MdImportSettings();
 mdImportSettings.ImageNodeVisited += ImageNodeVisited;
 // Opens an existing Markdown document with import settings.
 markdownDocument.Open("Input.md", mdImportSettings);
 // Unhooks the ImageNodeVisited event after opening the document
 mdImportSettings.ImageNodeVisited -= ImageNodeVisited;
 // Saves the Markdown document to the file system
 markdownDocument.Save("Output.md");
 // Disposes the document to release all memory
 markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

 ' Creates a new MarkdownDocument instance.
 Dim markdownDocument As MarkdownDocument = New MarkdownDocument()
 ' Hooks the ImageNodeVisited event to open the image from a specific location.
 Dim mdImportSettings As MdImportSettings = New MdImportSettings()
 AddHandler mdImportSettings.ImageNodeVisited, AddressOf ImageNodeVisited
 ' Opens an existing Markdown document with import settings.
 markdownDocument.Open("Input.md", mdImportSettings)
 ' Unhooks the ImageNodeVisited event after opening the document
 RemoveHandler mdImportSettings.ImageNodeVisited, AddressOf ImageNodeVisited
 ' Saves the Markdown document to the file system
 markdownDocument.Save("Output.md")
 ' Disposes the document to release all memory
 markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

You can also use the constructor approach with import settings.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Create an Import setting instance
MdImportSettings mdImportSettings = new MdImportSettings();
// Hooks the ImageNodeVisited event to open the image from a specific location.
mdImportSettings.ImageNodeVisited += ImageNodeVisited;
// Opens an existing Markdown document with import settings using constructor.
MarkdownDocument markdownDocument = new MarkdownDocument("Input.md", mdImportSettings);
// Unhooks the ImageNodeVisited event after opening the document
mdImportSettings.ImageNodeVisited -= ImageNodeVisited;
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document to release all memory
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Create an Import setting instance
Dim mdImportSettings As MdImportSettings = New MdImportSettings()
' Hooks the ImageNodeVisited event to open the image from a specific location.
AddHandler mdImportSettings.ImageNodeVisited, AddressOf ImageNodeVisited
' Opens an existing Markdown document with import settings using constructor.
Dim markdownDocument As MarkdownDocument = New MarkdownDocument("Input.md", mdImportSettings)
' Unhooks the ImageNodeVisited event after opening the document
RemoveHandler mdImportSettings.ImageNodeVisited, AddressOf ImageNodeVisited
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document to release all memory
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

The following code example shows how to read the image from the specified path when importing the markdown files.

{% tabs %}

{% highlight c# tabtitle="C#" %}

private void ImageNodeVisited(object sender, MdImageNodeVisitedEventArgs args)
{
    // Check if the current image URI
    if (args.Uri == "Road-550.png")
    {
        // Replace it by loading another image from local file
        args.ImageStream = new FileStream(Path.GetFullPath(@"../../Data/Mountain-200.png"), FileMode.Open);
    }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Private Sub ImageNodeVisited(sender As Object, args As MdImageNodeVisitedEventArgs)
    ' Check if the current image URI
    If args.Uri = "Road-550.png" Then
        ' Replace it by loading another image from local file
        args.ImageStream = New FileStream(Path.GetFullPath("../../../Data/Mountain-200.png"), FileMode.Open)
    End If
End Sub

{% endhighlight %}

{% endtabs %}



## Saving a Markdown Document

You can save the created or manipulated Markdown document to file system or stream using `Save` method of `MarkdownDocument` class.

### Saving a Markdown Document to file system

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
// Disposes the document to release all memory
markdownDocument.Dispose();

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
' Disposes the document to release all memory
markdownDocument.Dispose();

{% endhighlight %}

{% endtabs %}

### Saving a Markdown Document to stream

You can also save the created or manipulated Markdown document to stream by using overloads of `Save` methods.

The following code example demonstrates how to save a Markdown document to the stream.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a empty MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Opens an existing Markdown document using the Open method.
markdownDocument.Open("Input.md");
// To-Do some manipulation
// To-Do some manipulation
// Creates an instance of memory stream
MemoryStream stream = new MemoryStream();
// Saves the Markdown document to the stream
markdownDocument.Save(stream);
// Disposes the document to release all memory
markdownDocument.Dispose();

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
' Disposes the document to release all memory
markdownDocument.Dispose();

{% endhighlight %}

{% endtabs %}

### Save Options

You can customize the Markdown save operation by using the **SaveOptions** class. The `SaveOptions` allows you to specify encoding and handle image nodes during saving.

The following table describes the available properties in the `SaveOptions` class:

|**Property** |**Description**|
|-------------|---------------|
|Encoding|Gets or sets the text encoding to use when saving Markdown documents. Default value is UTF8 (without BOM).|
|ImageNodeVisited|When an image node is encountered during save. Use this event to save the image externally and customize the image URI written to the Markdown output.|

N> Hook the `ImageNodeVisited` event before saving the Markdown document.

The following code example demonstrates how to save a Markdown document with save options.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 // Opens an existing Markdown document.
 MarkdownDocument markdownDocument = new MarkdownDocument("Input.md");
 // Creates a SaveOptions instance to customize the save process
 SaveOptions saveOptions = new SaveOptions();
 // Hooks the ImageNodeVisited event to handle image saving
 saveOptions.ImageNodeVisited += SaveImage;
 // Saves the Markdown document to the file system with the specified save options
 markdownDocument.Save("Output.md", saveOptions);
 // Unhooks the ImageNodeVisited event after saving
 saveOptions.ImageNodeVisited -= SaveImage;
 // Disposes the document to release all memory
 markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document.
Dim markdownDocument As MarkdownDocument = New MarkdownDocument("Input.md")
' Creates a SaveOptions instance to customize the save process
Dim saveOptions As SaveOptions = New SaveOptions()
' Hooks the ImageNodeVisited event to handle image saving
AddHandler saveOptions.ImageNodeVisited, AddressOf SaveImage
' Saves the Markdown document to the file system with the specified save options
markdownDocument.Save("Output.md", saveOptions)
' Unhooks the ImageNodeVisited event after saving
RemoveHandler saveOptions.ImageNodeVisited, AddressOf SaveImage
' Disposes the document to release all memory
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

The following code example illustrates the event handler for customizing the image path and saving the image in an external folder.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 private void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
 {
     string imagepath = @"D:\Temp\Image.png";
     // Save the image stream as a file.
     using (FileStream fileStreamOutput = File.Create(imagepath))
         args.ImageStream.CopyTo(fileStreamOutput);
     // Set the URI to be used for the image in the output Markdown document. 
     args.Uri = imagepath;
 }

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Private Sub SaveImage(sender As Object, args As MdImageNodeVisitedEventArgs)
    Dim imagepath As String = "D:\Temp\Image.png"
    'Save the image stream as a file.
    Using fileStreamOutput As FileStream = File.Create(imagepath)
        args.ImageStream.CopyTo(fileStreamOutput)
    End Using
    'Set the URI to be used for the image in the output Markdown document. 
    args.Uri = imagepath
End Sub

{% endhighlight %}

{% endtabs %}


### Getting Markdown document text

You can retrieve the Markdown document content as a string using the **GetMarkdownText** method. This is useful when you want to get the Markdown content without saving it to a file or stream.

The following code example demonstrates how to get the Markdown content as text.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document.
MarkdownDocument markdownDocument = new MarkdownDocument("Input.md");
// To-Do some manipulation
// To-Do some manipulation
// Retrieves the Markdown document content as text.
string mdContent = markdownDocument.GetMarkdownText();
// Disposes the document to release all memory
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document.
Dim markdownDocument As MarkdownDocument = New MarkdownDocument("../../Data/Input.md")
' To-Do some manipulation
' To-Do some manipulation
' Retrieves the Markdown document content as text.
Dim mdContent As String = markdownDocument.GetMarkdownText()
' Disposes the document to release all memory
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

N> You can also retrieve the Markdown content with save options by passing the `SaveOptions` parameter to the `GetMarkdownText` method.



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


