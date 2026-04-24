---
layout: post
title: Getting Started with EJ2 ASP.NET MVC Spreadsheet Control |Syncfusion
description: Checkout and learn about getting started with EJ2 ASP.NET MVC Spreadsheet control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Getting Started Mvc
documentation: ug
---


# Getting Started with ASP.NET MVC Spreadsheet Control

This section briefly explains about how to include [Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-mvc-spreadsheet-editor) control in your ASP.NET MVC application using Visual Studio.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls](https://ej2.syncfusion.com/aspnetmvc/documentation/system-requirements)

## Create ASP.NET MVC application with HTML helper

* [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/start-mvc?view=aspnetcore-8.0&tabs=visual-studio)

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC package in the application

Open the NuGet package manager UI in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), search for [Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5) and then install it. Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.MVC5 -Version {{ site.ej2version }}

{% endhighlight %}
{% endtabs %}

N> Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls are available in [nuget.org.](https://www.nuget.org/packages?q=syncfusion.EJ2) Refer to [NuGet packages topic](https://ej2.syncfusion.com/aspnetmvc/documentation/nuget-packages) to learn more about installing NuGet packages in various OS environments.

## Add namespace

Add **Syncfusion.EJ2** namespace reference in `Web.config` under `Views` folder.

```
<namespaces>
    <add namespace="Syncfusion.EJ2"/>
</namespaces>
```

## Add stylesheet and script resources

Here, the theme and script is referred using CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` file as follows,

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET MVC controls styles -->
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
    <!-- Syncfusion ASP.NET MVC controls scripts -->
    <script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

N> To learn other ways to load themes or scripts (such as NPM packages or [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)), see the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) and [Adding Script Reference](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references) documentation.

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> script manager

Also, register the script manager `EJS().ScriptManager()` at the end of `<body>` in the `~/Views/Shared/_Layout.cshtml` file as follows.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<body>
...
    <!-- Syncfusion ASP.NET MVC Script Manager -->
    @Html.EJS().ScriptManager()
</body>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Spreadsheet control

Now, add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Spreadsheet control in `~/Views/Home/Index.cshtml` page.

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
* [Data Binding](./data-binding)
* [Open and Save](./open-save)
