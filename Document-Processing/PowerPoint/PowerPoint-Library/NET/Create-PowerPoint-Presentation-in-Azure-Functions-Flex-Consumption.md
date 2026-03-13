---
title: Create PowerPoint Presentation in Azure Functions Flex Consumption | Syncfusion
description: Create PowerPoint Presentation in Azure Functions Flex Consumption using .NET Core PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Create PowerPoint Presentation in Azure Functions (Flex Consumption)

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET Core PowerPoint library](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) used to create, read, edit and convert PowerPoint documents programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **create a PowerPoint Presentation in Azure Functions deployed on Flex (Consumption) plan**.

## Steps to create a PowerPoint Presentation in Azure Functions (Flex Consumption)

Step 1: Create a new Azure Functions project.
![Create a Azure Functions project](Azure-Images/Functions-Flex-Consumption/Azure_Open_and_Save_PowerPoint_Presentation.png)

Step 2: Create a project name and select the location.
![Create a project name](Azure-Images/Functions-Flex-Consumption/Configuration-Open-and-Save-PowerPoint.png)

Step 3: Select function worker as **.NET 8.0 (Long Term Support)** (isolated worker) and target Flex/Consumption hosting suitable for isolated worker.
![Select function worker](Azure-Images/Functions-Flex-Consumption/Additional_Information_Open_and_Save_PowerPoint_Presentation.png)

Step 4: Install the [Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).
![Install Syncfusion.Presentation.Net.Core NuGet package](Workingwith-Core/Nuget-Package_Open_and_Save.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: Include the following namespaces in the **Function1.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;

{% endhighlight %}
{% endtabs %}

Step 6: Add the following code snippet in **Run** method of **Function1** class to perform **open the existing Presentation in Azure Functions** and return the resultant **PowerPoint Presentation** to client end.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequest req)
    {
        try
        {
            //Create a new instance of PowerPoint Presentation file.
            using IPresentation pptxDoc = Presentation.Create();
            //Add a new slide to file and apply background color.
            ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.TitleOnly);
            //Specify the fill type and fill color for the slide background.
            slide.Background.Fill.FillType = FillType.Solid;
            slide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(232, 241, 229);
            //Add title content to the slide by accessing the title placeholder of the TitleOnly layout-slide.
            IShape titleShape = slide.Shapes[0] as IShape;
            titleShape.TextBody.AddParagraph("Company History").HorizontalAlignment = HorizontalAlignmentType.Center;
            //Add description content to the slide by adding a new TextBox.
            IShape descriptionShape = slide.AddTextBox(53.22, 141.73, 874.19, 77.70);
            descriptionShape.TextBody.Text = "IMN Solutions PVT LTD is the software company, established in 1987, by George Milton. The company has been listed as the trusted partner for many high-profile organizations since 1988 and got awards for quality products from reputed organizations.";
            //Add bullet points to the slide.
            IShape bulletPointsShape = slide.AddTextBox(53.22, 270, 437.90, 116.32);
            //Add a paragraph for a bullet point.
            IParagraph firstPara = bulletPointsShape.TextBody.AddParagraph("The company acquired the MCY corporation for 20 billion dollars and became the top revenue maker for the year 2015.");
            //Format how the bullets should be displayed.
            firstPara.ListFormat.Type = ListType.Bulleted;
            firstPara.LeftIndent = 35;
            firstPara.FirstLineIndent = -35;
            // Add another paragraph for the next bullet point.
            IParagraph secondPara = bulletPointsShape.TextBody.AddParagraph("The company is participating in top open source projects in automation industry.");
            //Format how the bullets should be displayed.
            secondPara.ListFormat.Type = ListType.Bulleted;
            secondPara.LeftIndent = 35;
            secondPara.FirstLineIndent = -35;
            //Get a picture as stream.
            var assembly = Assembly.GetExecutingAssembly();
            var pictureStream = assembly.GetManifestResourceStream("Create_PowerPoint_Presentation.Data.Image.jpg");
            //Add the picture to a slide by specifying its size and position.
            slide.Shapes.AddPicture(pictureStream, 499.79, 238.59, 364.54, 192.16);
            //Add an auto-shape to the slide.
            IShape stampShape = slide.Shapes.AddShape(AutoShapeType.Explosion1, 48.93, 430.71, 104.13, 80.54);
            //Format the auto-shape color by setting the fill type and text.
            stampShape.Fill.FillType = FillType.None;
            stampShape.TextBody.AddParagraph("IMN").HorizontalAlignment = HorizontalAlignmentType.Center;
            MemoryStream memoryStream = new MemoryStream();
            //Saves the PowerPoint document file.
            pptxDoc.Save(memoryStream);
            memoryStream.Position = 0;
            var bytes = memoryStream.ToArray();
            return new FileContentResult(bytes, "application/vnd.openxmlformats-officedocument.presentationml.presentation")
            {
                FileDownloadName = "presentation.pptx"
            };
        }
        catch (Exception ex)
        {
            // Log the error with details for troubleshooting
            _logger.LogError(ex, "Error creating PPTX");
            // Prepare error message including exception details
            var msg = $"Exception: {ex.Message}\n\n{ex}";
            // Return a 500 Internal Server Error response with the message
            return new ContentResult { StatusCode = 500, Content = msg, ContentType = "text/plain; charset=utf-8" };
        }
    }
	
