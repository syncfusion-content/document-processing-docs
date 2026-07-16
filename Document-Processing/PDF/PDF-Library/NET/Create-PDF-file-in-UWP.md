---
title: Create or Generate PDF file in UWP | Syncfusion
description: Learn how to create or generate a PDF file in UWP with easy steps using Syncfusion UWP PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---

# Create a PDF File in UWP

The [UWP PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, work with forms, and secure PDF files.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Visual Studio | 2019 or later (2022 recommended) |
| .NET Framework | 4.5+ or .NET Core 3.1+ |
| Windows SDK | 10.0.17763.0+ |
| Syncfusion PDF NuGet Package | [Syncfusion.Pdf.UWP](https://www.nuget.org/packages/Syncfusion.Pdf.UWP/) (latest) |
| Project Type | UWP (Universal Windows Platform) |

To include the Syncfusion<sup>&reg;</sup> UWP PDF library into your UWP application, refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

## Steps to create a PDF document in UWP

### Step 1: Create a new UWP application project
![UWP sample creation](GettingStarted_images/UWP_sample_creation.png)

Open Visual Studio and create a new **Blank App (Universal Windows)** project for your target platform.

### Step 2: Install the Syncfusion.Pdf.UWP NuGet package

Install the [Syncfusion.Pdf.UWP](https://www.nuget.org/packages/Syncfusion.Pdf.UWP/) NuGet package as a reference to your UWP application from [NuGet.org](https://www.nuget.org/).

![PDF UWP Nuget package](GettingStarted_images/NuGet-package-UWP.png)

You can also install via Package Manager Console:
```powershell
Install-Package Syncfusion.Pdf.UWP
```

### Step 3: Register Syncfusion license

Starting with v16.2.0.x, you must register a Syncfusion license key to use the library. Add the license key in your **App.xaml.cs** file before using any PDF functionality:

```csharp
using Syncfusion.Licensing;

public partial class App : Application
{
    public App()
    {
        this.InitializeComponent();
        // Register Syncfusion license
        SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
    }
}
```

Refer to [Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for license registration details.

### Step 4: Create the UI with a button

Create a button in **MainPage.xaml** using the code below and add a `Button_Click` event handler:
{% tabs %}
{% highlight XAML %}

<Grid>
  <Button Content="Generate PDF" HorizontalAlignment="Center" VerticalAlignment="Center" Width="150" Height="100" Click="Button_Click" />
</Grid>

{% endhighlight %}
{% endtabs %}

### Step 5: Add required namespaces

Include the following namespaces in the **MainPage.xaml.cs** file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using Windows.Storage;
using Windows.Storage.Pickers;
using Windows.UI.Popups;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

{% endhighlight %}
{% endtabs %}

### Step 6: Implement PDF generation in the button click event

Add the following code to the `Button_Click` event handler to create a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) draws text on the PDF page. The `PointF(0, 0)` parameter specifies the starting position (top-left corner) in points (1/72 inch).

{% tabs %}
{% highlight c# tabtitle="C#" %}

private void Button_Click(object sender, RoutedEventArgs e)
{
    try
    {
        //Create a PDF document. 
        using (PdfDocument document = new PdfDocument())
        {
            //Add a page to the document.
            PdfPage page = document.Pages.Add();
            //Create PDF graphics for the page
            PdfGraphics graphics = page.Graphics;
            //Set the standard font.
            PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
            //Draw the text at position (0, 0) — top-left corner of the page.
            graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
            //Create memory stream.
            MemoryStream ms = new MemoryStream();
            //Save the document to the memory stream.
            document.Save(ms);
            //Reset stream position to beginning for reading.
            ms.Position = 0;
            //Save and display the PDF.
            Save(ms, "Sample.pdf");
        }
    }
    catch (Exception ex)
    {
        MessageDialog errorDialog = new MessageDialog("Error generating PDF: " + ex.Message, "Error");
        errorDialog.ShowAsync();
    }
}

{% endhighlight %}
{% endtabs %}

### Step 7: Add the helper method to save and view the PDF

Use the following async helper method to save the memory stream as a physical file and open it for viewing:
{% tabs %}
{% highlight c# tabtitle="C#" %}

#region Helper Methods

/// <summary>
/// Saves the PDF stream to a file and optionally opens it for viewing.
/// On desktop devices, prompts user to select save location via FileSavePicker.
/// On mobile devices, saves to LocalFolder automatically.
/// </summary>
public async void Save(Stream stream, string filename)
{
    try
    {
        StorageFile stFile = null;

        // Desktop devices: show FileSavePicker for user to choose save location
        // Mobile devices: save to local app folder
        FileSavePicker savePicker = new FileSavePicker();
        savePicker.DefaultFileExtension = ".pdf";
        savePicker.SuggestedFileName = Path.GetFileNameWithoutExtension(filename);
        savePicker.FileTypeChoices.Add("Adobe PDF Document", new List<string>() { ".pdf" });
        stFile = await savePicker.PickSaveFileAsync();

        if (stFile != null)
        {
            // Write stream to file
            Windows.Storage.Streams.IRandomAccessStream fileStream = await stFile.OpenAsync(FileAccessMode.ReadWrite);
            Stream st = fileStream.AsStreamForWrite();
            st.SetLength(0);
            st.Write((stream as MemoryStream).ToArray(), 0, (int)stream.Length);
            st.Flush();
            st.Dispose();
            fileStream.Dispose();

            // Ask user if they want to view the created PDF
            MessageDialog msgDialog = new MessageDialog("PDF file created successfully. Do you want to view it?", "Success");
            UICommand yesCmd = new UICommand("Yes");
            msgDialog.Commands.Add(yesCmd);
            UICommand noCmd = new UICommand("No");
            msgDialog.Commands.Add(noCmd);
            IUICommand cmd = await msgDialog.ShowAsync();

            if (cmd == yesCmd)
            {
                // Launch the file with the default PDF viewer
                await Windows.System.Launcher.LaunchFileAsync(stFile);
            }
        }
    }
    catch (Exception ex)
    {
        MessageDialog errorDialog = new MessageDialog("Error saving file: " + ex.Message, "Save Error");
        await errorDialog.ShowAsync();
    }
}

#endregion

{% endhighlight %}
{% endtabs %}

### Step 8: Build and run the application

1. Build the UWP application (Build > Build Solution)
2. Run the application (Debug > Start Debugging or F5)
3. Click the **Generate PDF** button
4. Select a save location (on desktop) or confirm save (on mobile)
5. View the generated PDF file

**Expected output:** A file named `Sample.pdf` containing "Hello World!!!" text.

![PDF generation output](GettingStarted_images/pdf-generation-output.png)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "The type or namespace 'Syncfusion' could not be found" | Verify Syncfusion.Pdf.UWP NuGet package is installed; restore NuGet packages (Tools > NuGet Package Manager > Manage Packages for Solution) |
| "License key not registered" error at runtime | Register license in App.xaml.cs using SyncfusionLicenseProvider.RegisterLicense() before using PDF APIs |
| "FileSavePicker not showing dialog" | Ensure UWP app has capability declarations; check `Package.appxmanifest` for `documentsLibrary` and `fileSystemAccess` capabilities |
| "Permission Denied" when saving file | Grant file system access permissions in Package.appxmanifest; declare `fileSystemAccess` capability with `Documents` and `Pictures` folders |
| PDF file not opening after creation | Verify file extension is `.pdf`; check FileSavePicker cancellation (user clicked Cancel); verify file path is accessible |
| "NullReferenceException" in Save method | User cancelled FileSavePicker (stFile is null); add null check before writing file |
| Application crashes when saving large PDF | Increase memory allocation or stream buffer size; verify device has sufficient storage space |

## Next Steps

- **Download [Complete Working Sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/UWP/Create-a-new-PDF-document)** — Reference implementation with error handling and best practices
- **Try [Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)** — Interactive examples and feature showcase
- **Explore [PDF Library Features](https://www.syncfusion.com/document-sdk/net-pdf-library)** — Comprehensive API reference including tables, images, forms, and advanced PDF operations
- **View [API Documentation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html)** — Full class and method reference for PdfDocument and related classes 