---
title: Convert HTML to PDF in Azure Functions on Wolfi OS | Syncfusion
description: Learn how to convert HTML to PDF in Azure Functions on Wolfi OS using Chainguard Docker images and Syncfusion .NET HTML to PDF converter library.
platform: document-processing
control: PDF
documentation: UG
---

# Convert HTML to PDF in Azure Functions on Wolfi OS

The Syncfusion<sup>&reg;</sup> [HTML to PDF converter](https://www.syncfusion.com/document-processing/pdf-framework/net/html-to-pdf) is a .NET Core library for converting webpages, SVG, MHTML, and HTML to PDF using C#. The result preserves all graphics, images, text, fonts, and the layout of the original HTML document or webpage. Using this library, you can convert an HTML to PDF using C# with the Blink rendering engine in Azure Functions deployed on Wolfi OS using Chainguard Docker images.

This guide adapts the standard Azure Functions Linux setup for Wolfi OS, which requires a custom Docker container due to the minimal Chainguard base images. Wolfi OS is a secure, minimal Linux distribution, and Chainguard images (like aspnet-runtime:latest-dev) provide a shell and package manager (apk) for installing dependencies such as Chromium, which is necessary for the Blink rendering engine.

N> HTML to PDF converter is not supported on Windows-based Azure App Services due to GDI limitations. Wolfi OS with Chainguard enables a secure, containerized approach on Linux environments.

## Steps to Convert HTML to PDF in Azure Functions on Wolfi OS

### Step 1: Create the Azure Function Project

Create a new Azure Function project using Visual Studio or the Azure Functions Core Tools.

- Select Azure Functions for the project type.
- Choose .NET 8.0 Isolated (Long-term support) as the runtime.
- Add an HTTP trigger function.

### Step 2: Install NuGet Packages

Install the [Syncfusion.HtmlToPdfConverter.Net.Linux](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Linux/) NuGet package via the NuGet Package Manager.

N> If using Syncfusion<sup>&reg;</sup> assemblies from trial setup or NuGet, include a reference to "Syncfusion.Licensing" and register a license key. Refer to [this link](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details.

### Step 3: Prepare the Dockerfile

Since Wolfi OS limits the default runtime image, use Chainguard images to enable package installation. The following Dockerfile sets up the environment, installs Chromium using apk, and configures the app for deployment.

{% highlight dockerfile tabtitle="Dockerfile" %}

# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM cgr.dev/chainguard/aspnet-runtime:latest-dev AS base
USER root
RUN apk update && \
    apk upgrade && \
    apk add --update ca-certificates && \
    apk add chromium --update-cache --repository http://nl.alpinelinux.org/alpine/edge/community && \
    rm -rf /var/cache/apk/*
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# This stage is used to build the service project
FROM cgr.dev/chainguard/dotnet-sdk:latest-dev AS build
USER root
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["YourProjectName.csproj", "."]
RUN dotnet restore "./YourProjectName.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "./YourProjectName.csproj" -c $BUILD_CONFIGURATION -o /app/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./YourProjectName.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "YourProjectName.dll"]

{% endhighlight %}

- Replace `YourProjectName.csproj` and `YourProjectName.dll` with your actual project names.
- The `base` stage uses `aspnet-runtime:latest-dev` for shell access and installs Chromium via apk.
- Build the Docker image locally using: `docker build -t your-app-image .`
- Test locally with: `docker run -p 8080:8080 your-app-image`

### Step 4: Update Function Code (Function1.cs)

Include the necessary namespaces.

{% highlight c# tabtitle="C#" %}

using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Threading.Tasks;

{% endhighlight %}

Implement the HTTP trigger function to convert HTML to PDF.

{% highlight c# tabtitle="C#" %}

[Function("Function1")]
public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req, ILogger log, FunctionContext executionContext)
{
    log.LogInformation("C# HTTP trigger function processed a request.");
    try
    {
        string htmlText = "<p>Hello world</p>"; // Replace with actual HTML input, e.g., from request body
        byte[] pdfBytes = HtmlToPdfConvert(htmlText);
        return new FileStreamResult(new MemoryStream(pdfBytes), "application/pdf");
    }
    catch (Exception ex)
    {
        log.LogError(ex.Message.ToString(), "An error occurred while converting HTML to PDF.");
        return new ContentResult
        {
            Content = $"Error: {ex.Message}",
            ContentType = "text/plain",
            StatusCode = StatusCodes.Status500InternalServerError
        };
    }
}

{% endhighlight %}

### Step 5: Implement HTML to PDF Conversion Method

Add the `HtmlToPdfConvert` method to handle the conversion using Blink. Since Chromium is now installed via Docker, no additional setup scripts are needed.

{% highlight c# tabtitle="C#" %}

private static byte[] HtmlToPdfConvert(string htmlText)
{
    if (string.IsNullOrWhiteSpace(htmlText))
    {
        throw new ArgumentException("HTML text cannot be null or empty.", nameof(htmlText));
    }

    try
    {
        // Initialize HTML to PDF converter with Blink engine
        HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter(HtmlRenderingEngine.Blink);

        // Configure Blink settings
        BlinkConverterSettings settings = new BlinkConverterSettings
        {
            ViewPortSize = new Syncfusion.Drawing.Size(1024, 768), // Set desired viewport size
            Margin = new PdfMargins
            {
                Top = 20, // Set desired margins
                Left = 20,
                Right = 20,
                Bottom = 20
            }
        };
        // Note: BlinkPath is auto-detected in containerized environments with Chromium installed
        htmlConverter.ConverterSettings = settings;

        // Convert HTML to PDF
        using (var memoryStream = new MemoryStream())
        {
            PdfDocument document = htmlConverter.Convert(htmlText, null);
            document.Save(memoryStream);
            document.Close(true);
            return memoryStream.ToArray();
        }
    }
    catch (Exception ex)
    {
        // Handle exceptions
        throw new Exception("An error occurred during HTML to PDF conversion: " + ex.Message);
    }
}

{% endhighlight %}

N> Chromium is pre-installed via the Dockerfile, so manual binary setup is unnecessary. If running in sandbox-restricted environments (older versions), you may need to add command-line arguments as noted in the original guide.

### Step 6: Deploy to Azure Functions

1. Publish the Azure Function to Azure Container Instances or Azure Functions with a custom container image.
2. In the Azure portal, create a new Function App with a Linux OS and Consumption plan (recommended for Blink support).
3. Select "Docker Container" as the deployment method and provide your container registry details.
4. Push your built Docker image to a registry like Azure Container Registry or Docker Hub.
5. Update the Function App settings to use the container image.
6. After deployment, access the Function URL (e.g., via Azure portal: Function App > Functions > Function Name > Get function URL).
7. Test the endpoint (e.g., `https://yourfunctionapp.azurewebsites.net/api/Function1`). It should return a PDF.

A complete working sample can be adapted from the [Azure Functions Linux sample](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Azure/HTML_to_PDF_Azure_functions) and modified for Wolfi OS with the provided Dockerfile.

Click [here](https://www.syncfusion.com/document-processing/pdf-framework/net-core/html-to-pdf) to explore the rich set of Syncfusion<sup>&reg;</sup> HTML to PDF converter library features. 

An online sample link to [convert HTML to PDF document](https://ej2.syncfusion.com/aspnetcore/PDF/HtmltoPDF#/material3) in ASP.NET Core. 