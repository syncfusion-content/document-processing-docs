---
title:  Convert Word to Image in Word Library  | DocIO | Syncfusion
description:  Learn how to convert a Word document to image using the Syncfusion<sup>&reg;</sup> Word (DocIO) library without Microsoft Word or interop dependencies. 
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word to Image using Syncfusion<sup>&reg;</sup> Word library 

Syncfusion<sup>&reg;</sup> Word library (DocIO) allows you to convert Word document to image within a few lines of code in .NET applications and also it does not require Adobe and Microsoft Word application to be installed in the machine. Using this, you can create an input Word document from scratch or load an existing Word document and then easily convert to Image.  

The Syncfusion<sup>&reg;</sup> Word to image converter offers high versatility and seamless performance across various .NET platforms, including [Windows Forms](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-windows-forms), [WPF](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-wpf), [ASP.NET](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-asp-net), [ASP.NET MVC](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-asp-net-mvc), [ASP.NET Core](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-asp-net-core), [Blazor](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-blazor), [Xamarin](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-xamarin), [WinUI](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-winui), [.NET MAUI](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-maui). Also, in different environments like [Azure](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-azure), [AWS](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-aws), [Google Cloud](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-google-cloud-platform), [Linux](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-linux), and [macOS](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-mac). 

## Key Features  

