---
title: Image Extraction in TypeScript PDF library | Syncfusion
description: This section explains how to extract images from PDF documents and retrieve their properties such as position and size using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Image Extraction in TypeScript PDF library

The PDF provides support to extract images from PDF documents and retrieve their properties such as bounds, index and raw byte data.

N> For redaction features, you need to install the `@syncfusion/ej2-pdf-data-extract` package as an add-on. Please verify the platform's actual root directory where the `openjpeg` file is extracted. Depending on the platform, the root path may vary. Check which root folder is being used by reviewing the path referenced in the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-asp-net-core) page.

## Extract images from a PDF

This code demonstrates how to extract embedded images and their metadata from a PDF using  `PdfDataExtractor`. It loads a PDF, retrieves all  `PdfEmbeddedImage` entries across pages, accesses the first image's raw byte data, and reads its properties format, page index, occurrence index, bounds, interpolation status, and masking flags before saving/disposing resources by destroying the document.

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
// Get the raw byte data of the extracted image
let imageData: Uint8Array = imageInfo.data;
// Gets the image format.
let type = imageInfo.type;
// Gets the page index of the image
let pageIndex = imageInfo.pageIndex;
// Gets the index of the image occurrence within the PDF page
let index = imageInfo.index;
// Gets the bounds of the image
let bounds = imageInfo.bounds;
// Gets the XObject resource name for this image
let name: string = imageInfo.resourceName;
// Gets the boolean flag indicating whether the image is interpolated or not
let isImageInterpolated = imageInfo.isImageInterpolated;
// Gets the boolean flag indicating whether the image is masked or not
let isImageMasked = imageInfo.isImageMasked;
// Gets the boolean flag indicating whether the image is soft masked or not
let IsSoftMasked: boolean = imageInfo.isSoftMasked;
// Gets the image physical dimension
let physicalDimension: Size = imageInfo.physicalDimension;
// Destroy the PDF document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfDataExtractor` class
var extractor= new ej.pdfdataextract.PdfDataExtractor(document);
// Extract collection of `PdfEmbeddedImage` from the PDF document
var imageInfoCollection = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});
// Access the first extracted image and its raw data
var imageInfo = imageInfoCollection[0];
// Get the raw byte data of the extracted image
var imageData = imageInfo.data;
// Gets the image format.
var type = imageInfo.type;
// Gets the page index of the image.
var pageIndex = imageInfo.pageIndex;
// Gets the index of the image occurrence within the PDF page
var index = imageInfo.index;
// Gets the bounds of the image.
var bounds = imageInfo.bounds;
// Gets the XObject resource name for this image
var name = imageInfo.resourceName;
// Gets the boolean flag indicating whether the image is interpolated or not
var isImageInterpolated = imageInfo.isImageInterpolated;
//// Gets the boolean flag indicating whether the image is masked or not
var isImageMasked = imageInfo.isImageMasked;
// Gets the boolean flag indicating whether the image is soft masked or not
var IsSoftMasked = imageInfo.isSoftMasked;
// Gets the image physical dimension
var physicalDimension = imageInfo.physicalDimension;
// Destroy the PDF document
document.destroy();

{% endhighlight %}
{% endtabs %}