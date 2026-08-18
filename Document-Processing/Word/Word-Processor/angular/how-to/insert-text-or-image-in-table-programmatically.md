---
layout: post
title: Insert Text or Image in Table in Angular DOCX Editor | Syncfusion
description: Insert text, paragraphs, and rich text content at the current cursor position in Syncfusion® Angular DOCX Editor using document editing APIs.
platform: document-processing
control: Insert text or image in table programmatically
documentation: ug
domainurl: ##DomainURL##
---

# How to Insert Text or Image in Table in Angular DOCX Editor

Using [Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) APIs, you can insert [`text`](../how-to/insert-text-in-current-position#insert-text-in-current-cursor-position) or [`image`](../image#images) in a [`table`](../table#create-a-table) programmatically based on your requirement.

Use [`selection`](../how-to/move-selection-to-specific-position#selects-content-based-on-start-and-end-hierarchical-index) APIs to navigate between rows and cells.

The following example illustrates how to create a 2×2 table and then add text and image programmatically.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `<ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      (created)="onCreated()"
      [enableToolbar]=true >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  onCreated() {
    // To insert the table in the cursor position
    this.container?.documentEditor.editor.insertTable(2, 2);
    // To insert the image at the first cell of the table
    this.container?.documentEditor.editor.insertImage(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4    //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
    );
    // To move the cursor to next cell
    this.moveCursorToNextCell();
    // To insert the image at the second cell of the table
    this.container?.documentEditor.editor.insertImage(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4    //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
    );
    // To move the cursor to next row
    this.moveCursorToNextRow();
    // To insert text in the cursor position
    this.container?.documentEditor.editor.insertText('Text');
    // To move the cursor to next cell
    this.moveCursorToNextCell();
    // To insert text in the cursor position
    this.container?.documentEditor.editor.insertText('Text');
  }
  moveCursorToNextCell() {
    // To get current selection start offset
    var startOffset = this.container?.documentEditor.selection.startOffset;
    var offSet = (startOffset as string).split(';');
    // Increasing cell index to consider next cell
    var cellIndex = parseInt(offSet[3]) + 1;

    offSet[3] = cellIndex.toString();
    // Changing start offset
    startOffset = offSet.join(';');
    // Navigating selection using select method
    this.container?.documentEditor.selection.select(startOffset, startOffset);
  }

  moveCursorToNextRow() {
    // To get current selection start offset
    var startOffset = this.container?.documentEditor.selection.startOffset;
    var offSet = (startOffset as string).split(';');
    // Increasing row index to consider next row
    var rowIndex = parseInt(offSet[2]) + 1;
    offSet[2] = rowIndex.toString();
    var cellIndex = 0;
    offSet[3] = cellIndex.toString();
    // Changing start offset
    startOffset = offSet.join(';');
    // Navigating selection using select method
    this.container?.documentEditor.selection.select(startOffset, startOffset);
  }
}
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

The output will be as shown below.
![Insert text or image in table programmatically](../images/table-image.png)
