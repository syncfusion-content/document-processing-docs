---
layout: post
title: Arrow Annotation (Shape) in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to enable, apply, customize, and manage Arrow annotations in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Arrow Annotation (Shape) in ASP.NET Core PDF Viewer
Arrow annotations let users point, direct attention, or indicate flow on PDFs—useful for callouts, direction markers, and connectors during reviews. You can add arrows from the toolbar, switch to arrow mode programmatically, customize appearance, edit/delete them in the UI, and export them with the document.

![Arrow overview](../../../javascript-es6/annotations/annotation-images/arrow-annot.png)

## Enable Arrow Annotation in the Viewer

To enable Arrow annotations, inject the following modules into the ASP.NET Core PDF Viewer:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
           documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
           resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Add Arrow Annotation

### Add Arrow Annotation Using the Toolbar
1. Open the **Annotation Toolbar**.
2. Select **Shapes** → **Arrow**.
3. Click and drag on the PDF page to draw the arrow.

![Shape toolbar](../../images/shape_toolbar.png)

N> When in Pan mode, selecting a shape tool automatically switches the viewer to selection mode for smooth interaction.

### Enable Arrow Mode
Switch the viewer into arrow mode using `setAnnotationMode('Arrow')`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function enableArrowMode() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.setAnnotationMode('Arrow');
}
</script>
{% endhighlight %}
{% endtabs %}

#### Exit Arrow Mode
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function exitArrowMode() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.setAnnotationMode('None');
}
</script>
{% endhighlight %}
{% endtabs %}

### Add Arrow Programmatically
Use the [`addAnnotation`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation) API to draw an arrow at a specific location (defined by two **vertexPoints**).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addArrow() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  viewer.annotation.addAnnotation('Arrow', {
    offset: { x: 200, y: 370 },
    pageNumber: 1,
    vertexPoints: [
      { x: 200, y: 370 },
      { x: 350, y: 370 }
    ]
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Customize Arrow Appearance
Configure default arrow appearance (fill color, stroke color, thickness, opacity) using the [`arrowSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ArrowSettings) property.

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
    viewer.arrowSettings = { fillColor: '#ffff00', strokeColor: '#0066ff', thickness: 2, opacity: 0.9 };
  }
</script>
{% endhighlight %}
{% endtabs %}

N> For **Line** and **Arrow** annotations, **Fill Color** is available only when an arrowhead style is applied at the **Start** or **End**. If both are `None`, lines do not render fill and the Fill option remains disabled.

## Manage Arrow (Edit, Move, Resize, Delete)
### Edit Arrow 

#### Edit Arrow (UI)
- Select a Arrow to view resize handles.
- Drag endpoints to adjust length/angle.
- Edit stroke color, opacity, and thickness using the annotation toolbar.

![Shape tools](../../images/shape_toolbar.png)

Use the annotation toolbar:
- **Edit Color** tool  
![Edit color](../../../javascript-es6/images/edit_color.png)

- **Edit Opacity** slider
![Edit opacity](../../../javascript-es6/images/edit_opacity.png)

- **Line Properties** 
Open the Line Properties dialog via **Right Click → Properties**.

![Line properties dialog](../../../javascript-es6/images/shape_lineprty.png)

#### Edit Arrow Programmatically

Modify an existing Arrow programmatically using `editAnnotation()`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function editArrowProgrammatically() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
  for (var i = 0; i < viewer.annotationCollection.length; i++) {
    var annot = viewer.annotationCollection[i];
    if (annot.subject === 'Arrow') {
      annot.strokeColor = '#0000ff';
      annot.thickness = 2;
      annot.fillColor = '#ffff00';
      viewer.annotation.editAnnotation(annot);
      break;
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}

### Delete Arrow

The PDF Viewer supports deleting existing annotations through the UI and API.
See [**Delete Annotation**](../remove-annotations) for full behavior and workflows.

### Comments

Use the [**Comments panel**](../comments) to add, view, and reply to threaded discussions linked to arrow annotations. It provides a dedicated interface for collaboration and review within the PDF Viewer.

## Set properties while adding Individual Annotation

Set properties for individual arrow annotations by passing values directly during [`addAnnotation`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#addannotation).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<script>
function addMultipleArrows() {
  var viewer = document.getElementById('pdfviewer').ej2_instances[0];

  // Arrow 1
  viewer.annotation.addAnnotation('Arrow', {
    offset: { x: 200, y: 230 },
    pageNumber: 1,
    vertexPoints: [
      { x: 200, y: 230 },
      { x: 350, y: 230 }
    ],
    fillColor: '#ffff00',
    strokeColor: '#0066ff',
    thickness: 2,
    opacity: 0.9,
    author: 'User 1'
  });

  // Arrow 2
  viewer.annotation.addAnnotation('Arrow', {
    offset: { x: 220, y: 300 },
    pageNumber: 1,
    vertexPoints: [
      { x: 220, y: 300 },
      { x: 400, y: 300 }
    ],
    fillColor: '#ffef00',
    strokeColor: '#ff1010',
    thickness: 3,
    opacity: 0.9,
    author: 'User 2'
  });
}
</script>
{% endhighlight %}
{% endtabs %}

## Disable Arrow Annotation

Disable shape annotations (Line, Arrow, Rectangle, Circle, Polygon) using the [`enableShapeAnnotation`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableShapeAnnotation) property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:650px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:650px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   enableShapeAnnotation="false">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Handle Arrow Events

The PDF viewer provides annotation life-cycle events that notify when Arrow annotations are added, modified, selected, or removed.
For the full list of available events and their descriptions, see [**Annotation Events**](../annotation-event)

## Export and Import
The PDF Viewer supports exporting and importing annotations. For details on supported formats and workflows, see [**Export and Import annotations**](../export-import-annotations).

## See Also
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Customize Context Menu](../../context-menu/custom-context-menu)
- [Comments Panel](../comments)
- [Annotation Events](../annotation-event)
- [Export and Import annotations](../export-import-annotations)
- [Delete Annotations](../remove-annotations)
