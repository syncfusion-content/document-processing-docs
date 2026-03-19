---
layout: post
title: Find Text in React PDF Viewer control | Syncfusion
description: Learn how to configure text search using find text and run programmatic searches in the Syncfusion React PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Find Text in React PDF Viewer

## Find text method

Use the [`findText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtext) method to locate a string or an array of strings and return the bounding rectangles for each match. Optional parameters support case-sensitive comparisons and page scoping so you can retrieve coordinates for a single page or the entire document.

### Find and get the bounds of a text

Searches for the specified text within the document and returns the bounding rectangles of the matched text. The search can be case-sensitive based on the provided parameter and returns matches from all pages in the document. The following code snippet shows how to get the bounds of the specified text:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
    FormFields, PageOrganizer, TextSelection, TextSearch, Print, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef } from 'react';

export default function App() {
    const viewerRef: React.RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    const findText = () => {
        console.log((viewerRef.current as PdfViewerComponent).textSearch.findText('pdf', false));
    };
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={findText}>Find Text Bounds</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
            >
                <Inject
                    services={[
                        TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
                        Annotation, FormDesigner, FormFields, PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Find and get the bounds of a text on the desired page

Searches for the specified text within the document and returns the bounding rectangles of the matched text on a specific page. The search can be case-sensitive based on the provided parameter and returns matches only from the selected page. The following code snippet shows how to retrieve bounds for the specified text on a selected page:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
    FormFields, PageOrganizer, TextSelection, TextSearch, Print, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef } from 'react';

export default function App() {
    const viewerRef: React.RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    const findText = () => {
        console.log((viewerRef.current as PdfViewerComponent).textSearch.findText('pdf', false, 7));
    };
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={findText}>Find Text Bounds</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
            >
                <Inject
                    services={[
                        TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
                        Annotation, FormDesigner, FormFields, PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text

Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters and returns matches from all pages in the document where the strings were found.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
    FormFields, PageOrganizer, TextSelection, TextSearch, Print, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef } from 'react';

export default function App() {
    const viewerRef: React.RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    const findText = () => {
        console.log((viewerRef.current as PdfViewerComponent).textSearch.findText(['adobe', 'pdf'], false));
    };
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={findText}>Find Text Bounds</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
            >
                <Inject
                    services={[
                        TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
                        Annotation, FormDesigner, FormFields, PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Find and get the bounds of the list of text on desired page

Searches for an array of strings within the document and returns the bounding rectangles for each occurrence. The search can be case-sensitive based on the provided parameters. It returns the bounding rectangles for these search strings on that particular page where the strings were found.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
    FormFields, PageOrganizer, TextSelection, TextSearch, Print, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef } from 'react';

export default function App() {
    const viewerRef: React.RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    const findText = () => {
        console.log((viewerRef.current as PdfViewerComponent).textSearch.findText(['adobe', 'pdf'], false, 7));
    };
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={findText}>Find Text Bounds</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
            >
                <Inject
                    services={[
                        TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
                        Annotation, FormDesigner, FormFields, PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## Find text with findTextAsync

The [`findTextAsync`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtextasync) method is designed for performing an asynchronous text search within a PDF document. You can use it to search for a single string or multiple strings, with the ability to control case sensitivity. By default, the search is applied to all pages of the document. However, you can adjust this behavior by specifying the page number (pageIndex), which allows you to search only a specific page if needed.

### Find text with findTextAsync in React PDF Viewer

The [`findTextAsync`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtextasync) method searches for a string or array of strings asynchronously and returns bounding rectangles for each match. Use it to locate text positions across the document or on a specific page.

Here is an example of how to use [`findTextAsync`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtextasync):

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, FormDesigner,
    FormFields, PageOrganizer, TextSelection, TextSearch, Print, Inject,
    type SearchResultModel
} from '@syncfusion/ej2-react-pdfviewer';
import { useRef } from 'react';

export default function App() {
    const viewerRef: React.RefObject<PdfViewerComponent | null> = useRef<PdfViewerComponent>(null);
    const findText = async () => {
        const result: SearchResultModel[] = await (viewerRef.current as PdfViewerComponent).textSearch.findTextAsync('pdf', false);
        console.log(result);
    };
    const findTexts = async () => {
        const result: Record<string, SearchResultModel[]> = await (viewerRef.current as PdfViewerComponent).textSearch.findTextAsync(['pdf', 'adobe'], false);
        console.log(result);
    };
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={findText}>Find Text</button>
            <button onClick={findTexts}>Find Texts</button>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}
            >
                <Inject
                    services={[
                        TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
                        Annotation, FormDesigner, FormFields, PageOrganizer
                    ]}
                />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Parameters

**text (string | string[]):** The text or array of texts to search for in the document.

**matchCase (boolean):** Whether the search is case-sensitive. `true` matches exact case; `false` ignores case.

**pageIndex (optional, number):** Zero-based page index to search. If omitted, searches all pages.

N> `pageIndex` is zero-based; specify `0` for the first page. Omit this parameter to search the entire document.

### Example workflow

**findTextAsync('pdf', false):**
This will search for the term "pdf" in a case-insensitive manner across all pages of the document.

**findTextAsync(['pdf', 'the'], false):**
This will search for the terms "pdf" and "the" in a case-insensitive manner across all pages of the document.

**findTextAsync('pdf', false, 0):**
This will search for the term "pdf" in a case-insensitive manner only on the first page (page 0).

**findTextAsync(['pdf', 'the'], false, 1):**
This will search for the terms "pdf" and "the" in a case-insensitive manner only on the second page (page 1).

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/)

## See Also

- [Text Search Features](./text-search-features)
- [Text Search Events](./text-search-events)
- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)