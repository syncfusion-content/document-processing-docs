---
title: Create a PDF File in .NET MAUI | Syncfusion
description: Learn how to create a PDF file in .NET MAUI with easy steps using Syncfusion .NET PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---

# Create a PDF File in .NET MAUI

The [.NET MAUI PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit **PDF** documents. This library also includes functions for merging, splitting, stamping, working with forms, and securing PDF files and more. Using this library, you can create a PDF document in a .NET MAUI application.

N> Our PDF library is currently supported in .NET MAUI applications on Android, iOS, and Windows platforms. It is not supported on the Mac Catalyst platform.

## Prerequisites

| Category | Requirement |
|---|---|
| **IDE** | Visual Studio 2022 or later, Visual Studio Code, or JetBrains Rider |
| **.NET Framework** | .NET 6.0 or later |
| **MAUI Version** | .NET MAUI 6.0 or later |
| **Platform SDKs** | Android API 21+, iOS 11.0+, Windows 10 Build 19041+ |
| **NuGet Package** | Syncfusion.Pdf.NET (latest stable version) |
| **License** | Syncfusion license (required for production use) |

## Steps to create PDF document programmatically in .NET MAUI

### Step 1: Register the Syncfusion License

The Syncfusion PDF library requires a license to function in production environments. Register the license by adding the following code in your **MauiProgram.cs** file:

```csharp
using Syncfusion.Licensing;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        // Register Syncfusion license
        SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

        var builder = MauiApp.CreateBuilder();
        return builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
            })
            .Build();
    }
}
```

Replace `YOUR_LICENSE_KEY` with your actual Syncfusion license key.

### Step 2: Install the NuGet Package

Add the Syncfusion PDF NuGet package to your .NET MAUI project:

```bash
dotnet add package Syncfusion.Pdf.NET
```

### Step 3: Create PDF Document Programmatically

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-MaUI-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-MaUI-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-MaUI-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/MAUI/CreateMAUIPDFSample).

By executing the program on Windows, you will get the PDF document as follows.
![.NET MAUI output image](MAUI_images/invoice.png)  

By executing the program on Android, you will get the PDF document as follows.
![.NET MAUI invoice android image](MAUI_images/invoice_android.png)  

By executing the program on iOS, you will get the PDF document as follows.
![.NET MAUI invoice iOS image](MAUI_images/invoice_ios.png)  

N> You can also explore our [MAUI PDF library demo](https://www.syncfusion.com/demos/fileformats/pdf-library) that shows how to create and modify PDF files from C# with just five lines of code.

## Troubleshooting

| Issue | Cause | Solution |
|---|---|---|
| **NuGet package not found** | Package not installed or source not configured | Run `dotnet add package Syncfusion.Pdf.NET` and verify NuGet source |
| **License registration fails** | Invalid or missing license key | Verify license key in MauiProgram.cs; check [Syncfusion Account](https://www.syncfusion.com/account/manage-licenses) |
| **PDF not saved on Android** | Missing file permissions | Add `<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />` to AndroidManifest.xml |
| **File access denied** | Insufficient folder permissions | Use SaveService helpers from downloaded package to handle platform-specific paths |
| **SaveService.SaveAndDisplay() not found** | Helper files not added to project | Download helper files from the link below and add to project |
| **Platform-specific errors** | Incomplete platform SDK installation | Ensure Android API 21+, iOS 11.0+, and Windows 10 Build 19041+ are installed |
| **Using statement not recognized** | Missing namespace import | Add `using Syncfusion.Pdf;` at top of file |
| **File opens but appears blank** | PDF content not written before save | Ensure graphics operations complete before document.Save() |

**Helper files for .NET MAUI**

Download the helper files from this [link](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Helper_files-1664336865) and add them into the mentioned project. These helper files allow you to save the stream as a physical file and open the file for viewing.

<table>
  <tr>
  <td>
    <b>Folder Name</b>
  </td>
  <td>
    <b>File Name</b>
  </td>
  <td>
    <b>Summary</b>
  </td>
  </tr>
  <tr>
  <td>
    .NET MAUI Project
  </td>
  <td>
    SaveService.cs
  </td>
  <td>Represents the base class for save operation.
  </td>
  </tr>
  <tr>
  <td>
    Windows
  </td>
  <td>
    SaveWindows.cs
  </td>
  <td>Save implementation for Windows.
  </td>
  </tr>
  <tr>
  <td>
    Android
  </td>
  <td>
    SaveAndroid.cs
  </td>
  <td>Save implementation for Android device.
  </td>
  </tr>
  <tr>
  <td rowspan="2">
    iOS
  </td>
  <td>
    SaveIOS.cs
  </td>
  <td>
    Save implementation for iOS device
  </td>
  </tr>
  <tr>
  <td>
    PreviewControllerDS.cs<br/>QLPreviewItemFileSystem.cs
  </td>
  <td>
    Helper classes for viewing the <b>PDF document</b> in iOS device
  </td>
  </tr>
</table>

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind).

## Next Steps

- **[Merge PDF files](https://help.syncfusion.com/document-processing/pdf-library/net/merge-pdf-files)** — Combine multiple PDF documents into a single file
- **[Split PDF files](https://help.syncfusion.com/document-processing/pdf-library/net/split-pdf-files)** — Divide a PDF into separate documents
- **[Add watermark to PDF](https://help.syncfusion.com/document-processing/pdf-library/net/add-watermark)** — Stamp text or images on PDF pages
- **[Work with PDF forms](https://help.syncfusion.com/document-processing/pdf-library/net/working-with-forms)** — Fill and flatten interactive form fields
- **[Secure PDF documents](https://help.syncfusion.com/document-processing/pdf-library/net/securing-pdf-documents)** — Add encryption and permissions to PDFs
- **[Explore other .NET platforms](https://help.syncfusion.com/document-processing/pdf-library/net)** — Create PDFs in WPF, WinForms, UWP, WinUI, Blazor, and more