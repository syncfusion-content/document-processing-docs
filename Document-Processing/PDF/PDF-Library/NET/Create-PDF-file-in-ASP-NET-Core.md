---
title: Create or Generate PDF file in ASP.NET Core | Syncfusion
description: Learn how to create or generate a PDF file in ASP.NET Core with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
keywords: .net core create pdf, edit pdf, merge, pdf form, fill form, digital sign, table, c#, dotnet core pdf, asp generate pdf, aspx generate pdf
---

# Create or Generate a PDF File in ASP.NET Core

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents in .NET applications. It merges and splits PDFs, adds stamps, fills form fields, and secures PDF files with encryption and permissions.

To integrate the .NET PDF library into your ASP.NET Core application, refer to the official documentation sections on [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) for step-by-step guidance.

## Prerequisites

- **.NET SDK** 8.0 or later
- **Visual Studio 2022** with the ASP.NET and web development workload, **Visual Studio Code** with the C# Dev Kit extension, or **JetBrains Rider**
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- The **[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)** NuGet package installed in the project. Install it with `dotnet add package Syncfusion.Pdf.Net.Core` or via the NuGet Package Manager.

## Compatibility

| Component | Minimum version |
| --- | --- |
| .NET SDK | 8.0 or later |
| ASP.NET Core | 6.0 |
| Syncfusion<sup>&reg;</sup> PDF library | Latest version |
| SkiaSharp (replacement for `System.Drawing.Common`) | 2.88.6 |
| Syncfusion<sup>&reg;</sup> NuGet package | [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) |

### SkiaSharp dependency

N> Beginning with the **Volume 2, 2023** release (NuGet `v20.2.0.x` and later), Syncfusion has removed the dependency on `System.Drawing.Common` from `Syncfusion.Pdf.Imaging.Net.Core`. SkiaSharp is the replacement graphics library, so install the matching `SkiaSharp` and `SkiaSharp.NativeAssets.*` packages for your target platform. On Linux, also install `libfontconfig` and `libgdiplus` for font rendering.

## Step to create a PDF document in ASP.NET Core

The instructions below cover three IDE workflows. Select the tab that matches your development environment.

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-ASP-NET-Core-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-ASP-NET-Core-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-ASP-NET-Core-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

You can download a complete working sample from the [`Create-new-PDF-document` folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/ASP.NET%20Core/Create-new-PDF-document).

Running the program produces a PDF document as follows.
![ASP.NET Core output PDF document](GettingStarted_images/pdf-generation-output.png)

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document in ASP.NET Core](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at application startup.
- **`System.Drawing.Common` exceptions on Linux/macOS** — Install the `SkiaSharp` and `SkiaSharp.NativeAssets.*` packages and remove references to `System.Drawing.Common`. See the *SkiaSharp dependency* note above.
- **Font rendering issues in Linux containers** — Install `libfontconfig` (and `libgdiplus` for legacy fonts) using your distribution's package manager (for example, `sudo apt-get install -y libfontconfig1 libgdiplus`).
- **NuGet restore fails with package version conflicts** — Specify a `Syncfusion.Pdf.Net.Core` version that matches your target framework in the project file, and clear the NuGet cache with `dotnet nuget locals all --clear` before restoring again.
- **Rider cannot find the Syncfusion NuGet feed** — Add `https://www.nuget.org/api/v2/` to **Settings → NuGet → Sources**, then restore packages.
- **Port conflict when running locally** — Change the launch port in `launchSettings.json` or use `dotnet run --urls "http://localhost:5050"`.

## See also

- [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
- [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
- [Syncfusion<sup>&reg;</sup> Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
- [Create a PDF file in ASP.NET Core Web API](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-document-in-web-api)
- [Create a PDF file in Docker](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-document-in-docker)
- [Create a PDF file in Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-document-in-blazor)
- [Open and read PDF files in ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-files)
- [Merge PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)
- [Split PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)
- [Working with PDF forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)
- [Working with security and permissions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security)
- [Working with stamps and watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)
- [Syncfusion<sup>&reg;</sup> PDF library — Demos](https://document.syncfusion.com/demos/pdf/default) 