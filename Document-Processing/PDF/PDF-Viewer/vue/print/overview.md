---
layout: post
title: Print PDF in Vue PDF Viewer | Syncfusion
description: Enable and customize printing, configure print events, cancel print, and monitor printing in the Syncfusion Vue PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print PDF in Vue PDF Viewer

The Vue PDF Viewer includes built-in printing via the toolbar and APIs so users can control how documents are printed and monitor the process.

Select **Print** in the built-in toolbar to open the browser print dialog.

![Browser print dialog from PDF Viewer](../../javascript-es6/images/print.gif)

## Enable or Disable Print in Vue PDF Viewer

The Syncfusion Vue PDF Viewer component lets users print a loaded PDF document through the built-in toolbar or programmatic calls. Control whether printing is available by setting the [`enablePrint`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enableprint) property (`true` enables printing; `false` disables it).

The following Vue examples render the PDF Viewer with printing disabled.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfviewer"
      :enablePrint="false"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
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

## Print programmatically in Vue PDF Viewer

To start printing from code, call the [`pdfviewer.print.print()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/print#print-1) method after the document is fully loaded. This approach is useful when wiring up custom UI or initiating printing automatically; calling print before the document finishes loading can result in no output or an empty print dialog.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <button @click="printPdf">Print</button>
    <ejs-pdfviewer
      id="pdfviewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
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
  methods: {
    printPdf() {
      this.$refs.pdfviewer.ej2Instances.print.print();
    },
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

## Key capabilities

- Enable or disable printing with the [`enablePrint`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enableprint) property
- Start printing from UI (toolbar Print) or programmatically using [`print.print()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/print#print-1).
- Control output quality with the [`printScaleFactor`](./print-quality) property (0.5–5)
- Auto‑rotate pages during print using [`enablePrintRotation`](./enable-print-rotation)
- Choose where printing happens with [`printMode`](./print-modes) (Default or NewWindow)
- Track the life cycle with [`printStart` and `printEnd` events](./events)

## Troubleshooting

- Ensure the [`resourceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#resourceurl) value matches the deployed `ej2-pdfviewer-lib` version.
- Calling [`print()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/print#print-1) launches the browser print dialog; behavior varies by browser and may be affected by popup blockers or browser settings.

[View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See Also

- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
- [Print events](./events)

