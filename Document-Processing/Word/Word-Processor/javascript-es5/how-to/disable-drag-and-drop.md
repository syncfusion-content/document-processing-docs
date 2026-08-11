---
layout: post
title: Disable Drag and Drop in JavaScript (ES5) DOCX Editor | Syncfusion
description: Learn how to disable drag and drop in Syncfusion JavaScript (ES5) DOCX Editor using the allowDragAndDrop property in document editor settings.
platform: document-processing
control: Disable Drag and Drop
documentation: ug
domainurl: ##DomainURL##
---

# Disable Drag and Drop in JavaScript (ES5) Document Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides support to drag and drop contents within the component. Drag and drop can be enabled or disabled using the [`allowDragAndDrop`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documenteditorsettings#allowDragAndDrop) property in Document Editor settings.

The following example illustrates how to disable the drag and drop option in DocumentEditorContainer.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

N> Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documenteditorsettings#allowDragAndDrop) property is `true`.

The following example illustrates how to disable the drag and drop option in DocumentEditor.

```ts
let editor: DocumentEditor = new DocumentEditor({ height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

N> Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documenteditorsettings#allowDragAndDrop) property is `true`.