---
layout: post
title: Getting Started with ASP.NET Core Spreadsheet Control | syncfusion
description: Checkout and learn about getting started with ASP.NET Core Spreadsheet control of Syncfusion Spreadsheet Editor SDK and more details.
platform: document-processing
control: ASP.NET Core Spreadsheet
documentation: ug
---


# Getting Started with ASP.NET Core Spreadsheet Control

This section briefly explains how to include [ASP.NET Core Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) control in your ASP.NET Core application using Visual Studio.

## Prerequisites

[System requirements for ASP.NET Core controls](https://ej2.syncfusion.com/aspnetcore/documentation/system-requirements)

## Create ASP.NET Core web application with Razor pages

* [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-8.0&tabs=visual-studio#create-a-razor-pages-web-app)

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core package in the application

Open the NuGet package manager UI in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search for [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/) and then install it. Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.AspNet.Core -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

N> ASP.NET Core controls are available in [nuget.org.](https://www.nuget.org/packages?q=syncfusion.EJ2) Refer to [NuGet packages topic](https://ej2.syncfusion.com/aspnetcore/documentation/nuget-packages) to learn more about installing NuGet packages in various OS environments.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Tag Helper
Open `~/Pages/_ViewImports.cshtml` file and import the `Syncfusion.EJ2` tag helper.

{% tabs %}
{% highlight C# tabtitle="~/_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.EJ2

{% endhighlight %}
{% endtabs %}

## Register a Syncfusion License Key

Before initializing the Syncfusion ASP.NET Core Spreadsheet control, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in an ASP.NET Core Application](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#aspnet-core)

## Add stylesheet and script resources

Add the stylesheet and script references at the end of the **\<head\>** section in the `~/Pages/Shared/_Layout.cshtml` file, as shown in the following example.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET Core controls styles -->
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />

<!-- Syncfusion ASP.NET Core controls scripts -->
<script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>

{% endhighlight %}
{% endtabs %}

To use a different theme, replace `fluent.css` with the theme of your choice (for example, `tailwind3.css`, `bootstrap5.css`, etc.) in the above code.

N> To learn other ways to load themes or scripts (such as NPM packages or [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator)), see the [Themes topic](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) and [Adding Script Reference](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) documentation.

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Script Manager
Register the script manager **\<ejs-scripts\>** at the end of the **\<body\>** section in the ASP.NET Core application, as shown in the following example.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET Core Script Manager -->
<ejs-scripts></ejs-scripts>

{% endhighlight %}
{% endtabs %}

## Add ASP.NET Core Spreadsheet Control

Add the ASP.NET Core Spreadsheet tag helper in `~/Pages/Index.cshtml` page.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/getting-started-core/tagHelper %}
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_OpenUrl) and [`saveUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_SaveUrl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`Open and Save`](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/open-save) section.

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. Then, the ASP.NET Core Spreadsheet control will be rendered in the default web browser.

![ASP.NET Core Spreadsheet control](images/spreadsheet.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/tree/main/Spreadsheet/ASP.NET%20Core%20Tag%20Helper%20Examples). Looking for the full ASP.NET Core Spreadsheet component overview, features, pricing, and documentation? Visit the [ASP.NET Core Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) page.

## Troubleshooting

If the Spreadsheet control does not render as expected, use the following checklist to resolve the most common setup and configuration issues.

**1. Control not rendering (blank area where the Spreadsheet should appear)**
- Ensure the `<ejs-scripts>` tag is included at the end of `<body>` section in `~/Pages/Shared/_Layout.cshtml` to initialize client-side scripts.

**2. Tag helper not recognized (`ejs-spreadsheet` shows as plain text)**
- Ensure `@addTagHelper *, Syncfusion.EJ2` is included in `~/Pages/_ViewImports.cshtml`.
- Rebuild the project after installing the `Syncfusion.EJ2.AspNet.Core` NuGet package.

**3. Open/Save requests fail**
- The sample uses the online demo service for `openUrl` and `saveUrl`. For local development, configure your own backend service. Refer to [Open and Save](./open-save) for setup details.

## See also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core MVC using Tag Helper](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/aspnet-core-mvc-taghelper)
* [Create a Project using Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-integration/create-project)
* [Open and Save](./open-save)
* [Data Binding](./data-binding)
