---
layout: post
title: History in Angular DOCX Editor | Syncfusion
description: History in Angular DOCX Editor tracks editing actions to enable undo and redo operations for efficient document editing.
platform: document-processing
control: History 
documentation: ug
domainurl: ##DomainURL##
---

# History in Angular DOCX Editor

[Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) tracks the history of all editing actions done in the document, which allows undo and redo functionality.

## Enable or disable history

Inject the ‘EditorHistory’ module in your application to provide history preservation functionality for the DOCX Editor. Refer to the following code example.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { DocumentEditorComponent, SfdtExportService, SelectionService, EditorService, EditorHistoryService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
    selector: 'app-container',
    //specifies the template string for the Document Editor component
    template: `<ejs-documenteditor #document_editor  id="container" style="width: 100%;height: 100%;display:block" [isReadOnly]=false [enableSelection]=true [enableEditor]=true [enableEditorHistory]=true >
    </ejs-documenteditor>`,
    encapsulation: ViewEncapsulation.None,
    //Inject require modules.
    providers: [SfdtExportService, SelectionService, EditorService, EditorHistoryService]
})

export class AppComponent {

}
```

You can enable or disable history preservation for the DOCX Editor instance at any time using the ‘enableEditorHistory’ property. Refer to the following sample code.

```typescript
this.documentEditor.enableEditorHistory = false;
```

## Undo and Redo

You can perform undo and redo using the ‘Ctrl+Z’ and ‘Ctrl+Y’ keyboard shortcuts. The DOCX Editor exposes APIs to do it programmatically.
To undo the last editing operation in the DOCX Editor, refer to the following sample code.

```typescript
this.documentEditor.editorHistory.undo();
```

To redo the last undone action, refer to the following code example.

```typescript
this.documentEditor.editorHistory.redo();
```

## Stack size

History of editing actions is maintained in a stack, so that the last item will be reverted first. By default, the DOCX Editor limits the size of undo and redo stacks to 500 each respectively. However, you can customize this limit. Refer to the following sample code.

```typescript
this.documentEditor.editorHistory.undoLimit = 400;
this.documentEditor.editorHistory.redoLimit = 400;
```

## See also

* [Feature modules](./feature-module)
* [Keyboard shortcuts](./keyboard-shortcut)