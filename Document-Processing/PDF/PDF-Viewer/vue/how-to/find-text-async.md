---
layout: post
title: Use findTextAsync in Vue PDF Viewer | Syncfusion
description: Learn how to search text asynchronously with findTextAsync in the Syncfusion Vue PDF Viewer and retrieve match bounds.
control: Find Text Async
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Find Text using findTextAsync Method in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue PDF Viewer Control

The `findTextAsync` method searches for a string or array of strings asynchronously and returns bounding rectangles for each match. Use it to locate text positions across the document or on a specific page.

Here is an example of how to use `findTextAsync`:

```html
<template>
  <div id="app">
    <button v-on:click="findText">findText</button>
    <button v-on:click="findTexts">findTexts</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [
      Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner
    ]
  },
  methods: {
    // Search for a single string 'pdf' with a case-insensitive search across all pages
    findText() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.textSearchModule.findTextAsync('pdf', false).then(res => {
        console.log(res);
      });
    },
    // Search for multiple strings ['pdf', 'the'] with a case-insensitive search across all pages
    findTexts() {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.textSearchModule.findTextAsync(['pdf', 'the'], false).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
```

### Description:

The `findTextAsync` method is designed for performing an asynchronous text search within a PDF document. You can use it to search for a single string or multiple strings, with the ability to control case sensitivity. By default, the search is applied to all pages of the document. However, you can adjust this behavior by specifying the page number (pageIndex), which allows you to search only a specific page if needed.

### Parameters:

**text (string | string[]):** The text or array of texts to search for in the document.

**matchCase (boolean):** Whether the search is case-sensitive. `true` matches exact case; `false` ignores case.

**pageIndex (optional, number):** Zero-based page index to search. If omitted, searches all pages.

### Example Workflow:

**findTextAsync('pdf', false):**
This will search for the term "pdf" in a case-insensitive manner across all pages of the document.

**findTextAsync(['pdf', 'the'], false):**
This will search for the terms "pdf" and "the" in a case-insensitive manner across all pages of the document.

**findTextAsync('pdf', false, 0):**
This will search for the term "pdf" in a case-insensitive manner only on the first page (page 0).

**findTextAsync(['pdf', 'the'], false, 1):**
This will search for the terms "pdf" and "the" in a case-insensitive manner only on the second page (page 1).

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)