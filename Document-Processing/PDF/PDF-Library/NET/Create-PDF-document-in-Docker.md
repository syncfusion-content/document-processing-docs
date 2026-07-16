---
title: Create a PDF File in Docker | Syncfusion
description: Learn how to create PDF files in a Docker container using Syncfusion and a containerized .NET Core application.
platform: document-processing
control: PDF
documentation: UG
keywords: docker getting started, docker sample project, container basics, docker tutorial, docker setup, run docker app, containerized pdf
---

# Create a PDF File in Docker

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is a powerful and versatile solution for creating, reading, and editing PDF documents in .NET applications. It also provides advanced features such as merging and splitting PDFs, adding stamps, working with form fields, and securing PDF files with encryption and permissions.

## Prerequisites

| Item | Details |
| --- | --- |
| **Operating System** | Windows, macOS, or Linux (with Docker Desktop installed) |
| **.NET Version** | .NET 5.0 or later (.NET 6.0+ recommended) |
| **Development Environment** | Visual Studio 2022 or Visual Studio Code with C# extension |
| **Docker** | Docker Desktop 3.0 or later (or Docker Engine 20.10+ on Linux) |
| **NuGet Package** | Syncfusion.Pdf.NET (latest version) |
| **License** | Syncfusion license key (required for production use) |

To integrate the .NET PDF library into your Docker application, ensure you have the Syncfusion NuGet package installed. Refer to the official documentation sections on [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) for additional guidance.

## Steps to Create a PDF File in a Docker Container

**Step 1:** Create a new ASP.NET Core MVC application.

![Create ASP.NET MVC Web application in Visual Studio](GettingStarted_images/Docker-Image1.png)

**Step 2:** In the project configuration window, name your project and select Next.

![Configuration Window](GettingStarted_images/Docker-Image2.png)

**Step 3:** Enable Docker support with Linux as the target OS. This will automatically create a Dockerfile and docker-compose configuration files in your project.

![Docker Support Window](GettingStarted_images/Docker-Image3.png)

**Step 4:** Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![NuGet Package](GettingStarted_images/Docker-Image4.png)

