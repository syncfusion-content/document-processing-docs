---
layout: post
title: Ribbon in Vue Document editor control | Syncfusion
description: Learn here all about the Ribbon UI in Syncfusion Vue Document editor control, how to switch between Ribbon and Toolbar modes.
platform: document-processing
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon in Vue Document Editor Control

The Document Editor provides a modern Ribbon interface similar to Microsoft Word's interface. This Ribbon UI provides an efficient and intuitive way to access editing features, organizing commands within well-structured tabs and groups to enhance your document editing experience. Additionally, the Ribbon interface supports contextual tabs. Contextual tabs appear only when certain elements, such as tables, images, or headers/footers, are selected in the document.

You can switch between the classic **Toolbar** and the new **Ribbon** UI, and you can also choose between **Classic** and **Simplified** ribbon layouts.

## Enable Ribbon Mode

To enable Ribbon in Document Editor, use the [`toolbarMode`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#toolbarmode) property of `DocumentEditorContainer`. The available toolbar modes are:

- **'Toolbar'** - The traditional toolbar UI.
- **'Ribbon'** - The Ribbon UI, which provides a tabbed interface with grouped commands.

By default, `toolbarMode` is `Toolbar`.

To use Ribbon mode, add Document Editor component and its dependent component styles available in **../node_modules/@syncfusion** package folder. This can be added as reference in **src/App.vue**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-documenteditor/styles/material.css";
@import '../node_modules/@syncfusion/ej2-ribbon/styles/material.css';/* Required for Ribbon */
```

The following code shows the how to enable the `Ribbon` in Document Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'"
        :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
    </div>
</template>
<script setup>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
import { onMounted, ref } from 'vue';

const documenteditorcontainer = ref(null);
provide('DocumentEditorContainer', [Toolbar, Ribbon]);
onMounted(function () {
   var obj = this.$refs.doceditcontainer.ej2Instances.documentEditor;  
})
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'"
        :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
    </div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
export default {
    components: {
        'ejs-documenteditorcontainer':DocumentEditorContainerComponent,
    },
    provide: {
        DocumentEditorContainer: [Toolbar, Ribbon]
    },
    mounted() {
        var obj = this.$refs.doceditcontainer.ej2Instances.documentEditor;  
    }
};
</script>

{% endhighlight %}
{% endtabs %}

## Ribbon Layouts

Document Editor provides two different Ribbon layouts:

- **Classic**: A traditional Office-like ribbon with detailed grouping and larger icons
- **Simplified**: A more compact ribbon design with streamlined controls

By default, `ribbonLayout` is set to `Simplified`. 

The following code shows the how to configure the ribbon layout in Document Editor:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" :ribbonLayout="'Classic'"
        :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
    </div>
</template>
<script setup>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
import { onMounted, ref } from 'vue';

const documenteditorcontainer = ref(null);
provide('DocumentEditorContainer', [Toolbar, Ribbon]);
onMounted(function () {
   var obj = this.$refs.doceditcontainer.ej2Instances.documentEditor;  
})
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div class="control-section">
        <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" :ribbonLayout="'Classic'"
        :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
    </div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
export default {
    components: {
        'ejs-documenteditorcontainer':DocumentEditorContainerComponent,
    },
    provide: {
        DocumentEditorContainer: [Toolbar, Ribbon]
    },
    mounted() {
        var obj = this.$refs.doceditcontainer.ej2Instances.documentEditor;  
    }
};
</script>

{% endhighlight %}
{% endtabs %}

## See Also

* [How to customize the ribbon](./how-to/customize-ribbon)