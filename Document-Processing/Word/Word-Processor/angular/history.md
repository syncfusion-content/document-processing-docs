---
layout: post
title: History in Angular DOCX Editor component | Syncfusion
description: Learn about the history (undo/redo) feature in the Syncfusion Angular Document Editor component.
platform: document-processing
control: History 
documentation: ug
domainurl: ##DomainURL##
---

# History in Angular Document Editor component

[Angular Document Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) tracks all editing actions performed on the document, enabling undo and redo functionality.

## Enable or Disable History

Inject the `EditorHistory` module in your application to provide history preservation functionality for `DocumentEditor`. Refer to the following code example.

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

You can enable or disable history preservation at any time using the `enableEditorHistory` property. Use the following code:

```typescript
this.documentEditor.enableEditorHistory = false;
```

## Undo and Redo

You can perform undo and redo with the `Ctrl+Z` and `Ctrl+Y` keyboard shortcuts. The Document Editor also exposes APIs to perform undo and redo programmatically.

To undo the last editing operation in the Document Editor, use the following code:

```typescript
this.documentEditor.editorHistory.undo();
```

To redo the last undone action, use the following code:

```typescript
this.documentEditor.editorHistory.redo();
```

## Stack Size

Editing actions are maintained in a stack, so the most recent action is reverted first. By default, the Document Editor limits both the undo and redo stacks to 500 entries each. You can customize these limits using the following code:

```typescript
//Set undo limit.
this.documentEditor.editorHistory.undoLimit = 400;
//Set redo limit.
this.documentEditor.editorHistory.redoLimit = 400;
```

## See Also

* [Feature modules](./feature-module)
* [Keyboard shortcuts](./keyboard-shortcut)