---
layout: post
title: Getting Started with Vue PPTX Editor (Vue 2) | Syncfusion
description: Learn how to get started with the Syncfusion Vue PPTX Editor control. Explore setup, features, examples, and customization options.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue PPTX Editor (Vue 2)

[Vue PPTX Editor](https://www.syncfusion.com/powerpoint-editor-sdk/vue-powerpoint-editor) enables you to view and print PowerPoint presentations in web applications. This section guides you through the steps to get started and create a PPTX Editor in a Vue application.

## Prerequisites

* [System requirements for Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)
* [Browser Compatibility](https://ej2.syncfusion.com/vue/documentation/browser)

## Create a Vue application

Use [Vue CLI](https://cli.vuejs.org/#getting-started) to set up a Vue application, as it provides a modular project architecture, flexible configuration, and an integrated plugin system.

Install Vue CLI globally using the following command:

```bash
npm install -g @vue/cli
```

Create a new Vue application using the following command:

```bash
vue create quickstart
```

When creating a new project, you will be prompted to choose a project type. Select the option **Default ([Vue 2] babel, eslint)**.

Move into the created project using the following command:

```bash
cd quickstart
```

## Install the PPTX Editor packages

The PPTX Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-vue-pptxeditor).

To install the PPTX Editor component, use the following command:

```bash
npm install @syncfusion/ej2-vue-pptxeditor --save
```

## Register a Syncfusion License Key

Before initializing the Vue PPTX Editor control, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in Vue](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#vuejs)

## Import the required CSS styles

Themes for PPTX Editor can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

By default, projects include an `src/App.Vue` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `<style>` section of the `App.vue` to prevent style conflicts.

The required styles for the PPTX Editor are imported in the `<style>` section of the **src/App.Vue**

{% tabs %}
{% highlight css tabtitle="App.vue" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pptx-editor/index.css";

{% endhighlight %}
{% endtabs %}

## Initialize the PPTX Editor

Modify the `src/App.vue` file to render the PPTX Editor. Add the PPTX Editor component in the `<template>` section using the `<ejs-pptxeditor>` selector and configure it in the `<script>` section.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <ejs-pptxeditor
      ref="editor"
      id="container"
      height="590px">
    </ejs-pptxeditor>
  </div>
</template>

<script>
import {
  PptxEditorComponent,
  Toolbar,
  ThumbnailView,
  Magnification,
  Navigation,
  Print,
  SlideShow
} from '@syncfusion/ej2-vue-pptxeditor';

export default {
  name: "App",

  components: {
    "ejs-pptxeditor": PptxEditorComponent
  },

  provide: {
    // Inject required modules.
    PptxEditor: [Toolbar, ThumbnailView, Magnification, Navigation, Print, SlideShow]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

To open a local PPTX file in the PPTX Editor, fetch the file as a blob and load it using the `openFromBlob` method:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<script>
import samplePptxUrl from '../sample.pptx?url';

export default {
  mounted() {
    fetch(samplePptxUrl)
      .then((response) => response.blob())
      .then((blob) => this.$refs.editor.openFromBlob(blob, 'sample.pptx'));
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application using the following command:

```bash
npm run serve
```

After the application starts, open the localhost URL shown in the terminal. The Vue PPTX Editor is rendered in the browser with a toolbar, thumbnail pane, and a slide area, as shown below.

![Output of Vue PPTX Editor](./images/vue_2_getting_started.png)