---
layout: post
title: Export annotations in Vue PDF Viewer | Syncfusion
description: Learn how to Export annotations in Syncfusion Vue PDF Viewer using UI options and programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Export annotations in Vue PDF Viewer

PDF Viewer provides support to export annotations. You can export annotations from the PDF Viewer in two ways:

- Using the built-in UI in the Comments panel (JSON or XFDF file)
- Programmatically (JSON file, XFDF file, or as a JSON string for custom handling)

## Export using the UI (Comments panel)

The Comments panel provides export actions in its overflow menu:

- Export annotation to JSON file
- Export annotation to XFDF file

Follow the steps to export annotations:

1. Open the Comments panel in the PDF Viewer.
2. Click the overflow menu (three dots) at the top of the panel.
3. Choose Export annotation to JSON file or Export annotation to XFDF file.

This generates and downloads the selected format containing all annotations in the current document.

![Export Annotation](../../../javascript-es6/annotations/annotation-images/export-annot.png)

## Export programmatically

You can export annotations from code using [exportAnnotation](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#exportannotation), [exportAnnotationsAsObject](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#exportannotationsasobject) and [exportAnnotationsAsBase64String](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#exportannotationsasbase64string) APIs.

Use the following example to initialize the viewer and export annotations as JSON, XFDF, or as an object.

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<template>
  <div id="app">
    <div style="margin-bottom: 8px; display: flex; gap: 8px;">
      <button @click="exportAsJSON">Export JSON</button>
      <button @click="exportAsXFDF">Export XFDF</button>
      <button @click="exportAsObject">Export as Object</button>
      <button @click="exportAsBase64">Export as Base64</button>
    </div>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 650px"
    >
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
  ThumbnailView,
  BookmarkView,
  TextSelection,
  Annotation,
  FormDesigner,
  FormFields,
  PageOrganizer,
  AnnotationDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
      TextSelection, Annotation, FormDesigner, FormFields, PageOrganizer]
  },
  methods: {
    getViewer() {
      return document.getElementById('pdfViewer').ej2_instances[0];
    },
    // Export annotations as JSON file
    exportAsJSON() {
      this.getViewer().exportAnnotation(AnnotationDataFormat.Json);
    },
    // Export annotations as XFDF file
    exportAsXFDF() {
      this.getViewer().exportAnnotation(AnnotationDataFormat.Xfdf);
    },
    // Export annotations as a JSON string (for custom serialization / re-import)
    exportAsObject() {
      this.getViewer().exportAnnotationsAsObject().then((value) => {
        // Persist or transmit the JSON string as needed (DB/API). Keep for future import.
        console.log('Exported annotation JSON:', value);
      });
    },
    // Export annotations as a Base64 string
    exportAsBase64() {
      this.getViewer().exportAnnotationsAsBase64String(AnnotationDataFormat.Json).then((value) => {
        console.log('Exported Base64:', value);
      });
    }
  }
}
</script>

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> The exported annotations can be stored in a database or sent to a server for persistence. Use the appropriate API based on your storage and serialization requirements.

## Common use cases

- Export annotations for archival and long-term storage
- Share reviewer feedback and comments with other users
- Create audit trails and compliance records
- Archive annotation data before document disposal

## See also

- [Import Annotation](./import-annotation)
- [Import/Export Events](./export-import-events)
- [Annotation Types](../annotation-types/area-annotation)
