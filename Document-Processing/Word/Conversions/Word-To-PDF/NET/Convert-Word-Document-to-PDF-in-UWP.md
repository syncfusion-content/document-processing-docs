---
title: Convert Word document to PDF in UWP | Syncfusion
description: Convert Word document to PDF in UWP using Syncfusion DocIO library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word document to PDF in UWP

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Word library](https://www.syncfusion.com/document-sdk/net-word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to PDF in UWP**.

## Steps to convert Word document to PDF in UWP

Step 1: Create a new **Blank App (Universal Windows)** project in Visual Studio with the project name **Convert_Word_Document_to_PDF**. In the project properties, set the **Minimum version** and **Target version** to **Windows 10 Fall Creators Update (FCU, build 16299)** or later.

![Create UWP application in Visual Studio](UWP_images/Create-UWP-project-WordtoPDF.png)

Step 2: Install the following NuGet packages as references to your UWP application from [NuGet.org](https://www.nuget.org/):

* [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core/) - required for `WordDocument`.
* [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/) - required for converting Word to PDF.

![Syncfusion.DocIORenderer.Net.Core](UWP_images/Nuget-Package-WordtoPDF.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Add the input Word document to the project. In **Solution Explorer**, create an **Assets** folder, add a sample Word file (for example, `Input.docx`), and set its **Build Action** to **Embedded Resource** so it can be loaded using `GetManifestResourceStream`.

Step 4: Add a new button in the **MainPage.xaml** as shown below.

{% tabs %}

{% highlight c# tabtitle="C#" %}

<Page
    x:Class="Convert_Word_Document_to_PDF.MainPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:Convert_Word_Document_to_PDF"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d"
    Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">

    <Grid>
        <Button x:Name="button" Content="Convert Word to PDF" Click="OnButtonClicked" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Grid>
</Page>


{% endhighlight %}

{% endtabs %}

Step 5: Include the following namespaces in the **MainPage.xaml.cs** file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using System.IO;
using System.Reflection;
using System.Collections.Generic;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;
using Windows.Storage;
using Windows.Storage.Pickers;
using Windows.Storage.Streams;
using Windows.UI.Popups;
using Windows.UI.Xaml;
{% endhighlight %}

{% endtabs %}

Step 6: Include the below code snippet in the click event of the button in **MainPage.xaml.cs** to **convert the Word document to PDF** and save the **PDF** document as a physical file and open the file for viewing.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Load an existing Word document.
Assembly assembly = typeof(App).GetTypeInfo().Assembly;
using (WordDocument wordDocument = new WordDocument(assembly.GetManifestResourceStream("Convert_Word_Document_to_PDF.Assets.Input.docx"), FormatType.Docx))
{
    //Instantiation of DocIORenderer for Word to PDF conversion
    using (DocIORenderer render = new DocIORenderer())
    {
        //Converts Word document into PDF document
        using (PdfDocument pdfDocument = render.ConvertToPDF(wordDocument))
        {
            //Save the PDF to a MemoryStream
            using (MemoryStream outputStream = new MemoryStream())
            {
                pdfDocument.Save(outputStream);
                outputStream.Position = 0;
                //Save the PDF file
                SavePDF(outputStream);
            }
        }
    }
}

{% endhighlight %}

{% endtabs %}

### Step 6.1: Save the PDF document

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Saves the PDF document
private async void SavePDF(Stream outputStream)
{
    StorageFile stFile;
    if (!(Windows.Foundation.Metadata.ApiInformation.IsTypePresent("Windows.Phone.UI.Input.HardwareButtons")))
    {
        FileSavePicker savePicker = new FileSavePicker();
        //Bind the picker to the current window (required on desktop UWP)
        var hwnd = WinRT.Interop.WindowNative.GetWindowHandle(App.MainWindow);
        WinRT.Interop.InitializeWithWindow.Initialize(savePicker, hwnd);
        savePicker.DefaultFileExtension = ".pdf";
        savePicker.SuggestedFileName = "Sample";
        savePicker.FileTypeChoices.Add("Adobe PDF Document", new List<string>() { ".pdf" });
        stFile = await savePicker.PickSaveFileAsync();
    }
    else
    {
        StorageFolder local = Windows.Storage.ApplicationData.Current.LocalFolder;
        stFile = await local.CreateFileAsync("Sample.pdf", CreationCollisionOption.ReplaceExisting);
    }
    if (stFile != null)
    {
        Windows.Storage.Streams.IRandomAccessStream fileStream = await stFile.OpenAsync(FileAccessMode.ReadWrite);
        Stream st = fileStream.AsStreamForWrite();
        st.SetLength(0);
        st.Write((outputStream as MemoryStream).ToArray(), 0, (int)outputStream.Length);
        st.Flush();
        st.Dispose();
        fileStream.Dispose();
        MessageDialog msgDialog = new MessageDialog("Do you want to view the Document?", "File created.");
        UICommand yesCmd = new UICommand("Yes");
        msgDialog.Commands.Add(yesCmd);
        UICommand noCmd = new UICommand("No");
        msgDialog.Commands.Add(noCmd);
        IUICommand cmd = await msgDialog.ShowAsync();
        if (cmd == yesCmd)
        {
            // Launch the retrieved file
            bool success = await Windows.System.Launcher.LaunchFileAsync(stFile);
        }
    }
}

{% endhighlight %}

{% endtabs %}

N> Wrap the file I/O and PDF conversion logic in a try/catch block to handle exceptions such as `UnauthorizedAccessException`, `IOException`, or rendering errors gracefully.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/UWP).

By executing the program, you will get the **PDF document** as follows.

![Word to PDF in UWP](WordToPDF_images/OutputImage.png)

N> The minimum target version of the UWP project must be Windows 10 Fall Creators Update (FCU, build 16299), which provides UWP support for .NET Standard 2.0.

Looking for the full .NET Word Library overview, features, pricing, and documentation? Visit the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) page. 
