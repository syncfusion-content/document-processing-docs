---
layout: post
title: Radius Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, draw, customize, and manage Radius measurement annotations in the ASP.NET MVC PDF Viewer to measure the radius of circular regions.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Radius Annotation in ASP.NET MVC PDF Viewer

Radius measurement annotations allow users to draw circular regions and calculate the radius visually.

![Radius overview](../../images/calibrate_annotation.png)

## Enable Radius Measurement

To enable Radius annotations, inject the **PdfViewer** with the **Annotation** module.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
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

<button id="enableRadius" onclick="enableRadiusMode()">Enable Radius Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enableRadiusMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Radius');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enableRadius" onclick="enableRadiusMode()">Enable Radius Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
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

<button id="exitRadius" onclick="exitRadiusMode()">Exit Radius Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitRadiusMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitRadius" onclick="exitRadiusMode()">Exit Radius Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitRadiusMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Radius Programmatically
Use the **addAnnotation** method to draw a radius at a specific location.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addRadius" onclick="addRadius()">Add Radius Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addRadius() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Radius", {
            offset: { x: 200, y: 630 },
            pageNumber: 1,
            width: 90,
            height: 90
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addRadius" onclick="addRadius()">Add Radius Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addRadius() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Radius", {
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
Configure default properties using the **radiusSettings** property (for example, default **fill color**, **stroke color**, **opacity**).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").RadiusSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings { FillColor = "yellow", StrokeColor = "orange", Opacity = 0.6 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").RadiusSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings { FillColor = "yellow", StrokeColor = "orange", Opacity = 0.6 }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Manage Radius (Move, Reshape, Edit, Delete)
- **Move**: Drag inside the radius annotation to reposition it.
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
- Open **Right Click → Properties** for additional line-based options.  
  ![Line properties](../../images/calibrate_lineprop.png)

#### Edit Radius Programmatically

Update properties and call **editAnnotation()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editRadius" onclick="editRadius()">Edit Radius Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editRadius() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Radius calculation') {
                viewer.annotationCollection[i].strokeColor = '#0000FF';
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].opacity = 0.8;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="editRadius" onclick="editRadius()">Edit Radius Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editRadius() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Radius calculation') {
                viewer.annotationCollection[i].strokeColor = '#0000FF';
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].opacity = 0.8;
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

### Delete Radius Annotation

Delete Radius Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../delete-annotation).

## Set Default Properties During Initialization
Apply defaults for Radius using the **radiusSettings** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").RadiusSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings { FillColor = "orange", Opacity = 0.6, StrokeColor = "pink" }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").RadiusSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRadiusSettings { FillColor = "orange", Opacity = 0.6, StrokeColor = "pink" }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Set Properties While Adding Individual Annotations
Pass per-annotation values directly when calling **addAnnotation**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addStyledRadius" onclick="addStyledRadius()">Add styled Radius programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addStyledRadius() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Radius", {
            offset: { x: 200, y: 630 },
            pageNumber: 1,
            width: 90,
            height: 90,
            strokeColor: '#EA580C',
            fillColor: '#FEF3C7',
            thickness: 2,
            opacity: 0.85
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addStyledRadius" onclick="addStyledRadius()">Add styled Radius programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addStyledRadius() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Radius", {
            offset: { x: 200, y: 630 },
            pageNumber: 1,
            width: 90,
            height: 90,
            strokeColor: '#EA580C',
            fillColor: '#FEF3C7',
            thickness: 2,
            opacity: 0.85
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Scale Ratio and Units
- Use **Scale Ratio** from the context menu to set the actual-to-page scale.  
  ![Scale ratio](../../images/calibrate_scaleratio.png)
- Supported units include **Inch, Millimeter, Centimeter, Point, Pica, Feet**.  
  ![Scale dialog](../../images/calibrate_scaledialog.png)

### Set Default Scale Ratio During Initialization
Configure scale defaults using **measurementSettings**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").MeasurementSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerMeasurementSettings { ScaleRatio = 2, ConversionUnit = "cm", DisplayUnit = "cm" }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").MeasurementSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerMeasurementSettings { ScaleRatio = 2, ConversionUnit = "cm", DisplayUnit = "cm" }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Handle Radius Events

Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import
Radius measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../export-import/export-annotation).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
