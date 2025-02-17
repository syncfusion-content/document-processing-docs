---
title: Convert Word to Image in Console Application | Syncfusion
description: Convert Word to image in Console application using .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word to Image in Console application

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Word library](https://www.syncfusion.com/document-processing/word-framework/net/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert Word to image in Console application**.

## Convert Word to Image using .NET Core and Latest

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

* Visual Studio 2022.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new **.NET Core console application** project.

![Create a .NET Core Console application in Visual Studio](Console-Images/NET/Console-Template-Net-Core.png)

Step 2: Install the [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.DocIORenderer.Net.Core NuGet Package](ASP-NET-Core_images/NugetPackage.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;

{% endhighlight %}
{% endtabs %}

Step 4: Include the below code snippet in **Program.cs** to **convert Word to Image**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    //Loads an existing Word document
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Instantiation of DocIORenderer for Word to image conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            //Convert the first page of the Word document into an image.
            Stream imageStream = wordDocument.RenderAsImages(0, ExportImageFormat.Jpeg);
            //Reset the stream position.
            imageStream.Position = 0;
            //Save the stream as file.
            using (FileStream fileStreamOutput = File.Create("WordToImage.Jpeg"))
            {
                imageStream.CopyTo(fileStreamOutput);
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](hthttps://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/.NET-Standard).

By executing the program, you will get the **image** as follows.

![Output image file in .NET Core console application](WordToPDF_images/Output-WordtoImage.png)

{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}

**Prerequisites:**

* Visual Studio Code.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.

Step 1: Create a new .NET Core console application project.
* Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and type **.NET:New Project** and enter.
* Choose the **Console App** template.

![Choose Console app from template](Console-Images/NET/Console-app-template.png)

* Select the project location, type the project name and press enter.
* Then choose **Create project**.

Step 2: To **convert a Word document to image in console app**, install [Syncfusion.DocIORenderer.Net.Core ](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/) to the project.
* Press <kbd>Ctrl</kbd> + <kbd>`</kbd> (backtick) to open the integrated terminal in Visual Studio Code.
* Ensure you're in the project root directory where your .csproj file is located.
* Run the command `dotnet add package Syncfusion.DocIORenderer.NET.Core` to install the NuGet package.

![Add Syncfusion.DocIORenderer.NET.Core NuGet package](Console-Images/NET/Command-to-add-NuGet-package-console.png) 

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;

{% endhighlight %}
{% endtabs %}

Step 4: Include the below code snippet in **Program.cs** to **convert Word to Image**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    //Loads an existing Word document
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Instantiation of DocIORenderer for Word to image conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            //Convert the first page of the Word document into an image.
            Stream imageStream = wordDocument.RenderAsImages(0, ExportImageFormat.Jpeg);
            //Reset the stream position.
            imageStream.Position = 0;
            //Save the stream as file.
            using (FileStream fileStreamOutput = File.Create("WordToImage.Jpeg"))
            {
                imageStream.CopyTo(fileStreamOutput);
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 5: Build the project.

Run the following command in terminal to build the project.

```
dotnet build
```

Step 6: Run the project.

Run the following command in terminal to run the project.

```
dotnet run
```

You can download a complete working sample from [GitHub](hthttps://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/.NET-Standard).

By executing the program, you will get the **image** as follows.

![Output image file in .NET Core console application](WordToPDF_images/Output-WordtoImage.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1. Open JetBrains Rider and create a new .NET Core console application project.
* Launch JetBrains Rider.
* Click new solution on the welcome screen.

![Launch JetBrains Rider](Console-Images/NET/Launch-JetBrains-Rider.png)

* In the new Solution dialog, select Project Type as Console.
* Enter a project name and specify the location.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Click create.

![Creating a new .NET Core console application in JetBrains Rider](Console-Images/NET/Create-Console-NET-core-sample.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) in the search bar.
* Ensure that "nuget.org" is selected as the package source.
* Select the latest Syncfusion.DocIORenderer.Net.Core NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.DocIORenderer.Net.Core NuGet package](Console-Images/NET/Select-Syncfusion.DocIORenderer.Net.Core-NuGet.png)

* Click the Install button to complete the installation.

![Install the Syncfusion.DocIORenderer.Net.Core NuGet package](Console-Images/NET/Install-Syncfusion.DocIORenderer.Net.Core-NuGet.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 3: Include the following namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;

{% endhighlight %}
{% endtabs %}

Step 4: Include the below code snippet in **Program.cs** to **convert Word to Image**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream docStream = new FileStream("Input.docx", FileMode.Open, FileAccess.Read))
{
    //Loads an existing Word document
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Instantiation of DocIORenderer for Word to image conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            //Convert the first page of the Word document into an image.
            Stream imageStream = wordDocument.RenderAsImages(0, ExportImageFormat.Jpeg);
            //Reset the stream position.
            imageStream.Position = 0;
            //Save the stream as file.
            using (FileStream fileStreamOutput = File.Create("WordToImage.Jpeg"))
            {
                imageStream.CopyTo(fileStreamOutput);
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

You can download a complete working sample from [GitHub](hthttps://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/.NET-Standard).

By executing the program, you will get the **image** as follows.

![Output image file in .NET Core console application](WordToPDF_images/Output-WordtoImage.png)

{% endtabcontent %}

{% endtabcontents %}

## Convert Word to Image in .NET Framework

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

* Visual Studio 2022.
* Install **.NET desktop development** workload with necessary .NET Framework SDK.

Step 1: Create a new **.NET FrameWork console application** project.
![Create a .NET FrameWork Console application in Visual Studio](Console-Images/NET-FrameWork/Console-Template-Net-FrameWork.png)

Step 2: Install [Syncfusion.DocIO.WinForms](https://www.nuget.org/packages/Syncfusion.DocIO.WinForms/) NuGet package as a reference to your Windows Forms application from the [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.DocIO.WinForms NuGet package](Console-Images/NET-FrameWork/Nuget-Package-NET-FrameWork.png)

N> 1. The [Syncfusion.DocIO.WinForms](https://www.nuget.org/packages/Syncfusion.DocIO.WinForms/) is a dependency for Syncfusion<sup>&reg;</sup> Windows Forms GUI controls and is named with the suffix "WinForms". It contains platform-independent .NET Framework assemblies (compatible with versions 4.0, 4.5, 4.5.1, and 4.6) for the Word library and does not include any Windows Forms-related references or code. Therefore, we recommend using this package for .NET Framework Console applications.
N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;

{% endhighlight %}
{% endtabs %}

Step 4: Include the below code snippet in **Program.cs** to **convert Word to image**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Load the existing Word document.
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    //Convert the first page of the Word document into an image.
    Image image = document.RenderAsImages(0, ImageType.Bitmap);
    //Save the image as jpeg.
    image.Save("WordToImage.Jpeg", ImageFormat.Jpeg);
}

{% endhighlight %}
{% endtabs %}

Step 5: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 6: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/.NET-Framework).

By executing the program, you will get the **image** as follows.

![Output image file in .NET FrameWork console application](WordToPDF_images/Output-WordtoImage.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET Framework Developer Pack.

Step 1. Open JetBrains Rider and create a new .NET Framework console application project.
* Launch JetBrains Rider.
* Click new solution on the welcome screen.

![Launch JetBrains Rider](Console-Images/NET/Launch-JetBrains-Rider.png)

* In the new Solution dialog, select Project Type as Console.
* Enter a project name and specify the location.
* Select the target framework as Full Framework and choose the desired version.
* Click create.

![Creating a new .NET Framework console application in JetBrains Rider](Console-Images/NET-FrameWork/Create-Console-Framework-project.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.DocToPdfConverter.WinForms](https://www.nuget.org/packages/Syncfusion.DocToPdfConverter.WinForms/) in the search bar.
* Ensure that "nuget.org" is selected as the package source.
* Select the latest Syncfusion.DocToPdfConverter.WinForms NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.DocToPdfConverter.WinForms NuGet package](Console-Images/NET-FrameWork/Select-Syncfusion.DocToPdfConverter.WinForms-NuGet.png)

* Click the Install button to complete the installation.

![Install the Syncfusion.DocToPdfConverter.WinForms NuGet package](Console-Images/NET-FrameWork/Install-Syncfusion.DocToPdfConverter.WinForms-NuGet.png)

Step 3: Include the following namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;

{% endhighlight %}
{% endtabs %}

Step 4: Include the below code snippet in **Program.cs** to **convert Word to image**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Load the existing Word document.
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    //Convert the first page of the Word document into an image.
    Image image = document.RenderAsImages(0, ImageType.Bitmap);
    //Save the image as jpeg.
    image.Save("WordToImage.Jpeg", ImageFormat.Jpeg);
}

{% endhighlight %}
{% endtabs %}

Step 5: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 6: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/.NET-Framework).

By executing the program, you will get the **image** as follows.

![Output image file in .NET FrameWork console application](WordToPDF_images/Output-WordtoImage.png)

{% endtabcontent %}
 
{% endtabcontents %}

An online sample link to [convert Word document to image](https://ej2aspnetcore.azurewebsites.net/aspnetcore/word/wordtoimage#/material3) in ASP.NET Core.
