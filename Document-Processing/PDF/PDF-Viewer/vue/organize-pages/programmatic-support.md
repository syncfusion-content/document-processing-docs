---
layout: post
title: Programmatic Support for Organize Pages in Vue PDF Viewer component | Syncfusion
description: Learn here all about Programmatic Support for Organize Pages in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatic Support for Organize Pages in Vue PDF Viewer component

The PDF Viewer exposes programmatic APIs to manage page organization. Use these APIs to enable the page organizer, open or close the organizer dialog, and customize page-management behaviors from application code.

## Enable or disable the page organizer

Enable the page organizer using the `enablePageOrganizer` property. The default value is `true`.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :documentPath="documentPath"
          :resourceUrl="resourceUrl"
          :enablePageOrganizer=true>
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},

}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :serviceUrl="serviceUrl"
          :documentPath="documentPath"
          :enablePageOrganizer=true>
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},

}
</script>
{% endhighlight %}
{% endtabs %}

## Open the page organizer on document load

Control whether the page organizer opens automatically when a document loads using the `isPageOrganizerOpen` property. The default value is `false`.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :documentPath="documentPath"
          :resourceUrl="resourceUrl"
          :isPageOrganizerOpen = true>
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},

}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :serviceUrl="serviceUrl"
          :documentPath="documentPath"
          :isPageOrganizerOpen = true>
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},

}
</script>
{% endhighlight %}
{% endtabs %}

## Customize page organizer settings

Use the `pageOrganizerSettings` property to configure page-management actions and thumbnail zoom behavior. Settings include toggles for deleting, inserting, rotating, copying, importing, and rearranging pages, and controls for thumbnail zoom. By default, all actions are enabled, and standard zoom settings are applied.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :documentPath="documentPath"
          :resourceUrl="resourceUrl"
          :pageOrganizerSettings="pageOrganizerSettings">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      pageOrganizerSettings : {canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true, imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5}
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},

}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :serviceUrl="serviceUrl"
          :documentPath="documentPath"
          :pageOrganizerSettings="pageOrganizerSettings">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      pageOrganizerSettings : {canDelete: true, canInsert: true, canRotate: true, canCopy: true, canRearrange: true, canImport: true, imageZoom: 1, showImageZoomingSlider: true, imageZoomMin: 1, imageZoomMax: 5}
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},

}
</script>
{% endhighlight %}
{% endtabs %}

## Open the page organizer dialog

Call the `openPageOrganizer` method on the viewer's `pageOrganizer` API to programmatically open the organizer dialog and access page-management tools.

```html
<button v-on:click="openPageOrganizer">Open PageOrganizer Pane</button>
```

```ts
openPageOrganizer: function () {
   var viewer = this.$refs.pdfviewer.ej2Instances;
   // Open Page Organizer panel.
   viewer.pageOrganizer.openPageOrganizer();
}
```

## Close the page organizer dialog

Call the `closePageOrganizer` method on the viewer's `pageOrganizer` API to programmatically close the organizer dialog.

```html
 <button v-on:click="closePageOrganizer">Close PageOrganizer Pane</button>
```

```ts
closePageOrganizer: function () {
   var viewer = this.$refs.pdfviewer.ej2Instances;
   // Close Page Organizer panel.
    viewer.pageOrganizer.closePageOrganizer();
}
```


