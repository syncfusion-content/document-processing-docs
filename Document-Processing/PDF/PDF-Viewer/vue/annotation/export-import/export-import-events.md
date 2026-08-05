---
layout: post
title: Import/Export events in Vue PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for PDF Annotations in the Syncfusion Vue PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Import/Export events in Vue PDF Viewer

Import/export events let developers monitor and control annotation data as it flows into and out of the PDF Viewer. These events enable validation, progress reporting, audit logging, and conditional blocking of import/export operations.

Common use cases:
- Progress UI and user feedback
- Validation and sanitization of imported annotation data
- Audit logging and telemetry
- Blocking or altering operations based on business rules

Each event exposes typed event-args: `ImportStartEventArgs`, `ImportSuccessEventArgs`, `ImportFailureEventArgs`, `ExportStartEventArgs`, `ExportSuccessEventArgs`, and `ExportFailureEventArgs` that describe the operation context.

## Import events
- [`importStart`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#importstart): Triggers when an import operation starts.
- [`importSuccess`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#importsuccess): Triggers when annotations are successfully imported.
- [`importFailed`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#importfailed): Triggers when importing annotations fails.

## Handle import events
Example: handle import events by wiring event props on `PdfViewerComponent`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :importStart="onImportStart"
      :importSuccess="onImportSuccess"
      :importFailed="onImportFailed"
      style="height: 650px"
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
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
      TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
  },
  methods: {
    onImportStart(args) {
      console.log('Import started', args);
    },
    onImportSuccess(args) {
      console.log('Import success', args);
    },
    onImportFailed(args) {
      console.error('Import failed', args);
    }
  }
}
</script>

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Export events
- [`exportStart`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#exportstart): Triggers when an export operation starts.
- [`exportSuccess`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#exportsuccess): Triggers when annotations are successfully exported.
- [`exportFailed`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#exportfailed): Triggers when exporting annotations fails.

## Handle export events

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :exportStart="onExportStart"
      :exportSuccess="onExportSuccess"
      :exportFailed="onExportFailed"
      style="height: 650px"
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
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
      TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
  },
  methods: {
    onExportStart(args) {
      console.log('Export started', args);
    },
    onExportSuccess(args) {
      console.log('Export success', args);
    },
    onExportFailed(args) {
      console.error('Export failed', args);
    }
  }
}
</script>

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> `importStart`, `importSuccess`, and `importFailed` cover the lifecycle of annotation imports; `exportStart`, `exportSuccess`, and `exportFailed` cover the lifecycle of annotation exports.

## See also

- [Annotation Overview](../../overview)
- [Export Annotation](../export-annotation)
- [Import Annotation](../import-annotation)
- [Annotation Types](../../annotation-types/area-annotation)
