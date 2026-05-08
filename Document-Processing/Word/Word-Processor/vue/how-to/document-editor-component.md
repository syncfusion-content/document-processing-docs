---
layout: post
title: DocumentEditorContainer vs DocumentEditor in Vue DOCX Editor
description: Learn the differences between DocumentEditorContainer and DocumentEditor in the Syncfusion Vue DOCX Editor and understand when and how to use the DocumentEditor component for custom document editing scenarios.
platform: document-processing
control: DocumentEditor
documentation: ug
domainurl: ##DomainURL##
---

## DocumentEditorContainer vs DocumentEditor in Vue DOCX Editor

In this article, we explain the differences between **DocumentEditorContainer** and **DocumentEditor**, and also describe how to use the **DocumentEditor** component in the Vue DOCX Editor.

## Difference between DocumentEditorContainer and DocumentEditor

The **DocumentEditor** component provides a flexible foundation for creating, viewing, and editing Word documents. Unlike **DocumentEditorContainer**, this component allows you to customize the UI options based on your specific requirements.

- **DocumentEditorContainer**: A complete solution with a predefined toolbar and properties pane that provides a comprehensive document editing experience. It allows users to create, view, and edit Word documents with minimal configuration.
- **DocumentEditor**: A customizable component that provides a flexible foundation for creating, viewing, and editing Word documents. This component allows you to build a user interface based on your specific requirements.

### When to Use DocumentEditorContainer and DocumentEditor

- Choose **DocumentEditorContainer** for standard document editing scenarios (applications similar to Microsoft Word).
- Choose **DocumentEditor** for advanced or unique UI/UX requirements where customization is key.

## Registering DocumentEditor Component

You can register the Document editor component in your application by using the `Vue.use()`.

Refer to the code example given below.

```ts
import { DocumentEditorPlugin } from '@syncfusion/ej2-vue-documenteditor';

Vue.use(DocumentEditorPlugin);
```

> Registering `DocumentEditorPlugin` in vue, will register the Document Editor component along with its required child directives globally.

## Adding DocumentEditor Component

Add the Vue Document editor by using `<ejs-documenteditor>` selector in `<template>` section of the `App.vue` file.

```
<template>
    <div id="app">
          <ejs-documenteditor :serviceUrl='serviceUrl' :isReadOnly='false' :enablePrint='true' :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true' :enableSearch='true' :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true' :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableTableDialog='true' :enableBookmarkDialog='true' :enableTableOfContentsDialog='true' :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true' :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true' :enableTableOptionsDialog='true' height="370px"> </ejs-documenteditor>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { DocumentEditorPlugin, DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';
  Vue.use(DocumentEditorPlugin);
  export default {
    data () {
      return {
        serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
      },
      provide: {
        //Inject require modules.
        DocumentEditor: [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
      }
    }
  }
</script>
```
> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

## See Also

* [How to customize toolbar](./customize-tool-bar)
