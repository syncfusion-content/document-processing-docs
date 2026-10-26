---
layout: post
title: Scrolling and Zooming in Vue DOCX Editor | Syncfusion
description: The scrolling and zooming in Vue DOCX Editor enables smooth document navigation and adjustable zoom levels for better viewing.
control: Scrolling zooming 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling and Zooming in Vue DOCX Editor

The [Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) renders the document page by page. You can scroll through the pages by mouse wheel or touch interactions. You can also scroll through the pages by using the `scrollToPage()` method of the DOCX Editor instance. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/scrolling-zooming-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/scrolling-zooming-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/scrolling-zooming-cs1" %}

N> Calling this method brings the specified page into view but doesn't move selection. Hence this method will work by default. That is, it works even if selection is not enabled.

If you wish to move the selection to any page in the DOCX Editor and bring it into view, you can use the `goToPage()` method of the selection instance. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/scrolling-zooming-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/scrolling-zooming-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/scrolling-zooming-cs2" %}

## Zooming

You can scale the contents in the DOCX Editor ranging from 10% to 500% of the actual size. You can achieve this using mouse or touch interactions. You can also use the `zoomFactor` property of the DOCX Editor instance. The value can be specified in a range from 0.1 to 5. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditor ref="documenteditor" style="width: 100%;height: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor } from '@syncfusion/ej2-vue-documenteditor';
import { onMounted, ref } from 'vue';

const documenteditor = ref(null);
onMounted(function () {
  //Set zoom factor.
  documenteditor.value.zoomFactor = 3;
})
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditor ref="documenteditor" style="width: 100%;height: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  mounted: function () {
    //Set zoom factor.
    this.$refs.documenteditor.zoomFactor = 3;
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Page fit type

Apart from specifying the zoom factor as a value, the DOCX Editor provides an option to specify page fit options such as fit to full page or fit to page width. You can set this option using the `fitPage` method of the DOCX Editor instance. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditor ref="documenteditor" height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script setup>
import { DocumentEditorComponent as EjsDocumenteditor } from '@syncfusion/ej2-vue-documenteditor';
import { onMounted, ref } from 'vue';

const documenteditor = ref(null);
onMounted(function () {
  //Set zoom factor to fit page width.
  documenteditor.value.fitPage('FitPageWidth');
})

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditor ref="documenteditor" height="370px" style="width: 100%;"></ejs-documenteditor>
  </div>
</template>
<script>
import { DocumentEditorComponent } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function () {
    return {
    };
  },
  mounted: function () {
    //Set zoom factor to fit page width.
    this.$refs.documenteditor.fitPage('FitPageWidth');
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Zoom option using UI

The following code example shows how to provide zoom options in the DOCX Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/scrolling-zooming-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/scrolling-zooming-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/scrolling-zooming-cs3" %}