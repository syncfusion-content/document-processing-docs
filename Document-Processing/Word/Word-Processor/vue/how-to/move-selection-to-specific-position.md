---
layout: post
title: Move selection to specific position in Vue Document editor component | Syncfusion
description: Learn here all about Move selection to specific position in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Move selection to specific position 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Move selection to specific position in Vue Document editor component

Using [`select`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#select) API in selection module, You can set cursor position to anywhere in the document.

## Selects content based on start and end hierarchical index

Hierarchical index will be in below format.

`sectionIndex;blockIndex;offset`

The following code snippet illustrate how to select using hierarchical index.

```
// Selection will occur between provided start and end offset
this.$refs.container.ej2Instances..documentEditor.editor.insertText("Welcome");
// The below code will select the letters “We” from inserted text “Welcome”
this.$refs.container.ej2Instances..documentEditor.selection.select("0;0;0", "0;0;2");
```

The following table illustrates about Hierarchical index in detail.

| Element |Hierarchical Format | Explanation |
|-----------------|-------------|----|
|Move selection to Paragraph |sectionIndex;blockIndex;offset <br>**Ex:** 0;0;0|It moves the cursor to the start of paragraph.|
|Move selection to Table|sectionIndex;tableIndex;rowIndex;cellIndex;blockIndex;offset <br>**Ex:** 0;0;0;0;1;0|It moves the cursor to the second paragraph which is inside first row and cell of table.|
|Move selection to header|pageIndex;H;sectionIndex;blockIndex;offset<br>**Ex:** 1;H;0;0;0|It moves cursor to the header in second page.|
|Move selection to Footer|pageIndex;F;sectionIndex;blockIndex;offset<br>**Ex:** 1;F;0;0;0|It moves cursor to the footer in second page.|

## Get the selection start and end hierarchical index

Using [`startOffset`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#startoffset), you can get start hierarchical index which denotes the start index of current selection.

Similarly, using [`endOffset`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#endoffset), you can get end hierarchical index which denotes the end index of current selection.

The following code snippet illustrate how to get the selection start and end offset on selection changes in document.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:selectionChange="selectionChanged.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const selectionChanged = function () {
  //Get the start index of current selection
  let startOffset = container.value.ej2Instances.documentEditor.selection.startOffset;
  //Get the end index of current selection
  let endOffset = container.value.ej2Instances.documentEditor.selection.endOffset;
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:selectionChange="selectionChanged.bind(this)"></ejs-documenteditorcontainer>
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
      serviceUrl:
        'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    selectionChanged: function () {
      //Get the start index of current selection
      let startOffset =
        this.$refs.container.ej2Instances.documentEditor.selection.startOffset;
      //Get the end index of current selection
      let endOffset = this.$refs.container.ej2Instances.documentEditor.selection.endOffset;
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Document editor have [`selectionChange`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#selectionchange) event which is triggered whenever the selection changes in Document.

## Selects the content based on left and top position

Here, you can specify the [`selection settings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selectionSettings/) to select the content based on left and top position.

x denotes the left position and y denotes the top position and extend denotes whether to extend or update selection.

Please check below code sample for reference.

```
this.$refs.container.ej2Instances.documentEditor.selection.select({ x: 188.4814208984375 , y: 662.00005, extend: true });
```