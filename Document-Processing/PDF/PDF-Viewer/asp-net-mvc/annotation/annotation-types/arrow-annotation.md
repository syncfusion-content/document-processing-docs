---
layout: post
title: Arrow Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, apply, customize, and manage Arrow annotations in the ASP.NET MVC PDF Viewer to point at or connect areas of a PDF document.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Arrow Annotation in ASP.NET MVC PDF Viewer

Arrow annotations let users point, direct attention, or indicate flow on PDFs—useful for callouts, direction markers, and connectors during reviews. You can add arrows from the toolbar, switch to arrow mode programmatically, customize appearance, edit/delete them in the UI, and export them with the document.

![Arrow overview](../../images/shape_annot.png)

## Enable Arrow Annotation in the Viewer

To enable Arrow annotations, inject the **PdfViewer** with the **Annotation** module.

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

## Add Arrow Annotation

### Add Arrow Annotation Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Select **Shapes** → **Arrow**.
3. Click and drag on the PDF page to draw the arrow.

![Shape toolbar](../../images/shape_toolbar.png)

N> When in Pan mode, selecting a shape tool automatically switches the viewer to selection mode for smooth interaction.

### Enable Arrow Mode
Switch the viewer into Arrow mode using **setAnnotationMode('Arrow')**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="enableArrow" onclick="enableArrowMode()">Enable Arrow Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableArrowMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Arrow');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enableArrow" onclick="enableArrowMode()">Enable Arrow Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableArrowMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Arrow');
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Exit Arrow Mode

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exitArrow" onclick="exitArrowMode()">Exit Arrow Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitArrowMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitArrow" onclick="exitArrowMode()">Exit Arrow Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitArrowMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Arrow Programmatically
Use the **addAnnotation** method to draw an arrow at a specific location (defined by two **vertexPoints**).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addArrow" onclick="addArrow()">Add Arrow Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addArrow() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Arrow", {
            offset: { x: 200, y: 370 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 370 },
                { x: 350, y: 370 }
            ]
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addArrow" onclick="addArrow()">Add Arrow Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addArrow() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Arrow", {
            offset: { x: 200, y: 370 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 370 },
                { x: 350, y: 370 }
            ]
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize Arrow Appearance
Configure default arrow appearance (fill color, stroke color, thickness, opacity) using the **arrowSettings** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ArrowSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerArrowSettings { FillColor = "#ffff00", StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ArrowSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerArrowSettings { FillColor = "#ffff00", StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% endtabs %}

N> For **Line** and **Arrow** annotations, **Fill Color** is available only when an arrowhead style is applied at the **Start** or **End**. If both are `None`, lines do not render fill and the Fill option remains disabled.

## Manage Arrow (Edit, Move, Resize, Delete)

### Edit Arrow

#### Edit Arrow (UI)
- Select an Arrow to view resize handles.
- Drag endpoints to adjust length/angle.
- Edit stroke color, opacity, and thickness using the annotation toolbar.

![Shape tools](../../images/shape_toolbar.png)

Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../images/edit_color.png)

- **Edit Opacity** slider  
![Edit opacity](../../images/edit_opacity.png)

- **Line Properties**  
Open the Line Properties dialog via **Right Click → Properties**.

![Line properties dialog](../../images/shape_lineproperty.png)

#### Edit Arrow Programmatically

Modify an existing Arrow programmatically using **editAnnotation()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editArrow" onclick="editArrow()">Edit Arrow Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editArrow() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Arrow') {
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

<button id="editArrow" onclick="editArrow()">Edit Arrow Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editArrow() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Arrow') {
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

### Delete Arrow

The PDF Viewer supports deleting existing annotations through the UI and API. See [**Delete Annotation**](../delete-annotation) for full behavior and workflows.

### Comments

Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to arrow annotations. It provides a dedicated interface for collaboration and review within the PDF Viewer.

## Set properties while adding individual annotations

Set properties for individual arrow annotations by passing values directly during **addAnnotation**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addArrows" onclick="addArrows()">Add multiple Arrows programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addArrows() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Arrow 1
        viewer.annotation.addAnnotation("Arrow", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 230 },
                { x: 350, y: 230 }
            ],
            fillColor: '#ffff00',
            strokeColor: '#0066ff',
            thickness: 2,
            opacity: 0.9,
            author: 'User 1'
        });

        // Arrow 2
        viewer.annotation.addAnnotation("Arrow", {
            offset: { x: 220, y: 300 },
            pageNumber: 1,
            vertexPoints: [
                { x: 220, y: 300 },
                { x: 400, y: 300 }
            ],
            fillColor: '#ffef00',
            strokeColor: '#ff1010',
            thickness: 3,
            opacity: 0.9,
            author: 'User 2'
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addArrows" onclick="addArrows()">Add multiple Arrows programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addArrows() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Arrow 1
        viewer.annotation.addAnnotation("Arrow", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 230 },
                { x: 350, y: 230 }
            ],
            fillColor: '#ffff00',
            strokeColor: '#0066ff',
            thickness: 2,
            opacity: 0.9,
            author: 'User 1'
        });

        // Arrow 2
        viewer.annotation.addAnnotation("Arrow", {
            offset: { x: 220, y: 300 },
            pageNumber: 1,
            vertexPoints: [
                { x: 220, y: 300 },
                { x: 400, y: 300 }
            ],
            fillColor: '#ffef00',
            strokeColor: '#ff1010',
            thickness: 3,
            opacity: 0.9,
            author: 'User 2'
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Disable Arrow Annotation

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

## Handle Arrow Events

The PDF viewer provides annotation life-cycle events that notify when Arrow annotations are added, modified, selected, or removed. For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event).

## Export and Import
The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import/export-annotation).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
