---
layout: post
title: Text Search Events in Blazor PDF Viewer control | Syncfusion
description: Learn how to handle text search events, and run programmatic searches in the Blazor PDF Viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Text Search Events in Blazor PDF Viewer

The Blazor PDF Viewer raises events during text search operations, allowing you to customize behavior and respond to different stages of the search process.

## OnTextSearchStart

The [`OnTextSearchStart`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchStart) event fires as soon as a search begins from the toolbar interface or through the [`SearchTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchTextAsync_System_String_System_Boolean_) method. Use it to reset UI state or log analytics before results are processed.

- **Event arguments**: [`TextSearchStartEventArgs`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.TextSearchStartEventArgs.html) exposes:
  - `SearchText`: the term being searched.
  - `MatchCase`: indicates whether case-sensitive search is enabled.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
             Height="100%"
             Width="100%">
    <PdfViewerEvents OnTextSearchStart="OnTextSearchStart"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private void OnTextSearchStart(TextSearchStartEventArgs args)
    {
        Console.WriteLine($"Text search started for: \"{args.SearchText}\"");
    }
}
{% endhighlight %}
{% endtabs %}

## OnTextSearchHighlight

The [`OnTextSearchHighlight`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchHighlight) event fires whenever a search result is brought into view, including navigation between matches. Use it to draw custom overlays when a match is highlighted.

- **Event arguments**: [`TextSearchHighlightEventArgs`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.TextSearchHighlightEventArgs.html) exposes:
  - `Bound`: represents the highlighted match position and dimensions.
  - `PageNumber`: page index where the match is highlighted.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
             Height="100%"
             Width="100%">
    <PdfViewerEvents OnTextSearchHighlight="OnTextSearchHighlight"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private void OnTextSearchHighlight(TextSearchHighlightEventArgs args)
    {
        Console.WriteLine($"Highlighted match at page {args.PageNumber}, bounds: {args.Bound}");
    }
}
{% endhighlight %}
{% endtabs %}

## OnTextSearchComplete

The [`OnTextSearchComplete`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchComplete) event fires after the search engine finishes scanning the document for the current query. Use it to update match counts, toggle navigation controls, or notify users when no results were found.

- **Event arguments**: [`TextSearchCompleteEventArgs`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.TextSearchCompleteEventArgs.html) exposes:
  - `SearchText`: the searched term.
  - `MatchCase`: indicates whether case-sensitive search was used.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
             Height="100%"
             Width="100%">
    <PdfViewerEvents OnTextSearchComplete="OnTextSearchComplete"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private void OnTextSearchComplete(TextSearchCompleteEventArgs args)
    {
        Console.WriteLine($"Text search completed for: \"{args.SearchText}\"");
    }
}
{% endhighlight %}
{% endtabs %}

## See also

- [Text Search Features](./text-search-features)
- [Text Selection](../text-selection/overview)
- [Extract and Highlight Text in Blazor PDF Viewer Component](../faqs/how-to-extract-particular-text-and-highlight)