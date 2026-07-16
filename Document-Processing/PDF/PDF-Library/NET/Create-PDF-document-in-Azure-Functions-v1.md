---
title: Create PDF document in Azure Functions v1 | Syncfusion
description: Create PDF document in Azure Functions v1 using .NET PDF library without the dependency of Adobe Acrobat. 
platform: document-processing
control: PDF
documentation: UG
---

# Create a PDF File in Azure Functions v1

> **⚠️ Deprecation Notice**: Azure Functions v1 runtime reached end of life on December 13, 2019. This guide is maintained for legacy applications only. **New projects should use [Azure Functions v4](Create-PDF-document-in-Azure-Functions-v4.md)** with .NET 6.0+ support and improved performance.

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, edit PDF documents programmatically without the dependency of Adobe Acrobat. Using this library, you can generate PDF documents in Azure Functions v1 runtime.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **IDE** | Visual Studio 2019 or later |
| **.NET Framework Version** | .NET Framework 4.7.2 (Azure Functions v1 runtime) |
| **NuGet Package** | Syncfusion.Pdf.NET v16.2.0.x or later |
| **Azure Subscription** | Required to deploy to Azure |
| **Azure Tools** | Azure Functions Core Tools v1.x or Visual Studio Azure workload |
| **Licensing** | Syncfusion license key (required v16.2.0.x+) |
| **Image Assets** | AdventureCycle.jpg embedded as resource file |

> **Note**: Azure Functions v1 uses .NET Framework, not .NET Core. For modern deployments, refer to [Azure Functions v4 guide](Create-PDF-document-in-Azure-Functions-v4.md).

## Steps to create a PDF document in Azure Functions v1

### Setting Up the Project

**Step 1**: Create a new Azure Functions project in Visual Studio by selecting **File > New > Project** and searching for "Azure Functions".

![Create a new Azure Functions project](Azure_images/Azure-Functions-V1/Project_creation.png) 

**Step 2**: Enter a project name and select the project location, then click **Create**.

![Create a project name](Azure_images/Azure-Functions-V1/Configuration_project.png)

**Step 3**: In the configuration dialog, select **.NET Framework** as the function runtime worker type.

![Select function worker as .NET Framework](Azure_images/Azure-Functions-V1/Additional_information.png)

