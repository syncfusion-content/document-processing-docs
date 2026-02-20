---
layout: post
title: Control annotation visibility in Vue PDF Viewer | Syncfusion
description: Learn how to control the visibility of PDF annotations in the Vue PDF Viewer, ensuring annotations appear only in the viewer as needed.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Control annotation visibility in PDF Viewer for Vue

## Overview

This guide shows how to display annotations in the Vue PDF Viewer while preventing them from appearing in the saved/downloaded PDF.

## How to Control Annotation Visibility

Steps to control annotation visibility

**Step 1:** Follow the steps in the getting-started guide (https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a basic PDF Viewer sample.


**Step 2:** Add controls for annotation modification and downloading

Add buttons in the component template to modify annotations and to trigger a download of the PDF. Additionally, create a function to save the document with the PDF annotation flag set to `noView`.

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
      resourceUrl:"https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
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

After performing these steps, annotations remain visible in the viewer but are hidden in the downloaded PDF.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)