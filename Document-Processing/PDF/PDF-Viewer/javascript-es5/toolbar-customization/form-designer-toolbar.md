---
layout: post
title: Form Designer Toolbar Customization in JavaScript PDF Viewer Component | Syncfusion
description: Learn here all about form designer toolbar customization in Syncfusion JavaScript PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form Designer Toolbar Customization in JavaScript

Customize the form designer toolbar by showing or hiding default items and controlling the order in which items appear.

## Show or hide the form designer toolbar

The form designer toolbar can be shown or hidden programmatically during initialization or at runtime.

Use the [enableFormDesigner](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pdfViewerModel/#enableformdesigner) property to set initial visibility or call the [showFormDesignerToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar/#showformdesignertoolbar) method at runtime to toggle visibility. The links below reference the corresponding API documentation.

The following code snippet shows how to set the `enableFormDesigner` property during initialization.

{% tabs %}
{% highlight js tabtitle="index.js" %}

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation,
  ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    enableFormDesigner: false,
    documentPath: 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf',
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
            <div id='PdfViewer' style="height:500px;width:100%;">
            </div>
        </div>
    </body>
</html>

{% endhighlight %}
{% endtabs %}

## How to customize the form designer toolbar

Select which tools appear and control their order in the form designer toolbar.

Configure [`PdfViewerToolbarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings/) and set the [`FormDesignerToolbarItems`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings/#formdesignertoolbaritems) property to specify available form-design tools. This property accepts a list of [`FormDesignerToolbarItem`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/formDesignerToolbarItem/) values; included items are displayed in the listed order and omitted items are hidden. This produces a consistent, streamlined form-design experience across devices.

The following example demonstrates how to customize the form designer toolbar by configuring specific tools using `FormDesignerToolbarItem`.

{% tabs %}
{% highlight js tabtitle="index.js" %}

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch,
    ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/formdesigner.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
});

pdfviewer.toolbarSettings = {
    formDesignerToolbarItems: [
        "TextboxTool",
        "PasswordTool",
        "CheckBoxTool",
        "RadioButtonTool",
        "DropdownTool",
        "ListboxTool",
        "DrawSignatureTool",
        "DeleteTool"
    ]
};

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
