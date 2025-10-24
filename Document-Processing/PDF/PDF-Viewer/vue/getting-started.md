---
layout: post
title: Getting started with Vue Standalone PDF Viewer component | Syncfusion
description: Checkout and learn about Getting started with Vue PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Vue Standalone PDF Viewer

This section briefly explains how to create the **PDF Viewer** component and configure its available functionalities in a Vue 2 application using [Vue-CLI](https://cli.vuejs.org/).

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [Vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
```

When creating a new project, choose the option `Default ([Vue 2] babel, es-lint)` from the menu.

![Vue 2 project](./images/vue2-terminal.png)

Once the `quick start` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Install the Syncfusion<sup style="font-size:70%">&reg;</sup> `PDF Viewer` package using the following command.

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/package/@vue-pdf-viewer/viewer). To use the Vue components, install the required npm package.

This article uses the [Vue PDF Viewer component](https://www.syncfusion.com/pdf-viewer-sdk) as an example. Install the `@syncfusion/ej2-vue-pdfviewer` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-pdfviewer --save
```
or

```bash
yarn add @syncfusion/ej2-vue-pdfviewer
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in the installed packages. The required `Material` CSS styles for the PDF Viewer component and its dependents are imported into the `<style>` section of the **src/App.vue** file.

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


> PDF Viewer has different themes, please refer to [Supported themes](../appearance/theme) section.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the Vue PDF Viewer component:

1\. Import and register the PDF Viewer component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch,
         Annotation, FormDesigner, FormFields, PageOrganizer} from '@syncfusion/ej2-vue-pdfviewer';

}
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
        resourceUrl:'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
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

### Steps to Load PDF Viewer with Local Resources

To configure the PDF Viewer to use local files for `documentPath` and `resourceUrl` instead of files hosted on a CDN, follow these steps:

**Step 1:** Ensure that your application includes the `ej2-pdfviewer-lib` folder. This folder must contain the `pdfium.js` and `pdfium.wasm` files, along with the PDF file that you intend to display. These should be located in the `asset` directory within your project's `public` folder.

**Step 2:** Assign local file paths to the `documentPath` and `resourceUrl` properties within the PDF Viewer setup. The `documentPath` should refer to your PDF file, and the `resourceUrl` should point to the directory containing the supporting resources.

By following these steps, you will configure your PDF Viewer to load the required resources locally. Refer to the following code snippet:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
    data() {
      return {
        resourceUrl: window.location.origin + "/asset/ej2-pdfviewer-lib",
        documentPath: window.location.origin + "/asset/pdfsuccinctly.pdf"
      };
    },
</script>

{% endhighlight %}
{% endtabs %}

View the sample in GitHub to [load the PDF Viewer with local resources](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally/quickstart).


Here is the summarized code for the steps above in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-pdfviewer
    id="pdfViewer"
    :resourceUrl="resourceUrl"
    :documentPath="documentPath">
  </ejs-pdfviewer>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
           ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

Here is the summarized code for the steps above in the **src/App.vue** file:

The output will be displayed as follows:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
         Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl:"https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]
  }
}
</script>
{% endhighlight %}
{% endtabs %}

{% previewsample "Document-Processing/code-snippet/pdfviewer/vue/getting-started-cs2/index.html" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started%20-%20Standalone)

> You can refer to our [Vue PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) feature tour page for its groundbreaking feature representations. You can also explore our [Vue PDF Viewer example](https://document.syncfusion.com/demos/pdf-viewer/vue/#/tailwind3/pdfviewer/default.html) to understand how it explains the core features of the PDF Viewer.
