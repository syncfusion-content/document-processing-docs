---
layout: post
title: Control Annotations Visibility in Vue Pdfviewer component | Syncfusion
description: Learn here all about how to Control PDF Annotations Visibility in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Control PDF Annotations Visibility in PDF Viewer

### Overview

This guide demonstrates how to control the visibility of PDF annotations in documents loaded and saved using the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. This process allows the annotations to be visible only in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer.

### How to Control Annotation Visibility

**Step 1:** Follow the steps provided in the [Vue PDF Viewer Getting Started documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample.


**Step 2:**  Set Up Your Vue Component

Create an Vue component and update the template to include a button that triggers the download operation. Additionally, create a function to save the document with the PDF annotation flag set to `noView`.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <button v-on:click="save">Download</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :documentLoad="documentLoad"
        :resourceUrl="resourceUrl">
      </ejs-pdfviewer>
  </div>
</template>

<script>

import { PdfViewerComponent, Toolbar, Magnification, Navigation,
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
         Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, DisplayMode} from '@syncfusion/ej2-vue-pdfviewer';

// Import PdfAnnotationFlag and PdfDocument from the Syncfusion PDF library.
import {PdfDocument, PdfAnnotationFlag} from '@syncfusion/ej2-pdf';

export default {
  name: 'App',
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data () {
    return {
      resourceUrl:"https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib",
      documentPath:"https://cdn.syncfusion.com/content/pdf/annotations-v1.pdf",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]},
  methods: {
    documentLoad: function () {
     let viewer = this.$refs.pdfviewer.ej2Instances;
      //Code snippet to add basic annotations. You can also include other annotations as needed.
                viewer.annotation.addAnnotation("Highlight", {
                    bounds: [{ x: 97, y: 610, width: 350, height: 14 }],
                    pageNumber: 1
                });
                viewer.annotation.addAnnotation("Underline", {
                    bounds: [{ x: 97, y: 723, width: 353.5, height: 14 }],
                    pageNumber: 1
                });
                viewer.annotation.addAnnotation("Strikethrough", {
                    bounds: [{ x: 97, y: 836, width: 376.5, height: 14 }],
                    pageNumber: 1
                });
  },
  save: function(){
      // Get the PDF viewer instance
      let viewer = this.$refs.pdfviewer.ej2Instances;

      // Save the current PDF document as a Blob
      viewer.saveAsBlob().then((blob) => {
        const reader = new FileReader();
        reader.onload = function () {
          let base64data = reader.result;
          // Extract base64 string from Data URL
          const base64EncodedData = base64data.split('base64,')[1];
          // Create a PdfDocument instance with base64 data
          const document1 = new PdfDocument(base64EncodedData);
          // Modify flag for each annotation
          for (let i = 0; i < document1.pageCount; i++) {
            const page = document1.getPage(i);
            for (let j = 0; j < page.annotations.count; j++) {
              const annot = page.annotations.at(j);
              // Set flag to noView
              annot.flags |= PdfAnnotationFlag.noView;
            }
          }
          // Save modified document as a blob
          document1.saveAsBlob().then((modifiedBlob) => {
            const internalReader = new FileReader();
            internalReader.onload = function () {
              const modifiedBase64 = internalReader.result;
              // Create a link to download the modified PDF
              const downloadLink = document.createElement('a');
              downloadLink.href = modifiedBase64;
              downloadLink.download = 'modified.pdf';
              downloadLink.click();
            };
            internalReader.readAsDataURL(modifiedBlob.blobData);
          });
        };
        reader.readAsDataURL(blob);
      });
    }

  }
}
</script>

{% endhighlight %}
{% endtabs %}

By following these steps, the annotations in a PDF document can be set to be visible in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, providing control over annotation visibility based on different platforms.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)