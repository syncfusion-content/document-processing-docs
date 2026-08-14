---
layout: post
title: Undo and Redo annotation in Vue PDF Viewer | Syncfusion
description: Learn to undo and redo annotations changes in Syncfusion Vue PDF Viewer, with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Undo and redo annotations in Vue PDF Viewer

The PDF Viewer supports undo and redo for annotations.

![Undo-redo](../../javascript-es6/annotations/annotation-images/annotation-undo-redo.png)

Undo and redo actions can be performed by using either of the following methods:

1. Using keyboard shortcuts (desktop):
    After performing an annotation action, press `Ctrl+Z` to undo and `Ctrl+Y` to redo on Windows and Linux. On macOS, use `Command+Z` to undo and `Command+Shift+Z` to redo.
2. Using the toolbar:
    Use the **Undo** and **Redo** tools in the toolbar.

Refer to the following code snippet to call undo and redo actions from the client side.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <div style="margin-bottom: 8px; display: flex; gap: 8px;">
      <button @click="undoAnnotation">Undo</button>
      <button @click="redoAnnotation">Redo</button>
    </div>
    <ejs-pdfviewer 
      id="pdfViewer" 
      ref="pdfviewer"
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      style="height: 650px;">
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
    undoAnnotation: function () {
      this.$refs.pdfviewer.undo();
    },
    redoAnnotation: function () {
      this.$refs.pdfviewer.redo();
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types)
- [Annotation Toolbar](../toolbar-customization)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Remove Annotation](./delete-annotation)
- [Handwritten Signature](../signature-annotation)
- [Export and Import Annotation](../export-import)
- [Annotation in Mobile View](./annotations-in-mobile-view)
- [Annotation Events](./annotation-event)
- [Annotations API](./annotations-api)
