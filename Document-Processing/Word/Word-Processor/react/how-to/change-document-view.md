---
layout: post
title: Change document view in React Document editor component | Syncfusion
description: Learn here all about Change document view in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Change document view 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Change document view in React Document editor component

## How to change the document view in the DocumentEditor component

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) allows you to change the view to web layout or print layout using the [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).

```
<DocumentEditorComponent id="container" layoutType={'Continuous'} />
```

N> Default value of [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor#layouttype) in the Document Editor component is [`Pages`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).

## How to change the document view in the DocumentEditorContainer component

The Document Editor Container component allows you to change the view to web layout or print layout using the [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).

```
<DocumentEditorContainerComponent id="container" layoutType={'Continuous'} enableToolbar={true}/>
```

N> Default value of [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#layouttype) in the Document Editor Container component is [`Pages`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).