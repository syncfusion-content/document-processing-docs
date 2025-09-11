---
layout: post
title: Add Annotation in Text Search in TypeScript PdfViewer | Syncfusion
description: Learn how to add rectangle annotations using search text bounds in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Add Rectangle Annotations Using Search Text Bounds in PDF Viewer

## Overview

This guide demonstrates how to add rectangle annotations based on the bounds of highlighted search text in the PDF Viewer. This technique is useful for emphasizing search results with visual markers in annotation-supported applications.

## Steps to Add Rectangle Annotations on Search Result Highlight

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Initialize the PDF Viewer with Required Modules

```ts
import { pdf } from '@syncfusion/ej2';
import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, TextSearchHighlightEventArgs, RectangleBounds, RectangleBoundsModel, RectangleSettings } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl:'https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib'
});

pdfviewer.appendTo('#PdfViewer');
```

**Step 3:** Implement code blocks to automatically add Rectangle Annotation on Search Result Highlight

Define a callback function for the `textSearchHighlight` event to add rectangle annotations

```ts
// Highlight event handler for text search, which adds a rectangle annotation where the text is found
pdfviewer.textSearchHighlight = function(args: TextSearchHighlightEventArgs): void {
    console.log(args);
    const pageNumber: number = args.pageNumber;
    const bounds: RectangleBoundsModel = args.bounds;
    pdfviewer.annotation.addAnnotation('Rectangle', {
        offset: { x: bounds.left,  y: bounds.top },
        pageNumber: pageNumber,
        width: bounds.width,
        height: bounds.height,
    } as RectangleSettings);
};

```

**Step 3:** Add Search Controls

Ensure you have the appropriate HTML buttons for text search operations

```html
<button id="searchText">Search Text</button>
<button id="searchNext">Search Next</button>
<button id="searchCancel">Cancel Search</button>
```

Use the following Typescript code snippet to handle search controls:

```ts
// Add event listener to "searchText" button to trigger a search for the term 'PDF'
const searchTextButton = document.getElementById('searchText');
if (searchTextButton) {
    searchTextButton.addEventListener('click', function() {
        pdfviewer.textSearchModule.searchText('PDF', false);
    });
}

// Add event listener to "searchNext" button to navigate to the next search result
const searchNextButton = document.getElementById('searchNext');
if (searchNextButton) {
    searchNextButton.addEventListener('click', function() {
    pdfviewer.textSearch.searchNext();
    });
}

// Add event listener to "searchCancel" button to cancel the current text search operation
const searchCancelButton = document.getElementById('searchCancel');
if (searchCancelButton) {
    searchCancelButton.addEventListener('click', function() {
    pdfviewer.textSearch.cancelTextSearch();
    });
}
```

By following this guide, you will enable the PDF Viewer to add rectangle annotations at search result locations, thus increasing the visibility of search results in your application.

[View Sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/)
