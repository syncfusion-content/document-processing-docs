---
layout: post
title: Magnification in Vue PDF Viewer | Syncfusion
description: Learn how to enable and use magnification in the Syncfusion Vue PDF Viewer, including Zoom In, Zoom Out, Fit to Page, and Fit to Width options.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Magnification in Vue PDF viewer control

The PDF Viewer includes magnification controls—ZoomIn, ZoomOut, Zoom, FitPage, and FitWidth—in the default toolbar. The magnification controls can be shown or hidden in the toolbar.

The following examples show how to enable magnification in the PDF Viewer.


{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableMagnification="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :enableMagnification="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
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
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
      Annotation, ThumbnailView, Print, TextSelection, TextSearch]
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backend)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :enableMagnification="true">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}
<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :enableMagnification="true">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
      Annotation, ThumbnailView, Print, TextSelection, TextSearch]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

The following magnification options are available in the default toolbar:

* **ZoomIn**: Zoom in from the current zoom value.
* **ZoomOut**: Zoom out from the current zoom value.
* **Zoom**: Select a specific zoom level.
* **FitPage**: Fit the page height within the available viewport.
* **FitWidth**: Fit the page width to the viewport.
* **Auto**: Automatically adjust zoom to fit content when the viewport size changes.

![PDF Viewer magnification controls showing toolbar buttons](./images/zoom.png)

N> The PDF Viewer supports zoom values from 10% to 400%.

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)
