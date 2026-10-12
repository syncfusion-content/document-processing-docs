---
layout: post
title: Line Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, apply, customize, and manage Line annotations in the ASP.NET MVC PDF Viewer for marking straight paths on a PDF page.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Line Annotation in ASP.NET MVC PDF Viewer

Line annotations allow users to draw straight connectors or callouts on PDFs for markup, review, diagrams, or measurement guides. They support customization of color, thickness, opacity, and arrowheads, and can be edited, resized, deleted, or exported along with the document.

![Line overview](../../images/shape_annot.png)

## Enable Line Annotation in the Viewer

To enable Line annotations, inject the **PdfViewer** with the **Annotation** module.

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

## Add Line Annotation

### Add Line Annotation Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select **Shapes** → **Line**.
3. Click and drag on the PDF page to draw the line.

![Shape toolbar](../../images/shape_toolbar.png)

N> When in Pan mode, selecting a shape tool automatically switches the viewer to selection mode for smooth interaction.

### Enable Line Mode

Switch the viewer into Line mode using **setAnnotationMode('Line')**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="enableLine" onclick="enableLineMode()">Enable Line Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableLineMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Line');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enableLine" onclick="enableLineMode()">Enable Line Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableLineMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Line');
    }
</script>

{% endhighlight %}
{% endtabs %}

#### Exit Line Mode

Switch back to normal mode using:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exitLine" onclick="exitLineMode()">Exit Line Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitLineMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitLine" onclick="exitLineMode()">Exit Line Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitLineMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Line Programmatically

You can add line annotations using the **addAnnotation** method.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addLine" onclick="addLine()">Add Line Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addLine() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Line", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 230 },
                { x: 350, y: 230 }
            ]
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addLine" onclick="addLine()">Add Line Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addLine() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Line", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 230 },
                { x: 350, y: 230 }
            ]
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Customize Line Appearance

Configure default line appearance using the **lineSettings** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").LineSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerLineSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").LineSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerLineSettings { StrokeColor = "#0066ff", Thickness = 2, Opacity = 0.9 }).Render()
</div>

{% endhighlight %}
{% endtabs %}

N> Fill color is available only when an arrowhead style is applied at the Start or End of the line. If both are set to `None`, the Fill option is disabled.

## Manage Line (Edit, Move, Resize, Delete)

### Edit Line

#### Edit Line Appearance (UI)
- Select a line to view resize handles.
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

#### Edit Line Programmatically

Modify an existing Line programmatically using **editAnnotation()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editLine" onclick="editLine()">Edit Line Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editLine() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Line') {
                viewer.annotationCollection[i].strokeColor = '#ff0000';
                viewer.annotationCollection[i].thickness = 3;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="editLine" onclick="editLine()">Edit Line Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editLine() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Line') {
                viewer.annotationCollection[i].strokeColor = '#ff0000';
                viewer.annotationCollection[i].thickness = 3;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

### Delete Line

The PDF Viewer supports deleting existing annotations through the UI and API. See [**Delete Annotation**](../delete-annotation) for full behavior and workflows.

### Comments

Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to line annotations. It provides a dedicated interface for collaboration and review within the PDF Viewer.

## Set properties while adding individual annotations

Set properties for individual line annotations using the **lineSettings** property or by passing per-annotation values during **addAnnotation**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addLines" onclick="addLines()">Add multiple Lines programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addLines() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Line 1
        viewer.annotation.addAnnotation("Line", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 230 },
                { x: 350, y: 230 }
            ],
            strokeColor: '#0066ff',
            thickness: 2,
            opacity: 0.9,
            author: 'User 1'
        });

        // Line 2
        viewer.annotation.addAnnotation("Line", {
            offset: { x: 220, y: 300 },
            pageNumber: 1,
            vertexPoints: [
                { x: 220, y: 300 },
                { x: 400, y: 300 }
            ],
            strokeColor: '#ff1010',
            thickness: 3,
            opacity: 0.9,
            author: 'User 2'
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addLines" onclick="addLines()">Add multiple Lines programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addLines() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];

        // Line 1
        viewer.annotation.addAnnotation("Line", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 230 },
                { x: 350, y: 230 }
            ],
            strokeColor: '#0066ff',
            thickness: 2,
            opacity: 0.9,
            author: 'User 1'
        });

        // Line 2
        viewer.annotation.addAnnotation("Line", {
            offset: { x: 220, y: 300 },
            pageNumber: 1,
            vertexPoints: [
                { x: 220, y: 300 },
                { x: 400, y: 300 }
            ],
            strokeColor: '#ff1010',
            thickness: 3,
            opacity: 0.9,
            author: 'User 2'
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Disable Line Annotation

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

## Handle Line Events

The PDF viewer provides annotation life-cycle events that notify when Line annotations are added, modified, selected, or removed. For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event).

## Export and Import
The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import/export-annotation).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
