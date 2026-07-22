---
title: Text Extraction in JavaScript PDF Library | Syncfusion
description: This section explains how to extract text and its bounds from a specific page or the entire PDF document by using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---

# Text Extraction in JavaScript PDF Library

Syncfusion's JavaScript PDF library allows you to extract text from a particular page or from the entire PDF document. The [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class from the `@syncfusion/ej2-pdf-data-extract` add-on package supports four extraction modes:

- **Basic text extraction** — Retrieve plain text content.
- **Page-range extraction** — Retrieve plain text from a defined start and end page.
- **Layout-based text extraction** — Preserve the visual layout of the source document.
- **Bounds-based text extraction** — Retrieve per-line, per-word, and per-character (glyph) information, including position (`bounds`), font, size, style, and color.

Use basic or layout-based extraction when you only need the textual content. Use bounds-based extraction when you also need positional and typographic information (for example, to build a search index, highlight matches, or re-render text).

N> The `@syncfusion/ej2-pdf-data-extract` add-on package also powers the redaction features available in the JavaScript PDF Library.

## Working with basic text extraction

This example demonstrates how to extract plain text from a PDF document using the [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class. Basic text extraction retrieves text content from the entire PDF document.

### `extractText(options)` options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `startPageIndex` | number | `0` | The zero-based index of the first page to extract. |
| `endPageIndex` | number | Last page | The zero-based index of the last page to extract (inclusive). |
| `isLayout` | boolean | `false` | When `true`, preserves the visual layout of text in the output. |

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document (see "Loading a PDF document")
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text content from the PDF document
let text: string = extractor.extractText();
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document (see "Loading a PDF document")
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract text content from the PDF document
var text = extractor.extractText();
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

N> All `extractText` options use **zero-based, inclusive** page indices. The first page of a document is at index `0`, and the last page is at `document.pageCount - 1`.

## Working with text from a specific page range in a PDF document

This example demonstrates how to extract text from a PDF document by specifying a start and end page index. This approach allows you to retrieve text content from a defined range of pages for processing or analysis.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document (see "Loading a PDF document")
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text content from the specified page range
let text: string = extractor.extractText({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document (see "Loading a PDF document")
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract text content from the specified page range
var text = extractor.extractText({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with layout-based text extraction

This example demonstrates how to extract text from a PDF document using the [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class with layout-based options. Layout-based extraction preserves the visual structure of the source document, including line breaks and spacing.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document (see "Loading a PDF document")
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text from the PDF page based on its layout
let text: string = extractor.extractText({ isLayout: true });
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document (see "Loading a PDF document")
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract text from the PDF page based on its layout
var text = extractor.extractText({ isLayout: true });
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

N> Layout-based text extraction may take additional processing time when compared to the basic extraction mode.

## Working with text extraction with bounds

The following sections describe how to extract text along with positional and typographic information using the [extractTextLines](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlines) method. The method returns a hierarchical collection of [TextLine](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textline), [TextWord](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textword), and [TextGlyph](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textglyph) objects.

### Working with lines

This example demonstrates how to extract text from a PDF page based on individual lines. The [extractTextLines](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlines) method returns a collection of [TextLine](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textline) objects, allowing precise access to text content line by line.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document (see "Loading a PDF document")
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document
let textLines: Array<TextLine> = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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

// Load an existing PDF document (see "Loading a PDF document")
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document
var textLines = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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

### Working with words

This example demonstrates how to extract words from a PDF document using the [extractTextLines](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlines) method. Each line contains a collection of [TextWord](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textword) objects.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document (see "Loading a PDF document")
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document
let textLines: Array<TextLine> = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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

// Load an existing PDF document (see "Loading a PDF document")
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document
var textLines = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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

### Working with characters

You can retrieve a single character and its properties, including bounds, font name, font size, font style, and text color, using the [extractTextLines](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlines) method. Each `TextWord` exposes a `glyphs` collection of [TextGlyph](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textglyph) objects, and each glyph's `color` is a [PdfColor](https://ej2.syncfusion.com/documentation/api/pdf/pdfcolor) value. Refer to the code sample below.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle, PdfColor, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document (see "Loading a PDF document")
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document
let textLines: Array<TextLine> = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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

// Load an existing PDF document (see "Loading a PDF document")
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document
var textLines = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)