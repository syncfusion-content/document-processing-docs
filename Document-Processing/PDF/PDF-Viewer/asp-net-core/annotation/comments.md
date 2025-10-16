---
layout: post
title: Comments in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn about comments, replies, and status in the Syncfusion ASP.NET Core PDF Viewer control (Essential JS 2).
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Comments in ASP.NET Core PDF Viewer control

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

![Delete comments or replies](../images/commentsdelete.png)

>Deleting the root comment from the comment panel also deletes the associated annotation.

## How to check the comments added by the user

Comments added to the PDF document can be read using the annotation's `comments` property.

The following example logs comments in response to a button click.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<!--Element to check the comments added in the PDF document.-->
<button id="check" onclick="checkComments()">Check the Comments</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" 
                   style="height:600px" 
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" 
                   enableTextSelection="true">
    </ejs-pdfviewer>
</div>

<script>
    function checkComments() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        var annotationCollections = pdfviewer.annotationCollection;
        for (var x = 0; x < annotationCollections.length; x++) {
          //Prints the annotation id in the console window.
          console.log("annotation Id : " +annotationCollections[x].annotationId);
          var comments = annotationCollections[x].comments;
          for (var y = 0; y < comments.length; y++) {
            var comment = comments[y];
            //Prints the PDF document's comments in the console window.
            console.log("comment" + "[" + y + "] :" + comment.note);
          }
          var note = annotationCollections[x].note;
          console.log("note : " + note);
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<!--Element to check the comments added in the PDF document.-->
<button id="check" onclick="checkComments()">Check the Comments</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" 
                   style="height:600px" 
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" 
                   enableTextSelection="true">
    </ejs-pdfviewer>
</div>

<script>
    function checkComments() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        var annotationCollections = pdfviewer.annotationCollection;
        for (var x = 0; x < annotationCollections.length; x++) {
          //Prints the annotation id in the console window.
          console.log("annotation Id : " +annotationCollections[x].annotationId);
          var comments = annotationCollections[x].comments;
          for (var y = 0; y < comments.length; y++) {
            var comment = comments[y];
            //Prints the PDF document's comments in the console window.
            console.log("comment" + "[" + y + "] :" + comment.note);
          }
          var note = annotationCollections[x].note;
          console.log("note : " + note);
        }
    }
</script>

{% endhighlight %}
{% endtabs %}