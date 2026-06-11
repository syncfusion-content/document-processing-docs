---
layout: post
title: Customize font drop down in JavaScript (ES5) Docx Editor | Syncfusion
description: Learn here all about Customize font family drop down in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize font family drop down 
documentation: ug
domainurl: ##DomainURL##
---

# Customize font family drop down in JavaScript (ES5) Document editor

Document editor provides an options to customize the font family drop down list values using [`fontFamilies`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorSettingsModel#fontfamilies) in Document editor settings. Fonts which are added in fontFamilies of [`documentEditorSettings`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#documenteditorsettings) will be displayed on font drop down list of text properties pane and font dialog.

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to change the font families in Document editor container.

```js
var container = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true,height: '590px',
// Add required font families to list it in font drop down
  documentEditorSettings: {
    fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Windings'],
  }
});
 ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#container');
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Output will be like below:

![Font](../images/font-family.png)