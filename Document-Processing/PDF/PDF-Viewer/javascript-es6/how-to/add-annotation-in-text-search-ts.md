---
layout: post
title: Add rectangle annotation from textSearch in TypeScript PDF Viewer | Syncfusion
description: Learn to add rectangle annotations using text search bounds in the TypeScript PDF Viewer component, including initialization and search controls.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add rectangle annotations using text search bounds in PDF Viewer

A concise guide to adding rectangle annotations at highlighted text search results in the TypeScript PDF Viewer to visually emphasize matches and improve readability.

## Steps to add rectangle annotations on search result highlight

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Initialize the PDF Viewer with the required modules

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

**Step 3:** Add a rectangle annotation when a search result is highlighted

Define a callback for the `textSearchHighlight` event to add a rectangle annotation at each match.

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

**Step 4:** Add search controls

Ensure that the HTML includes buttons for text search operations.

```html
<button id="searchText">Search Text</button>
<button id="searchNext">Search Next</button>
<button id="searchCancel">Cancel Search</button>
```

Use the following TypeScript code to handle search controls:

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

Following these steps enables the PDF Viewer to add rectangle annotations at search result locations, improving the visibility of matches.

[View Sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/)
