---
layout: post
title: How PDF Rendering Works in the Browser in React | Syncfusion
description: Understand how PDF documents are parsed, rasterized, and displayed in the browser using the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How PDF Rendering Works in the Browser

Rendering a PDF in the browser involves converting a structured PDF document into visual and interactive content that users can view and work with. The Syncfusion React PDF Viewer uses a combination of **PDFium**, [Syncfusion PDF Library](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview), and viewer-side logic to achieve accurate rendering, smooth interactions, and scalable performance.

This page explains the **conceptual rendering flow** used by the viewer, focusing on responsibilities and data flow rather than low-level engine internals.

## Overview of the Rendering Pipeline

PDF rendering in the browser follows a staged pipeline:

**PDF Loading → Parsing & Processing → Page Rasterization → Layer Composition → User Interaction**

Each stage is designed to isolate responsibilities and ensure responsiveness, even for large or complex documents.

## 1. PDF Loading and Parsing

When a PDF document is opened in the viewer:

- The PDF file is loaded from a URL, local file, or streamed source.
- The document structure (pages, objects, and resources) is parsed.
- Parsing and document-level processing are handled using the [Syncfusion PDF Library](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview).

Large documents are processed incrementally so that initial pages can be displayed without waiting for the entire document to be parsed.

## 2. Document and Resource Processing

After parsing, the **Syncfusion PDF Library** manages document-level features and metadata, including:

- Text extraction and layout information
- Annotation data (highlights, shapes, comments, stamps)
- Form fields and form data
- Document structure and page hierarchy

This processing stage prepares the data required for rendering and interaction but does not generate visual output.

## 3. Page Rasterization (PDFium)

Visual rendering of PDF pages is performed using **PDFium**, which is used **exclusively to rasterize pages into images**.

The rasterization process works as follows:

- Individual pages are passed to PDFium for rendering.
- PDFium converts each page into a raster image at the required resolution.
- The generated image is returned to the viewer for display.

Rendering is **DPI-aware**, ensuring sharp output across standard and high‑resolution displays. Page images may be cached and reused during scrolling or zooming to improve performance.

N> PDFium is used only for **page-to-image rendering**. It is not responsible for text extraction, annotations, form logic, or UI behavior.


## 4. Rendering and Interaction Layers

Once a page image is generated, the viewer composes the final output using multiple viewer-managed layers:

- **Page Image Layer**  
  The page image produced by PDFium after rasterization. This serves as the visual base of the page.

- **Text Layer**  
  Generated using data from the **Syncfusion PDF Library** and viewer logic. This invisible layer enables text selection, search, and copy‑paste while aligning precisely with the page image.

- **Annotation and Form Layer**  
  Managed entirely by the **PDF Library and viewer**. This layer supports annotations, highlights, comments, and interactive form fields.

- **UI Layer**  
  Viewer interface elements such as toolbars, thumbnails, navigation controls, and dialogs.

This layered approach allows interactive elements to update independently without requiring page images to be re-rendered.

## 5. Processing Model and Thread Usage

PDF rendering and processing involve CPU-intensive operations. To maintain UI responsiveness:

- **PDFium rasterization** is typically executed in **Web Workers**.
- **PDF Library processing** (text, annotations, form data) is coordinated by viewer logic.
- The main thread is responsible for DOM updates and handling user interactions.


## 6. Lazy Rendering and Performance Optimization

To efficiently handle large PDF documents:

- Only pages that are visible in the viewport undergo rasterization and are displayed initially.
- Additional pages are rendered on demand as the user scrolls or navigates.
- Previously rendered page images may be reused when possible.

This lazy rendering approach reduces memory usage and improves performance across devices.

## Summary

The Syncfusion React PDF Viewer renders PDF documents in the browser using a clear separation of responsibilities. The **Syncfusion PDF Library** handles document parsing, text extraction, annotations, and form logic, while **PDFium** is used solely to rasterize pages into images. Viewer-managed layers and lazy rendering ensure smooth interaction, accurate visuals, and scalable performance for documents of all sizes.

---

## See Also

- [Architecture of Syncfusion React PDF Viewer](../architecture/architecture-pdfviewer)
- [Loading PDF Documents](../open-pdf-files)
- [Working with Annotations](../annotation/overview)
- [PDF Forms in React PDF Viewer](../forms/overview)
- [Syncfusion PDF Library Overview](../../../PDF-Library/overview)
