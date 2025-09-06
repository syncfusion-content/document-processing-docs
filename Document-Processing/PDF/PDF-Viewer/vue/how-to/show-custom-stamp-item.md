---
layout: post
title: Displaying Custom stamp Items in Vue Pdfviewer component | Syncfusion
description: Learn how to display custom items in the custom stamp Dropdown in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Displaying Custom Items in Custom Stamp Dropdown

### Overview

This guide explains how to add and display custom items in the custom stamp dropdown menu of Syncfusion's PDF Viewer using Vue. This feature allows users to easily access and apply custom stamps to their PDF documents.

### How to Retrieve Base64 Value

**Step 1:** Follow the steps provided in the [Vue PDF Viewer Getting Started documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Configure Custom Stamp Settings

Within the PDF Viewer setup, utilize `customStampSettings` to specify the custom stamps that should appear in the dropdown menu.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :customStampSettings="customStampSettings"
      style="height: 640px;"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation,
         Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib",
      customStampSettings: {
        isAddToMenu: true,
        customStamps: [
            {
                customStampName: 'Image1',
                customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
            },
            {
                customStampName: 'Image2',
                customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
            }
        ],
        enableCustomStamp: true,
        opacity: 1
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  }
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :serviceUrl="serviceUrl"
      :customStampSettings="customStampSettings"
      style="height: 640px;"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation,
         Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      customStampSettings: {
        isAddToMenu: true,
        customStamps: [
            {
                customStampName: 'Image1',
                customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
            },
            {
                customStampName: 'Image2',
                customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
            }
        ],
        enableCustomStamp: true,
        opacity: 1
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  }
</script>

{% endhighlight %}
{% endtabs %}

By following these instructions, you can successfully configure to display custom items in the custom stamp dropdown, allowing users to easily apply personalized stamps to their documents.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)