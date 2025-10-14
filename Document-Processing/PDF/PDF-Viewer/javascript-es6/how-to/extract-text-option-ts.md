---
layout: post
title: Configure extractTextOption in TypeScript PDF Viewer | Syncfusion
description: Learn how to use the extractTextOption property in the Syncfusion TypeScript PDF Viewer to control text extraction and memory usage.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Configure extractTextOption in TypeScript PDF Viewer

The `extractTextOption` property controls how text is extracted and optimizes memory usage. It also affects the data returned in the `extractTextCompleted` event. Choose one of the following options to determine the text and layout data to retrieve.

### Available Options:

**None:** No text information is extracted or returned. This is useful when you want to optimize memory usage and don't need any text data.

**TextOnly:** Extracts only the plain text from the document. This option excludes any layout or positional information.

**BoundsOnly:** Extracts layout information, such as bounds or coordinates, without including the plain text data.

**TextAndBounds:** Extracts both the plain text and the layout (bounds) information, which is the default behavior.

The following example demonstrates how to configure the `extractTextOption` property to control the level of text extraction:

```ts

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, PageOrganizer, ExtractTextOption} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, PageOrganizer);

let viewer: PdfViewer = new PdfViewer();
viewer.documentPath= 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
viewer.resourceUrl= "https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib";
viewer.extractTextOption = ExtractTextOption.None; // Options: 'None', 'TextOnly', 'BoundsOnly', 'TextAndBounds'
viewer.appendTo("#PdfViewer");

```

### Description of Each Option
**extractTextOption.TextAndBounds (default):** This option returns both plain text and its positional data (bounds). Use this option when you need to access both the content of the PDF and its layout for further processing or analysis.

**extractTextOption.TextOnly:** This option returns only the plain text from the PDF. No positional or layout data is included. Note that when using this option, text search functionality will be disabled. In such cases, it is recommended to use findTextAsync for text searching.

**extractTextOption.BoundsOnly:** This option returns only the layout information (bounds) of the text, excluding the actual content. It is useful when the focus is on the position of text elements rather than the text itself.

**extractTextOption.None:** This option does not extract or return any text or layout information. It is used to optimize memory usage when no text extraction is necessary. This setting is only relevant for the `extractTextCompleted` event and cannot be used with the `ExtractText` method.

N> Text search: When using the `extractTextOption.TextOnly` or `extractTextOption.None` options, the `findText` method is unavailable. Use the `findTextAsync` method to perform text searches asynchronously.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/)