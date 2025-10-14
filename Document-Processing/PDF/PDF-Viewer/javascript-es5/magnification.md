---
layout: post
title: Magnification in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Magnification in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Magnification
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Magnification in Javascript Pdfviewer control

The magnification tools of the PDF Viewer contains ZoomIn, ZoomOut, Zoom, FitPage, and FitWidth tools in the default toolbar. The PDF Viewer also has an option to show or hide the magnification tools in the default toolbar.

The following code snippet describes how to enable the magnification in PDF Viewer.

```html
{% raw %}
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Essential JS 2</title>
<!-- Essential JS 2 fabric theme -->
<link href="{{:CDN_LINK}}ej2-pdfviewer/styles/fabric.css" rel="stylesheet" type="text/css"/>
<!-- Essential JS 2 PDF Viewer's global script -->
<script src="{{:CDN_LINK}}dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
<!--element which is going to render-->
<div id='container'>
<div id='PdfViewer' style="height:500px;width:100%;">
</div>
</div>
</body>
</html>
{% endraw %}
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    enableMagnification: true,
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

var pdfviewer = new ej.pdfviewer.PdfViewer({
                    enableMagnification: true,
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
                });
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.LinkAnnotation,ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Navigation, ej.pdfviewer.Print);
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

The following magnification options are available in the default toolbar of PDF Viewer,

* [**ZoomIn**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#zoomin):- Zoom in from the current zoom value of PDF pages.
* [**ZoomOut**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#zoomout):- Zoom out from the current zoom value of PDF pages.
* [**Zoom**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#zoomto):- Zoom to specific zoom value of PDF pages.
* [**FitPage**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#fittopage):- Fits the page width with in the available view port size.
* [**FitWidth**](https://ej2.syncfusion.com/documentation/api/pdfviewer/magnification/#fittowidth):- Fits the view port width based on the page content size.

![Alt text ](./images/zoom.png)

>PDF Viewer can support the zoom value ranges from 10 to 400.

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)
