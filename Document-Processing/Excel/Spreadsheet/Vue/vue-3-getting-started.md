---
layout: post
title: Getting started with Vue 3 Spreadsheet component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Spreadsheet component of Syncfusion Spreadsheet Editor SDK and more details.
control: Vue 3 getting started
platform: document-processing
documentation: ug
---

# Getting Started with the Vue Spreadsheet Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the [Vue Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Vue components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue Application

To create a new Vue application, run one of the following commands.

```
npm create vite@latest spreadsheet-app -- --template vue
cd spreadsheet-app
```

## Install the Vue Spreadsheet package

Install the [Vue Spreadsheet Editor](https://www.npmjs.com/package/@syncfusion/ej2-vue-spreadsheet) package from npm using the following command:

```
npm install @syncfusion/ej2-vue-spreadsheet
```

## Add CSS references

Add the following Spreadsheet and dependent component styles to `src/style.css` file. Replace the existing content with the theme import code below.

{% tabs %}
{% highlight html tabtitle="style.css" %}

@import "@syncfusion/ej2-base/styles/tailwind3.css";
@import "@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "@syncfusion/ej2-popups/styles/tailwind3.css";
@import "@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "@syncfusion/ej2-grids/styles/tailwind3.css";
@import "@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";

{% endhighlight %}
{% endtabs %}

> **Note:** This example uses the `Tailwind3` theme. To use a different built-in theme, replace the `tailwind3.css` references with the corresponding theme stylesheets. Refer to the [Themes documentation](https://ej2.syncfusion.com/vue/documentation/appearance/theme) for information about the available themes and the different ways to include theme styles in a Vue application.

## Add the Vue Spreadsheet component to the application

Import and register the [Vue Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) component directives in the `script` section of **src/App.vue**. If you use the `Composition API`, add the `setup` attribute to the `script` tag. Then, define the component in the `template` section.

{% tabs %}
{% highlight html tabtitle="Composition API (App.vue)" %}
{% raw %}

<template>
  <ejs-spreadsheet :openUrl="openUrl" :saveUrl="saveUrl"></ejs-spreadsheet>
</template>

<script setup>
import { SpreadsheetComponent as EjsSpreadsheet } from "@syncfusion/ej2-vue-spreadsheet";

const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';
const saveUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save';

</script>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (App.vue)" %}
{% raw %}

<template>
  <ejs-spreadsheet :openUrl="openUrl" :saveUrl="saveUrl"></ejs-spreadsheet>
</template>

<script>
  import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";

  export default {
    name: "App",
    // Declaring component and its directives
    components: {
      "ejs-spreadsheet": SpreadsheetComponent
    },
    // Bound properties declarations
    data() {
      return {
        openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
        saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
      };
    },
  };
</script>

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> The [`openUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the Application

Run the following command to start the application:

```
npm run dev
```

After the application starts, open the localhost URL shown in the terminal to view the Vue Spreadsheet Editor in the browser. The output will appear as follows:

![Output](images/vue3-spreadsheet.png)

> [View Sample in GitHub](https://github.com/SyncfusionExamples/getting-started-with-the-vue-spreadsheet-component).

N> Looking for the full Vue Spreadsheet component overview, features, pricing, and documentation? Visit the [Vue Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) page.

## See also

* [Open and Save](./open-save)
* [Data Binding](./data-binding)
