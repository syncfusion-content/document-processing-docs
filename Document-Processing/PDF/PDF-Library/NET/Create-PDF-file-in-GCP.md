---
title:  Create or Generate PDF document in GCP | Syncfusion
description: Learn how to create or generate a PDF file in the Google Cloud Platform (GCP) using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat.
platform: document-processing
control: PDF
documentation: UG
keywords: gcp os save pdf, gcp os load pdf, c# save pdf, c# load pdf
---
# Create a PDF File in Google Cloud Platform (GCP)

The [.NET Core PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, edit, and convert PDF documents programmatically in Google Cloud Platform without the dependency of Adobe Acrobat. This guide demonstrates how to generate and process PDF files in GCP using App Engine, a managed platform-as-a-service for deploying ASP.NET Core applications.

> **Note**: If this is your first time with Google Cloud Platform, review the [official GCP documentation](https://cloud.google.com/docs). This guide assumes familiarity with creating GCP projects and deploying .NET applications. For serverless PDF generation, see [Cloud Functions alternative](#alternative-gcp-services).

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **IDE** | Visual Studio 2022 or Visual Studio Code |
| **.NET Version** | .NET 6.0+, .NET 7.0, or .NET 8.0 LTS |
| **GCP Service** | App Engine with .NET runtime support |
| **NuGet Package** | Syncfusion.Pdf.NET v16.2.0.x or later |
| **GCP Account** | Active Google Cloud account with billing enabled |
| **GCP Tools** | Google Cloud SDK with `gcloud` CLI tool installed and configured |
| **Licensing** | Syncfusion license key (required v16.2.0.x+) |
| **IAM Permissions** | App Engine Creator, Service Account User roles for deployment |

> **Tip**: GCP offers a [free tier](https://cloud.google.com/free) with 28 days of $300 credit and always-free App Engine quota (28 instance hours per day).

## License Registration

Starting with Syncfusion v16.2.0.x, a license key is required for PDF operations. Register your license in the `Program.cs` file before building services:

```csharp
// In Program.cs - add this before var app = builder.Build();
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

> **Important**: Obtain a free community license from [Syncfusion Community License](https://help.syncfusion.com/common/essential-studio/licensing/community-license). For production GCP deployments, store the license key in [Secret Manager](https://cloud.google.com/secret-manager), never hardcode in source. Refer to [licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details.

## GCP Service Options

This guide uses **Google Cloud App Engine** as the primary platform. Choose based on your requirements:

| Service | Use Case | Scaling | Cost |
|---------|----------|---------|------|
| **App Engine (Recommended)** | ASP.NET Core web applications with PDF generation | Automatic | Pay-per-instance |
| **Cloud Functions** | Event-driven PDF generation (upload triggers) | Per-request | Pay-per-invocation |
| **Cloud Run** | Containerized PDF services with custom scaling | Per-request | Pay-per-request |
| **Compute Engine** | Full control, self-managed infrastructure | Manual | Pay-per-hour |

This guide focuses on **App Engine** for its managed experience and native .NET support. For serverless alternatives, see [Cloud Functions](#cloud-functions-alternative).

## Setting Up Your GCP Project

**Step 1**: Create a new GCP project:
- Navigate to [Google Cloud Console](https://console.cloud.google.com/)
- Click **Select a Project** → **NEW PROJECT**
- Enter project name (e.g., `pdf-generation-service`) and click **CREATE**
- Wait for the project to be created, then select it

**Step 2**: Enable required APIs:
- In the Cloud Console, navigate to **APIs & Services** → **Library**
- Search for and enable these APIs:
  - **Google App Engine Admin API**
  - **Cloud Build API**
  - **App Engine flexible environment API**
- Each API takes 1-2 minutes to enable

**Step 3**: Create a service account for deployment:
- Navigate to **APIs & Services** → **Credentials**
- Click **Create Credentials** → **Service Account**
- Enter service account name (e.g., `app-engine-deployer`) and click **CREATE AND CONTINUE**
- Grant roles: Select **App Engine Admin** and **Service Account User**, then click **CONTINUE**
- Click **DONE** to complete service account creation
- Download the JSON key file by clicking the service account name → **Keys** tab → **Add Key** → **Create new key** → **JSON** → **CREATE**

**Step 4**: Configure GCP CLI credentials:
- Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) if not already installed
- Run `gcloud init` and follow the prompts to authenticate
- Set your project: `gcloud config set project PROJECT_ID` (replace PROJECT_ID with your actual project ID)
- Set the path to your service account key: `gcloud auth activate-service-account --key-file=path/to/key.json`

## Creating an ASP.NET Core Project for GCP App Engine

**Step 5**: Create a new ASP.NET Core project:
```bash
dotnet new webapp -n PDFGenerationService
cd PDFGenerationService
```

**Step 6**: Install the Syncfusion.Pdf.NET NuGet package:
```bash
dotnet add package Syncfusion.Pdf.NET
```

**Step 7**: Create `app.yaml` configuration file in the project root to specify App Engine deployment settings:

{% tabs %}

{% highlight yaml tabtitle="app.yaml" %}

runtime: dotnet
env: flex

env_variables:
  ASPNETCORE_ENVIRONMENT: "Production"

# Specify scaling settings
automatic_scaling:
  min_instances: 1
  max_instances: 5
  cpu_utilization:
    target_utilization: 0.75

# Adjust resources for PDF processing (memory-intensive)
resources:
  memory_gb: 2
  cpu: 1

{% endhighlight %}

{% endtabs %}

> **Note**: The `app.yaml` file tells GCP how to deploy your application. Adjust `memory_gb` (default 0.5, increased to 2 for PDF operations) and `max_instances` based on expected load.

## Implementing PDF Generation

**Step 8**: Update `Program.cs` to register the Syncfusion license and configure services:

{% tabs %}

{% highlight c# tabtitle="C#" %}

var builder = WebApplication.CreateBuilder(args);

// Register Syncfusion license (required for v16.2.0.x+)
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

// Add services to the container
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IWebHostEnvironment>();

var app = builder.Build();

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

{% endhighlight %}

{% endtabs %}

**Step 9**: Add the required namespaces and create a `PdfController.cs` file:

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using Syncfusion.Drawing;

{% endhighlight %}

{% endtabs %}

**Step 10**: Implement the PDF generation method in `PdfController.cs`:

{% tabs %}

{% highlight c# tabtitle="C#" %}

[ApiController]
[Route("api/[controller]")]
public class PdfController : ControllerBase
{
    private readonly IWebHostEnvironment _hostEnvironment;
    private readonly ILogger<PdfController> _logger;

    public PdfController(IWebHostEnvironment hostEnvironment, ILogger<PdfController> logger)
    {
        _hostEnvironment = hostEnvironment;
        _logger = logger;
    }

    [HttpPost("generate")]
    public IActionResult GeneratePDF()
    {
        try
        {
            _logger.LogInformation("Starting PDF generation");

            // Create a new PDF document
            using (PdfDocument document = new PdfDocument())
            {
                // Add a new page
                PdfPage page = document.Pages.Add();
                PdfGraphics graphics = page.Graphics;
                PdfFont titleFont = new PdfStandardFont(PdfFontFamily.Helvetica, 20, PdfFontStyle.Bold);
                PdfFont bodyFont = new PdfStandardFont(PdfFontFamily.Helvetica, 12);

                // Add title
                graphics.DrawString("Product Inventory Report", titleFont, PdfBrushes.Black, new PointF(50, 50));

                // Create product data table
                List<object> productData = new List<object>
                {
                    new { Product_ID = "1001", Product_Name = "Bicycle", Price = "$10,000", Stock = "15" },
                    new { Product_ID = "1002", Product_Name = "Head Light", Price = "$3,000", Stock = "25" },
                    new { Product_ID = "1003", Product_Name = "Brake Wire", Price = "$1,500", Stock = "50" },
                    new { Product_ID = "1004", Product_Name = "Pedal Set", Price = "$2,000", Stock = "30" },
                    new { Product_ID = "1005", Product_Name = "Chain", Price = "$500", Stock = "100" }
                };

                // Create and format PDF grid (table)
                PdfGrid pdfGrid = new PdfGrid();
                pdfGrid.DataSource = productData;
                pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);

                // Draw table on the page
                PdfGridLayoutFormat layoutFormat = new PdfGridLayoutFormat();
                layoutFormat.Layout = PdfLayoutType.Paginate;
                pdfGrid.Draw(page, new RectangleF(50, 100, page.ClientSize.Width - 100, 0), layoutFormat);

                // Add footer with timestamp
                graphics.DrawString($"Generated on: {DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} UTC", bodyFont, PdfBrushes.Gray, 
                    new PointF(50, page.ClientSize.Height - 50));

                // Save to memory stream
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    document.Save(memoryStream);
                    memoryStream.Position = 0;
                    _logger.LogInformation($"PDF generated successfully. Size: {memoryStream.Length} bytes");
                    return File(memoryStream.ToArray(), "application/pdf", "ProductReport.pdf");
                }
            }
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error generating PDF: {ex.Message}");
            return StatusCode(500, new { error = $"PDF generation failed: {ex.Message}" });
        }
    }
}

{% endhighlight %}

{% endtabs %}

> **Important Notes**:
> - Register the Syncfusion license in `Program.cs` BEFORE creating any PDF objects
> - Use dependency injection for `IWebHostEnvironment` and `ILogger<T>` for logging
> - All streams are wrapped in `using` statements for proper resource disposal in GCP environment
> - Error responses include detailed logging for GCP Cloud Logging integration
> - The `[HttpPost("generate")]` endpoint accepts POST requests to generate PDFs

## Deploying to Google Cloud App Engine

**Step 11**: Test your application locally before deployment:
```bash
dotnet run
```
The application will run at `http://localhost:5000`. Navigate to `http://localhost:5000/api/pdf/generate` to test PDF generation.

**Step 12**: Deploy to Google Cloud App Engine using the gcloud CLI:
```bash
gcloud app deploy
```

The deployment process will:
- Build your application
- Upload to Google Cloud Storage
- Deploy to App Engine
- Show your application URL (e.g., `https://PROJECT_ID.appspot.com`)

**Step 13**: Verify deployment status:
```bash
gcloud app browse
```
This opens your deployed application in the default browser.

**Step 14**: Monitor deployment logs:
```bash
gcloud app logs read -n 50
```
View application logs in [Cloud Console](https://console.cloud.google.com/appengine/services) or use [Cloud Logging](https://console.cloud.google.com/logs):
- Navigate to **Cloud Logging** → **Logs Explorer**
- Filter by resource type: **App Engine**
- Search for errors or performance issues

## Testing the Deployed Application

**Step 15**: Test the deployed PDF generation endpoint. Use curl:
```bash
curl -X POST https://PROJECT_ID.appspot.com/api/pdf/generate -o output.pdf
```

Or use a tool like [Postman](https://www.postman.com/):
1. Create a new POST request to `https://PROJECT_ID.appspot.com/api/pdf/generate`
2. Send the request
3. Download the returned PDF file

**Step 16**: Verify the generated PDF:
- The downloaded file should be named `ProductReport.pdf`
- Should contain the product table with 5 sample items
- Should include a timestamp footer with generation date/time UTC
- File size should be 5-10 KB depending on content

## Expected Output

When you execute the PDF generation endpoint, you will receive:
- A downloadable PDF file named `ProductReport.pdf`
- Contains a formatted product inventory table with columns: Product_ID, Product_Name, Price, Stock
- Title: "Product Inventory Report"
- Professional table styling (GridTable4Accent3)
- Footer with generation timestamp in UTC
- Response status: 200 OK with binary PDF data
- Error responses include JSON error message and status 500

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **License Key Not Registered** | Verify `SyncfusionLicenseProvider.RegisterLicense()` is called in `Program.cs` BEFORE service building. Check that your license key is valid and matches your .NET version. |
| **"APIs not enabled" error during deployment** | In Google Cloud Console, navigate to **APIs & Services** → **Library**. Search for and enable: Google App Engine Admin API, Cloud Build API, App Engine flexible environment API. Wait 1-2 minutes for activation. |
| **Syncfusion.Pdf.NET Package Not Found** | Run `dotnet add package Syncfusion.Pdf.NET` in your project directory. Verify v16.2.0.x or later is installed: `dotnet list package`. |
| **"Permission denied" when deploying** | Verify your GCP service account has **App Engine Admin** and **Service Account User** roles. Check: `gcloud projects get-iam-policy PROJECT_ID`. |
| **App Engine deployment timeout** | Increase timeout: Run `gcloud config set app/cloud_build_timeout 1800` to extend to 30 minutes. Check Cloud Build logs in **Cloud Console** → **Cloud Build** for build errors. |
| **Memory limit exceeded (OutOfMemoryException)** | Increase memory in `app.yaml`: Change `memory_gb` from 2 to 4 (or higher). Monitor: **Cloud Console** → **App Engine** → **Instances** tab for memory usage. Large PDFs need more memory. |
| **HTTP 500 error after deployment** | Check logs: `gcloud app logs read -n 100` or use **Cloud Logging** console. Verify Syncfusion license key is correct for production environment. Check for missing or incorrect appsettings in `Program.cs`. |
| **"Could not resolve NuGet package" during build** | Ensure `dotnet restore` completes locally before deploying. Check that nuget.org is accessible. Clear NuGet cache: `dotnet nuget locals all --clear` and retry. |
| **Licensing error after 30 days** | Development license keys expire. For production, use a production license key from Syncfusion. Refer to [licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview). |
| **Slow PDF generation on first request** | App Engine "cold starts" (~5-10s) are normal. Subsequent requests are faster (~100ms). Increase `min_instances` in `app.yaml` to keep instances warm, but this increases costs. |

## Next Steps

Explore advanced PDF capabilities and GCP integration patterns:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/file-formats/pdf/working-with-documents/merge-documents)** — Combine multiple PDF documents into a single file
- **[Split PDF Documents](https://help.syncfusion.com/file-formats/pdf/split-document)** — Extract specific pages from PDF files
- **[Add Watermarks](https://help.syncfusion.com/file-formats/pdf/working-with-pages/add-watermark)** — Add company logos or confidentiality markers
- **[Create Interactive Forms](https://help.syncfusion.com/file-formats/pdf/working-with-forms/overview)** — Build fillable PDF forms for data collection
- **[Digital Signatures](https://help.syncfusion.com/file-formats/pdf/working-with-forms/create-digital-signatures)** — Sign PDFs programmatically for compliance
- **[PDF Encryption](https://help.syncfusion.com/file-formats/pdf/working-with-security/encrypt-pdf)** — Protect PDFs with passwords and permissions

### GCP Integration Patterns
- **[Cloud Storage Integration](https://cloud.google.com/storage/docs)** — Store generated PDFs in GCS buckets; reference in downloads
- **[Cloud Pub/Sub Event Processing](https://cloud.google.com/pubsub)** — Process PDF generation requests from message queues
- **[Cloud Tasks Scheduling](https://cloud.google.com/tasks)** — Schedule batch PDF generation jobs
- **[Firestore Database](https://cloud.google.com/firestore)** — Store PDF metadata and generation history
- **[Cloud CDN](https://cloud.google.com/cdn)** — Cache and deliver generated PDFs globally with low latency
- **[IAM Access Control](https://cloud.google.com/iam)** — Restrict PDF generation endpoints to authenticated users

### Cloud Functions Alternative

For **serverless, event-driven PDF generation** (pay-per-invocation, no cold start), use [Google Cloud Functions](https://cloud.google.com/functions) instead:

```bash
# Deploy a Cloud Function for PDF generation
gcloud functions deploy GeneratePDF \
  --runtime dotnet8 \
  --trigger-http \
  --allow-unauthenticated
```

Use Cloud Functions for:
- S3-triggered PDF generation (when files are uploaded)
- Scheduled batch jobs (Pub/Sub scheduled messages)
- Microservice architecture (decomposed workloads)
- Cost optimization (pay only for invocations, no idle instance costs)

### Deployment and Operations
- **[App Engine Scaling](https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)** — Configure min/max instances and CPU utilization thresholds
- **[Cloud Monitoring](https://cloud.google.com/monitoring)** — Set up alerts for error rates, latency, memory usage
- **[Cloud Profiler](https://cloud.google.com/profiler)** — Identify performance bottlenecks in PDF generation
- **[Error Reporting](https://cloud.google.com/error-reporting)** — Automatically aggregate and alert on exceptions
- **[GCP Cost Management](https://cloud.google.com/cost-management)** — Monitor App Engine costs; use budget alerts
- **[CI/CD with Cloud Build](https://cloud.google.com/build)** — Automate testing and deployment on code commits

## Resources

**Sample Code:**
- [Complete GCP App Engine example](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/GCP/AppEngine)
- [GCP Cloud Functions example](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/GCP/CloudFunctions)

**Documentation:**
- [Syncfusion .NET PDF Library Guide](https://help.syncfusion.com/file-formats/pdf/)
- [Google Cloud App Engine for .NET](https://cloud.google.com/appengine/docs/flexible/dotnet)
- [Deploying ASP.NET Core to App Engine](https://cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [Google Cloud SDK Documentation](https://cloud.google.com/sdk/docs)
- [Cloud Console](https://console.cloud.google.com/) — Manage GCP resources
- [Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)

**Try It Out:**
- [Syncfusion PDF Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)
- [Explore Syncfusion PDF Features](https://www.syncfusion.com/document-sdk/net-pdf-library)
- [GCP Free Tier](https://cloud.google.com/free) — $300 credit + always-free App Engine quota
- [Cloud Shell (Browser-based terminal)](https://cloud.google.com/shell) — No local gcloud CLI installation needed