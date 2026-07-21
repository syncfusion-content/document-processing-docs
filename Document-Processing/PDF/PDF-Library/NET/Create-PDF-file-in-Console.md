---
title: Create PDF file in Console Application | Syncfusion
description: Discover how to generate a PDF in a Console Application by using the Syncfusion PDF library efficiently.
platform: document-processing
control: PDF
documentation: UG
--- 

# Create or Generate a PDF File in a Console Application

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents. It also merges, splits, stamps, fills forms, and secures PDF files.

To quickly get started with the .NET PDF library, watch this video:
{% youtube "https://youtu.be/PvUdu1hpRLQ" %}

## Prerequisites

- **.NET SDK 8.0** or later.
- **Visual Studio 2022** with the **.NET desktop development** workload, or **Visual Studio Code** with the C# Dev Kit extension, or **JetBrains Rider**.
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- The **[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)** NuGet package (for .NET Core) or **[Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/)** (for .NET Framework).

## Step to create a PDF document in a .NET (Core) console application

The instructions below cover three IDE workflows. Select the tab that matches your development environment.

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

You can download a complete working sample from the [Create_PDF folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Console/.NET/Create_PDF).

Running the program produces the following PDF document.
![.NET Core console output PDF document](GettingStarted_images/pdf-generation-output.png)

## Step to create a PDF document in a .NET Framework console application

The following steps illustrate creating a simple **Hello World** PDF document in a console application using .NET Framework.

### Prerequisites

- Install the **.NET Framework targeting pack** (4.6.2 or later) via the Visual Studio Installer. The .NET Framework runtime is included with Windows; the **argeting pack** adds the reference assemblies required to build the project.
- Install **Visual Studio 2022** (or 2017) with the **.NET desktop development** workload from the [Visual Studio downloads page](https://visualstudio.microsoft.com/downloads/). The previous version's reference to "Visual Studio Code" was incorrect; this tutorial uses Visual Studio.

**Step 1:** Create a new **Console Application (.NET Framework)** project.
![Console Application creation in Visual Studio](Console_images/console-app-sample-creation.png)

**Step 2:** Name the project (for example, `Create_PDF`) and click **OK** to create it.
![Name the application](Console_images/Name_project_Framework.png)

**Step 3:** Install the [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/) NuGet package from [NuGet.org](https://www.nuget.org) using the NuGet Package Manager or `Install-Package Syncfusion.Pdf.WinForms` in the Package Manager Console.
![Install the Syncfusion.Pdf.WinForms NuGet package](Console_images/Nuget_package_Framework.png)

N> The [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/) NuGet package is a dependent package for Syncfusion<sup>&reg;</sup> Windows Forms GUI controls, so it is named with the suffix **WinForms**. It contains platform-independent .NET Framework (4.6.2 or later ) assemblies of the PDF library and does **not** contain any Windows Forms references or code. We therefore recommend this package for .NET Framework console applications.

**Step 4:** Include the following namespaces in `Program.cs`.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using System.Drawing;

{% endhighlight %}
{% endtabs %}

**Step 5:** Include the following code in `Program.cs` to create a PDF file. The `document.Save("Output.pdf")` call writes the PDF to the current working directory, which is typically the project's output folder (for example, `bin\Debug\net48\`). Pass an absolute path if you need to control the location.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Create a new PDF document. 
using (PdfDocument document = new PdfDocument()) 
{
    //Add a page to the document.
    PdfPage page = document.Pages.Add();
    //Create PDF graphics for a page.
    PdfGraphics graphics = page.Graphics;
    //Set the standard font.
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
    //Draw the text.
    graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
    //Save the document.
    document.Save("Output.pdf");
}

{% endhighlight %}
{% endtabs %}

**Step 6:** Build the project by choosing **Build > Build Solution** or pressing **Ctrl + Shift + B**. Verify the build succeeds in the **Output** window.

**Step 7:** Run the project by choosing **Debug > Start Debugging** or pressing **F5**. The `Output.pdf` file is generated in the project's working directory (typically `bin\Debug\net48\`).

You can download a complete working sample from the [Create PDF (.NET Framework) folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Console/.NET%20Framework/Create%20PDF).

Running the program produces the following PDF document.
![.NET Framework console output PDF document](GettingStarted_images/pdf-generation-output.png)

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at the start of the console app's `Main` method.
- **`Output.pdf` not generated** — The current working directory may be read-only (for example, when running from `Program Files`). Pass an absolute path to `document.Save(@"C:\Temp\Output.pdf")` or set `Environment.CurrentDirectory` before saving.
- **`System.Drawing.Common` exceptions on Linux/macOS (.NET 6+)** — `System.Drawing` is Windows-only on .NET 6+; use the `Syncfusion.Drawing` namespace and the `Syncfusion.Pdf.Net.Core` package instead of `Syncfusion.Pdf.WinForms`.
- **NuGet package version conflicts** — Ensure the `Syncfusion.Pdf.WinForms` (or `Syncfusion.Pdf.Net.Core`) version matches your target framework. Clear the NuGet cache with `dotnet nuget locals all --clear` and restore again.
- **`TypeInitializationException` for SkiaSharp** — Install the matching `SkiaSharp.NativeAssets.*` package for your target platform (for example, `SkiaSharp.NativeAssets.Linux`).
- **The console window closes immediately on double-click** — Run the executable from a command prompt, or add `Console.ReadKey()` at the end of `Main` to keep the window open.
- **Build error: `Output.pdf` is in use** — Close any PDF viewer that has `Output.pdf` open, or write to a new file name on each run (for example, `Output-{DateTime.Now:yyyyMMddHHmmss}.pdf`).

## See also

- [Create a PDF file in ASP.NET Core](create-pdf-file-in-asp-net-core)
- [Create a PDF file in Docker](create-pdf-document-in-docker)
- [Create a PDF file in AWS Lambda](create-pdf-file-in-aws-lambda)
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