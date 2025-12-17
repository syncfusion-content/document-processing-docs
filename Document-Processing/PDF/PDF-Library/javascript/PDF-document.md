---
title: Document in JavaScript PDF library | Syncfusion
description: This section explains how to set document settings and properties in a PDF file by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Document in JavaScript PDF library

The PDF library provides support to create, read, and manipulate PDF documents, allowing you to generate high-quality, secure, and feature-rich PDF files programmatically.

## Adding the document settings

This example shows how to configure custom page settings before adding a page to a PDF document. It creates a `PdfPageSettings` instance, applies margins, page size and sets the orientation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfPageSettings, PdfGraphics, PdfRotationAngle, PdfMargins, PdfPageOrientation, PdfFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';
 
// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Create a new PDF page settings instance
let pageSettings: PdfPageSettings = new PdfPageSettings({
  orientation: PdfPageOrientation.landscape,
  size: { width: 842, height: 595 },
  margins: new PdfMargins(40),
  rotation: PdfRotationAngle.angle0
});
// Add a page
let page: PdfPage = document.addPage(pageSettings);
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Set font
let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Create a new PDF page settings instance
var pageSettings = new ej.pdf.PdfPageSettings({
  orientation: ej.pdf.PdfPageOrientation.landscape,
  size: { width: 842, height: 595 },
  margins: new ej.pdf.PdfMargins(40),
  rotation: ej.pdf.PdfRotationAngle.angle0
});
// Add a page
var page = document.addPage(pageSettings);
// Get graphics from the page
var graphics = page.graphics;
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with document properties

This example demonstrates how to create a PDF document, get and set its metadata properties such as title, author, subject, keywords, creator, producer, language, and dates, and then retrieve these properties using the `PdfDocumentInformation` class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
 { PdfDocument, PdfDocumentInformation }
 
// Create a PDF document
let document: PdfDocument = new PdfDocument();

// Set or update document properties
document.setDocumentInformation({
title: "Sample PDF Document",        // Title of the PDF
author: "John Doe",                  // Author name
subject: "PDF Metadata Example",     // Subject of the document
keywords: "PDF, Metadata, Example",  // Keywords for search
creator: "JavaScript PDF Library",   // Application that created the PDF
producer: "JavaScript PDF Engine",   // PDF producer
language: "en-US",                   // Language of the document
creationDate: new Date(),            // Creation date
modificationDate: new Date()         // Last modified date
});
// Access the document information
let documentProperties: PdfDocumentInformation = document.getDocumentInformation();
// Gets the title of the PDF document
let title = documentProperties.title;
// Gets the author of the PDF document
let author = documentProperties.author;
// Gets the subject of the PDF document
let subject = documentProperties.subject;
// Gets the keywords of the PDF document
let keywords = documentProperties.keywords;
// Gets the creator of the PDF document
let creator = documentProperties.creator;
// Gets the producer of the PDF document
let producer = documentProperties.producer;
// Gets the language of the PDF document
let language = documentProperties.language;
// Gets the creation date of the PDF document
let creationDate = documentProperties.creationDate;
// Gets the modification date of the PDF document
let modificationDate = documentProperties.modificationDate;
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a PDF document
var document = new ej.pdf.PdfDocument();
// Set or update document properties
document.setDocumentInformation({
title: "Sample PDF Document",        // Title of the PDF
author: "John Doe",                  // Author name
subject: "PDF Metadata Example",     // Subject of the document
keywords: "PDF, Metadata, Example",  // Keywords for search
creator: "JavaScript PDF Library",   // Application that created the PDF
producer: "JavaScript PDF Engine",   // PDF producer
language: "en-US",                   // Language of the document
creationDate: new Date(),            // Creation date
modificationDate: new Date()         // Last modified date
});
// Access the document information
var documentProperties = document.getDocumentInformation();
// Gets the title of the PDF document
var title = documentProperties.title;
// Gets the author of the PDF document
var author = documentProperties.author;
// Gets the subject of the PDF document
var subject = documentProperties.subject;
// Gets the keywords of the PDF document
var keywords = documentProperties.keywords;
// Gets the creator of the PDF document
var creator = documentProperties.creator;
// Gets the producer of the PDF document
var producer = documentProperties.producer;
// Gets the language of the PDF document
var language = documentProperties.language;
// Gets the creation date of the PDF document
var creationDate = documentProperties.creationDate;
// Gets the modification date of the PDF document
var modificationDate = documentProperties.modificationDate;
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Performing incremental update for PDF document

The `isIncrementalUpdate` property allows you to check if the PDF document supports incremental updates, which can improve performance during modifications by appending changes rather than rewriting the entire document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';
 
// Create a PDF document
let document: PdfDocument = new PdfDocument();
// Disable incremental update to rewrite the entire file
document.fileStructure.isIncrementalUpdate = false;
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Set font
let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a PDF document
var document = new ej.pdf.PdfDocument();
// Disable incremental update to rewrite the entire file
document.fileStructure.isIncrementalUpdate = false;
// Add a page
var page = document.addPage();
// Get graphics from the page
var graphics = page.graphics;
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}