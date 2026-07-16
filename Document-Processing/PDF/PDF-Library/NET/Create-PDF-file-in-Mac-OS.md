---
title: Create a PDF File in macOS | Syncfusion
description: Create a PDF file in .NET Core application on macOS using Syncfusion .NET PDF library without the dependency of Adobe Acrobat.
platform: document-processing
control: PDF
documentation: UG
keywords: macos save pdf, macos load pdf, c# save pdf, c# load pdf
---

# Create a PDF File in macOS

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents programmatically without the dependency on Adobe Acrobat. Using this library, you can create a PDF file in a .NET Core application on macOS.

## Prerequisites

| Item | Details |
| --- | --- |
| **Operating System** | macOS 10.15 or later |
| **.NET Version** | .NET 5.0 or later (.NET 6.0+ recommended) |
| **Development Environment** | Visual Studio 2022 for Mac, Visual Studio Code with C# extension, or any text editor with .NET CLI |
| **.NET Core SDK** | Latest stable version |
| **NuGet Package** | Syncfusion.Pdf.NET (latest version) |
| **License** | Syncfusion license key (required for production use) |

## Steps to create a PDF file in .NET Core on macOS

Select your preferred development environment below:

### Visual Studio 2022 for Mac

{% include_relative tabcontent-support/Create-PDF-document-in-Mac-OS-Visual-Studio.md %}

### Visual Studio Code

{% include_relative tabcontent-support/Create-PDF-document-in-Mac-OS-VS-Code.md %}

## License Registration

Starting with v16.2.0.x, Syncfusion assemblies require a license key. Refer to the [Syncfusion licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for detailed instructions on registering your license key in your application.

## Output

Upon successful execution, your application will generate a PDF file containing:
- Header text and title information
- Sample product images (if image file is provided)
- Formatted text and paragraphs
- Data grid with sample product information
- Professional styling using built-in table styles

The output PDF file will be saved in the current working directory with the filename specified in your code (typically `Output.pdf`).

A complete working sample can be downloaded from the [GitHub repository](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Mac).

![macOS output PDF document](GettingStarted_images/Open_and_save_output.png)

## Troubleshooting

| Issue | Solution |
| --- | --- |
| "Image file not found" error | Ensure the image file (e.g., AdventureCycle.jpg) exists in the project directory or provide the full file path |
| "System.IO.FileNotFoundException" | Check file permissions and verify working directory is set correctly |
| "License key is missing" or "License key expired" | Register your Syncfusion license key in Program.cs before creating PDF objects |
| PDF file not created | Verify that the output directory has write permissions and sufficient disk space is available |
| Font rendering issues on macOS | Some fonts may not be available; use standard fonts (TimesRoman, Helvetica, Courier) for better compatibility |
| "Syncfusion.Licensing" assembly not found | Ensure the Syncfusion.Pdf.NET NuGet package is installed correctly: `dotnet add package Syncfusion.Pdf.NET` |
| Application crashes or hangs | Check console output for error messages; ensure all file paths are accessible and resources are properly disposed |
| Broken image links in generated PDF | Verify image file paths are correct and use absolute paths or Path.GetFullPath() for reliability |

## Next Steps

Explore advanced features and capabilities with the Syncfusion .NET PDF library:

- [Merge PDF Documents](./merge-pdf-documents.md) - Combine multiple PDF files into one
- [Split PDF Documents](./split-pdf-documents.md) - Extract or divide PDF pages
- [Add Watermarks](./add-watermark.md) - Apply text and image watermarks to PDFs
- [Work with Forms](./fill-form-fields.md) - Create and fill interactive PDF forms
- [Add Digital Signatures](./digital-signatures.md) - Sign PDFs digitally
- [Secure Documents](./encrypt-pdf.md) - Encrypt and password-protect PDFs
- [Other Platforms](../../getting-started.md) - PDF generation guides for other platforms and environments

For additional examples and comprehensive API documentation, visit the [Syncfusion .NET PDF documentation](https://help.syncfusion.com/document-processing/pdf/overview).

You can also explore our [interactive PDF demo](https://document.syncfusion.com/demos/pdf/default#/tailwind) to see the library in action.