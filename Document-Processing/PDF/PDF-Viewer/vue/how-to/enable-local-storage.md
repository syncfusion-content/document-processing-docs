---
layout: post
title: Manage local storage in Vue PDF Viewer | Syncfusion
description: Learn how to control session-specific data storage in the Vue PDF Viewer using the enableLocalStorage property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Manage local storage in PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer exposes the `enableLocalStorage` property to control how session-specific viewer data is stored. Configure this property to choose between the viewer's internal storage mechanism (in-memory collection) and the browser's session storage.

### Using the `enableLocalStorage` property

Set `enableLocalStorage` to control whether the viewer preserves session data in an internal (in-memory) collection or uses browser session storage. When `enableLocalStorage` is `true`, the viewer keeps session data in memory for the current application session; when `false` (the default), session storage is used. Review memory implications before enabling in-memory storage for large documents or heavy interactive content.

{% tabs %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :enableLocalStorage="true"
      :serviceUrl="serviceUrl"
      style="height: 640px;"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
        serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
        documentPath:"PDF_Succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
};
</script>

{% endhighlight %}
{% endtabs %}

### Impact and considerations

- **Increased memory usage**: Enabling in-memory storage can increase memory consumption, especially for large documents or when many interactive elements (form fields, annotations) are present.
- **Dispose when unused**: Dispose or destroy the PDF Viewer instance when it is no longer required to avoid memory leaks, particularly when `enableLocalStorage` is `true`.
- **Default behavior**: The default value is `false`, which uses the browser session storage unless explicitly changed.

### Enhanced control

Using `enableLocalStorage` gives control over where session-specific state is kept, allowing optimization for performance or persistence needs. Consider the application's memory profile and document characteristics when selecting the storage mode.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)