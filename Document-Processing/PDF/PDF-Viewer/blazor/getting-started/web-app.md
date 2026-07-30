---
layout: post
title: Getting Started with Blazor PDF Viewer Component | Syncfusion
description: Learn how to get started with the SfPdfViewer control in a Blazor Web App to view, comment on, and fill PDF forms.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Getting Started with the Blazor PDF Viewer in Web App

This section explains how to include the [Blazor PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) component in a Blazor Web App using [Visual Studio](https://visualstudio.microsoft.com/vs/) and [Visual Studio Code](https://code.visualstudio.com/).

{% tabcontents %}

{% tabcontent Visual Studio %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

### Install the required .NET workloads (Blazor WebAssembly / Auto render modes)

If using **WebAssembly** or **Auto** interactive render modes, install the required workload for SkiaSharp. Run the following command in a command prompt (Windows), terminal (macOS), or shell (Linux):

{% tabs %}
{% highlight bash tabtitle="bash" %}

dotnet workload install wasm-tools

{% endhighlight %}
{% endtabs %}

The `wasm-tools` workload is installed for the active .NET SDK. When targeting a different .NET SDK version, ensure that the corresponding version-specific workload is installed.

## Create a new Blazor Web App in Visual Studio

Use Visual Studio 2022 to create a Blazor Web App via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio). During creation, ensure the appropriate [interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-10.0#render-modes) and [interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) are configured.

## Install Blazor SfPdfViewer and Themes NuGet Packages in the App

To add Blazor **SfPdfViewer** component in the app, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/).

If you utilize `WebAssembly` or `Auto` render modes in the Blazor Web App, you need to install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components NuGet packages within the client project.

Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.SfPdfViewer -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

N>
* For **WebAssembly** or **Auto** render modes, install packages in the **client project**.
* Syncfusion<sup style="font-size:70%">&reg;</sup> uses [SkiaSharp.Views.Blazor version 3.119.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1). Ensure your project references this version.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

### Install the required .NET workloads (Blazor WebAssembly / Auto render modes)

If using **WebAssembly** or **Auto** interactive render modes, install the required workload for SkiaSharp. Run the following command in the integrated terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>):

{% tabs %}
{% highlight bash tabtitle="bash" %}

dotnet workload install wasm-tools

{% endhighlight %}
{% endtabs %}

The `wasm-tools` workload is installed for the active .NET SDK. When targeting a different .NET SDK version, ensure that the corresponding version-specific workload is installed.

## Create a new Blazor Web App in Visual Studio Code

Create a **Blazor Web App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vsc) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project). During creation, ensure the appropriate [interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-10.0#render-modes) and [interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vsc) are configured.

For example, to create a Blazor Web App with the `Auto` interactive render mode using the Syncfusion Blazor template, use the following commands in the integrated terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>):

