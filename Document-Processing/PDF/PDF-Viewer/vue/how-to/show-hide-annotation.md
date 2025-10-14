---
layout: post
title: Show and Hide Annotations in Vue Pdfviewer component | Syncfusion
description: Learn here about how to show and hide annotations in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Show and Hide Annotations in PDF Viewer

This guide demonstrates how to toggle the visibility of annotations in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer using Vue.js. This functionality is useful when you need to temporarily hide annotations for a cleaner view and restore them later when needed.

## Implementation Steps

**Step 1:** Follow the steps provided in the [Vue PDF Viewer Getting Started documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer application.

**Step 2:** Set up your Vue component with a toggle button to control the visibility of annotations:

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
<div id="app">
<button id="hideBtn" v-on:click="hideAnnotations">Hide Annotations</button>
<button id="unhideBtn" v-on:click="unhideAnnotations">Show Annotations</button>
<ejs-pdfviewer
id="pdfViewer"
ref="pdfviewer"
:documentPath="documentPath"
:resourceUrl="resourceUrl">
</ejs-pdfviewer>
</div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib",
      exportObject: "",
      annotationsVisible: true
    };
  },
  provide: {
    PdfViewer: [
      Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer
    ]
  },
  methods: {
    async hideAnnotations() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      try {
        const value = await viewer.exportAnnotationsAsObject();
        this.exportObject = JSON.stringify(value); // Convert object to string for later use
        viewer.deleteAnnotations();
      } catch (error) {
        console.error('Error hiding annotations:', error);
      }
    },
    unhideAnnotations() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      if (this.exportObject) {
        const parsedObject = JSON.parse(this.exportObject);
        viewer.importAnnotation(JSON.parse(parsedObject));
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Conclusion

By implementing this solution in your Vue application, you can provide users with a convenient way to toggle the visibility of annotations in PDF documents. This enhances document readability while preserving the ability to quickly restore annotations when needed.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)