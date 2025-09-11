---
layout: post
title: Measurement annotation in Typescript PDF Viewer control | Syncfusion
description: Learn here all about Measurement annotation in Syncfusion Typescript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Measurement annotation in Typescript PDF Viewer control

The PDF Viewer provides the options to add measurement annotations. You can measure the page annotations with the help of measurement annotation. The supported measurement annotations in the PDF Viewer control are:

* Distance
* Perimeter
* Area
* Radius
* Volume

![CalibrateAnnotation](../images/calibrate_annotation.png)

## Adding measurement annotations to the PDF document

The measurement annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Measurement Annotation** dropdown button. A dropdown pop-up will appear and shows the measurement annotations to be added.
* Select the measurement type to be added to the page in the dropdown pop-up. It enables the selected measurement annotation mode.
* You can measure and add the annotation over the pages of the PDF document.

In the pan mode, if the measurement annotation mode is entered, the PDF Viewer control will switch to text select mode.

  ![CalibrateTool](../images/calibrate_tool.png)

Refer to the following code snippet to switch to distance annotation mode.

```html
<button id="distanceMode">Distance</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
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

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
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

## Adding a measurement annotation to the PDF document Programmatically

With the PDF Viewer library, you can add a measurement annotation to the PDF Viewer control programmatically using the [**addAnnotation()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation/#annotation) method.

Here's a example of how you can utilize the **addAnnotation()** method to include a measurement annotation programmatically:

```html
<button id="addDistanceAnnotation">Add Distance annotation Programmatically</button>
<button id="addPerimeterAnnotation">Add Perimeter annotation Programmatically</button>
<button id="addAreaAnnotation">Add Area annotation Programmatically</button>
<button id="addRadiusAnnotation">Add Radius annotation Programmatically</button>
<button id="addVolumeAnnotation">Add Volume annotation Programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import {PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, DistanceSettings, PerimeterSettings,
    AreaSettings, RadiusSettings, VolumeSettings
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";

pdfviewer.appendTo('#PdfViewer');

let addDistanceAnnotation = document.getElementById('addDistanceAnnotation');
if (addDistanceAnnotation) {
    addDistanceAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Distance", {
                offset: { x: 200, y: 230 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            } as DistanceSettings);
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
            } as PerimeterSettings);
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
            } as AreaSettings);
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
            } as RadiusSettings);
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
            } as VolumeSettings);
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import {
    PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, DistanceSettings, PerimeterSettings,
    AreaSettings, RadiusSettings, VolumeSettings
} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';

pdfviewer.appendTo('#PdfViewer');

let addDistanceAnnotation = document.getElementById('addDistanceAnnotation');
if (addDistanceAnnotation) {
    addDistanceAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Distance", {
                offset: { x: 200, y: 230 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            } as DistanceSettings);
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
            } as PerimeterSettings);
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
            } as AreaSettings);
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
            } as RadiusSettings);
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
            } as VolumeSettings);
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Edit the existing measurement annotation programmatically

To modify existing measurement annotation in the Syncfusion PDF viewer programmatically, you can use the **editAnnotation()** method.

Here is an example of how you can use the **editAnnotation()** method:

```html
<button id="editDistanceAnnotation">Edit Distance annotation Programmatically</button>
<button id="editPerimeterAnnotation">Edit Perimeter annotation Programmatically</button>
<button id="editAreaAnnotation">Edit Area annotation Programmatically</button>
<button id="editRadiusAnnotation">Edit Radius annotation Programmatically</button>
<button id="editVolumeAnnotation">Edit Volume annotation Programmatically</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
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

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
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

## Editing the properties of measurement annotation

The fill color, stroke color, thickness, and opacity of the measurement annotation can be edited using the Edit Color tool, Edit Stroke Color tool, Edit Thickness tool, and Edit Opacity tool in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![CalibrateFillColor](../images/calibrate_fillcolor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![CalibrateStrokeColor](../images/calibrate_stroke.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit thickness tool.

![CalibrateThickness](../images/calibrate_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![CalibrateOpacity](../images/calibrate_opacity.png)

### Editing the line properties

The properties of the line shapes such as distance and perimeter annotations can be edited using the Line properties window. It can be opened by selecting the Properties option in the context menu that appears on right-clicking the distance and perimeter annotations.

![CalibrateProperty](../images/calibrate_lineprop.png)

## Setting default properties during control initialization

The properties of the shape annotations can be set before creating the control using distanceSettings, perimeterSettings, areaSettings, radiusSettings and volumeSettings.

Refer to the following code snippet to set the default annotation settings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer. =
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer. =
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.distanceSettings = {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'};
pdfviewer.perimeterSettings = {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'};
pdfviewer.areaSettings = {fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'};
pdfviewer.radiusSettings = {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'};
pdfviewer.volumeSettings = {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'};
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.distanceSettings = {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'};
pdfviewer.perimeterSettings = {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'};
pdfviewer.areaSettings = {fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'};
pdfviewer.radiusSettings = {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'};
pdfviewer.volumeSettings = {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'};
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

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.measurementSettings={scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm'};
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.measurementSettings={scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm'};
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}
