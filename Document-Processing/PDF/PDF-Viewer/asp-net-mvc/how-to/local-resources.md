---
layout: post
title: Using local resources in ASP.NET MVC PDF Viewer control | Syncfusion
description: Learn how to configure the ASP.NET MVC PDF Viewer control with local scripts, styles, and resources for offline deployment and restricted CDN access.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Using local resources in ASP.NET MVC PDF Viewer

## Configuring PDF Viewer with local styles and scripts

To use local resources with the PDF Viewer, follow these steps:

**Step 1:** Place the `ej2.min.js` script and its related styles in an `ej2` directory under the `Content` folder of the ASP.NET MVC application.

**Step 2:** Add the local script and style references in the `<head>` section of `_Layout.cshtml`. Ensure these references point to the local files instead of the CDN links.

The following example shows how to reference local resources:

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET MVC controls styles -->
    <link rel="stylesheet" href="~/Content/ej2/material.min.css" />
    ...
    <!-- Syncfusion ASP.NET MVC controls scripts -->
    <script src="~/Content/ej2/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Configuring PDF Viewer for locally available PDF documents and local resources

To load resources locally, configure the `resourceUrl` and `documentPath` properties as follows:

**Step 1:** Ensure that the application includes the `ej2-pdfviewer-lib` folder under `Content`. This folder must contain `pdfium.js`, `pdfium.wasm`, and the PDF file to display.

**Step 2:** Assign local paths to the `documentPath` and `resourceUrl` properties in the PDF Viewer setup. The `documentPath` points to the PDF file, and the `resourceUrl` points to the folder that contains the supporting resources.

The following example shows how to reference local resources:

{% tabs %}
{% highlight c# tabtitle="~/Index.cshtml" %}

@{
    ViewBag.Title = "Home Page";
    var originUrl = $"{Request.Url.Scheme}://{Request.Url.Authority}";
    var document = originUrl + "/Content/pdfsuccinctly.pdf";
    var resourceUrl = originUrl + "/Content/ej2-pdfviewer-lib";
}

<div style="height: 900px;width:100%;">
    @Html.EJS().PdfViewer("pdfviewer").ResourceUrl(@resourceUrl).DocumentPath(@document).Render()
</div>

{% endhighlight %}
{% endtabs %}

View the sample in GitHub to [load PDF Viewer with local resources](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally/PdfViewer_MVC)