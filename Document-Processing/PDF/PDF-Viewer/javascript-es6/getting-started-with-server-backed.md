---
layout: post
title: Getting started with server-backed TypeScript PDF Viewer | Syncfusion
description: Learn how to set up and use the Syncfusion TypeScript PDF Viewer in server-backed mode, including module injection and web service configuration.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion TypeScript PDF Viewer (Server-Backed)

This guide explains how to create and configure the PDF Viewer component in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository in server-backed mode.

> This application is integrated with a webpack configuration (`webpack.config.js`) and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires Node.js `v14.15.0` or higher. For more information, refer to the [webpack getting started guide](https://webpack.js.org/guides/getting-started).

## Set up the development environment

Open a command prompt in the target directory and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning, navigate to the `ej2-quickstart` folder using the following command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. Install all EJ2 controls with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) meta package or install individual control packages.

The quickstart application has been preconfigured with the latest version of `@syncfusion/ej2` in `~/package.json`. Use the following command to install dependencies:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import Syncfusion CSS styles

Add the component CSS in the `~/src/styles/styles.css` file, as shown below:

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

## Add the PDF Viewer component

* Add the PDF Viewer component in `app.ts` as shown below:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', '');

{% endhighlight %}
{% endtabs %}

N> From version 23.1 onwards, it is mandatory to call `pdfviewer.dataBind();` before invoking the `load` function. For more details, refer to [document loading issues](./troubleshooting/document-loading-issues).

* Add an HTML `div` element to act as the PDF Viewer container in `index.html`:

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

Use the following command to start the application:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pdfviewer/javascript-es6/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es6/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

N> The `serviceUrl` can be changed dynamically. After updating `serviceUrl`, invoke `pdfViewer.dataBind()` to apply the changes, then call `load`.
document.getElementById('load').addEventListener('click', function () {
   pdfViewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
   pdfViewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
   pdfViewer.dataBind();
   pdfViewer.load(pdfViewer.documentPath, '');
});

N> The Web API link https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/ used in the `serviceUrl` property is intended for demonstration and evaluation only. For production deployments, you must host your own web service with the required server configuration. You can reuse the [GitHub web service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server). **Standalone mode is strongly recommended for most use cases.**

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/getting-started-cs1" %}

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

Inject modules using the `PdfViewer.Inject` method.

To create a functional PDF Viewer `serviceUrl`, follow the steps in [Create PDF Viewer Service](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/how-to/create-pdfviewer-service).

## Run the PDF Viewer web service

1. Download the sample from the [web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices).

2. Navigate to the `ASP.NET Core` folder and open it in a command prompt.

3. Navigate to the appropriate subfolder based on your .NET version (e.g., `PdfViewerWebService_6.0` or `PdfViewerWebService_8.0`).

4. Restore packages:

```
 dotnet restore
```

5. Run the web service:

```
 dotnet run
```

6. The PDF Viewer server instance runs at `https://localhost:7255`. Navigate to `https://localhost:7255/pdfviewer` to see the default GET response. Bind this URL to the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer#serviceurl) property of the PDF Viewer as shown below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://localhost:7255/pdfviewer';
pdfviewer.appendTo('#PdfViewer');
pdfviewer.load('PDF_Succinctly.pdf', '');

{% endhighlight %}
{% endtabs %}

N> In server-backed mode, do not include `pdfium.js` and `pdfium.wasm`.
Unlike standalone mode, the server-backed PDF Viewer renders PDFs on the server. These files and their copy steps are not required for deployment in this context.

> Refer to the [JavaScript PDF Viewer feature tour](https://www.syncfusion.com/pdf-viewer-sdk) for an overview of capabilities. Explore the [JavaScript PDF Viewer example](https://document.syncfusion.com/demos/pdf-viewer/javascript-es5/#/tailwind3/pdfviewer/default.html) to see core features in action.

N> For hosting the web service on Linux, include [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1). For AWS environments, use the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)|