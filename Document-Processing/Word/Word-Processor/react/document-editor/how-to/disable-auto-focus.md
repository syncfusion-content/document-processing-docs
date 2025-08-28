---
layout: post
title: How to disable auto focus in React DocumentEditor control | Syncfusion
description: Learn here all about How to disable and enable auto focus in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to disable auto focus in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to disable auto focus in Syncfusion<sup style="font-size:70%">&reg;</sup> React Document Editor component

Document Editor gets focused automatically when the page loads. If you want the Document editor not to be focused automatically it can be customized.

The following example illustrates to disable the auto focus in DocumentEditorContainer.

```typescript
<DocumentEditorContainerComponent id="container" height={'590px'} enableAutoFocus={false} />
```

>Note: Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#enableautofocus) property is `true`.
The following example illustrates to disable the auto focus in DocumentEditor.

```typescript
<DocumentEditorComponent id="container" height={'590px'} enableAutoFocus={false}/>
```

>Note: Default value of [`enableAutoFocus`](https://ej2.syncfusion.com/react/documentation/api/document-editor#enableautofocus) property is `true`.