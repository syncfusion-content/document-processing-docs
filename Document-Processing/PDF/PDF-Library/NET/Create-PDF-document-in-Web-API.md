---
title: Create or Generate PDF file in ASP.NET Core Web API | Syncfusion
description: Learn how to create a PDF file in ASP.NET Core Web API with easy steps using Syncfusion .NET PDF library without depending on Adobe
platform: document-processing
control: PDF
documentation: ug
keywords: pdf, aspnet core, web api, csharp
---

# Create or Generate a PDF File in ASP.NET Core Web API

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents. It also merges, splits, stamps, fills forms, and secures PDF files.

To include the .NET PDF library in your ASP.NET Core Web API, refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

## Prerequisites

- **.NET SDK** 8.0 or later
- **Visual Studio 2022** with the ASP.NET and web development workload, or **Visual Studio Code** with the C# Dev Kit extension
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. See the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details.

## Compatibility

| Component | Minimum version |
| --- | --- |
| .NET SDK | 8.0 or later|
| Swashbuckle (Swagger UI) | 6.5.0 or later |
| Syncfusion<sup>&reg;</sup> PDF library | Latest version |
| Syncfusion<sup>&reg;</sup> NuGet package | [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) |

## Step to create a PDF document in ASP.NET Core Web API

**Step 1:** Create a new C# ASP.NET Core Web API project.
![Create ASP.NET Core Web API in Visual Studio](MVC_images/Web-API-1.png)

**Step 2:** In the project configuration window, name your project and click **Create**.
![Add the project name](MVC_images/Web-API-2.png)

**Step 3:** Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package into your ASP.NET Core Web API project from [NuGet.org](https://www.nuget.org/). Use the latest stable version compatible with your target framework.
![Install PDF NuGet package](MVC_images/Web-API-3.png)

N> If you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or the NuGet feed, you must add a reference to the `Syncfusion.Licensing` assembly and include a valid license key in your project. See the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details on registering the license key.

**Step 4:** Add a new empty API controller to the project, and name it `PdfController.cs`.
![Add new API controller class](MVC_images/Web-API-4.png)

**Step 5:** Include the following namespaces in `PdfController.cs`.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;

{% endhighlight %}
{% endtabs %}

**Step 6:** The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) object represents the PDF being created. The [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) adds text to a PDF document and returns a layout result that lets subsequent elements avoid overlapping content. The [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) creates a table from manually entered data or from an external data source.

Add the following code to the `PdfController` class to create a simple PDF document using `PdfTextElement` and `PdfGrid`.

{% tabs %}
{% highlight c# tabtitle="C#" %}

[HttpGet("/api/Pdf")]
public IActionResult CreatePdfDocument()
{
    try
    {
        const string fileDownloadName = "Output.pdf";
        const string contentType = "application/pdf";
        var stream = ExportWeatherForecastToPdf();
        stream.Position = 0;
        return File(stream, contentType, fileDownloadName);
    }
    catch (Exception ex)
    {
        return BadRequest($"Error occurred while creating PDF file: {ex.Message}");
    }
}

private MemoryStream ExportWeatherForecastToPdf()
{
    var forecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
        Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    }).ToList();

    using (PdfDocument pdfDocument = new PdfDocument())
    {
        int paragraphAfterSpacing = 8;
        int cellMargin = 8;
        PdfPage page = pdfDocument.Pages.Add();
        PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);
        PdfTextElement title = new PdfTextElement("Weather Forecast", font, PdfBrushes.Black);
        PdfLayoutResult result = title.Draw(page, new PointF(0, 0));
        PdfStandardFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 12);
        PdfTextElement content = new PdfTextElement("This component demonstrates fetching data from a service and exporting the data to a PDF document using Syncfusion .NET PDF library.", contentFont, PdfBrushes.Black);
        PdfLayoutFormat format = new PdfLayoutFormat
        {
            Layout = PdfLayoutType.Paginate
        };
        result = content.Draw(page, new RectangleF(0, result.Bounds.Bottom + paragraphAfterSpacing, page.GetClientSize().Width, page.GetClientSize().Height), format);
        PdfGrid pdfGrid = new PdfGrid();
        pdfGrid.Style.CellPadding.Left = cellMargin;
        pdfGrid.Style.CellPadding.Right = cellMargin;
        pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
        pdfGrid.DataSource = forecasts;
        pdfGrid.Style.Font = contentFont;
        pdfGrid.Draw(page, new PointF(0, result.Bounds.Bottom + paragraphAfterSpacing));

        using (MemoryStream stream = new MemoryStream())
        {
            pdfDocument.Save(stream);
            return new MemoryStream(stream.ToArray());
        }
    }
}

{% endhighlight %}
{% endtabs %}

**Step 7:** Run the application, open `https://localhost:<port>/swagger`, expand the `GET /api/Pdf` API, click **Execute**, and then download the response output.
![Swagger UI](MVC_images/Web-API-5.png)

Running the program produces a PDF document as follows.
![ASP.NET Core Web API output PDF document](MVC_images/Output.png)

You can download a complete working sample from the [`Web-API-Project` folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Web-API/Web-API-Project).

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at application startup.
- **Swagger UI does not open** — Ensure the Swashbuckle.AspNetCore package is installed and `app.UseSwagger()` and `app.UseSwaggerUI()` are called in the request pipeline. The default URL is `https://localhost:<port>/swagger`.
- **GET /api/Pdf returns 400 BadRequest** — The action method returns `BadRequest(...)` when an exception is thrown. Inspect the response body for the `ex.Message` to identify the underlying cause.
- **PDF file is empty or truncated** — Ensure the `MemoryStream` is read back (for example, via `stream.ToArray()` or by setting `stream.Position = 0` before returning) before the `using` block disposes it.
- **NuGet restore fails on Linux/macOS** — `Syncfusion.Pdf.Net.Core` depends on `libgdiplus` on non-Windows systems. Install it using `sudo apt-get install -y libgdiplus` (Debian/Ubuntu) or the equivalent for your distribution.
- **Port conflict when running locally** — Change the launch port in `launchSettings.json` or use `dotnet run --urls "http://localhost:5050"`.
- **Cross-Origin (CORS) errors when calling from a browser app** — Add CORS services in `Program.cs` with `builder.Services.AddCors(...)` and call `app.UseCors()` before `app.UseAuthorization()`.

## See also

- [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
- [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
- [Syncfusion<sup>&reg;</sup> Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
- [Open and read PDF files in ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-files)
- [Merge PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)
- [Split PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)
- [Working with PDF forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)
- [Working with security and permissions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security)
- [Working with stamps and watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)
- [Create a PDF file in ASP.NET Core (MVC)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-core)
- [Syncfusion<sup>&reg;</sup> PDF library — Demos](https://document.syncfusion.com/demos/pdf/default)