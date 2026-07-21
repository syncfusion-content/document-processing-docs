---
layout: post
title: Getting Started with the ASP.NET MVC PDF Viewer | Syncfusion
description: Get Started with the server‑backed Syncfusion ASP.NET MVC PDF Viewer. Install NuGet packages, add scripts/styles, configure the controller, and load a PDF.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Getting Started with the ASP.NET MVC PDF Viewer control

This section explains how to integrate the [ASP.NET MVC PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) into an ASP.NET MVC application using Visual Studio.

N> Starting with the 2026 Volume 2 release (July 6, 2026), no new features will be added to the Server PDF Viewer, as almost all of the PDF Viewer functionalities are now available in the Standalone PDF Viewer. If you are currently using the server-backed PDF Viewer, please refer to the [migration documentation](./server-to-standalone) to transition to the Standalone PDF Viewer.

## Prerequisites

- [System requirements for ASP.NET MVC controls](https://help.syncfusion.com/document-processing/system-requirements)

- [Syncfusion<sup style="font-size:70%">&reg;</sup> Licensing](https://help.syncfusion.com/common/essential-studio/licensing/license-key)

## Create a new ASP.NET MVC App in Visual Studio

- [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started)

## Install Syncfusion ASP.NET MVC Package in the application 

Install the following NuGet packages to add the PDF Viewer to the ASP.NET MVC application.

* [Syncfusion.EJ2.PdfViewer.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.EJ2.PdfViewer.AspNet.Mvc5/)
* [Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5)

Or run this command in Package Manager Console:

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.PdfViewer.AspNet.Mvc5 -Version {{ site.ej2version }}
Install-Package Syncfusion.EJ2.MVC5 -Version {{ site.ej2version }}

{% endhighlight %}
{% endtabs %}

> Make sure that the `Microsoft.AspNet.Mvc` package and its dependency packages are updated to the latest version.

## Add required namespaces

Add **Syncfusion.EJ2** namespace reference in `Web.config` under `Views` folder.

{% tabs %}
{% highlight C# tabtitle="web.config" %}
<namespaces>
    <add namespace="Syncfusion.EJ2"/>
</namespaces>
{% endhighlight %}
{% endtabs %}

## Add the style sheet and script reference

Reference a theme and the required scripts from the CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` as follows:

{% tabs %}
{% highlight C# tabtitle="_Layout.cshtml" %}

<!-- Syncfusion ASP.NET MVC controls styles -->
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
<!-- Syncfusion ASP.NET MVC controls scripts -->
<script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>

{% endhighlight %}
{% endtabs %}

N> To learn other ways to load themes or scripts (such as [NPM packages](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#node-package-manager-npm) or [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)), see the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) and [Adding Script Reference](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references) documentation. To configure PDF Viewer with locally available script and style resources, follow these [instructions](./how-to/local-resources#configuring-pdf-viewer-with-local-styles-and-scripts).

## Register the Syncfusion<sup style="font-size:70%">&reg;</sup> script manager

Register the script manager at the end of the `<body>` element in the `~/Views/Shared/_Layout.cshtml` file.

{% tabs %}
{% highlight C# tabtitle="_Layout.cshtml" %}

<!-- Syncfusion ASP.NET MVC Script Manager -->
@Html.EJS().ScriptManager()

{% endhighlight %}
{% endtabs %}

## Add the ASP.NET MVC PDF Viewer control

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer control in `~/Views/Home/Index.cshtml`. Load a PDF by setting the `DocumentPath` property to a file name or URL, as shown below.

{% tabs %}
{% highlight C# tabtitle="Index.cshtml" %}

<div>
    <div style="height:500px;width:100%;">
        <!-- DocumentPath specifies the PDF document to load -->
        <!-- ServiceUrl specifies the controller action that the viewer uses to communicate with the server -->
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

> A fully functional example project is available in the [GitHub repository](https://github.com/SyncfusionExamples/ASP-NET-MVC-Getting-Started-Examples/tree/main/PDFViewer/ASP.NET%20MVC%20Razor%20Examples).

## Deployment notes

-Unlike the standalone PDF Viewer which performs client-side rendering, the server-backed PDF Viewer processes and renders PDFs entirely on the server. As a result, the following files are **not required** and should be omitted from any deployment bundle:

  - `pdfium.js`
  - `pdfium.wasm`

- For hosting the web service on Linux, include [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)

- For AWS environments, use the following packages:

  | **Amazon Web Services (AWS)** |**NuGet package name** |
  | --- | --- |
  | AWS Lambda|[SkiaSharp.NativeAssets.Linux 3.119.1](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
  | AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies 3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|

- The `serviceUrl` can be updated dynamically at runtime. After updating the value, invoke `pdfViewer.dataBind()` to apply the change and then load the document. This feature is supported in version 23.1.36 or later.

```html
@{
    string serviceUrl = VirtualPathUtility.ToAbsolute("~/Home/");
}
<script>
    function load() {
        // ej2_instances is the EJ2 framework's array of component instances attached to the rendered element.
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.serviceUrl = "@serviceUrl";
        pdfViewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
        pdfViewer.dataBind();
    }
</script>
```

## Troubleshooting

- **Blank viewer / no requests fired:** verify `ServiceUrl` points to a reachable controller action and that the script manager (`@Html.EJS().ScriptManager()`) is registered at the end of `<body>`.
- **404 on `ServiceUrl` requests:** confirm the route is registered (default attribute routing applies) and the controller returns the `PdfViewerProcessor` response.
- **Missing native assets on Linux:** confirm the `SkiaSharp.NativeAssets.Linux` package (3.119.1) is deployed alongside the app; check the host for `libskiasharp.so` load errors.
- **License warnings in the browser console:** ensure `SyncfusionLicenseProvider.RegisterLicense` is called once at application start.

## See also

- [Getting Started with Syncfusion ASP.NET MVC Standalone PDF Viewer](./getting-started)
- [PDF Viewer Form Designer](./forms/overview#form-designer)
- [Organize PDF pages](./organize-pages/overview)