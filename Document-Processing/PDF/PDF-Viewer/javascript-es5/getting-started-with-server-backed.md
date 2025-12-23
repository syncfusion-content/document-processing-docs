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

This guide explains how to create the PDF Viewer component and configure its features in JavaScript (global script) using CDN-hosted resources in server-backed mode.

> Ensure that the same version is used for all script and style references to avoid compatibility issues.

## Set up the application

1. Create an app folder `my_app` for the Essential JS 2 JavaScript components.
2. The Essential JS 2 component's global scripts and styles are already hosted in the following CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{Version}/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/26.2.11/ej2-base/styles/material.css`](https://cdn.syncfusion.com/ej2/26.2.11/ej2-base/styles/material.css)

3. Create an HTML page (`index.html`) in the `my_app` location, add the CDN link references, add the `div` element, and initialize the Essential JS 2 PDF Viewer component by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> We have provided the support to dynamically change the [serviceURL](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl). So, after changing the `serviceURL` dynamically, you need invoke the `pdfViewer.dataBind()` method to update the `serviceURL` quickly. This will effectively change the `serviceURL` dynamically. Ensure that this step is performed after version 23.1.36.
document.getElementById('load').addEventListener('click', function () {
   pdfViewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
   pdfViewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
   pdfViewer.dataBind();
   pdfViewer.load(pdfViewer.documentPath, null);
});

N> The Web API hosted link https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer utilized in the PDF viewer's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server) for hosting your own web service and use for the serviceUrl property. **We strongly recommend using the standalone mode.**

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-getting-started-cs1" %}

## Run the application

Open the `index.html` file in a web browser to render the Essential JS 2 PDF Viewer component.

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/how-to/create-pdfviewer-service).

## Module injection

To enable additional features, inject the required modules. The following modules extend the PDF Viewer's functionality:

* `LinkAnnotation`: Enables hyperlink navigation.
* `BookmarkView`: Displays and navigates document bookmarks.
* `Magnification`: Provides zoom in/out operations.
* `Navigation`: Enables page navigation.
* `TextSelection`: Enables text selection.
* `ThumbnailView`: Displays page thumbnails for navigation.
* `Toolbar`: Enables the built-in toolbar UI.
* `Print`: Enables printing.
* `Annotation`: Enables annotation features.
* `TextSearch`: Enables text search.
* `FormFields`: Enables form field support.
* `FormDesigner`: Enables designing and editing of form fields.

## Run the PDF Viewer web service

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

6. The PDF Viewer server instance runs at `https://localhost:5001`. Navigate to `https://localhost:5001/pdfviewer`, which returns the default GET response method. Bind this link to the `serviceUrl` property of the PDF Viewer as shown below.

```javascript
var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    serviceUrl: 'https://localhost:5001/pdfviewer'
});
```

N> When configuring the server-backed PDF viewer, it's essential to understand that there is no need to include the pdfium.js and pdfium.wasm files. Unlike the standalone PDF viewer, which relies on these files for local rendering, the server-backed PDF viewer fetches and renders PDFs directly from the server. Consequently, you can exclude the copy command for deployment process, as they are not required to load and display PDFs in this context.

> Refer to the [JavaScript PDF Viewer feature tour](https://www.syncfusion.com/pdf-viewer-sdk) for an overview of capabilities. Explore the [JavaScript PDF Viewer example](https://document.syncfusion.com/demos/pdf-viewer/javascript-es5/#/tailwind3/pdfviewer/default.html) to see core features in action.

N> For hosting the web service on the Linux platform, ensure to include the [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1). Additionally, for AWS environments, utilize the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)|
