---
layout: post
title: Server-Backed ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to integrate the server-backed PDF Viewer control in an ASP.NET Core application. View and annotate with server-side rendering.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Getting Started with Server-Backed ASP.NET Core PDF Viewer

This article shows how to add the [Syncfusion® Server-backed ASP.NET Core PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) to a ASP.NET Core Web application using Visual Studio or Visual Studio Code. A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/tree/main/PDFViewer/ASP.NET%20Core%20Tag%20Helper%20Examples).

## Prerequisites

- **System Requirements**: [System requirements for ASP.NET Core controls](https://help.syncfusion.com/document-processing/system-requirements)
- **License**: [ASP.NET Core licensing documentation](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/overview)

{% tabcontents %}

{% tabcontent Visual Studio %}

## Create a new ASP.NET Core Web App in Visual Studio

Create an ASP.NET Core Web App using Visual Studio 2022 by the following the instructions [here](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=visualstudio).

## ASP.NET Core PDF Viewer NuGet package installation

To add the ASP.NET Core PDF Viewer component, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), then search for and install:

* [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/)
* [Syncfusion.EJ2.PdfViewer.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.PdfViewer.AspNet.Core/)

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
* Run the following commands to install the [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/) and [Syncfusion.EJ2.PdfViewer.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.PdfViewer.AspNet.Core/) NuGet packages.

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.EJ2.AspNet.Core -v {{ site.releaseversion }}
dotnet add package Syncfusion.EJ2.PdfViewer.AspNet.Core -v {{ site.releaseversion }}
dotnet restore

{% endhighlight %}

{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Tag Helper

Open `~/Pages/_ViewImports.cshtml` and add the Syncfusion EJ2 Tag Helper import. This makes all Syncfusion tag helpers available throughout the application.

{% tabs %}
{% highlight c# tabtitle="~/_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.EJ2

{% endhighlight %}
{% endtabs %}

## Add style sheet

Reference the Syncfusion theme using the CDN inside the `<head>` of `~/Pages/Shared/_Layout.cshtml`. This stylesheet provides styling for all Syncfusion components including the PDF Viewer.

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET Core controls styles -->
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
</head>

{% endhighlight %}
{% endtabs %}

N> See the [Themes topic](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) for different ways to reference styles in an ASP.NET Core application, including [CDN](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#node-package-manager-npm), and [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator).

## Add script reference

Add the Syncfusion JavaScript library using the CDN inside the `<head>` of `~/Pages/Shared/_Layout.cshtml`. This script provides the core functionality for all Syncfusion components.

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET Core controls scripts -->
    <script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>
</head>

To use locally availabe script and style resources, follow these [instructions](./how-to/local-resources#configuring-pdf-viewer-with-local-styles-and-scripts)

{% endhighlight %}
{% endtabs %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Script Manager

Open `~/Pages/Shared/_Layout.cshtml` and register the script manager at the end of the `<body>` tag. The script manager initializes Syncfusion components and manages their life cycle.

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<body>
    ....
    ....
    <!-- Syncfusion ASP.NET Core Script Manager -->
    <ejs-scripts></ejs-scripts>
</body>

{% endhighlight %}
{% endtabs %}

N> Add the script manager `<ejs-scripts>` at the end of the `<body>`.

## Add ASP.NET Core PDF Viewer control

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer tag helper in `~/Pages/Index.cshtml`. The `serviceUrl` property is essential for server-backed mode, as it specifies the server endpoint that handles all PDF processing operations.

{% tabs %}
{% highlight c# tabtitle="~/Index.cshtml" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" serviceUrl="/Index" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Implement server-side handlers

Add the server side code to `Index.cshtml.cs` in the `Pages` folder. The class should contain handler methods that process all PDF operations on the server, such as loading documents, rendering pages, handling annotations, and managing downloads.

An implementation example can be found [here](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/blob/main/PDFViewer/ASP.NET%20Core%20Tag%20Helper%20Examples/Pages/Index.cshtml.cs).

## Run the application

Run the app to display the PDF in the Syncfusion&reg; ASP.NET Core PDF Viewer in the browser.

![ASP.NET Core PDF Viewer control in action](Core_Images/pdfviewer-control.png)

## Deployment notes

- Unlike the standalone PDF Viewer which performs client-side rendering, the server-backed PDF Viewer processes and renders PDFs entirely on the server. As a result, the following files are **not required** and should be omitted during deployment:
  - `pdfium.js`
  - `pdfium.wasm`

- For hosting the web service on Linux, include [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)

- For AWS environments, use the following packages:

  | **Amazon Web Services (AWS)** |**NuGet package name** |
  | --- | --- |
  | AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
  | AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|

- The `serviceUrl` can be updated dynamically at runtime. After updating the value, invoke `pdfViewer.dataBind()` to apply the change and then load the document. This feature is supported in version 23.1.36 or later.

```javascript
function load() {
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    pdfViewer.serviceUrl = "/Index";
    pdfViewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
    pdfViewer.dataBind();
}
```

## See also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started)