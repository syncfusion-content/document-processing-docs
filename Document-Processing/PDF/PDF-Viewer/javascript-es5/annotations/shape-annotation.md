---
layout: post
title: Shape annotation in JavaScript PDF Viewer control | Syncfusion
description: Learn about shape annotations in the Syncfusion JavaScript PDF Viewer (Essential JS 2), including add, edit, delete, and default settings.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Shape annotation in JavaScript PDF Viewer control

The PDF Viewer control provides options to add, edit, and delete shape annotations. The supported shape annotation types are:

* Line
* Arrow
* Rectangle
* Circle
* Polygon

## Enable or disable shape annotation support

Enables or disables the shape annotation feature in the PDF Viewer; defaults to true. For more information, see [enableShapeAnnotation API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#enableshapeannotation)

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
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  enableShapeAnnotation: false // Disables shape annotation feature
});

// Render the viewer
viewer.appendTo('#pdfViewer');

{% endhighlight %}
{% endtabs %}

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

```html
<button id="circleAnnotationButton"> Add Shape Annotation</button>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let circleAnnotationButton = document.getElementById('circleAnnotationButton');
if (circleAnnotationButton) {
    circleAnnotationButton.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotationModule.setAnnotationMode("Circle");
        }
    });
}

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

let circleAnnotationButton = document.getElementById('circleAnnotationButton');
if (circleAnnotationButton) {
    circleAnnotationButton.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotationModule.setAnnotationMode("Circle");
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Add a shape annotation to the PDF document programmatically

The PDF Viewer library allows adding a shape annotation programmatically using the [addAnnotation()](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation#addannotation) method.

Here is an example showing how to add shape annotations programmatically using addAnnotation():

```html
<button id="addLineAnnotation">Add Line annotation Programmatically</button>
<button id="addArrowAnnotation">Add Arrow annotation Programmatically</button>
<button id="addRectangleAnnotation">Add Rectangle annotation Programmatically</button>
<button id="addCircleAnnotation">Add Circle annotation Programmatically</button>
<button id="addPolygonAnnotation">Add Polygon annotation Programmatically</button>
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

let addLineAnnotation = document.getElementById('addLineAnnotation');
if (addLineAnnotation) {
    addLineAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Line", {
                offset: { x: 200, y: 230 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            });
        }
    });
}

let addArrowAnnotation = document.getElementById('addArrowAnnotation');
if (addArrowAnnotation) {
    addArrowAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Arrow", {
                offset: { x: 200, y: 370 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
            });
        }
    });
}

let addRectangleAnnotation = document.getElementById('addRectangleAnnotation');
if (addRectangleAnnotation) {
    addRectangleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Rectangle", {
                offset: { x: 200, y: 480 },
                pageNumber: 1,
                width: 150,
                height: 75
            });
        }
    });
}

let addCircleAnnotation = document.getElementById('addCircleAnnotation');
if (addCircleAnnotation) {
    addCircleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Circle", {
                offset: { x: 200, y: 620 },
                pageNumber: 1,
                width: 90,
                height: 90
            });
        }
    });
}

let addPolygonAnnotation = document.getElementById('addPolygonAnnotation');
if (addPolygonAnnotation) {
    addPolygonAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Polygon", {
                offset: { x: 200, y: 800 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
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

let addLineAnnotation = document.getElementById('addLineAnnotation');
if (addLineAnnotation) {
    addLineAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Line", {
                offset: { x: 200, y: 230 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
            });
        }
    });
}

let addArrowAnnotation = document.getElementById('addArrowAnnotation');
if (addArrowAnnotation) {
    addArrowAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Arrow", {
                offset: { x: 200, y: 370 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
            });
        }
    });
}

let addRectangleAnnotation = document.getElementById('addRectangleAnnotation');
if (addRectangleAnnotation) {
    addRectangleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Rectangle", {
                offset: { x: 200, y: 480 },
                pageNumber: 1,
                width: 150,
                height: 75
            });
        }
    });
}

let addCircleAnnotation = document.getElementById('addCircleAnnotation');
if (addCircleAnnotation) {
    addCircleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Circle", {
                offset: { x: 200, y: 620 },
                pageNumber: 1,
                width: 90,
                height: 90
            });
        }
    });
}

let addPolygonAnnotation = document.getElementById('addPolygonAnnotation');
if (addPolygonAnnotation) {
    addPolygonAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            pdfviewer.annotation.addAnnotation("Polygon", {
                offset: { x: 200, y: 800 },
                pageNumber: 1,
                vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
            });
        }
    });
}

{% endhighlight %}
{% endtabs %}

## Edit an existing shape annotation programmatically