{% endhighlight %}
{% endtabs %}

Step 7: Right click the project and select **Publish**. Then, create a new profile in the Publish Window.
![Create a new profile in the Publish Window](Azure-Images/Functions-v1/Publish-Open-and-Save-PowerPoint.png)

Step 8: Select the target as **Azure** and click **Next** button.
![Select the target as Azure](Azure-Images/Functions-Flex-Consumption/Target_Open_and_Save_PowerPoint_Presentation.png)

Step 9: Select the specific target as **Azure Function App** and click **Next** button.
![Select the target as Azure](Azure-Images/Functions-Flex-Consumption/Specific_Target_Open_and_Save_PowerPoint_Presentation.png)

Step 10: Select the **Create new** button.
![Configure Hosting Plan](Azure-Images/Functions-Flex-Consumption/Function_Instance_Open_and_Save_PowerPoint_Presentation.png)

Step 11: Click **Create** button. 
![Select the plan type](Azure-Images/Functions-Flex-Consumption/Hosting_Open_and_Save_PowerPoint_Presentation.png)

Step 12: After creating app service then click **Finish** button. 
![Creating app service](Azure-Images/Functions-Flex-Consumption/Finish_Open_and_Save_PowerPoint_Presentation.png)

Step 13: Click the **Publish** button.
![Click Publish Button](Azure-Images/Functions-Flex-Consumption/Before_Publish_Open_and_Save_PowerPoint_Presentation.png)

Step 14: Publish has been succeed.
![Publish succeeded](Azure-Images/Functions-Flex-Consumption/After_Publish_Open_and_Save_PowerPoint_Presentation.png)

Step 15: Now, go to Azure portal and select the App Services. After running the service, click **Get function URL by copying it**. Then, paste it in the below client sample (which will request the Azure Functions, to perform **create a PowerPoint Presentation** using the template PowerPoint document). You will get the output **PowerPoint Presentation** as follows.

![PowerPoint to Image in Azure Functions v1](Workingwith-Web/GettingStartedSample.png)

## Steps to post the request to Azure Functions

Step 1: Create a console application to request the Azure Functions API.

Step 2: Add the following code snippet into **Main** method to post the request to Azure Functions with template PowerPoint document and get the resultant PowerPoint Presentation.

{% tabs %}
{% highlight c# tabtitle="C#" %}

    static async Task Main()
    {
        try
        {
            Console.Write("Please enter your Azure Function URL: ");
            string url = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(url)) return;
            // Create a new HttpClient instance for sending HTTP requests
            using var http = new HttpClient();
            using var content = new StringContent(string.Empty);
            using var res = await http.PostAsync(url, content);
            // Read the response body as a byte array
            var resBytes = await res.Content.ReadAsByteArrayAsync();
            // Extract the media type from the response headers
            string mediaType = res.Content.Headers.ContentType?.MediaType ?? string.Empty;
            // Decide the output file path the response is an docx or txt   
            string outputPath = mediaType.Contains("presentation", StringComparison.OrdinalIgnoreCase)
                || mediaType.Contains("powerpoint", StringComparison.OrdinalIgnoreCase)
                || mediaType.Equals("application/vnd.openxmlformats-officedocument.presentationml.presentation", StringComparison.OrdinalIgnoreCase)
                ? Path.GetFullPath("../../../Output/Output.pptx")
                : Path.GetFullPath("../../../Output/function-error.txt");
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

From GitHub, you can download the [console application](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Getting-started/Azure/Azure_Functions/Console_App_Flex_Consumption) and [Azure Functions Flex Consumption](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Getting-started/Azure/Azure_Functions/Azure_Functions_Flex_Consumption).

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> PowerPoint Library (Presentation) features. 

