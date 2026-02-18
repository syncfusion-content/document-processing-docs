---
layout: post
title: Comments in React Pdfviewer component | Syncfusion
description: Learn about comments, replies, and status in the Syncfusion React PDF Viewer control (Essential JS 2).
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Comments in React PDF Viewer

The PDF Viewer component lets you add, edit, reply to, and delete comments for many annotation types, including:

* Shape annotation
* Stamp annotation
* Sticky note annotation
* Measurement annotation
* Text markup annotation
* Free text annotation
* Ink annotation

![Comments panel overview](../images/commentannot.png)

## Adding a comment to an annotation

Use the comment panel to manage annotation comments, replies, and status.

### Opening the comment panel

Open the comment panel in one of these ways:

1. Using the annotation menu

    * Click the Edit Annotation button in the PDF Viewer toolbar. A secondary toolbar appears below it.
    * Click the Comment Panel button to open the panel.

2. Using the context menu

    * Select an annotation and right-click it.
    * Choose Comment from the context menu.

3. Using double-click

    * Select the annotation and double-click it to open the comment panel.

If the comment panel is already open, select the annotation to view or add comments.

### Adding comments and replies

- Select the annotation in the PDF document.
- The corresponding comment thread is highlighted in the comment panel.
- Add comments and replies using the panel.

![Add comment to sticky note](../images/stickycomment.png)

### Setting a comment or reply status

- Select the comment in the comment panel.
- Click More options on the comment or reply container.
- Choose Set Status and pick a status.

![Set status for a comment](../images/commentstatus.png)

### Editing comments and replies

Edit comments in two ways:

1. Context menu

    * Select the comment in the comment panel and click More options.
    * Choose Edit to open an editable text box.

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

### Deleting comments or replies

* Select the comment in the comment panel.
* Click More options and choose Delete.

Deleting a root comment also removes the associated annotation.

![Delete comments or replies](../images/commentsdelete.png)

N> Deleting the root comment from the comment panel also deletes the associated annotation.

```html
<button id="checkComments">Check the Comments</button>
```
## How to check the comments added by the user

Comments added to the PDF document can be read using the annotation's `comments` property.

The following example logs comments when a button is clicked:

```html
<button id="checkComments">Check the Comments</button>
```

{% tabs %}
{% highlight html tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');


{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

```typescript
// Method to check the comments added in the PDF document.
document.getElementById('checkComments').addEventListener('click', function () {
    var annotationCollections = pdfviewer.annotationCollection;
    for (var x = 0; x < annotationCollections.length; x++) {
      // Prints the annotation id in the console window.
      console.log("annotation Id : " +annotationCollections[x].annotationId);
      var comments = annotationCollections[x].comments;
      for (var y = 0; y < comments.length; y++) {
        var comment = comments[y];
        // Prints the PDF document's comments in the console window.
        console.log("comment" + "[" + y + "] :" + comment.note);
      }
      var note = annotationCollections[x].note;
      console.log("note : " + note);
    }
});

```