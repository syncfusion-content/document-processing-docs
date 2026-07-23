---
title: Image Extraction in JavaScript PDF Library | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Learn to extract PDF images and retrieve format, page location, bounds, masking flags, resource names, and dimensions with JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Image Extraction in JavaScript PDF Library

The JavaScript PDF Library enables you to extract embedded images from PDF documents and retrieve properties such as image format, page index, occurrence index, bounds, resource name, interpolation settings, masking flags, and physical dimensions.

## Extract Images from a PDF

This section demonstrates how to extract embedded images and their metadata from a PDF using [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor). It loads a PDF, retrieves all [PdfEmbeddedImage](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfembeddedimage) entries across pages, accesses the first image's raw byte data, and reads its properties before disposing of the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, Size } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor, PdfEmbeddedImage } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
const document = new PdfDocument(data);
// Create a PdfDataExtractor instance
const extractor = new PdfDataExtractor(document);
// Extract images from all pages
const imageInfoCollection: PdfEmbeddedImage[] = extractor.extractImages({
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
// Destroy the document
document.destroy();
{% endhighlight %}

{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Create a PdfDataExtractor instance
var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
// Extract images from all pages
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
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## PdfEmbeddedImage Properties

| Property | Type | Description |
|----------|----------|----------|
| `data` | `Uint8Array` | Raw byte data of the embedded image. |
| `type` | `ImageType` | Image format (`JPEG`, `PNG`, `unknown`). |
| `pageIndex` | `number` | Zero-based page index containing the image. |
| `index` | `number` | Zero-based occurrence index of the image within the page. |
| `bounds` | `RectangleF` | Image position and size on the page. Members: `x`, `y`, `width`, `height`. |
| `resourceName` | `string` | XObject resource name used by the image in the PDF content stream. |
| `isImageInterpolated` | `boolean` | Indicates whether interpolation is enabled. |
| `isImageMasked` | `boolean` | Indicates whether the image is a stencil mask. |
| `isSoftMasked` | `boolean` | Indicates whether the image has an associated soft mask. |
| `physicalDimension` | `Size` | Native image width and height in pixels. Members: `width`, `height`. |

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default)