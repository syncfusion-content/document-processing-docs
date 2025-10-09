---
title: Working with Images in .NET Word library | Syncfusion
description: Learn how to work with images in a Microsoft Word document using the Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Working with Images in Word document

DocIO provides support for both inline and absolute positioned images. 

* Inline images: The position of the image is constrained to the lines of text on the page.
* Absolute positioned images: The images can be positioned anywhere irrespective of the lines of text.

The following code example explains how to add image to the paragraph.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Add-image/.NET/Add-image/Program.cs" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph firstParagraph = section.AddParagraph();
//Adds image to  the paragraph
FileStream imageStream = new FileStream(@"Image.png", FileMode.Open, FileAccess.ReadWrite);
IWPicture picture = firstParagraph.AppendPicture(imageStream);
//Sets height and width for the image
picture.Height = 100;
picture.Width = 100;
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph firstParagraph = section.AddParagraph();
//Adds image to  the paragraph
IWPicture picture = firstParagraph.AppendPicture(Image.FromFile("Image.png"));
//Sets height and width for the image
picture.Height = 100;
picture.Width = 100;
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document 
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim firstParagraph As IWParagraph = section.AddParagraph()
'Adds image to  the paragraph
Dim picture As IWPicture = firstParagraph.AppendPicture(Image.FromFile("Image.png"))
'Sets height and width for the image
picture.Height = 100
picture.Width = 100
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Add-image).

## Replace image

Image present in the document can be replaced with a new image. This can be achieved by iterating through the paragraph items.

The following code example explains how to replace an existing image.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Replace-image/.NET/Replace-image/Program.cs" %}
FileStream fileStream = new FileStream(@"Template.docx", FileMode.Open, FileAccess.ReadWrite);
//Loads the template document
WordDocument document = new WordDocument(fileStream, FormatType.Automatic);
WTextBody textbody = document.Sections[0].Body;
//Iterates through the paragraphs of the textbody
foreach (WParagraph paragraph in textbody.Paragraphs)
{
    //Iterates through the child elements of paragraph
    foreach (ParagraphItem item in paragraph.ChildEntities)
    {
        if (item is WPicture)
        {
            WPicture picture = item as WPicture;
            //Replaces the image
            if (picture.Title == "Bookmark")
            {
                FileStream imageStream = new FileStream(@"Image.png", FileMode.Open, FileAccess.ReadWrite);
                picture.LoadImage(imageStream);
            }
        }
    }
}
//Saves the Word document to MemoryStream.
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document.
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
WTextBody textbody = document.Sections[0].Body;
//Iterates through the paragraphs of the textbody
foreach (WParagraph paragraph in textbody.Paragraphs)
{
    //Iterates through the child elements of paragraph
    foreach (ParagraphItem item in paragraph.ChildEntities)
    {
        if (item is WPicture)
        {
            WPicture picture = item as WPicture;
            //Replaces the image
            if (picture.Title == "Bookmark")
                picture.LoadImage(Image.FromFile("Image.png"));
        }
    }
}
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx")
Dim textbody As WTextBody = document.Sections(0).Body
'Iterates through the paragraphs of the textbody
For Each paragraph As WParagraph In textbody.Paragraphs
    'Iterates through the child elements of paragraph
    For Each item As ParagraphItem In paragraph.ChildEntities
        If TypeOf item Is WPicture Then
            Dim picture As WPicture = TryCast(item, WPicture)
            'Replaces the image
            If picture.Title = "Bookmark" Then
                picture.LoadImage(Image.FromFile("Image.png"))
            End If
        End If
    Next
Next
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Replace-image).

## Remove image

Images can be removed from the document by removing it from the paragraph items.

