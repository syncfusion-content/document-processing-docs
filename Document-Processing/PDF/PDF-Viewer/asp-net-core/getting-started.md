---
layout: post
title: Getting Started with Standalone ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to integrate the standalone ASP.NET Core PDF Viewer control in your web application. View, print, search, annotate, and fill PDF forms with client-side rendering.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Getting Started with Standalone ASP.NET Core PDF Viewer

The [ASP.NET Core PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) control is a standalone solution for viewing, printing, and interacting with PDF files in web applications. Client-side rendering eliminates server processing overhead, enabling responsive performance for most use cases. The control provides a comprehensive reading experience with zooming, scrolling, text search, text selection, and text copying. Built-in support for thumbnails, bookmarks, hyperlinks, and tables of contents ensures seamless navigation within and across PDF documents. Users can also annotate documents and fill form fields directly within the viewer.

## Prerequisites

Before starting the setup, ensure the following requirements are met:

- **System Requirements**: Review the [system requirements for ASP.NET Core controls](https://help.syncfusion.com/document-processing/system-requirements)
- **License**: For production applications, a valid Syncfusion license key must be registered as described in the [ASP.NET Core licensing documentation](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/overview)

## Integrate PDF Viewer into an ASP.NET Core application

### Step 1: Create a new ASP.NET Core project

1. Start Visual Studio and select **Create a new project**.
2. In the **Create a new project** dialog, select **ASP.NET Core Web App**.
![Create new ASP.NET Core Web App project](Core_Images/Select-aspnet-core-project.png)
3. In the **Configure your new project** dialog, enter the project name and select **Next**.
![Set project name and location](Core_Images/Set-project-name.png)
4. In the **Additional information** dialog, select a .NET LTS version (for example, **.NET 6.0 (Long-term Support)**) and then select **Create**.
![Select target framework](Core_Images/additional-info.png)

## ASP.NET Core PDF Viewer NuGet package installation

### Step 2: Install required NuGet packages

To add Syncfusion ASP.NET Core controls to the application, use the NuGet package manager. Open the Package Manager Console or use the NuGet Package Manager UI in Visual Studio and install the [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/) package.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.AspNet.Core -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Tag Helper

### Step 3: Import the Tag Helper

Open `~/Pages/_ViewImports.cshtml` and add the Syncfusion EJ2 Tag Helper import. This makes all Syncfusion tag helpers available throughout the application.

{% tabs %}
{% highlight c# tabtitle="~/_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.EJ2

{% endhighlight %}
{% endtabs %}

## Add style sheet

### Step 4: Add component styles (using CDN)

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

N> Check out the [Themes topic](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) to learn different ways ([CDN](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#node-package-manager-npm), and [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator)) to reference styles in an ASP.NET Core application and achieve the expected appearance for Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core controls.

## Add script reference

### Step 5: Add component scripts

Add the Syncfusion JavaScript library using the CDN inside the `<head>` of `~/Pages/Shared/_Layout.cshtml`. This script provides the client-side functionality for all Syncfusion components.

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET Core controls scripts -->
    <script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Using local resources

### Step 5b: Add local scripts and styles (alternative to CDN)

For offline deployment or when CDN access is restricted, you can use local resources. To load the PDF Viewer with local resources, follow these steps:

**Step 1:** Place the `ej2.min.js` script and the required theme CSS files in the `wwwroot` folder of the ASP.NET Core application.

**Step 2:** Reference the local script and style files in the `<head>` of `_Layout.cshtml`, replacing CDN links with local file paths.

By following these steps, the PDF Viewer will load the required resources locally. See the code snippet below for reference.

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

### Step 6: Register the script manager

Open the `~/Pages/Shared/_Layout.cshtml` page and register the script manager at the end of the `<body>` tag. The script manager initializes Syncfusion components and manages their lifecycle.

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

### Step 7: Add the PDF Viewer component

Add the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer Tag Helper in `~/Pages/Index.cshtml`. The `documentPath` property specifies the PDF document to load.

**Example: Using CDN resources with a remote PDF URL**

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

**Code explanation:**

- **ejs-pdfviewer**: The tag helper that renders the PDF Viewer control with the id `pdfviewer`
- **documentPath**: Specifies the PDF document to load. Accepts either:
  - An absolute URL (HTTP/HTTPS) pointing to a remote PDF
  - A relative path to a local PDF file in the `wwwroot` folder

### Configure PDF Viewer for local resources

To use the `resourceUrl` and `documentPath` locally with the PDF Viewer, follow these steps:

**Step 1:** Ensure the application includes an `ej2-pdfviewer-lib` folder under `wwwroot` (or a publicly accessible static path). This folder must contain:
- `pdfium.js` and `pdfium.wasm` files
- The PDF file(s) to display
- Keep these in the same static content area as `ej2.min.js` and related CSS files

**Step 2:** Assign local paths to the `documentPath` and `resourceUrl` properties:
- `documentPath`: Path to the PDF file relative to the application root
- `resourceUrl`: Path to the `ej2-pdfviewer-lib` directory containing rendering resources

By following these steps, the standalone PDF Viewer will load all resources locally. See the code snippet below for reference.

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

For a complete example, [view the GitHub sample for loading PDF Viewer with local resources](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally).

### Step 8: Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the application. The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer will render in the default web browser with client-side rendering enabled.

![ASP.NET Core PDF Viewer Control](Core_Images/pdfviewer-control.png)

N> [View ASP.NET Core standalone PDF Viewer sample on GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-Getting-Started-Examples/tree/main/PDFViewer/ASP.NET%20Core%20Tag%20Helper%20Examples%20-%20Standalone%20PDF%20Viewer)

## See also

* [Getting started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core using Server backed](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started-with-server-backed)