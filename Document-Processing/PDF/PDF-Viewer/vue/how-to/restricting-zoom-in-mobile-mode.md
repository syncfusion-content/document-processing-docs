---
layout: post
title: How to Restrict Zoom on Mobile Devices in Vue PDF Viewer | Syncfusion
description: Restrict the zoom percentage on mobile devices in the Vue PDF Viewer using minZoom and maxZoom to keep the UI usable on small screens.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Restrict Zoom on Mobile Devices in Vue PDF Viewer

Use `minZoom` and `maxZoom` to restrict zoom levels on mobile devices and improve scrolling performance and perceived load time. Restricting zoom prevents extreme zoom levels that can degrade rendering performance on constrained devices.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation,
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
         Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
import {Browser} from '@syncfusion/ej2-base';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl:"https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer ]},

  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
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
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation,
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
         Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
import {Browser} from '@syncfusion/ej2-base';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer ]},

  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
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

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/Restrict%20Zoom%20Percentage%20on%20Mobile%20Devices)