---
layout: post
title: How to disable auto focus in React DOCX Editor | Syncfusion
description: Learn here all about How to disable and enable auto focus in Syncfusion React Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to disable auto focus in Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to disable auto focus in React Document Editor component

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) gets focused automatically when the page loads. If you do not want the Document Editor to be focused automatically, you can customize this behavior.

The following example illustrates how to disable the auto focus in DocumentEditorContainer.

```typescript
<DocumentEditorContainerComponent id="container" height={'590px'} enableAutoFocus={false} />
```

N> The default value of [`enableAutoFocus`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#enableautofocus) property is `true`.

## Disable auto focus in DocumentEditor

The following example illustrates how to disable the auto focus in DocumentEditor.

```typescript
<DocumentEditorComponent id="container" height={'590px'} enableAutoFocus={false}/>
```

N> The default value of [`enableAutoFocus`](https://ej2.syncfusion.com/react/documentation/api/document-editor#enableautofocus) property is `true`.