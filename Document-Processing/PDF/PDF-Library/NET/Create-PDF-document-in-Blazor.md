---
title: Create a PDF Document in Blazor | Syncfusion
description: Learn how to create a PDF document in Blazor applications with easy steps using Syncfusion .NET PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---

# Create a PDF Document in Blazor

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, and edit PDF documents in your Blazor applications. It provides advanced features including merging, splitting, stamping documents, managing forms, and securing PDF files with encryption.

**Requirements:**
- .NET 6 or later
- Blazor Server or Blazor WebAssembly
- Visual Studio 2022 or later

To include the Syncfusion<sup>&reg;</sup> .NET PDF library into your Blazor application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

To quickly get started with creating a PDF document in Blazor, check this video:
{% youtube "https://www.youtube.com/watch?v=B5BOBwus0Jc&t=2s" %}

## Choose Your Platform

This guide covers multiple Blazor scenarios. Select the one that matches your application type:

| Platform | When to Use | Bundle Size | Performance | Server Processing |
|----------|------------|------------|-------------|-------------------|
| **Blazor Server** (Recommended) | Full-featured web apps | Small | Fast | Yes |
| **Blazor WebAssembly** | Offline-first, standalone apps | Large | Client-dependent | No |
| **.NET MAUI Blazor** | Cross-platform desktop/mobile | N/A | Native | Yes |
| **Blazor WebAssembly PWA** | Progressive web apps | Large | Client-dependent | No |

**Recommendation:** Blazor Server (server-side) is recommended to reduce bundle size and improve performance by processing PDFs on the server.

## Create a PDF Document in Blazor Server Application

Blazor Server applications process PDFs on the server side, providing better performance and smaller client bundle sizes. Select your IDE below:

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-Server-Visual-studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-Server-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-Server-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Blazor/ServerSideApplication).

By executing the program, you will get the following output in the browser.
![Blazor server side browser window](Create-PDF-Blazor/Blazor_browser_output.png)

Click the Export to PDF button, and you will get the PDF document with the following output.
![Blazor server side output PDF document](Create-PDF-Blazor/Blazor_PDF_output.png)

## Create a PDF Document in Blazor WebAssembly Application

Blazor WebAssembly (WASM) applications run entirely in the browser. PDF generation is handled client-side, which increases bundle size but enables offline functionality. Select your IDE below:

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-WASM-Visual-studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-WASM-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-WASM-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Blazor/ClientSideApplication).

By executing the program, you will get the following output in the browser.
![Blazor client browser window](Create-PDF-Blazor/Blazor_Client_WebResult.png)

Click the Export to PDF button and you will get the PDF document with the following output.
![Blazor getting started output PDF document](Create-PDF-Blazor/Blazor_PDF_output.png)    

## Create a PDF Document in .NET MAUI Blazor Application

.NET MAUI Blazor enables cross-platform PDF generation for desktop and mobile apps (Windows, macOS, iOS, Android). PDF generation is handled server-side with platform-specific file saving. Select your IDE below:

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-MaUI-Visual-studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-MaUI-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-MaUI-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Blazor/BlazorMauiAppCreatePdfSample).

By running the program, you will see the output in the browser when you click the "Weather" option in the left-side menu.
![Blazor client browser window](Create-PDF-Blazor/Blazor_browser_output.png)

Click the `Export to PDF` button to get the PDF document with the following output.
![Blazor getting started output PDF document](Create-PDF-Blazor/Blazor_PDF_output.png)

## Platform-Specific Implementation for MAUI

To save PDF files on different platforms, implement a `SaveService` class with platform-specific partial methods for Android, iOS, macOS, and Windows.

### Step 1: Create the SaveService Class

Create a folder named `Services` in your project root (alongside the `Platforms` folder), then add a class called `SaveService.cs` with the following base partial class definition:
> **Note:** Partial classes allow platform-specific implementations in separate files within the `Platforms` folder.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System.IO;

public partial class SaveService
{
    //Partial method to save document as a file and view the saved document.
    //Implementation is platform-specific (Android, iOS, macOS, Windows).
    public partial void SaveAndView(string filename, string contentType, MemoryStream stream);
}

{% endhighlight %}
{% endtabs %}

### Step 2: Implement Platform-Specific Code

Create partial implementations for each platform within the `Platforms` folder.

#### Android Implementation

