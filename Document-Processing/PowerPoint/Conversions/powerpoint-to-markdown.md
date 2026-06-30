---
title: PowerPoint to Markdown in C# | PowerPoint | Syncfusion
description: Learn how to convert a PowerPoint to Markdown using the .NET PowerPoint library without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# PowerPoint to Markdown Conversion

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) supports the conversion of a PowerPoint Presentation to a Markdown file, which mostly follows the CommonMark specification and GitHub-flavored syntax.


## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert a PowerPoint Presentation document to a Markdown file using the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library).

* [Markdown to PowerPoint assemblies](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/assemblies-required)
* [Markdown to PowerPoint NuGet packages](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/nuget-packages-required)

## Convert PowerPoint to Markdown

Convert an existing PowerPoint Presentation document that is created from scratch into a Markdown file using the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library).

The following code example shows how to convert a PowerPoint Presentation document to a Markdown.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing Presentation document.
using (IPresentation presentation = Presentation.Open("Input.pptx"))
{
    //Save the PowerPoint Presentation as a Markdown file.
    presentation.Save("PPTXtoMd.md");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing Presentation document.
using (IPresentation presentation = Presentation.Open("Input.pptx"))
{
    //Save the PowerPoint Presentation as a Markdown file.
    presentation.Save("PPTXtoMd.md");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Open an existing Presentation document
Using presentation As IPresentation = Presentation.Open("Input.pptx")
    ' Save the Presentation document as a Markdown file
    presentation.Save("PPTXtoMd.md")
End Using
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
// Open the file as Stream
using (Stream pptStream = typeof(App).GetTypeInfo().Assembly.GetManifestResourceStream("Sample.Assets.Input.pptx"))
{
    // Load the stream into a Presentation document
    using (IPresentation presentation = Presentation.Open(pptStream))
    {
        // Save as Markdown into MemoryStream
        MemoryStream stream = new MemoryStream();
        presentation.Save(stream);

        // Save the stream as a Markdown file locally
        Save(stream, "PPTXtoMd.md");
    }
}

// Saves the Markdown file
async void Save(MemoryStream streams, string filename)
{
    streams.Position = 0;
    StorageFile stFile;

    if (!Windows.Foundation.Metadata.ApiInformation.IsTypePresent(
        "Windows.Phone.UI.Input.HardwareButtons"))
    {
        FileSavePicker savePicker = new FileSavePicker();
        savePicker.DefaultFileExtension = ".md";
        savePicker.SuggestedFileName = filename;
        savePicker.FileTypeChoices.Add("Markdown Files", new List<string>() { ".md" });
        stFile = await savePicker.PickSaveFileAsync();
    }
    else
    {
        StorageFolder local = Windows.Storage.ApplicationData.Current.LocalFolder;
        stFile = await local.CreateFileAsync(filename, CreationCollisionOption.ReplaceExisting);
    }

    if (stFile != null)
    {
        using (IRandomAccessStream zipStream = await stFile.OpenAsync(FileAccessMode.ReadWrite))
        {
            using (Stream outstream = zipStream.AsStreamForWrite())
            {
                byte[] buffer = streams.ToArray();
                outstream.Write(buffer, 0, buffer.Length);
                outstream.Flush();
            }
        }
    }

    // Launch the saved Markdown file
    await Windows.System.Launcher.LaunchFileAsync(stFile);
}
{% endhighlight %}

{% endtabs %}

## Save Options

When converting a PowerPoint Presentation to Markdown, the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) provides various save options to customize the output Markdown file. These options allow you to customize image paths, set character encoding, and other export behaviors.

When converting a PowerPoint Presentation to a Markdown using the [Save(fileName)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Save_System_String_) overloads, the library creates a new folder parallel to the output file name and exports all the images into it as default.

When converting a PowerPoint Presentation to a Markdown using the [Save(Stream)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Save_System_IO_Stream_) overloads, the library preserves the images as base64 format in the output Markdown file as default.

You can customize the above default behaviors using the following options in the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library).

### Customize the image path

The [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) provides an `ImageNodeVisited` event, which is used to customize the image path to set in the output Markdown file and save images externally while converting a PowerPoint Presentation to a Markdown.

The following code example illustrates how to save image files during a PowerPoint to Markdown conversion.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Open an existing Presentation document.
using (IPresentation presentation = Presentation.Open("Input.pptx"))
{
	// Hook the event to customize the image.
    presentation.MdSaveOptions.ImageNodeVisited += SaveImage;
    // Save the PowerPoint Presentation as a Markdown file.
    presentation.Save(@"Output.md");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Open an existing Presentation document.
using (IPresentation presentation = Presentation.Open("Input.pptx"))
{
	// Hook the event to customize the image.
    presentation.MdSaveOptions.ImageNodeVisited += SaveImage;
    // Save the PowerPoint Presentation as a Markdown file.
    presentation.Save(@"Output.md");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing Presentation document.
Using presentation As IPresentation = Presentation.Open("Input.pptx")
    'Hook the event to customize the image.
    AddHandler presentation.MdSaveOptions.ImageNodeVisited, AddressOf SaveImage
    'Save the Presentation document as a Markdown file.
    presentation.Save("Output.md")
End Using

{% endhighlight %}

{% endtabs %}

The following code examples show the event handler to customize the image path and save the image in an external folder.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
	// Save the image stream as a file.
	using (FileStream fileStreamOutput = File.Create(imagepath))
		args.ImageStream.CopyTo(fileStreamOutput);
	// Set the URI to be used for the image in the output Markdown. 
	args.Uri = imagepath;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    string imagepath = @"D:\Temp\Image1.png";
	// Save the image stream as a file.
	using (FileStream fileStreamOutput = File.Create(imagepath))
		args.ImageStream.CopyTo(fileStreamOutput);
	// Set the URI to be used for the image in the output Markdown. 
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

### Encoding

The [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) provides an `Encoding` property to specify the character encoding to use when saving the Markdown file. This property is useful when you need to save the output Markdown file with specific character encodings such as UTF-8, UTF-16, ASCII, or other encodings.

The following code example shows how to save a Markdown file with a specific encoding.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

 // Open an existing Presentation document.
 using (IPresentation presentation = Presentation.Open("Input.pptx"))
 {
	 // Set the encoding for the Markdown file.
     presentation.MdSaveOptions.Encoding = Encoding.ASCII;
     // Save the PowerPoint Presentation as a Markdown file.
     presentation.Save("Output.md");
 }

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

 // Open an existing Presentation document.
 using (IPresentation presentation = Presentation.Open("Input.pptx"))
 {
	 // Set the encoding for the Markdown file.
     presentation.MdSaveOptions.Encoding = Encoding.ASCII;
     // Save the PowerPoint Presentation as a Markdown file.
     presentation.Save("Output.md");
 }
 
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing Presentation document.
Using presentation As IPresentation = Presentation.Open("Input.pptx")
    'Set the encoding for the Markdown file.
    presentation.MdSaveOptions.Encoding = Encoding.ASCII
    'Save the PowerPoint Presentation as a Markdown file.
    presentation.Save("Output.md")
End Using
{% endhighlight %}

{% endtabs %}

N> Set the encoding value before saving the document as per the above code example.

