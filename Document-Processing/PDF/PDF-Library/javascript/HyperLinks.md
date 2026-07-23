---
title: Hyperlinks in JavaScript PDF Library | Syncfusion
description: This section explains how to add a hyperlink in a new or existing PDF document by using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---

# Hyperlinks in JavaScript PDF Library

You can add hyperlinks to allow users to navigate to another part of a PDF file, a web page, or any other external content.

## Annotation Type Overview

| Use Case | Class | Description |
|---|---|---|
| Web navigation | `PdfTextWebLinkAnnotation` | Navigate to a URL by clicking annotated text |
| Internal document navigation | `PdfDocumentLinkAnnotation` | Navigate to a location within the same PDF |
| External document navigation | `PdfFileLinkAnnotation` | Open another file (PDF, image, etc.) |
| Modify existing link | `PdfTextWebLinkAnnotation` | Update URL or bounds of an existing web link |
| Remove link | `PdfAnnotationCollection` | Use `remove()` or `removeAt()` to delete annotations |

## Working with web navigation

This example demonstrates how to create a web link annotation in a PDF document using the [PdfTextWebLinkAnnotation](https://ej2.syncfusion.com/documentation/api/pdf/pdftextweblinkannotation) class. A web link annotation allows users to navigate to a specified URL directly from the PDF by clicking the annotated text.

**Constructor parameters:**
- `bounds`: Rectangle defining the annotation area (`{ x, y, width, height }`)
- `textColor`: Text color as RGB object (`{ r, g, b }`)
- `backgroundColor`: Background color as RGB object (`{ r, g, b }`)
- `borderWidth`: Border width in points

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfTextWebLinkAnnotation, PdfFontStyle, Size } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Access the first page
let page: PdfPage = document.addPage();
// Create a new standard font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Measure the width and height of the rendered text
let size: Size = font.measureString('Syncfusion');
// Create a new text web link annotation
let annotation: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0}, { r: 165, g: 42, b: 42 }, 1);
// Sets the URL of the annotation.
annotation.url = 'http://www.syncfusion.com';
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Access the first page
var page = document.addPage();
// Create a new standard font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Measure the width and height of the rendered text
var size = font.measureString('Syncfusion');
// Create a new text web link annotation
var annotation = new ej.pdf.PdfTextWebLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0 }, { r: 165, g: 42, b: 42 }, 1);
// Sets the URL of the annotation.
annotation.url = 'http://www.syncfusion.com';
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with internal document navigation

This example demonstrates how to create internal navigation within a PDF document using destination-based annotations.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfDocumentLinkAnnotation, PdfFontFamily, PdfFontStyle, PdfDestination, PdfDestinationMode, Size } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a new standard font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Measure the width and height of the rendered text
let size: Size = font.measureString('Syncfusion');
// Create a new document link annotation
let annotation: PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0}, { r: 165, g: 42, b: 42 }, 1);
// Initializes a new instance of the `PdfDestination` class.
let destination: PdfDestination = new PdfDestination(
    page,
    { x: 20, y: 20, width: 100, height: 50 },
    { zoom: 1.0, mode: PdfDestinationMode.fitToPage }
);
// Sets destination to document link annotation.
annotation.destination = destination;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Create a new standard font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Measure the width and height of the rendered text
var size = font.measureString('Syncfusion');
// Create a new document link annotation
var annotation = new ej.pdf.PdfDocumentLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0 }, { r: 165, g: 42, b: 42 }, 1);
// Initializes a new instance of the `PdfDestination` class.
var destination = new ej.pdf.PdfDestination(
    page,
    { x: 20, y: 20, width: 100, height: 50 },
    { zoom: 1.0, mode: ej.pdf.PdfDestinationMode.fitToPage }
);
// Sets destination to document link annotation.
annotation.destination = destination;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with external document navigation

This example demonstrates how to create external navigation in a PDF document using [PdfFileLinkAnnotation](https://ej2.syncfusion.com/documentation/api/pdf/pdffilelinkannotation) annotations. External navigation allows users to open and navigate to another PDF or an external file from within the current document.

**File resolution behavior:** The file path specified in the constructor is **referenced at runtime** (not embedded in the PDF). The target file must be accessible at the specified path when the PDF is opened. Use an absolute path or ensure the file is located relative to the PDF viewer's working directory.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfFileLinkAnnotation } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a new file link annotation
let annotation: PdfFileLinkAnnotation = new PdfFileLinkAnnotation({ x: 10, y: 40, width: 30, height: 30 }, 'image.png');
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Create a new file link annotation
var annotation = new ej.pdf.PdfFileLinkAnnotation({ x: 10, y: 40, width: 30, height: 30 }, 'image.png');
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Modifying or updating existing hyperlinks

This example shows how to update hyperlink annotations in a PDF using [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library). Link annotations retrieved from a page can have their URL or bounding region updated as needed. This makes it easy to refresh outdated links or adjust navigation behavior whenever the document changes.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTextWebLinkAnnotation, PdfAnnotation } from '@syncfusion/ej2-pdf';

// Load an existing PDF document from a file
let document: PdfDocument = new PdfDocument(pdfBytes);
// Access the first page
let page: PdfPage = document.getPage(0);
// Get the first annotation of the page
let annotation: PdfAnnotation = page.annotations.at(0);
// Modify its properties
if (annotation instanceof PdfTextWebLinkAnnotation) {
    annotation.url = 'https://www.google.co.in/';
}
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document from a file
var document = new ej.pdf.PdfDocument(pdfBytes);
// Access the first page
var page = document.getPage(0);
// Get the first annotation of the page
var annotation = page.annotations.at(0);
// Modify its properties
if (annotation instanceof ej.pdf.PdfTextWebLinkAnnotation) {
    annotation.url = 'https://www.google.co.in/';
}
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing hyperlinks

This example demonstrates how to remove hyperlink annotations from a PDF using [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library). By reviewing each annotation and checking whether it represents a hyperlink, you can remove it using either [remove()](https://ej2.syncfusion.com/documentation/api/pdf/pdfannotationcollection#remove) or [removeAt()](https://ej2.syncfusion.com/documentation/api/pdf/pdfannotationcollection#removeat) methods. This helps clean up outdated or unwanted links while keeping the rest of the document content intact.

**Method differences:**
- `remove(annotation)`: Removes a specific annotation object by reference.
- `removeAt(index)`: Removes an annotation at a specific index position. Ensure the index is valid before calling.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTextWebLinkAnnotation } from '@syncfusion/ej2-pdf';

// Load an existing PDF document from a file
let document: PdfDocument = new PdfDocument(pdfBytes);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access first annotation from the PDF page
let annotation: PdfTextWebLinkAnnotation = page.annotations.at(0) as PdfTextWebLinkAnnotation;
// Remove an annotation from the collection
page.annotations.remove(annotation);
// Remove an annotation at index 1
page.annotations.removeAt(1);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document from a file
var document = new ej.pdf.PdfDocument(pdfBytes);
// Access the first page
var page = document.getPage(0);
// Access first annotation from the PDF page
var annotation = page.annotations.at(0);
// Remove an annotation from the collection
page.annotations.remove(annotation);
// Remove an annotation at index 1
page.annotations.removeAt(1);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)