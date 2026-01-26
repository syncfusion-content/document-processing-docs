---
title: Convert Word to Image in ASP.NET Core Web API | Syncfusion
description: Convert Word to image in ASP.NET Core Web API using .NET Core Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word document to Image in ASP.NET Core Web API

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-processing/word-framework/net-core/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to image in ASP.NET Core Web API**.

## Steps to convert Word document to Image in programmatically:

The below steps illustrate convert a simple Word document to Image in ASP.NET Core Web API.

Step 1: Create a new C# ASP.NET Core Web API project.

![Create ASP.NET Core Web API project in Visual Studio](ASP-NET-Core-WEB-API-images/ASP-NET-Core-Web-API-template.png)

Step 2: Install the [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org).

![Install Syncfusion.DocIORenderer.Net.Core NuGet Package](ASP-NET-Core-WEB-API-images/Word-to-Image-Nuget-package.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Add a new API controller empty file in the project.

![Add empty API controller to the project](ASP-NET-Core-WEB-API-images/Word-to-Image-new-controller.png)

Step 4: Include the following namespaces in the **ValuesController.cs** file.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Microsoft.AspNetCore.Mvc;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;

{% endhighlight %}

{% endtabs %}

Step 5: Add a new action method ConvertWordToImage in **ValuesController.cs** and include the below code snippet to Convert Word document to image and download it.

{% tabs %}

{% highlight c# tabtitle="C#" %}

[HttpGet]
[Route("api/ConvertWordToImage")]
public IActionResult ConvertWordToImage()
{
    try
    {
        var fileDownloadName = "Output.jpeg";
        const string contentType = "image/jpeg";
        var stream = ConvertWordDocumentToImage();
        stream.Position = 0;
        return File(stream, contentType, fileDownloadName);
    }
    catch (Exception ex)
    {
        return BadRequest("Error occurred while converting Word to Image: " + ex.Message);
    }
}
 
{% endhighlight %}

{% endtabs %}

Step 6: Implement the `ConvertWordDocumentToImage` method in `ValuesController.cs`.
 
{% tabs %}

{% highlight c# tabtitle="C#" %}

public static Stream ConvertWordDocumentToImage()
{
    // Loads the input Word document
    WordDocument wordDocument = new WordDocument(Path.GetFullPath("Data/Input.docx"), FormatType.Docx);   
    DocIORenderer render = new DocIORenderer();
    // Convert the first page of the Word document into an image.
    Stream imageStream = wordDocument.RenderAsImages(0, ExportImageFormat.Jpeg);
    // Close the Word document.
    wordDocument.Close();
    // Reset the stream position.
    imageStream.Position = 0;
    // Save the image file.
    return imageStream;                    
}

{% endhighlight %}

{% endtabs %}

Step 7: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 8: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/ASP.NET-Core-Web-API/Convert-Word-Document-to-Image).

## Steps for accessing the Web API using HTTP requests

Step 1: Create a console application.
![Create a Console application in Visual Studio](ASP-NET-Core-WEB-API-images/Console-Template-Net-Core.png)

N> Ensure your ASP.NET Core Web API is running on the specified port before running this client. Adjust the port number if your Web API runs on a different port (check the ASP.NET Core app's launch settings).

Step 2: Add the below code snippet in the **Program.cs** file for accessing the Web API using HTTP requests. 

This method sends a GET request to the Web API endpoint to retrieve and save the converted image.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Create an HttpClient instance
using (HttpClient client = new HttpClient())
{
    try
    {
        // Send a GET request to a URL
        HttpResponseMessage response = await client.GetAsync("https://localhost:7112/api/Values/api/ConvertWordToImage");

        // Check if the response is successful
        if (response.IsSuccessStatusCode)
        {
            // Read the content as a string
            Stream responseBody = await response.Content.ReadAsStreamAsync();
            FileStream fileStream = File.Create("../../../Output/Output.jpeg");
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

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/ASP.NET-Core-Web-API/Client-Application).

Upon executing the program, the **image** will be generated as follows.

![ASP .NET Core WEB API output Word document](WordToPDF_images/Output-WordtoImage.png)

Click [here](https://www.syncfusion.com/document-processing/word-framework/net) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features.

An online sample link to [convert Word document to image](https://document.syncfusion.com/demos/word/wordtoimage#/tailwind) in ASP.NET Core.
