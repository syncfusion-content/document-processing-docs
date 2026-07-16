---
title: Create PDF document in Azure App Service on Linux | Syncfusion
description: Create PDF document in Azure App Service on Linux using .NET PDF library without the dependency of Adobe Acrobat.
platform: document-processing
control: PDF
documentation: UG
---

# Create a PDF File in Azure App Service on Linux

The [Syncfusion .NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, and edit PDF documents programmatically without requiring Adobe Acrobat. This guide demonstrates how to deploy an ASP.NET Core Web API application that generates PDF documents to Azure App Service running on Linux.

## Prerequisites

| Item | Details |
| --- | --- |
| **Development Environment** | Visual Studio 2022 or Visual Studio Code with C# extension |
| **.NET Version** | .NET 6.0 or later (.NET 8.0 recommended) |
| **NuGet Package** | Syncfusion.Pdf.NET (latest version) |
| **Azure Subscription** | Active Microsoft Azure account with resource group |
| **Azure CLI** | Optional but recommended for deployment |
| **License** | Syncfusion license key (required for production deployments) |
| **Image Assets** | Place sample images in `wwwroot/images/` folder |

## Steps to Create PDF Documents in Azure App Service on Linux

**Step 1: Create a New ASP.NET Core Web App Project**

Launch Visual Studio 2022 and create a new ASP.NET Core Web App using the Model-View-Controller (MVC) template targeting .NET 6.0 or later.

![Create a ASP.NET Core Web App project](Azure_images/Azure-app-service-Linux/Create-net-core-web-app.png)

**Step 2: Configure Project Settings**

Enter your project name and select the project location.

![Configure your new project](Azure_images/Azure-app-service-Linux/Set_project_name.png)

**Step 3: Create the Project**

Click the **Create** button to finalize project creation.

![Additional Information](Azure_images/Azure-app-service-Linux/Sample_addition_information.png)

**Step 4: Install the Syncfusion PDF Package**

Install the [Syncfusion.Pdf.NET](https://www.nuget.org/packages/Syncfusion.Pdf.NET) NuGet package from NuGet.org. Use either the NuGet Package Manager or the Package Manager Console:

```bash
dotnet add package Syncfusion.Pdf.NET
```

![Install Syncfusion.Pdf.NET NuGet package](Azure_images/Azure-app-service-Linux/NuGet_package.png)

**Step 5: Register Your Syncfusion License**

Add your Syncfusion license key registration in the `Program.cs` file. Starting with v16.2.0.x, license registration is **required**. Add the following code at the application startup:

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

using Syncfusion.Licensing;

// Register license before building services
SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

var builder = WebApplicationBuilder.CreateBuilder(args);

// Add MVC services
builder.Services.AddControllersWithViews();

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

For detailed licensing instructions, refer to the [Syncfusion Licensing Guide](https://help.syncfusion.com/common/essential-studio/licensing/overview).

**Step 6: Add UI Button to Index View**

Open the `Index.cshtml` view file in the Views/Home folder and add a button to trigger PDF generation:

{% tabs %}

{% highlight CSHTML %}

@{
    Html.BeginForm("CreatePDFDocument", "Home", FormMethod.Post);
    {
        <div>
            <input type="submit" value="Create PDF Document" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}

{% endtabs %}

**Step 7: Add Required Namespaces and Create PDF Controller Method**

Add the following namespaces to your `HomeController.cs` file:

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.Drawing;
using Syncfusion.Licensing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;

{% endhighlight %}

{% endtabs %}

**Step 8: Implement PDF Generation Method**

Add the following code to generate a PDF document. The method includes error handling, resource disposal patterns, and image asset loading: 

{% tabs %}

{% highlight c# tabtitle="C#" %}

public class HomeController : Controller
{
    private readonly IWebHostEnvironment _hostingEnvironment;
    private readonly ILogger<HomeController> _logger;

    public HomeController(IWebHostEnvironment hostingEnvironment, ILogger<HomeController> logger)
    {
        _hostingEnvironment = hostingEnvironment;
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult CreatePDFDocument()
    {
        try
        {
            // Create a new PDF document
            using (PdfDocument document = new PdfDocument())
            {
                // Set page size
                document.PageSettings.Size = PdfPageSize.A4;
                
                // Add a page
                PdfPage page = document.Pages.Add();
                PdfGraphics graphics = page.Graphics;

                // Load and draw image
                string imagePath = Path.Combine(_hostingEnvironment.WebRootPath, "images/AdventureCycle.jpg");
                if (System.IO.File.Exists(imagePath))
                {
                    using (FileStream imageStream = new FileStream(imagePath, FileMode.Open, FileAccess.Read))
                    {
                        PdfBitmap image = new PdfBitmap(imageStream);
                        graphics.DrawImage(image, new RectangleF(130, 0, 250, 100));
                    }
                }
                else
                {
                    _logger.LogWarning($"Image file not found: {imagePath}");
                }

                // Draw header text
                PdfStandardFont titleFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 20, PdfFontStyle.Bold);
                graphics.DrawString("Adventure Works Cycles", titleFont, PdfBrushes.Black, new PointF(150, 150));

                // Add description paragraph
                string text = "Adventure Works Cycles is a multinational manufacturing company that produces metal and composite bicycles for commercial markets across North America, Europe, and Asia. Based in Washington with 290 employees at headquarters, the company operates regional sales teams throughout its market territories.";
                PdfTextElement textElement = new PdfTextElement(text, new PdfStandardFont(PdfFontFamily.TimesRoman, 12));
                textElement.Draw(page, new RectangleF(0, 200, page.GetClientSize().Width, page.GetClientSize().Height));

                // Create product data grid
                List<object> data = new List<object>
                {
                    new { Product_ID = "1001", Product_Name = "Bicycle", Price = "$10,000" },
                    new { Product_ID = "1002", Product_Name = "Head Light", Price = "$3,000" },
                    new { Product_ID = "1003", Product_Name = "Brake Wire", Price = "$1,500" },
                    new { Product_ID = "1004", Product_Name = "Pedal Set", Price = "$2,000" },
                    new { Product_ID = "1005", Product_Name = "Chain", Price = "$500" }
                };

                // Create and format grid
                PdfGrid pdfGrid = new PdfGrid();
                pdfGrid.DataSource = data;
                pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);

                // Draw grid on page
                pdfGrid.Draw(graphics, new RectangleF(0, 300, page.Size.Width - 80, 0));

                // Save to memory stream for download
                using (MemoryStream stream = new MemoryStream())
                {
                    document.Save(stream);
                    stream.Position = 0;
                    
                    // Return PDF file for browser download
                    return File(stream.ToArray(), "application/pdf", "AdventureWorks.pdf");
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

## Deploying to Azure App Service on Linux

**Step 9: Prepare for Deployment**

Before publishing to Azure, ensure your application builds successfully locally:

```bash
dotnet build
dotnet publish -c Release
```

**Step 10: Create Publish Profile**

Right-click the project in Solution Explorer and select **Publish**.

![Right-click the project and select the Publish option](Azure_images/Azure-app-service-Linux/Click_publish_button.png)

**Step 11: Add New Publish Profile**

Click the **Add a Publish Profile** button to create a new deployment configuration.

![Click the Add a Publish Profile](Azure_images/Azure-app-service-Linux/Add_publish_profile.png)

**Step 12: Select Azure as Target**

Choose **Azure** as your publish target platform.

![Select the publish target as Azure](Azure_images/Azure-app-service-Linux/Publish_target.png)

**Step 13: Select Azure App Service (Linux)**

Choose **Azure App Service (Linux)** as the specific deployment target.

![Select the publish target](Azure_images/Azure-app-service-Linux/Specific_target.png)

**Step 14: Create New App Service**

Click **Create new** to set up a new App Service instance on Linux.

![Click create new option](Azure_images/Azure-app-service-Linux/Create_new_app_service.png)

**Step 15: Configure App Service Plan**

Click **Create** to proceed with App Service and hosting plan configuration.

![Click the Create button](Azure_images/Azure-app-service-Linux/Host_plan.png)

**Step 16: Finalize Configuration**

Click **Finish** to complete the App Service setup wizard.

![Click the Finish button](Azure_images/Azure-app-service-Linux/App_service_finish.png)

**Step 17: Review Deployment Settings**

Verify the deployment configuration and click **Close** to proceed.

![Create a Deployment type](Azure_images/Azure-app-service-Linux/Deployment_type.png)

**Step 18: Publish Application**

Click the **Publish** button to deploy your application to Azure App Service on Linux.

![Click the Publish button](Azure_images/Azure-app-service-Linux/Ready_to_publish_window.png)

**Step 19: Verify Deployment Success**

Wait for the publish operation to complete. You should see a success message.

![Publish has been succeeded](Azure_images/Azure-app-service-Linux/Successful_publish.png)

## Testing the Deployed Application

**Step 20: Launch Browser**

After successful deployment, your application automatically opens in the browser at `https://<app-name>.azurewebsites.net`.

![Browser will open after publish](Azure_images/Azure-app-service-Linux/WebView.png)

**Step 21: Generate PDF**

Click the **Create PDF Document** button on the homepage to trigger PDF generation. The PDF will download automatically as `AdventureWorks.pdf`.

**Expected Output:**

The generated PDF contains:
- Adventure Works Cycles company logo (from image file)
- Title and company description
- Product information in a formatted table
- Professional styling and layout

![Create PDF document in Azure App Service on Linux](Azure_images/Azure-app-service-Linux/Output.png)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **License Key Not Registered** | Ensure `SyncfusionLicenseProvider.RegisterLicense()` is called in `Program.cs` before building services. The license key is required for all PDF operations. |
| **Image File Not Found** | Verify the image file exists at `wwwroot/images/AdventureCycle.jpg`. Check file permissions and case sensitivity on Linux (paths are case-sensitive). |
| **Syncfusion.Pdf.NET Package Not Found** | Run `dotnet add package Syncfusion.Pdf.NET` or use NuGet Package Manager to install the latest version targeting .NET 6.0+. |
| **PDF Generation Fails with "Access Denied"** | Ensure the web app has write permissions to temp directory. On Azure App Service Linux, use `/tmp` for temporary files. |
| **"Could not find wwwroot folder"** | Verify the project structure includes a `wwwroot` folder. If missing, create it at the project root and add images to `wwwroot/images/` subdirectory. |
| **Deployment Failed with Authentication Error** | Verify you are logged into Azure: `az login`. Check Azure subscription and ensure you have permissions to create resources. |
| **Application Timeout on Startup** | If using a Free tier App Service, startup may be slow. Upgrade to B1 or higher tier for better performance. Check Application Insights logs for detailed errors. |
| **PDF Download Not Working** | Verify the controller returns `File()` with correct content type (`application/pdf`). Check browser developer tools for network errors. |
| **Missing Dependencies in Deployment** | Ensure all NuGet packages are restored during deployment. Check build output in Azure portal → Deployment Center → Logs. |
| **Memory Issues Generating Large PDFs** | Use streaming instead of buffering. For very large PDFs, consider Azure Functions with higher memory allocation instead of App Service. |

## Next Steps

Explore advanced PDF capabilities and Azure integration patterns:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/file-formats/pdf/working-with-documents/merge-documents)** — Combine multiple reports into a single document
- **[Split PDF Documents](https://help.syncfusion.com/file-formats/pdf/split-document)** — Extract specific pages or create filtered PDFs
- **[Add Watermarks](https://help.syncfusion.com/file-formats/pdf/working-with-pages/add-watermark)** — Brand PDFs with company logos and confidentiality markers
- **[Create Interactive Forms](https://help.syncfusion.com/file-formats/pdf/working-with-forms/overview)** — Build fillable PDF forms for data collection
- **[Digital Signatures](https://help.syncfusion.com/file-formats/pdf/working-with-forms/create-digital-signatures)** — Sign PDFs programmatically for compliance
- **[PDF Encryption](https://help.syncfusion.com/file-formats/pdf/working-with-forms/encryption)** — Protect sensitive documents with passwords and permissions

### Azure Integration Patterns
- **[Store PDFs in Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)** — Scalable storage for generated documents
- **[Monitor with Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)** — Track PDF generation performance and errors
- **[Auto-scaling Policies](https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up)** — Scale based on demand
- **[CI/CD with Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/overview)** — Automate deployment updates

## Resources

**Sample Code:**
- [Complete working sample on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Azure/Azure%20App%20Service)

**Documentation:**
- [Syncfusion .NET PDF Library Guide](https://help.syncfusion.com/file-formats/pdf/)
- [Azure App Service Documentation](https://learn.microsoft.com/en-us/azure/app-service/)
- [.NET Documentation](https://learn.microsoft.com/en-us/dotnet/)

**Try It Out:**
- [Syncfusion PDF Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)
- [Azure Free Account](https://azure.microsoft.com/en-us/free/) 