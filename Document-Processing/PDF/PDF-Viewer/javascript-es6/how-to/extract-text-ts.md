---
layout: post
title: Use extractText in TypeScript PDF Viewer | Syncfusion
description: Learn how to use the extractText method in the Syncfusion TypeScript PDF Viewer to extract text and bounds from one or more pages.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Extract text using extractText in TypeScript PDF Viewer

The `extractText` method extracts text from one or more pages and can return plain text or text with bounds for each element.

### extractText method
Retrieves text data from one page or a range of pages based on the specified options.

#### Parameters:
**startIndex:** The starting page index for text extraction (0-based index).

**endIndex or isOptions:** Either the ending page index (for multiple pages) or an option specifying extraction criteria for a single page.

**options (optional):** Additional options, such as `TextOnly` for plain text or `TextAndBounds` for detailed text data with bounds.

- TextOnly: Extracts only plain text without bounds.
- TextAndBounds: Extracts text with bounds (coordinates).

#### Returns:
Returns a Promise with:
- textData: An array of TextDataSettingsModel with details including bounds and page text.
- pageText: A concatenated string of plain text from the specified page(s).

### Usage of extractText in Syncfusion PdfViewer Control
Here is an example that demonstrates how to use the extractText method along with event handling:

```html
 <button id="extractText">Extract Text</button>
 <button id="extractTexts">Extract Texts</button>
```
```ts
import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel, ExtractTextOption } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib",
});
viewer.appendTo("#PdfViewer");

// Event Listener for Extract Text from Single Page
const extractTextButton = document.getElementById('extractText');
if (extractTextButton) {
extractTextButton.addEventListener('click', function () {
    viewer.extractText(1, ExtractTextOption.TextOnly).then((val) => {
        console.log('Extracted Text from Page 1:');
        console.log(val);  // Logs the extracted text from page 1
    });
});
}

// Event Listener for Extract Text from Multiple Pages
const extractTextButtons = document.getElementById('extractTexts');
if (extractTextButtons) {
extractTextButtons.addEventListener('click', function () {
    viewer.extractText(0, 2, ExtractTextOption.TextOnly).then((val) => {
        console.log('Extracted Text from Pages 0 to 2:');
        console.log(val);  // Logs the extracted text from pages 0 to 2
    });
});
}
```

#### Explanation
- Single page: Extracts text from page 1 (`startIndex = 1`) using `TextOnly`.
- Multiple pages: Extracts text from pages 0–2 (`startIndex = 0, endIndex = 2`) using `TextOnly`.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/Extract%20Text)

## See Also

[Extract Text Options](./extract-text-option-ts)
[Find Text](../text-search/find-text)
[Text Search Features](../text-search/text-search-events)
[Text Search Events](../text-search/text-search-events)