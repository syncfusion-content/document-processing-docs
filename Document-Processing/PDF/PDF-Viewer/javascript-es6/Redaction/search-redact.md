---
layout: post
title: Search text and redact in Typescript PDF Viewer | Syncfusion
description: Learn how to find text and add redaction annotations programmatically in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Search text and redact in JavaScript (ES6) PdfViewer

You can search for a keyword in the loaded PDF and automatically add redaction annotations over each match. The example below wires the extractTextCompleted event, triggers text extraction, performs a search, and places redaction annotations for every result.

N> Prerequisites: Add the PdfViewer control to your JavaScript application and ensure a document is loaded. Make sure the redaction feature is available in the version you are using. Once applied, redaction permanently removes the selected content.

## UI
```html
<button id="searchTextRedact">Search Text and Redact</button>
```

## Implementation (ES6)
```js
// Assumes `viewer` is an initialized PDF Viewer instance and a document is loaded
const btn = document.getElementById('searchTextRedact');

btn.addEventListener('click', () => {
  // Handle text extraction completion
  viewer.extractTextCompleted = (args) => {
    const searchText = 'syncfusion'; // change to your keyword

    // Perform text search for the provided term
    const searchResults = viewer.textSearchModule.findText(searchText, false);

    if (!searchResults || searchResults.length === 0) {
      console.warn('No matches found.');
      return;
    }

    // Iterate through search results and add redaction annotations
    for (let i = 0; i < searchResults.length; i++) {
      const pageResult = searchResults[i];
      if (!pageResult.bounds || pageResult.bounds.length === 0) continue;

      for (let j = 0; j < pageResult.bounds.length; j++) {
        const bound = pageResult.bounds[j];

        // Convert from points (72 DPI) to pixels (96 DPI) and add redaction
        viewer.annotation.addAnnotation('Redaction', {
          bound: {
            x: (bound.x * 96) / 72,
            y: (bound.y * 96) / 72,
            width: (bound.width * 96) / 72,
            height: (bound.height * 96) / 72
          },
          pageNumber: pageResult.pageIndex + 1,
          overlayText: 'Confidential',
          fillColor: '#00FF40FF',
          fontColor: '#333333',
          fontSize: 12,
          fontFamily: 'Arial',
          textAlign: 'Center',
          markerFillColor: '#FF0000',
          markerBorderColor: '#000000'
        });
      }
    }
  };

  // Trigger text extraction to raise the event
  // If your app already extracted text earlier, you can call the search directly
  if (typeof viewer.extractText === 'function') {
    // Extract text for all pages (if supported in your build)
    viewer.extractText(true);
  }
});
```

## Notes
- Ensure the PDF is fully loaded before triggering extraction and search.
- Bounds from search are in points (72 DPI). Convert to pixels (96 DPI) to align with annotation coordinates.
- Customize overlay text, colors, and typography as needed.
- Adding a redaction annotation covers the content visually. To permanently remove sensitive data, use the viewer's Apply Redaction action or equivalent API if available in your version.

## See also

- [Overview](./overview)
- [Programmatic support](./programmatic-support)
- [Events](./events)