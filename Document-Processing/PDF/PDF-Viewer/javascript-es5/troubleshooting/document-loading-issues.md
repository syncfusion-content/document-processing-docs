---
layout: post
title: Fix document loading issues in v23.1+ for the JavaScript PDF Viewer component
description: Resolve document rendering failures in v23.1 or newer by calling dataBind before load, verifying source URLs, checking CORS and CSP, and confirming network connectivity in the JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Document Loading Issues in Version 23.1 or Newer

If a document does not render in the viewer when using version 23.1 or newer, follow these steps:

1. Call `viewer.dataBind()` before `load()`. Starting with v23.1, an explicit `dataBind()` call is required to initialize data binding and render correctly. Ensure `dataBind()` is invoked after `appendTo()` and before `load()` as shown in the example.

```javascript
var viewer = new ej.pdfviewer.PdfViewer ({
serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'});

ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation,  ej.pdfviewer.FormFields, ej.pdfviewer.FormDesigner);

viewer.appendTo('#pdfViewer');
viewer.dataBind();
viewer.load('https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf', null);
```

2. Verify the document source: ensure the document URL or file path is correct and reachable.
3. Check network connectivity: the viewer requires network access to fetch remote documents.
4. Inspect console errors using browser developer tools to identify runtime or network failures.
5. Confirm initialization order: instantiate the viewer, call `dataBind()`, then call `load()`.
6. Upgrade to the latest viewer release; the issue may be fixed in newer versions.
7. Configure CORS correctly for cross-origin documents so the viewer can retrieve remote files.
8. Review Content Security Policy (CSP) settings and permit any external resources required by the viewer. See the Content Security Policy troubleshooting guide in the Syncfusion documentation for details.

N> For v23.1 and later, ensure `dataBind()` is called before `load()`; earlier releases may not require this call.

Following this checklist typically resolves document loading issues in v23.1 and later.
