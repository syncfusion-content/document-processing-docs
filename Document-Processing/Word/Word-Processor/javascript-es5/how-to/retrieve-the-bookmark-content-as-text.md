---
layout: post
title: Retrieve Bookmark Content in JavaScript DOCX Editor | Syncfusion
description: Retrieve bookmark content as plain text and retrieve document data in SFDT format using Syncfusion® JavaScript DOCX Editor.
platform: document-processing
control: Retrieve the Bookmark Content as Text
documentation: ug
domainurl: ##DomainURL##
---

# How to Retrieve Bookmark Content as Text in JavaScript DOCX Editor

You can get the bookmark or whole document content from the [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) component as plain text and SFDT (rich text).

## Get the bookmark content as plain text

You can use the [`selectBookmark`](../bookmark#select-bookmark) API to navigate to the bookmark and use the [`text`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the bookmark content as plain text from the DOCX Editor.

The following example code illustrates how to get the bookmark content as plain text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
// To insert text at the cursor position
container.documentEditor.editor.insertText('Document editor');
// To select all the content in the document
container.documentEditor.selection.selectAll();
// Insert bookmark to selected content
container.documentEditor.editor.insertBookmark('Bookmark1');

// Provide your bookmark name to navigate to a specific bookmark
container.documentEditor.selection.selectBookmark('Bookmark1');

// To get the selected content as text
 let selectedContent: string = container.documentEditor.selection.text;
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

To get the bookmark content as SFDT (rich text), please refer to this [`link`](../how-to/get-the-selected-content#get-the-selected-content-as-sfdt-rich-text).

## Get the whole document content as text

You can use the [`text`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the whole document content as plain text from the DOCX Editor.

The following example code illustrates how to get the whole document content as plain text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
// To insert text at the cursor position
container.documentEditor.editor.insertText('Document editor');
// To select all the content in the document
container.documentEditor.selection.selectAll();

// To get the content as text
 let selectedContent: string = container.documentEditor.selection.text;
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Get the whole document content as SFDT (rich text)

You can use the [`serialize`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#serialize) API to get the whole document content as an SFDT string from the DOCX Editor.

The following example code illustrates how to get the whole document content as SFDT.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
// To insert text at the cursor position
container.documentEditor.editor.insertText('Document editor');

// To get the content as SFDT
 let selectedContent: string = container.documentEditor.serialize();
```


## Get the header content as text

You can use the [`goToHeader`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#gotoheader) API to navigate the selection to the header and then use the [`text`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the content as plain text.

The following example code illustrates how to get the header content as plain text.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
// To navigate the selection to the header
container.documentEditor.selection.goToHeader();
// To insert text at the cursor position
container.documentEditor.editor.insertText('Document editor');
// To select all the content in the document
container.documentEditor.selection.selectAll();

// To get the selected content as text
 let selectedContent: string = container.documentEditor.selection.text;
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can use the [`goToFooter`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#gotofooter) API to navigate the selection to the footer and then use the [`text`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the content as plain text.