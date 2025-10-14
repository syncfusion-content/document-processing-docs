---
layout: post
title: Extract Text in Syncfusion Typescript Pdfviewer Control | Syncfusion
description: Learn about the Extract Text in Syncfusion #Platform_Name## Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Extract Text
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Extract Text Method in Syncfusion PdfViewer Control

The `extractText` method of the Syncfusion PdfViewer control enables text extraction from one or more pages in a PDF document. This method is useful for retrieving the text content along with its associated data, such as the bounds of each text element.

### extractText Method
The extractText method retrieves text data from the specified page(s) of a PDF document. It can extract text from one page, a range of pages, or even provide detailed text data, depending on the options specified.

#### Parameters:
**startIndex:** The starting page index for text extraction (0-based index).

**endIndex Or isOptions:** This can either be the ending page index for the text extraction (for extracting from multiple pages) or an option specifying text extraction criteria for a single page.

**options (optional):** Specifies additional options, such as extracting plain text `TextOnly` or more detailed text data `TextAndBounds`. You can specify various options for text extraction. These options determine whether you want to extract plain text, text with bounds, or detailed text data.

***TextOnly:*** Extracts only the plain text content without bounds or additional information.

***TextAndBounds:*** Extracts text content along with its bounds (coordinates) within the PDF.

#### Returns:
The method returns a Promise that resolves to an object containing two properties:

**textData:** An array of TextDataSettingsModel objects, each representing the details of the extracted text (including bounds, page text, etc.).

**pageText:** A concatenated string of plain text extracted from the specified page(s).

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
    resourceUrl: "https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib",
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

#### Explanation:
**Single Page Extraction:** The first `extractText` call extracts text from page 1 (`startIndex = 1`), using the 'TextOnly' option for plain text extraction.

**Multiple Pages Extraction:** The second extractText call extracts text from pages 0 through 2 (`startIndex = 0, endIndex = 2`), using the `TextOnly` option for plain text extraction.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/)