{% tabs %}
{% highlight C# tabtitle="Blazor Web App" %}

dotnet new blazor -o BlazorWebApp -int Auto
cd BlazorWebApp
cd BlazorWebApp.Client

{% endhighlight %}
{% endtabs %}

N> When using the default Microsoft `dotnet new blazor` template, the `-int Auto` flag is not supported and a `.Client` project is not created. In that case, use `dotnet new blazor --interactivity Auto -o BlazorWebApp` and run all subsequent commands in the project root.

## Install Blazor SfPdfViewer and Themes NuGet Packages in the App

If you utilize `WebAssembly` or `Auto` render modes in the Blazor Web App, you need to install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components NuGet packages within the client project.

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* For **WebAssembly** or **Auto** render modes, navigate to the client project directory.
* For the **Server** render mode, ensure you are in the project root directory where your `.csproj` file is located.
* Run the following commands to install the [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet packages and ensure all dependencies are installed.

{% tabs %}

{% highlight C# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}

{% endtabs %}

N>
* Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for the available NuGet packages list with component details.
* For **WebAssembly** or **Auto** render modes, install packages in the **client project**.
* Syncfusion<sup style="font-size:70%">&reg;</sup> uses [SkiaSharp.Views.Blazor version 3.119.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1). Ensure your project references this version.

{% endtabcontent %}

{% tabcontent .NET CLI %}

## Prerequisites

Install the latest version of the [.NET SDK](https://dotnet.microsoft.com/en-us/download). If you previously installed the SDK, you can determine the installed version by executing the following command in a command prompt (Windows), terminal (macOS), or shell (Linux):

{% tabs %}
{% highlight C# tabtitle=".NET CLI" %}

dotnet --version

{% endhighlight %}
{% endtabs %}

### Install the required .NET workloads (Blazor WebAssembly / Auto render modes)

If using **WebAssembly** or **Auto** interactive render modes, install the required workload for SkiaSharp. Run the following command in a command prompt (Windows), terminal (macOS), or shell (Linux):

{% tabs %}
{% highlight bash tabtitle="bash" %}

dotnet workload install wasm-tools

{% endhighlight %} 
{% endtabs %}

The `wasm-tools` workload is installed for the active .NET SDK. When targeting a different .NET SDK version, ensure that the corresponding version-specific workload is installed.

## Create a Blazor Web App using .NET CLI

Run the following command to create a new Blazor Web App in a command prompt (Windows), terminal (macOS), or shell (Linux). For detailed instructions, refer to the [Blazor Web App Getting Started](https://blazor.syncfusion.com/documentation/getting-started/blazor-web-app?tabcontent=.net-cli) documentation.

For example, to create a Blazor Web App with the `Auto` interactive render mode using the Syncfusion Blazor template, use the following commands:

{% tabs %}
{% highlight C# tabtitle=".NET CLI" %}

dotnet new blazor -o BlazorWebApp -int Auto
cd BlazorWebApp
cd BlazorWebApp.Client

{% endhighlight %}
{% endtabs %}

N> When using the default Microsoft `dotnet new blazor` template, the `-int Auto` flag is not supported and a `.Client` project is not created. In that case, use `dotnet new blazor --interactivity Auto -o BlazorWebApp` and run all subsequent commands in the project root.

## Install Blazor SfPdfViewer and Themes NuGet Packages in the App

* Open a command prompt, terminal, or shell.
* For **WebAssembly** or **Auto** render modes, navigate to the client project directory.
* For the **Server** render mode, ensure you are in the project root directory where your `.csproj` file is located.
* Run the following commands to install the [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet packages and ensure all dependencies are installed.

{% tabs %}

{% highlight C# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}

{% endtabs %}

N>
* For **WebAssembly** or **Auto** render modes, install packages in the **client project**.
* Syncfusion<sup style="font-size:70%">&reg;</sup> uses [SkiaSharp.Views.Blazor version 3.119.1](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1). Ensure your project references this version.

{% endtabcontent %}

{% endtabcontents %}

## Add namespaces

After the package is installed, open the `~/_Imports.razor` file from the client project and add the `Syncfusion.Blazor` and `Syncfusion.Blazor.SfPdfViewer` namespaces:

{% tabs %}
{% highlight razor tabtitle="_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.SfPdfViewer

{% endhighlight %}
{% endtabs %}

Add the `Syncfusion.Blazor` namespace to the `~/Program.cs` file:

{% tabs %}
{% highlight C# tabtitle="Program.cs" %}

using Syncfusion.Blazor;

{% endhighlight %}
{% endtabs %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service

Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in the `~/Program.cs` file after the **builder** is created in the Blazor Web App. `AddMemoryCache()` is required by the SfPdfViewer to cache document and rendering data, and `AddSignalR` (Server/Auto modes) is required to allow large PDF payloads (size is in bytes; default is 32 KB).

{% tabs %}
{% highlight C# tabtitle="(Program.cs) Server" %}

// Configure SignalR (with increased message size) and enable memory caching
builder.Services.AddSignalR(o => { o.MaximumReceiveMessageSize = 102400000; });
builder.Services.AddMemoryCache();
// Register Syncfusion Blazor service
builder.Services.AddSyncfusionBlazor();

{% endhighlight %}

{% highlight C# tabtitle="(Program.cs) WebAssembly" %}

// Enable memory caching
builder.Services.AddMemoryCache();
// Register Syncfusion Blazor service
builder.Services.AddSyncfusionBlazor();

{% endhighlight %}

{% highlight C# tabtitle="(Program.cs) Auto" %}

// Configure SignalR (with increased message size) and enable memory caching
builder.Services.AddSignalR(o => { o.MaximumReceiveMessageSize = 102400000; });
builder.Services.AddMemoryCache();
// Register Syncfusion Blazor service
builder.Services.AddSyncfusionBlazor();

{% endhighlight %}
{% endtabs %}

N> If the interactive render mode is set to WebAssembly or Auto, register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in both `~/Program.cs` files of the Blazor Web App. See [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size).

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets).

Add the stylesheet at the end of the `<head>` section in the `~/Components/App.razor` file to apply proper layout and theme styling:

{% tabs %}
{% highlight razor tabtitle="App.razor (head)" %}

<!-- Blazor PDF Viewer control's theme style sheet -->
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />

{% endhighlight %}
{% endtabs %}

Add the required script at the end of the `<body>` section in the `~/Components/App.razor` file to enable component functionality:

{% tabs %}
{% highlight razor tabtitle="App.razor (body)" %}

<!-- Blazor PDF Viewer control's scripts -->
<script src="_content/Syncfusion.Blazor.SfPdfViewer/scripts/syncfusion-blazor-sfpdfviewer.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

N>
* For **WebAssembly** or **Auto** render modes, the `_content/` static assets are exposed by the client project. Add the `<link>` and `<script>` tags to the client project's `~/Components/App.razor` file, not the server project's.
* Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to explore supported ways (such as static assets, CDN, and CRG) to apply themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

## Add Blazor PDF Viewer component

The Blazor PDF Viewer (Next-Gen) component is added in the `~/Components/Pages/Home.razor` file. If the **Interactivity Location** is set to `Per page/component` in the Web App, define a render mode directive at the top of the razor file (for example, `InteractiveServer`, `InteractiveWebAssembly`, or `InteractiveAuto`).

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}
@* desired render mode defined here *@
@rendermode InteractiveServer

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

* Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The Blazor PDF Viewer will be displayed in your default web browser.

![Blazor Web App SfPdfViewer rendering in browser](gettingstarted-images/blazor-pdfviewer.png)

N>
* The `Height="100%"` and `Width="100%"` values are relative to the parent container. Ensure the parent element (or the page body) has an explicit height, for example `style="height:100vh"`, otherwise the PDF Viewer may not render.
* The [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) property accepts an absolute URL (HTTP/HTTPS), a path relative to the app's `wwwroot` folder (for example, `"pdf/sample.pdf"`), or a base64-encoded PDF string.
* If the **Interactivity Location** is set to `Global` with `Auto` or `WebAssembly`, the render mode is automatically configured in the `App.razor` file by default.
* If the `DocumentPath` property is not set, the PDF Viewer renders without loading a PDF. Use the **Open** toolbar option to browse and open a PDF.

## Next steps

* To learn how to open, save, or manage PDF documents in the PDF Viewer component, see [Open and Save PDF files](../opening-pdf-file).
* To learn how to add and manage highlights, strike-through, free text, and shape annotations in the PDF Viewer component, see [Annotations](../annotation/overview).
* To learn how to read, fill, and work with AcroForm fields in the PDF Viewer component, see [Form filling](../forms/form-filling).
* To learn how to add, remove, and rearrange toolbar items in the PDF Viewer component, see [Toolbar customization](../toolbar/overview).

You can also experiment directly using the interactive playground below for a quick demo:

{% playground "https://blazorplayground.syncfusion.com/embed/hXhHtILIfHjHlTTE?appbar=true&editor=true&result=true&errorlist=true&theme=fluent2" %}

N> For a hands-on reference with working code examples, explore the sample projects available on [GitHub](https://github.com/SyncfusionExamples/Blazor-Getting-Started-Examples/tree/main/PDFViewer2/NET10/PDFViewer2_WebAppServerMode). Looking for the full Blazor PDF Viewer component overview, features, pricing, and documentation? Visit the [Blazor PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) page.

## Video tutorial

To get started quickly with the Blazor PDF Viewer, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=RNzFAXlGEHA" %}

## See also

* [Getting Started with Blazor PDF Viewer Component in Blazor WASM App](./web-assembly-application)
* [Getting Started with Blazor PDF Viewer Component in WSL mode](../deployment/wsl-application)
* [Learn different ways to add script references in Blazor Application](https://blazor.syncfusion.com/documentation/common/adding-script-references)
* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)
* [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes)
* [.NET 9 Native Linking Issues with SkiaSharp and Emscripten 3.1.56](https://help.syncfusion.com/document-processing/faq/how-to-fix-skiasharp-native-reference-issue-in-blazor-net90-app)