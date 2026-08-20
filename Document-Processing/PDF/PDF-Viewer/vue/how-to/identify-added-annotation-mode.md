---
layout: post
title: How to Identify the Added Annotation Mode in Vue PDF | Syncfusion
description: Identify the annotation mode that was used to add an annotation in the Vue PDF Viewer so you can branch on the annotation type in your code.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Identify the Added Annotation Mode in Vue PDF Viewer

Determine whether an added annotation was UI-drawn, imported, or existing using the [annotationAddMode](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationadd) property of the [annotationSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationselect) event.

**Step 1:** Follow the steps in the [Get started with Vue PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) guide to create a sample.

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
