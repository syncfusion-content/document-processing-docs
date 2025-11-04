---
layout: post
title: Thumbnail Navigation in JavaScript PDF Viewer control | Syncfusion
description: Discover how to navigate PDF pages using thumbnails in the Syncfusion JavaScript PDF Viewer control for a visual and intuitive experience.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Page Thumbnail navigation in JavaScript PDF Viewer control

Thumbnails is the miniature representation of actual pages in PDF files. This feature displays thumbnails of the pages and allows navigation.
You can enable/disable thumbnail navigation by using the following code snippet.,

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

![Alt text](../images/thumbnail.png)

## Enable or disable thumbnail view on load

The `enableThumbnail` property gets or sets a boolean value to enable or disable the thumbnail view in PDF Viewer while loading a document. Defaults to true. You can refer to [enableThumbnail API documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#enablethumbnail) for more information.

```js
  viewer.enableThumbnail = false;
```
## Show or hide thumbnail view panel on load

The `isThumbnailViewOpen` property gets or sets a boolean value to show or hide the thumbnail view while loading a document. Defaults to false. You can refer to [isThumbnailViewOpen API documentation](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#isthumbnailviewopen) for more information.

```js
  viewer.isThumbnailViewOpen = true;
```

## See also

* [Toolbar items](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/toolbar)
* [Feature Modules](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/feature-module)