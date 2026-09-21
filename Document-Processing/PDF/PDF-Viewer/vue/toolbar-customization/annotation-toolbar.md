---
layout: post
title: Customize the Annotation Toolbar in Vue PDF Viewer | Syncfusion
description: Learn here all about how to Show or hide and customize the annotation toolbar in the EJ2 Vue PDF Viewer with runnable examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Annotation Toolbar in Vue PDF Viewer

## Overview

This guide shows how to show or hide the annotation toolbar and how to choose which tools appear and their order.

**Outcome:** A working Vue example that toggles the annotation toolbar and uses [`annotationToolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarsettings#annotationtoolbaritems) to customize the toolbar.

## Prerequisites

- EJ2 Vue PDF Viewer installed and added in your project. See [getting started guide](../getting-started)
- A valid [`resourceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#resourceurl) or [`serviceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#serviceurl) for viewer assets when running locally

## Steps

### 1. Show or hide the annotation toolbar

Use the [`showAnnotationToolbar`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar#showannotationtoolbar) method on the viewer toolbar to control visibility.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button @click="hideAnnotationToolbar">Hide Annotation Toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="viewer" :documentPath="documentPath" :resourceUrl="resourceUrl" height="600px" width="100%">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const viewer = ref(null);
const show = ref(true);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);

const hideAnnotationToolbar = () => {
  viewer.value.ej2Instances.toolbar.showAnnotationToolbar(show.value);
  show.value = !show.value;
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button @click="hideAnnotationToolbar">Hide Annotation Toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="viewer" :documentPath="documentPath" :resourceUrl="resourceUrl" height="600px" width="100%">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      show: true,
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    hideAnnotationToolbar() {
      this.$refs.viewer.ej2Instances.toolbar.showAnnotationToolbar(this.show);
      this.show = !this.show;
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

### 2. Show or hide annotation toolbar items

Use [`annotationToolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarsettings#annotationtoolbaritems) with a list of [`AnnotationToolbarItem`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationtoolbaritem) values. The toolbar shows only items in this list.

**Complete example**

The following is a complete, runnable example. It wires a toggle button and a viewer with a custom annotation toolbar list.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button @click="hideAnnotationToolbar">Hide Annotation Toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="viewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :toolbarSettings="toolbarSettings" height="600px" width="100%">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const viewer = ref(null);
const show = ref(true);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";
const toolbarSettings = {
  annotationToolbarItems: [
    'HighlightTool', 'UnderlineTool', 'StrikethroughTool', 'ColorEditTool', 'OpacityEditTool', 'AnnotationDeleteTool', 'CommentPanelTool'
  ]
};

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]);

const hideAnnotationToolbar = () => {
  viewer.value.ej2Instances.toolbar.showAnnotationToolbar(show.value);
  show.value = !show.value;
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button @click="hideAnnotationToolbar">Hide Annotation Toolbar</button>
    <ejs-pdfviewer id="PdfViewer" ref="viewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :toolbarSettings="toolbarSettings" height="600px" width="100%">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      show: true,
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
      toolbarSettings: {
        annotationToolbarItems: [
          'HighlightTool', 'UnderlineTool', 'StrikethroughTool', 'ColorEditTool', 'OpacityEditTool', 'AnnotationDeleteTool', 'CommentPanelTool'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
      BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]
  },
  methods: {
    hideAnnotationToolbar() {
      this.$refs.viewer.ej2Instances.toolbar.showAnnotationToolbar(this.show);
      this.show = !this.show;
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Troubleshooting

- Annotation toolbar tools do not appear.
    - **Cause**: The items are not valid [`AnnotationToolbarItem`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotationtoolbaritem) strings or the viewer is not provided with [`Annotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotation) / [`Toolbar`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar) services.
    - **Solution**: Confirm services in `provide` includes [`Toolbar`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar) and [`Annotation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotation) and use valid item names.

## Related topics

- [Customize form designer toolbar](./form-designer-toolbar)
- [Customize primary toolbar](./primary-toolbar)

## See also

* [Primary toolbar customization](./primary-toolbar)
* [Custom toolbar](./custom-toolbar)
* [Annotation toolbar customization](./annotation-toolbar)
* [Form designer toolbar customization](./form-designer-toolbar)
* [Mobile toolbar](./mobile-toolbar)
* [Feature Modules](./feature-module)
