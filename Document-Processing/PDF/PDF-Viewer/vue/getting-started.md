---
layout: post
title: Getting Started with Vue Standalone PDF Viewer component | Syncfusion
description: Learn about Getting Started with Vue PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with standalone Vue PDF Viewer Component in Vue 2

This section explains how to create the **PDF Viewer** component and configure the PDF Viewer in a Vue 2 application using [Vue CLI](https://cli.vuejs.org/). The standalone PDF Viewer renders PDFs locally in the browser without requiring a server.

## Prerequisites

[System requirements for Vue components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue Application

Use one of the following commands to create a Vue application using [Vue CLI](https://cli.vuejs.org/#getting-started).

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

When prompted, select the **Default ([Vue 2] babel, eslint)** option.

> For Vue 3 application setup, see [Create a Vue 3 app](./getting-started-application).

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue PDF Viewer package

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

In this example, the `Material` theme is applied using CSS styles available in the installed packages. The required `Material` CSS styles are imported into the `<style>` section of the `src/App.vue` file.

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

Import and register the PDF Viewer component directives in the `<script>` section of `src/App.vue`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch,
         Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer ]
  }
}

{% endhighlight %}
{% endtabs %}

**serviceUrl** – The back-end endpoint for PDF processing. The Syncfusion-hosted URL provides evaluation capabilities. For production, replace with your deployed web service endpoint.

**documentPath** – The URL or file path to the PDF document to display. You can provide a remote URL, a Base64 string, or a local file path.

### Initialize the PDF Viewer

Add the **Syncfusion Vue PDF Viewer** component to the `<template>` section in the `src/App.vue` file.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<ejs-pdfviewer id="pdfViewer" :resourceUrl="resourceUrl" :documentPath="documentPath">
</ejs-pdfviewer>

{% endhighlight %}
{% endtabs %}

N> To load PDF documents and resources from your local application instead of a CDN, refer to [Load PDF Viewer with Local Resources](./how-to/load-pdf-viewer-with-local-resources-vue)

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

After the application starts, open the URL displayed in the terminal (typically `http://localhost:8080`) to view the Vue PDF Viewer in the browser. The output will appear as follows:

![Vue PDF Viewer control](images/pdfviewer-control.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/vue/getting-started-cs2" %}

> [View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started%20-%20Standalone)

## Video tutorial

To get started quickly with Vue PDF Viewer, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=wCGPrGahcJg" %}

## See also

- [Getting started with Server-Backed Vue PDF Viewer](./getting-started-with-server-backed)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)

N> Looking for the full Vue PDF Viewer component overview, features, pricing, and documentation? Visit the [Vue PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/vue-pdf-viewer) page.