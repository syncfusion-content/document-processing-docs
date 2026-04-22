---
layout: post
title: Sticky notes in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn about sticky note annotations in the Syncfusion ASP.NET Core PDF Viewer (Essential JS 2): add, edit, delete, and default settings.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Sticky notes annotation in ASP.NET Core PDF Viewer

The PDF Viewer provides options to add, edit, and delete sticky note annotations.

![StickyNotesAnnotation](../images/stickynotes_annotation.png)

## Add a sticky note annotation

Annotation comments are added using the comment panel.

* Right-click a sticky note annotation and choose **Comment** from the context menu.
* Use the comment panel to add comments, reply, and change status.

![StickyNotesTool](../images/stickynotes_tool.png)

![StickyNotesComment](../images/stickynotes_comment.png)

## Add a sticky note annotation to the PDF document programmatically

Use the `addAnnotation()` method to add a sticky note annotation programmatically.

The following example demonstrates using `addAnnotation()` to create a sticky note annotation.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:640px">
  <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"></ejs-pdfviewer>
</div>
<div style="margin-top:8px">
  <button onclick="addAnnotation()">Add Annotation</button>
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
<div style="width:100%;height:640px">
  <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"></ejs-pdfviewer>
</div>
<div style="margin-top:8px">
  <button onclick="addAnnotation()">Add Annotation</button>
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

Use the `editAnnotation()` method to modify existing sticky note annotations programmatically.

The following example demonstrates `editAnnotation()`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:640px">
  <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"></ejs-pdfviewer>
</div>
<div style="margin-top:8px">
  <button onclick="editAnnotation()">Edit Annotation</button>
</div>
<script>
  function editAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    for (var i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].shapeAnnotationType === "sticky") {
        var width = viewer.annotationCollection[i].bounds.width;
        var height = viewer.annotationCollection[i].bounds.height;
        viewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
</script>
{% endhighlight %}

{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:640px">
  <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"></ejs-pdfviewer>
</div>
<div style="margin-top:8px">
  <button onclick="editAnnotation()">Edit Annotation</button>
</div>
<script>
  function editAnnotation() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    for (var i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].shapeAnnotationType === "sticky") {
        var width = viewer.annotationCollection[i].bounds.width;
        var height = viewer.annotationCollection[i].bounds.height;
        viewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
</script>
{% endhighlight %}
{% endtabs %}

## Edit the properties of sticky note annotations

### Editing opacity

Edit opacity using the range slider in the Edit Opacity tool.

![StickyNotesOpacity](../images/sticky_opacity.png)

### Editing comments

Comment text, replies, and status can be edited using the comment panel.

* Open the comment panel using the Comment Panel button in the annotation toolbar.

  ![StickyNotesComment](../images/commentPanel.png)

Modify or delete comments or replies, and change status using the menu options in the comment panel.

  ![StickyNotesEdit](../images/sticky_editbtn.png)

## Set default properties during control initialization

Set default properties for sticky note annotations before creating the control by specifying `stickyNotesSettings`.

After changing the default opacity using the Edit Opacity tool, the selected value is applied. The example below shows how to set default sticky note annotation settings.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:640px">
  <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"></ejs-pdfviewer>
</div>
<script>
  window.onload = function() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    if (viewer) {
      viewer.stickyNotesSettings = { author: 'Syncfusion' };
    }
  };
</script>
{% endhighlight %}

{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:640px">
  <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"></ejs-pdfviewer>
</div>
<script>
  window.onload = function() {
    var viewer = document.getElementById('pdfviewer').ej2_instances[0];
    if (viewer) {
      viewer.stickyNotesSettings = { author: 'Syncfusion' };
    }
  };
</script>
{% endhighlight %}
{% endtabs %}

## Disable sticky note annotations

The PDF Viewer control provides an option to disable sticky note annotations. The following example disables the feature.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:640px">
  <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"enableStickyNotesAnnotation="false"></ejs-pdfviewer>
</div>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div style="width:100%;height:640px">
  <ejs-pdfviewer id="pdfviewer" style="height:640px" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer" enableStickyNotesAnnotation="false"></ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}