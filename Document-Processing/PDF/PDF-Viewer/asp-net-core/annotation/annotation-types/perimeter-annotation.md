---
layout: post
title: Add Perimeter Measurement Annotations in ASP.NET Core PDF Viewer \ Syncfusion
description: Learn how to enable, draw, customize, and manage Perimeter measurement annotations in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Perimeter Measurement Annotations in ASP.NET Core PDF Viewer
Perimeter is a measurement annotation used to calculate the length around a closed polyline on a PDF page—useful for technical markups and reviews. 

![Perimeter overview](../../../javascript-es6/annotations/annotation-images/perimeter-annot.png)

## Enable Perimeter Measurement

In the ASP.NET Core PDF Viewer, annotation modules such as Perimeter annotation are enabled by default.

{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Add Perimeter Annotation

### Add Perimeter Annotation Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select **Measurement** → **Perimeter**.
3. Click multiple points to define the polyline; double‑click to close and finalize the perimeter.

![Measurement toolbar](../../images/calibrate_tool.png)

N> If Pan mode is active, choosing a measurement tool switches the viewer into the appropriate interaction mode for a smoother workflow.

### Enable Perimeter Mode
Programmatically switch the viewer into Perimeter mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function enablePerimeterMode() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.setAnnotationMode('Perimeter');
}
</script>
{% endhighlight %}
{% endtabs %}

#### Exit Perimeter Mode
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function exitPerimeterMode() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.setAnnotationMode('None');
}
</script>
{% endhighlight %}
{% endtabs %}

### Add Perimeter Programmatically
Use the [`addAnnotation`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation) API to draw a perimeter by providing multiple **vertexPoints**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addPerimeter() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.addAnnotation('Perimeter', {
    offset: { x: 200, y: 350 },
    pageNumber: 1,
    vertexPoints: [
      { x: 200, y: 350 },
      { x: 285, y: 350 },
      { x: 286, y: 412 }
    ]
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Customize Perimeter Appearance
Configure default properties using the [`Perimeter Settings`](https://ej2.syncfusion.com/aspnetcore/documentation/api/pdfviewer/index-default#perimetersettings) property (for example, default **fill color**, **stroke color**, **opacity**).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.perimeterSettings = { fillColor: 'blue', strokeColor: 'green', opacity: 0.6 };
}
</script>
{% endhighlight %}
{% endtabs %}

## Manage Perimeter (Move, Reshape, Edit, Delete)
- **Move**: Drag inside the shape to reposition it.
- **Reshape**: Drag any vertex handle to adjust points and shape.

### Edit Perimeter

#### Edit Perimeter (UI)

- Edit the **fill color** using the Edit Color tool.  
  ![Fill color](../../images/calibrate_fillcolor.png)
- Edit the **stroke color** using the Edit Stroke Color tool.  
  ![Stroke color](../../images/calibrate_stroke.png)
- Edit the **border thickness** using the Edit Thickness tool.  
  ![Thickness](../../images/calibrate_thickness.png)
- Edit the **opacity** using the Edit Opacity tool.  
  ![Opacity](../../images/calibrate_opacity.png)
- Open **Right Click → Properties** for additional line‑based options.
  ![Line properties](../../images/calibrate_lineprop.png)

#### Edit Perimeter Programmatically
Update properties and call `editAnnotation()`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function editPerimeterProgrammatically() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  for (var i = 0; i < viewer.annotationCollection.length; i++) {
    var ann = viewer.annotationCollection[i];
    if (ann.subject === 'Perimeter calculation') {
      ann.strokeColor = '#0000FF';
      ann.thickness = 2;
      ann.fillColor = '#FFFF00';
      viewer.annotation.editAnnotation(ann);
      break;
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}

### Delete Distance Annotation

Delete Distance Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization
Apply defaults for Perimeter using the [`perimeterSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PerimeterSettings) property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.perimeterSettings = { fillColor: 'green', strokeColor: 'blue', opacity: 0.6 };
}
</script>
{% endhighlight %}
{% endtabs %}

## Set Properties While Adding Individual Annotation
Pass per‑annotation values directly when calling [`addAnnotation`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addStyledPerimeter() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.addAnnotation('Perimeter', {
    offset: { x: 240, y: 360 },
    pageNumber: 1,
    vertexPoints: [
      { x: 240, y: 360 },
      { x: 320, y: 360 },
      { x: 330, y: 410 }
    ],
    strokeColor: '#1D4ED8',
    fillColor: '#DBEAFE',
    thickness: 2,
    opacity: 0.85
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Scale Ratio and Units

- Use **Scale Ratio** from the context menu to set the actual‑to‑page scale.  
  ![Scale ratio](../../images/calibrate_scaleratio.png)
- Supported units include **Inch, Millimeter, Centimeter, Point, Pica, Feet**.  
  ![Scale dialog](../../images/calibrate_scaledialog.png)

### Set Default Scale Ratio During Initialization
Configure scale defaults using [`measurementSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_MeasurementSettings).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
<script>
window.onload = function () {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.measurementSettings = { scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' };
}
</script>
{% endhighlight %}
{% endtabs %}

## Handle Perimeter Events

Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import
Perimeter measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
