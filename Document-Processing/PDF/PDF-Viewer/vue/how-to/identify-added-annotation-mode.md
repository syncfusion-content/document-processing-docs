---
layout: post
title: Identify added annotation mode in Vue PDF Viewer | Syncfusion
description: Learn how to determine whether an added annotation was drawn, imported, or existing using the annotationSelect event in the Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Identify added annotation mode in Vue PDF Viewer

Determine whether an added annotation was UI-drawn, imported, or existing using the [annotationAddMode](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationadd) property of the [annotationSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselect) event.

**Step 1:** Follow the steps in the [Get started with Vue PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) guide to create a sample.

**Step 2:** Use the following code to identify the added annotation mode.

```html
<template>
  <div>
    <ejs-pdfviewer
      ref="viewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      :annotationSelect="onAnnotationSelect">
    </ejs-pdfviewer>
  </div>
</template>
```

```js
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'IdentifyAnnotationMode',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormDesigner,
      FormFields
    ]
  },
  data() {
    return {
      serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf'
    };
  },
  methods: {
    onAnnotationSelect(args) {
      console.log(args.annotationAddMode);
    }
  }
};
</script>
```
