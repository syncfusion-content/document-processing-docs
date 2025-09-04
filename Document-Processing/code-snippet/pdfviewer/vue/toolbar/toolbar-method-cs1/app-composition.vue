<template>
  <div id="app">
    <button v-on:click="showToolbarClicked">showToolbarClicked</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

const viewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);,

const showToolbarClicked = function (args) {
  viewer.toolbar.showToolbar(false);
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css';

#pdfViewer {
  height: 640px;
}
</style>
