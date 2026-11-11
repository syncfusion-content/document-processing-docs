# Text Extraction (PDF Library for JavaScript)

## Table of contents

- [Installation](#installation)
- [Basic text extraction](#basic-text-extraction)
- [Extract from a page range](#extract-from-a-page-range)
- [Layout-based extraction](#layout-based-extraction)
- [Bounds-based extraction: lines, words, characters](#bounds-based-extraction-lines-words-characters)
- [Find text](#find-text)
- [Search for multiple text values and get bounds](#search-for-multiple-text-values-and-get-bounds)
- [API reference](#api-reference)
- [Practical tips](#practical-tips)
- [Example: export plain text per page (Node.js)](#example-export-plain-text-per-page-nodejs)
- [References](#references)

This document summarizes the official Syncfusion PDF Library guidance for extracting text and finding text within PDF documents in JavaScript/TypeScript. It covers basic extraction, page-range extraction, layout-aware extraction, bounds-based extraction (lines/words/characters), finding text within PDF documents, retrieving text bounds, searching multiple values, and workflows for highlighting, redaction, and annotations.

> Note: Advanced extraction and search features require the `@syncfusion/ej2-pdf-data-extract` package.

## Installation

```bash
npm install @syncfusion/ej2-pdf @syncfusion/ej2-pdf-data-extract
```

## Basic text extraction

Use `PdfDataExtractor` from `@syncfusion/ej2-pdf-data-extract` to extract plain text from a loaded `PdfDocument`. Both synchronous and asynchronous methods are supported.

### Synchronous

```ts
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// `data` is an ArrayBuffer/Uint8Array containing the PDF file
const document = new PdfDocument(data);
const extractor = new PdfDataExtractor(document);

// Extract all text from the document synchronously
const text: string = extractor.extractTextSync();
console.log(text);

document.destroy();
```

### Asynchronous

```ts
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

const document = new PdfDocument(data);
const extractor = new PdfDataExtractor(document);

// Extract all text from the document asynchronously
const text: string = await extractor.extractText();
console.log(text);

document.destroy();
```

## Extract from a page range

You can extract text from a subset of pages by specifying `startPageIndex` and `endPageIndex` in extraction options.

### Synchronous

```ts
const textRange: string = extractor.extractTextSync({
    startPageIndex: 0,
    endPageIndex: document.pageCount - 1
});
console.log(textRange);
```

### Asynchronous

```ts
const textRange: string = await extractor.extractText({
    startPageIndex: 0,
    endPageIndex: document.pageCount - 1
});
console.log(textRange);
```

## Layout-based extraction

Enable layout mode to preserve the spatial arrangement, spacing, and multi-column formatting of the source document. Note that layout extraction may take longer than basic extraction.

### Synchronous

```ts
const layoutText: string = extractor.extractTextSync({
    isLayout: true
});
console.log(layoutText);
```

### Asynchronous

```ts
const layoutText: string = await extractor.extractText({
    isLayout: true
});
console.log(layoutText);
```

## Bounds-based extraction: lines, words, characters

For advanced workflows requiring precise spatial positioning, font information, and character geometries, use the bounds-based extraction APIs. These methods return structured `TextLine`, `TextWord`, and `TextGlyph` objects.

Bounds information is essential for:
- Highlighting or annotating specific text locations
- Implementing search result highlighting
- Applying redactions to sensitive content
- Programmatically identifying text regions for document analysis

### Synchronous

```ts
import { TextLine } from '@syncfusion/ej2-pdf-data-extract';

const lines: TextLine[] = extractor.extractTextLinesSync({
    startPageIndex: 0,
    endPageIndex: document.pageCount - 1
});

for (const line of lines) {
    console.log(line.pageIndex, line.bounds, line.text);
}
```

### Asynchronous

```ts
import { TextLine } from '@syncfusion/ej2-pdf-data-extract';

const lines: TextLine[] = await extractor.extractTextLines({
    startPageIndex: 0,
    endPageIndex: document.pageCount - 1
});

for (const line of lines) {
    console.log(line.pageIndex, line.bounds, line.text);
}
```

### Inspecting Words and Glyphs

Inspect individual words and glyphs (characters) from the returned `TextLine` objects:

```ts
for (const line of lines) {
    for (const word of line.words) {
        console.log('word:', word.text, 'bounds:', word.bounds);
        // `word.glyphs` contains character-level info
        for (const glyph of word.glyphs) {
            console.log('char:', glyph.text, 'font:', glyph.fontName, glyph.fontSize, 'bounds:', glyph.bounds, 'color:', glyph.color, 'isRotated:', glyph.isRotated);
        }
    }
}
```

## Find text

Search for specific text within a PDF document and retrieve the page index and rectangular bounding rectangles of each match. The returned bounds can be used for highlighting, redaction, annotation, document navigation, and visual search result display.

Key APIs:
- `PdfDataExtractor`
- `findTextSync`
- `findText`

### Synchronous

```ts
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

const document = new PdfDocument(data);
const extractor = new PdfDataExtractor(document);

// Search for text synchronously
const results = extractor.findTextSync('PDF', {
    caseSensitive: false,
    wholeWord: false,
    startPageIndex: 0,
    endPageIndex: document.pageCount - 1
});

console.log(results);
document.destroy();
```

### Asynchronous

```ts
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

const document = new PdfDocument(data);
const extractor = new PdfDataExtractor(document);

// Search for text asynchronously
const results = await extractor.findText('PDF', {
    caseSensitive: false,
    wholeWord: false,
    startPageIndex: 0,
    endPageIndex: document.pageCount - 1
});

console.log(results);
document.destroy();
```

## Search for multiple text values and get bounds

Search for multiple text terms across a PDF document and retrieve matching bounding rectangles grouped by page.

Key APIs:
- `findTextSync`
- `findText`
- `TextSearchResult`

### Search Types and Return Structure

- **Single text search**: Returns matching occurrences with `pageIndex` and `bounds` rectangles.
- **Multiple text search**: Returns `TextSearchResult[]` (synchronous) or `Promise<TextSearchResult[]>` (asynchronous). Each entry contains:
  - `searchText`: The target search string.
  - `searchResults`: A `Map<number, Rectangle[]>` mapping each `pageIndex` to its matching bounding rectangles (`Rectangle[]`).

### Synchronous

```ts
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextSearchResult, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

const document = new PdfDocument(data);
const extractor = new PdfDataExtractor(document);

const searchResults: TextSearchResult[] = extractor.findTextSync(
    ['hello', 'world', 'PDF'],
    { caseSensitive: false, wholeWord: true, startPageIndex: 0, endPageIndex: document.pageCount - 1 }
);

searchResults.forEach((textSearch: TextSearchResult) => {
    const term: string = textSearch.searchText;
    const pageMap: Map<number, Rectangle[]> = textSearch.searchResults;
    pageMap.forEach((bounds: Rectangle[], pageIndex: number) => {
        bounds.forEach((bound: Rectangle) => {
            console.log(`Found "${term}" on page ${pageIndex} at bounds:`, bound);
        });
    });
});

document.destroy();
```

### Asynchronous

```ts
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextSearchResult, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

const document = new PdfDocument(data);
const extractor = new PdfDataExtractor(document);

const searchResults: TextSearchResult[] = await extractor.findText(
    ['hello', 'world', 'PDF'],
    { caseSensitive: false, wholeWord: true, startPageIndex: 0, endPageIndex: document.pageCount - 1 }
);

searchResults.forEach((textSearch: TextSearchResult) => {
    const term: string = textSearch.searchText;
    const pageMap: Map<number, Rectangle[]> = textSearch.searchResults;
    pageMap.forEach((bounds: Rectangle[], pageIndex: number) => {
        bounds.forEach((bound: Rectangle) => {
            console.log(`Found "${term}" on page ${pageIndex} at bounds:`, bound);
        });
    });
});

document.destroy();
```

## API reference

The following table summarizes synchronous and asynchronous extraction and search methods available in `PdfDataExtractor`:

### Text Extraction APIs

| Process | Method Signature | Return Type | Description |
|---|---|---|---|
| **Extract Text (Sync)** | `extractTextSync()` | `string` | Extracts plain text synchronously from the entire PDF document. |
| **Extract Text (Async)** | `extractText()` | `Promise<string>` | Extracts plain text asynchronously from the entire PDF document. |
| **Page Range Extraction (Sync)** | `extractTextSync(options: { startPageIndex: number; endPageIndex: number })` | `string` | Extracts plain text synchronously from a specified page range. |
| **Page Range Extraction (Async)** | `extractText(options: { startPageIndex: number; endPageIndex: number })` | `Promise<string>` | Extracts plain text asynchronously from a specified page range. |
| **Layout Extraction (Sync)** | `extractTextSync(options: { isLayout: boolean })` | `string` | Extracts layout-based text synchronously, preserving visual structure and spacing. |
| **Layout Extraction (Async)** | `extractText(options: { isLayout: boolean })` | `Promise<string>` | Extracts layout-based text asynchronously, preserving visual structure and spacing. |
| **Bounds Extraction (Sync)** | `extractTextLinesSync(options?: { startPageIndex?: number; endPageIndex?: number })` | `TextLine[]` | Extracts text synchronously with line, word, and character-level bounds. |
| **Bounds Extraction (Async)** | `extractTextLines(options?: { startPageIndex?: number; endPageIndex?: number })` | `Promise<TextLine[]>` | Extracts text asynchronously with line, word, and character-level bounds. |

### Text Search APIs

| Process | Method Signature | Return Type | Description |
|---|---|---|---|
| **Find Text (Sync)** | `findTextSync(text: string, options?: TextSearchOptions)` | `any` | Searches for text synchronously and returns matching occurrences with page indexes and bounds. |
| **Find Text (Async)** | `findText(text: string, options?: TextSearchOptions)` | `Promise<any>` | Searches for text asynchronously and returns matching occurrences with page indexes and bounds. |
| **Find Multiple (Sync)** | `findTextSync(text: string[], options?: TextSearchOptions)` | `TextSearchResult[]` | Searches for multiple terms synchronously and returns matching bounds grouped by page. |
| **Find Multiple (Async)** | `findText(text: string[], options?: TextSearchOptions)` | `Promise<TextSearchResult[]>` | Searches for multiple terms asynchronously and returns matching bounds grouped by page. |

## Practical tips

- **Install Data Extraction Package**: Install `@syncfusion/ej2-pdf-data-extract` for advanced extraction, line/word/glyph bounds, and text search capabilities.
- **Sync vs. Async**: Use async APIs (`extractText`, `extractTextLines`, `findText`) for large PDF documents to avoid blocking the event loop or UI thread. Use synchronous APIs (`extractTextSync`, `extractTextLinesSync`, `findTextSync`) only when immediate, blocking results are required.
- **Reduce Memory with Page Ranges**: Use page-range extraction (`startPageIndex` and `endPageIndex`) to reduce memory consumption on large or multi-hundred page documents.
- **Layout Preservation**: Use layout extraction (`isLayout: true`) when preserving column alignment, tables, or document structure is critical; be aware that layout parsing requires additional processing time.
- **Bounds for Downstream Actions**: Use bounds information retrieved from line/word/glyph extraction or text searching to drive redaction, annotation, and highlight workflows.
- **Scanned Documents**: Image-only (scanned) PDFs do not contain embedded text streams; OCR must be applied before text extraction or search can detect content.
- **Font Encodings**: Custom or non-standard font encodings in older documents may require verification if extracted glyphs do not match expected Unicode characters.

## Example: export plain text per page (Node.js)

```ts
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

const document = new PdfDocument(data);
const extractor = new PdfDataExtractor(document);
let out = '';

for (let i = 0; i < document.pageCount; i++) {
    const pageText = extractor.extractTextSync({ startPageIndex: i, endPageIndex: i });
    out += `\n--- Page ${i + 1} ---\n` + pageText + '\n';
}

console.log(out);
document.destroy();
```

## References

- Official Syncfusion guide: https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/text-extraction
- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [API Reference](https://ej2.syncfusion.com/documentation/api/pdf)
