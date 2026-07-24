---
title: Working with Images in .NET Markdown library | Syncfusion
description: Learn to add, format, and modify images in a Markdown document using Syncfusion<sup>&reg;</sup> .NET Markdown library without any third-party dependencies.
platform: document-processing
control: Markdown
documentation: UG
---

# Working with Images in Markdown Library

Images are essential elements of Markdown documents that enhance visual communication and documentation. The Syncfusion<sup>&reg;</sup> .NET Markdown library facilitates adding, modifying, and managing images in a Markdown document. Images in Markdown are represented by the `MdPicture` class, which can be added to the inline collection of an `MdParagraph`. The library supports both URL-based and byte array-based images, allowing you to reference external image files or embed images directly into the document. Supported image formats include PNG, JPEG, BMP, GIF, WebP, and SVG.

When saving a Markdown document using the `Save(fileName)` overloads, the library creates a new folder parallel to the output file name and exports all the images into it by default.

When using the `Save(Stream)` overloads, the library preserves the images as base64 data URIs in the output Markdown file by default.

If the image contains both a URL and stream values, or contains only a URL, the URL will be used in the output document.

## Adding image from URL

An image can be added to a paragraph in a Markdown document by creating an instance of the `MdPicture` class and adding it to the paragraph's inline collection.

The following code example demonstrates how to add a new image to a Markdown document.

N> Refer to the appropriate tabs in the code snippets section: ***C#*** for ASP.NET Core, Blazor, ASP.NET MVC, UWP, .NET MAUI, WinUI, WinForms and WPF; ***VB.NET*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph paragraph = markdownDocument.AddParagraph();
// Creates a new picture instance
MdPicture image = new MdPicture();
// Adds the image to the paragraph
paragraph.Inlines.Add(image);
// Sets the image URL
image.Url = "https://example.com/images/logo.png";
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph to the document
Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
' Creates a new picture instance
Dim image As New MdPicture()
' Adds the image to the paragraph
paragraph.Inlines.Add(image)
' Sets the image URL
image.Url = "https://example.com/images/logo.png"
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Image/Add-image-from-URL/.NET).

## Adding an image from a file path

The Syncfusion Markdown library supports adding images from file paths. The following code example demonstrates how to add an image from a file path.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a new paragraph to the document
MdParagraph paragraph = markdownDocument.AddParagraph();
// Creates a new picture instance
MdPicture image = new MdPicture();
// Adds the image to the paragraph
paragraph.Inlines.Add(image);
// Sets the absolute file path
image.Url = "C:\\Images\\Adventure Cycle.png";
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph to the document
Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
' Creates a new picture instance
Dim image As New MdPicture()
' Adds the image to the paragraph
paragraph.Inlines.Add(image)
' Sets the absolute file path
image.Url = "C:\Images\Adventure Cycle.png"
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Image/Add-image-from-local-file-path/.NET).

## Adding image from image bytes

The Syncfusion<sup>&reg;</sup> .NET Markdown library allows embedding images directly into a Markdown document using byte arrays. This is useful when you need to include images that are dynamically generated, retrieved from a database, or loaded from memory. When the document is saved with the `Save(fileName)` overload, the bytes are written to the auto-generated images folder; when saved with the `Save(Stream)` overload, the bytes are embedded as a base64 data URI.

The following code example demonstrates how to add an image from a byte array.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 // Creates a new MarkdownDocument instance
 MarkdownDocument markdownDocument = new MarkdownDocument();
 // Adds a new paragraph to the document
 MdParagraph paragraph = markdownDocument.AddParagraph();
 // Loads image bytes from file
 byte[] imageBytes = File.ReadAllBytes(Path.GetFullPath(@"../../Data/Adventure Cycle.png"));
 // Creates a new picture instance
 MdPicture image = new MdPicture();
 // Adds the image to the paragraph
 paragraph.Inlines.Add(image);
 // Sets the image bytes
 image.ImageBytes = imageBytes;
 // Saves the Markdown document to the file system
 markdownDocument.Save("Output.md");
 // Disposes the document
 markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Creates a new MarkdownDocument instance
Dim markdownDocument As New MarkdownDocument()
' Adds a new paragraph to the document
Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
' Loads image bytes from file
Dim imageBytes() As Byte = File.ReadAllBytes(Path.GetFullPath("../../Data/Adventure Cycle.png"))
' Creates a new picture instance
Dim image As New MdPicture()
' Adds the image to the paragraph
paragraph.Inlines.Add(image)
' Sets the image bytes
image.ImageBytes = imageBytes
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Image/Add-image-from-image-bytes/.NET).

