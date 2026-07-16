---
title: Create a PDF File in ASP.NET Core Web API | Syncfusion
description: Learn how to create PDF files in ASP.NET Core Web API using Syncfusion .NET PDF library without the dependency on Adobe Acrobat.
platform: document-processing
control: PDF
documentation: ug
keywords: pdf, aspnet core, web api, c#, pdf generation, rest api
---

# Create a PDF File in ASP.NET Core Web API

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, work with forms, and secure PDF files.

## Prerequisites

| Item | Details |
| --- | --- |
| **Development Environment** | Visual Studio 2022 or Visual Studio Code with C# extension |
| **.NET Version** | .NET 6.0 or later (.NET 8.0 recommended for latest features) |
| **NuGet Package** | Syncfusion.Pdf.NET (latest version) |
| **License** | Syncfusion license key (required for production use) |

To include the .NET PDF library in your ASP.NET Core Web API, refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation. 

## Steps to Create PDF Documents in ASP.NET Core Web API

**Step 1: Create a New ASP.NET Core Web API Project**

Launch Visual Studio 2022 and create a new ASP.NET Core Web API project with .NET 6.0 or later.

![Create ASP.NET Core Web API in Visual Studio](MVC_images/Web-API-1.png)

**Step 2: Configure Project Settings**

In the project configuration dialog, enter your project name and click **Create**.

![Add the project name](MVC_images/Web-API-2.png)

**Step 3: Install the Syncfusion PDF Package**

Install the [Syncfusion.Pdf.NET](https://www.nuget.org/packages/Syncfusion.Pdf.NET) NuGet package from the NuGet Package Manager. This package provides all essential PDF creation and manipulation features.

![Install PDF NuGet package](MVC_images/Web-API-3.png)

**Step 4: Register Your Syncfusion License**

Add your Syncfusion license key registration to the `Program.cs` file at the application startup. License registration is required for all Syncfusion products and must occur before any PDF operations:

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

using Syncfusion.Licensing;

// Register Syncfusion license (add before building services)
SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

var builder = WebApplicationBuilder.CreateBuilder(args);

// ... rest of configuration

{% endhighlight %}
{% endtabs %}

For detailed licensing instructions, refer to the [Syncfusion Licensing Guide](https://help.syncfusion.com/common/essential-studio/licensing/overview).

**Step 5: Create the PDF Controller**

Right-click on the Controllers folder in Solution Explorer and add a new controller class named `PdfController.cs`. This controller will contain the API endpoint for PDF generation.

![Add new controller class](MVC_images/Web-API-4.png)

**Step 6: Add Required Namespaces and Data Model**

Configure your `PdfController.cs` with the necessary namespaces and define the data model. Add the following to the controller file:

{% tabs %}
{% highlight c# tabtitle="PdfController.cs" %}

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;

// Data model for weather forecast
public class WeatherForecast
{
    public DateOnly Date { get; set; }
    public int TemperatureC { get; set; }
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    public string Summary { get; set; }
}

{% endhighlight %}
{% endtabs %}

**Step 7: Implement the PDF Generation Methods**

Add the controller class definition and implement the PDF creation methods. The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class represents the entire PDF, [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) adds formatted text, and [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) creates data tables: 

{% tabs %}
{% highlight c# tabtitle="PdfController.cs" %}

private static readonly string[] Summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

[HttpGet("/api/pdf")]
[Produces("application/pdf")]
public IActionResult CreatePdfDocument()
{
    try
    {
        using (MemoryStream stream = ExportWeatherForecastToPdf())
        {
            // Return PDF file for download
            return File(stream.ToArray(), "application/pdf", "WeatherForecast.pdf");
        }
    }
    catch (Exception ex)
    {
        return BadRequest(new { error = $"Error occurred while creating PDF: {ex.Message}" });
    }
}

private MemoryStream ExportWeatherForecastToPdf()
{
    // Generate sample weather forecast data
    var forecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
        Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    }).ToList();

    // Create PDF document
    using (PdfDocument pdfDocument = new PdfDocument())
    {
        const int paragraphAfterSpacing = 8;
        const int cellMargin = 8;

        // Add a page to the document
        PdfPage page = pdfDocument.Pages.Add();

        // Add title
        PdfStandardFont titleFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);
        PdfTextElement title = new PdfTextElement("Weather Forecast Report", titleFont, PdfBrushes.Black);
        PdfLayoutResult result = title.Draw(page, new PointF(0, 0));

        // Add description text
        PdfStandardFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 12);
        PdfTextElement content = new PdfTextElement(
            "This report demonstrates creating a PDF document with weather forecast data using the Syncfusion .NET PDF library in an ASP.NET Core Web API.",
            contentFont,
            PdfBrushes.Black);
        PdfLayoutFormat format = new PdfLayoutFormat { Layout = PdfLayoutType.Paginate };
        result = content.Draw(
            page,
            new RectangleF(0, result.Bounds.Bottom + paragraphAfterSpacing, page.GetClientSize().Width, page.GetClientSize().Height),
            format);

        // Create and style the data grid
        PdfGrid pdfGrid = new PdfGrid();
        pdfGrid.Style.CellPadding.Left = cellMargin;
        pdfGrid.Style.CellPadding.Right = cellMargin;
        pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
        pdfGrid.DataSource = forecasts;
        pdfGrid.Style.Font = contentFont;

        // Draw the grid on the page
        pdfGrid.Draw(page, new PointF(0, result.Bounds.Bottom + paragraphAfterSpacing));

        // Save to memory stream
        MemoryStream stream = new MemoryStream();
        pdfDocument.Save(stream);
        stream.Position = 0;
        return stream;
    }
}

{% endhighlight %}
{% endtabs %}

