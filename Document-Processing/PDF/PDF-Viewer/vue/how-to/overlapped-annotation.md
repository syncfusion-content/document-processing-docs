---
layout: post
title: How to Handle Overlapped Annotations in Vue PDF Viewer | Syncfusion
description: Handle overlapping annotations in the Vue PDF Viewer so users can select, move, and edit the right annotation when several are stacked on a page.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Handle Overlapped Annotations in Vue PDF Viewer

Use the [`annotationCollection`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationcollection) property of the [`annotationSelect`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationselect) event to get overlapped annotations when the user clicks an annotation.

The following example shows how to access overlapped annotations on click:

```html

<template>
  <div id="app">
    <button v-on:click="onSplitterResize">Open ThumbnailPanel</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :annotationSelect="annotationSelect">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const annotationSelect = (args) => {
    console.log(args.annotationCollection);
  };

</script>
```

