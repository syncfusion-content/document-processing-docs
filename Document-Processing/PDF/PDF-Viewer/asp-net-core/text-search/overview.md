---
layout: post
title: About Syncfusion ASP.NET Core PDF Viewer Text Search | Syncfusion
description: Learn about the Syncfusion ASP.NET Core PDF Viewer Text Search section and the key capabilities it provides.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# About Syncfusion ASP.NET Core PDF Viewer Text Search

The ASP.NET Core PDF Viewer provides an integrated text search experience that supports both interactive UI search and programmatic searches. Enable the feature by setting the [`enableTextSearch`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextSearch) property as needed. To give more low-level information about text, the `findText` and `findTextAsync` methods can be used.

The text search functionality is built into the viewer and allows you to retrieve plain text from pages or structured text items with their positional bounds, enabling you to index document content, perform precise programmatic highlighting, map search results to coordinates, and create custom overlays or annotations.

## Key capabilities

- **Text search UI**: real‑time suggestions while typing, selectable suggestions from the popup, match‑case and "match any word" options, and search navigation controls.
- **Text search programmatic APIs**: mirror UI behavior with `searchText`, `searchNext`, `searchPrevious`, and `cancelTextSearch` methods; query match coordinates (bounding rectangles) with `findText` and `findTextAsync`.
- **Text search toggle**: enable or disable the search feature at runtime with the [`enableTextSearch`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextSearch) property (default: `true`).
- **Text search events**: respond to `textSearchStart`, `textSearchHighlight`, and `textSearchComplete` events for UI sync, analytics, and custom overlays. See [Text Search Events](./text-search-events) for subscription examples.

## When to use which API

- Use the toolbar/search panel for typical interactive searches and navigation.
- Use `searchText`, `searchNext`, `searchPrevious` when driving search programmatically but keeping behavior consistent with the UI.
- Use `findText` or `findTextAsync` when you need match coordinates (bounding rectangles) for a page or the whole document.

## See also

- [Find Text](./find-text)
- [Text Search Features](./text-search-features)
- [Text Search Events](./text-search-events)
