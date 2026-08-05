---
layout: post
title: Flatten Annotations in the Syncfusion Vue PDF Viewer
description: Learn how all about how to flatten annotations and formfields before saving a PDF in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten Annotations in Vue PDF Viewer

Flattening takes the visual appearance of annotations and embeds them into each page's content stream. The visual result remains visible, but the annotation objects and interactive form field structures are removed or converted so they can no longer be selected, edited, or filled.

Flattening annotations permanently merges them into the PDF content. Once flattened:
- Annotations are **no longer editable** in any PDF viewer.
- Useful for **secure sharing**, preventing modifications.
- Ideal when **finalizing markup** before distribution.

## How to Flatten Annotations

You can flatten annotations either when a document is loaded (preprocessing) or when exporting/saving the file. Flattening on load makes the viewer display a flattened version immediately; flattening on export preserves the original viewer session while producing a flattened output file.

Typical export-time steps:
- Save the viewer contents to a Blob.
- Create a `PdfDocument` from the saved bytes.
- Enable `document.flatten = true` to merge annotations and form field appearances.
- Save the resulting PDF.

Use the example below to flatten at export time (on download).

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
<div id="app">
  <div style="margin-bottom: 8px">
    <button @click="flattenPdf">
      Flatten and Download PDF
    </button>
  </div>

  <ejs-pdfviewer
    id="pdfViewer"
    ref="pdfviewer"
    :documentPath="documentPath"
    :resourceUrl="resourceUrl"
    style="height: 640px"
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
BookmarkView,
ThumbnailView,
Print,
TextSelection,
TextSearch,
Annotation,
FormFields,
FormDesigner,
PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

import { PdfDocument } from '@syncfusion/ej2-pdf';

export default {
name: 'App',

components: {
  'ejs-pdfviewer': PdfViewerComponent
},

data() {
  return {
    documentPath:
      'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:
      'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib'
  };
},

provide: {
  PdfViewer: [
    Toolbar,
    Magnification,
    Navigation,
    LinkAnnotation,
    BookmarkView,
    ThumbnailView,
    Print,
    TextSelection,
    TextSearch,
    Annotation,
    FormFields,
    FormDesigner,
    PageOrganizer
  ]
},

methods: {
  flattenPdf() {
    const viewer = this.$refs.pdfviewer.ej2Instances;

    viewer.saveAsBlob().then((blob) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        const byteArray = new Uint8Array(arrayBuffer);

        // Load PDF
        const pdfDocument = new PdfDocument(byteArray);

        // Flatten annotations and form fields
        pdfDocument.flatten = true;

        // Download flattened PDF
        pdfDocument.save('flattened.pdf');

        // Cleanup
        pdfDocument.destroy();
      };

      reader.readAsArrayBuffer(blob);
    });
  }
}
};
</script>

{% endhighlight %}
{% endtabs %}

N> To flatten documents when they are uploaded/loaded into the viewer, see [Flatten on Load](../document-handling/preprocess-pdf#flatten-on-load).

## Notes

- Flattening applies to **all annotation types**: text markup, shapes, stamps, notes, ink, and form fields.
- Once flattened, annotations **cannot be edited or removed**.
- Use flattening **only at export time**, not during regular document interactions.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types)
- [Annotation Toolbar](../toolbar-customization)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Handwritten Signature](../signature-annotation)
- [Export and Import Annotation](../export-import)
- [Annotation Permission](./annotation-permission)
- [Annotation in Mobile View](./annotations-in-mobile-view)
- [Annotation Events](./annotation-event)
- [Annotations API](./annotations-api)
