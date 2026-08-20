---
layout: post
title: Change Search Highlight Color in JavaScript DOCX Editor | Syncfusion
description: Change the default search highlight color in Syncfusion® JavaScript DOCX Editor using the search highlight color property..
platform: document-processing
control: Change the default search highlight color 
documentation: ug
domainurl: ##DomainURL##
---

# How to Change Search Highlight Color in JavaScript DOCX Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides an option to change the default search highlight color using [`searchHighlightColor`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorSettingsModel#searchhighlightcolor) in Document Editor settings. The color specified for `searchHighlightColor` within [`documentEditorSettings`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#documenteditorsettings) is used to highlight the searched text. By default, the search highlight color is `yellow`.

Similarly, you can use the [`documentEditorSettings`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#documenteditorsettings) property for the DocumentEditor also.

The following example code illustrates how to change the default search highlight color.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,height: '590px',
// Add required search highlight color
  documentEditorSettings: {
    searchHighlightColor: 'Grey',
  }
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');

```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

The output will look like the following:

![How to change the default search highlight color](../images/search-color.png)