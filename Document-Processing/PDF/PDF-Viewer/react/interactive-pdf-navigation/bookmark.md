---
layout: post
title: Bookmark Navigation in React PDF Viewer control | Syncfusion
description: Learn about bookmark navigation in the Syncfusion React PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark navigation in React PDF Viewer

## Overview

This guide shows how to enable and use bookmark navigation in the EJ2 React PDF Viewer. You will enable bookmarks, navigate programmatically using [`goToBookmark`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkview#gotobookmark), and retrieve the document's bookmark list with [`getBookmarks`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkview#getbookmarks).

## Steps

### 1. Enable bookmark

Add [`enableBookmark={true}`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enablebookmark) to [`PdfViewerComponent`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer) and inject [`BookmarkView`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkview) into the viewer.

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
                enableBookmark={true}
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

**Expected result**: The **Bookmarks** button on the left navigation toolbar is enabled.

### 2. Toggle bookmark view programmatically

Open or close the bookmark pane programmatically using the [`openBookmarkPane`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkview#openbookmarkpane) and [`closeBookmarkPane`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkview#closebookmarkpane) APIs. Call `openBookmarkPane` to show the panel and `closeBookmarkPane` to hide it. Both methods have no return value.

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
                enableBookmark={true}
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

**Expected result**: The viewer shows a Bookmarks panel and users can click entries to navigate.

### 3. Navigate programmatically

Call [`goToBookmark(pageIndex, y)`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkview#gotobookmark) where `pageIndex` is the zero-based page index (so `1` navigates to the second page) and `y` is the vertical coordinate in PDF page space used to position the view.

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
    const goTo = () => {
        viewerRef.current?.bookmark.goToBookmark(1, 0);
    }
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={goTo}>Go to Page 2</button>
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

### 4. Retrieve the bookmarks list

Use [`getBookmarks()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkview#getbookmarks) to obtain the bookmark tree.

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
    const getBookmarks = () => {
        const bookMarks: any = viewerRef.current?.bookmark.getBookmarks();
        console.log('Bookmarks:', bookMarks);
    }
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={getBookmarks}>List bookmarks</button>
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

## Complete example

The following is a self-contained example demonstrating enabling bookmarks, navigating to a bookmark programmatically, and listing bookmarks.

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
    const getBookmarks = () => {
        const bookMarks: any = viewerRef.current?.bookmark.getBookmarks();
        console.log('Bookmarks:', bookMarks);
    }
    const goTo = () => {
        viewerRef.current?.bookmark.goToBookmark(1, 0);
    }
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={getBookmarks}>List bookmarks</button>
            <button onClick={goTo} style={{ marginLeft: 8 }}>Go to Page 2</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
                enableBookmark={true}
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

**Expected result**: The Bookmarks button on the navigation toolbar is enabled and clicking it opens the Bookmarks panel (when the PDF contains bookmarks). Clicking a bookmark navigates to the target location; the buttons demonstrate programmatic navigation and retrieving the bookmark list in the console.

## Troubleshooting

- **Bookmarks button is not enabled**: confirm the PDF actually contains bookmarks and [`enableBookmark={true}`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enablebookmark) is set.
- **[`goToBookmark`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkview#gotobookmark) throws an error**: ensure the target page index and coordinates exist; validate values before calling.
- **Missing features**: add [`BookmarkView`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/bookmarkview) to the `<Inject services={[BookmarkView]} />` list and include [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) or [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) when required.

## Related topics

- [React PDF Viewer toolbar](../toolbar-customization/overview)
- [Feature Modules](https://ej2.syncfusion.com/react/documentation/pdfviewer/feature-module)