---
layout: post
title: Getting Started with Blazor PDF Viewer Component | Syncfusion
description: Learn how to get started with the SfPdfViewer control in a Blazor Web App to view, comment on, and fill PDF forms.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Getting Started with the Blazor PDF Viewer in Web App

This section briefly explains how to include the [Blazor PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) component in a Blazor Web App using [Visual Studio](https://visualstudio.microsoft.com/vs/) and [Visual Studio Code](https://code.visualstudio.com/).

{% tabcontents %}

{% tabcontent Visual Studio %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

N> If using **WebAssembly** or **Auto** interactive render modes, install the required workload for SkiaSharp: 
N> ```bash
N> dotnet workload install wasm-tools
N> ```
N> For specific .NET versions, use:
N> * `wasm-tools-net8` for .NET 8
N> * `wasm-tools-net9` for .NET 9

## Create a new Blazor Web App in Visual Studio

Create a Blazor Web App using Visual Studio 2022 via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio), ensuring the appropriate [interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-10.0#render-modes) and [interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) are configured during creation.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor SfPdfViewer and Themes NuGet Packages in the App

To add **Syncfusion Blazor SfPdfViewer** component in the app, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/).

If you utilize `WebAssembly` or `Auto` render modes in the Blazor Web App, you need to install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components NuGet packages within the client project.

Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.SfPdfViewer -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

N> For **WebAssembly** or **Auto** render modes, install packages in the **client project**.
N> Syncfusion&reg; uses [SkiaSharp.Views.Blazor version 3.119](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1), so ensure this version is referenced.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

N> If using **WebAssembly** or **Auto** interactive render modes, install the required workload for SkiaSharp: 
N> ```bash
N> dotnet workload install wasm-tools
N> ```
N> For specific .NET versions, use:
N> * `wasm-tools-net8` for .NET 8
N> * `wasm-tools-net9` for .NET 9

## Create a new Blazor Web App in Visual Studio Code

Create a **Blazor Web App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vsc) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project), ensuring the appropriate [interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-10.0#render-modes) and [interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vsc) are configured during creation.

For example, in a Blazor Web App with the `Auto` interactive render mode, use the following commands in the integrated terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>).

