---
layout: post
title: FAQs about Track Changes in Vue DOCX Editor | Syncfusion
description: Find frequently asked questions about track changes in the Vue DOCX Editor control, including how to detect editable and non-editable regions.
control: Track Changes
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# FAQs about Track Changes in Vue DOCX Editor

The frequently asked questions about track changes in [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) are listed below:

## How do I detect whether the cursor is in an editable or non-editable region?

You can detect whether the current cursor position is in an editable or non-editable region by using the [`isSelectionInEditRegion`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#isselectionineditregion) API within the [`selectionChange`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#selectionchange) event. This is useful when a document is protected with editable ranges, and you want to perform custom logic based on where the selection lies.

The following code snippet illustrates how to identify the selection region using the `selectionChange` event:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

```html
<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" height="590px" id="container"
      :enableToolbar="true" v-on:selectionChange="selectionChanged.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const selectionChanged = function () {
  // Detect whether the selection is in an editable or non-editable region.
  if (container.value.ej2Instances.documentEditor.selection.isSelectionInEditRegion()) {
    console.log('Selection in editable region');
  } else {
    console.log('Selection in non-editable region');
  }
}
</script>
```

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

```html
<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" height="590px" id="container"
      :enableToolbar="true" v-on:selectionChange="selectionChanged.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    selectionChanged: function () {
      // Detect whether the selection is in an editable or non-editable region.
      if (this.$refs.container.ej2Instances.documentEditor.selection.isSelectionInEditRegion()) {
        console.log('Selection in editable region');
      } else {
        console.log('Selection in non-editable region');
      }
    }
  }
};
</script>
```

{% endhighlight %}
{% endtabs %}
