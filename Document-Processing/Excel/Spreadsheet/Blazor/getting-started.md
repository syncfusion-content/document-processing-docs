---
layout: post
title: Getting Started with Blazor Spreadsheet Component in WASM | Syncfusion
description: Check out and learn about getting started with Blazor Spreadsheet component in Blazor WebAssembly Application.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Getting Started with Blazor Spreadsheet Component

This section briefly explains how to include [Blazor Spreadsheet Editor](https://www.syncfusion.com/blazor-components/blazor-spreadsheet) component in your Blazor WebAssembly App using [Visual Studio](https://visualstudio.microsoft.com/vs/), [Visual Studio Code](https://code.visualstudio.com/), and the [.NET CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/).

{% tabcontents %}

{% tabcontent Visual Studio %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

## Create a new Blazor App in Visual Studio

You can create a **Blazor WebAssembly App (Standalone)** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-7.0&pivots=vs) or the [Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

## Install Blazor Spreadsheet NuGet Packages

To add **Syncfusion Blazor Spreadsheet** component in the app, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install:

* [Syncfusion.Blazor.Spreadsheet](https://www.nuget.org/packages/Syncfusion.Blazor.Spreadsheet)
* [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/)

Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.Spreadsheet -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

## Create a new Blazor App in Visual Studio Code

You can create a **Blazor WebAssembly App (Standalone)** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-7.0&pivots=vsc) or the [Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project).

Alternatively, you can create a WebAssembly application using the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

{% tabs %}

{% highlight c# tabtitle="Blazor WASM App" %}

dotnet new blazorwasm -o BlazorApp
cd BlazorApp

{% endhighlight %}

{% endtabs %}

## Install Blazor Spreadsheet NuGet Packages

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Ensure you’re in the project root directory where your `.csproj` file is located.
* Run the following command to install the [Syncfusion.Blazor.Spreadsheet](https://www.nuget.org/packages/Syncfusion.Blazor.Spreadsheet) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet packages and ensure all dependencies are installed.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.Spreadsheet -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}

{% endtabs %}

N> After running `dotnet restore`, ensure there are no error messages in the terminal. If restore fails, verify your NuGet source (`https://api.nuget.org/v3/index.json`) is configured, clear the local cache with `dotnet nuget locals all --clear`, and retry.

{% endtabcontent %}

{% tabcontent .NET CLI %}

## Prerequisites

Install the latest version of [.NET SDK](https://dotnet.microsoft.com/en-us/download). If the .NET SDK is already installed, determine the installed version by running the following command in a command prompt (Windows), terminal (macOS), or command shell (Linux). Also, review the [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements).

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

## Install Blazor Spreadsheet and Themes NuGet in the App

After creating the Blazor WebAssembly App, install the required Syncfusion NuGet packages using the .NET CLI.

* Open a command prompt, terminal, or shell.
* Ensure you’re in the project root directory where your `.csproj` file is located.
* Run the following command to install the [Syncfusion.Blazor.Spreadsheet](https://www.nuget.org/packages/Syncfusion.Blazor.Spreadsheet) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet packages and ensure all dependencies are installed.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.Spreadsheet -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}

{% endtabs %}

N> After running `dotnet restore`, ensure there are no error messages in the terminal. If restore fails, verify your NuGet source (`https://api.nuget.org/v3/index.json`) is configured, clear the local cache with `dotnet nuget locals all --clear`, and retry.

{% endtabcontent %}

{% endtabcontents %}

## Add import namespaces

After the packages are installed, open the **_Imports.razor** file (typically located at the project root in a Blazor WebAssembly App) and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.Spreadsheet` namespaces.

{% tabs %}
{% highlight razor tabtitle="_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Spreadsheet

{% endhighlight %}
{% endtabs %}

## Register Blazor Service

Register the Syncfusion Blazor service in the **Program.cs** file of your Blazor WebAssembly App. Place the registration after the host builder is created and before `await builder.Build().RunAsync();`.

{% tabs %}
{% highlight C# tabtitle="Program.cs" %}

using Syncfusion.Blazor;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Register Syncfusion Blazor service
builder.Services.AddSyncfusionBlazor();

await builder.Build().RunAsync();

{% endhighlight %}
{% endtabs %}

N> `AddSyncfusionBlazor()` accepts optional configuration options such as enabling script isolation. See the [Blazor service registration](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.GlobalOptions.html) topic for available configuration options.

## Register Syncfusion License Key

Register the Syncfusion license key in your application startup to avoid a license warning at runtime. Add the following line in the **Program.cs** file of your Blazor WebAssembly App, after the `AddSyncfusionBlazor()` call:

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

// Register Syncfusion license key
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

{% endhighlight %}
{% endtabs %}

N> Replace `YOUR_LICENSE_KEY` with your actual Syncfusion license key. For details on generating and registering a license key, see [Licensing](https://blazor.syncfusion.com/documentation/licensing).

## Add stylesheet resource

The theme stylesheet can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the stylesheet reference in the `<head>` section of the **index.html** file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<head>
    <!-- Syncfusion Blazor components theme -->
    <link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
</head>

{% endhighlight %}
{% endtabs %}

## Add script resource

The Spreadsheet Editor script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the script reference in the `<head>` section of the **index.html** file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<head>
    <!-- Syncfusion Blazor Spreadsheet Editor script -->
    <script src="_content/Syncfusion.Blazor.Spreadsheet/scripts/syncfusion-blazor-spreadsheet.min.js" type="text/javascript"></script>
</head>

{% endhighlight %}
{% endtabs %}

N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to explore supported ways (such as static assets, CDN, and CRG) to apply themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

## Add the Blazor Spreadsheet component

Add the Blazor Spreadsheet component in the **Pages/Home.razor** file.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

{% endhighlight %}
{% endtabs %}

N> `SpreadsheetRibbon` is the optional ribbon toolbar child component of `SfSpreadsheet`. Omit it if you want to render the spreadsheet without the ribbon UI.

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. This will render the Syncfusion Blazor Spreadsheet in your default web browser. The output will appear as follows:

![Blazor Spreadsheet](images/getting-started.png)

You can also experiment directly using the interactive playground below for a quick demo:

{% playground "https://blazorplayground.syncfusion.com/embed/BtLHDSMIxNVhqnlu?appbar=true&editor=true&result=true&errorlist=true&theme=fluent2" %}

To learn how to open workbooks, bind data, or save files in the Spreadsheet component, see [Open and Save](open-and-save).

N> [View Sample In GitHub](https://github.com/SyncfusionExamples/Blazor-Getting-Started-Examples/tree/main/Spreadsheet).

## See Also

- [Getting started with the Blazor Spreadsheet in a Blazor Web App (Server)](./getting-started-webapp)
- [Getting Started with .NET MAUI Blazor Hybrid App](./blazor-hybrid-maui-app)