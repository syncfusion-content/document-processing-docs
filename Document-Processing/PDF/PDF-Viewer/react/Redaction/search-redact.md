---
layout: post
title: Search text and redact in React PDF Viewer | Syncfusion
description: Learn how to find text and add redaction annotations programmatically in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to search text and redact in React PDF Viewer

## Overview

This guide shows how to search for text inside a loaded PDF and add redaction annotations programmatically for every match. You will add two buttons: one to locate and mark matches with redaction annotations, and another to apply redactions (permanently remove the marked content).

**Outcome:** After following the steps you will have a working React sample where clicking "Search & Mark for Redaction" marks found text with redaction annotations and clicking "Apply Redaction" permanently removes the marked content.

## Prerequisites

- EJ2 React PDF Viewer added to your project. See [getting started guide](../getting-started).
- The viewer's redaction feature enabled in your product version.

## Steps

1. Create a React component that includes the `PdfViewerComponent` and Inject required services.
2. Add two buttons: one to perform the text search and add redaction annotations, and one to apply redactions.
3. Use the viewer's [`findTextAsync()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtextasync) to get match bounds (returned in points), convert those bounds to pixels, and add a `Redaction` annotation for each bound using [`addAnnotation('Redaction', ...)`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation#addannotation).
4. Call [`redact()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation#redact) to apply redactions permanently when the user confirms.

## Complete runnable example

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import * as React from 'react';
import './index.css';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject, ToolbarItem
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const viewerRef = React.useRef(null);
    const toolbarSettings = {
        toolbarItems: [
            'OpenOption',
            'UndoRedoTool',
            'PageNavigationTool',
            'MagnificationTool',
            'PanTool',
            'SelectionTool',
            'CommentTool',
            'SubmitForm',
            'AnnotationEditTool',
            'RedactionEditTool',
            'FormDesignerEditTool',
            'SearchOption',
            'PrintOption',
            'DownloadOption'
        ] as ToolbarItem[]
    };
    const px = (pt: number): number => (pt * 96) / 72;

    const searchTextAndRedact = async () => {
        if (!viewerRef.current || !viewerRef.current.textSearchModule) return;
        const term = 'syncfusion'; // change to the term you want to redact
        const results = await viewerRef.current.textSearchModule.findTextAsync(term, false);
        if (!results || results.length === 0) {
            console.warn('No matches found.');
            return;
        }

        for (const pageResult of results) {
            if (!pageResult?.bounds?.length) continue;
            const pageNumber = (pageResult.pageIndex ?? -1) + 1; // convert 0-based to 1-based
            if (pageNumber < 1) continue;

            for (const bound of pageResult.bounds) {
                viewerRef.current.annotation.addAnnotation('Redaction', {
                    bound: {
                        x: px(bound.x),
                        y: px(bound.y),
                        width: px(bound.width),
                        height: px(bound.height)
                    },
                    pageNumber,
                    overlayText: 'Confidential',
                    fillColor: '#000000',
                    fontColor: '#FFFFFF',
                    fontSize: 12,
                    fontFamily: 'Arial'
                });
            }
        }
    };

    const applyRedaction = () => {
        if (!viewerRef.current || !viewerRef.current.annotation) return;
        // This permanently removes content marked by redaction annotations
        viewerRef.current.annotation.redact();
    };

    return (
        <div className='content-wrapper' style={{ padding: 12 }}>
            <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
                <button id='searchTextRedact' type='button' onClick={searchTextAndRedact}>
                    Search "syncfusion" & Mark for Redaction
                </button>
                <button id='applyRedaction' type='button' onClick={applyRedaction}>
                    Apply Redaction
                </button>
            </div>

            <PdfViewerComponent
                ref={viewerRef}
                id='container'
                documentPath='https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
                resourceUrl='https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib'
                toolbarSettings={toolbarSettings}
                isExtractText={true}
                style={{ height: '640px', display: 'block' }}
            >
                <Inject services={[
                    Toolbar,
                    Magnification,
                    Navigation,
                    Annotation,
                    LinkAnnotation,
                    BookmarkView,
                    ThumbnailView,
                    Print,
                    TextSelection,
                    TextSearch,
                    FormFields,
                    FormDesigner
                ]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Expected result

- The viewer loads the specified PDF.
- Clicking "Search \"syncfusion\" & Mark for Redaction" adds redaction annotations over the matched text.
- Clicking "Apply Redaction" permanently removes the marked content from the document; this operation is irreversible.

## Troubleshooting

- Issue: "No matches found" even though text exists — Cause: PDF text extraction may not be ready. Solution: Wait for the document to finish loading or call search after the [`documentLoad`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentload) event.
- Issue: Bounds look misplaced — Cause: [`findTextAsync()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtextasync) returns bounds in points (72 DPI). Ensure conversion to pixels using the provided `px()` helper.
- Issue: `textSearchModule` is undefined — Cause: [`TextSearch`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch) service not injected. Add [`TextSearch`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch) to the `Inject` services list.
- Issue: Redactions not applied — Cause: [`redact()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation#redact) requires redaction annotations present and viewer to support apply-redaction; ensure [`Annotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation) service and `Redaction` features are available in your build.

## Related topics

- [Overview of Redaction](./overview)
- [Programmatic Support in Redaction](./programmatic-support)
- [Redaction UI interactions](./ui-interactions)
- [Redaction in Mobile View](./mobile-view)
- [Redaction Toolbar](./toolbar)