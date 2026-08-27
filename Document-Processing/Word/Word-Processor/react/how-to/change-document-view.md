---
layout: post
title: How to Change Document View in React DOCX Editor | Syncfusion
description: Change the document view to web layout or print layout in Syncfusion® React DOCX Editor using layout type settings.
control: Change document view 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Change Document View in React DOCX Editor

## How to change the document view in the DOCX Editor component

[React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) allows you to change the view to web layout or print layout using the [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).

```
<DocumentEditorComponent id="container" layoutType={'Continuous'} />
```

N> Default value of [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor#layouttype) in the DOCX Editor component is [`Pages`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).

## How to change the document view in the DocumentEditorContainer component

The Document Editor Container component allows you to change the view to web layout or print layout using the [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).

```
<DocumentEditorContainerComponent id="container" layoutType={'Continuous'} enableToolbar={true}/>
```

N> Default value of [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#layouttype) in the Document Editor Container component is [`Pages`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType).

