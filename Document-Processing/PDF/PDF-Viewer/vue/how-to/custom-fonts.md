---
layout: post
title: Add custom fonts in Vue PDF Viewer | Syncfusion
description: Learn how to add and load custom TTF fonts for documents displayed in the Vue PDF Viewer using the customFonts property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom fonts to the PDF viewer

To use custom fonts in the Syncfusion PDF Viewer, add the custom TTF files to the resource URL directory and configure the viewer to load them. Specify font file names using the `customFonts` property as an array of names.

Steps to add custom fonts

**Step 1:** Add custom TTF font files to the resource URL path referenced in the application. For example, place the TTF files in the ej2-pdfviewer-lib folder that serves as the resource URL path.

**Step 2:** Use the following code to configure custom fonts in the PDF Viewer.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :customFonts = "customFonts">
  </ejs-pdfviewer>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "PDF_Succinctly.pdf";
const customFonts= ["arialbd.ttf", "arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"];
provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :customFonts = "customFonts">
  </ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: "PDF_Succinctly.pdf",
      customFonts: ["arialbd.ttf", "arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"],
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
    Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

These steps integrate custom fonts into PDF documents displayed in the PDF Viewer.