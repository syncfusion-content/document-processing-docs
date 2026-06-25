---
layout: post
title: Customize Print Quality in Vue PDF Viewer | Syncfusion
description: Learn how to customize print quality for PDF Documents in the Syncfusion Vue PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Customize Print Quality in Vue PDF Viewer

This article shows a concise, task-oriented workflow to set and verify print quality for documents rendered by the Vue PDF Viewer by using the [`printScaleFactor`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#printscalefactor) property.

**Goal:** Set a suitable [`printScaleFactor`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#printscalefactor) to improve printed output sharpness while balancing performance and memory use.

## Steps

### 1. Choose a target print quality.

- Valid [`printScaleFactor`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#printscalefactor) values: **0.5 – 5**. Higher values increase image sharpness and resource use.
- Default value: **1**.

### 2. Set `printScaleFactor` during initialization

It is recommended that you set the [`printScaleFactor`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#printscalefactor) in the viewer options during initialization.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :printScaleFactor="printScaleFactor"
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
      printScaleFactor: 0.5,
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

### 3. Set `printScaleFactor` after instantiation

As an alternative option, the [`printScaleFactor`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#printscalefactor) can be dynamically changed during runtime

{% highlight html %}
// Update printScaleFactor at runtime
pdfviewer.ej2Instances.printScaleFactor = 2; // increase print resolution for upcoming prints
{% endhighlight %}

### 4. Verify output

Use browser Print Preview or produce a printed/PDF copy to confirm sharpness and acceptable render time.

## Notes

- Values outside the supported range **0.5 – 5** will be ignored and fall back to the default (`1`).
- Increasing [`printScaleFactor`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#printscalefactor) raises CPU, memory, and rendering time requirements. Test on target machines and documents before setting a higher factor.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See Also

- [Overview](./overview)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)
- [Print events](./events)
