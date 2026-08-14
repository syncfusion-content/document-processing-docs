---
layout: post
title: How to Disable Auto Focus in Vue DOCX Editor | Syncfusion
description: Learn here all about How to disable and enable auto focus in document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to disable auto focus in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable Auto Focus in Vue DOCX Editor

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) gets focused automatically when the page loads. If you do not want the Document Editor to be focused automatically, you can customize this behavior.

The following example illustrates how to disable the auto focus in DocumentEditorContainer.

```typescript
<ejs-documenteditorcontainer ref="doceditcontainer" :enableAutoFocus='false' height='600px'></ejs-documenteditorcontainer>
```

N> The default value of [`enableAutoFocus`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#enableautofocus) property is `true`.

## Disable auto focus in DocumentEditor

The following example illustrates how to disable the auto focus in DocumentEditor.

```typescript
<ejs-documenteditor ref="doceditcontainer" :enableAutoFocus='false' height='600px'></ejs-documenteditor>
```

N> The default value of [`enableAutoFocus`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#enableautofocus) property is `true`.