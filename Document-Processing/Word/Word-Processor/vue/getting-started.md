---
layout: post
title: Getting Started with Vue DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a Vue application using the Syncfusion® DOCX Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting started 
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue DOCX Editor (Vue 2)

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/Vue-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a Vue application.

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
## Install the DOCX Editor packages

The DOCX Editor package is available in the public npm registry and can be installed directly from [`npmjs.com`](https://www.npmjs.com/package/@syncfusion/ej2-vue-documenteditor).

To install the DOCX Editor component, use the following command:

```bash
npm install @syncfusion/ej2-vue-documenteditor --save
```

## Register a Syncfusion License Key

Before initializing the Vue DOCX Editor control, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in Vue](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#vuejs)

## Import the required CSS styles

Add the following DOCX Editor and dependent component style references to the `<style>` section of `src/App.vue` file.

{% tabs %}
{% highlight css tabtitle="App.vue" %}

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

## Initialize the DOCX Editor

Modify the `src/App.vue` file to render the DOCX Editor. Add the DOCX Editor component in the `<template>` section using the `<ejs-documenteditorcontainer>` selector and configure it in the `<script>` section.

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

## Run the application

Run the application using the following command:

```bash
npm run serve
```

After the application starts, open the localhost URL shown in the terminal. The DOCX Editor is rendered in the browser with a toolbar and an editable document area, as shown below.

![Output of Vue DOCX Editor](./images/vue_2_getting_started.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/Vue-DOCX-Editor-Examples/tree/master/getting-started/vue_2).

## Online Demo

Explore how to create, edit, and print Word documents using the Vue DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/vue/#/material3/document-editor/default.html).

## Video tutorial

To get started quickly with the DOCX Editor component using CLI, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=UbmGFUXtzYg" %}

## Server-side dependencies

The DOCX Editor component requires server-side interactions for the following operations:

* Open file formats other than SFDT
* Paste with formatting
* Restrict editing
* Spell check
* Save as file formats other than SFDT and DOCX

N> If you do not require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interaction.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.

N> Looking for the full Vue DOCX Editor component overview, features, pricing, and documentation? Visit the [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) page.

## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative Editing](./collaborative-editing/overview)
- [Troubleshooting](https://help.syncfusion.com/document-processing/word/word-processor/vue/troubleshooting)