The following code example explains how to remove the image from the paragraph items.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Remove-image/.NET/Remove-image/Program.cs" %}
FileStream fileStream = new FileStream(@"Template.docx", FileMode.Open, FileAccess.ReadWrite);
//Loads the template document 
WordDocument document = new WordDocument(fileStream, FormatType.Automatic);
WTextBody textbody = document.Sections[0].Body;
//Iterates through the paragraphs of the textbody
foreach (WParagraph paragraph in textbody.Paragraphs)
{
    //Iterates through the child elements of paragraph
    for (int i = 0; i < paragraph.ChildEntities.Count; i++)
    {
        //Removes images from the paragraph
        if (paragraph.ChildEntities[i] is WPicture)
        {
            paragraph.Items.RemoveAt(i);
            i--;
        }
    }
}
//Saves the Word document to MemoryStream.
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document.
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document 
WordDocument document = new WordDocument("Template.docx");
WTextBody textbody = document.Sections[0].Body;
//Iterates through the paragraphs of the textbody
foreach (WParagraph paragraph in textbody.Paragraphs)
{
    //Iterates through the child elements of paragraph
    for (int i = 0; i < paragraph.ChildEntities.Count; i++)
    {
        //Removes images from the paragraph
        if (paragraph.ChildEntities[i] is WPicture)
        {
            paragraph.Items.RemoveAt(i);
            i--;
        }
    }
}
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document 
Dim document As New WordDocument("Template.docx")
Dim textbody As WTextBody = document.Sections(0).Body
'Iterates through the paragraphs of the textbody
For Each paragraph As WParagraph In textbody.Paragraphs
    'Iterates through the child elements of paragraph
    For i As Integer = 0 To paragraph.ChildEntities.Count - 1
        'Removes images from the paragraph
        If TypeOf paragraph.ChildEntities(i) Is WPicture Then
            paragraph.Items.RemoveAt(i)
            i -= 1
        End If
    Next
Next
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %} 

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Remove-image).

## Format and rotate images

Absolute positioned images have properties such as position, wrap formats, and alignments. These properties are not applicable when the text wrapping style is inline. You can also rotate an image and apply flipping (horizontal and vertical) to it.

The following code example explains how various picture formats can be applied to the picture.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Format-and-rotate-image/.NET/Format-and-rotate-image/Program.cs" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("This paragraph has picture. ");
FileStream imageStream = new FileStream(@"Image.png", FileMode.Open, FileAccess.ReadWrite);
//Appends new picture to the paragraph
WPicture picture = paragraph.AppendPicture(imageStream) as WPicture;
//Sets text wrapping style – When the wrapping style is inline, the images are not absolutely positioned. It is added next to the text range.
picture.TextWrappingStyle = TextWrappingStyle.Square;    
//Sets horizontal and vertical origin
picture.HorizontalOrigin = HorizontalOrigin.Page;
picture.VerticalOrigin = VerticalOrigin.Paragraph;
//Sets width and height for the paragraph
picture.Width = 150;     
picture.Height = 100;
//Sets horizontal and vertical position for the picture
picture.HorizontalPosition = 200;
picture.VerticalPosition = 150;
//Sets lock aspect ratio for the picture
picture.LockAspectRatio = true;
picture.Name = "PictureName";
//Sets horizontal and vertical alignments
picture.HorizontalAlignment = ShapeHorizontalAlignment.Center;
picture.VerticalAlignment = ShapeVerticalAlignment.Bottom;
//Sets 90 degree rotation
picture.Rotation = 90;
//Sets horizontal flip
picture.FlipHorizontal = true;
//Saves the Word document to MemoryStream.
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document.
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("This paragraph has picture. ");
//Appends new picture to the paragraph
WPicture picture = paragraph.AppendPicture(Image.FromFile("Image.png")) as WPicture;
//Sets text wrapping style – When the wrapping style is inline, the images are not absolutely positioned. It is added next to the text range.
picture.TextWrappingStyle = TextWrappingStyle.Square;
//Sets horizontal and vertical origin
picture.HorizontalOrigin = HorizontalOrigin.Page;
picture.VerticalOrigin = VerticalOrigin.Paragraph;
//Sets width and height for the paragraph
picture.Width = 150;
picture.Height = 100;
//Sets horizontal and vertical position for the picture
picture.HorizontalPosition = 200;
picture.VerticalPosition = 150;
//Sets lock aspect ratio for the picture
picture.LockAspectRatio = true;
picture.Name = "PictureName";
//Sets horizontal and vertical alignments
picture.HorizontalAlignment = ShapeHorizontalAlignment.Center;
picture.VerticalAlignment = ShapeVerticalAlignment.Bottom;
//Sets 90 degree rotation
picture.Rotation = 90;
//Sets horizontal flip
picture.FlipHorizontal = true;
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document 
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.AppendText("This paragraph has picture. ")
'Appends new picture to the paragraph
Dim picture As WPicture = TryCast(paragraph.AppendPicture(Image.FromFile("Image.png")), WPicture)
'Sets text wrapping style – When the wrapping style is inline, the images are not absolutely positioned. It is added next to the text range.
picture.TextWrappingStyle = TextWrappingStyle.Square
'Sets horizontal and vertical origin
picture.HorizontalOrigin = HorizontalOrigin.Page
picture.VerticalOrigin = VerticalOrigin.Paragraph
'Sets width and height for the paragraph
picture.Width = 150
picture.Height = 100
'Sets horizontal and vertical position for the picture
picture.HorizontalPosition = 200
picture.VerticalPosition = 150
'Sets lock aspect ratio for the picture
picture.LockAspectRatio = true
picture.Name = "PictureName"
'Sets horizontal and vertical alignments
picture.HorizontalAlignment = ShapeHorizontalAlignment.Center
picture.VerticalAlignment = ShapeVerticalAlignment.Bottom
'Sets 90 degree rotation
picture.Rotation = 90
'Sets horizontal flip
picture.FlipHorizontal = true
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Format-and-rotate-image).

