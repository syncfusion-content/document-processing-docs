---
layout: post
title: How to Load the PDF Viewer with Local Resources in Vue | Syncfusion
description: Configure the Vue PDF Viewer to load PDF documents and library files from local resources instead of a CDN for offline or restricted networks.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Load the PDF Viewer with Local Resources in Vue PDF Viewer

This guide shows how to configure the PDF Viewer to load resources from your local application instead of a CDN.

## Prerequisites

- Complete the [getting started guide](../getting-started) for the Vue PDF Viewer.
- Node.js and Vue CLI installed.

## Configuration steps

### Step 1: Copy resource files

Ensure that your application includes the `ej2-pdfviewer-lib` folder, which contains the `pdfium.js` and `pdfium.wasm` files required for PDF rendering.

Copy the folder into the `public/asset` directory of your application.

### Step 2: Add your PDF document

Place the PDF file you want to display inside the same `public/asset` directory.

**Example folder structure:**

```
public/
└── asset/
    ├── ej2-pdfviewer-lib/
    │   ├── pdfium.js
    │   └── pdfium.wasm
    └── pdfsuccinctly.pdf
```

### Step 3: Update the documentPath and resourceUrl

Configure the PDF Viewer to use local paths as shown below.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
export default {
  data() {
    return {
      resourceUrl: window.location.origin + '/asset/ej2-pdfviewer-lib',
      documentPath: window.location.origin + '/asset/pdfsuccinctly.pdf'
    };
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Complete example

The following code summarizes the complete setup for loading the PDF Viewer with local resources.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-pdfviewer
    :resourceUrl="resourceUrl"
    :documentPath="documentPath">
  </ejs-pdfviewer>
</template>

<script>
import {
  PdfViewerComponent,
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
  FormFields,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      resourceUrl: window.location.origin + '/asset/ej2-pdfviewer-lib',
      documentPath: window.location.origin + '/asset/pdfsuccinctly.pdf'
    };
  },
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
      FormFields,
      PageOrganizer
    ]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## GitHub reference

View the complete sample on GitHub:

- [Load the PDF Viewer with local resources (Vue)](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally/quickstart)
