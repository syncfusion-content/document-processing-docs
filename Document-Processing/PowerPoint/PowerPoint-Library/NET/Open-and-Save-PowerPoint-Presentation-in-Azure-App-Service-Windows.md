---
title: Open and save PowerPoint in Azure App Service on Windows | Syncfusion
description: Open and save PowerPoint in Azure App Service on Windows using .NET Core PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Open and save PowerPoint in Azure App Service on Windows

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET Core PowerPoint library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) used to create, read, edit and convert PowerPoint documents programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **open and save a PowerPoint in Azure App Service on Windows**.

## Steps to Open and save PowerPoint in Azure App Service on Windows

Step 1: Create a new ASP.NET Core Web App (Model-View-Controller).
![Create a ASP.NET Core Web App project](Azure-Images/App-Service-Linux/Create-PowerPoint-Presentation-to-PDF.png)

Step 2: Create a project name and select the location.
![Configure your new project](Azure-Images/App-Service-Windows/Configure-Open-and-Save-PowerPoint-Presentation.png)

Step 3: Click **Create** button.
![Additional Information](Azure-Images/App-Service-Linux/Additional_Information_PowerPoint_Presentation_to_PDF.png)

Step 4: Install the [Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/). This package targets .NET 8.0 and later (.NET 8.0 recommended).

![Install Syncfusion.Presentation.Net.Core Nuget Package](Azure-Images/App-Service-Windows/Nuget-Package-Create-PowerPoint-Presentation.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: Add a new button in the **Index.cshtml** as shown below.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@{
    Html.BeginForm("OpenAndSavePowerPoint", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Open and Save PowerPoint" style="width:220px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

Step 6: Include the following namespaces in **HomeController.cs**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.Presentation;

{% endhighlight %}
{% endtabs %}

Step 7: Add a new action method `OpenAndSavePowerPoint` in **HomeController.cs** and include the following code snippet to **open an existing PowerPoint presentation, edit it, and save the result in Azure App Service on Windows**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

private readonly IWebHostEnvironment _hostingEnvironment;
public HomeController(IWebHostEnvironment hostingEnvironment)
{
    _hostingEnvironment = hostingEnvironment;
}

public ActionResult OpenAndSavePowerPoint()
{
    //Open an existing PowerPoint presentation using the file path.
    string pptxPath = Path.Combine(_hostingEnvironment.WebRootPath, "Data/Template.pptx");
    using IPresentation pptxDoc = Presentation.Open(pptxPath);

    //Get the first slide from the PowerPoint presentation.
    ISlide slide = pptxDoc.Slides[0];
    //Get the first shape of the slide.
    IShape shape = slide.Shapes[0] as IShape;
    //Change the text of the shape.
    if (shape.TextBody.Text == "Company History")
        shape.TextBody.Text = "Company Profile";

    //Save the PowerPoint Presentation as stream.
    MemoryStream pptxStream = new();
    pptxDoc.Save(pptxStream);
    pptxStream.Position = 0;

    //Download PowerPoint document in the browser.
    return File(pptxStream, "application/vnd.openxmlformats-officedocument.presentationml.presentation", "Result.pptx");
}

{% endhighlight %}
{% endtabs %}

## Steps to publish to Azure App Service on Windows

The following steps publish the ASP.NET Core Web App created above to Azure App Service on Windows.

Step 1: Right-click the project and select the **Publish** option.
![Right-click the project and select the Publish option](Azure-Images/App-Service-Windows/Publish-Create-PowerPoint-Presentation.png)

Step 2: Click the **Add a Publish Profile** button.
![Click the Add a Publish Profile](Azure-Images/App-Service-Linux/Publish_Profile_PowerPoint_Presentation_to_PDF.png)

Step 3: Select the publish target as **Azure**.
![Select the publish target as Azure](Azure-Images/App-Service-Linux/Publish_Target_PowerPoint_Presentation_to_PDF.png)

Step 4: Select the Specific target as **Azure App Service (Windows)**.
![Select the publish target](Azure-Images/App-Service-Windows/Specific_Target_PowerPoint_Presentation_to_PDF.png)

Step 5: To create a new app service, click the **Create new** option.
![Click create new option](Azure-Images/App-Service-Windows/App-Service-Create-PowerPoint-Presentation.png)

Step 6: Click the **Create** button to proceed with **App Service** creation.
![Click the Create button](Azure-Images/App-Service-Windows/Hosting-Open-and-Save-PowerPoint-Presentation.png)

Step 7: Click the **Finish** button to finalize the **App Service** creation.
![Click the Finish button](Azure-Images/App-Service-Windows/App-Service-Publish-Open-and-Save-PowerPoint-Presentation.png)

Step 8: Click the **Close** button.
![Click the Close button](Azure-Images/App-Service-Windows/Finish-Open-and-Save-PowerPoint-Presentation.png)

Step 9: Click the **Publish** button.
![Click the Publish button](Azure-Images/App-Service-Windows/Before-Publish-Open-and-Save-PowerPoint-Presentation.png)

Step 10: Publishing has succeeded.
![Publish has been succeeded](Azure-Images/App-Service-Windows/After-Publish-Open-and-Save-PowerPoint-Presentation.png)

Step 11: The published webpage will open in the browser.
![Browser will open after publish](Azure-Images/App-Service-Windows/Browser-Open-and-Save-PowerPoint-Presentation.png)

Step 12: Click **Open and Save PowerPoint** to download the edited PowerPoint document as follows.

![Open and save PowerPoint in Azure App Service on Windows](Workingwith-Core/Open-and-Save-output-image.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Read-and-save-PowerPoint-presentation/Open-and-save-PowerPoint/Azure/Azure_App_Service).

Looking for the full .NET PowerPoint Library component overview, features, pricing, and documentation? Visit the  [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) page. 

