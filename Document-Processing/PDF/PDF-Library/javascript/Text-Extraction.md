---
title: Text Extraction in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Extract text and text bounds from PDF documents programmatically using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Text Extraction in JavaScript PDF

The JavaScript PDF library allows you to extract text from a particular page or from the entire PDF document. The [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class from the `@syncfusion/ej2-pdf-data-extract` add-on package supports four extraction modes:

- **Basic text extraction** — Retrieve plain text content.
- **Page-range extraction** — Retrieve plain text from a defined start and end page.
- **Layout-based text extraction** — Preserve the visual layout of the source document.
- **Bounds-based text extraction** — Retrieve per-line, per-word, and per-character (glyph) information, including position (`bounds`), font, size, style, and color.

N> The `@syncfusion/ej2-pdf-data-extract` add-on package also powers the redaction features available in the JavaScript PDF Library.

## Working with basic text extraction synchronously

The `extractTextSync` method provides the simplest way to retrieve all text content from a PDF document in a single operation. This synchronous approach is ideal when you need immediate access to the complete text and your document size permits blocking execution.

The following example demonstrates how to extract plain text from a PDF document synchronously using the [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text content from the PDF document synchronously.
let text: string = extractor.extractTextSync();
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the PdfDataExtractor class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract text content from the PDF document synchronously
var text = extractor.extractTextSync();
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Extract text from a specific page range in a PDF document synchronously

When working with large PDF documents, you may want to extract text from specific pages rather than processing the entire document. The `extractTextSync` method accepts optional parameters to define the start and end page indices, allowing you to retrieve text content from a targeted page range.

This approach is useful for:
- Processing specific chapters or sections of a document
- Reducing memory usage with large files
- Focusing extraction on relevant content

The following example shows how to extract text from a defined page range synchronously:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text content from the specified page range synchronously
let text: string = extractor.extractTextSync({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract text content from the specified page range synchronously
var text = extractor.extractTextSync({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with layout-based text extraction synchronously

For documents where the visual structure and formatting are important to the extracted content, use layout-based text extraction. This method preserves the original document layout, including line breaks, spacing, and paragraph structure—making the extracted text more readable and maintaining its logical organization.

The following example demonstrates how to extract text with layout preservation using the [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text from the PDF page based on its layout synchronously
let text: string = extractor.extractTextSync({ isLayout: true });
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract text from the PDF page based on its layout synchronously
var text = extractor.extractTextSync({ isLayout: true });
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Text extraction with bounds

For advanced use cases that require precise spatial information about text content, use bounds-based extraction. This method returns detailed hierarchical information including positional coordinates (bounds), font properties, size, style, and color for each text element.

Bounds-based extraction is essential for:
- Highlighting or annotating specific text locations
- Implementing search result highlighting
- Applying redactions to sensitive content
- Programmatically identifying text regions for document analysis
- Building custom search interfaces with visual feedback

The [extractTextLinesSync](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlinessync) and [extractTextLines](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlines) methods return hierarchical collections of [TextLine](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textline), [TextWord](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textword), and [TextGlyph](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textglyph) objects, allowing you to work with text at different levels of granularity.

### Working with Lines

Line-level extraction provides structured text content organized by line, with position and formatting information for each line. This granularity is useful for analyzing text structure, implementing line-based highlighting, or processing documents with multi-column layouts.

The [extractTextLinesSync](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlinessync) method returns a collection of [TextLine](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textline) objects. Each TextLine object contains:
- **text**: The complete text content of the line
- **bounds**: The rectangular region occupied by the line on the page
- **pageIndex**: Which page the line appears on
- **fontName, fontStyle, fontSize**: Typographic information for the line
- **words**: A collection of word-level objects within the line

The following example demonstrates line-level text extraction:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document synchronously
let textLines: Array<TextLine> = extractor.extractTextLinesSync({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Iterate through each text line in the collection
textLines.forEach((textLine: TextLine) => {
    // Gets the bounds of the text line
    let lineBounds: Rectangle = textLine.bounds;
    // Gets the single line of extracted text from the PDF page
    let line: string = textLine.text;
    // Gets the page index of the text line extracted
    let pageIndex: number = textLine.pageIndex;
    // Gets the collection of text words extracted from a specified page in a PDF document
    let words: TextWord[] = textLine.words;
    // Gets the name of the font used for a particular line of text
    let fontName: string = textLine.fontName;
    // Gets the font style used for a particular line of text
    let fontStyle: PdfFontStyle = textLine.fontStyle;
    // Gets the font size used for a particular line of text
    let fontSize: number = textLine.fontSize;
});
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document synchronously
var textLines = extractor.extractTextLinesSync({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Iterate through each text line in the collection
textLines.forEach((textLine) => {
    // Gets the bounds of the text line
    var lineBounds = textLine.bounds;
    // Gets the single line of extracted text from the PDF page
    var line = textLine.text;
    // Gets the page index of the text line extracted
    var pageIndex = textLine.pageIndex;
    // Gets the collection of text words extracted from a specified page in a PDF document
    var words = textLine.words;
    // Gets the name of the font used for a particular line of text
    var fontName = textLine.fontName;
    // Gets the font style used for a particular line of text
    var fontStyle = textLine.fontStyle;
    // Gets the font size used for a particular line of text
    var fontSize = textLine.fontSize;
});
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

### Working with Words

Word-level extraction provides fine-grained access to individual words with their positions and properties. This is particularly useful for text highlighting, word-based search result visualization, spell-checking integration, or linguistic analysis.

Each [TextLine](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textline) contains a collection of [TextWord](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textword) objects. Each TextWord object includes:
- **text**: The word content
- **bounds**: The position of the word on the page
- **fontName, fontStyle, fontSize**: Font properties for the word
- **glyphs**: Individual character-level data within the word

The following example demonstrates how to access and process word-level data:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document synchronously
let textLines: Array<TextLine> = extractor.extractTextLinesSync({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
textLines.forEach((textLine: TextLine) => {
    textLine.words.forEach((textWord: TextWord) => {
        // Gets the bounds of the text word
        let wordBounds: Rectangle = textWord.bounds;
        // Gets the single word of extracted text from the PDF page
        let word: string = textWord.text;
        // Gets the collection of text glyphs extracted from a specified page in a PDF document
        let glyphs: TextGlyph[] = textWord.glyphs;
        // Gets the name of the font used for a particular word
        let wordFontName: string = textWord.fontName;
        // Gets the style of the font used for a particular word
        let wordFontStyle: PdfFontStyle = textWord.fontStyle;
        // Gets the size of the font used for a particular word
        let wordFontSize: number = textWord.fontSize;
    });
});
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document synchronously
var textLines = extractor.extractTextLinesSync({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
textLines.forEach((textLine) => {
    textLine.words.forEach((textWord) => {
        // Gets the bounds of the text word
        var wordBounds = textWord.bounds;
        // Gets the single word of extracted text from the PDF page
        var word = textWord.text;
        // Gets the collection of text glyphs extracted from a specified page in a PDF document
        var glyphs = textWord.glyphs;
        // Gets the name of the font used for a particular word
        var wordFontName = textWord.fontName;
        // Gets the style of the font used for a particular word
        var wordFontStyle = textWord.fontStyle;
        // Gets the size of the font used for a particular word
        var wordFontSize = textWord.fontSize;
    });
});
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

### Working with characters synchronously

Character-level (glyph) extraction provides the most granular level of detail, allowing you to access individual characters with their exact positions, colors, and font properties. This level of detail is essential for:
- Precise text highlighting at the character level
- Color-aware text extraction
- Detecting rotated or specially formatted characters
- Building advanced search and annotation features

Use the [extractTextLinesSync](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlinessync) method to retrieve character-level data. Each [TextGlyph](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textglyph) object contains:
- **text**: The character content
- **bounds**: Precise position of the character
- **fontName, fontStyle, fontSize**: Font properties
- **color**: The text color
- **isRotated**: Whether the character is rotated

The following example demonstrates character-level extraction:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfColor, Rectangle } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document synchronously
let textLines: Array<TextLine> = extractor.extractTextLinesSync({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
textLines.forEach((textLine: TextLine) => {
    textLine.words.forEach((textWord: TextWord) => {
        textWord.glyphs.forEach((textGlyph: TextGlyph) => {
            // Gets the bounds of the text glyph
            let glyphBounds: Rectangle = textGlyph.bounds;
            // Gets the single character of extracted text from the PDF page
            let character: string = textGlyph.text;
            // Gets the font size used for a particular character of the text
            let fontSize: number = textGlyph.fontSize;
            // Gets the name of the font used for a particular character of the text
            let fontName: string = textGlyph.fontName;
            // Gets the font style used for a particular character of the text
            let fontStyle: PdfFontStyle = textGlyph.fontStyle;
            // Gets the text color of the text glyph
            let color: PdfColor = textGlyph.color;
            // Gets the value indicating whether the glyph is rotated or not
            let isRotated: boolean = textGlyph.isRotated;
        });
    });
});
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document synchronously
var textLines = extractor.extractTextLinesSync({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
textLines.forEach((textLine) => {
    textLine.words.forEach((textWord) => {
        textWord.glyphs.forEach((textGlyph) => {
            // Gets the bounds of the text glyph
            var glyphBounds = textGlyph.bounds;
            // Gets the single character of extracted text from the PDF page
            var character = textGlyph.text;
            // Gets the font size used for a particular character of the text
            var fontSize = textGlyph.fontSize;
            // Gets the name of the font used for a particular character of the text
            var fontName = textGlyph.fontName;
            // Gets the font style used for a particular character of the text
            var fontStyle = textGlyph.fontStyle;
            // Gets the text color of the text glyph
            var color = textGlyph.color;
            // Gets the value indicating whether the glyph is rotated or not
            var isRotated = textGlyph.isRotated;
        });
    });
});
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Text Extraction API Reference

The following table provides a comprehensive overview of all text extraction methods available in the `PdfDataExtractor` class:

| Process | Method Signature | Return Type | Description |
|---|---|---|---|
| **Extract Text** | `extractTextSync()` | `string` | Extracts plain text synchronously from the entire PDF document. |
| **Extract Text** | `extractText()` | `Promise<string>` | Extracts plain text asynchronously from the entire PDF document. |
| **Extract Text (Page Range)** | `extractTextSync(options: { startPageIndex: number; endPageIndex: number })` | `string` | Extracts plain text synchronously from a specified page range using start and end page indices. |
| **Extract Text (Page Range)** | `extractText(options: { startPageIndex: number; endPageIndex: number })` | `Promise<string>` | Extracts plain text asynchronously from a specified page range using start and end page indices. |
| **Extract Layout Text** | `extractTextSync(options: { isLayout: boolean })` | `string` | Extracts layout-based text synchronously, preserving the visual structure and spacing of the source document. |
| **Extract Layout Text** | `extractText(options: { isLayout: boolean })` | `Promise<string>` | Extracts layout-based text asynchronously, preserving the visual structure and spacing of the source document. |
| **Extract Text with Bounds** | `extractTextLinesSync(options?: { startPageIndex?: number; endPageIndex?: number })` | `TextLine[]` | Extracts text synchronously with hierarchical line, word, and character-level information including positional bounds. |
| **Extract Text with Bounds** | `extractTextLines(options?: { startPageIndex?: number; endPageIndex?: number })` | `Promise<TextLine[]>` | Extracts text asynchronously with hierarchical line, word, and character-level information including positional bounds. |

### Find text

The `findTextSync` method of the `PdfDataExtractor` class locates specific text in a PDF document. The method returns the page index and rectangular bounds of each matching text occurrence synchronously. These details are useful for highlighting text, applying redaction, adding annotations, navigating between search results, and building custom search features.

The following code example demonstrates how to search for text synchronously in a PDF document.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Search for the specified text and retrieve the matching occurrences synchronously
let searchResults = extractor.findTextSync('PDF', { caseSensitive: false, wholeWord: false, startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Release document resources
document.destroy();

{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the PdfDataExtractor class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Search for the specified text and retrieve the matching occurrences synchronously
var searchResults = extractor.findTextSync('PDF', { caseSensitive: false, wholeWord: false, startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Release document resources
document.destroy();

{% endhighlight %}

{% endtabs %}

N> Use `findTextSync` when the search result is required immediately. For large PDF documents, use the asynchronous `findText` method to avoid blocking execution.

## Search for multiple text values and get the bounds

You can search for multiple text values in a PDF document and retrieve the location of every occurrence using the `findTextSync` and `findText` methods of the `PdfDataExtractor` class.

The `findTextSync` method searches the PDF document synchronously, while the `findText` method performs the search asynchronously. Both methods accept optional text-search settings and return the searched text together with the bounding rectangles of all matching occurrences grouped by page number. The returned bounds can be used for highlighting, redaction, annotation, and document navigation.

The following code example demonstrates how to search for multiple text values synchronously using optional search parameters and retrieve the bounds of all matching occurrences in a PDF document.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextSearchResult, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the PdfDataExtractor class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Search for multiple text values synchronously using optional search parameters
let textSearchResults: TextSearchResult[] = extractor.findTextSync(['hello', 'world', 'PDF'], { caseSensitive: false, wholeWord: true, startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Iterate through each search result
textSearchResults.forEach((textSearch: TextSearchResult) => {
    // Get the searched text
    let searchText: string = textSearch.searchText;
    // Get the matching bounds grouped by page number
    let searchResults: Map&lt;number, Rectangle[]&gt; = textSearch.searchResults;
    // Process the results for each search term
    searchResults.forEach((bounds: Rectangle[], pageIndex: number) => {
        // Access bounds for each matching occurrence
        bounds.forEach((bound: Rectangle) => {
            console.log(`Found "${searchText}" on page ${pageIndex} at bounds:`, bound);
        });
    });
});
// Release document resources
document.destroy();

{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the PdfDataExtractor class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Search for multiple text values synchronously using optional search parameters
var textSearchResults = extractor.findTextSync(['hello', 'world', 'PDF'], { caseSensitive: false, wholeWord: true, startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Iterate through each search result
textSearchResults.forEach((textSearch) => {
    // Get the searched text
    var searchText = textSearch.searchText;
    // Get the matching bounds grouped by page number
    var searchResults = textSearch.searchResults;
    // Process the results for each search term
    searchResults.forEach((bounds, pageIndex) => {
        // Access bounds for each matching occurrence
        bounds.forEach((bound) => {
            console.log(`Found "${searchText}" on page ${pageIndex} at bounds:`, bound);
        });
    });
});
// Release document resources
document.destroy();

{% endhighlight %}

{% endtabs %}

N> The `findTextSync()` and `findText()` methods also accept a collection of text values as a `string[]`. When multiple text values are provided, `findTextSync()` returns a `TextSearchResult[]`, while `findText()` returns a `Promise<TextSearchResult[]>`. Each item in the returned collection corresponds to one input text value and contains the searched text in `searchText` and the matching bounding rectangles grouped by page number in `searchResults`.

## FindText Module API Reference

Use the following table to select the text-search method that matches your requirement.

| Method | Return Type | Description |
|---|---|---|
| `findText(text: string)` | Promise | Searches for the specified text asynchronously throughout the PDF document and returns all matching occurrences with their page indexes and bounds. |
| `findText(text: string, options)` | Promise | Searches for the specified text asynchronously using the supplied text-search options and returns the matching occurrences. |
| `findTextSync(text: string)` | Text search result collection | Searches for the specified text synchronously throughout the PDF document and returns all matching occurrences with their page indexes and bounds. |
| `findTextSync(text: string, options)` | Text search result collection | Searches for the specified text synchronously using the supplied text-search options and returns the matching occurrences. |

Use the following table for text search options in the find text method.                      |

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)