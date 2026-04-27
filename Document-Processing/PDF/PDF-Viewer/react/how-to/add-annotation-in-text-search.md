---
layout: post
title: Add Annotations via Text Search in Syncfusion React PDF Viewer
description: Learn how to add annotations via text search events in the Syncfusion React PDF Viewer for a seamless mobile experience.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Add Annotations via Text Search in PDF Viewer

A concise guide that demonstrates how to add rectangle and highlight annotations at highlighted text search results in the React PDF Viewer. The guide explains where to wire the callback, required services, and quick troubleshooting steps.

## Prerequisites

A React PDF Viewer setup with [`Annotation`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/annotation) module injected.

## Steps to add rectangle or highlight annotations on search result highlight

**Step 1:** Follow the steps provided in the [Syncfusion<sup style="font-size:70%">&reg;</sup> Getting Started Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to set up a basic PDF Viewer sample.

**Step 2a:** Set up the PDF Viewer component to add rectangle annotations based on the bounds of highlighted search text in the PDF Viewer.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import { RefObject, useRef } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, TextSelection,
    TextSearch, FormFields, FormDesigner, PageOrganizer, Print, Inject, RectangleSettings,
    TextSearchHighlightEventArgs, RectangleBoundsModel
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent> = useRef(null);

    // Method to handle the text search highlight event
    const handleTextSearchHighlight = (args: TextSearchHighlightEventArgs) => {
        console.log(args); // Logs Highlighted text search details

        const pageNumber: number = args.pageNumber;
        const bounds: RectangleBoundsModel = args.bounds;

        // Add a rectangle annotation on the highlighted text
        viewerRef.current.annotationModule.addAnnotation('Rectangle', {
            pageNumber: pageNumber,
            offset: { x: bounds.left, y: bounds.top },
            width: bounds.width,
            height: bounds.height,
        } as RectangleSettings);
    };

    // Method to initiate a text search for the term 'PDF'
    const handleSearch = () => {
        viewerRef.current.textSearchModule.searchText('PDF', false);
    };

    // Method to go to the next instance of the search term
    const handleSearchNext = () => {
        viewerRef.current.textSearchModule.searchNext();
    };

    // Method to cancel the current text search operation
    const handleCancelSearch = () => {
        viewerRef.current.textSearchModule.cancelTextSearch();
    };

    return (
        <div>
            <div style={{ marginTop: '50px' }}>
                <button onClick={handleSearch}>Search PDF</button>
                <button onClick={handleSearchNext}>Search Next</button>
                <button onClick={handleCancelSearch}>Cancel Search</button>
            </div>
            <div className='control-section' style={{ marginTop: '5px' }}>
                <PdfViewerComponent
                    ref={viewerRef}
                    id="PdfViewer"
                    textSearchHighlight={handleTextSearchHighlight}
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                    style={{ height: '640px' }}
                >
                    <Inject services={[
                        Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch,
                        FormFields, FormDesigner, PageOrganizer, Print 
                    ]} />
                </PdfViewerComponent>
            </div>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Expected result:** Rectangle annotations are added at text search result locations, improving visibility for users navigating search matches.

**Step 2b:** Set up the PDF Viewer component to add highlight annotations based on the bounds of highlighted search text in the PDF Viewer.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import { RefObject, useRef } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, TextSelection,
    TextSearch, FormFields, FormDesigner, PageOrganizer, Print, Inject, TextSearchHighlightEventArgs,
    HighlightSettings, IAnnotationPoint
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent> = useRef(null);

    // Method to handle the text search highlight event
    const handleTextSearchHighlight = (args: TextSearchHighlightEventArgs) => {
        console.log(args); // Logs Highlighted text search details

        const pageNumber: number = args.pageNumber;
        const bounds: IAnnotationPoint[] = [{
            x: args.bounds.x ?? args.bounds.left,
            y: args.bounds.y ?? args.bounds.top,
            height: args.bounds.height,
            width: args.bounds.width
        }];

        // Add a highlight annotation on the highlighted text
        viewerRef.current.annotation.addAnnotation('Highlight', {
            pageNumber: pageNumber,
            bounds: bounds
        } as HighlightSettings);
    };

    // Method to initiate a text search for the term 'PDF'
    const handleSearch = () => {
        viewerRef.current.textSearchModule.searchText('PDF', false);
    };

    // Method to go to the next instance of the search term
    const handleSearchNext = () => {
        viewerRef.current.textSearchModule.searchNext();
    };

    // Method to cancel the current text search operation
    const handleCancelSearch = () => {
        viewerRef.current.textSearchModule.cancelTextSearch();
    };

    return (
        <div>
            <div style={{ marginTop: '50px' }}>
                <button onClick={handleSearch}>Search PDF</button>
                <button onClick={handleSearchNext}>Search Next</button>
                <button onClick={handleCancelSearch}>Cancel Search</button>
            </div>
            <div className='control-section' style={{ marginTop: '5px' }}>
                <PdfViewerComponent
                    ref={viewerRef}
                    id="PdfViewer"
                    textSearchHighlight={handleTextSearchHighlight}
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                    style={{ height: '640px' }}
                >
                    <Inject services={[
                        Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch,
                        FormFields, FormDesigner, PageOrganizer, Print 
                    ]} />
                </PdfViewerComponent>
            </div>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Expected result:** Highlight annotation is added at text search result locations, improving visibility for users navigating search matches.

[View sample the complete working sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)
