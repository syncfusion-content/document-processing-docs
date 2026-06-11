---
layout: post
title: Magnification in TypeScript PDF Viewer | Syncfusion
description: Learn how to enable and use magnification in the Syncfusion TypeScript PDF Viewer, including Zoom In, Zoom Out, Fit to Page, and Fit to Width options.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Magnification in TypeScript PDF Viewer

The PDF Viewer includes magnification tools in the default toolbar: Zoom In, Zoom Out, Zoom (to a specific value), Fit to Page, and Fit to Width. The toolbar can be configured to show or hide these tools.

Use the following configuration to enable magnification in the PDF Viewer:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as PdfViewer -->
    <div id="PdfViewer"></div>
</body>

</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enableMagnification: true, documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}


import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar,Magnification,Navigation, Annotation, LinkAnnotation,ThumbnailView,BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({enableMagnification: true, documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'});
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

The following magnification options are available in the default toolbar of PDF Viewer,

* [**ZoomIn**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#zoomin):- Zoom in from the current zoom value of PDF pages.
* [**ZoomOut**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#zoomout):- Zoom out from the current zoom value of PDF pages.
* [**Zoom**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#zoomto):- Zoom to specific zoom value of PDF pages.
* [**FitPage**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#fittopage):- Fits the page width with in the available view port size.
* [**FitWidth**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#fittowidth):- Fits the view port width based on the page content size.

![Magnification tools in PDF Viewer](./images/zoom.png)

> The PDF Viewer supports zoom values from 10% to 400%.

## See also

* [Toolbar items](./toolbar)
* [Feature modules](./feature-module)
