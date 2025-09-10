---
layout: post
title: Change document view in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about Change document view in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change document view 
documentation: ug
domainurl: ##DomainURL##
---

# Change document view in JavaScript (ES6) Document editor control

## How to change the document view in DocumentEditor component

DocumentEditor allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/documentation/api/document-editor/layoutType/).

```ts
let docEdit: DocumentEditor = new DocumentEditor({ layoutType: 'Continuous'});
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/documentation/api/document-editor#layouttype) in DocumentEditor component is [`Pages`](https://ej2.syncfusion.com/documentation/api/document-editor/layoutType/).

## How to change the document view in DocumentEditorContainer component

DocumentEditorContainer component allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/documentation/api/document-editor/layoutType/).

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ layoutType: "Continuous" });
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/documentation/api/document-editor#layouttype) in DocumentEditorContainer component is [`Pages`](https://ej2.syncfusion.com/documentation/api/document-editor/layoutType/).