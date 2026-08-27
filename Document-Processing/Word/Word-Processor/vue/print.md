---
layout: post
title: Print in Vue DOCX Editor | Syncfusion
description: Print feature in Vue DOCX Editor enables printing documents with page setup and quality settings for accurate document output.
control: Print 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Print in Vue DOCX Editor

To print the document, use the [`print`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#print) method from [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) instance.

Refer to the following example for showing a document and printing it.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/print-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/print-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/print-cs1" %}

Refer to the following example for creating a document and printing it.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/print-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/print-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/print-cs2" %}

## Improve print quality

The Document Editor provides an option to improve the print quality using [`printDevicePixelRatio`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorSettingsModel#printdevicepixelratio) in Document Editor settings. The Document Editor uses a canvas approach to render content. The canvas is then converted to an image and processed for print. Using the `printDevicePixelRatio` API, you can increase the image quality based on your requirement.

The following example code illustrates how to improve the print quality in the Document Editor container.

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
const settings = { printDevicePixelRatio: 2 };

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
      settings: { printDevicePixelRatio: 2 }
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

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

N> By default, the `printDevicePixelRatio` value is 1.

## Print using window object

You can print the document in the Document Editor by passing the window instance. This is useful to implement print in third-party frameworks such as Electron, where the window instance will be available. Refer to the following example.

> `this.$refs.documenteditor.print(window)`;

## Page setup

Some of the print options cannot be configured using JavaScript. Refer to the following links to learn more about the browser page setup:

* [`Chrome`](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1/)
* [`Firefox`](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox/)

However, you can customize margins, paper, and layout options by modifying the section format properties using the page setup dialog.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditor ref="documenteditor" :isReadOnly='false' :enablePrint='true' :enableEditor='true'
      :enableSelection='true' :enableEditorHistory='true' :enablePageSetupDialog='true' height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Print, Editor, Selection, EditorHistory, PageSetupDialog } from '@syncfusion/ej2-vue-documenteditor';
import { onMounted, provide, ref } from 'vue';

const documenteditor = ref(null);
provide('DocumentEditor', [Print, Editor, Selection, EditorHistory, PageSetupDialog]);

onMounted(function () {
  documenteditor.value.showPageSetupDialog();
})

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditor ref="documenteditor" :isReadOnly='false' :enablePrint='true' :enableEditor='true'
      :enableSelection='true' :enableEditorHistory='true' :enablePageSetupDialog='true' height="370px"
      style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent, Print, Editor, Selection, EditorHistory, PageSetupDialog } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  provide: {
    DocumentEditor: [Print, Editor, Selection, EditorHistory, PageSetupDialog]
  },
  mounted: function () {
    this.$refs.documenteditor.showPageSetupDialog();
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

By customizing margins, papers, and layouts, the layout of the document will be changed in the Document Editor. To modify these options during the print operation, serialize the document as SFDT using the [`serialize`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#serialize) method in the Document Editor instance and open the SFDT data in another instance of the Document Editor in a separate window.

The following example shows how to customize layout options only for printing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/print-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/print-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/print-cs3" %}

## Online demo

Explore how to print Word documents using the Vue Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/print.html).