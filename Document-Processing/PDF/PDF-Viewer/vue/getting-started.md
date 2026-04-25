---
layout: post
title: Getting started with Vue Standalone PDF Viewer component | Syncfusion
description: Checkout and learn about Getting started with Vue PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with standalone Vue PDF Viewer

This section explains how to create the **PDF Viewer** component and configure its available functionalities in a Vue 2 application using [Vue CLI](https://cli.vuejs.org/) with client-side rendering. The standalone PDF Viewer renders PDFs locally in the browser without requiring a backend web service.

## Prerequisites

Before you get started, ensure the following are in place:
- [System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)
- Node.js v14.15.0 or later
- Vue CLI installed globally

## Create a Vue 2 app

Use one of the following commands to create a Vue 2 application using Vue CLI.

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

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer packages

Install the Syncfusion PDF Viewer package from the npm registry.

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm install @syncfusion/ej2-vue-pdfviewer --save
{% endhighlight %}

{% highlight bash tabtitle="yarn" %}
yarn add @syncfusion/ej2-vue-pdfviewer
{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator), or [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes documentation](https://ej2.syncfusion.com/vue/documentation/appearance/theme) for more details about built-in themes and available approaches.

In this example, the `Material` theme is applied using CSS styles available in the installed packages. The required `Material` CSS styles for the PDF Viewer component and its dependencies are imported into the `<style>` section of the **src/App.vue** file.

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

## Add the PDF Viewer component

Add the PDF Viewer component to the **src/App.vue** file as shown below.

1\. Import and register the PDF Viewer component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch,
         Annotation, FormDesigner, FormFields, PageOrganizer} from '@syncfusion/ej2-vue-pdfviewer';

</script>

{% endhighlight %}
{% endtabs %}

2. In the `template` section, define the PDF Viewer component with the `documentPath` and `resourceUrl` properties.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :resourceUrl="resourceUrl"
      :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the bound `resourceUrl` and `documentPath` properties in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch,
         Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

  export default {

  name: 'App',

  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },

    data () {
      return {
        <!--
          Specifies the location of the PDFium dependency files required
          for rendering and processing PDFs in the PDF Viewer.
         -->
        resourceUrl:'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
        <!--
          Defines the source of the PDF to load in the PDF Viewer.
          Accepts either a public URL or a Base64-encoded PDF string.
        -->  
        documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      };
    },

    provide: {
      PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                   Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer ]}
}

</script>

{% endhighlight %}
{% endtabs %}

N> To load PDF documents and resources from your local application instead of a CDN, refer to [Load PDF Viewer with Local Resources](./how-to/load-pdf-viewer-with-local-resources-vue)

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

{% previewsample "/document-processing/code-snippet/pdfviewer/vue/getting-started-cs2" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started%20-%20Standalone)

## See also

- [PDF Viewer Annotations](./annotation/text-markup-annotation)
- [PDF Viewer Form Designer](./forms/overview#form-designer)
- [Organize PDF pages](./organize-pages/overview)