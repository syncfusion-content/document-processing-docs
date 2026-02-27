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

The `getPageInfo()` method returns metadata for a specified page in the viewer, such as `height`, `width`, and `rotation`. `pageIndex` is zero-based. Call `getPageInfo()` after the viewer is ready to ensure page data is available.

The following example retrieves and logs the page dimensions and rotation for a specified page.

**Step 1:** Follow the steps provided in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet implements retrieval of height, width, and rotation for a specified page in the viewer.

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