---
layout: post
title: View in Vue DOCX Editor component | Syncfusion
description: Learn here all about view options in the Syncfusion Vue Document Editor component of Syncfusion Essential JS 2 and more.
control: View 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# View in Vue Document Editor Component

## Web layout

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) Container component allows you to change the view to a web layout or print layout using the [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).

```
<ejs-documenteditor :layoutType='Continuous' id='container'></ejs-documenteditor>
```

N> The default value of [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) in the Document Editor Container component is [`Pages`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType).

### Online demo

Explore how to view Word documents in web layout using the Vue Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/web-layout).

## Ruler

The ruler helps you set specific margins, tab stops, and indentations within a document to ensure consistent formatting in the Document Editor.

The following example illustrates how to enable the ruler in the Document Editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/vue/ruler-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/ruler-cs1" %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

### Online demo

Explore how to use the ruler in the Vue Document Editor for working with Word documents in this [live demo](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/ruler).

## Heading navigation pane

The heading navigation pane allows users to quickly navigate documents by heading, making it easier to move through the document.

The following example demonstrates how to enable the heading navigation pane in a Document Editor.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :documentEditorSettings='settings' height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return { serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
      settings:{ showNavigationPane : true} };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar]
    }
  }
</script>
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

### Online demo

Explore how to navigate through headings in Word documents using the Vue Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/heading-navigation.html).