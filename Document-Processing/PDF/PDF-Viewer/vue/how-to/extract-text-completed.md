---
layout: post
title: extractTextCompleted Event in Vue Pdfviewer component | Syncfusion
description: Learn here all about extractTextCompleted Event in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: extractTextCompleted
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Extract text using extractTextCompleted Event in Vue Pdfviewer component

The PDF Viewer library allows you to extract the text from a page along with the bounds. Text extraction can be done using the [**isExtractText**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#isextracttext) property and [**extractTextCompleted**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#extracttextcompleted) event.

The following steps are used to extract the text from the page.

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