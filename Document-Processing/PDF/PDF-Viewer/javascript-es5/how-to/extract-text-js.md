---
layout: post
title: Use extractText in JavaScript PDF Viewer | Syncfusion
description: Learn how to use the extractText method in the Syncfusion JavaScript PDF Viewer to extract text and bounds from one or more pages.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Extract text option in the JavaScript PDF Viewer

The `extractText` method extracts text from one or more pages and can return plain text or text with bounds for each element.

### extractText method

Retrieves text data from one page or a range of pages based on the specified options.

#### Parameters:

- **startIndex:** The starting page index for text extraction (0-based index).

- **endIndex or isOptions:** Either the ending page index (for multiple pages) or an option specifying extraction criteria for a single page.

- **options (optional):** Additional options, such as `TextOnly` for plain text or `TextAndBounds` for detailed text data with bounds.

#### Available Options

- **None** — Do not extract or return any text or layout data. Use this option to minimize memory usage when textual information is not required.
- **TextOnly** — Return plain text only; layout and bounds are omitted. Note: using `TextOnly` may disable some viewer text features such as synchronous `findText`; use `findTextAsync` when asynchronous search is required.
- **BoundsOnly** — Return layout and positional data (bounds) without the plain text content.
- **TextAndBounds** — Return both plain text and its positional information (bounds). This is the default and is useful when both content and layout are required.

#### Returns
Returns a Promise with:
- textData: An array of TextDataSettingsModel with details including bounds and page text.
- pageText: A concatenated string of plain text from the specified page(s).

### Usage of extractText in Syncfusion PDF Viewer Control

Here is an example that demonstrates how to use the extractText method along with event handling:

```html
 <button id="extractText">Extract Text</button>
 <button id="extractTexts">Extract Texts</button>
```
```js
// Initialize the PdfViewer

var viewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib",
});
viewer.appendTo("#pdfViewer");

// Event Listener for Extract Text from Single Page
document.getElementById('extractText').addEventListener('click', function () {
    viewer.extractText(1, 'TextOnly').then((val) => {
        console.log('Extracted Text from Page 1:');
        console.log(val);  // Logs the extracted text from page 1
    });
});

// Event Listener for Extract Text from Multiple Pages
document.getElementById('extractTexts').addEventListener('click', function () {
    viewer.extractText(0, 2, 'TextOnly').then((val) => {
        console.log('Extracted Text from Pages 0 to 2:');
        console.log(val);  // Logs the extracted text from pages 0 to 2
    });
});
```

#### Explanation
- Single page: Extracts text from page 1 (`startIndex = 1`) using `TextOnly`.
- Multiple pages: Extracts text from pages 0–2 (`startIndex = 0, endIndex = 2`) using `TextOnly`.

### Programmatic Examples for Extract Text Option API
Here is an example that demonstrates how to use the extractText Option along with event handling:

```html
<button id="extractNoneRange">None (Pages 0–2)</button>
<button id="extractTextOnlyRange">TextOnly (Pages 0–2)</button>
<button id="extractBoundsOnlyRange">BoundsOnly (Pages 0–2)</button>
<button id="extractTextAndBoundsRange">TextAndBounds (Pages 0–2)</button>
```

```ts
import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields, PageInfoModel, ExtractTextOption } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const viewer = new PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
});
viewer.appendTo('#PdfViewer');

// None (no text info)
const btnNone = document.getElementById('extractNoneRange');
if (btnNone) {
  btnNone.addEventListener('click', function () {
    viewer.extractText(0, 2, ExtractTextOption.None).then((val) => {
      console.log('None (Pages 0–2):', val);
    });
  });
}

// TextOnly
const btnTextOnly = document.getElementById('extractTextOnlyRange');
if (btnTextOnly) {
  btnTextOnly.addEventListener('click', function () {
    viewer.extractText(0, 2, ExtractTextOption.TextOnly).then((val: any) => {
      console.log('TextOnly (Pages 0–2):');
      console.log(val);
    });
  });
}

// BoundsOnly
const btnBoundsOnly = document.getElementById('extractBoundsOnlyRange');
if (btnBoundsOnly) {
  btnBoundsOnly.addEventListener('click', function () {
    viewer.extractText(0, 2, ExtractTextOption.BoundsOnly).then((val: any) => {
      // Typically returns val.textData with bounds per page
      console.log('BoundsOnly (Pages 0–2):');
      console.log(val);
    });
  });
}

// TextAndBounds
const btnTextAndBounds = document.getElementById('extractTextAndBoundsRange');
if (btnTextAndBounds) {
  btnTextAndBounds.addEventListener('click', function () {
    viewer.extractText(0, 2, ExtractTextOption.TextAndBounds).then((val: any) => {
      console.log('TextAndBounds (Pages 0–2):');
      console.log(val);
    });
  });
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)

## See Also

[Find Text](../text-search/find-text)
[Text Search Events](../text-search/text-search-events)
[Text Search Features](../text-search/text-search-features)
[Extract Text Options](../how-to/extract-text-option-js)
[Extract Text Completed](../how-to/extract-text-completed-js)