---
layout: post
title: How to Disable Auto Focus in Angular DOCX Editor | Syncfusion
description: Disable the auto focus behavior in Syncfusion® Angular DOCX Editor to prevent the editor from automatically receiving focus when the page loads.
platform: document-processing
control: How to disable auto focus in DOCX Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable Auto Focus in Angular DOCX Editor

[Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) gets focused automatically when the page loads. If you do not want the DOCX Editor to be focused automatically, you can customize this behavior.

The following example illustrates how to disable the auto focus in DocumentEditorContainer.

```typescript
<ejs-documenteditorcontainer [enableAutoFocus]=false></ejs-documenteditorcontainer>
```

N> The default value of [`enableAutoFocus`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container#enableautofocus) property is `true`.

## Disable auto focus in DocumentEditor

The following example illustrates how to disable the auto focus in DocumentEditor.

```typescript
<ejs-documenteditor [enableAutoFocus]=false></ejs-documenteditor>
```

N> The default value of [`enableAutoFocus`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#enableautofocus) property is `true`.