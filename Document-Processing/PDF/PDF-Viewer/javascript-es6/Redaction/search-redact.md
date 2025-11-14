---
layout: post
title: Search text and redact in Typescript PDF Viewer | Syncfusion
description: Learn how to find text and add redaction annotations programmatically in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Search text and redact in JavaScript (ES6) PdfViewer

You can search for a keyword in the loaded PDF and automatically add redaction annotations over each match. The example below wires the extractTextCompleted event, triggers text extraction, performs a search, and places redaction annotations for every result.

N> Prerequisites: Add the PdfViewer control to your JavaScript application and ensure a document is loaded. Make sure the redaction feature is available in the version you are using. Once applied, redaction permanently removes the selected content.

## Steps to add Redaction annotations on search Text Bounds

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample.


**Step 2:** Use the following code-snippets to Add Redaction annotation on Search Text Bounds.


```html
    <button id="searchTextRedact">Search Text and Redact</button>
    <button id="applyRedaction">Apply Redaction</button>
```
```ts
import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, RedactionSettings } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
});

//Adding Redaction Tool in the toolbar
viewer.toolbarSettings.toolbarItems = ['OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'CommentTool', 'SubmitForm', 'AnnotationEditTool', 'RedactionEditTool', 'FormDesignerEditTool', 'SearchOption', 'PrintOption', 'DownloadOption'];
viewer.appendTo('#PdfViewer');

//EventListener to Search Text and Redact 
document.getElementById('searchTextRedact')?.addEventListener('click', () => {
        // Function to handle extractTextCompleted event
        viewer.extractTextCompleted = args => {
            const searchText = "syncfusion"; //Provide text to be redacted

            // Perform text search
            const searchResults = viewer.textSearchModule.findText(searchText, false);

            if (!searchResults || searchResults.length === 0) {
                console.warn("No matches found.");
                return;
            }

            // Loop through search results
            for (let i = 0; i < searchResults.length; i++) {
                const pageResult = searchResults[i];
                if (!pageResult || !pageResult.bounds || pageResult.bounds.length === 0) { continue; }

                // guard pageIndex (fixes TS18048)
                if (pageResult.pageIndex == null) { continue; }
                const pageNumber = pageResult.pageIndex + 1;

                // Loop through each bounding box of the found text
                for (let j = 0; j < pageResult.bounds.length; j++) {
                    const bound = pageResult.bounds[j];

                    // Add a redaction annotation at the found text location
                    viewer.annotation.addAnnotation("Redaction", {
                        bound: {
                            x: (bound.x * 96) / 72,
                            y: (bound.y * 96) / 72,
                            width: (bound.width * 96) / 72,
                            height: (bound.height * 96) / 72
                        },
                        pageNumber: pageNumber,
                        overlayText: "Confidential",
                        fillColor: "#00FF40FF",
                        fontColor: "#333333",
                        fontSize: 12,
                        fontFamily: "Arial",
                        // removed textAlign property (fixes TS2353)
                        markerFillColor: "#FF0000",
                        markerBorderColor: "#000000"
                    }as RedactionSettings);
                }
            }
        };
    });

//EventListener to Apply Redaction
document.getElementById("applyRedaction")?.addEventListener('click', ()=>{
    viewer.annotation.redact();
});
```

## Notes
- Ensure the PDF is fully loaded before triggering extraction and search.
- Bounds from search are in points (72 DPI). Convert to pixels (96 DPI) to align with annotation coordinates.
- Customize overlay text, colors, and typography as needed.
- Adding a redaction annotation covers the content visually. To permanently remove sensitive data, use the viewer's Apply Redaction action or equivalent API if available in your version.

## See also

* [Overview of Redaction](./overview)
* [Programmatic Support in Redaction](./programmatic-support)
* [UI interactions](./ui-interaction)
* [Redaction in Mobile View](./mobile-view)
* [Redaction Toolbar](./toolbar)