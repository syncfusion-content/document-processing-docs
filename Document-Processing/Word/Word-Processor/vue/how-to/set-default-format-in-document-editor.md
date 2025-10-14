---
layout: post
title: Set default format in document editor in Vue Document editor component | Syncfusion
description: Learn here all about Set default format in document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Set default format in document editor 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Set default format in document editor in Vue Document editor component

You can set the default character format, paragraph format and section format in Document editor.

## Set the default character format

You can use [`setDefaultCharacterFormat`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#setdefaultcharacterformat) method to set the default character format. For example, Document editor default font size is 11 and you can change it as any valid value.

The following example code illustrates how to change the default font size in Document editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

const onCreated = function () {
  container.value.ej2Instances.documentEditor.setDefaultCharacterFormat({ fontSize: 20 });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
      this.$refs.container.ej2Instances.documentEditor.setDefaultCharacterFormat({ fontSize: 20 });
    },
  },
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can change the required [`CharacterFormatProperties`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/characterFormatProperties) default value.

The following example code illustrates how to change other character format default value in Document editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

const onCreated = function () {
  let defaultCharacterFormat = {
    bold: false,
    italic: false,
    baselineAlignment: 'Normal',
    underline: 'None',
    fontColor: '#000000',
    fontFamily: 'Algerian',
    fontSize: 12,
  };
  container.value.ej2Instances.documentEditor.setDefaultCharacterFormat(
    defaultCharacterFormat
  );
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
      let defaultCharacterFormat = {
        bold: false,
        italic: false,
        baselineAlignment: 'Normal',
        underline: 'None',
        fontColor: '#000000',
        fontFamily: 'Algerian',
        fontSize: 12,
      };
      this.$refs.container.ej2Instances.documentEditor.setDefaultCharacterFormat(
        defaultCharacterFormat
      );
    },
  },
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Set the default paragraph format

You can use [`setDefaultParagraphFormat`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#setdefaultparagraphformat) API to set the default paragraph format. You can change the required [`ParagraphFormatProperties`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/paragraphFormatProperties) default value.

The following example code illustrates how to change the paragraph format(before spacing, line spacing etc.,) default value in Document editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
  let defaultParagraphFormat = {
    beforeSpacing: 8,
    lineSpacing: 1.5,
    leftIndent: 24,
    textAlignment: "Center"
  };
  container.value.ej2Instances.documentEditor.setDefaultParagraphFormat(defaultParagraphFormat);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
      let defaultParagraphFormat = {
        beforeSpacing: 8,
        lineSpacing: 1.5,
        leftIndent: 24,
        textAlignment: "Center"
      };
      this.$refs.container.ej2Instances.documentEditor.setDefaultParagraphFormat(defaultParagraphFormat);
    },
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Set the default section format

You can use [`setDefaultSectionFormat`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#setdefaultsectionformat) API to set the default section format. You can change the required [`SectionFormatProperties`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/sectionFormatProperties) default value.

The following example code illustrates how to change the section format(header and footer distance, page width and height, etc.,) default value in Document editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
  let defaultSectionFormat = {
    pageWidth: 500,
    pageHeight: 800,
    headerDistance: 56,
    footerDistance: 48,
    leftMargin: 12,
    rightMargin: 12,
    topMargin: 0,
    bottomMargin: 0
  };
  container.value.ej2Instances.documentEditor.setDefaultSectionFormat(defaultSectionFormat);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px"
      id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
      let defaultSectionFormat = {
        pageWidth: 500,
        pageHeight: 800,
        headerDistance: 56,
        footerDistance: 48,
        leftMargin: 12,
        rightMargin: 12,
        topMargin: 0,
        bottomMargin: 0
      };
      this.$refs.container.ej2Instances.documentEditor.setDefaultSectionFormat(defaultSectionFormat);
    },
  },
};
</script>

{% endhighlight %}
{% endtabs %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.