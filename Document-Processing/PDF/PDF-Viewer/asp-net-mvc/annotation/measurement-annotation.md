---
layout: post
title: Measurement annotation in ASP.NET MVC PDF Viewer control | Syncfusion
description: Learn about measurement annotations in the Syncfusion ASP.NET MVC PDF Viewer (Essential JS 2): distance, perimeter, area, radius, and volume.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Measurement annotation in ASP.NET MVC PDF Viewer control

The PDF Viewer provides options to add measurement annotations. The supported measurement annotations are:

* Distance
* Perimeter
* Area
* Radius
* Volume

![Measurement annotations overview](../images/calibrate_annotation.png)

## Adding measurement annotations to the PDF document

The measurement annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Measurement Annotation** drop-down button. The pop-up lists available measurement annotation types.
* Select a measurement type to enable its annotation mode.
* Measure and add annotations on the pages of the PDF document.

When in pan mode, selecting a measurement annotation switches the PDF Viewer to text select mode.

![CalibrateTool](../images/calibrate_tool.png)

The following example switches to distance annotation mode.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<!--Element to set measurement annotation mode-->
<button id="set" onclick="addAnnot()">Distance</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addAnnot() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Distance');
    }
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<!--Element to set measurement annotation mode-->
<button id="set" onclick="addAnnot()">Distance</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addAnnot() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Distance');
    }
</script>

{% endhighlight %}
{% endtabs %}

## Add a measurement annotation to the PDF document programmatically

The PDF Viewer library allows adding measurement annotations programmatically using the **addAnnotation()** method.

Here is an example showing how to add measurement annotations programmatically using **addAnnotation()**:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<button onclick="addDistanceAnnotation()">Add Distance Annotation programatically</button>
<button onclick="addPerimeterAnnotation()">Add Perimeter Annotation programatically</button>
<button onclick="addAreaAnnotation()">Add Area Annotation programatically</button>
<button onclick="addRadiusAnnotation()">Add Radius Annotation programatically</button>
<button onclick="addVolumeAnnotation()">Add Volume Annotation programatically</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function addDistanceAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Distance", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
        });
    }
    function addPerimeterAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Perimeter", {
            offset: { x: 200, y: 350 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 350 }, { x: 285, y: 350 }, { x: 286, y: 412 }]
        });
    }
    function addAreaAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Area", {
            offset: { x: 200, y: 500 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
        });
    }
    function addRadiusAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Radius", {
            offset: { x: 200, y: 630 },
            pageNumber: 1,
            width: 90,
            height: 90
        });
    }
    function addVolumeAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Volume", {
            offset: { x: 200, y: 810 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }]
        });
    }
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<button onclick="addDistanceAnnotation()">Add Distance Annotation programatically</button>
<button onclick="addPerimeterAnnotation()">Add Perimeter Annotation programatically</button>
<button onclick="addAreaAnnotation()">Add Area Annotation programatically</button>
<button onclick="addRadiusAnnotation()">Add Radius Annotation programatically</button>
<button onclick="addVolumeAnnotation()">Add Volume Annotation programatically</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function addDistanceAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Distance", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
        });
    }
    function addPerimeterAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Perimeter", {
            offset: { x: 200, y: 350 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 350 }, { x: 285, y: 350 }, { x: 286, y: 412 }]
        });
    }
    function addAreaAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Area", {
            offset: { x: 200, y: 500 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
        });
    }
    function addRadiusAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Radius", {
            offset: { x: 200, y: 630 },
            pageNumber: 1,
            width: 90,
            height: 90
        });
    }
    function addVolumeAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Volume", {
            offset: { x: 200, y: 810 },
            pageNumber: 1,
            vertexPoints: [{ x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }]
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Edit an existing measurement annotation programmatically

To modify an existing measurement annotation programmatically, use the **editAnnotation()** method.

Here is an example of using **editAnnotation()**:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<button onclick="editDistanceAnnotation()">edit Distance Annotation programatically</button>
<button onclick="editPerimeterAnnotation()">edit Perimeter Annotation programatically</button>
<button onclick="editAreaAnnotation()">edit Area Annotation programatically</button>
<button onclick="editRadiusAnnotation()">edit Radius Annotation programatically</button>
<button onclick="editVolumeAnnotation()">edit Volume Annotation programatically</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function editDistanceAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Distance calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
    function editPerimeterAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Perimeter calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
    function editAreaAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Area calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
    function editRadiusAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Radius calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
    function editVolumeAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Volume calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<button onclick="editDistanceAnnotation()">edit Distance Annotation programatically</button>
