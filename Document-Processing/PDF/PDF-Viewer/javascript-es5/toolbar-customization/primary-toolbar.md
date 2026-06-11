---
layout: post
title: Primary Toolbar in JavaScript PDF Viewer Component | Syncfusion
description: Learn here all about primary toolbar customization in Syncfusion JavaScript PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Primary Toolbar Customization in JavaScript PDF Viewer

The primary toolbar of the PDF Viewer can be customized by rearranging existing items, disabling default items, and adding custom items. New items can be inserted at a specific index among existing toolbar items to control placement.

## Show or hide the primary toolbar

Toggle the built-in primary toolbar to create custom toolbar experiences or simplify the UI. When a custom toolbar is required, hide the built-in toolbar. Use the [enableToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pdfViewerModel/#enabletoolbar) property or the [showToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar/#showtoolbar) method to show or hide the primary toolbar.method to show or hide the primary toolbar.

### Show or hide the toolbar using the `enableToolbar` property:

{% tabs %}
{% highlight js tabtitle="index.js" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection,
    ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    enableToolbar: false,
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
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
            <div id='pdfViewer' style="height:500px;width:100%;">
            </div>
        </div>
    </body>
</html>

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to show or hide the toolbar using the `showToolbar` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation,
  ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});
pdfviewer.appendTo('#PdfViewer');
document.getElementById('set').addEventListener('click', function () {
    pdfviewer.toolbar.showToolbar(false);
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
        <button id="set">show Toolbar Item</button>
        <div id='container'>
            <div id='PdfViewer' style="height:500px;width:100%;">
            </div>
        </div>
    </body>
</html>

{% endhighlight %}
{% endtabs %}
