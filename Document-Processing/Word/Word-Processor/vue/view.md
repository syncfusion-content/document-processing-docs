---
layout: post
title: View in Vue Document editor component | Syncfusion
description: Learn here all about View in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: View 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# View in Vue Document Editor Component

## Web Layout

Document Editor allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType/).

```
<ejs-documenteditor :layoutType='Continuous' id='container'></ejs-documenteditor>
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#layouttype) in Document Editor component is [`Pages`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/layoutType/).

## Ruler

Using ruler we can refer to setting specific margins, tab stops, or indentations within a document to ensure consistent formatting in Document Editor.

The following example illustrates how to enable ruler in Document Editor

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/vue/ruler-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/ruler-cs1" %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Heading Navigation Pane 

Using the heading navigation pane allows users to swiftly navigate documents by heading, enhancing their ability to move through the document efficiently.

The following example demonstrates how to enable the heading navigation pane in a document editor.

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
