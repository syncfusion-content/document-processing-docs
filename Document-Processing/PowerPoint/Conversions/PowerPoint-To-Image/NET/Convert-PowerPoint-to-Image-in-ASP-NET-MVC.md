---
title: Convert PowerPoint to Image in ASP.NET MVC | Syncfusion
description: Convert PowerPoint to image in ASP.NET MVC using .NET PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Convert PowerPoint to Image in ASP.NET MVC

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET PowerPoint library](https://www.syncfusion.com/document-processing/powerpoint-framework/net) used to create, read, edit and convert PowerPoint presentation programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **convert a PowerPoint to image in ASP.NET MVC**.

## Steps to convert PowerPoint to Image programmatically

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

* Visual Studio 2022.
* Install **.NET desktop development** workload with necessary .NET Framework SDK.

Step 1: Create a new C# ASP.NET MVC application project.

![Create ASP.NET MVC project](Workingwith-MVC/Project-Open-and-Save.png)

Step 2: Select the **MVC** template to create the project.

![Select MVC template](Workingwith-MVC/MVC-Open-and-Save.png)

Step 3: Install the [Syncfusion.Presentation.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Presentation.AspNet.Mvc5) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.Presentation.AspNet.Mvc5 Nuget Package](Workingwith-MVC/Nuget-Package-PPTXtoImage.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Include the following namespace in that **HomeController.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;

{% endhighlight %}
{% endtabs %}

Step 5: A default action method named **Index** will be present in HomeController.cs. Right click on this action method and select **Go To View** where you will be directed to its associated view page **Index.cshtml**.

Step 6: Add a new button in the Index.cshtml as shown below.

{% tabs %}
{% highlight HTML %}

@{
    Html.BeginForm("ConvertPPTXtoImage", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Convert PPTX to Image" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

Step 7: Add the below code snippet in **HomeController.cs** to **convert a PowerPoint to image in ASP.NET MVC**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public void ConvertPPTXtoImage()
{
    //Open the file as Stream.
    using (FileStream pathStream = new FileStream(Server.MapPath("~/App_Data/Input.pptx"), FileMode.Open, FileAccess.Read))
    {
        //Opens a PowerPoint Presentation.
        using (IPresentation pptxDoc = Presentation.Open(pathStream))
        {
            //Convert the first slide into image.
            Image image = pptxDoc.Slides[0].ConvertToImage(Syncfusion.Drawing.ImageType.Metafile);
            //Saves the image file to MemoryStream.
            MemoryStream stream = new MemoryStream();
            //Download image file in the browser.
            ExportAsImage(image, "PPTXToImage.Jpeg", ImageFormat.Jpeg, HttpContext.ApplicationInstance.Response);
        }
    }
}
//To download the image file.
protected void ExportAsImage(Image image, string fileName, ImageFormat imageFormat, HttpResponse response)
{
    if (ControllerContext == null)
        throw new ArgumentNullException("Context");
    string disposition = "content-disposition";
    response.AddHeader(disposition, "attachment; filename=" + fileName);
    if (imageFormat != ImageFormat.Emf)
        image.Save(response.OutputStream, imageFormat);
    Response.End();
}

{% endhighlight %}
{% endtabs %}

Step 8: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 9: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-PowerPoint-presentation-to-Image/ASP.NET-MVC).

By executing the program, you will get the **image** as follows.

![PowerPoint to Image in ASP.NET MVC](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-Image.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET Framework Developer Pack.

Step 1. Open JetBrains Rider and create a new ASP.NET MVC web application project.
* Launch JetBrains Rider.
* Click **New Solution** on the welcome screen.

![Launch JetBrains Rider](Workingwith-MVC/Launch-JetBrains-Rider.png)

* In the New Solution dialog, select **Project Type** as **Web**.
* Enter a project name and specify the location.
* Select the target framework as Full Framework and choose the desired version.
* Select **Template** as **Web App**.
* Click create.

![Creating a new ASP.NET MVC web application in JetBrains Rider](Workingwith-MVC/Create-MVC-sample.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.PresentationToPdfConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.AspNet.Mvc5/) in the search bar.
* Ensure that nuget.org is selected as the package source.
* Select the latest Syncfusion.PresentationToPdfConverter.AspNet.Mvc5 NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.PresentationToPdfConverter.AspNet.Mvc5 NuGet package](Workingwith-MVC/Search-Syncfusion.PresentationToPdfConverter.AspNet.Mvc5-NuGet.png)

* Click the Install button to complete the installation.

![Install the Syncfusion.PresentationToPdfConverter.AspNet.Mvc5 NuGet package](Workingwith-MVC/Install-Syncfusion.PresentationToPdfConverter.AspNet.Mvc5-NuGet.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 3: Include the following namespace in that **HomeController.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;

{% endhighlight %}
{% endtabs %}

Step 4: A default action method named **Index** will be present in HomeController.cs. Right click on this action method and select **Go To View** where you will be directed to its associated view page **Index.cshtml**.

Step 5: Add a new button in the Index.cshtml as shown below.

{% tabs %}
{% highlight HTML %}

@{
    Html.BeginForm("ConvertPPTXtoImage", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Convert PPTX to Image" style="width:200px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

Step 6: Add the below code snippet in **HomeController.cs** to **convert a PowerPoint to image in ASP.NET MVC**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public void ConvertPPTXtoImage()
{
    //Open the file as Stream.
    using (FileStream pathStream = new FileStream(Server.MapPath("~/App_Data/Input.pptx"), FileMode.Open, FileAccess.Read))
    {
        //Opens a PowerPoint Presentation.
        using (IPresentation pptxDoc = Presentation.Open(pathStream))
        {
            //Convert the first slide into image.
            Image image = pptxDoc.Slides[0].ConvertToImage(Syncfusion.Drawing.ImageType.Metafile);
            //Saves the image file to MemoryStream.
            MemoryStream stream = new MemoryStream();
            //Download image file in the browser.
            ExportAsImage(image, "PPTXToImage.Jpeg", ImageFormat.Jpeg, HttpContext.ApplicationInstance.Response);
        }
    }
}
//To download the image file.
protected void ExportAsImage(Image image, string fileName, ImageFormat imageFormat, HttpResponse response)
{
    if (ControllerContext == null)
        throw new ArgumentNullException("Context");
    string disposition = "content-disposition";
    response.AddHeader(disposition, "attachment; filename=" + fileName);
    if (imageFormat != ImageFormat.Emf)
        image.Save(response.OutputStream, imageFormat);
    Response.End();
}

{% endhighlight %}
{% endtabs %}

Step 7: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 8: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-PowerPoint-presentation-to-Image/ASP.NET-MVC).

By executing the program, you will get the **image** as follows.

![PowerPoint to Image in ASP.NET MVC](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-Image.png)

{% endtabcontent %}

{% endtabcontents %}

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/net) to explore the rich set of Syncfusion<sup>&reg;</sup> PowerPoint Library (Presentation) features. 

An online sample link to [convert PowerPoint Presentation to image](https://ej2.syncfusion.com/aspnetmvc/PowerPoint/PPTXToImage#/material3) in ASP.NET MVC. 