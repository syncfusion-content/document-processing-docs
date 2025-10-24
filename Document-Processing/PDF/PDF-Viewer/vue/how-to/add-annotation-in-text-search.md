---
layout: post
title: Add Rectangle Annotation via TextSearch in Vue PDF Viewer | Syncfusion
description: Learn to add rectangle annotations using text search bounds in the Vue PDF Viewer component, including initialization and search controls.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Add rectangle annotations using text search bounds in PDF Viewer

## Overview

A concise guide to adding rectangle annotations at highlighted text search results in the TypeScript PDF Viewer to visually emphasize matches and improve readability.

## Steps to add rectangle annotations on search result highlight

**Step 1:** Follow the steps provided in the [Vue PDF Viewer Getting Started documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Initialize the PDF Viewer with the required modules

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
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
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

Following these steps enables the PDF Viewer to add rectangle annotations at search result locations, improving the visibility of matches.

[View Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)