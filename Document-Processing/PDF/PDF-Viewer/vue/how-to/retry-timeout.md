---
layout: post
title: Retry Timeout in Vue PDF Viewer component | Syncfusion
description: Learn here all about Retry Timeout in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Retry Timeout
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retry timeout in Vue PDF Viewer

The `retryTimeout` property controls how long the PDF Viewer waits (in seconds) for an AJAX response before considering that request timed out. When a timeout occurs, the viewer will retry the request according to the `retryCount` setting. Properly configuring `retryTimeout` and `retryCount` makes the viewer more resilient to transient network errors while avoiding excessive load on the server.

Defaults and units:

- `retryTimeout` is specified in seconds. A value of `0` disables the timeout and may cause requests to hang indefinitely — avoid this in production.
- `retryCount` sets how many retry attempts the viewer makes after timeouts or transient failures.

Use cases:

- Short `retryTimeout` values (for example, 5–15 seconds) are appropriate for responsive UIs where a quick failover is preferred.
- Increase `retryCount` only when the server or network is expected to recover quickly; otherwise, prefer a lower `retryCount` combined with an appropriate `retryTimeout`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :retryTimeout="retryTimeout"
      :retryCount="retryCount">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "PDF_Succinctly.pdf";
const retryTimeout = 10;
const retryCount = 10;

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath" :retryTimeout="retryTimeout"
      :retryCount="retryCount">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';;

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "PDF_Succinctly.pdf",
      retryTimeout: 10,
      retryCount: 10
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

In the given example, the `retryTimeout` is set to 10 seconds, and the `retryCount` is set to 5. This means that if a request made by the PDF Viewer takes longer than 10 seconds to receive a response, it will be considered a timeout. In such cases, The PDF Viewer will resend the same request based on the retryCount. Here, this process will repeat up to maximum of 5 retries.

When an exception occurs during the AJAX request in the context of the PDF Viewer, the request will wait for the specified `retryTimeout` duration. If the timeout duration is exceeded, the PDF Viewer will decrement the [retryCount](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#retrycount) and attempt to load the document again. This retry process continues until the document is successfully loaded or the retryCount limit is reached.

The `retryCount` property of the PDF Viewer allows you to set the number of retries for a specific request. This feature is particularly useful for handling temporary errors such as network timeouts or server issues. By initiating new requests according to the retry count, ensure a smoother user experience and efficiently handle network or server problems.

If the timeout duration specified by `retryTimeout` is exceeded during the AJAX request, the PDF Viewer will decrement the `retryCount` and initiate a new request. This process will continue until the document is successfully loaded or the retry count limit is reached. This functionality helps improve the handling of temporary errors and ensures a more efficient and user-friendly experience.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/Retry%20Timeout)