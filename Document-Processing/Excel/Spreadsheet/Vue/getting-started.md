---
layout: post
title: Getting started with Vue Spreadsheet component | Syncfusion
description:  Checkout and learn about getting started with the Syncfusion Vue Spreadsheet component in the Spreadsheet Editor SDK and more details.
control: Getting started
platform: document-processing
documentation: ug
---

# Getting Started with the Vue Spreadsheet Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project and integrating the [Syncfusion® Vue Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor).

## Prerequisites

[System requirements for Syncfusion® Vue components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue application

Use [Vue CLI](https://cli.vuejs.org/#getting-started) to set up a Vue application, as it provides a modular project architecture, flexible configuration, and an integrated plugin system.

Install Vue CLI globally, using the following command:

```
npm install -g @vue/cli
```

Create a new Vue application using the following commands:

```
vue create quickstart
cd quickstart
```

N> When prompted during project creation, select **Default ([Vue 2] babel, eslint)**.

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Spreadsheet package

Install the [Syncfusion® Vue Spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2-vue-spreadsheet) package from npm using the following command:

```
npm install @syncfusion/ej2-vue-spreadsheet --save
```

## Add CSS references

Add the following Spreadsheet and dependent component style references.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

N> Refer to the [Themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a Vue project.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Spreadsheet component to the application

Import and register the Spreadsheet component directives in the `script` section of **src/App.vue**. Then, define the component in the `template` section.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <ejs-spreadsheet :openUrl="openUrl" :saveUrl="saveUrl"></ejs-spreadsheet>
</template>

<script>
import { SpreadsheetComponent } from "@syncfusion/ej2-vue-spreadsheet";

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent
  },
  data: () => {
    return {
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
      saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> The [`openUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the application

Run the following command to start the application:

```
npm run serve
```

After the application starts, open the localhost URL shown in the terminal to view the Vue Spreadsheet Editor in the browser. The output will appear as follows:

![Vue Spreadsheet control](images/spreadsheet.PNG)

You can also explore the Spreadsheet interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/spreadsheet/vue/getting-started-cs1" %}

## See also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)
