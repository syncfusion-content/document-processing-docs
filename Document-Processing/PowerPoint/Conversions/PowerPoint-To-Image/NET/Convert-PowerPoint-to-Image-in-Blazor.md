---
title: Convert PowerPoint to Image in Blazor | Syncfusion<sup>&reg;</sup>
description: Convert PowerPoint to image in Blazor using .NET Core PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Convert PowerPoint to Image in Blazor

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET Core PowerPoint library](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) used to create, read, edit and convert PowerPoint presentation programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **convert a PowerPoint to image in Blazor**.

**Prerequisites:**

{% tabcontents %}

{% tabcontent Visual Studio %}
* Visual Studio 2019 Preview or later
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
{% endtabcontent %}
{% tabcontent Visual Studio Code %}
* Visual Studio Code
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.
{% endtabcontent %}

{% endtabcontents %}

## Server app

{% tabcontents %}

{% tabcontent Visual Studio %}
Step 1: Create a new C# Blazor Server app project. Select Blazor Server App from the template and click the Next button.

![Create Blazor Server application in Visual Studio for Blazor PowerPoint presentation ](Workingwith-Blazor/Create_project.png)

Step 2: Install the [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) NuGet package as reference to your project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.PresentationRenderer.Net.Core Nuget Package](Azure-Images/App-Service-Linux/Nuget_Package_PowerPoint_Presentation_to_PDF.png)

{% endtabcontent %}
 

{% tabcontent Visual Studio Code %}
Step 1: Create a new C# Blazor Server app project using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-7.0&pivots=vsc).

Alternatively, create a Server application using the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

```
dotnet new blazorserver -o Convert-PowerPoint-presentation-to-Image
```

Run the following command to navigate to the project directory.

```
cd Convert-PowerPoint-presentation-to-Image
```

Step 2: To **convert a PowerPoint to image in server app**, run the following command to  install [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) to the Blazor project.

```
dotnet add package Syncfusion.PresentationRenderer.Net.Core
```

{% endtabcontent %}
 
{% endtabcontents %}


N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Create a razor file with name as **Presentation** under **Pages** folder and include the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@page "/presentation"
@using System.IO;
@using Convert_PowerPoint_Presentation_to_Image;
@inject Convert_PowerPoint_Presentation_to_Image.Data.PresentationService service
@inject Microsoft.JSInterop.IJSRuntime JS

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code to create a new button.

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion PowerPoint (Presentation) library</h2>
<p>Syncfusion PowerPoint (Presentation) library is used to create, read, edit, and convert PowerPoint files in your applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@ConvertPPTXtoImage">Convert PPTX to Image</button>

{% endhighlight %}
{% endtabs %}

