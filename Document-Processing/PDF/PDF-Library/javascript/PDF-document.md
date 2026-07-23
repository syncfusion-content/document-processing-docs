---
title: Creating and Configuring PDF Documents in JavaScript PDF Library | Syncfusion
description: Learn how to create, configure, and manipulate PDF documents using the JavaScript PDF Library, including document settings, metadata properties, incremental updates, and flattening annotations and form fields.
platform: document-processing
control: PDF
documentation: UG
---

# Creating and Configuring PDF Documents in JavaScript PDF Library

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) provides support to create, read, and manipulate PDF documents, allowing you to generate high-quality, secure, and feature-rich PDF files programmatically.

## Adding the document settings

This example shows how to configure custom page settings before adding a page to a PDF document. It creates a [PdfPageSettings](https://ej2.syncfusion.com/documentation/api/pdf/pdfpagesettings) instance, applies margins, page size, and sets the orientation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfPageSettings, PdfGraphics, PdfRotationAngle, PdfMargins, PdfPageOrientation, PdfFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
let document: PdfDocument = new PdfDocument();
// Create a new PDF page settings instance.
let pageSettings: PdfPageSettings = new PdfPageSettings({
    orientation: PdfPageOrientation.landscape,
    size: { width: 842, height: 595 },
    margins: new PdfMargins(40),
    rotation: PdfRotationAngle.angle0
});
// Add a page with the configured settings.
let page: PdfPage = document.addPage(pageSettings);
// Get graphics from the page.
let graphics: PdfGraphics = page.graphics;
// Embed a standard PDF font.
let font: PdfFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw a text string on the page.
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document.
document.save('output.pdf');
// Close the document and release resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document.
var document = new ej.pdf.PdfDocument();
// Create a new PDF page settings instance.
var pageSettings = new ej.pdf.PdfPageSettings({
    orientation: ej.pdf.PdfPageOrientation.landscape,
    size: { width: 842, height: 595 },
    margins: new ej.pdf.PdfMargins(40),
    rotation: ej.pdf.PdfRotationAngle.angle0
});
// Add a page with the configured settings.
var page = document.addPage(pageSettings);
// Get graphics from the page.
var graphics = page.graphics;
// Embed a standard PDF font.
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Draw a text string on the page.
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document.
document.save('output.pdf');
// Close the document and release resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

N> When no `PdfPageSettings` are provided, the PDF page is created using the default settings: A4 page size, portrait orientation, and 40 point page margins.

## Working with document properties

This example demonstrates how to create a PDF document, get and set its metadata properties such as title, author, subject, keywords, creator, producer, language, and dates, and then retrieve these properties using the `PdfDocumentInformation` class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfDocumentInformation } from '@syncfusion/ej2-pdf';

