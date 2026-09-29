---
layout: post
title: Move Selection to a Position in Angular DOCX Editor | Syncfusion
description: Move the document selection to a specific position in Syncfusion® Angular DOCX Editor using APIs for precise navigation and content editing.
platform: document-processing
control: Move selection to specific position 
documentation: ug
domainurl: ##DomainURL##
---

# How to Move Selection to a Position in Angular DOCX Editor

Using [`select`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection#select) API in selection module, you can set the cursor position anywhere in the document.

## Select content based on start and end hierarchical index

The hierarchical index will be in the format below.

`sectionIndex;blockIndex;offset`

The following code snippet illustrates how to select using hierarchical index.

```typescript
// Selection will occur between provided start and end offset
this.documentEdContainerIns.documentEditor.editor.insertText("Welcome");
// The following code will select the letters "We" from inserted text "Welcome"
this.documentEdContainerIns.documentEditor.selection.select("0;0;0", "0;0;2");
```

The following table illustrates the hierarchical index in detail.

| Element |Hierarchical Format | Explanation |
|-----------------|-------------|----|
|Move selection to Paragraph |sectionIndex;blockIndex;offset <br>**Ex:** 0;0;0|It moves the cursor to the start of paragraph.|
|Move selection to Table|sectionIndex;tableIndex;rowIndex;cellIndex;blockIndex;offset <br>**Ex:** 0;0;0;0;1;0|It moves the cursor to the second paragraph which is inside first row and cell of table.|
|Move selection to header|pageIndex;H;sectionIndex;blockIndex;offset<br>**Ex:** 1;H;0;0;0|It moves cursor to the header in second page.|
|Move selection to Footer|pageIndex;F;sectionIndex;blockIndex;offset<br>**Ex:** 1;F;0;0;0|It moves cursor to the footer in second page.|

## Get the selection start and end hierarchical index

Using [`startOffset`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection#startoffset), you can get the start hierarchical index, which denotes the start index of the current selection.
Similarly, using [`endOffset`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection#endoffset), you can get the end hierarchical index, which denotes the end index of the current selection.

The following code snippet illustrates how to get the selection start and end offset on selection changes in document.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true (selectionChange)="selectionChanges()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  selectionChanges() {
    //Get the start index of current selection
    let startOffset: string =
      this.container.documentEditor.selection.startOffset;
    //Get the end index of current selection
    let endOffset: string = this.container.documentEditor.selection.endOffset;
  }
}
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

DOCX Editor has [`selectionChange`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#selectionchange) event which is triggered whenever the selection changes in the document.

## Select the content based on left and top positions

Here, you can specify the [`selection settings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selectionSettings) to select the content based on left and top positions.

x denotes the left position, y denotes the top position, and extend denotes whether to extend or update the selection.

Please refer to the code sample below for reference.

```typescript
this.container.documentEditor.selection.select({ x: 188.4814208984375 , y: 662.00005, extend: true });
```