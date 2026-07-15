---
layout: post
title: Text search and extraction in React PDF Viewer | Syncfusion
description: Overview of text search capabilities, UI features, programmatic APIs, events, and text extraction in the Syncfusion React PDF Viewer.
platform: document-processing
control: Text search
documentation: ug
domainurl: ##DomainURL##
---

# Text search and extraction in React PDF Viewer

The React PDF Viewer provides an integrated text search experience that supports both interactive UI search and programmatic searches. Enable the feature by importing [`TextSearch`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch) and injecting it into the viewer services and by setting [`enableTextSearch`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextsearch) as needed. To give more low-level information about text, [`findText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtext) and [`findTextAsync`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtextasync) methods can be used.

The [`extractText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#extracttext) API can be used to retrieve plain text from pages or structured text items with their positional bounds, allowing you to index document content, perform precise programmatic highlighting, map search results to coordinates, and create custom overlays or annotations. It can return full-page text or itemized fragments with bounding rectangles for each extracted element, enabling integration with search, analytics, and downstream processing workflows. See [Extract Text](../how-to/extract-text), [Extract Text Options](../how-to/extract-text-option), and [Extract Text Completed](../how-to/extract-text-completed) for details.

## Key capabilities

- **Text search UI**: real‑time suggestions while typing, selectable suggestions from the popup, match‑case and "match any word" options, and search navigation controls.
- **Text search programmatic APIs**: mirror UI behavior with [`searchText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#searchtext), [`searchNext`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#searchnext), [`searchPrevious`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#searchprevious), and [`cancelTextSearch`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#canceltextsearch); query match coordinates (bounding rectangles) with [`findText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtext) and [`findTextAsync`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtextasync).
- **Text extraction**: use [`extractText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#extracttext) to retrieve page text and, optionally, positional bounds for extracted items (useful for indexing, custom highlighting, and annotations).
- **Text search toggle**: enable or disable the search feature at runtime with the [`enableTextSearch`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#enabletextsearch) property (default: `true`).
- **Text search events**: respond to [`textSearchStart`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textsearchstart), [`textSearchHighlight`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textsearchhighlight), and [`textSearchComplete`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#textsearchcomplete) for UI sync, analytics, and custom overlays. See [Text Search Events](./text-search-events) for subscription examples.

## When to use which API

- Use the toolbar/search panel for typical interactive searches and navigation.
- Use [`searchText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#searchtext) / [`searchNext`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#searchnext) / [`searchPrevious`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#searchprevious) when driving search programmatically but keeping behavior consistent with the UI.
- Use [`findText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtext) / [`findTextAsync`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/textsearch#findtextasync) when you need match coordinates (bounding rectangles) for a page or the whole document.
- Use [`extractText`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#extracttext) when you need plain page text or structured text items with bounds. 

## See also

- [Find Text](./find-text)
- [Text Search Features](./text-search-features)
- [Text Search Events](./text-search-events)
- [Extract Text](../how-to/extract-text)
- [Extract Text Options](../how-to/extract-text-option)
- [Extract Text Completed](../how-to/extract-text-completed)