---
title: Create PDF document in Azure App Service on Linux | Syncfusion
description: Create a PDF document in Azure App Service on Linux using the Syncfusion .NET PDF library without the dependency on Adobe Acrobat.
platform: document-processing
control: PDF
documentation: UG
---

# Create PDF document in Azure App Service on Linux

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, edit PDF documents programmatically without the dependency on Adobe Acrobat. Using this library, you can **create a PDF document in Azure App Service on Linux**.

## Prerequisites

| Item | Details |
| --- | --- |
| **Development Environment** | Visual Studio 2022 or Visual Studio Code with C# extension |
| **.NET Version** | .NET 8.0 or later |
| **NuGet Package** | Syncfusion.Pdf.NET (latest version) |
| **Azure Subscription** | Active Microsoft Azure account with resource group |
| **Azure CLI** | Optional but recommended for deployment |
| **License** | Syncfusion license key (required for production deployments) |
| **Image Assets** | Place sample images in `wwwroot/images/` folder |

## Steps to create PDF document in Azure App Service on Linux

Step 1: Create a new ASP.NET Core Web App (Model-View-Controller) in Visual Studio.
![Create an ASP.NET Core Web App project](Azure_images/Azure-app-service-Linux/Create-net-core-web-app.png)

Step 2: Set the project name and select the location.
![Configure your new project](Azure_images/Azure-app-service-Linux/Set_project_name.png)

Step 3: Click the **Create** button.
![Additional Information](Azure_images/Azure-app-service-Linux/Sample_addition_information.png)

Step 4: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/). You can also use the .NET CLI:

```bash
dotnet add package Syncfusion.Pdf.Net.Core
```

