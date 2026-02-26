---
layout: post
title: Free text annotation in JavaScript PDF Viewer | Syncfusion
description: Learn to add, edit, delete, and customize Free Text annotations in Syncfusion JavaScript PDF Viewer, with UI and programmatic examples.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Free text annotation in JavaScript PDF Viewer

Free Text is a text box annotation used to place formatted text anywhere on the page for notes, labels, or callouts.

![Free text](../annotation-images/free-text-annot.png)

## Add Free Text annotation

### Add Free Text annotation via UI

Use the annotation toolbar to:
- Click the **Edit Annotation** button in the PDF Viewer toolbar.
- Click the **Free Text Annotation** button to enable Free Text mode.
- Click on the page to add text.

N> When in pan mode, selecting Free Text switches the viewer to text select mode.

![Free text tool in the annotation toolbar](../annotation-images/free-text-annot.png)

### Switch to Free Text mode

The PDF Viewer component allows drawing free text annotations programmatically after enabling Free Text mode via button clicks.

```html
<button id="addFreeTextAnnotation">FreeText</button>
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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addFreeTextAnnotation').addEventListener('click', function () {
    pdfviewer.annotationModule.setAnnotationMode('FreeText');
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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.appendTo('#PdfViewer');

document.getElementById('addFreeTextAnnotation').addEventListener('click', function () {
    pdfviewer.annotationModule.setAnnotationMode('FreeText');
});
{% endhighlight %}
{% endtabs %}

### Add Free Text annotation programmatically

Use [addAnnotation()](https://ej2.syncfusion.com/documentation/api/pdfviewer/annotation#annotation) to programmatically create Free Text.

```html
<button id="addFreeTextProgram">Add FreeText Programmatically</button>
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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

pdfviewer.appendTo('#PdfViewer');

document.getElementById('addFreeTextProgram').addEventListener('click', function () {
    pdfviewer.annotation.addAnnotation('FreeText', {
        offset: { x: 120, y: 80 },
        fontSize: 16,
        fontFamily: 'Helvetica',
        pageNumber: 1,
        width: 200,
        height: 40,
        isLock: false,
        defaultText: 'Syncfusion'
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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.appendTo('#PdfViewer');

document.getElementById('addFreeTextProgram').addEventListener('click', function () {
    pdfviewer.annotation.addAnnotation('FreeText', {
        offset: { x: 120, y: 80 },
        fontSize: 16,
        fontFamily: 'Helvetica',
        pageNumber: 1,
        width: 200,
        height: 40,
        isLock: false,
        defaultText: 'Syncfusion'
    });
});
{% endhighlight %}
{% endtabs %}

## Edit Free Text annotation

### Edit Free Text Annotation in UI

You can select, move, and resize FreeText annotations directly in the viewer:
- Select a Free Text annotation to display its bounding box and resize handles.
- Move: drag the annotation box to reposition it on the page.
- Resize: drag any corner or edge handle to adjust its size.
- Delete: press the Delete key or use the context menu to remove the annotation.

Use the toolbar to change the appearance of the selected Free Text annotation:
- Font Family, Font Size, Font Style (Bold, Italic, Underline)
- Font Color and Text Alignment
- Fill Color (background) and Stroke Color (border)
- Border Thickness and Opacity

See the sections below for screenshots and details.

#### Edit the properties of free text annotations

Font family, font size, styles, font color, text alignment, fill color, stroke color, border thickness, and opacity can be edited using the Font Family, Font Size, Font Color, Text Align, Font Style, Edit Color, Edit Stroke Color, Edit Thickness, and Edit Opacity tools in the annotation toolbar.

#### Edit font family

Edit the font family by selecting a font in the Font Family tool.

![Change font family](../../images/fontfamily.png)

#### Edit font size

Edit the font size by selecting a size in the Font Size tool.

![Change font size](../../images/fontsize.png)

#### Edit font color

Edit the font color using the color palette in the Font Color tool.

![Change font color](../../images/fontcolor.png)

#### Edit text alignment

Align text by selecting an option from the Text Align tool.

![Set text alignment](../../images/textalign.png)

#### Edit text styles

Edit text styles by selecting options in the Font Style tool.

![Change text styles](../../images/fontstyle.png)

#### Edit fill color

Edit the fill color using the color palette in the Edit Color tool.

![Change fill color](../../images/fillcolor.png)

#### Edit stroke color

Edit the stroke color using the color palette in the Edit Stroke Color tool.

![Change stroke color](../../images/fontstroke.png)

#### Edit thickness

Edit border thickness using the range slider in the Edit Thickness tool.

![Change border thickness](../../images/fontthickness.png)

#### Edit opacity

Edit opacity using the range slider in the Edit Opacity tool.

![Change opacity](../../images/fontopacity.png)

### Edit Free Text annotation programmatically

Use editAnnotation to update existing Free Text content.

```html
<button id="changeContent">Change Content</button>
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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.resourceUrl = 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';

pdfviewer.appendTo('#PdfViewer');

document.getElementById('changeContent').addEventListener('click', function () {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === 'Text Box') {
            pdfviewer.annotationCollection[i].dynamicText = 'syncfusion';
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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

pdfviewer.appendTo('#PdfViewer');

document.getElementById('changeContent').addEventListener('click', function () {
    for (var i = 0; i < pdfviewer.annotationCollection.length; i++) {
        if (pdfviewer.annotationCollection[i].subject === 'Text Box') {
            pdfviewer.annotationCollection[i].dynamicText = 'syncfusion';
            pdfviewer.annotation.editAnnotation(pdfviewer.annotationCollection[i]);
        }
    }
});
{% endhighlight %}
{% endtabs %}





## Default Free Text settings during initialization

Set default Free Text properties before creating the control using freeTextSettings.

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
pdfviewer.freeTextSettings = { fillColor: 'green', borderColor: 'blue', fontColor: 'yellow' };
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
pdfviewer.documentPath = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
pdfviewer.freeTextSettings = { fillColor: 'green', borderColor: 'blue', fontColor: 'yellow' };
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

## Set properties while adding Individual Annotation

Set properties for individual annotations before creating the control using `FreeTextSettings`.

N> After editing default color and opacity using the Edit Color and Edit Opacity tools, the values update to the selected settings.

Refer to the following code snippet to set the default FreeText settings.

```html
<button id="FreeText">Add FreeText</button>
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
//Apply FreeText Settings while adding individual Annotation
document.getElementById('FreeText')?.addEventListener('click', function () {
  pdfviewer.annotation.addAnnotation('FreeText', {
    offset: { x: 120, y: 80 },
    fontSize: 16,
    fontFamily: 'Helvetica',
    pageNumber: 1,
    width: 200,
    height: 40,
    isLock: false,
    defaultText: 'Syncfusion',
    fillColor: 'green', 
    borderColor: 'blue', 
    fontColor: 'yellow'
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
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');
//Apply FreeText Settings while adding individual Annotation
document.getElementById('FreeText')?.addEventListener('click', function () {
  pdfviewer.annotation.addAnnotation('FreeText', {
    offset: { x: 120, y: 80 },
    fontSize: 16,
    fontFamily: 'Helvetica',
    pageNumber: 1,
    width: 200,
    height: 40,
    isLock: false,
    defaultText: 'Syncfusion',
    fillColor: 'green', 
    borderColor: 'blue', 
    fontColor: 'yellow'
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