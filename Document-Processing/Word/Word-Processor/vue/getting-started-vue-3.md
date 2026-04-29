---
layout: post
title: Getting started vue 3 with Vue Document editor component | Syncfusion
description: Check out and learn about Getting started vue 3 with Vue Document editor component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion® Document editor Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Document editor component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

## Steps to create Vue DOCX Editor in Vue 3

### Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

### Create the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.


{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm create vite@latest my-project

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create vite my-project

{% endhighlight %}
{% endtabs %}

Select the required options when prompted:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ Select a framework … Vue
√ Select a variant … JavaScript

{% endhighlight %}
{% endtabs %}

Install the project dependencies:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

cd my-project
npm install

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

cd my-project
yarn install

{% endhighlight %}
{% endtabs %}

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

The Syncfusion<sup style="font-size:70%">&reg;</sup> DOCX Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-vue-documenteditor).

{% tabs %}

{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-vue-documenteditor --save

{% endhighlight %}

{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-vue-documenteditor

{% endhighlight %}

{% endtabs %}

### Add CSS reference

Add the Document Editor component and its dependent component styles available in the `node_modules/@syncfusion` package folder.

Import the `Material` theme into the **src/App.vue** file and removed the existing styles in that file, as shown below:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> Note: Refer to the [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a Vue project.


### Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor component

You have completed all the necessary configurations needed  for rendering the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component. Now, you are going to add the DocumentEditorContainer component using following steps.

Follow the below steps to add the Vue DocumentEditorContainer component using `Composition API` or `Options API`:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-documenteditorcontainer :serviceUrl='serviceUrl' :enableToolbar='true'> </ejs-documenteditorcontainer>
</template>

<script setup>
  import { provide, ref } from 'vue';
  import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

  const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
  const documentEditorContainer = ref(null);

  provide('DocumentEditorContainer', [Toolbar]);
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-documenteditorcontainer :serviceUrl='serviceUrl' :enableToolbar='true'> </ejs-documenteditorcontainer>
</template>

<script>
  import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

  //Component registeration
  export default {
    name: 'App',
    components: {
      // Declaring component
      'ejs-documenteditorcontainer' : DocumentEditorContainerComponent
    },
    data () {
      return {
        serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
      };
    },
    provide: {
      DocumentEditorContainer: [Toolbar]
    }
  }
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

### Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![Output](./images/vue3-documenteditorcontainer-demo.png)