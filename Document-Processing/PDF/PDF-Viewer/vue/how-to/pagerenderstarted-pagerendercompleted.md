---
layout: post
title: Handle pageRenderInitiate and pageRenderComplete | Syncfusion
description: Learn how to use the pageRenderInitiate and pageRenderComplete events in the Syncfusion Vue PDF Viewer during page rendering.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Page render initiate and complete events in Vue PDF Viewer

In the PDF Viewer, the `pageRenderInitiate` and `pageRenderComplete` events fire during the page rendering lifecycle:

- `pageRenderInitiate`: fired when the rendering of a page begins. Use this event to initialize resources, show loading indicators, or set up rendering parameters before the page content is drawn.
- `pageRenderComplete`: fired when the rendering of a page finishes. Use this event to hide loading indicators, record render timing, or run post-render processing.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :pageRenderInitiate="pageRenderInitiate" :pageRenderComplete="pageRenderComplete">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const pageRenderInitiate = function (args) {
  // This method is called when the page rendering starts
  console.log('Rendering of pages started');
  console.log(args);
}
const pageRenderComplete = function (args) {
  // This method is called when the page rendering completes
  console.log('Rendering of pages completed');
  console.log(args);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :pageRenderInitiate="pageRenderInitiate" :pageRenderComplete="pageRenderComplete">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    pageRenderInitiate: function (args) {
      // This method is called when the page rendering starts
      console.log('Rendering of pages started');
      console.log(args);
    },
    pageRenderComplete: function (args) {
      // This method is called when the page rendering completes
      console.log('Rendering of pages completed');
      console.log(args);
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :pageRenderInitiate="pageRenderInitiate" :pageRenderComplete="pageRenderComplete">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const pageRenderInitiate = function (args) {
  // This method is called when the page rendering starts
  console.log('Rendering of pages started');
  console.log(args);
}
const pageRenderComplete = function (args) {
  // This method is called when the page rendering completes
  console.log('Rendering of pages completed');
  console.log(args);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :pageRenderInitiate="pageRenderInitiate" :pageRenderComplete="pageRenderComplete">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
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
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    pageRenderInitiate: function (args) {
      // This method is called when the page rendering starts
      console.log('Rendering of pages started');
      console.log(args);
    },
    pageRenderComplete: function (args) {
      // This method is called when the page rendering completes
      console.log('Rendering of pages completed');
      console.log(args);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

The following code demonstrates how to subscribe to these events in the Syncfusion PDF Viewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/PageRenderStarted%20and%20PageRenderCompleted%20event)