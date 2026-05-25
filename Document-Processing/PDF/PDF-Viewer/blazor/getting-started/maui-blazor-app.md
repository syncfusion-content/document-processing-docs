---
layout: post
title: Getting Started with PDF Viewer in .NET MAUI Blazor Hybrid App | Syncfusion
description: Learn how to deploy the Syncfusion Blazor SfPdfViewer component in a Blazor .NET MAUI application on Windows.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Getting Started with the PDF Viewer in .NET MAUI Blazor Hybrid App

This section explains how to create and run a .NET MAUI Blazor Hybrid application using the [Syncfusion® Blazor PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) component.

## Prerequisites

To use the .NET MAUI project templates, install the Mobile development with .NET workload for Visual Studio. For installation details, see the Microsoft documentation: [Install .NET MAUI](https://learn.microsoft.com/en-us/dotnet/MAUI/get-started/installation?tabs=vswin).

## Create a new Blazor .NET MAUI app in Visual Studio

Create a **Blazor MAUI App** named **PDFViewerGettingStarted** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/hybrid/tutorials/maui?view=aspnetcore-8.0).

N> The PDF Viewer supports .NET 8.0 and later.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor SfPdfViewer NuGet Packages

To add **Syncfusion Blazor SfPdfViewer** component in the app, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install:

* [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer)
* [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/)

Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.SfPdfViewer -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

## Add import namespaces

After the packages are installed, open the **~/_Imports.razor** file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.SfPdfViewer` namespaces.

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.SfPdfViewer

{% endhighlight %}
{% endtabs %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in the **~/MauiProgram.cs** file.

{% tabs %}
{% highlight c# tabtitle="~/MauiProgram.cs" hl_lines="3 20 28" %}

using Microsoft.Extensions.Logging;
using MauiBlazorWindow.Data;
using Syncfusion.Blazor;

namespace MauiBlazorWindow;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
            });

        builder.Services.AddMauiBlazorWebView();
        builder.Services.AddMemoryCache();

#if DEBUG
        builder.Services.AddBlazorWebViewDeveloperTools();
        builder.Logging.AddDebug();
#endif

        builder.Services.AddSingleton<WeatherForecastService>();
        builder.Services.AddSyncfusionBlazor();
        return builder.Build();
    }
}

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the stylesheet in the `<head>` and the script at the end of the `<body>` in the **~/wwwroot/index.html** file as shown below:

{% tabs %}
{% highlight html tabtitle="index.html" hl_lines="3 7" %}

<head>
    <!-- Syncfusion Blazor PDF Viewer control's theme style sheet -->
    <link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
</head>
<body>
    <!-- Syncfusion Blazor PDF Viewer control's scripts -->
    <script src="_content/Syncfusion.Blazor.SfPdfViewer/scripts/syncfusion-blazor-sfpdfviewer.min.js" type="text/javascript"></script>
</body>

{% endhighlight %}
{% endtabs %}

N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to explore supported ways (such as static assets, CDN, and CRG) to apply themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor PDF Viewer Component

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer (Next-Gen) component to **~/Pages/Index.razor**.

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    public string DocumentPath { get; set; } = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
}

{% endhighlight %}
{% endtabs %}

N> If the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) property is not set, the PDF Viewer renders without loading a document. Use the Open toolbar option to browse and open a PDF.

## Run on Windows

In the Visual Studio toolbar, click the **Windows Machine** to build and run the app. Ensure the run profile is set to `Windows Machine` before starting the app.

![Running the app on a Windows machine](gettingstarted-images/Windows-machine.png)

After the application launches, the PDF Viewer renders the specified PDF document.

![Blazor SfPdfViewer rendering the PDF document](gettingstarted-images/Windows-maui-output.png)

## Run on Android

To run the PDF Viewer on Android using the Android emulator, follow these steps:

![Android emulator configuration for .NET MAUI](gettingstarted-images/android-maui.png)

For setup and usage, see [Android Emulator setup for .NET MAUI](https://learn.microsoft.com/en-us/dotnet/maui/android/emulator/device-manager#android-device-manager-on-windows).

N> If any errors occur while using the Android Emulator, see [Troubleshooting Android Emulator](https://learn.microsoft.com/en-us/dotnet/maui/android/emulator/troubleshooting).

![Blazor SfPdfViewer running in the Android emulator](gettingstarted-images/android-emulator.png)

N> To learn how to open, view, or interact with PDF files in the PDF Viewer component, see [Open and Save](.././opening-pdf-file). For a hands-on reference with working code examples, explore the sample projects available on [GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Getting%20Started/Blazor%20Hybrid%20-%20.NET%20MAUI/MauiBlazorWindow).

## See Also

* [Getting Started with Blazor PDF Viewer Component in WinForms Blazor Hybrid App](./winforms-blazor-app)
* [Getting Started with Blazor PDF Viewer Component in WPF Blazor Hybrid App](./wpf-blazor-app)
* [Supported features: desktop vs. mobile](./features#supported-features-desktop-vs-mobile)
* [Render a PDF document from an embedded source in the .NET MAUI Android app](../faqs/how-to-deploy-maui-using-android-emulator)
