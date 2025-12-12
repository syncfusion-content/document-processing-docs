---
title: Image Extraction in TypeScript PDF library | Syncfusion
description: This section explains how to extract images from PDF documents and retrieve their properties such as position, size, and format using the JavaScript PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Image Extraction in TypeScript PDF library

The PDF provides support to extract images from PDF documents and retrieve their properties such as position, size, and format.

N> For data extraction features, you need to install the `@syncfusion/ej2-pdf-data-extract` package as an add-on.

## Extract Images from a PDF

This example demonstrates how to extract all embedded images from a PDF document using the `PdfDataExtractor` class. The extracted images are returned as a collection of `PdfEmbeddedImage` objects.
{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, PdfEmbeddedImage} from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract collection of `PdfEmbeddedImage` from the PDF document
let imageInfoCollection: PdfEmbeddedImage[] = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});
// Access the first extracted image and its raw data
let imageInfo: PdfEmbeddedImage = imageInfoCollection[0];
let data: Uint8Array = imageInfo.data;
// Destroy the document
document.destroy();
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor= new ej.pdf.PdfDataExtractor(document);
// Extract collection of `PdfEmbeddedImage` from the PDF document
var imageInfoCollection = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});
// Access the first extracted image and its raw data
var imageInfo = imageInfoCollection[0];
var data = imageInfo.data;
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Image informations

This section explains how to extract image properties such as bounds, image index from a PDF page using the `PdfEmbeddedImage` class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import {PdfDataExtractor, PdfEmbeddedImage} from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
let extractor: PdfDataExtractor = new PdfDataExtractor(document);
// Extract collection of `PdfEmbeddedImage` from the PDF document
let imageInfoCollection: PdfEmbeddedImage[] = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: 0
});
// Extracts all the images information from first page
let imageInfo: PdfEmbeddedImage = imageInfoCollection[0];
// Destroy the document
document.destroy();
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor= new ej.pdf.PdfDataExtractor(document);
// Extract collection of `PdfEmbeddedImage` from the PDF document
var imageInfoCollection = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});
// Extracts all the images information from first page
var imageInfo = imageInfoCollection[0];
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}