---
layout: post
title: Getting Started with Vue PPTX Editor (Vue 3) | Syncfusion
description: Learn how to get started with the Syncfusion Vue 3 PPTX Editor control. Explore setup, features, examples, and customization options.
control: Getting started vue 3
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue PPTX Editor (Vue 3)

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with integrating the [Vue PPTX Editor](https://www.syncfusion.com/powerpoint-editor-sdk/vue-powerpoint-editor) component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) or [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

* [System requirements for Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)
* [Browser Compatibility](https://ej2.syncfusion.com/vue/documentation/browser)

## Create a Vue application

Use [Vite](https://vitejs.dev/) to quickly scaffold a Vue 3 project. Run one of the following commands to create a new project:

```bash
npm create vite@latest
```

After running the command, follow the interactive prompts shown below to configure the project:

Step 1: Define the project name: Specify the project name directly. This guide uses `pptxeditor-app`.

```bash
? Project name: » pptxeditor-app
```

Step 2: Select `Vue` as the framework to target Vue 3.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

Step 3: Choose `JavaScript` as the variant to build the Vite project with JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

Step 4: After the scaffold completes, install the project dependencies:

```bash
cd pptxeditor-app
npm install
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
{% highlight html tabtitle="~/src/App.Vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pptx-editor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Initialize the PPTX Editor

Import and register the PPTX Editor component in the `<script>` section of `src/App.vue`. If you use the `Composition API`, add the `setup` attribute to the `<script>` tag. Then, define the component in the `<template>` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pptxeditor
      ref="editor"
      id="container"
      height="590px">
    </ejs-pptxeditor>
  </div>
</template>

<script setup>
  import { provide, ref, onMounted } from 'vue';
  import {
    PptxEditorComponent,
    Toolbar,
    ThumbnailView,
    Magnification,
    Navigation,
    Print,
    SlideShow
  } from '@syncfusion/ej2-vue-pptxeditor';
  import samplePptxUrl from '../sample.pptx?url';

  provide('PptxEditor', [Toolbar, ThumbnailView, Magnification, Navigation, Print, SlideShow]);

  const editor = ref(null);

  onMounted(() => {
    // Open a local presentation file in the PPTX Editor
    fetch(samplePptxUrl)
      .then((response) => response.blob())
      .then((blob) => editor.value.openFromBlob(blob, 'sample.pptx'));
  });
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

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
  import samplePptxUrl from '../sample.pptx?url';

  export default {
    name: 'App',
    components: {
       'ejs-pptxeditor': PptxEditorComponent
    },
    provide: {
      PptxEditor: [Toolbar, ThumbnailView, Magnification, Navigation, Print, SlideShow]
    },
    mounted() {
      // Open a local presentation file in the PPTX Editor
      fetch(samplePptxUrl)
        .then((response) => response.blob())
        .then((blob) => this.$refs.editor.openFromBlob(blob, 'sample.pptx'));
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

After the application starts, open the localhost URL shown in the terminal. The Vue PPTX Editor is rendered in the browser with a toolbar, thumbnail pane, and a slide area, as shown below.

![Output of Vue 3 PPTX Editor](./images/vue_3_getting_started.png)