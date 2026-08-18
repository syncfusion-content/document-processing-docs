---
layout: post
title: How to Display Custom Tooltips for Annotations in Vue | Syncfusion
description: Display custom tooltips for annotations in the Vue PDF Viewer so users can see helpful information when they hover over each annotation.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Display Custom Tooltips for Annotations in Vue PDF Viewer

Display custom tooltips for annotations by handling the [annotationMouseOver](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#annotationmouseover) and annotationMouseLeave events.

Example: Show a tooltip on mouse over

```html
<template>
  <div>
    <button @click="loadSample" hidden></button>
    <ejs-pdfviewer
      ref="viewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      style="height: 640px; display: block;"
      @created="onCreated"
      @annotationMouseOver="onAnnotationMouseOver"
      @annotationMouseLeave="onAnnotationMouseLeave"
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
import { Tooltip } from '@syncfusion/ej2-popups';

export default {
  name: 'CustomAnnotationTooltip',
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
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      tooltipObj: null
    };
  },
  methods: {
    onCreated() {
      const viewerInstance = this.$refs.viewer.ej2Instances;
      viewerInstance.annotationSettings.author = 'syncfusion';
      this.tooltipObj = new Tooltip({ mouseTrail: true, opensOn: 'Custom' });
    },
    onAnnotationMouseOver(args) {
      if (!this.tooltipObj) {
        return;
      }
      const viewerInstance = this.$refs.viewer.ej2Instances;
      this.tooltipObj.appendTo(`#pdfViewer_pageDiv_${viewerInstance.currentPageNumber - 1}`);
      this.tooltipObj.content = args.annotation.author;
      this.tooltipObj.open();
      const tooltipElement = document.getElementsByClassName('e-tooltip-wrap')[0];
      if (tooltipElement) {
        tooltipElement.style.top = `${args.Y + 100}px`;
        tooltipElement.style.left = `${args.X}px`;
      }
    },
    onAnnotationMouseLeave() {
      if (this.tooltipObj) {
        this.tooltipObj.close();
      }
    }
  }
};
</script>
```

This hides the default tooltip and displays a custom tooltip showing the author information when hovering over annotations.


