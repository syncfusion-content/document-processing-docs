---
layout: post
title: Move Selection to a Position in JavaScript DOCX Editor | Syncfusion
description: Move the document selection to a specific position in Syncfusion® JavaScript DOCX Editor using APIs for precise navigation and content editing.
platform: document-processing
control: Move Selection to a Specific Position
documentation: ug
domainurl: ##DomainURL##
---

# How to Move Selection to a Position in JavaScript DOCX Editor

Using the [`select`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#select) API in the selection module, you can set the cursor position anywhere in the document.

## Select Content Based on Start and End Hierarchical Index

The hierarchical index will be in the format below.

`sectionIndex;blockIndex;offset`

The following code snippet illustrates how to select using the hierarchical index.

```ts
// Selection will occur between the provided start and end offset
container.documentEditor.editor.insertText("Welcome");
// The below code will select the letters "We" from the inserted text "Welcome"
container.documentEditor.selection.select("0;0;0", "0;0;2");
```

The following table illustrates the hierarchical index in detail.

| Element |Hierarchical Format | Explanation |
|-----------------|-------------|----|
|Move selection to Paragraph |sectionIndex;blockIndex;offset <br>**Ex:** 0;0;0|It moves the cursor to the start of paragraph.|
|Move selection to Table|sectionIndex;tableIndex;rowIndex;cellIndex;blockIndex;offset <br>**Ex:** 0;0;0;0;1;0|It moves the cursor to the second paragraph which is inside first row and cell of table.|
|Move selection to header|pageIndex;H;sectionIndex;blockIndex;offset<br>**Ex:** 1;H;0;0;0|It moves cursor to the header in second page.|
|Move selection to Footer|pageIndex;F;sectionIndex;blockIndex;offset<br>**Ex:** 1;F;0;0;0|It moves cursor to the footer in second page.|

## Get the Selection Start and End Hierarchical Index

Using [`startOffset`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#startoffset), you can get the start hierarchical index which denotes the start index of the current selection. Similarly, using [`endOffset`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selection#endoffset), you can get the end hierarchical index which denotes the end index of the current selection.

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
// Get the start index of the current selection
let startOffset:string = container.documentEditor.selection.startOffset;
// Get the end index of the current selection
let endOffset:string = container.documentEditor.selection.endOffset;
};
```

The DOCX Editor has a [`selectionChange`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#selectionchange) event which is triggered whenever the selection changes in the document.

## Select Content Based on Left and Top Position

Here, you can specify the [`selection settings`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/selectionSettings) to select the content based on the left and top positions.

x denotes the left position, y denotes the top position, and extend denotes whether to extend or update the selection.

Please check the code sample below for reference.

```ts
container.documentEditor.selection.select({ x: 188.4814208984375 , y: 662.00005, extend: true });
```