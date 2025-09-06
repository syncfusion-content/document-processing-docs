---
layout: post
title: Resize document editor in Vue Document editor component | Syncfusion
description: Learn here all about Resize document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Resize document editor 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Resize document editor in Vue Document editor component

In this article, we are going to see how to change height and width of Document Editor.

## Change height of Document Editor

DocumentEditorContainer initially render with default height. You can change height of documenteditor using [`height`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documentEditorContainerModel#height) property, the value which is in pixel.

The following example code illustrates how to change height of Document Editor.

```
 <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
```

Similarly, you can use [`height`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#height) property for DocumentEditor also.

## Change width of Document Editor

DocumentEditorContainer initially render with default width. You can change width of documenteditor using [`width`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documentEditorContainerModel#width) property, the value which is in percent.

The following example code illustrates how to change width of Document Editor.

```
<ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" width="100%" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
```

Similarly, you can use [`width`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#width) property for DocumentEditor also.

## Resize Document Editor

Using [`resize`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#resize) method, you change height and width of Document editor.

The following example code illustrates how to fit Document Editor to browser window size.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const onWindowResize = function () {
  //Resizes the document editor component to fit full browser window automatically whenever the browser resized.
  updateDocumentEditorSize();
}
const updateDocumentEditorSize = function () {
  //Resizes the document editor component to fit full browser window.
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  container.value.ej2Instances.resize(windowWidth, windowHeight);
}
const onCreated = function () {
  setInterval(() => {
    updateDocumentEditorSize();
  }, 100);
  //Adds event listener for browser window resize event.
  window.addEventListener('resize', onWindowResize);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onWindowResize: function () {
      //Resizes the document editor component to fit full browser window automatically whenever the browser resized.
      this.updateDocumentEditorSize();
    },
    updateDocumentEditorSize: function () {
      //Resizes the document editor component to fit full browser window.
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;
      this.$refs.container.ej2Instances.resize(windowWidth, windowHeight);
    },
    onCreated: function () {
      setInterval(() => {
        this.updateDocumentEditorSize();
      }, 100);
      //Adds event listener for browser window resize event.
      window.addEventListener('resize', this.onWindowResize.bind(this));
    },
  },
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
