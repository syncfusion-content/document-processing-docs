---
layout: post
title: Getting Started with Blazor PDF Viewer Component in WASM | Syncfusion
description: Learn how to get started with the Syncfusion Blazor SfPdfViewer component in a Blazor WebAssembly (WASM) app.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Getting Started with the PDF Viewer in Blazor WebAssembly (WASM) app

This section briefly explains how to include the [Blazor PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) component in a Blazor WebAssembly App using [Visual Studio](https://visualstudio.microsoft.com/vs/) and [Visual Studio Code](https://code.visualstudio.com/).

{% tabcontents %}

{% tabcontent Visual Studio %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

N> For **WebAssembly** Application, install the required workload for SkiaSharp: 
N> ```bash
N> dotnet workload install wasm-tools
N> ```
N> For specific .NET versions, use:
N> * `wasm-tools-net8` for .NET 8
N> * `wasm-tools-net9` for .NET 9

## Create a new Blazor App in Visual Studio    

You can create a **Blazor WebAssembly App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor SfPdfViewer and Themes NuGet Packages

To add **Syncfusion Blazor SfPdfViewer** component in the app, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/).

Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.SfPdfViewer -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}
Install-Package SkiaSharp.Views.Blazor -Version 3.119.1

{% endhighlight %}
{% endtabs %}

N> Syncfusion&reg; Blazor components are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for available NuGet packages list with component details.
N> Syncfusion&reg; uses [SkiaSharp.Views.Blazor version 3.119](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1), so ensure this version is referenced.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

N> For **WebAssembly** Application, install the required workload for SkiaSharp: 
N> ```bash
N> dotnet workload install wasm-tools
N> ```
N> For specific .NET versions, use:
N> * `wasm-tools-net8` for .NET 8
N> * `wasm-tools-net9` for .NET 9

## Create a new Blazor App in Visual Studio Code

Create a **Blazor WebAssembly App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vsc) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project).

Alternatively, create a WebAssembly application using the following command in the terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>).

{% tabs %}

{% highlight c# tabtitle="Blazor WASM App" %}

dotnet new blazorwasm -o BlazorApp
cd BlazorApp

{% endhighlight %}

{% endtabs %}


## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor SfPdfViewer and Themes NuGet Packages

Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Ensure you're in the project root directory where your `.csproj` file is located.
* Run the following command to install [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet packages and ensure all dependencies are installed.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet add package SkiaSharp.Views.Blazor -v 3.119.1
dotnet restore

{% endhighlight %}

{% endtabs %}

N> Syncfusion&reg; Blazor components are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for available NuGet packages list with component details.
N> Syncfusion&reg; uses [SkiaSharp.Views.Blazor version 3.119](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1), so ensure this version is referenced.

{% endtabcontent %}

{% tabcontent .NET CLI %}

## Prerequisites

Install the latest version of [.NET SDK](https://dotnet.microsoft.com/en-us/download). If the .NET SDK is already installed, determine the installed version by running the following command in a command prompt (Windows), terminal (macOS), or command shell (Linux).

{% tabs %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet --version

{% endhighlight %}
{% endtabs %}

N> For **WebAssembly** Application, install the required workload for SkiaSharp: 
N> ```bash
N> dotnet workload install wasm-tools
N> ```
N> For specific .NET versions, use:
N> * `wasm-tools-net8` for .NET 8
N> * `wasm-tools-net9` for .NET 9

## Create a Blazor WebAssembly App using .NET CLI

Run the following command to create a new Blazor WebAssembly App in a command prompt (Windows) or terminal (macOS) or command shell (Linux). For detailed instructions, refer to the [Blazor WASM App Getting Started](https://blazor.syncfusion.com/documentation/getting-started/blazor-webassembly-app?tabcontent=.net-cli) documentation.

{% tabs %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet new blazorwasm -o BlazorApp
cd BlazorApp

{% endhighlight %}
{% endtabs %}

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet and Themes NuGet in the App

After creating the Blazor WebAssembly App, install the required Syncfusion NuGet packages using the .NET CLI.

* Open a command prompt, terminal, or shell.
* Ensure you’re in the project root directory where your `.csproj` file is located.
* Run the following command to install a [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet package and ensure all dependencies are installed.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet add package SkiaSharp.Views.Blazor -v 3.119.1
dotnet restore

{% endhighlight %}

{% endtabs %}

N> Syncfusion&reg; uses [SkiaSharp.Views.Blazor version 3.119](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1), so ensure this version is referenced.

{% endtabcontent %}

{% endtabcontents %}

## Add import namespaces

After the package is installed, open the `~/_Imports.razor` file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.SfPdfViewer` namespaces.

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

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in the `~/Program.cs` file after the **builder** is created in your Blazor WebAssembly App.

{% tabs %}
{% highlight C# tabtitle="(~/Program.cs)" %}

// Register Syncfusion Blazor service
builder.Services.AddMemoryCache();
builder.Services.AddSyncfusionBlazor();

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets).

### Add stylesheet resource

Add the stylesheet at the end of the `<head>` section in the `wwwroot/index.html` file to apply proper layout and theme styling.

{% tabs %}
{% highlight razor tabtitle="index.html" %}

<!-- Syncfusion Blazor PDF Viewer control's theme style sheet -->
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />

{% endhighlight %}
{% endtabs %}

### Add script resource

Add the required script at the end of the `<body>` section in the `wwwroot/index.html` file to enable component functionality.

{% tabs %}
{% highlight razor tabtitle="index.html" %}

<!-- Syncfusion Blazor PDF Viewer control's scripts -->
<script src="_content/Syncfusion.Blazor.SfPdfViewer/scripts/syncfusion-blazor-sfpdfviewer.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor PDF Viewer Component

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer (Next-Gen) component in `~/Pages/Home.razor`.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

N> If the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) property is not set, the PDF Viewer renders without loading a PDF. Use the **Open** toolbar option to browse and open a PDF.

* Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. This will render the Syncfusion Blazor PDF Viewer in your default web browser.

![Blazor Web App SfPdfViewer rendering in browser](gettingstarted-images/blazor-pdfviewer.png)

You can also experiment directly using the interactive playground below for a quick demo:

{% playground "https://blazorplayground.syncfusion.com/embed/hXhHtILIfHjHlTTE?appbar=true&editor=true&result=true&errorlist=true&theme=fluent2" %}

N> To learn how to open, view, or interact with PDF files in the PDF Viewer component, see [Open and Save](.././opening-pdf-file). For a hands-on reference with working code examples, explore the sample projects available on [GitHub](https://github.com/SyncfusionExamples/Blazor-Getting-Started-Examples/tree/main/PDFViewer2/NET10/PDFViewer2_WasmStandalone).

## See also

* [Getting started with the Blazor PDF Viewer in a Blazor Web app Server app](./web-app)

* [Getting started with the Blazor PDF Viewer in WSL mode](../deployment/wsl-application)

* [.NET 9 Native Linking Issues with SkiaSharp and Emscripten 3.1.56](https://help.syncfusion.com/document-processing/faq/how-to-fix-skiasharp-native-reference-issue-in-blazor-net90-app)