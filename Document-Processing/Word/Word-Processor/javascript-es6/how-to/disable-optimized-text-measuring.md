---
layout: post
title: Disable Optimized Measuring JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn how to disable optimized text measuring in Syncfusion JavaScript (ES6) Document Editor to revert to older page-by-page pagination behavior.
platform: document-processing
control: Disable Optimized Text Measuring
documentation: ug
domainurl: ##DomainURL##
---

# Disable Optimized Text Measuring in JavaScript (ES6) Document Editor

Starting from v19.3.0.x, the accuracy of text size measurements in [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) is improved to better match Microsoft Word pagination for most Word documents. This improvement is included as the default behavior along with an optional API [`enableOptimizedTextMeasuring`](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettingsModel#enableoptimizedtextmeasuring) in the Document Editor settings.

If you want the Document Editor component to retain the document pagination (display page-by-page) behavior like v19.2.0.x and older versions, then you can disable this optimized text measuring improvement by setting the [`enableOptimizedTextMeasuring`](https://ej2.syncfusion.com/documentation/api/document-editor/documentEditorSettingsModel#enableoptimizedtextmeasuring) property of the JavaScript Document Editor component to `false`.

## Disable optimized text measuring in a `DocumentEditorContainer` instance

The following example code illustrates how to disable the optimized text measuring improvement in a `DocumentEditorContainer` instance.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

// Disable optimized text measuring improvement
container.documentEditorSettings = { enableOptimizedTextMeasuring: false };

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
```

## Disable optimized text measuring in a `DocumentEditor` instance

The following example code illustrates how to disable the optimized text measuring improvement in a `DocumentEditor` instance.

```ts
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

let documentEditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, height: '370px', serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' });

documentEditor.enableAllModules();

// Disable optimized text measuring improvement
documentEditor.documentEditorSettings = { enableOptimizedTextMeasuring: false };

documentEditor.appendTo('#DocumentEditor');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.