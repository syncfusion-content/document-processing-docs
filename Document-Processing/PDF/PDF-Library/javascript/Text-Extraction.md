---
title: Text Extraction in JavaScript PDF library | Syncfusion
description: This section explains how to extract text and its bounds from a specific page or the entire PDF document by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Text Extraction in JavaScript PDF library

The PDF allows you to extract the text from a particular page or the entire PDF document. 

N> For redaction features, you need to install the `@syncfusion/ej2-pdf-data-extract` package as an add-on. Please verify the platform's actual root directory where the `openjpeg` file is extracted. Depending on the platform, the root path may vary. Check which root folder is being used by reviewing the path referenced in the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-asp-net-core) page.

## Working with basic text extraction

This example demonstrates how to extract text from a PDF page using the `PdfDataExtractor` class. Basic text extraction allows retrieving plain text content from a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text content from the PDF document.
let text: string = extractor.extractText();
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
// Extract text content from the PDF document
var text = extractor.extractText();
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Extract Text from Specific Page Range in a PDF Document

This example demonstrates how to extract text from a PDF document by specifying a start and end page number. This approach allows you to retrieve text content from a defined range of pages for processing or analysis.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text content from the PDF document.
let text: string = extractor.extractText({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
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
// Extract text content from the PDF document
var text = extractor.extractText({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with layout based text extraction

This example demonstrates how to extract text from a PDF page using the `PdfDataExtractor` class with layout-based options.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extracts text from the PDF Page based on its layout
let text: string = extractor.extractText({isLayout: true});
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
// Extracts text from the PDF Page based on its layout
var text = extractor.extractText({ isLayout: true });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

N> Layout based text extraction may take additional processing time when compared to the normal extraction mode.

## Text Extraction with Bounds

### Working with Lines

This example demonstrates how to extract text from a PDF page based on individual lines using the `extractTextLines` method. This approach provides a collection of `TextLine` objects, allowing precise access to text content line by line.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` from the PDF document.
let textLines: Array<TextLine> = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount-1});
textLines.forEach((textLine: TextLine) => {
  // Gets the bounds of the text line.
  let lineBounds: Rectangle = textLine.bounds;
});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdf.PdfDataExtractor(document);
// Extract `TextLine` from the PDF document.
var textLines = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount-1});
textLines.forEach((textLine) => {
  // Gets the bounds of the text line.
  var lineBounds = textLine.bounds;
});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Working with words

This example demonstrates how to extract words from a PDF document using the `extractTextLines` method. Each line contains a collection of `TextWord` objects. 

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, PdfFontStyle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` from the PDF document.
let textLines: Array<TextLine> = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount-1});
textLines.forEach((textLine: TextLine) => {
    textLine.words.forEach((textWord: TextWord) => {
        // Gets the bounds of the text word.
        let wordBounds: Rectangle = textWord.bounds;
        // Gets the single word of extracted text from the PDF page.
        let word: string = textWord.text;
        // Gets the collection of text glyphs extracted from a specified page in a PDF document.
        let glyphs: TextGlyph[] = textWord.glyphs;
        // Gets the name of the font used for a particular word.
        let wordFontName: string = textWord.fontName;
        // Gets the style of the font used for a particular word.
        let wordFontStyle: PdfFontStyle = textWord.fontStyle;
        // Gets the size of the font used for a particular word.
        let wordFontSize: number = textWord.fontSize;
    });
});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy(); 

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdf.PdfDataExtractor(document);
// Extract `TextLine` from the PDF document.
var textLines = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount-1});
textLines.forEach((textLine) => {
    textLine.words.forEach((textWord: TextWord) => {
        // Gets the bounds of the text word.
        var wordBounds = textWord.bounds;
        // Gets the single word of extracted text from the PDF page.
        var word = textWord.text;
        // Gets the collection of text glyphs extracted from a specified page in a PDF document.
        var glyphs = textWord.glyphs;
        // Gets the name of the font used for a particular word.
        var wordFontName = textWord.fontName;
        // Gets the style of the font used for a particular word.
        var wordFontStyle = textWord.fontStyle;
        // Gets the size of the font used for a particular word.
        var wordFontSize = textWord.fontSize;
    });
});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy(); 

{% endhighlight %}
{% endtabs %}

### Working with characters

You can retrieve a single character and its properties, including bounds, font name, font size, and text color, using the `extractTextLines` method. Refer to the code sample below.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord, PdfFontStyle } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract `TextLine` from the PDF document.
let textLines: Array<TextLine> = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount-1});
textLines.forEach((textLine: TextLine) => {
    textLine.words.forEach((textWord: TextWord) => {
        textWord.glyphs.forEach((textGlyph: TextGlyph) => {
            // Gets the bounds of the text glyph
            let glyphBounds: Rectangle = textGlyph.bounds;
            // Gets the single character of extracted text from the PDF page.
            let character: string = textGlyph.text;
            // Gets the font size used for a particular character of the text.
            let fontSize: number = textGlyph.fontSize;
            // Gets the name of the font used for a particular character of the text.
            let fontName: string = textGlyph.fontName;
            // Gets the font style used for a particular character of the text.
            let fontStyle: PdfFontStyle = textGlyph.fontStyle;
            // Gets the text color of the text glyph.
            let color: PdfColor = textGlyph.color;
            // Gets the value indicating whether the glyph is rotated or not.
            let isRotated: boolean = textGlyph.isRotated;
        });
  });
});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor = new ej.pdf.PdfDataExtractor(document);
// Extract `TextLine` from the PDF document.
var textLines = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount-1});
textLines.forEach((textLine) => {
    textLine.words.forEach((textWord: TextWord) => {
        textWord.glyphs.forEach((textGlyph) => {
            // Gets the bounds of the text glyph
            var glyphBounds= textGlyph.bounds;
            // Gets the single character of extracted text from the PDF page.
            var character = textGlyph.text;
            // Gets the font size used for a particular character of the text.
            var fontSize = textGlyph.fontSize;
            // Gets the name of the font used for a particular character of the text.
            var fontName = textGlyph.fontName;
            // Gets the font style used for a particular character of the text.
            var fontStyle = textGlyph.fontStyle;
            // Gets the text color of the text glyph.
            var color = textGlyph.color;
            // Gets the value indicating whether the glyph is rotated or not.
            var isRotated = textGlyph.isRotated;
        });
  });
});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}