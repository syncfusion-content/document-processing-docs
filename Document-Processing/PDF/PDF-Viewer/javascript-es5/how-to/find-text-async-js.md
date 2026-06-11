---
layout: post
title: Use findTextAsync in JavaScript PDF Viewer | Syncfusion
description: Learn how to search text asynchronously with findTextAsync in the Syncfusion JavaScript PDF Viewer and retrieve match bounds.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Find text with findTextAsync in JavaScript PDF Viewer

The `findTextAsync` method searches for a string or array of strings asynchronously and returns bounding rectangles for each match. Use it to locate text positions across the document or on a specific page.

Here is an example of how to use `findTextAsync`:

Example 1: Search for a single string ('pdf') case-insensitively across all pages

```html
 <button id="findText">Find Text</button>
 <button id="findTexts">Find Texts</button>
```
```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
});
ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
  pdfviewer.appendTo('#PdfViewer');

document.getElementById('findText').addEventListener('click', function () {
  pdfviewer.textSearchModule.findTextAsync('pdf', false).then(res => {
      console.log(res);  // Logs the search result for the term 'pdf'
  });
});
```
Example 2: Search for multiple strings (['pdf', 'the']) case-insensitively across all pages
```js
document.getElementById('findTexts').addEventListener('click', function () {
  pdfviewer.textSearchModule.findTextAsync(['pdf', 'the'], false).then(res => {
      console.log(res);  // Logs the search result for the terms 'pdf' and 'the'
  });
});
```

### Description

The `findTextAsync` method performs an asynchronous text search within a PDF document. It returns a Promise that resolves with an array of result objects describing each match. Each match object contains information such as the page index and the bounding rectangles for the matched text, which can be used to highlight or navigate to occurrences. By default, the search runs across all pages; supply the optional `pageIndex` parameter to limit the search to a specific page.

### Parameters

**text (string | string[]):** The text or array of texts to search for in the document.

**matchCase (boolean):** Whether the search is case-sensitive. `true` matches exact case; `false` ignores case.

**pageIndex (optional, number):** Zero-based page index to search. If omitted, searches all pages.

### Example workflow

**findTextAsync('pdf', false):**
This will search for the term "pdf" in a case-insensitive manner across all pages of the document.

**findTextAsync(['pdf', 'the'], false):**
This will search for the terms "pdf" and "the" in a case-insensitive manner across all pages of the document.

**findTextAsync('pdf', false, 0):**
This will search for the term "pdf" in a case-insensitive manner only on the first page (page 0).

**findTextAsync(['pdf', 'the'], false, 1):**
This will search for the terms "pdf" and "the" in a case-insensitive manner only on the second page (page 1).

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)