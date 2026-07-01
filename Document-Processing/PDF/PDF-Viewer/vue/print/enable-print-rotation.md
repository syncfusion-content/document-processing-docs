---
layout: post
title: Enable Print Rotation in Vue PDF Viewer | Syncfusion
description: Learn how to enable print rotation for landscape documents in the Syncfusion Vue PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Enable print rotation in Vue PDF Viewer

This guide shows how to enable automatic rotation of landscape pages during printing so they match the paper orientation and reduce clipping. Use [`enablePrintRotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enableprintrotation) when printing documents that include landscape pages and you want them rotated to match the printer paper orientation.

## Prerequisites

- The [`Print`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/print) module must be injected into [`PdfViewerComponent`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer).

## Steps to enable print rotation

1. Inject the required modules (including [`Print`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/print)) into [`PdfViewerComponent`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer).
2. Set [`enablePrintRotation={true}`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enableprintrotation) in the PDF Viewer during initialization.

## Example

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :enablePrintRotation="true"
      style="height: 100vh"
    >
    </ejs-pdfviewer>
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
  Annotation,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:
        'https://cdn.syncfusion.com/ej2/33.2.13/dist/ej2-pdfviewer-lib',
    };
  },

  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      Annotation,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
};
</script>

{% endhighlight %}
{% endtabs %}

![Print rotation demo showing landscape pages rotated for printing](../../javascript-es6/images/print-rotate.gif)

[View sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## Troubleshooting

- If you need to preserve original page orientation for archival printing, set [`enablePrintRotation: false`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enableprintrotation).
- Confirm that injected modules include [`Print`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/print) or the property will have no effect.

## See also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Print modes](./print-modes)
- [Print events](./events)
