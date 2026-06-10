---
layout: post
title: Text search and Extraction in Blazor PDF Viewer | Syncfusion
description: Overview of text search capabilities, UI features, programmatic APIs, events and text extraction in the Syncfusion Blazor PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Text search and extraction in Blazor PDF Viewer

The Blazor PDF Viewer provides an integrated text search experience that supports both interactive UI search and programmatic searches. Enable the feature by setting [`EnableTextSearch`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableTextSearch) as needed. To give more low-level information about text, methods like [`SearchTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchTextAsync_System_String_System_Boolean_) can be used.

The text search functionality allows you to retrieve and locate content within PDF documents with case-sensitive or case-insensitive matching, enabling integration with search analytics and downstream processing workflows.

## Key capabilities

- **Text search UI**: real‑time search from the toolbar, match‑case option, and search navigation controls.
- **Text search programmatic APIs**: mirror UI behavior with [`SearchTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchTextAsync_System_String_System_Boolean_), [`SearchNextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchNextAsync), [`SearchPreviousAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchPreviousAsync), and [`CancelTextSearchAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_CancelTextSearchAsync).
- **Text search events**: respond to [`OnTextSearchStart`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchStart), [`OnTextSearchHighlight`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchHighlight), and [`OnTextSearchComplete`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchComplete) for UI sync, analytics, and custom overlays.

## When to use which API

- Use the toolbar/search panel for typical interactive searches and navigation.
- Use [`SearchTextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchTextAsync_System_String_System_Boolean_) / [`SearchNextAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchNextAsync) / [`SearchPreviousAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.SfPdfViewer2.html#Syncfusion_Blazor_SfPdfViewer_SfPdfViewer2_SearchPreviousAsync) when driving search programmatically but keeping behavior consistent with the UI.
- Use [`OnTextSearchStart`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchStart), [`OnTextSearchHighlight`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchHighlight), and [`OnTextSearchComplete`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSearchComplete) events when you need to respond to search lifecycle changes for UI updates or logging.

## Further reading

- [Text Search Features](./text-search-features)
- [Text Search Events](./text-search-events)
