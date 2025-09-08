---
layout: post
title: Add Annotation in Text Search in Vue Pdfviewer component | Syncfusion
description: Learn how to add rectangle annotations using search text bounds in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Add Rectangle Annotations Using Search Text Bounds in PDF Viewer

## Overview

This guide demonstrates how to add rectangle annotations based on the bounds of highlighted search text in the PDF Viewer. This technique is useful for emphasizing search results with visual markers in annotation-supported applications.

## Steps to Add Rectangle Annotations on Search Result Highlight

**Step 1:** Follow the steps provided in the [Vue PDF Viewer Getting Started documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Set Up the PdfViewer Component to add rectangle annotations based on the bounds of highlighted search text in the PDF Viewer.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <!-- Buttons for search controls -->
    <div style="margin-top: 20px;">
      <button @click="handleSearch">Search PDF</button>
      <button @click="handleSearchNext">Search Next</button>
      <button @click="handleCancelSearch">Cancel Search</button>
    </div>
    <!-- PDF Viewer Component -->
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
        @textSearchHighlight="handleTextSearchHighlight"
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
  LinkAnnotation,
  BookmarkView,
  Annotation,
  ThumbnailView,
  Print,
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
      resourceUrl: 'https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    };
  },
  provide: {
    // Inject necessary modules
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      Annotation,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    // Method to initiate a text search for the term 'PDF'
    handleSearch() {
      this.$refs.pdfviewer.ej2Instances.textSearchModule.searchText('PDF', false);
    },
    // Method to go to the next instance of the search term
    handleSearchNext() {
      this.$refs.pdfviewer.ej2Instances.textSearchModule.searchNext();
    },
    // Method to cancel the current text search operation
    handleCancelSearch() {
      this.$refs.pdfviewer.ej2Instances.textSearchModule.cancelTextSearch();
    },
    // Method to handle the text search highlight event
    handleTextSearchHighlight(args) {
      console.log(args); // Log for debugging
      const bounds=args.bounds;
      // Add a rectangle annotation on the highlighted text
      this.$refs.pdfviewer.ej2Instances.annotationModule.addAnnotation('Rectangle', {
        pageNumber: args.pageNumber,
        offset: { x: bounds.left, y: bounds.top },
        width: bounds.width,
        height: bounds.height,
      });
    },
  },
};
</script>

{% endhighlight %}
{% endtabs %}

By following this guide, you will enable the PDF Viewer to add rectangle annotations at search result locations, thus increasing the visibility of search results in your application.

[View Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)