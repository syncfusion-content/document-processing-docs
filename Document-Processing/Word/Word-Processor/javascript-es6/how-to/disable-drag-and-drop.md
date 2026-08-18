---
layout: post
title: How to Disable Drag and Drop in TypeScript DOCX Editor | Syncfusion
description: Disable drag and drop functionality in Syncfusion® TypeScript DOCX Editor to prevent users from moving content within the document editor component.
platform: document-processing
control: Disable Drag and Drop
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable Drag and Drop in TypeScript DOCX Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides support to drag and drop contents within the component and it can be customized (enable and disable) using the [`allowDragAndDrop`](https://ej2.syncfusion.com/documentation/api/document-editor-container/documenteditorsettingsmodel#allowdraganddrop) property in the Document Editor settings.

The following example illustrates how to disable the drag and drop option in the DocumentEditorContainer.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

N> The default value of the [`allowDragAndDrop`](https://ej2.syncfusion.com/documentation/api/document-editor-container/documenteditorsettingsmodel#allowdraganddrop) property is `true`.

The following example illustrates how to disable the drag and drop option in the DocumentEditor.

```ts
let editor: DocumentEditor = new DocumentEditor({ height: '590px', documentEditorSettings: { allowDragAndDrop: false } });
```

N> The default value of the [`allowDragAndDrop`](https://ej2.syncfusion.com/documentation/api/document-editor-container/documenteditorsettingsmodel#allowdraganddrop) property is `true`.