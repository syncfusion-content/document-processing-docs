---
layout: post
title: Disable drag and drop in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about Disable drag and drop in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# Disable drag and drop in JavaScript (ES6) Document editor control

Document Editor provides support to drag and drop contents within the component and it can be customized(enable and disable) using [`allowDragAndDrop`](https://ej2.syncfusion.com/documentation/api/document-editor-container/documenteditorsettings#allowDragAndDrop) property in Document editor settings.

The following example illustrates to disable the drag and drop option in DocumentEditorContainer.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/documentation/api/document-editor-container#documenteditorsettings#allowDragAndDrop) property is `true`.

The following example illustrates to disable the drag and drop option in DocumentEditor.

```ts
let editor: DocumentEditor = new DocumentEditor({ height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/documentation/api/document-editor#documenteditorsettings#allowDragAndDrop) property is `true`.