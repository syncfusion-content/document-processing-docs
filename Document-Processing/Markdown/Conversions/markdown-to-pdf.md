---
title: Markdown to PDF in C# using DocIO | Syncfusion
description: Convert Markdown to PDF document in C# using Syncfusion<sup>&reg;</sup> .NET Word library without Microsoft Word or interop dependencies
platform: document-processing
control: Word
documentation: UG
---

# Markdown to PDF Conversion

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The .NET Word library supports the conversion of Markdown to a PDF document.

## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert a Markdown file to a PDF document using the .NET Word Library.

* [Markdown to PDF assemblies](https://help.syncfusion.com/document-processing/word/word-library/net/assemblies-required)
* [Markdown to PDF NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required)

## Convert Markdown to PDF

Convert an existing markdown file to a PDF document using the .NET Word library.

The following code example shows how to convert a Markdown file to a PDF document.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
// Open an existing Markdown file.
using (WordDocument document = new WordDocument(Path.GetFullPath("Input.md")))
{
    // Create an instance of DocIORenderer.
    using (DocIORenderer renderer = new DocIORenderer())
    {
        // Convert Markdown to PDF.
        using (PdfDocument pdfDocument = renderer.ConvertToPDF(document))
        {
            // Save the PDF document.
            using (FileStream outputStream = new FileStream(Path.GetFullPath("Output.pdf"), FileMode.Create, FileAccess.Write))
            {
                pdfDocument.Save(outputStream);
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Open an existing Markdown file.
using (WordDocument document = new WordDocument("Input.md"))
{
    // Create an instance of DocToPDFConverter.
    using (DocToPDFConverter converter = new DocToPDFConverter())
    {
        // Convert Markdown to PDF.
        using (PdfDocument pdfDocument = converter.ConvertToPDF(document))
        {
            // Save the PDF document.
            pdfDocument.Save("Output.pdf");
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Open an existing Markdown file.
Using document As WordDocument = New WordDocument("Input.md")
    ' Create an instance of DocToPDFConverter.
    Using converter As DocToPDFConverter = New DocToPDFConverter()
        ' Convert Markdown to PDF.
        Using pdfDocument As PdfDocument = converter.ConvertToPDF(document)
            ' Save the PDF document.
            pdfDocument.Save("Output.pdf")
        End Using
    End Using
End Using
{% endhighlight %}

{% endtabs %}

## Load Options

When opening an existing Markdown document, the .NET Word library provides custom import settings through the **MdImportSettings** class. This allows you to customize how the Markdown content is parsed and imported before converting to PDF.

### Customize image data

The .NET Word library provides an `ImageNodeVisited` event, which customizes image data while importing a Markdown file. Implement the logic to customize the image data by using this `ImageNodeVisited` event.

The following code example shows how to load image data based on the image source path when importing the Markdown file.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new Word document.
WordDocument document = new WordDocument();
// Hook the event to customize the image while importing Markdown document.
document.MdImportSettings.ImageNodeVisited += MdImportSettings_ImageNodeVisited;
// Open the Markdown file.
document.Open(Path.GetFullPath("Input.md"));
// Create an instance of DocIORenderer.
using (DocIORenderer renderer = new DocIORenderer())
{
    // Convert Markdown to PDF.
    using (PdfDocument pdfDocument = renderer.ConvertToPDF(document))
    {
        // Save the PDF document.
        using (FileStream outputStream = new FileStream(Path.GetFullPath("Output.pdf"), FileMode.Create, FileAccess.Write))
        {
            pdfDocument.Save(outputStream);
        }
    }
}
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create a new Word document.
WordDocument document = new WordDocument();
// Hook the event to customize the image while importing Markdown document.
document.MdImportSettings.ImageNodeVisited += MdImportSettings_ImageNodeVisited;
// Open the Markdown file.
document.Open("Input.md");
// Create an instance of DocToPDFConverter.
using (DocToPDFConverter converter = new DocToPDFConverter())
{
    // Convert Markdown to PDF.
    using (PdfDocument pdfDocument = converter.ConvertToPDF(document))
    {
        // Save the PDF document.
        pdfDocument.Save("Output.pdf");
    }
}
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Create a new Word document.
Dim document As WordDocument = New WordDocument()
' Hook the event to customize the image while importing Markdown document.
AddHandler document.MdImportSettings.ImageNodeVisited, AddressOf MdImportSettings_ImageNodeVisited
' Open the Markdown file.
document.Open("Input.md")
' Create an instance of DocToPDFConverter.
Using converter As DocToPDFConverter = New DocToPDFConverter()
    ' Convert Markdown to PDF.
    Using pdfDocument As PdfDocument = converter.ConvertToPDF(document)
        ' Save the PDF document.
        pdfDocument.Save("Output.pdf")
    End Using
End Using
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

N> Hook the event handler before opening a Markdown document as per the above code example.
 
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
// Create an instance of DocIORenderer.
using (DocIORenderer renderer = new DocIORenderer())
{
    // Convert Markdown to PDF.
    using (PdfDocument pdfDocument = renderer.ConvertToPDF(document))
    {
        // Save the PDF document.
        using (FileStream outputStream = new FileStream(Path.GetFullPath("Output.pdf"), FileMode.Create, FileAccess.Write))
        {
            pdfDocument.Save(outputStream);
        }
    }
}
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create a new Word document.
WordDocument document = new WordDocument();
// Set the encoding for the Markdown file.
document.MdImportSettings.Encoding = Encoding.UTF8;
// Open the Markdown file.
document.Open("Input.md");
// Create an instance of DocToPDFConverter.
using (DocToPDFConverter converter = new DocToPDFConverter())
{
    // Convert Markdown to PDF.
    using (PdfDocument pdfDocument = converter.ConvertToPDF(document))
    {
        // Save the PDF document.
        pdfDocument.Save("Output.pdf");
    }
}
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Create a new Word document.
Dim document As WordDocument = New WordDocument()
' Set the encoding for the Markdown file.
document.MdImportSettings.Encoding = Encoding.UTF8
' Open the Markdown file.
document.Open("Input.md")
' Create an instance of DocToPDFConverter.
Using converter As DocToPDFConverter = New DocToPDFConverter()
    ' Convert Markdown to PDF.
    Using pdfDocument As PdfDocument = converter.ConvertToPDF(document)
        ' Save the PDF document.
        pdfDocument.Save("Output.pdf")
    End Using
End Using
document.Close()
{% endhighlight %}

{% endtabs %}

N> Provide the encoding values before opening a Markdown document as per the above code example.
