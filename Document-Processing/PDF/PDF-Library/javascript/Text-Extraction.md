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
// Extracts text from the PDF Page based on its line
let textCollection: TextLine[] = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1});
// Gets the bounds of the text line
let lineBounds = textLine[0].bounds;
// Gets the single line of extracted text from the PDF page
let line = textLine[0].text;
// Gets the page index of the text line extracted
let pageIndex = textLine[0].pageIndex;
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
// Extracts text from the PDF Page based on its line
var textLine = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: document.pageCount - 1 });
// Gets the bounds of the text line
var lineBounds = textLine[0].bounds;
// Gets the single line of extracted text from the PDF page
var line = textLine[0].text;
// Gets the page index of the text line extracted
var pageIndex = textLine[0].pageIndex;
// Gets the bounds of the text line.
var lineBounds = textLine.bounds;
// Gets the single line of extracted text from the PDF page.
var line = textLine.text;
// Gets the page index of the text line extracted.
var pageIndex = textLine.pageIndex;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Working with words

This example demonstrates how to extract words from a PDF document using the `extractTextLines` method. Each line contains a collection of `TextWord` objects. 

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let destination: PdfDocument = new PdfDocument(data1);
// Load another existing PDF document
let sourceDocument1: PdfDocument = new PdfDocument(data2);
// Options to customize the import of PDF pages
let options: PdfPageImportOptions = new PdfPageImportOptions();
// Sets the target page index to insert the imported pages
options.targetIndex = 3;
// Import 5 pages from page index 2 to 6 into the destination document and insert them at index 3
destination.importPageRange(sourceDocument1, 2, 6, options);
// Load another existing PDF document
let sourceDocument2: PdfDocument = new PdfDocument(data3);
// Options to customize the import of PDF pages
options = new PdfPageImportOptions();
// Sets the target page index to insert the imported pages
options.targetIndex = 7;
// Import 4 pages from page index 0 to 3 into the destination document and insert them at index 7
destination.importPageRange(sourceDocument2, 0, 3, options);
// Save the output PDF
destination.save('Output.pdf');
// Destroy the documents to free resources
destination.destroy();
sourceDocument1.destroy();
sourceDocument2.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Create a PdfDataExtractor instance for the given PDF document
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract text lines from all pages in the document
var textCollection = extractor.extractTextLines({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});
var page;
// Iterate through each extracted text line
for (var i = 0; i < textCollection.length; i++) {
  // Get the page corresponding to the current text line
  page = document.getPage(textCollection[i].pageIndex);
  // Retrieve all words from the current text line
  var wordCollection = textCollection[i].words;
  // Iterate through each word in the line
  for (var j = 0; j < wordCollection.length; j++) {
    var word = wordCollection[j];
    if (word) {

    }
  }
}
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Working with characters

You can retrieve a single character and its properties, including bounds, font name, font size, and text color, using the `extractTextLines` method. Refer to the code sample below.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, TextLine, TextWord } from '@syncfusion/ej2-pdf-data-extract';

// Load the existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Create a PdfDataExtractor instance for the given PDF document
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract text lines only from the first page (index 0)
let lineCollection: TextLine[] = extractor.extractTextLines({
  startPageIndex: 0,
  endPageIndex: 0
});
// Get the first line
let line: TextLine = lineCollection[0];
// Get the collection of words in the first line
let textWordCollection: TextWord[] = line.words;
// Get the first word
let textWord: TextWord = textWordCollection[0];
// Get glyph details of the first word
let textGlyphCollection: TextGlyph[] = textWord.glyphs;
// Get the first glyph
let textGlyph: TextGlyph = textGlyphCollection[0];
// ---- Glyph properties ----
// Bounds of the character (x, y, width, height)
let glyphBounds = {
  x: textGlyph.bounds[0],
  y: textGlyph.bounds[1],
  width: textGlyph.bounds[2],
  height: textGlyph.bounds[3]
};
// Font name of the character
let glyphFontName: string = textGlyph.fontName;
// Font size of the character
let glyphFontSize: number = textGlyph.fontSize;
// Font style of the character (e.g., PdfFontStyle.regular/bold/italic)
let glyphFontStyle: PdfFontStyle = textGlyph.fontStyle;
// The character itself
let glyphText: string = textGlyph.text;
// The color of the character (typically RGB)
let glyphColor = textGlyph.textColor;
// Save and close
document.save('Output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load the existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Create a PdfDataExtractor instance for the given PDF document
var extractor = new ej.pdf.PdfDataExtractor(document);
// Extract text lines only from the first page (index 0)
var lineCollection = extractor.extractTextLines({
  startPageIndex: 0,
  endPageIndex: 0
});
// Get the first line
var line = lineCollection[0];
// Get the collection of words in the first line
var textWordCollection = line.words;
// Get the first word
var textWord = textWordCollection[0];
// Get glyph details of the first word
var textGlyphCollection = textWord.glyphs;
// Get the first glyph
var textGlyph = textGlyphCollection[0];
// ---- Glyph properties ----
// Bounds of the character (x, y, width, height)
var glyphBounds = {
  x: textGlyph.bounds[0],
  y: textGlyph.bounds[1],
  width: textGlyph.bounds[2],
  height: textGlyph.bounds[3]
};
// Font name of the character
var glyphFontName = textGlyph.fontName;
// Font size of the character
var glyphFontSize = textGlyph.fontSize;
// Font style of the character (e.g., PdfFontStyle.regular/bold/italic)
var glyphFontStyle = textGlyph.fontStyle;
// The character itself
var glyphText = textGlyph.text;
// The color of the character (typically RGB)
var glyphColor = textGlyph.textColor;
// Save and close
document.save('Output.pdf');
document.destroy();
{% endhighlight %}
{% endtabs %}