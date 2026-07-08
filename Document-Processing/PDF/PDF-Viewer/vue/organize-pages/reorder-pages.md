---
layout: post
title: Reorder pages in Organize Pages in Vue PDF Viewer | Syncfusion
description: How to rearrange pages using drag-and-drop and grouping in the Organize Pages UI of the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Reorder pages using the Organize Pages view in Vue

## Overview

This guide describes how to rearrange pages in a PDF using the **Organize Pages** UI.

**Outcome**: Single or multiple pages can be reordered and the new sequence is preserved when the document is saved or exported.

## Prerequisites

- EJ2 Vue PDF Viewer installed
- `Toolbar` and `PageOrganizer` services injected into the viewer

## Steps

1. Open the Organize Pages view

	- Click the **Organize Pages** button in the navigation toolbar to open the page thumbnails panel.

2. Reorder a single page

	- Drag a thumbnail to the desired position. The thumbnails update instantly to show the new order.

3. Reorder multiple pages

	- Select multiple thumbnails using Ctrl or Shift, then drag the selected group to the new location.

    ![Rearrange pages animation showing drag-and-drop behavior](../../react/images/rotate-rearrange.gif)

4. Verify and undo

	- Use **Undo** / **Redo** options to revert accidental changes.

    ![Undo and redo Organize Pages toolbar](../../react/images/undo-redo.png)

5. Persist the updated order

	- Click **Save** or download the document using **Save As** to persist the new page sequence.

## Expected result

- Thumbnails reflect the new page order immediately and saved / downloaded PDFs preserve the reordered sequence.

## Enable or disable reorder option

To enable or disable the **Reorder pages** option in the Organize Pages, update the [`pageOrganizerSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/pageorganizersettings). See [Organize pages toolbar customization](./toolbar#show-or-hide-the-rearrange-option) for the guidelines

## Code snippet

To enable the reorder pages feature, use the following code snippet:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :documentPath="documentPath" :resourceUrl="resourceUrl" :pageOrganizerSettings="{ canRearrange: true }">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    };
  },

  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
  }
}
</script>
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- **Thumbnails won't move**: Confirm [`pageOrganizerSettings.canRearrange`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/pageorganizersettingsmodel#canrearrange) is not set to `false`.
- **Changes not saved**: Verify [`serviceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#serviceurl) (server) or [`resourceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#resourceurl) (standalone) is configured correctly.

## Related topics

- [Organize pages toolbar customization](./toolbar)
- [Organize pages event reference](./events)
