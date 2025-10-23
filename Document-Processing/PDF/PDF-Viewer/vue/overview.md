---
title: Overview of Vue PDF Viewer Component | Syncfusion
description: Checkout and learn about overview of the Syncfusion Vue PDF Viewer component and much more details.
platform: document-processing
control: PDF Viewer
documentation: UG
---

# Overview of vue PDF viewer control

The [`Vue PDF Viewer`](https://www.syncfusion.com/pdf-viewer-sdk) component is a lightweight and modular component for viewing and printing PDF files. It provides the best viewing experience available with core interactions such as zooming, scrolling, text searching, text selection, and text copying. The thumbnail, bookmark, hyperlink and table of contents support provides easy navigation within and outside the PDF files.

## Setup

### Create a Vue Application

You can use Vue CLI to setup your Vue 2 applications.To install Vue CLI use the following commands.

```
npm install -g @vue/cli
npm install -g @vue/cli-init
vue init webpack-simple quickstart
cd quickstart
npm install
```

### Adding Syncfusion PDF Viewer package

All Syncfusion Vue packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg)registry. To install Vue PDF Viewer package, use the following command.

```
npm install @syncfusion/ej2-vue-pdfviewer --save
```
### Registering PDF Viewer component

You can register the PDF Viewer component in your application by using the `Vue.use()`. Refer to the code example given below.

```
import { PdfViewerPlugin } from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);
```
```
Registering PdfViewerPlugin in Vue, will register the PDF Viewer component along with its required child directives globally.
```
### Adding CSS references for PDF Viewer

Add CSS references needed for PDF Viewer in `style` section of the `App.vue` file from `../node_modules/@syncfusion` package folder.

```
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';  
@import "../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css";
</style>
```
### Add PDF Viewer component

Add the Vue PDF Viewer by using `ejs-pdfviewer` selector in template section of the `App.vue` file.

```
<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"> 
    </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib",
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner ]
  }
}
</script>
```
```
Refer the [Getting Started with Vue3](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started-application) for using Syncfusion Vue components in Vue 3 applications.
```
## Key Features 

*[`View PDF Document`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) - Open and display both the normal and the protected PDF files with AES and RC4 encryption.
*[`Annotations`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/annotation/text-markup-annotation) - Annotate with text markup, shapes, stamps, ink, and sticky notes.Form filling and form designing can be done.
*[`Form Fields`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/form-designer/create-fillable-pdf-forms/create-programmatically) - Form filling and form designing can be done.
*[`Signature`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/annotation/signature-annotation) - Hand-written and digital signatures are allowed.
*[`Toolbar`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/toolbar) - Built-in-toolbar and custom toolbars to perform user interaction of PDF Viewer functionalities.
*[`Navigation`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/navigation) - Easy navigation with the help of bookmarks, thumbnails, hyperlinks, and table of contents.
*[`Magnification`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/magnification) - Fit to page, fit to width, and automatic (fits to the visible area).
*[`Search`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/text-search) - Search a text easily across the PDF document.
*[`Core Interactions`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/interaction-mode) - Allows scrolling, zooming, panning, selection, and page navigation.
*[`Print`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/print) - Print the entire document or a specific page directly from the browser.
*[`Globalization`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/globalization) - Provides inherent support to localize the UI.

## Supported Web platforms

* [Javascript(ES5)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started)
* [Javascript](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started)
* [Angular](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started)
* [React](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)
* [ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started)
* [ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started)
* [Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/overview)