---
layout: post
title: Configure minZoom and maxZoom in Vue PDF Viewer | Syncfusion
description: Learn how to configure minimum and maximum zoom levels using minZoom and maxZoom in the Syncfusion Vue PDF Viewer.
control: Open thumbnail
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Configure minimum and maximum zoom properties

The PDF Viewer exposes `minZoom` and `maxZoom` to control the allowable zoom range for document viewing. Setting these properties helps maintain readability, performance, and a consistent experience across devices.

### minZoom

`minZoom` sets the minimum zoom percentage the viewer supports. Use this to prevent users from zooming out to levels that make content unreadable or negatively affect layout.

### maxZoom

`maxZoom` sets the maximum zoom percentage the viewer supports. Restricting the maximum helps avoid excessive memory use and degraded rendering performance when users zoom in very far.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :zoomValue="zoomValue">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const maxZoom = 270,
const minZoom = 45,

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :zoomValue="zoomValue">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner,
  PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      maxZoom : 270,
      minZoom : 45,
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :zoomValue="zoomValue">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner,
  PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const maxZoom = 270,
const minZoom = 45,

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :zoomValue="zoomValue">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner,
  PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      maxZoom : 270,
      minZoom : 45,
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

#### Restrict Zoom Percentage on Mobile Devices

You can easily restrict the zoom percentage on mobile devices using the `minZoom` and `maxZoom` properties. This feature allows you to set specific limits for zooming, ensuring smoother scrolling performance and efficient document loading on mobile devices. By controlling the zoom levels, you can provide a better user experience across different devices.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const documentLoad = function (args) {
  var viewer = pdfviewer.value.ej2Instances;
  viewer = this.$refs.pdfviewer.ej2Instances;
  if (Browser.isDevice && !viewer.enableDesktopMode) {
    viewer.maxZoom = 200;
    viewer.minZoom = 10;
  }
  else{
    viewer.zoomMode = 'Default';
  }
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner,
  PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
   documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      if (Browser.isDevice && !viewer.enableDesktopMode) {
        viewer.maxZoom = 200;
        viewer.minZoom = 10;
      }
      else{
          viewer.zoomMode = 'Default';
      }
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner,
  PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const documentLoad = function (args) {
  var viewer = pdfviewer.value.ej2Instances;
  viewer = this.$refs.pdfviewer.ej2Instances;
  if (Browser.isDevice && !viewer.enableDesktopMode) {
    viewer.maxZoom = 200;
    viewer.minZoom = 10;
  }
  else{
    viewer.zoomMode = 'Default';
  }
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :documentLoad="documentLoad" >
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner,
  PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

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
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      if (Browser.isDevice && !viewer.enableDesktopMode) {
        viewer.maxZoom = 200;
        viewer.minZoom = 10;
      }
      else{
          viewer.zoomMode = 'Default';
      }
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

This limits maximum zoom to 200% and minimum zoom to 10% on mobile devices, helping prevent performance issues from excessive zooming.