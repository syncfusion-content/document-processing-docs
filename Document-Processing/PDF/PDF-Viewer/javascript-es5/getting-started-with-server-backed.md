---
layout: post
title: Getting Started with Server-Backed JavaScript PDF Viewer | Syncfusion
description: Learn how to set up and use the Syncfusion JavaScript PDF Viewer in server-backed mode using CDN resources and web service configuration.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with JavaScript PDF Viewer (server-backed)

This section explains how to create the PDF Viewer component and configure its features in JavaScript (global script) using CDN-hosted resources in **server-backed mode**.

N> Starting with the 2026 Vol 2 main release (July 6, 2026), no new features will be added to the Server PDF Viewer. This is because almost all PDF Viewer functionalities are now available in the Standalone PDF Viewer. If you are currently using the server-backed PDF Viewer, please refer to the [migration documentation](./server-to-standalone) to transition to the Standalone PDF Viewer.

> Ensure that the same version is used for all script and style references to avoid compatibility issues.

## Create application folder

Create an app folder `pdf-viewer-app` for the Essential JS 2 JavaScript components.

Your application structure should look like this:

```text
pdf-viewer-app/
├── index.html
├── index.js
```

## Add Syncfusion® PDF Viewer resources

Create an HTML page (index.html) in `pdf-viewer-app` location and add the CDN link references inside the `<head>` section of your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

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

{% endhighlight %}
{% endtabs %}

## Add the Syncfusion® PDF Viewer component

Add a container element for the PDF Viewer control in the `index.html` file and then initialize the control inside the `<body>` section of your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!-- Element which will render as PDF Viewer -->
<div id="PdfViewer" style="height:500px;width:100%;"></div>

{% endhighlight %}
{% endtabs %}

Now, initialize the Syncfusion® PDF Viewer component in the `index.js` file:

{% tabs %}
{% highlight js tabtitle="index.js" %}

// Initialize PDF Viewer component
var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    // Demo service URL for evaluation only. For production, host your own web service.
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
});

// PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

The `documentPath` property sets the URL of the PDF file to load in the viewer and accepts HTTP/HTTPS URLs or relative paths. The `serviceUrl` property must point to a PDF Viewer web service that exposes the required APIs; the web service and the client page must be served from origins that satisfy CORS requirements, and the service must be reachable from the client.

To configure PDF Viewer with local resources for script and style references, and the `documentPath` property, refer to the instructions [here](./how-to/use-local-script-and-style-references).

For creating a new PDF Viewer serviceUrl, follow the steps provided in the [link](./how-to/create-pdfviewer-service) or to locally host an already available web service, follow these [instructions](#run-a-locally-hosted-pdf-viewer-web-service).

## Run the application

Run the following command to start the JavaScript application:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx serve .

{% endhighlight %}
{% endtabs %}

After the application starts, open the localhost URL displayed in the terminal in your web browser. The PDF document will be rendered in the browser. The output will appear as follows:

![Rendered PDF Viewer in browser](images/pdfviewer-control.png)

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-getting-started-cs1" %}

> [View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20URL)

## Deployment notes

- The PDF Viewer supports dynamically changing the [serviceURL](https://ej2.syncfusion.com/documentation/api/pdfviewer#serviceurl). After changing `serviceUrl` at runtime, call `pdfViewer.dataBind()` to apply the new value. This behavior applies to versions after 23.1.36.

{% tabs %}
{% highlight bash tabtitle="javascript" %}

document.getElementById('load').addEventListener('click', function () {
   pdfViewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
   pdfViewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
   pdfViewer.dataBind();
   pdfViewer.load(pdfViewer.documentPath, null);
});

{% endhighlight %}
{% endtabs %}

- The demo Web API hosted at https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer is provided for evaluation only. For production, host a web service with appropriate server configuration. See the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server) for reference. Standalone mode is recommended for client-side rendering.

- The server-backed PDF Viewer does not require `pdfium.js` and `pdfium.wasm` files. Those files are used by the standalone viewer for client-side rendering; server-backed setups render PDFs on the server and therefore do not need to include them in deployment.

- For hosting the web service on the Linux platform, ensure to include the [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1).

- For AWS environments, utilize the following packages:

  | **Amazon Web Services (AWS)** |**NuGet package name** |
  | --- | --- |
  | AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
  | AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|

## Run a locally hosted PDF Viewer web service

1. Download or clone the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) (for example, `git clone https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices.git`).
2. Navigate to the `ASP.NET Core` folder and open it in the command prompt.
3. Navigate to the appropriate subfolder based on your .NET version:

   - .NET 6.0 → [`PdfViewerWebService_6.0`](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices/tree/main/ASP.NET%20Core/PdfViewerWebService_6.0)
   - .NET 8.0 → [`PdfViewerWebService_8.0`](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices/tree/main/ASP.NET%20Core/PdfViewerWebService_8.0)

4. Use the following command to restore the required packages.

{% tabs %}
{% highlight bash tabtitle="CLI" %}

dotnet restore

{% endhighlight %}
{% endtabs %}

5. Use the following command to run the web service.

{% tabs %}
{% highlight bash tabtitle="CLI" %}

dotnet run

{% endhighlight %}
{% endtabs %}

6. The PDF Viewer server instance runs at `https://localhost:7255`. Navigate to `https://localhost:7255/pdfviewer`, which returns the default GET response method. Bind this link to the `serviceUrl` property of the PDF Viewer as shown below.

{% tabs %}
{% highlight bash tabtitle="CLI" %}

   var pdfViewer = new ej.pdfviewer.PdfViewer({
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: 'https://localhost:7255/pdfviewer'
   });

{% endhighlight %}
{% endtabs %}


## See also

- [Getting started with Standalone JavaScript PDF Viewer](./getting-started)
- [Feature modules](./feature-module)