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

This example demonstrates how to extract plain text from a PDF document synchronously using the [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class and the `extractTextSync` method. Basic text extraction retrieves text content from the entire PDF document immediately.

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

## Working with basic text extraction asynchronously

This example demonstrates how to extract plain text from a PDF document asynchronously using the [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class and the `extractText` method. Basic text extraction retrieves text content from the entire PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text content from the PDF document asynchronously.
let text: string = await extractor.extractText();
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
// Extract text content from the PDF document asynchronously
var text = await extractor.extractText();
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Extract text from a specific page range in a PDF document synchronously

This example demonstrates how to synchronously extract text from a PDF document by specifying a start and end page index. This approach allows you to retrieve text content from a defined range of pages for processing or analysis.

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

## Extract text from a specific page range in a PDF document asynchronously

This example demonstrates how to asynchronously extract text from a PDF document by specifying a start and end page index. This approach allows you to retrieve text content from a defined range of pages for processing or analysis.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text content from the specified page range asynchronously
let text: string = await extractor.extractText({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract text content from the specified page range asynchronously
var text = await extractor.extractText({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with layout-based text extraction synchronously

This example demonstrates how to extract text from a PDF document synchronously using the [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class with layout-based options. Layout-based extraction preserves the visual structure of the source document, including line breaks and spacing.

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

## Working with layout-based text extraction asynchronously

This example demonstrates how to extract text from a PDF document asynchronously using the [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class with layout-based options. Layout-based extraction preserves the visual structure of the source document, including line breaks and spacing.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text from the PDF page based on its layout asynchronously
let text: string = await extractor.extractText({ isLayout: true });
// Release document resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract text from the PDF page based on its layout asynchronously
var text = await extractor.extractText({ isLayout: true });
// Release document resources
document.destroy();

{% endhighlight %}
{% endtabs %}

N> Layout-based text extraction may take additional processing time when compared to the basic extraction mode.

## Text extraction with bounds

The following sections describe how to extract text along with positional and typographic information using the [extractTextLinesSync](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlinessync) and [extractTextLines](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlines) methods. The method returns a hierarchical collection of [TextLine](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textline), [TextWord](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textword), and [TextGlyph](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textglyph) objects.

### Working with lines synchronously

This example demonstrates how to extract text from a PDF page based on individual lines. The [extractTextLinesSync](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlinessync) method returns a collection of [TextLine](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textline) objects, allowing precise access to text content line by line.

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

### Working with lines asynchronously

This example demonstrates how to extract text from a PDF page based on individual lines asynchronously. The [extractTextLines](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlines) method returns a collection of [TextLine](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textline) objects, allowing precise access to text content line by line.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document asynchronously
let textLines: Array<TextLine> = await extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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
// Extract `TextLine` objects from the PDF document asynchronously
var textLines = await extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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

### Working with words synchronously

This example demonstrates how to extract words from a PDF document using the [extractTextLinesSync](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlinessync) method. Each line contains a collection of [TextWord](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textword) objects.

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

### Working with words asynchronously

This example demonstrates how to extract words from a PDF document using the [extractTextLines](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlines) method. Each line contains a collection of [TextWord](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/textword) objects.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle, Rectangle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document asynchronously
let textLines: Array<TextLine> = await extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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
// Extract `TextLine` objects from the PDF document asynchronously
var textLines = await extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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

You can retrieve a single character and its properties, including bounds, font name, font size, and text color, using the [extractTextLinesSync](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlinessync) method. Refer to the code sample below.

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

### Working with characters asynchronously

You can retrieve a single character and its properties, including bounds, font name, font size, and text color, using the [extractTextLines](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#extracttextlines) method. Refer to the code sample below.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfColor, Rectangle } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, TextGlyph, PdfFontStyle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` objects from the PDF document asynchronously
let textLines: Array<TextLine> = await extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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
// Extract `TextLine` objects from the PDF document asynchronously
var textLines = await extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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

## Find Text

The [findText](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#findtext) method of the [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor) class locates specific text in a PDF document. The method returns the page index and rectangular bounds of each matching text occurrence. These details are useful for highlighting text, applying redaction, adding annotations, navigating between search results, and building custom search features.

The following code example demonstrates how to search for text in a PDF document using the `findText` method.

{% tabs %}

{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Search for the specified text and retrieve the matching occurrences
let searchResults = await extractor.findText('document');
// Release document resources
document.destroy();

{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the PdfDataExtractor class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Search for the specified text and retrieve the matching occurrences
var searchResults = await extractor.findText('document');
// Release document resources
document.destroy();

{% endhighlight %}

{% endtabs %}

N> The page index returned in a text search result is zero-based.

N> The `findText` method searches the text content available in the PDF document. It does not perform optical character recognition on scanned or image-only PDF pages.

N> Searching a large PDF document may require additional processing time depending on the number of pages and matching text occurrences.

### Find text synchronously

The [findTextSync](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#findtextsync) method searches for text and returns the matching occurrences synchronously.

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
let searchResults = extractor.findTextSync('document');
// Release document resources
document.destroy();

{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the PdfDataExtractor class
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Search for the specified text and retrieve the matching occurrences synchronously
var searchResults = extractor.findTextSync('document');
// Release document resources
document.destroy();

{% endhighlight %}

{% endtabs %}

N> Use `findTextSync` when the search result is required immediately. For large PDF documents, use the asynchronous `findText` method to avoid blocking execution.

## FindText Module API Reference

Use the following table to select the text-search method that matches your requirement.

| Method | Return Type | Description |
|---|---|---|
| [`findText(text: string)`](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#findtext) | Promise | Searches for the specified text asynchronously throughout the PDF document and returns all matching occurrences with their page indexes and bounds. |
| [`findText(text: string, options)`](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#findtext) | Promise | Searches for the specified text asynchronously using the supplied text-search options and returns the matching occurrences. |
| [`findTextSync(text: string)`](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#findtextsync) | Text search result collection | Searches for the specified text synchronously throughout the PDF document and returns all matching occurrences with their page indexes and bounds. |
| [`findTextSync(text: string, options)`](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor#findtextsync) | Text search result collection | Searches for the specified text synchronously using the supplied text-search options and returns the matching occurrences. |
## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)