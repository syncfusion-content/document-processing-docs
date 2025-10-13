---
layout: post
title: Overview of Blazor PDF Viewer Component | Syncfusion
description: Learn about Blazor SfPdfViewer including, performance, offline loading, annotations, form filling, printing, and support for Server & WebAssembly.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Overview of Blazor PDF Viewer Component

The Blazor SfPdfViewer component enables viewing, editing, printing, and downloading PDF files in Blazor applications without a web service dependency. It is optimized for speed and responsiveness and provides a feature set comparable to the classic Blazor PDF Viewer. The component is straightforward to integrate into both Blazor Server and Blazor WebAssembly (WASM) applications.

The SfPdfViewer component provides the same key capabilities as the [Blazor PDF Viewer component](../blazor-classic/overview), with additional advantages described below.

## Performance Improvements

Rendering, scrolling, zooming, panning, and printing have been optimized for faster, smoother interaction.

## Elimination of Service Dependency

The classic PDF Viewer required a separate [service URL](../blazor/getting-started/web-assembly-application) to load documents. In the [Blazor SfPdfViewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-assembly-application), documents can be loaded directly without a service URL, enabling offline scenarios and reducing network overhead. Server-side hosting remains supported when needed.

## Common Package

Previously, separate NuGet packages were required for each operating system: [Windows](https://www.nuget.org/packages/Syncfusion.Blazor.PdfViewerServer.Windows), [Linux](https://www.nuget.org/packages/Syncfusion.Blazor.PdfViewerServer.Linux), and [OSX](https://www.nuget.org/packages/Syncfusion.Blazor.PdfViewerServer.OSX). The [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) package now provides a single, cross-platform package for all environments.

## Reduced Server Calls

In the classic viewer, many C# service calls were required to retrieve information such as page text, hyperlinks, and page images. The SfPdfViewer moves these operations to the client side, decreasing round trips and improving responsiveness.

## Some of the key features are listed below

* Accurate, reliable rendering of PDF pages.
* Easy page navigation with:
    * [Thumbnail page view](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/navigation#page-thumbnail-navigation)
    * [Bookmark panel](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/navigation#bookmark-navigation)
    * [Hyperlink navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/navigation#hyperlink-navigation)
    * [Table of contents navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/navigation#table-of-content-navigation)
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
    * [Redaction annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/redaction-annotation)
    * [Comments](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/comments) and [sticky notes](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/annotation/sticky-notes-annotation) for all annotation types
* [Form filling](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/form-filling)
* [Form designer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/form-designer)
* [Handwritten signature](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/hand-written-signature)

### Supported Features: Desktop vs Mobile

The table below lists supported and unsupported features on desktop and mobile devices.

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

N> Enable desktop mode on mobile devices using the [EnableDesktopMode](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_EnableDesktopMode) property to display the toolbar as on desktop.

N> Syncfusion<sup style="font-size:70%">&reg;</sup> provides the SfPdfViewer component for both Blazor Server and Blazor WebAssembly applications.
<br />For both Blazor WebAssembly and Blazor Server applications, use the [SfPdfViewer](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.PdfViewer.SfPdfViewer.html) component from the Syncfusion.Blazor.SfPdfViewer NuGet package. This component does not require server-side processing through a web service to render PDF files <br />For Windows, Linux, and macOS, use the [Syncfusion.Blazor.SfPdfViewer](https://www.nuget.org/packages/Syncfusion.Blazor.SfPdfViewer) NuGet package.

N> Refer to the [Blazor SfPdfViewer feature tour](https://www.syncfusion.com/pdf-viewer-sdk/blazor-pdf-viewer) for an overview of its capabilities. Explore the [Blazor SfPdfViewer demo](https://document.syncfusion.com/demos/pdf-viewer/blazor-server/pdf-viewer/default-functionalities?theme=fluent) to see the core features in action.