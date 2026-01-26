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

- **startIndex:** The starting page index for text extraction (0-based index).

- **endIndex or isOptions:** Either the ending page index (for multiple pages) or an option specifying extraction criteria for a single page.

- **options (optional):** Additional options, such as `TextOnly` for plain text or `TextAndBounds` for detailed text data with bounds.

#### Available Options

- **None:** No text information is extracted or returned. This is useful when you want to optimize memory usage and don't need any text data.

- **TextOnly:** Extracts only the plain text from the document. This option excludes any layout or positional information.

- **BoundsOnly:** Extracts layout information, such as bounds or coordinates, without including the plain text data.

- **TextAndBounds:** Extracts both the plain text and the layout (bounds) information, which is the default behavior.

#### Returns
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

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/Extract%20Text)

## See Also

[Extract Text Options](./extract-text-option-ts)
[Find Text](../text-search/find-text)
[Text Search Features](../text-search/text-search-events)
[Text Search Events](../text-search/text-search-events)