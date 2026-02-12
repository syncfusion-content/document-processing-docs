---
layout: post
title: Extract Pages in Vue PDF Viewer | Syncfusion
description: Learn here all about Extract Pages in Organize Pages in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Extract pages in Vue PDF Viewer

The PDF Viewer component enables users to extract pages from a document using the Extract Pages option in the Organize Pages UI and to control extraction programmatically. The Extract Pages tool is available by default in Organize Pages.

## Extract Pages in Organize Pages

- Open the Organize Pages panel in the PDF Viewer toolbar.
- Locate and click the Extract Pages option.

![Extract Pages](../images/extract-page.png)

When selected, a secondary toolbar dedicated to extraction is displayed.

![Extract Pages secondary toolbar](../images/extract-page-secondary-toolbar.png)

## Extract pages using the UI

You can extract by typing page numbers/ranges or by selecting thumbnails.

1. Click Extract Pages in the Organize Pages panel.
2. In the input box, enter the pages to extract. Supported formats include:
   - Single pages: 1,3,5
   - Ranges: 2-6
   - Combinations: 1,4,7-9
3. Alternatively, select the page thumbnails you want instead of typing values.
4. Click Extract to download the extracted pages as a new PDF. Click Cancel to close the tool.

![Extract Pages with selected thumbnails](../images/extract-page-selected-thumbnail.png)

Note: Page numbers are 1-based (first page is 1). Invalid or out-of-range entries are ignored.

## Extraction options (checkboxes)

Two options appear in the secondary toolbar:

- **Delete Pages After Extracting:**
  - When enabled, the selected/entered pages are removed from the document opened in the viewer after the extraction completes. The extracted pages are still downloaded as a new file.
  - Example: If you enter 1,2 and extract, a PDF containing pages 1 and 2 is downloaded, and pages 1 and 2 are removed from the currently loaded document in the viewer.

- **Extract Pages As Separate Files:**
  - When enabled, every selected page is exported as an individual PDF file.
  - Example: If you select pages 3, 5, and 6, three separate PDFs are downloaded (3.pdf, 5.pdf, and 6.pdf). If you enter a range (e.g., 2-4), pages 2, 3, and 4 are each downloaded as separate PDFs.

![Checkboxes for extract options](../images/extract-page-checkboxes.png)

## Programmatic options and APIs

You can control the Extract Pages experience via settings and invoke extraction through code.

### Enable/disable Extract Pages

Use the `canExtractPages` API to enable or disable the Extract Pages option. When set to `false`, the Extract Pages tool is disabled in the toolbar. The default value is `true`.

Use the following code snippet to enable or disable the Extract Pages option:

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
  <button v-on:click="extractPage">Extract Page</button>
      <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :resourceUrl="resourceUrl"
          :documentPath="documentPath">
      </ejs-pdfviewer>
  </div>
</template>
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'app',
  components: {
      "ejs-pdfviewer": PdfViewerComponent
    },
  data () {
    return {
      resourceUrl:"https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      pageOrganizerSettings: {canExtractPages: true}
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},

}
</script>
{% endhighlight %}
{% endtabs %}

Use the `showExtractPagesOption` API to show or hide the Extract Pages option. When set to `false`, the Extract Pages tool is removed from the toolbar. The default value is `true`.

Use the following code snippet to remove the Extract Pages option:

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
  <button v-on:click="extractPage">Extract Page</button>
      <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :resourceUrl="resourceUrl"
          :documentPath="documentPath">
      </ejs-pdfviewer>
  </div>
</template>
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'app',
  components: {
      "ejs-pdfviewer": PdfViewerComponent
    },
  data () {
    return {
      resourceUrl:"https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      pageOrganizerSettings: {showExtractPagesOption: false}
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},

}
</script>
{% endhighlight %}
{% endtabs %}

### Extract pages and load the result programmatically

You can extract pages programmatically using the `extractPages` method.
The following example extracts pages 1 and 2, then immediately loads the extracted pages back into the viewer. The returned value is a byte array (e.g., Uint8Array) representing the PDF file contents.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
  <button v-on:click="extractPage">Extract Page</button>
      <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :resourceUrl="resourceUrl"
          :documentPath="documentPath"
          :pageOrganizerSettings="pageOrganizerSettings">
      </ejs-pdfviewer>
  </div>
</template>
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
export default {
  name: 'app',
  components: {
      "ejs-pdfviewer": PdfViewerComponent
    },
  data () {
    return {
      resourceUrl:"https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      pageOrganizerSettings: {canExtractPages: true}
    };
  },
  methods: {
    extractPage: function() {
     const viewer = this.$refs.pdfviewer.ej2Instances;
     //Extract Pages 1 and 2
      const array = viewer.extractPages('1,2');
      //Load extracted Pages
      viewer.load(array,'');
      //Print Base64 to ensure pages are extracted
      console.log(array);
    }
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},

}
</script>
{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)

## See also

- [Overview](../overview)
- [UI interactions](../ui-interactions)
- [Programmatic support](../programmatic-support)
- [Toolbar](../toolbar)
- [Events](../events)
- [Mobile view](../mobile-view)
