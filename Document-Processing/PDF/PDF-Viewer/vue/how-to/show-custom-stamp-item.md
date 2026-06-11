---
layout: post
title: Show custom items in the Custom Stamp dropdown | Syncfusion
description: Learn how to display custom items in the Custom Stamp dropdown using customStampSettings in the Syncfusion Vue PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Displaying custom items in custom stamp dropdown in Vue PDF Viewer

### Overview

This guide shows how to add custom images to the custom stamp dropdown in the Vue PDF Viewer so users can apply personalized stamps to documents.

### Steps to show custom items in the custom stamp dropdown

**Step 1:** Create a basic Vue PDF Viewer sample using the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started)

**Step 2:** Configure custom stamp settings

Use `customStampSettings` to define stamps that appear in the dropdown. The `customStampImageSource` value accepts a Base64 data URI or an absolute URL pointing to an image.

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
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
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

By following these steps, the Custom Stamp dropdown will display the configured items, allowing users to apply personalized stamps to documents.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)