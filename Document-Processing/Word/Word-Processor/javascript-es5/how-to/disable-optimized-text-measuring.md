---
layout: post
title: Disable optimized text measuring in JavaScript (ES5) | Syncfusion
description: Learn here all about Disable optimized text measuring in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable Optimized Text Measuring
documentation: ug
domainurl: ##DomainURL##
---

# Disable optimized text measuring in JavaScript (ES5) Document editor

Starting from v19.3.0.x, the accuracy of text size measurements in [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) is improved to better match Microsoft Word pagination for most Word documents. This improvement is included as the default behavior along with an optional API [`enableOptimizedTextMeasuring`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorSettingsModel#enableoptimizedtextmeasuring) in Document Editor settings.

To retain the document pagination (page-by-page) behavior of v19.2.0.x and older versions, set the [`enableOptimizedTextMeasuring`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorSettingsModel#enableoptimizedtextmeasuring) property of the JavaScript Document Editor to `false`.

## Disable Optimized Text Measuring in `DocumentEditorContainer` Instance

The following example code illustrates how to disable optimized text measuring improvement in the `DocumentEditorContainer` instance.

```js

var container = new ej.documenteditor.DocumentEditorContainer({
    enableToolbar: true,
    height: '590px'
});

// Disable optimized text measuring improvement
container.documentEditorSettings = { enableOptimizedTextMeasuring: false };

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
```

## Disable Optimized Text Measuring in `DocumentEditor` Instance

The following example code illustrates how to disable optimized text measuring improvement in the `DocumentEditor` instance.

```js

var documenteditor = new ej.documenteditor.DocumentEditor({ isReadOnly: false, height: '370px', serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' });

documenteditor.enableAllModules();

// Disable optimized text measuring improvement
documenteditor.documentEditorSettings = { enableOptimizedTextMeasuring: false };

documenteditor.appendTo('#DocumentEditor');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.