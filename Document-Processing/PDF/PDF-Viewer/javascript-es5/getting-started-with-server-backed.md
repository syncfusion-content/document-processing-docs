---
layout: post
title: Getting started with Javascript PDF Viewer control | Syncfusion
description:  Checkout and learn about Getting started with Javascript PDF Viewer control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: PDF Viewer
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Javascript PDF Viewer control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization with CDN link for script and style reference

**Step 1:** Create an app folder `my_app` for the Essential JS 2 JavaScript components.

**Step 2:** The Essential JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{Version}/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/26.2.11/ej2-base/styles/material.css`](https://cdn.syncfusion.com/ej2/26.2.11/ej2-base/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `my_app` location and add the CDN link references. Now, add the `Div` element and initiate the `Essential JS 2 PDF Viewer` component in the index.html by using following code.

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

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es5/es5-getting-started-cs1/index.html" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the `Essential JS 2 PDF Viewer` component.

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/how-to/create-pdfviewer-service)

## How to run the PDF Viewer web service

1. Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) link.

2. Navigate to the `ASP.NET Core` folder and open it in the command prompt.

3. Navigate to the appropriate subfolder based on your .NET version:

   - .NET 6.0 → `PdfViewerWebService_6.0`
   - .NET 8.0 → `PdfViewerWebService_8.0`

4. Use the below command to restore the required packages.

   ```
   dotnet restore
   ```

5. Use the below command to run the web service.

   ```
   dotnet run
   ```

6. You can see that the PDF Viewer server instance runs in the local host with the port number `localhost:5001` and navigate to the PDF Viewer Web control `localhost:5001/pdfviewer` which returns the default get response method. We can bind the link to the `serviceUrl` property of PDF Viewer as below.

```javascript
var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    serviceUrl: 'https://localhost:5001/pdfviewer'
});
```

N> When configuring the server-backed PDF viewer, it's essential to understand that there is no need to include the pdfium.js and pdfium.wasm files. Unlike the standalone PDF viewer, which relies on these files for local rendering, the server-backed PDF viewer fetches and renders PDFs directly from the server. Consequently, you can exclude the copy command for deployment process, as they are not required to load and display PDFs in this context.

N> For hosting the web service on the Linux platform, ensure to include the [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1). Additionally, for AWS environments, utilize the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)|
