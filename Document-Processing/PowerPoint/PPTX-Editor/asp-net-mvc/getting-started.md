---
layout: post
title: ASP.NET MVC PPTX Editor Getting Started | Syncfusion
description: Learn how to get started with the Syncfusion ASP.NET MVC PPTX Editor control and view PowerPoint presentations in your ASP.NET MVC application.
platform: document-processing
control: PowerPoint Editor
documentation: ug
---

# Getting Started with ASP.NET MVC PPTX Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PPTX Editor enables you to view and print PowerPoint presentations in web applications.
This section explains how to add and configure the Syncfusion ASP.NET MVC PPTX Editor control in an ASP.NET MVC application.

## Prerequisites

* [System requirements for ASP.NET MVC controls](https://ej2.syncfusion.com/aspnetmvc/documentation/system-requirements)
* [Browser compatibility](https://ej2.syncfusion.com/aspnetmvc/documentation/browser)

## Create ASP.NET MVC Application

Create an ASP.NET MVC project using one of the following options:

- [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started#create-your-first-app)
- [Create a Project using Syncfusion ASP.NET MVC Extension](https://ej2.syncfusion.com/aspnetmvc/documentation/visual-studio-integration/create-project)

## Install PPTX Editor NuGet Package

To add the PPTX Editor component in the application, follow the steps below.
- Open NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*).
- Search and install the package `Syncfusion.AspNetMvc.PptxEditor`.

Alternatively, you can install the PPTX Editor package from NuGet using the Package Manager Console:

{% tabs %}
{% highlight powershell tabtitle="Package Manager" %}
Install-Package Syncfusion.AspNetMvc.PptxEditor -Version {{ site.ej2version }}
{% endhighlight %}
{% endtabs %}

## Add Namespace

Add the following namespace reference in the `~/Views/Web.config` file:

```xml
<namespaces>
    <add namespace="Syncfusion.EJ2" />
</namespaces>
```

## Add Style and Script References

Include the required Syncfusion styles and scripts in the `~/Views/Shared/_Layout.cshtml` page.

{% tabs %}
{% highlight cshtml tabtitle="~/Views/Shared/_Layout.cshtml" %}
<head>
    <link href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/tailwind3.css" rel="stylesheet" />
    <script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>
</head>
{% endhighlight %}
{% endtabs %}

N> Refer to the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) to learn the different ways to include Syncfusion styles (using [CDN](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#node-package-manager-npm), or [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)) and ensure the expected appearance of Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls, and check the [Adding Script Reference](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references) documentation to understand the various approaches for adding required script references in your ASP.NET MVC application.

## Register Syncfusion Script Manager

Add the Syncfusion script manager before the closing `</body>` tag in `~/Views/Shared/_Layout.cshtml`.

{% tabs %}
{% highlight cshtml tabtitle="~/Views/Shared/_Layout.cshtml" %}
<body>
    <!-- Syncfusion ASP.NET MVC Script Manager -->
    @Html.EJS().ScriptManager()
</body>
{% endhighlight %}
{% endtabs %}

## Add ASP.NET MVC PPTX Editor Control

Add the PPTX Editor control to the `~/Views/Home/Index.cshtml` page.

{% tabs %}
{% highlight razor tabtitle="Index.cshtml" %}
@Html.EJS().PptxEditor("pptxeditor").DocumentPath("https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx").Render()
{% endhighlight %}
{% endtabs %}

## Run the Application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the application. 

The page displays the PPTX Editor with a toolbar, a thumbnail pane, and a slide area containing `Sample.pptx`. Select a thumbnail to navigate to a slide, change the zoom level, start a slideshow, or use the print command.

## See Also

* [ASP.NET MVC PPTX Editor overview](./overview)
* [JavaScript PPTX Editor getting started](../javascript-es5/getting-started)
* [TypeScript PPTX Editor getting started](../javascript-es6/getting-started)