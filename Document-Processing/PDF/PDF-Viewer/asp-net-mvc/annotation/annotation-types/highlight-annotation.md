---
layout: post
title: Highlight Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, apply, customize, and manage Highlight annotations in the ASP.NET MVC PDF Viewer to emphasize important text in a PDF.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Highlight Annotation in ASP.NET MVC PDF Viewer

This guide explains how to **enable**, **apply**, **customize**, and **manage** *Highlight* text markup annotations in the Syncfusion **ASP.NET MVC PDF Viewer**. You can highlight text using the toolbar or context menu, programmatically invoke highlight mode, customize default settings, handle events, and export the PDF with annotations.

## Enable Highlight in the Viewer

To enable Highlight annotations, inject the **PdfViewer** with the **Annotation** and **TextSelection** modules.

This minimal setup enables UI interactions like selection and highlighting.

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

## Add Highlight Annotation

### Add Highlight Using the Toolbar

1. Select the text you want to highlight.
2. Click the **Highlight** icon in the annotation toolbar.
   - If **Pan Mode** is active, the viewer automatically switches to **Text Selection** mode.

![Highlight tool](../../images/highlight_button.PNG)

### Apply Highlight Using the Context Menu

Right-click a selected text region → select **Highlight**.

![Highlight Context](../../images/highlight_context.png)

To customize menu items, refer to [**Customize Context Menu**](../../context-menu/custom-context-menu) documentation.

### Enable Highlight Mode

Switch the viewer into highlight mode using **setAnnotationMode('Highlight')**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="enableHighlight" onclick="enableHighlight()">Enable Highlight Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableHighlight() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Highlight');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enableHighlight" onclick="enableHighlight()">Enable Highlight Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableHighlight() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Highlight');
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Exit Highlight Mode

Switch back to normal mode using:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exitHighlight" onclick="disableHighlightMode()">Exit Highlight Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function disableHighlightMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitHighlight" onclick="disableHighlightMode()">Exit Highlight Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function disableHighlightMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Highlight Programmatically

Use **addAnnotation()** to insert highlight at a specific location.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addHighlight" onclick="addHighlight()">Add Highlight Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addHighlight() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        viewer.annotation.addAnnotation("Highlight", {
            bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
            pageNumber: 1
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addHighlight" onclick="addHighlight()">Add Highlight Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addHighlight() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        viewer.annotation.addAnnotation("Highlight", {
            bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
            pageNumber: 1
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize Highlight Appearance

Configure default highlight settings such as **color**, **opacity**, and **author** using **highlightSettings**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").HighlightSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerHighlightSettings { Author = "Guest User", Subject = "Important", Color = "#ffff00", Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").HighlightSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerHighlightSettings { Author = "Guest User", Subject = "Important", Color = "#ffff00", Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Manage Highlight (Edit, Delete, Comment)

### Edit Highlight

#### Edit Highlight Appearance (UI)

Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../images/edit_color.png)

- **Edit Opacity** slider  
![Edit opacity](../../images/edit_opacity.png)

#### Edit Highlight Programmatically

Modify an existing highlight programmatically using **editAnnotation()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editHighlight" onclick="editHighlight()">Edit Highlight Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editHighlight() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].textMarkupAnnotationType === 'Highlight') {
                viewer.annotationCollection[i].color = '#0000ff';
                viewer.annotationCollection[i].opacity = 0.8;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="editHighlight" onclick="editHighlight()">Edit Highlight Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editHighlight() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].textMarkupAnnotationType === 'Highlight') {
                viewer.annotationCollection[i].color = '#0000ff';
                viewer.annotationCollection[i].opacity = 0.8;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

### Delete Highlight

The PDF Viewer supports deleting existing annotations through both the UI and API. For detailed behavior, supported deletion workflows, and API reference, see [Delete Annotation](../delete-annotation).

### Comments

Use the [Comments panel](../comments) to add, view, and reply to threaded discussions linked to highlight annotations. It provides a dedicated UI for reviewing feedback, tracking conversations, and collaborating on annotation-related notes within the PDF Viewer.

## Set properties while adding individual annotations

Set properties for individual annotation before creating the control using **highlightSettings**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addHighlights" onclick="addHighlights()">Add multiple Highlights programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addHighlights() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Highlight 1
        viewer.annotation.addAnnotation("Highlight", {
            bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
            pageNumber: 1,
            author: 'User 1',
            color: '#ffff00',
            opacity: 0.9
        });

        // Highlight 2
        viewer.annotation.addAnnotation("Highlight", {
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

<button id="addHighlights" onclick="addHighlights()">Add multiple Highlights programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addHighlights() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Highlight 1
        viewer.annotation.addAnnotation("Highlight", {
            bounds: [{ x: 100, y: 150, width: 320, height: 14 }],
            pageNumber: 1,
            author: 'User 1',
            color: '#ffff00',
            opacity: 0.9
        });

        // Highlight 2
        viewer.annotation.addAnnotation("Highlight", {
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

## Disable TextMarkup Annotation

Disable text markup annotations (including highlight) using the **enableTextMarkupAnnotation** property.

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

## Handle Highlight Events

The PDF viewer provides annotation life-cycle events that notify when highlight annotations are added, modified, selected, or removed. For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event).

## Export and Import

The PDF Viewer supports exporting and importing annotations, allowing you to save annotations as a separate file or load existing annotations back into the viewer. For full details on supported formats and steps to export or import annotations, see [Export and Import Annotation](../export-import/export-annotation).

## See Also

- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
