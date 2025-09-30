---
layout: post
title: Unload document in Vue Pdfviewer component | Syncfusion
description: Learn here all about Unload document in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Unload document
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Unload document in Vue Pdfviewer component

The PDF Viewer library allows you to unload the PDF document being displayed in the PDF Viewer control programmatically using the [**unload()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#unload) method.

The `unload()` method is essential for managing memory and data integrity in the PDF Viewer. When a PDF is loaded, its data is cached on the server, while rendered pages and annotation data are stored in the browser's session storage.

The `unload()` method is called internally to clear this cached data in the following scenarios:
*   When a new document is loaded.
*   When the browser window/tab is closed or refreshed.

This automatic cleanup ensures that no residual data remains, which helps reduce server-side memory consumption.

Additionally, the `unload()` method is automatically invoked when using the `viewer.load()` method to load a new document. This ensures the currently displayed PDF is properly unloaded and all related cache is cleared on both the client and server sides.

You can also call the `unload()` method programmatically. This is useful when you need to explicitly clear the viewer and release all associated client and server-side resources before the user navigates away or closes the session manually.

The following steps are used to unload the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Add the following code snippet to perform the unload operation.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="unload">Unload Document</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
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

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]);

const unload = function () {
  var viewer = this.$refs.pdfviewer.ej2Instances;
  // Unload the PDF document.
  viewer.unload();
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="unload">Unload Document</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
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
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    unload: function () {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      // Unload the PDF document.
      viewer.unload();
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="unload">Unload Document</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const unload = function () {
  const viewer = pdfviewer.value.ej2Instances;
  // Unload the PDF document.
  viewer.unload();
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
    <button v-on:click="unload">Unload Document</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
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
    unload: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      // Unload the PDF document.
      viewer.unload();
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Find the Sample, [how to unload the PDF document programmatically](https://www.syncfusion.com/downloads/support/directtrac/general/ze/quickstart-620361849.zip)