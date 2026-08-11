---
layout: post
title: Disable Auto Focus in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn how to disable auto focus in Syncfusion JavaScript (ES6) Document Editor to prevent the editor from capturing focus on load.
platform: document-processing
control: Disable Auto Focus
documentation: ug
domainurl: ##DomainURL##
---

# Disable Auto Focus in JavaScript (ES6) Document Editor

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) gets focused automatically when the page loads. If you want the Document Editor not to be focused automatically, it can be customized.

The following example illustrates how to disable auto focus in the DocumentEditorContainer.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', enableAutoFocus: false });
```

N> The default value of the [`enableAutoFocus`](https://ej2.syncfusion.com/documentation/api/document-editor-container#enableautofocus) property is `true`.

The following example illustrates how to disable auto focus in the DocumentEditor.

```ts
let editor: DocumentEditor = new DocumentEditor({ height: '590px', enableAutoFocus: false });
```

N> The default value of the [`enableAutoFocus`](https://ej2.syncfusion.com/documentation/api/document-editor#enableautofocus) property is `true`.