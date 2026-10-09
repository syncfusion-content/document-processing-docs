---
layout: post
title: About Syncfusion ASP.NET MVC PDF Viewer Text Search | Syncfusion
description: Learn about the Syncfusion ASP.NET MVC PDF Viewer Text Search section and the key capabilities it provides.
platform: document-processing
control: Text search
documentation: ug
---

# About Syncfusion ASP.NET MVC PDF Viewer Text Search

The ASP.NET MVC PDF Viewer provides an integrated text search experience that supports both interactive UI search and programmatic searches. Enable the feature by setting [`enableTextSearch`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextSearch) on the viewer. To get more low-level information about text, [`findText`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FindText) and [`findTextAsync`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_FindTextAsync) methods can be used.

The [`extractText`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ExtractText) API can be used to retrieve plain text from pages or structured text items with their positional bounds, allowing you to index document content, perform precise programmatic highlighting, map search results to coordinates, and create custom overlays or annotations. It can return full-page text or itemized fragments with bounding rectangles for each extracted element, enabling integration with search, analytics, and downstream processing workflows. See [Extract Text](../how-to/extract-text), [Extract Text Options](../how-to/extract-text-option), and [Extract Text Completed](../how-to/extract-text-completed) for details.

## Key capabilities

- **Text search UI**: real-time suggestions while typing, selectable suggestions from the popup, match-case and "match any word" options, and search navigation controls.
- **Programmatic search APIs**: mirror UI behavior with `searchText`, `searchNext`, `searchPrevious`, and `cancelTextSearch`; query match coordinates (bounding rectangles) with `findText` and `findTextAsync`.
- **Text extraction**: use `extractText` to retrieve page text and, optionally, positional bounds for extracted items (useful for indexing, custom highlighting, and annotations).
- **Text search toggle**: enable or disable the search feature at runtime with the `enableTextSearch` property (default: `true`).
- **Text search events**: respond to `textSearchStart`, `textSearchHighlight`, and `textSearchComplete` for UI sync, analytics, and custom overlays. See [Text Search Events](./text-search-events) for subscription examples.

## When to use which API

- Use the toolbar/search panel for typical interactive searches and navigation.
- Use `searchText` / `searchNext` / `searchPrevious` when driving search programmatically but keeping behavior consistent with the UI.
- Use `findText` / `findTextAsync` when you need match coordinates (bounding rectangles) for a page or the whole document.
- Use `extractText` when you need plain page text or structured text items with bounds.

## See also

- [Text Search Features](./text-search-features)
- [Text Search Events](./text-search-events)
- [Find Text](./find-text)
- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)
