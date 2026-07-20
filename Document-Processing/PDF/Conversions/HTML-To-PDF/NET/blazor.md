---
title: Convert a HTML to PDF file in Blazor | Syncfusion
description: Learn how to convert a HTML to PDF file in Blazor with easy steps using Syncfusion .NET HTML converter library.
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
---

# Convert HTML to PDF file in Blazor

The [HTML to PDF converter](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) is a .NET library used to convert HTML or web pages to PDF documents in Blazor applications.

## Prerequisites

**Version Compatibility**

The **Syncfusion.HtmlToPdfConverter.Net.Windows** NuGet package uses the Blink rendering engine for HTML to PDF conversion. This library is compatible with **.NET 8.0 and later** versions.

N> HTML to PDF conversion is supported only in **Blazor Server-Side**, not in Blazor WebAssembly (WASM).

**Supported Inputs**

The HTML to PDF converter supports the following input types:

- HTML String: Direct HTML content.
- URL: Web pages and online HTML content.
- HTML Files: Local HTML files.
- MHTML Files: Web archive (.mhtml/.mht) content.
- Authenticated Web Pages: Pages that require cookies, form authentication, or HTTP authentication.
- HTTP GET/POST Requests: HTML content accessed through GET or POST methods

**Required Software**

- .NET 8 SDK or later
- Visual Studio, Visual Studio Code, or JetBrains Rider

**Register the license key**

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you must add the "Syncfusion.Licensing" assembly reference and register a license key in your application. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details on registering a Syncfusion<sup>&reg;</sup> license key.