## Replacing images

An existing image in a Markdown document can be replaced by iterating through the paragraph's inline collection and modifying the properties of the `MdPicture` instance. 

The following code example demonstrates how to replace an existing image.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document
MarkdownDocument markdownDocument = new MarkdownDocument(Path.GetFullPath("Input.md"));
// Iterates through the blocks of the document
foreach (IMdBlock block in markdownDocument.Blocks)
{
    if (block is MdParagraph paragraph)
    {
        // Iterates through the inline elements of the paragraph
        foreach (IMdInline inline in paragraph.Inlines)
        {
            if (inline is MdPicture picture)
            {
                // Replaces the image URL
                if (picture.Url.Contains("Adventure Cycle.png"))
                {
                    picture.Url = "./images/Adventure Cycle.png";
                    break;
                }
            }
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
    If TypeOf block Is MdParagraph Then
        Dim paragraph As MdParagraph = TryCast(block, MdParagraph)
        ' Iterates through the inline elements of the paragraph
        For Each inline As IMdInline In paragraph.Inlines
            If TypeOf inline Is MdPicture Then
                Dim picture As MdPicture = TryCast(inline, MdPicture)
                ' Replaces the image URL
                If picture.Url.Contains("Adventure Cycle.png") Then
                    picture.Url = "./images/Adventure Cycle.png"
                    Exit For
                End If
            End If
        Next
    End If
Next
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Image/Replacing-image/.NET).

## Removing images

Images can be removed from a Markdown document by iterating through the paragraph's inline collection and removing the `MdPicture` instances. 

The following code example demonstrates how to remove images from a Markdown document.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document
MarkdownDocument markdownDocument = new MarkdownDocument(Path.GetFullPath("Input.md"));
// Iterates through the blocks of the document
foreach (IMdBlock block in markdownDocument.Blocks)
{
    if (block is MdParagraph paragraph)
    {
        // Iterates through the inline elements in reverse to safely remove items
        for (int i = paragraph.Inlines.Count - 1; i >= 0; i--)
        {
            if (paragraph.Inlines[i] is MdPicture)
            {
                // Removes the image from the paragraph
                paragraph.Inlines.RemoveAt(i);
                break;
            }
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
    If TypeOf block Is MdParagraph Then
        Dim paragraph As MdParagraph = TryCast(block, MdParagraph)
        ' Iterates through the inline elements in reverse to safely remove items
        For i As Integer = paragraph.Inlines.Count - 1 To 0 Step -1
            If TypeOf paragraph.Inlines(i) Is MdPicture Then
                ' Removes the image from the paragraph
                paragraph.Inlines.RemoveAt(i)
                Exit For
            End If
        Next
    End If
Next
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}


A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Image/Removing-image/.NET).

## Working with alternative text

Alternative text (alt text) is essential for accessibility, providing textual descriptions of images for screen readers and situations where images cannot be displayed. The Syncfusion Markdown library allows you to set and modify alternative text for images using the `AltText` property.

The following code example demonstrates how to add descriptive alternative text to an image.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Creates a new MarkdownDocument instance
MarkdownDocument markdownDocument = new MarkdownDocument();
// Adds a paragraph for the chart image
MdParagraph paragraph = markdownDocument.AddParagraph();
// Creates a new picture instance
MdPicture picture = new MdPicture();
// Adds the image to the paragraph
paragraph.Inlines.Add(picture);
// Sets the image URL
picture.Url = "./images/Adventure Cycle.png";
// Sets descriptive alternative text for accessibility
picture.AltText = "Adventure Cycle Image";
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

 ' Creates a new MarkdownDocument instance
 Dim markdownDocument As New MarkdownDocument()
 ' Adds a paragraph for the chart image
 Dim paragraph As MdParagraph = markdownDocument.AddParagraph()
 ' Creates a new picture instance
 Dim picture As New MdPicture()
 ' Adds the image to the paragraph
 paragraph.Inlines.Add(picture)
 ' Sets the image URL
 picture.Url = "./images/Adventure Cycle.png"
 ' Sets descriptive alternative text for accessibility
 picture.AltText = "Adventure Cycle Image"
 ' Saves the Markdown document to the file system
 markdownDocument.Save("Output.md")
 ' Disposes the document
 markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Image/Add-alternative-text/.NET).



