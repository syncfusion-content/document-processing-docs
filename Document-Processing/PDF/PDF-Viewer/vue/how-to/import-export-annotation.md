---
layout: post
title: Import export annotation in Vue Pdfviewer component | Syncfusion
description: Learn here all about Import export annotation in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Import export annotation object
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Import export annotation in Vue Pdfviewer component

The PDF Viewer library allows you to import annotations from objects or streams instead of loading it as a file. To import such annotation objects, the PDF Viewer control must export the PDF annotations as objects using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#exportannotationsasobject) method. Only the annotations objects that are exported from the PDF Viewer can be imported.

The following steps are used to import and export annotations in various formats such as objects, JSON, and XFDF.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

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
      resourceUrl: "https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib",
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