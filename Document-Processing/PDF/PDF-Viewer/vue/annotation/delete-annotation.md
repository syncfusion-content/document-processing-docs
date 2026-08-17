---
layout: post
title: Remove annotations in Vue PDF Viewer | Syncfusion
description: Learn how to remove/delete PDF annotations in Syncfusion Vue PDF Viewer using UI options (context menu, toolbar, Delete key) and programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Remove annotations in Vue

Annotations can be removed using the built-in UI or programmatically. This page shows common methods to delete annotations in the viewer.

## Delete via UI

A selected annotation can be deleted in three ways:

- Context menu: right-click the annotation and choose Delete.
![Delete via context menu](../../javascript-es6/annotations/annotation-images/delete-annot-context-menu.png)
- Annotation toolbar: select the annotation and click the Delete button on the annotation toolbar.
![Delete via annotation toolbar](../../javascript-es6/annotations/annotation-images/delete-annot.png)
- Keyboard: select the annotation and press the `Delete` key.

## Delete programmatically

Annotations can be deleted programmatically either by removing the currently selected annotation or by specifying an annotation id.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div style="margin-bottom: 8px; display: flex; gap: 8px;">
      <button @click="deleteAnnotation">Delete Selected Annotation</button>
      <button @click="deleteAnnotationById">Delete First Annotation by ID</button>
    </div>
    <ejs-pdfviewer 
      id="pdfViewer" 
      ref="pdfviewer"
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      style="height: 600px;">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
      ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, 
      FormDesigner, PageOrganizer]
  },
  methods: {
    deleteAnnotation: function () {
      // Delete the selected annotation
      this.$refs.pdfviewer.ej2Instances.annotation.deleteAnnotation();
    },
    deleteAnnotationById: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      // Delete the first annotation using its id from the annotation collection
      if (viewer.annotationCollection && viewer.annotationCollection.length > 0) {
        const annotationId = viewer.annotationCollection[0].id;
        viewer.annotation.deleteAnnotationById(annotationId);
      }
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> Deleting via the API requires the annotation to exist in the current document. Ensure an annotation is selected when using `deleteAnnotation()`, or pass a valid id to `deleteAnnotationById()`.

[View Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types)
- [Annotation Toolbar](../toolbar-customization)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Handwritten Signature](../signature-annotation)
- [Export and Import Annotation](../export-import)
- [Annotation Permission](./annotation-permission)
- [Annotation in Mobile View](./annotations-in-mobile-view)
- [Annotation Events](./annotation-event)
- [Annotations API](./annotations-api)
