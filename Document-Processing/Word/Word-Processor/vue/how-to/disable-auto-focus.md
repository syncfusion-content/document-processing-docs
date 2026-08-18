---
layout: post
title: How to Disable Auto Focus in Vue DOCX Editor | Syncfusion
description: Disable the auto focus behavior in Syncfusion® Vue DOCX Editor to prevent the editor from automatically receiving focus when the page loads.
platform: document-processing
control: How to disable auto focus in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable Auto Focus in Vue DOCX Editor

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) gets focused automatically when the page loads. If you want the Document editor not to be focused automatically it can be customized.

The following example illustrates to disable the auto focus in DocumentEditorContainer.

```typescript
<ejs-documenteditorcontainer ref="doceditcontainer" :enableAutoFocus='false' height='600px'></ejs-documenteditorcontainer>
```

>Note: Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#enableautofocus) property is `true`.
The following example illustrates to disable the auto focus in DocumentEditor.

```typescript
<ejs-documenteditor ref="doceditcontainer" :enableAutoFocus='false' height='600px'></ejs-documenteditor>
```

>Note: Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#enableautofocus) property is `true`.