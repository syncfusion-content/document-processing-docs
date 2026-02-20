---
layout: post
title: Get Base64 from loaded PDF in Vue PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF in the Syncfusion Vue PDF Viewer using saveAsBlob and FileReader.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieving Base64 from a PDF in Vue PDF Viewer

### Overview

This guide shows how to obtain the Base64-encoded value of a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer using Vue. Producing a Base64 string is useful for sending the PDF to a server, embedding it in JSON payloads, or client-side processing.

### How to retrieve the Base64 value

**Step 1: Create the PDF Viewer sample**

Follow the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) guide for the Vue PDF Viewer.

**Step 2: Set up the Vue component**

Create an Vue component and update the template to include a button that triggers conversion to a Base64 string. The samples below show both standalone and server-backed viewer configurations.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <button @click="getBase64" style="margin-bottom: 20px;">
      Get Base64
    </button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
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
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
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
  methods: {
    getBase64() {
      if (this.$refs.pdfviewer) {
        this.$refs.pdfviewer.saveAsBlob().then((blobData) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64data = reader.result;
            console.log(base64data); // Outputs the base64 string of the PDF
          };
          reader.readAsDataURL(blobData);
        });
       }
      },
    },
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
    <button @click="getBase64" style="margin-bottom: 20px;">
      Get Base64
    </button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
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
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
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
  methods: {
    getBase64() {
      if (this.$refs.pdfviewer) {
        this.$refs.pdfviewer.saveAsBlob().then((blobData) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64data = reader.result;
            console.log(base64data); // Outputs the base64 string of the PDF
          };
          reader.readAsDataURL(blobData);
        });
       }
      },
    },
};
</script>

{% endhighlight %}
{% endtabs %}


### Conclusion

By implementing these steps in the Vue component, a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer can be converted into a Base64-encoded data URL when a button is clicked. This facilitates the manipulation or transfer of PDF data as needed.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)