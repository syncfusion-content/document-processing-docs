---
layout: post
title: Disable the context menu in Vue PDF Viewer | Syncfusion
description: Learn how to disable the context menu in the Vue PDF Viewer using the contextMenuOption property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Disable the context menu in the Vue PDF Viewer

Set [contextMenuOption](https://ej2.syncfusion.com/documentation/api/pdfviewer/#contextmenuoption) to `None` to hide all context menu options. The default value is `RightClick`.

Example: Disable the context menu

```html
<template>
  <div>
    <button @click="disableContextMenu">Disable ContextMenuOption</button>
    <ejs-pdfviewer
      ref="viewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      style="height: 640px; display: block;"
    ></ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
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
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'DisableContextMenuViewer',
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
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
    };
  },
  methods: {
    disableContextMenu() {
      this.$refs.viewer.ej2Instances.contextMenuOption = 'None';
    }
  }
};
</script>
```

This hides the context menu and prevents right-click interactions in the viewer.

