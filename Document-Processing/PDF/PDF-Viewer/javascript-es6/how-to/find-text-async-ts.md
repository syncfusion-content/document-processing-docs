---
layout: post
title: Use findTextAsync in TypeScript PDF Viewer | Syncfusion
description: Learn how to search text asynchronously with findTextAsync in the Syncfusion TypeScript PDF Viewer and retrieve match bounds.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Find text with findTextAsync in TypeScript PDF Viewer

The `findTextAsync` method searches for a string or array of strings asynchronously and returns bounding rectangles for each match. Use it to locate text positions across the document or on a specific page.

Here is an example of how to use `findTextAsync`:

Example 1: Search for a single string ('pdf') case-insensitively across all pages

```html
 <button id="findText">Find Text</button>
 <button id="findTexts">Find Texts</button>
```
```ts
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, PageOrganizer,
    ExtractTextOption} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView,
    TextSelection, TextSearch, Print, Annotation, FormFields, FormDesigner, PageOrganizer);

let viewer:  PdfViewer = new PdfViewer();
viewer.documentPath= 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
viewer.resourceUrl= "https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib";
viewer.appendTo("#PdfViewer");


const findTextButton = document.getElementById('findText');
if (findTextButton) {
    findTextButton.addEventListener('click', function () {
      viewer.textSearchModule.findTextAsync('pdf', false).then(res => {
          console.log(res);  // Logs the search result for the term 'pdf'
      });
    });
}
```
Example 2: Search for multiple strings (['pdf', 'the']) case-insensitively across all pages
```ts
const findTextButtons = document.getElementById('findTexts');
if(findTextButtons){
    findTextButtons.addEventListener('click', function () {
      viewer.textSearchModule.findTextAsync(['pdf', 'the'], false).then(res => {
          console.log(res);  // Logs the search result for the terms 'pdf' and 'the'
      });
    });
}
```

### Description

The `findTextAsync` method is designed for performing an asynchronous text search within a PDF document. You can use it to search for a single string or multiple strings, with the ability to control case sensitivity. By default, the search is applied to all pages of the document. However, you can adjust this behavior by specifying the page number (pageIndex), which allows you to search only a specific page if needed.

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

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/)