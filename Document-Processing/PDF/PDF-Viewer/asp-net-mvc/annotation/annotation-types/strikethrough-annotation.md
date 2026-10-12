---
layout: post
title: Strikethrough Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, apply, customize, and manage Strikethrough annotations in the ASP.NET MVC PDF Viewer to mark text with a horizontal line through it.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Strikethrough Annotation in ASP.NET MVC PDF Viewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Strikethrough* text markup annotations in the Syncfusion **ASP.NET MVC PDF Viewer**. You can apply strikethrough using the toolbar or context menu, programmatically invoke strikethrough mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Strikethrough in the Viewer
To enable Strikethrough annotations, inject the **PdfViewer** with the **Annotation** and **TextSelection** modules.

This minimal setup enables UI interactions like selection and strikethrough.

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

## Add Strikethrough Annotation

### Add Strikethrough Using the Toolbar
1. Select the text you want to strike through.
2. Click the **Strikethrough** icon in the annotation toolbar.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.

![Strikethrough tool](../../images/strikethrough_button.png)

### Add Strikethrough Using the Context Menu
Right-click a selected text region → select **Strikethrough**.

![Strikethrough Context](../../images/strikethrough_context.png)

To customize menu items, refer to [**Customize Context Menu**](../../context-menu/custom-context-menu) documentation.

### Enable Strikethrough Mode
Switch the viewer into strikethrough mode using **setAnnotationMode('Strikethrough')**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="enableStrikethrough" onclick="enableStrikethrough()">Enable Strikethrough Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableStrikethrough() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Strikethrough');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enableStrikethrough" onclick="enableStrikethrough()">Enable Strikethrough Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableStrikethrough() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Strikethrough');
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Exit Strikethrough Mode
Switch back to normal mode using:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exitStrikethrough" onclick="disableStrikethroughMode()">Exit Strikethrough Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function disableStrikethroughMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitStrikethrough" onclick="disableStrikethroughMode()">Exit Strikethrough Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function disableStrikethroughMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Strikethrough Programmatically
Use **addAnnotation()** to insert a strikethrough at a specific location.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addStrikethrough" onclick="addStrikethrough()">Add Strikethrough Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addStrikethrough() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Strikethrough", {
            bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
            pageNumber: 1
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addStrikethrough" onclick="addStrikethrough()">Add Strikethrough Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addStrikethrough() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Strikethrough", {
            bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
            pageNumber: 1
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize Strikethrough Appearance
Configure default strikethrough settings such as **color**, **opacity**, and **author** using **strikethroughSettings**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").StrikethroughSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStrikethroughSettings { Author = "Guest User", Subject = "Not Important", Color = "#ff00ff", Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").StrikethroughSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerStrikethroughSettings { Author = "Guest User", Subject = "Not Important", Color = "#ff00ff", Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Manage Strikethrough (Edit, Delete, Comment)

### Edit Strikethrough

#### Edit Strikethrough Appearance (UI)
Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../images/edit_color.png)
- **Edit Opacity** slider  
![Edit opacity](../../images/edit_opacity.png)

#### Edit Strikethrough Programmatically
Modify an existing strikethrough programmatically using **editAnnotation()** and **annotationCollection**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editStrikethrough" onclick="editStrikethrough()">Edit Strikethrough Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editStrikethrough() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].textMarkupAnnotationType === 'Strikethrough') {
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

<button id="editStrikethrough" onclick="editStrikethrough()">Edit Strikethrough Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editStrikethrough() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].textMarkupAnnotationType === 'Strikethrough') {
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

### Delete Strikethrough
The PDF Viewer supports deleting existing annotations through both the UI and API. For detailed behavior, supported deletion workflows, and API reference, see [**Delete Annotation**](../delete-annotation).

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to strikethrough annotations. It provides a dedicated UI for reviewing feedback, tracking conversations, and collaborating on annotation-related notes within the PDF Viewer.

## Set Properties While Adding Individual Annotation
Set properties for individual annotations when adding them programmatically by supplying fields on each **addAnnotation('Strikethrough', ...)** call.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addStrikethroughs" onclick="addStrikethroughs()">Add multiple Strikethrough Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addStrikethroughs() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Strikethrough 1
        viewer.annotation.addAnnotation("Strikethrough", {
            bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
            pageNumber: 1,
            author: 'User 1',
            color: '#ffff00',
            opacity: 0.9
        });
        // Strikethrough 2
        viewer.annotation.addAnnotation("Strikethrough", {
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

<button id="addStrikethroughs" onclick="addStrikethroughs()">Add multiple Strikethrough Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addStrikethroughs() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // Strikethrough 1
        viewer.annotation.addAnnotation("Strikethrough", {
            bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
            pageNumber: 1,
            author: 'User 1',
            color: '#ffff00',
            opacity: 0.9
        });
        // Strikethrough 2
        viewer.annotation.addAnnotation("Strikethrough", {
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

## Disable Strikethrough Annotation
Disable text markup annotations (including strikethrough) using the **enableTextMarkupAnnotation** property.

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

## Handle Strikethrough Events

The PDF viewer provides annotation life-cycle events that notify when strikethrough annotations are added, modified, selected, or removed. For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event).

## Export and Import

The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import/export-annotation).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
