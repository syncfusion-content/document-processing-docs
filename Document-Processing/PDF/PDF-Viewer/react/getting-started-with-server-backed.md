---
layout: post
title: Getting Started with React Server-Backed PDF Viewer | Syncfusion
description: Checkout and learn about Getting started with React PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Server-Backed PDF Viewer Component

This section explains how to create a simple React application and add the server-backed [Syncfusion® React PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer) component with the minimum required setup.

N> Starting with the 2026 Vol 2 main release (June 2026), no new features will be added to the Server PDF Viewer, as almost all of the PDF Viewer functionalities are now available in the Standalone PDF Viewer. If you are currently using the server-backed PDF Viewer, please refer to the [migration documentation](./server-to-standalone) to transition to the Standalone PDF Viewer.

## Prerequisites

[System requirements for Syncfusion® React components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Create a React application

Use [`Vite`](https://vitejs.dev/guide/) to create a new React application, as it provides a faster development environment, smaller bundle sizes, and optimized production builds.

To create a new React application, run one of the following commands based on your preferred environment.

{% tabs %}
{% highlight bash tabtitle="JavaScript" %}

npm create vite@latest pdf-viewer-app -- --template react
cd pdf-viewer-app

{% endhighlight %}
{% highlight bash tabtitle="TypeScript" %}

npm create vite@latest pdf-viewer-app -- --template react-ts
cd pdf-viewer-app

{% endhighlight %}
{% endtabs %}

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> React PDF Viewer packages

Install the [React PDF Viewer](https://www.npmjs.com/package/@syncfusion/ej2-react-pdfviewer) package from npm using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-pdfviewer --save

{% endhighlight %}
{% endtabs %}

## Add CSS references

Add the following PDF Viewer and dependent component style references to the `src/index.css` file.

{% tabs %}
{% highlight css tabtitle="src/index.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Add the Syncfusion® React PDF Viewer component to the application

Add the **Syncfusion® React PDF Viewer** component to your `src/App.jsx` or `src/App.tsx` file.

{% tabs %}
{% highlight js tabtitle="JSX" %}
{% raw %}

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    return (
      <PdfViewerComponent id="container"
        // Specifies the path or Base64 string of the PDF document to be loaded in the PDF Viewer.
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        // Specifies the backend service URL that processes and streams PDF data
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer">
         // Specifies the modules required for the PDF Viewer
         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                             BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                             FormFields, FormDesigner, PageOrganizer ]}/>
      </PdfViewerComponent>
    );
}

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="TSX" %}
{% raw %}

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
 
export default function App() {
  return (
    <PdfViewerComponent id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer">
      <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                          BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                          FormFields, FormDesigner, PageOrganizer ]}/>
    </PdfViewerComponent>
  );
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> The Web API hosted link https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer utilized in the PDF viewer's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server) for hosting your own web service and use for the serviceUrl property. **We strongly recommend using the standalone mode.**

[How to Create and Run a Custom PDF Viewer Web Service](./how-to/create-and-run-custom-pdf-viewer-web-service)


## Run the application

Run the following command to start the React application:

{% tabs %}
{% highlight bash tabtitle="CLI" %}

npm run dev

{% endhighlight %}
{% endtabs %}

After the application starts, open the localhost URL shown in the terminal to view the React PDF Viewer in the browser. The output will appear as follows:

![React PDF Viewer Control](images/pdfviewer-control.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/react/base-cs1" %}

N> When configuring the server-backed PDF viewer, it's Essential<sup style="font-size:70%">&reg;</sup> to understand that there is no need to include the pdfium.js and pdfium.wasm files. Unlike the standalone PDF viewer, which relies on these files for local rendering, the server-backed PDF viewer fetches and renders PDFs directly from the server. Consequently, you can exclude the copy command for deployment process, as they are not required to load and display PDFs in this context.

> [View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Getting%20Started).

N> For hosting the web service on the Linux platform, ensure to include the [SkiaSharp.NativeAssets.Linux v3.119.1](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1). Additionally, for AWS environments, utilize the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux v3.119.1](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|

## See also

- [Getting started with Standalone React PDF Viewer](./getting-started-with-server-backed)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)