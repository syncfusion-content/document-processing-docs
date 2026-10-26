---
title: Create PowerPoint document in Azure Functions v4 | Syncfusion
description: Create PowerPoint document in Azure Functions v4 using .NET PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Create PowerPoint document in Azure Functions v4

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET PowerPoint library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) used to create, read, edit, and convert PowerPoint documents programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **create a PowerPoint document in Azure Functions v4**.

## Steps to create a PowerPoint document in Azure Functions v4

N> Prerequisites: An active [Azure subscription](https://azure.microsoft.com/en-us/free/) and Visual Studio with the **Azure development** workload installed.

Step 1: Create a new Azure Functions project. Select the **Azure Functions** template and choose the **Http trigger** function type.
![Create an Azure Functions project](Azure-Images/Functions-v1/Azure_PowerPoint_Presentation_to_PDF.png)

Step 2: Create a project name and select the location.
![Create a project name](Azure-Images/Functions-v1/Configure_PowerPoint_Presentation_to_PDF.png)

Step 3: Select function worker as **.NET 8.0 (Long Term Support)**. 
![Select function worker](Azure-Images/Functions-v4/Additional_Information_PowerPoint_Presentation_to_PDF.png)

Step 4: Install the [Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/). To register the Syncfusion license in your project, also install the **Syncfusion.Licensing.Net.Core** NuGet package.
![Install Syncfusion.Presentation.Net.Core NuGet package](Workingwith-Core/Nuget-Package_Open_and_Save.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or from the NuGet feed, you also have to add the **Syncfusion.Licensing.Net.Core** assembly reference and include a license key in your project. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your application to use our components.

To register the license key, add the following call in the **Function1** class before the application starts:

{% tabs %}
{% highlight c# tabtitle="C#" %}

Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

{% endhighlight %}
{% endtabs %}

Step 5: Include the following namespaces in the **Function1.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using Syncfusion.Presentation;

{% endhighlight %}
{% endtabs %}

Step 6: Add a folder named **Data** to the project, place an image (for example, `Image.jpg`) inside it, and set its **Build Action** to **Embedded Resource**. The embedded resource name used in the next step is `Create_PowerPoint_Presentation.Data.Image.jpg`; update it if your project's default namespace differs.

Step 7: Add the following code snippet in the **Run** method of the **Function1** class to **create a PowerPoint document** in Azure Functions and return the resultant **PowerPoint document** to the client end.

{% tabs %}
{% highlight c# tabtitle="C#" %}

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

using MemoryStream memoryStream = new MemoryStream();
//Saves the PowerPoint document file.
pptxDoc.Save(memoryStream);
//Create the response to return.
HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
//Set the PowerPoint document saved stream as content of response.
response.Content = new ByteArrayContent(memoryStream.ToArray());
//Set the contentDisposition as attachment.
response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
{
    FileName = "Result.pptx"
};
//Set the content type as PowerPoint document mime type.
response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.presentationml.presentation");
//Return the response with output PowerPoint document stream.
return response;

{% endhighlight %}
{% endtabs %}

Step 8: Right click the project and select **Publish**. Then, create a new profile in the Publish Window.
![Create a new profile in the Publish Window](Azure-Images/Functions-v1/Publish_PowerPoint_Presentation_to_PDF.png)

Step 9: Select the target as **Azure** and click the **Next** button.
![Select the target as Azure](Azure-Images/Functions-v1/Target_PowerPoint_Presentation_to_PDF.png)

Step 10: Select the **Create new** button.
![Configure Hosting Plan](Azure-Images/Functions-v1/Function_Instance_PowerPoint_Presentation_to_PDF.png)

Step 11: Click the **Create** button. 
![Select the plan type](Azure-Images/Functions-v1/Hosting_PowerPoint_Presentation_to_PDF.png)

Step 12: After the app service is created, click the **Finish** button. 
![Creating app service](Azure-Images/Functions-v1/Finish_PowerPoint_Presentation_to_PDF.png)

Step 13: Click the **Publish** button.
![Click Publish Button](Azure-Images/Functions-v1/Before_Publish_PowerPoint_Presentation_to_PDF.png)

Step 14: Publish succeeded.
![Publish succeeded](Azure-Images/Functions-v1/After_Publish_PowerPoint_Presentation_to_PDF.png)

Step 15: Now, go to the Azure portal and select the App Services. After running the service, click **Get Function URL** and copy it. Then, paste it into the client sample in the next section (which will request the Azure Functions to **create a PowerPoint document**). You will get the output PowerPoint document as follows.

![Create a PowerPoint document in Azure Functions v4](Workingwith-Web/GettingStartedSample.png)

## Steps to post the request to Azure Functions

Step 1: Create a console application (for example, **Console App** using .NET 8.0 or later) to request the Azure Functions API.

Step 2: Add the following code snippet into the **Main** method to post a request to the Azure Functions and get the resultant PowerPoint document. The Azure Functions create a new PowerPoint document from scratch and return it; no template is required.

{% tabs %}
{% highlight c# tabtitle="C#" %}

try
{
    Console.WriteLine("Please enter your Azure Functions URL :");
    string functionURL = Console.ReadLine();

    //Create HttpWebRequest with hosted azure functions URL.    
    HttpWebRequest req = (HttpWebRequest)WebRequest.Create(functionURL);
    //Set request method as POST.
    req.Method = "POST";
    //The Create function does not require a request body; send empty content.
    req.ContentLength = 0;

    //Gets the response from the Azure Functions.
    HttpWebResponse res = (HttpWebResponse)req.GetResponse();

    //Saves the PowerPoint file stream.
    FileStream fileStream = File.Create("Result.pptx");
    res.GetResponseStream().CopyTo(fileStream);
    //Dispose the stream.
    fileStream.Dispose();
}
catch (Exception ex)
{
    throw;
}

{% endhighlight %}
{% endtabs %}

From GitHub, you can download the [console application](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Getting-started/Azure/Azure_Functions/Console_Application) and [Azure Functions v4](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Getting-started/Azure/Azure_Functions/Azure_Functions_v4).

Looking for the full .NET PowerPoint Library component overview, features, pricing, and documentation? Visit the  [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) page. 

An online sample link to [create a PowerPoint Presentation](https://document.syncfusion.com/demos/powerpoint/default#/tailwind) in ASP.NET Core.  

