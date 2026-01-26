---
layout: post
title: Configure minZoom and maxZoom in TypeScript PDF Viewer | Syncfusion
description: Learn how to configure minimum and maximum zoom levels using minZoom and maxZoom in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Configure minZoom and maxZoom in the PDF Viewer

Control zoom levels in the PDF Viewer using the [minZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#minzoom) and [maxZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#maxzoom) properties to ensure a consistent viewing experience.

### minZoom

Specifies the minimum zoom percentage allowed. Prevents zooming out beyond a set limit to maintain readability and performance.

### maxZoom

Defines the maximum zoom percentage allowed. Prevents excessive zooming that could affect performance and usability.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.maxZoom = 100;
pdfviewer.minZoom = 10;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.maxZoom = 100;
pdfviewer.minZoom = 10;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

#### Restrict zoom percentage on mobile devices

You can easily restrict the zoom percentage on mobile devices using the [minZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#minzoom) and [maxZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#maxzoom) properties. This feature allows you to set specific limits for zooming, ensuring smoother scrolling performance and efficient document loading on mobile devices. By controlling the zoom levels, you can provide a better user experience across different devices.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation,
         LinkAnnotation, ThumbnailView, BookmarkView, TextSelection,
         TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-pdfviewer';
import  {Browser} from '@syncfusion/ej2-base';
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
import  {Browser} from '@syncfusion/ej2-base';
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
