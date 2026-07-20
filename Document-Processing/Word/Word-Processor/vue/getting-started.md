---
layout: post
title: Getting Started with Vue DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a Vue application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue DOCX Editor (Vue 2)

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/Vue-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a Vue application.

## Steps to create a DOCX Editor in Vue 2

### Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)


### Create a Vue application

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
### Install the Document Editor packages

The Document Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-vue-documenteditor).

To install the Document Editor component, use the following command:

```bash
npm install @syncfusion/ej2-vue-documenteditor --save
```

### Add CSS reference

Add the following Document Editor and dependent component style references to the `<style>` section of `src/App.vue` file.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

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

### Add the Document Editor component

Modify the `src/App.vue` file to render the Document Editor. Add the Document Editor in the `<template>` section using the `<ejs-documenteditorcontainer>` selector and configure it in the `<script>` section.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer
      height="590px"
      :serviceUrl="serviceUrl"
      :enableToolbar="true">
    </ejs-documenteditorcontainer>
  </div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  name: "App",

  components: {
    "ejs-documenteditorcontainer": DocumentEditorContainerComponent
  },

  data() {
    // Use the following service URL only for demo purposes
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
    };
  },

  provide: {
    // Inject required modules.
    DocumentEditorContainer: [Toolbar]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

### Run the application

Run the application using the following command:

```bash
npm run serve
```

After the application starts, open the localhost URL shown in the terminal. The Document Editor is rendered in the browser with a toolbar and an editable document area, as shown below.

![Output of Vue Document Editor](./images/vue_2_getting_started.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/Vue-DOCX-Editor-Examples/tree/master/getting-started/vue_2).

## Online Demo

Explore how to create, edit, and print Word documents using the Vue Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/vue/#/material3/document-editor/default.html).

## Video tutorial

To get started quickly with the Document Editor component using CLI, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=UbmGFUXtzYg" %}

## Server-side dependencies

The Document Editor component requires server-side interactions for the following operations:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX

N> If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.

## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative Editing](./collaborative-editing/overview)