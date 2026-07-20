---
title: Open and save Word document in Azure Functions | Syncfusion
description: Open and save Word document in Azure Functions Flex Consumption using .NET Core Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Open and save Word document in Azure Functions (Flex Consumption)

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-sdk/net-word-library) used to create, read, edit, and convert Word documents programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **Open and save Word documents in Azure Functions deployed on the Flex Consumption plan**.

## Steps to Open and save Word document in Azure Functions (Flex Consumption)

Step 1: Create a new Azure Functions project using Visual Studio 2022 (v17.6 or later) or Visual Studio Code with the Azure Functions extension. Select the **Azure Functions** project template.
![Create a Azure Functions project](Azure-Images/Functions-Flex-Consumption/Azure_Word_Document.png)

Step 2: Create a project name and select the location.
![Create a project name](Azure-Images/Functions-Flex-Consumption/Configuration-Open-and-Save-Word-Document.png)

Step 3: Select function worker as **.NET 8.0 (Long Term Support)** (isolated worker) and target **Flex Consumption (Linux)** hosting, which is suitable for isolated worker functions.
![Select function worker](Azure-Images/Functions-Flex-Consumption/Additional_Information_Word_Document.png)

Step 4: Install the [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/). You can install it using the **Manage NuGet Packages** UI in Visual Studio or by running the following command in the terminal:

