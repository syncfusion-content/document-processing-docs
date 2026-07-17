---
layout: post
title: Getting Started with Vue PDF Viewer component | Syncfusion
description: Checkout and learn about Getting Started with Vue PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with server-backed Vue PDF Viewer Component in Vue 2

This section explains how to create the **PDF Viewer** component and configure the PDF Viewer's functionality in a Vue 2 application using Vue CLI with a server-backed architecture. In this mode, PDF rendering and processing are handled by a web service.

N> Starting with the 2026 Vol 2 main release (July 6, 2026), no new features will be added to the Server PDF Viewer, as almost all of the PDF Viewer functionalities are now available in the Standalone PDF Viewer. If you are currently using the server-backed PDF Viewer, please refer to the [migration documentation](./server-to-standalone) to transition to the Standalone PDF Viewer.

## Prerequisites

[System requirements for Vue components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue Application

Create a Vue application using [Vue CLI](https://cli.vuejs.org/#getting-started).

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install -g @vue/cli
vue create quickstart
cd quickstart
{% endhighlight %}

{% highlight bash tabtitle="yarn" %}
yarn global add @vue/cli
vue create quickstart
cd quickstart
{% endhighlight %}
{% endtabs %}

When prompted, select **Default ([Vue 2] babel, eslint)**.

> For Vue 3 application setup, see [Create a Vue 3 app](./getting-started-application).

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue PDF Viewer packages

Install the [Vue PDF Viewer](https://www.npmjs.com/package/@syncfusion/ej2-vue-pdfviewer) package from npm using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install @syncfusion/ej2-vue-pdfviewer --save
{% endhighlight %}

{% highlight bash tabtitle="yarn" %}
yarn add @syncfusion/ej2-vue-pdfviewer
{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Add the required CSS styles for the PDF Viewer component and its dependencies to your `App.vue` file. Syncfusion provides several built-in themes (Material, Fabric, Bootstrap, Tailwind, etc.); this example uses the `Material` theme. The required `Material` CSS styles are imported into the `<style>` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
</style>

{% endhighlight %}
{% endtabs %}

N> Refer to the [Themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a Vue project.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue PDF Viewer component

Add the PDF Viewer component to your Vue application by following these instructions:

### Import and register the PDF Viewer

Import and register the PDF Viewer component and its modules in the `<script>` section of `src/App.vue`.

{% tabs %}
{% highlight html tabtitle="Options API App.vue" %}

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  }
}

{% endhighlight %}
{% endtabs %}

### Initialize the PDF Viewer

Add the **Syncfusion Vue PDF Viewer** component to the `<template>` section in the `src/App.vue` file.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
</ejs-pdfviewer>

{% endhighlight %}
{% endtabs %}

N> The Web API hosted link https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer utilized in the PDF Viewer's `serviceUrl` property is intended solely for demonstration and evaluation purposes. For production deployment, host your own web service with your required server configurations. Refer to the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server) for hosting your own web service and use it for the `serviceUrl` property. **We strongly recommend using the standalone mode.**

For step-by-step instructions to host your own web service, see [How to Create and Run a Custom PDF Viewer Web Service](./how-to/create-and-run-custom-pdf-viewer-web-service). If you encounter issues (such as CORS errors or the service not listening), see the [Troubleshooting](./troubleshooting/troubleshooting) guide.

## Run the project

Run the following command to start the Vue application:

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm run serve
{% endhighlight %}

{% highlight bash tabtitle="yarn" %}
yarn serve
{% endhighlight %}
{% endtabs %}

After the application starts, open the URL shown in the terminal (typically `http://localhost:8080`) to view the Vue PDF Viewer in the browser. The output will appear as follows:

![Vue PDF Viewer control](images/pdfviewer-control.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/vue/getting-started-cs1" %}

N> When configuring the server-backed PDF Viewer, there is no need to include the `pdfium.js` and `pdfium.wasm` files. Unlike the standalone PDF Viewer, which relies on these files for local rendering, the server-backed PDF Viewer fetches and renders PDFs directly from the server, so you can omit these files from your build/deploy process.

> [View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started%20-%20server-back).

## Hosting the web service

N> For hosting the web service on Linux, ensure you include the [SkiaSharp.NativeAssets.Linux 3.119.1](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1) package. Additionally, for AWS environments, use the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux 3.119.1](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies 3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|

## See also

- [Getting Started with Standalone Vue PDF Viewer](./getting-started)
- [Migrate from Server-Backed to Standalone Vue PDF Viewer](./server-to-standalone)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)