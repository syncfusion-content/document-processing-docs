---
layout: post
title: Load document after resources Loaded Vue PDF Viewer | Syncfusion
description: Learn how to load a PDF only after assets are ready in the Syncfusion Vue PDF Viewer (Standalone) using the resourcesLoaded event.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Load a PDF only after PDFium resources are ready

In Standalone mode, the Vue PDF Viewer downloads its PDFium runtime assets (scripts/wasm) from the location specified in resourceUrl. Attempting to load a document before those assets are available can cause errors. Use the resourcesLoaded event to defer document loading until all required assets are ready.

## When does resourcesLoaded trigger?

The resourcesLoaded event fires once the viewer finishes loading all required PDFium assets. At this point, it is safe to call the load method to open a document (by URL or Base64).

## How to Load Document after resourcesLoaded

- Set the resourceUrl to a valid PDF Viewer assets path (CDN or your hosted path).
- Listen to resourcesLoaded and call load inside the handler.

```vue
<!-- App.vue -->
<template>
  <div style="height: 640px">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="viewer"
      :resourceUrl="resourceUrl"
      @resourcesLoaded="onResourcesLoaded"
      style="height: 100%; display: block"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: {
    pdfviewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
  },
  data() {
    return {
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      documentUrl: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      base64: '' // supply your Base64 here when needed
    };
  },
  methods: {
    onResourcesLoaded() {
      // Choose ONE of the following load options:

      // 1) Load by URL
      this.$refs.viewer?.load(this.documentUrl, '');

      // 2) Load by Base64 (uncomment if you want to load Base64)
      // if (this.base64) {
      //   this.$refs.viewer?.load(`data:application/pdf;base64,${this.base64}`, '');
      // }
    }
  }
};
</script>
```

[View Sample in GitHub]()

## Notes and best practices

- Always set a valid resourceUrl when using the Standalone PDF Viewer. If the path is incorrect or blocked by the network, the event cannot fire.
- Load documents inside resourcesLoaded. This guarantees the PDFium runtime is ready and prevents intermittent errors on slower networks.
- The event fires for the viewer’s asset load lifecycle, not for every document load. After it fires once, you can safely call load again later (for example, in response to user actions) without waiting for the event.

## See also

- [Events in Vue PDF Viewer](../events/#resourcesloaded)
- [Open PDF files](../open-pdf-files)
- [Save PDF files](../save-pdf-files)
- [Getting started](../getting-started)
