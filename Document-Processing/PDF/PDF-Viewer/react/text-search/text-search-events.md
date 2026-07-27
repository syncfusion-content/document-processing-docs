---
layout: post
title: Text Search Events in React PDF Viewer control | Syncfusion
description: Learn how to handle text search events, and run programmatic searches in the Syncfusion React PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Text Search Events in React PDF Viewer

The React PDF Viewer fires events during text search operations, allowing you to customize behavior and respond to different stages of the search process. The events fire in the following order:

1. `textSearchStart` — when the search begins.
2. `textSearchHighlight` — for each match that is brought into view, including navigation between matches.
3. `textSearchComplete` — once the search engine finishes scanning the document for the current query.


## textSearchStart

The [textSearchStart](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textsearchstart) event fires as soon as a search begins from the toolbar interface or through the [`textSearch.searchText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#searchtext) method. Use this event to reset UI state, log analytics, or cancel the default search flow, before results are processed.

- **Typical uses**:
  - Reset UI state (for example, clear a previous "no results" message).
  - Log analytics about the search query.
  - Cancel the default search flow, before results are processed.
- **Event arguments**: [TextSearchStartEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearchstarteventargs) exposes:
  - `searchText`: the term being searched.
  - `matchCase`: indicates whether case-sensitive search is enabled.
  - `name`: the name of the event.

> **Note:** To cancel the default search flow, set `args.cancel = true` inside the handler.

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    id="pdfViewer"
    ref={viewerRef}
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    style={{ height: '100%' }}
    textSearchStart={(args: TextSearchStartEventArgs) => {
        console.log(`Text search started for: "${args.searchText}"`)
    }}
>
    <Inject
        services={[
            TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
            Annotation, FormDesigner, FormFields, PageOrganizer
        ]}
    />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

## textSearchHighlight

The [textSearchHighlight](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textsearchhighlight) event fires whenever a search result is brought into view, including navigation between matches. Use this event to draw custom overlays or synchronize adjacent UI elements when a match is highlighted.

- **Event arguments**: [TextSearchHighlightEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearchhighlighteventargs) exposes:
  - `bounds`: the highlighted match rectangle, with the following numeric properties:
    - `X`: horizontal position of the match.
    - `Y`: vertical position of the match.
    - `Width`: width of the match.
    - `Height`: height of the match.
  - `pageNumber`: page index where the match is highlighted.
  - `searchText`: the active search term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: the name of the event.

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    id="PdfViewer"
    ref={viewerRef}
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    style={{ height: '100%' }}
    textSearchHighlight={(args: TextSearchHighlightEventArgs) => {
        console.log('Highlighted match bounds:', args.bounds)
    }}
>
    <Inject
        services={[
            TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
            Annotation, FormDesigner, FormFields, PageOrganizer
        ]}
    />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

## textSearchComplete

The [textSearchComplete](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textsearchcomplete) event fires once per search query, after the search engine finishes scanning the document. Use this event to update match counts, toggle navigation controls, or notify users when no results were found.

- **Typical uses**:
  - Update UI with the total number of matches and enable navigation controls.
  - Hide loading indicators, or show a "no results" message when no matches exist.
  - Record search metrics for analytics.
- **Event arguments**: [TextSearchCompleteEventArgs](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearchcompleteeventargs) exposes:
  - `totalMatches`: the total number of matches found for the current query.
  - `searchText`: the searched term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: the name of the event.

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    id="PdfViewer"
    ref={viewerRef}
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/32.2.3/dist/ej2-pdfviewer-lib"
    style={{ height: '100%' }}
    textSearchComplete={(args: TextSearchCompleteEventArgs) => {
        console.log('Text search completed.', args)
    }}
>
    <Inject
        services={[
            TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
            Annotation, FormDesigner, FormFields, PageOrganizer
        ]}
    />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## See Also

**Programmatic search and related events**

- [Text Search Features](./text-search-features)
- [Find Text](./find-text)

**Text extraction**

- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)