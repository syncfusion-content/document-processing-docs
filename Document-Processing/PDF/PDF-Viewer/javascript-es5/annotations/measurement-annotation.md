---
layout: post
title: Measurement annotation in JavaScript PDF Viewer control | Syncfusion
description: Learn about measurement annotations in the Syncfusion JavaScript PDF Viewer (Essential JS 2): distance, perimeter, area, radius, and volume.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Measurement annotation in JavaScript PDF Viewer control

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

```html
<button id="distanceMode">Distance</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
let distanceMode = document.getElementById('distanceMode');
if (distanceMode) {
    distanceMode.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotationModule.setAnnotationMode("Distance");
        }
    });
}


{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
let distanceMode = document.getElementById('distanceMode');
if (distanceMode) {
    distanceMode.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotationModule.setAnnotationMode("Distance");
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Add a measurement annotation to the PDF document programmatically

The PDF Viewer library allows adding measurement annotations programmatically using the [addAnnotation()](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation/#annotation) method.

Here is an example showing how to add measurement annotations programmatically using addAnnotation():

```html
<button id="addDistanceAnnotation">Add Distance annotation Programmatically</button>
<button id="addPerimeterAnnotation">Add Perimeter annotation Programmatically</button>
<button id="addAreaAnnotation">Add Area annotation Programmatically</button>
<button id="addRadiusAnnotation">Add Radius annotation Programmatically</button>
<button id="addVolumeAnnotation">Add Volume annotation Programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let addDistanceAnnotation = document.getElementById('addDistanceAnnotation');
if (addDistanceAnnotation) {
    addDistanceAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Distance", {
                offset: { x: 200, y: 230 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            });
        }
    });
}

let addPerimeterAnnotation = document.getElementById('addPerimeterAnnotation');
if (addPerimeterAnnotation) {
    addPerimeterAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Perimeter", {
                offset: { x: 200, y: 350 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 350 }, { x: 285, y: 350 }, { x: 286, y: 412 }]
            });
        }
    });
}

let addAreaAnnotation = document.getElementById('addAreaAnnotation');
if (addAreaAnnotation) {
    addAreaAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Area", {
                offset: { x: 200, y: 500 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
            });
        }
    });
}

let addRadiusAnnotation = document.getElementById('addRadiusAnnotation');
if (addRadiusAnnotation) {
    addRadiusAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Radius", {
                offset: { x: 200, y: 630 },
                pageNumber: 1,
                width: 90,
                height: 90
            });
        }
    });
}

let addVolumeAnnotation = document.getElementById('addVolumeAnnotation');
if (addVolumeAnnotation) {
    addVolumeAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Volume", {
                offset: { x: 200, y: 810 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }]
            });
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl : "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let addDistanceAnnotation = document.getElementById('addDistanceAnnotation');
if (addDistanceAnnotation) {
    addDistanceAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Distance", {
                offset: { x: 200, y: 230 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            });
        }
    });
}

let addPerimeterAnnotation = document.getElementById('addPerimeterAnnotation');
if (addPerimeterAnnotation) {
    addPerimeterAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Perimeter", {
                offset: { x: 200, y: 350 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 350 }, { x: 285, y: 350 }, { x: 286, y: 412 }]
            });
        }
    });
}

let addAreaAnnotation = document.getElementById('addAreaAnnotation');
if (addAreaAnnotation) {
    addAreaAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Area", {
                offset: { x: 200, y: 500 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
            });
        }
    });
}

let addRadiusAnnotation = document.getElementById('addRadiusAnnotation');
if (addRadiusAnnotation) {
    addRadiusAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Radius", {
                offset: { x: 200, y: 630 },
                pageNumber: 1,
                width: 90,
                height: 90
            });
        }
    });
}

let addVolumeAnnotation = document.getElementById('addVolumeAnnotation');
if (addVolumeAnnotation) {
    addVolumeAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Volume", {
                offset: { x: 200, y: 810 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }]
            });
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Edit an existing measurement annotation programmatically

To modify an existing measurement annotation programmatically, use the editAnnotation() method.

Here is an example of using editAnnotation():

```html
<button id="editDistanceAnnotation">Edit Distance annotation Programmatically</button>
<button id="editPerimeterAnnotation">Edit Perimeter annotation Programmatically</button>
<button id="editAreaAnnotation">Edit Area annotation Programmatically</button>
<button id="editRadiusAnnotation">Edit Radius annotation Programmatically</button>
<button id="editVolumeAnnotation">Edit Volume annotation Programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
let editDistanceAnnotation = document.getElementById('editDistanceAnnotation');
if (editDistanceAnnotation) {
    editDistanceAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Distance calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editPerimeterAnnotation = document.getElementById('editPerimeterAnnotation');
if (editPerimeterAnnotation) {
    editPerimeterAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Perimeter calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editAreaAnnotation = document.getElementById('editAreaAnnotation');
if (editAreaAnnotation) {
    editAreaAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Area calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editRadiusAnnotation = document.getElementById('editRadiusAnnotation');
if (editRadiusAnnotation) {
    editRadiusAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Radius calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editVolumeAnnotation = document.getElementById('editVolumeAnnotation');
if (editVolumeAnnotation) {
    editVolumeAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Volume calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl : "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');
let editDistanceAnnotation = document.getElementById('editDistanceAnnotation');
if (editDistanceAnnotation) {
    editDistanceAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Distance calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editPerimeterAnnotation = document.getElementById('editPerimeterAnnotation');
if (editPerimeterAnnotation) {
    editPerimeterAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Perimeter calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editAreaAnnotation = document.getElementById('editAreaAnnotation');
if (editAreaAnnotation) {
    editAreaAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Area calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editRadiusAnnotation = document.getElementById('editRadiusAnnotation');
if (editRadiusAnnotation) {
    editRadiusAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Radius calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editVolumeAnnotation = document.getElementById('editVolumeAnnotation');
if (editVolumeAnnotation) {
    editVolumeAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Volume calculation") {
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].fillColor = "#FFFF00";
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

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

Default properties for measurement annotations can be set before creating the control using distanceSettings, perimeterSettings, areaSettings, radiusSettings, and volumeSettings.

Refer to the following code snippet to set the default annotation settings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                    distanceSettings : {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'},
                    perimeterSettings : {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'},
                    areaSettings :{fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'},
                    radiusSettings : {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'},
                    volumeSettings : {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'},
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
                    distanceSettings : {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'},
                    perimeterSettings : {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'},
                    areaSettings :{fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'},
                    radiusSettings : {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'},
                    volumeSettings : {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'},
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}
## Editing scale ratio and unit of the measurement annotation

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

## Setting default scale ratio settings during control initialization

The properties of scale ratio for measurement annotation can be set before creating the control using ScaleRatioSettings as shown in the following code snippet,

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                    measurementSettings = {scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm'},
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
                    measurementSettings = {scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm'},
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Enable or disable import annotation measurement

Controls whether the PDF Viewer recalculates measurement values for imported measurement annotations. For details, see [enableImportAnnotationMeasurement API documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#enableimportannotationmeasurement).

- true: Recalculates and displays measurement values using the viewer's current scale ratio and units.
- false: Preserves the values embedded in the imported annotations (no recalculation), which can appear as original comment text.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

// Inject required modules
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.Print,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner
  );
  
  // Initialize the PDF Viewer
  var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
    // Enable or disable import annotation measurement customization
    enableImportAnnotationMeasurement: false 
  });
  
  // Render the viewer
  viewer.appendTo('#pdfViewer');

{% endhighlight %}
{% endtabs %}