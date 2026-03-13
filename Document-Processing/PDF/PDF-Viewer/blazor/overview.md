---
layout: post
title: Overview of Blazor PDF Viewer Component | Syncfusion
description: Learn about Blazor SfPdfViewer including, performance, offline loading, annotations, form filling, printing, and support for Server & WebAssembly.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Overview of Blazor PDF Viewer Component

The Blazor `SfPdfViewer` component enables viewing, annotating, printing, and downloading PDF files in Blazor applications without requiring a separate server-side PDF service. It provides fast, responsive rendering and is straightforward to integrate into both Blazor Server and Blazor WebAssembly (WASM) applications.

`SfPdfViewer` delivers the core capabilities of the [Blazor PDF Viewer component](../blazor-classic/overview) while adding client-side rendering, reduced server round-trips, and a unified cross-platform package. Key advantages are summarized below.

## Performance Improvements

Rendering, scrolling, zooming, panning, and printing have been optimized for faster, smoother interaction and reduced latency.

## Elimination of Service Dependency

The classic PDF Viewer required a separate [service URL](./getting-started/web-assembly-application) to load documents. `SfPdfViewer` can load documents directly in the browser (see the [Blazor WebAssembly](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-assembly-application)), enabling offline scenarios and reducing network overhead. Server-side hosting remains supported when required.

## Common Package

Previously, separate NuGet packages were required for each operating system: [Windows](https://www.nuget.org/packages/Syncfusion.Blazor.PdfViewerServer.Windows), [Linux](https://www.nuget.org/packages/Syncfusion.Blazor.PdfViewerServer.Linux), and [OSX](https://www.nuget.org/packages/Syncfusion.Blazor.PdfViewerServer.OSX). The `Syncfusion.Blazor.SfPdfViewer` package now provides a single, cross-platform distribution for all supported environments.

## Reduced Server Calls

In the classic viewer, many C# service calls were required to retrieve page text, hyperlinks, and page images. `SfPdfViewer` performs these operations client-side where possible, decreasing round trips and improving responsiveness.

## Some of the key features are listed below

* Accurate, reliable rendering of PDF pages.
* Easy page navigation with:
    * [Thumbnail page view](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/interactive-pdf-navigation/page-thumbnail)
    * [Bookmark panel](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/interactive-pdf-navigation/bookmark)
    * [Hyperlink navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/interactive-pdf-navigation/hyperlink)
    * [Table of contents navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/interactive-pdf-navigation/table-of-content)
* Core interactions:
    * [Zooming](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/magnification) and [panning](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/interaction#panning-mode)
    * [Text searching](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/text-search)
    * Text selection and copy
* [Print](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/print) PDF files.
* Annotate PDFs with:
    * [Highlight](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/text-markup-annotation#highlight-a-text), [underline](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/text-markup-annotation#underline-a-text), and [strikethrough](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/text-markup-annotation#strikethrough-a-text) text markup
    * [Shape annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/shape-annotation): rectangle, circle, polygon, line, and arrow
    * [Stamp annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/stamp-annotation): built-in and custom stamps
    * [Measurement annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/measurement-annotation)
    * [Free text annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/free-text-annotation)
    * [Redaction annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/redaction/overview)
    * [Comments](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/comments) and [sticky notes](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/sticky-notes-annotation)
* [Form filling](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/form-filling)
* [Form designer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/form-designer)
* [Handwritten signature](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/hand-written-signature)

### Supported Features: Desktop vs Mobile

The following table summarizes feature support on desktop and mobile devices.

| Feature | Desktop | Mobile devices |
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

N> Enable desktop mode on mobile devices using the [EnableDesktopMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableDesktopMode) property to display the toolbar as on desktop.

N> The `SfPdfViewer` component is available for both Blazor Server and Blazor WebAssembly applications. Use the `SfPdfViewer` component from the `Syncfusion.Blazor.SfPdfViewer` NuGet package; server-side processing through a web service is not required to render PDF files in client scenarios. For platform-specific server packages, see the NuGet listings for Windows, Linux, and macOS.

N> See the [Blazor SfPdfViewer feature tour](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) for a concise overview of capabilities and the [Blazor SfPdfViewer demo](https://document.syncfusion.com/demos/pdf-viewer/blazor-server/pdf-viewer/default-functionalities?theme=fluent) to explore core features interactively.