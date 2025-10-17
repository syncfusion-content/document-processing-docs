---
layout: post
title: Get page info in Vue PDF Viewer | Syncfusion
description: Learn how to retrieve page height, width, and rotation using getPageInfo in the Syncfusion Vue PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Get Page Info in Vue PDF Viewer component

Use the **getPageInfo()** method to retrieve information for a specified page, including height, width, and rotation.

The following steps show how to use `getPageInfo`.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to get the height, width, and rotation for a specified page.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <button @click="retrievePageInfo" style="margin-bottom: 20px;">
      GetPageInfo
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
  PageOrganizer,
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
    retrievePageInfo() {
      if (this.$refs.pdfviewer) {
        const pdfviewer = this.$refs.pdfviewer.ej2Instances;
        // Set the page index for which info is required
        const pageIndex = 0;
        // To Retrieve and log the page information
        console.log(pdfviewer.getPageInfo(pageIndex));
        // To Log the specific page information details to the console
        const pageInfo = pdfviewer.getPageInfo(pageIndex);
        if (pageInfo) {
          console.log(`Page Info for Page Index ${pageIndex}:`);
          console.log(`Height: ${pageInfo.height}`);
          console.log(`Width: ${pageInfo.width}`);
          console.log(`Rotation: ${pageInfo.rotation}`);
        }
      }
    }
  },
};
</script>

{% endhighlight %}
{% endtabs %}

By following these steps, the page info API can be integrated and used in the EJ2 PDF Viewer.

[View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)