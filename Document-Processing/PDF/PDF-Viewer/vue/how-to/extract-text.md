---
layout: post
title: Extract Text in Vue Pdfviewer component | Syncfusion
description: Learn about the Extract Text in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Extract Text
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Extract Text Method in Syncfusion<sup style="font-size:70%">&reg;</sup> PdfViewer Control

The `extractText` method of the Syncfusion<sup style="font-size:70%">&reg;</sup> PdfViewer control enables text extraction from one or more pages in a PDF document. This method is useful for retrieving the text content along with its associated data, such as the bounds of each text element.

### extractText Method
The extractText method retrieves text data from the specified page(s) of a PDF document. It can extract text from one page, a range of pages, or even provide detailed text data, depending on the options specified.

#### Parameters:
**startIndex:** The starting page index for text extraction (0-based index).

**endIndex Or isOptions:** This can either be the ending page index for the text extraction (for extracting from multiple pages) or an option specifying text extraction criteria for a single page.

**options (optional):** Specifies additional options, such as extracting plain text `TextOnly` or more detailed text data `TextAndBounds`. You can specify various options for text extraction. These options determine whether you want to extract plain text, text with bounds, or detailed text data.

***TextOnly:*** Extracts only the plain text content without bounds or additional information.

***TextAndBounds:*** Extracts text content along with its bounds (coordinates) within the PDF.

#### Returns:
The method returns a Promise that resolves to an object containing two properties:

**textData:** An array of TextDataSettingsModel objects, each representing the details of the extracted text (including bounds, page text, etc.).

**pageText:** A concatenated string of plain text extracted from the specified page(s).

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

#### Explanation:
**Single Page Extraction:** The first `extractText` call extracts text from page 1 (`startIndex = 1`), using the 'TextOnly' option for plain text extraction.

**Multiple Pages Extraction:** The second extractText call extracts text from pages 0 through 2 (`startIndex = 0, endIndex = 2`), using the `TextOnly` option for plain text extraction.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)