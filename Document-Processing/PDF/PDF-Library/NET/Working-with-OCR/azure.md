---
title: Perform OCR on PDF and image files in Azure | Syncfusion
description: Learn how to perform OCR on scanned PDF documents and images with different tesseract versions in Azure using Syncfusion .NET OCR library.
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
---

# Perform OCR in Azure using C#

The [Syncfusion<sup>&reg;</sup> .NET OCR library](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/ocr-process) is used to extract text from scanned PDFs and images in Azure with the help of Google's [Tesseract](https://github.com/tesseract-ocr/tesseract) Optical Character Recognition engine.

## Azure App Service Windows

### Steps to perform OCR on entire PDF document in Azure App Service

Step 1: Create a new ASP.NET Core MVC application.
![Create ASP.NET Core MVC application](OCR-Images/azure_step1.png) 

Step 2: In configuration windows, name your project and click Next.
![Configuration window1](OCR-Images/Azure_configuration_window1.png) 
![Configuration window2](OCR-Images/azure_additional_information.png) 

Step 3: Install the [Syncfusion.PDF.OCR.NET](https://www.nuget.org/packages/Syncfusion.PDF.OCR.NET) NuGet package as a reference to your .NET Core application [NuGet.org](https://www.nuget.org/).
![NuGet package installation](OCR-Images/azure_NuGet_package.png) 

N> 1. Beginning from version 21.1.x, the default configuration includes the addition of the TesseractBinaries and Tesseract language data folder paths, eliminating the requirement to explicitly provide these paths.
N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Add a new button in index.cshtml as follows.

{% highlight c# tabtitle="C#" %}

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

Step 5: Include the following namespaces in the HomeController.cs file.

{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;
using Microsoft.AspNetCore.Hosting.IHostingEnvironment;

{% endhighlight %}

Step 6: Add the code samples for performing OCR on the entire PDF document using [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class. 

{% highlight c# tabtitle="C#" %}

public IActionResult PerformOCR()
{
    //Initialize the OCR processor.
    OCRProcessor processor = new OCRProcessor();
    //Load a PDF document.
    PdfLoadedDocument lDoc = new PdfLoadedDocument("Input.pdf");
    //Set OCR language to process.
    processor.Settings.Language = Languages.English;
    //Perform OCR with input document.
    string ocr = processor.PerformOCR(lDoc);
    //Save the document. 
    MemoryStream stream = new MemoryStream();
    lDoc.Save(stream);
    return File(stream.ToArray(), System.Net.Mime.MediaTypeNames.Application.Pdf, "OCR_Azure.pdf");
}

{% endhighlight %}

Step 7: Now, check the OCR creation in the local machine.

### Steps to publish as Azure App Service

Step 1: Right-click the project and click Publish.
![Click publish button](OCR-Images/azure_step5.png)   

Step 2: Create a new profile in the publish target window.
![Create new profile1](OCR-Images/azure_step6.png)   

Step 3: Select the Specific target as **Azure App Service (Windows)**.
![Create new profile2](OCR-Images/azure_step7.png)  

Step 4: To create a new app service, click **Create new** option.
![Click create new option](OCR-Images/azure_step8.png)

Step 5: Click the **Create** button to proceed with **App Service** creation.
![Click the create button](OCR-Images/azure_step9.png)

Step 6: Click the **Finish** button to finalize the **App Service** creation.
![Click the finish button](OCR-Images/azure_step10.png)

Step 7: Click **Close** button.
![Create a ASP.NET Core Project](OCR-Images/azure_step11.png)

Step 8: Click the **Publish** button.
![Click the Publish button](OCR-Images/azure_step12.png)

Step 9: Now, Publish has been succeeded.
![Publish has been succeeded](OCR-Images/azure_step13.png)

Now, the published webpage will open in the browser, then click the **Perform OCR** button then perform OCR on a PDF document.
![Published webpage](OCR-Images/Output-genrate-webpage.png) 
![OCR output document](OCR-Images/OCR-output-image.png) 

A complete work sample for performing OCR on a PDF document in Azure App Service on Windows can be downloaded from [GitHub](https://github.com/SyncfusionExamples/OCR-csharp-examples/tree/master/Azure/Azure%20App%20Services).

## Azure Functions

### Steps to perform OCR on the entire PDF document in Azure Functions

Step 1: Create the Azure function project.
![Create azure function project](OCR-Images/AzureFunctions1.png) 

Step 2: Select the framework to Azure Functions and select HTTP triggers as follows.
![Configuration window1](OCR-Images/AzureFunctions2.png) 
![Additional information](OCR-Images/AzureFunctions3.png) 

Step 3: Install the [Syncfusion.PDF.OCR.NET](https://www.nuget.org/packages/Syncfusion.PDF.OCR.NET) NuGet package as a reference to your .NET Core application [NuGet.org](https://www.nuget.org/).
![NuGet package installation](OCR-Images/AzureFunctions4.png) 

Step 4: Copy the tessdata folder from the **bin->Debug->net6.0->runtimes** and paste it into the folder that contains the project file.
![OCR Azure Functions Tessdata Path](OCR-Images/Tessdata-path.png) 
![OCR Azure Functions Tessdata Store](OCR-Images/Tessdata_Store.png) 

Step 5: Then, set Copy to output directory to give copy always the tessdata folder.
![OCR Azure Functions Tessdata Store](OCR-Images/Set_Copy_Always.png)

Step 6: Include the following namespaces in the **Function1.cs** file to perform OCR for a PDF document using C#.

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

Step 7: Add the following code sample in the Function1 class to perform OCR for a PDF document using [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class in Azure Functions.

{% highlight c# tabtitle="C#" %}

[FunctionName("Function1")]
public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequestMessage req, TraceWriter log, ExecutionContext executionContext)
{
    MemoryStream ms = new MemoryStream();
    try
    {
        OCRProcessor processor = new OCRProcessor();
        FileStream stream = new FileStream(Path.Combine(executionContext.FunctionAppDirectory, "Data", "Input.pdf"), FileMode.Open);
        //Load a PDF document.
        PdfLoadedDocument lDoc = new PdfLoadedDocument(stream);
        //Set OCR language to process.
        processor.Settings.Language = Languages.English;
        //Perform OCR with input document.
        string ocr = processor.PerformOCR(lDoc,Path.Combine(executionContext.FunctionAppDirectory, "tessdata"));            
        //Save the PDF document.  
        lDoc.Save(ms);
        ms.Position = 0;
    }
    catch (Exception ex)
    {
        //Add a page to the document.
        PdfDocument document = new PdfDocument();
        PdfPage page = document.Pages.Add();
        //Create PDF graphics for the page.
        PdfGraphics graphics = page.Graphics;
        //Set the standard font.
        PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 6);
        //Draw the text.
        graphics.DrawString(ex.ToString(), font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));
        ms = new MemoryStream();
        //Save the PDF document.  
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

Step 8: Now, check the OCR creation in the local machine.

### Steps to publish as Azure Functions 

Step 1: Right-click the project and click Publish. Then, create a new profile in the Publish Window. So, create the Azure Function App with a consumption plan.
![OCR Azure Functions publish1](OCR-Images/AzureFunctions5.png)
![OCR Azure Functions publish2](OCR-Images/azure_step6.png)
![OCR Azure Functions publish3](OCR-Images/AzureFunctions7.png)

Step 4: To create a new app service, click **Create new** option.
![Click create new option](OCR-Images/AzureFunctions8.png)

Step 5: Click the **Create** button to proceed with **App Service** creation.
![Click the create button](OCR-Images/AzureFunctions9.png)

Step 6: Click the **Finish** button to finalize the **App Service** creation.
![Click the finish button](OCR-Images/AzureFunctions10.png)

Step 7: Click deployment type.
![Create a Deployment type](OCR-Images/Deployment_type.png)

Step 8: Click **Close** button.
![Create a ASP.NET Core Project](OCR-Images/AzureFunctions11.png)

Step 9: Click the **Publish** button.
![Click the Publish button](OCR-Images/AzureFunctions12.png)

Step 10: Now, Publish has been succeeded.
![Publish has been succeeded](OCR-Images/AzureFunctions13.png)
 

Step 11: Now, go to the Azure portal and select the Functions Apps. After running the service, click Get function URL > Copy. Include the URL as a query string in the URL. Then, paste it into the new browser tab. You will get a PDF document as follows.
![Output PDF document](OCR-Images/OCR-output-image.png)

A complete working sample can be downloaded from [GitHub](https://github.com/SyncfusionExamples/OCR-csharp-examples/tree/master/Azure/Azure%20Function).

Click [here](https://www.syncfusion.com/document-processing/pdf-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.