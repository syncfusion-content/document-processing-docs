---
layout: post
title: How to disable auto focus in Angular DOCX Editor | Syncfusion
description: Learn here all about How to disable and enable auto focus in Syncfusion Angular Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to disable auto focus in Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to disable auto focus in Angular Document Editor component

[Angular Document Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) gets focused automatically when the page loads. If you do not want the Document Editor to be focused automatically, you can customize this behavior.

The following example illustrates how to disable the auto focus in DocumentEditorContainer.

```typescript
<ejs-documenteditorcontainer [enableAutoFocus]=false></ejs-documenteditorcontainer>
```

N> The default value of [`enableAutoFocus`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#enableautofocus) property is `true`.

## Disable auto focus in DocumentEditor

The following example illustrates how to disable the auto focus in DocumentEditor.

```typescript
<ejs-documenteditor [enableAutoFocus]=false></ejs-documenteditor>
```

N> The default value of [`enableAutoFocus`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#enableautofocus) property is `true`.