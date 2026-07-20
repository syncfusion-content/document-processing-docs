---
layout: post
title: Getting Started with ASP.NET MVC standalone PDF Viewer | Syncfusion
description: Get Started with the standalone Syncfusion ASP.NET MVC PDF Viewer. Add scripts/styles, configure the view, and load a PDF using documentPath and resourceUrl.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Getting Started with ASP.NET MVC Standalone PDF Viewer Control

This section explains how to integrate the [ASP.NET MVC PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) into an ASP.NET MVC application using Visual Studio.

## Prerequisites

- [System requirements for ASP.NET MVC controls](https://help.syncfusion.com/document-processing/system-requirements)

- [Syncfusion<sup style="font-size:70%">&reg;</sup> Licensing](https://help.syncfusion.com/common/essential-studio/licensing/license-key)

## Create a new ASP.NET MVC App in Visual Studio

- [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started)

## Install Syncfusion ASP.NET MVC Package in the application 

To add the .NET PDF Viewer control, the following NuGet package needs to be installed in your ASP.NET MVC application.

* [Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5)

Or run this command in Package Manager Console:

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.MVC5 -Version {{ site.ej2version }}

{% endhighlight %}
{% endtabs %}

> Make sure that the `Microsoft.AspNet.Mvc` package and its dependency packages are updated to the latest version.

## Add namespace

Add **Syncfusion.EJ2** namespace reference in `Web.config` under `Views` folder.

{% tabs %}
{% highlight c# tabtitle="web.config" %}
<namespaces>
    <add namespace="Syncfusion.EJ2"/>
</namespaces>
{% endhighlight %}
{% endtabs %}

## Add style sheet and script reference

The theme and required scripts are referenced by using a CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` as follows:

{% tabs %}
{% highlight c# tabtitle="_Layout.cshtml" %}

<!-- Syncfusion EJ2 base styles and Fluent theme -->
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
<!-- Syncfusion EJ2 base scripts (includes the PDF Viewer module) -->
<script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>

{% endhighlight %}
{% endtabs %}

N> To learn other ways to load themes or scripts (such as [NPM packages](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#node-package-manager-npm) or [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)), see the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) and [Adding Script Reference](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references) documentation. To configure PDF Viewer with locally available script and style resources, follow these [instructions](./how-to/local-resources#configuring-pdf-viewer-with-local-styles-and-scripts).

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> Script Manager

Open `~/Views/Shared/_Layout.cshtml` page and register the script manager at the end of the `<body>` element in the ASP.NET MVC application as follows.

{% tabs %}
{% highlight c# tabtitle="_Layout.cshtml" %}

<!-- Syncfusion ASP.NET MVC Script Manager -->
@Html.EJS().ScriptManager()

{% endhighlight %}
{% endtabs %}

## Add ASP.NET MVC PDF Viewer control

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer control to `~/Views/Home/Index.cshtml`.

{% tabs %}
{% highlight c# tabtitle="Index.cshtml" %}

<div>
    <div style="height:500px;width:100%;">
        <!-- DocumentPath specifies the PDF document to load -->
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
    </div>
</div>

{% endhighlight %}
{% endtabs %}

N> The `DocumentPath` property specifies the PDF document to load in the viewer. The `DocumentPath` value can be a remote HTTPS URL (as shown above) or a server-relative path. For locally available PDF documents, scripts, and styles, configure the [`ResourceUrl`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) and `DocumentPath` properties together by following these [instructions](./how-to/local-resources#configuring-pdf-viewer-for-locally-available-pdf-documents-and-local-resources).

## Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer will render in the default web browser.

![ASP.NET MVC PDF Viewer Control](AspNetMVC_Images/pdfviewer-control.png)

N> If the viewer area is blank or the PDF fails to load, see the [PDF Viewer troubleshooting guide](./troubleshooting/document-loading-issues) for guidance on common issues (404 on the document, CORS, license warnings, and missing scripts).

> A fully functional example project is available in the [GitHub repository](https://github.com/SyncfusionExamples/ASP-NET-MVC-Getting-Started-Examples/tree/main/PDFViewer/ASP.NET%20MVC%20Razor%20Examples).

## See also

- [Getting Started with Server-Backed ASP.NET MVC PDF Viewer](./getting-started-with-server-backed)
- [PDF Viewer Form Designer](./forms/overview#form-designer)
- [Organize PDF pages](./organize-pages/overview)