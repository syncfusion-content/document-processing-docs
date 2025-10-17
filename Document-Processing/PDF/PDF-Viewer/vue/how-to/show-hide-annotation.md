---
layout: post
title: Show or hide annotations in Vue PDF Viewer | Syncfusion
description: Learn how to toggle annotation visibility in the Syncfusion Vue PDF Viewer by exporting and importing annotations.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Show or hide annotations in the PDF Viewer

Toggle annotation visibility in the Syncfusion PDF Viewer using TypeScript. Hide annotations for a cleaner view and show them again as needed.

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

These steps add the ability to toggle annotation visibility in a PDF Viewer application for selective viewing.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)