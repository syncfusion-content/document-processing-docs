---
layout: post
title: Ink (freehand) annotation in JavaScript PDF Viewer | Syncfusion
description: Learn to add, edit, delete, and set defaults for Ink (freehand) annotations in Syncfusion JavaScript PDF Viewer with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Ink (freehand) annotation in JavaScript PDF Viewer

Ink is a freehand drawing annotation used to sketch, sign, or mark up content.

![Ink annotations overview](../../images/ink_annotation.png)

## Add Ink Annotation

### Add ink annotation via UI

Use the annotation toolbar:
- Click the Edit Annotation button in the PDF Viewer toolbar.
- Click the Draw Ink button to enable ink mode.
- Draw on any page of the PDF document.

![Ink tool in the annotation toolbar](../../images/ink_tool.png)

### Enable ink mode

The PDF Viewer component allows add ink annotations programmatically after enabling ink mode in button clicks.

```html
<button id="addInkAnnotation">Ink Annotation</button>
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

document.getElementById('addInkAnnotation').addEventListener('click', function () {
    pdfviewer.annotationModule.setAnnotationMode('Ink');
});
{% endhighlight %}
{% endtabs %}

#### Exit ink mode

```html
<button id="setNone">Normal Mode</button>
```

{% tabs %}
{% highlight js tabtitle="Common" %}
var setNone = document.getElementById('setNone');
if (setNone) {
    setNone.addEventListener('click', function () {
        pdfviewer.annotationModule.setAnnotationMode('None');
    });
}
{% endhighlight %}
{% endtabs %}

### Add ink annotation programmatically

Use addAnnotation to programmatically create an Ink annotation.

```html
<button id="addInkAnnotationProgram"> Add Ink Annotation Programmatically</button>
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

document.getElementById('addInkAnnotationProgram').addEventListener('click', function () {
    pdfviewer.annotation.addAnnotation('Ink', {
        offset: { x: 150, y: 100 },
        pageNumber: 1,
        width: 200,
        height: 60,
        path: '[{"command":"M","x":244.83,"y":982.00},{"command":"L","x":250.83,"y":953.33}]'
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

document.getElementById('addInkAnnotationProgram').addEventListener('click', function () {
    pdfviewer.annotation.addAnnotation('Ink', {
        offset: { x: 150, y: 100 },
        pageNumber: 1,
        width: 200,
        height: 60,
        path: '[{"command":"M","x":244.83,"y":982.00},{"command":"L","x":250.83,"y":953.33}]'
    });
});
{% endhighlight %}
{% endtabs %}

## Edit Ink Annotation

### Edit ink annotation in UI

You can select, move, and resize Ink annotations directly in the viewer:
- Select an Ink annotation to show its handles.
- Move: drag inside the stroke to reposition it on the page.
- Resize: drag the selector handles to adjust its bounds.
- Delete or access more options from the context menu.

#### Edit the properties of ink annotations

Stroke color, thickness, and opacity can be edited using the Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

#### Edit stroke color

Edit the stroke color using the color palette in the Edit Stroke Color tool.

![Change ink stroke color](../../images/ink_strokecolor.png)

#### Edit thickness

Edit thickness using the range slider in the Edit Thickness tool.

![Change ink thickness](../../images/ink_thickness.png)

#### Edit opacity

Edit opacity using the range slider in the Edit Opacity tool.

![Change ink opacity](../../images/ink_opacity.png)

### Edit an existing ink annotation programmatically

Use editAnnotation to modify properties and bounds of an existing ink annotation.

```html
<button id="editInkAnnotation"> Edit Ink Annotation Programmatically</button>
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

document.getElementById('editInkAnnotation').addEventListener('click', function () {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].shapeAnnotationType === 'Ink') {
            var width = pdfviewer.annotationCollection[i].bounds.width;
            var height = pdfviewer.annotationCollection[i].bounds.height;
            pdfviewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
            pdfviewer.annotationCollection[i].strokeColor = '#0000FF';
            pdfviewer.annotationCollection[i].thickness = 2;
            pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = 'Circle';
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

document.getElementById('editInkAnnotation').addEventListener('click', function () {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].shapeAnnotationType === 'Ink') {
            var width = pdfviewer.annotationCollection[i].bounds.width;
            var height = pdfviewer.annotationCollection[i].bounds.height;
            pdfviewer.annotationCollection[i].bounds = { x: 100, y: 100, width: width, height: height };
            pdfviewer.annotationCollection[i].strokeColor = '#0000FF';
            pdfviewer.annotationCollection[i].thickness = 2;
            pdfviewer.annotationCollection[i].annotationSelectorSettings.resizerShape = 'Circle';
            pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
    }
});
{% endhighlight %}
{% endtabs %}

## Default ink settings during initialization

Set defaults using inkAnnotationSettings.

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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.inkAnnotationSettings = { author: 'Syncfusion', strokeColor: 'green', thickness: 3, opacity: 0.6 };

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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.inkAnnotationSettings = { author: 'Syncfusion', strokeColor: 'green', thickness: 3, opacity: 0.6 };

pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## Set properties while adding Individual Annotation

Set properties for individual annotation before creating the control using `InkSettings`.

> After editing default color and opacity using the Edit Color and Edit Opacity tools, the values update to the selected settings.

Refer to the following code snippet to set the default Ink settings.

```html
<button id="Ink">Add Ink</button>
```
{% tabs %}
{% highlight ts tabtitle="Standalone" %}
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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

//Apply Ink Settings while adding individual Annotation
document.getElementById('Ink')?.addEventListener('click', function () {
     pdfviewer.annotation.addAnnotation('Ink', {
        offset: { x: 150, y: 100 },
        pageNumber: 1,
        width: 200,
        height: 60,
        path: '[{"command":"M","x":244.83,"y":982.00},{"command":"L","x":250.83,"y":953.33}]',
        author: 'Syncfusion', strokeColor: 'green', thickness: 3, opacity: 0.6 
    });
});
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/form-designer.pdf';
pdfviewer.serviceUrl= 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

//Apply Ink Settings while adding individual Annotation
document.getElementById('Ink')?.addEventListener('click', function () {
     pdfviewer.annotation.addAnnotation('Ink', {
        offset: { x: 150, y: 100 },
        pageNumber: 1,
        width: 200,
        height: 60,
        path: '[{"command":"M","x":244.83,"y":982.00},{"command":"L","x":250.83,"y":953.33}]',
        author: 'Syncfusion', strokeColor: 'green', thickness: 3, opacity: 0.6 
    });
});
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