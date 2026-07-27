---
layout: post
title: Hyperlink navigation in React PDF Viewer | Syncfusion
description: Learn how to configure hyperlink behavior in the Syncfusion React PDF Viewer, including navigation settings and link interaction options.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Hyperlink navigation in React PDF Viewer

## Overview

This guide shows how to configure hyperlink behavior in the React PDF Viewer: enable or disable links, control how links open, and handle hyperlink events. To use these features, ensure the [`@syncfusion/ej2-react-pdfviewer`](https://www.npmjs.com/package/@syncfusion/ej2-react-pdfviewer) package is installed and the `LinkAnnotation` service is included in the `Inject` block in every example below.

## Steps

### 1. Enable or disable hyperlink interaction

By default, [`enableHyperlink={true}`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enablehyperlink) is set on the [`PdfViewerComponent`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer), so links are interactive. Set the property to `false` to make links non-interactive.

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

Use the [`hyperlinkOpenState`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#hyperlinkopenstate) property to choose whether external links open in the current tab, a new tab, or a new window. The allowed values are `CurrentTab` (default), `NewTab`, and `NewWindow`.

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
