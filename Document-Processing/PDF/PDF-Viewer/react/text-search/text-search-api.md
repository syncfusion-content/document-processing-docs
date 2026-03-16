---
layout: post
title: Programmatic text search in React PDF Viewer control | Syncfusion
description: Learn how to use text search APIs to control text search and its functionality in the Syncfusion React PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Programmatic text Search in React PDF Viewer

The React PDF Viewer provides options to toggle text search feature and APIs to customise the text search behavior programmatically.

## Enable or Disable Text Search 

Use the following snippet to enable or disable text search features

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
    return (
        <div style={{ height: '100vh' }}>
            <PdfViewerComponent
                id="PdfViewer"
                ref={viewerRef}
                enableTextSearch={true}
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

## Programmatic text search

While the PDF Viewer toolbar offers an interactive search experience, you can also trigger and customize searches programmatically by calling the following APIs in textSearch module.

### `searchText`

Use the [`searchText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#searchtext) method to start a search with optional filters that control case sensitivity and whole-word behavior.

```ts
// searchText(text: string, isMatchCase?: boolean)
pdfviewer.textSearch.searchText('search text', false);
```

Set the `isMatchCase` parameter to `true` to perform a case-sensitive search that mirrors the Match Case option in the search panel.

```ts
// This will only find instances of "PDF" in uppercase.
pdfviewer.textSearch.searchText('PDF', true);
```

### `searchNext`

[`searchNext`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textSearch#searchnext) method searches the next occurrence of the current query from the active match.

```ts
// searchText(text: string, isMatchCase?: boolean)
pdfviewer.textSearch.searchNext();
```

### `searchPrevious`

[`searchPrevious`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textSearch#searchprevious) API searches the previous occurrence of the current query from the active match.

```ts
// searchText(text: string, isMatchCase?: boolean)
pdfviewer.textSearch.searchPrevious();
```

### `cancelTextSearch`

[`cancelTextSearch`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textSearch#canceltextsearch) method cancels the current text search and removes the highlighted occurrences from the PDF Viewer.

```ts
// searchText(text: string, isMatchCase?: boolean)
pdfviewer.textSearch.cancelTextSearch();
```

### Complete Example

Use the following code snippet to implement text search using SearchText API

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
    const searchText = () => {
        (viewerRef.current as PdfViewerComponent).textSearch.searchText('pdf', false);
    }
    const previousSearch = () => {
        (viewerRef.current as PdfViewerComponent).textSearch.searchPrevious();
    }
    const nextSearch = () => {
        (viewerRef.current as PdfViewerComponent).textSearch.searchNext();
    }
    const cancelSearch = () => {
        (viewerRef.current as PdfViewerComponent).textSearch.cancelTextSearch();
    }
    return (
        <div style={{ height: '100vh' }}>
            <button onClick={searchText}>Search Text</button>
            <button onClick={previousSearch}>Previous Search</button>
            <button onClick={nextSearch}>Next Search</button>
            <button onClick={cancelSearch}>Cancel Search</button>
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

**Expected result:** the viewer highlights occurrences of `pdf` and navigation commands jump between matches.

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See Also

- [Find Text](./find-text)
- [Text Search Events](./text-search-events)
- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)