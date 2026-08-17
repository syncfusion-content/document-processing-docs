---
layout: post
title: Annotations Permission in Vue PDF Viewer | Syncfusion
description: Learn here all about how to use annotation permissions in Syncfusion Vue PDF Viewer using programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation permissions in Vue

Use [annotationSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#annotationsettings) to control creation-time permissions and default behavior for annotations in the PDF Viewer. These settings establish defaults for annotations created through the UI and programmatic flows.

## Common permissions

- `isLock`: Lock an annotation so it cannot be moved, resized, edited, or deleted.
- `skipPrint`: Exclude annotations from the print output when printing from the viewer.
- `skipDownload`: Exclude annotations from the exported/downloaded PDF.

Example: set default `annotationSettings` as a component property on `PdfViewerComponent`.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      :annotationSettings="annotationSettings"
      style="height: 650px;">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      annotationSettings: {
        isLock: true,
        skipPrint: true,
        skipDownload: true
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
      ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, 
      FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Individual permissions

- `isPrint`: Controls whether a specific annotation participates in printing. Set to `false` to exclude only that annotation from print output.
- `isLock`: Lock or unlock a specific annotation instance programmatically.

Example: set per-annotation defaults for text markup, shapes, and measurements as component properties.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath" 
      :resourceUrl="resourceUrl"
      :highlightSettings="highlightSettings"
      :rectangleSettings="rectangleSettings"
      :distanceSettings="distanceSettings"
      style="height: 650px;">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      highlightSettings: {
        isPrint: true,
        isLock: false
      },
      rectangleSettings: {
        isPrint: false,
        isLock: true
      },
      distanceSettings: {
        isPrint: true,
        isLock: false
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
      ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, 
      FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Behavior notes

- `isLock true`: The annotation is locked; users cannot move, resize, or edit it through the UI until it is unlocked.
- `skipPrint true`: All annotations are omitted from the print output initiated from the viewer.
- `skipDownload true`: All annotations are omitted from the exported/downloaded PDF from the viewer.
- `isPrint` on an individual annotation: Use this when you only want to exclude a particular annotation from printing while leaving others printable.

[View Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Annotation Events](./annotation-event)
- [Annotations API](./annotations-api)
