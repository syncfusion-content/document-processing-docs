---
title: Create or Generate PDF file in Google App Engine | Syncfusion
description: Learn how to create or generate a PDF file in Google App Engine using Syncfusion .NET PDF library without the dependency of Adobe Acrobat.
platform: document-processing
control: PDF
documentation: UG
keywords: google app engine save pdf, app engine load pdf, c# save pdf, c# load pdf, app engine pdf generation, aspnet core pdf
---

# Create a PDF File in Google App Engine

The [.NET Core PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, edit, and convert PDF documents programmatically in Google App Engine without the dependency of Adobe Acrobat. This guide demonstrates how to generate and process PDF files using ASP.NET Core applications deployed on Google App Engine's managed platform.

> **Note**: This guide uses Google Cloud Shell for deployment. If you are new to Google Cloud Platform, refer to the [GCP documentation](https://cloud.google.com/docs). This section assumes you have a GCP account and basic familiarity with cloud deployments.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **IDE** | Visual Studio 2022 or Visual Studio Code |
| **.NET Version** | .NET 6.0+, .NET 7.0, or .NET 8.0 LTS |
| **.NET SDK** | .NET 8.0 SDK or later (for local development) |
| **NuGet Package** | Syncfusion.Pdf.NET v16.2.0.x or later |
| **GCP Account** | Active Google Cloud account with billing enabled |
| **GCP Project** | Created GCP project with App Engine API enabled |
| **Docker** | Docker Desktop installed locally (optional; can use Cloud Shell editor) |
| **Licensing** | Syncfusion license key (required v16.2.0.x+) |

> **Tip**: GCP offers a [free tier](https://cloud.google.com/free) with 28 days of $300 credit and always-free App Engine flexible environment quota.

## License Registration

Starting with Syncfusion v16.2.0.x, a license key is required for PDF operations. Register your license in the `Program.cs` file before building services:

```csharp
// In Program.cs - add this before var app = builder.Build();
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

> **Important**: Obtain a free community license from [Syncfusion Community License](https://help.syncfusion.com/common/essential-studio/licensing/community-license). For production GCP deployments, store the license key in [Secret Manager](https://cloud.google.com/secret-manager), never hardcode in source. Refer to [licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details.

## Setting Up Google Cloud Platform (GCP)

**Step 1**: Create a new GCP project (if not already created):
- Navigate to [Google Cloud Console](https://console.cloud.google.com/)
- Click **Select a Project** → **NEW PROJECT**
- Enter project name (e.g., `pdf-generation-app`) and click **CREATE**
- Select the project after creation

**Step 2**: Enable required APIs:
- In the Cloud Console, navigate to **APIs & Services** → **Library**
- Search for and enable: **Google App Engine Admin API** and **Cloud Build API**
- Each API takes 1-2 minutes to enable

**Step 3**: Open the **Google Cloud Console** and click the **Activate Cloud Shell** button.

![Activate Cloud Shell](GettingStarted_images/Google_Cloud_Console.png)

**Step 4**: Click the **Cloud Shell Editor** button to view the workspace.

![Open Editor in Cloud Shell](GettingStarted_images/Cloud_Shell.png)

**Step 5**: In the Cloud Shell Terminal, run the following command to confirm authentication:

```bash
gcloud auth list
```

![Authentication for App Engine](GettingStarted_images/Authorize_Command.png)

**Step 6**: If prompted, click the **Authorize** button to grant permissions.

![Click Authorize button](GettingStarted_images/Authorize_Button.png)

## Creating an ASP.NET Core Project for App Engine

**Step 7**: Open Visual Studio 2022 and create a new ASP.NET Core Web App (Model-View-Controller) project:
- Click **Create a new project** → Search for "ASP.NET Core Web App (Model-View-Controller)"
- Select the template and click **Next**

![Create ASP.NET Core Web application in Visual Studio](GettingStarted_images/Create-Project.png)

**Step 8**: Configure your project:
- Project name: `PDFGenerationApp` (or your preferred name)
- Location: Choose a local directory
- Click **Next**

![Configure ASP.NET Core Web application](GettingStarted_images/Project-Name.png)

**Step 9**: Select the target framework (**.NET 8.0** recommended) and click **Create**.

![Select framework for ASP.NET Core](GettingStarted_images/Additional-Information.png)

**Step 10**: Install the Syncfusion.Pdf.NET NuGet package:
```bash
dotnet add package Syncfusion.Pdf.NET
```

Or use Package Manager UI:
- Tools → NuGet Package Manager → Package Manager Console
- Run: `Install-Package Syncfusion.Pdf.NET`

![Install Syncfusion.Pdf.Net.Core NuGet package](GettingStarted_images/Google-NuGet-Package.png)

**Step 11**: Update `Program.cs` to register the Syncfusion license:

{% tabs %}

{% highlight c# tabtitle="Program.cs" %}

var builder = WebApplication.CreateBuilder(args);

// Register Syncfusion license (required for v16.2.0.x+)
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IWebHostEnvironment>();

var app = builder.Build();

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

**Step 12**: Add required namespaces to `HomeController.cs`:

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

**Step 13**: In `Index.cshtml`, add a button to trigger PDF generation:

{% tabs %}

{% highlight html tabtitle="CSHTML" %}

@{
    Html.BeginForm("CreateDocument", "Home", FormMethod.Post);
    {
        <div>
            <input type="submit" value="Create PDF Document" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}

{% endtabs %}

> **Note**: Use `FormMethod.Post` for operations that generate and download files, not GET. This is the correct HTTP method for file downloads.

**Step 14**: Add the PDF generation controller method to `HomeController.cs`:

{% tabs %}

{% highlight c# tabtitle="C#" %}

[HttpPost]
public IActionResult CreateDocument()
{
    try
    {
        string inputPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Data", "Input.pdf");
        
        // Verify input file exists
        if (!System.IO.File.Exists(inputPath))
        {
            ViewBag.Message = $"Error: Input PDF file not found at {inputPath}";
            return View("Index");
        }

        // Load input PDF with proper resource disposal
        using (FileStream fileStream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
        {
            using (PdfLoadedDocument document = new PdfLoadedDocument(fileStream))
            {
                // Load the first page and get graphics
                PdfLoadedPage loadedPage = document.Pages[0] as PdfLoadedPage;
                PdfGraphics graphics = loadedPage.Graphics;

                // Create product data
                List<object> productData = new List<object>
                {
                    new { Product_ID = "1001", Product_Name = "Bicycle", Price = "$10,000" },
                    new { Product_ID = "1002", Product_Name = "Head Light", Price = "$3,000" },
                    new { Product_ID = "1003", Product_Name = "Brake Wire", Price = "$1,500" },
                    new { Product_ID = "1004", Product_Name = "Pedal Set", Price = "$2,000" },
                    new { Product_ID = "1005", Product_Name = "Chain", Price = "$500" }
                };

                // Create and format PDF grid (table)
                PdfGrid pdfGrid = new PdfGrid();
                pdfGrid.DataSource = productData;
                pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);

                // Draw grid to the page
                pdfGrid.Draw(graphics, new RectangleF(40, 400, loadedPage.Size.Width - 80, 0));

                // Save to memory stream with proper disposal
                using (MemoryStream stream = new MemoryStream())
                {
                    document.Save(stream);
                    stream.Position = 0;
                    return File(stream.ToArray(), "application/pdf", "ProductReport.pdf");
                }
            }
        }
    }
    catch (Exception ex)
    {
        ViewBag.Message = $"Error generating PDF: {ex.Message}";
        return View("Index");
    }
}

{% endhighlight %}

{% endtabs %}

> **Important Notes**:
> - All streams and documents are wrapped in `using` statements for guaranteed resource disposal
> - The `[HttpPost]` attribute matches the form method from Step 13
> - File existence validation prevents crashes if Input.pdf is missing
> - Error handling with ViewBag ensures graceful failure with user-friendly messages
> - Input PDF must be placed at `wwwroot/Data/Input.pdf` in your project

**Step 15**: Create the `wwwroot/Data/` folder in your project:
- Right-click your project → Add → New Folder → Name it `wwwroot/Data`
- Add or create an `Input.pdf` file in this folder
- Right-click the PDF → Properties → Set **Copy to Output Directory** to "Copy if newer"

## Uploading Project to Google Cloud Shell

**Step 16**: Open the **Cloud Shell Editor**:
- In Google Cloud Console, click **Activate Cloud Shell**
- Click the **Editor** button to open Cloud Shell Editor

![Cloud Shell editor](GettingStarted_images/Cloud_Shell_Editor.png)

**Step 17**: Upload your local project to Cloud Shell:
- Drag and drop your `PDFGenerationApp` folder into the Cloud Shell workspace
- Alternatively, use Git: `git clone <repository-url>`

> **Note**: If you developed locally, upload the entire project directory. The `bin` and `obj` folders will be regenerated during build.

![Add Project](GettingStarted_images/Add_Project.png)

**Step 18**: In the Cloud Shell Terminal, verify the project structure:
```bash
ls
```

![ls command](GettingStarted_images/ls_Command.png)

**Step 19**: Navigate to your project directory:
```bash
cd PDFGenerationApp
```

![Project Folder](GettingStarted_images/Project_Folder.png)

## Testing Locally in Cloud Shell

**Step 20**: Run the application locally in Cloud Shell to verify it works:
```bash
dotnet run --urls=http://localhost:8080
```

![Run Application](GettingStarted_images/Run_Application.png)

**Step 21**: Verify the application is running by clicking **Web Preview** → **Preview on port 8080**:

![Preview on Port](GettingStarted_images/Preview.png)

**Step 22**: You should see the ASP.NET Core application homepage with the "Create PDF Document" button. Click the button to test PDF generation.

![Output Button](GettingStarted_images/Console_Page.png)

**Step 23**: Stop the local test server by pressing **Ctrl+C** in the Cloud Shell Terminal:

![Stop Application](GettingStarted_images/Run_View.png)

## Publishing and Configuring for Deployment

**Step 24**: Publish the application in Release configuration:
```bash
dotnet publish -c Release
```

![Release](GettingStarted_images/Publish_GCP.png)

**Step 25**: Navigate to the publish output directory:
```bash
cd bin/Release/net8.0/publish/
```

![Publish Folder](GettingStarted_images/Publish_Folder.png)

**Step 26**: Create `app.yaml` configuration file for App Engine deployment in the publish folder:

Create a file named `app.yaml` with the following contents:

{% tabs %}

{% highlight yaml tabtitle="app.yaml" %}

env: flex
runtime: custom

# Scaling configuration for App Engine flexible environment
automatic_scaling:
  min_instances: 1
  max_instances: 5
  cpu_utilization:
    target_utilization: 0.75

# Memory and CPU resources for PDF processing
resources:
  memory_gb: 2
  cpu: 1

{% endhighlight %}

{% endtabs %}

> **Note**: The `app.yaml` file configures App Engine deployment. Set `memory_gb: 2` for PDF operations (default 0.5 is too low).

![app.yaml file](GettingStarted_images/App_yaml.png)

**Step 27**: Create `Dockerfile` in the publish folder with the following contents:

{% tabs %}

{% highlight dockerfile tabtitle="Dockerfile" %}

FROM mcr.microsoft.com/dotnet/aspnet:8.0
RUN apt-get update -y && apt-get install -y libfontconfig
ADD / /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://*:8080
WORKDIR /app
ENTRYPOINT ["dotnet", "PDFGenerationApp.dll"]

{% endhighlight %}

{% endtabs %}

> **Important Notes**:
> - `libfontconfig` is required for PDF font rendering in Linux containers
> - Replace `PDFGenerationApp.dll` with your actual project DLL name
> - The Docker image is based on .NET 8.0 ASP.NET Core runtime
> - Port 8080 must match the port in `app.yaml`

![Dockerfile](GettingStarted_images/Docker_File.png)

**Step 28**: Verify both files are created in the publish folder:
```bash
ls -la *.yaml *.dockerfile
```

![Docker and app.yaml files](GettingStarted_images/Docker.png)

## Deploying to Google App Engine

**Step 29**: Deploy your application to Google App Engine. In the publish folder, run:
```bash
gcloud app deploy --version v0
```

This command will:
1. Build a Docker image from the Dockerfile
2. Push it to Google Container Registry
3. Deploy to App Engine flexible environment
4. Provide your application URL (e.g., `https://PROJECT_ID.appspot.com`)

![Deploy command](GettingStarted_images/Deploy.png)

**Step 30**: After deployment completes, retrieve your application URL from the terminal output. Open it in a browser:

```
https://PROJECT_ID.appspot.com
```

![Get URL](GettingStarted_images/Get_deploy_url.png)

**Step 31**: Open the deployed application URL to verify it's running. You should see the homepage with the "Create PDF Document" button.

![Output Console](GettingStarted_images/Console_Page.png)

## Testing the Deployed Application

**Step 32**: Click the **Create PDF Document** button on your deployed application to generate a PDF.

**Step 33**: The application will:
1. Load the input PDF from `wwwroot/Data/Input.pdf`
2. Add a product table to the first page
3. Generate the final PDF
4. Download it as `ProductReport.pdf`

**Step 34**: Verify the downloaded PDF contains:
- A product inventory table with 5 sample items
- Professional table styling
- All original content from the input PDF

## Expected Output

When you click "Create PDF Document" on the deployed application, the browser will:
- Display download prompt or auto-download `ProductReport.pdf`
- File should be 5-15 KB depending on input PDF size
- Contains product table with columns: Product_ID, Product_Name, Price
- Response status: 200 OK (successful download)
- Error responses show error message on the application page

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **License Key Not Registered** | Verify `SyncfusionLicenseProvider.RegisterLicense()` is called in `Program.cs` BEFORE service building. License registration is required for v16.2.0.x+. |
| **"Input PDF file not found" error** | Ensure `wwwroot/Data/Input.pdf` exists in the project. Set file's **Copy to Output Directory** to "Copy if newer". Upload this folder to Cloud Shell. |
| **Syncfusion.Pdf.NET Package Not Found** | Run `dotnet add package Syncfusion.Pdf.NET` locally before uploading. Verify v16.2.0.x or later: `dotnet list package`. |
| **Docker build fails with "libfontconfig not found"** | The `Dockerfile` includes `apt-get install libfontconfig` to provide font support for PDF rendering in Linux containers. Ensure this line is not commented. |
| **App Engine deployment timeout** | Deployment can take 10-15 minutes. Check Cloud Build logs: **Cloud Console** → **Cloud Build** → View build status. Increase timeout: `gcloud config set app/cloud_build_timeout 1800`. |
| **HTTP 500 error after deployment** | Check logs: `gcloud app logs read -n 100`. Verify license key is correct in `Program.cs`. Check that all required namespaces are imported. |
| **"Permission denied" during deployment** | Ensure your GCP project ID is set: `gcloud config set project PROJECT_ID`. Verify your account has App Engine Admin role in IAM. |
| **OutOfMemoryException (PDF generation fails)** | Increase memory in `app.yaml`: Change `memory_gb` from 2 to 4. Large PDFs need more memory. Monitor in **Cloud Console** → **App Engine** → **Instances**. |
| **DLL name mismatch in Docker** | Error: "Could not load file or assembly 'Web_Application.dll'". Verify ENTRYPOINT in Dockerfile matches your actual DLL: `dotnet PDFGenerationApp.dll`. |
| **Licensing error in production** | Development license keys expire after 30 days. For production, use a production license from Syncfusion or request deployment support. See [licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview). |

## Next Steps

Explore advanced PDF capabilities and GCP App Engine integration patterns:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/file-formats/pdf/working-with-documents/merge-documents)** — Combine multiple PDF documents into a single file
- **[Split PDF Documents](https://help.syncfusion.com/file-formats/pdf/split-document)** — Extract specific pages from PDF files
- **[Add Watermarks](https://help.syncfusion.com/file-formats/pdf/working-with-pages/add-watermark)** — Add company logos or confidentiality markers
- **[Create Interactive Forms](https://help.syncfusion.com/file-formats/pdf/working-with-forms/overview)** — Build fillable PDF forms
- **[Digital Signatures](https://help.syncfusion.com/file-formats/pdf/working-with-forms/create-digital-signatures)** — Sign PDFs programmatically
- **[PDF Encryption](https://help.syncfusion.com/file-formats/pdf/working-with-security/encrypt-pdf)** — Protect PDFs with passwords

### GCP App Engine Patterns
- **[Cloud Storage Integration](https://cloud.google.com/storage/docs)** — Store generated PDFs in Google Cloud Storage buckets
- **[Cloud Pub/Sub Event Processing](https://cloud.google.com/pubsub)** — Process PDF generation requests from message queues
- **[Cloud Datastore](https://cloud.google.com/datastore)** — Store PDF metadata and generation history
- **[Cloud CDN](https://cloud.google.com/cdn)** — Cache and deliver PDFs globally with low latency
- **[Scaling Configurations](https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)** — Adjust `app.yaml` min/max instances and CPU thresholds
- **[Cloud Logging](https://cloud.google.com/logging)** — Monitor PDF generation performance and errors

### Deployment and Operations
- **[Cloud Monitoring](https://cloud.google.com/monitoring)** — Set alerts for error rates, latency, memory usage
- **[Cloud Debugger](https://cloud.google.com/debugger)** — Debug PDF generation code in production
- **[Cloud Profiler](https://cloud.google.com/profiler)** — Identify performance bottlenecks in PDF operations
- **[Cloud Trace](https://cloud.google.com/trace)** — Analyze request latency and distributed tracing
- **[GCP Cost Management](https://cloud.google.com/cost-management)** — Monitor App Engine costs and set budget alerts
- **[CI/CD with Cloud Build](https://cloud.google.com/build)** — Automate testing and deployment on code commits

## Resources

**Sample Code:**
- [Complete GCP App Engine example](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/GCP/Google_App_Engine)

**Documentation:**
- [Syncfusion .NET PDF Library Guide](https://help.syncfusion.com/file-formats/pdf/)
- [Google App Engine for .NET](https://cloud.google.com/appengine/docs/flexible/dotnet)
- [Deploying ASP.NET Core to App Engine](https://cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [Google Cloud SDK Documentation](https://cloud.google.com/sdk/docs)
- [Google Cloud Console](https://console.cloud.google.com/) — Manage your GCP resources
- [Cloud Shell Documentation](https://cloud.google.com/shell/docs)
- [Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)

**Try It Out:**
- [Syncfusion PDF Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)
- [Explore Syncfusion PDF Features](https://www.syncfusion.com/document-sdk/net-pdf-library)
- [GCP Free Tier](https://cloud.google.com/free) — $300 credit + always-free App Engine flexible quota (28 instance hours/day)
- [Cloud Shell](https://cloud.google.com/shell) — Browser-based terminal, no local installation needed

