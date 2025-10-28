---
layout: post
title: Fix document loading issues in v23.1+ for the JavaScript PDF Viewer component
description: Resolve document rendering failures in v23.1 or newer by calling dataBind before load, verifying source URLs, checking CORS and CSP, and confirming network connectivity in the JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Document Loading Issues in Version 23.1 or Newer

If the document does not render in the viewer when using version 23.1 or newer, follow these steps:

1. Call `pdfviewer.dataBind()` before `load()`. Starting with v23.1, an explicit dataBind call is required to initialize data binding and render correctly.

```javascript
var viewer = new ej.pdfviewer.PdfViewer ({
serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'});

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation,  ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner);

viewer.appendTo('#pdfViewer');
viewer.dataBind();
viewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
```

2. Verify the document source. Ensure the URL or path is valid and accessible.
3. Check network connectivity. The viewer cannot fetch the document without a stable connection.
4. Inspect console errors. Use browser developer tools to identify issues.
5. Validate the initialization order. Initialize the viewer, call `dataBind()`, then call `load()`.
6. Update to the latest viewer version. Issues may be resolved in newer releases.
7. Configure CORS correctly for cross-domain documents.
8. Review Content Security Policy (CSP) settings. Ensure external resources are permitted. See the Content Security Policy troubleshooting guide in the Syncfusion documentation for details.

Following this checklist typically resolves document loading issues in v23.1 or newer.
