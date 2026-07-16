---
title: Create or Generate PDF file in ASP.NET Core | Syncfusion
description: Learn how to create or generate a PDF file in ASP.NET Core with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
keywords: .net core create pdf, edit pdf, merge, pdf form, fill form, digital sign, table, c#, dotnet core pdf, asp generate pdf, aspx generate pdf
---

# Create a PDF File in ASP.NET Core

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is a powerful and versatile solution for creating, reading, and editing PDF documents in .NET applications. It also provides advanced features such as merging and splitting PDFs, adding stamps, working with form fields, and securing PDF files with encryption and permissions.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **IDE** | Visual Studio 2022, Visual Studio Code, or JetBrains Rider |
| **.NET Version** | .NET 6.0+, .NET 7.0, or .NET 8.0 (Long-term support recommended) |
| **NuGet Package** | Syncfusion.Pdf.NET v16.2.0.x or later |
| **ASP.NET Core Version** | ASP.NET Core 6.0+ corresponding to your .NET version |
| **Licensing** | Syncfusion license key (required v16.2.0.x+) |
| **Additional Package** | SkiaSharp for image handling (included with Syncfusion.Pdf.NET) |

> **Note**: For detailed package installation guidance, refer to [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

## License Registration

Starting with Syncfusion v16.2.0.x, a license key is required for PDF operations. Register your license in the `Program.cs` file before building services:

```csharp
// In Program.cs - add this before var app = builder.Build();
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

> **Important**: Obtain a free community license from [Syncfusion Community License](https://help.syncfusion.com/common/essential-studio/licensing/community-license) or refer to [licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for production keys.

> **Note**: As of 2023, Syncfusion eliminated the dependency on System.Drawing.Common and introduced SkiaSharp as the image handling library for cross-platform PDF generation support. SkiaSharp is included with Syncfusion.Pdf.NET and provides improved image rendering and performance.

## Steps to Create a PDF File in ASP.NET Core

Select your preferred IDE to follow the complete implementation guide:

{% tabcontents %}
{% tabcontent Visual Studio %}
**Recommended for Windows development.** Complete step-by-step guide for Visual Studio 2022 with integrated debugging and NuGet management.
{% include_relative tabcontent-support/Create-PDF-document-in-ASP-NET-Core-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
**Cross-platform option** for Windows, macOS, and Linux. Lightweight development environment using CLI tools and extensions.
{% include_relative tabcontent-support/Create-PDF-document-in-ASP-NET-Core-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
**Cross-platform IDE** with advanced debugging, refactoring, and productivity features. Works on Windows, macOS, and Linux.
{% include_relative tabcontent-support/Create-PDF-document-in-ASP-NET-Core-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

## Expected Output

When you execute the application, it generates a PDF document containing:
- Header text with "Adventure Works Cycles" company name
- Company description and information
- Product information table with sample data
- Professional formatting and styling

The generated PDF file is saved to the application's output directory:

![ASP.NET Core output PDF document](GettingStarted_images/pdf-generation-output.png)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **License Key Not Registered** | Ensure `SyncfusionLicenseProvider.RegisterLicense()` is called in `Program.cs` before services are built. The license key must be registered at application startup. |
| **Syncfusion.Pdf.NET Package Not Found** | Run `dotnet add package Syncfusion.Pdf.NET` in your project directory. Verify the package version is v16.2.0.x or later for your .NET version. |
| **"SkiaSharp" assembly not found** | SkiaSharp is a dependency of Syncfusion.Pdf.NET and should install automatically. If missing, run `dotnet restore` to restore all NuGet packages. |
| **.NET Version Compatibility Error** | Verify your project targets .NET 6.0 or higher. Check `TargetFramework` in your `.csproj` file or use `dotnet --version` to confirm your installed .NET SDK. |
| **PDF File Not Generated** | Check that the file path is valid and writable. Ensure IWebHostEnvironment (for web apps) or correct path is used for saving PDFs. Verify folder permissions. |
| **Missing Assembly References** | Restore NuGet packages by running `dotnet restore`. Check project file includes correct package version targeting your .NET version. |
| **Image Not Displaying in PDF** | Verify image file path is correct and accessible. For embedded resources, check the namespace and file properties (Build Action: Embedded Resource). |
| **Application Startup Timeout** | Large PDF generation can delay startup. Move PDF generation to a background task or async operation. Monitor performance in Application Insights. |
| **Licensing Error in Production** | License key is development-bound. For production, use a production license key or contact Syncfusion Support for deployment licensing guidance. |
| **Performance Issues with Large PDFs** | Optimize image sizes and compression. Use streaming for very large documents. Consider upgrading to higher server specifications. |

## Next Steps

Explore advanced PDF capabilities and deployment patterns:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/file-formats/pdf/working-with-documents/merge-documents)** — Combine multiple reports or documents into a single file
- **[Split PDF Documents](https://help.syncfusion.com/file-formats/pdf/split-document)** — Extract specific pages or create filtered PDFs
- **[Add Watermarks](https://help.syncfusion.com/file-formats/pdf/working-with-pages/add-watermark)** — Add company logos, confidentiality markers, or page numbers
- **[Create Interactive Forms](https://help.syncfusion.com/file-formats/pdf/working-with-forms/overview)** — Build fillable PDF forms for data collection
- **[Digital Signatures](https://help.syncfusion.com/file-formats/pdf/working-with-forms/create-digital-signatures)** — Sign PDFs programmatically for compliance
- **[PDF Encryption](https://help.syncfusion.com/file-formats/pdf/working-with-forms/encryption)** — Protect sensitive documents with passwords and permissions

### Deployment Patterns
- **[Deploy to Azure App Service](Create-PDF-document-in-Azure-App-Service-Windows.md)** — Host your ASP.NET Core PDF application in Azure
- **[Containerize with Docker](Create-PDF-document-in-Docker.md)** — Build container images for scalable deployment
- **[Scale with Azure Functions](Create-PDF-document-in-Azure-Functions-v4.md)** — Serverless PDF generation on-demand
- **[Production Deployment Checklist](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/)** — Best practices for deploying ASP.NET Core applications

## Resources

**Sample Code:**
- [Complete working sample on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/ASP.NET%20Core/Create-new-PDF-document)

**Documentation:**
- [Syncfusion .NET PDF Library Guide](https://help.syncfusion.com/file-formats/pdf/)
- [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/)
- [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
- [Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)

**Try It Out:**
- [Syncfusion PDF Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)
- [Explore Syncfusion PDF Library Features](https://www.syncfusion.com/document-sdk/net-pdf-library) 