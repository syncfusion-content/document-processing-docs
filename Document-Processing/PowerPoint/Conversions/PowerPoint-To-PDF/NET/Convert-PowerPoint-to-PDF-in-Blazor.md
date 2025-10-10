---
title: Convert PowerPoint to PDF in Blazor | Syncfusion
description: Convert PowerPoint presentation to PDF in Blazor using .NET Core PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Convert PowerPoint to PDF in Blazor

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET Core PowerPoint library](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) used to create, read, edit and convert PowerPoint presentation programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, a  **convert a PowerPoint to PDF in Blazor**.

## Blazor Web App Server Application

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

*   Visual Studio 2022.
*   Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new C# Blazor Web app project.
*   Select "Blazor Web App" from the template and click **Next**.

![Create Blazor Web App application in Visual Studio](Workingwith-Blazor/Blazor_image_Web_App.png)

*   Name the project and click **Next**.

![Name the Blazor Web App in Visual Studio](Workingwith-Blazor/Blazor_image_Web_ProjectName.png)

*   Select the framework and click **Create** button.

![Select the framework in Blazor Web App Server in Visual Studio](Workingwith-Blazor/Blazor_image_Server_Web_Additional_Information.png)

Step 2: Install the `Syncfusion.PresentationRenderer.Net.Core` NuGet package.
To convert a **PowerPoint presentation to PDF in a Web App Server**, install the [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) NuGet package as reference to the project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.PresentationRenderer.Net.Core Nuget Package](Azure-Images/App-Service-Linux/Nuget_Package_PowerPoint_Presentation_to_PDF.png)

N> 1. If you're deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/nuget-packages-required-for-pptxtopdf-conversion#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.

Step 3: Create a Razor file named `Presentation.razor` in the `Pages` folder, which is located inside the `Components` folder.
Add the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@rendermode InteractiveServer
@page "/Presentation"
@using System.IO;
@using Convert_PowerPoint_Presentation_to_PDF;
@inject Convert_PowerPoint_Presentation_to_PDF.Data.PowerPointService service
@inject Microsoft.JSInterop.IJSRuntime JS

