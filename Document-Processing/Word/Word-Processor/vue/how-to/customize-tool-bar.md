---
layout: post
title: Customize the toolbar in the Vue DOCX Editor component | Syncfusion
description: Learn here all about how to customize the toolbar in the Syncfusion Vue Document Editor component of Syncfusion Essential JS 2 and more.
control: Customize the toolbar
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Customize the toolbar in the Vue Document Editor component

## How to customize the existing toolbar in DocumentEditorContainer

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) Container allows you to customize (add, show, hide, enable, and disable) the existing items in a toolbar.

* Add - New items can be defined by [`CustomToolbarItemModel`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/customToolbarItemModel) and included with the existing items in the [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#toolbaritems) property. The click action for the newly added item can be defined in [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/clickEventArgs).
* Show, Hide - Existing items can be shown or hidden using the [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#toolbaritems) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/toolbarItem).
* Enable, Disable - Toolbar items can be enabled or disabled using the [`enableItems`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/toolbar#enableItems) API.

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
        content = text.slice(0, index) + "<div class='e-de-text-wrap'>" + text.slice(index + 1) + "</div>";
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
      //Disable the image toolbar item.
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
          //Disable the image toolbar item.
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

N> The default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.

## Online Demo

Explore how to customize the toolbar in the Vue Document Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/toolbar-customization.html).