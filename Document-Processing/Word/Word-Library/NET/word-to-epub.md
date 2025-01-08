---
title: Convert Word document to EPUB in C# | DocIO | Syncfusion<sup>®</sup>
description: Learn how to convert Word document to EPUB  using the .NET Word (DocIO) library without Microsoft Word or interop dependencies
platform: document-processing
control: DocIO
documentation: UG
---

# Converting Word document to EPUB

The Word document files are converted as EPUB v2.0 file format with few lines of code by using the Essential<sup>®</sup> DocIO.

## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to convert a Word document to EPUB file using the .NET Word Library (DocIO).

* [Word to EPUB conversion assemblies](https://help.syncfusion.com/document-processing/word/word-library/net/assemblies-required)
* [Word to EPUB conversion NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required)

The following code illustrates how to convert the Word document to EPUB file.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//DocIO supports Word to EPUB in Windows Forms, UWP, WPF, ASP.NET Web, and MVC platforms alone
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing document
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Exports the fonts used in the document
document.SaveOptions.EPubExportFont = true;
//Exports header and footer
document.SaveOptions.HtmlExportHeadersFooters = true;
//Saves the document as EPub file
document.Save("WordToEPub.epub", FormatType.EPub);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing document
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Exports the fonts used in the document
document.SaveOptions.EPubExportFont = True
'Exports header and footer
document.SaveOptions.HtmlExportHeadersFooters = True
'Saves the document as EPub file
document.Save("WordToEPub.epub", FormatType.EPub)
'Closes the document
document.Close()
{% endhighlight %}

{% highlight c# tabtitle="UWP" %}
//Loads the template document 
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
WordDocument document = new WordDocument(assembly.GetManifestResourceStream("Sample.Assets.Template.docx"), FormatType.Docx);
//Exports the fonts used in the document
document.SaveOptions.EPubExportFont = true;
//Exports header and footer
document.SaveOptions.HtmlExportHeadersFooters = true;
//Saves the document as EPub file
MemoryStream stream = new MemoryStream();
await document.SaveAsync(stream, FormatType.EPub);
//Saves the stream as Word file in local machine
Save(stream, "WordToEPub.epub");
//Closes the document
document.Close();

//Saves the Word document
async void Save(MemoryStream streams, string filename)
{
    streams.Position = 0;
    StorageFile stFile;
    if (!(Windows.Foundation.Metadata.ApiInformation.IsTypePresent("Windows.Phone.UI.Input.HardwareButtons")))
    {
        FileSavePicker savePicker = new FileSavePicker();
        savePicker.DefaultFileExtension = ".epub";
        savePicker.SuggestedFileName = filename;
        savePicker.FileTypeChoices.Add("Word Documents", new List<string>() { ".epub" });
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
            //Write compressed data from memory to file
            using (Stream outstream = zipStream.AsStreamForWrite())
            {
                byte[] buffer = streams.ToArray();
                outstream.Write(buffer, 0, buffer.Length);
                outstream.Flush();
            }
        }
    }
    //Launch the saved Word file
    await Windows.System.Launcher.LaunchFileAsync(stFile);
}
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-EPUB-conversion/Convert-Word-to-EPUB).

N> Word to EPUB conversion is supported only in Windows Forms, UWP, WPF, ASP.NET Web, and MVC platforms.

The following elements are supported in Word to EPUB conversion.

* Text and Paragraph Formatting
* Lists
* Tables
* Images
* Footnote
* Hyperlink
* Styles
* Table of Contents
* Document Properties

## Frequently Asked Questions

* [How to set title when converting Word document to EPUB?](https://help.syncfusion.com/document-processing/word/word-library/net/faqs/html-and-epub-conversions-faqs#how-to-set-title-when-converting-word-document-to-epub)