Step 5: Add the following code in **Presentation.razor** file to **convert PowerPoint to image** and download the **image file**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@code {
    MemoryStream documentStream;
    /// <summary>
    /// Download the image file.
    /// </summary>
    protected async void ConvertPPTXtoImage()
    {
        documentStream = service.ConvertPPTXtoImage();
        await JS.SaveAs("PPTXtoImage.Jpeg", documentStream.ToArray());
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Create a new cs file with name as **PowerPointService** under Data folder and include the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;

{% endhighlight %}
{% endtabs %}

Step 7: Create a new MemoryStream method with name as **ConvertPPTXToImage** in **PowerPointService** class and include the following code snippet to **convert a PowerPoint to image in Blazor Server app**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open the file as Stream.
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Input.pptx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    //Open the existing PowerPoint presentation with loaded stream.
    using (IPresentation pptxDoc = Presentation.Open(sourceStreamPath))
    {
        //Initialize the PresentationRenderer to perform image conversion.
        pptxDoc.PresentationRenderer = new PresentationRenderer();
        //Convert PowerPoint slide to image as stream.
        using (Stream stream = pptxDoc.Slides[0].ConvertToImage(ExportImageFormat.Jpeg))
        {
            //Save the converted image file to MemoryStream.
            MemoryStream Stream = new MemoryStream();
            stream.CopyTo(Stream);
            Stream.Position = 0;
            //Download image file in the browser.
            return Stream;
        }
    }
}  

{% endhighlight %}
{% endtabs %}

Step 8: Add the following line to the Program.cs file to register the PresentationService as a scoped service in your Blazor application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

builder.Services.AddSingleton<PresentationService>();

{% endhighlight %}
{% endtabs %}
            
Step 9: Create a new class file in the project, with name as FileUtils and add the following code to invoke the JavaScript action to download the file in the browser.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public static class FileUtils
{
    public static ValueTask<object> SaveAs(this IJSRuntime js, string filename, byte[] data)
        => js.InvokeAsync<object>(
             "saveAsFile",
             filename,
             Convert.ToBase64String(data));
}

{% endhighlight %}
{% endtabs %}

Step 10: Add the following JavaScript function in the **_Host.cshtml** in the Pages folder.

{% tabs %}
{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) 
    {
        if (navigator.msSaveBlob) 
        {
            //Download document in Edge browser
            var data = window.atob(bytesBase64);
            var bytes = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++) {
                bytes[i] = data.charCodeAt(i);
            }
            var blob = new Blob([bytes.buffer], { type: "application/octet-stream" });
            navigator.msSaveBlob(blob, filename);
        }
        else 
        {
            var link = document.createElement('a');
            link.download = filename;
            link.href = "data:application/octet-stream;base64," + bytesBase64;
            document.body.appendChild(link); // Needed for Firefox
            link.click();
            document.body.removeChild(link);
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

Step 11: Add the following code snippet in the razor file of Navigation menu in the Shared folder.

{% tabs %}

{% highlight HTML %}

 <li class="nav-item px-3">
    <NavLink class="nav-link" href="presentation">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Generate Presentation
    </NavLink>
</li>

{% endhighlight %}

{% endtabs %}

Step 12: Build the project.

{% tabcontents %}

{% tabcontent Visual Studio %}

Click on Build → Build Solution or press Ctrl + Shift + B to build the project.

{% endtabcontent %}


{% tabcontent Visual Studio Code %}

Run the following command in terminal to build the project.

```
dotnet build
```

{% endtabcontent %}

{% endtabcontents %}

Step 13: Run the project.

{% tabcontents %}

{% tabcontent Visual Studio %}

Click the Start button (green arrow) or press F5 to run the app.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Run the following command in terminal to build the project.

```
dotnet run
```
{% endtabcontent %}

{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-PowerPoint-presentation-to-Image/Blazor/Server-app).

By executing the program, you will get the **image** as follows.

![PowerPoint to Image in Blazor server app](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-Image.png)

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> PowerPoint Library (Presentation) features. 

An online sample link to [convert PowerPoint Presentation to image](https://blazor.syncfusion.com/demos/powerpoint/pptx-to-image?theme=fluent) in Blazor. 

## WASM app

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new C# Blazor WASM app project. Select Blazor WebAssembly App from the template and click the Next button.

![Create Blazor WebAssembly application in Visual Studio for Blazor PowerPoint presentation](Workingwith-Blazor/Blazor_WASM.png)

Step 2: Install the following **Nuget packages** in your application from [Nuget.org](https://www.nuget.org/).

* [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) 
* [SkiaSharp.Views.Blazor v3.116.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.116.1)

![Install Syncfusion.PresentationRenderer.Net.Core Nuget Package](Azure-Images/App-Service-Linux/Nuget_Package_PowerPoint_Presentation_to_PDF.png)

![Install SkiaSharp.Views.Blazor v3.116.1 Nuget Package](Workingwith-Blazor/NuGet_package_PPTXtoPDF.png)

N> 1. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.
N> 2. Install this wasm-tools and wasm-tools-net6 by using the "dotnet workload install wasm-tools" and "dotnet workload install wasm-tools-net6" commands in your command prompt respectively if you are facing issues related to Skiasharp during runtime. After installing wasm tools using the above commands, please restart your machine.

{% endtabcontent %}
 

{% tabcontent Visual Studio Code %}

Step 1: Create a new C# Blazor WASM app project using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-7.0&pivots=vsc).

Alternatively, create a Server application using the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

```
dotnet new blazorserver -o Convert-PowerPoint-presentation-to-Image
```

Run the following command to navigate to the project directory.

```
cd Convert-PowerPoint-presentation-to-Image
```

Step 2: To **convert a PowerPoint to Image in Blazor WASM app**,run the following command to  install  the following **Nuget packages** in your application.
* [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) 
* [SkiaSharp.Views.Blazor v3.116.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.116.1)

```
dotnet add package Syncfusion.PresentationRenderer.Net.Core
```

```
dotnet add package SkiaSharp.Views.Blazor --version 3.116.1
```

N> 1. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.
N> 2. If you face issues related to SkiaSharp during runtime, install the necessary WebAssembly tools by running the following commands in the terminal:

N> ```
N> dotnet workload install wasm-tools
N> dotnet workload install wasm-tools-net6
N> ```
N> After completing the installation, restart Visual Studio Code to ensure proper integration of the tools.

{% endtabcontent %}
 
{% endtabcontents %}

Step 3: Create a razor file with name as ``Presentation`` under ``Pages`` folder and add the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@page "/presentation"
@inject Microsoft.JSInterop.IJSRuntime JS
@inject HttpClient client
@using System.IO
@using Syncfusion.Presentation
@using Syncfusion.PresentationRenderer

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code to create a new button.

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion PowerPoint library (Essential Presentation)</h2>
<p>Syncfusion Blazor PowerPoint library (Essential Presentation) used to create, read, edit, and convert PowerPoint files in your applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@PPTXToImage">Convert PPTX to image</button>

{% endhighlight %}
{% endtabs %}

Step 5: Create a new async method with name as ``PPTXToImage`` and include the following code snippet to **convert a PowerPoint to image in Blazor WASM app**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Input data file is inside the wwwroot folder.
using (Stream inputStream = await client.GetStreamAsync("sample-data/Input.pptx"))
{
    //Open an existing PowerPoint Presentation file.
    using (IPresentation pptxDoc = Syncfusion.Presentation.Presentation.Open(inputStream))
    {
        //Initialize the PresentationRenderer to perform image conversion.
        pptxDoc.PresentationRenderer = new PresentationRenderer();
        //Convert the entire Presentation to images.
        Stream[] imageStreams = pptxDoc.RenderAsImages(ExportImageFormat.Jpeg);
        for (int i = 0; i < imageStreams.Length; i++)
        {
            imageStreams[i].Position = 0;
            //Download image file in the browser.
            await JS.SaveAs("PPTXToImage_" + i + ".jpeg", (imageStreams[i] as MemoryStream).ToArray());
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: To download the PowerPoint presentation in browser, create a class file with FileUtils name and add the following code to invoke the JavaScript action to download the file in the browser.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public static class FileUtils
{
    public static ValueTask<object> SaveAs(this IJSRuntime js, string filename, byte[] data)
         => js.InvokeAsync<object>(
            "saveAsFile",
            filename,
            Convert.ToBase64String(data));
}

{% endhighlight %}
{% endtabs %}

Step 7: Add the following JavaScript function in the **Index.html** file present under ``wwwroot``.

{% tabs %}
{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
        if (navigator.msSaveBlob) {
            //Download document in Edge browser
            var data = window.atob(bytesBase64);
            var bytes = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++) {
                bytes[i] = data.charCodeAt(i);
            }
            var blob = new Blob([bytes.buffer], { type: "application/octet-stream" });
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var link = document.createElement('a');
            link.download = filename;
            link.href = "data:application/octet-stream;base64," + bytesBase64;
            document.body.appendChild(link); // Needed for Firefox
            link.click();
            document.body.removeChild(link);
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

Step 8: Add the following code snippet in the razor file of Navigation menu in the Shared folder.

{% tabs %}

{% highlight HTML %}

 <li class="nav-item px-3">
    <NavLink class="nav-link" href="presentation">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Generate Presentation
    </NavLink>
</li>

{% endhighlight %}

{% endtabs %}

Step 9: Build the project.

{% tabcontents %}

{% tabcontent Visual Studio %}

Click on Build → Build Solution or press Ctrl + Shift + B to build the project.

{% endtabcontent %}


{% tabcontent Visual Studio Code %}

Run the following command in terminal to build the project.

```
dotnet build
```

{% endtabcontent %}

{% endtabcontents %}

Step 10: Run the project.

{% tabcontents %}

{% tabcontent Visual Studio %}

Click the Start button (green arrow) or press F5 to run the app.

{% endtabcontent %}


{% tabcontent Visual Studio Code %}

Run the following command in terminal to build the project.

```
dotnet run
```
{% endtabcontent %}

{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-PowerPoint-presentation-to-Image/Blazor/WASM-app).

By executing the program, you will get the **image** as follows.

![PowerPoint to Image in Blazor WASM app](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-Image.png)

N> Even though PowerPoint library works in WASM app, it is recommended to use server deployment. Since the WASM app deployment increases the application payload size. You can also explore our [Blazor PowerPoint library demo](https://blazor.syncfusion.com/demos/powerpoint/getting-started) that shows how to create and modify PowerPoint files from C# with just five lines of code.

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> PowerPoint Library (Presentation) features. 

An online sample link to [convert PowerPoint Presentation to image](https://blazor.syncfusion.com/demos/powerpoint/pptx-to-image?theme=fluent) in Blazor. 
