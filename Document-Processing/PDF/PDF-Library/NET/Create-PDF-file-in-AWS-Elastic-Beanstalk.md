---
title: Create or Generate PDF document in AWS Elastic Beanstalk | Syncfusion
description: Learn how to create or generate a PDF file in AWS Elastic Beanstalk using Syncfusion .NET Core PDF library without the dependency of Adobe Acrobat. 
platform: document-processing
control: PDF
documentation: UG
keywords: aws elastic beanstalk create pdf, aws edit pdf, merge, pdf form, fill form, digital sign, table, c#, dotnet core pdf, asp generate pdf, aspx generate pdf
---

# Create a PDF File in AWS Elastic Beanstalk

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, and edit PDF documents programmatically in AWS without the dependency of Adobe Acrobat. This guide demonstrates how to generate PDF files using ASP.NET Core applications deployed on AWS Elastic Beanstalk, allowing you to scale PDF operations across multiple instances.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **IDE** | Visual Studio 2022 or Visual Studio Code |
| **.NET Version** | .NET 6.0+, .NET 7.0, or .NET 8.0 |
| **ASP.NET Core Version** | ASP.NET Core 6.0+ corresponding to your .NET version |
| **NuGet Package** | Syncfusion.Pdf.NET v16.2.0.x or later |
| **AWS Account** | Active Amazon Web Services account with Elastic Beanstalk access |
| **AWS Tools** | AWS Toolkit for Visual Studio or AWS CLI v2 with configured credentials |
| **Licensing** | Syncfusion license key (required v16.2.0.x+) |
| **Git (optional)** | For CI/CD pipeline deployments to Elastic Beanstalk |

> **Note**: AWS Elastic Beanstalk provides managed platform-as-a-service (PaaS) for deploying ASP.NET Core applications with automatic scaling and load balancing. This differs from Lambda (serverless) or EC2 (infrastructure) deployments. 

## License Registration

Starting with Syncfusion v16.2.0.x, a license key is required for PDF operations. Register your license in the `Program.cs` file before building services:

