---
layout: post
title: Change Search Highlight Color in JS (ES6) DOCX Editor | Syncfusion
description: Learn here all about Change the Default Search Highlight Color in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change the Default Search Highlight Color
documentation: ug
domainurl: ##DomainURL##
---

# Change the Search Highlight Color in JavaScript (ES6) DOCX Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides an option to change the default search highlight color using [`searchHighlightColor`](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettingsModel#searchhighlightcolor) in the Document Editor settings. The highlight color specified in [`documentEditorSettings`](https://ej2.syncfusion.com/documentation/api/document-editor-container#documenteditorsettings) will be applied to the searched text. By default, the search highlight color is `yellow`.

Similarly, you can use the [`documentEditorSettings`](https://ej2.syncfusion.com/documentation/api/document-editor#documenteditorsettings) property for the DocumentEditor as well.

The following example code illustrates how to change the default search highlight color.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px',
// Add required search highlight color
  documentEditorSettings: {
    searchHighlightColor: 'Grey',
  }
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

The output will be as shown below:

![How to change the default search highlight color](../images/search-color.png)