![Install Syncfusion.Pdf.Net.Core NuGet package](Azure_images/Azure-app-service-Linux/NuGet_package.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from a trial setup or from the NuGet feed, you must also add the **Syncfusion.Licensing** assembly reference and include a license key in your project. Refer to the [licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details.

Step 5: A default action method named `Index` is present in *HomeController.cs*. Right-click the `Index` method and select **Go To View** to open its associated view page *Index.cshtml*. Add a new button to *Index.cshtml* as shown below.

{% tabs %}

{% highlight CSHTML %}

@{
    Html.BeginForm("CreatePDFDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Create PDF Document" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}

{% endtabs %}

Step 6: Include the following namespaces in *HomeController.cs*. Add `System.IO` and `System.Collections.Generic` for the `FileStream`, `Path`, and `List` types used in the action method.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using System.IO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using Syncfusion.Pdf.Grid;
using Syncfusion.Pdf;

{% endhighlight %}

{% endtabs %}

Step 7: Add a new action method named `CreatePDFDocument` in the *HomeController.cs* file and include the following code to generate a PDF document. Before building, place the sample image at `wwwroot/Data/AdventureCycle.jpg` so the controller can read it at runtime.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//To load an existing file. 
private readonly IWebHostEnvironment _hostingEnvironment;
public HomeController(IWebHostEnvironment hostingEnvironment)
{
    _hostingEnvironment = hostingEnvironment;
}

public IActionResult CreatePDFDocument()
{
    //Create a new PDF document.
    PdfDocument document = new PdfDocument();
    //Set the page size.
    document.PageSettings.Size = PdfPageSize.A4;
    //Add a page to the document.
    PdfPage page = document.Pages.Add();

    //Create PDF graphics for the page.
    PdfGraphics graphics = page.Graphics;
    //Load the image from the disk.
    string imagePath = Path.Combine(_hostingEnvironment.WebRootPath, "Data/AdventureCycle.jpg");
    FileStream imageStream = new FileStream(imagePath, FileMode.Open, FileAccess.Read);
    PdfBitmap image = new PdfBitmap(imageStream);
    //Draw an image.
    graphics.DrawImage(image, new RectangleF(130, 0, 250, 100));

    //Draw header text. 
    graphics.DrawString("Adventure Works Cycles", new PdfStandardFont(PdfFontFamily.TimesRoman, 20, PdfFontStyle.Bold), PdfBrushes.Gray, new PointF(150, 150));

    //Add paragraph. 
    string text = "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.";
    //Create a text element with the text and font.
    PdfTextElement textElement = new PdfTextElement(text, new PdfStandardFont(PdfFontFamily.TimesRoman, 12));
    //Draw the text in the first column.
    textElement.Draw(page, new RectangleF(0, 200, page.GetClientSize().Width, page.GetClientSize().Height));

    //Create a PdfGrid.
    PdfGrid pdfGrid = new PdfGrid();
    //Add values to the list.
    List<object> data = new List<object>();
    Object row1 = new { Product_ID = "1001", Product_Name = "Bicycle", Price = "10,000" };
    Object row2 = new { Product_ID = "1002", Product_Name = "Head Light", Price = "3,000" };
    Object row3 = new { Product_ID = "1003", Product_Name = "Break wire", Price = "1,500" };
    data.Add(row1);
    data.Add(row2);
    data.Add(row3);
    //Add list to IEnumerable.
    IEnumerable<object> dataTable = data;
    //Assign data source.
    pdfGrid.DataSource = dataTable;
    //Apply built-in table style.
    pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent3);
    //Draw the grid to the page of PDF document.
    pdfGrid.Draw(graphics, new RectangleF(0, 300, page.Size.Width - 80, 0));

    //Saving the PDF to the MemoryStream.
    MemoryStream stream = new MemoryStream();
    document.Save(stream);
    //Set the position as '0'.
    stream.Position = 0;
    //Download the PDF document in the browser.
    FileStreamResult fileStreamResult = new FileStreamResult(stream, "application/pdf");
    fileStreamResult.FileDownloadName = "Sample.pdf";
    return fileStreamResult;
}

{% endhighlight %}

{% endtabs %}

**Verify locally before publishing**

Run the project locally with `F5` in Visual Studio, then click the **Create PDF Document** button on the home page to confirm the PDF downloads successfully. If you see a license warning, ensure `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` is called at application startup (for example, in `Program.cs`).

## Steps to publish as Azure App Service on Linux

Step 1: Right-click the project and select **Publish**.
![Right-click the project and select the Publish option](Azure_images/Azure-app-service-Linux/Click_publish_button.png)

Step 2: Click the **Add a Publish Profile** button. Sign in to your Azure account if prompted.
![Click the Add a Publish Profile](Azure_images/Azure-app-service-Linux/Add_publish_profile.png)

Step 3: Select the publish target as **Azure**.
![Select the publish target as Azure](Azure_images/Azure-app-service-Linux/Publish_target.png)

Step 4: Select the specific target as **Azure App Service (Linux)**.
![Select the publish target](Azure_images/Azure-app-service-Linux/Specific_target.png)

Step 5: To create a new app service, click the **Create new** option.
![Click create new option](Azure_images/Azure-app-service-Linux/Create_new_app_service.png)

Step 6: Configure the **App Service name**, **Subscription**, **Resource Group**, and **App Service Plan**, then click the **Create** button to proceed with the App Service creation.
![Click the Create button](Azure_images/Azure-app-service-Linux/Host_plan.png)

Step 7: Click the **Finish** button to finalize the **App Service** creation.
![Click the Finish button](Azure_images/Azure-app-service-Linux/App_service_finish.png)

Step 8: Select the deployment type.
![Create a Deployment type](Azure_images/Azure-app-service-Linux/Deployment_type.png)

Step 9: Click the **Close** button.
![Create an ASP.NET Core Project](Azure_images/Azure-app-service-Linux/Publish_profile_creation_progress.png)

Step 10: Click the **Publish** button.
![Click the Publish button](Azure_images/Azure-app-service-Linux/Ready_to_publish_window.png)

Step 11: Publishing has succeeded.
![Publish has been succeeded](Azure_images/Azure-app-service-Linux/Successful_publish.png)

Step 12: The published webpage will open in the **browser**.
![Browser will open after publish](Azure_images/Azure-app-service-Linux/WebView.png)

Step 13: Click the **Create PDF document** button to generate the PDF document. The output PDF document appears as follows.
![Create PDF document in Azure App Service on Linux](Azure_images/Azure-app-service-Linux/Output.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Azure/Azure%20App%20Service).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion PDF library features.

An online sample to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Image File Not Found** | Verify the image file exists at `wwwroot/images/AdventureCycle.jpg`. Check file permissions and case sensitivity on Linux (paths are case-sensitive). |
| **Syncfusion.Pdf.NET Package Not Found** | Run `dotnet add package Syncfusion.Pdf.NET` or use NuGet Package Manager to install the latest version targeting .NET 6.0+. |
| **"Could not find wwwroot folder"** | Verify the project structure includes a `wwwroot` folder. If missing, create it at the project root and add images to `wwwroot/images/` subdirectory. |
| **Deployment Failed with Authentication Error** | Verify you are logged into Azure: `az login`. Check Azure subscription and ensure you have permissions to create resources. |
| **Application Timeout on Startup** | If using a Free tier App Service, startup may be slow. Upgrade to B1 or higher tier for better performance. Check Application Insights logs for detailed errors. |
| **PDF Download Not Working** | Verify the controller returns `File()` with correct content type (`application/pdf`). Check browser developer tools for network errors. |
| **Missing Dependencies in Deployment** | Ensure all NuGet packages are restored during deployment. Check build output in Azure portal → Deployment Center → Logs. |
| **Memory Issues Generating Large PDFs** | Use streaming instead of buffering. For very large PDFs, consider Azure Functions with higher memory allocation instead of App Service. |

## See also

* [Create a PDF document in .NET](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-core)
* [Azure App Service on Linux documentation](https://learn.microsoft.com/en-us/azure/app-service/overview)
* [Syncfusion.Pdf.Net.Core NuGet package](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/)
* [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) 

## Next Steps

Explore advanced PDF capabilities and Azure integration patterns:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)** — Combine multiple reports into a single document
- **[Split PDF Documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)** — Extract specific pages or create filtered PDFs
- **[Add Watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)** — Brand PDFs with company logos and confidentiality markers
- **[Create Interactive Forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)** — Build fillable PDF forms for data collection
- **[Digital Signatures](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature)** — Sign PDFs programmatically for compliance


### Azure Integration Patterns
- **[Store PDFs in Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)** — Scalable storage for generated documents
- **[Monitor with Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)** — Track PDF generation performance and errors
- **[Auto-scaling Policies](https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up)** — Scale based on demand
- **[CI/CD with Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/overview)** — Automate deployment updates
