---
layout: post
title: Shape annotation in React Pdfviewer component | Syncfusion
description: Learn here all about Shape annotation in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Shape annotation
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Shape annotation in React Pdfviewer component

The PDF Viewer control provides the options to add, edit, and delete the shape annotations. The shape annotation types supported in the PDF Viewer control are:

* Line
* Arrow
* Rectangle
* Circle
* Polygon

![ShapeAnnotation](../images/shape_annot.png)

## Adding a shape annotation to the PDF document

Shape annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Shape Annotation** drop-down button. A drop-down pop-up will appear and shows the shape annotations to be added.
* Select the shape types to be added to the page in the drop-down pop-up. It enables the selected shape annotation mode.
* You can add the shapes over the pages of the PDF document.

In the pan mode, if the shape annotation mode is entered, the PDF Viewer control will switch to text select mode.

![ShapeTool](../images/shape_toolbar.png)

Refer to the following code sample to switch to the circle annotation mode.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function circleMode() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.setAnnotationMode('Circle');
  }
  return (<div>
    <button onClick={circleMode}>Circle</button>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function circleMode() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.setAnnotationMode('Circle');
  }
  return (<div>
    <button onClick={circleMode}>Circle</button>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Adding a shape annotation to the PDF document Programmatically

With the PDF Viewer library, you can add a shape annotation to the PDF Viewer control programmatically using the [**addAnnotation()**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation/#addannotationn) method.

Here's a example of how you can utilize the **addAnnotation()** method to include a shape annotation programmatically:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {

  function addLineAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Line", {
      offset: { x: 200, y: 230 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
    });
  }
  function addArrowAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Arrow", {
      offset: { x: 200, y: 370 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
    });
  }
  function addRectangleAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Rectangle", {
      offset: { x: 200, y: 500 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
    });
  }
  function addCircleAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Circle", {
      offset: { x: 200, y: 630 },
      pageNumber: 1,
      width: 90,
      height: 90
    });
  }
  function addPolygonAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Polygon", {
      offset: { x: 200, y: 800 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
    });
  }
  return (<div>
    <button onClick={addLineAnnotation}>add Line Annotation programatically</button>
    <button onClick={addArrowAnnotation}>add Arrow Annotation programatically</button>
    <button onClick={addRectangleAnnotation}>add Rectangle Annotation programatically</button>
    <button onClick={addCircleAnnotation}>add Circle Annotation programatically</button>
    <button onClick={addPolygonAnnotation}>add Polygon Annotation programatically</button>
    <div className='control-section'>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {

  function addLineAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Line", {
      offset: { x: 200, y: 230 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
    });
  }
  function addArrowAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Arrow", {
      offset: { x: 200, y: 370 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 370 }, { x: 350, y: 370 }]
    });
  }
  function addRectangleAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Rectangle", {
      offset: { x: 200, y: 500 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
    });
  }
  function addCircleAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Circle", {
      offset: { x: 200, y: 630 },
      pageNumber: 1,
      width: 90,
      height: 90
    });
  }
  function addPolygonAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.addAnnotation("Polygon", {
      offset: { x: 200, y: 800 },
      pageNumber: 1,
      vertexPoints: [{ x: 200, y: 800 }, { x: 242, y: 771 }, { x: 289, y: 799 }, { x: 278, y: 842 }, { x: 211, y: 842 }, { x: 200, y: 800 }]
    });
  }
  return (<div>
    <button onClick={addLineAnnotation}>add Line Annotation programatically</button>
    <button onClick={addArrowAnnotation}>add Arrow Annotation programatically</button>
    <button onClick={addRectangleAnnotation}>add Rectangle Annotation programatically</button>
    <button onClick={addCircleAnnotation}>add Circle Annotation programatically</button>
    <button onClick={addPolygonAnnotation}>add Polygon Annotation programatically</button>
    <div className='control-section'>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Edit the existing shape annotation programmatically

To modify existing shape annotation in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF viewer programmatically, you can use the **editAnnotation()** method.

Here is an example of how you can use the **editAnnotation()** method:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {

  function editLineAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Line") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  function editArrowAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Arrow") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].fillColor = "#FFFF00";
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  function editRectangleAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Rectangle") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].fillColor = "#FFFF00";
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  function editCircleAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Circle") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].fillColor = "#FFFF00";
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  function editPolygonAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Polygon") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].fillColor = "#FFFF00";
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  return (<div>
    <button onClick={editLineAnnotation}>edit Line Annotation programatically</button>
    <button onClick={editArrowAnnotation}>edit Arrow Annotation programatically</button>
    <button onClick={editRectangleAnnotation}>edit Rectangle Annotation programatically</button>
    <button onClick={editCircleAnnotation}>edit Circle Annotation programatically</button>
    <button onClick={editPolygonAnnotation}>edit Polygon Annotation programatically</button>
    <div className='control-section'>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {

  function editLineAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Line") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  function editArrowAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Arrow") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].fillColor = "#FFFF00";
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  function editRectangleAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Rectangle") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].fillColor = "#FFFF00";
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  function editCircleAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Circle") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].fillColor = "#FFFF00";
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  function editPolygonAnnotation() {
    var viewer = document.getElementById('container').ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].subject === "Polygon") {
        viewer.annotationCollection[i].strokeColor = "#0000FF";
        viewer.annotationCollection[i].thickness = 2 ;
        viewer.annotationCollection[i].fillColor = "#FFFF00";
        viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
  return (<div>
    <button onClick={editLineAnnotation}>edit Line Annotation programatically</button>
    <button onClick={editArrowAnnotation}>edit Arrow Annotation programatically</button>
    <button onClick={editRectangleAnnotation}>edit Rectangle Annotation programatically</button>
    <button onClick={editCircleAnnotation}>edit Circle Annotation programatically</button>
    <button onClick={editPolygonAnnotation}>edit Polygon Annotation programatically</button>
    <div className='control-section'>
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Editing the properties of the shape annotation

The fill color, stroke color, thickness, and opacity of the shape annotation can be edited using the Edit color tool, Edit stroke color tool, Edit thickness tool, and Edit opacity tool in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![ShapeFillColor](../images/shape_fillColor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![ShapeStrokeColor](../images/shape_strokecolor.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit Thickness tool.

![ShapeThickness](../images/shape_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![ShapeOpacity](../images/shape_opacity.png)

### Editing the line properties

The properties of the line shapes such as line and arrow annotations can be edited using the Line Properties window. It can be opened by selecting the Properties option in the context menu that appears on right-clicking the line and arrow annotations.

Refer to the following code sample to set the default annotation settings.

![ShapeProperty](../images/shape_lineproperty.png)

### Edit annotation programmatically

We can edit the annotations programmatically using the **editAnnotation()** method.

Here is an example of how you can use this method to modify an annotation:
```
<button onclick="editAnnotation()()">Edit Annotation</button>

<script>

//Edit Annotation
function editAnnotation(){
var pdfviewer = document.getElementById('container').ej2_instances[0];
  pdfviewer.annotationModule.selectAnnotation(pdfviewer.annotationCollection[0].annotationId);
  pdfviewer.annotationCollection[0].opacity ="0.5";
  pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[0]);
}
</script>
```
### Delete annotation programmatically

We can delete a specific annotation using the **deleteAnnotationById()** method. This method is used to delete a specific annotation using its id.

Here is an example of how you can use this method to delete an annotation:

```
<button onclick="deleteAnnotationbyId()">Delete Annotation by ID</button>

<script>
  //Delete Annotation by id.
  function deleteAnnotationbyId() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
  }
</script>
```

## Setting default properties during the control initialization

The properties of the shape annotations can be set before creating the control using LineSettings, ArrowSettings, RectangleSettings, CircleSettings, and PolygonSettings.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent  ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
        lineSettings={{fillColor: 'blue', opacity: 0.6, strokeColor: 'green'}}
        arrowSettings={{fillColor: 'green', opacity: 0.6, strokeColor: 'blue'}}
        rectangleSettings={{fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'}}
        circleSettings={{fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'}}
        polygonSettings={{fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'}}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation,
         FormFields, FormDesigner, PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent  ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        lineSettings={{fillColor: 'blue', opacity: 0.6, strokeColor: 'green'}}
        arrowSettings={{fillColor: 'green', opacity: 0.6, strokeColor: 'blue'}}
        rectangleSettings={{fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'}}
        circleSettings={{fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'}}
        polygonSettings={{fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'}}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}