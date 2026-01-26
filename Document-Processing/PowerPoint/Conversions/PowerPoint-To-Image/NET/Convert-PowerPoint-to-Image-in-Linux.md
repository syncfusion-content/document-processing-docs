---
title: Convert PowerPoint to Image in Linux | Syncfusion
description: Convert PowerPoint to image in Linux using .NET Core PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Convert PowerPoint to Image in Linux

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET Core PowerPoint library](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) used to create, read, edit and **convert PowerPoint presentation** programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **convert a PowerPoint to image in .NET Core application on Linux**.

## Steps to convert PowerPoint to Image in .NET Core application on Linux

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

* Visual Studio 2022.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Execute the following command in **Linux terminal** to create a new .NET Core Console application.

{% tabs %}
{% highlight KCONFIG %}

dotnet new console

{% endhighlight %}
{% endtabs %}

![Create .NET Core console application on Linux](Workingwith-Linux/CreateCore.png)

Step 2: Install the following **Nuget packages** in your application from [Nuget.org](https://www.nuget.org/) by execute the following command.

* [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) 
* [SkiaSharp.NativeAssets.Linux v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)
* [HarfBuzzSharp.NativeAssets.Linux v8.3.1.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.1.2)

{% tabs %}
{% highlight KCONFIG %}

dotnet add package Syncfusion.PresentationRenderer.Net.Core -v 22.1.38 -s https://www.nuget.org/
dotnet add package SkiaSharp.NativeAssets.Linux -v 3.119.1 -s https://www.nuget.org/
dotnet add package HarfBuzzSharp.NativeAssets.Linux -v 8.3.1.2 -s https://www.nuget.org/

{% endhighlight %}
{% endtabs %}

N> 1. For other Linux environments, refer to the [documentation](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/nuget-packages-required-for-pptxtoimage-conversion#additional-nuget-packages-required-for-linux) for detailed information on the additional NuGet packages required. 
N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

Step 3: Add the following Namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code snippet in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

 //Open the file as Stream.
 using (FileStream fileStreamInput = new FileStream("Data/Input.pptx", FileMode.Open, FileAccess.Read))
 {
     //Open the existing PowerPoint presentation with loaded stream.
     using (IPresentation pptxDoc = Presentation.Open(fileStreamInput))
     {
         //Initialize the PresentationRenderer to perform image conversion.
         pptxDoc.PresentationRenderer = new PresentationRenderer();
         //Convert PowerPoint slide to image as stream.
         using (Stream stream = pptxDoc.Slides[0].ConvertToImage(ExportImageFormat.Jpeg))
         {
             //Reset the stream position.
             stream.Position = 0;
             //Create FileStream to save the image file.
             using (FileStream outputStream = new FileStream("PPTXtoImage.Jpeg", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite))
             {
                 //Save the image file.
                 stream.CopyTo(outputStream);
             }
         }
     }
 }

{% endhighlight %}
{% endtabs %}

Step 5: Execute the following command to **restore** the NuGet packages.

{% tabs %}
{% highlight KCONFIG %}

dotnet restore

{% endhighlight %}
{% endtabs %}

![Restore the NuGet packages](Workingwith-Linux/Restore.png)

Step 6: Execute the following command in **terminal** to **run the application**.

{% tabs %}
{% highlight KCONFIG %}

dotnet run

{% endhighlight %}
{% endtabs %}

![Run the Applcation](Workingwith-Linux/Run.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-PowerPoint-presentation-to-Image/Linux/Convert-PowerPoint-Presentation-to-Image).

By executing the program, you will get the **image** as follows. The output will be saved in **bin** folder.

![PowerPoint to Image in Linux](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-Image.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1: Open JetBrains Rider and create a new .NET Core console application project.
* Launch JetBrains Rider.
* Click **New solution** on the welcome screen.

![Launch JetBrains Rider](Workingwith-Linux/Launch-JetBrains-Rider.png)

* In the New Solution dialog, select **Project Type** as **Console**.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Enter a project name and specify the location.
* Click create.

![Creating a new .NET Core console application in JetBrains Rider](Workingwith-Linux/Create-Console-NET-core-sample.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) in the search bar.
* Ensure that nuget.org is selected as the package source.
* Select the latest Syncfusion.PresentationRenderer.Net.Core NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.PresentationRenderer.Net.Core NuGet package](Workingwith-Linux/Select-Syncfusion.PresentationRenderer.Net.Core-NuGet.png)

* Click the **Install** button to complete the installation.

![Install the Syncfusion.PresentationRenderer.Net.Core NuGet package](Workingwith-Linux/Install-Syncfusion.PresentationRenderer.Net.Core-NuGet.png)

N> 1. For other Linux environments, refer to the [documentation](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/nuget-packages-required-for-pptxtoimage-conversion#additional-nuget-packages-required-for-linux) for detailed information on the additional NuGet packages required. 
N> 2. Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 3: Add the following Namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code snippet in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

 //Open the file as Stream.
 using (FileStream fileStreamInput = new FileStream("Data/Input.pptx", FileMode.Open, FileAccess.Read))
 {
     //Open the existing PowerPoint presentation with loaded stream.
     using (IPresentation pptxDoc = Presentation.Open(fileStreamInput))
     {
         //Initialize the PresentationRenderer to perform image conversion.
         pptxDoc.PresentationRenderer = new PresentationRenderer();
         //Convert PowerPoint slide to image as stream.
         using (Stream stream = pptxDoc.Slides[0].ConvertToImage(ExportImageFormat.Jpeg))
         {
             //Reset the stream position.
             stream.Position = 0;
             //Create FileStream to save the image file.
             using (FileStream outputStream = new FileStream("PPTXtoImage.Jpeg", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite))
             {
                 //Save the image file.
                 stream.CopyTo(outputStream);
             }
         }
     }
 }

{% endhighlight %}
{% endtabs %}

Step 5: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 6: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-PowerPoint-presentation-to-Image/Linux/Convert-PowerPoint-Presentation-to-Image).

By executing the program, you will get the **image** as follows. The output will be saved in **bin** folder.

![PowerPoint to Image in Linux](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-Image.png)

{% endtabcontent %}

{% endtabcontents %}

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> PowerPoint Library (Presentation) features. 

An online sample link to [convert PowerPoint Presentation to image](https://document.syncfusion.com/demos/powerpoint/pptxtoimage#/tailwind) in ASP.NET Core. 
