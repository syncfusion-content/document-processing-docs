---
layout: post
title: How to Highlight, Underline, or Strike Out Text in Vue | Syncfusion
description: Highlight, underline, and strike out text in the Vue PDF Viewer using the built-in text markup tools in the annotation toolbar.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Highlight, Underline, or Strike Out Text in Vue PDF Viewer

Use the [setAnnotationMode()](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation#setannotationmode) method to programmatically highlight, underline, and strike through text in a loaded PDF document.

Step 1: Follow the steps in the [Get started with Vue PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) guide to create a sample.

Step 2: Add the following Vue component snippet to enable highlight, underline, and strikeout actions using button clicks.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div>
    <div style="margin-bottom:10px;">
      <button id="setHighlight" @click="setHighlight">Highlight</button>
      <button id="setUnderline" @click="setUnderline">Underline</button>
      <button id="setStrikeout" @click="setStrikeout">Strikeout</button>
      <button id="setNone" @click="setNone">None</button>
    </div>
    <ejs-pdfviewer
      ref="pdfviewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      style="height:650px;display:block;"
    />
  </div>
</template>

<script>
import { PdfViewerComponent, Annotation, Toolbar, TextSelection } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'AnnotationModesDemo',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf'
    };
  },
  provide: {
    PdfViewer: [Annotation, Toolbar, TextSelection]
  },
  methods: {
    getViewer() {
      // Access the underlying EJ2 instance
      return this.$refs.pdfviewer && this.$refs.pdfviewer.ej2Instances;
    },
    setHighlight() {
      const viewer = this.getViewer();
      if (viewer) viewer.annotation.setAnnotationMode('Highlight');
    },
    setUnderline() {
      const viewer = this.getViewer();
      if (viewer) viewer.annotation.setAnnotationMode('Underline');
    },
    setStrikeout() {
      const viewer = this.getViewer();
      if (viewer) viewer.annotation.setAnnotationMode('Strikethrough');
    },
    setNone() {
      const viewer = this.getViewer();
      if (viewer) viewer.annotation.setAnnotationMode('None');
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

For the list of available annotation modes, see the [Annotation API](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation).
