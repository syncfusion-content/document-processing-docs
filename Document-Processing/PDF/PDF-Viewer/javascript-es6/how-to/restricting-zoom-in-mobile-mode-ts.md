---
layout: post
title: How to Restrict Zoom on Mobile Devices in JavaScript | Syncfusion
description: Restrict the zoom percentage on mobile devices in the JavaScript (ES6) PDF Viewer using minZoom and maxZoom to keep the UI usable on small screens.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Restrict Zoom on Mobile Devices in JavaScript (ES6) PDF Viewer

Restrict zoom on mobile devices using the `maxZoom` and `minZoom` properties. This improves scrolling performance and document loading on mobile.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation,
         LinkAnnotation, ThumbnailView, BookmarkView, TextSelection,
         TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = (): void => {
    if (Browser.isDevice && !pdfviewer.enableDesktopMode) {
        pdfviewer.maxZoom = 200;
        pdfviewer.minZoom = 10;
    }
    else{
        pdfviewer.zoomMode = 'Default';
    }
};

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation,
         LinkAnnotation, ThumbnailView, BookmarkView, TextSelection,
         TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = (): void => {
    if (Browser.isDevice && !pdfviewer.enableDesktopMode) {
        pdfviewer.maxZoom = 200;
        pdfviewer.minZoom = 10;
    }
    else{
        pdfviewer.zoomMode = 'Default';
    }
};

{% endhighlight %}
{% endtabs %}

This limits maximum zoom to 200% and minimum zoom to 10% on mobile devices, helping prevent performance issues from excessive zooming.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/Restrict%20Zoom%20Percentage%20on%20Mobile%20Devices)