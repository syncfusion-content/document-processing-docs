---
layout: post
title: Radius annotation in JavaScript PDF Viewer | Syncfusion
description: Learn to add, edit, and customize Radius measurement annotations in Syncfusion JavaScript PDF Viewer with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Radius annotation in JavaScript PDF Viewer

Radius is a measurement annotation used to measure the radius of a circle in the PDF.

![Radius annotations overview](../annotation-images/radius-annot.png)

## Add Radius Annotation

### Add radius annotation via UI

Use the annotation toolbar:
- Click the Edit Annotation button in the PDF Viewer toolbar.
- Open the Measurement Annotation dropdown.
- Choose Radius, then draw on the page.

N> When in pan mode, selecting a measurement annotation switches the viewer to text select mode.

![Measurement toolbar](../../images/calibrate_tool.png)

### Add a radius annotation programmatically

#### Enable radius mode

The PDF Viewer component allows drawing Radius annotations programmatically after enabling Radius mode in button clicks.

```html
<button id="radiusMode">Radius</button>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('radiusMode').addEventListener('click', function() {
    pdfviewer.annotationModule.setAnnotationMode('Radius');
});
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('radiusMode').addEventListener('click', function() {
    pdfviewer.annotationModule.setAnnotationMode('Radius');
});
{% endhighlight %}
{% endtabs %}

#### Exit radius mode

```html
<button id="setNone">Normal Mode</button>
```

{% tabs %}
{% highlight js tabtitle="Common" %}
document.getElementById('setNone').addEventListener('click', function() {
    pdfviewer.annotationModule.setAnnotationMode('None');
});
{% endhighlight %}
{% endtabs %}

#### Add radius annotation

Add measurement annotations programmatically using the [addAnnotation()](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation#annotation) method.

```html
<button id="addRadiusAnnotation">Add Radius annotation programmatically</button>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addRadiusAnnotation').addEventListener('click', function() {
    pdfviewer.annotation.addAnnotation('Radius', {
        offset: { x: 200, y: 630 },
        pageNumber: 1,
        width: 90,
        height: 90
    });
});
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addRadiusAnnotation').addEventListener('click', function() {
    pdfviewer.annotation.addAnnotation('Radius', {
        offset: { x: 200, y: 630 },
        pageNumber: 1,
        width: 90,
        height: 90
    });
});
{% endhighlight %}
{% endtabs %}

## Edit Radius Annotation

### Edit radius annotation in UI

You can select, move, and resize Radius annotations directly in the viewer:
- Select a Radius measurement to show its handles.
- Move: drag the shape to reposition it on the page.
- Resize: drag the handles to adjust its size.
- Delete or access more options from the context menu.

### Edit the properties of radius annotations

The fill color, stroke color, thickness, and opacity can be edited using the Edit Color, Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

#### Edit fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![CalibrateFillColor](../../images/calibrate_fillcolor.png)

#### Edit stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![CalibrateStrokeColor](../../images/calibrate_stroke.png)

#### Edit thickness

Edit border thickness using the range slider provided in the Edit Thickness tool.

![CalibrateThickness](../../images/calibrate_thickness.png)

#### Edit opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![CalibrateOpacity](../../images/calibrate_opacity.png)

### Edit an existing radius annotation programmatically

Use editAnnotation on items from annotationCollection.

```html
<button id="editRadiusAnnotation">Edit Radius annotation programmatically</button>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('editRadiusAnnotation').addEventListener('click', function() {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === 'Radius calculation') {
            pdfviewer.annotationCollection[i].strokeColor = '#0000FF';
            pdfviewer.annotationCollection[i].thickness = 2;
            pdfviewer.annotationCollection[i].opacity = 0.8;
            pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
    }
});
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('editRadiusAnnotation').addEventListener('click', function() {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === 'Radius calculation') {
            pdfviewer.annotationCollection[i].strokeColor = '#0000FF';
            pdfviewer.annotationCollection[i].thickness = 2;
            pdfviewer.annotationCollection[i].opacity = 0.8;
            pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
    }
});
{% endhighlight %}
{% endtabs %}

## Default radius settings during initialization

Set default [radiusSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#radiussettings) before creating the control.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.radiusSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.radiusSettings = { fillColor: 'orange', opacity: 0.6, strokeColor: 'pink' };
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## Scale ratio and units

You can modify scale ratio and units using the Scale Ratio option in the context menu.

![Scale ratio](../../images/calibrate_scaleratio.png)

Supported units:
- Inch, Millimeter, Centimeter, Point, Pica, Feet

![Scale dialog](../../images/calibrate_scaledialog.png)

Set defaults via measurementSettings:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.measurementSettings = { scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' };
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.PageOrganizer
);

var pdfviewer = new ej.pdfviewer.PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.measurementSettings = { scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' };
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master)

## See also

- [Annotation Overview](../overview)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotations/create-modify-annotation)
- [Customize Annotation](../../annotations/customize-annotation)
- [Remove Annotation](../../annotations/delete-annotation)
- [Handwritten Signature](../../annotations/signature-annotation)
- [Export and Import Annotation](../../annotations/export-import/export-annotation)
- [Annotation in Mobile View](../../annotations/annotations-in-mobile-view)
- [Annotation Events](../../annotations/annotation-event)
- [Annotation API](../../annotations/annotations-api)
