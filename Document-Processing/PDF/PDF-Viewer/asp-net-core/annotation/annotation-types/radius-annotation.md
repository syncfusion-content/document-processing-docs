---
layout: post
title: Add Radius Measurement Annotations in ASP.NET Core PDF Viewer
| Syncfusion
description: Learn how to enable, draw, customize, and manage Radius measurement annotations in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Radius Measurement Annotations in ASP.NET Core PDF Viewer
Radius measurement annotations allow users to draw circular regions and calculate the radius visually.

![Radius overview](../../../javascript-es6/annotations/annotation-images/radius-annot.png)

## Enable Radius Measurement

In the ASP.NET Core PDF Viewer, annotation modules such as Radius annotation are enabled by default.

{% tabs %}
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

## Add Radius Annotation

### Add Radius Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Select **Measurement → Radius**.
3. Click and drag on the page to draw the radius.

![Measurement toolbar](../../images/calibrate_tool.png)

N> If Pan mode is active, selecting the Radius tool automatically switches interaction mode.

### Enable Radius Mode
Programmatically switch the viewer into Radius mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function enableRadiusMode() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.setAnnotationMode('Radius');
}
</script>
{% endhighlight %}
{% endtabs %}

#### Exit Radius Mode
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function exitRadiusMode() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.setAnnotationMode('None');
}
</script>
{% endhighlight %}
{% endtabs %}

### Add Radius Programmatically
Configure default properties using the [`Radius Settings`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RadiusSettings) property (for example, default **fill color**, **stroke color**, **opacity**).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addRadius() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.addAnnotation('Radius', {
    offset: { x: 200, y: 630 },
    pageNumber: 1,
    width: 90,
    height: 90
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Customize Radius Appearance
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
  viewer.radiusSettings = { fillColor: 'yellow', strokeColor: 'orange', opacity: 0.6 };
}
</script>
{% endhighlight %}
{% endtabs %}

## Manage Radius (Move, Reshape, Edit, Delete)
- **Move**: Drag inside the polygon to reposition it.
- **Reshape**: Drag any vertex handle to adjust points and shape.

### Edit Radius Annotation

#### Edit Radius (UI)

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

#### Edit Radius Programmatically

Update properties and call `editAnnotation()`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function editRadiusProgrammatically() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  for (var i = 0; i < viewer.annotationCollection.length; i++) {
    var ann = viewer.annotationCollection[i];
    if (ann.subject === 'Radius calculation') {
      ann.strokeColor = '#0000FF';
      ann.thickness = 2;
      ann.opacity = 0.8;
      viewer.annotation.editAnnotation(ann);
      break;
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}

### Delete Radius Annotation

Delete Radius Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../remove-annotations).

## Set Default Properties During Initialization
Apply defaults for Radius using the [`radiusSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RadiusSettings) property.

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
  viewer.radiusSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
}
</script>
{% endhighlight %}
{% endtabs %}

## Set Properties While Adding Individual Annotation
Apply defaults for Radius using the [`radiusSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RadiusSettings) property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addStyledRadius() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.addAnnotation('Radius', {
    offset: { x: 200, y: 630 },
    pageNumber: 1,
    width: 90,
    height: 90,
    fillColor: 'orange',
    opacity: 0.6,
    strokeColor: 'pink'
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Scale Ratio & Units
- Use **Scale Ratio** from the context menu.  
  ![Scale ratio](../../images/calibrate_scaleratio.png)
- Supported units: Inch, Millimeter, Centimeter, Point, Pica, Feet.  
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

## Handle Radius Events
Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import
Radius measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)

