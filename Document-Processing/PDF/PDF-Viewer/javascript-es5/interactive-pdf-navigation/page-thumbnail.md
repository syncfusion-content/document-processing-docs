---
layout: post
title: Thumbnail Navigation in JavaScript PDF Viewer control | Syncfusion
description: Discover how to navigate PDF pages using thumbnails in the Syncfusion JavaScript PDF Viewer control for a visual and intuitive experience.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Page thumbnail navigation in JavaScript PDF Viewer

Thumbnails are miniature representations of pages in a PDF file. The viewer displays page thumbnails to provide quick visual navigation.
Use the following code snippet to enable or disable the thumbnail pane.

{% tabs %}
{% highlight js tabtitle="Standalone" %}


ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification,
ej.pdfviewer.Navigation, ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation,
ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    enableThumbnail: true,
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}


ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification,
ej.pdfviewer.Navigation, ej.pdfviewer.Annotation, ej.pdfviewer.LinkAnnotation,
ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    enableThumbnail: true,
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
});
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

![Page thumbnails pane in PDF Viewer](../images/thumbnail.png)


## See also

* [Toolbar items](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/toolbar)
* [Feature Modules](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/feature-module)