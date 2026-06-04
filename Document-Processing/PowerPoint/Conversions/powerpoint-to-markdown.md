---
title: PowerPoint to Markdown in C# | PowerPoint | Syncfusion
description: Learn how to convert a PowerPoint to Markdown using the .NET PowerPoint library without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# PowerPoint to Markdown Conversion

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The .NET PowerPoint library supports the conversion of a PowerPoint Presentation to a Markdown file, which mostly follows the CommonMark specification and GitHub-flavored syntax.


## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert a PowerPoint Presentation document to a Markdown file using the .NET PowerPoint Library.

* [Markdown to PowerPoint assemblies](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/assemblies-required)
* [Markdown to PowerPoint NuGet packages](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/nuget-packages-required)

## Convert PowerPoint to Markdown

Convert an existing PowerPoint Presentation document that is created from scratch into a Markdown file using the .NET PowerPoint library.

The following code example shows how to convert a PowerPoint Presentation document to a Markdown.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/main/PowerPoint-to-Markdown-conversion/Convert-PowerPoint-to-Markdown/.NET/Convert-PowerPoint-to-Markdown/Program.cs" %}
//Open the file as a Stream.
using (FileStream fileStream = new FileStream("Input.pptx", FileMode.Open, FileAccess.Read))
{
    //Load the file stream into a Markdown file.
    using (IPresentation presentation = Presentation.Open(fileStream))
    {
        //Save as a PPTX document into the Markdown FileStream.
        using (FileStream outputStream = new FileStream("PPTXtoMd.md", FileMode.Create))
        {
            presentation.Save(outputStream);
        }
    } 
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing Presentation document.
using (IPresentation presentation = Presentation.Open("Input.pptx", FormatType.Docx))
{
    //Save the PowerPoint Presentation as a Markdown file.
    presentation.Save("PPTXtoMd.md");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Open an existing Presentation document
Using presentation As IPresentation = Presentation.Open("Input.pptx", FormatType.Docx)
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

