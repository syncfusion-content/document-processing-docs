---
layout: post
title: Change document view in the Vue DOCX Editor component | Syncfusion
description: Learn here all about how to change the document view in the Syncfusion Vue DOCX Editor component of Syncfusion Essential JS 2 and more.
control: Change document view
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Change document view in the Vue DOCX Editor component

## How to change the document view in the DocumentEditor component

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) allows you to change the view between web layout and print using the [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).

```
<ejs-documenteditor :layoutType='Continuous' id='container'></ejs-documenteditor>
```

N> The default value of [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) in the Document Editor component is [`Pages`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).

## How to change the document view in the DocumentEditorContainer component

The Document Editor Container component allows you to change the view between web layout and print using the [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).

```
<ejs-documenteditorcontainer :layoutType='Continuous' id='container'></ejs-documenteditorcontainer>
```

N> The default value of [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) in the Document Editor Container component is [`Pages`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).