## Find an image by title

An Image with a specific title can be retrieved by iterating the paragraph items that can be used for further manipulations.

The following code example explains how images can be iterated from the document elements.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Find-an-image-by-title/.NET/Find-an-image-by-title/Program.cs" %}
FileStream fileStream = new FileStream(@"Template.docx", FileMode.Open, FileAccess.ReadWrite);
//Loads an existing Word document into DocIO instance
WordDocument document = new WordDocument(fileStream, FormatType.Docx);
//Gets textbody content
WTextBody textBody = document.Sections[0].Body;
//Iterates through the textbody child entities
foreach (TextBodyItem item in textBody.ChildEntities)
{
    if (item is WParagraph)
    {
        WParagraph paragraph = item as WParagraph;
        foreach (ParagraphItem paraItem in paragraph.ChildEntities)
        {
            //Gets the image from its title and modifies its width and height
            if (paraItem is WPicture)
            {
                WPicture picture = paraItem as WPicture;
                if (picture.Title == "Bookmark")
                {
                    picture.Width = 150;
                    picture.Height = 100;
                }
            }
        }
    }
}
//Saves the Word document to MemoryStream.
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document.
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument("Template.docx");
//Gets textbody content
WTextBody textBody = document.Sections[0].Body;
//Iterates through the textbody child entities
foreach (TextBodyItem item in textBody.ChildEntities)
{
    if (item is WParagraph)
    {
        WParagraph paragraph = item as WParagraph;
        foreach (ParagraphItem paraItem in paragraph.ChildEntities)
        {
            //Gets the image from its title and modifies its width and height
            if (paraItem is WPicture)
            {
                WPicture picture = paraItem as WPicture;
                if (picture.Title == "Bookmark")
                {
                    picture.Width = 150;
                    picture.Height = 100;
                }
            }
        }
    }
}
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document 
Dim document As New WordDocument("Template.docx")
'Gets textbody content
Dim textBody As WTextBody = document.Sections(0).Body
'Iterates through the textbody child entities
For Each item As TextBodyItem In textBody.ChildEntities
    If TypeOf item Is WParagraph Then
        Dim paragraph As WParagraph = TryCast(item, WParagraph)
        For Each paraItem As ParagraphItem In paragraph.ChildEntities
            'Gets the image from its title and modifies its width and height
            If TypeOf paraItem Is WPicture Then
                Dim picture As WPicture = TryCast(paraItem, WPicture)
                If picture.Title = "Bookmark" Then
                    picture.Width = 150
                    picture.Height = 100
                End If
            End If
        Next
    End If
Next
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Find-an-image-by-title).

## Add Image caption

