---
title: Convert Markdown to HTML and vice versa in C# | Syncfusion
description: Learn how to convert Markdown document to HTML file and vice versa using .NET Word library without Microsoft Word or interop dependencies
platform: document-processing
control: Word
documentation: UG
---

# Markdown to HTML and HTML to Markdown Conversions

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library supports converting Markdown to an HTML document and vice versa.

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required, based on the target platform, to convert between Markdown and HTML documents using the .NET Word Library.

* [Markdown conversions assemblies](https://help.syncfusion.com/document-processing/word/word-library/net/assemblies-required)
* [Markdown conversions NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required)

## Convert Markdown to HTML

Convert an existing markdown file to a HTML document using the .NET Word library.

The following code example shows how to convert Markdown to HTML document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
// Open an existing Markdown file.
using (WordDocument document = new WordDocument(Path.GetFullPath("Input.md")))
{
    //Save as a HTML document.
    document.Save(Path.GetFullPath("Output.html"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Markdown file.
using (WordDocument document = new WordDocument("Input.md"))
{
    //Save as an HTML document.
    document.Save("Output.html");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Markdown file.
Using document As WordDocument = New WordDocument("Input.md")
    'Save as an HTML document.
    document.Save("Output.html")
End Using
{% endhighlight %}

{% endtabs %}

## Load Options

When opening an existing Markdown document, the .NET Word library provides custom import settings through the **MdImportSettings** class. This allows you to customize how the Markdown content is parsed and imported.

### Customize image data

The .NET Word library provides an `ImageNodeVisited` event, which customizes image data while importing a Markdown file. Implement the logic to customize the image data by using this `ImageNodeVisited` event.

The following code example shows how to load image data based on the image source path when importing the Markdown files.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new Word document.
WordDocument document = new WordDocument();
// Hook the event to customize the image while importing Markdown document.
document.MdImportSettings.ImageNodeVisited += MdImportSettings_ImageNodeVisited;
// Open the Markdown file.
document.Open(Path.GetFullPath("Input.md"));
// Save as a HTML document.
document.Save(Path.GetFullPath("Output.html"));
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create a new Word document.
WordDocument document = new WordDocument();
// Hook the event to customize the image while importing Markdown document.
document.MdImportSettings.ImageNodeVisited += MdImportSettings_ImageNodeVisited;
// Open the Markdown file.
document.Open("Input.md");
// Save as a HTML document.
document.Save("Output.html");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Create a new Word document.
Dim document As WordDocument = New WordDocument()
' Hook the event to customize the image while importing Markdown document.
AddHandler document.MdImportSettings.ImageNodeVisited, AddressOf MdImportSettings_ImageNodeVisited
' Open the Markdown file.
document.Open("Input.md")
' Save as a HTML document.
document.Save("Output.html")
document.Close()
{% endhighlight %}

{% endtabs %}

The following code examples show the event handler to customize the image based on the source path.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private static void MdImportSettings_ImageNodeVisited(object sender, Syncfusion.Office.Markdown.MdImageNodeVisitedEventArgs args)
{
    //Set the image stream based on the image name from the input Markdown.
    if (args.Uri == "Image_1.png")
        args.ImageStream = new FileStream("Image_1.png", FileMode.Open);
    else if (args.Uri == "Image_2.png")
        args.ImageStream = new FileStream("Image_2.png", FileMode.Open);
    //Retrieve the image from the website and use it.
    else if (args.Uri.StartsWith("https://"))
    {
        WebClient client = new WebClient();
        //Download the image as a stream.
        byte[] image = client.DownloadData(args.Uri);
        Stream stream = new MemoryStream(image);
        //Set the retrieved image from the input Markdown.
        args.ImageStream = stream;
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private static void MdImportSettings_ImageNodeVisited(object sender, Syncfusion.Office.Markdown.MdImageNodeVisitedEventArgs args)
{
    //Set the image stream based on the image name from the input Markdown.
    if (args.Uri == "Image_1.png")
        args.ImageStream = new FileStream("Image_1.png", FileMode.Open);
    else if (args.Uri == "Image_2.png")
        args.ImageStream = new FileStream("Image_2.png", FileMode.Open);
    //Retrieve the image from the website and use it.
    else if (args.Uri.StartsWith("https://"))
    {
        WebClient client = new WebClient();
        //Download the image as a stream.
        byte[] image = client.DownloadData(args.Uri);
        Stream stream = new MemoryStream(image);
        //Set the retrieved image from the input Markdown.
        args.ImageStream = stream;
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Shared Sub MdImportSettings_ImageNodeVisited(ByVal sender As Object, ByVal args As Syncfusion.Office.Markdown.MdImageNodeVisitedEventArgs)
    'Set the image stream based on the image name from the input Markdown.
    If args.Uri Is "Image_1.png" Then
        args.ImageStream = New FileStream("Image_1.png", FileMode.Open)
    ElseIf args.Uri Is "Image_2.png" Then
        args.ImageStream = New FileStream("Image_2.png", FileMode.Open)
    'Retrieve the image from the website and use it.
    ElseIf args.Uri.StartsWith("https://") Then
        Dim client As WebClient = New WebClient()
        'Download the image as a stream.
        Dim image As Byte() = client.DownloadData(args.Uri)
        Dim stream As Stream = New MemoryStream(image)
        'Set the retrieved image from the input Markdown.
        args.ImageStream = stream
    End If
End Sub
{% endhighlight %}

{% endtabs %}

N> Hook the event handler before opening a Markdown document as shown in the above code example.
 
### Encoding

The .NET Word library provides an `Encoding` property to specify the character encoding to use when opening a Markdown file. This property is useful when you need to open Markdown files that are saved with specific character encodings such as UTF-8, UTF-16, ASCII, or other encodings.

The following code example shows how to open a Markdown file with a specific encoding.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new Word document.
WordDocument document = new WordDocument();
// Set the encoding for the Markdown file.
document.MdImportSettings.Encoding = Encoding.UTF8;
// Open the Markdown file.
document.Open(Path.GetFullPath("Input.md"));
// Save as a HTML document.
document.Save(Path.GetFullPath("Output.html"));
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create a new Word document.
WordDocument document = new WordDocument();
// Set the encoding for the Markdown file.
document.MdImportSettings.Encoding = Encoding.UTF8;
// Open the Markdown file.
document.Open("Input.md");
// Save as a HTML document.
document.Save("Output.html");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Create a new Word document.
Dim document As WordDocument = New WordDocument()
' Set the encoding for the Markdown file.
document.MdImportSettings.Encoding = Encoding.UTF8
' Open the Markdown file.
document.Open("Input.md")
' Save as a HTML document.
document.Save("Output.html")
document.Close()
{% endhighlight %}

{% endtabs %}

N> Provide the encoding values before opening a Markdown document as per the above code example.

## Convert HTML to Markdown

Convert an existing HTML file to a Markdown document using the .NET Word library.

The following code example shows how to convert HTML to Markdown document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
// Open an existing HTML file.
using (WordDocument document = new WordDocument(Path.GetFullPath("Input.html")))
{
    //Save as a Markdown document.
    document.Save(Path.GetFullPath("Output.md"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing HTML file.
using (WordDocument document = new WordDocument("Input.html"))
{
    //Save as a Markdown document.
    document.Save("Output.md");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing HTML file.
Using document As WordDocument = New WordDocument("Input.html")
    'Save as a Markdown document.
    document.Save("Output.md")
End Using
{% endhighlight %}

{% endtabs %}

## Save Options

When converting an HTML document to Markdown, the .NET Word (DocIO) library provides various save options to customize the output Markdown file. These options allow you to customize image paths, set character encoding, and other export behaviors.

### Customize the image path

DocIO provides an `ImageNodeVisited` event, which is used to customize the image path to set in the output Markdown file and save images externally while converting an HTML document to a Markdown.

The following code example illustrates how to save Image files during an HTML to Markdown Conversion.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
 //Open an existing HTML document.
 using (WordDocument document = new WordDocument(Path.GetFullPath(@"Data/Input.html")))
 {
     //Hook the event to customize the image. 
     document.SaveOptions.MarkdownSaveOptions.ImageNodeVisited += SaveImage;
     //Save the document as a Markdown file.
     document.Save(Path.GetFullPath(@"Output/Output.md"));
 }
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing HTML document.
using (WordDocument document = new WordDocument(@"Input.html"))
{
    //Hook the event to customize the image.
    document.SaveOptions.MarkdownSaveOptions.ImageNodeVisited += SaveImage;
    //Save an HTML document as a Markdown file.
    document.Save("HtmlToMd.md", FormatType.Markdown);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing HTML document.
Using document As WordDocument = New WordDocument("Input.html")
    'Hook the event to customize the image.
    document.SaveOptions.MarkdownSaveOptions.ImageNodeVisited += SaveImage
    'Save an HTML document as a Markdown file.
    document.Save("HtmlToMd.md", FormatType.Markdown)
End Using
{% endhighlight %}

{% endtabs %}

The following code examples show the event handler to customize the image path and save the image in an external folder.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
    //Save the image stream as a file.
    using (FileStream fileStreamOutput = File.Create(imagepath))
        args.ImageStream.CopyTo(fileStreamOutput);
    //Set the URI to be used for the image in the output Markdown. 
    args.Uri = imagepath;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
    //Save the image stream as a file. 
    using (FileStream fileStreamOutput = File.Create(imagepath))
        args.ImageStream.CopyTo(fileStreamOutput);
    //Set the image URI to be used in the output markdown.
    args.Uri = imagepath;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Shared Sub SaveImage(ByVal sender As Object, ByVal args As MdImageNodeVisitedEventArgs)
    Dim imagepath = "D:\Temp\Image1.png"
    'Save the image stream as a file. 
    Using fileStreamOutput = File.Create(imagepath)
        args.ImageStream.CopyTo(fileStreamOutput)
    End Using
    'Set the URI to be used for the image in the output markdown. 
    args.Uri = imagepath
End Sub
{% endhighlight %}

{% endtabs %}

N> The `MarkdownSaveOptions.ImageNodeVisited` event are not supported on the UWP platform.

### Encoding

The .NET Word (DocIO) library provides an `Encoding` property to specify the character encoding to use when saving the Markdown file. This property is useful when you need to save the output Markdown file with specific character encodings such as UTF-8, UTF-16, ASCII, or other encodings.

The following code example shows how to save a Markdown file with a specific encoding.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Open an existing HTML document.
using (WordDocument document = new WordDocument(Path.GetFullPath(@"Data/Input.html")))
{
    //Set the encoding values.
    document.SaveOptions.MarkdownSaveOptions.Encoding = Encoding.ASCII;
    //Save the document as a Markdown file.
    document.Save(Path.GetFullPath(@"Output/Output.md"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing HTML document.
using (WordDocument document = new WordDocument("Input.html"))
{
    //Set the encoding values.
    document.SaveOptions.MarkdownSaveOptions.Encoding = Encoding.ASCII;
    //Save the document as a Markdown file.
    document.Save("HtmlToMd.md");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing HTML document.
Using document As WordDocument = New WordDocument("Input.html")
    'Set the encoding values. 
    document.SaveOptions.MarkdownSaveOptions.Encoding = Encoding.ASCII
    'Save the document as a Markdown file.
    document.Save("HtmlToMd.md")
End Using
{% endhighlight %}

{% endtabs %}

N> Set the encoding value before saving the document as per the above code example.
