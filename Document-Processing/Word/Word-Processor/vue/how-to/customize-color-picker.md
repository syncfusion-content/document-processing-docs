---
layout: post
title: Customize the color picker in the Vue DOCX Editor | Syncfusion
description: Learn here all about how to customize the color picker in the Syncfusion Vue DOCX Editor component of Syncfusion Essential JS 2 and more.
control: Customize color picker
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Customize the color picker in the Vue DOCX Editor component

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) provides an option to customize the color picker using [`colorPickerSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorSettingsModel#colorpickersettings) in the Document Editor settings. The color picker offers customization options for the default appearance by allowing selection between Picker or Palette mode for font and border colors.

Similarly, you can use the [`documentEditorSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#documenteditorsettings) property for the DocumentEditor also.

The following example code illustrates how to customize the color picker in the Document Editor container.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :documentEditorSettings='settings' height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return { serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
      settings:{ colorPickerSettings: { mode: 'Palette', modeSwitcher: true, showButtons: true } } };
    },
    provide: {
      //Inject required modules.
      DocumentEditorContainer: [Toolbar]
    }
  }
</script>
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

| Property | Behavior |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable the ColorPicker component. If it is disabled, the ColorPicker popup will not open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to 'Picker' |
| modeSwitcher | It is used to show / hide the mode switcher button of the ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of the ColorPicker component. Defaults to true |


N> According to the Word document specifications, it is not possible to modify the **`Predefined Highlight colors`**. This limitation means that the range of highlight colors provided by default cannot be customized or expanded upon by the user to suit individual preferences. Consequently, users must work within the confines of the existing color palette, as no functionality currently exists to modify or personalize these predefined highlighting options.

## Online Demo

Explore how to customize the color picker in the Vue Document Editor for Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/color-picker-customization.html).
