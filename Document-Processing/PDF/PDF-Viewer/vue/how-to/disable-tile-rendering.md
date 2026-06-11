---
layout: post
title: Disable tile rendering in Vue PDF Viewer | Syncfusion
description: Learn how to disable tile rendering in the Vue PDF Viewer using enableTileRendering to adjust performance behavior for different document sizes.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Disable tile rendering in Vue PDF Viewer

Use the `tileRenderingSettings.enableTileRendering` property to enable or disable tile rendering, which affects performance based on document size.

Set `enableTileRendering` to `false` to disable tile rendering. It is enabled by default and typically benefits large documents.

Example: Disable tile rendering

```html
<template>
  <div>
    <button id="disable" @click="disableTileRendering">Disable tile rendering</button>

    <ejs-pdfviewer
      ref="viewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>
```

```js
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'DisableTileRendering',
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
    disableTileRendering() {
      const viewer = this.$refs.viewer.ej2Instances;
      viewer.tileRenderingSettings.enableTileRendering = false;
    }
  }
};
</script>
```

