---			
title: Convert Word to PDF in Blazor | DocIO | Syncfusion 
description: Convert Word to PDF in Blazor using Blazor Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word Document to PDF in Blazor

Syncfusion<sup>&reg;</sup> DocIO is a [Blazor Word library](https://www.syncfusion.com/document-processing/word-framework/blazor/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, a **convert a Word document to PDF in Blazor**.

## Word to PDF in Blazor Web App Server Application

**Prerequisites:**

*   Visual Studio 2022.
*   Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new C# Blazor Web app project.
*   Select "Blazor Web App" from the template and click **Next**.

![Create Blazor Web App application in Visual Studio](Blazor_Images/Blazor_image_Web_App.png)

*   Name the project and click **Next**.

![Name the Blazor Web App in Visual Studio](Blazor_Images/Blazor_image_Web_ProjectName.png)

*   Select the framework and click **Create** button.

![Select the framework in Blazor Web App Server in Visual Studio](Blazor_Images/Blazor_image_Server_Web_Additional_Information.png)

Step 2: Install the `Syncfusion.DocIORenderer.Net.Core` NuGet package.
To **convert a Word document to PDF in a Blazor Web App Server**, install [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) into the Blazor project.

![Install Syncfusion.DocIORenderer.Net.Core NuGet Package](Blazor_Images/NugetPackage.png)

N> 1. If deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/nuget-packages-required-word-to-pdf#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder, which is located inside the `Components` folder.
Include the following namespaces in the file:


{% tabs %}
{% highlight c# tabtitle="C#" %}

@rendermode InteractiveServer
@page "/DocIO"
@using System.IO;
@using Convert_Word_Document_to_PDF;
@inject Convert_Word_Document_to_PDF.Data.WordService service
@inject Microsoft.JSInterop.IJSRuntime JS
{% endhighlight %}
{% endtabs %}

Step 4: Add a button to `DocIO.razor`.
Include the following code to create a new button that triggers the Word to PDF conversion:
{% tabs %}
{% highlight CSHTML %}
<h2>Syncfusion DocIO Library </h2>
<p>The Syncfusion DocIO library is a Blazor DocIO library used to create, read, edit, and convert Word files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@ConvertWordtoPDF">Convert Word to PDF</button>
{% endhighlight %}
{% endtabs %}

Step 5: Implement the method in `DocIO.razor`.
Add the following code to convert the Word document to PDF and download it:

{% tabs %}
{% highlight c# tabtitle="C#" %}
@code {
    MemoryStream documentStream;
    /// <summary>
    /// Converts Word to PDF and downloads the PDF document.
    /// </summary>
    protected async void ConvertWordtoPDF()
    {
        documentStream = service.ConvertWordtoPDF();
        await JS.SaveAs("Sample.pdf", documentStream.ToArray());
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
using Syncfusion.Pdf;
{% endhighlight %}

{% endtabs %}

Step 7: Implement the method in `WordService.cs`.
Create a new `MemoryStream` method in the `WordService` class, and include the following code snippet to **convert the Word document to PDF in Blazor** Web App Server:

{% tabs %}

{% highlight c# tabtitle="C#" %}

using (FileStream sourceStreamPath = new FileStream(@"wwwroot/Input.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
{
    // Open an existing Word document.
    using (WordDocument document = new WordDocument(sourceStreamPath, FormatType.Docx))
    {
        // Instantiation of DocIORenderer for Word to PDF conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            // Converts Word document into PDF document
            using (PdfDocument pdfDocument = render.ConvertToPDF(document))
            {
                // Saves the PDF document to MemoryStream.
                MemoryStream stream = new MemoryStream();
                pdfDocument.Save(stream);
                stream.Position = 0;
                return stream;
            }
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 8: Add the service in `Program.cs`. 
Add the following line to the `Program.cs` file to register `WordService` as a scoped service in the Blazor application. 

{% tabs %}
{% highlight c# tabtitle="C#" %}

builder.Services.AddScoped<Convert_Word_Document_to_PDF.Data.WordService>();

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
        <span class="oi oi-list-rich" aria-hidden="true"></span> Convert Word to PDF
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 12: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 13: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the application.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/Blazor/Blazor-Web-Server-app).

Upon executing the program, the **PDF document** will be generated as follows.

![Word to PDF in Blazor Web App Server](WordToPDF_images/OutputImage.png)

Click [here](https://www.syncfusion.com/document-processing/word-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features.

## Word to PDF in Blazor WASM Standalone Application

**Prerequisites:**

*   Visual Studio 2022.
*   Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new C# Blazor WASM app project. 
Select "Blazor WebAssembly Standalone App" from the template and click **Next**.

![Create Blazor WebAssembly Standalone application in  Visual Studio](Blazor_Images/Blazor_WASM_Standalone.png)

Step 2: Install the following **Nuget packages** in the application from [Nuget.org](https://www.nuget.org/).
*   [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)
*   [SkiaSharp.Views.Blazor v3.116.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.116.1)

![Install Syncfusion.DocIORenderer.Net.Core NuGet Package](Blazor_Images/NugetPackage.png)
![Install SkiaSharp.Views.Blazor v3.116.1 NuGet Package](Blazor_Images/NuGet-Package-WordtoPDF.png)

N> 1. If deploying the application in a Linux environment, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/nuget-packages-required-word-to-pdf#additional-nuget-packages-required-for-linux) for the required additional NuGet packages.
N> 2. Starting with v16.2.0.x, if Syncfusion<sup>&reg;</sup> assemblies are referenced from trial setup or from the NuGet feed, the "Syncfusion.Licensing" assembly reference must also be added and a license key included in projects. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in an application to use Syncfusion components.
N> 3. Install this wasm-tools and wasm-tools-net6 by using the "dotnet workload install wasm-tools" and "dotnet workload install wasm-tools-net6" commands in the command prompt respectively if facing issues related to Skiasharp during runtime. After installing wasm tools using the above commands, please restart the machine.

Step 3: Create a Razor file named `DocIO.razor` in the `Pages` folder.
Add the following namespaces in the file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
@page "/docio"
@using Syncfusion.DocIO
@using Syncfusion.Pdf
@using Syncfusion.DocIORenderer
@using Syncfusion.DocIO.DLS
@inject Microsoft.JSInterop.IJSRuntime JS
@inject HttpClient client
{% endhighlight %}

{% endtabs %}

Step 4: Add a button to `DocIO.razor`.
Include the following code to create a new button that triggers the Word to PDF conversion:

{% tabs %}

{% highlight CSHTML %}

<h2>Syncfusion DocIO Library</h2>
<p>The Syncfusion Blazor DocIO library used to create, read, edit, and convert DocIO files in applications without Microsoft Office dependencies.</p>
<button class="btn btn-primary" @onclick="@WordToPDF">Convert Word to PDF</button>

{% endhighlight %}

{% endtabs %}

Step 5: Implement `WordToPDF` method in `DocIO.razor`.
Create a new `async` method named `WordToPDF` and include the following code snippet to **create a Word document in Blazor** WASM Standalone app.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using (Stream inputStream = await client.GetStreamAsync("sample-data/Input.docx"))
{
    // Open an existing Word document.
    using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
    {
        // Initialize the DocIORenderer for Word to PDF conversion.
        using (DocIORenderer render = new DocIORenderer())
        {
            // Convert Word document into PDF document.
            using (PdfDocument pdfDocument = render.ConvertToPDF(document))
            {
                // Save the PDF document to MemoryStream.
                using (MemoryStream outputStream = new MemoryStream())
                {
                    pdfDocument.Save(outputStream);
                    outputStream.Position = 0;
                    // Download PDF file in the browser.
                    await JS.SaveAs("Output.pdf", outputStream.ToArray());
                }
            }
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

{% highlight CSHTML %}

<div class="nav-item px-3">
    <NavLink class="nav-link" href="docio">
        <span class="oi oi-list-rich" aria-hidden="true"></span> Convert Word to PDF
    </NavLink>
</div>

{% endhighlight %}

{% endtabs %}

Step 9: Build the project.

Click on **Build** → **Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 10: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the application.

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/Blazor/Blazor-WASM-Standalone-app).

Upon executing the program, the **PDF document** will be generated as follows.

![Word to PDF in Blazor WASM app](WordToPDF_images/OutputImage.png)

N> To convert Word to PDF, it is necessary to access the font stream internally. However, this cannot be done automatically in a Blazor WASM Standalone application. Therefore, it is recommended to use a Server app, even though Word to PDF conversion works in a WASM Standalone app.

Click [here](https://www.syncfusion.com/document-processing/word-framework/blazor) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features. 

