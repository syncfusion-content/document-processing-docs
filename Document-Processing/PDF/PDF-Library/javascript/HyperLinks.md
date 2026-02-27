---
title: Hyperlinks in JavaScript PDF library | Syncfusion
description: This section explains how to add a hyperlink in a new or existing PDF document by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Hyperlinks in JavaScript PDF library

In PDF, hyperlinks can be added to allow the users to navigate to another part of PDF file, web page or any other external content.

## Working with web navigation

This example demonstrates how to create a web link annotation in a PDF document using the `PdfTextWebLinkAnnotation` class. A web link annotation allows users to navigate to a specified URL directly from the PDF by clicking the annotated text.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStringFormat, PdfStandardFont, PdfFontFamily, PdfTextWebLinkAnnotation, PdfFontStyle, Size } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument();
// Access the first page
let page: PdfPage = document.addPage();
// Create a new PDF string format
let format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.left, PdfVerticalAlignment.top);
// Create a new standard font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular);
// Get the text size
let size: Size = font.measureString('Syncfusion');
// Create a new text web link annotation
let annotation: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0}, { r: 165, g: 42, b: 42 }, 1);
// Sets the URL of the annotation.
annotation.url = ‘http://www.syncfusion.com’;
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument();
// Access the first page
var page = document.addPage();
// Create a new PDF string format
var format = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.left, ej.pdf.PdfVerticalAlignment.top);
// Create a new standard font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Get the text size
var size = font.measureString('Syncfusion');
// Create a new text web link annotation
var annotation = new ej.pdf.PdfTextWebLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0 }, { r: 165, g: 42, b: 42 }, 1);
// Sets the URL of the annotation.
annotation.url = ‘http://www.syncfusion.com’;
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
import { PdfDocument, PdfPage, PdfStringFormat, PdfStandardFont, PdfDocumentLinkAnnotation, PdfTextAlignment, PdfFontFamily, PdfFontStyle, PdfDestination, PdfDestinationMode, Size } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a new PDF string format
let format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.left, PdfVerticalAlignment.top);
// Create a new standard font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Get the text size
let size: Size = font.measureString('Syncfusion');
// Create a new text web link annotation
let annotation: PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0}, { r: 165, g: 42, b: 42 }, 1);
// Initializes a new instance of the `PdfDestination` class.
let destination: PdfDestination = new PdfDestination(
    page,
    { x: 20, y: 20, width: 100, height: 50 },
    { zoom: 20, mode: PdfDestinationMode.fitToPage }
);
// Sets destination to  document link annotation.
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
// Create a new PDF string format
var format = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.left, ej.pdf.PdfVerticalAlignment.top);
// Create a new standard font
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Get the text size
var size = font.measureString('Syncfusion');
// Create a new text web link annotation
var annotation = new ej.pdf.PdfDocumentLinkAnnotation({ x: 50, y: 40, width: size.width, height: size.height }, { r: 0, g: 0, b: 0 }, { r: 165, g: 42, b: 42 }, 1);
// Initializes a new instance of the `PdfDestination` class.
var destination = new ej.pdf.PdfDestination(
    page,
    { x: 20, y: 20, width: 100, height: 50 },
    { zoom: 20, mode: ej.pdf.PdfDestinationMode.fitToPage }
);
// Sets destination to  document link annotation.
annotation.destination = destination;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with external document navigation

This example demonstrates how to create external navigation in a PDF document using `PdfFileLinkAnnotation` annotations. External navigation allows users to open and navigate to another PDF or an external file from within the current document.

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

This example shows how to update hyperlink annotations in a PDF using Syncfusion’s JavaScript PDF Library. Link annotations retrieved from a page can have their URL or bounding region updated as needed. This makes it easy to refresh outdated links or adjust navigation behavior whenever the document changes.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTextWebLinkAnnotation } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Get the first annotation of the page
let annotation: PdfAnnotation = page.annotations.at(0);
// Modified its properties
if (annotation instanceof PdfTextWebLinkAnnotation) {
    annotation.url = 'https://www.google.co.in/';
}
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Get the first annotation of the page
var annotation = page.annotations.at(0);
// Modified its properties
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

This example demonstrates how to remove hyperlink annotations from a PDF using Syncfusion’s JavaScript PDF Library. By reviewing each annotation and checking whether it represents a hyperlink, you can remove it using either `remove()` or `removeAt()`. This helps clean up outdated or unwanted links while keeping the rest of the document content intact.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTextWebLinkAnnotation } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access first annotation from the PDF page
let annotation: PdfTextWebLinkAnnotation = page.annotations.at(0) as PdfTextWebLinkAnnotation;
// Remove an annotation from the collection
page.annotations.remove(annotation);
// Remove an annotation with specific index
page.annotations.removeAt(1);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access first annotation from the PDF page
var annotation = page.annotations.at(0);
// Remove an annotation from the collection
if (annotation instanceof ej.pdf.PdfTextWebLinkAnnotation) {
    page.annotations.remove(annotation);
}
// Remove an annotation with specific index
page.annotations.removeAt(1);
// Save the document
document.save('output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}