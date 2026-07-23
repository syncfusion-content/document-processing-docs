---
layout: post
title: Organize Page Toolbar Customization in Vue PDF Viewer | Syncfusion
description: Learn here all about Organize Page Toolbar Customization in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Organize Page Toolbar Customization in Vue PDF Viewer component

The PDF Viewer allows you to customize the toolbar for the organize pages feature, enabling you to show or hide specific tools based on your application's requirements. The `pageOrganizerSettings` API provides properties to control the visibility of each tool in the organize pages dialog.

## Enable or disable the insert option

The `canInsert` property controls the insert tool visibility. Set it to `false` to disable the insert tool.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :pageOrganizerSettings="{ canInsert: false }">
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
      resourceUrl: "https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    };
  },

  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Enable or disable the delete option

The `canDelete` property controls the delete tool visibility. Set it to `false` to disable the delete tool.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :pageOrganizerSettings="{ canDelete: false }">
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
      resourceUrl: "https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    };
  },

  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Enable or disable the rotate option

The `canRotate` property controls the rotate tool visibility. Set it to `false` to disable the rotate tool.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :pageOrganizerSettings="{ canRotate: false }">
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
      resourceUrl: "https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    };
  },

  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Enable or disable the copy option

The `canCopy` property controls the copy tool interaction. Set it to `false` to disable the copy tool.

## Enable or disable the import option

The `canImport` property controls the import tool interaction. Set it to `false` to disable the import tool.

## Enable or disable the rearrange option

The `canRearrange` property controls whether pages can be rearranged. Set it to `false` to disable page reordering.

## Show or hide the zoom pages option

The `showImageZoomingSlider` property controls the zooming tool visibility. Set it to `false` to hide the zoom page tool.
