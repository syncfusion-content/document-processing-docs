---
layout: post
title: extractTextCompleted event in Vue PDF Viewer | Syncfusion
description: Learn how to use the extractTextCompleted event and isExtractText property in the Syncfusion Vue PDF Viewer to extract text and bounds.
control: extractTextCompleted
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Extract text using the extractTextCompleted event in Vue PDF Viewer

The PDF Viewer can extract page text along with bounding information. Enable text extraction using the `isExtractText` property and handle the `extractTextCompleted` event to receive extracted text and bounds for the document.

The following example shows how to enable text extraction and handle the completion event:

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet explains how to extract the text from a page.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :isExtractText="true"
    :extractTextCompleted="extractTextCompleted">
  </ejs-pdfviewer>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "PDF_Succinctly.pdf";
const extractTextCompleted = function (args) {
  // Extract the Complete text of load document
  console.log(args);
  console.log(args.documentTextCollection[1]);
  // Extract the Text data.
  console.log(args.documentTextCollection[1][1].TextData);
  // Extract Text in the Page.
  console.log(args.documentTextCollection[1][1].PageText);
  // Extracts the first text of the PDF document along with its bounds
  console.log(args.documentTextCollection[1][1].TextData[0].Bounds);
}
provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :isExtractText="true"
    :extractTextCompleted="extractTextCompleted">
  </ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "PDF_Succinctly.pdf",
      extractTextCompleted: function (args) {
        // Extract the Complete text of load document
        console.log(args);
        console.log(args.documentTextCollection[1]);
        // Extract the Text data.
        console.log(args.documentTextCollection[1][1].TextData);
        // Extract Text in the Page.
        console.log(args.documentTextCollection[1][1].PageText);
        // Extracts the first text of the PDF document along with its bounds
        console.log(args.documentTextCollection[1][1].TextData[0].Bounds);
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
    Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Find the Sample, [how to Extract Text](https://www.syncfusion.com/downloads/support/directtrac/general/ze/quickstart-1590348162.zip)