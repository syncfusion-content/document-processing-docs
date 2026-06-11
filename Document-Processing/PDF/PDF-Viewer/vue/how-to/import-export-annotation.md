---
layout: post
title: Import and export annotations in Vue PDF Viewer | Syncfusion
description: Learn how to import and export annotations as objects, JSON, or XFDF in the Syncfusion Vue PDF Viewer.
control: Import export annotation object
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Import export annotation in Vue PDF Viewer control

The PDF Viewer control supports exporting and importing annotations in multiple formats: JSON, XFDF, or as native annotation objects. Use `exportAnnotation('Json')` or `exportAnnotation('Xfdf')` for serialized formats, and `exportAnnotationsAsObject()` to obtain the in-memory annotation objects that can be re-imported with `importAnnotation()`.

The following steps show how to export annotations in different formats and import annotation objects back into the viewer.

**Step 1:** Follow the steps provided in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to perform import and export operations.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <button v-on:click="ExportAsJson">ExportAsJson</button>
    <button v-on:click="ExportAsXfdf">ExportAsXfdf</button>
    <button v-on:click="ExportAsObject">ExportAsObject</button>
    <button v-on:click="Import">Import</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation,
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
         Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer  }
from '@syncfusion/ej2-vue-pdfviewer';
var exportObject;
export default {
  name: 'App',
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data () {
    return {
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    };
  },

  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer ]
  },
  methods: {
    // export the annotation in JSON format.
    ExportAsJson: function() {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.exportAnnotation('Json');
    },
    // export the annotation in XFDF format.
    ExportAsXfdf: function() {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.exportAnnotation('Xfdf');
    },
    // export the annotation as object.
    ExportAsObject: function() {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      return viewer.exportAnnotationsAsObject().then((value) => {
        exportObject = value;
      });
    },
    //Import annotation that are exported as object.
    Import: function() {
      var viewer = this.$refs.pdfviewer.ej2Instances;
        viewer.importAnnotation(JSON.parse(exportObject));
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)