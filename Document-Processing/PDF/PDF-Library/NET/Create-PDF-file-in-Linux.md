---
title: Create PDF document on Linux | Syncfusion
description: Create PDF document in .NET Core application on Linux using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat.
platform: document-processing
control: PDF
documentation: UG
Keywords: linux os save pdf, linux os load pdf, c# save pdf, c# load pdf
---

# Create PDF document on Linux

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents programmatically without the dependency on Adobe Acrobat. Using this library, you can create a PDF document in a .NET Core application on Linux.

## Prerequisites

* [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download) (or later)
* An active [Syncfusion&reg; license key](https://www.syncfusion.com/sales/communitylicense) (a free 30-day trial is available)

## Steps to create PDF document programmatically

Step 1: Execute the following command in the Linux terminal to create a new .NET Core Console application project.

{% tabs %}
{% highlight bash %}

dotnet new console

{% endhighlight %}
{% endtabs %}

Step 2: Navigate to the newly created project directory.

{% tabs %}
{% highlight bash %}

cd ConsoleApp

{% endhighlight %}
{% endtabs %}

Step 3: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/) by executing the following command. Replace `xx.x.x.xx` with the actual version of the package you want to install (visit the NuGet page to find the latest stable version).

{% tabs %}
{% highlight bash %}

dotnet add package Syncfusion.Pdf.Net.Core -v xx.x.x.xx -s https://www.nuget.org/

{% endhighlight %}
{% endtabs %}

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or from the NuGet feed, you also have to add the "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Register the Syncfusion<sup>&reg;</sup> license key. An evaluation watermark is added to every page of the generated PDF until a valid key is registered. Include the license key at the top of **Program.cs** before creating a `PdfDocument` instance. Refer to the [Syncfusion License documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering the Syncfusion<sup>&reg;</sup> license key in your application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

// Register the Syncfusion license
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");

{% endhighlight %}
{% endtabs %}

Replace `"YOUR LICENSE KEY"` with the actual key from your Syncfusion<sup>&reg;</sup> account. If you do not have one, request a free 30-day trial at [https://www.syncfusion.com/sales/communitylicense](https://www.syncfusion.com/sales/communitylicense). For local development, store the key in an environment variable and read it with `Environment.GetEnvironmentVariable("SyncfusionLicenseKey")` rather than hardcoding it. For production environments, prefer reading the key from a secure store such as **Azure Key Vault**, **AWS Secrets Manager**, or a `appsettings.json` file that is excluded from source control. Refer to the [Syncfusion License documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details.

Step 5: Include the following namespaces in the *Program.cs* file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;
using System.Collections.Generic;

{% endhighlight %}
{% endtabs %}

Step 6: Add the following code sample to the *Program.cs* file to **create a PDF document in the .NET Core application on Linux**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Create a new PDF document.
PdfDocument document = new PdfDocument();
// Set the page size.
document.PageSettings.Size = PdfPageSize.A4;
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the image from the disk.
FileStream imageStream = new FileStream("AdventureCycle.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap image = new PdfBitmap(imageStream);
//Draw an image.
graphics.DrawImage(image, new RectangleF(130,0, 250, 100));

//Draw header text. 
graphics.DrawString("Adventure Works Cycles", new PdfStandardFont(PdfFontFamily.TimesRoman, 20, PdfFontStyle.Bold), PdfBrushes.Gray, new PointF(150, 150));

//Add paragraph. 
string text = "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sel
//Create a text element with the text and font.
PdfTextElement textElement = new PdfTextElement(text, new PdfStandardFont(PdfFontFamily.TimesRoman, 12));
//Draw the text in the first column.
textElement.Draw(page, new RectangleF(0, 200, page.GetClientSize().Width, page.GetClientSize().Height));

//Create a PdfGrid.
PdfGrid pdfGrid = new PdfGrid();
//Add values to the list.
List<object> data = new List<object>();
Object row1 = new { Product_ID = "1001", Product_Name = "Bicycle", Price = "10,000" };
Object row2 = new { Product_ID = "1002", Product_Name = "Head Light", Price = "3,000" };
Object row3 = new { Product_ID = "1003", Product_Name = "Break wire", Price = "1,500" };
data.Add(row1);
data.Add(row2);
data.Add(row3);
//Add list to IEnumerable.
IEnumerable<object> dataTable = data;
//Assign data source.
pdfGrid.DataSource = dataTable;
//Apply built-in table style.
pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);
//Draw the grid to the page of PDF document.
pdfGrid.Draw(graphics, new RectangleF(0, 300, page.Size.Width - 80, 0));

//Create file stream.
using (FileStream outputFileStream = new FileStream(Path.GetFullPath(@"Output.pdf"), FileMode.Create, FileAccess.ReadWrite))
{
    //Save the PDF document to file stream.
    document.Save(outputFileStream);
}
//Close the PDF document.
document.Close(true);

{% endhighlight %}
{% endtabs %}

Step 7: Execute the following command to restore the NuGet packages.

{% tabs %}
{% highlight bash %}

dotnet restore

{% endhighlight %}
{% endtabs %}

![Linux Build](GettingStarted_images/Linux_Build.png)

Step 8: Execute the following command in terminal to run the application.
{% tabs %}
{% highlight bash %}

dotnet run

{% endhighlight %}
{% endtabs %}

![Linux Run](GettingStarted_images/Linux_Run.png)

A complete working sample can be downloaded from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Linux).

By executing the program, you will get the PDF document as follows. The output will be saved alongside Program.cs.
![Linux output PDF document](GettingStarted_images/Open_and_save_output.png)

## Next steps

* [Create a PDF in a Console application (.NET Framework)](Create-PDF-file-in-Console.md)
* [Create a PDF in a Console application (cross-platform)](Create-PDF-file-in-Console.md)
* [Create a PDF in ASP.NET Core](Create-PDF-file-in-ASP-NET-Core.md)
* [Create a PDF in WPF](Create-PDF-file-in-WPF.md)
* [Open and read an existing PDF document](Open-PDF-file.md)
* [Save the generated PDF to a file or stream](Save-PDF-file.md)

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.