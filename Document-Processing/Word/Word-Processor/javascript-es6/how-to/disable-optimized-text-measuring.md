---
layout: post
title: Disable optimized text measuring in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about Disable optimized text measuring in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable optimized text measuring 
documentation: ug
domainurl: ##DomainURL##
---

# Disable optimized text measuring in JavaScript (ES6) Document editor control

Starting from v19.3.0.x, the accuracy of text size measurements in Document editor is improved such as to match Microsoft Word pagination for most Word documents. This improvement is included as default behavior along with an optional API [`enableOptimizedTextMeasuring`](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettingsModel#enableoptimizedtextmeasuring) in Document editor settings.  

If you want the Document editor component to retain the document pagination (display page-by-page) behavior like v19.2.0.x and older versions. Then you can disable this optimized text measuring improvement, by setting `false` to [`enableOptimizedTextMeasuring`](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettingsModel#enableoptimizedtextmeasuring) property of  JavaScript Document Editor component.

## Disable optimized text measuring in `DocumentEditorContainer` instance

The following example code illustrates how to disable optimized text measuring improvement in `DocumentEditorContainer` instance.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

// Disable optimized text measuring improvement
container.documentEditorSettings = { enableOptimizedTextMeasuring: false };

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
```

## Disable optimized text measuring in `DocumentEditor` instance

The following example code illustrates how to disable optimized text measuring improvement in `DocumentEditor` instance.

```ts
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, height: '370px', serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' });

documenteditor.enableAllModules();

// Disable optimized text measuring improvement
documenteditor.documentEditorSettings = { enableOptimizedTextMeasuring: false };

documenteditor.appendTo('#DocumentEditor');
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.