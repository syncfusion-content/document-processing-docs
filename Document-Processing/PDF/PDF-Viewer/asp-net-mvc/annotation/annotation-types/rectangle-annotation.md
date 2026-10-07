---
layout: post
title: Rectangle Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, apply, customize, and manage Rectangle annotations in the ASP.NET MVC PDF Viewer to outline rectangular regions on a PDF page.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Rectangle Annotation in ASP.NET MVC PDF Viewer

Rectangle annotations let users highlight regions, group content, or draw callout boxes on PDFs for reviews and markups. You can add rectangles from the toolbar, switch to rectangle mode programmatically, customize appearance, edit/delete them in the UI, and export them with the document.

![Rectangle overview](../../images/shape_annot.png)

## Enable Rectangle Annotation in the Viewer

To enable Rectangle annotations, inject the **PdfViewer** with the **Annotation** module.

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

## Add Rectangle Annotation

### Add Rectangle Annotation Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select **Shapes** → **Rectangle**.
3. Click and drag on the PDF page to draw the rectangle.

![Shape toolbar](../../images/shape_toolbar.png)

N> When in Pan mode, selecting a shape tool automatically switches the viewer to selection mode for smooth interaction.

### Enable Rectangle Mode
Switch the viewer into Rectangle mode using **setAnnotationMode('Rectangle')**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="enableRectangle" onclick="enableRectangleMode()">Enable Rectangle Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableRectangleMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Rectangle');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enableRectangle" onclick="enableRectangleMode()">Enable Rectangle Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableRectangleMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Rectangle');
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Exit Rectangle Mode

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exitRectangle" onclick="exitRectangleMode()">Exit Rectangle Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitRectangleMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitRectangle" onclick="exitRectangleMode()">Exit Rectangle Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitRectangleMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Rectangle Programmatically
Use the **addAnnotation** method to draw a rectangle at a specific location.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addRectangle" onclick="addRectangle()">Add Rectangle Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addRectangle() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 480 },
            pageNumber: 1,
            width: 150,
            height: 75
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addRectangle" onclick="addRectangle()">Add Rectangle Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addRectangle() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 480 },
            pageNumber: 1,
            width: 150,
            height: 75
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize Rectangle Appearance
Configure default rectangle appearance (fill color, stroke color, thickness, opacity) using the **rectangleSettings** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").RectangleSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRectangleSettings { FillColor = "#ffff00", StrokeColor = "#ff6a00", Thickness = 2, Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").RectangleSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRectangleSettings { FillColor = "#ffff00", StrokeColor = "#ff6a00", Thickness = 2, Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Manage Rectangle (Edit, Move, Resize, Delete)

### Edit Rectangle

#### Edit Rectangle (UI)
- Select a rectangle to view resize handles.
- Drag any side/corner to resize; drag inside the shape to move it.
- Edit **fill**, **stroke**, **thickness**, and **opacity** using the annotation toolbar.

![Shape tools](../../images/shape_toolbar.png)

Use the annotation toolbar:
- **Edit fill Color** tool  
![Edit fill color](../../images/shape_fillColor.png)

- **Edit stroke Color** tool  
![Edit stroke color](../../images/shape_strokecolor.png)

- **Edit Opacity** slider  
![Edit opacity](../../images/shape_opacity.png)

- **Edit Thickness** slider  
![Edit thickness](../../images/shape_thickness.png)

#### Edit Rectangle Programmatically

Modify an existing Rectangle programmatically using **editAnnotation()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editRectangle" onclick="editRectangle()">Edit Rectangle Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editRectangle() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Rectangle') {
                viewer.annotationCollection[i].strokeColor = '#0000ff';
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = '#ffff00';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="editRectangle" onclick="editRectangle()">Edit Rectangle Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editRectangle() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Rectangle') {
                viewer.annotationCollection[i].strokeColor = '#0000ff';
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = '#ffff00';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

### Delete Rectangle
The PDF Viewer supports deleting existing annotations through the UI and API. See [**Delete Annotation**](../delete-annotation) for full behavior and workflows.

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to rectangle annotations. It provides a dedicated interface for collaboration and review within the PDF Viewer.

## Set properties while adding individual annotations
Set properties for individual rectangle annotations by passing values directly during **addAnnotation**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addRectangles" onclick="addRectangles()">Add multiple Rectangle Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addRectangles() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Rectangle 1
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 480 },
            pageNumber: 1,
            width: 150,
            height: 75,
            opacity: 0.9,
            strokeColor: '#ff6a00',
            fillColor: '#ffff00',
            author: 'User 1'
        });

        // Rectangle 2
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 400, y: 480 },
            pageNumber: 1,
            width: 150,
            height: 75,
            opacity: 0.85,
            strokeColor: '#ff1010',
            fillColor: '#ffe600',
            author: 'User 2'
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addRectangles" onclick="addRectangles()">Add multiple Rectangle Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addRectangles() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Rectangle 1
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 480 },
            pageNumber: 1,
            width: 150,
            height: 75,
            opacity: 0.9,
            strokeColor: '#ff6a00',
            fillColor: '#ffff00',
            author: 'User 1'
        });

        // Rectangle 2
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 400, y: 480 },
            pageNumber: 1,
            width: 150,
            height: 75,
            opacity: 0.85,
            strokeColor: '#ff1010',
            fillColor: '#ffe600',
            author: 'User 2'
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Disable Rectangle Annotation
Disable shape annotations (Line, Arrow, Rectangle, Circle, Polygon) using the **enableShapeAnnotation** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").EnableShapeAnnotation(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).EnableShapeAnnotation(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% endtabs %}

## Handle Rectangle Events

The PDF viewer provides annotation life-cycle events that notify when Rectangle annotations are added, modified, selected, or removed. For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event).

## Export and Import

The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import/export-annotation).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
