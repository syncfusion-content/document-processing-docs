---
layout: post
title: Annotation Toolbar in JavaScript PDF Viewer control | Syncfusion
description: Learn here all about annotation toolbar customization in Syncfusion JavaScript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Annotation Toolbar Customization
publishingplatform: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation Toolbar Customization in JavaScript

The annotation toolbar can be customized by showing or hiding default items and by controlling the order in which they appear.

## Show or hide the annotation toolbar

Show or hide the annotation toolbar programmatically during initialization or at runtime.

Use the [EnableAnnotationToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pdfViewerModel/#enableannotationtoolbar) property or the [showAnnotationToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar/#showannotationtoolbar) method to toggle visibility.

The following code snippet explains how to show or hide the annotation toolbar using the `showAnnotationToolbar` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');

document.getElementById('set').addEventListener('click', function () {
    pdfviewer.toolbar.showAnnotationToolbar(false);
});

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 tailwind3 theme -->
        <link href="https://cdn.syncfusion.com/ej2/31.2.2/tailwind3.css" rel="stylesheet" type="text/css"/>
        <!-- Essential JS 2 PDF Viewer's global script -->
        <script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js" type="text/javascript"></script>
    </head>
    <body>
        <button id="set">Change Annotation Toolbar Visibility</button>
        <div id='container'>
            <div id='PdfViewer' style="height:500px;width:100%;">
            </div>
        </div>
    </body>
</html>

{% endhighlight %}
{% endtabs %}

## How to customize the annotation toolbar

Choose which tools appear and control their order in the annotation toolbar.

Use [`PdfViewerToolbarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings/) with the [`AnnotationToolbarItems`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings/#annotationtoolbaritems) property to choose which tools are displayed in the annotation toolbar. The property accepts a list of [`AnnotationToolbarItem`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationToolbarItem/) values. Only the items included in this list are shown; any item not listed is hidden. The rendered order follows the sequence of items in the list.

The annotation toolbar is presented when entering annotation mode in PDF Viewer and adapts responsively based on the available width. Include the Close tool to allow users to exit the annotation toolbar when needed.

The following example demonstrates how to customize the annotation toolbar by specifying a selected set of tools using `AnnotationToolbarItem`.

{% tabs %}
{% highlight js tabtitle="index.js" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
    toolbarSettings: {
        annotationToolbarItems: [
            "HighlightTool",
            "UnderlineTool",
            "StrikethroughTool",
            "SquigglyTool",
            "ColorEditTool",
            "OpacityEditTool",
            "AnnotationDeleteTool",
            "StampAnnotationTool",
            "HandWrittenSignatureTool",
            "InkAnnotationTool",
            "ShapeTool",
            "CalibrateTool",
            "StrokeColorEditTool",
            "ThicknessEditTool",
            "FreeTextAnnotationTool",
            "FontFamilyAnnotationTool",
            "FontSizeAnnotationTool",
            "FontStylesAnnotationTool",
            "FontAlignAnnotationTool",
            "FontColorAnnotationTool",
            "CommentPanelTool"
        ]
    }
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 tailwind3 theme -->
        <link href="https://cdn.syncfusion.com/ej2/31.2.2/tailwind3.css" rel="stylesheet" type="text/css"/>
        <!-- Essential JS 2 PDF Viewer's global script -->
        <script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js" type="text/javascript"></script>
    </head>
    <body>
        <div id='container'>
            <div id='PdfViewer' style="height:500px;width:100%;">
            </div>
        </div>
    </body>
</html>

{% endhighlight %}
{% endtabs %}
