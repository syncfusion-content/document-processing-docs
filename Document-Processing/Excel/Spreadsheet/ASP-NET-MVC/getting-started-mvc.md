---
layout: post
title: Getting Started with ASP.NET MVC Spreadsheet Control | Syncfusion
description: Checkout and learn about getting started with ASP.NET MVC Spreadsheet control of Syncfusion Spreadsheet Editor SDK and more details.
platform: document-processing
control: Getting Started MVC
documentation: ug
---


# Getting Started with ASP.NET MVC Spreadsheet Control

This section briefly explains how to include [Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-mvc-spreadsheet-editor) control in your ASP.NET MVC application using Visual Studio.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls](https://ej2.syncfusion.com/aspnetmvc/documentation/system-requirements)

## Create ASP.NET MVC Application with HTML Helper

* [Create an ASP.NET Web Application (.NET Framework) using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started#create-your-first-app)

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC package in the application

Open the NuGet package manager UI in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search for [Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5) and then install it or run the following command to achieve the same.

> Make sure that the `Microsoft.AspNet.Mvc` package and its dependency packages are updated to the latest version.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.MVC5 -Version {{ site.ej2version }}

{% endhighlight %}
{% endtabs %}

N> Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls are available in [nuget.org](https://www.nuget.org/packages?q=syncfusion.EJ2). Refer to [NuGet packages topic](https://ej2.syncfusion.com/aspnetmvc/documentation/nuget-packages) to learn more about installing NuGet packages in various OS environments.

## Add namespace

Add **Syncfusion.EJ2** namespace reference to the **\<namespaces\>** section in the `~/Views/Web.config` file.

```
<add namespace="Syncfusion.EJ2"/>
```

## Register a Syncfusion License Key

Before initializing the Syncfusion ASP.NET MVC Spreadsheet control, generate a Syncfusion license key and register it in the application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in an ASP.NET MVC Application](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#aspnet-mvc)

## Add stylesheet and script resources

Add the stylesheet and script references at the end of the **\<head\>** section in the `~/Views/Shared/_Layout.cshtml` file, as shown in the following example.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET MVC controls styles -->
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />

<!-- Syncfusion ASP.NET MVC controls scripts -->
<script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>

{% endhighlight %}
{% endtabs %}

To use a different theme, replace `fluent.css` with the theme of your choice (for example, `tailwind3.css`, `bootstrap5.css`, etc.) in the above code.

N> To learn other ways to load themes or scripts (such as NPM packages or [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)), see the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) and [Adding Script Reference](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references) documentation.

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> script manager

Register the script manager `EJS().ScriptManager()` at the end of the **\<body\>** section in the `~/Views/Shared/_Layout.cshtml` file, as shown in the following example.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET MVC Script Manager -->
@Html.EJS().ScriptManager()

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Spreadsheet control

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Spreadsheet control in `~/Views/Home/Index.cshtml` page.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/getting-started-mvc/razor %}
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-mvc/open-save#open) and [`saveUrl`](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-mvc/open-save#save) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`Open and Save`](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-mvc/open-save) section.

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. Then, the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Spreadsheet control will be rendered in the default web browser.

![ASP.NET MVC Spreadsheet Control](images/spreadsheet.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-MVC-Getting-Started-Examples/tree/main/Spreadsheet/ASP.NET%20MVC%20Razor%20Examples).

## See also

* [Create a Project using Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Extension](https://ej2.syncfusion.com/aspnetmvc/documentation/getting-started/project-template)
* [Open and Save](./open-save)
* [Data Binding](./data-binding)
