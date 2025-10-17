---
layout: post
title: Get Base64 from loaded PDF in Vue PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF in the Syncfusion Vue PDF Viewer using saveAsBlob and FileReader.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieving Base64 Value from a PDF in PDF Viewer

### Overview

This guide shows how to get the base64-encoded value of a PDF loaded in the Syncfusion PDF Viewer using TypeScript. This is useful for sending the PDF as a base64 string or processing it on the client.

### How to Retrieve Base64 Value

**Step 1:** Follow the steps provided in the [Vue PDF Viewer Getting Started documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Set Up Your Vue Component

Create a Vue component and set up the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. Add a button to trigger the conversion to a base64 string.

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
      resourceUrl: "https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib",
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

By following these steps, a loaded PDF can be converted to a Base64 string on button click for transfer or processing.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)