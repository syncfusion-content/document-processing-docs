---
layout: post
title: Add save button in Vue DOCX Editor toolbar | Syncfusion
description: Learn here to add a save button to the Syncfusion Vue DOCX Editor component of Syncfusion Essential JS 2 and more.
control: Add save button toolbar
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Add a save button in the Vue DOCX Editor toolbar

## Add a save button to the existing toolbar in DocumentEditorContainer

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) Container allows you to add a new button to the existing items in a toolbar using [`CustomToolbarItemModel`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/customToolbarItemModel) and include it with the existing items in the [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#toolbaritems) property. The click action for the newly added item can be defined in [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/clickEventArgs).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :toolbarItems='items' v-bind:toolbarClick='onToolbarClick'
      :enableToolbar='true'> </ejs-documenteditorcontainer>
  </div>
</template>

<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const items = [
  'New', 'Open', 'Separator',
  {
    prefixIcon: "e-save icon",
    tooltipText: "Save the Document",
    text: "Save",
    id: "save"
  },
  'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']

provide('DocumentEditorContainer', [Toolbar]);

const onToolbarClick = function (args) {
  switch (args.item.id) {
    case 'save':
      //Save the document (Download the document).
      container.value.ej2Instances.documentEditor.save('sample', 'Docx');
      break;
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :toolbarItems='items' v-bind:toolbarClick='onToolbarClick'
      :enableToolbar='true'> </ejs-documenteditorcontainer>
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
      items: [
        'New','Open','Separator',
        {
            prefixIcon: "e-save icon",
            tooltipText: "Save the Document",
            text: "Save",
            id: "save"
        },
        'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']
    }
  },
  provide: {
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onToolbarClick: function (args) {
      switch (args.item.id) {
        case 'save':
            //Save the document (Download the document).
            this.$refs.container.ej2Instances.documentEditor.save('sample', 'Docx');
            break;
      }
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> The default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.