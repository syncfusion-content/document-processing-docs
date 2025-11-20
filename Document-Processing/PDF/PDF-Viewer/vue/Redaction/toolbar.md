---
layout: post
title: Customize the redaction toolbar in Vue PDF Viewer | Syncfusion
description: Learn how to customize the redaction toolbar in the Syncfusion Vue PDF Viewer by showing or hiding default items.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Redaction toolbar customization in Vue

The redaction toolbar in the Syncfusion Vue PDF Viewer can be customized by rearranging existing items, hiding default items, or adding new ones. You can also place custom items at specific index positions among the existing toolbar items.

## Enable the redaction toolbar

To enable the redaction toolbar, configure the `toolbarSettings.toolbarItems` property of the PdfViewer instance to include the **RedactionEditTool**.

The following example shows how to enable the redaction toolbar:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div>
    <div class="control-section">
      <ejs-pdfviewer
        id="container"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
        :toolbarSettings="toolbarSettings"
        style="height: 680px"
      />
    </div>
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
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          'UndoRedoTool',
          'PageNavigationTool',
          'MagnificationTool',
          'PanTool',
          'SelectionTool',
          'CommentTool',
          'SubmitForm',
          'AnnotationEditTool',
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
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
    ]
  }
};
</script>
{% endhighlight %}
{% endtabs %}

Refer to the following image for the toolbar view:

![Enable redaction toolbar](../redaction/redaction-annotations-images/redaction-icon-toolbar.png)

## Show or hide the redaction toolbar

You can toggle the redaction toolbar either using the built‑in toolbar icon or programmatically with the `showRedactionToolbar` method.

### Display the redaction toolbar using the toolbar icon

When **RedactionEditTool** is included in the toolbar settings, clicking the redaction icon in the primary toolbar will show or hide the redaction toolbar.

![Show redaction toolbar from the primary toolbar](../redaction/redaction-annotations-images/redaction-icon-toolbar.png)

### Display the redaction toolbar programmatically

You can also control visibility through code by calling `viewer.toolbar.showRedactionToolbar(true/false)`.

The following example demonstrates toggling the redaction toolbar programmatically:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div class="content-wrapper">
    <div style="margin-bottom: 8px; display: flex; gap: 8px;">
      <button type="button" @click="showRedactionToolbar">Show Redaction Toolbar</button>
      <button type="button" @click="hideRedactionToolbar">Hide Redaction Toolbar</button>
    </div>
    <ejs-pdfviewer
      ref="pdfviewer"
      id="container"
      :resourceUrl="resourceUrl"
      :documentPath="documentPath"
      :toolbarSettings="toolbarSettings"
      style="height: 640px; display: block;"
    />
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
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      toolbarSettings: {
        toolbarItems: [
          'OpenOption',
          'UndoRedoTool',
          'PageNavigationTool',
          'MagnificationTool',
          'PanTool',
          'SelectionTool',
          'CommentTool',
          'SubmitForm',
          'AnnotationEditTool',
          'RedactionEditTool',
          'FormDesignerEditTool',
          'SearchOption',
          'PrintOption',
          'DownloadOption'
        ]
      }
    };
  },
  provide: {
    PdfViewer: [
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
    ]
  },
  methods: {
    showRedactionToolbar() {
      const inst = this.$refs.pdfviewer?.ej2Instances;
      if (!inst) return;
      inst.toolbar.showRedactionToolbar(true);
    },
    hideRedactionToolbar() {
      const inst = this.$refs.pdfviewer?.ej2Instances;
      if (!inst) return;
      inst.toolbar.showRedactionToolbar(false);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

Refer to the following image for details:

![Programmatically show the Redaction toolbar](../redaction/redaction-annotations-images/show-redaction-toolbar.png)

## See also

* [Adding the redaction annotation in PDF viewer](../redaction/overview)
* [UI interactions](./ui-interaction)
* [Programmatic support](./programmatic-support)
* [Mobile view](./mobile-view)
* [Search Text and Redact](./search-redact)