---
layout: post
title: Getting Started with Standalone ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to integrate the standalone ASP.NET Core PDF Viewer control in your web application. View and annotate with client-side rendering.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Getting Started with Standalone ASP.NET Core PDF Viewer

This section explains how to add the [Syncfusion® Standalone ASP.NET Core PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) to a ASP.NET Core Web application using Visual Studio or Visual Studio Code. A fully functional example project is available in the [GitHub repository](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/tree/main/PDFViewer/ASP.NET%20Core%20Tag%20Helper%20Examples%20-%20Standalone%20PDF%20Viewer).

## Prerequisites

- [System requirements for ASP.NET Core controls](https://help.syncfusion.com/document-processing/system-requirements)
- [ASP.NET Core licensing documentation](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/overview)

{% tabcontents %}

{% tabcontent Visual Studio %}

## Create a new ASP.NET Core Web App in Visual Studio

Create an ASP.NET Core Web App using Visual Studio 2022 by following the instructions [here](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=visualstudio).

## ASP.NET Core PDF Viewer NuGet package installation

To add the ASP.NET Core PDF Viewer component, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), then search for and install:

* [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/)

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Create a new ASP.NET Core Web App in Visual Studio Code

Create an **ASP.NET Core Web App** in Visual Studio Code using the following commands:

{% tabs %}
{% highlight c# tabtitle="ASP.NET Core" %}

dotnet new webapp -o WebApp
cd WebApp

{% endhighlight %}
{% endtabs %}

## ASP.NET Core PDF Viewer NuGet package installation

Install the Syncfusion&reg; ASP.NET Core component NuGet packages within the project.

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Ensure you’re in the project root directory where your `.csproj` file is located.
* Run the following command to install the [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/) NuGet package.

{% tabs %}
{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.EJ2.AspNet.Core -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Tag Helper

Open `~/Pages/_ViewImports.cshtml` and add the Syncfusion EJ2 Tag Helper imports. This makes all Syncfusion tag helpers (including the PDF Viewer) available throughout the application.

{% tabs %}
{% highlight c# tabtitle="~/_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.EJ2

{% endhighlight %}
{% endtabs %}

## Add style sheet and script reference

Reference the Syncfusion theme and JavaScript library using the CDN inside the `<head>` of `~/Pages/Shared/_Layout.cshtml`. The stylesheet provides styling for all Syncfusion components including the PDF Viewer, and the script provides the client-side functionality.

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET Core controls styles -->
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />

<!-- Syncfusion ASP.NET Core controls script -->
<script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>

{% endhighlight %}
{% endtabs %}

N> To learn other ways to load themes or scripts (such as [NPM packages](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#node-package-manager-npm) or [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator)), see the [Themes topic](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) and [Adding Script Reference](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) documentation.

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Script Manager

Open the `~/Pages/Shared/_Layout.cshtml` page and register the script manager `<ejs-scripts>` at the end of the `<body>` element. The script manager initializes Syncfusion components and manages their life cycle.

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET Core Script Manager -->
<ejs-scripts></ejs-scripts>

{% endhighlight %}
{% endtabs %}

## Add ASP.NET Core PDF Viewer Tag Helper

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer Tag Helper in `~/Pages/Index.cshtml`.

{% tabs %}
{% highlight c# tabtitle="~/Index.cshtml" %}

<!-- documentPath specifies the PDF document to load -->
<ejs-pdfviewer id="pdfviewer" style="height:600px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
</ejs-pdfviewer>

{% endhighlight %}
{% endtabs %}

N> The `documentPath` property can point to a remote URL (as shown above) or to a local PDF file. To use the `resourceUrl` and `documentPath` with locally available PDF documents and resources, follow these [Instructions](./how-to/local-resources#configuring-pdf-viewer-for-locally-available-pdf-documents-and-local-resources). For the full list of PDF Viewer properties such as `enableDownload`, `enablePrint`, and `resourceUrl`, see the [PDF Viewer API reference](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html).

## Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. Then, the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer control will be rendered in the default web browser.

![ASP.NET Core PDF Viewer Control](Core_Images/pdfviewer-control.png)

> [View sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/tree/main/PDFViewer/ASP.NET%20Core%20Tag%20Helper%20Examples%20-%20Standalone%20PDF%20Viewer)

## Video tutorial

To get started quickly with the ASP.NET Core PDF Viewer, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=cfWATpUjNgo&t=1s" %}

## See also

* [Getting started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core using Server backed](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started-with-server-backed)