---
layout: post
title: Comments in Vue PDF Viewer component | Syncfusion
description: Learn about comments, replies, and status in the Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Comments
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Comments in Vue PDF Viewer control

The PDF Viewer control provides options to add, edit, and delete comments for the following annotations in PDF documents:

* Shape annotation
* Stamp annotation
* Sticky note annotation
* Measurement annotation
* Text markup annotation
* Free text annotation
* Ink annotation

![Comment panel overview](../images/commentannot.png)

## Adding a comment to the annotation

Annotation comments, replies, and status can be managed in the PDF document using the comment panel.

### Comment panel

Annotation comments can be added to the PDF using the comment panel. The comment panel can be opened in the following ways:

1. Using the annotation menu

    * Click the Edit Annotation button in the PDF Viewer toolbar. A toolbar appears below it.
    * Click the Comment Panel button. The comment panel opens.

2. Using Context menu

    * Select the annotation in the PDF document and right-click it.
    * Select Comment from the context menu.

3. Using the Mouse click

    * Select the annotation in the PDF document and double-click it. The comment panel opens.

If the comment panel is already open, select the annotation and add comments using the panel.

### Adding comments

* Select the annotation in the PDF document.
* The corresponding comment thread is highlighted in the comment panel.
* Add comments and replies using the comment panel.

![Adding comments to a sticky note annotation](../images/stickycomment.png)

### Adding Comment Replies

* Multiple replies can be added to a comment.
* After adding a comment, add replies as needed.

### Adding Comment or Reply Status

* Select the annotation comment in the comment panel.
* Click More options in the comment or reply container.
* Select Set Status from the context menu.
* Choose a status for the comment.

![Set status for a comment](../images/commentstatus.png)

### Editing the comments and comments replies of the annotations

Comments, replies, and status can be edited using the comment panel.

### Editing the Comment or Comment Replies

Edit comments and replies in the following ways:

1. Using the Context menu

    * Select the annotation comment in the comment panel.
    * Click More options in the comment or reply container.
    * Select Edit from the context menu.
    * An editable text box appears. Change the content of the comment or reply.

2. Using the Mouse Click

    * Select the annotation comment in the comment panel.
    * Double-click the comment or reply content.
    * An editable text box appears. Change the content of the comment or reply.

### Editing Comment or Reply Status

* Select the annotation comment in the comment panel.
* Click More options in the comment or reply container.
* Select Set Status from the context menu.
* Choose a status for the comment.
* None is the default state. Selecting None clears the status indicator; the comment or reply remains visible.

![Edit comments and replies](../images/commentsedit.png)

### Delete Comment or Comment Replies

* Select the annotation comment in the comment panel.
* Click More options in the comment or reply container.
* Select Delete from the context menu.

![CommentDelete](../images/commentsdelete.png)

## How to check the comments added by the user

Comments added to the PDF document can be read using the annotation's `comments` property.

The following example logs comments in response to a button click.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <button id="checkComments">Check the Comments</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer,
  Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, Annotation, ThumbnailView, Print,
  TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);

const documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
const resourceUrl  = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';

provide('PdfViewer', [
  Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  Annotation, ThumbnailView, Print, TextSelection, TextSearch,
  FormFields, FormDesigner, PageOrganizer
]);

const documentLoad = () => {
  const viewer = pdfviewer.value.ej2Instances;
  document.getElementById('checkComments')?.addEventListener('click', () => {
    const annotationCollections = viewer.annotationCollection || [];

    for (let x = 0; x < annotationCollections.length; x++) {
      const ann = annotationCollections[x];
      console.log('annotation Id : ' + ann.annotationId);

      const comments = ann.comments || [];
      for (let y = 0; y < comments.length; y++) {
        const comment = comments[y];
        console.log(`comment[${y}] : ${comment.note}`);
      }
      if (ann.note) {
        console.log('note : ' + ann.note);
      }
    }
  });
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}



{% endhighlight %}
{% endtabs %}

>The annotation will be deleted on deleting the comment using comment panel.
