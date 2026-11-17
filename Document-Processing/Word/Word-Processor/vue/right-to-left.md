---
layout: post
title: Right to Left in Vue DOCX Editor | Syncfusion
description: Right-to-left support in Vue DOCX Editor enables RTL user interfaces, including menus, dialogs, and text direction for RTL languages.
control: Right to left 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Right to Left in Vue DOCX Editor

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) provides RTL (right-to-left) support. This can be enabled using the `enableRtl` property.

## Enable right-to-left layout

Set the [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documenteditormodel#enablertl) property to `true` to render the DOCX Editor user interface — including the toolbar or ribbon, menus, dialogs, and property pane - in a right-to-left layout.
```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :enableRtl='true' height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return { serviceUrl:'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar]
    }
  }
</script>
```

## Localize the DOCX Editor for RTL languages

To fully localize the DOCX Editor for right-to-left languages such as Arabic, set the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documenteditormodel#locale) property to a right-to-left culture and load the localized strings. This translates the built-in texts of the toolbar, dialogs, and context menus into the specified language.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/right-to-left-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/right-to-left-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/right-to-left-cs1" %}

## Online demo

Explore how to enable right-to-left layout in Word documents using the Vue DOCX Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/vue/#/tailwind3/document-editor/right-to-left.html).