```dotnet add package Syncfusion.DocIO.Net.Core```
![Install Syncfusion.DocIO.Net.Core NuGet package](Azure-Images/Functions-Flex-Consumption/Nuget-Package-Open-and-Save-Word-Document.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you must also add a reference to the **Syncfusion.Licensing** assembly and include a license key in your projects. Register the license key in the function's `Program.cs` or at the start of the `Run` method. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: Include the following namespaces in the **Function1.cs** file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;

{% endhighlight %}

{% endtabs %}

Step 6: Add the following code snippet to the **Function1** class. The class uses the `[Function("Function1")]` attribute and an injected `ILogger` to perform **Open and save Word document** in Azure Functions and return the resultant **Word document** to the client end.

{% tabs %}
{% highlight c# tabtitle="C#" %}

    public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequest req)
    {
        try
        {
            // Create a memory stream to hold the incoming request body (Word document bytes)
            await using MemoryStream inputStream = new MemoryStream();
            // Copy the request body into the memory stream
            await req.Body.CopyToAsync(inputStream);
            // Check if the stream is empty (no file content received)
            if (inputStream.Length == 0)
                return new BadRequestObjectResult("No file content received in request body.");
            // Reset stream position to the beginning for reading
            inputStream.Position = 0;
            // Load the Word document from the stream (auto-detects format type)
            using WordDocument document = new WordDocument(inputStream, Syncfusion.DocIO.FormatType.Automatic);
            // Access the first section in the Word document.
            IWSection section = document.Sections[0];
            // Add a new paragraph to the section.
            IWParagraph paragraph = section.AddParagraph();
            paragraph.ParagraphFormat.FirstLineIndent = 36;
            paragraph.BreakCharacterFormat.FontSize = 12f;
            IWTextRange text = paragraph.AppendText("In 2000, Adventure Works Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the Adventure Works Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.");
            text.CharacterFormat.FontSize = 12f;
            // Save the Word document to a memory stream.
            using MemoryStream memoryStream = new MemoryStream();
            document.Save(memoryStream, FormatType.Docx);
            memoryStream.Position = 0;
            var bytes = memoryStream.ToArray();
            return new FileContentResult(bytes, "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
            {
                FileDownloadName = "document.docx"
            };
        }
        catch (Exception ex)
        {
            // Log the error with details for troubleshooting
            _logger.LogError(ex, "Error opening and saving document.");
            // Prepare error message including exception details
            var msg = $"Exception: {ex.Message}\n\n{ex}";
            // Return a 500 Internal Server Error response with the message
            return new ContentResult { StatusCode = 500, Content = msg, ContentType = "text/plain; charset=utf-8" };
        }
    }
	
{% endhighlight %}
{% endtabs %}

Step 7: Right click the project and select **Publish**. Then, create a new profile in the Publish Window.
![Create a new profile in the Publish Window](Azure-Images/Functions-Flex-Consumption/Publish-Open-and-Save-Word-Document.png)

Step 8: Select the target as **Azure** and click the **Next** button.
![Select the target as Azure](Azure-Images/Functions-Flex-Consumption/Target_Word_Document.png)

Step 9: Select the specific target as **Azure Function App** and click the **Next** button.
![Select the target as Azure](Azure-Images/Functions-Flex-Consumption/Specific_Target_Word_Document.png)

Step 10: Select the **Create new** button.
![Configure Hosting Plan](Azure-Images/Functions-Flex-Consumption/Function_Instance_Word_Document.png)

Step 11: Click the **Create** button. 
![Select the plan type](Azure-Images/Functions-Flex-Consumption/Hosting_Word_Document.png)

Step 12: After the app service is created, click the **Finish** button. 
![Creating app service](Azure-Images/Functions-Flex-Consumption/Finish_Word_Document.png)

Step 13: Click the **Publish** button.
![Click Publish Button](Azure-Images/Functions-Flex-Consumption/Before_Publish_Word_Document.png)

Step 14: Publish has succeeded.
![Publish succeeded](Azure-Images/Functions-Flex-Consumption/After_Publish_Word_Document.png)

Step 15: Now, go to the Azure portal and select the App Services. After running the service, copy the **Get function URL**. Then, paste it into the client sample below. The client sample will request the Azure Functions to perform **Open and save a Word document** using a template Word document. You will get the output Word document as follows.

![Open and Save in Azure Functions v4](Azure-Images/Functions-Flex-Consumption/OpenAndSaveOutput.png)

## Steps to post the request to Azure Functions

Step 1: Create a console application (.NET 8.0 or later) to request the Azure Functions API. Ensure a template Word document named `Input.docx` is placed in a `Data` folder within the project, and that an `Output` folder exists for the result.

Step 2: Add the following code snippet into the `Main` method to post the request to Azure Functions with a template Word document and get the resultant Word document.

{% tabs %}
{% highlight c# tabtitle="C#" %}
static async Task Main()
{
        try
        {
    Console.Write("Please enter your Azure Functions URL : ");
    string url = Console.ReadLine();
    if (string.IsNullOrEmpty(url)) return;
            // Create a new HttpClient instance for sending HTTP requests
            using var http = new HttpClient();
            // Read all bytes from the input Word document 
    byte[] bytes = await File.ReadAllBytesAsync(@"Data/Input.docx");
            // Wrap the file bytes into a ByteArrayContent object for HTTP transmission
    using var content = new ByteArrayContent(bytes);
            // Set the content type header to indicate binary data
    content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");
            // Send a POST request to the provided Azure Functions URL with the file content
    using var res = await http.PostAsync(url, content);
            // Read the response body as a byte array
    var resBytes = await res.Content.ReadAsByteArrayAsync();
            // Extract the media type from the response headers
    string mediaType = res.Content.Headers.ContentType?.MediaType ?? string.Empty;
            // Decide the output file path the response is an image or txt         
            string outputPath = mediaType.Contains("word", StringComparison.OrdinalIgnoreCase)
                || mediaType.Contains("officedocument", StringComparison.OrdinalIgnoreCase)
                || mediaType.Equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document", StringComparison.OrdinalIgnoreCase)
                ? Path.GetFullPath(@"../../../Output/Output.docx")
                : Path.GetFullPath(@"../../../function-error.txt");
            // Write the response bytes to the output file 
    await File.WriteAllBytesAsync(outputPath, resBytes);
        Console.WriteLine($"Saved: {outputPath}");
}
        catch (Exception ex)
        {
            throw;
        }
    }
{% endhighlight %}
{% endtabs %}

From GitHub, you can download the [console application](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Read-and-Save-document/Open-and-save-Word-document/Azure/Azure_Functions/Console_App_Flex_Consumption) and [Azure Functions Flex Consumption](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Read-and-Save-document/Open-and-save-Word-document/Azure/Azure_Functions/Azure_Function_Flex_Consumption).

Looking for the full .NET Word Library overview, features, pricing, and documentation? Visit the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) page. 