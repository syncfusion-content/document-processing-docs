---
layout: post
title: Annotation Toolbar Customization in Typescript Pdfviewer control | Syncfusion
description: Learn here all about annotation toolbar customization in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Annotation Toolbar Customization
publishingplatform: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation Toolbar Customization

The annotation toolbar can be customized by showing or hiding default items and by controlling the order in which they appear.

## Show or hide the annotation toolbar

Show or hide the annotation toolbar programmatically during initialization or at runtime.

Use the [EnableAnnotationToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/pdfViewerModel/#enableannotationtoolbar) property or the [showAnnotationToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar/#showannotationtoolbar) method to toggle visibility.

The following code snippet explains how to show or hide the annotation toolbar using the `showAnnotationToolbar` method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
             BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner );

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
});
pdfviewer.appendTo('#PdfViewer');
document.getElementById('set').addEventListener('click', ()=> {
    pdfviewer.toolbar.showAnnotationToolbar(false);
});

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-notifications/styles/material.css" rel="stylesheet" />


    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
   <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <button id="set">Change Annotation Toolbar Visibility</button>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

## Show annotation toolbar on initial load

The `isAnnotationToolbarOpen` property gets or sets a boolean value to open the annotation toolbar when the PDF Viewer control loads a document initially. Defaults to false. See [isAnnotationToolbarOpen API documentation](https://ej2.syncfusion.com/documentation/api/pdfviewer/#isannotationtoolbaropen) for details.

```ts
// Show annotation toolbar on initial load
viewer.isAnnotationToolbarOpen = true;
```

## Show annotation toolbar on initial load and retrieve visible status

The `isAnnotationToolbarVisible` property gets or sets a boolean value to open the annotation toolbar when the PDF Viewer control loads a document initially and retrieve its visible status. Defaults to false. See [isAnnotationToolbarVisible API documentation](https://ej2.syncfusion.com/documentation/api/pdfviewer/#isannotationtoolbarvisible) for details.

```ts
// Show annotation toolbar on initial load and check visibility
viewer.isAnnotationToolbarVisible = true;
```

## How to customize the annotation toolbar

Choose which tools appear and control their order in the annotation toolbar.

Use [`PdfViewerToolbarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings/) with the [`AnnotationToolbarItems`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbarSettings/#annotationtoolbaritems) property to choose which tools are displayed in the annotation toolbar. The property accepts a list of [`AnnotationToolbarItem`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/annotationToolbarItem/) values. Only the items included in this list are shown; any item not listed is hidden. The rendered order follows the sequence of items in the list.

The annotation toolbar is presented when entering annotation mode in PdfViewer and adapts responsively based on the available width. Include the Close tool to allow users to exit the annotation toolbar when needed.

The following example demonstrates how to customize the annotation toolbar by specifying a selected set of tools using `AnnotationToolbarItem`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, AnnotationToolbarItem} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
             BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner );

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib",
});
    pdfviewer.toolbarSettings = {
        annotationToolbarItems: [
            "HighlightTool",
            "UnderlineTool",
            "StrikethroughTool",
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
    };
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/23.1.40/ej2-notifications/styles/material.css" rel="stylesheet" />


    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
   <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>

{% endhighlight %}
{% endtabs %}
