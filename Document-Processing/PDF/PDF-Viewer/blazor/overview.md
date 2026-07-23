---
layout: post
title: Overview of Blazor PDF Viewer Component | Syncfusion
description: Learn about Blazor SfPdfViewer including performance, offline loading, annotations, form filling, printing, and support for Server & WebAssembly.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Overview of Blazor PDF Viewer Component

The Blazor `SfPdfViewer` component enables viewing, annotating, printing, and downloading PDF files in Blazor applications without requiring a separate server-side PDF service. It provides fast, responsive rendering and is straightforward to integrate into both Blazor Server and Blazor WebAssembly (WASM) applications.

`SfPdfViewer` delivers the core capabilities of the [Blazor PDF Viewer component](../blazor-classic/overview) while adding client-side rendering, reduced server round-trips, and a unified cross-platform package. Key advantages are summarized below.

## Key Features

### Page Navigation
* [Thumbnail page view](./interactive-pdf-navigation/page-thumbnail)
* [Bookmark panel](./interactive-pdf-navigation/bookmark)
* [Hyperlink navigation](./interactive-pdf-navigation/hyperlink)
* [Table of contents navigation](./interactive-pdf-navigation/table-of-content)

### Core Interactions
* [Zooming](./magnification) and [panning](./interaction#panning-mode)
* [Text searching](./text-search/overview)
* [Text selection and copy](./text-selection/overview)
* [Print](./print/overview) PDF files.

### Annotations
* [Highlight](./annotation/text-markup/highlight-annotation), [underline](./annotation/text-markup/underline-annotation), and [strikethrough](./annotation/text-markup-annotation#strikethrough-a-text) text markup
* Shape annotations including [rectangle](./annotation/shape/rectangle-annotation), [circle](./annotation/shape/circle-annotation), [polygon](./annotation/shape/polygon-annotation), [line](./annotation/shape/line-annotation), and [arrow](./annotation/shape/arrow-annotation)
* [Stamp annotations](./annotation/stamp-annotation) with built-in and custom stamps
* Measurement annotations including [area](./annotation/measurement/area-annotation), [distance](./annotation/measurement/distance-annotation), [perimeter](./annotation/measurement/perimeter-annotation), [radius](./annotation/measurement/radius-annotation) and [volume](./annotation/measurement/volume-annotation)
* [Free text annotations](./annotation/free-text-annotation)
* [Comments](./annotation/comments) and [sticky notes](./annotation/sticky-notes-annotation)
* [Redaction annotations](./redaction/overview)

### Forms
* [Form filling](./forms/form-filling)
* [Form designer](./forms/form-designer)

### Signatures
* [Handwritten signature](./hand-written-signature)

## Supported Features: Desktop vs Mobile

The following table summarizes feature support on desktop and mobile devices.

| Feature | Desktop | Mobile |
|--|--|--|
| Keyboard interaction | Yes | No |
| Open file from a different origin | Yes | Yes |
| Save a file to a different origin | Yes | Yes |
| Toolbar | Yes | No |
| Mobile toolbar | No | Yes |
| Navigation toolbar | Yes | No |
| Page navigation | Yes | No |
| Magnification | Yes | Yes |
| Text search | Yes | Yes |
| Text selection | Yes | No |
| Pan mode | Yes | Yes |
| Handwritten signature | Yes | Yes |
| Annotation rendering | Yes | Yes |
| Annotation interaction | Yes | Yes |
| Annotation property editing | Yes | No |
| Add annotation through touch | Yes | No |
| Import/export annotation | Yes | Yes |
| Form fields rendering | Yes | Yes |
| Form Designer | Yes | Yes |
| Modern Navigation Panel | Yes | Yes |
| Organize Pages | Yes | Yes |

N> See the [Blazor SfPdfViewer feature tour](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) for a concise overview of capabilities; the [Blazor SfPdfViewer demo](https://liveviewereditorblazorapp.azurewebsites.net/demos/pdf-viewer/blazor-server/pdf-viewer/default-functionalities) is also available to explore core features interactively.