---
layout: post
title: How to Change Document View in Vue DOCX Editor | Syncfusion
description: Change the document view to web layout or print layout in Syncfusion® Vue DOCX Editor using layout type settings.
control: Change document view 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Change Document View in Vue DOCX Editor

## How to change the document view in the DocumentEditor component

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) allows you to change the view between web layout and print using the [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).

```
<ejs-documenteditor :layoutType='Continuous' id='container'></ejs-documenteditor>
```

N> The default value of [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) in the DOCX Editor component is [`Pages`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).

## How to change the document view in the DocumentEditorContainer component

The Document Editor Container component allows you to change the view between web layout and print using the [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).

```
<ejs-documenteditorcontainer :layoutType='Continuous' id='container'></ejs-documenteditorcontainer>
```

N> The default value of [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) in the Document Editor Container component is [`Pages`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).