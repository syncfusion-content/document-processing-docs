---
layout: post
title: Retrieve the bookmark content as text in Vue Document editor component | Syncfusion
description: Learn here all about Retrieve the bookmark content as text in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Retrieve the bookmark content as text 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the bookmark content as text in Vue Document editor component

You can get the bookmark or whole document content from the Vue Document Editor component as plain text and SFDT (rich text).

## Get the bookmark content as plain text

You can [`selectBookmark`](../bookmark#select-bookmark) API to navigate to the bookmark and use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the bookmark content as plain text from Vue Document Editor component.

The following example code illustrates how to get the bookmark content as plain text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const onCreated = function () {
  // To insert text in cursor position
  container.value.ej2Instances.documentEditor.editor.insertText('Document editor');
  // To select all the content in document
  container.value.ej2Instances.documentEditor.selection.selectAll();
  // Insert bookmark to selected content
  container.value.ej2Instances.documentEditor.editor.insertBookmark('Bookmark1');

  // Provide your bookmark name to navigate to specific bookmark
  container.value.ej2Instances.documentEditor.selection.selectBookmark('Bookmark1');

  // To get the selected content as text
  let selectedContent = container.value.ej2Instances.documentEditor.selection.text;
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl:
        'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onCreated: function () {
      // To insert text in cursor position
      this.$refs.container.ej2Instances.documentEditor.editor.insertText('Document editor');
      // To select all the content in document
      this.$refs.container.ej2Instances.documentEditor.selection.selectAll();
      // Insert bookmark to selected content
      this.$refs.container.ej2Instances.documentEditor.editor.insertBookmark('Bookmark1');

      // Provide your bookmark name to navigate to specific bookmark
      this.$refs.container.ej2Instances.documentEditor.selection.selectBookmark('Bookmark1');

      // To get the selected content as text
      let selectedContent = this.$refs.container.ej2Instances.documentEditor.selection.text;
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

To get the bookmark content as SFDT (rich text), please check this [`link`](../how-to/get-the-selected-content#get-the-selected-content-as-sfdt-rich-text)

## Get the whole document content as text

You can use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the whole document content as plain text from Vue Document Editor component.

The following example code illustrates how to get the whole document content as plain text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const onCreated = function () {
  // To insert text in cursor position
  container.value.ej2Instances.documentEditor.editor.insertText('Document editor');
  // To select all the content in document
  container.value.ej2Instances.documentEditor.selection.selectAll();

  // To get the content as text
  let selectedContent = container.value.ej2Instances.documentEditor.selection.text;
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl:
        'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onCreated: function () {
      // To insert text in cursor position
      this.$refs.container.ej2Instances.documentEditor.editor.insertText('Document editor');
      // To select all the content in document
      this.$refs.container.ej2Instances.documentEditor.selection.selectAll();

      // To get the content as text
      let selectedContent = this.$refs.container.ej2Instances.documentEditor.selection.text;
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Get the whole document content as SFDT(rich text)

You can use [`serialize`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#serialize) API to get the whole document content as SFDT string from Vue Document Editor component.

The following example code illustrates how to get the whole document content as SFDT.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar]);

const onCreated = function () {
  // To insert text in cursor position
  container.value.ej2Instances.documentEditor.editor.insertText('Document editor');

  // To get the content as SFDT
  let selectedContent = container.value.ej2Instances.documentEditor.serialize();
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" v-on:created="onCreated.bind(this)"></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl:
        'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onCreated: function () {
      // To insert text in cursor position
      this.$refs.container.ej2Instances.documentEditor.editor.insertText('Document editor');

      // To get the content as SFDT
      let selectedContent = this.$refs.container.ej2Instances.documentEditor.serialize();
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Get the header content as text

You can use [`goToHeader`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#gotoheader) API to navigate the selection to the header and then use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the content as plain text.

The following example code illustrates how to get the header content as plain text.

```
<template>
  <div id="app">
    <ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      height="590px"
      id="container"
      :enableToolbar="true"
      v-on:created="onCreated.bind(this)"
    ></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { provide } from "vue";
  
  import {
    DocumentEditorContainerComponent,
    DocumentEditorContainerComponent,
    Toolbar,
  } from '@syncfusion/ej2-vue-documenteditor';

  

  export default {
    data() {
      return {
        serviceUrl:
          'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/',
      };
    },
    provide('//Inject require modules.
      DocumentEditorContainer',  [Toolbar],);,
    methods: {
      onCreated: function () {
        // To navigate the selection to header
        this.$refs.container.ej2Instances.documentEditor.selection.goToHeader();
        // To insert text in cursor position
        this.$refs.container.ej2Instances.documentEditor.editor.insertText('Document editor');
        // To select all the content in document
        this.$refs.container.ej2Instances.documentEditor.selection.selectAll();

        // To get the selected content as text
        let selectedContent = this.$refs.container.ej2Instances.documentEditor.selection.text;
      }
    }
  };
</script>
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can use [`goToFooter`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#gotofooter) API to navigate the selection to the footer and then use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the content as plain text.