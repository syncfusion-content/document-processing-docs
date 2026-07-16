---
title: Create PDF document in Microsoft Azure | Syncfusion
description: Learn how to create a PDF document in Azure services effortlessly using Syncfusion .NET PDF library in C#.
platform: document-processing
control: PDF
documentation: UG
---

# Create a PDF File in Microsoft Azure

The [Syncfusion .NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, and edit PDF documents programmatically without requiring Adobe Acrobat. This guide demonstrates how to generate PDF documents in Azure cloud services using C# and .NET.

> **Note**: This guide assumes basic familiarity with Azure portal and .NET development. For comprehensive Azure fundamentals, refer to the [Microsoft Azure Learning Path](https://learn.microsoft.com/en-us/training/azure/).

## Prerequisites

| Item | Details |
| --- | --- |
| **Azure Subscription** | Active Microsoft Azure subscription (free tier eligible) |
| **Development Environment** | Visual Studio 2022 or Visual Studio Code with C# extension |
| **.NET Version** | .NET 6.0 or later (.NET 8.0 recommended) |
| **NuGet Package** | Syncfusion.Pdf.NET (latest version from NuGet.org) |
| **License** | Syncfusion license key (required for production deployments) |
| **Azure CLI** | Optional but recommended for deployment automation |

To include the .NET PDF library in your Azure project, refer to the [NuGet Package Requirements](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) documentation.

## Supported Azure Services

The Syncfusion PDF library supports multiple Azure hosting options, each with distinct benefits:

| Service | Scenario | Scaling | Cost Model |
|---------|----------|---------|-----------|
| **Azure App Service** | Traditional web apps, APIs, long-running processes | Manual or auto-scale | Pay per instance |
| **Azure Functions** | Event-triggered, on-demand PDF generation, periodic jobs | Automatic | Pay per execution |
| **Azure Container Instances (ACI)** | Containerized applications, microservices | Automatic | Pay per second |
| **Azure Kubernetes Service (AKS)** | Large-scale, multi-container deployments, enterprise workloads | Orchestrated | Pay per node |
| **Azure App Service for Containers** | Container-based web apps with managed scaling | Auto-scale | Pay per instance |

### Recommended Selection Guide

- **New to cloud? Choose Azure App Service** — Simplest setup with built-in scaling and monitoring
- **Serverless/on-demand? Choose Azure Functions** — Pay only for execution time, auto-scales to zero
- **Enterprise deployment? Choose AKS** — Full control, Kubernetes orchestration, advanced networking
- **Containerized apps? Choose Container Instances** — Quick deployment without infrastructure management

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│         Client Application                  │
│  (Web browser, mobile app, desktop app)     │
└──────────────────┬──────────────────────────┘
                   │ HTTP/HTTPS Request
                   ▼
┌─────────────────────────────────────────────┐
│      Azure Hosting Service                  │
│  (App Service | Functions | AKS)            │
│  ┌───────────────────────────────────────┐  │
│  │  ASP.NET Core Web API / Function      │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │ Syncfusion PDF Library          │  │  │
│  │  │ - Create PDF from data          │  │  │
│  │  │ - Apply styling & formatting    │  │  │
│  │  │ - Handle licensing              │  │  │
│  │  └─────────────────────────────────┘  │  │
│  └───────────────────────────────────────┘  │
│                    │                        │
│  ┌────────────────┼────────────────┐       │
│  ▼                ▼                ▼       │
│ Blob Storage   SQL Database    Memory      │
│ (PDF files)    (Metadata)      (Stream)    │
└──────────────────┬────────────────────────┘
                   │ PDF Output
                   ▼
         ┌──────────────────┐
         │  Client Downloads│
         │     PDF File     │
         └──────────────────┘
```

## Creating PDF Documents in Azure App Service

Azure App Service is the recommended starting point for most PDF generation workloads. This section provides a complete implementation guide.

### Step 1: Create an ASP.NET Core Web API Project Locally

Create a new ASP.NET Core Web API project in Visual Studio 2022 targeting .NET 6.0 or later:

```bash
dotnet new webapi -n PdfGenerationApp
cd PdfGenerationApp
```

### Step 2: Install Syncfusion.Pdf.NET NuGet Package

```bash
dotnet add package Syncfusion.Pdf.NET
```

Or use the NuGet Package Manager in Visual Studio to add the latest version of `Syncfusion.Pdf.NET`.

### Step 3: Register License Key in Program.cs

Add your Syncfusion license key registration at application startup:

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

using Syncfusion.Licensing;

// Register license before building services
SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

var builder = WebApplicationBuilder.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

var app = builder.Build();
app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.MapControllers();
app.Run();

{% endhighlight %}
{% endtabs %}

### Step 4: Create PDF Controller

Create a new controller file `PdfController.cs` with the following implementation:

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

namespace PdfGenerationApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PdfController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        /// <summary>
        /// Generate and return a PDF document with sample data
        /// </summary>
        [HttpGet("generate")]
        [Produces("application/pdf")]
        public IActionResult GeneratePdf()
        {
            try
            {
                using (MemoryStream stream = CreateSamplePdf())
                {
                    return File(stream.ToArray(), "application/pdf", "Sample.pdf");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = $"PDF generation failed: {ex.Message}" });
            }
        }

        private MemoryStream CreateSamplePdf()
        {
            // Generate sample data
            var data = Enumerable.Range(1, 5).Select(i => new
            {
                Date = DateTime.Now.AddDays(i),
                Value = new Random().Next(1, 100),
                Summary = Summaries[new Random().Next(Summaries.Length)]
            }).ToList();

            // Create PDF document
            using (PdfDocument document = new PdfDocument())
            {
                PdfPage page = document.Pages.Add();
                
                // Add title
                PdfStandardFont titleFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20, PdfFontStyle.Bold);
                PdfTextElement title = new PdfTextElement("Sample PDF Report", titleFont);
                title.Draw(page, new PointF(10, 10));

                // Create data grid
                PdfGrid grid = new PdfGrid();
                grid.DataSource = data;
                grid.ApplyBuiltinStyle(PdfGridBuiltinStyle.TableStyleMedium2);
                
                // Draw grid on page
                grid.Draw(page, new PointF(10, 50));

                // Save to stream
                MemoryStream stream = new MemoryStream();
                document.Save(stream);
                stream.Position = 0;
                return stream;
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

### Step 5: Publish to Azure App Service

**Option A: Using Visual Studio**

1. Right-click the project → Select **Publish**
2. Choose **Azure** as the target
3. Select **Azure App Service (Windows)** or **Azure App Service (Linux)**
4. Create a new App Service or select existing
5. Configure settings and publish

**Option B: Using Azure CLI**

```bash
# Login to Azure
az login

# Create resource group
az group create --name myResourceGroup --location eastus

# Create App Service plan
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1

# Create web app
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name myPdfApp

# Deploy application
dotnet publish -c Release
cd bin/Release/net6.0/publish
az webapp deployment source config-zip --resource-group myResourceGroup --name myPdfApp --src-path app.zip
```

### Step 6: Test the Deployed Application

Navigate to `https://<app-name>.azurewebsites.net/swagger/index.html` and test the `/api/pdf/generate` endpoint.

---

## Creating PDF Documents in Azure Functions

Azure Functions provide a serverless approach to PDF generation, ideal for event-triggered scenarios.

### Step 1: Create Azure Functions Project

```bash
func new --template "HTTP trigger" --name GeneratePdf
```

### Step 2: Install Dependencies

Add the Syncfusion.Pdf.NET package to your function project:

```bash
dotnet add package Syncfusion.Pdf.NET
```

### Step 3: Implement PDF Generation Function

Update the function code to generate PDFs:

{% tabs %}
{% highlight c# tabtitle="GeneratePdf.cs" %}

using System;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Syncfusion.Licensing;
using Syncfusion.Pdf;
using System.IO;

namespace Company.Functions
{
    public static class GeneratePdf
    {
        [Function("GeneratePdf")]
        public static HttpResponseData Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] 
            HttpRequestData req,
            FunctionContext executionContext)
        {
            var logger = executionContext.GetLogger("GeneratePdf");

            try
            {
                // Register license
                SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

                // Create PDF document
                using (PdfDocument document = new PdfDocument())
                {
                    PdfPage page = document.Pages.Add();
                    
                    using (PdfStandardFont font = new PdfStandardFont(Syncfusion.Pdf.PdfFontFamily.Helvetica, 20))
                    {
                        page.Graphics.DrawString("Azure Function Generated PDF", font, 
                            Syncfusion.Drawing.PdfBrushes.Black, new Syncfusion.Drawing.PointF(10, 10));
                    }

                    // Save to memory stream
                    MemoryStream stream = new MemoryStream();
                    document.Save(stream);
                    stream.Position = 0;

                    // Return PDF response
                    var response = req.CreateResponse(System.Net.HttpStatusCode.OK);
                    response.Headers.Add("Content-Type", "application/pdf");
                    response.Headers.Add("Content-Disposition", "attachment; filename=Report.pdf");
                    response.Body = stream;
                    return response;
                }
            }
            catch (Exception ex)
            {
                logger.LogError($"Error generating PDF: {ex.Message}");
                var response = req.CreateResponse(System.Net.HttpStatusCode.InternalServerError);
                response.WriteAsJsonAsync(new { error = ex.Message });
                return response;
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

### Step 4: Deploy Azure Function

```bash
func azure functionapp publish <FunctionAppName>
```

### Step 5: Test the Function

```bash
curl https://<function-name>.azurewebsites.net/api/GeneratePdf -v
```

---

## Creating PDF Documents in Azure Kubernetes Service (AKS)

For enterprise-scale deployments, AKS provides Kubernetes orchestration with full control.

### Step 1: Create Docker Container Image

Create a `Dockerfile` for your PDF generation application:

```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["PdfGenerationApp.csproj", "./"]
RUN dotnet restore "PdfGenerationApp.csproj"
COPY . .
RUN dotnet build "PdfGenerationApp.csproj" -c Release -o /app/build

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/build .
ENTRYPOINT ["dotnet", "PdfGenerationApp.dll"]
EXPOSE 80 443
```

### Step 2: Build and Push to Azure Container Registry

```bash
# Login to Azure Container Registry
az acr login --name <registry-name>

# Build image
az acr build --registry <registry-name> --image pdf-app:latest .

# Get image URI
az acr repository show --name <registry-name> --repository pdf-app --query "loginServer"
```

### Step 3: Deploy to AKS

Create a Kubernetes deployment manifest `pdf-deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pdf-generator
spec:
  replicas: 3
  selector:
    matchLabels:
      app: pdf-generator
  template:
    metadata:
      labels:
        app: pdf-generator
    spec:
      containers:
      - name: pdf-app
        image: <registry-name>.azurecr.io/pdf-app:latest
        ports:
        - containerPort: 80
        env:
        - name: SYNCFUSION_LICENSE
          valueFrom:
            secretKeyRef:
              name: syncfusion-secret
              key: license-key
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: pdf-service
spec:
  type: LoadBalancer
  selector:
    app: pdf-generator
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
```

Deploy to AKS:

```bash
# Create secret for license
kubectl create secret generic syncfusion-secret --from-literal=license-key='YOUR_LICENSE_KEY'

# Deploy application
kubectl apply -f pdf-deployment.yaml

# Verify deployment
kubectl get pods
kubectl get svc
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **License Key Not Registered** | Ensure `SyncfusionLicenseProvider.RegisterLicense()` is called before any PDF operations. For Azure Functions and AKS, use environment variables or Azure Key Vault to securely store license keys. Verify the license key is active and not expired in the Syncfusion portal. |
| **Syncfusion.Pdf.NET Package Not Found** | Install the latest version from NuGet: `dotnet add package Syncfusion.Pdf.NET`. Verify your .csproj targets .NET 6.0 or later. If using older .NET Framework, use `Syncfusion.Pdf.WinForms` instead. |
| **"Cannot connect to Blob Storage"** | Configure connection strings in Azure Key Vault or appsettings.json. For managed identity authentication, enable System Assigned Identity on the App Service/Function and grant Storage Blob Data Contributor role. |
| **PDF Generation Timeout in Azure Functions** | Default timeout is 5 minutes. For large PDFs, increase function timeout in `host.json`: `"functionTimeout": "00:10:00"`. Consider using Durable Functions for very large operations. Use streaming instead of buffering entire document. |
| **Memory Issues with Large Reports** | Stream PDFs directly instead of buffering. Use `PdfDocument` with streaming: `document.Save(stream)` instead of loading entire document into memory. For AKS, increase pod memory limits in deployment manifest. |
| **Docker Image Build Fails** | Ensure base image matches architecture (amd64 for most Azure services). Verify all NuGet packages are available during build. Use multi-stage builds to reduce final image size. Check Docker build output for specific errors. |
| **CORS Errors in Web App** | Add CORS policy in Program.cs: `builder.Services.AddCors()` and `app.UseCors()`. For Azure Functions, use Azure API Management or a middleware solution. Verify Origin header matches allowed domains. |
| **"404 Not Found" on Azure App Service** | Verify controller route matches your request URL (routes are case-sensitive). Ensure `app.MapControllers()` is called in Program.cs. Check application settings: navigate to Azure portal → your app → Configuration. |
| **PDF File Permission Denied (Linux)** | Ensure file paths use forward slashes `/` and the running identity has write permissions. For App Service on Linux, write to `/tmp` or `/home`. For AKS, mount PersistentVolume if persistent storage needed. |
| **Deployment Fails with "Invalid Credentials"** | Verify Azure login: `az login`. Check Azure subscription quota limits. Ensure resource group exists. For AKS, verify cluster credentials: `az aks get-credentials --resource-group <group> --name <cluster>`. |
| **"Out of Memory" in AKS Pods** | Check actual memory usage: `kubectl top pods`. Increase pod limits in deployment yaml. Implement memory-efficient PDF creation: use streaming, avoid loading entire document into memory, clean up resources with `using` statements. |

## Next Steps

Explore advanced PDF capabilities for Azure deployments:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/file-formats/pdf/working-with-documents/merge-documents)** — Combine reports and documents on-demand in cloud
- **[Split PDF Documents](https://help.syncfusion.com/file-formats/pdf/split-document)** — Extract specific pages or create page ranges in serverless functions
- **[Add Watermarks & Stamps](https://help.syncfusion.com/file-formats/pdf/working-with-pages/add-watermark)** — Brand PDFs with company logos and confidentiality markers
- **[Create Interactive Forms](https://help.syncfusion.com/file-formats/pdf/working-with-forms/overview)** — Build fillable PDF forms for data collection
- **[Digital Signatures](https://help.syncfusion.com/file-formats/pdf/working-with-forms/create-digital-signatures)** — Sign PDFs programmatically for compliance and authenticity
- **[PDF Encryption & Security](https://help.syncfusion.com/file-formats/pdf/working-with-forms/encryption)** — Protect sensitive documents with passwords and permissions
- **[Advanced Formatting](https://help.syncfusion.com/file-formats/pdf/working-with-tables)** — Generate complex tables, charts, and multi-column layouts

### Azure Integration Patterns
- **[Store PDFs in Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)** — Use managed identity for secure, scalable storage
- **[Azure Storage Queue Triggers](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue)** — Trigger PDF generation from storage events
- **[Azure Event Grid Integration](https://learn.microsoft.com/en-us/azure/event-grid/overview)** — Event-driven PDF workflows across Azure services
- **[Azure Service Bus Messaging](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview)** — Reliable PDF generation queue with retry logic
- **[Cosmos DB Integration](https://learn.microsoft.com/en-us/azure/cosmos-db/introduction)** — Query data and generate PDFs from globally distributed data
- **[Azure API Management](https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts)** — Secure, throttle, and monitor PDF generation APIs

### Deployment & Operations
- **[Azure Monitor & Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)** — Track PDF generation performance and errors
- **[Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)** — Securely manage Syncfusion license keys and secrets
- **[Auto-scaling Policies](https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up)** — Scale App Service and Functions based on PDF demand
- **[Continuous Integration/Deployment (CI/CD)](https://learn.microsoft.com/en-us/azure/devops/pipelines/overview)** — Automate PDF app deployment with Azure Pipelines
- **[Disaster Recovery Planning](https://learn.microsoft.com/en-us/azure/architecture/resiliency/)** — Implement failover and backup strategies

---

## Resources

**Sample Projects:**
- [Syncfusion PDF Examples on GitHub](https://github.com/SyncfusionExamples/PDF-Examples)
- [Azure App Service Samples](https://github.com/Azure-Samples/app-service-samples)
- [Azure Functions Samples](https://github.com/Azure-Samples/azure-functions-samples)

**Documentation:**
- [Syncfusion .NET PDF Library Documentation](https://help.syncfusion.com/file-formats/pdf/)
- [Microsoft Azure Documentation](https://learn.microsoft.com/en-us/azure/)
- [.NET Documentation](https://learn.microsoft.com/en-us/dotnet/)

**Try It Out:**
- [Syncfusion PDF Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)
- [Azure Free Account](https://azure.microsoft.com/en-us/free/)
- [Azure Functions Free Tier](https://azure.microsoft.com/en-us/services/functions/)


