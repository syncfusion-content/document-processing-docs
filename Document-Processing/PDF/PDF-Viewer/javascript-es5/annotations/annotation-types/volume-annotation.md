---
layout: post
title: Volume annotation in JavaScript PDF Viewer | Syncfusion
description: Learn to add, edit, and customize Volume measurement annotations in Syncfusion JavaScript PDF Viewer with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Volume annotation in JavaScript PDF Viewer

Volume is a measurement annotation used to calculate the volume of a rectangular prism area in the PDF.

![Volume annotations overview](../annotation-images/volume-annot.png)

## Add Volume Annotation

### Add volume annotation via UI

Use the annotation toolbar to:
- Click the **Edit Annotation** button in the PDF Viewer toolbar.
- Open the **Measurement Annotation** dropdown.
- Choose **Volume**, then draw on the page.

N> When in pan mode, selecting measurement annotations switches the viewer to text select mode.

![Measurement toolbar](../../images/calibrate_tool.png)

### Enable volume mode

The PDF Viewer component allows drawing volume annotations programmatically after enabling volume mode via button clicks.

```html
<button id="volumeMode">Volume</button>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

var volumeModeBtn = document.getElementById('volumeMode');
if (volumeModeBtn) {
    volumeModeBtn.addEventListener('click', function () {
        pdfviewer.annotation.setAnnotationMode('Volume');
    });
}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.appendTo('#PdfViewer');

var volumeModeBtn = document.getElementById('volumeMode');
if (volumeModeBtn) {
    volumeModeBtn.addEventListener('click', function () {
        pdfviewer.annotation.setAnnotationMode('Volume');
    });
}
{% endhighlight %}
{% endtabs %}

#### Exit volume mode

```html
<button id="setNone">Normal Mode</button>
```

{% tabs %}
{% highlight js tabtitle="Common" %}
var setNoneBtn = document.getElementById('setNone');
if (setNoneBtn) {
    setNoneBtn.addEventListener('click', function () {
        pdfviewer.annotation.setAnnotationMode('None');
    });
}
{% endhighlight %}
{% endtabs %}

### Add volume annotations programmatically

Add volume annotations programmatically using the `addAnnotation` method.

```html
<button id="addVolumeAnnotation">Add Volume annotation programmatically</button>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

var addVolBtn = document.getElementById('addVolumeAnnotation');
if (addVolBtn) {
    addVolBtn.addEventListener('click', function () {
        pdfviewer.annotation.addAnnotation('Volume', {
            offset: { x: 200, y: 810 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }
            ]
        });
    });
}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.appendTo('#PdfViewer');

var addVolBtn = document.getElementById('addVolumeAnnotation');
if (addVolBtn) {
    addVolBtn.addEventListener('click', function () {
        pdfviewer.annotation.addAnnotation('Volume', {
            offset: { x: 200, y: 810 },
            pageNumber: 1,
            vertexPoints: [
                { x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }
            ]
        });
    });
}
{% endhighlight %}
{% endtabs %}

## Edit Volume Annotation

### Edit volume annotation in UI

Use the viewer to select, move, and resize Volume annotations:
- Select a Volume measurement to show its handles.
- Move: drag the shape to reposition it on the page.
- Resize: drag the handles to adjust its size.
- Delete or access more options from the context menu.

#### Edit the properties of volume annotations

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

### Edit an existing volume annotation programmatically

Use editAnnotation on items from annotationCollection.

```html
<button id="editVolumeAnnotation">Edit Volume annotation programmatically</button>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

var editVolBtn = document.getElementById('editVolumeAnnotation');
if (editVolBtn) {
    editVolBtn.addEventListener('click', function () {
        for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === 'Volume calculation') {
                pdfviewer.annotationCollection[i].strokeColor = '#0000FF';
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].opacity = 0.8;
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    });
}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.appendTo('#PdfViewer');

var editVolBtn = document.getElementById('editVolumeAnnotation');
if (editVolBtn) {
    editVolBtn.addEventListener('click', function () {
        for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
            if (pdfviewer.annotationCollection[i].subject === 'Volume calculation') {
                pdfviewer.annotationCollection[i].strokeColor = '#0000FF';
                pdfviewer.annotationCollection[i].thickness = 2;
                pdfviewer.annotationCollection[i].opacity = 0.8;
                pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
            }
        }
    });
}
{% endhighlight %}
{% endtabs %}

## Default volume settings during initialization

Set default [volumeSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#volumesettings) before creating the control.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.volumeSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.volumeSettings = { fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow' };
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
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.measurementSettings = { scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm' };
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
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

var pdfviewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
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
