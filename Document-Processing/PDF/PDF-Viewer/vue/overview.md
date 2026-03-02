---
title: Overview of Vue PDF Viewer Component | Syncfusion
description: Learn about the Syncfusion Vue PDF Viewer component, its features, supported interactions, and how it helps in viewing PDF documents.
platform: document-processing
control: PDF Viewer
documentation: UG
---

# Overview of Vue PDF Viewer component

The [`Vue PDF Viewer`](https://www.syncfusion.com/pdf-viewer-sdk) is a lightweight and modular component for viewing, annotating, and printing PDF files in Vue applications. It provides an optimal viewing experience with core interactions such as zooming, scrolling, text searching, text selection, and text copying. Thumbnail, bookmark, hyperlink, and table of contents navigation support enables easy exploration within and across PDF documents.

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

All Syncfusion Vue packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install Vue PDF Viewer package, use the following command.

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

Add the Vue PDF Viewer by using `ej-pdfviewer` selector in template section of the `App.vue` file.

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
      resourceUrl:"https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
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
For Vue 3 applications, refer to the [Getting Started with Vue 3](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started-application) guide.
```
## Key Features 

* **[View PDF Documents](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started)** - Open and display normal and protected PDF files with AES and RC4 encryption support.
* **[Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/annotation/text-markup-annotation)** - Add annotations using text markup, shapes, stamps, ink, and sticky notes.
* **[Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/form-designer/create-programmatically)** - Fill and design forms directly within PDF documents.
* **[Digital Signatures](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/annotation/signature-annotation)** - Support for hand-written and digital signatures.
* **[Toolbar](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/toolbar)** - Built-in and customizable toolbars for intuitive user interactions.
* **[Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/navigation)** - Navigate with bookmarks, thumbnails, hyperlinks, and table of contents.
* **[Magnification](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/magnification)** - Multiple zoom options including fit-to-page, fit-to-width, and automatic scaling.
* **[Text Search](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/text-search)** - Find and highlight text across the entire PDF document.
* **[Core Interactions](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/interaction-mode)** - Support for scrolling, zooming, panning, text selection, and page navigation.
* **[Printing](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/print)** - Print entire documents or specific pages directly from the browser.
* **[Localization](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/globalization)** - Multi-language UI support for global applications.

## Supported Web platforms

* [Javascript(ES5)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started)
* [Javascript](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started)
* [Angular](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started)
* [React](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)
* [ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started)
* [ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started)
* [Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/overview)