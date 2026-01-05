---
layout: post
title: Squiggly annotation in JavaScript PDF Viewer | Syncfusion
description: Learn to add, edit, delete, and customize Squiggly text markup annotations in Syncfusion JavaScript PDF Viewer, with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Squiggly annotation in JavaScript PDF Viewer

The PDF Viewer provides options to add, edit, and delete Squiggly text markup annotations on text. You can add squiggles via the UI (context menu or annotation toolbar) and programmatically. You can also customize color, opacity, author/subject, and default settings, and use undo/redo, save, print, or disable them as needed.

![Squiggly annotations overview](../../images/squiggly_button.png)

## Add Squiggly Annotation

### Add squiggly annotation in UI

You can add squiggly annotations in two ways:

1. Using the context menu
* Select text in the PDF document and right-click it.
* Choose **Squiggly** in the context menu.

![Squiggly context](../../images/squiggly_context.png)

2. Using the annotation toolbar
* Click the **Edit Annotation** button in the PDF Viewer toolbar to open the annotation toolbar.
* Select **Squiggly** to enable squiggly mode.
* Select text to add the squiggly annotation.
* Alternatively, select text first and then click **Squiggly**.

![Squiggly toolbar](../../images/squiggly_button.png)

N> When in pan mode, selecting a text markup annotation switches the PDF Viewer to text select mode.

Enable/exit squiggly mode using the following code:

```html
<button id="squigglyMode">Squiggly</button>
<button id="setNone">Normal Mode</button>
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
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('squigglyMode').addEventListener('click', function () {
    pdfviewer.annotation.setAnnotationMode('Squiggly');
});

document.getElementById('setNone').addEventListener('click', function () {
    pdfviewer.annotation.setAnnotationMode('None');
});
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
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('squigglyMode').addEventListener('click', function () {
    pdfviewer.annotation.setAnnotationMode('Squiggly');
});

document.getElementById('setNone').addEventListener('click', function () {
    pdfviewer.annotation.setAnnotationMode('None');
});
{% endhighlight %}
{% endtabs %}

### Add squiggly annotation programmatically

Add squiggly annotations programmatically using the [addAnnotation](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation#addannotation) method.

```html
<button id="addSquiggly">Add Squiggly annotation programmatically</button>
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
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addSquiggly').addEventListener('click', function () {
    pdfviewer.annotation.addAnnotation('Squiggly', {
        bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
        pageNumber: 1
    });
});
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
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addSquiggly').addEventListener('click', function () {
    pdfviewer.annotation.addAnnotation('Squiggly', {
        bounds: [{ x: 97, y: 110, width: 350, height: 14 }],
        pageNumber: 1
    });
});
{% endhighlight %}
{% endtabs %}

## Edit Squiggly Annotation

### Edit squiggly annotation in UI

You can select and delete squiggly annotations directly in the viewer. Use the context menu or toolbar options as needed.

Delete the selected annotation in the following ways:

1. Using the Delete/Backspace key
    * Select the annotation.
    * Press Delete (or Backspace). The selected annotation is removed.

2. Using the annotation toolbar
    * Select the annotation.
    * Click **Delete Annotation** in the annotation toolbar. The selected annotation is removed.

![Delete button](../../images/delete_button.png)

#### Edit squiggly annotation properties in UI

The color and opacity of the squiggly annotation can be edited using the Edit Color and Edit Opacity tools in the annotation toolbar.

- Edit color: Use the color palette in the Edit Color tool to change the annotation color.

![Edit color](../../images/edit_color.png)

- Edit opacity: Use the range slider in the Edit Opacity tool to change annotation opacity.

![Edit opacity](../../images/edit_opacity.png)

### Edit a squiggly annotation programmatically

To modify an existing squiggly annotation programmatically, use the editAnnotation() method.

```html
<button id="editSquiggly">Edit Squiggly annotation programmatically</button>
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
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('editSquiggly').addEventListener('click', function () {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        var ann = pdfviewer.annotationCollection[i];
        if (ann.author === 'Guest User' || ann.subject === 'Corrections') {
            ann.color = '#ff0000';
            ann.opacity = 0.8;
            pdfviewer.annotation.editAnnotation(ann);
        }
    }
});
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
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

document.getElementById('editSquiggly').addEventListener('click', function () {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        var ann = pdfviewer.annotationCollection[i];
        if (ann.author === 'Guest User' || ann.subject === 'Corrections') {
            ann.color = '#ff0000';
            ann.opacity = 0.8;
            pdfviewer.annotation.editAnnotation(ann);
        }
    }
});
{% endhighlight %}
{% endtabs %}

## Set default properties during control initialization

Set default properties before creating the control using `squigglySettings`.

> After editing default color and opacity using the Edit Color and Edit Opacity tools, the values update to the selected settings.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.Annotation
);

var pdfviewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  squigglySettings: { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9}
});
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.Annotation
);

var pdfviewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  squigglySettings: { author: 'Guest User', subject: 'Corrections', color: '#00ff00', opacity: 0.9}
});
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## Perform undo and redo

The PDF Viewer supports undo and redo for squiggly annotations:

* Adding squiggly annotations
* Deleting squiggly annotations
* Changing color or opacity

Undo and redo actions can be performed in the following ways:

1. Using keyboard shortcuts:
    After a squiggly annotation action, press Ctrl+Z to undo and Ctrl+Y to redo.
2. Using the toolbar:
    Use the **Undo** and **Redo** tools in the toolbar.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var pdfviewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');

document.getElementById('undo').addEventListener('click', function () {
    pdfviewer.undo();
});

document.getElementById('redo').addEventListener('click', function () {
    pdfviewer.redo();
});
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.FormDesigner,
    ej.pdfviewer.FormFields
);

var pdfviewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
});
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('undo').addEventListener('click', function () {
    pdfviewer.undo();
});

document.getElementById('redo').addEventListener('click', function () {
    pdfviewer.redo();
});
{% endhighlight %}
{% endtabs %}

## Disable squiggly annotation

Disable text markup annotations (including squiggly) using the `enableTextMarkupAnnotation` property.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.Annotation
);

var pdfviewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', enableTextMarkupAnnotation: false });
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
var PdfViewer = ej.pdfviewer.PdfViewer;
PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection,
    ej.pdfviewer.Annotation
);

var pdfviewer = new PdfViewer({ documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', enableTextMarkupAnnotation: false });
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
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
