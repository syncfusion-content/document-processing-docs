---
layout: post
title: Getting Started with .NET MAUI Blazor Hybrid App | Syncfusion
description: Learn how to get started with .NET MAUI Blazor Hybrid App using the Syncfusion Spreadsheet component.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Getting Started with .NET MAUI Blazor Hybrid App

This section explains how to create and run a .NET Multi-platform Blazor App UI (.NET MAUI with Blazor Hybrid App) using Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet component.

## What is a .NET MAUI Blazor Hybrid App?

A .NET MAUI Blazor Hybrid App is a .NET MAUI application where a Blazor Web App is hosted in the .NET MAUI app using the BlazorWebView control. This enables a Blazor Web App to integrate with platform features and UI controls. The BlazorWebView can be added to any page of a .NET MAUI app and pointed to the root of the Blazor app. The Blazor components run in the .NET process and render the web UI to an embedded web view control. .NET MAUI Blazor apps can run on all platforms supported by .NET MAUI.

Visual Studio provides the **.NET MAUI Blazor Hybrid App** template to create .NET MAUI Blazor Hybrid Apps.

## Prerequisites

- .NET SDK 8.0 or above
- Visual Studio 2022 17.1 or above with the required workloads:
  - [Mobile development with .NET](https://learn.microsoft.com/en-us/dotnet/maui/get-started/installation?view=net-maui-10.0&tabs=visual-studio)
  - ASP.NET and web development

## Create a new .NET MAUI Blazor App in Visual Studio

Create a **.NET MAUI Blazor Hybrid App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/hybrid/tutorials/maui?view=aspnetcore-8.0).

## BlazorWebView in .NET MAUI Blazor App

The above steps create a multi-targeted .NET MAUI Blazor app that can be deployed to Android, iOS, macOS, and Windows.

In `MainPage.xaml`, the `BlazorWebView` is added and points to the root of the Blazor app. The root Blazor component for the app is in `Routes.razor`, which Razor compiles into a type named `Routes` in the application’s root namespace.

{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" %}

<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             xmlns:local="clr-namespace:MauiApp1"
             x:Class="MauiApp1.MainPage">

    <BlazorWebView x:Name="blazorWebView" HostPage="wwwroot/index.html">
        <BlazorWebView.RootComponents>
            <RootComponent Selector="#app" ComponentType="{x:Type local:Components.Routes}" />
        </BlazorWebView.RootComponents>
    </BlazorWebView>

</ContentPage>

{% endhighlight %}
{% endtabs %}

For more details, refer to the [Create a .NET MAUI Blazor app](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/blazorwebview?view=net-maui-10.0#create-a-net-maui-blazor-app) topic.


## Install Syncfusion Blazor Spreadsheet and Themes NuGet in the App

To add the Blazor Spreadsheet component to the app, open the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), then search for and install [Syncfusion.Blazor.Spreadsheet](https://www.nuget.org/packages/Syncfusion.Blazor.Spreadsheet) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/). Alternatively, use the following Package Manager commands.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.Spreadsheet -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

N> Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor components are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for available NuGet packages list with component details.

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service

Open **~/_Imports.razor** file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.Spreadsheet` namespaces.

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Spreadsheet

{% endhighlight %}
{% endtabs %}

Next, register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service in the MauiProgram.cs file of the MAUI Blazor App.

{% tabs %}
{% highlight C# tabtitle="~/MauiProgram.cs" %}

using Syncfusion.Blazor;
    ....
    builder.Services.AddSyncfusionBlazor();
    ....

{% endhighlight %}
{% endtabs %}

## Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the stylesheet and script references in the `<head>` of the **~wwwroot/index.html** file.

```html
<head>
    ....
    <link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
    <script src="_content/Syncfusion.Blazor.Spreadsheet/scripts/syncfusion-blazor-spreadsheet.min.js" type="text/javascript"></script>
</head>
```
N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to discover various methods ([Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets), [CDN](https://blazor.syncfusion.com/documentation/appearance/themes#cdn-reference), and [CRG](https://blazor.syncfusion.com/documentation/common/custom-resource-generator)) for referencing themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

## Add Blazor Spreadsheet component

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Spreadsheet component in any Razor file. In this example, the Spreadsheet component is added to the ~/Home.razor page under the **~/Components/Pages** folder.

{% tabs %}
{% highlight razor %}

<SfSpreadsheet DataSource="@DataSourceBytes">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public byte[] DataSourceBytes { get; set; }

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
     }
}

{% endhighlight %}
{% endtabs %}