<button onclick="editPerimeterAnnotation()">edit Perimeter Annotation programatically</button>
<button onclick="editAreaAnnotation()">edit Area Annotation programatically</button>
<button onclick="editRadiusAnnotation()">edit Radius Annotation programatically</button>
<button onclick="editVolumeAnnotation()">edit Volume Annotation programatically</button>

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function editDistanceAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Distance calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
    function editPerimeterAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Perimeter calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
    function editAreaAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Area calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
    function editRadiusAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Radius calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
    function editVolumeAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (let i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === "Volume calculation") {
                viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                viewer.annotationCollection[i].strokeColor = "#0000FF";
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = "#FFFF00";
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

## Edit the properties of measurement annotations

The fill color, stroke color, thickness, and opacity can be edited using the Edit Color, Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

### Edit fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![CalibrateFillColor](../images/calibrate_fillcolor.png)

### Edit stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![CalibrateStrokeColor](../images/calibrate_stroke.png)

### Edit thickness

Edit border thickness using the range slider provided in the Edit Thickness tool.

![CalibrateThickness](../images/calibrate_thickness.png)

### Edit opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![CalibrateOpacity](../images/calibrate_opacity.png)

### Edit the line properties

Line-based measurement annotations (distance and perimeter) have additional options in the Line Properties window. Open it by right-clicking the annotation and selecting Properties from the context menu.

![CalibrateProperty](../images/calibrate_lineprop.png)

## Set default properties during control initialization

Default properties for measurement annotations can be set before creating the control using DistanceSettings, PerimeterSettings, AreaSettings, RadiusSettings, and VolumeSettings.

Refer to the following code sample to set the default annotation settings.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").DistanceSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerDistanceSettings { FillColor = "blue", Opacity = 0.6, StrokeColor = "green" }).PerimeterSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings { FillColor = "green", Opacity = 0.6, StrokeColor = "blue" }).AreaSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerAreaSettings { FillColor = "yellow", Opacity = 0.6, StrokeColor = "orange" }).RadiusSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings { FillColor = "orange", Opacity = 0.6, StrokeColor = "pink" }).VolumeSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerVolumeSettings { FillColor = "pink", Opacity = 0.6, StrokeColor = "yellow" }).Render()
</div>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").DistanceSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerDistanceSettings { FillColor = "blue", Opacity = 0.6, StrokeColor = "green" }).PerimeterSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings { FillColor = "green", Opacity = 0.6, StrokeColor = "blue" }).AreaSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerAreaSettings { FillColor = "yellow", Opacity = 0.6, StrokeColor = "orange" }).RadiusSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings { FillColor = "orange", Opacity = 0.6, StrokeColor = "pink" }).VolumeSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerVolumeSettings { FillColor = "pink", Opacity = 0.6, StrokeColor = "yellow" }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Edit scale ratio and unit of the measurement annotation

The scale ratio and unit of measurement can be modified using the scale ratio option provided in the context menu of the PDF Viewer control.

![CalibrateScaleRatio](../images/calibrate_scaleratio.png)

The Units of measurements support for the measurement annotations in the PDF Viewer are

* Inch
* Millimeter
* Centimeter
* Point
* Pica
* Feet

![CalibrateScaleDialog](../images/calibrate_scaledialog.png)

## Set default scale ratio settings during control initialization

The properties of scale ratio for measurement annotation can be set before creating the control using the ScaleRatioSettings as shown in the following code sample.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").MeasurementSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerMeasurementSettings { ScaleRatio = 2, ConversionUnit = Syncfusion.EJ2.PdfViewer.CalibrationUnit.Cm }).Render()
</div>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
     @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").MeasurementSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerMeasurementSettings { ScaleRatio = 2, ConversionUnit = Syncfusion.EJ2.PdfViewer.CalibrationUnit.Cm }).Render()
</div>

{% endhighlight %}
{% endtabs %}
