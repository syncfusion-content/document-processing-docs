---
layout: post
title: Customize annotation selectors in Vue PDF Viewer | Syncfusion
description: Learn how to customize annotation selectors in the Vue PDF Viewer component using annotationSelectorSettings with examples.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize annotation selectors in Vue PDF Viewer

Customize the annotation selector using the [annotationSelectorSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/#annotationselectorsettings) property of the PDF Viewer.

Example: Customize the selector of a shape annotation

```html
<template>
  <div>
    <button id="annotationSelector" @click="onAnnotationSelector">annotationSelector</button>

    <ejs-pdfviewer
      ref="viewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>
```

```js
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'AnnotationSelectorExample',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  // Inject the required modules for the PDF Viewer
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormDesigner,
      FormFields
    ]
  },
  data() {
    return {
      serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf'
    };
  },
  methods: {
    onAnnotationSelector() {
      const viewer = this.$refs.viewer.ej2Instances;
      viewer.rectangleSettings.annotationSelectorSettings.resizerShape = 'Circle';
      viewer.annotationModule.editAnnotation(viewer.annotationCollection[0]);
    }
  }
};
</script>
```

Composition API example

```html
<template>
  <div>
    <button id="annotationSelector" @click="onAnnotationSelector">annotationSelector</button>

    <EjsPdfViewer
      ref="viewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
    />
  </div>
</template>
```

```js
<script setup>
import { ref } from 'vue';
import { PdfViewerComponent as EjsPdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';

// Inject required modules for the PDF Viewer using defineOptions (Vue 3.3+)
// This ensures annotation-related features are available
defineOptions({
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormDesigner,
      FormFields
    ]
  }
});

const serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
const documentPath = 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf';

const viewer = ref(null);

function onAnnotationSelector() {
  const inst = viewer.value.ej2Instances;
  inst.rectangleSettings.annotationSelectorSettings.resizerShape = 'Circle';
  inst.annotationModule.editAnnotation(inst.annotationCollection[0]);
}
</script>
```

