---
layout: post
title: Disable Header Footer Editing in TypeScript DOCX Editor | Syncfusion
description: Disable header and footer editing in Syncfusion® TypeScript DOCX Editor based on selection context to restrict modifications within document sections.
platform: document-processing
control: Disable Header and Footer Edit in Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable Header and Footer Editing in TypeScript DOCX Editor

## Disable header and footer edit in a DocumentEditorContainer instance

You can use the [`restrictEditing`](https://ej2.syncfusion.com/documentation/api/document-editor-container#restrictediting) property to disable header and footer editing based on the selection context type.

The `restrictEditing` property allows you to restrict document modification and makes the document read-only. So, by using this property, and if the selection is inside the header or footer, you can set this property to true.

The following example code illustrates how to disable header and footer editing in a `DocumentEditorContainer` instance.

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
    // Change the document to read only mode
    container.restrictEditing = true;
  } else {
    // Change the document to editable mode
    container.restrictEditing = false;
  }
};
```

Otherwise, you can disable clicking inside the Header or Footer by using the [`closeHeaderFooter`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#closeheaderfooter) API in the selection module.

The following example code illustrates how to close the header and footer when the selection is inside the header or footer in a `DocumentEditorContainer` instance.

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
    // Close the header and footer
    container.documentEditor.selection.closeHeaderFooter();
  }
};
```

## Disable header and footer edit in a DocumentEditor instance

Like `restrictEditing`, you can use the [`isReadOnly`](https://ej2.syncfusion.com/documentation/api/document-editor#isreadonly) property in the Document Editor to disable header and footer editing.

The following example code illustrates how to disable header and footer editing in a `DocumentEditor` instance.

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
    // Change the document to read only mode
    documentEditor.isReadOnly = true;
  } else {
    // Change the document to editable mode
    documentEditor.isReadOnly = false;
  }
};
```
