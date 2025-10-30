---
layout: post
title: Highlight, underline, and strikeout text in Vue PDF Viewer | Syncfusion
description: Learn how to programmatically highlight, underline, and strikeout text in the Syncfusion Vue PDF Viewer using setAnnotationMode.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Highlight, underline, and strikeout text in Vue PDF Viewer

Use the [setAnnotationMode()](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation/#setannotationmode) method to programmatically highlight, underline, and strike through text in a loaded PDF document.

Step 1: Follow the steps in the [Get started with Vue PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) guide to create a sample.

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
import { PdfViewerComponent } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'AnnotationModesDemo',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      serviceUrl: 'https://services.syncfusion.com/js/development/api/pdfviewer',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf'
    };
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

For the list of available annotation modes, see the [Annotation API](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation/).
