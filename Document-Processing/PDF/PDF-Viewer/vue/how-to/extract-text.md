---
layout: post
title: Use extractText in Vue PDF Viewer | Syncfusion
description: Learn how to use the extractText method in the Syncfusion Vue PDF Viewer to extract text and bounds from one or more pages.
control: Extract Text
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Extract Text Method in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Control

The `extractText` method extracts text from one or more pages and can return plain text or text with bounds for each element.

### extractText method
Retrieves text data from one page or a range of pages based on the specified options.

#### Parameters:
**startIndex:** The starting page index for text extraction (0-based index).

**endIndex or isOptions:** Either the ending page index (for multiple pages) or an option specifying extraction criteria for a single page.

**options (optional):** Additional options, such as `TextOnly` for plain text or `TextAndBounds` for detailed text data with bounds.

- TextOnly: Extracts only plain text without bounds.
- TextAndBounds: Extracts text with bounds (coordinates).

#### Returns:
The method returns a Promise that resolves to an object containing two properties:

Returns a Promise with:

- textData: An array of TextDataSettingsModel with details including bounds and page text.
- pageText: A concatenated string of plain text from the specified page(s).

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
      resourceUrl: 'https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib'
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