```csharp
// In Program.cs - add this before var app = builder.Build();
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

> **Important**: Obtain a free community license from [Syncfusion Community License](https://help.syncfusion.com/common/essential-studio/licensing/community-license). For production deployments, store the license key in AWS Secrets Manager or Parameter Store, not hardcoded in source. Refer to [licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details.

## Steps to Create a PDF File in AWS Elastic Beanstalk
![ASP.NET Core project](GettingStarted_images/Create-Project.png)

Step 2: In configuration windows, name your project and select Next.
![Create a Project](GettingStarted_images/AWS-Elastic-Beanstalk-Project.png)

![Configuration](GettingStarted_images/AWS-Elastic-Beanstalk-Configuration.png)

Step 3: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.NET) NuGet package. Use the Package Manager Console or NuGet Package Manager UI:

```bash
dotnet add package Syncfusion.Pdf.NET
```

![Install NuGet package](GettingStarted_images/NuGet-Package-AWS-Elastic-Beanstalk.png)

Step 4: In the ASP.NET Core MVC project, a default controller named `HomeController.cs` is created. Include the following namespaces in that file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Drawing;

{% endhighlight %}

{% endtabs %}

Step 5: Add a button in `Index.cshtml` to trigger PDF generation. Update the default form to use POST method for file download operations:

{% tabs %}
{% highlight CSHTML %}

@{
    Html.BeginForm("CreatePDF", "Home", FormMethod.Post);
    {
        <div>
            <input type="submit" value="Create PDF" style="width:150px;height:27px" />
            <br />
            <div class="text-danger">
                @ViewBag.Message
            </div>
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}

{% endtabs %}

> **Note**: Use `FormMethod.Post` for operations that generate and download files. The GET method is inappropriate for file downloads and can cause caching issues.

Step 6: Add a new action method named `CreatePDF` to the `HomeController.cs` file. This method loads an existing PDF, adds a product table to it, and returns the modified PDF for download:

{% tabs %}
{% highlight c# tabtitle="C#" %}

[HttpPost]
public IActionResult CreatePDF()
{
    try
    {
        string inputPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Data", "Input.pdf");
        
        // Verify input file exists
        if (!System.IO.File.Exists(inputPath))
        {
            ViewBag.Message = "Error: Input PDF file not found at " + inputPath;
            return View("Index");
        }

        // Open existing PDF document with proper resource disposal
        using (FileStream fileStream = new FileStream(inputPath, FileMode.Open, FileAccess.Read))
        {
            using (PdfLoadedDocument document = new PdfLoadedDocument(fileStream))
            {
                // Get the first page from the document
                PdfLoadedPage page = document.Pages[0] as PdfLoadedPage;
                PdfGraphics graphics = page.Graphics;

                // Create product data table
                List<object> productData = new List<object>
                {
                    new { Product_ID = "1001", Product_Name = "Bicycle", Price = "$10,000" },
                    new { Product_ID = "1002", Product_Name = "Head Light", Price = "$3,000" },
                    new { Product_ID = "1003", Product_Name = "Brake Wire", Price = "$1,500" },
                    new { Product_ID = "1004", Product_Name = "Pedal Set", Price = "$2,000" },
                    new { Product_ID = "1005", Product_Name = "Chain", Price = "$500" }
                };

                // Create and format table grid
                PdfGrid pdfGrid = new PdfGrid();
                pdfGrid.DataSource = productData;
                pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);

                // Draw table on the page
                pdfGrid.Draw(graphics, new RectangleF(40, 400, page.Size.Width - 80, 0));

                // Save to memory stream and return as download
                using (MemoryStream stream = new MemoryStream())
                {
                    document.Save(stream);
                    stream.Position = 0;
                    return File(stream.ToArray(), "application/pdf", "Output.pdf");
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

> **Important**: 
> - The input PDF file must exist at `wwwroot/Data/Input.pdf` relative to your project root
> - All streams and documents are wrapped in `using` statements for proper resource disposal
> - Error handling ensures graceful failures with user-friendly messages
> - The `[HttpPost]` attribute matches the form method from Step 5

### Preparing the Input PDF File

Before running the application, you need to create the `wwwroot/Data/` directory and add an input PDF:

1. In Solution Explorer, create the folder structure: **wwwroot → Data**
2. Add or create an `Input.pdf` file in the `Data` folder (sample PDF or your own document)
3. Right-click the PDF file → **Properties**
4. Set **Copy to Output Directory** to "Copy if newer" or "Always copy"

The folder structure should look like:
```
your-project/
├── wwwroot/
│   ├── Data/
│   │   └── Input.pdf
│   └── css/
├── Controllers/
│   └── HomeController.cs
└── Program.cs
```

### Deploying to AWS Elastic Beanstalk

**Step 7**: Right-click the project in Visual Studio and select **Publish to AWS Elastic Beanstalk**.

![Publish to AWS Elastic Beanstalk](GettingStarted_images/Publish-AWS-Elastic-Beanstalk.png)

**Step 8**: In the "Publish to AWS Elastic Beanstalk" window, select your AWS profile (or create one). Choose either **Create a new application environment** or **Re-deploy to existing environment**, then click **Next**.

![Publish to AWS Elastic Beanstalk](GettingStarted_images/Publish-to-AWS-Elastic-Beanstalk.png)

**Step 9**: Configure application options (application name, environment name, instance type). Click **Next** to proceed.

![Application Options Window](GettingStarted_images/Application-Options-Window.png)

**Step 10**: Review the deployment configuration and click **Deploy** to begin publishing.

![Deploy From the Review Window](GettingStarted_images/Deploy-From-the-Review-Window.png)

**Step 11**: Wait for the environment to be created and reach a healthy state (typically 5-10 minutes). Once complete, click the environment URL to launch your application.

![Launch Application Window](GettingStarted_images/Launch-Application-Window.png)

## Testing the Deployed Application

**Step 12**: Your ASP.NET Core application opens in the browser. Click the **Create PDF** button to generate a PDF document from the input file.

![Console Window](GettingStarted_images/Console-Page-AWS-Elastic-Beanstalk.png)

**Step 13**: The browser automatically downloads the generated PDF file (`Output.pdf`) containing the modified document with the product table added.

## Expected Output

The application generates a PDF file that:
- Loads the input PDF document from `wwwroot/Data/Input.pdf`
- Adds a formatted product table to the first page
- Contains 5 sample products with ID, Name, and Price
- Uses professional table styling
- Downloads to your browser as `Output.pdf`

![Output PDF document](GettingStarted_images/Output.png)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **License Key Not Registered** | Ensure `SyncfusionLicenseProvider.RegisterLicense()` is called in `Program.cs` before services are built. The license key must be set at application startup. |
| **"Input PDF file not found" Error** | Verify the input PDF exists at `wwwroot/Data/Input.pdf`. Check that the file's **Copy to Output Directory** property is set to "Copy if newer" or "Always copy". |
| **Syncfusion.Pdf.NET Package Not Found** | Run `dotnet add package Syncfusion.Pdf.NET` in your project directory. Verify the package version is v16.2.0.x or later for ASP.NET Core support. |
| **Elastic Beanstalk Environment Timeout** | Environment creation can take 5-15 minutes. Check AWS Console → Elastic Beanstalk → Events tab for deployment progress. If fails, review logs and delete the environment to retry. |
| **Application returns HTTP 500 Error** | Check Elastic Beanstalk logs: AWS Console → Elastic Beanstalk → Logs → Request the last 100 lines. Verify `Program.cs` registers license key correctly. |
| **PDF Download Not Working** | Verify controller method has `[HttpPost]` attribute and form uses `FormMethod.Post`. Check browser developer tools Network tab for errors. |
| **"Build Failed" During Deployment** | Ensure all NuGet packages are restored: run `dotnet restore` locally before publishing. Check build errors in Visual Studio Output window. |
| **File Permissions Error on EC2 Instance** | Elastic Beanstalk EC2 instances run as `ec2-user`. Ensure application has write permissions for wwwroot folder. Check IAM instance role permissions. |
| **Licensing Error After Deployment** | Development license key may not work on AWS instances. For production, use a production license key from Syncfusion or contact Support for deployment guidance. |
| **Slow PDF Generation on Startup** | Elastic Beanstalk may use smaller instance types. Upgrade instance type in Environment Configuration → Instances → Change Instance Type to a larger size. |

## Next Steps

Explore advanced PDF capabilities and AWS Elastic Beanstalk patterns:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/file-formats/pdf/working-with-documents/merge-documents)** — Combine multiple PDF documents into a single file
- **[Split PDF Documents](https://help.syncfusion.com/file-formats/pdf/split-document)** — Extract specific pages from PDF files
- **[Add Watermarks](https://help.syncfusion.com/file-formats/pdf/working-with-pages/add-watermark)** — Add company logos or confidentiality markers to PDFs
- **[Create Interactive Forms](https://help.syncfusion.com/file-formats/pdf/working-with-forms/overview)** — Build fillable PDF forms for data collection
- **[Digital Signatures](https://help.syncfusion.com/file-formats/pdf/working-with-forms/create-digital-signatures)** — Sign PDFs programmatically for document compliance

### AWS Elastic Beanstalk Patterns
- **[Auto Scaling Configuration](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/autoscaling.html)** — Scale instances based on demand
- **[Load Balancing](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/load-balancer.html)** — Distribute PDF generation requests across instances
- **[Environment Variables](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwareconfiguration.html)** — Store license keys securely (better than hardcoding)
- **[CI/CD Pipeline with CodePipeline](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/tutorials.html)** — Automate deployments on code changes
- **[Monitoring with CloudWatch](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.cloudwatch.html)** — Track application health and PDF generation metrics

## Resources

**Sample Code:**
- [Complete AWS Elastic Beanstalk example](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/AWS/AWSElasticBeanstalk)

**Documentation:**
- [Syncfusion .NET PDF Library Guide](https://help.syncfusion.com/file-formats/pdf/)
- [AWS Elastic Beanstalk Documentation](https://docs.aws.amazon.com/elasticbeanstalk/)
- [Deploying ASP.NET Core to Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-dotnet-core.html)
- [AWS Toolkit for Visual Studio](https://docs.aws.amazon.com/toolkit-for-visual-studio/)
- [Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)

**Try It Out:**
- [Syncfusion PDF Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)
- [Explore Syncfusion PDF Features](https://www.syncfusion.com/document-sdk/net-pdf-library)
- [AWS Free Tier](https://aws.amazon.com/free/) — Includes Elastic Beanstalk free usage tier