// Create a PDF document.
let document: PdfDocument = new PdfDocument();
// Set or update document properties.
document.setDocumentInformation({
    title: 'Sample PDF Document', // Title of the PDF
    author: 'John Doe', // Author name
    subject: 'PDF Metadata Example', // Subject of the document
    keywords: 'PDF, Metadata, Example', // Keywords for search
    creator: 'JavaScript PDF Library', // Application that created the PDF
    producer: 'JavaScript PDF Library', // PDF producer
    language: 'en-US', // Language of the document
    creationDate: new Date(), // Creation date
    modificationDate: new Date() // Last modified date
});
// Access the document information.
let documentProperties: PdfDocumentInformation = document.getDocumentInformation();
// Get the title of the PDF document.
let title = documentProperties.title;
// Get the author of the PDF document.
let author = documentProperties.author;
// Get the subject of the PDF document.
let subject = documentProperties.subject;
// Get the keywords of the PDF document.
let keywords = documentProperties.keywords;
// Get the creator of the PDF document.
let creator = documentProperties.creator;
// Get the producer of the PDF document.
let producer = documentProperties.producer;
// Get the language of the PDF document.
let language = documentProperties.language;
// Get the creation date of the PDF document.
let creationDate = documentProperties.creationDate;
// Get the modification date of the PDF document.
let modificationDate = documentProperties.modificationDate;
// Add a new page so the document is valid before saving.
document.addPage();
// Save the document.
document.save('output.pdf');
// Close the document.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a PDF document.
var document = new ej.pdf.PdfDocument();
// Set or update document properties.
document.setDocumentInformation({
    title: 'Sample PDF Document', // Title of the PDF
    author: 'John Doe', // Author name
    subject: 'PDF Metadata Example', // Subject of the document
    keywords: 'PDF, Metadata, Example', // Keywords for search
    creator: 'JavaScript PDF Library', // Application that created the PDF
    producer: 'JavaScript PDF Library', // PDF producer
    language: 'en-US', // Language of the document
    creationDate: new Date(), // Creation date
    modificationDate: new Date() // Last modified date
});
// Access the document information.
var documentProperties = document.getDocumentInformation();
// Get the title of the PDF document.
var title = documentProperties.title;
// Get the author of the PDF document.
var author = documentProperties.author;
// Get the subject of the PDF document.
var subject = documentProperties.subject;
// Get the keywords of the PDF document.
var keywords = documentProperties.keywords;
// Get the creator of the PDF document.
var creator = documentProperties.creator;
// Get the producer of the PDF document.
var producer = documentProperties.producer;
// Get the language of the PDF document.
var language = documentProperties.language;
// Get the creation date of the PDF document.
var creationDate = documentProperties.creationDate;
// Get the modification date of the PDF document.
var modificationDate = documentProperties.modificationDate;
// Add a new page so the document is valid before saving.
document.addPage();
// Save the document.
document.save('output.pdf');
// Close the document.
document.destroy();

{% endhighlight %}
{% endtabs %}

## Performing incremental updates on a PDF document

The [isIncrementalUpdate](https://ej2.syncfusion.com/documentation/api/pdf/pdffilestructure#get-isincrementalupdate-boolean) property on the [PdfFileStructure](https://ej2.syncfusion.com/documentation/api/pdf/pdffilestructure) class controls whether modifications to a PDF document are appended incrementally or whether the entire file is rewritten.

N> Incremental updates are faster for small changes and preserve the document's revision history, but they can increase file size over time and may invalidate digital signatures that cover the modified content. Use a full rewrite (`isIncrementalUpdate = false`) when you need to minimize file size or when working with signed documents.

### Disabling incremental updates

The following example rewrites the entire file when saving:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Create a PDF document.
let document: PdfDocument = new PdfDocument();
// Disable incremental updates so the entire file is rewritten.
document.fileStructure.isIncrementalUpdate = false;
// Add a page.
document.addPage();
// Save the document.
document.save('output.pdf');
// Close the document.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a PDF document.
var document = new ej.pdf.PdfDocument();
// Disable incremental updates so the entire file is rewritten.
document.fileStructure.isIncrementalUpdate = false;
// Add a page.
document.addPage();
// Save the document.
document.save('output.pdf');
// Close the document.
document.destroy();

{% endhighlight %}
{% endtabs %}

## Flatten annotations and form fields

The [flatten](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#get-flatten-boolean) property converts all annotations and form fields in a PDF into static page content, removing interactivity while preserving the visual appearance of the annotations and form fields.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Flatten PDF annotations and form fields.
document.flatten = true;
// Save the document.
document.save('output.pdf');
// Destroy the document.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Flatten PDF annotations and form fields.
document.flatten = true;
// Save the document.
document.save('output.pdf');
// Destroy the document.
document.destroy();

{% endhighlight %}
{% endtabs %}

N> If the document has no annotations or form fields, setting `flatten = true` has no visible effect. The operation is not reversible: once flattened, the original interactive elements cannot be recovered.

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)