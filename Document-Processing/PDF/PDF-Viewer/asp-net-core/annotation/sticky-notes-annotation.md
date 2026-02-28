---
layout: post
title: Sticky Notes in ASP.NET Core PDF Viewer | Syncfusion
description: Add and manage sticky note annotations in ASP.NET Core PDF Viewer. Create quick notes, comments, and threaded discussions and default settings.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Sticky Notes in ASP.NET Core PDF Viewer

The PDF Viewer control provides comprehensive sticky note annotation capabilities for adding quick notes and comments to PDF documents. Create, edit, and delete sticky notes with full comment support for discussions and document review workflows.

![Sticky notes overview](../images/stickynotes_annotation.png)

## Add a sticky note annotation to the PDF document

Sticky notes can be added directly using the toolbar or context menu. They serve as markers for attaching comments and discussions to specific page locations.

### Adding sticky notes using toolbar

1. **Click the Comments button** in the PDF Viewer toolbar to enable annotation mode
2. **Click on the page** at the desired location where you want to place the note
3. **Sticky note is created** - A small marker appears at the clicked position

![Sticky notes tool](../images/stickynotes_tool.png)

### Adding comments to sticky notes

Comments provide detailed information and discussions for sticky notes:

1. **Select a sticky note** - Click on any sticky note annotation on the page
2. **Right-click the note** - Context menu appears with available actions
3. **Select Comment** - Opens the comment panel for the selected note
4. **Add comment text** - Type your comment in the text field
5. **Save comment** - Comment is saved to the note on clicking post.

![Sticky notes comment panel](../images/stickynotes_comment.png)

## Add a sticky note annotation to the PDF document programmatically

The **addAnnotation()** method enables programmatic sticky note creation with precise positioning and configuration. This allows dynamic note placement without user interaction.

**Example: Add sticky note annotations programmatically**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("StickyNotes", {
      offset: { x: 100, y: 200 },
      pageNumber: 1,
      isLock: false
    });
  }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="set" onclick="addAnnotation()">Add annotation programmatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
  function addAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    viewer.annotation.addAnnotation("StickyNotes", {
      offset: { x: 100, y: 200 },
      pageNumber: 1,
      isLock: false
    });
  }
</script>

{% endhighlight %}
{% endtabs %}

## Edit an existing sticky note annotation programmatically

To modify an existing sticky note annotation programmatically, use the **editAnnotation()** method.

Here is an example of using editAnnotation():

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="set" onclick="editAnnotation()">Edit annotation programmatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
  function editAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++)
    {
      if (viewer.annotationCollection[i].shapeAnnotationType === "sticky") {
        var width = viewer.annotationCollection[i].bounds.width;
        var height = viewer.annotationCollection[i].bounds.height;
        viewer.annotationCollection[i].bounds = {x : 100, y: 100, width: width, height: height };
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="set" onclick="editAnnotation()">Edit annotation programmatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
  function editAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++)
    {
      if (viewer.annotationCollection[i].shapeAnnotationType === "sticky") {
        var width = viewer.annotationCollection[i].bounds.width;
        var height = viewer.annotationCollection[i].bounds.height;
        viewer.annotationCollection[i].bounds = {x : 100, y: 100, width: width, height: height };
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

## Edit the properties of sticky note annotations

Sticky note annotations support multiple property editing workflows. Properties can be modified through the UI toolbar, comment panel interface, or programmatically.

### Editing opacity

The **opacity property** controls note transparency, allowing visual customization for emphasis or reduced prominence.

![Sticky note opacity editor](../images/sticky_opacity.png)

### Editing comments

Comments provide detailed annotations to sticky notes. Comment text, threaded replies, and status states are fully editable through the comment panel interface.

**Using the comment panel:**
1. **Open comment panel** - Click Comment Panel button in toolbar
2. **Select sticky note** - Choose note to edit comments for
3. **Modify or delete** - Edit existing comment text or remove comments
4. **Add replies** - Create threaded discussion under comments
5. **Change status** - Update comment status

![Sticky notes comment panel](../images/commentPanel.png)

**Comment editing options:**
- **Edit text** - Modify comment content inline
- **Delete comment** - Remove selected comment permanently
- **Add reply** - Create threaded response to existing comment
- **Mark status** - Change comment state (Review/Done/Cancelled)

![Comment editing menu](../images/sticky_editbtn.png)

## Set default properties during control initialization

The **StickyNotesSettings** object enables configuration of default sticky note behavior at PDF Viewer initialization. These properties apply to all subsequently created sticky notes unless explicitly overridden.

The following example sets default sticky note annotation settings during control initialization:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   stickyNotesSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerStickyNotesSettings
            {Author="Syncfusion"})">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   stickyNotesSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerStickyNotesSettings
            {Author="Syncfusion"})">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Disable sticky note annotations

The **enableStickyNotesAnnotation** property controls sticky note feature availability. When disabled, sticky note creation is prevented while existing annotations remain visible.

### Disabling sticky note annotations programmatically

The following example demonstrates disabling sticky note annotations during control initialization:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   enableStickyNotesAnnotation=false
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   enableStickyNotesAnnotation=false
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}
