---
layout: post
title: Text Search Events in ASP.NET MVC PDF Viewer | Syncfusion
description: Handle text search events in the ASP.NET MVC PDF Viewer and run programmatic searches to integrate text search into your ASP.NET MVC application.
platform: document-processing
control: Text search
documentation: ug
---

# Text Search Events in ASP.NET MVC PDF Viewer

The ASP.NET MVC PDF Viewer fires events during text search operations, allowing you to customize behavior and respond to different stages of the search process. The events fire in the following order:

1. `textSearchStart` — when the search begins.
2. `textSearchHighlight` — for each match that is brought into view, including navigation between matches.
3. `textSearchComplete` — once the search engine finishes scanning the document for the current query.

## textSearchStart

The [`textSearchStart`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextSearchStart) event fires as soon as a search begins from the toolbar interface or through the `textSearch.searchText(...)` method. Use this event to reset UI state, log analytics, or cancel the default search flow, before results are processed.

- **Typical uses**:
  - Reset UI state (for example, clear a previous "no results" message).
  - Log analytics about the search query.
  - Cancel the default search flow, before results are processed.
- **Event arguments**: `TextSearchStartEventArgs` exposes:
  - `searchText` — the term being searched.
  - `matchCase` — indicates whether case-sensitive search is enabled.
  - `isMatchWholeWord` — indicates whether whole-word matching is enabled.
  - `name` — the name of the event.
  - `cancel` — set to `true` to cancel the default search.

> **Note:** To cancel the default search flow, set `args.cancel = true` inside the handler.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSearchStart("textSearchStarted").Render()
</div>

<script>
    function textSearchStarted(args) {
        // args.searchText contains the term being searched
        // args.cancel can be set to true to stop the default search
        console.log(`Text search started for: "${args.searchText}"`);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSearchStart("textSearchStarted").Render()
</div>

<script>
    function textSearchStarted(args) {
        // args.searchText contains the term being searched
        // args.cancel can be set to true to stop the default search
        console.log(`Text search started for: "${args.searchText}"`);
    }
</script>

{% endhighlight %}
{% endtabs %}

## textSearchHighlight

The [`textSearchHighlight`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextSearchHighlight) event fires whenever a search result is brought into view, including navigation between matches. Use this event to draw custom overlays or synchronize adjacent UI elements when a match is highlighted.

- **Event arguments**: `TextSearchHighlightEventArgs` exposes:
  - `bounds` — the highlighted match rectangle, with the following numeric properties:
    - `X` (or `left`) — horizontal position of the match.
    - `Y` (or `top`) — vertical position of the match.
    - `Width` (or `width`) — width of the match.
    - `Height` (or `height`) — height of the match.
  - `pageNumber` — page index where the match is highlighted.
  - `searchText` — the active search term.
  - `matchCase` — indicates whether case-sensitive search was used.
  - `name` — the name of the event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSearchHighlight("textSearchHighlighted").Render()
</div>

<script>
    function textSearchHighlighted(args) {
        // args.bounds provides the rectangle(s) of the current match
        console.log('Highlighted match bounds:', args.bounds);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSearchHighlight("textSearchHighlighted").Render()
</div>

<script>
    function textSearchHighlighted(args) {
        // args.bounds provides the rectangle(s) of the current match
        console.log('Highlighted match bounds:', args.bounds);
    }
</script>

{% endhighlight %}
{% endtabs %}

## textSearchComplete

The [`textSearchComplete`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_TextSearchComplete) event fires once per search query, after the search engine finishes scanning the document. Use this event to update match counts, toggle navigation controls, or notify users when no results were found.

- **Typical uses**:
  - Update UI with the total number of matches and enable navigation controls.
  - Hide loading indicators, or show a "no results" message when no matches exist.
  - Record search metrics for analytics.
- **Event arguments**: `TextSearchCompleteEventArgs` exposes:
  - `totalMatches` — the total number of matches found for the current query.
  - `isMatchFound` — indicates whether at least one match was found.
  - `searchText` — the searched term.
  - `matchCase` — indicates whether case-sensitive search was used.
  - `name` — the name of the event.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSearchComplete("textSearchCompleted").Render()
</div>

<script>
    function textSearchCompleted(args) {
        // args.totalMatches may indicate how many results were found (when available)
        console.log('Text search completed.', args);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSearchComplete("textSearchCompleted").Render()
</div>

<script>
    function textSearchCompleted(args) {
        // args.totalMatches may indicate how many results were found (when available)
        console.log('Text search completed.', args);
    }
</script>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

## See also

**Programmatic search and related events**

- [Text Search Features](./text-search-features)
- [Find Text](./find-text)

**Text extraction**

- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)
