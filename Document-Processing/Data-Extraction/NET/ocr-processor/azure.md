---
title: Perform OCR on PDF and image files in Azure | Syncfusion
description: Learn how to perform OCR on scanned PDF documents and images with different tesseract versions in Azure using Syncfusion .NET OCR library.
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
---

# Perform OCR in Azure using C#

The [.NET OCR library](https://www.syncfusion.com/document-sdk/net-pdf-library/ocr-process) is used to extract text from scanned PDFs and images in Azure with the help of Google's [Tesseract](https://github.com/tesseract-ocr/tesseract) Optical Character Recognition engine.

## Prerequisites

**Version Compatibility**

- Syncfusion.PDF.OCR.Net.Core supports .NET 8.0 and later versions.

**Supported Inputs**

The OCR processor supports the following input formats:

- Single-page and multi-page PDF documents
- Scanned images in common formats (JPEG, PNG, TIFF)
- Recommended DPI: 200 DPI or higher for optimal OCR accuracy

**Required Software**

- .NET 8 SDK or later
- Azure subscription with Azure App Service or Azure Functions

**Register the License Key**

N> Starting with v16.2.0.x, if you reference Syncfusion® assemblies from trial setup or from the NuGet feed, you must add the Syncfusion.Licensing assembly reference and register a license key in your application. For more information, see the licensing documentation.

Include the following code in the **Program.cs** file to register the license key:

{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.Licensing;

// Register Syncfusion license at application startup
SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");

{% endhighlight %}
{% endtabs %}

N> 1. Beginning from version 21.1.x, the TesseractBinaries and Tesseract language data folders are now included by default; you no longer have to set these paths explicitly.
N> 2. The current NuGet package includes Tesseract 5.0, which provides support for 100+ languages.

## Azure App Service Windows

### Steps to perform OCR on an entire PDF document in Azure App Service

Step 1: Create a new ASP.NET Core MVC application targeting **.NET 8 or later**:
![Create ASP.NET Core MVC application](OCR-Images/azure_step1.png)

Step 2: In the configuration window, name your project and click **Next**:
![Configuration window1](OCR-Images/Azure_configuration_window1.png)
![Configuration window2](OCR-Images/azure_additional_information.png)

Step 3: Install the [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core) NuGet package into your ASP.NET Core application from [nuget.org](https://www.nuget.org/):  
![PDF OCR ASP.NET Core NuGet package](OCR-Images/OCR-Core-NuGet-package.png)

Step 4: Add a new button in **Index.cshtml** to trigger the OCR process:

{% tabs %}
{% highlight CSHTML %}

@{
    Html.BeginForm("PerformOCR", "Home", FormMethod.Get);
    {
        <br />
        <div>
            <input type="submit" value="Perform OCR" style="width:150px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

Step 5: Include the following namespaces in **HomeController.cs**:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;
using Microsoft.AspNetCore.Hosting;

{% endhighlight %}
{% endtabs %}

Step 6: Add the code sample to perform OCR on the entire PDF document using the [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

public IActionResult PerformOCR()
{
    // Initialize the OCR processor
    OCRProcessor processor = new OCRProcessor();
    // Load a PDF document
    PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
    // Set OCR language
    processor.Settings.Language = Languages.English;
    // Set Tesseract version (5.0 is bundled with v21.1.x+)
    processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
    // Perform OCR on the document
    string ocr = processor.PerformOCR(lDoc);
    // Save the processed document
    MemoryStream stream = new MemoryStream();
    lDoc.Save(stream);
    return File(stream.ToArray(), System.Net.Mime.MediaTypeNames.Application.Pdf, "OCR_Azure.pdf");
}

{% endhighlight %}
{% endtabs %}

Step 7: Test the OCR creation on your local machine.

### Steps to publish to Azure App Service

Step 1: Right-click the project and click **Publish**:
![Click publish button](OCR-Images/azure_step5.png)

Step 2: Create a new profile in the publish target window:
![Create new profile1](OCR-Images/azure_step6.png)

Step 3: Select the specific target as **Azure App Service (Windows)**:
![Create new profile2](OCR-Images/azure_step7.png)

Step 4: To create a new App Service, click **Create new**:
![Click create new option](OCR-Images/azure_step8.png)

Step 5: Click the **Create** button to proceed with **App Service** creation:
![Click the create button](OCR-Images/azure_step9.png)

Step 6: Click the **Finish** button to finalize the **App Service** creation:
![Click the finish button](OCR-Images/azure_step10.png)

Step 7: Click the **Close** button:
![Create a ASP.NET Core Project](OCR-Images/azure_step11.png)

Step 8: Click the **Publish** button:
![Click the Publish button](OCR-Images/azure_step12.png)

Step 9: The publish operation has been completed successfully:
![Publish has been succeeded](OCR-Images/azure_step13.png)

The published webpage will open in the browser. Click the **Perform OCR** button to perform OCR on a PDF document:
![Published webpage](OCR-Images/Output-genrate-webpage.png)
![OCR output document](OCR-Images/OCR-output-image.png)

A complete working sample for performing OCR on a PDF document in Azure App Service on Windows can be downloaded from [GitHub](https://github.com/SyncfusionExamples/OCR-csharp-examples/tree/master/Azure/Azure%20App%20Services).

## Azure Functions

### Steps to perform OCR on an entire PDF document in Azure Functions

Step 1: Create the Azure Function project:
![Create azure function project](OCR-Images/AzureFunctions1.png)

Step 2: Select Azure Functions as the framework and configure HTTP trigger:
![Configuration window1](OCR-Images/AzureFunctions2.png)
![Additional information](OCR-Images/AzureFunctions3.png)

Step 3: Install the [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core) NuGet package into your Azure Functions project from [nuget.org](https://www.nuget.org/):  
![NuGet package installation](OCR-Images/OCR-Core-NuGet-package.png)

Step 4: Copy the **tessdata** folder from **bin > Debug > net6.0 > runtimes** and paste it into the folder containing your project file:
![OCR Azure Functions Tessdata Path](OCR-Images/Tessdata-path.png)
![OCR Azure Functions Tessdata Store](OCR-Images/Tessdata_Store.png)

Step 5: Set the **tessdata** folder to **Copy Always** in the output directory:
![OCR Azure Functions Tessdata Store](OCR-Images/Set_Copy_Always.png)

Step 6: Include the following namespaces in **Function1.cs** to perform OCR on a PDF document:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System;
using System.IO;
using System.Threading.Tasks;
using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using System.Net.Http;
using Syncfusion.Pdf.Parsing;
using System.Net.Http.Headers;
using System.Net;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;

{% endhighlight %}
{% endtabs %}

Step 7: Add the following code sample in the **Function1** class to perform OCR on a PDF document using the [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

[FunctionName("Function1")]
public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequestMessage req, TraceWriter log, ExecutionContext executionContext)
{
    MemoryStream ms = new MemoryStream();
    try
    {
        // Initialize the OCR processor
        OCRProcessor processor = new OCRProcessor();
        FileStream stream = new FileStream(Path.Combine(executionContext.FunctionAppDirectory, "Data", "Input.pdf"), FileMode.Open);
        // Load a PDF document
        PdfLoadedDocument lDoc = new PdfLoadedDocument(stream);
        // Set OCR language
        processor.Settings.Language = Languages.English;
        // Set Tesseract version (5.0 is bundled with v21.1.x+)
        processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
        // Perform OCR on the document with tessdata path
        string ocr = processor.PerformOCR(lDoc, Path.Combine(executionContext.FunctionAppDirectory, "tessdata"));            
        // Save the processed PDF document
        lDoc.Save(ms);
        ms.Position = 0;
    }
    catch (Exception ex)
    {
        // Create an error document with exception details
        PdfDocument document = new PdfDocument();
        PdfPage page = document.Pages.Add();
        // Create PDF graphics for the page
        PdfGraphics graphics = page.Graphics;
        // Set the standard font
        PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 6);
        // Draw the error message
        graphics.DrawString(ex.ToString(), font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));
        ms = new MemoryStream();
        // Save the error document
        document.Save(ms);
    }
    HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
    response.Content = new ByteArrayContent(ms.ToArray());
    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
    {
        FileName = "Output.pdf"
    };
    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/pdf");
    return response;
}

{% endhighlight %}
{% endtabs %}

Step 8: Test the OCR creation on your local machine.

### Steps to publish to Azure Functions

Step 1: Right-click the project and click **Publish**. Create a new profile in the Publish window to create the Azure Function App with a consumption plan:
![OCR Azure Functions publish1](OCR-Images/AzureFunctions5.png)
![OCR Azure Functions publish2](OCR-Images/azure_step6.png)
![OCR Azure Functions publish3](OCR-Images/AzureFunctions7.png)

Step 2: To create a new Function App, click **Create new**:
![Click create new option](OCR-Images/AzureFunctions8.png)

Step 3: Click the **Create** button to proceed with **Function App** creation:
![Click the create button](OCR-Images/AzureFunctions9.png)

Step 4: Click the **Finish** button to finalize the **Function App** creation:
![Click the finish button](OCR-Images/AzureFunctions10.png)

Step 5: Select the deployment type:
![Create a Deployment type](OCR-Images/Deployment_type.png)

Step 6: Click the **Close** button:
![Create a ASP.NET Core Project](OCR-Images/AzureFunctions11.png)

Step 7: Click the **Publish** button:
![Click the Publish button](OCR-Images/AzureFunctions12.png)

Step 8: The publish operation has been completed successfully:
![Publish has been succeeded](OCR-Images/AzureFunctions13.png)

Step 9: Go to the Azure portal and select **Function Apps**. After the service is running, click **Get function URL > Copy**. Include the URL as a query string and paste it into a new browser tab. You will obtain a PDF document as follows:
![Output PDF document](OCR-Images/OCR-output-image.png)

A complete working sample can be downloaded from [GitHub](https://github.com/SyncfusionExamples/OCR-csharp-examples/tree/master/Azure/Azure%20Function).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion® PDF library features.