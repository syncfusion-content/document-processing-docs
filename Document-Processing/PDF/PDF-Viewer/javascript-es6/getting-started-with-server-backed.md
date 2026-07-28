---
layout: post
title: Getting Started with Server-Backed TypeScript PDF Viewer | Syncfusion
description: Learn how to set up and run the Syncfusion TypeScript PDF Viewer in server-backed mode using a PDF Viewer web service.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Server-Backed TypeScript PDF Viewer

Create and run the **TypeScript PDF Viewer in server-backed mode**. In this mode, PDF rendering and processing are performed on a server-side web service, while the TypeScript application acts as the client.

N> Starting with the 2026 Vol 2 main release (July 6, 2026), no new features will be added to the Server PDF Viewer, as almost all of the PDF Viewer functionalities are now available in the Standalone PDF Viewer. If you are currently using the server-backed PDF Viewer, please refer to the [migration documentation](./server-to-standalone) to transition to the Standalone PDF Viewer.

## Prerequisites

To get started, ensure the following software is installed on your machine:

- [Git](https://git-scm.com/downloads)
- [Node.js (`v14.15.0` or later)](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Create a TypeScript application

Create a simple TypeScript application using the Essential® JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

**Step 1:** Open the command prompt from the required directory and clone the quickstart project from GitHub.

{% tabs %}
{% highlight bash tabtitle="CLI" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart

{% endhighlight %}
{% endtabs %}

**Step 2:** Navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CLI" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

**Step 3:** By default, the `ej2-quickstart` repository is preconfigured with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in `~/package.json`. This package installs all Syncfusion Essential JS 2 components, including the PDF Viewer and other EJ2 controls.

To install **only the PDF Viewer component**, replace the dependencies with [@syncfusion/ej2-pdfviewer](https://www.npmjs.com/package/@syncfusion/ej2-pdfviewer) in `package.json`:

{% tabs %}
{% highlight bash tabtitle="package.json" %}

"@syncfusion/ej2-pdfviewer": "*"

{% endhighlight %}
{% endtabs %}

**Step 4:** Install the dependent npm packages.

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install

{% endhighlight %}
{% endtabs %}

## Add CSS references

Add the required Syncfusion styles to `src/styles/styles.css`:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';

{% endhighlight %}
{% endtabs %}

N> Refer to the [Themes topic](https://ej2.syncfusion.com/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a TypeScript project.

## Add the PDF Viewer component

To load and display a PDF in server-backed mode, configure the PDF Viewer with the `serviceUrl` property.

Update `src/app.ts` as shown below:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
import { PdfViewer, Toolbar, Magnification,
         Navigation, Annotation, LinkAnnotation,
         ThumbnailView, BookmarkView, TextSelection,
         TextSearch, FormFields } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation,
               Annotation, LinkAnnotation, ThumbnailView,
               BookmarkView, TextSelection, TextSearch,
               FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
  // Specifies the URL of the server-side PDF Viewer web service
  serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
});

pdfviewer.appendTo('#PdfViewer');

// Load a PDF document through the server
pdfviewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', '');
{% endhighlight %}
{% endtabs %}

Add a container element in `index.html`:

{% tabs %}
{% highlight html tabtitle="index.html" %}
<div id="PdfViewer" style="height: 640px"></div>
{% endhighlight %}
{% endtabs %}

> **Note:** The Web API service URL shown above is provided for evaluation only. For production, host your own PDF Viewer web service.

## Run the application

Run the following command to start the TypeScript application:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm start
{% endhighlight %}
{% endtabs %}

The application will connect to the configured PDF Viewer web service and render the document in the browser. The image below shows how the PDF Viewer is rendered in the browser:

*Rendered PDF Viewer in the browser*

![Rendered PDF Viewer in browser](images/pdfviewer-control.png)

> [View Sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20URL)

## Run the PDF Viewer web service

To host your own PDF Viewer web service:

1. Download the web service sample from GitHub:
   [GitHub Web service sample](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices)
2. Navigate to the appropriate folder based on your .NET version:
   - .NET 6.0 → [PdfViewerWebService_6.0](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices/tree/main/ASP.NET%20Core/PdfViewerWebService_6.0)
   - .NET 8.0 → [PdfViewerWebService_8.0](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices/tree/main/ASP.NET%20Core/PdfViewerWebService_8.0)
3. Restore all project dependencies using the following command:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
dotnet restore
{% endhighlight %}
{% endtabs %}

4. Run the Service Using the Following Code:

{% tabs %}
{% highlight bash tabtitle="CLI" %}
dotnet run
{% endhighlight %}
{% endtabs %}

The service will run at:

```
https://localhost:7255/pdfviewer
```

Configure this URL in the `serviceUrl` property of the PDF Viewer.

> **Important:** In server-backed mode, do **not** include `pdfium.js` or `pdfium.wasm`. All rendering is performed on the server.

N> For hosting the web service on Linux, include [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1). For AWS environments, use the following packages:

| **Amazon Web Services (AWS)** | **NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|


## See also

Related resources for further exploration:

- [Getting started with Standalone TypeScript PDF Viewer](./getting-started)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)