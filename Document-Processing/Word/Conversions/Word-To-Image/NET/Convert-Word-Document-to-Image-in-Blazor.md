---
title: Convert Word to Image in Blazor | DocIO | Syncfusion 
description: Convert Word to image in Blazor using Blazor Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word Document to Image in Blazor

Syncfusion<sup>&reg;</sup> DocIO is a [Blazor Word library](https://www.syncfusion.com/document-processing/word-framework/blazor/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, a **convert a Word document to image in Blazor**.

## Word to Image in Blazor Web App Server Application

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

*   Visual Studio 2022.
*   Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new C# Blazor Web app project.
*   Select "Blazor Web App" from the template and click **Next**.

![Create Blazor Web App application in Visual Studio](Blazor_Images/Blazor_image_Web_App.png)

*   Name the project and click **Next**.

![Name the Blazor Web App in Visual Studio](Blazor_Images/Blazor_image_Web_ProjectName.png)

*   Select the framework and click **Create** button.

![Select the framework in Blazor Web Server App in Visual Studio](Blazor_Images/Blazor_image_Server_Web_Additional_Information.png)

Step 2: Install the `Syncfusion.DocIORenderer.Net.Core` NuGet package.

To **convert a Word document to image in Web App Server**, install [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) into the Blazor project.

![Install Syncfusion.DocIORenderer.Net.Core NuGet Package](Blazor_Images/Nuget-Package-WordtoImage.png)

N> 1. If deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/nuget-packages-required-word-to-image#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder, which is located inside the `Components` folder.

Include the following namespaces in the file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

@rendermode InteractiveServer
@page "/DocIO"
@using System.IO;
@using Convert_Word_Document_to_Image;
@inject Convert_Word_Document_to_Image.Data.WordService service
@inject Microsoft.JSInterop.IJSRuntime JS

{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `DocIO.razor`.

Include the following code to create a new button that triggers the Word to Image conversion:

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion DocIO Library </h2>
<p>The Syncfusion DocIO library is a Blazor DocIO library used to create, read, edit, and convert Word files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@ConvertWordtoImage">Convert Word to Image</button>

{% endhighlight %}
{% endtabs %}

Step 5: Implement method in `DocIO.razor`.

Add the following code to convert the Word document to an image and download it:

{% tabs %}
{% highlight c# tabtitle="C#" %}
@code {
    MemoryStream documentStream;
    /// <summary>
    /// Convert Word to image and download the image file
    /// </summary>
    protected async void ConvertWordtoImage()
    {
        documentStream = service.ConvertWordtoImage();
        await JS.SaveAs("WordToImage.Jpeg", documentStream.ToArray());
    }
}
{% endhighlight %}
{% endtabs %}

Step 6: Create a new cs file `WordService.cs` in the `Data` folder.

Include the following namespaces in the file:

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;

{% endhighlight %}

{% endtabs %}

Step 7: Implement the method in `WordService.cs`.

Create a new `MemoryStream` method in the `WordService` class, and include the following code snippet to **convert a Word document to an image** Web App Server:									

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Open the file as Stream
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open an existing Word document.
    using (WordDocument document = new WordDocument(sourceStreamPath, FormatType.Docx))
    {
        // Instantiation of DocIORenderer for Word to image conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            Stream imageStream = document.RenderAsImages(0, ExportImageFormat.Jpeg);
            // Reset the stream position.
            imageStream.Position = 0;
            return (MemoryStream)imageStream;
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 8: Add the service in `Program.cs`.

Add the following line to the `Program.cs` file to register `WordService` as a scoped service in the Blazor application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

builder.Services.AddScoped<Convert_Word_Document_to_Image.Data.WordService>();

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

Step 10: Add JavaScript function to `App.razor`.

Add the following JavaScript function in the `App.razor` file located in the `Pages` folder.

{% tabs %}

{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
        if (navigator.msSaveBlob) {
            // Download document in Edge browser
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

Step 11: Add navigation link.

Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

<div class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Convert Word to Image
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 12: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 13: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the application.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/Blazor/Blazor-Web-Server-app).

Upon executing the program, the **image** will be generated as follows.

![Word to Image in Blazor Web App Server](WordToPDF_images/Output-WordtoImage.png)

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

**Prerequisites:**

* Visual Studio Code.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.

Step 1: Create a new C# Blazor Web App project.
* Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and type **.NET:New Project** and enter.
* Choose the **Blazor Web App** template.

![Choose Blazor Web app from template](Blazor_Images/Blazor-Web-app-template.png)

* Select the project location, type the project name and press enter.
* Then choose **Create project**.

Step 2: To **convert a Word document to image in Web App server**, install [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) to the Blazor project.
* Press <kbd>Ctrl</kbd> + <kbd>`</kbd> (backtick) to open the integrated terminal in Visual Studio Code.
* Ensure you're in the project root directory where your .csproj file is located.
* Run the command `dotnet add package Syncfusion.DocIORenderer.Net.Core` to install the NuGet package.

![Add Syncfusion.DocIORenderer.Net.Core NuGet package](Blazor_Images/Command-to-add-NuGet-package-for-Server.png)

N> 1. If deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/nuget-packages-required-word-to-image#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder, which is located inside the `Components` folder.

Include the following namespaces in the file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

@rendermode InteractiveServer
@page "/DocIO"
@using System.IO;
@using Convert_Word_Document_to_Image;
@inject Convert_Word_Document_to_Image.Data.WordService service
@inject Microsoft.JSInterop.IJSRuntime JS

{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `DocIO.razor`.

Include the following code to create a new button that triggers the Word to Image conversion:

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion DocIO Library </h2>
<p>The Syncfusion DocIO library is a Blazor DocIO library used to create, read, edit, and convert Word files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@ConvertWordtoImage">Convert Word to Image</button>

{% endhighlight %}
{% endtabs %}

Step 5: Implement method in `DocIO.razor`.

Add the following code to convert the Word document to an image and download it:

{% tabs %}
{% highlight c# tabtitle="C#" %}
@code {
    MemoryStream documentStream;
    /// <summary>
    /// Convert Word to image and download the image file
    /// </summary>
    protected async void ConvertWordtoImage()
    {
        documentStream = service.ConvertWordtoImage();
        await JS.SaveAs("WordToImage.Jpeg", documentStream.ToArray());
    }
}
{% endhighlight %}
{% endtabs %}

Step 6: Create a new cs file `WordService.cs` in the `Data` folder.

Include the following namespaces in the file:

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;

{% endhighlight %}

{% endtabs %}

Step 7: Implement the method in `WordService.cs`.

Create a new `MemoryStream` method in the `WordService` class, and include the following code snippet to **convert a Word document to an image** Web App Server:									

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Open the file as Stream
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open an existing Word document.
    using (WordDocument document = new WordDocument(sourceStreamPath, FormatType.Docx))
    {
        // Instantiation of DocIORenderer for Word to image conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            Stream imageStream = document.RenderAsImages(0, ExportImageFormat.Jpeg);
            // Reset the stream position.
            imageStream.Position = 0;
            return (MemoryStream)imageStream;
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 8: Add the service in `Program.cs`.

Add the following line to the `Program.cs` file to register `WordService` as a scoped service in the Blazor application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

builder.Services.AddScoped<Convert_Word_Document_to_Image.Data.WordService>();

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

Step 10: Add JavaScript function to `App.razor`.

Add the following JavaScript function in the `App.razor` file located in the `Pages` folder.

{% tabs %}

{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
        if (navigator.msSaveBlob) {
            // Download document in Edge browser
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

Step 11: Add navigation link.

Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

<div class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Convert Word to Image
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

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/Blazor/Blazor-Web-Server-app).

Upon executing the program, the **image** will be generated as follows.

![Word to Image in Blazor Web App Server](WordToPDF_images/Output-WordtoImage.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1. Open JetBrains Rider and create a new Blazor Web app project.
* Launch JetBrains Rider.
* Click new solution on the welcome screen.

![Launch JetBrains Rider](Blazor_Images/Launch-JetBrains-Rider.png)

* In the new Solution dialog, select Project Type as Web.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Choose template as **Blazor Web App**.
* Enter a project name and specify the location.
* Click create.

![Creating a new .NET Core console application in JetBrains Rider](Blazor_Images/Create-Blazor-Server-application.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) in the search bar.
* Ensure that "nuget.org" is selected as the package source.
* Select the latest Syncfusion.DocIORenderer.Net.Core NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.DocIORenderer.Net.Core NuGet package](Blazor_Images/Select-Syncfusion.DocIORenderer.Net.Core-NuGet.png)

* Click the Install button to complete the installation.

![Install the Syncfusion.DocIORenderer.Net.Core NuGet package](Blazor_Images/Install-Syncfusion.DocIORenderer.Net.Core-NuGet.png)

N> 1. If deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/nuget-packages-required-word-to-image#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder, which is located inside the `Components` folder.

Include the following namespaces in the file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

@rendermode InteractiveServer
@page "/DocIO"
@using System.IO;
@using Convert_Word_Document_to_Image;
@inject Convert_Word_Document_to_Image.Data.WordService service
@inject Microsoft.JSInterop.IJSRuntime JS

{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `DocIO.razor`.

Include the following code to create a new button that triggers the Word to Image conversion:

{% tabs %}
{% highlight CSHTML %}

<h2>Syncfusion DocIO Library </h2>
<p>The Syncfusion DocIO library is a Blazor DocIO library used to create, read, edit, and convert Word files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@ConvertWordtoImage">Convert Word to Image</button>

{% endhighlight %}
{% endtabs %}

Step 5: Implement method in `DocIO.razor`.

Add the following code to convert the Word document to an image and download it:

{% tabs %}
{% highlight c# tabtitle="C#" %}
@code {
    MemoryStream documentStream;
    /// <summary>
    /// Convert Word to image and download the image file
    /// </summary>
    protected async void ConvertWordtoImage()
    {
        documentStream = service.ConvertWordtoImage();
        await JS.SaveAs("WordToImage.Jpeg", documentStream.ToArray());
    }
}
{% endhighlight %}
{% endtabs %}

Step 6: Create a new cs file `WordService.cs` in the `Data` folder.

Include the following namespaces in the file:

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;

{% endhighlight %}

{% endtabs %}

Step 7: Implement the method in `WordService.cs`.

Create a new `MemoryStream` method in the `WordService` class, and include the following code snippet to **convert a Word document to an image** Web App Server:								

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Open the file as Stream
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open an existing Word document.
    using (WordDocument document = new WordDocument(sourceStreamPath, FormatType.Docx))
    {
        // Instantiation of DocIORenderer for Word to image conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            Stream imageStream = document.RenderAsImages(0, ExportImageFormat.Jpeg);
            // Reset the stream position.
            imageStream.Position = 0;
            return (MemoryStream)imageStream;
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 8: Add the service in `Program.cs`.

Add the following line to the `Program.cs` file to register `WordService` as a scoped service in the Blazor application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

builder.Services.AddScoped<Convert_Word_Document_to_Image.Data.WordService>();

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

Step 10: Add JavaScript function to `App.razor`.

Add the following JavaScript function in the `App.razor` file located in the `Pages` folder.

{% tabs %}

{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
        if (navigator.msSaveBlob) {
            // Download document in Edge browser
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

Step 11: Add navigation link.

Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

<div class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Convert Word to Image
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 12: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 13: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/Blazor/Blazor-Web-Server-app).

Upon executing the program, the **image** will be generated as follows.

![Word to Image in Blazor Web App Server](WordToPDF_images/Output-WordtoImage.png)

{% endtabcontent %}

{% endtabcontents %}

Click [here](https://www.syncfusion.com/document-processing/word-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features.

An online sample link to [convert Word document to image](https://document.syncfusion.com/demos/word/wordtoimage#/tailwind) in ASP.NET Core.

## Word to Image in Blazor WASM Standalone Application

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

*   Visual Studio 2022.
*   Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new C# Blazor WASM Standalone app project.

Select "Blazor WebAssembly App" from the template and click the **Next** button.

![Create Blazor WebAssembly Standalone application in Visual Studio ](Blazor_Images/Blazor_WASM_Standalone.png)

Step 2: Install the following **Nuget packages** in application from [Nuget.org](https://www.nuget.org/).
* [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)
* [SkiaSharp.Views.Blazor v3.116.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.116.1)

![Install Syncfusion.DocIORenderer.Net.Core NuGet Package](Blazor_Images/Nuget-Package-WordtoImage.png)
![Install SkiaSharp.Views.Blazor v3.116.1 NuGet Package](Blazor_Images/NuGet-Package-Convert-WordtoImage.png)

N> 1. If deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/nuget-packages-required-word-to-image#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.
N> 3. If you face issues related to SkiaSharp during runtime, install the necessary WebAssembly tools by running the following commands in the terminal:
N> ```
N> dotnet workload install wasm-tools
N> ```
N> After completing the installation, restart Visual Studio to ensure proper integration of the tools.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder.

Add the following namespaces in the file:

{% tabs %}

{% highlight c# tabtitle="C#" %}
@page "/docio"
@using Syncfusion.DocIO
@using Syncfusion.DocIORenderer
@using Syncfusion.DocIO.DLS
@inject Microsoft.JSInterop.IJSRuntime JS
@inject HttpClient client
{% endhighlight %}

{% endtabs %}

Step 4: Add a button to `DocIO.razor`.

Add the following code to create a new button that triggers the Word to Image conversion:

{% tabs %}

{% highlight CSHTML %}

<h2>Syncfusion DocIO Library (Essential DocIO)</h2>
<p>The Syncfusion Blazor DocIO library (Essential DocIO) used to create, read, edit, and convert DocIO files in your applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@WordToImage">Convert Word to Image</button>

{% endhighlight %}

{% endtabs %}

Step 5: Implement `WordToImage` method in `DocIO.razor`.

Create a new `async` method named `WordToImage` and include the following code snippet to **convert a Word document to image in Blazor** WASM Standalone app.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open an existing Word document.
    using (WordDocument document = new WordDocument(sourceStreamPath, FormatType.Docx))
    {
        // Instantiation of DocIORenderer for Word to image conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            MemoryStream imageStream = (MemoryStream)document.RenderAsImages(0, ExportImageFormat.Jpeg);
            // Reset the stream position.
            imageStream.Position = 0;
            // Download image file in the browser.
            await JS.SaveAs("WordToImage.Jpeg", imageStream.ToArray());
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 6: Create `FileUtils.cs` for JavaScript interoperability.

Create a class file named `FileUtils` and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 7: Add JavaScript function to `index.html`.

Add the following JavaScript function in the `index.html` file present under `wwwroot`.

{% tabs %}

{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
        if (navigator.msSaveBlob) {
            // Download document in Edge browser
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

Step 8: Add navigation link.

Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

 <div class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Word to Image
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 9: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 10: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the application.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/Blazor/Blazor-WASM-Standalone-app).

Upon executing the program, the **image** will be generated as follows.

![Blazor WASM Standalone app output](WordToPDF_images/Output-WordtoImage.png)

N> To convert Word to image, it is necessary to access the font stream internally. However, this cannot be done automatically in a Blazor WASM Standalone application. Therefore, it is recommended to use a Web app Server, even though Word to image conversion works in a WASM Standalone app.

{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}

**Prerequisites:**

* Visual Studio Code.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.

Step 1: Create a new C# Blazor WASM Standalone app project.
* Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and type **.NET:New Project** and enter.
* Choose the **Blazor WebAssembly Standalone App** template.

![Choose Blazor Web app from template](Blazor_Images/Blazor-WASM-Standalone-app-template.png)

* Select the project location, type the project name and press enter.
* Then choose **Create project**.

Step 2: To **convert a Word document to Image in Blazor WASM Standalone app**, install [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) and [SkiaSharp.Views.Blazor v3.116.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.116.1) to the Blazor project.
* Press <kbd>Ctrl</kbd> + <kbd>`</kbd> (backtick) to open the integrated terminal in Visual Studio Code.
* Ensure you're in the project root directory where your .csproj file is located.
* Run the command `dotnet add package Syncfusion.DocIORenderer.Net.Core` and `dotnet add package SkiaSharp.Views.Blazor --version 3.116.1` to install the NuGet package.

![Add Syncfusion.DocIORenderer.Net.Core NuGet package](Blazor_Images/Command-to-add-NuGet-package-for-WASM.png)

![Add SkiaSharp.Views.Blazor NuGet package](Blazor_Images/Command-to-add-NuGet-package-for-SkiaSharp.png)

N> 1. If deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/nuget-packages-required-word-to-image#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.
N> 3. If you face issues related to SkiaSharp during runtime, install the necessary WebAssembly tools by running the following commands in the terminal:
N> ```
N> dotnet workload install wasm-tools
N> ```
N> After completing the installation, restart Visual Studio Code to ensure proper integration of the tools.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder.

Add the following namespaces in the file:

{% tabs %}

{% highlight c# tabtitle="C#" %}
@page "/docio"
@using Syncfusion.DocIO
@using Syncfusion.DocIORenderer
@using Syncfusion.DocIO.DLS
@inject Microsoft.JSInterop.IJSRuntime JS
@inject HttpClient client
{% endhighlight %}

{% endtabs %}

Step 4: Add a button to `DocIO.razor`.

Add the following code to create a new button that triggers the Word to Image conversion:

{% tabs %}

{% highlight CSHTML %}

<h2>Syncfusion DocIO Library (Essential DocIO)</h2>
<p>The Syncfusion Blazor DocIO library (Essential DocIO) used to create, read, edit, and convert DocIO files in your applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@WordToImage">Convert Word to Image</button>

{% endhighlight %}

{% endtabs %}

Step 5: Implement `WordToImage` method in `DocIO.razor`.

Create a new `async` method named `WordToImage` and include the following code snippet to **convert a Word document to image in Blazor** WASM Standalone app.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open an existing Word document.
    using (WordDocument document = new WordDocument(sourceStreamPath, FormatType.Docx))
    {
        // Instantiation of DocIORenderer for Word to image conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            MemoryStream imageStream = (MemoryStream)document.RenderAsImages(0, ExportImageFormat.Jpeg);
            // Reset the stream position.
            imageStream.Position = 0;
            // Download image file in the browser.
            await JS.SaveAs("WordToImage.Jpeg", imageStream.ToArray());
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 6: Create `FileUtils.cs` for JavaScript interoperability.

Create a class file named `FileUtils` and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 7: Add JavaScript function to `index.html`.

Add the following JavaScript function in the `index.html` file present under `wwwroot`.

{% tabs %}

{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
        if (navigator.msSaveBlob) {
            // Download document in Edge browser
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

Step 8: Add navigation link.

Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

 <div class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Word to Image
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

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/Blazor/Blazor-WASM-Standalone-app).

Upon executing the program, the **image** will be generated as follows.

![Blazor WASM Standalone app output](WordToPDF_images/Output-WordtoImage.png)

N> To convert Word to image, it is necessary to access the font stream internally. However, this cannot be done automatically in a Blazor WASM Standalone application. Therefore, it is recommended to use a Web app Server, even though Word to image conversion works in a WASM Standalone app.

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1. Open JetBrains Rider and create a new Blazor WASM Standalone app project.
* Launch JetBrains Rider.
* Click new solution on the welcome screen.

![Launch JetBrains Rider](Blazor_Images/Launch-JetBrains-Rider.png)

* In the new Solution dialog, select Project Type as Web.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Choose template as **Blazor WebAssembly Standalone App**.
* Enter a project name and specify the location.
* Click create.

![Creating a new .NET Core console application in JetBrains Rider](Blazor_Images/Create-Blazor-WASM-application.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) in the search bar.
* Ensure that "nuget.org" is selected as the package source.
* Select the latest Syncfusion.DocIORenderer.Net.Core NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.DocIORenderer.Net.Core NuGet package](Blazor_Images/Select-Syncfusion.DocIORenderer.Net.Core-NuGet.png)

* Click the Install button to complete the installation.

![Install the Syncfusion.DocIORenderer.Net.Core NuGet package](Blazor_Images/Install-Syncfusion.DocIORenderer.Net.Core-NuGet.png)

* Similarly install the [SkiaSharp.Views.Blazor](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/) NuGet package from [NuGet.org](https://www.nuget.org/)

![Install the SkiaSharp.Views.Blazor NuGet package](Blazor_Images/Install-SkiaSharp.Views.Blazor-NuGet.png)

N> 1. If deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/nuget-packages-required-word-to-image#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.
N> 3. If you face issues related to SkiaSharp during runtime, install the necessary WebAssembly tools by running the following commands in the terminal:
N> ```
N> dotnet workload install wasm-tools
N> ```
N> After completing the installation, restart JetBrains Rider to ensure proper integration of the tools.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder.

Add the following namespaces in the file:

{% tabs %}

{% highlight c# tabtitle="C#" %}
@page "/docio"
@using Syncfusion.DocIO
@using Syncfusion.DocIORenderer
@using Syncfusion.DocIO.DLS
@inject Microsoft.JSInterop.IJSRuntime JS
@inject HttpClient client
{% endhighlight %}

{% endtabs %}

Step 4: Add a button to `DocIO.razor`.

Add the following code to create a new button that triggers the Word to Image conversion:

{% tabs %}

{% highlight CSHTML %}

<h2>Syncfusion DocIO Library (Essential DocIO)</h2>
<p>The Syncfusion Blazor DocIO library (Essential DocIO) used to create, read, edit, and convert DocIO files in your applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@WordToImage">Convert Word to Image</button>

{% endhighlight %}

{% endtabs %}

Step 5: Implement `WordToImage` method in `DocIO.razor`.

Create a new `async` method named `WordToImage` and include the following code snippet to **convert a Word document to image in Blazor** WASM Standalone app.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open an existing Word document.
    using (WordDocument document = new WordDocument(sourceStreamPath, FormatType.Docx))
    {
        // Instantiation of DocIORenderer for Word to image conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            MemoryStream imageStream = (MemoryStream)document.RenderAsImages(0, ExportImageFormat.Jpeg);
            // Reset the stream position.
            imageStream.Position = 0;
            // Download image file in the browser.
            await JS.SaveAs("WordToImage.Jpeg", imageStream.ToArray());
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 6: Create `FileUtils.cs` for JavaScript interoperability.

Create a class file named `FileUtils` and add the following code to invoke the JavaScript action for file download in the browser.

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

Step 7: Add JavaScript function to `index.html`.

Add the following JavaScript function in the `index.html` file present under `wwwroot`.

{% tabs %}

{% highlight HTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64) {
        if (navigator.msSaveBlob) {
            // Download document in Edge browser
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

Step 8: Add navigation link.

Add the following code snippet to the Navigation menu's Razor file in the `Layout` folder.

{% tabs %}

{% highlight HTML %}

 <div class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Word to Image
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 9: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 10: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-Image-conversion/Convert-Word-to-image/Blazor/Blazor-WASM-Standalone-app).

Upon executing the program, the **image** will be generated as follows.

![Blazor WASM Standalone app output](WordToPDF_images/Output-WordtoImage.png)

N> To convert Word to image, it is necessary to access the font stream internally. However, this cannot be done automatically in a Blazor WASM Standalone application. Therefore, it is recommended to use a Web app Server, even though Word to image conversion works in a WASM Standalone app.

{% endtabcontent %}

{% endtabcontents %}

Click [here](https://www.syncfusion.com/document-processing/word-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features.

An online sample link to [convert Word document to image](https://document.syncfusion.com/demos/word/wordtoimage#/tailwind) in ASP.NET Core. 
 
