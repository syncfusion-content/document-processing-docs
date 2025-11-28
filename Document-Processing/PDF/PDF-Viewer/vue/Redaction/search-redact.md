---
layout: post
title: Search text and redact in Vue PDF Viewer | Syncfusion
description: Learn how to find text and add redaction annotations programmatically in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Search text and redact in Vue PdfViewer

You can search for a keyword in the loaded PDF and automatically add redaction annotations over each match. The example below wires the extractTextCompleted event, triggers text extraction, performs a search, and places redaction annotations for every result.

N> Prerequisites: Add the PdfViewer control to your Vue application and ensure a document is loaded. Make sure the redaction feature is available in the version you are using. Once applied, redaction permanently removes the selected content.

## Steps to add Redaction annotations on search Text Bounds

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/Vue/getting-started) to create a simple PDF Viewer sample.


**Step 2:** Use the following code-snippets to Add Redaction annotation on Search Text Bounds.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div class="content-wrapper">
    <div style="margin-bottom: 8px; display: flex; gap: 8px; align-items: center;">
      <button id="searchTextRedact" type="button" @click="searchTextAndRedact">
        Search "syncfusion" & Mark for Redaction
      </button>
      <button id="applyRedaction" type="button" @click="applyRedaction">
        Apply Redaction
      </button>
    </div>

    <ejs-pdfviewer
      ref="pdfviewer"
      id="container"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :toolbarSettings="toolbarSettings"
      :isExtractText="true"
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
      documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
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
    px(pt) {
      return (pt * 96) / 72; // points -> pixels
    },
    async searchTextAndRedact() {
      const inst = this.$refs.pdfviewer?.ej2Instances;
      if (!inst) return;
      const term = 'syncfusion';
      const results = await inst.textSearchModule.findTextAsync(term, false);
      if (!results || results.length === 0) {
        console.warn('No matches found.');
        return;
      }
      for (const pageResult of results) {
        if (!pageResult?.bounds?.length) continue;
        const pageNumber = (pageResult.pageIndex ?? -1) + 1; // 1-based
        if (pageNumber < 1) continue;
        for (const bound of pageResult.bounds) {
          inst.annotation.addAnnotation('Redaction', {
            bound: {
              x: this.px(bound.x),
              y: this.px(bound.y),
              width: this.px(bound.width),
              height: this.px(bound.height)
            },
            pageNumber,
            overlayText: 'Confidential',
            fillColor: '#00FF40FF',
            fontColor: '#333333',
            fontSize: 12,
            fontFamily: 'Arial',
            markerFillColor: '#FF0000',
            markerBorderColor: '#000000'
          });
        }
      }
    },
    applyRedaction() {
      const inst = this.$refs.pdfviewer?.ej2Instances;
      if (!inst) return;
      inst.annotation.redact();
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## Notes
- Ensure the PDF is fully loaded before triggering extraction and search.
- Bounds from search are in points (72 DPI). Convert to pixels (96 DPI) to align with annotation coordinates.
- Customize overlay text, colors, and typography as needed.
- Adding a redaction annotation covers the content visually. To permanently remove sensitive data, use the viewer's Apply Redaction action or equivalent API if available in your version.

## See also

* [Overview of Redaction](./overview)
* [Programmatic Support in Redaction](./programmatic-support)
* [UI interactions](./ui-interaction)
* [Redaction in Mobile View](./mobile-view)
* [Redaction Toolbar](./toolbar)