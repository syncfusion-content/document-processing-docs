---
title: Create a PDF File in Console Application | Syncfusion
description: Learn how to create PDF files in a Console Application using the Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
--- 

# Create a PDF File in a Console Application

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, work with forms, and secure PDF files.

## Prerequisites

| Item | .NET Core / .NET 5.0+ | .NET Framework 4.5+ |
| --- | --- | --- |
| **Development Environment** | Visual Studio 2022, Visual Studio Code, JetBrains Rider | Visual Studio 2022, Visual Studio 2019 |
| **.NET Version** | .NET 5.0 or later (.NET 6.0+ recommended) | .NET Framework 4.5, 4.6, 4.7, 4.8 |
| **NuGet Package** | Syncfusion.Pdf.NET (latest version) | Syncfusion.Pdf.WinForms (latest version)* |
| **Additional** | .NET SDK installed from [.NET Downloads](https://dotnet.microsoft.com/en-us/download) | Visual Studio includes .NET Framework runtime |
| **License** | Syncfusion license key (required for production use) | Syncfusion license key (required for production use) |

*Note: Syncfusion.Pdf.WinForms for .NET Framework console applications contains platform-independent PDF library assemblies (not Windows Forms-specific) and is suitable for console applications.

## Getting Started Video

To quickly get started with the .NET PDF library, watch this video:
{% youtube "https://youtu.be/PvUdu1hpRLQ?si=xFFjpsJZv3s8AonV" %}

---

## Steps to Create a PDF File in .NET 5.0 or Later

Select your preferred development environment:

### Visual Studio 2022, Visual Studio Code, or JetBrains Rider

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-Console-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-Console-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-Console-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

**License Registration:** Starting with v16.2.0.x, register your Syncfusion license key in `Program.cs` before creating PDF objects. Refer to the [Syncfusion licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for detailed instructions.

A complete working sample can be downloaded from the [GitHub repository](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Console/.NET/Create_PDF).

**Output:** Upon successful execution, you will get the PDF document as follows:
![Console output PDF document](GettingStarted_images/pdf-generation-output.png)

---

## Steps to Create a PDF File in .NET Framework 4.5 or Later

The following steps illustrate creating a simple "Hello World" PDF document in a console application using .NET Framework.

**Step 1:** Create a new C# Console Application (.NET Framework) project.

![Console Application creation](Console_images/console-app-sample-creation.png)

**Step 2:** Name the project.

![Name the application](Console_images/Name_project_Framework.png)

**Step 3:** Install the [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org).

![NET Framework NuGet package](Console_images/Nuget_package_Framework.png)

> **Note:** The Syncfusion.Pdf.WinForms NuGet package contains platform-independent .NET Framework assemblies of the PDF library. Despite its name, it does not contain any Windows Forms-specific references and is appropriate for console applications.

**Step 4:** Register your Syncfusion license key in the *Program.cs* file. Starting with v16.2.0.x, license registration is required. Refer to the [Syncfusion licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for instructions.

**Step 5:** Include the following namespaces in *Program.cs*:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System;
using System.Drawing;

{% endhighlight %}
{% endtabs %}

**Step 6:** Add the following code to *Program.cs* to create a PDF file with error handling:

{% tabs %}
{% highlight c# tabtitle="C#" %}

try
{
    // Create a new PDF document
    using (PdfDocument document = new PdfDocument())
    {
        // Add a page to the document
        PdfPage page = document.Pages.Add();
        
        // Create PDF graphics for the page
        PdfGraphics graphics = page.Graphics;
        
        // Set the standard font
        PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
        
        // Draw text on the page
        graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
        
        // Save the document to the current directory
        string outputPath = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), "Output.pdf");
        document.Save(outputPath);
        
        Console.WriteLine($"PDF created successfully at: {outputPath}");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"Error creating PDF: {ex.Message}");
}

{% endhighlight %}
{% endtabs %}

**Step 7:** Build the project by clicking Build > Build Solution or pressing Ctrl + Shift + B.

**Step 8:** Run the project by clicking the Start button (green arrow) or pressing F5.

Upon successful execution, the console will display the path where the PDF has been created. The output PDF file (`Output.pdf`) will be saved in the project's bin directory.

A complete working sample can be downloaded from the [GitHub repository](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Console/.NET%20Framework/Create%20PDF).

**Output:** The executed program generates a PDF document with the text "Hello World!!!" formatted with Helvetica font:

![Console output PDF document](GettingStarted_images/pdf-generation-output.png)

## Troubleshooting

| Issue | Solution |
| --- | --- |
| "Could not load file or assembly 'Syncfusion.Pdf'" | Ensure the Syncfusion NuGet package is installed correctly: `dotnet add package Syncfusion.Pdf.NET` (.NET Core) or `Install-Package Syncfusion.Pdf.WinForms` (.NET Framework) |
| "License key is missing" or "License key expired" | Register your Syncfusion license key in Program.cs before creating PDF objects (Step 4 for .NET Framework, similar for .NET Core) |
| "Output.pdf not created in expected location" | The file is saved in the current working directory (bin folder when run from IDE, project directory when run from terminal) |
| "System.IO.FileNotFoundException" | Verify that the directory has write permissions and sufficient disk space is available |
| "The type 'PdfDocument' is not defined" | Ensure all required using statements are included (Syncfusion.Pdf, Syncfusion.Pdf.Graphics) |
| Application runs but PDF is empty or incomplete | Check that graphics.DrawString() is called before document.Save() and no exceptions occur |
| "Cannot find the .NET SDK" (.NET Core) | Install .NET SDK from [.NET Downloads](https://dotnet.microsoft.com/en-us/download) and verify PATH environment variable |
| File locked or cannot be overwritten | Close any open instances of Output.pdf before running the program again, or use a unique filename |
| Different output between .NET Core and Framework | Both versions should produce identical PDFs; check Syncfusion package versions match |
| NuGet package restore fails | Clear NuGet cache: `nuget locals all -clear` or use `dotnet nuget locals all --clear` |

## Next Steps

Explore advanced features and capabilities with the Syncfusion .NET PDF library:

- [Merge PDF Documents](./merge-pdf-documents.md) - Combine multiple PDF files into one
- [Split PDF Documents](./split-pdf-documents.md) - Extract or divide PDF pages
- [Add Watermarks](./add-watermark.md) - Apply text and image watermarks to PDFs
- [Work with Forms](./fill-form-fields.md) - Create and fill interactive PDF forms
- [Add Images to PDF](./Working-with-Images.md) - Insert and manipulate images in PDFs
- [Add Digital Signatures](./digital-signatures.md) - Sign PDFs digitally
- [Secure Documents](./encrypt-pdf.md) - Encrypt and password-protect PDFs
- [Working with Tables and Grids](./Working-with-Tables.md) - Create formatted data tables
- [ASP.NET Core Web Application](./Create-PDF-file-in-ASP-NET-Core.md) - Generate PDFs in web applications
- [Other Platforms](../../getting-started.md) - PDF generation guides for other platforms (Docker, Linux, macOS, Cloud services)

For additional examples and comprehensive API documentation, visit the [Syncfusion .NET PDF documentation](https://help.syncfusion.com/document-processing/pdf/overview).

You can also explore our [interactive PDF demo](https://document.syncfusion.com/demos/pdf/default#/tailwind) and the [Syncfusion PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library).