Create a new class file named `SaveService.cs` within the `Platforms/Android` folder and add the following code to enable file saving on the Android platform:

**Step 1: Add Android Permissions Configuration**

Create a new XML file named `file_paths.xml` in the `Android/Resources/xml` folder (create the `xml` folder if it doesn't exist):

{% tabs %}
{% highlight XML %}

<?xml version="1.0" encoding="utf-8"?>
<paths xmlns:android="http://schemas.android.com/apk/res/android">
    <external-path
        name="external"
        path="." />
    <external-files-path
        name="external_files"
        path="." />
    <cache-path
        name="cache"
        path="." />
    <external-cache-path
        name="external_cache"
        path="." />
    <files-path
        name="files"
        path="." />
</paths>

{% endhighlight %}
{% endtabs %}

**Step 2: Update Android Manifest**

Add the following provider configuration to `Platforms/Android/AndroidManifest.xml` within the `<application>` tag:

{% tabs %}
{% highlight XML %}

<application android:allowBackup="true" android:icon="@mipmap/appicon" android:roundIcon="@mipmap/appicon_round" android:supportsRtl="true">
    <provider
        android:name="androidx.core.content.FileProvider"
        android:authorities="${applicationId}.provider"
        android:exported="false"
        android:grantUriPermissions="true">
        <meta-data
            android:name="android.support.FILE_PROVIDER_PATHS"
            android:resource="@xml/file_paths" />
    </provider>
</application>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

{% endhighlight %}
{% endtabs %}

> **Note:** The `${applicationId}` placeholder is automatically replaced by the build system; do not edit manually. Android 6.0 (API 23+) requires runtime permissions; FileProvider handles secure file access.

**Step 3: Create SaveService Implementation**

Create the Android platform-specific SaveService class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Android.App;
using Android.Content;
using Android.OS;
using AndroidX.Core.Content;
using Java.IO;
using System.IO;

partial class SaveService
{
    public partial void SaveAndView(string filename, string contentType, MemoryStream stream)
    {
        string exception = string.Empty;
        string? root = null;

        // Determine storage location: downloads folder for emulated storage, or MyDocuments otherwise
        if (Android.OS.Environment.IsExternalStorageEmulated)
        {
            root = Application.Context!.GetExternalFilesDir(Android.OS.Environment.DirectoryDownloads)!.AbsolutePath;
        }
        else
        {
            root = System.Environment.GetFolderPath(System.Environment.SpecialFolder.MyDocuments);
        }

        Java.IO.File myDir = new(root + "/Syncfusion");
        myDir.Mkdir();

        Java.IO.File file = new(myDir, filename);

        if (file.Exists())
        {
            file.Delete();
        }

        try
        {
            FileOutputStream outs = new(file);
            outs.Write(stream.ToArray());
            outs.Flush();
            outs.Close();
        }
        catch (Exception e)
        {
            exception = e.ToString();
        }

        if (file.Exists())
        {
            // Android 7.0+ requires FileProvider for secure file access; older versions use direct URI
            if (Build.VERSION.SdkInt >= BuildVersionCodes.N)
            {
                var fileUri = FileProvider.GetUriForFile(Application.Context, Application.Context.PackageName + ".provider", file);
                var intent = new Intent(Intent.ActionView);
                intent.SetData(fileUri);
                intent.AddFlags(ActivityFlags.NewTask);
                intent.AddFlags(ActivityFlags.GrantReadUriPermission);
                Application.Context.StartActivity(intent);
            }
            else
            {
                var fileUri = Android.Net.Uri.Parse(file.AbsolutePath);
                var intent = new Intent(Intent.ActionView);
                intent.SetDataAndType(fileUri, contentType);
                intent = Intent.CreateChooser(intent, "Open File");
                intent!.AddFlags(ActivityFlags.NewTask);
                Application.Context.StartActivity(intent);
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

#### iOS Implementation

Create a new class file named `SaveService.cs` within the `Platforms/iOS` folder and include the following code to enable file saving on the iOS platform:

> **Note:** Requires QuickLook framework for document preview. Add to `Info.plist`: `<key>NSLocalizedDescription</key><string>PDF files</string>` for file access description.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Foundation;
using UIKit;
using QuickLook;
using System.IO;

partial class SaveService
{
    public partial void SaveAndView(string filename, string contentType, MemoryStream stream)
    {
        string exception = string.Empty;
        string path = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
        string filePath = Path.Combine(path, filename);
        
        try
        {
            FileStream fileStream = File.Open(filePath, FileMode.Create);
            stream.Position = 0;
            stream.CopyTo(fileStream);
            fileStream.Flush();
            fileStream.Close();
        }
        catch (Exception e)
        {
            exception = e.ToString();
        }

        if (contentType != "application/html" && exception == string.Empty)
        {
            UIViewController? currentController = UIApplication.SharedApplication!.KeyWindow!.RootViewController;
            while (currentController?.PresentedViewController != null)
            {
                currentController = currentController.PresentedViewController;
            }

            if (currentController != null)
            {
                QLPreviewController qlPreview = new();
                QLPreviewItem item = new QLPreviewItemBundle(filename, filePath);
                qlPreview.DataSource = new PreviewControllerDS(item);
                currentController.PresentViewController(qlPreview, true, null);
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

#### macOS Implementation

Create a new class file named `SaveService.cs` within the `Platforms/MacCatalyst` folder and include the following code to enable file saving on the macOS platform:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Foundation;
using UIKit;
using QuickLook;
using System.IO;

partial class SaveService
{
    public partial void SaveAndView(string filename, string contentType, MemoryStream stream)
    {
        string path = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
        string filePath = Path.Combine(path, filename);
        stream.Position = 0;
        
        // Save the document to file system
        using FileStream fileStream = new(filePath, FileMode.Create, FileAccess.ReadWrite);
        stream.CopyTo(fileStream);
        fileStream.Flush();
        fileStream.Dispose();

        UIWindow? window = GetKeyWindow();
        if (window?.RootViewController != null)
        {
            UIViewController uiViewController = window.RootViewController;
            QLPreviewController qlPreview = new();
            QLPreviewItem item = new QLPreviewItemBundle(filename, filePath);
            qlPreview.DataSource = new PreviewControllerDS(item);
            uiViewController.PresentViewController(qlPreview, true, null);
        }
    }

    private UIWindow? GetKeyWindow()
    {
        // Find the active window in the current scene
        foreach (var scene in UIApplication.SharedApplication.ConnectedScenes)
        {
            if (scene is UIWindowScene windowScene)
            {
                foreach (var window in windowScene.Windows)
                {
                    if (window.IsKeyWindow)
                    {
                        return window;
                    }
                }
            }
        }
        return null;
    }
}

{% endhighlight %}
{% endtabs %}

#### Windows Implementation

Create a new class file named `SaveService.cs` within the `Platforms/Windows` folder and include the following code to enable file saving on the Windows platform:

> **Note:** The async method is required for FileSavePicker dialog interaction on Windows. Works in desktop/Windows App scenarios; may not work in all cloud hosting environments.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Microsoft.Win32.SafeHandles;
using Windows.Foundation.Metadata;
using Windows.Storage;
using Windows.Storage.Pickers;
using Windows.Storage.Streams;
using Windows.UI.Popups;
using Windows.System;
using System.IO;

partial class SaveService
{
    public async partial void SaveAndView(string filename, string contentType, MemoryStream stream)
{
    StorageFile stFile;
    string extension = Path.GetExtension(filename);
    
    // Gets the process window handle to open the dialog in the application's process
    IntPtr windowHandle = System.Diagnostics.Process.GetCurrentProcess().MainWindowHandle;
    
    if (!ApiInformation.IsTypePresent("Windows.Phone.UI.Input.HardwareButtons"))
    {
        // Create file save picker to save the document
        FileSavePicker savePicker = new();
        
        // Configure file type choices based on extension
        switch (extension.ToLower())
        {
            case ".xlsx":
                savePicker.DefaultFileExtension = ".xlsx";
                savePicker.FileTypeChoices.Add("XLSX", new List<string> { ".xlsx" });
                break;
            case ".docx":
                savePicker.DefaultFileExtension = ".docx";
                savePicker.FileTypeChoices.Add("DOCX", new List<string> { ".docx" });
                break;
            case ".doc":
                savePicker.DefaultFileExtension = ".doc";
                savePicker.FileTypeChoices.Add("DOC", new List<string> { ".doc" });
                break;
            case ".rtf":
                savePicker.DefaultFileExtension = ".rtf";
                savePicker.FileTypeChoices.Add("RTF", new List<string> { ".rtf" });
                break;
            case ".pdf":
                savePicker.DefaultFileExtension = ".pdf";
                savePicker.FileTypeChoices.Add("PDF", new List<string> { ".pdf" });
                break;
            case ".pptx":
                savePicker.DefaultFileExtension = ".pptx";
                savePicker.FileTypeChoices.Add("PPTX", new List<string> { ".pptx" });
                break;
            case ".png":
                savePicker.DefaultFileExtension = ".png";
                savePicker.FileTypeChoices.Add("PNG", new List<string> { ".png" });
                break;
            default:
                savePicker.FileTypeChoices.Add("Files", new List<string> { "*" });
                break;
        }

        savePicker.SuggestedFileName = filename;
        WinRT.Interop.InitializeWithWindow.Initialize(savePicker, windowHandle);
        stFile = await savePicker.PickSaveFileAsync();
    }
    else
    {
        // Fallback: Save to local app folder on mobile platforms
        StorageFolder local = ApplicationData.Current.LocalFolder;
        stFile = await local.CreateFileAsync(filename, CreationCollisionOption.ReplaceExisting);
    }

    if (stFile != null)
    {
        // Write the stream to the storage file
        using (IRandomAccessStream fileStream = await stFile.OpenAsync(FileAccessMode.ReadWrite))
        {
            using Stream outstream = fileStream.AsStreamForWrite();
            outstream.SetLength(0);
            byte[] buffer = stream.ToArray();
            outstream.Write(buffer, 0, buffer.Length);
            outstream.Flush();
        }

        // Show dialog asking if user wants to view the document
        MessageDialog msgDialog = new("Do you want to view the document?", "File has been created successfully");
        UICommand yesCmd = new("Yes");
        msgDialog.Commands.Add(yesCmd);
        UICommand noCmd = new("No");
        msgDialog.Commands.Add(noCmd);

        WinRT.Interop.InitializeWithWindow.Initialize(msgDialog, windowHandle);
        IUICommand cmd = await msgDialog.ShowAsync();

        if (cmd.Label == yesCmd.Label)
        {
            // Launch the saved file with default application
            await Launcher.LaunchFileAsync(stFile);
        }
    }
}

{% endhighlight %}
{% endtabs %}

For additional MAUI helper files and utilities, see the [MAUI PDF guide](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-maui#helper-files-for-net-maui).

## Create a PDF Document in Blazor WebAssembly PWA

Progressive Web Apps (PWA) combine the best of web and native apps, enabling offline functionality. PDF generation in PWA Blazor WebAssembly is client-side and allows saving to device storage or browser cache. Select your IDE below:

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-WASM-PWA-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-WASM-PWA-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-WASM-PWA-JetBrains.md %}
{% endtabcontent %}

{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Blazor/BlazorWASMPWA).

By executing the program, you will get the following output in the browser.
![Blazor WASM PWA browser](Create-PDF-Blazor/Blazor-PWA-4.png)

Click the `Create PDF document` button to generate and download the PDF.

![Blazor getting started output PDF document](Create-PDF-Blazor/Blazor_PDF_output.png)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "NuGet package not found" | Verify NuGet source is configured correctly; check package version compatibility with your .NET version |
| "Handler method not found" in Blazor | Ensure the button's `@onclick` handler matches the C# method name exactly (case-sensitive) |
| PDF file not downloading (Server/WASM) | Check browser download settings and firewall restrictions; verify HttpContext is available |
| MAUI platform implementation not called | Ensure SaveService partial class exists in `Services` folder; platform-specific files in correct `Platforms/[OS]` subfolder |
| Android "Permission denied" errors | Verify file_paths.xml is in Android/Resources/xml folder; check AndroidManifest.xml has required permissions |
| iOS preview not showing | Ensure QLPreviewController import; verify Info.plist contains file access usage descriptions |
| Windows FileSavePicker not opening | Verify WinRT.Interop is initialized with correct window handle; not supported in all hosting scenarios |
| "Licensing" errors at runtime | Ensure Syncfusion.Licensing NuGet package is installed and license key is registered in your application |

## Next Steps

- **Download [Complete Working Samples](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Blazor)** — Reference implementations for all Blazor platforms
- **Try [Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)** — Interactive PDF generation examples
- **Explore [Syncfusion PDF Library Features](https://www.syncfusion.com/document-sdk/net-pdf-library)** — Complete API reference and advanced capabilities