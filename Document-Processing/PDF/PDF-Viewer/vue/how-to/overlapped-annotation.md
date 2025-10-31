---
layout: post
title: Get overlapped annotations on click in Vue PDF Viewer | Syncfusion
description: Learn how to get overlapped annotations on click using the annotationSelect event in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Get overlapped annotations on click in Vue PDF Viewer

Use the [`annotationCollection`](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationcollection) property of the [`annotationSelect`](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event to get overlapped annotations when the user clicks an annotation.

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

