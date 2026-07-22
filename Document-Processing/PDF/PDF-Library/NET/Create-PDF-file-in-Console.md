---
title: Create PDF file in Console Application | Syncfusion
description: Discover how to generate a PDF in a Console Application by using the Syncfusion PDF library efficiently.
platform: document-processing
control: PDF
documentation: UG
--- 

# Create or Generate a PDF file in a Console application

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, work with forms, and secure PDF files.

To include the .NET PDF library into your Console application, refer to the [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

To quickly get started with the .NET PDF library, watch this video:
{% youtube "https://youtu.be/PvUdu1hpRLQ?si=xFFjpsJZv3s8AonV" %}

## Steps to Create a PDF Document in a .NET (Core) Console App

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Console/.NET/Create_PDF).

By executing the program, you will get the PDF document as follows.
![Console output PDF document](GettingStarted_images/pdf-generation-output.png)

## Steps to Create a PDF Document in a .NET Framework Console App

The following steps illustrate creating a simple Hello World PDF document in a console application using .NET Framework.

**Prerequisites:**

* Visual Studio 2017 or later with the **.NET desktop development** workload.
* .NET Framework 4.6.2 or later installed on the development machine.
* An active Syncfusion<sup>&reg;</sup> license. If you do not have one, request a free 30-day trial at [https://www.syncfusion.com/sales/communitylicense](https://www.syncfusion.com/sales/communitylicense).

Step 1: Create a new C# **Console Application (.NET Framework)** project in Visual Studio.
![Console Application creation](Console_images/console-app-sample-creation.png)

Step 2: Name the project and click **Create**.
![Name the application](Console_images/Name_project_Framework.png)

Step 3: Install the [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/) NuGet package as a reference to your .NET Framework applications from [NuGet.org](https://www.nuget.org). You can install it either through the **NuGet Package Manager** (right-click the project → **Manage NuGet Packages...** → search for `Syncfusion.Pdf.WinForms` → **Install**) or by running the following command in the **Package Manager Console**:
```
Install-Package Syncfusion.Pdf.WinForms
```
![NET Framework NuGet package](Console_images/Nuget_package_Framework.png)

N> The [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/) NuGet package is a dependent package for Syncfusion<sup>&reg;</sup> Windows Forms GUI controls, so named with suffix "WinForms". It has platform-independent .NET Framework (4.0, 4.5, 4.5.1, 4.6) assemblies of the PDF library and doesn't contain any Windows Forms-related references or code. Hence, we recommend this package for the .NET Framework Console application.

Step 4: Register the Syncfusion<sup>&reg;</sup> license key. An evaluation watermark is added to every page of the generated PDF until a valid key is registered. Include the license key at the start of **Program.cs** before creating a `PdfDocument` instance. Refer to the [Syncfusion License documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering the Syncfusion<sup>&reg;</sup> license key in your application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

// Register the Syncfusion license
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");

{% endhighlight %}
{% endtabs %}

Replace `"YOUR LICENSE KEY"` with the actual key from your Syncfusion<sup>&reg;</sup> account. If you do not have one, request a free 30-day trial at [https://www.syncfusion.com/sales/communitylicense](https://www.syncfusion.com/sales/communitylicense). For local development, store the key in an environment variable and read it with `Environment.GetEnvironmentVariable("SyncfusionLicenseKey")` rather than hardcoding it. For production environments, prefer reading the key from a secure store such as `App.config` `<appSettings>`, Azure Key Vault, or Windows Credential Manager. Refer to the [Syncfusion License documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn more about license registration.

Step 5: Include the following namespaces in the *Program.cs* file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using System.Drawing;

{% endhighlight %}
{% endtabs %}

Step 6: Include the following code sample in *Program.cs* to create a PDF file using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object is used to draw text on the PDF page and save the output to disk.

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

Step 7: Build the project.

Right-click the project in **Solution Explorer** and choose **Build**, or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the entire solution.

Step 8: Run the project.

Click the **Start** button (green arrow) or press <kbd>F5</kbd> to run the app with debugging, or press <kbd>Ctrl</kbd>+<kbd>F5</kbd> to run without debugging. The generated `Output.pdf` will appear in the project's output directory (typically `bin\Debug\`).

N> The `Output.pdf` is written to the current working directory of the application. When running from Visual Studio, this is typically `bin\Debug\`. You can pass an absolute path (for example, `Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), "Output.pdf")`) to save the PDF to a known location.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Console/.NET%20Framework/Create%20PDF).

By executing the program, you will get the PDF document as follows.
![Console output PDF document](GettingStarted_images/pdf-generation-output.png)

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind).

## Next steps

* [Create a PDF in ASP.NET Core](Create-PDF-file-in-ASP-NET-Core.md)
* [Create a PDF in ASP.NET MVC](Create-PDF-file-in-ASP-NET-MVC.md)
* [Create a PDF in WPF](Create-PDF-file-in-WPF.md)
* [Create a PDF in Windows Forms](Create-PDF-file-in-Windows-Forms.md)
* [Create a PDF in Blazor](Create-PDF-document-in-Blazor.md)
* [Open and read an existing PDF document](Open-PDF-file.md)
* [Save the generated PDF to a file or stream](Save-PDF-file.md)