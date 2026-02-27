---
layout: post
title: Measurement Annotations in ASP.NET Core PDF Viewer | Syncfusion
description: Add and customize measurement annotations in ASP.NET Core PDF Viewer. Support for distance, perimeter, area, radius, volume measurements.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Measurement Annotations in ASP.NET Core PDF Viewer

The PDF Viewer provides comprehensive measurement annotation capabilities for precise calculations and dimensional analysis on PDF documents. Add and customize various measurement types with accurate scale calibration and unit conversion.

## Measurement types

The PDF Viewer supports five measurement annotation types with distinct use cases and calculation methods:

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

**Example: Enable Distance annotation mode using button click**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<!--Element to set measurement annotation mode-->
<button id="set" onclick="addAnnot()">Distance</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script>
    function addAnnot() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.annotation.setAnnotationMode('Distance');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<!--Element to set measurement annotation mode-->
<button id="set" onclick="addAnnot()">Distance</button>
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
        pdfViewer.annotation.setAnnotationMode('Distance');
    }
</script>

{% endhighlight %}
{% endtabs %}

## Add a measurement annotation to the PDF document programmatically

The PDF Viewer library allows adding measurement annotations programmatically using the **addAnnotation()** method.

**Example: Add all measurement annotation types programmatically**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="addDistanceAnnotation()">Add Distance Annotation programatically</button>
<button onclick="addPerimeterAnnotation()">Add Perimeter Annotation programatically</button>
<button onclick="addAreaAnnotation()">Add Area Annotation programatically</button>
<button onclick="addRadiusAnnotation()">Add Radius Annotation programatically</button>
<button onclick="addVolumeAnnotation()">Add Volume Annotation programatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="addDistanceAnnotation()">Add Distance Annotation programatically</button>
<button onclick="addPerimeterAnnotation()">Add Perimeter Annotation programatically</button>
<button onclick="addAreaAnnotation()">Add Area Annotation programatically</button>
<button onclick="addRadiusAnnotation()">Add Radius Annotation programatically</button>
<button onclick="addVolumeAnnotation()">Add Volume Annotation programatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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

**Example: Edit measurement annotations**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button onclick="editDistanceAnnotation()">edit Distance Annotation programatically</button>
<button onclick="editPerimeterAnnotation()">edit Perimeter Annotation programatically</button>
<button onclick="editAreaAnnotation()">edit Area Annotation programatically</button>
<button onclick="editRadiusAnnotation()">edit Radius Annotation programatically</button>
<button onclick="editVolumeAnnotation()">edit Volume Annotation programatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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
{% highlight cshtml tabtitle="Server-Backed" %}

<button onclick="editDistanceAnnotation()">edit Distance Annotation programatically</button>
<button onclick="editPerimeterAnnotation()">edit Perimeter Annotation programatically</button>
<button onclick="editAreaAnnotation()">edit Area Annotation programatically</button>
<button onclick="editRadiusAnnotation()">edit Radius Annotation programatically</button>
<button onclick="editVolumeAnnotation()">edit Volume Annotation programatically</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
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

Measurement annotation appearance can be customized using the toolbar tools or the Properties dialog. The following editing options are available:

### 1. Edit fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![CalibrateFillColor](../images/calibrate_fillcolor.png)

### 2. Edit stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![CalibrateStrokeColor](../images/calibrate_stroke.png)

### 3. Edit thickness

Edit border thickness using the range slider provided in the Edit Thickness tool.

![CalibrateThickness](../images/calibrate_thickness.png)

### 4. Edit opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![CalibrateOpacity](../images/calibrate_opacity.png)

### 5. Edit line properties

Line-based measurement annotations (distance and perimeter) have additional options in the Line Properties window. Open it by right-clicking the annotation and selecting Properties from the context menu.

![CalibrateProperty](../images/calibrate_lineprop.png)

## Set default properties during control initialization

Default properties for measurement annotations can be set before creating the control using type-specific settings objects. This allows consistent styling across all annotations of the same type without individual customization.

**Example: Configure default measurement annotation styling**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   distanceSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerDistanceSettings
            {FillColor="blue", Opacity=0.6, StrokeColor="green"})"
                   perimeterSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings
            {FillColor="green", Opacity=0.6, StrokeColor="blue"})"
                   areaSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerAreaSettings
            {FillColor="yellow", Opacity=0.6, StrokeColor="orange"})"
                   radiusSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings
            {FillColor="orange", Opacity=0.6, StrokeColor="pink"})"
                   volumeSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerVolumeSettings
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
                   distanceSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerDistanceSettings
            {FillColor="blue", Opacity=0.6, StrokeColor="green"})"
                   perimeterSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings
            {FillColor="green", Opacity=0.6, StrokeColor="blue"})"
                   areaSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerAreaSettings
            {FillColor="yellow", Opacity=0.6, StrokeColor="orange"})"
                   radiusSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings
            {FillColor="orange", Opacity=0.6, StrokeColor="pink"})"
                   volumeSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerVolumeSettings
            {FillColor="pink", Opacity=0.6, StrokeColor="yellow"})">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Edit scale ratio and unit of the measurement annotation

The scale ratio and unit of measurement can be modified using the scale ratio option provided in the context menu of the PDF Viewer control.

![CalibrateScaleRatio](../images/calibrate_scaleratio.png)

### Supported Measurement Units

The PDF Viewer supports six standard measurement units for converting raw pixel measurements to real-world dimensions:

* Inch
* Millimeter
* Centimeter
* Point
* Pica
* Feet

![CalibrateScaleDialog](../images/calibrate_scaledialog.png)

## Set default scale ratio settings during control initialization

The properties of scale ratio for measurement annotation can be set before creating the control using the MeasurementSettings object. This ensures all measurements use consistent calibration without requiring manual adjustment.

**Example: Configure default scale ratio during PDF Viewer initialization**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   measurementSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerMeasurementSettings
            {ScaleRatio=2, ConversionUnit=Syncfusion.EJ2.PdfViewer.CalibrationUnit.Cm})">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   measurementSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerMeasurementSettings
            {ScaleRatio=2, ConversionUnit=Syncfusion.EJ2.PdfViewer.CalibrationUnit.Cm})">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}
