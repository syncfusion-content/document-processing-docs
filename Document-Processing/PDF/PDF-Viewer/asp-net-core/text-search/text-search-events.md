---
layout: post
title: Text Search Events in ASP.NET Core PDF Viewer | Syncfusion
description: Handle text search events in the ASP.NET Core PDF Viewer and run programmatic searches to integrate text search into your ASP.NET Core application.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Text Search Events in ASP.NET Core PDF Viewer

The ASP.NET Core PDF Viewer fires events during text search operations, allowing you to customize behavior and respond to different stages of the search process. The events fire in the following order:

1. `textSearchStart` — when the search begins.
2. `textSearchHighlight` — for each match that is brought into view, including navigation between matches.
3. `textSearchComplete` — once the search engine finishes scanning the document for the current query.

## textSearchStart

The `textSearchStart` event fires as soon as a search begins from the toolbar interface or through the `textSearch.searchText` method. Use this event to reset UI state, log analytics, or cancel the default search flow before results are processed.

- **Typical uses**:
  - Reset UI state (for example, clear a previous "no results" message).
  - Log analytics about the search query.
  - Cancel the default search flow before results are processed.
- **Event arguments** expose:
  - `searchText`: the term being searched.
  - `matchCase`: indicates whether case-sensitive search is enabled.
  - `name`: the name of the event.

> **Note:** To cancel the default search flow, set `args.cancel = true` inside the handler.

{% tabs %}
{% highlight html %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   textSearchStart="onTextSearchStart"
                   style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    function onTextSearchStart(args) {
        console.log(`Text search started for: "${args.searchText}"`);
    }
</script>
{% endhighlight %}
{% endtabs %}

## textSearchHighlight

The `textSearchHighlight` event fires whenever a search result is brought into view, including navigation between matches. Use this event to draw custom overlays or synchronize adjacent UI elements when a match is highlighted.

- **Event arguments** expose:
  - `bounds`: the highlighted match rectangle, with the following numeric properties:
    - `X`: horizontal position of the match.
    - `Y`: vertical position of the match.
    - `Width`: width of the match.
    - `Height`: height of the match.
  - `pageNumber`: page index where the match is highlighted.
  - `searchText`: the active search term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: the name of the event.

{% tabs %}
{% highlight html %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   textSearchHighlight="onTextSearchHighlight"
                   style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    function onTextSearchHighlight(args) {
        console.log('Highlighted match bounds:', args.bounds);
        console.log('Page number:', args.pageNumber);
    }
</script>
{% endhighlight %}
{% endtabs %}

## textSearchComplete

The `textSearchComplete` event fires once per search query, after the search engine finishes scanning the document. Use this event to update match counts, toggle navigation controls, or notify users when no results were found.

- **Typical uses**:
  - Update UI with the total number of matches and enable navigation controls.
  - Hide loading indicators, or show a "no results" message when no matches exist.
  - Record search metrics for analytics.
- **Event arguments** expose:
  - `totalMatches`: the total number of matches found for the current query.
  - `searchText`: the searched term.
  - `matchCase`: indicates whether case-sensitive search was used.
  - `name`: the name of the event.

{% tabs %}
{% highlight html %}
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   textSearchComplete="onTextSearchComplete"
                   style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    function onTextSearchComplete(args) {
        console.log('Text search completed.');
        console.log('Total matches:', args.totalMatches);
        console.log('Search text:', args.searchText);
    }
</script>
{% endhighlight %}
{% endtabs %}

## Complete Example with All Events

The following code snippet demonstrates how to handle all three text search events together:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   textSearchStart="onTextSearchStart"
                   textSearchHighlight="onTextSearchHighlight"
                   textSearchComplete="onTextSearchComplete"
                   style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    function onTextSearchStart(args) {
        console.log(`Search started for: "${args.searchText}"`);
        console.log(`Match case: ${args.matchCase}`);
    }
    
    function onTextSearchHighlight(args) {
        console.log(`Match found on page ${args.pageNumber}`);
        console.log(`Bounds: X=${args.bounds.X}, Y=${args.bounds.Y}, Width=${args.bounds.Width}, Height=${args.bounds.Height}`);
    }
    
    function onTextSearchComplete(args) {
        console.log(`Search complete. Total matches: ${args.totalMatches}`);
    }
</script>

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/ej2-aspnetcore-pdf-viewer-examples)

## See Also

**Programmatic search and related topics**

- [Text Search Features](./text-search-features)
- [Find Text](./find-text)
