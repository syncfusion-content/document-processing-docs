---
title: Working with EJ2 Text Extraction | Syncfusion
description: This section explains how to extract text and its bounds from a particular page or the entire PDF document.
platform: document-processing
control: PDF
documentation: UG
---
# Working with EJ2 Text Extraction

Essential<sup>&reg;</sup> EJ2 PDF allows you to extract the text from a particular page or the entire PDF document. 

## Working with basic text extraction

This example demonstrates how to extract text from a PDF page using the `PdfDataExtractor` class. Basic text extraction allows retrieving plain text content from a PDF document.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Initialize a new instance of the `PdfDataExtractor` class
    let extractor: PdfDataExtractor = new PdfDataExtractor(document);
    // Extract text content from the PDF document.
    let text: string = extractor.extractText();
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Working with layout based text extraction

This example demonstrates how to extract text from a PDF page using the `PdfDataExtractor` class with layout-based options.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Initialize a new instance of the `PdfDataExtractor` class
    let extractor: PdfDataExtractor = new PdfDataExtractor(document);
    // Extracts text from the PDF Page based on its layout
    let text: string = extractor.extractText({isLayout: true});
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

N> Layout based text extraction may take additional processing time when compared to the normal extraction mode.

## Text Extraction with Bounds

### Working with Lines

This example demonstrates how to extract text from a PDF page based on individual lines using the `extractTextLines` method. This approach provides a collection of `TextLine` objects, allowing precise access to text content line by line.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Initialize a new instance of the `PdfDataExtractor` class
    let extractor: PdfDataExtractor = new PdfDataExtractor(document);
    // Extracts text from the PDF Page based on its line
    let textCollection: TextLine[] = extractor.extractTextLines({ startPageIndex: 0, endPageIndex: 0 });
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Working with words

This example demonstrates how to extract words from a PDF document using the `extractTextLines` method. Each line contains a collection of `TextWord` objects. 

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Create a PdfDataExtractor instance for the given PDF document
    let extractor: PdfDataExtractor = new PdfDataExtractor(document);
    // Extract text lines from all pages in the document
    let textCollection: TextLine[] = extractor.extractTextLines({
      startPageIndex: 0,
      endPageIndex: document.pageCount - 1
    });
    let page: PdfPage;
    // Iterate through each extracted text line
    for (let i: number = 0; i < textCollection.length; i++) {
    // Get the page corresponding to the current text line
    page = document.getPage(textCollection[i].pageIndex);
    // Retrieve all words from the current text line
    const wordCollection: TextWord[] = textCollection[i].words;
    // Iterate through each word in the line
    for (let j: number = 0; j < wordCollection.length; j++) {
        const word: TextWord = wordCollection[j];
        if (word) {
            // Iterate through each glyph (character shape) in the word
            for (let k: number = 0; k < word.glyphs.length; k++) {
                let glyph: TextGlyph = word.glyphs[k];
                // Draw a rectangle around the glyph's bounding box on the page
                page.graphics.drawRectangle(
                    glyph.bounds[0], // X-coordinate
                    glyph.bounds[1], // Y-coordinate
                    glyph.bounds[2], // Width
                    glyph.bounds[3], // Height
                    new PdfPen([238, 130, 238], 1) // Violet-colored pen with thickness 1
                );
            }
        }
    }
  }
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

### Working with characters

This example demonstrates how to access individual characters from a PDF document using the `TextGlyph` class. 

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Create a PdfDataExtractor instance for the given PDF document
    let extractor: PdfDataExtractor = new PdfDataExtractor(document);
    // Extract text lines from all pages in the document
    let textCollection: TextLine[] = extractor.extractTextLines({
      startPageIndex: 0,
      endPageIndex: document.pageCount - 1
    });
    let page: PdfPage;
    // Iterate through each extracted text line
    for (let i: number = 0; i < textCollection.length; i++) {
    // Get the page corresponding to the current text line
    page = document.getPage(textCollection[i].pageIndex);
    // Retrieve all words from the current text line
    const wordCollection: TextWord[] = textCollection[i].words;
    // Iterate through each word in the line
    for (let j: number = 0; j < wordCollection.length; j++) {
        const word: TextWord = wordCollection[j];
        if (word) {
            // Iterate through each glyph (character shape) in the word
            for (let k: number = 0; k < word.glyphs.length; k++) {
                let glyph: TextGlyph = word.glyphs[k];
                // Draw a rectangle around the glyph's bounding box on the page
                page.graphics.drawRectangle(
                    glyph.bounds[0], // X-coordinate
                    glyph.bounds[1], // Y-coordinate
                    glyph.bounds[2], // Width
                    glyph.bounds[3], // Height
                    new PdfPen([238, 130, 238], 1) // Violet-colored pen with thickness 1
                );
            }
        }
    }
  }
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}