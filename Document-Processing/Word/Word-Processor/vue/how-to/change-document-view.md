---
layout: post
title: Change document view in Vue Document editor component | Syncfusion
description: Learn here all about Change document view in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Change document view 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Change document view in Vue Document editor component

## How to change the document view in DocumentEditor component

Document Editor allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType/).

```
<ejs-documenteditor :layoutType='Continuous' id='container'></ejs-documenteditor>
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) in Document Editor component is [`Pages`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType/).

## How to change the document view in DocumentEditorContainer component

Document Editor Container component allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType/).

```
<ejs-documenteditorcontainer :layoutType='Continuous' id='container'></ejs-documenteditorcontainer>
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) in Document Editor Container component is [`Pages`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType/).