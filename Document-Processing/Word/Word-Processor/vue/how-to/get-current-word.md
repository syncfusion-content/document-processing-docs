---
layout: post
title: Get current word in Vue Document editor component | Syncfusion
description: Learn here all about Get current word in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Get current word 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Get current word in Vue Document editor component

You can get the current word or paragraph content from the Vue Document Editor component as plain text and SFDT (rich text).

## Select and get the word in current cursor position

You can use [`selectCurrentWord`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#selectcurrentword) API in selection module to select the current word at cursor position and use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the selected content as plain text from Vue Document Editor component.

The following example code illustrates how to select and get the current word as plain text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const onCreated = function () {
  // To insert text in cursor position
  container.value.ej2Instances.documentEditor.editor.insertText(
    'Document editor'
  );
  // Move selection to previous character
  container.value.ej2Instances.documentEditor.selection.moveToPreviousCharacter();
  // To select the current word in document
  container.value.ej2Instances.documentEditor.selection.selectCurrentWord();

  // To get the selected content as text
  var selectedContentText = this.$refs.container.ej2Instances.documentEditor.selection.text;
  // To get the selected content as SFDT (rich text)
  var selectedContentSFDT = this.$refs.container.ej2Instances.documentEditor.selection.sfdt;
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
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
    onCreated: function () {
      // To insert text in cursor position
      this.$refs.container.ej2Instances.documentEditor.editor.insertText(
        'Document editor'
      );
      // Move selection to previous character
      this.$refs.container.ej2Instances.documentEditor.selection.moveToPreviousCharacter();
      // To select the current word in document
      this.$refs.container.ej2Instances.documentEditor.selection.selectCurrentWord();

      // To get the selected content as text
      var selectedContentText = this.$refs.container.ej2Instances.documentEditor.selection.text;
      // To get the selected content as SFDT (rich text)
      var selectedContentSFDT = this.$refs.container.ej2Instances.documentEditor.selection.sfdt;
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

To get the bookmark content as SFDT (rich text), please check this [`link`](../how-to/get-the-selected-content#get-the-selected-content-as-sfdt-rich-text)

## Select and get the paragraph in current cursor position

You can use [`selectParagraph`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#selectparagraph) API in selection module to select the current paragraph at cursor position and use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API or [`sfdt`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#sfdt-code-classlanguage-textstringcode) API to get the selected content as plain text or SFDT from Vue Document Editor component.

The following example code illustrates how to select and get the current paragraph as SFDT.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const onCreated = function () {
  // To insert text in cursor position
  container.value.ej2Instances.documentEditor.editor.insertText('Document editor');
  // To select the current paragraph in document
  container.value.ej2Instances.documentEditor.selection.selectParagraph();

  // To get the selected content as text
  var selectedContentText = this.$refs.container.ej2Instances.documentEditor.selection.text;
  // To get the selected content as SFDT (rich text)
  var selectedContentSFDT = this.$refs.container.ej2Instances.documentEditor.selection.sfdt;
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
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
    onCreated: function () {
      // To insert text in cursor position
      this.$refs.container.ej2Instances.documentEditor.editor.insertText('Document editor');
      // To select the current paragraph in document
      this.$refs.container.ej2Instances.documentEditor.selection.selectParagraph();

      // To get the selected content as text
      var selectedContentText = this.$refs.container.ej2Instances.documentEditor.selection.text;
      // To get the selected content as SFDT (rich text)
      var selectedContentSFDT = this.$refs.container.ej2Instances.documentEditor.selection.sfdt;
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.