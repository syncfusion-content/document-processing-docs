---
layout: post
title: Minimum and Maximum Zoom in Typescript PDF Viewer control | Syncfusion
description: Learn here all about Minimum and Maximum Zoom in Syncfusion Typescript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Minimum and Maximum Zoom Properties

The Syncfusion PDF Viewer provides the ability to control zoom levels for viewing PDF documents. The [minZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#minzoom) and [maxZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#maxzoom) properties enable developers to set the minimum and maximum zoom levels, ensuring a consistent and controlled viewing experience.

### minZoom

The [minZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#minzoom) property specifies the minimum zoom percentage allowed in the PDF Viewer. This ensures that users cannot zoom out beyond a certain limit, which helps maintain readability and performance. Developers can set the `minZoom` property programmatically, defining the minimum zoom level based on the application's requirements. This is particularly useful for preventing users from zooming out too much, which could make the content difficult to read.

### maxZoom

The [maxZoom](https://ej2.syncfusion.com/documentation/api/pdfviewer/#maxzoom) property defines the maximum zoom percentage allowed in the PDF Viewer. By setting this property, developers can prevent users from zooming in too much, helping to avoid performance issues and maintain a smooth viewing experience. The `maxZoom` property can be set programmatically to control the upper limit of the zoom level. This is useful for applications where extremely high zoom levels might degrade performance or user experience.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
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

#### Restrict Zoom Percentage on Mobile Devices

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
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib";
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

By implementing this, you ensure that the maximum zoom percentage on mobile devices is limited to 200% and the minimum zoom percentage is set to 10%. This prevents performance issues that may arise from excessive zooming on mobile platforms.