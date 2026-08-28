---
layout: post
title: How to Deploy Vue DOCX Editor for Mobile | Syncfusion
description: Deploy the Syncfusion® Vue DOCX Editor for mobile browsers in read-only mode to provide an optimized document viewing experience on mobile devices.
control: Deploy DOCX Editor component for mobile 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Deploy Vue DOCX Editor for Mobile

## DOCX Editor component for mobile

At present, [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) component is not responsive for mobile, and editing functionalities are not supported in mobile browsers. However, it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the DOCX Editor component to read-only in mobile browsers. Also, invoke the [`fitPage`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#fitpage) method with `FitPageWidth` parameter in the document change event to display one full page by adjusting the zoom factor.

The following example code illustrates how to deploy the DOCX Editor component for mobile.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" height="590px" :serviceUrl='serviceUrl' :enableToolbar='true'
      :documentChange='onDocumentChange'> </ejs-documenteditorcontainer>
  </div>
</template>

<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

const onDocumentChange = function (args) {
  //To detect the device
  let isMobileDevice = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

  if (isMobileDevice) {
    container.value.ej2Instances.restrictEditing = true;
    setTimeout(() => {
      container.value.ej2Instances.documentEditor.fitPage("FitPageWidth");
    }, 50);
  }
  else {
    container.value.ej2Instances.restrictEditing = false;
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
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" height="590px" :serviceUrl='serviceUrl' :enableToolbar='true'
      :documentChange='onDocumentChange'> </ejs-documenteditorcontainer>
  </div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return { serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' }
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onDocumentChange: function (args) {
      //To detect the device
      let isMobileDevice = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

      if (isMobileDevice) {
        this.$refs.container.ej2Instances.restrictEditing = true;
        setTimeout(() => {
          this.$refs.container.ej2Instances.documentEditor.fitPage("FitPageWidth");
        }, 50);
      }
      else {
        this.$refs.container.ej2Instances.restrictEditing = false;
      }
    }
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

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can download the complete working example from this [GitHub location](https://github.com/SyncfusionExamples/Deploy-Document-Editor-in-Mobile-Friendly-Web-page/)

N> You can use the [`restrictEditing`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#isreadonly) in DocumentEditor based on your requirement to change the component to read-only mode.