---
layout: post
title: Move Selection to a Specific Position in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn here all about moving the selection to a specific position in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Move Selection to a Specific Position
documentation: ug
domainurl: ##DomainURL##
---

# Move Selection to a Specific Position in JavaScript (ES6) Document Editor

Using the [`select`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#select) API in the selection module, you can set the cursor position anywhere in the document.

## Select content based on start and end hierarchical index

The hierarchical index will be in the format below.

`sectionIndex;blockIndex;offset`

The following code snippet illustrates how to select using a hierarchical index.

```ts
// Selection will occur between the provided start and end offset
documentEditor.editor.insertText("Welcome");
// The below code will select the letters "We" from the inserted text "Welcome"
documentEditor.selection.select("0;0;0", "0;0;2");
```

The following table illustrates the hierarchical index format in detail.

| Element | Hierarchical Format | Explanation |
|-----------------|-------------|----|
|Move the selection to a Paragraph|sectionIndex;blockIndex;offset <br>**Ex:** 0;0;0|It moves the cursor to the start of the paragraph.|
|Move the selection to a Table|sectionIndex;tableIndex;rowIndex;cellIndex;blockIndex;offset <br>**Ex:** 0;0;0;0;1;0|It moves the cursor to the second paragraph which is inside the first row and cell of the table.|
|Move the selection to a Header|pageIndex;H;sectionIndex;blockIndex;offset<br>**Ex:** 1;H;0;0;0|It moves the cursor to the header on the second page.|
|Move the selection to a Footer|pageIndex;F;sectionIndex;blockIndex;offset<br>**Ex:** 1;F;0;0;0|It moves the cursor to the footer on the second page.|

## Get the selection start and end hierarchical index

Using [`startOffset`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#startoffset), you can get the start hierarchical index which denotes the start index of the current selection. Similarly, using [`endOffset`](https://ej2.syncfusion.com/documentation/api/document-editor/selection#endoffset), you can get the end hierarchical index which denotes the end index of the current selection.

The following code snippet illustrates how to get the selection start and end offset on selection changes in the document.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let hostUrl: string = 'https://document.syncfusion.com/web-services/word-editor/';

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = hostUrl + 'api/documenteditor/';
container.appendTo('#container');
// Event gets triggered on selection change in the document
container.selectionChange = (): void => {
//Get the start index of the current selection
let startOffset: string = container.documentEditor.selection.startOffset;
//Get the end index of the current selection
let endOffset: string = container.documentEditor.selection.endOffset;
};
```

The Document Editor has a [`selectionChange`](https://ej2.syncfusion.com/documentation/api/document-editor#selectionchange) event which is triggered whenever the selection changes in the document.

## Select the content based on left and top positions

Here, you can specify the [`selection settings`](https://ej2.syncfusion.com/documentation/api/document-editor/selectionSettings/) to select the content based on the left and top positions.

The `x` value denotes the left position, the `y` value denotes the top position, and the `extend` value denotes whether to extend or update the selection.

Please check the code sample below for reference.

```ts
container.documentEditor.selection.select({ x: 188.4814208984375, y: 662.00005, extend: true });
```