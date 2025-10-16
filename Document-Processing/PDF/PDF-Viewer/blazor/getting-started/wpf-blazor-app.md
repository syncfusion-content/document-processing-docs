---
layout: post
title: Getting started with SfPdfViewer in a WPF App | Syncfusion
description: Learn how to get started with the SfPdfViewer control in a WPF Blazor Hybrid App to view, comment on, and fill PDF forms.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# View PDF files using the PDF Viewer in a WPF Blazor Hybrid App

This article explains how to add the Syncfusion&reg; Blazor PDF Viewer component to a WPF Blazor Hybrid App using [Visual Studio](https://visualstudio.microsoft.com/vs/) or Visual Studio Code. The result is a desktop application (WPF) that hosts Blazor UI inside a BlazorWebView control.

{% tabcontents %}

{% tabcontent Visual Studio %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

## Create a new WPF app in Visual Studio

Create a WPF application using Visual Studio 2022 with the WPF project template. The app will later host Blazor components via BlazorWebView. For reference, see [Microsoft Blazor tooling](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=windows) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

## Install Blazor PDF Viewer NuGet package in WPF App

To add **Blazor PDF Viewer** component in the app, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install

* [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) 
* [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes)
* [Microsoft.AspNetCore.Components.WebView.Wpf](https://www.nuget.org/packages/Microsoft.AspNetCore.Components.WebView.Wpf)

N> Ensure that the package `Microsoft.AspNetCore.Components.WebView.Wpf` updated to version `8.0.16`.

![WPF Blazor App SfPdfViewer NuGet package reference](../images/wpf-sfpdfviewer-package.png)

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)

## Create a new WPF app in Visual Studio Code

Create a WPF desktop project (not a WPF Blazor HybridApp) using the .NET CLI in Visual Studio Code. This WPF project will host Blazor UI through BlazorWebView. For guidance, see [Microsoft templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vsc) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project).

{% tabs %}
{% highlight c# tabtitle="WPF Blazor HybridApp" %}

dotnet new wpf -n WPFBlazorHybridApp

{% endhighlight %}
{% endtabs %}

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor SfPdfViewer and Themes NuGet packages in the app

Install the required NuGet packages in the WPF project that will host the Blazor UI.

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Ensure the current directory contains the WPF project `.csproj` file.
* Run the following commands to install [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer), [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/), and [Microsoft.AspNetCore.Components.WebView.Wpf](https://www.nuget.org/packages/Microsoft.AspNetCore.Components.WebView.Wpf). This adds the PDF Viewer, theme, and the BlazorWebView host control.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.SfPdfViewer -v {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes -v {{ site.releaseversion }}
dotnet add package Microsoft.AspNetCore.Components.WebView.Wpf
dotnet restore

{% endhighlight %}

{% endtabs %}

N> Syncfusion&reg; Blazor components are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). See [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) for the list of available packages and component details.

N> Ensure that the package `Microsoft.AspNetCore.Components.WebView.Wpf` updated to version `8.0.16`.

{% endtabcontent %}

{% endtabcontents %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service

The WPF project must target Windows and enable WPF. A typical project file looks like the following.

{% tabs %} 
{% highlight xml tabtitle="WPFBlazorHybridApp.csproj" hl_lines="1" %}

<Project Sdk="Microsoft.NET.Sdk.Razor">

    ....

</Project>

{% endhighlight %} 
{% endtabs %}

Create an **_Imports.razor** and add the component namespace

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Microsoft.AspNetCore.Components.Web
@using Syncfusion.Blazor.SfPdfViewer

{% endhighlight %}
{% endtabs %}

Register Syncfusion Blazor services and BlazorWebView in **~/MainWindow.xaml.cs** so that the WPF window can host Blazor components.

{% tabs %}
{% highlight c# tabtitle="MainWindow.xaml.cs" hl_lines="3 4 6 7 8 9 10 11" %}

....

using Microsoft.Extensions.DependencyInjection;
using Syncfusion.Blazor;
        ....
            InitializeComponent();
            ServiceCollection services = new ServiceCollection();
            services.AddWpfBlazorWebView();
            services.AddMemoryCache();
            services.AddSyncfusionBlazor();
            Resources.Add("services", services.BuildServiceProvider());
            ....

{% endhighlight %}
{% endtabs %}

## Create wwwroot folder and index.html file 

* Create a new folder named wwwroot in the WPF project root.

* Inside wwwroot, create an index.html host page for the Blazor UI. This host page is required by BlazorWebView to initialize the Blazor runtime and load static assets (themes and scripts). A basic index.html might look like the following:


{% tabs %} 
{% highlight html tabtitle="index.html" hl_lines="8 13" %}

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>WPF Blazor Hybrid App</title>
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

## Adding Blazor PDF Viewer component

Create a Razor component (for example, Main.razor) in the project and add the Syncfusion&reg; PDF Viewer component to it.

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

## Integrate Blazor into MainWindow.xaml

* Open MainWindow.xaml.
* Add the Microsoft.AspNetCore.Components.WebView.Wpf namespace.
* Embed the BlazorWebView control, set HostPage to wwwroot/index.html, and map a RootComponent that matches the Razor component type and the selector in index.html (#app).

{% tabs %} 
{% highlight xaml tabtitle="MainWindow.xaml" hl_lines="3 7 8 9 11 12" %}

<Window x:Class="WPFBlazorHybridApp.MainWindow"
        ....
        xmlns:blazor="clr-namespace:Microsoft.AspNetCore.Components.WebView.Wpf;assembly=Microsoft.AspNetCore.Components.WebView.Wpf"
        ....
        Title="MainWindow" Height="450" Width="800">
    <Grid>
        <blazor:BlazorWebView HostPage="wwwroot\index.html" Services="{DynamicResource services}">
            <blazor:BlazorWebView.RootComponents>
                <blazor:RootComponent Selector="#app" ComponentType="{x:Type local:YourRazorFileName}" />
                <!-- Replace 'YourRazorFileName' with the actual Razor component class (e.g., Main) in your project's namespace -->
            </blazor:BlazorWebView.RootComponents>
        </blazor:BlazorWebView>
    </Grid>
</Window>

{% endhighlight %} 
{% endtabs %}

## Run the application

Run the WPF application. The Syncfusion&reg; Blazor PDF Viewer renders inside the WPF window.

![WPF Blazor HybridApp SfPdfViewer rendering in browser](../images/blazor-hybrid-wpf-sfpdfviewer.png)

>[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Getting%20Started/WPF%20Blazor%20App).

## See also

* [Getting Started with Blazor PDF Viewer Component in Blazor WASM App](./web-assembly-application)

* [Getting Started with Blazor PDF Viewer Component in Blazor Web App](./web-app)

* [Getting Started with Blazor PDF Viewer Component in WinForms Blazor Hybrid App](./winforms-blazor-app)

* [Getting Started with Blazor PDF Viewer Component in MAUI Blazor App](./maui-blazor-app)

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)
