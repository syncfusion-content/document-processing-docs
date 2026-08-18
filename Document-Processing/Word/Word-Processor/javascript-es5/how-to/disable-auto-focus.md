---
layout: post
title: How to Disable Auto Focus in JavaScript DOCX Editor | Syncfusion
description: Disable the auto focus behavior in Syncfusion® JavaScript DOCX Editor to prevent the editor from automatically receiving focus when the page loads.
platform: document-processing
control: Disable Auto Focus
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable Auto Focus in JavaScript DOCX Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) is focused automatically when the page loads. To prevent the Document Editor from being focused automatically, set the `enableAutoFocus` property to `false`.

The following example illustrates how to disable the auto focus in DocumentEditorContainer.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', enableAutoFocus: false });
```

N> Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#enableautofocus) property is `true`.

The following example illustrates how to disable the auto focus in DocumentEditor.

```ts
let editor: DocumentEditor = new DocumentEditor({ height: '590px', enableAutoFocus: false });
```

N> Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#enableautofocus) property is `true`.