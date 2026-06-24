---
layout: post
title: Getting started with Vue Spreadsheet component | Syncfusion
description:  Checkout and learn about getting started with the Syncfusion Vue Spreadsheet component in the Spreadsheet Editor SDK and more details.
control: Getting started
platform: document-processing
documentation: ug
---

# Getting Started with the Vue Spreadsheet Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Spreadsheet component.

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

> When prompted during project creation, select **Default ([Vue 2] babel, eslint)**.

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Spreadsheet package

Install the [Vue Spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2-vue-spreadsheet) package from npm using the following command:

```
npm install @syncfusion/ej2-vue-spreadsheet --save
```

## Add CSS references

Add the following Spreadsheet and dependent component CSS styles in the **\<style\>** section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/tailwind3.css";

{% endhighlight %}
{% endtabs %}

> **Note:** Refer to the [Themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a Vue project.

## Import and register the Spreadsheet Editor

In the `src/App.vue` file, update the **\<script\>** section to import the Spreadsheet Editor component and register it with the required properties.

{% tabs %}

{% highlight vue %}

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

{% endhighlight %}

{% endtabs %}

## Initialize the Spreadsheet Editor

Add the Spreadsheet Editor component to the **\<template\>** section in the `src/App.vue` file.

{% tabs %}

{% highlight vue %}

<ejs-spreadsheet :openUrl="openUrl" :saveUrl="saveUrl"></ejs-spreadsheet>

{% endhighlight %}

{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

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