* Ability to [convert entire word document to images](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/word-to-image#convert-the-entire-word-to-images).
* Ability to [convert specific page of Word to image](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/word-to-image#convert-specific-page-of-word-to-image).
* Ability to [convert specific range of pages in Word to images](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/word-to-image#convert-a-specific-range-of-pages-in-word-to-images).
* Ability to [convert a Word document to an image using custom image resolution](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/word-to-image#custom-image-resolution).
* Set [fallback fonts](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/fallback-fonts-word-to-image) for characters when glyphs are not available. 

## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert the Word document to image.

* [Word to image conversion assemblies](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/assemblies-required-word-to-image) 
* [Word to image conversion NuGet packages](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/nuget-packages-required-word-to-image)

To quickly start converting a Word document to an image, please check out this video:
{% youtube "https://www.youtube.com/watch?v=hoV3i7nl85I" %}

T> 1. If you encounter issues while using the .NET Word library in ASP.NET Core, refer to the [troubleshooting guide](https://support.syncfusion.com/kb/article/16012/troubleshoot-guide-for-aspnet-core-word-docio-library-issues#things-to-check-while-facing-an-issue-in-word-library) for recommended checks and solutions.

## Convert Word to Image

The following namespaces are required to compile the code in this topic:

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, WinUI, and ***C# [Windows-specific]*** or ***VB.NET [Windows-specific]*** for WinForms, WPF, ASP.NET and ASP.NET MVC applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.OfficeChart;
using Syncfusion.OfficeChartToImageConverter;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.DocIO
Imports Syncfusion.DocIO.DLS
Imports Syncfusion.OfficeChart
Imports Syncfusion.OfficeChartToImageConverter
{% endhighlight %}

{% endtabs %}

T> 1. You can get the good quality converted images by specifying the image type as Metafile in the platforms targeting .NET Framework.
T> 2. You can specify the quality of the converted charts by setting the scaling mode.

### Convert the entire Word document to images

The following code example illustrates how to convert the entire Word document to images.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-Image-conversion/Convert-Word-to-image/.NET/Convert-Word-to-image/Program.cs" %}
//Open the file as Stream.
using (FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load file stream into Word document.
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Create an instance of DocIORenderer.
        using (DocIORenderer render = new DocIORenderer())
        {
            //Convert the entire Word document to images.
            Stream[] imageStreams = wordDocument.RenderAsImages();
            for (int i = 0; i < imageStreams.Length; i++)
            {
                 //Save the image stream as file.
                using (FileStream fileStreamOutput = File.Create("WordToImage_" + i + ".jpeg"))
                {
                    imageStreams[i].CopyTo(fileStreamOutput);
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load an existing Word document.
using(WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx))
{
    //Initialize the ChartToImageConverter for converting charts during Word to image conversion.
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    //Set the scaling mode for charts (Normal mode reduces the file size).
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    //Convert the entire Word document to images.
    Image[] images = wordDocument.RenderAsImages(ImageType.Bitmap);
    for (int i = 0; i < images.Length; i++)
    {
        //Save the image as jpeg.
        images[i].Save("WordToImage_" + i + ".jpeg", ImageFormat.Jpeg);
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load an existing Word document.
Using wordDocument As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Initialize the ChartToImageConverter for converting charts during Word to image conversion.
    wordDocument.ChartToImageConverter = New ChartToImageConverter()
    'Set the scaling mode for charts (Normal mode reduces the file size).
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
    'Convert the entire Word document to images.
    Dim images As Image() = wordDocument.RenderAsImages(ImageType.Bitmap)
    For i As Integer = 0 To images.Length - 1
        'Save the image as jpeg.
        images(i).Save("WordToImage_" & i & ".jpeg", ImageFormat.Jpeg)
    Next
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image).

### Convert specific page of Word to image

You can convert a specific page of the Word document into an image and use it for a thumbnail. The following code example illustrates how to convert a specific page in a Word document into an image.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-Image-conversion/First-page-of-Word-to-image/.NET/First-page-of-Word-to-image/Program.cs" %}
//Open the file as Stream.
using (FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load file stream into Word document.
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Create a new instance of DocIORenderer class.
        using (DocIORenderer render = new DocIORenderer())
        {
            //Convert the first page of the Word document into an image.
            Stream imageStream = wordDocument.RenderAsImages(0, ExportImageFormat.Jpeg); 
            //Reset the stream position.
            imageStream.Position = 0;
            //Save the stream as file.
            using (FileStream fileStreamOutput = File.Create("WordToImage.jpeg"))
            {
                imageStream.CopyTo(fileStreamOutput);
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load an existing Word document.
using(WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx))
{
    //Initialize the ChartToImageConverter for converting charts during Word to image conversion.
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    //Set the scaling mode for charts (Normal mode reduces the file size).
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    //Convert the first page of the Word document into an image.
    Image image = wordDocument.RenderAsImages(0, ImageType.Bitmap);
    //Save the image as jpeg.
    image.Save("WordToImage.jpeg", ImageFormat.Jpeg);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load an existing Word document.
Using wordDocument As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Initialize the ChartToImageConverter for converting charts during Word to image conversion.
    wordDocument.ChartToImageConverter = New ChartToImageConverter()
    'Set the scaling mode for charts (Normal mode reduces the file size).
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
    'Convert the first page of the Word document into an image.
    Dim image As Image = wordDocument.RenderAsImages(0, ImageType.Bitmap)
    'Save the image as jpeg.
    image.Save("WordToImage.jpeg", ImageFormat.Jpeg)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/First-page-of-Word-to-image).

## Convert a specific range of pages in Word to images

Users can convert a specific range of pages in a Word document into images. The following code example illustrates how to convert a specific range of pages in a Word document into images.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-to-Image-conversion/Specific-range-of-pages-Word-to-image/.NET/Specific-range-of-pages-Word-to-image/Program.cs" %}
//Open the file as Stream.
using (FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load file stream into Word document.
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Create a new instance of DocIORenderer class.
        using (DocIORenderer render = new DocIORenderer())
        {
            //Convert a specific range of pages in Word document to images.
            Stream[] imageStreams = wordDocument.RenderAsImages(1, 2); 
            int i = 0;
            foreach (Stream stream in imageStreams)
            {
                //Reset the stream position.
                stream.Position = 0;
                //Save the stream as file.
                using (FileStream fileStreamOutput = File.Create("WordToImage_" + i + ".jpeg"))
                {
                    stream.CopyTo(fileStreamOutput);
                }
                i++;
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load an existing Word document.
using(WordDocument wordDocument = new WordDocument("Template.docx", FormatType.Docx))
{
    //Initialize the ChartToImageConverter for converting charts during Word to image conversion.
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    //Set the scaling mode for charts (Normal mode reduces the file size).
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    //Convert a specific range of pages in Word document to images.
    Image[] images = wordDocument.RenderAsImages(1, 2, ImageType.Bitmap);
    int i = 0;
    foreach (Image image in images)
    {
        //Save the image as jpeg.
        image.Save("WordToImage_" + i + ".jpeg", ImageFormat.Jpeg);
        i++;
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load an existing Word document.
Using wordDocument As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Initialize the ChartToImageConverter for converting charts during Word to image conversion.
    wordDocument.ChartToImageConverter = New ChartToImageConverter()
    'Set the scaling mode for charts (Normal mode reduces the file size).
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
    'Convert the entire Word document to images.
    Dim images As Image() = wordDocument.RenderAsImages(1, 2, ImageType.Bitmap)
    Dim i = 0
    For Each image As Image In images
        'Save the image as jpeg.
        image.Save("WordToImage_" & i & ".jpeg", ImageFormat.Jpeg)
        i += 1
    Next
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Specific-range-of-pages-Word-to-image).

## Supported File formats

The .NET Word Library (DocIO) supports below formats to convert into image. 

* DOC, DOCX, Word Processing XML (2003 & 2007), DOT, DOTX, DOCM, and DOTM
* RTF 
* Text 
* Markdown 
* HTML 

N> To see limitations and unsupported features in Word to image conversion, refer [here]().

T> For troubleshooting issues in the .NET Word Library (DocIO), refer [this](https://support.syncfusion.com/kb/article/16012/troubleshooting-guide-for-syncfusion-word-docio-library-issues?isInternalRefresh=False) article that provides comprehensive guidance on resolving common problems.

## Supported File formats

The .NET Word Library (DocIO) supports below formats to convert into image. 

* DOC, DOCX, Word Processing XML (2003 & 2007), DOT, DOTX, DOCM, and DOTM
* RTF 
* Text 
* Markdown 
* HTML 

N> To see limitations and unsupported features in Word to image conversion, refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/unsupported-elements-word-to-image).

## Custom image resolution

The following code snippet illustrates how to convert a Word document to an image using custom image resolution.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//DocIO only supports Word to image conversion in Windows Forms, WPF, ASP.NET and ASP.NET MVC platform.
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load an existing Word document.
using (WordDocument wordDocument = new WordDocument(@"Template.docx", FormatType.Docx))
{
    //Initialize the ChartToImageConverter for converting charts during Word to image conversion.
    wordDocument.ChartToImageConverter = new ChartToImageConverter();
    //Set the scaling mode for charts (Normal mode reduces the file size).
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
    //Convert the word document to images.
    Image[] images = wordDocument.RenderAsImages(ImageType.Metafile);
    //Declare the variables to hold custom width and height.
    int customWidth = 1500;
    int customHeight = 1500;
    foreach (Image image in images)
    {
        MemoryStream stream = new MemoryStream();
        image.Save(stream, ImageFormat.Png);
        //Create a bitmap of specific width and height.
        Bitmap bitmap = new Bitmap(customWidth, customHeight, PixelFormat.Format32bppPArgb);
        //Get the graphics from an image.
        Graphics graphics = Graphics.FromImage(bitmap);
        //Set the resolution.
        bitmap.SetResolution(300, 300);
        //Recreate the image in custom size.
        graphics.DrawImage(System.Drawing.Image.FromStream(stream), new Rectangle(0, 0, bitmap.Width, bitmap.Height));
        //Save the image as a bitmap.
        bitmap.Save(@"ImageOutput" + Guid.NewGuid().ToString() + ".png");
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load an existing Word document.
Using wordDocument As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Initialize the ChartToImageConverter for converting charts during Word to image conversion.
    wordDocument.ChartToImageConverter = New ChartToImageConverter()
    'Set the scaling mode for charts (Normal mode reduces the file size).
    wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal
    'Convert the word document to images.
    Dim images() As Image = wordDocument.RenderAsImages(ImageType.Metafile)
    'Declare the variables to hold custom width and height.
    Dim customWidth As Integer = 1500
    Dim customHeight As Integer = 1500
    For Each image As Image In images
        Dim stream As MemoryStream = New MemoryStream
        image.Save(stream, ImageFormat.Png)
        'Create a bitmap of specific width and height.
        Dim bitmap As Bitmap = New Bitmap(customWidth, customHeight, PixelFormat.Format32bppPArgb)
        'Get the graphics from an image.
        Dim graphics As Graphics = Graphics.FromImage(bitmap)
        'Set the resolution.
        bitmap.SetResolution(300, 300)
        'Recreate the image in custom size.
        graphics.DrawImage(System.Drawing.Image.FromStream(stream), New Rectangle(0, 0, bitmap.Width, bitmap.Height))
        'Save the image as a bitmap.
        bitmap.Save(("ImageOutput" + (Guid.NewGuid.ToString + ".png")))
    Next

End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Custom-image-resolution).

## Fallback fonts

During Word to Image conversions, if a glyph of the input text is unavailable in the specified font, the text will not be rendered properly. To address this, the Syncfusion<sup>&reg;</sup> Word (DocIO) library allows users to specify fallback fonts. When a glyph is missing, the library will use one of the fallback fonts to render the text correctly in the output image. For further information, click [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/fallback-fonts-word-to-image).

## Online Demo

* Explore how to convert a Word document to an image using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/wordtoimage#/tailwind).

## See Also

* [Supported file formats](https://help.syncfusion.com/document-processing/word/word-library/net/support-file-formats)
* [How to convert word to tiff using C#, VB.NET](https://support.syncfusion.com/kb/article/9541/how-to-convert-word-to-tiff-using-c-vb-net)
* [How to convert Word to Image in Blazor WebAssembly (WASM)?](https://support.syncfusion.com/kb/article/12123/how-to-convert-word-to-image-in-blazor-webassembly-wasm)
* [How to resolve font problems during Word to Image conversion?](https://support.syncfusion.com/kb/article/13969/how-to-resolve-font-problems-during-word-to-pdf-or-image-conversion)
* [How to convert a chart to an image and replace it in a Word document?](https://support.syncfusion.com/kb/article/19752/how-to-convert-a-chart-to-an-image-and-replace-it-in-a-word-document)
* [How to create thumbnail image for Word document in .NET?](https://support.syncfusion.com/kb/article/22462/how-to-create-thumbnail-image-for-word-document-in-net)
