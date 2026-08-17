---
layout: post
title: Disable Header Footer Editing in JavaScript DOCX Editor | Syncfusion
description: Learn here all about disabling editing in header and footer JavaScript (ES5) Document editor control.
platform: document-processing
control: Disable Header and Footer Edit in Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# Disable header and footer edit in JavaScript (ES5) Document editor

## Disable Header and Footer Edit in DocumentEditorContainer Instance

You can use the [`restrictEditing`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#restrictediting) property to disable header and footer editing based on the selection context type.

The `restrictEditing` property allows you to restrict document modifications and enable read-only mode. When the selection is inside a header or footer, set this property to `true`.

The following example code illustrates how to disable header and footer editing in the `DocumentEditorContainer` instance.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let hostUrl: string = 'https://document.syncfusion.com/web-services/word-editor/';

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = hostUrl + 'api/documenteditor/';
container.appendTo('#container');
container.selectionChange = (): void => {
  // Check whether selection is in header
  if (container.documentEditor.selection.contextType.indexOf('Header') > -1 ||
    // Check whether selection is in Footer
    container.documentEditor.selection.contextType.indexOf('Footer') > -1) {
    // Change the document to read-only mode
    container.restrictEditing = true;
  } else {
    // Change the document to editable mode
    container.restrictEditing = false;
  }
};
```

Otherwise, you can disable clicking inside a header or footer by using the [`closeHeaderFooter`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#closeheaderfooter) API in the selection module.

The following example code illustrates how to close the header and footer when the selection is inside a header or footer in the `DocumentEditorContainer` instance.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let hostUrl: string = 'https://document.syncfusion.com/web-services/word-editor/';

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = hostUrl + 'api/documenteditor/';
container.appendTo('#container');
container.selectionChange = (): void => {

   // Check whether selection is in header
   if (container.documentEditor.selection.contextType.indexOf('Header') > -1 ||
    // Check whether selection is in Footer
     container.documentEditor.selection.contextType.indexOf('Footer') > -1) {
    // Close header Footer
    container.documentEditor.selection.closeHeaderFooter();
  }
};
```

## Disable Header and Footer Edit in DocumentEditor Instance

Like `restrictEditing`, you can use the [`isReadOnly`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#isreadonly) property in the Document Editor to disable header and footer editing.

The following example code illustrates how to disable header and footer editing in the `DocumentEditor` instance.

```ts
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

let hostUrl: string = 'https://document.syncfusion.com/web-services/word-editor/';

let documentEditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, height: '590px' });
documentEditor.enableAllModules();
documentEditor.serviceUrl = hostUrl + 'api/documenteditor/';
documentEditor.appendTo('#documentEditor');
documentEditor.selectionChange = (): void => {
  // Check whether selection is in header
  if (documentEditor.selection.contextType.indexOf('Header') > -1 ||
    // Check whether selection is in Footer
    documentEditor.selection.contextType.indexOf('Footer') > -1) {
    // Change the document to read-only mode
    documentEditor.isReadOnly = true;
  } else {
    // Change the document to editable mode
    documentEditor.isReadOnly = false;
  }
};
```
