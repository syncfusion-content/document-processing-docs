---
title: Create PDF document in Azure Functions v4 | Syncfusion
description: Create PDF document in Azure Functions v4 using .NET PDF library without the dependency of Adobe Acrobat. 
platform: document-processing
control: PDF
documentation: UG
---

# Create PDF document in Azure Functions v4

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, edit PDF documents programmatically without the dependency of Adobe Acrobat. Using this library, you can **create a PDF document in Azure Functions v4**.

## Prerequisites

Before you begin, ensure the following are installed and configured:

- **Visual Studio 2022** with the **Azure development** workload installed.
- **.NET 8.0 SDK** or later (matching the function worker selected in Step 3).
- An active **Azure subscription**. If you do not have one, create a [free account](https://azure.microsoft.com/free/).
- An **Azure Storage account** (required by Azure Functions for runtime operations such as triggers and logging).

## Steps to create a PDF document in Azure Functions v4

Step 1: In Visual Studio 2022, create a new Azure Functions project.
![Create a new Azure Functions project](Azure_Images/Azure-Functions-V4/Project_creation.png) 

Step 2: Enter a project name, choose the location, and then click **Create**.
![Create a project name](Azure_Images/Azure-Functions-V4/Configuration_project.png)

Step 3: Select function worker as **.NET 8.0** or later
![Select function worker](Azure_Images/Azure-Functions-V4/Additional_information.png)

Step 4: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).
![Install Syncfusion.Pdf.Net.Core NuGet package](Azure_Images/Azure-Functions-V4/NuGet_package_reference.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: Install the [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/) NuGet package and register the license key at application startup. For example, in `Program.cs` (or a startup class) add:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

To learn how to generate and retrieve a license key, see [Register the Syncfusion license key](https://help.syncfusion.com/common/essential-studio/licensing/overview).

Step 6: Add the sample image `AdventureCycle.jpg` as an **Embedded Resource** in the project so it can be loaded via `Assembly.GetManifestResourceStream`. To do this, place the image in a folder (for example, `Data`), set its **Build Action** to **Embedded Resource** in the Properties window, and use the resource name `Create_PDF_document.Data.AdventureCycle.jpg` (the namespace is `<RootNamespace>.<FolderPath>.<FileName>`).

Step 7: Include the following namespaces in the **Function1.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using Syncfusion.Pdf;
using Syncfusion.Drawing;

{% endhighlight %}
{% endtabs %}

> Ensure the function template you selected is the **HttpTrigger** template, and that the default method is named `Run` and accepts an `HttpRequest` parameter.

Step 8: Add the following code example in the **Run** method of the **Function1** class to create a PDF document in Azure Functions and return the resultant PDF document.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Create a new PDF document.
PdfDocument document = new PdfDocument();
//Set the page size.
document.PageSettings.Size = PdfPageSize.A4;
//Add a page to the document.
PdfPage page = document.Pages.Add();

//Create PDF graphics for the page.
PdfGraphics graphics = page.Graphics;
//Load the image from the disk.
var assembly = Assembly.GetExecutingAssembly();
var imageStream = assembly.GetManifestResourceStream("Create_PDF_document.Data.AdventureCycle.jpg");
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

MemoryStream memoryStream = new MemoryStream();
//Saves the PDF document file.
document.Save(memoryStream);
//Create the response to return.
HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
//Set the PDF document saved stream as content of response.
response.Content = new ByteArrayContent(memoryStream.ToArray());
//Set the contentDisposition as attachment.
response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
{
    FileName = "Sample.pdf"
};
//Set the content type as PDF document mime type.
response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/pdf");
//Return the response with output PDF document stream.
return response;

{% endhighlight %}
{% endtabs %}

Step 9: (Optional) Test the function locally by pressing **F5** in Visual Studio. Copy the localhost URL displayed in the terminal (it includes a `?name=...` query string by default) and paste it into a browser to verify the PDF is returned.

Step 10: Right-click the project and select **Publish**. Then, create a new profile in the Publish Window.
![Create a new profile in the Publish Window](Azure_Images/Azure-Functions-V4/Click_publish.png)

Step 11: Select the target as **Azure** and click the **Next** button.
![Select the target as Azure](Azure_Images/Azure-Functions-V4/Set_Azure_target.png)

Step 12: Select **Azure Function App (Windows)** and click the **Next** button.
![Select Azure function app](Azure_Images/Azure-Functions-V4/Select_function_app.png)

Step 13: Click the **Create new** button.
![Configure Hosting Plan](Azure_Images/Azure-Functions-V4/Select_create_new_button.png)

Step 14: Click the **Create** button to create the App Service plan.
![Select the plan type](Azure_Images/Azure-Functions-V4/Hosting_plan.png)

Step 15: After the App Service is created, click the **Finish** button.
![Creating app service](Azure_Images/Azure-Functions-V4/Creating_app_service.png)

Step 16: Click the **Close** button.
![Click the Close button](Azure_Images/Azure-Functions-V4/publish-profile-creation-progress.png)

Step 17: Click the **Publish** button to deploy the function to Azure.
![Click the Publish button](Azure_Images/Azure-Functions-V4/successful_publish.png)

Step 18: In the Azure portal, select **App Services** and open the deployed function. Once the function is running, click **Get function URL → Copy**, then paste the URL into a new browser tab. The PDF document will download, as shown below.
![Output document - the generated PDF downloads to the browser](Azure_Images/Azure-Functions-V4/Final_output.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Azure/Azure%20Function%20V4).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind).

## Troubleshooting

* **`NullReferenceException` from `GetManifestResourceStream`** — The image must be added as an **Embedded Resource** and the resource name must follow the `<RootNamespace>.<FolderPath>.<FileName>` pattern. Verify the name with `assembly.GetManifestResourceNames()`.
* **401 Unauthorized when invoking the function URL** — The function is secured by a function key. Append the `?code=…` query string returned by **Get function URL**, or switch the `HttpTrigger` attribute to `AuthLevel.Anonymous` for testing.
* **PDF returns as an empty/corrupted file** — Ensure `ms.Position = 0;` is set before copying to `ByteArrayContent` (the existing code does this correctly).
* **NuGet restore fails on .NET Framework** — `Syncfusion.Pdf.AspNet` is a legacy package; if it does not restore, pin a specific older version (for example, `Install-Package Syncfusion.Pdf.AspNet -Version 19.4.0.55`) compatible with your target framework.
* **Functions v1 runtime not listed in Visual Studio** — Install the **Azure Functions v1 (.NET Framework)** template via the Visual Studio Installer under **Individual components**.

> For additional help, see the Syncfusion [.NET PDF library FAQ](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/faqs/migrate-from-net-framework-to-net-core) or open a support ticket through the [Syncfusion support portal](https://www.syncfusion.com/support).

## Next Steps

Explore advanced PDF capabilities and Azure integration patterns:

### Advanced PDF Features
- **[Merge Multiple PDFs](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)** — Combine multiple reports into a single document
- **[Split PDF Documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)** — Extract specific pages or create filtered PDFs
- **[Add Watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)** — Brand PDFs with company logos and confidentiality markers
- **[Create Interactive Forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)** — Build fillable PDF forms for data collection
- **[Digital Signatures](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-digitalsignature)** — Sign PDFs programmatically for compliance