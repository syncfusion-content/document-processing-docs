---
layout: post
title: Comments in ASP.NET Core PDF Viewer | Syncfusion
description: Add, reply, and manage comments in ASP.NET Core PDF Viewer with support for comment threads, replies, status tracking and programmatic controls.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Comments in ASP.NET Core PDF Viewer

The PDF Viewer control provides comprehensive comment management capabilities for annotation discussions and collaboration. Add, reply, edit, and delete comments across multiple annotation types.

## Supported annotation types

Comments can be added to the following annotation types in PDF documents:

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

## Comment panel

The comment panel provides a centralized interface for managing all annotation comments and discussions. The comment panel can be opened in multiple ways:

### Opening the comment panel

**Method 1: Using the annotation toolbar**
1. Click the **Edit Annotation** button in the PDF Viewer toolbar
2. A secondary toolbar appears below the main toolbar
3. Click the **Comment Panel** button
4. The comment panel opens on the right side of the screen

**Method 2: Using context menu**
1. Select an annotation in the PDF document
2. Right-click to open the context menu
3. Select **Comment** from the menu
4. The comment panel opens and shows that annotation's thread

**Method 3: Using double-click**
1. Select an annotation in the PDF document
2. Double-click the annotation
3. The comment panel opens automatically

![Comment panel overview](../images/commentannot.png)

### Working with the comment panel

Once the comment panel is open:
- The corresponding comment thread for the selected annotation is automatically highlighted
- Add new comments using the text input field
- View all replies to parent comments
- Edit or delete existing comments
- Change comment status from the options menu

### Adding comments

**Step-by-step guide:**

1. **Select the annotation** - Click on any annotation in the PDF document
2. **View comment thread** - The corresponding comment thread is automatically highlighted in the comment panel
3. **Enter comment text** - Type your comment in the text input field at the bottom of the thread
4. **Submit comment** - Press Enter or click the Post button to post the comment

![Adding comments to a sticky note annotation](../images/stickycomment.png)

### Adding comment replies

Comments support threaded discussions through replies.

- Multiple replies can be added to a single comment
- Replies maintain the conversation context within the thread
- All replies are nested under the parent comment
- Edit and delete options available for each reply

**Creating a reply:**
1. Click an existing comment in the thread
2. Click the **Add a reply** button
3. Type your reply text in the reply input field
4. Press Enter or click submit to post the reply

### Adding comment or reply status

Comments and replies can have status indicators for workflow tracking.

**Setting status:**

1. Select the annotation comment in the comment panel
2. Click the **More options** menu (three dots) on the comment or reply container
3. Select **Set Status** from the context menu
4. Choose a status from the dropdown:
   - **None** - Default state
   - **Accepted** - Comment approved
   - **Rejected** - Comment rejected
   - **Cancelled** - Comment cancelled

![Set status for a comment](../images/commentstatus.png)

### Editing the comments and comments replies of the annotations

Comments, replies, and status can be edited at any time using the comment panel interface.

### Editing comments or replies

Edit comments and replies using one of these methods:

**Method 1: Using the context menu**
1. Select the annotation comment in the comment panel
2. Click the **More options** menu on the comment or reply container
3. Select **Edit** from the context menu
4. An editable text box appears
5. Change the comment or reply content
6. Press Enter or click Post to confirm changes

**Method 2: Using mouse click**
1. Select the annotation comment in the comment panel
2. Double-click directly on the comment or reply text
3. The text becomes editable inline
4. Modify the content as needed
5. Press Enter to save or Escape to cancel

### Editing comment or reply status

Status can be changed at any time:

1. Select the annotation comment in the comment panel
2. Click the **More options** menu on the comment or reply
3. Select **Set Status** from the context menu
4. Choose a new status from the dropdown

**Status states:**
- **None**
- **Accepted**
- **Rejected**
- **Cancelled**
- **Completed**

![Edit comments and replies](../images/commentsedit.png)

### Delete comments or replies

Remove comments and replies from the discussion thread:

1. Select the annotation comment in the comment panel
2. Click the **More options** menu on the comment or reply
3. Select **Delete** from the context menu
4. The comment or reply is removed from the thread

![Delete comments or replies](../images/commentsdelete.png)

N> Deleting the root comment (the first comment in a thread) from the comment panel also deletes the associated annotation from the PDF document.

## How to check the comments added by the user

Comments can be accessed and processed programmatically through the annotation's `comments` property, enabling integration with external systems and custom workflows.

### Example: Access and log comments from annotations

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