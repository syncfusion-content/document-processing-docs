---
title: Convert PowerPoint to PDF in ASP.NET Core Web API | Syncfusion
description: Convert PowerPoint to PDF in ASP.NET Core Web API using .NET Core PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Convert PowerPoint to PDF in ASP.NET Core Web API

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET Core PowerPoint library](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) used to create, read, edit and **convert PowerPoint presentation** programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **convert a PowerPoint to PDF in ASP.NET Core Web API**.

## Steps to convert PowerPoint to PDF programmatically

Step 1: Create a new C# ASP.NET Core Web API project.

![Create ASP.NET Core Web API project in Visual Studio](ASP-NET-Core-WEB-API-images/ASP-NET-Core-Web-API-template.png)

Step 2: Install the [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) NuGet package as a reference to your project from  [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.Presentation.Net.Core NuGet Package](ASP-NET-Core-WEB-API-images/Nuget-Package-NET-Core-Web-API.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.


Step 3: Add a new API controller empty file in the project.

![Add empty API controller to the project](ASP-NET-Core-WEB-API-images/Empty-API-Controller.png)

Step 4: Include the following namespaces in the **ValuesController.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 5: Add a new action method ConvertPPTXToPdf in **ValuesController.cs** and include the below code snippet to convert an PowerPoint Presentation to PDF and download it.

{% tabs %}

{% highlight c# tabtitle="C#" %}

[HttpGet]
[Route("api/ConvertToPdf")]
public IActionResult ConvertPPTXToPdf()
{
    try
    {
        var fileDownloadName = "Output.pdf";
        const string contentType = "application/pdf";
        var stream = ConvertPresentationToPdf();
        stream.Position = 0;
        return File(stream, contentType, fileDownloadName);
    }
    catch (Exception ex)
    {
        return BadRequest("Error occurred while converting PowerPoint to PDF: " + ex.Message);
    }
}
 
{% endhighlight %}

{% endtabs %}

Step 6: Implement the `ConvertPresentationToPdf` method in `ValuesController.cs`.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public static MemoryStream ConvertPresentationToPdf()
{
    //Open the existing PowerPoint presentation.
    using (IPresentation pptxDoc = Presentation.Open(Path.GetFullPath("Data/Input.pptx")))
    {
        //Convert the PowerPoint presentation to PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {  
            //Create the MemoryStream to save the converted PDF.      
            MemoryStream pdfStream = new MemoryStream();
            //Save the converted PDF document to MemoryStream.
            pdfDocument.Save(pdfStream);
            pdfStream.Position = 0;
            //Download PDF document in the browser.
            return pdfStream;
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 7: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 8: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/ASP.NET-Core-Web-API/Convert-PowerPoint-Presentation-to-PDF).

## Steps for accessing the Web API using HTTP requests

Step 1: Create a console application.
![Create a Console application in Visual Studio](ASP-NET-Core-WEB-API-images/Console-Template-Net-Core.png)

N> Ensure your ASP.NET Core Web API is running on the specified port before running this client. Adjust the port number if your Web API runs on a different port (check the ASP.NET Core app's launch settings).

Step 2: Add the below code snippet in the **Program.cs** file for accessing the Web API using HTTP requests. 

This method sends a GET request to the Web API endpoint to retrieve and save the converted PDF.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Create an HttpClient instance
using (HttpClient client = new HttpClient())
{
    try
    {
        // Send a GET request to a URL
        HttpResponseMessage response = await client.GetAsync("https://localhost:7241/api/Values/api/ConvertToPdf");
        // Check if the response is successful
        if (response.IsSuccessStatusCode)
        {
            // Read the content as a string
            Stream responseBody = await response.Content.ReadAsStreamAsync();
            FileStream fileStream = File.Create("../../../Output/Output.pdf");
            responseBody.CopyTo(fileStream);
            fileStream.Close();
        }
        else
        {
            Console.WriteLine("HTTP error status code: " + response.StatusCode);
        }
    }
    catch (HttpRequestException e)
    {
        Console.WriteLine("Request exception: " + e.Message);
    }
}

{% endhighlight %}

{% endtabs %}

Step 3: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 4: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/ASP.NET-Core-Web-API/Client%20Application).

Upon executing the program, the **PDF** will be generated as follows.

![ASP .NET Core WEB API output PDF](ASP-NET-Core-WEB-API-images/ASP-NET-Core-Web-API-Output.png)

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> PowerPoint Library (Presentation) features. 

An online sample link to [convert PowerPoint Presentation to PDF](https://document.syncfusion.com/demos/powerpoint/pptxtopdf#/tailwind) in ASP.NET Core. 
