---
layout: post
title: Customize mobile Toolbar in React PDF Viewer | Syncfusion
description: Learn how to customize the toolbar for mobile devices in the Syncfusion React PdfViewer and ensure smooth touch interactions.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize mobile toolbar in React PdfViewer

## Overview

This how-to explains how to enable the desktop toolbar on mobile devices running the Syncfusion React PDF Viewer, and how to preserve touch scrolling when the desktop toolbar is used.

## Prerequisites

- EJ2 React PDF Viewer installed and imported in your React app.
- For standalone mode: a valid [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) hosting the PDF Viewer assets.
- For server-backed mode: a working [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) endpoint.

## Steps

**Step 1:** Enable desktop toolbar on mobile: set [`enableDesktopMode`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabledesktopmode) to `true` on PDF Viewer.

**Step 2:** (Optional, recommended) Disable text-selection to preserve smooth touch scrolling: set [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) to `false`.

**Step 3:** Inject the [`Toolbar`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar) and other services required by your toolbar features via `Inject`.

**Example:**

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
export default function App() {
    return (
        <div>
            <PdfViewerComponent
                id="PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.5/dist/ej2-pdfviewer-lib"
                enableDesktopMode={true}
                enableTextSelection={false}
                height="640px"
            >
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
export default function App() {
    return (
        <div>
            <PdfViewerComponent
                id="PdfViewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/"
                enableDesktopMode={true}
                enableTextSelection={false}
                height="640px"
            >
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- Print option not visible on mobile: set [`enableDesktopMode`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabledesktopmode) to `true`; otherwise the mobile toolbar omits Print.
- Touch scrolling is jerky after enabling desktop toolbar: set [`enableTextSelection`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextselection) to `false` to avoid text-selection capturing touch events.
- Missing assets or broken UI: confirm [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) points to the correct version of the `ej2-pdfviewer-lib` and is reachable from the device.
- Server errors in server-backed mode: verify [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) CORS configuration and that the backend is running.

## Related topics

- [Customize form designer toolbar](./form-designer-toolbar)
- [Customize annotation toolbar](./annotation-toolbar)
- [Create a custom toolbar](./custom-toolbar)