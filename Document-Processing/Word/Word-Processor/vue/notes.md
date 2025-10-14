---
layout: post
title: Notes in Vue Document editor component | Syncfusion
description: Learn here all about Notes in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Notes 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Notes in Vue Document editor component

DocumentEditorContainer component provides support for inserting footnotes and endnotes through the in-built toolbar. Refer to the following screenshot.

![Insert footnote endnote](images/note-toolbar.jpg)

The Footnotes and endnotes are both ways of adding extra bits of information to your writing outside of the main text. You can use footnotes and endnotes to add side comments to your work or to place other publications like books, articles, or websites.

## Insert footnotes

Document Editor exposes an API to insert footnotes at cursor position programmatically or can be inserted to the end of selected text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <button v-on:click='Insertfootnote'>Insert footnote</button>
    </div>
    <ejs-documenteditor id="container6" height="370px" style="width: 100%;" :serviceUrl='serviceUrl' :isReadOnly='false'
      :enablePrint='true' :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true'
      :enableSearch='true' :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true'
      :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true'
      :enableTableDialog='true' :enableBookmarkDialog='true' :enableTableOfContentsDialog='true'
      :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true'
      :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true'
      :enableTableOptionsDialog='true'></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documenteditor = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

provide('DocumentEditor', [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]);

const Insertfootnote = function () {
  documenteditor.value.editor.insertFootnote();
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <button v-on:click='Insertfootnote'>Insert footnote</button>
    </div>
    <ejs-documenteditor id="container6" height="370px" style="width: 100%;" :serviceUrl='serviceUrl' :isReadOnly='false'
      :enablePrint='true' :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true'
      :enableSearch='true' :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true'
      :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true'
      :enableTableDialog='true' :enableBookmarkDialog='true' :enableTableOfContentsDialog='true'
      :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true'
      :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true'
      :enableTableOptionsDialog='true'></ejs-documenteditor>
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
    };
  },
  provide: {
    DocumentEditor: [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
  },
  methods: {
    Insertfootnote: function () {
      this.$refs.documenteditor.editor.insertFootnote();
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>


{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Insert endnotes

Document Editor exposes an API to insert endnotes at cursor position programmatically or can be inserted to the end of selected text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <button v-on:click='Insertendnote'>Insert endnote</button>
    </div>
    <ejs-documenteditor id="container6" style="width: 100%;height: 100%;" :serviceUrl='serviceUrl' :isReadOnly='false'
      :enablePrint='true' :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true'
      :enableSearch='true' :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true'
      :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true'
      :enableTableDialog='true' :enableBookmarkDialog='true' :enableTableOfContentsDialog='true'
      :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true'
      :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true'
      :enableTableOptionsDialog='true'></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const documenteditor = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

provide('DocumentEditor', [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog])

const Insertendnote = function () {
  documenteditor.editor.insertEndnote();
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div>
      <button v-on:click='Insertendnote'>Insert endnote</button>
    </div>
    <ejs-documenteditor id="container6" style="width: 100%;height: 100%;" :serviceUrl='serviceUrl' :isReadOnly='false'
      :enablePrint='true' :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true'
      :enableSearch='true' :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true'
      :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true'
      :enableTableDialog='true' :enableBookmarkDialog='true' :enableTableOfContentsDialog='true'
      :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true'
      :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true'
      :enableTableOptionsDialog='true'></ejs-documenteditor>
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
    };
  },
  provide: {
    DocumentEditor: [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
  },
  methods: {
    Insertendnote: function () {
      this.$refs.documenteditor.editor.insertEndnote();
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Update or edit footnotes and endnotes

You can update or edit the footnotes and endnotes using the built-in context menu shown up by right-clicking it. The footnote endnote dialog box popup and you can customize the number format and start at. Refer to the following screenshot.

![Update or edit footnotes and endnotes](images/notes-option.jpg)