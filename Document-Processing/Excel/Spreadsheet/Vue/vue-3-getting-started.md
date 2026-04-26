---
layout: post
title: Vue 3 getting started with the Spreadsheet component | Syncfusion
description:  Check out and learn about Vue 3 getting started with the Vue Spreadsheet component of Syncfusion Spreadsheet Editor SDK and more details.
control: Vue 3 getting started
platform: document-processing
documentation: ug
---

# Getting Started with the Vue Spreadsheet Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Spreadsheet component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Prerequisites

[System requirements for Syncfusion® Vue components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Create a Vue application

Use [Vite](https://vitejs.dev/) to create a new Vue application, as it provides a faster development environment, smaller bundle sizes, and optimized builds.

To create a new Vue application, run one of the following commands.

```
npm create vite@latest spreadsheet-app -- --template vue
cd spreadsheet-app
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

> **Note:** Refer to the [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a Vue project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component to the application

Import and register the Spreadsheet component directives in the `script` section of **src/App.vue**. If you use the `Composition API`, add the `setup` attribute to the `script` tag. Then, define the component in the `template` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

<template>
  <ejs-spreadsheet :openUrl="openUrl" :saveUrl="saveUrl">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="data"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { SpreadsheetComponent as EjsSpreadsheet, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet} from "@syncfusion/ej2-vue-spreadsheet";

const openUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open';
const saveUrl = 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save';

const data = [
          {
            OrderID: 10248,
            Name: "VINET",
            Country: "France",
          },
          {
            OrderID: 10249,
            Name: "TOMSP",
            Country: "Germany",
          }
        ];
</script>

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}

<template>
  <ejs-spreadsheet :openUrl="openUrl" :saveUrl="saveUrl">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="data"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>
  import { SpreadsheetComponent, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";

  export default {
    name: "App",
    // Declaring component and its directives
    components: {
      "ejs-spreadsheet": SpreadsheetComponent,
      "e-sheets": SheetsDirective,
      "e-sheet": SheetDirective,
      "e-ranges": RangesDirective,
      "e-range": RangeDirective,
    },
    // Bound properties declarations
    data() {
       return {
        data:[
          {
            OrderID: 10248,
            Name: "VINET",
            Country: "France",
          },
          {
            OrderID: 10249,
            Name: "TOMSP",
            Country: "Germany",
          }
        ],
      openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
      saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
    };
    },
  };
</script>

{% endraw %}
{% endhighlight %}
{% endtabs %}

> **Note:** The [`openUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#openurl) and [`saveUrl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/index-default#saveurl) endpoints used in this example are provided only for demonstration purposes. For development and production use, we strongly recommend configuring your own local or hosted web service for the Open and Save actions instead of relying on the online demo service. For more information, refer to the [`link`](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## Run the project

To run the project, use the following command:

```
npm run dev
```

The output will appear as follows:

![Output](images/Vue3-spreadsheet-demo.png)

After the application starts, open the local URL shown in the terminal to view the Vue Spreadsheet Editor in the browser.

## See also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)
