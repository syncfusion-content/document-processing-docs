---
layout: post
title: Print Events in Vue PDF Viewer | Syncfusion
description: Learn how to configure print events and track usage and implements workflows in the Syncfusion Vue PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print events in Vue PDF Viewer

This page lists each event emitted by the Vue PDF Viewer's [`Print`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/print) feature, the argument schema, and the minimal behavior notes needed for implementation.

## Events

| Name         | Description |
|--------------|-------------|
| [`printStart`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#printstart) | Raised when a print action begins. Use the event to log activity or cancel printing. |
| [`printEnd`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#printend)   | Raised after a print action completes. Use the event to notify users or clean up resources. |

### `printStart`

This event is emitted when printing is initiated by toolbar or through programmatic API. Use to validate prerequisites, record analytics, or cancel printing.

**Arguments** - ([`PrintStartEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/printstarteventargs)):

- `fileName` - The document file name being printed.
- `cancel` - Default: `false`. Set to `true` to cancel the print operation.

Setting `args.cancel = true` prevents the client-side print flow; for server-backed printing it prevents the service request that produces print output. Find the code example [here](../security/restricting-download-and-print#3-block-print-with-the-printstart-event)

**Minimal usage example:**

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      @printStart="onPrintStart"
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
    onPrintStart(args) {
      console.log('Print action has started for file: ' + args.fileName);
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

### `printEnd`

This event is emitted after the printing completes. Use to finalize analytics, clear temporary state, or notify users.

Arguments - ([`PrintEndEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/printendeventargs)):

- `fileName` - The printed document name.

**Minimal usage example:**

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      @printEnd="onPrintEnd"
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
    onPrintEnd(args) {
      console.log('Printed file name: ' + args.fileName);
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

## See also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
