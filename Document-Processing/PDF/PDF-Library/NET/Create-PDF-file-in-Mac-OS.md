---
title: Create PDF document on Mac OS | Syncfusion
description: Create PDF document in ASP.NET Core application on Mac OS using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat.
platform: document-processing
control: PDF
documentation: UG
keywords: mac os save pdf, mac os load pdf, c# save pdf, c# load pdf
---

# Create a PDF Document on macOS

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents programmatically, with no dependency on Adobe Acrobat. You can use this library to create a PDF document in a .NET application on macOS.

## Prerequisites

- A **macOS** version that supports .NET 6 or later (for example, **macOS Big Sur 11**, **Monterey 12**, **Ventura 13**, **Sonoma 14**, or **Sequoia 15**).
- **.NET SDK 8.0** or later installed. Verify with `dotnet --list-sdks`; install via the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download) or `brew install --cask dotnet-sdk`.
- **Homebrew** (recommended) for installing native dependencies. Install from [brew.sh](https://brew.sh/).
- **System font and graphics libraries** required by `Syncfusion.Pdf.Net.Core` (SkiaSharp): `brew install libfontconfig libgdiplus`.
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- The **[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)** NuGet package.

## Step to create a PDF document programmatically in a .NET application on macOS

The instructions below cover two IDE workflows. Select the tab that matches your development environment.

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-Mac-OS-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-Mac-OS-VS-Code.md %}
{% endtabcontent %}
{% endtabcontents %}

Download a complete working sample from the [Mac folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Mac).

Running the program produces the following PDF document.
![Output PDF document on macOS](GettingStarted_images/Open_and_save_output.png)

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at application startup.
- **`Unable to load shared library 'libSkiaSharp'` or `libgdiplus` errors** — Install the native graphics dependencies: `brew install libfontconfig libgdiplus`. If you are on Apple Silicon, ensure the libraries are installed for the correct architecture (`brew install --arch=arm64 libfontconfig libgdiplus`).
- **Font rendering issues (boxes instead of characters)** — Install `libfontconfig` and run `fc-cache -fv` to rebuild the font cache. Verify with `fc-list` that your expected fonts are listed.
- **The generated PDF opens with a "needs to be repaired" warning in Preview** — Wrap `PdfDocument` in a `using` block (or call `document.Close(true)`) so the native buffers are flushed before the process exits.
- **`.NET SDK not found` when running `dotnet` on Apple Silicon** — Install the .NET SDK for arm64 (not the x64 build) via `brew install --cask dotnet-sdk` or the .NET Downloads page.

## See also

- [Create a PDF File in Linux](create-pdf-file-in-linux)
- [Create a PDF File in Docker](create-pdf-document-in-docker)
- [Create a PDF File in Console](create-pdf-file-in-console)
- [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
- [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
- [Syncfusion<sup>&reg;</sup> Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
- [Create a PDF file in ASP.NET Core](create-pdf-file-in-asp-net-core)
- [Create a PDF file in AWS Lambda](create-pdf-file-in-aws-lambda)
- [Open and read PDF files](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-files)
- [Merge PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)
- [Split PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)
- [Working with PDF forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)
- [Working with security and permissions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security)
- [Working with stamps and watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)
- [Syncfusion<sup>&reg;</sup> PDF library — Demos](https://document.syncfusion.com/demos/pdf/default)