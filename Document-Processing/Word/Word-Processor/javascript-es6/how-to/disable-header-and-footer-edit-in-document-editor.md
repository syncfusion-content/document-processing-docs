---
layout: post
title: Disable header and footer edit in JavaScript (ES6) Document editor | Syncfusion
description: Learn here all about disabling editing in header and footer JavaScript (ES6) Document editor control.
platform: document-processing
control: Disable header and footer edit in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# Disable header and footer edit in JavaScript (ES6) Document editor

## Disable header and footer edit in DocumentEditorContainer instance

You can use [`restrictEditing`](https://ej2.syncfusion.com/documentation/api/document-editor-container#restrictediting) property to disable header and footer editing based on selection context type.

RestrictEditing allows you to restrict the document modification and makes the Document read only mode. So, by using this property, and if selection inside header or footer, you can set this property as true.

The following example code illustrates how to header and footer edit in `DocumentEditorContainer` instance.

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

Otherwise, you can disable clicking inside Header or Footer by using [`closeHeaderFooter`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#closeheaderfooter) API in selection module.

The following example code illustrates how to close header and footer when selection is inside header or footer in `DocumentEditorContainer` instance.

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

## Disable header and footer edit in DocumentEditor instance

Like restrictEditing, you can use [`isReadOnly`](https://ej2.syncfusion.com/documentation/api/document-editor#isreadonly) property in Document editor to disable header and footer edit.

The following example code illustrates how to header and footer edit in `DocumentEditor` instance.

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
