---
layout: post
title: Getting Started with Blazor Spreadsheet Component in WASM | Syncfusion
description: Checkout and learn about getting started with Blazor Spreadsheet component in Blazor WebAssembly Application.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Getting Started with Blazor Spreadsheet Component

This section briefly explains how to include [Syncfusion® Blazor Spreadsheet](https://www.syncfusion.com/blazor-components/blazor-spreadsheet) component in your Blazor WebAssembly App using [Visual Studio](https://visualstudio.microsoft.com/vs/), [Visual Studio Code](https://code.visualstudio.com/) and the [.NET CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/).

{% tabcontents %}

{% tabcontent Visual Studio %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

N> For WebAssembly Application, to export as PDF, ensure the required .NET workloads are installed by running:
* dotnet workload install wasm-tools
* dotnet workload install wasm-tools-net8 (For .NET 8.0) or dotnet workload install wasm-tools-net9 (For .NET 9.0) or dotnet workload install wasm-tools (For .NET 10.0)

## Create a new Blazor App in Visual Studio

You can create a **Blazor WebAssembly App (Standalone)** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-7.0&pivots=vs) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet NuGet Packages

To add **Syncfusion Blazor Spreadsheet** component in the app, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install:

* [Syncfusion.Blazor.Spreadsheet](https://www.nuget.org/packages/Syncfusion.Blazor.Spreadsheet)
* [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/)

Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.Spreadsheet -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}
Install-Package SkiaSharp.Views.Blazor -Version 3.119.1

{% endhighlight %}
{% endtabs %}

N> Syncfusion&reg; uses SkiaSharp.Views.Blazor version 3.119.1. Ensure this version is referenced.
* [SkiaSharp.Views.Blazor](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1)

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

N> For WebAssembly Application, to export as PDF, ensure the required .NET workloads are installed by running:
* dotnet workload install wasm-tools
* dotnet workload install wasm-tools-net8 (For .NET 8.0) or dotnet workload install wasm-tools-net9 (For .NET 9.0) or dotnet workload install wasm-tools (For .NET 10.0)

## Create a new Blazor App in Visual Studio Code

You can create a **Blazor WebAssembly App (Standalone)** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-7.0&pivots=vsc) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project).

Alternatively, you can create a WebAssembly application using the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

{% tabs %}

{% highlight c# tabtitle="Blazor WASM App" %}

dotnet new blazorwasm -o BlazorApp
cd BlazorApp

{% endhighlight %}

{% endtabs %}

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet NuGet Packages

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Ensure you’re in the project root directory where your `.csproj` file is located.
* Run the following command to install a [Syncfusion.Blazor.Spreadsheet](https://www.nuget.org/packages/Syncfusion.Blazor.Spreadsheet) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet package and ensure all dependencies are installed.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.Spreadsheet -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet add package SkiaSharp.Views.Blazor -v 3.119.1
dotnet restore

{% endhighlight %}

{% endtabs %}

N> Syncfusion&reg; uses SkiaSharp.Views.Blazor version 3.119.1. Ensure this version is referenced.
* [SkiaSharp.Views.Blazor](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1)

{% endtabcontent %}

{% tabcontent .NET CLI %}

## Prerequisites

Install the latest version of [.NET SDK](https://dotnet.microsoft.com/en-us/download). If the .NET SDK is already installed, determine the installed version by running the following command in a command prompt (Windows), terminal (macOS), or command shell (Linux).

N> For WebAssembly Application, to export as PDF, ensure the required .NET workloads are installed by running:
* dotnet workload install wasm-tools
* dotnet workload install wasm-tools-net8 (For .NET 8.0) or dotnet workload install wasm-tools-net9 (For .NET 9.0) or dotnet workload install wasm-tools (For .NET 10.0)

{% tabs %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet --version

{% endhighlight %}
{% endtabs %}

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
* Run the following command to install a [Syncfusion.Blazor.Spreadsheet](https://www.nuget.org/packages/Syncfusion.Blazor.Spreadsheet) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet package and ensure all dependencies are installed.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.Spreadsheet -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet add package SkiaSharp.Views.Blazor -v 3.119.1
dotnet restore

{% endhighlight %}

{% endtabs %}

N> Syncfusion&reg; uses SkiaSharp.Views.Blazor version 3.119.1. Ensure this version is referenced.
* [SkiaSharp.Views.Blazor](https://www.nuget.org/packages/SkiaSharp.Views.Blazor/3.119.1)

{% endtabcontent %}

{% endtabcontents %}

## Add import namespaces

After the packages are installed, open the **~/_Imports.razor** file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.Spreadsheet` namespaces.

{% tabs %}
{% highlight razor tabtitle="_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Spreadsheet

{% endhighlight %}
{% endtabs %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

Register the Syncfusion Blazor service in the **~/Program.cs** file of your Blazor WebAssembly App.

{% tabs %}
{% highlight C# tabtitle="Program.cs" %}

....
using Syncfusion.Blazor;
....
// Register Syncfusion Blazor service
builder.Services.AddSyncfusionBlazor();

....

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the stylesheet reference in the <head> section and the script reference at the end of the <body> in the **~/index.html** file as shown below.

{% tabs %}
{% highlight razor tabtitle="index.html" %}

<head>
    ....
    <!-- Syncfusion Blazor components theme -->
    <link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
</head>
<body>
    ....
    <!-- Syncfusion Blazor Spreadsheet Editor script -->
    <script src="_content/Syncfusion.Blazor.Spreadsheet/scripts/syncfusion-blazor-spreadsheet.min.js" type="text/javascript"></script>
</body>

{% endhighlight %}
{% endtabs %}

N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to explore supported ways (such as static assets, CDN, and CRG) to apply themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet component

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet component in the **~/Pages/Home.razor** file.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

{% endhighlight %}
{% endtabs %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. This will render the Syncfusion Blazor Spreadsheet in your default web browser. The output will appear as follows:

![Blazor Spreadsheet](images/getting-started.png)

You can also experiment directly using the interactive playground below for a quick demo:

{% playground "https://blazorplayground.syncfusion.com/embed/BtLHDSMIxNVhqnlu?appbar=true&editor=true&result=true&errorlist=true&theme=fluent2" %}

To learn how to open workbooks, bind data, or save files in the Spreadsheet component, see [Open and Save](open-and-save).

N> [View Sample In GitHub.](https://github.com/SyncfusionExamples/Blazor-Getting-Started-Examples/tree/main/Spreadsheet).

## See Also

- [Getting started with the Blazor Spreadsheet in a Blazor Web app Server app](./getting-started-webapp)
- [Getting Started with .NET MAUI Blazor Hybrid App](./blazor-hybrid-maui-app)