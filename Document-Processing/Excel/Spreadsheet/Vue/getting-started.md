---
layout: post
title: Getting started with Vue Spreadsheet component | Syncfusion
description:  Checkout and learn about Getting started with Vue Spreadsheet component of Syncfusion Essential JS 2 and more details.
platform: document-processing
documentation: ug
---

# Getting Started with the Vue Spreadsheet Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Spreadsheet component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion® Vue components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue application

Use the [Vue CLI](https://cli.vuejs.org/#getting-started) to set up a Vue application.

Install Vue CLI using the following command:

```
npm install -g @vue/cli
```

Create a new Vue application using the following commands:

```
vue create quickstart
cd quickstart
npm run serve
```

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Spreadsheet package

Install the [Vue Spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2-vue-spreadsheet) package from npm using the following command:

```
npm install @syncfusion/ej2-vue-spreadsheet --save
```

## Add CSS references

Add the following style references.

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
  @import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> **Note:** Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Spreadsheet component to the application

Import and register the Spreadsheet component in the `script` section of **src/App.vue**. If you use the `Composition API`, add the `setup` attribute to the `script` tag. Then, define the component in the `template` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/getting-started-cs1/app-composition.vue %}
{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the application

Run the following command to start the application:

```
npm run serve
```

After the application starts, open the local URL shown in the terminal to view the Vue Spreadsheet Editor in the browser.

The following example shows a basic spreadsheet component.

{% previewsample "/document-processing/code-snippet/spreadsheet/vue/getting-started-cs1" %}

## See also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)
