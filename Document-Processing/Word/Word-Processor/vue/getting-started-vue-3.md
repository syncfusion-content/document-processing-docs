---
layout: post
title: Getting Started with Vue 3 DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a Vue 3 application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
control: Getting started vue 3 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue DOCX Editor (Vue 3)

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with integrating the [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/Vue-docx-editor) (Document Editor) component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) or [Options API](https://vuejs.org/guide/introduction.html#options-api).


## Steps to create a DOCX Editor in Vue 3

### Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

### Create a Vue application

Use [Vite](https://vitejs.dev/) to quickly scaffold a Vue 3 project. Run one of the following commands to create a new project:

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

After running the command, follow the interactive prompts shown below to configure the project:

Step 1: Define the project name: Specify the project name directly. This guide uses `documenteditor-app`.

```bash
? Project name: » documenteditor-app
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
cd documenteditor-app
npm install
```

or

```bash
cd documenteditor-app
yarn install
```

### Install the Document Editor packages

The Document Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-vue-documenteditor).

To install the Document Editor component, use the following command:

```bash
  npm install @syncfusion/ej2-vue-documenteditor --save
```

### Add CSS reference

Add the following Document Editor and dependent component style definitions to the `src/style.css` file.

{% tabs %}
{% highlight html tabtitle="~/src/style.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-documenteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

N> Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

### Add Document Editor component

Import and register the Document Editor component in the `<script>` section of `src/App.vue`. If you use the `Composition API`, add the `setup` attribute to the `<script>` tag. Then, define the component in the `<template>` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-documenteditorcontainer 
   height="590px"
   :serviceUrl="serviceUrl" 
   :enableToolbar="true"> 
  </ejs-documenteditorcontainer>
</template>

<script setup>
  import { provide } from 'vue';
  import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
  
  // Use the following service URL only for demo purposes
  const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

  provide('DocumentEditorContainer', [Toolbar]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-documenteditorcontainer 
    height="590px"
    :serviceUrl="serviceUrl" 
    :enableToolbar="true"> 
  </ejs-documenteditorcontainer>
</template>

<script>
  import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

  export default {
    name: 'App',
    components: {
       'ejs-documenteditorcontainer' : DocumentEditorContainerComponent
    },
    data () {
      return {
        // Use the following service URL only for demo purposes
        serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
      };
    },
    provide: {
      DocumentEditorContainer: [Toolbar]
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

### Run the application

Run the application using the following command:

```bash
npm run dev
```

After the application starts, open the localhost URL shown in the terminal. The Vue Document Editor is rendered in the browser with a toolbar and an editable document area, as shown below.

![Output of Vue 3 Document Editor](./images/vue_3_getting_started.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/Vue-DOCX-Editor-Examples/tree/master/getting-started/vue_3).

## Server-side dependencies

The Document Editor component requires server-side interactions for the following operations:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX

N> If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.

N> Looking for the full Vue DOCX Editor component overview, features, pricing, and documentation? Visit the [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) page.

## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative Editing](./collaborative-editing/overview)