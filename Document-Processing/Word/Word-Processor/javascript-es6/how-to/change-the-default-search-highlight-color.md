---
layout: post
title: Change the default search highlight color in EJ2 TypeScript Document editor control | Syncfusion
description: Learn here all about Change the default search highlight color in Syncfusion EJ2 TypeScript Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change the default search highlight color 
publishingplatform: EJ2 TypeScript
documentation: ug
domainurl: ##DomainURL##
---

# Change the default search highlight color in EJ2 TypeScript Document editor control

Document editor provides an options to change the default search highlight color using [`searchHighlightColor`](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettingsModel#searchhighlightcolor) in Document editor settings. The highlight color which is given in [`documentEditorSettings`](https://ej2.syncfusion.com/documentation/api/document-editor-container#documenteditorsettings) will be highlighted on the searched text. By default, search highlight color is `yellow`.

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to change the default search highlight color.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,height: '590px',
// Add required search highlight color
  documentEditorSettings: {
    searchHighlightColor: 'Grey',
  }
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.appendTo('#container');

```

> The Web API hosted link `https://services.syncfusion.com/js/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Output will be like below:

![How to change the default search highlight color](../images/search-color.png)