**Step 4**: Install the [Syncfusion.Pdf.NET](https://www.nuget.org/packages/Syncfusion.Pdf.NET) NuGet package. Use the Package Manager Console or NuGet Package Manager UI to add the latest version.

```bash
Install-Package Syncfusion.Pdf.NET
```

![Install Syncfusion.Pdf.NET NuGet package](Azure_images/Azure-Functions-V1/NuGet_package_reference.png)

**Step 5**: Configure the Syncfusion license key in your Azure Function. Create or update the **Function1.cs** file to include license registration at startup. Add the following in the function's static constructor or at the beginning of the Run method:

```csharp
static Function1()
{
    // Register license (replace with your actual license key)
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
}
```

> **Important**: Starting with Syncfusion v16.2.0.x, a license key is required. You can obtain a free community license from [Syncfusion Community License](https://help.syncfusion.com/common/essential-studio/licensing/community-license). See [licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for registration details.

**Step 6**: Include the following namespaces in the **Function1.cs** file.

{% tabs %}

{% highlight c# tabtitle="Using Statements" %}

using System;
using System.IO;
using System.Reflection;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;

{% endhighlight %}

{% endtabs %}

**Step 7**: Add the following code example to the **Run** method of the **Function1** class. This generates a PDF document and returns it as an HTTP response for download.
{% tabs %}

{% highlight c# tabtitle="Function1.cs" %}

public static class Function1
{
    static Function1()
    {
        // Register Syncfusion license (call once at startup)
        Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
    }

    [FunctionName("CreatePDFDocument")]
    public static HttpResponseMessage Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequestMessage req,
        ILogger log)
    {
        try
        {
            log.LogInformation("PDF document generation started.");

            // Create a new PDF document
            using (PdfDocument document = new PdfDocument())
            {
                // Set page size
                document.PageSettings.Size = PdfPageSize.A4;
                PdfPage page = document.Pages.Add();
                PdfGraphics graphics = page.Graphics;

                // Load and draw image from embedded resource
                Assembly assembly = Assembly.GetExecutingAssembly();
                string resourcePath = "Create-PDF-document.Data.AdventureCycle.jpg";
                
                using (Stream imageStream = assembly.GetManifestResourceStream(resourcePath))
                {
                    if (imageStream != null)
                    {
                        using (PdfBitmap image = new PdfBitmap(imageStream))
                        {
                            graphics.DrawImage(image, new RectangleF(130, 0, 250, 100));
                        }
                    }
                    else
                    {
                        log.LogWarning($"Embedded resource not found: {resourcePath}");
                    }
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
                pdfGrid.Draw(graphics, new RectangleF(0, 300, page.Size.Width - 80, 0));

                // Save to memory stream
                using (MemoryStream ms = new MemoryStream())
                {
                    document.Save(ms);
                    ms.Position = 0;

                    // Create HTTP response with PDF attachment
                    HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                    response.Content = new ByteArrayContent(ms.ToArray());
                    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                    {
                        FileName = "AdventureWorks.pdf"
                    };
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");

                    log.LogInformation("PDF document generated successfully.");
                    return response;
                }
            }
        }
        catch (Exception ex)
        {
            log.LogError($"Error generating PDF: {ex.Message}\n{ex.StackTrace}");
            return new HttpResponseMessage(HttpStatusCode.InternalServerError)
            {
                Content = new StringContent($"{{\"error\": \"PDF generation failed: {ex.Message}\"}}")
            };
        }
    }
}

{% endhighlight %}

{% endtabs %}

> **Important**: Replace `"YOUR_LICENSE_KEY"` with your actual Syncfusion license key. The resource path `"Create-PDF-document.Data.AdventureCycle.jpg"` assumes the image is embedded in a `Data` folder. Adjust the path based on your project structure.

### Local Testing

**Step 8**: Before deploying to Azure, test the function locally using Azure Functions Core Tools. Press **F5** in Visual Studio or run:

```bash
func start
```

The local runtime starts and displays function URLs. Navigate to `http://localhost:7071/api/CreatePDFDocument` in your browser to test PDF generation locally.

### Deploying to Azure

**Step 9**: Right-click the project in Solution Explorer and select **Publish** to open the publish profile wizard.

![Create a new profile in the Publish Window](Azure_images/Azure-Functions-V1/Publish_button.png)

**Step 10**: Select **Azure** as the publish target and click **Next**.

![Select the target as Azure](Azure_images/Azure-Functions-V1/Set_Azure_target.png)

**Step 11**: Choose **Create new** to set up a new Function App on Azure.

![Configure Hosting Plan](Azure_images/Azure-Functions-V1/Function_insane.png)

**Step 12**: Click **Create** to configure the Function App name, resource group, and hosting plan.

![Select the plan type](Azure_images/Azure-Functions-V1/Hosting_sample.png)

**Step 13**: After creating the Function App configuration, click **Finish** to finalize.

![Creating app service](Azure_images/Azure-Functions-V1/Finish_function.png)

**Step 14**: Click the **Publish** button to deploy your function to Azure.

![Click Publish Button](Azure_images/Azure-Functions-V1/Click_publish_button.png)

**Step 15**: Wait for publishing to complete. You should see a success message confirming deployment.

![Publishing succeeded](Azure_images/Azure-Functions-V1/Successful_publish.png)

### Testing the Deployed Function

**Step 16**: In the Azure portal, navigate to your Function App and open the **CreatePDFDocument** function. Click **Get Function URL** and copy the full URL.

**Step 17**: Paste the function URL into a new browser tab and press Enter. The PDF file will download automatically.

**Expected Output:**

The generated PDF contains:
- Adventure Works Cycles company logo
- Company name and description
- Product information table with 5 sample items
- Professional formatting and styling

![Output document](Azure_images/Azure-Functions-V1/Final_output.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Azure/Azure%20Function%20V1).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind).