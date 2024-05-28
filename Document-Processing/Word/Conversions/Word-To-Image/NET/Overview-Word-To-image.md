---
title: Overview of Word document to Image conversion | Syncfusion
description: Learn about Word document to Image conversion in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word  to Image using Syncfusion Word (DocIO) library 

Syncfusion Word library (DocIO) allows you to convert Word document to Image within a few lines of code in .NET applications and also it does not require Adobe and Microsoft Word application to be installed in the machine. Using this, you can create an input Word document from scratch or load an existing Word document and then easily convert to Image.  

The Syncfusion Word to Image converter offers high versatility and seamless performance across various .NET platforms, including Windows Forms, WPF, ASP.NET, ASP.NET MVC, ASP.NET Core, Blazor, Xamarin, WinUI, .NET MAUI. Also, in different environments like Azure, AWS, Google Cloud, Linux, Docker, and macOS. 

To quickly start converting a Word document to a Image, please check out this video: 

{% youtube "https://www.youtube.com/watch?v=hoV3i7nl85I" %}

# Key Features  

* Ability to convert entire word document to images
* Ability to convert specific page of Word to image
* Ability to convert specific range of pages in Word to an image
* Ability to convert a Word document to an image using custom image resolution.
* Set fallback fonts for characters when glyphs are not available. 

# Assemblies and NuGets required 

Refer to the following links for the assemblies or NuGet packages required based on platforms to convert the Word document to Image: 

* Assemblies Required 
* NuGet packages Required 

# Convert Word to Image 

The following namespaces are required to compile the code: 

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

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

The following code example illustrates how to convert the entire Word document to images.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Open the file as Stream.
using (FileStream docStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load file stream into Word document.
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Create a new instance of DocIORenderer class.
        using (DocIORenderer render = new DocIORenderer())
        {
            //Convert the entire Word document to images.
            Stream[] imageStreams = wordDocument.RenderAsImages(); 
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
    //Convert the entire Word document to images.
    Image[] images = wordDocument.RenderAsImages(ImageType.Bitmap);
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
    Dim images As Image() = wordDocument.RenderAsImages(ImageType.Bitmap)
    Dim i = 0
    For Each image As Image In images
        'Save the image as jpeg.
        image.Save("WordToImage_" & i & ".jpeg", ImageFormat.Jpeg)
        i += 1
    Next
End Using
{% endhighlight %}

{% endtabs %}

By executing the program, you will get the output PDF as follows. 

![Convert Word to Image](WordToPDF_images/Output-WordtoImage.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image).

T> For troubleshooting issues in the .NET Word Library (DocIO), refer this article that provides comprehensive guidance on resolving common problems.

# Convert the entire Word to images

You can convert an entire Word document to images.For further information, click [here].

# Convert specific page of Word to image

You can convert a specific page of the Word document into an image and use it for a thumbnail.For further information, click [here].

# Convert a specific range of pages in Word to an image

Users can convert a specific range of pages in a Word document into images.For further information, click [here].

# Custom image resolution

Users can convert Word document to an image using custom image resolution.For further information, click [here].

# Fallback fonts 

During Word to Image conversions, if a glyph of the input text is unavailable in the specified font, the text will not be rendered properly. To address this, the Syncfusion Word (DocIO) library allows users to specify fallback fonts. When a glyph is missing, the library will use one of the fallback fonts to render the text correctly in the output image.For further information, click [here].