{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `Presentation.razor`.
Include the following code to create a new button that triggers the PowerPoint to PDF conversion:

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion PowerPoint Library (Essential Presentation)</h2>
<p>The Syncfusion Blazor PowerPoint library (Essential Presentation) used to create, read, edit, and convert PowerPoint files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@ConvertPPTXtoPDF">Convert PPTX to PDF</button>

{% endhighlight %}
{% endtabs %}

Step 5: Implement the method in `Presentation.razor`.
Add the following code to **convert PowerPoint to PDF** and download the **PDF document**.
{% tabs %}
{% highlight c# tabtitle="C#" %}

@code {
    MemoryStream documentStream;
    /// <summary>
    /// Download the PDF document.
    /// </summary>
    protected async void ConvertPPTXtoPDF()
    {
        documentStream = service.ConvertPPTXtoPDF();
        await JS.SaveAs("Sample.pdf", documentStream.ToArray());
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Create a new cs file `PowerPointService` in the `Data` folder.
Include the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 7: Implement the method in `PowerPointService.cs`.
Create a new `MemoryStream` method in the `PowerPointService` and include the following code snippet to **convert a PowerPoint to PDF in Blazor Web App Server**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Open the file as Stream
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Input.pptx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open the existing PowerPoint presentation with loaded stream.
    using (IPresentation pptxDoc = Presentation.Open(sourceStreamPath))
    {
        // Convert the PowerPoint presentation to PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            // Create the MemoryStream to save the converted PDF.      
            MemoryStream pdfStream = new MemoryStream();
            // Save the converted PDF document to MemoryStream.
            pdfDocument.Save(pdfStream);
            pdfStream.Position = 0;

            // Download PDF document in the browser.
            return pdfStream;
        }
    }
} 

{% endhighlight %}
{% endtabs %}

Step 8: Add the service in `Program.cs`. 
Add the following line to the `Program.cs` file to register `PowerPointService` as a scoped service in your Blazor application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

builder.Services.AddScoped<Convert_PowerPoint_Presentation_to_PDF.Data.PowerPointService>();

{% endhighlight %}
{% endtabs %}
            
Step 9: Create `FileUtils.cs` for JavaScript interoperability.
Create a new class file named `FileUtils` in the project and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 10: Add the following JavaScript function to `App.razor`.
Add this function in the `App.razor` file located in the `Pages` folder.

{% tabs %}
{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) 
    {
        if (navigator.msSaveBlob) 
        {
            // Download document in Edge browser
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

Step 11: Add the navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

 <div class="nav-item px-3">
    <NavLink class="nav-link" href="presentation">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Generate Presentation
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 12: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 13: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the application.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/Blazor/Blazor-Web-App-Server).

Upon executing the program, the **PDF** will be generated as follows.

![Converted PDF from PowerPoint in Blazor Web App server](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-PDF.png)

{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}

**Prerequisites:**

* Visual Studio Code.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.

Step 1: Create a new C# Blazor Web app project.
* Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and type **.NET:New Project** and enter.
* Choose the **Blazor Web App** template.

![Choose Blazor Server app from template](Workingwith-Blazor/Blazor-Web-app-template.png)

* Select the project location, type the project name and press enter.
* Then choose **Create project**.

Step 2: To **convert a PowerPoint to PDF in Web App server**, install [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) to the Blazor project.
* Press <kbd>Ctrl</kbd> + <kbd>`</kbd> (backtick) to open the integrated terminal in Visual Studio Code.
* Ensure you're in the project root directory where your .csproj file is located.
* Run the command `dotnet add package Syncfusion.PresentationRenderer.Net.Core` to install the NuGet package.

![Add Syncfusion.PresentationRenderer.Net.Core NuGet package](Workingwith-Blazor/Command-to-add-NuGet-package-for-Server.png)

N> 1. If you're deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/nuget-packages-required-for-pptxtopdf-conversion#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.

Step 3: Create a Razor file named `Presentation.razor` in the `Pages` folder, which is located inside the `Components` folder.
Add the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@rendermode InteractiveServer
@page "/Presentation"
@using System.IO;
@using Convert_PowerPoint_Presentation_to_PDF;
@inject Convert_PowerPoint_Presentation_to_PDF.Data.PowerPointService service
@inject Microsoft.JSInterop.IJSRuntime JS

{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `Presentation.razor`.
Include the following code to create a new button that triggers the PowerPoint to PDF conversion:

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion PowerPoint Library (Essential Presentation)</h2>
<p>The Syncfusion Blazor PowerPoint library (Essential Presentation) used to create, read, edit, and convert PowerPoint files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@ConvertPPTXtoPDF">Convert PPTX to PDF</button>

{% endhighlight %}
{% endtabs %}

Step 5: Implement the method in `Presentation.razor`.
Add the following code to **convert PowerPoint to PDF** and download the **PDF document**.
{% tabs %}
{% highlight c# tabtitle="C#" %}

@code {
    MemoryStream documentStream;
    /// <summary>
    /// Download the PDF document.
    /// </summary>
    protected async void ConvertPPTXtoPDF()
    {
        documentStream = service.ConvertPPTXtoPDF();
        await JS.SaveAs("Sample.pdf", documentStream.ToArray());
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Create a new cs file `PowerPointService` in the `Data` folder.
Include the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 7: Implement the method in `PowerPointService.cs`.
Create a new `MemoryStream` method in the `PowerPointService` and include the following code snippet to **convert a PowerPoint to PDF in Blazor Web App Server**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Open the file as Stream
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Input.pptx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open the existing PowerPoint presentation with loaded stream.
    using (IPresentation pptxDoc = Presentation.Open(sourceStreamPath))
    {
        // Convert the PowerPoint presentation to PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            // Create the MemoryStream to save the converted PDF.      
            MemoryStream pdfStream = new MemoryStream();
            // Save the converted PDF document to MemoryStream.
            pdfDocument.Save(pdfStream);
            pdfStream.Position = 0;

            // Download PDF document in the browser.
            return pdfStream;
        }
    }
} 

{% endhighlight %}
{% endtabs %}

Step 8: Add the service in `Program.cs`. 
Add the following line to the `Program.cs` file to register `PowerPointService` as a scoped service in your Blazor application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

builder.Services.AddScoped<Convert_PowerPoint_Presentation_to_PDF.Data.PowerPointService>();

{% endhighlight %}
{% endtabs %}
            
Step 9: Create `FileUtils.cs` for JavaScript interoperability.
Create a new class file named `FileUtils` in the project and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 10: Add the following JavaScript function to `App.razor`.
Add this function in the `App.razor` file located in the `Pages` folder.

{% tabs %}
{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) 
    {
        if (navigator.msSaveBlob) 
        {
            // Download document in Edge browser
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

Step 11: Add the navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

 <div class="nav-item px-3">
    <NavLink class="nav-link" href="presentation">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Generate Presentation
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 12: Build the project.

Run the following command in terminal to build the project.

```
dotnet build
```

Step 13: Run the project.

Run the following command in terminal to run the project.

```
dotnet run
```

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/Blazor/Blazor-Web-App-Server).

Upon executing the program, the **PDF** will be generated as follows.

![Converted PDF from PowerPoint in Blazor Web App server](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-PDF.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1. Open JetBrains Rider and create a new Blazor Web app project.
* Launch JetBrains Rider.
* Click new solution on the welcome screen.

![Launch JetBrains Rider](Workingwith-Blazor/Launch-JetBrains-Rider.png)

* In the new Solution dialog, select Project Type as Web.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Choose template as **Blazor Web App**.
* Enter a project name and specify the location.
* Click create.

![Creating a new .NET Core console application in JetBrains Rider](Workingwith-Blazor/Create-Blazor-Server-application.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) in the search bar.
* Ensure that "nuget.org" is selected as the package source.
* Select the latest Syncfusion.PresentationRenderer.Net.Core NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.PresentationRenderer.Net.Core NuGet package](Workingwith-Blazor/Select-Syncfusion.PresentationRenderer.Net.Core-NuGet.png)

* Click the Install button to complete the installation.

![Install the Syncfusion.PresentationRenderer.Net.Core NuGet package](Workingwith-Blazor/Install-Syncfusion.PresentationRenderer.Net.Core-NuGet.png)

N> 1. If you're deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/nuget-packages-required-for-pptxtopdf-conversion#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.

Step 3: Create a Razor file named `Presentation.razor` in the `Pages` folder, which is located inside the `Components` folder.
Add the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@rendermode InteractiveServer
@page "/Presentation"
@using System.IO;
@using Convert_PowerPoint_Presentation_to_PDF;
@inject Convert_PowerPoint_Presentation_to_PDF.Data.PowerPointService service
@inject Microsoft.JSInterop.IJSRuntime JS

{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `Presentation.razor`.
Include the following code to create a new button that triggers the PowerPoint to PDF conversion:

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion PowerPoint Library (Essential Presentation)</h2>
<p>The Syncfusion Blazor PowerPoint library (Essential Presentation) used to create, read, edit, and convert PowerPoint files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@ConvertPPTXtoPDF">Convert PPTX to PDF</button>

{% endhighlight %}
{% endtabs %}

Step 5: Implement the method in `Presentation.razor`.
Add the following code to **convert PowerPoint to PDF** and download the **PDF document**.
{% tabs %}
{% highlight c# tabtitle="C#" %}

@code {
    MemoryStream documentStream;
    /// <summary>
    /// Download the PDF document.
    /// </summary>
    protected async void ConvertPPTXtoPDF()
    {
        documentStream = service.ConvertPPTXtoPDF();
        await JS.SaveAs("Sample.pdf", documentStream.ToArray());
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Create a new cs file `PowerPointService` in the `Data` folder.
Include the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;
using Syncfusion.PresentationRenderer;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 7: Implement the method in `PowerPointService.cs`.
Create a new `MemoryStream` method in the `PowerPointService` and include the following code snippet to **convert a PowerPoint to PDF in Blazor Web App Server**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Open the file as Stream
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Input.pptx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open the existing PowerPoint presentation with loaded stream.
    using (IPresentation pptxDoc = Presentation.Open(sourceStreamPath))
    {
        // Convert the PowerPoint presentation to PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            // Create the MemoryStream to save the converted PDF.      
            MemoryStream pdfStream = new MemoryStream();
            // Save the converted PDF document to MemoryStream.
            pdfDocument.Save(pdfStream);
            pdfStream.Position = 0;

            // Download PDF document in the browser.
            return pdfStream;
        }
    }
} 

{% endhighlight %}
{% endtabs %}

Step 8: Add the service in `Program.cs`. 
Add the following line to the `Program.cs` file to register `PowerPointService` as a scoped service in your Blazor application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

builder.Services.AddScoped<Convert_PowerPoint_Presentation_to_PDF.Data.PowerPointService>();

{% endhighlight %}
{% endtabs %}
            
Step 9: Create `FileUtils.cs` for JavaScript interoperability.
Create a new class file named `FileUtils` in the project and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 10: Add the following JavaScript function to `App.razor`.
Add this function in the `App.razor` file located in the `Pages` folder.

{% tabs %}
{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) 
    {
        if (navigator.msSaveBlob) 
        {
            // Download document in Edge browser
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

Step 11: Add the navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

 <div class="nav-item px-3">
    <NavLink class="nav-link" href="presentation">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Generate Presentation
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 12: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 13: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/Blazor/Blazor-Web-App-Server).

Upon executing the program, the **PDF** will be generated as follows.

![Converted PDF from PowerPoint in Blazor Web App server](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-PDF.png)

{% endtabcontent %}

{% endtabcontents %}

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/blazor) to explore the rich set of Syncfusion PowerPoint Library (Presentation) features.

An online sample link to [convert PowerPoint Presentation to PDF](https://document.syncfusion.com/demos/powerpoint/pptxtopdf#/tailwind) in ASP.NET Core. 

## WASM Standalone Application

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

*   Visual Studio 2022.
*   Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new C# Blazor WASM Standalone app project.
Select "Blazor WebAssembly Standalone App" from the template and click the Next button.

![Create Blazor WebAssembly application in Visual Studio for Blazor PowerPoint presentation](Workingwith-Blazor/Blazor_WASM_Standalone.png)

Step 2: Install the following **Nuget packages** in the application from [Nuget.org](https://www.nuget.org/).

*  [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) 
*  [SkiaSharp.Views.Blazor v3.116.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.116.1)

![Install Syncfusion.PresentationRenderer.Net.Core Nuget Package](Azure-Images/App-Service-Linux/Nuget_Package_PowerPoint_Presentation_to_PDF.png)

![Install SkiaSharp.Views.Blazor v3.116.1 Nuget Package](Workingwith-Blazor/NuGet_package_PPTXtoPDF.png)

N> 1. If you're deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/nuget-packages-required-for-pptxtopdf-conversion#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.
N> 3. If you face issues related to SkiaSharp during runtime, install the necessary WebAssembly tools by running the following commands in the terminal:
N> ```
N> dotnet workload install wasm-tools
N> ```
N> After completing the installation, restart Visual Studio Code to ensure proper integration of the tools.

Step 3: Create a Razor file named `Presentation.razor` in the `Pages` folder.
Add the following namespaces in the file.

{% tabs %}

{% highlight c# tabtitle="C#" %}

@page "/presentation"
@inject Microsoft.JSInterop.IJSRuntime JS
@inject HttpClient client
@using System.IO
@using Syncfusion.Presentation
@using Syncfusion.PresentationRenderer
@using Syncfusion.Pdf

{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `Presentation.razor`.
Include the following code to create a new button that triggers the PowerPoint to PDF conversion:

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion PowerPoint Library (Essential Presentation)</h2>
<p>The Syncfusion Blazor PowerPoint library (Essential Presentation) used to create, read, edit, and convert PowerPoint files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@PPTXToPDF">Convert PPTX to PDF</button>

{% endhighlight %}
{% endtabs %}

Step 5: Implement `PPTXToPDF` method in `Presentation.razor`.
Create a new `async` method named `PPTXToPDF` and include the following code snippet to **convert a PowerPoint to PDF in Blazor WASM Standalone app**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Input data file is inside the wwwroot folder.
using (Stream inputStream = await client.GetStreamAsync("sample-data/Input.pptx"))
{
    //Open an existing PowerPoint Presentation file.
    using (IPresentation pptxDoc = Syncfusion.Presentation.Presentation.Open(inputStream))
    {
        //Convert PowerPoint into PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            //Save the PDF document to MemoryStream.
            using (MemoryStream outputStream = new MemoryStream())
            {
                pdfDocument.Save(outputStream);
                outputStream.Position = 0;
                //Download PDF file in the browser.
                await JS.SaveAs("Output.pdf", outputStream.ToArray());
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Create `FileUtils.cs` for JavaScript interoperability.
Create a new class file named `FileUtils` in the project and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 7: Add the following JavaScript function to `index.html`.
Add this function in the `index.html` file located in `wwwroot`.

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

Step 8: Add the navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

 <div class="nav-item px-3">
    <NavLink class="nav-link" href="presentation">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Generate Presentation
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 9: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 10: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the application.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/Blazor/WASM-Standalone-app).

Upon executing the program, the **PDF** will be generated as follows.

![Converted PDF from PowerPoint in Blazor WASM app](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-PDF.png)

N> To convert PPTX to PDF, it is necessary to access the font stream internally. However, this cannot be done automatically in a Blazor WASM Standalone application. Therefore, it is recommended to use a Web app Server, even though PPTX to PDF conversion works in a WASM Standalone app.

{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}

**Prerequisites:**

* Visual Studio Code.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.

Step 1: Create a new C# Blazor WASM Standalone app project.
* Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and type **.NET:New Project** and enter.
* Choose the **Blazor WebAssembly Standalone App** template.

![Choose Blazor Web app from template](Workingwith-Blazor/Blazor-WASM-Standalone-app-template.png)

* Select the project location, type the project name and press enter.
* Then choose **Create project**.

Step 2: To **convert a PowerPoint to PDF in Blazor WASM Standalone app**, install [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) and [SkiaSharp.Views.Blazor v3.116.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.116.1) to the Blazor project.
* Press <kbd>Ctrl</kbd> + <kbd>`</kbd> (backtick) to open the integrated terminal in Visual Studio Code.
* Ensure you're in the project root directory where your .csproj file is located.
* Run the command `dotnet add package Syncfusion.PresentationRenderer.Net.Core` and `dotnet add package SkiaSharp.Views.Blazor --version 3.116.1` to install the NuGet package.

![Add Syncfusion.PresentationRenderer.Net.Core NuGet package](Workingwith-Blazor/Command-to-add-NuGet-package-for-WASM.png)

![Add SkiaSharp.Views.Blazor NuGet package](Workingwith-Blazor/Command-to-add-NuGet-package-for-SkiaSharp.png)

N> 1. If you're deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/nuget-packages-required-for-pptxtopdf-conversion#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.
N> 3. If you face issues related to SkiaSharp during runtime, install the necessary WebAssembly tools by running the following commands in the terminal:
N> ```
N> dotnet workload install wasm-tools
N> ```
N> After completing the installation, restart Visual Studio Code to ensure proper integration of the tools.

Step 3: Create a Razor file named `Presentation.razor` in the `Pages` folder.
Add the following namespaces in the file.

{% tabs %}

{% highlight c# tabtitle="C#" %}

@page "/presentation"
@inject Microsoft.JSInterop.IJSRuntime JS
@inject HttpClient client
@using System.IO
@using Syncfusion.Presentation
@using Syncfusion.PresentationRenderer
@using Syncfusion.Pdf

{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `Presentation.razor`.
Include the following code to create a new button that triggers the PowerPoint to PDF conversion:

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion PowerPoint Library (Essential Presentation)</h2>
<p>The Syncfusion Blazor PowerPoint library (Essential Presentation) used to create, read, edit, and convert PowerPoint files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@PPTXToPDF">Convert PPTX to PDF</button>

{% endhighlight %}
{% endtabs %}

Step 5: Implement `PPTXToPDF` method in `Presentation.razor`.
Create a new `async` method named `PPTXToPDF` and include the following code snippet to **convert a PowerPoint to PDF in Blazor WASM Standalone app**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Input data file is inside the wwwroot folder.
using (Stream inputStream = await client.GetStreamAsync("sample-data/Input.pptx"))
{
    //Open an existing PowerPoint Presentation file.
    using (IPresentation pptxDoc = Syncfusion.Presentation.Presentation.Open(inputStream))
    {
        //Convert PowerPoint into PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            //Save the PDF document to MemoryStream.
            using (MemoryStream outputStream = new MemoryStream())
            {
                pdfDocument.Save(outputStream);
                outputStream.Position = 0;
                //Download PDF file in the browser.
                await JS.SaveAs("Output.pdf", outputStream.ToArray());
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Create `FileUtils.cs` for JavaScript interoperability.
Create a new class file named `FileUtils` in the project and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 7: Add the following JavaScript function to `index.html`.
Add this function in the `index.html` file located in `wwwroot`.

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

Step 8: Add the navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

 <div class="nav-item px-3">
    <NavLink class="nav-link" href="presentation">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Generate Presentation
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 9: Build the project.

Run the following command in terminal to build the project.

```
dotnet build
```

Step 10: Run the project.

Run the following command in terminal to run the project.

```
dotnet run
```

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/Blazor/WASM-Standalone-app).

Upon executing the program, the **PDF** will be generated as follows.

![Converted PDF from PowerPoint in Blazor WASM app](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-PDF.png)

N> To convert PPTX to PDF, it is necessary to access the font stream internally. However, this cannot be done automatically in a Blazor WASM Standalone application. Therefore, it is recommended to use a Web app Server, even though PPTX to PDF conversion works in a WASM Standalone app.

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1. Open JetBrains Rider and create a new Blazor WASM Standalone app project.
* Launch JetBrains Rider.
* Click new solution on the welcome screen.

![Launch JetBrains Rider](Workingwith-Blazor/Launch-JetBrains-Rider.png)

* In the new Solution dialog, select Project Type as Web.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Choose template as **Blazor WebAssembly Standalone App**.
* Enter a project name and specify the location.
* Click create.

![Creating a new .NET Core console application in JetBrains Rider](Workingwith-Blazor/Create-Blazor-WASM-application.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core) in the search bar.
* Ensure that "nuget.org" is selected as the package source.
* Select the latest Syncfusion.PresentationRenderer.Net.Core NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.PresentationRenderer.Net.Core NuGet package](Workingwith-Blazor/Select-Syncfusion.PresentationRenderer.Net.Core-NuGet.png)

* Click the Install button to complete the installation.

![Install the Syncfusion.PresentationRenderer.Net.Core NuGet package](Workingwith-Blazor/Install-Syncfusion.PresentationRenderer.Net.Core-NuGet.png)

* Similary install the [SkiaSharp.Views.Blazor](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/) NuGet package from [NuGet.org](https://www.nuget.org/)

![Install the SkiaSharp.Views.Blazor NuGet package](Workingwith-Blazor/Install-SkiaSharp.Views.Blazor-NuGet.png)

N> 1. If you're deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/nuget-packages-required-for-pptxtopdf-conversion#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.
N> 3. If you face issues related to SkiaSharp during runtime, install the necessary WebAssembly tools by running the following commands in the terminal:
N> ```
N> dotnet workload install wasm-tools
N> ```
N> After completing the installation, restart Visual Studio Code to ensure proper integration of the tools.

Step 3: Create a Razor file named `Presentation.razor` in the `Pages` folder.
Add the following namespaces in the file.

{% tabs %}

{% highlight c# tabtitle="C#" %}

@page "/presentation"
@inject Microsoft.JSInterop.IJSRuntime JS
@inject HttpClient client
@using System.IO
@using Syncfusion.Presentation
@using Syncfusion.PresentationRenderer
@using Syncfusion.Pdf

{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `Presentation.razor`.
Include the following code to create a new button that triggers the PowerPoint to PDF conversion:

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion PowerPoint Library (Essential Presentation)</h2>
<p>The Syncfusion Blazor PowerPoint library (Essential Presentation) used to create, read, edit, and convert PowerPoint files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@PPTXToPDF">Convert PPTX to PDF</button>

{% endhighlight %}
{% endtabs %}

Step 5: Implement `PPTXToPDF` method in `Presentation.razor`.
Create a new `async` method named `PPTXToPDF` and include the following code snippet to **convert a PowerPoint to PDF in Blazor WASM Standalone app**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Input data file is inside the wwwroot folder.
using (Stream inputStream = await client.GetStreamAsync("sample-data/Input.pptx"))
{
    //Open an existing PowerPoint Presentation file.
    using (IPresentation pptxDoc = Syncfusion.Presentation.Presentation.Open(inputStream))
    {
        //Convert PowerPoint into PDF document.
        using (PdfDocument pdfDocument = PresentationToPdfConverter.Convert(pptxDoc))
        {
            //Save the PDF document to MemoryStream.
            using (MemoryStream outputStream = new MemoryStream())
            {
                pdfDocument.Save(outputStream);
                outputStream.Position = 0;
                //Download PDF file in the browser.
                await JS.SaveAs("Output.pdf", outputStream.ToArray());
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Create `FileUtils.cs` for JavaScript interoperability.
Create a new class file named `FileUtils` in the project and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 7: Add the following JavaScript function to `index.html`.
Add this function in the `index.html` file located in `wwwroot`.

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

Step 8: Add the navigation link.
Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

 <div class="nav-item px-3">
    <NavLink class="nav-link" href="presentation">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Generate Presentation
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 9: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 10: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-PDF-conversion/Convert-PowerPoint-presentation-to-PDF/Blazor/WASM-Standalone-app).

Upon executing the program, the **PDF** will be generated as follows.

![Converted PDF from PowerPoint in Blazor WASM app](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-PDF.png)

N> To convert PPTX to PDF, it is necessary to access the font stream internally. However, this cannot be done automatically in a Blazor WASM Standalone application. Therefore, it is recommended to use a Web app Server, even though PPTX to PDF conversion works in a WASM Standalone app.

{% endtabcontent %}

{% endtabcontents %}

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> PowerPoint Library (Presentation) features.

An online sample link to [convert PowerPoint Presentation to PDF](https://document.syncfusion.com/demos/powerpoint/pptxtopdf#/tailwind) in ASP.NET Core.


