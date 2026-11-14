---
layout: post
title: Resize and Move Annotations in Vue PDF Viewer | Syncfusion
description: Resize and move annotations in the Vue PDF Viewer using the built-in UI and programmatically update the annotation bounds and page number dynamically.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Resize and Move Annotations in Vue PDF Viewer

Annotations can be resized and moved after they are added to a document. The PDF Viewer supports these operations both from the built-in UI and programmatically through the [`editAnnotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotation#editannotation) API.

## Resize annotations

### Resize via UI

1. Add an annotation to the page, or select an existing annotation.
2. When the annotation is selected, resize handles appear on its corners and edges.
3. Drag a handle to change the width and height of the annotation.

![Resize annotations in PDF Viewer UI](../images/resize-annotations-pdf-viewer.gif)

### Resize programmatically

The size of an annotation is defined by its `bounds`. To resize an annotation programmatically, update the `width` and `height` of the respective annotation `bounds` and call the `editAnnotation` API to apply the change dynamically.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
const resizeAnnotation = function () {
  //get recently added annotation
  const viewer = pdfviewer.value.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically resize the annotation
  annotation.bounds.width += 100;
  annotation.bounds.height += 100;
  viewer.annotation.editAnnotation(annotation);
};
{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}
const resizeAnnotation = function () {
  //get recently added annotation
  const viewer = this.$refs.pdfviewer.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically resize the annotation
  annotation.bounds.width += 100;
  annotation.bounds.height += 100;
  viewer.annotation.editAnnotation(annotation);
};
{% endhighlight %}
{% endtabs %}

## Move annotations

### Move via UI

1. Select an annotation.
2. Drag the annotation to reposition it within the same page, or drag it to a different page in the document.

![Move annotations between pages in PDF Viewer UI](../images/move-annotations-between-pages.gif)

### Move programmatically

To move an annotation programmatically, update the relevant property of the annotation and call the `editAnnotation` API.

- To move an annotation to a **different page**, update the `pageNumber` property of the annotation.
- To move an annotation **within the same page**, update the `left` and `top` values (or `x` and `y`, depending on the bounds object structure) of the annotation's `bounds` object.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
const moveAnnotation = function () {
  //get recently added annotation
  const viewer = pdfviewer.value.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically change page number of annotation
  annotation.pageNumber += 1;
  viewer.annotation.editAnnotation(annotation);
};
{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}
const moveAnnotation = function () {
  //get recently added annotation
  const viewer = this.$refs.pdfviewer.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically change page number of annotation
  annotation.pageNumber += 1;
  viewer.annotation.editAnnotation(annotation);
};
{% endhighlight %}
{% endtabs %}

To move an annotation to a new position on the same page, update the `bounds` of the annotation instead.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
const moveAnnotationInPage = function () {
  //get recently added annotation
  const viewer = pdfviewer.value.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  // Update the annotation's coordinates (using left/top or x/y depending on the bounds object)
  annotation.bounds.left += 50;
  annotation.bounds.top += 50;
  viewer.annotation.editAnnotation(annotation);
};
{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}
const moveAnnotationInPage = function () {
  //get recently added annotation
  const viewer = this.$refs.pdfviewer.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  // Update the annotation's coordinates (using left/top or x/y depending on the bounds object)
  annotation.bounds.left += 50;
  annotation.bounds.top += 50;
  viewer.annotation.editAnnotation(annotation);
};
{% endhighlight %}
{% endtabs %}

## Sample

The following sample shows both the resize and move operations with a single viewer instance.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="moveAnnotation">Move annotation</button>
    <button v-on:click="resizeAnnotation">Resize annotation</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const moveAnnotation = function () {
  //get recently added annotation
  const viewer = pdfviewer.value.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically change page number of annotation
  annotation.pageNumber += 1;
  viewer.annotation.editAnnotation(annotation);
};

const resizeAnnotation = function () {
  //get recently added annotation
  const viewer = pdfviewer.value.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically resize the annotation
  annotation.bounds.width += 100;
  annotation.bounds.height += 100;
  viewer.annotation.editAnnotation(annotation);
};

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="moveAnnotation">Move annotation</button>
    <button v-on:click="resizeAnnotation">Resize annotation</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    moveAnnotation() {
      //get recently added annotation
      const viewer = this.$refs.pdfviewer.ej2Instances;
      const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
      //programmatically change page number of annotation
      annotation.pageNumber += 1;
      viewer.annotation.editAnnotation(annotation);
    },
    resizeAnnotation() {
      //get recently added annotation
      const viewer = this.$refs.pdfviewer.ej2Instances;
      const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
      //programmatically resize the annotation
      annotation.bounds.width += 100;
      annotation.bounds.height += 100;
      viewer.annotation.editAnnotation(annotation);
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="moveAnnotation">Move annotation</button>
    <button v-on:click="resizeAnnotation">Resize annotation</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer])

const moveAnnotation = function () {
  //get recently added annotation
  const viewer = pdfviewer.value.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically change page number of annotation
  annotation.pageNumber += 1;
  viewer.annotation.editAnnotation(annotation);
};

const resizeAnnotation = function () {
  //get recently added annotation
  const viewer = pdfviewer.value.ej2Instances;
  const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
  //programmatically resize the annotation
  annotation.bounds.width += 100;
  annotation.bounds.height += 100;
  viewer.annotation.editAnnotation(annotation);
};

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="moveAnnotation">Move annotation</button>
    <button v-on:click="resizeAnnotation">Resize annotation</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
  TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    moveAnnotation() {
      //get recently added annotation
      const viewer = this.$refs.pdfviewer.ej2Instances;
      const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
      //programmatically change page number of annotation
      annotation.pageNumber += 1;
      viewer.annotation.editAnnotation(annotation);
    },
    resizeAnnotation() {
      //get recently added annotation
      const viewer = this.$refs.pdfviewer.ej2Instances;
      const annotation = viewer.annotationCollection[viewer.annotationCollection.length - 1];
      //programmatically resize the annotation
      annotation.bounds.width += 100;
      annotation.bounds.height += 100;
      viewer.annotation.editAnnotation(annotation);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> The `editAnnotation` API requires an existing annotation. Add an annotation to the document before calling the resize or move methods.

## See also

- [Annotation Events](./annotation-event)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Comments](./comments)
- [Annotation in Mobile View](./annotations-in-mobile-view)
- [Annotation Comment Filter](./annotation-comment-filter)
