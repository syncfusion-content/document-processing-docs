---
layout: post
title: Change Document View in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn how to change document view in Syncfusion JavaScript (ES6) Document Editor to switch between Pages and Continuous layouts.
platform: document-processing
control: Change Document View
documentation: ug
domainurl: ##DomainURL##
---

# Change Document View in JavaScript (ES6) Document Editor

## How to change the document view in the DocumentEditor component

[TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) allows you to change the view to web layout and print layout using the [`layoutType`](https://ej2.syncfusion.com/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/documentation/api/document-editor/layoutType).

```ts
let docEdit: DocumentEditor = new DocumentEditor({ layoutType: 'Continuous'});
```

N> The default value of the [`layoutType`](https://ej2.syncfusion.com/documentation/api/document-editor#layouttype) property in the DocumentEditor component is [`Pages`](https://ej2.syncfusion.com/documentation/api/document-editor/layoutType).

## How to change the document view in the DocumentEditorContainer component

The DocumentEditorContainer component allows you to change the view to web layout and print layout using the [`layoutType`](https://ej2.syncfusion.com/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/documentation/api/document-editor/layoutType).

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({ layoutType: 'Continuous' });
```

N> The default value of the [`layoutType`](https://ej2.syncfusion.com/documentation/api/document-editor-container#layouttype) property in the DocumentEditorContainer component is [`Pages`](https://ej2.syncfusion.com/documentation/api/document-editor/layoutType).