---
layout: post
title: Customize font family drop-down in Vue DOCX Editor | Syncfusion
description: Learn here all about how to customize the font family drop-down in the Syncfusion Vue DOCX Editor component of Syncfusion Essential JS 2 and more.
control: Customize the font family drop-down
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Customize font family drop-down in Vue DOCX Editor

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) provides an option to customize the font family drop-down list values using [`fontFamilies`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorSettingsModel#fontfamilies) in the Document Editor settings. The fonts that are added in the `fontFamilies` of [`documentEditorSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#documenteditorsettings) will be displayed in the font drop-down list of the text properties pane and the font dialog.

Similarly, you can use the [`documentEditorSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#documenteditorsettings) property for the DocumentEditor also.

The following example code illustrates how to change the font families in the Document Editor container.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :documentEditorSettings='settings'
      height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide } from 'vue';

const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
// Add the required font families to list them in the font drop-down
const settings = { fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria'] }

//Inject required modules.
provide('DocumentEditorContainer', [Toolbar])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :documentEditorSettings='settings'
      height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
      // Add the required font families to list them in the font drop-down
      settings: { fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria'] }
    };
  },
  provide: {
    //Inject required modules.
    DocumentEditorContainer: [Toolbar]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

The output will be as shown below:

![Font](../images/font-family.png)