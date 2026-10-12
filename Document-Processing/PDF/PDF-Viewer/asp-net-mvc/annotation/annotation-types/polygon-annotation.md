---
layout: post
title: Polygon Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, apply, customize, and manage Polygon annotations in the ASP.NET MVC PDF Viewer to outline irregular shapes on a PDF page.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Polygon Annotation in ASP.NET MVC PDF Viewer

Polygon annotations allow users to outline irregular regions, draw custom shapes, highlight non-rectangular areas, or create specialized callouts on PDFs for review and markup.

![Polygon overview](../../images/shape_annot.png)

## Enable Polygon Annotation in the Viewer

To enable Polygon annotations, inject the **PdfViewer** with the **Annotation** module.

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

## Add Polygon Annotation

### Add Polygon Annotation Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Select **Shapes** → **Polygon**.
3. Click multiple points on the page to draw the polygon.
4. Double-click to finalize the shape.

![Shape toolbar](../../images/shape_toolbar.png)

N> When in Pan mode, selecting a shape tool automatically switches the viewer to selection mode for smooth interaction.

### Enable Polygon Mode

Switch the viewer into Polygon mode using **setAnnotationMode('Polygon')**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="enablePolygon" onclick="enablePolygonMode()">Enable Polygon Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enablePolygonMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Polygon');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enablePolygon" onclick="enablePolygonMode()">Enable Polygon Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enablePolygonMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Polygon');
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Exit Polygon Mode

Switch back to normal mode using:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exitPolygon" onclick="exitPolygonMode()">Exit Polygon Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitPolygonMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitPolygon" onclick="exitPolygonMode()">Exit Polygon Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitPolygonMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Polygon Programmatically
Use the **addAnnotation** method to draw a polygon by specifying multiple **vertexPoints**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addPolygon" onclick="addPolygon()">Add Polygon Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addPolygon() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Polygon", {
            offset: { x: 200, y: 800 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 800 }, { x: 242, y: 771 },
                { x: 289, y: 799 }, { x: 278, y: 842 },
                { x: 211, y: 842 }, { x: 200, y: 800 }
            ]
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addPolygon" onclick="addPolygon()">Add Polygon Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addPolygon() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Polygon", {
            offset: { x: 200, y: 800 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 800 }, { x: 242, y: 771 },
                { x: 289, y: 799 }, { x: 278, y: 842 },
                { x: 211, y: 842 }, { x: 200, y: 800 }
            ]
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize Polygon Appearance
Configure default polygon appearance (fill color, stroke color, thickness, opacity) using the **polygonSettings** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PolygonSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPolygonSettings { FillColor = "#ffa5d8", StrokeColor = "#ff6a00", Thickness = 2, Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PolygonSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPolygonSettings { FillColor = "#ffa5d8", StrokeColor = "#ff6a00", Thickness = 2, Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Manage Polygon (Edit, Move, Resize, Delete)

### Edit Polygon

#### Edit Polygon (UI)

- Select a Polygon to view resize handles.
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

#### Edit Polygon Programmatically

Modify an existing Polygon programmatically using **editAnnotation()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editPolygon" onclick="editPolygon()">Edit Polygon Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editPolygon() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Polygon') {
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

<button id="editPolygon" onclick="editPolygon()">Edit Polygon Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editPolygon() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Polygon') {
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

### Delete Polygon
The PDF Viewer supports deleting existing annotations through the UI and API. See [**Delete Annotation**](../delete-annotation) for full behavior and workflows.

### Comments
Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to polygon annotations. It provides a dedicated interface for collaboration and review within the PDF Viewer.

## Set properties while adding individual annotations
Configure per-annotation appearance while adding a polygon using **addAnnotation**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addPolygons" onclick="addPolygons()">Add multiple Polygon Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addPolygons() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Polygon 1
        viewer.annotation.addAnnotation("Polygon", {
            offset: { x: 200, y: 800 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 800 }, { x: 242, y: 771 },
                { x: 289, y: 799 }, { x: 278, y: 842 },
                { x: 211, y: 842 }, { x: 200, y: 800 }
            ],
            strokeColor: '#ff6a00',
            fillColor: '#ffa5d8',
            thickness: 2,
            opacity: 0.9,
            author: 'User 1'
        });

        // Polygon 2
        viewer.annotation.addAnnotation("Polygon", {
            offset: { x: 350, y: 800 },
            pageNumber: 1,
            vertexPoints: [
                { x: 350, y: 800 }, { x: 392, y: 771 },
                { x: 439, y: 799 }, { x: 428, y: 842 },
                { x: 361, y: 842 }, { x: 350, y: 800 }
            ],
            strokeColor: '#ff1010',
            fillColor: '#ffe600',
            thickness: 3,
            opacity: 0.85,
            author: 'User 2'
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addPolygons" onclick="addPolygons()">Add multiple Polygon Annotations programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addPolygons() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Polygon 1
        viewer.annotation.addAnnotation("Polygon", {
            offset: { x: 200, y: 800 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 800 }, { x: 242, y: 771 },
                { x: 289, y: 799 }, { x: 278, y: 842 },
                { x: 211, y: 842 }, { x: 200, y: 800 }
            ],
            strokeColor: '#ff6a00',
            fillColor: '#ffa5d8',
            thickness: 2,
            opacity: 0.9,
            author: 'User 1'
        });

        // Polygon 2
        viewer.annotation.addAnnotation("Polygon", {
            offset: { x: 350, y: 800 },
            pageNumber: 1,
            vertexPoints: [
                { x: 350, y: 800 }, { x: 392, y: 771 },
                { x: 439, y: 799 }, { x: 428, y: 842 },
                { x: 361, y: 842 }, { x: 350, y: 800 }
            ],
            strokeColor: '#ff1010',
            fillColor: '#ffe600',
            thickness: 3,
            opacity: 0.85,
            author: 'User 2'
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Disable Polygon Annotation
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

## Handle Polygon Events

The PDF viewer provides annotation life-cycle events that notify when Polygon annotations are added, modified, selected, or removed. For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event).

## Export and Import
The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import/export-annotation).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