## Step 8: View API Endpoint Details

## API Endpoint Specification

**Endpoint Details:**

| Property | Value |
|----------|-------|
| **HTTP Method** | GET |
| **Route** | `/api/pdf` |
| **Content-Type** | `application/pdf` |
| **Response Code** | 200 (Success) / 400 (Bad Request) |
| **File Name** | WeatherForecast.pdf |

**Example Request:**
```bash
curl -X GET "https://localhost:7001/api/pdf" \
  -H "Accept: application/pdf" \
  -o WeatherForecast.pdf
```

**Example Response (Success):**
- Status: 200 OK
- Content-Type: application/pdf
- Body: Binary PDF file data
- Headers Include: `Content-Disposition: attachment; filename="WeatherForecast.pdf"`

**Example Error Response:**
```json
{
  "error": "Error occurred while creating PDF: License key not registered. Please register a valid license key before creating any PDF documents."
}
```

## Step 9: Run and Test the Application

Launch the application and test the PDF endpoint using Swagger UI:

1. Press **F5** or run `dotnet run` in the terminal
2. Open your browser to `https://localhost:7001/swagger/index.html`
3. Locate the **GET /api/pdf** endpoint in the Swagger UI
4. Click **Try it out**, then click **Execute**
5. The PDF file downloads automatically as `WeatherForecast.pdf`

**Expected Output:**

The generated PDF contains:
- Title: "Weather Forecast Report"
- Description explaining the sample
- Data table with 5 rows of weather forecast information (Date, Temperature, Summary)

![Swagger UI PDF Endpoint](MVC_images/Web-API-5.png)

**Downloaded PDF Preview:**

![Generated PDF Document](MVC_images/Output.png)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **NuGet Package Not Found** | Ensure you have added the Syncfusion NuGet feed to your Visual Studio package sources. Verify `Syncfusion.Pdf.NET` version matches your .NET target framework (6.0 or later). |
| **License Key Not Registered** | Add the license registration code in `Program.cs` before service configuration. Verify the license key is valid and not expired. Check Syncfusion license portal for active licenses. |
| **Route Not Found (404)** | Confirm the controller route is correctly defined (`[Route("api/[controller]")]` or `[HttpGet("/api/pdf")]`). Verify the API is included in `Program.cs` with `app.MapControllers()`. |
| **"WeatherForecast" class not defined** | Ensure the `WeatherForecast` class with `Date`, `TemperatureC`, and `Summary` properties is defined in the project. Verify it's in the same namespace or add appropriate using statements. |
| **CORS Error (Access-Control-Allow-Origin)** | Configure CORS in `Program.cs` before `app.Build()`. Add `services.AddCors(options => { options.AddPolicy("AllowAll", builder => builder.AllowAnyOrigin()); })` and enable it with `app.UseCors("AllowAll");`. |
| **PDF File Download Not Working** | Verify the response includes `Content-Disposition: attachment` header. Check that MemoryStream is properly positioned (Position = 0) before returning. Ensure Content-Type is `application/pdf`. |
| **Port Already in Use** | Change the port in `Properties/launchSettings.json`. Use `netstat -ano \| findstr :7001` (Windows) or `lsof -i :7001` (Linux/macOS) to find conflicting processes. |
| **Null Reference Exception in PDF Creation** | Verify sample data is properly initialized with `Enumerable.Range()`. Ensure `Summaries` array is defined with at least one value. Check that `Random.Shared` is available (.NET 6.0+). |
| **HTTP 405 Method Not Allowed** | Confirm the endpoint uses correct HTTP method (`[HttpGet]`). Verify the route attribute matches the request URL exactly (case-sensitive for path parameters). |
| **Memory Issues with Large Reports** | Use streaming to MemoryStream instead of buffering entire document. Consider pagination for large datasets. Dispose PdfDocument and MemoryStream properly with using statements. |

## Next Steps

Explore advanced PDF features in ASP.NET Core Web API:
- **[Merge Multiple PDFs](https://help.syncfusion.com/file-formats/pdf/working-with-documents/merge-documents)** — Combine multiple PDF documents into a single file
- **[Split PDF Documents](https://help.syncfusion.com/file-formats/pdf/split-document)** — Extract specific pages or ranges from PDF files
- **[Add Watermarks](https://help.syncfusion.com/file-formats/pdf/working-with-pages/add-watermark)** — Apply text or image watermarks to PDF pages
- **[Create Interactive Forms](https://help.syncfusion.com/file-formats/pdf/working-with-forms/overview)** — Add fillable form fields to PDF documents
- **[Digital Signatures](https://help.syncfusion.com/file-formats/pdf/working-with-forms/create-digital-signatures)** — Sign PDFs programmatically for authenticity and compliance
- **[Encryption & Security](https://help.syncfusion.com/file-formats/pdf/working-with-forms/encryption)** — Protect PDFs with passwords and permissions
- **[Generate Tables & Charts](https://help.syncfusion.com/file-formats/pdf/working-with-tables)** — Create structured data tables and embedded visualizations

For production deployment guidance, see:
- **[Deploy ASP.NET Core to Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/quickstart-dotnetcore)** — Host your API in the cloud
- **[Containerize with Docker](https://help.syncfusion.com/file-formats/pdf/create-pdf-document-in-docker)** — Package your Web API for consistent environments
- **[Performance Optimization](https://learn.microsoft.com/en-us/aspnet/core/performance/performance-best-practices)** — Best practices for high-throughput PDF generation

## Resources

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Web-API/Web-API-Project).

Explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features in the [.NET PDF Documentation](https://help.syncfusion.com/file-formats/pdf).

Try the [online PDF demo](https://document.syncfusion.com/demos/pdf/default#/tailwind) to see capabilities in action.