To modify an existing shape annotation programmatically, use the editAnnotation() method.

Here is an example of using editAnnotation():

```html
<button id="editLineAnnotation">Edit Line annotation Programmatically</button>
<button id="editArrowAnnotation">Edit Arrow annotation Programmatically</button>
<button id="editRectangleAnnotation">Edit Rectangle annotation Programmatically</button>
<button id="editCircleAnnotation">Edit Circle annotation Programmatically</button>
<button id="editPolygonAnnotation">Edit Polygon annotation Programmatically</button>
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
let editLineAnnotation = document.getElementById('editLineAnnotation');
if (editLineAnnotation) {
    editLineAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Line") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editArrowAnnotation = document.getElementById('editArrowAnnotation');
if (editArrowAnnotation) {
    editArrowAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
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
    });
}

let editRectangleAnnotation = document.getElementById('editRectangleAnnotation');
if (editRectangleAnnotation) {
    editRectangleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
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
    });
}

let editCircleAnnotation = document.getElementById('editCircleAnnotation');
if (editCircleAnnotation) {
    editCircleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
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
    });
}

let editPolygonAnnotation = document.getElementById('editPolygonAnnotation');
if (editPolygonAnnotation) {
    editPolygonAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
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
let editLineAnnotation = document.getElementById('editLineAnnotation');
if (editLineAnnotation) {
    editLineAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
            for (let i = 0; i < pdfviewer.annotationCollection.length; i++) {
                if (pdfviewer.annotationCollection[i].subject === "Line") {
                    pdfviewer.annotationCollection[i].strokeColor = "#0000FF";
                    pdfviewer.annotationCollection[i].thickness = 2;
                    pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
                    pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
                }
            }
        }
    });
}

let editArrowAnnotation = document.getElementById('editArrowAnnotation');
if (editArrowAnnotation) {
    editArrowAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
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
    });
}

let editRectangleAnnotation = document.getElementById('editRectangleAnnotation');
if (editRectangleAnnotation) {
    editRectangleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
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
    });
}

let editCircleAnnotation = document.getElementById('editCircleAnnotation');
if (editCircleAnnotation) {
    editCircleAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
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
    });
}

let editPolygonAnnotation = document.getElementById('editPolygonAnnotation');
if (editPolygonAnnotation) {
    editPolygonAnnotation.addEventListener('click', function () {
        if (pdfviewer) {
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
    });
}

{% endhighlight %}
{% endtabs %}

## Editing the properties of the shape annotation

The fill color, stroke color, thickness, and opacity of shape annotations can be edited using the Edit Color, Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![Edit fill color for shapes](../images/shape_fillColor.png)

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

![Line properties dialog](../images/shape_lineprty.png)

## Set default properties during control initialization

The following properties can be used to set default shape annotation properties:

- **lineSettings**: Default LineSettingsModel. See [LineSettings API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#linesettings)
- **arrowSettings**: Default ArrowSettingsModel. See [ArrowSettings API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#arrowsettings)
- **rectangleSettings**: Default RectangleSettingsModel. See [RectangleSettings API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#rectanglesettings)
- **circleSettings**: Default CircleSettingsModel. See [CircleSettings API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#circlesettings)
- **polygonSettings**: Default PolygonSettingsModel. See [PolygonSettings API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#polygonsettings)

Default properties for shape annotations can be set before creating the control using LineSettings, ArrowSettings, RectangleSettings, CircleSettings, and PolygonSettings.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    resourceUrl : "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
                    lineSettings : {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'},
                    arrowSettings : {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'},
                    rectangleSettings : {fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'},
                    circleSettings : {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'},
                    polygonSettings : {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'}
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer',
                    lineSettings : {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'},
                    arrowSettings : {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'},
                    rectangleSettings : {fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'},
                    circleSettings : {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'},
                    polygonSettings : {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'}
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
                              ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## Enable or disable shape label visibility

Enables or disables the display of shape labels in the PDF Viewer; defaults to true. For more information, see [enableShapeLabel API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#enableshapelabel)

```js
// Enable or disable shape labels.
viewer.enableShapeLabel = true;
```

## Configure shape label settings

Defines the settings for shape labels using the [ShapeLabelSettingsModel] API. For more information, see [shapeLabelSettings API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#shapelabelsettings)

```js
// Change the shape label settings.
viewer.shapeLabelSettings = { 
    opacity: 1, 
    fillColor: '#9c2592',
    borderColor: '#ff0000', 
    fontColor: '#000', 
    fontSize: 16, 
    labelHeight: 24.6, 
    labelMaxWidth: 151, 
    labelContent: 'XYZ' 
};
````