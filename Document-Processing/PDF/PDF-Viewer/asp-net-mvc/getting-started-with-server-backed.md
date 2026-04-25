---
layout: post
title: Getting started with the ASP.NET MVC PDF Viewer | Syncfusion
description: Get started with the server‑backed Syncfusion ASP.NET MVC PDF Viewer. Install NuGet packages, add scripts/styles, configure the controller, and load a PDF.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Getting started with the ASP.NET MVC PDF Viewer control

This guide shows how to integrate the [ASP.NET MVC PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) into an ASP.NET MVC application using Visual Studio. A fully functional example project is available in the [GitHub repository](https://github.com/SyncfusionExamples/ASP-NET-MVC-Getting-Started-Examples/tree/main/PDFViewer/ASP.NET%20MVC%20Razor%20Examples).

## Prerequisites

- [System requirements for ASP.NET MVC controls](https://help.syncfusion.com/document-processing/system-requirements)

- [Licensing](https://help.syncfusion.com/common/essential-studio/licensing/license-key)

## Create a new ASP.NET MVC App in Visual Studio

- [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started)

## Install NuGet packages

Install the following NuGet packages to add the PDF Viewer to the ASP.NET MVC application.

* [Syncfusion.EJ2.PdfViewer.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.EJ2.PdfViewer.AspNet.Mvc5/)
* [Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5)

## Add namespace

Add **Syncfusion.EJ2** namespace reference in `Web.config` under `Views` folder.

```
<namespaces>
    <add namespace="Syncfusion.EJ2"/>
</namespaces>
```

## Add the style sheet

Reference a theme from the CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` as follows:

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET MVC controls styles -->
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
</head>

{% endhighlight %}
{% endtabs %}

N> Check out the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) to learn different ways (CDN, NPM package, and [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)) to reference styles in an ASP.NET MVC application and ensure consistent appearance for Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls.

## Add the script reference

Add the required scripts from the CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` as follows:

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET MVC controls scripts -->
    <script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Register the Syncfusion<sup style="font-size:70%">&reg;</sup> script manager

Open `~/Views/Shared/_Layout.cshtml` and register the script manager in the ASP.NET MVC application as follows:

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<body>
...
    <!-- Syncfusion ASP.NET MVC Script Manager -->
    @Html.EJS().ScriptManager()
</body>

{% endhighlight %}
{% endtabs %}

N> Add the script manager `EJS().ScriptManager()` at the **end of `<body>`**.

## Add the ASP.NET MVC PDF Viewer control

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer control in `~/Views/Home/Index.cshtml`. Load a PDF by setting the `DocumentPath` property to a file name or URL, as shown below.

{% tabs %}
{% highlight c# tabtitle="~/Index.cshtml" %}

@{
    ViewBag.Title = "Home Page";
}

<div>
    <div style="height:500px;width:100%;">
        <!-- DocumentPath specifies the PDF document to load -->
        <!-- ServiceUrl specifies the controller endpoint that the viewer uses to communicate with the server -->
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
</div>

{% endhighlight %}
{% endtabs %}

## Implement server-side handlers

Add the server side code to `HomeController.cs` in the `Controllers` folder. The class should contain handler methods that process all PDF operations on the server, such as loading documents, rendering pages, handling annotations, and managing downloads.

An implementation example can be found in [Github](https://github.com/SyncfusionExamples/ASP-NET-MVC-Getting-Started-Examples/blob/main/PDFViewer/ASP.NET%20MVC%20Razor%20Examples/Controllers/HomeController.cs).

## Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer will render in the default web browser.

![ASP.NET MVC PDF Viewer Control](AspNetMVC_Images/pdfviewer-control.png)

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

```html
@{
    string serviceUrl = VirtualPathUtility.ToAbsolute("~/Home/");
}
<script>
    function load() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.serviceUrl = "@serviceUrl";
        pdfViewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
        pdfViewer.dataBind();
    }
</script>
```

## See also

- [Getting started with Syncfusion ASP.NET MVC Standalone PDF Viewer](./getting-started)
- [PDF Viewer Form Designer](./forms/overview#form-designer)
- [Organize PDF pages](./organize-pages/overview)