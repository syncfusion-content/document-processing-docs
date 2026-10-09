---
layout: post
title: Perimeter Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Enable, draw, customize, and manage Perimeter measurement annotations in the ASP.NET MVC PDF Viewer to calculate the perimeter of a region.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Perimeter Annotation in ASP.NET MVC PDF Viewer

Perimeter is a measurement annotation used to calculate the length around a closed polyline on a PDF page—useful for technical markups and reviews.

![Perimeter overview](../../images/calibrate_annotation.png)

## Enable Perimeter Measurement

To enable Perimeter annotations, inject the **PdfViewer** with the **Annotation** module.

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

## Add Perimeter Annotation

### Add Perimeter Annotation Using the Toolbar

1. Open the **Annotation Toolbar**.
2. Select **Measurement** → **Perimeter**.
3. Click multiple points to define the polyline; double-click to close and finalize the perimeter.

![Measurement toolbar](../../images/calibrate_tool.png)

N> If Pan mode is active, choosing a measurement tool switches the viewer into the appropriate interaction mode for a smoother workflow.

### Enable Perimeter Mode
Programmatically switch the viewer into Perimeter mode.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="enablePerimeter" onclick="enablePerimeterMode()">Enable Perimeter Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function enablePerimeterMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('Perimeter');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="enablePerimeter" onclick="enablePerimeterMode()">Enable Perimeter Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
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

<button id="exitPerimeter" onclick="exitPerimeterMode()">Exit Perimeter Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitPerimeterMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exitPerimeter" onclick="exitPerimeterMode()">Exit Perimeter Mode</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exitPerimeterMode() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.setAnnotationMode('None');
    }
</script>

{% endhighlight %}
{% endtabs %}

### Add Perimeter Programmatically
Use the **addAnnotation** method to draw a perimeter by providing multiple **vertexPoints**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addPerimeter" onclick="addPerimeter()">Add Perimeter Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addPerimeter() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Perimeter", {
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
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addPerimeter" onclick="addPerimeter()">Add Perimeter Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addPerimeter() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Perimeter", {
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
Configure default properties using the **perimeterSettings** property (for example, default **fill color**, **stroke color**, **opacity**).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PerimeterSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings { FillColor = "blue", StrokeColor = "green", Opacity = 0.6 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PerimeterSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings { FillColor = "blue", StrokeColor = "green", Opacity = 0.6 }).Render()
</div>

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
- Open **Right Click → Properties** for additional line-based options.  
  ![Line properties](../../images/calibrate_lineprop.png)

#### Edit Perimeter Programmatically
Update properties and call **editAnnotation()**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editPerimeter" onclick="editPerimeter()">Edit Perimeter Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editPerimeter() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Perimeter calculation') {
                viewer.annotationCollection[i].strokeColor = '#0000FF';
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = '#FFFF00';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="editPerimeter" onclick="editPerimeter()">Edit Perimeter Annotation programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editPerimeter() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Perimeter calculation') {
                viewer.annotationCollection[i].strokeColor = '#0000FF';
                viewer.annotationCollection[i].thickness = 2;
                viewer.annotationCollection[i].fillColor = '#FFFF00';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

### Delete Perimeter Annotation

Delete Perimeter Annotation via UI (toolbar/context menu) or programmatically. For supported workflows and APIs, see [**Delete Annotation**](../delete-annotation).

## Set Default Properties During Initialization
Apply defaults for Perimeter using the **perimeterSettings** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PerimeterSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings { FillColor = "green", StrokeColor = "blue", Opacity = 0.6 }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PerimeterSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerPerimeterSettings { FillColor = "green", StrokeColor = "blue", Opacity = 0.6 }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Set Properties While Adding Individual Annotations
Pass per-annotation values directly when calling **addAnnotation**.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addStyledPerimeter" onclick="addStyledPerimeter()">Add styled Perimeter programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addStyledPerimeter() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Perimeter", {
            offset: { x: 200, y: 350 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 350 },
                { x: 285, y: 350 },
                { x: 286, y: 412 }
            ],
            strokeColor: '#059669',
            fillColor: '#D1FAE5',
            thickness: 2,
            opacity: 0.9
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addStyledPerimeter" onclick="addStyledPerimeter()">Add styled Perimeter programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addStyledPerimeter() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Perimeter", {
            offset: { x: 200, y: 350 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 350 },
                { x: 285, y: 350 },
                { x: 286, y: 412 }
            ],
            strokeColor: '#059669',
            fillColor: '#D1FAE5',
            thickness: 2,
            opacity: 0.9
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

## Handle Perimeter Events

Listen to annotation life-cycle events (add/modify/select/remove). For the full list and parameters, see [**Annotation Events**](../annotation-event).

## Export and Import
Perimeter measurements can be exported or imported with other annotations. For workflows and supported formats, see [**Export and Import annotations**](../export-import/export-annotation).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import/export-annotation)
- [Delete Annotations](../delete-annotation)
