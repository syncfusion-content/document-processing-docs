---
layout: post
title: Authorization token in Vue PDF Viewer component | Syncfusion
description: Learn here all about Authorization token in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Authorization token
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Authorization token in Vue PDF Viewer control

The PDF Viewer supports adding an authorization token to every AJAX request by configuring the `ajaxRequestSettings.ajaxHeaders` property. Set the header once and the library includes it in all requests initiated by the viewer.

The following steps are used to include the authorization token to the PDF viewer control.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) to create simple PDF Viewer sample in React.

**Step 2:** Add the following code snippet to include the authorization token.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div>
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :ajaxRequestSettings="ajaxRequestSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "PDF_Succinctly.pdf";

// Include Authorization Token.
const ajaxRequestSettings = {
  ajaxHeaders: [
    {
      headerName: 'Authorization',
      headerValue: 'Bearer 64565dfgfdsjweiuvbiuyhiueygf'
    }
  ],
  withCredentials: false
}

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]);

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div>
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :ajaxRequestSettings="ajaxRequestSettings">
    </ejs-pdfviewer>
  </div>
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
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "PDF_Succinctly.pdf",

      // Include Authorization Token.
      ajaxRequestSettings: {
        ajaxHeaders: [
          {
            headerName: 'Authorization',
            headerValue: 'Bearer 64565dfgfdsjweiuvbiuyhiueygf'
          }
        ],
        withCredentials: false
      },
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

Find the Sample, [how to include authorization token](https://www.syncfusion.com/downloads/support/directtrac/general/ze/quickstart-1627983082.zip)