Include a license key in your **Startup.cs** file before creating an **HtmlToPdfConverter** instance. Refer to the [Syncfusion License](https://help.syncfusion.com/common/essential-studio/licensing/overview) documentation to learn about registering the Syncfusion license key in your application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

public void ConfigureServices(IServiceCollection services)
{
    // Register the Syncfusion license
    SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");
}

{% endhighlight %}
{% endtabs %}

## Steps to convert HTML to PDF in Blazor application

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new C# Blazor Server application project. Select **Blazor App** from the template and click the **Next** button:
![Create Blazor application](htmlconversion_images/blazor_step1.png)  

In the project configuration window, name your project and select **Create**:
![Project configuration1](htmlconversion_images/blazor_step2.png) 

Step 2: Install the [Syncfusion.HtmlToPdfConverter.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows/) NuGet package into your Blazor Server application from [NuGet.org](https://www.nuget.org/):
![NuGet package installation](htmlconversion_images/blazor_step_nuget.png)

Step 3: Create a new class file named **ExportService** under the **Data** folder and include the following namespaces in the file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code to the **ExportService** class to convert HTML to PDF document using the [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method of the [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

public MemoryStream CreatePdf(string url)
{
    // Initialize the HTML to PDF converter
    HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();    
    // Convert URL to PDF document
    PdfDocument document = htmlConverter.Convert(url);
    // Create memory stream for output
    MemoryStream stream = new MemoryStream();
    // Save the document to memory stream
    document.Save(stream);
    return stream;
}

{% endhighlight %}
{% endtabs %}

Step 5: Register your service in the **ConfigureServices** method available in the **Startup.cs** class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

/// <summary>
/// Register your ExportService 
/// </summary>
public void ConfigureServices(IServiceCollection services)
{
    services.AddRazorPages();
    services.AddServerSideBlazor();
    services.AddSingleton<WeatherForecastService>();
    services.AddSingleton<ExportService>();
}

{% endhighlight %}
{% endtabs %}

Step 6: Inject **ExportService** into **FetchData.razor** using the following code:

{% tabs %}
{% highlight CSHTML %}

@inject ExportService exportService
@inject Microsoft.JSInterop.IJSRuntime JS
@inject NavigationManager NavigationManager
@using  System.IO

{% endhighlight %}
{% endtabs %}

Step 7: Create a button in the **FetchData.razor** using the following code:

{% tabs %}
{% highlight CSHTML %}

<button class="btn btn-primary" @onclick="@ExportToPdf">Export to PDF</button>

{% endhighlight %}
{% endtabs %}

Step 8: Add the **ExportToPdf** method in the **FetchData.razor** page to call the export service:

{% tabs %}
{% highlight c# tabtitle="C#" %}

@code {
    private string currentUrl;
    /// <summary>
    /// Get the current URL
    /// </summary>
    protected override void OnInitialized()
    {
        currentUrl = NavigationManager.Uri;
    }
}

@functions
{
    /// <summary>
    /// Create and download the PDF document
    /// </summary>
    protected async Task ExportToPdf()
    {
        ExportService exportService = new ExportService();
        using (MemoryStream excelStream = exportService.CreatePdf(currentUrl))
        {
            await JS.SaveAs("HTMLToPDF.pdf", excelStream.ToArray());
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 9: Create a class file with FileUtil name and add the following code to invoke the JavaScript action to download the file in the browser.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public static class FileUtil
{
    public static ValueTask<object> SaveAs(this IJSRuntime js, string filename, byte[] data)
     => js.InvokeAsync<object>(
         "saveAsFile",
         filename,
         Convert.ToBase64String(data));
}

{% endhighlight %}
{% endtabs %}

Step 10: Add the following JavaScript function in the _Host.cshtml available under the Pages folder.

{% tabs %}
{% highlight CSHTML %}

<script type="text/javascript">
    function saveAsFile(filename, bytesBase64)
    {
        if (navigator.msSaveBlob)
        {
            //Download document in Edge browser
            var data = window.atob(bytesBase64);
            var bytes = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++)
            {
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

Step 11: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 12: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Step 1: Open the terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>) and run the following command to create a new Blazor Server application:

```
dotnet new blazorserver -n CreatePdfBlazorServerApp
```

Step 2: Replace **CreatePdfBlazorServerApp** with your desired project name.

Step 3: Navigate to the project directory using the following command:

```
cd CreatePdfBlazorServerApp
```

Step 4: Use the following command in the terminal to add the [Syncfusion.HtmlToPdfConverter.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows/) package to your project:

```
dotnet add package Syncfusion.HtmlToPdfConverter.Net.Windows
```

Step 5: Create a new class file named **ExportService** under the **Data** folder and include the following namespaces in the file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;
using System.IO;

{% endhighlight %}
{% endtabs %}

Step 6: Add the following code to the **ExportService** class to convert HTML to PDF document using the [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method of the [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

public MemoryStream CreatePdf(string url)
{
    // Initialize the HTML to PDF converter
    HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();    
    // Convert URL to PDF document
    PdfDocument document = htmlConverter.Convert(url);
    // Create memory stream for output
    MemoryStream stream = new MemoryStream();
    // Save the document to memory stream
    document.Save(stream);
    return stream;
}

{% endhighlight %}
{% endtabs %}

Step 7: Register your service in the **ConfigureServices** method available in the **Startup.cs** class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

/// <summary>
/// Register your ExportService 
/// </summary>
public void ConfigureServices(IServiceCollection services)
{
    services.AddRazorPages();
    services.AddServerSideBlazor();
    services.AddSingleton<WeatherForecastService>();
    services.AddSingleton<ExportService>();
}

{% endhighlight %}
{% endtabs %}

Step 8: Inject **ExportService** into **FetchData.razor** using the following code:

{% tabs %}
{% highlight CSHTML %}

@inject ExportService exportService
@inject Microsoft.JSInterop.IJSRuntime JS
@inject NavigationManager NavigationManager

{% endhighlight %}
{% endtabs %}

Step 9: Create a button in the **FetchData.razor** using the following code:

{% tabs %}
{% highlight CSHTML %}

<button class="btn btn-primary" @onclick="@ExportToPdf">Export to PDF</button>

{% endhighlight %}
{% endtabs %}

Step 10: Add the **ExportToPdf** method in the **FetchData.razor** page to call the export service:

{% tabs %}
{% highlight c# tabtitle="C#" %}

@code {
    private string currentUrl;
    /// <summary>
    /// Get the current URL
    /// </summary>
    protected override void OnInitialized()
    {
        currentUrl = NavigationManager.Uri;
    }
}

@functions
{
    /// <summary>
    /// Create and download the PDF document
    /// </summary>
    protected async Task ExportToPdf()
    {
        ExportService exportService = new ExportService();
        using (MemoryStream excelStream = exportService.CreatePdf(currentUrl))
        {
            await JS.SaveAs("HTMLToPDF.pdf", excelStream.ToArray());
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 11: Create a class file named **FileUtil** and add the following code to invoke the JavaScript action to download the file in the browser:

{% tabs %}
{% highlight c# tabtitle="C#" %}

public static class FileUtil
{
    // Extension method for JavaScript interop to save files
    public static ValueTask<object> SaveAs(this IJSRuntime js, string filename, byte[] data)
     => js.InvokeAsync<object>(
         "saveAsFile",
         filename,
         Convert.ToBase64String(data));
}

{% endhighlight %}
{% endtabs %}

Step 12: Add the following JavaScript function in the **_Host.cshtml** available under the **Pages** folder:

{% tabs %}
{% highlight CSHTML %}

<script type="text/javascript">
    // Function to save file in browser with cross-browser compatibility
    function saveAsFile(filename, bytesBase64)
    {
        if (navigator.msSaveBlob)
        {
            // Download document in Edge browser using msSaveBlob API
            var data = window.atob(bytesBase64);
            var bytes = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++)
            {
                bytes[i] = data.charCodeAt(i);
            }
            var blob = new Blob([bytes.buffer], { type: "application/octet-stream" });
            navigator.msSaveBlob(blob, filename);
        }
        else
        {
            // Download document in standard browsers using anchor element
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

Step 13: Build the project.

Run the following command in the terminal to build the project:

```
dotnet build
```

Step 14: Run the project.

Run the following command in the terminal to run the application:

```
dotnet run
```

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

Step 1: Open JetBrains Rider and create a new Blazor server-side app project:

* Launch **JetBrains Rider**.
* Click **New Solution** on the welcome screen:

![Launch JetBrains Rider](htmlconversion_images/Launch-JetBrains-Rider.png)

* In the **New Solution** dialog, select **Project Type** as **Web**.
* Enter a project name and specify the location.
* Choose template as **Blazor Server App**.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Click **Create**:

![create a new Blazor server-side app project](htmlconversion_images/Blazor-Server-App-JetBrains.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/):

* Click the **NuGet** icon in the Rider toolbar and type [Syncfusion.HtmlToPdfConverter.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows/) in the search bar.
* Ensure that **nuget.org** is selected as the package source.
* Select the latest **Syncfusion.HtmlToPdfConverter.Net.Windows** NuGet package from the list.
* Click the **+** (Add) button to add the package:

![Select the Syncfusion.HtmlToPdfConverter.Net.Windows package](htmlconversion_images/HTML-to-PDF-Package-JetBrains.png)

* Click the **Install** button to complete the installation:

![Install the package](htmlconversion_images/Install-Package-Blazor-JetBrains.png)

Step 3: Create a new class file named **ExportService** under the **Data** folder and include the following namespaces in the file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code to the **ExportService** class to convert HTML to PDF document using the [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method of the [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

public MemoryStream CreatePdf(string url)
{
    // Initialize the HTML to PDF converter
    HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();    
    // Convert URL to PDF document
    PdfDocument document = htmlConverter.Convert(url);
    // Create memory stream for output
    MemoryStream stream = new MemoryStream();
    // Save the document to memory stream
    document.Save(stream);
    return stream;
}

{% endhighlight %}
{% endtabs %}

Step 5: Register your service in the **ConfigureServices** method available in the **Startup.cs** class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

/// <summary>
/// Register your ExportService 
/// </summary>
public void ConfigureServices(IServiceCollection services)
{
    services.AddRazorPages();
    services.AddServerSideBlazor();
    services.AddSingleton<WeatherForecastService>();
    services.AddSingleton<ExportService>();
}

{% endhighlight %}
{% endtabs %}

Step 6: Inject **ExportService** into **FetchData.razor** using the following code:

{% tabs %}
{% highlight CSHTML %}

@inject ExportService exportService
@inject Microsoft.JSInterop.IJSRuntime JS
@inject NavigationManager NavigationManager

{% endhighlight %}
{% endtabs %}

Step 7: Create a button in the **FetchData.razor** using the following code:

{% tabs %}
{% highlight CSHTML %}

<button class="btn btn-primary" @onclick="@ExportToPdf">Export to PDF</button>

{% endhighlight %}
{% endtabs %}

Step 8: Add the **ExportToPdf** method in the **FetchData.razor** page to call the export service:

{% tabs %}
{% highlight c# tabtitle="C#" %}

@code {
    private string currentUrl;
    /// <summary>
    /// Get the current URL
    /// </summary>
    protected override void OnInitialized()
    {
        currentUrl = NavigationManager.Uri;
    }
}

@functions
{
    /// <summary>
    /// Create and download the PDF document
    /// </summary>
    protected async Task ExportToPdf()
    {
        // Create an instance of the ExportService
        ExportService exportService = new ExportService();
        // Call CreatePdf method and convert URL to PDF
        using (MemoryStream pdfStream = exportService.CreatePdf(currentUrl))
        {
            // Save PDF file to browser
            await JS.SaveAs("HTMLToPDF.pdf", pdfStream.ToArray());
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 9: Create a class file named **FileUtil** and add the following code to invoke the JavaScript action to download the file in the browser:

{% tabs %}
{% highlight c# tabtitle="C#" %}

public static class FileUtil
{
    // Extension method for JavaScript interop to save files
    public static ValueTask<object> SaveAs(this IJSRuntime js, string filename, byte[] data)
     => js.InvokeAsync<object>(
         "saveAsFile",
         filename,
         Convert.ToBase64String(data));
}

{% endhighlight %}
{% endtabs %}

Step 10: Add the following JavaScript function in the **_Host.cshtml** available under the **Pages** folder:

{% tabs %}
{% highlight CSHTML %}

<script type="text/javascript">
    // Function to save file in browser with cross-browser compatibility
    function saveAsFile(filename, bytesBase64)
    {
        if (navigator.msSaveBlob)
        {
            // Download document in Edge browser using msSaveBlob API
            var data = window.atob(bytesBase64);
            var bytes = new Uint8Array(data.length);
            for (var i = 0; i < data.length; i++)
            {
                bytes[i] = data.charCodeAt(i);
            }
            var blob = new Blob([bytes.buffer], { type: "application/octet-stream" });
            navigator.msSaveBlob(blob, filename);
        }
        else
        {
            // Download document in standard browsers using anchor element
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

Step 11: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 12: Run the project.

Click the **Run** button in the toolbar or press <kbd>F5</kbd> to run the application.

{% endtabcontent %}
 
{% endtabcontents %}

By executing the program, you will obtain the following output in the browser:

![Browser window](htmlconversion_images/blazor_step4.png)   

Click the **Export to PDF** button, and you will obtain the PDF document with the following output:

![HTML to PDF Blazor output](htmlconversion_images/HtmlBlazorOutput.png)   

A complete working sample for converting HTML to PDF in the Blazor framework can be downloaded from [GitHub](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Blazor).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) to explore the rich set of Syncfusion<sup>&reg;</sup> HTML to PDF converter library features. 

You can also view the online sample to [convert HTML to PDF documents](https://document.syncfusion.com/demos/pdf/htmltopdf#/tailwind3) in ASP.NET Core.