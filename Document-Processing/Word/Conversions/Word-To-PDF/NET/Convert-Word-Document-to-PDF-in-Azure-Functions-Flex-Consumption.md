---
title: Convert Word to PDF in Azure Functions Flex Consumption | Syncfusion
description: Convert Word to PDF in Azure Functions Flex Consumption using .NET Core Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word document to PDF in Azure Functions (Flex Consumption)

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-processing/word-framework/net/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to PDF in Azure Functions deployed on Flex (Consumption) plan**.

## Steps to convert a Word document to PDF in Azure Functions (Flex Consumption)

Step 1: Create a new Azure Functions project.
![Create a Azure Functions project](Azure-Images/Functions-Flex-Consumption/Azure_Word_to_PDF.png)

Step 2: Create a project name and select the location.
![Create a project name](Azure-Images/Functions-Flex-Consumption/Configure_Word_to_PDF.png)

Step 3: Select function worker as **.NET 8.0 (Long Term Support)** (isolated worker) and target Flex/Consumption hosting suitable for isolated worker.
![Select function worker](Azure-Images/Functions-Flex-Consumption/Additional_Information_Word_to_PDF.png)

Step 4: Install the [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) and [SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1) NuGet packages as references to your project from [NuGet.org](https://www.nuget.org/).
![Install NuGet packages](Azure-Images/Functions-Flex-Consumption/Nuget_Package_Word_to_PDF.png)
![Install NuGet packages](Azure-Images/Functions-Flex-Consumption/Nuget_Package_SkiaSharp_Native_Linux_NoDependencies.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: Include the following namespaces in the **Function1.cs** file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;
{% endhighlight %}

{% endtabs %}

Step 6: Add the following code snippet in **Run** method of **Function1** class to perform **Word document to PDF conversion** in Azure Functions and return the resultant **PDF** to client end.

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
            using WordDocument document = new WordDocument(inputStream, FormatType.Automatic);
            // Attach font substitution handler to manage missing fonts
            document.FontSettings.SubstituteFont += FontSettings_SubstituteFont;
            // Initialize DocIORenderer to convert Word document to PDF
            using DocIORenderer renderer = new DocIORenderer();
            // Convert the Word document to a PDF document
            using PdfDocument pdfDoc = renderer.ConvertToPDF(document);
            // Create a memory stream to hold the PDF output
            await using MemoryStream outputStream = new MemoryStream();
            // Save the PDF into the output stream
            pdfDoc.Save(outputStream);
            // Close the PDF document and release resources
            pdfDoc.Close(true);
            // Reset stream position to the beginning for reading
            outputStream.Position = 0;
            // Convert the PDF stream to a byte array
            var pdfBytes = outputStream.ToArray();

            // Create a file result to return the PDF as a downloadable file
            var fileResult = new FileContentResult(pdfBytes, "application/pdf")
            {
                FileDownloadName = "converted.pdf"
            };
            // Return the PDF file result to the client
            return fileResult;
        }
        catch (Exception ex)
        {
            // Log the error with details for troubleshooting
            _logger.LogError(ex, "Error converting DOCX to PDF.");
            // Prepare error message including exception details
            var msg = $"Exception: {ex.Message}\n\n{ex}";
            // Return a 500 Internal Server Error response with the message
            return new ContentResult { StatusCode = 500, Content = msg, ContentType = "text/plain; charset=utf-8" };
        }
    }
    /// <summary>
    /// Event handler for font substitution during PDF conversion
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="args"></param>
    private void FontSettings_SubstituteFont(object sender, SubstituteFontEventArgs args)
    {
        // Define the path to the Fonts folder in the application base directory
        string fontsFolder = Path.Combine(AppContext.BaseDirectory, "Fonts");
        // If the original font is Calibri, substitute with calibri-regular.ttf
        if (args.OriginalFontName == "Calibri")
        {
            args.AlternateFontStream = File.OpenRead(Path.Combine(fontsFolder, "calibri-regular.ttf"));
        }
        // Otherwise, substitute with Times New Roman
        else
        {
            args.AlternateFontStream = File.OpenRead(Path.Combine(fontsFolder, "Times New Roman.ttf"));
        }
    }
	
