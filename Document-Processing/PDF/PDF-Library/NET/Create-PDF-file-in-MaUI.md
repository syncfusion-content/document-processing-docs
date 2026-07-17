---
title: Create or Generate PDF file in MAUI | Syncfusion
description: Learn how to create or generate a PDF file in .NET MAUI with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---

# Create a PDF File in .NET MAUI

The [.NET MAUI PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents. It merges, splits, stamps, fills forms, and secures PDF files. You can use this library to create a PDF document in a .NET MAUI application.

N> Our PDF library is supported in .NET MAUI applications on **Android**, **iOS**, and **Windows** targets. **Mac Catalyst** is not supported. The library requires .NET MAUI 7.0 or later; the example targets .NET 8 for the latest long-term support.

## Prerequisites

- **.NET SDK 8.0** or later with the **.NET MAUI** workload installed. Verify with `dotnet workload list` and install with `dotnet workload install maui` if missing.
- **Visual Studio 2022** (17.8 or later) with the **.NET Multi-platform App UI development** workload, or **Visual Studio Code** with the .NET MAUI extension, or **JetBrains Rider**.
- The **[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)** NuGet package installed in the shared project and each platform-specific project.
- A **Syncfusion<sup>&reg;</sup> license key** — register it in `MauiProgram.cs` using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- **Platform-specific prerequisites**:
  - **Android:** Android SDK 33+ and an emulator or device running API 21+.
  - **iOS:** Xcode 15+ and a developer account configured in Visual Studio.
  - **Windows:** Windows 10 version 1809+ with the Windows App SDK.

## Step to create a PDF document programmatically in .NET MAUI

The instructions below cover three IDE workflows. Select the tab that matches your development environment.

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-MaUI-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-MaUI-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-Blazor-MaUI-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

You can download a complete working sample from the [`CreateMAUIPDFSample` folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/MAUI/CreateMAUIPDFSample).

Running the program produces the following output per platform.

### Windows
![MAUI output on Windows](MAUI_images/invoice.png)

### Android
![MAUI output on Android](MAUI_images/invoice_android.png)

### iOS
![MAUI output on iOS](MAUI_images/invoice_ios.png)

N> Explore the [Syncfusion MAUI PDF library demo](https://www.syncfusion.com/demos/fileformats/pdf-library) for an end-to-end sample that creates and modifies a PDF document in a few lines of C#.

## Helper files for .NET MAUI

The MAUI sample uses partial classes to save the generated PDF stream to a physical file and open it for viewing on each platform. Download the helper files from the [`Helper_files` archive](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Helper_files-1664336865) (or copy them from the [Blazor MAUI sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Blazor/BlazorMauiAppCreatePdfSample) in the GitHub repo) and add them to the project folders shown in the table below.

After adding the helper files, register the `SaveService` in `MauiProgram.cs` with `builder.Services.AddSingleton<SaveService>();` so the platform-specific implementations resolve correctly via dependency injection.

| Folder | File | Purpose |
| --- | --- | --- |
| .NET MAUI project (shared) | `SaveService.cs` | Base partial class that defines the `SaveAndView(string filename, string contentType, MemoryStream stream)` signature. |
| `Platforms/Windows/` | `SaveWindows.cs` | Windows implementation that uses `FileSavePicker` to let the user choose a save location. |
| `Platforms/Android/` | `SaveAndroid.cs` | Android implementation that writes to external storage and opens the PDF with an `Intent`. |
| `Platforms/iOS/` | `SaveIOS.cs` | iOS implementation that writes to the personal folder and presents a `QLPreviewController`. |
| `Platforms/iOS/` | `PreviewControllerDS.cs`, `QLPreviewItemFileSystem.cs` | Helper classes for the iOS Quick Look preview. |
| `Platforms/MacCatalyst/` | `SaveMac.cs` | Mac Catalyst implementation (provided for forward compatibility; not currently supported). |

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` in `MauiProgram.CreateMauiApp()` before `return builder.Build();`.
- **`SaveService` is null when injected** — Verify that `builder.Services.AddSingleton<SaveService>();` is present in `MauiProgram.cs` and that the consuming class uses constructor injection (not `new`).
- **Android: `FileProvider` exception when opening the PDF** — Confirm the `file_paths.xml` is in `Platforms/Android/Resources/xml/` and that the `<provider>` element in `AndroidManifest.xml` uses `${applicationId}.provider` as the authority.
- **iOS: `QLPreviewController` does not appear** — Add the `QuickLook` framework to the iOS project's required frameworks list and ensure `PreviewControllerDS.cs` / `QLPreviewItemFileSystem.cs` helper classes are included in the iOS project.
- **Windows: `FileSavePicker` does not open** — Confirm that the Windows App SDK is referenced in the MAUI Windows project and that `WinRT.Interop.InitializeWithWindow` is called with a valid window handle.
- **Android: `libgdiplus` / `SkiaSharp` native errors** — Add the `SkiaSharp.NativeAssets.Android` package to the Android project.
- **iOS build fails with `Microsoft.iOS.Workload` not found** — Install the iOS workload with `dotnet workload install ios` and ensure Xcode 15+ is installed.
- **`dotnet workload list` does not show `maui`** — Run `dotnet workload install maui` to install the MAUI workload. On Windows, also run it from an elevated prompt if the workload is shared.
- **Mac Catalyst target is missing or fails to build** — Mac Catalyst is not currently supported; remove the `net8.0-maccatalyst` target from the `<TargetFrameworks>` property in the `.csproj` if it is not needed.
- **PDF generation is slow on Android emulators** — Test on a physical device; Android emulators on x86 hosts can be 5–10× slower for SkiaSharp rendering.

## See also

- [Create a PDF File in Blazor MAUI](create-pdf-document-in-blazor)
- [Create a PDF File in ASP.NET Core](create-pdf-file-in-asp-net-core)
- [Create a PDF File in Docker](create-pdf-document-in-docker)
- [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
- [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
- [Syncfusion<sup>&reg;</sup> Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
- [Open and read PDF files](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-files)
- [Merge PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)
- [Split PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)
- [Working with PDF forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)
- [Working with security and permissions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security)
- [Working with stamps and watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)
- [Syncfusion<sup>&reg;</sup> PDF library — Demos](https://document.syncfusion.com/demos/pdf/default)