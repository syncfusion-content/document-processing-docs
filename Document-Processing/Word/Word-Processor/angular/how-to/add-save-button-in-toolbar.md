---
layout: post
title: Add a Save Button in the Angular DOCX Editor Toolbar | Syncfusion
description: Learn how to add a save button to the Syncfusion Angular Document Editor toolbar.
platform: document-processing
control: Add save button tool bar 
documentation: ug
domainurl: ##DomainURL##
---

# Add a Save Button in the Angular Document Editor Toolbar

## To Add a Save Button to the Existing Toolbar in DocumentEditorContainer

[Angular Document Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) Container allows you to add a new button to the existing items in a toolbar. Use [`CustomToolbarItemModel`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/customToolbarItemModel/) to define the custom item, combine it with the existing items in the [`toolbarItems`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#toolbaritems) property, and define the click action in the [`toolbarClick`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/clickEventArgs/) event.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import {
  CustomToolbarItemModel,
  DocumentEditorContainerModule,
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `
    <ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [toolbarItems]="items" 
      (toolbarClick)="onToolbarClick($event)" 
      [enableToolbar]="true">
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;

  // Define custom toolbar item
  public toolItem: CustomToolbarItemModel = {
    prefixIcon: 'e-save icon',
    tooltipText: 'Save the Document',
    text: 'Save',
    id: 'save',
  };

  // Define toolbar items array
  public items = [
    'New',
    'Open',
    this.toolItem,
    'Separator',
    'Undo',
    'Redo',
    'Separator',
    'Image',
    'Table',
    'Hyperlink',
    'Bookmark',
    'TableOfContents',
    'Separator',
    'Header',
    'Footer',
    'PageSetup',
    'PageNumber',
    'Break',
    'InsertFootnote',
    'InsertEndnote',
    'Separator',
    'Find',
    'Separator',
    'Comments',
    'TrackChanges',
    'Separator',
    'LocalClipboard',
    'RestrictEditing',
    'Separator',
    'FormFields',
    'UpdateFields',
    'ContentControl',
  ];

  ngOnInit(): void {}

  // Event handler for toolbar clicks
  onToolbarClick(args: ClickEventArgs): void {
    switch (args.item.id) {
      case 'save':
        // Save the document (downloads as Docx).
        this.container?.documentEditor.save('sample', 'Docx');
        break;
    }
  }
}
```

N> The default value of `toolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.