You can add caption to an image and update the caption numbers (Sequence fields) using [AddCaption](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WPicture.html#Syncfusion_DocIO_DLS_WPicture_AddCaption_System_String_Syncfusion_DocIO_CaptionNumberingFormat_Syncfusion_DocIO_CaptionPosition_) method.

The following code example shows how to add caption to an image.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Add-image-caption/.NET/Add-image-caption/Program.cs" %}
//Creates a new document
WordDocument document = new WordDocument();
//Adds a new section to the document.
IWSection section = document.AddSection();
//Sets margin of the section
section.PageSetup.Margins.All = 72;
//Adds a paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
//Adds image to  the paragraph
FileStream imageStream = new FileStream(@"Google.png", FileMode.Open, FileAccess.ReadWrite);
IWPicture picture = paragraph.AppendPicture(imageStream);
//Adds Image caption
IWParagraph lastParagragh = picture.AddCaption("Figure", CaptionNumberingFormat.Roman, CaptionPosition.AfterImage);
//Aligns the caption
lastParagragh.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
//Sets after spacing
lastParagragh.ParagraphFormat.AfterSpacing = 12f;
//Sets before spacing
lastParagragh.ParagraphFormat.BeforeSpacing = 1.5f;
//Adds a paragraph to the section
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
//Adds image to  the paragraph
imageStream = new FileStream(@"Yahoo.png", FileMode.Open, FileAccess.ReadWrite);
picture = paragraph.AppendPicture(imageStream);
//Adds Image caption
lastParagragh = picture.AddCaption("Figure", CaptionNumberingFormat.Roman, CaptionPosition.AfterImage);
//Aligns the caption
lastParagragh.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
//Sets before spacing
lastParagragh.ParagraphFormat.BeforeSpacing = 1.5f;
//Updates the fields in Word document
document.UpdateDocumentFields();
//Saves the Word document to MemoryStream.
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document.
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new document
WordDocument document = new WordDocument();
//Adds a new section to the document
IWSection section = document.AddSection();
//Sets margin of the section
section.PageSetup.Margins.All = 72;
//Adds a paragraph to the section
IWParagraph paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
//Adds image to  the paragraph
IWPicture picture = paragraph.AppendPicture(Image.FromFile("Google.png"));
//Adds Image caption
IWParagraph lastParagragh = picture.AddCaption("Figure", CaptionNumberingFormat.Roman, CaptionPosition.AfterImage);
//Aligns the caption
lastParagragh.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
//Sets after spacing
lastParagragh.ParagraphFormat.AfterSpacing = 12f;
//Sets before spacing
lastParagragh.ParagraphFormat.BeforeSpacing = 1.5f;
//Adds a paragraph to the section
paragraph = section.AddParagraph();
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
//Adds image to  the paragraph
picture = paragraph.AppendPicture(Image.FromFile("Yahoo.png"));
//Adds Image caption
lastParagragh = picture.AddCaption("Figure", CaptionNumberingFormat.Roman, CaptionPosition.AfterImage);
//Aligns the caption
lastParagragh.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center;
//Sets before spacing
lastParagragh.ParagraphFormat.BeforeSpacing = 1.5f;
//Updates the fields in Word document
document.UpdateDocumentFields();
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %} 

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new document
Dim document As WordDocument = New WordDocument
'Adds a new section to the document
Dim section As IWSection = document.AddSection
'Sets margin of the section
section.PageSetup.Margins.All = 72
'Adds a paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
'Adds image to  the paragraph
Dim picture As IWPicture = paragraph.AppendPicture(Image.FromFile("Google.png"))
'Adds Image caption
Dim lastParagragh As IWParagraph = picture.AddCaption("Figure", CaptionNumberingFormat.Roman, CaptionPosition.AfterImage)
'Aligns the caption
lastParagragh.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
'Sets after spacing
lastParagragh.ParagraphFormat.AfterSpacing = 12.0F
'Sets before spacing
lastParagragh.ParagraphFormat.BeforeSpacing = 1.5F
'Adds a paragraph to the section
paragraph = section.AddParagraph
paragraph.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
'Adds image to  the paragraph
picture = paragraph.AppendPicture(Image.FromFile("Yahoo.png"))
'Adds Image caption
lastParagragh = picture.AddCaption("Figure", CaptionNumberingFormat.Roman, CaptionPosition.AfterImage)
'Aligns the caption
lastParagragh.ParagraphFormat.HorizontalAlignment = HorizontalAlignment.Center
'Sets before spacing
lastParagragh.ParagraphFormat.BeforeSpacing = 1.5F
'Updates the fields in Word document
document.UpdateDocumentFields()
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Add-image-caption).

By executing the above code example, it generates output Word document as follows.

![Output of Word document with Image caption](WorkingWithImages_images/ImageCaption.png)

## Add SVG image

To add an SVG image to a paragraph in a Word document using Syncfusion<sup>&reg;</sup> DocIO, you can use the [AppendPicture](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.IWParagraph.html#Syncfusion_DocIO_DLS_IWParagraph_AppendPicture_System_Byte___System_Byte___) API.

N> To preserve the SVG image in the Word document, pass both the SVG image data and the equivalent bitmap image bytes to DocIO.

The following code example shows how to add an SVG image in a Word document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Add-svg-image/.NET/Add-svg-image/Program.cs" %}

///Create a new Word document.
using (WordDocument document = new WordDocument())
{
    //Add a new section to the document.
    IWSection section = document.AddSection();
    //Add a new paragraph to the section.
    IWParagraph firstParagraph = section.AddParagraph();
    //Get the image as a byte array.
    byte[] imageBytes = File.ReadAllBytes("Buyers.png");
    //Get the SVG image as a byte array.
    byte[] svgData = File.ReadAllBytes("Buyers.svg");
    //Add SVG image to the paragraph.
    IWPicture picture = firstParagraph.AppendPicture(svgData, imageBytes);
    //Set height and width for the image.
    picture.Height = 100;
    picture.Width = 100;
    //Save the Word document to MemoryStream.
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Docx);
}

