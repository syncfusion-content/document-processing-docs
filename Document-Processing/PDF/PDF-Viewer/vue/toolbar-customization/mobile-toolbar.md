---
layout: post
title: Customize mobile toolbar in Vue PDF Viewer | Syncfusion
description: Learn how to customize the toolbar for mobile devices in the Syncfusion Vue PDF Viewer and ensure smooth touch interactions.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize mobile toolbar in Vue PDF Viewer

## Overview

This guide shows you how to enable the desktop toolbar on mobile devices running the Vue PDF Viewer, and how to preserve touch scrolling when the desktop toolbar is used.

**Outcome**: a working Vue example that displays the desktop toolbar on mobile devices with smooth scrolling enabled.

## Prerequisites

- EJ2 Vue PDF Viewer installed and added in project. See [getting started guide](../getting-started)
- For standalone mode: a valid [`resourceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#resourceurl) hosting the PDF Viewer assets.
- For server-backed mode: a working [`serviceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#serviceurl) endpoint.

## Steps

### Step 1: Enable desktop toolbar on mobile

Set [`enableDesktopMode`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enabledesktopmode) to `true` on the PDF Viewer to display the desktop toolbar on mobile devices.

### Step 2: (Optional, recommended) Disable text-selection for smooth scrolling

Set [`enableTextSelection`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enabletextselection) to `false` to preserve smooth touch scrolling and prevent text-selection from capturing touch events.

### Step 3: Inject required services

Inject the [`Toolbar`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar) and other services required by your toolbar features.

**Complete example:**

{% tabs %}
{% highlight html tabtitle="Standalone (Composition API - ~/src/App.vue)" %}

<template>
  <div>
    <ejs-pdfviewer
      id="PdfViewer"
      ref="pdfviewer"
      :enableDesktopMode="true"
      :enableTextSelection="false"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 640px; width: 100%; display: block;">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Standalone (Options API - ~/src/App.vue)" %}

<template>
  <div>
    <ejs-pdfviewer
      id="PdfViewer"
      ref="pdfviewer"
      :enableDesktopMode="true"
      :enableTextSelection="false"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 640px; width: 100%; display: block;">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed (Composition API - ~/src/App.vue)" %}

<template>
  <div>
    <ejs-pdfviewer
      id="PdfViewer"
      ref="pdfviewer"
      :enableDesktopMode="true"
      :enableTextSelection="false"
      :documentPath="documentPath"
      :serviceUrl="serviceUrl"
      style="height: 640px; width: 100%; display: block;">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed (Options API - ~/src/App.vue)" %}

<template>
  <div>
    <ejs-pdfviewer
      id="PdfViewer"
      ref="pdfviewer"
      :enableDesktopMode="true"
      :enableTextSelection="false"
      :documentPath="documentPath"
      :serviceUrl="serviceUrl"
      style="height: 640px; width: 100%; display: block;">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Expected result

- The desktop toolbar appears on mobile devices, showing all toolbar features.
- Touch scrolling is smooth without lag or interference from text selection.
- All toolbar buttons (Zoom, Navigation, Print, Annotations) function correctly on touch devices.

## Troubleshooting

- Print option not visible on mobile.
    - **Cause**: [`enableDesktopMode`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enabledesktopmode) is `false`; the mobile toolbar omits Print.
    - **Solution**: set [`enableDesktopMode`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enabledesktopmode) to `true`.

- Touch scrolling is jerky after enabling desktop toolbar.
    - **Cause**: Text-selection is capturing touch events.
    - **Solution**: set [`enableTextSelection`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#enabletextselection) to `false` to disable text-selection on touch devices.

- Missing assets or broken UI.
    - **Cause**: [`resourceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#resourceurl) is incorrect or unreachable.
    - **Solution**: confirm [`resourceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#resourceurl) points to the correct version of `ej2-pdfviewer-lib` and is reachable from the device.

- Server errors in server-backed mode.
    - **Cause**: [`serviceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#serviceurl) CORS configuration or back-end connectivity issue.
    - **Solution**: verify [`serviceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#serviceurl) CORS configuration and that the back end is running.

## Related topics

- [Customize form designer toolbar](./form-designer-toolbar)
- [Customize annotation toolbar](./annotation-toolbar)
- [Create a custom toolbar](./custom-toolbar)
