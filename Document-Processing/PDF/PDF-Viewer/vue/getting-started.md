---
layout: post
title: Getting Started with Vue PDF Viewer | Syncfusion
description: Learn how to get started with the Syncfusion Vue PDF Viewer control. Explore setup, features, examples, and customization options.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue PDF Viewer

[Syncfusion® Vue PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/vue-pdf-viewer) enables you to view, annotate, and interact with PDF documents in web applications. This section guides you through the steps to get started and create a PDF Viewer in a Vue application.

{% tabcontents %}

{% tabcontent Syncfusion CLI %}

## Prerequisites

- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- Syncfusion CLI.

## Install the Syncfusion CLI

Install the Syncfusion CLI globally using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install -g @syncfusion/syncfusion-cli

{% endhighlight %}
{% endtabs %}

## Set up the project using Syncfusion CLI

You can create a Vue application using the Syncfusion CLI. The CLI provides two ways to create a project:

### Non-interactive mode

Non-interactive mode allows you to create a project directly using a single command with the required command-line arguments.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

sf new syncfusion-vue-app --framework vue --template pdf-viewer

{% endhighlight %}
{% endtabs %}

In this mode, the project configuration is passed directly in the command. The above command creates a Vue Vite application configured with the Syncfusion<sup style="font-size:70%">&reg;</sup> `PDF Viewer` component.

### Interactive mode

Interactive mode guides you through the project creation process with step-by-step prompts.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

sf

{% endhighlight %}
{% endtabs %}

When you run the `sf` command, the CLI prompts you to select the required project configuration. To create a Vue Vite application with the Syncfusion<sup style="font-size:70%">&reg;</sup> `PDF Viewer` component, select the following options:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ Project name? ... syncfusion-vue-app
√ Choose Framework: » Vue
√ Choose Build Tool: » Vite
√ Choose Language: » JavaScript
√ Choose Template: » PDF Viewer
√ Choose Theme: » Tailwind3
√ Choose Style Format: » CSS
√ Would you like to integrate the Syncfusion MCP Server (AI Assistant) into this project? ... no
√ Would you like to install Syncfusion Component Skills for AI-powered development? ... no
√ Install dependencies and start app now? ... no

{% endhighlight %}
{% endtabs %}

The above selections generate a Vue Vite application configured with the Syncfusion<sup style="font-size:70%">&reg;</sup> `PDF Viewer` component. You can choose different values for language, theme, style format, MCP setup, and skills installation based on your project requirements.

The Syncfusion<sup style="font-size:70%">&reg;</sup> CLI creates the project with a predefined template. After the project is generated, you can customize or replace the component code based on your application requirements.

## Run the project

Once the project is created, navigate to the project directory and run the following commands in your terminal.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd syncfusion-vue-app
npm install
npm run dev

{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![Output of Vue PDF Viewer Using Syncfusion CLI](./images/vue-cli-pdfviewer.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/vue/getting-started-cs2" %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started%20-%20Standalone).

{% endtabcontent %}

{% tabcontent Vue CLI %}

## Prerequisites

[System requirements for Vue components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue application

Use one of the following commands to create a Vue 2 application using [Vue CLI](https://cli.vuejs.org/#getting-started).

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

N> For Vue 3 application setup, see [Create a Vue 3 app](./getting-started-application).

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue PDF Viewer package

The PDF Viewer package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-vue-pdfviewer).

To install the PDF Viewer component, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-vue-pdfviewer --save

{% endhighlight %}

{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-vue-pdfviewer

{% endhighlight %}
{% endtabs %}

## Import the required CSS styles

Themes for PDF Viewer can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/vue/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

The required PDF Viewer theme styles are imported into the `<style>` section of the `src/App.vue` file:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<style>
  @import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';
</style>

{% endhighlight %}
{% endtabs %}

N> The `index.css` file automatically includes all required dependent component styles for the PDF Viewer. You do not need to import individual dependency styles such as Base, Buttons, Dropdowns, Inputs, Navigations, Popups, SplitButtons, and Lists separately.

N> Refer to the [Themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a Vue project.

## Initialize the PDF Viewer

Add the PDF Viewer component to your Vue application by following these instructions:

### Import and register the PDF Viewer

Import and register the PDF Viewer component directives in the `<script>` section of `src/App.vue`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
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

N> The `documentPath` property sets the PDF file path to be loaded. You can provide a remote URL, Base64 string, or local file path (e.g., `'./public/sample.pdf'`). This example uses CDN-hosted resources. For local resources, refer to [Load PDF Viewer with Local Resources](./how-to/load-pdf-viewer-with-local-resources-vue).

### Add the PDF Viewer to the template

Add the **Syncfusion Vue PDF Viewer** component to the `<template>` section in the `src/App.vue` file.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<ejs-pdfviewer id="pdfViewer" :resourceUrl="resourceUrl" :documentPath="documentPath">
</ejs-pdfviewer>

{% endhighlight %}
{% endtabs %}

## Run the project

Run the application using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm run serve

{% endhighlight %}

{% highlight bash tabtitle="yarn" %}

yarn serve

{% endhighlight %}
{% endtabs %}

After the application starts, open the URL displayed in the terminal (typically `http://localhost:8080`) in the browser. The Vue PDF Viewer is rendered in the browser with a toolbar and an interactive PDF area, as shown below.

![Output of Vue PDF Viewer](./images/pdfviewer-control.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/vue/getting-started-cs2" %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started%20-%20Standalone).

## Video tutorial

To get started quickly with Vue PDF Viewer, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=wCGPrGahcJg" %}

{% endtabcontent %}

{% endtabcontents %}

## See also

- [Getting started with Server-Backed Vue PDF Viewer](./getting-started-with-server-backed)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)

N> Looking for the full Vue PDF Viewer component overview, features, pricing, and documentation? Visit the [Vue PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/vue-pdf-viewer) page.
