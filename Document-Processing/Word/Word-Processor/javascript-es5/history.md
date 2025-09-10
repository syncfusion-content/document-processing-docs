---
layout: post
title: History in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about History in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: History 
documentation: ug
domainurl: ##DomainURL##
---

# History in JavaScript (ES5) Document editor control

Document Editor tracks the history of all editing actions done in the document, which allows undo and redo functionality.

## Enable or disable history

Inject the ‘EditorHistory’ module in your application to provide history preservation functionality for ‘DocumentEditor’. Refer to the following code example.

```ts
//Inject require modules.
DocumentEditor.Inject(Editor, Selection, EditorHistory);
let editor: DocumentEditor = new DocumentEditor({ enableEditor: true, isReadOnly: false });
//Enable editor history module.
editor.enableEditorHistory = true;
```

You can enable or disable history preservation for a Document Editor instance any time using the ‘enableEditorHistory’ property. Refer to the following sample code.

```ts
editor.enableEditorHistory = false;
```

## Undo and redo

You can perform undo and redo by ‘CTRL+Z’ and ‘CTRL+Y’ keyboard shortcuts. Document Editor exposes API to do it programmatically.

To undo the last editing operation in Document Editor, refer to the following sample code.

```ts
editor.editorHistory.undo();
```

To redo the last undone action, refer to the following code example.

```ts
editor.editorHistory.redo();
```

## Stack size

History of editing actions will be maintained in stack, so that the last item will be reverted first. By default, Document Editor limits the size of undo and redo stacks to 500 each respectively. However, you can customize this limit. Refer to the following sample code.

```ts
//Set undo limit.
editor.editorHistory.undoLimit = 400;
//Set redo limit.
editor.editorHistory.redoLimit = 400;
```

## See Also

* [Feature modules](./feature-module)
* [Keyboard shortcuts](./keyboard-shortcut)