{% tabs %}
{% highlight c# tabtitle="Blazor Web App" %}

dotnet new blazor -o BlazorWebApp -int Auto
cd BlazorWebApp
cd BlazorWebApp.Client

{% endhighlight %}
{% endtabs %}

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor SfPdfViewer and Themes NuGet Packages in the App

If you utilize `WebAssembly` or `Auto` render modes in the Blazor Web App, you need to install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components NuGet packages within the client project.

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Ensure you're in the project root directory where your `.csproj` file is located.
* Run the following command to install [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet packages and ensure all dependencies are installed.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}

{% endtabs %}

N> Syncfusion&reg; Blazor components are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for available NuGet packages list with component details.
N> For **WebAssembly** or **Auto** render modes, install packages in the **client project**.
N> Syncfusion&reg; uses [SkiaSharp.Views.Blazor version 3.119](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1), so ensure this version is referenced.

{% endtabcontent %}

{% tabcontent .NET CLI %}

## Prerequisites

Install the latest version of [.NET SDK](https://dotnet.microsoft.com/en-us/download). If you previously installed the SDK, you can determine the installed version by executing the following command in a command prompt (Windows) or terminal (macOS) or command shell (Linux).

{% tabs %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet --version

{% endhighlight %}
{% endtabs %}

N> If using **WebAssembly** or **Auto** interactive render modes, install the required workload for SkiaSharp: 
N> ```bash
N> dotnet workload install wasm-tools
N> ```
N> For specific .NET versions, use:
N> * `wasm-tools-net8` for .NET 8
N> * `wasm-tools-net9` for .NET 9

## Create a Blazor Web App using .NET CLI

Run the following command to create a new Blazor Web App in a command prompt (Windows) or terminal (macOS) or command shell (Linux). For detailed instructions, refer to the [Blazor Web App Getting Started](https://blazor.syncfusion.com/documentation/getting-started/blazor-web-app?tabcontent=.net-cli) documentation.

For example, in a Blazor Web App with the `Auto` interactive render mode, use the following commands:

{% tabs %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet new blazor -o BlazorWebApp -int Auto
cd BlazorWebApp
cd BlazorWebApp.Client

{% endhighlight %}
{% endtabs %}

## Install Syncfusion® Blazor SfPdfViewer and Themes NuGet in the App

* Open a command prompt, terminal, or shell.
* Ensure you’re in the project root directory where your `.csproj` file is located (or the Client project if applicable).
* Run the following command to install a [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet package and ensure all dependencies are installed.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}

{% endtabs %}

N> For **WebAssembly** or **Auto** render modes, install packages in the **client project**.
N> Syncfusion&reg; uses [SkiaSharp.Views.Blazor version 3.119](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1), so ensure this version is referenced.

{% endtabcontent %}

{% endtabcontents %}

## Add import namespaces 

After the package is installed, open the `~/_Imports.razor` file from the client project and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.SfPdfViewer` namespaces.

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.SfPdfViewer

{% endhighlight %}
{% endtabs %}

Add the `Syncfusion.Blazor` namespace to the `Program.cs` file.

{% tabs %}
{% highlight razor tabtitle="~/Program.cs" %}

@using Syncfusion.Blazor

{% endhighlight %}
{% endtabs %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service

Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in the `~/Program.cs` file after the **builder** is created in the Blazor Web App.

{% tabs %}
{% highlight c# tabtitle="(~/Program.cs) Server" %}

// Register Syncfusion Blazor service
builder.Services.AddSignalR(o => { o.MaximumReceiveMessageSize = 102400000; });
builder.Services.AddMemoryCache();
builder.Services.AddSyncfusionBlazor();

{% endhighlight %}

{% highlight c# tabtitle="(~/Program.cs) WebAssembly" %}

// Register Syncfusion Blazor service
builder.Services.AddMemoryCache();
builder.Services.AddSyncfusionBlazor();

{% endhighlight %}

{% highlight c# tabtitle="(~/Program.cs) Auto" %}

// Register Syncfusion Blazor service
builder.Services.AddSignalR(o => { o.MaximumReceiveMessageSize = 102400000; });
builder.Services.AddMemoryCache();
builder.Services.AddSyncfusionBlazor();

{% endhighlight %}
{% endtabs %}

N> If the interactive render mode is set to WebAssembly or Auto, register the Syncfusion&reg; Blazor service in both `~/Program.cs` files of the Blazor Web App. [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets).

### Add stylesheet resource

Add the stylesheet at the end of the `<head>` section in the `Components/App.razor` file to apply proper layout and theme styling.

{% tabs %}
{% highlight razor tabtitle="App.razor" %}

<!-- Syncfusion Blazor PDF Viewer control's theme style sheet -->
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight razor tabtitle="App.razor" %}

### Add script resource

Add the required script at the end of the `<body>` section in the `Components/App.razor` file to enable component functionality.

{% tabs %}
{% highlight razor tabtitle="App.razor" %}

<!-- Syncfusion Blazor PDF Viewer control's scripts -->
<script src="_content/Syncfusion.Blazor.SfPdfViewer/scripts/syncfusion-blazor-sfpdfviewer.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to explore supported ways (such as static assets, CDN, and CRG) to apply themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor PDF Viewer component

Add the Syncfusion Blazor PDF Viewer (Next-Gen) component in the `~/Components/Pages/*.razor` file. If the interactivity location is set to `Per page/component` in the Web App, define a render mode at the top of the `~/Pages/*.razor` file. (For example, `InteractiveServer`, `InteractiveWebAssembly` or `InteractiveAuto`). 

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer component in `~/Pages/Home.razor`.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}
@* desired render mode define here *@
@rendermode InteractiveAuto

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

N> If the **Interactivity Location** is set to `Global` with `Auto` or `WebAssembly`, the render mode is automatically configured in the `App.razor` file by default.
N> If the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) property is not set, the PDF Viewer renders without loading a PDF. Use the **Open** toolbar option to browse and open a PDF.

* Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. This will render the Syncfusion Blazor PDF Viewer in your default web browser.

![Blazor Web App SfPdfViewer rendering in browser](gettingstarted-images/blazor-pdfviewer.png)

You can also experiment directly using the interactive playground below for a quick demo:

{% playground "https://blazorplayground.syncfusion.com/embed/hXhHtILIfHjHlTTE?appbar=true&editor=true&result=true&errorlist=true&theme=fluent2" %}

N> To learn how to open, view, or interact with PDF files in the PDF Viewer component, see [Open and Save](.././opening-pdf-file). For a hands-on reference with working code examples, explore the sample projects available on [GitHub](https://github.com/SyncfusionExamples/Blazor-Getting-Started-Examples/tree/main/PDFViewer2/NET10/PDFViewer2_WebAppServerMode).

## See also

* [Getting Started with Blazor PDF Viewer Component in Blazor WASM App](./web-assembly-application)

* [Getting Started with Blazor PDF Viewer Component in WSL mode](../deployment/wsl-application)

* [Learn different ways to add script reference in Blazor Application](https://blazor.syncfusion.com/documentation/common/adding-script-references)

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)

* [.NET 9 Native Linking Issues with SkiaSharp and Emscripten 3.1.56](https://help.syncfusion.com/document-processing/faq/how-to-fix-skiasharp-native-reference-issue-in-blazor-net90-app)
