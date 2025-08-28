---
layout: post
title: Customize tool bar in Vue Document editor component | Syncfusion
description: Learn here all about Customize tool bar in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Customize tool bar 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Customize tool bar in Vue Document editor component

## How to customize existing toolbar in DocumentEditorContainer

Document Editor Container allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [`CustomToolbarItemModel`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/customToolbarItemModel/) and with existing items in [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#toolbaritems) property. Newly added item click action can be defined in [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/clickEventArgs/).
* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#toolbaritems) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/toolbarItem/).
* Enable, Disable -  Toolbar items can be enabled or disable using [`enableItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/toolbar#enableItems)

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
const onWrapText = function (text) {
  let content = '';
    const index = text.lastIndexOf(' ');
    if (index !== -1) {
        content = text.slice(0, index) + "<div class='e-de-text-wrap'>" + text.slice(index + 1) + "<div>";
    } else {
        content = text;
    }

    return content;
}
const items = [
  {
    prefixIcon: "e-de-ctnr-lock",
    tooltipText: "Disable Image",
    text: onWrapText("Disable Image"),
    id: "Custom"
  },
  'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']

provide('DocumentEditorContainer', [Toolbar]);

const onToolbarClick = function (args) {
  switch (args.item.id) {
    case 'Custom':
      //Disable image toolbar item.
      container.value.ej2Instances.toolbar.enableItems(4, false);
      break;
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer
      ref="container"
      :toolbarItems="items"
      v-bind:toolbarClick="onToolbarClick"
      :enableToolbar="true"
    >
    </ejs-documenteditorcontainer>
  </div>
</template>

<script>
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
  },
  data() {
    return {
      items: this.getToolbarItems(),
    };
  },
  provide: {
    DocumentEditorContainer: [Toolbar],
  },
  methods: {
    onToolbarClick: function (args) {
      switch (args.item.id) {
        case 'Custom':
          //Disable image toolbar item.
          this.$refs.container.ej2Instances.toolbar.enableItems(4, false);
          break;
      }
    },
    onWrapText: function (text) {
      let content = '';
      const index = text.lastIndexOf(' ');

      if (index !== -1) {
        content =
          text.slice(0, index) +
          "<div class='e-de-text-wrap'>" +
          text.slice(index + 1) +
          '</div>';
      } else {
        content = text;
      }

      return content;
    },
    getToolbarItems: function () {
      return [
        {
          prefixIcon: 'e-de-ctnr-lock',
          tooltipText: 'Disable Image',
          text: this.onWrapText('Disable Image'),
          id: 'Custom',
        },
        'Undo',
        'Redo',
        'Separator',
        'Image',
        'Table',
        'Hyperlink',
        'Bookmark',
        'TableOfContents',
        'Separator',
        'Header',
        'Footer',
        'PageSetup',
        'PageNumber',
        'Break',
        'InsertFootnote',
        'InsertEndnote',
        'Separator',
        'Find',
        'Separator',
        'Comments',
        'TrackChanges',
        'Separator',
        'LocalClipboard',
        'RestrictEditing',
        'Separator',
        'FormFields',
        'UpdateFields',
        'ContentControl',
      ];
    },
  },
};
</script>

{% endhighlight %}
{% endtabs %}

>Note: Default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.