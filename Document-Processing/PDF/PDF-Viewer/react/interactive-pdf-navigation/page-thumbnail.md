---
layout: post
title: Page Thumbnail Navigation in React PDF Viewer | Syncfusion
description: Learn how to enable and use the page thumbnail navigation in the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Page Thumbnail Navigation in React PDF Viewer

## Overview

Page thumbnails are miniature previews of PDF pages displayed in a side panel. They allow users to quickly navigate to specific pages without scrolling through the entire document.

This guide explains how to enable the thumbnail navigation feature and to toggle thumbnail view programmatically in the React PDF Viewer component. When enabled, a thumbnails panel appears in the viewer, displaying small previews of each page.

## Steps

### 1. Enable thumbnail view

Enable or disable the thumbnail view by using [`enableThumbnail`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enablethumbnail) API.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef, RefObject } from 'react';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    return (
        <div style={{ height: '100vh' }}>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
                enableThumbnail={true}
            >
                <Inject
                    services={[
                        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Expected Output:** When [`enableThumbnail`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enablethumbnail) is set to `true`, a thumbnail panel can be opened through the navigation toolbar on the left side of the PDF Viewer which displays miniature previews of each page. Clicking on any thumbnail navigates directly to that page. To disable thumbnail navigation, set `enableThumbnail={false}` or simply remove the property.

![Page thumbnails panel in the PDF Viewer](../images/thumbnail.png)

### 2. Open or close thumbnail view programmatically

The thumbnail view in the React PDF Viewer can be opened by using the [`openThumbnailPane`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/thumbnailview#openthumbnailpane) and closed by using the [`closeThumbnailPane`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/thumbnailview#closethumbnailpane) APIs

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef, RefObject } from 'react';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    const openThumbnail = () => viewerRef.current?.thumbnailView.openThumbnailPane();
    const closeThumbnail = () => viewerRef.current?.thumbnailView.closeThumbnailPane();
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={openThumbnail}>Open Thumbnail</button>
            <button onClick={closeThumbnail}>Close Thumbnail</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
            >
                <Inject
                    services={[
                        Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- **Thumbnail panel not appearing**: Ensure [`ThumbnailView`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/thumbnailview) is included in the `Inject` services array.
- **WASM or service endpoint errors**: Verify that [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) (for standalone) or [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) (for server-backed) is correctly configured and accessible.

## See Also

- [Bookmark Navigation](./bookmark)
- [Hyperlink Navigation](./hyperlink)
- [Navigation in React PDF Viewer](./overview)
- [Feature Modules](../feature-module)