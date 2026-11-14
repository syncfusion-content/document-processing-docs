---
layout: post
title: How to Use Custom Fonts in Vue DOCX Editor | Syncfusion
description: Register and use custom fonts in Syncfusion® Vue DOCX Editor so documents render with fonts not installed on the user's machine.
control: Use custom fonts
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Use Custom Fonts in Vue DOCX Editor

The [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) supports custom fonts so that you can use fonts that are not installed on the user's machine. This is helpful when the document contains a specific font, such as a company-branded font, a regional language font, or any other font that is not available by default in the browser.

To use a custom font in the Document Editor, register the font using the [`setCustomFonts`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/index-default#setcustomfonts) API and add the font family name to the [`fontFamilies`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorSettingsModel#fontfamilies) collection in the [`documentEditorSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorSettingsModel) property. The fonts added to the `fontFamilies` collection are displayed in the font family drop-down list and can be applied within the document.

The following example code illustrates how to register a custom font and add it to the font family drop-down list.

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
import { provide, ref } from 'vue';

const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
// Add the custom font family to list it in the font drop-down list.
const settings = { fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Times New Roman', 'Microsoft YaHei'] }
const documenteditor = ref(null);

//Inject required modules.
provide('DocumentEditorContainer', [Toolbar])

// Register the custom font with its font file source.
const onCreated = () => {
  documenteditor.value.ej2Instances.documentEditor.setCustomFonts([
    {
      fontFamily: 'Microsoft YaHei',
      src: "url('https://db.onlinewebfonts.com/t/e63653407669814f5b0eb9bbdc175f77.ttf') format('truetype')"
    }
  ]);
};

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
      // Add the custom font family to list it in the font drop-down list.
      settings: { fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Times New Roman', 'Microsoft YaHei'] }
    };
  },
  provide: {
    //Inject required modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    mountedHandler: function () {
      // Register the custom font with its font file source.
      this.$refs.documenteditor.ej2Instances.documentEditor.setCustomFonts([
        {
          fontFamily: 'Microsoft YaHei',
          src: "url('https://db.onlinewebfonts.com/t/e63653407669814f5b0eb9bbdc175f77.ttf') format('truetype')"
        }
      ]);
    }
  },
  mounted: function () {
    this.mountedHandler();
  }
}
</script>

{% endhighlight %}
{% endtabs %}

