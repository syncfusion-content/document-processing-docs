---
layout: post
title: Enable or disable text selection in Vue PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the Vue PDF Viewer using the enableTextSelection property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in PDF Viewer

The Syncfusion PDF Viewer exposes the `enableTextSelection` property to control whether users can select text within the displayed PDF document. This setting can be configured at initialization and toggled programmatically at runtime.

## Configure text selection on initialization

Set the initial text-selection behavior by configuring the `enableTextSelection` property in the component template. The example below shows a complete component that initializes the viewer with text selection disabled.

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
        resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
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

## Toggle dynamically

To toggle text selection at runtime:

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
        resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
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

- Document protection: Disable text selection to help prevent copying sensitive content.
- Read-only documents: Provide a cleaner viewing experience by preventing selection.
- Interactive apps: Toggle selection based on user roles or document states.

## Default Behavior

Text selection is enabled by default. Set `enableTextSelection` to `false` to disable it.

[View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)