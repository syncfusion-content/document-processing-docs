---
layout: post
title: Getting started with Typescript PDF Viewer control | Syncfusion
description:  Checkout and learn about Getting started with Typescript PDF Viewer control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Typescript PDF Viewer control

This section briefly explains how to create **PDF Viewer** component and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

Add the components CSS in the `~/src/styles/styles.css` file, as shown below:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-notifications/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Adding PDF Viewer component

* Add the PDF Viewer component following code in the `app.ts`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);

{% endhighlight %}
{% endtabs %}

N> From 23.1 version, it is must to call **pdfviewer.dataBind();** before load function. Refer [here](./troubleshooting/document-loading-issues) for more details.

* Add an HTML div element to act as the PDF Viewer element `index.html` using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <!--Element which will render as PDF Viewer -->
    <div id="PdfViewer"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pdfviewer/javascript-es6/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es6/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> We have provided the support to dynamically change the `serviceURL`. So, after changing the `serviceURL` dynamically, you need invoke the `pdfViewer.dataBind()` method to update the `serviceURL` quickly. This will effectively change the `serviceURL` dynamically. Ensure that this step is performed after version 23.1.36.
document.getElementById('load').addEventListener('click', function () {
   pdfViewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
   pdfViewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
   pdfViewer.dataBind();
   pdfViewer.load(pdfViewer.documentPath, null);
});

N> The Web API hosted link https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/ utilized in the PDF viewer's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server) for hosting your own web service and use for the serviceUrl property. **We strongly recommend using the standalone mode.**

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es6/getting-started-cs1/index.html" %}

## Module injection

To create PDF Viewer with additional features, inject the required modules. The following modules are used to extend PdfViewer's basic functionality:-

* `LinkAnnotation`:-  Inject this module to use PDF Viewer link annotation.
* `BookmarkView`:-  Inject this module to use bookmark view of the PDF Viewer.
* `Magnification`:-  Inject this module to magnify the PDF Document.
* `Navigation`:-  Inject this module to use page navigation on PDF Document.
* `TextSelection`:-  Inject this module to use text selection with the PDF Document.
* `ThumbnailView`:-  Inject this module to use thumbnail view of the PDF Viewer
* `Toolbar`:-  Inject this module to enable the user interface for toolbar option in PDF Viewer.
* `Print`:-  Inject this module to use pdfviewer print feature.
* `Annotation`:-  Inject this module to use pdfviewer annotation feature.
* `TextSearch`:-  Inject this module to use pdfviewer text search feature.
* `FormFields`:-  Inject this module to use pdfviewer form fields feature.
* `FormDesigner`:-  Inject this module to use pdfviewer form designer feature.

These modules should be injected into the PDF Viewer using `PdfViewer.Inject` method.

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/how-to/create-pdfviewer-service)

## How to run the PDF Viewer web service

1.Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) link.

2.Navigate to the `ASP.NET Core` folder and open it in the command prompt.

3.Navigate to the appropriate subfolder based on your .NET version:

   - .NET 6.0 → `PdfViewerWebService_6.0`
   - .NET 8.0 → `PdfViewerWebService_8.0`

4.Use the below command to restore the required packages.

```
 dotnet restore
```

5.Use the below command to run the web service.

```
 dotnet run
```

6.You can see that the PDF Viewer server instance runs in the localhost with the port number `localhost:5001` and navigate to the PDF Viewer Web control `localhost:5001/pdfviewer` which returns the default get response method. We can bind the link to the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) property of PDF Viewer as below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://localhost:5001/pdfviewer';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('PDF_Succinctly.pdf', null);

{% endhighlight %}
{% endtabs %}

N> When configuring the server-backed PDF viewer, it's essential to understand that there is no need to include the pdfium.js and pdfium.wasm files. Unlike the standalone PDF viewer, which relies on these files for local rendering, the server-backed PDF viewer fetches and renders PDFs directly from the server. Consequently, you can exclude the copy command for deployment process, as they are not required to load and display PDFs in this context.

> You can refer to our [JavaScript PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript PDF Viewer example](https://document.syncfusion.com/demos/pdf-viewer/javascript-es5/#/tailwind3/pdfviewer/default.html) to understand how to explains core features of PDF Viewer.

N> For hosting the web service on the Linux platform, ensure to include the [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1). Additionally, for AWS environments, utilize the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)|