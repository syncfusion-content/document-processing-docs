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

Use the `enableLocalStorage` property to control whether session-specific data is stored in session storage (default) or an internal in-memory collection.

### Use enableLocalStorage

Set `enableLocalStorage` to manage storage behavior. When `true`, data is kept in memory; otherwise, session storage is used.

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

### Impact and Considerations

- Memory usage can increase when using in-memory storage with large documents or many interactive elements.
- Dispose of the PDF Viewer instance when no longer needed to avoid memory leaks.
- Default: `enableLocalStorage` is `false`, so session storage is used unless changed.

### Enhanced Control

Leveraging the `enableLocalStorage` property provides greater flexibility in managing how data is stored during a session, allowing you to optimize performance and storage based on your application’s specific requirements.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)