{% endhighlight %}
{% endtabs %}

Step 7: Right click the project and select **Publish**. Then, create a new profile in the Publish Window.
![Create a new profile in the Publish Window](Azure-Images/Functions-Flex-Consumption/Publish_Word_to_PDF.png)

Step 8: Select the target as **Azure** and click **Next** button.
![Select the target as Azure](Azure-Images/Functions-Flex-Consumption/Target_Word_to_PDF.png)

Step 9: Select the specific target as **Azure Function App** and click **Next** button.
![Select the target as Azure](Azure-Images/Functions-Flex-Consumption/Specific_Target_Word_to_PDF.png)

Step 10: Select the **Create new** button.
![Configure Hosting Plan](Azure-Images/Functions-Flex-Consumption/Function_Instance_Word_to_PDF.png)

Step 11: Click **Create** button. 
![Select the plan type](Azure-Images/Functions-Flex-Consumption/Hosting_Word_to_PDF.png)

Step 12: After creating app service then click **Finish** button. 
![Creating app service](Azure-Images/Functions-Flex-Consumption/Finish_Word_to_PDF.png)

Step 13: Click the **Publish** button.
![Click Publish Button](Azure-Images/Functions-Flex-Consumption/Before_Publish_Word_to_PDF.png)

Step 14: Publish has been succeed.
![Publish succeeded](Azure-Images/Functions-Flex-Consumption/After_Publish_Word_to_PDF.png)

Step 15: Now, go to Azure portal and select the App Services. After running the service, click **Get function URL by copying it**. Then, paste it in the below client sample (which will request the Azure Functions, to perform **Word document to PDF conversion** using the template Word document). You will get the output **PDF** as follows.

![Word to PDF in Azure Functions v1](WordToPDF_images/WordToPDF_Output_Cloud.png)

## Steps to post the request to Azure Functions

Step 1: Create a console application to request the Azure Functions API.

Step 2: Add the following code snippet into Main method to post the request to Azure Functions with template Word document and get the resultant PDF.

{% tabs %}
{% highlight c# tabtitle="C#" %}
static async Task Main()
    {  
        Console.Write("Please enter your Azure Functions URL : ");
        // Read the URL entered by the user and trim whitespace
        string url = Console.ReadLine()?.Trim();
        // If no URL was entered, exit the program
        if (string.IsNullOrEmpty(url)) return;
        // Create a new HttpClient instance for sending requests
        using var http = new HttpClient();
        // Read all bytes from the input Word document file
        var bytes = await File.ReadAllBytesAsync(@"Data/Input.docx");
        // Create HTTP content from the document bytes
        using var content = new ByteArrayContent(bytes);
        // Set the content type header to application/octet-stream (binary data)
        content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");
        // Send a POST request to the Azure Function with the document content
        using var res = await http.PostAsync(url, content);
        // Read the response content as a byte array
        var resBytes = await res.Content.ReadAsByteArrayAsync();
        // Get the media type (e.g., application/pdf or text/plain) from the response headers
        string mediaType = res.Content.Headers.ContentType?.MediaType ?? string.Empty;
        string outFile = mediaType.Contains("pdf", StringComparison.OrdinalIgnoreCase)
            ? Path.GetFullPath(@"../../../Output/Output.pdf")
            : Path.GetFullPath(@"../../../Output/function-error.txt");
        // Write the response bytes to the chosen output file
        await File.WriteAllBytesAsync(outFile, resBytes);
        Console.WriteLine($"Saved: {outFile} ");        
    }
{% endhighlight %}
{% endtabs %}

From GitHub, you can download the [console application](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/Azure/Azure_Functions/Console_App_Flex_Consumption) and [Azure Functions Flex Consumption](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/Azure/Azure_Functions/Azure_Function_Flex_Consumption).

Click [here](https://www.syncfusion.com/document-processing/word-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features. 

An online sample link to [convert Word document to image](https://document.syncfusion.com/demos/word/wordtoimage#/tailwind) in ASP.NET Core. 