---
layout: post
title: Link Annotation in Vue PDF Viewer | Syncfusion
description: Enable, apply, customize, and manage link annotations in the Vue PDF Viewer for both internal page navigation and external URLs.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Link Annotation in Vue PDF Viewer

This guide explains how to enable, add, customize, and manage link annotations in the Syncfusion Vue PDF Viewer. Link annotations can navigate to another page in the same PDF or open an external URL in the browser.

![Link annotation overview](../../react/images/link-annotation.png)

## Enable Link Annotation in the Viewer

To enable link annotations, inject the following modules into the Vue PDF Viewer:

- [**Annotation**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#annotation)
- [**LinkAnnotation**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#linkannotation)
- [**Toolbar**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#toolbar)
- [**Magnification**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/magnification)
- [**Navigation**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/navigation)

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :hyperlinkOpenState="hyperlinkOpenState">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  Annotation,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
const hyperlinkOpenState = 'NewTab';

provide('PdfViewer', [
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  Annotation,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
]);
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :hyperlinkOpenState="hyperlinkOpenState">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  Annotation,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      hyperlinkOpenState: 'NewTab'
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      Annotation,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer
    ]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

> The `hyperlinkOpenState` property controls how external URLs open when the user clicks a link. Use `NewTab` to open the URL in a new browser tab or `NewWindow` to open it in a separate browser window.

## Add Link Annotation

### Add Link Using the Toolbar

1. Click the **Add Link** button from the annotation toolbar.
2. Choose whether the link points to a **URL** or a **Page**.
3. Enter the target URL or page number.
4. Set properties such as stroke color and thickness.
5. Click **Insert** to create the link annotation.

![Add Link dialog URL](../../react/images/add-link.png)

![Add Link dialog Page](../../react/images/page-link.png)

### Add Link Annotation Programmatically

Use [`addAnnotation()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotation#addannotation) to create a link annotation at a specific location.

#### Add Internal Page Link

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
<template>
  <div id="app">
    <button v-on:click="addInternalLink">Add internal page link</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"></ejs-pdfviewer>
  </div>
</template>

<script setup>
import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);

const addInternalLink = () => {
  pdfviewer.value.ej2Instances.annotation.addAnnotation('Link', {
    offset: { x: 200, y: 480 },
    pageNumber: 1,
    width: 150,
    height: 75,
    destinationPageIndex: 4,
    destinationLocation: { x: 100, y: 200 },
    zoomValue: 4,
    strokeColor: '#1433e3'
  });
};
</script>
{% endhighlight %}
{% endtabs %}

This adds a link rectangle that navigates to page index 4 and zooms to the specified location when clicked.

#### Add External URL Link

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
<template>
  <div id="app">
    <button v-on:click="addExternalLink">Add external link</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"></ejs-pdfviewer>
  </div>
</template>

<script setup>
import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);

const addExternalLink = () => {
  pdfviewer.value.ej2Instances.annotation.addAnnotation('Link', {
    offset: { x: 450, y: 480 },
    pageNumber: 1,
    width: 150,
    height: 75,
    url: 'https://www.syncfusion.com',
    strokeColor: '#FF0000'
  });
};
</script>
{% endhighlight %}
{% endtabs %}

## Customize Link Appearance

Link annotations can be customized with visual and navigation properties such as stroke color, thickness, destination page, or URL. The following example configures the viewer to open external links in a separate browser window.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" hyperlinkOpenState="NewWindow"></ejs-pdfviewer>
  </div>
</template>

<script setup>
import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);
</script>
{% endhighlight %}
{% endtabs %}

## Manage Link Annotations

### Edit Link Annotation in the UI

After a link annotation is inserted, the user can:

- Right-click the selected link annotation to open the context menu
- Choose **Select** and drag the rectangle to a new position
- Resize the rectangle using resize handles
- Right-click again and choose **Edit** to update the target page or URL

![Resize link annotation](../../react/images/resize-link.png)

![Edit Link Annotation Context Menu](../../react/images/edit-link.png)

### Edit Link Annotation Programmatically

Use `editAnnotation()` to update an existing link annotation.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
<script setup>
import { ref } from 'vue';
const pdfviewer = ref(null);

const editLinkAnnotation = () => {
  const viewer = pdfviewer.value.ej2Instances;
  for (const linkAnnotation of viewer.annotationCollection) {
    if (linkAnnotation.subject === 'Link') {
      linkAnnotation.strokeColor = '#1fcbd4';
      linkAnnotation.thickness = 2;
      linkAnnotation.bounds = { left: 100, top: 100, width: 100, height: 100 };
      linkAnnotation.url = 'https://www.google.com';
      linkAnnotation.destinationPageIndex = 3;
      linkAnnotation.destinationLocation = { x: 300, y: 300 };
      linkAnnotation.zoomValue = 1;
      viewer.annotation.editAnnotation(linkAnnotation);
      break;
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Delete Link Annotation

The PDF Viewer supports deleting link annotations through both the UI and API.

![Delete link annotation](../../react/images/delete-link.png)

#### Delete a link annotation by ID

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
<script setup>
import { ref } from 'vue';
const pdfviewer = ref(null);

const deleteLinkById = () => {
  const viewer = pdfviewer.value.ej2Instances;
  const linkAnnotation = viewer.annotationCollection.find((item) => item.subject === 'Link');

  if (linkAnnotation) {
    viewer.annotation.deleteAnnotationById(linkAnnotation.annotationId);
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Set Properties While Adding an Individual Link

You can set link properties directly in the `addAnnotation('Link', ...)` call.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}
<script setup>
import { ref } from 'vue';
const pdfviewer = ref(null);

const addMultipleLinks = () => {
  const viewer = pdfviewer.value.ej2Instances;

  viewer.annotation.addAnnotation('Link', {
    offset: { x: 100, y: 150 },
    pageNumber: 1,
    width: 180,
    height: 60,
    url: 'https://www.syncfusion.com',
    strokeColor: '#ff0000'
  });

  viewer.annotation.addAnnotation('Link', {
    offset: { x: 320, y: 180 },
    pageNumber: 1,
    width: 150,
    height: 60,
    destinationPageIndex: 2,
    destinationLocation: { x: 100, y: 200 },
    zoomValue: 2,
    strokeColor: '#1433e3'
  });
};
</script>
{% endhighlight %}
{% endtabs %}

## Link Annotation Events

The PDF Viewer raises annotation life cycle events that can be used to monitor when link annotations are added, modified, selected, or removed. See [Annotation Events](../annotation-event).

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Annotations/Link%20Annotation)

## See Also

- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../context-menu/custom-context-menu)
- [Hyperlink Navigation](../interactive-pdf-navigation/hyperlink)
- [Annotation Events](../annotation-event)
- [Export and Import Annotation](../export-import/export-annotation)
- [Delete Annotation](../delete-annotation)
