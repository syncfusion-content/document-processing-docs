---
layout: post
title: Getting started with Vue PDF Viewer component | Syncfusion
description: Checkout and learn about Getting started with Server-backed Vue PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with server-backed Vue PDF Viewer Component in Vue 2

This section explains how to create the **PDF Viewer** component and configure its functionalities in a Vue 2 application using Vue CLI with a server-backed architecture. In this mode, PDF rendering and processing are handled by a web service.

## Prerequisites

[System requirements for Vue components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue Application

Create a Vue application using Vue CLI.

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

Add the required CSS styles for the PDF Viewer component and its dependencies to your `App.vue` file.

In this example, the `Material` theme is applied using CSS styles available in the installed packages. The required `Material` CSS styles are imported into the `<style>` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

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

N> You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator), or [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to the [Themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a Vue project.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue PDF Viewer component

Import and register the PDF Viewer component directives in the `script` section of **src/App.vue**. Then, define the component in the `template` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
  </ejs-pdfviewer>
</template>

<script setup>
import { provide } from "vue";
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer]);

</script>

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
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<template>
  <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
  </ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
       <!--
          Specifies the backend service URL that processes and streams PDF data
      --> 
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      <!--
          Defines the source of the PDF to load in the PDF Viewer.
          Accepts either a public URL or a Base64-encoded PDF string.
      --> 
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer]
  }
}
</script>

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

N> The Web API hosted link https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer utilized in the PDF Viewer's `serviceUrl` property is intended solely for demonstration and evaluation purposes. For production deployment, host your own web service with your required server configurations. Refer to the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server) for hosting your own web service and use it for the `serviceUrl` property. **We strongly recommend using the standalone mode.**

[How to Create and Run a Custom PDF Viewer Web Service](./how-to/create-and-run-custom-pdf-viewer-web-service)

## Run the project

Run the following command to start the application.

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm run serve
{% endhighlight %}

{% highlight bash tabtitle="yarn" %}
yarn serve
{% endhighlight %}
{% endtabs %}

After the application starts, open the localhost URL shown in the terminal to view the Vue PDF Viewer in the browser. The output will appear as follows:

![Vue PDF Viewer control](images/pdfviewer-control.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/vue/getting-started-cs1" %}

N> When configuring the server-backed PDF Viewer, there is no need to include the `pdfium.js` and `pdfium.wasm` files. Unlike the standalone PDF Viewer, which relies on these files for local rendering, the server-backed PDF Viewer fetches and renders PDFs directly from the server. Consequently, these files are not required for deployment, and you can exclude the copy command for the deployment process.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started%20-%20server-back).

N> For hosting the web service on Linux, ensure you include the [SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1) package. Additionally, for AWS environments, use the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|

N> Looking for the full Vue PDF Viewer component overview, features, pricing, and documentation? Visit the [Vue PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started-with-server-backed) page.

## See also

- [Getting started Vue PDF Viewer](./getting-started)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)