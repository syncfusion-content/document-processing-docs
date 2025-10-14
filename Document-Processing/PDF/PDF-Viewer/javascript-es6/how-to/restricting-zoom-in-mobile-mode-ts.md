---
layout: post
title: Restrict zoom percentage on mobile devices | Syncfusion
description: Learn how to restrict zoom percentage on mobile devices using minZoom and maxZoom in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Restrict zoom percentage on mobile devices

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
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');

pdfviewer.documentLoad = (): void => {
    if (Browser.isDevice && !viewer.enableDesktopMode) {
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
    if (Browser.isDevice && !viewer.enableDesktopMode) {
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