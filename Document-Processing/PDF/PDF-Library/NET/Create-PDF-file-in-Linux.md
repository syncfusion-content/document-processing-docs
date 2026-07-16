---
title: Create a PDF File in Linux | Syncfusion
description: Create a PDF file in .NET Core application on Linux using Syncfusion .NET PDF library without the dependency of Adobe Acrobat.
platform: document-processing
control: PDF
documentation: UG
Keywords: linux os save pdf, linux os load pdf, c# save pdf, c# load pdf
---

# Create a PDF File in Linux

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents programmatically without the dependency on Adobe Acrobat. Using this library, you can create a PDF document in a .NET Core application on Linux.

## Prerequisites

| Item | Details |
| --- | --- |
| **Operating System** | Linux (Ubuntu, Fedora, Debian, CentOS, etc.) |
| **.NET Version** | .NET 5.0 or later (.NET 6.0+ recommended) |
| **Development Environment** | Visual Studio Code, Visual Studio for Linux, or any text editor with .NET CLI |
| **.NET Core SDK** | Latest stable version |
| **NuGet Package** | Syncfusion.Pdf.NET (latest version) |
| **Additional Files** | Image file for the code sample (AdventureCycle.jpg) - place in project directory |
| **License** | Syncfusion license key (required for production use) |

## Steps to create a PDF file programmatically

**Step 1:** Execute the following command in the Linux terminal to create a new .NET Core Console application project.

{% tabs %}
{% highlight bash %}

dotnet new console

{% endhighlight %}
{% endtabs %}

**Step 2:** Install the [Syncfusion.Pdf.Net.core](https://www.nuget.org/packages/Syncfusion.Pdf.NET) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/) by executing the following command.

{% tabs %}
{% highlight bash %}

dotnet add package Syncfusion.Pdf.Net.Core -s https://www.nuget.org/

{% endhighlight %}
{% endtabs %}

**Step 3:** Register the Syncfusion license key in the *Program.cs* file before creating any Syncfusion objects. This is required for production use. Refer to the [Syncfusion licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for detailed instructions on registering your license key.

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Register Syncfusion license
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

{% endhighlight %}
{% endtabs %}

**Step 4:** Include the following namespaces in the *Program.cs* file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;

{% endhighlight %}
{% endtabs %}

**Step 5:** Add the following code sample to the *Program.cs* file to create a PDF file in the .NET Core application on Linux.

{% tabs %}
{% highlight c# tabtitle="C#" %}

try
{
    // Create a new PDF document
    using (PdfDocument document = new PdfDocument())
    {
        // Set the page size
        document.PageSettings.Size = PdfPageSize.A4;
        // Add a page to the document
        PdfPage page = document.Pages.Add();

        // Create PDF graphics for the page
        PdfGraphics graphics = page.Graphics;
        
        // Load and draw image from disk
        using (FileStream imageStream = new FileStream("AdventureCycle.jpg", FileMode.Open, FileAccess.Read))
        {
            PdfBitmap image = new PdfBitmap(imageStream);
            graphics.DrawImage(image, new RectangleF(130, 0, 250, 100));
        }

        // Draw header text
        graphics.DrawString("Adventure Works Cycles", new PdfStandardFont(PdfFontFamily.TimesRoman, 20, PdfFontStyle.Bold), PdfBrushes.Gray, new PointF(150, 150));

        // Add paragraph
        string text = "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal bicycles to North American markets and expands its market to other regions.";
        PdfTextElement textElement = new PdfTextElement(text, new PdfStandardFont(PdfFontFamily.TimesRoman, 12));
        textElement.Draw(page, new RectangleF(0, 200, page.GetClientSize().Width, page.GetClientSize().Height));

        // Create a grid with product data
        PdfGrid pdfGrid = new PdfGrid();
        List<object> data = new List<object>();
        data.Add(new { Product_ID = "1001", Product_Name = "Bicycle", Price = "10,000" });
        data.Add(new { Product_ID = "1002", Product_Name = "Head Light", Price = "3,000" });
        data.Add(new { Product_ID = "1003", Product_Name = "Brake Wire", Price = "1,500" });
        
        // Assign data source and style
        pdfGrid.DataSource = data;
        pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);
        
        // Draw the grid on the page
        pdfGrid.Draw(graphics, new RectangleF(0, 300, page.Size.Width - 80, 0));

        // Save the PDF document to file
        string outputPath = Path.Combine(Directory.GetCurrentDirectory(), "Output.pdf");
        using (FileStream outputFileStream = new FileStream(outputPath, FileMode.Create, FileAccess.ReadWrite))
        {
            document.Save(outputFileStream);
        }
        
        Console.WriteLine($"PDF created successfully at: {outputPath}");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"Error creating PDF: {ex.Message}");
}

{% endhighlight %}
{% endtabs %}

**Step 6:** Execute the following command to restore the NuGet packages.

{% tabs %}
{% highlight bash %}

dotnet restore

{% endhighlight %}
{% endtabs %}

**Step 7:** Execute the following command in the terminal to build and run the application.

{% tabs %}
{% highlight bash %}

dotnet run

{% endhighlight %}
{% endtabs %}

Upon successful execution, the console will display the file path where the PDF has been created. The output PDF file (`Output.pdf`) will be saved in the current working directory (same location as Program.cs).

## Output

The executed program generates a PDF document with:
- Header text: "Adventure Works Cycles"
- Sample product image
- Paragraph description
- Product data table with sample items

A complete working example can be downloaded from the [GitHub repository](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Linux).

## Troubleshooting

| Issue | Solution |
| --- | --- |
| "AdventureCycle.jpg not found" | Ensure the image file exists in the project directory or provide the full path to the image file |
| "System.IO.FileNotFoundException" on image load | Verify file permissions and that the working directory is set correctly |
| "License key is missing" | Register your Syncfusion license key in Step 3 before creating PDF objects |
| PDF file not created | Check that the directory has write permissions and sufficient disk space |
| Font rendering issues on Linux | Install additional fonts: `sudo apt-get install fonts-dejavu fonts-liberation` (Ubuntu/Debian) |
| "Syncfusion.Licensing" not found | Ensure Syncfusion.Pdf.NET NuGet package is installed correctly |
| Application exits silently | Check the console output for error messages; ensure all required files are accessible |
| Broken links or missing images in PDF | Verify that file paths are correct and use absolute paths or Path.GetFullPath() |

## Next Steps

Explore advanced features and capabilities with the Syncfusion .NET PDF library:

- [Merge PDF Documents](./merge-pdf-documents.md) - Combine multiple PDF files into one
- [Split PDF Documents](./split-pdf-documents.md) - Extract or divide PDF pages
- [Add Watermarks](./add-watermark.md) - Apply text and image watermarks
- [Work with Forms](./fill-form-fields.md) - Create and fill interactive PDF forms
- [Add Digital Signatures](./digital-signatures.md) - Sign PDFs digitally
- [Secure Documents](./encrypt-pdf.md) - Encrypt and password-protect PDFs
- [Other Platforms](../../getting-started.md) - PDF generation guides for .NET Framework, ASP.NET Core, WPF, Windows Forms, and more

For additional examples and comprehensive API documentation, visit the [Syncfusion .NET PDF documentation](https://help.syncfusion.com/document-processing/pdf/overview).