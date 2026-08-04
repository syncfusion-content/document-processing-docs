---
title: Open and save Presentation in Azure Functions v4 | Syncfusion
description: Open and save Presentation in Azure Functions v4 using .NET Core PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Open and save Presentation in Azure Functions v4

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET Core PowerPoint library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) used to create, read, edit, and convert PowerPoint documents programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **open and save a PowerPoint Presentation in Azure Functions v4**.

N> **Prerequisites:** An active [Azure subscription](https://azure.microsoft.com/en-us/free/) and Visual Studio 2022 (or later) with the **Azure development** workload installed. This article targets the **Azure Functions v4** runtime with the **.NET 8.0 (Long Term Support)** isolated worker model.

## Steps to open and save Presentation in Azure Functions v4

Step 1: Create a new Azure Functions project. Select the **Azure Functions** template and choose the **HTTP trigger** function type.
![Create an Azure Functions project](Azure-Images/Functions-v1/Azure_PowerPoint_Presentation_to_PDF.png)

Step 2: Configure the project name and select the location.
![Configure the project name and location](Azure-Images/Functions-v1/Configuration-Open-and-Save-PowerPoint.png)

Step 3: Select the function worker as **.NET 8.0 (Long Term Support)**. 
![Select function worker](Azure-Images/Functions-v4/Additional_Information_PowerPoint_Presentation_to_PDF.png)

Step 4: Install the [Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).
![Install Syncfusion.Presentation.Net.Core NuGet package](Workingwith-Core/Nuget-Package_Open_and_Save.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or from the NuGet feed, you also have to add the **Syncfusion.Licensing** assembly reference and include a license key in your project. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: Include the following namespaces in the **Function1.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Syncfusion.Presentation;

{% endhighlight %}
{% endtabs %}

Step 6: Add the following complete **Run** method to the **Function1** class to open the existing PowerPoint Presentation, modify a shape on the first slide, and return the modified Presentation in the HTTP response.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public static async Task<HttpResponseData> Run(
    [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
    ILogger log)
{
    //Register the Syncfusion license key (only required once per app domain).
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

    //Get the input PowerPoint document as a stream from the request.
    Stream stream = req.Body;

    //Open the existing PowerPoint Presentation.
    using (IPresentation pptxDoc = Presentation.Open(stream))
    {
        //Access the first slide and modify a shape.
        ISlide slide = pptxDoc.Slides[0];
        IShape shape = slide.Shapes[0] as IShape;
        if (shape != null && shape.TextBody != null && shape.TextBody.Text == "Company History")
        {
            shape.TextBody.Text = "Company Profile";
        }

        //Save the modified PowerPoint Presentation to a memory stream.
        using (MemoryStream memoryStream = new MemoryStream())
        {
            pptxDoc.Save(memoryStream);
            memoryStream.Position = 0;

            //Build the HTTP response with the modified Presentation as an attachment.
            HttpResponseData response = req.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Content-Disposition", new[] { "attachment; filename=Sample.pptx" });
            response.Headers.Add("Content-Type", new[] { "application/vnd.openxmlformats-officedocument.presentationml.presentation" });
            response.Body = memoryStream;
            return response;
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 7: Right-click the project and select **Publish**. Then, create a new profile in the **Publish** window.
![Create a new profile in the Publish Window](Azure-Images/Functions-v1/Publish-Open-and-Save-PowerPoint.png)

Step 8: Select the target as **Azure** and click the **Next** button.
![Select the target as Azure](Azure-Images/Functions-v1/Target_PowerPoint_Presentation_to_PDF.png)

Step 9: Click the **Create new** button.
![Configure Hosting Plan](Azure-Images/Functions-v1/Function_Instance_PowerPoint_Presentation_to_PDF.png)

Step 10: Click the **Create** button. 
![Select the plan type](Azure-Images/Functions-v1/Hosting-Open-and-Save-PowerPoint.png)

Step 11: After the Function App is created, click the **Finish** button. 
![Creating Function App](Azure-Images/Functions-v1/Azure-Instance-Open-and-Save-PowerPoint.png)

Step 12: Click the **Publish** button.
![Click Publish Button](Azure-Images/Functions-v1/Before-Publish-Open-and-Save-PowerPoint.png)

Step 13: Publishing has succeeded.
![Publish succeeded](Azure-Images/Functions-v1/After-Publish-Open-and-Save-PowerPoint.png)

Step 14: Go to the Azure portal and select **Function App**. After the function is running, click **Get Function URL** and copy it. Then, paste the URL into the client sample in the next section (which will request the Azure Function to open and save a PowerPoint Presentation using the template PowerPoint document). The output PowerPoint Presentation is shown below.

![Output PowerPoint Presentation in Azure Functions v4](Workingwith-Core/Open-and-Save-output-image.png)

## Steps to post the request to Azure Functions

This console application posts a sample `Template.pptx` (any existing PowerPoint Presentation) to the Azure Function and saves the modified Presentation returned by the function as `Sample.pptx`.

Step 1: Create a .NET 8.0 console application to request the Azure Functions API. Add a folder named **Data** to the project and place a sample PowerPoint file named `Template.pptx` inside it.

Step 2: Add the following code snippet into the **Main** method to post the request to Azure Functions with the template PowerPoint document and save the returned PowerPoint Presentation to disk.

{% tabs %}
{% highlight c# tabtitle="C#" %}

try
{
    //Read the template PowerPoint file.
    using (FileStream fs = new FileStream(@"../../Data/Template.pptx", FileMode.Open, FileAccess.Read, FileShare.Read))
    using (MemoryStream inputStream = new MemoryStream())
    {
        fs.CopyTo(inputStream);
        inputStream.Position = 0;

        Console.WriteLine("Please enter your Azure Functions URL:");
        string functionURL = Console.ReadLine();

        //Create an HttpClient to post the request.
        using (HttpClient client = new HttpClient())
        {
            //Set the content type and convert the PowerPoint stream to a byte array.
            byte[] byteArray = inputStream.ToArray();
            using (HttpContent content = new ByteArrayContent(byteArray))
            {
                content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.presentationml.presentation");

                //Post the request to the Azure Functions URL and get the response.
                using (HttpResponseMessage res = await client.PostAsync(functionURL, content))
                {
                    //Ensure the response is successful.
                    res.EnsureSuccessStatusCode();

                    //Save the returned PowerPoint file stream to disk.
                    using (Stream responseStream = await res.Content.ReadAsStreamAsync())
                    using (FileStream fileStream = File.Create("Sample.pptx"))
                    {
                        responseStream.CopyTo(fileStream);
                    }
                }
            }
        }
    }
}
catch (Exception ex)
{
    Console.WriteLine("Error posting request to Azure Functions: " + ex.Message);
    throw;
}

{% endhighlight %}
{% endtabs %}

From GitHub, you can download the [console application (.NET 8.0 client that posts the template PowerPoint to the Azure Function)](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint/Azure/Azure_Functions/Console_Application) and the [Azure Functions v4 project (.NET 8.0 HTTP trigger that opens, edits, and returns the PowerPoint Presentation)](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint/Azure/Azure_Functions/Azure_Functions_v4).

Looking for the full .NET PowerPoint Library component overview, features, pricing, and documentation? Visit the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) page. 

