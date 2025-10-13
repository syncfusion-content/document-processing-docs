---
layout: post
title: Getting started with SfPdfViewer in a WinForms App | Syncfusion
description: Learn how to get started with the SfPdfViewer control in a WinForms Blazor Hybrid App to view, comment on, and fill PDF forms.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# View PDF files using the PDF Viewer in a WinForms Blazor Hybrid App

This article explains how to add the Syncfusion&reg; Blazor PDF Viewer component to a WinForms Blazor Hybrid App using [Visual Studio](https://visualstudio.microsoft.com/vs/) or Visual Studio Code. The result is a desktop application (WinForms) that hosts Blazor UI inside a BlazorWebView control.

{% tabcontents %}

{% tabcontent Visual Studio %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

## Create a new WinForms app in Visual Studio

Create a WinForms application using Visual Studio 2022 with the WinForms project template. The app will later host Blazor components via BlazorWebView. For reference, see [Microsoft Blazor tooling](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=windows) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

## Install Blazor PDF Viewer NuGet package in WinForms App

To add **Blazor PDF Viewer** component in the app, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install

* [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) 
* [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes)
* [Microsoft.AspNetCore.Components.WebView.WindowsForms](https://www.nuget.org/packages/Microsoft.AspNetCore.Components.WebView.WindowsForms)

N> Ensure that the package `Microsoft.AspNetCore.Components.WebView.WindowsForms` updated to version `8.0.16`.

![WinForms Blazor App SfPdfViewer NuGet package reference](../images/winforms-sfpdfviewer-package.png)

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

## Create a new WinForms app in Visual Studio Code

Create a WinForms desktop project (not a WinForms Blazor HybridApp) using the .NET CLI in Visual Studio Code. This WinForms project will host Blazor UI through BlazorWebView. For guidance, see [Microsoft templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vsc) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project).

{% tabs %}
{% highlight c# tabtitle="WinForms Blazor HybridApp" %}

dotnet new winforms -n WinFormsBlazorHybridApp

{% endhighlight %}
{% endtabs %}

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor SfPdfViewer and Themes NuGet packages in the app

Install the required NuGet packages in the WinForms project that will host the Blazor UI.

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Ensure the current directory contains the WinForms project `.csproj` file.
* Run the following commands to install [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer), [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/), and [Microsoft.AspNetCore.Components.WebView.WindowsForms](https://www.nuget.org/packages/Microsoft.AspNetCore.Components.WebView.WindowsForms). This adds the PDF Viewer, theme, and the BlazorWebView host control.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet add package Microsoft.AspNetCore.Components.WebView.WindowsForms

dotnet restore

{% endhighlight %}

{% endtabs %}

N> Syncfusion&reg; Blazor components are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). See [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) for the list of available packages and component details.

N> Ensure that the package `Microsoft.AspNetCore.Components.WebView.WindowsForms` updated to version `8.0.16`.

{% endtabcontent %}

{% endtabcontents %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service

The WinForms project must target Windows and enable WinForms. A typical project file looks like the following.

{% tabs %} 
{% highlight xml tabtitle="WinFormsBlazorHybridApp.csproj" hl_lines="1" %}

<Project Sdk="Microsoft.NET.Sdk.Razor">

    ....

</Project>

{% endhighlight %} 
{% endtabs %}

Create a `Component` folder, add an `_Imports.razor` file in it, and include the required component namespaces within that folder.

{% tabs %}
{% highlight razor  tabtitle="~/_Imports.razor" %}

@using Microsoft.AspNetCore.Components.Web
@using Syncfusion.Blazor.SfPdfViewer

{% endhighlight %}
{% endtabs %}

## Create wwwroot folder and index.html file 

* Create a new folder named wwwroot in the WinForms project root.

* Inside wwwroot, create an index.html host page for the Blazor UI. This host page is required by BlazorWebView to initialize the Blazor runtime and load static assets (themes and scripts). A basic index.html might look like the following:


{% tabs %} 
{% highlight html tabtitle="wwwroot/index.html" hl_lines="8 13" %}

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WinForms Blazor Hybrid App</title>
    <base href="/" />
    <link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
</head>
<body>
    <div id="app">Loading...</div>
    <script src="_framework/blazor.webview.js"></script>
    <script src="_content/Syncfusion.Blazor.SfPdfViewer/scripts/syncfusion-blazor-sfpdfviewer.min.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}
{% endtabs %}

N> Ensure that the PDF Viewer static assets (themes and scripts) are loaded properly.

Register Syncfusion Blazor services and BlazorWebView in **~/Form1.cs** so that the WinForms window can host Blazor components.

{% tabs %}
{% highlight c# tabtitle="Form1.cs (WinForms host)" hl_lines="2 3 4 5 11 12 13 14 15 16 17 18 19 20 21" %}

namespace WinFormsBlazorHybridApp;
using Microsoft.AspNetCore.Components.WebView.WindowsForms;
using Microsoft.Extensions.DependencyInjection;
using Syncfusion.Blazor;
using WinFormsBlazorHybridApp.Components;

....
        InitializeComponent();
        ServiceCollection services = new ServiceCollection();
        services.AddWindowsFormsBlazorWebView();
        services.AddMemoryCache();
        services.AddSyncfusionBlazor();
        BlazorWebView blazorWebView = new BlazorWebView()
        {
            HostPage = "wwwroot\\index.html",
            Services = services.BuildServiceProvider(),
            Dock = DockStyle.Fill
        };
        blazorWebView.RootComponents.Add<YourRazorFileName>("#app");
        <!-- Replace 'YourRazorFileName' with the actual Razor component class (e.g., Main) in your project's namespace -->
        this.Controls.Add(blazorWebView);
....

{% endhighlight %}
{% endtabs %}

## Adding Blazor PDF Viewer component

Create a Razor component (for example, PDFViewer.razor) in the project and add the Syncfusion&reg; PDF Viewer component to it within the `Component` folder

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.SfPdfViewer;

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

N> If the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) property is not set, the PDF Viewer renders without loading a document. Users can use the **Open** toolbar option to browse and open a PDF.

## Run the application

Run the WinForms application. The Syncfusion&reg; Blazor PDF Viewer renders inside the WinForms window.

![WinForms Blazor HybridApp SfPdfViewer rendering in browser](../images/blazor-hybrid-winforms-sfpdfviewer.png)

>[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Getting%20Started/WinForms%20Blazor%20App).

## See also

* [Getting Started with Blazor PDF Viewer Component in Blazor WASM App](./web-assembly-application)

* [Getting Started with Blazor PDF Viewer Component in Blazor Web App](./web-app)

* [Getting Started with Blazor PDF Viewer Component in WPF Blazor Hybrid App](./deploy-wpf-blazor-app)

* [Getting Started with Blazor PDF Viewer Component in MAUI Blazor App](./deploy-maui-blazor-app)

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../how-to/processing-large-files-without-increasing-maximum-message-size)