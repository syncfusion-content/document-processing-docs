---
layout: post
title: Text search and Extraction in Blazor PDF Viewer | Syncfusion
description: Overview of text search capabilities, UI features, programmatic APIs, events and text extraction in the Blazor PDF Viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Text search in Blazor PDF Viewer

The Blazor PDF Viewer provides an integrated text search experience that supports both interactive UI search and programmatic searches. Enable the feature by setting [`EnableTextSearch`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSearch) to `true`. To start a search programmatically, call [`SearchTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchTextAsync_System_String_System_Boolean_).

Enable text search as shown below.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 EnableTextSearch="true"
             DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
             Height="100%"
             Width="100%">
</SfPdfViewer2>
{% endhighlight %}
{% endtabs %}

The text search functionality allows you to retrieve and locate content within PDF documents with case-sensitive or case-insensitive matching, enabling integration with search analytics and downstream processing workflows.

## Key capabilities

- **Text search UI**: Search from the toolbar with the Match Case option and navigation controls.
- **Text search programmatic APIs**: Start a search with [`SearchTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchTextAsync_System_String_System_Boolean_), which accepts the search text and an `isMatchCase` flag for case sensitivity. [`SearchNextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchNextAsync) and [`SearchPreviousAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchPreviousAsync) navigate to the next and previous occurrence of the most recent search query. [`CancelTextSearchAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_CancelTextSearchAsync) cancels the current search and removes the highlighted occurrences.
- **Text search events**: [`OnTextSearchStart`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchStart) fires when a search begins, [`OnTextSearchHighlight`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchHighlight) fires for each match brought into view, and [`OnTextSearchComplete`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchComplete) fires when the search finishes. Wire up an event handler as shown below.

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
        // Handle search completion
    }
}
{% endhighlight %}
{% endtabs %}

## Further reading

- [Text Search Features](./text-search-features)
- [Text Search Events](./text-search-events)
- [Extract and Highlight Text in Blazor PDF Viewer Component](../faqs/how-to-extract-particular-text-and-highlight)