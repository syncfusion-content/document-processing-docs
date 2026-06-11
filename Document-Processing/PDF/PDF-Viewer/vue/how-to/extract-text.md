---
layout: post
title: Use extractText in Vue PDF Viewer | Syncfusion
description: Learn how to use the extractText method in the Syncfusion Vue PDF Viewer to extract text and bounds from one or more pages.
control: Extract Text
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Extract text method in the Vue PDF Viewer

The `extractText` method retrieves text content and, optionally, positional data for elements on one or more pages. It returns a Promise that resolves to an object containing extracted `textData` (detailed items with bounds) and `pageText` (concatenated plain text).

**Parameters overview:**
- `startIndex` — Starting page index (0-based).
- `endIndex` or options — Either the ending page index for a range extraction, or an options object specifying extraction criteria for a single page.
- `options` (optional) — Extraction options such as `TextOnly` or `TextAndBounds` to control whether bounds are included.

**Returned object shape (example):**

- `textData` — Array of objects describing extracted text items, including bounds and page-level text.
- `pageText` — Concatenated plain text for the specified page(s).

### Usage of extractText in Syncfusion<sup style="font-size:70%">&reg;</sup> PdfViewer Control

Here is an example that demonstrates how to use the extractText method:

```html
<template>
  <div id="app">
    <button v-on:click="extractText">extractText</button>
    <button v-on:click="extractsText">extractsText</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 640px;"
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
  Annotation,
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
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    // Function to extract text from a specific page (page 1)
    extractText() {
      if (this.$refs.pdfviewer) {
        const viewer = this.$refs.pdfviewer.ej2Instances;
        viewer.extractText(1, 'TextOnly').then((val) => {
          console.log('Extracted Text from Page 1:');
          console.log(val);
        });
      }
    },
    // Function to extract text from a range of pages (pages 0 to 2)
    extractsText() {
      if (this.$refs.pdfviewer) {
        const viewer = this.$refs.pdfviewer.ej2Instances;
        viewer.extractText(0, 2, 'TextOnly').then((val) => {
          console.log('Extracted Text from Pages 0 to 2:');
          console.log(val);
        });
      }
    }
  }
};
</script>
```

#### Explanation
- Single page: Extracts text from page 1 (`startIndex = 1`) using `TextOnly`.
- Multiple pages: Extracts text from pages 0–2 (`startIndex = 0, endIndex = 2`) using `TextOnly`.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)