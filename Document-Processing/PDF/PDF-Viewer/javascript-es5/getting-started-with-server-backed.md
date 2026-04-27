---
layout: post
title: Server-backed JavaScript PDF Viewer | Syncfusion
description: Learn how to set up and use the Syncfusion JavaScript PDF Viewer in server-backed mode using CDN resources, injecting modules and web service configuration.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with JavaScript PDF Viewer (server-backed)

This guide explains how to create the PDF Viewer component and configure its features in JavaScript (global script) using CDN-hosted resources in **server-backed mode**.

> Ensure that the same version is used for all script and style references to avoid compatibility issues.

## Setup the development environment

This example uses a simple HTML-based setup with CDN links for Syncfusion components.

### Create application folder

Create an app folder `my-app` for the Essential JS 2 JavaScript components.

### Add style and script references

The Essential JS 2 component's global scripts and styles are hosted at the following CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{Version}/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-base/styles/material.css`](https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-base/styles/material.css)

Create an HTML page (index.html) in `my-app` location and add the CDN link references.

{% tabs %}
{% highlight html tabtitle="index.html" hl_lines="8 9 10 11 12 13 14 15 16 17 19" %}

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Typescript PDF Viewer Control">
    <meta name="author" content="Syncfusion">
    <link href="index.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-base/styles/material.css" rel="stylesheet">    
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-buttons/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-popups/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-navigations/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-dropdowns/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-lists/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-inputs/styles/material.css" rel="stylesheet">    
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-splitbuttons/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-notifications/styles/material.css" rel="stylesheet">
    <link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-pdfviewer/styles/material.css" rel="stylesheet">
    <!-- Essential JS 2 PDF Viewer's script --> 
    <script src="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2.min.js" type="text/javascript"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Adding the PDF Viewer component

Add the `Div` element and initiate the **PDF Viewer** component in the index.html by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<body>
    
    <div id="container">
        <div id="PdfViewer" style="height:500px;width:100%;"></div>        
    </div>

    <script>
        // Initialize PDF Viewer component
        var pdfviewer = new ej.pdfviewer.PdfViewer({
            documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
            serviceUrl:'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
        });
        // PDF Viewer control rendering starts
        pdfviewer.appendTo('#PdfViewer');
    </script>
</body>

{% endhighlight %}
{% endtabs %}

To configure PDF Viewer with local resources for script and style referernces, and the `documentPath` property, refer to the instructions [here](./how-to/use-local-script-and-style-references).

For creating a new PDF Viewer serviceUrl, follow the steps provided in the [link](./how-to/create-pdfviewer-service) or to locally host an already available web service, follow these [instructions](#run-a-locally-hosted-pdf-viewer-web-service).

## Run the application

Run the `index.html` in a web browser using a local web server. The PDF document will be rendered in the browser.

```bash
npx serve .
```

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-getting-started-cs1" %}

## Deployment notes

- The PDF Viewer supports dynamically changing the [serviceURL](https://ej2.syncfusion.com/documentation/api/pdfviewer#serviceurl). After changing `serviceUrl` at runtime, call `pdfViewer.dataBind()` to apply the new value. This behavior applies to versions after 23.1.36.

   ```js
   document.getElementById('load').addEventListener('click', function () {
      pdfViewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
      pdfViewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
      pdfViewer.dataBind();
      pdfViewer.load(pdfViewer.documentPath, null);
   });
   ```

- The demo Web API hosted at https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer is provided for evaluation only. For production, host a web service with appropriate server configuration. See the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server) for reference. Standalone mode is recommended for client-side rendering.

- The server-backed PDF Viewer does not require `pdfium.js` and `pdfium.wasm` files. Those files are used by the standalone viewer for client-side rendering; server-backed setups render PDFs on the server and therefore do not need to include them in deployment.

- For hosting the web service on the Linux platform, ensure to include the [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1).

- For AWS environments, utilize the following packages:

  | **Amazon Web Services (AWS)** |**NuGet package name** |
  | --- | --- |
  | AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
  | AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|

## Run a locally hosted PDF Viewer web service

1. Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices).
2. Navigate to the `ASP.NET Core` folder and open it in the command prompt.
3. Navigate to the appropriate subfolder based on your .NET version:

   - .NET 6.0 → `PdfViewerWebService_6.0`
   - .NET 8.0 → `PdfViewerWebService_8.0`

4. Use the following command to restore the required packages.

   ```
   dotnet restore
   ```

5. Use the following command to run the web service.

   ```
   dotnet run
   ```

6. The PDF Viewer server instance runs at `https://localhost:7255`. Navigate to `https://localhost:7255/pdfviewer`, which returns the default GET response method. Bind this link to the `serviceUrl` property of the PDF Viewer as shown below.

   ```javascript
   var pdfviewer = new ej.pdfviewer.PdfViewer({
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: 'https://localhost:7255/pdfviewer'
   });
   ```

## See also

- [Getting started with Standalone JavaScript PDF Viewer](./getting-started)
- [Feature modules](./feature-module)