---
layout: post
title: Use extractText in React PDF Viewer | Syncfusion
description: Learn how to use the extractText method in the Syncfusion React PDF Viewer to extract text and bounds from one or more pages.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Extract text method in the PDF Viewer

## Overview

The `extractText` method retrieves text content and, optionally, positional data for elements on one or more pages. It returns a Promise that resolves to an object containing extracted `textData` (detailed items with bounds) and `pageText` (concatenated plain text).

## Parameters

- `startIndex` — Starting page index (0-based).
- `endIndex` or `options` — Either the ending page index for a range extraction, or an options object specifying extraction criteria for a single page.
- `options` (optional) — Extraction options such as `TextOnly` or `TextAndBounds` to control whether bounds are included.

## Returned object

- `textData` — Array of objects describing extracted text items, including bounds and page-level text.
- `pageText` — Concatenated plain text for the specified page(s).

## Complete example

Here is an example that demonstrates how to use the extractText method along with event handling:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject, ExtractTextOption
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef, RefObject } from 'react';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    const extractText = async () => {
        console.log(await viewerRef.current?.extractText(1, ExtractTextOption.TextOnly));
    }
    const extractsText = async () => {
        console.log(await viewerRef.current?.extractText(0, 2, ExtractTextOption.TextOnly));
    }
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={extractText}>Single page</button>
            <button onClick={extractsText}>Multiple pages</button>
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

**Expected result:**

- Clicking single page, extracts text from page 1 (`startIndex = 1`) using `TextOnly`.
- Clicking multiple pages, extracts text from pages 0–2 (`startIndex = 0, endIndex = 2`) using `TextOnly`.

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)