{% endhighlight %}
{% highlight c# tabtitle="C# [Windows-specific]" %}

using (WordDocument document = new WordDocument())
{
    //Add a new section to the document.
    IWSection section = document.AddSection();
    //Add a new paragraph to the section.
    IWParagraph firstParagraph = section.AddParagraph();
    //Get the image as a byte array.
    byte[] imageBytes = File.ReadAllBytes("Buyers.png");
    //Get the SVG image as a byte array.
    byte[] svgData = File.ReadAllBytes("Buyers.svg");
    //Add SVG image to the paragraph.
    IWPicture picture = firstParagraph.AppendPicture(svgData, imageBytes);
    //Set height and width for the image.
    picture.Height = 100;
    picture.Width = 100;
    //Save the Word document. 
    document.Save("Sample.docx", FormatType.Docx);
}

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Using document As New WordDocument()
    ' Add a new section to the document.
    Dim section As IWSection = document.AddSection()
    ' Add a new paragraph to the section.
    Dim firstParagraph As IWParagraph = section.AddParagraph()
    ' Get the PNG image as a byte array.
    Dim imageBytes As Byte() = File.ReadAllBytes("Buyers.png")
    ' Get the SVG image as a byte array.
    Dim svgData As Byte() = File.ReadAllBytes("Buyers.svg")
    ' Add SVG image to the paragraph.
    Dim picture As IWPicture = firstParagraph.AppendPicture(svgData, ImageType.Metafile, imageBytes)
    ' Set height and width for the image.
    picture.Height = 100
    picture.Width = 100
    ' Save the Word document.
    document.Save("Sample.docx", FormatType.Docx)
End Using

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Add-svg-image/.NET).

## Online Demo

* Explore how to insert an image into the Word document using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/imageinsertion#/tailwind). 

## See Also

* [How to extract Images from Word document in C# and VB?](https://support.syncfusion.com/kb/article/11829/how-to-extract-images-from-word-document-in-c-and-vb)
* [How to replace an image with same size in a Word document](https://support.syncfusion.com/kb/article/17796/how-to-replace-an-image-with-same-size-in-a-word-document)
* [How to find and replace an image title in a Word document?](https://support.syncfusion.com/kb/article/18808/how-to-find-and-replace-an-image-title-in-a-word-document)
* [How to extract images from ASP.NET Core Word Document?](https://support.syncfusion.com/kb/article/19583/how-to-extract-images-from-aspnet-core-word-document?)
* [How to replace SVG and other images in ASP.NET Word document?](https://support.syncfusion.com/kb/article/19459/how-to-replace-svg-and-other-images-in-aspnet-word-document?)
* [How to convert a chart to an image and replace it in a Word document?](https://support.syncfusion.com/kb/article/19752/how-to-convert-a-chart-to-an-image-and-replace-it-in-a-word-document)
* [How to fix Images in a Specific Position in .Net Core Word Document?](https://support.syncfusion.com/kb/article/19660/how-to-fix-images-in-a-specific-position-in-net-core-word-document)
* [How to Apply Border to an Image in .NET Core Word Document?](https://support.syncfusion.com/kb/article/19726/how-to-apply-border-to-an-image-in-net-core-word-document)
* [How to Find and Remove Corrupted Images in .NET Core Word Document?](https://support.syncfusion.com/kb/article/19605/how-to-find-and-remove-corrupted-images-in-net-core-word-document)
* [How to Convert Excel Worksheets to Images in .NET Core Word document?](https://support.syncfusion.com/kb/article/20162/how-to-convert-excel-worksheets-to-images-in-net-core-word-document)

## Frequently Asked Questions

* [How to extract the images in the document?](https://help.syncfusion.com/document-processing/word/word-library/net/faqs/paragraph-and-paragraph-items-faqs#how-to-extract-the-images-in-the-document)
