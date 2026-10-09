---
layout: post
title: Squiggly Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, apply, customize, and manage Squiggly annotations in the ASP.NET MVC PDF Viewer to mark text with a wavy underline.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Squiggly Annotation in ASP.NET MVC PDF Viewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Squiggly* text markup annotations in the Syncfusion **ASP.NET MVC PDF Viewer**. You can add squiggly underlines from the toolbar or context menu, programmatically invoke squiggly mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Squiggly in the Viewer
To enable Squiggly annotations, inject the **PdfViewer** with the **Annotation** and **TextSelection** modules.

This minimal setup enables UI interactions like selection and squiggly markup.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% endtabs %}

## Add Squiggly Annotation

### Add Squiggly Using the Toolbar

1. Select the text you want to annotate.
2. Click the **Squiggly** icon in the annotation toolbar.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.
![Squiggly tool](../../images/squiggly_button.png)

### Add Squiggly Using the Context Menu

Right-click a selected text region → select **Squiggly**.
![Squiggly context](../../images/squiggly_context.png)

To customize menu items, refer to [**Customize Context Menu**](../../context-menu/custom-context-menu) documentation.

### Enable Squiggly Mode
Switch the viewer into squiggly mode using **setAnnotationMode('Squiggly')**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="enableSquiggly" onclick="enableSquiggly()">Enable Squiggly Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableSquiggly() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Squiggly');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enableSquiggly" onclick="enableSquiggly()">Enable Squiggly Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableSquiggly() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Squiggly');
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Exit Squiggly Mode
Switch back to normal mode using:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exitSquiggly" onclick="disableSquigglyMode()">Exit Squiggly Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function disableSquigglyMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitSquiggly" onclick="disableSquigglyMode()">Exit Squiggly Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function disableSquigglyMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Squiggly Programmatically
Use **addAnnotation()** to insert a squiggly at a specific location.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addSquiggly" onclick="addSquiggly()">Add Squiggly Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addSquiggly() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Squiggly", {
            bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
            pageNumber: 1
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addSquiggly" onclick="addSquiggly()">Add Squiggly Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addSquiggly() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Squiggly", {
            bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
            pageNumber: 1
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize Squiggly Appearance
Configure default squiggly settings such as **color**, **opacity**, and **author** using **squigglySettings**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").SquigglySettings(new Syncfusion.EJ2.PdfViewer.PdfViewerSquigglySettings { Author = "Guest User", Subject = "Corrections", Color = "#00ff00", Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").SquigglySettings(new Syncfusion.EJ2.PdfViewer.PdfViewerSquigglySettings { Author = "Guest User", Subject = "Corrections", Color = "#00ff00", Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Manage Squiggly (Edit, Delete, Comment)

### Edit Squiggly

#### Edit Squiggly Appearance (UI)

Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../images/edit_color.png)
- **Edit Opacity** slider  
![Edit opacity](../../images/edit_opacity.png)

#### Edit Squiggly Programmatically
Modify an existing squiggly programmatically using **editAnnotation()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editSquiggly" onclick="editSquiggly()">Edit Squiggly Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editSquiggly() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].textMarkupAnnotationType === 'Squiggly') {
                viewer.annotationCollection[i].color = '#ff0000';
                viewer.annotationCollection[i].opacity = 0.8;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="editSquiggly" onclick="editSquiggly()">Edit Squiggly Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editSquiggly() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].textMarkupAnnotationType === 'Squiggly') {
                viewer.annotationCollection[i].color = '#ff0000';
                viewer.annotationCollection[i].opacity = 0.8;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

### Delete Squiggly
The PDF Viewer supports deleting existing annotations through both the UI and API. For detailed behavior, supported deletion workflows, and API reference, see [**Delete Annotation**](../delete-annotation).

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to squiggly annotations. It provides a dedicated UI for reviewing feedback, tracking conversations, and collaborating on annotation-related notes within the PDF Viewer.

## Set properties while adding individual annotations
Set properties for individual squiggly annotations at the time of creation using the **addAnnotation** method.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addSquigglies" onclick="addSquigglies()">Add multiple Squiggly Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addSquigglies() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Squiggly 1
        viewer.annotation.addAnnotation("Squiggly", {
            bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
            pageNumber: 1,
            author: 'User 1',
            color: '#ffff00',
            opacity: 0.9
        });
        // Squiggly 2
        viewer.annotation.addAnnotation("Squiggly", {
            bounds: [{ x: 110, y: 220, width: 300, height: 14 }],
            pageNumber: 1,
            author: 'User 2',
            color: '#ff1010',
            opacity: 0.9
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addSquigglies" onclick="addSquigglies()">Add multiple Squiggly Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addSquigglies() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Squiggly 1
        viewer.annotation.addAnnotation("Squiggly", {
            bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
            pageNumber: 1,
            author: 'User 1',
            color: '#ffff00',
            opacity: 0.9
        });
        // Squiggly 2
        viewer.annotation.addAnnotation("Squiggly", {
            bounds: [{ x: 110, y: 220, width: 300, height: 14 }],
            pageNumber: 1,
            author: 'User 2',
            color: '#ff1010',
            opacity: 0.9
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Disable Squiggly Annotation
Disable text markup annotations (including squiggly) using the **enableTextMarkupAnnotation** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableTextMarkupAnnotation(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).EnableTextMarkupAnnotation(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% endtabs %}

## Handle Squiggly Events
The PDF viewer provides annotation life-cycle events that notify when squiggly annotations are added, modified, selected, or removed. For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event).

## Export and Import
The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import/export-annotation).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
