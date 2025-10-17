---
layout: post
title: Delete an annotation in Vue PDF Viewer | Syncfusion
description: Learn how to delete a specific annotation in the Vue PDF Viewer using the deleteAnnotationById method.
control: Delete annotation
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Delete annotation in Vue PDF Viewer control

Use the `deleteAnnotationById()` method to remove a specific annotation from a PDF document by its id.

Steps to delete a specific annotation.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to delete a specific annotation using `deleteAnnotationById()`.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="deleteAnnotationById">Delete Annotation By Id</button>
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
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Delete annotation by ID.
const deleteAnnotationById = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="deleteAnnotationById">Delete Annotation By Id</button>
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
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },

  methods: {
    // Delete annotation by ID.
    deleteAnnotationById: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="deleteAnnotationById">Delete Annotation By Id</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
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

// Delete annotation by ID.
const deleteAnnotationById = function () {
  const viewer = pdfviewer.ej2Instances;
  viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="deleteAnnotationById">Delete Annotation By Id</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
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
    // Delete annotation by ID.
    deleteAnnotationById: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Note :
If you use the **deleteAnnotation** API to delete an annotation, select an annotation first using the **selectAnnotation** API. You can't delete an annotation without selecting that annotation.

Find the sample, [how to delete a specific annotation using deleteAnnotationById](https://www.syncfusion.com/downloads/support/directtrac/general/ze/quickstart125741734.zip)

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Annotations/Interaction%20with%20annotations)