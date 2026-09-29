---
layout: post
title: How to Get Current Word in JavaScript DOCX Editor | Syncfusion
description: Get the current word or paragraph content as plain text and SFDT format in Syncfusion® JavaScript DOCX Editor for content processing and analysis.
platform: document-processing
control: Get Current Word
documentation: ug
domainurl: ##DomainURL##
---

# How to Get Current Word in JavaScript DOCX Editor

You can get the current word or paragraph content from the [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) component as plain text and SFDT (rich text).

## Select and Get the Word at the Current Cursor Position

You can use the [`selectCurrentWord`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#selectcurrentword) API in the selection module to select the current word at the cursor position and use the [`text`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the selected content as plain text from the DOCX Editor.

The following example code illustrates how to select and get the current word as plain text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To select the current word in document
container.documentEditor.selection.selectCurrentWord();

// To get the selected content as text
let selectedContentText: string = container.documentEditor.selection.text;
// To get the selected content as SFDT (rich text)
let selectedContentSFDT: string = container.documentEditor.selection.sfdt;
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

To get the bookmark content as SFDT (rich text), please check this [`link`](../how-to/get-the-selected-content#get-the-selected-content-as-sfdt-rich-text)

## Select and Get the Paragraph at the Current Cursor Position

You can use the [`selectParagraph`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#selectparagraph) API in the selection module to select the current paragraph at the cursor position and use the [`text`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API or [`sfdt`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#sfdt-code-classlanguage-textstringcode) API to get the selected content as plain text or SFDT from the DOCX Editor.

The following example code illustrates how to select and get the current paragraph as SFDT.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
// To insert text in cursor position
container.documentEditor.editor.insertText('Document editor');
// To select the current paragraph in document
container.documentEditor.selection.selectParagraph();

// To get the selected content as text
let selectedContentText: string = container.documentEditor.selection.text;
// To get the selected content as SFDT (rich text)
let selectedContentSFDT: string = container.documentEditor.selection.sfdt;
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
