---
title: Create PDF document in Microsoft Azure | Syncfusion
description: Create, read, and edit PDF documents in Microsoft Azure using the Syncfusion .NET PDF library for C#. Includes setup and deployment steps.
platform: document-processing
control: PDF
documentation: UG
---

# Create PDF document in Azure

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, edit PDF documents programmatically without the dependency on **Adobe Acrobat**. Using this library, you can create a PDF document in Azure within a few lines of code.

N> If this is your first time working with Azure, refer to the [Azure development resources](https://learn.microsoft.com/en-us/azure/developer/) for setup guidance.

## Prerequisites

* An active **Microsoft Azure subscription**. If you don't have one, [create a free account](https://azure.microsoft.com/free/) before starting.
* **Visual Studio 2022** with the **Azure development** workload, or **Visual Studio Code** with the Azure extensions.
* Install the required NuGet package: [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/). The library supports .NET 8, .NET 9, and .NET 10.
* Register a valid Syncfusion license key in your application. Refer to the [licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details.
* A basic understanding of creating PDF documents in .NET. See [Create a PDF document in .NET](create-pdf-document-in-net.md) for shared concepts.

## Steps to create a PDF in Azure

The following steps describe how to create a PDF document in an Azure-hosted application using the Syncfusion .NET PDF library.

### 1. Create a new project

Create a new ASP.NET Core Web App (for Azure App Service) or Azure Functions project in Visual Studio, targeting .NET 6.2 or later.

### 2. Add the NuGet package

Install the **Syncfusion.Pdf.Net.Core** NuGet package using the NuGet Package Manager or the .NET CLI:

```bash
dotnet add package Syncfusion.Pdf.Net.Core
```

### 3. Create the PDF document

Use the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) API to create the PDF. The following code adds a single page with a text element and saves the file.

```csharp
// filepath: Program.cs
using Syncfusion.Pdf;
using Syncfusion.Drawing;

// Create a new PDF document
using (PdfDocument document = new PdfDocument())
{
    // Add a page
    PdfPage page = document.Pages.Add();

    // Create a text element
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
    PdfTextElement textElement = new PdfTextElement("Hello, Azure PDF!", font, PdfBrushes.Black);

    // Draw the text on the page
    textElement.Draw(page, new RectangleF(0, 0, page.GetClientSize().Width, page.GetClientSize().Height));

    // Save the PDF to a stream
    using (MemoryStream stream = new MemoryStream())
    {
        document.Save(stream);
        // Persist the stream to the desired location (for example, Azure Blob Storage)
        // For local testing, write to a file:
        File.WriteAllBytes("Output.pdf", stream.ToArray());
    }
}
```

### 4. Persist the output

Save the generated PDF to one of the following locations based on your Azure service:
* **Local file system** — for quick local testing in an Azure App Service.
* **Azure Blob Storage** — recommended for production; upload the stream using the [Azure Blob Storage client library](https://www.nuget.org/packages/Azure.Storage.Blobs/).
* **Return as a response** — for Azure Functions HTTP triggers, return the `MemoryStream` directly in the `HttpResponseData`.

## Supported Azure Services

The Syncfusion .NET PDF library works with the following Azure services.

### Azure App Service (Windows & Linux)

* **Supported runtimes:** .NET 8, .NET 9, .NET 10
* **Deployment:** Publish the ASP.NET Core Web App to Azure App Service using Visual Studio or the Azure CLI.
* **Storage tip:** Use **Azure Blob Storage** for persistent file output.

### Azure Functions

* **Supported runtimes:** .NET 8, .NET 9, .NET 10 (isolated worker model recommended)
* **Hosting plans:** Consumption, Premium, and Dedicated (App Service) plans
* **Trigger example:** Use an HTTP-triggered function to generate the PDF on demand and return it as a response or save it to Blob Storage.

### Azure Functions on AKS (Azure Kubernetes Service)

* **Supported runtimes:** .NET 8, .NET 9, .NET 10
* **Deployment:** Package the Azure Functions app as a container image and deploy it to an AKS-hosted Kubernetes cluster. Refer to the [Functions on Kubernetes](https://learn.microsoft.com/en-us/azure/azure-functions/functions-kubernetes-keda) documentation.
* **Storage tip:** Use **Azure Files** or **Azure Blob Storage** mounted to the pod for persistent output.

## Troubleshooting

* **File access errors on Azure App Service** — The file system is restricted to the app's home directory. Use a writable path such as `%HOME%\Output.pdf` or Azure Blob Storage.
* **Missing fonts in the rendered PDF** — Custom fonts must be deployed with the app or installed on the host. For Azure App Service, place font files in the `wwwroot/fonts` folder and register them with the application.
* **Memory stream issues in Azure Functions** — Always dispose of `MemoryStream` and use the **isolated worker model** for predictable resource cleanup.
* **NuGet restore failures in AKS** — Ensure the container image has access to the NuGet feed or that dependencies are pre-built into the image.

## See also

* [Create a PDF document in .NET](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Azure)
* [Syncfusion.Pdf.NetCore NuGet package](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)
* [Azure App Service documentation](https://learn.microsoft.com/en-us/azure/app-service/)
* [Azure Functions documentation](https://learn.microsoft.com/en-us/azure/azure-functions/)
* [Functions on Kubernetes with KEDA](https://learn.microsoft.com/en-us/azure/azure-functions/functions-kubernetes-keda)
