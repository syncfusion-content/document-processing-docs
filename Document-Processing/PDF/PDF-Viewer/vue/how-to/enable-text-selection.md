---
layout: post
title: Enable or disable text selection in Vue PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the Vue PDF Viewer using the enableTextSelection property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable text selection in Vue PDF Viewer

This guide explains how to enable or disable text selection in the Syncfusion Vue PDF Viewer using both initialization-time settings and runtime toggling.

**Outcome:** By the end of this guide, you will be able to control whether users can select text in the PDF Viewer.

## Steps to toggle text selection

### 1. Disable text selection at initialization

Follow one of these steps to disable text selection when the viewer first loads:

**Remove the text selection module**

Remove the [`TextSelection`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textselection) module in the provide array to disable text selection during initialization.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 100%">
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
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
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
      resourceUrl: 'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [
      Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
      ThumbnailView, Print, TextSearch, FormFields, FormDesigner, PageOrganizer
    ]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

**Set `enableTextSelection` to false**

Use the [`enableTextSelection`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#enabletextselection) property during initialization to disable or enable text selection. The following example disables text selection during initialization:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :enableTextSelection="false"
      style="height: 100%">
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
  LinkAnnotation,
  BookmarkView,
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
      resourceUrl: 'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [
      Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
    ]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

### 2. Toggle text selection at runtime

The [`enableTextSelection`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#enabletextselection) property can also be used to toggle text selection at runtime.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
  <div id="app">
    <button @click="enableTextSelection" style="margin-right: 10px;">Enable Text Selection</button>
    <button @click="disableTextSelection" style="margin-bottom: 20px;">Disable Text Selection</button>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 100%">
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
  LinkAnnotation,
  BookmarkView,
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
      resourceUrl: 'https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [
      Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
    ]
  },
  methods: {
    enableTextSelection() {
      if (this.$refs.pdfviewer) {
        this.$refs.pdfviewer.ej2Instances.enableTextSelection = true;
      }
    },
    disableTextSelection() {
      if (this.$refs.pdfviewer) {
        this.$refs.pdfviewer.ej2Instances.enableTextSelection = false;
      }
    }
  }
};
</script>

{% endhighlight %}
{% endtabs %}

N> When text selection is disabled, the viewer automatically switches to pan mode.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)

## Use cases and considerations

- Document protection: Disable text selection to help prevent copying sensitive content.
- Read-only documents: Provide a cleaner viewing experience by preventing selection.
- Interactive apps: Toggle selection based on user roles or document states.

N> Text selection is enabled by default. Set `enableTextSelection` to `false` to disable it.

## Troubleshooting

If text selection remains active, ensure that the [`TextSelection`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/textselection) is removed in `provide` or [`enableTextSelection`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#enabletextselection) is set to `false`.

## See also

- [Text Selection API reference](../text-selection/reference)
- [Vue PDF Viewer events](../events)