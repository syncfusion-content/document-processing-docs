---
layout: post
title: Using local resources in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn how to configure the ASP.NET Core PDF Viewer control with local scripts, styles, and resources for offline deployment and restricted CDN access.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Using local resources in ASP.NET Core PDF Viewer

## Configuring PDF Viewer with local styles and scripts

For offline deployment or when CDN access is restricted, you can use local resources required for PDF Viewer. To load the PDF Viewer with local resources, follow these steps:

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

## Configuring PDF Viewer for locally available PDF documents and local resources

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