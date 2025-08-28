---
layout: post
title: How to disable auto focus in document editor in Vue Document editor component | Syncfusion
description: Learn here all about How to disable and enable auto focus in document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to disable auto focus in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to disable auto focus in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Document Editor component

Document Editor gets focused automatically when the page loads. If you want the Document editor not to be focused automatically it can be customized.

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