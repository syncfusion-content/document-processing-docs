---
layout: post
title: Getting Started with .NET MAUI Blazor Hybrid App | Syncfusion
description: Learn how to get started with .NET MAUI Blazor Hybrid App using the Syncfusion Spreadsheet component.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Getting Started with .NET MAUI Blazor Hybrid App

This section explains how to create and run a .NET MAUI Blazor Hybrid application using the [Syncfusion® Blazor Spreadsheet](https://www.syncfusion.com/blazor-components/blazor-spreadsheet) component.

## Prerequisites

To use the .NET MAUI project templates, install the Mobile development with .NET workload for Visual Studio. For installation details, see the Microsoft documentation: [Install .NET MAUI](https://learn.microsoft.com/en-us/dotnet/MAUI/get-started/installation?tabs=vswin).

## Create a new Blazor MAUI App in Visual Studio

Create a **Blazor MAUI App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/hybrid/tutorials/maui?view=aspnetcore-8.0).

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet NuGet Packages

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

## Add import namespaces

After the packages are installed, open the **~/_Imports.razor** file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.Spreadsheet` namespaces.

{% tabs %}
{% highlight razor tabtitle="_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Spreadsheet

{% endhighlight %}
{% endtabs %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service in the **~/MauiProgram.cs** file. After the builder is created.

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" %}

....
using Syncfusion.Blazor;

....

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        // Register Syncfusion Blazor service
        builder.Services.AddSyncfusionBlazor();
    }
}

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the stylesheet in the `<head>` and the script at the end of the `<body>` in the **~wwwroot/index.html** file as shown below:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<head>
    <!-- Syncfusion Blazor components theme -->
    <link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
</head>

<body>
    <!-- Syncfusion Blazor Spreadsheet Editor script -->
    <script src="_content/Syncfusion.Blazor.Core/scripts/syncfusion-blazor.min.js" type="text/javascript"></script>
</body>
{% endhighlight %}
{% endtabs %}

N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to explore supported ways (such as static assets, CDN, and CRG) to apply themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet component

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet component in any Razor file. In this example, the Spreadsheet component is added to the **~/Home.razor** page under the **~/Components/Pages** folder.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet>
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

{% endhighlight %}
{% endtabs %}

## Run on Windows

In the Visual Studio toolbar, click the **Windows Machine** to build and run the app. Ensure the run profile is set to `Windows Machine` before starting the app.

![Maui Tool](images/maui-build.png)

After the application launches, the output will appear as shown below:

![Blazor Spreadsheet](images/getting-started-maui.png)

## Run on Android

To run the Spreadsheet on Android using the Android emulator, follow these steps:

Refer [here](https://learn.microsoft.com/en-us/dotnet/maui/android/emulator/device-manager#android-device-manager-on-windows) to install and launch Android emulator.

N> If any errors occur while using the Android Emulator, see [Troubleshooting Android Emulator](https://learn.microsoft.com/en-us/dotnet/maui/android/emulator/troubleshooting).

![Blazor Spreadsheet running in the Android emulator](images/android-emulator.png)

To learn how to open workbooks, bind data, or save files in the Spreadsheet component, see [Open and Save](open-and-save).

N> [View Sample In GitHub.](https://github.com/SyncfusionExamples/syncfusion-maui-blazor-spreadsheet-integration).

## See Also

- [Getting started with the Blazor Spreadsheet in a Blazor WebAssembly App](./getting-started)
- [Getting started with the Blazor Spreadsheet in a Blazor Web app Server app](./getting-started-webapp)