**Step 5:** Register the Syncfusion license key in your `Program.cs` file. Starting with v16.2.0.x, Syncfusion assemblies require a license key for production use. Refer to the [Syncfusion licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for detailed instructions on registering your license key.

**Step 6:** A default action method named Index will be present in `HomeController.cs`. Right-click on this Index method and select "Go To View" to open the associated view page `Index.cshtml`. Add a button to trigger PDF generation as follows:

{% tabs %}
{% highlight CSHTML %}

@{Html.BeginForm("CreatePDFDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Generate PDF Document" style="width:150px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

**Step 7:** The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document. The [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) adds text to a PDF document, and the [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) creates tables from data.

Add the following code to your `HomeController.cs` to create a PDF document with sample weather forecast data:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public IActionResult CreatePDF()
    {
        try
        {
            // Create a new PDF document
            using (PdfDocument pdfDocument = new PdfDocument())
            {
                int paragraphAfterSpacing = 8;
                int cellMargin = 8;

                // Add page to the PDF document
                PdfPage page = pdfDocument.Pages.Add();
                
                // Create title
                PdfStandardFont titleFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);
                PdfTextElement title = new PdfTextElement("Weather Forecast Report", titleFont, PdfBrushes.Black);
                PdfLayoutResult result = title.Draw(page, new PointF(0, 0));

                // Create description text
                PdfStandardFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 12);
                PdfTextElement content = new PdfTextElement(
                    "This report demonstrates creating a PDF document with sample weather forecast data using the Syncfusion .NET PDF library in a Docker containerized environment.",
                    contentFont,
                    PdfBrushes.Black);
                PdfLayoutFormat format = new PdfLayoutFormat { Layout = PdfLayoutType.Paginate };
                result = content.Draw(
                    page,
                    new RectangleF(0, result.Bounds.Bottom + paragraphAfterSpacing, page.GetClientSize().Width, page.GetClientSize().Height),
                    format);

                // Create sample weather forecast data
                List<object> weatherData = new List<object>
                {
                    new { Date = "2026-07-16", Condition = "Sunny", Temperature = "85°F", Humidity = "45%" },
                    new { Date = "2026-07-17", Condition = "Partly Cloudy", Temperature = "82°F", Humidity = "50%" },
                    new { Date = "2026-07-18", Condition = "Rainy", Temperature = "75°F", Humidity = "70%" },
                    new { Date = "2026-07-19", Condition = "Cloudy", Temperature = "78°F", Humidity = "60%" }
                };

                // Create and style the PDF grid
                PdfGrid pdfGrid = new PdfGrid();
                pdfGrid.Style.CellPadding.Left = cellMargin;
                pdfGrid.Style.CellPadding.Right = cellMargin;
                pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
                pdfGrid.DataSource = weatherData;
                pdfGrid.Style.Font = contentFont;

                // Draw the grid on the page
                pdfGrid.Draw(page, new PointF(0, result.Bounds.Bottom + paragraphAfterSpacing));

                // Save the PDF to a memory stream
                using (MemoryStream stream = new MemoryStream())
                {
                    pdfDocument.Save(stream);
                    stream.Position = 0;
                    return File(stream.ToArray(), "application/pdf", "WeatherForecast.pdf");
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error creating PDF: {ex.Message}");
            return BadRequest("Failed to generate PDF document");
        }
    }
}

{% endhighlight %}
{% endtabs %}

**Step 8:** Build the Docker image and run the container. Use the following commands in the terminal/PowerShell from your project root directory:

{% tabs %}
{% highlight bash tabtitle="Docker Commands" %}

# Build the Docker image
docker build -t create-pdf-docker .

# Run the container and map port 80
docker run -d -p 8080:80 --name pdf-app create-pdf-docker

# Verify the container is running
docker ps

{% endhighlight %}
{% endtabs %}

**Step 9:** Access the application in your browser by navigating to `http://localhost:8080`. Click the "Generate PDF Document" button to create the weather forecast PDF. The PDF file will be downloaded to your computer.

**Step 10:** To stop and remove the container when finished, use:

{% tabs %}
{% highlight bash %}

docker stop pdf-app
docker rm pdf-app

{% endhighlight %}
{% endtabs %}

## Output

Upon successful execution, you will receive a PDF document containing:
- Title: "Weather Forecast Report"
- Description paragraph about the PDF generation
- A formatted data table with sample weather information (Date, Condition, Temperature, Humidity)
- Professional styling applied via GridTable4Accent1 style

![Docker Output](GettingStarted_images/Docker-Output.png)

A complete working sample can be downloaded from the [GitHub repository](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Docker/Create-PDF-using-Docker).

## Docker Architecture Overview

When you enable Docker support in Visual Studio:
1. A **Dockerfile** is created that defines the Docker image (OS, runtime, dependencies)
2. The **.NET application** is built inside the container using the Dockerfile instructions
3. The **container** runs the compiled application on Linux
4. The **port mapping** (8080:80) allows your local machine to communicate with the containerized application

The PDF generation happens inside the container, and the generated file is returned to your browser for download.

## Troubleshooting

| Issue | Solution |
| --- | --- |
| "Docker daemon is not running" | Ensure Docker Desktop is installed and running on your machine |
| "Failed to build image" or "Dockerfile not found" | Verify Docker support was enabled in Visual Studio (Step 3) and Dockerfile exists in project root |
| "Port 8080 is already in use" | Change the port mapping: `docker run -d -p 8081:80 --name pdf-app create-pdf-docker` |
| "Connection refused" when accessing localhost | Verify the container is running: `docker ps`. If not listed, check logs: `docker logs pdf-app` |
| "License key is missing" or "License expired" | Register your Syncfusion license key in Program.cs (Step 5) before the application starts |
| "Syncfusion.Pdf.NET not found" | Ensure NuGet package is installed in the project and restored: `dotnet restore` |
| "PDF file not downloaded after clicking button" | Check browser console for errors and verify HomeController.CreatePDF() method returns successfully |
| "Image file not found in container" | If using custom images, copy them to the project and verify they're included in the Docker build context |
| Container exits immediately after start | Check logs for startup errors: `docker logs pdf-app`. Verify license registration in Program.cs |
| "The network request failed" when running in container | Ensure port mapping is correct and firewall allows Docker network traffic |

## Next Steps

Explore advanced features and deployment patterns with the Syncfusion .NET PDF library:

- [Merge PDF Documents](./merge-pdf-documents.md) - Combine multiple PDF files into one
- [Split PDF Documents](./split-pdf-documents.md) - Extract or divide PDF pages
- [Add Watermarks](./add-watermark.md) - Apply text and image watermarks to PDFs
- [Work with Forms](./fill-form-fields.md) - Create and fill interactive PDF forms
- [Add Digital Signatures](./digital-signatures.md) - Sign PDFs digitally
- [Secure Documents](./encrypt-pdf.md) - Encrypt and password-protect PDFs
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/) - Optimize Docker images and containers
- [Kubernetes Deployment](./Create-PDF-document-in-AKS-Environment.md) - Scale PDF generation with Kubernetes
- [Production Deployment](https://docs.microsoft.com/aspnet/core/host-and-deploy/docker/) - Deploy containerized .NET applications to production

For additional examples and comprehensive API documentation, visit the [Syncfusion .NET PDF documentation](https://help.syncfusion.com/document-processing/pdf/overview).

You can also explore our [interactive PDF demo](https://document.syncfusion.com/demos/pdf/default#/tailwind) to see the library in action. 