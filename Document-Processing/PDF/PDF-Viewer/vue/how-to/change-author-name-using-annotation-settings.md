---
layout: post
title: Change author name using annotation settings in Vue PDF Viewer | Syncfusion
description: Learn how to change the author name and related annotation settings using the annotationSettings API in the Vue PDF Viewer.
platform: document-processing
control: PDF Viewer

documentation: ug
domainurl: ##DomainURL##
---

# Change author name using annotation settings in Vue PDF Viewer

The `annotationSettings` API provides a central way to configure properties that apply to all annotations in the viewer.

API name: annotationSettings

| Property Name | Data type & Default Value | Description |
|---|---|---|
| author | String ("Guest") | Specifies the author of the annotation. |
| minWidth | Number (0) | Specifies the minimum width of the annotation. |
| maxWidth | Number (0) | Specifies the maximum width of the annotation. |
| minHeight | Number (0) | Specifies the minimum height of the annotation. |
| maxHeight | Number (0) | Specifies the maximum height of the annotation. |
| isLock | Boolean (false) | Specifies whether the annotation is locked. If true, the annotation cannot be selected. |
| isPrint | Boolean (true) | Specifies whether the annotation is included in print actions. |
| isDownload | Boolean (true) | Specifies whether the annotation is included in download actions. |
| Free Text Settings |
| allowOnlyTextInput | Boolean (false) | Specifies text-only mode for free text annotations. If true, moving or resizing is disabled. |

Change the author name and other properties using the annotationSettings API as shown below.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<template>
  <ejs-pdfviewer
    id="pdfViewer"
    ref="viewer"
    :documentPath="documentPath"
    :annotationSettings="annotationSettings"
    :freeTextSettings="freeTextSettings"
    style="height: 640px; display: block;"
  />
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields] },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      annotationSettings: {
        author: 'syncfusion',
        minHeight: 30,
        maxHeight: 500,
        minWidth: 30,
        maxWidth: 500,
        isLock: false,
        isPrint: true,
        isDownload: true
      },
      freeTextSettings: {
        allowTextOnly: true
      }
    };
  }
};
</script>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
<template>
  <ejs-pdfviewer
    id="pdfViewer"
    ref="viewer"
    :serviceUrl="serviceUrl"
    :documentPath="documentPath"
    :annotationSettings="annotationSettings"
    :freeTextSettings="freeTextSettings"
    style="height: 640px; display: block;"
  />
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: { PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, Print, Annotation, FormFields] },
  data() {
    return {
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      annotationSettings: {
        author: 'syncfusion',
        minHeight: 30,
        maxHeight: 500,
        minWidth: 30,
        maxWidth: 500,
        isLock: false,
        isPrint: true,
        isDownload: true
      },
      freeTextSettings: {
        allowTextOnly: true
      }
    };
  }
};
</script>
```
{% endhighlight %}
{% endtabs %}
