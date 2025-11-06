---
layout: post
title: Shape annotation in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn about shape annotations in the Syncfusion ASP.NET Core PDF Viewer (Essential JS 2), including add, edit, delete, and default settings.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Shape annotation in ASP.NET Core PDF Viewer control

The PDF Viewer control provides options to add, edit, and delete shape annotations. The supported shape annotation types are:

* Line
* Arrow
* Rectangle
* Circle
* Polygon

![Shape annotations overview](../images/shape_annot.png)

## Adding a shape annotation to the PDF document

Shape annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Shape Annotation** drop-down button. The pop-up lists available shape annotation types.
* Select a shape type to enable its annotation mode.
* Draw the shape on the pages of the PDF document.

N> When in pan mode and a shape annotation tool is selected, the PDF Viewer switches to text select mode automatically to ensure a smooth interaction experience.

![Shape annotation toolbar](../images/shape_toolbar.png)

Refer to the following code sample to switch to the circle annotation mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<!--Element to set shape annotation mode-->
<button id="set" onclick="addAnnot()">Circle</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addAnnot() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Circle');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<!--Element to set shape annotation mode-->
<button id="set" onclick="addAnnot()">Circle</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addAnnot() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Circle');
    }
</script>

{% endhighlight %}
{% endtabs %}

## Add a shape annotation to the PDF document programmatically

The PDF Viewer library allows adding a shape annotation programmatically using the **addAnnotation()** method.

Here is an example showing how to add shape annotations programmatically using addAnnotation():

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="addLineAnnotation()">add Line Annotation programatically</button>
<button onclick="addArrowAnnotation()">add Arrow Annotation programatically</button>
<button onclick="addRectangleAnnotation()">add Rectangle Annotation programatically</button>
<button onclick="addCircleAnnotation()">add Circle Annotation programatically</button>
<button onclick="addPolygonAnnotation()">add Polygon Annotation programatically</button>

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addLineAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Line", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
        });
    }
    function addArrowAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Arrow", {
            offset: { x: 200, y: 370 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
        });
    }
    function addRectangleAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 500 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
        });
    }
    function addCircleAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Circle", {
            offset: { x: 200, y: 630 },
            pageNumber: 1,
            width: 90,
            height: 90
        });
    }
    function addPolygonAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Polygon", {
            offset: { x: 200, y: 800 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="addLineAnnotation()">add Line Annotation programatically</button>
<button onclick="addArrowAnnotation()">add Arrow Annotation programatically</button>
<button onclick="addRectangleAnnotation()">add Rectangle Annotation programatically</button>
<button onclick="addCircleAnnotation()">add Circle Annotation programatically</button>
<button onclick="addPolygonAnnotation()">add Polygon Annotation programatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addLineAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Line", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
        });
    }
    function addArrowAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Arrow", {
            offset: { x: 200, y: 370 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
        });
    }
    function addRectangleAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 500 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
        });
    }
    function addCircleAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Circle", {
            offset: { x: 200, y: 630 },
            pageNumber: 1,
            width: 90,
            height: 90
        });
    }
    function addPolygonAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfviewer.annotation.addAnnotation("Polygon", {
            offset: { x: 200, y: 800 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Edit an existing shape annotation programmatically

To modify an existing shape annotation programmatically, use the **editAnnotation()** method.

Here is an example of using editAnnotation():

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="editLineAnnotation()">edit Line Annotation programatically</button>
<button onclick="editArrowAnnotation()">edit Arrow Annotation programatically</button>
<button onclick="editRectangleAnnotation()">edit Rectangle Annotation programatically</button>
<button onclick="editCircleAnnotation()">edit Circle Annotation programatically</button>
<button onclick="editPolygonAnnotation()">edit Polygon Annotation programatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function editLineAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Line") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
    function editArrowAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Arrow") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
    function editRectangleAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
    function editCircleAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Circle") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
    function editPolygonAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Polygon") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="editLineAnnotation()">edit Line Annotation programatically</button>
<button onclick="editArrowAnnotation()">edit Arrow Annotation programatically</button>
<button onclick="editRectangleAnnotation()">edit Rectangle Annotation programatically</button>
<button onclick="editCircleAnnotation()">edit Circle Annotation programatically</button>
<button onclick="editPolygonAnnotation()">edit Polygon Annotation programatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function editLineAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Line") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
    function editArrowAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Arrow") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
    function editRectangleAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Rectangle") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
    function editCircleAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Circle") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
    function editPolygonAnnotation() {
        var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i = pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === "Polygon") {
                pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

## Editing the properties of the shape annotation

The fill color, stroke color, thickness, and opacity of shape annotations can be edited using the Edit Color, Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![Edit fill color for shapes](../images/shape_fillcolor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![Edit stroke color for shapes](../images/shape_strokecolor.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit Thickness tool.

![Edit thickness for shapes](../images/shape_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![Edit opacity for shapes](../images/shape_opacity.png)

### Editing the line properties

Line and arrow annotations have additional options in the Line Properties window. Open it by right-clicking a line or arrow annotation and selecting Properties from the context menu.

Refer to the following code sample to set the default annotation settings.

![Line properties dialog](../images/shape_lineproperty.png)

## Set default properties during control initialization

Default properties for shape annotations can be set before creating the control using LineSettings, ArrowSettings, RectangleSettings, CircleSettings, and PolygonSettings.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   lineSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerLineSettings
            {FillColor="blue", Opacity=0.6, StrokeColor="green"})"
                   arrowSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerArrowSettings
            {FillColor="green", Opacity=0.6, StrokeColor="blue"})"
                   rectangleSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerRectangleSettings
            {FillColor="yellow", Opacity=0.6, StrokeColor="orange"})"
                   circleSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerCircleSettings
            {FillColor="orange", Opacity=0.6, StrokeColor="pink"})"
                   polygonSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerPolygonSettings
            {FillColor="pink", Opacity=0.6, StrokeColor="yellow"})">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   lineSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerLineSettings
            {FillColor="blue", Opacity=0.6, StrokeColor="green"})"
                   arrowSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerArrowSettings
            {FillColor="green", Opacity=0.6, StrokeColor="blue"})"
                   rectangleSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerRectangleSettings
            {FillColor="yellow", Opacity=0.6, StrokeColor="orange"})"
                   circleSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerCircleSettings
            {FillColor="orange", Opacity=0.6, StrokeColor="pink"})"
                   polygonSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerPolygonSettings
            {FillColor="pink", Opacity=0.6, StrokeColor="yellow"})">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}
