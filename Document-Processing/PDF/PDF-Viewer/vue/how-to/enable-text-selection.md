---
layout: post
title: Enable Text Selection in Vue PdfViewer | Syncfusion
description: Learn how to Enable Text Selection in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable Text Selection in Syncfusion PDF Viewer

The Syncfusion PDF Viewer provides the `enableTextSelection` property, which allows you to control whether users can select text within the displayed PDF document. This feature can be toggled programmatically during runtime.

## Configure Text Selection on Initialization

You can set the initial text selection behavior when initializing the PDF Viewer control by configuring the `enableTextSelection` property.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :enableTextSelection="false"
      style="height: 640px;"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
        resourceUrl: "https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib",
        documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
};
</script>

{% endhighlight %}
{% endtabs %}

## Toggle Text Selection Dynamically

You can change the text selection behavior at runtime using buttons, menu options, or other UI elements:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
  <button @click="enableTextSelection" style="margin-bottom: 20px;">
      enableTextSelection
    </button>
    <button @click="disableTextSelection" style="margin-bottom: 20px;">
      disableTextSelection
    </button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :enableTextSelection="false"
      style="height: 640px;"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
        resourceUrl: "https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib",
        documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    enableTextSelection() {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.enableTextSelection = true;
    },
    disableTextSelection() {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.enableTextSelection = false;
  },
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## Use Cases and Considerations

- **Document Protection**: Disabling text selection helps prevent unauthorized copying of sensitive content.
- **Read-only Documents**: In scenarios where documents are meant for viewing only, disabling text selection can provide a cleaner user experience.
- **Interactive Applications**: Toggle text selection based on user roles or document states in complex applications.

## Default Behavior

By default, text selection is enabled in the PDF Viewer. Set the `enableTextSelection` property to `false` explicitly if you want to disable this functionality.

[View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)