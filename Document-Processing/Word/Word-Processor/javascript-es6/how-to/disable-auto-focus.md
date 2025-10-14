---
layout: post
title: Disable auto focus in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about Disable auto focus in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable auto focus 
documentation: ug
domainurl: ##DomainURL##
---

# Disable auto focus in JavaScript (ES6) Document editor control

Document Editor gets focused automatically when the page loads. If you want the Document editor not to be focused automatically it can be customized.

The following example illustrates to disable the auto focus in DocumentEditorContainer.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', enableAutoFocus: false});
```

>Note: Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/documentation/api/document-editor-container#enableautofocus) property is `true`.

The following example illustrates to disable the auto focus in DocumentEditor.

```ts
let editor: DocumentEditor = new DocumentEditor({ height: '590px', enableAutoFocus: false});
```

>Note: Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/documentation/api/document-editor#enableautofocus) property is `true`.