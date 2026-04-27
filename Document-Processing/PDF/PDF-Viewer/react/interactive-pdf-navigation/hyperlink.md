---
layout: post
title: Table of contents navigation in PDF Viewer | Syncfusion
description: Learn how to navigate PDFs using the table of contents in the Syncfusion PDF Viewer control for React.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Table of contents navigation in PDF Viewer

## Overview:

This guide shows how to configure hyperlink behavior in the React PDF Viewer: enable/disable links, control how links open, and handle hyperlink events.

## Steps

### 1. Enable or disable hyperlink interaction

By default hyperlinks are enabled. Set the [`enableHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enablehyperlink) property to `false` to make links non-interactive.

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
                enableHyperlink={false}
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

### 2. Control how links open

Use the [`hyperlinkOpenState`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#hyperlinkopenstate) property to choose whether external links open in the current tab or a new tab or in a whole new window.

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
                hyperlinkOpenState='NewTab'
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

### 3. Handle hyperlink events

Use the [`hyperlinkClick`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#hyperlinkclick) and [`hyperlinkMouseOver`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#hyperlinkmouseover) events to intercept clicks or show custom tooltips. The examples below show how to log the hyperlink and optionally cancel navigation.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject, HyperlinkMouseOverArgs, HyperlinkClickEventArgs
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef, RefObject } from 'react';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    const hyperlinkClick = (args: HyperlinkClickEventArgs) => {
        console.log('Hyperlink Clicked:', args.hyperlink);
        // To prevent the default navigation behavior, set args.cancel = true;
        // args.cancel = true;
    };
    const hyperlinkMouseOver = (args: HyperlinkMouseOverArgs) => {
        console.log('Mouse is over hyperlink:', args.hyperlinkElement.href);
    };
    return (
        <div style={{ height: '100vh' }}>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
                hyperlinkClick={hyperlinkClick}
                hyperlinkMouseOver={hyperlinkMouseOver}
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

- If links still open when [`enableHyperlink={false}`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enablehyperlink), ensure the page uses the correct [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl)/[`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) and that `LinkAnnotation` is not being re-enabled elsewhere.
- If events do not fire, verify that `Inject` includes `LinkAnnotation` and any other services shown in the examples.

## See also

- [Bookmark navigation](./bookmark)
- [Page navigation](./page)
- [Page thumbnail navigation](./page-thumbnail)
