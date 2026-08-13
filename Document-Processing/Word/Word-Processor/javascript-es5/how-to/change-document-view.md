---
layout: post
title: How to Change Document View in JavaScript DOCX Editor | Syncfusion
description: Change the document view to web layout or print layout in Syncfusion® JavaScript DOCX Editor using layout type settings.
platform: document-processing
control: Change document view 
documentation: ug
domainurl: ##DomainURL##
---

# How to Change Document View in JavaScript DOCX Editor

## How to change the document view in DocumentEditor component

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/layoutType).

```js
var docEdit = new ej.documenteditor.DocumentEditor({ layoutType: 'Continuous'});
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#layouttype) in DocumentEditor component is [`Pages`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/layoutType).

## How to change the document view in DocumentEditorContainer component

DocumentEditorContainer component allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/layoutType).

```js
var container = new ej.documenteditor.DocumentEditorContainer({ layoutType: "Continuous" });
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#layouttype) in DocumentEditorContainer component is [`Pages`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/layoutType).