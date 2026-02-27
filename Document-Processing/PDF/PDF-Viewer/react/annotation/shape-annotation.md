---
layout: post
title: Shape annotation in React PDF Viewer control | Syncfusion
description: Learn about shape annotations in the Syncfusion React PDF Viewer (Essential JS 2), including add, edit, delete, and default settings.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Shape annotation in React PDF Viewer

The PDF Viewer provides tools to add, edit, and delete shape annotations. Supported shape types:

* Line
* Arrow
* Rectangle
* Circle
* Polygon

![Shape annotations overview](../images/shape_annot.png)

## Add a shape annotation

Shape annotations are available from the annotation toolbar.

- Open the annotation toolbar with the **Edit Annotation** button in the PDF Viewer toolbar.
- Use the **Shape Annotation** drop-down to choose the desired shape type.
- Select a shape type to enable its annotation mode, then draw the shape on the page.

N> When the viewer is in pan mode and a shape tool is selected, the viewer switches to text selection mode where applicable to ensure a smooth interaction.

![Shape annotation toolbar](../images/shape_toolbar.png)

The following sample shows how to switch the viewer to circle annotation mode.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
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

## Add a shape annotation to the PDF document programmatically

The PDF Viewer library allows adding shape annotations programmatically using the [addAnnotation()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation#annotation) method.

The following examples show how to add shape annotations programmatically using `addAnnotation()`.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
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

## Edit an existing shape annotation programmatically

Use the `editAnnotation()` method to modify existing shape annotations programmatically.

The following example demonstrates `editAnnotation()`.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
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

## Edit properties of shape annotations

Change fill color, stroke color, thickness, and opacity using the Edit Color, Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

### Edit fill color

Change the fill color using the color palette in the Edit Color tool.

![Edit fill color for shapes](../images/shape_fillColor.png)

### Edit stroke color

Change the stroke color using the Edit Stroke Color tool.

![Edit stroke color for shapes](../images/shape_strokecolor.png)

### Edit thickness

Adjust border thickness using the Edit Thickness range slider.

![Edit thickness for shapes](../images/shape_thickness.png)

### Edit opacity

Adjust opacity using the Edit Opacity range slider.

![Edit opacity for shapes](../images/shape_opacity.png)

### Line properties

Line and arrow annotations include additional options in the Line Properties dialog. Open it by right-clicking a line or arrow annotation and choosing Properties.

![Line properties dialog](../images/shape_lineproperty.png)

### Edit annotation programmatically

Modify annotations programmatically using the `editAnnotation()` method. The example below demonstrates selecting and editing an annotation.
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

Delete a specific annotation with `deleteAnnotationById()` by providing the annotation's id. The example below demonstrates usage.

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

## Set default properties during initialization

Default properties for shape annotations can be configured before creating the viewer using `lineSettings`, `arrowSettings`, `rectangleSettings`, `circleSettings`, and `polygonSettings`.

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
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
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

N> In both the Arrow and Line settings, the Fill Color option is available only when an arrowhead style is applied at the Start or End. If both Start and End arrowhead styles are set to `None`, lines do not support fill rendering and the Fill Color option is disabled. See Arrow settings and Line settings for API details.
