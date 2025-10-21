---
layout: post
title: Getting started with the ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to get started with the ASP.NET Core PDF Viewer control. View, print, search, select text, annotate, and fill forms in PDF files.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Getting started with the ASP.NET Core standalone PDF Viewer control

The [ASP.NET Core PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) control enables viewing and printing PDF files in web applications. It provides a rich reading experience with zooming, scrolling, text search, text selection, and text copy. Thumbnails, bookmarks, hyperlinks, and a table of contents simplify navigation within and across PDF documents.

This guide explains how to integrate the ASP.NET Core PDF Viewer control into an ASP.NET Core application using Visual Studio.

## Prerequisites

[System requirements for ASP.NET Core controls](https://help.syncfusion.com/document-processing/system-requirements)

## Integrate PDF Viewer into an ASP.NET Core application

1. Start Visual Studio and select **Create a new project**.
2. In the **Create a new project** dialog, select **ASP.NET Core Web App**.
![select-aspnet-core-web-app](Core_Images/Select-aspnet-core-project.png)
3. In the **Configure your new project** dialog, enter the project name and select **Next**.
![Set-project-name](Core_Images/Set-project-name.png)
4. In the **Additional information** dialog, select a .NET LTS version (for example, **.NET 6.0 (Long-term Support)**) and then select **Create**.
![Set-framework](Core_Images/additional-info.png)

## ASP.NET Core PDF Viewer NuGet package installation

To add the ASP.NET Core PDF Viewer control, install the following NuGet package in the ASP.NET Core application:

* [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/)

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Tag Helper

Open `~/Pages/_ViewImports.cshtml` and import the `Syncfusion.EJ2` Tag Helper.

{% tabs %}
{% highlight c# tabtitle="~/_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.EJ2

{% endhighlight %}
{% endtabs %}

## Add style sheet

Reference a theme using the CDN inside the `<head>` of `~/Pages/Shared/_Layout.cshtml` as shown:

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET Core controls styles -->
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
</head>

{% endhighlight %}
{% endtabs %}

N> Check out the [Themes topic](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) to learn different ways ([CDN](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#node-package-manager-npm), and [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator)) to reference styles in an ASP.NET Core application and achieve the expected appearance for Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core controls.

## Add script reference

Add the required scripts using the CDN inside the `<head>` of `~/Pages/Shared/_Layout.cshtml` as follows:

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET Core controls scripts -->
    <script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

### Steps to load PDF Viewer with local script and style

To use local resources with the PDF Viewer, follow these steps:

**Step 1:** Place the `ej2.min.js` script and the required theme CSS files in the `wwwroot` folder of the ASP.NET Core application.

**Step 2:** Reference the local script and style files in the `<head>` of `_Layout.cshtml`, replacing CDN links with local paths.

By following these steps, the PDF Viewer will load the required script and style locally. See the code snippet below for reference.

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET Core controls styles -->
    <link rel="stylesheet" href="~/material.min.css" />
    <!-- Syncfusion ASP.NET Core controls scripts -->
    <script src="~/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Script Manager

Open the `~/Pages/Shared/_Layout.cshtml` page and register the script manager in the ASP.NET Core application as follows:

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

N> Add the script manager `<ejs-scripts>` at the end of the `<body>` element.

## Add ASP.NET Core PDF Viewer control

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer Tag Helper in `~/Pages/Index.cshtml`. Load a PDF by assigning the file path or URL to the `documentPath` property.

{% tabs %}
{% highlight c# tabtitle="~/Index.cshtml" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

In the above code:

- **ejs-pdfviewer** renders the PDF Viewer control with the id set to `pdfviewer`.
- **documentPath** specifies the PDF to load and accepts either an absolute URL or a relative path available to the application.

### How to configure PDF Viewer to use local resources

To use the `resourceUrl` and `documentPath` locally with the PDF Viewer, follow these steps:

**Step 1:** Ensure the application includes an `ej2-pdfviewer-lib` folder under `wwwroot` (or a publicly accessible static path). This folder must contain the `pdfium.js` and `pdfium.wasm` files, along with the PDF file to display. Keep these in the same static content area as `ej2.min.js` and related styles.

**Step 2:** Assign local paths to the `documentPath` and `resourceUrl` properties. Set `documentPath` to the PDF file and `resourceUrl` to the directory that contains the PDF Viewer’s supporting resources (`ej2-pdfviewer-lib`).

By following these steps, the PDF Viewer will load the required resources locally. See the code snippet below for reference.

{% tabs %}
{% highlight c# tabtitle="~/Index.cshtml" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
    var originUrl = $"{Request.Scheme}://{Request.Host}{Request.PathBase}";
    var document = originUrl + "/PDF_Succinctly.pdf";
    var resourceUrl = originUrl + "/ej2-pdfviewer-lib";
}

<div>
    <ejs-pdfviewer id="pdfviewer" style="height:600px" documentPath=@document resourceUrl=@resourceUrl>
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

View the sample in GitHub to [load PDF Viewer with local resources](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally)

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. Then, the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer control will be rendered in the default web browser.

![ASP.NET Core PDF Viewer Control](Core_Images/pdfviewer-control.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/tree/main/PDFViewer/ASP.NET%20Core%20Tag%20Helper%20Examples%20-%20Standalone%20PDF%20Viewer).

## See also

* [Getting started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core using Server backend](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started-with-server-backed)