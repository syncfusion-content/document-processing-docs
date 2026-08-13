---
layout: post
title: How to Disable Drag and Drop in JavaScript DOCX Editor | Syncfusion
description: Disable drag and drop functionality in Syncfusion® JavaScript DOCX Editor to prevent users from moving content within the document editor component.
platform: document-processing
control: Disable drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable Drag and Drop in JavaScript DOCX Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides support to drag and drop contents within the component and it can be customized(enable and disable) using [`allowDragAndDrop`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documenteditorsettings#allowDragAndDrop) property in Document editor settings.

The following example illustrates to disable the drag and drop option in DocumentEditorContainer.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#documenteditorsettings#allowDragAndDrop) property is `true`.

The following example illustrates to disable the drag and drop option in DocumentEditor.

```ts
let editor: DocumentEditor = new DocumentEditor({ height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#documenteditorsettings#allowDragAndDrop) property is `true`.