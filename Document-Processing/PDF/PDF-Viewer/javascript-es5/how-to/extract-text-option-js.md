---
layout: post
title: Configure extractTextOption in JavaScript PDF Viewer | Syncfusion
description: Learn how to use the extractTextOption property in the Syncfusion JavaScript PDF Viewer to control text extraction and memory usage.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Extract text option in the JavaScript PDF Viewer

The `extractTextOption` property controls the amount of text and layout information returned by the viewer. Adjusting this value helps balance memory usage and the level of detail required for downstream processing. The viewer exposes four options:

### Available Options:

- **None** — Do not extract or return any text or layout data. Use this option to minimize memory usage when textual information is not required.
- **TextOnly** — Return plain text only; layout and bounds are omitted. Note: using `TextOnly` may disable some viewer text features such as synchronous `findText`; use `findTextAsync` when asynchronous search is required.
- **BoundsOnly** — Return layout and positional data (bounds) without the plain text content.
- **TextAndBounds** — Return both plain text and its positional information (bounds). This is the default and is useful when both content and layout are required.

```js

var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
  pdfviewer.extractTextOption = 'None';  // Options: 'None', 'TextOnly', 'BoundsOnly', 'TextAndBounds'
  pdfviewer.appendTo('#PdfViewer');

```

### Description of Each Option
**extractTextOption.TextAndBounds (default):** This option returns both plain text and its positional data (bounds). Use this option when you need to access both the content of the PDF and its layout for further processing or analysis.

**extractTextOption.TextOnly:** This option returns only the plain text from the PDF. No positional or layout data is included. Note that when using this option, text search functionality will be disabled. In such cases, it is recommended to use findTextAsync for text searching.

**extractTextOption.BoundsOnly:** This option returns only the layout information (bounds) of the text, excluding the actual content. It is useful when the focus is on the position of text elements rather than the text itself.

**extractTextOption.None:** This option does not extract or return any text or layout information. It is used to optimize memory usage when no text extraction is necessary. This setting is only relevant for the `extractTextCompleted` event and cannot be used with the `ExtractText` method.

N> Text search: When using the `extractTextOption.TextOnly` or `extractTextOption.None` options, the `findText` method is unavailable. Use the `findTextAsync` method to perform text searches asynchronously.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)

## See Also

[Find Text](../text-search/find-text)
[Text Search Events](../text-search/text-search-events)
[Text Search Features](../text-search/text-search-features)
[Extract Text](../how-to/extract-text-js)
[Extract Text Completed](../how-to/extract-text-completed-js)