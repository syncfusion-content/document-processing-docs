---
layout: post
title: Disable header and footer edit in document editor in Vue Document editor component | Syncfusion
description: Learn here all about Disable header and footer edit in document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Disable header and footer edit in document editor 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Disable header and footer edit in document editor in Vue Document editor component

## Disable header and footer edit in DocumentEditorContainer instance

You can use [`restrictEditing`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#restrictediting) property to disable header and footer editing based on selection context type.

RestrictEditing allows you to restrict the document modification and makes the Document read only mode. So, by using this property, and if selection inside header or footer, you can set this property as true.

The following example code illustrates how to header and footer edit in `DocumentEditorContainer` instance.


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
provide('DocumentEditorContainer', [Toolbar])

const selectionChanged = function () {
  // Check whether selection is in header
  if (container.value.ej2Instances.documentEditor.selection.contextType.indexOf('Header') > -1 ||
    // Check whether selection is in Footer
    container.value.ej2Instances.documentEditor.selection.contextType.indexOf('Footer') > -1) {
    // Change the document to read only mode
    container.value.ej2Instances.restrictEditing = true;
  } else {
    // Change the document to editable mode
    container.value.ej2Instances.restrictEditing = false;
  }
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
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    selectionChanged: function () {
      // Check whether selection is in header
      if (this.$refs.container.ej2Instances.documentEditor.selection.contextType.indexOf('Header') > -1 ||
        // Check whether selection is in Footer
        this.$refs.container.ej2Instances.documentEditor.selection.contextType.indexOf('Footer') > -1) {
        // Change the document to read only mode
        this.$refs.container.ej2Instances.restrictEditing = true;
      } else {
        // Change the document to editable mode
        this.$refs.container.ej2Instances.restrictEditing = false;
      }
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Otherwise, you can disable clicking inside Header or Footer by using [`closeHeaderFooter`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#closeheaderfooter) API in selection module.

The following example code illustrates how to close header and footer when selection is inside header or footer in `DocumentEditorContainer` instance.

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
provide('DocumentEditorContainer', [Toolbar])

const selectionChanged = function () {
  // Check whether selection is in header
  if (container.value.ej2Instances.documentEditor.selection.contextType.indexOf('Header') > -1 ||
    // Check whether selection is in Footer
    container.value.ej2Instances.documentEditor.selection.contextType.indexOf('Footer') > -1) {
    // Close header Footer
    container.value.ej2Instances.documentEditor.selection.closeHeaderFooter();
  }
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
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    selectionChanged: function () {
      // Check whether selection is in header
      if (this.$refs.container.ej2Instances.documentEditor.selection.contextType.indexOf('Header') > -1 ||
        // Check whether selection is in Footer
        this.$refs.container.ej2Instances.documentEditor.selection.contextType.indexOf('Footer') > -1) {
        // Close header Footer
        this.$refs.container.ej2Instances.documentEditor.selection.closeHeaderFooter();
      }
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Disable header and footer edit in DocumentEditor instance

Like restrictEditing, you can use [`isReadOnly`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#isreadonly) property in Document editor to disable header and footer edit.

The following example code illustrates how to header and footer edit in `DocumentEditor` instance.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditor :serviceUrl='serviceUrl' ref='documentEditor' :isReadOnly='false' :enablePrint='true'
      :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true' :enableSearch='true'
      :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true' :enableEditor='true'
      :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableTableDialog='true'
      :enableBookmarkDialog='true' :enableTableOfContentsDialog='true' :enablePageSetupDialog='true'
      :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true' :enableFontDialog='true'
      :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true' :enableTableOptionsDialog='true'
      height="370px" v-on:selectionChange="selectionChanged.bind(this)"> </ejs-documenteditor>
  </div>
</template>

<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documentEditor = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditor', [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog])

const selectionChanged = function () {
  // Check whether selection is in header
  if (documentEditor.value.ej2Instances.selection.contextType.indexOf('Header') > -1 ||
    // Check whether selection is in Footer
    documentEditor.value.ej2Instances.selection.contextType.indexOf('Footer') > -1) {
    // Change the document to read only mode
    documentEditor.value.ej2Instances.isReadOnly = true;
  } else {
    // Change the document to editable mode
    documentEditor.value.ej2Instances.isReadOnly = false;
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditor :serviceUrl='serviceUrl' ref='documentEditor' :isReadOnly='false' :enablePrint='true'
      :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true' :enableSearch='true'
      :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true' :enableEditor='true'
      :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableTableDialog='true'
      :enableBookmarkDialog='true' :enableTableOfContentsDialog='true' :enablePageSetupDialog='true'
      :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true' :enableFontDialog='true'
      :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true' :enableTableOptionsDialog='true'
      height="370px" v-on:selectionChange="selectionChanged.bind(this)"> </ejs-documenteditor>
  </div>
</template>

<script>
import { DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
    }
  },
  provide: {
    //Inject require modules.
    DocumentEditor: [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
  },
  methods: {
    selectionChanged: function () {
      // Check whether selection is in header
      if (this.$refs.documentEditor.ej2Instances.selection.contextType.indexOf('Header') > -1 ||
        // Check whether selection is in Footer
        this.$refs.documentEditor.ej2Instances.selection.contextType.indexOf('Footer') > -1) {
        // Change the document to read only mode
        this.$refs.documentEditor.ej2Instances.isReadOnly = true;
      } else {
        // Change the document to editable mode
        this.$refs.documentEditor.ej2Instances.isReadOnly = false;
      }
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.