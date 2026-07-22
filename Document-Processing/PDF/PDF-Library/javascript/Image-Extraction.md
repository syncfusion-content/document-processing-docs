---
title: Image Extraction in JavaScript PDF Library | Syncfusion
description: Learn how to extract embedded images from PDF documents and read properties such as format, page index, occurrence index, bounds, resource name, interpolation, masking flags, and physical dimension using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---

# Image Extraction in JavaScript PDF Library

The Syncfusion JavaScript PDF library provides support to extract images from PDF documents and retrieve their properties, such as format, page index, occurrence index, bounds, resource name, interpolation, masking flags, and physical dimension.

## Extract images from a PDF

This section demonstrates how to extract embedded images and their metadata from a PDF using [PdfDataExtractor](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfdataextractor). It loads a PDF, retrieves all [PdfEmbeddedImage](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfembeddedimage) entries across pages, accesses the first image's raw byte data, and reads its properties before disposing of the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDataExtractor, PdfEmbeddedImage } from '@syncfusion/ej2-pdf-data-extract';
const extractor: PdfDataExtractor = new PdfDataExtractor(document);
const imageInfoCollection: PdfEmbeddedImage[] = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});
if (imageInfoCollection.length === 0) {
  console.warn('No embedded images were found in the specified page range.');
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var extractor = new ej.pdfdataextract.PdfDataExtractor(document);
var imageInfoCollection = extractor.extractImages({
  startPageIndex: 0,
  endPageIndex: document.pageCount - 1
});
if (!imageInfoCollection.length) {
  console.warn('No embedded images were found in the specified page range.');
}

{% endhighlight %}
{% endtabs %}

#### `extractImages` options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `startPageIndex` | `number` | `0` | Zero-based index of the first page to process. |
| `endPageIndex` | `number` | `document.pageCount - 1` | Zero-based index of the last page to process (inclusive). |

### Extract from a specific page range

```typescript
// Extract images only from page 2 (zero-based index 1)
const pageTwoImages: PdfEmbeddedImage[] = extractor.extractImages({
  startPageIndex: 1,
  endPageIndex: 1
});
```

### Read image properties

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Size } from '@syncfusion/ej2-pdf';

const imageInfo: PdfEmbeddedImage = imageInfoCollection[0];
// Raw byte data of the extracted image
const imageData: Uint8Array = imageInfo.data;
// Image format
const type = imageInfo.type;
// Page index where the image appears
const pageIndex = imageInfo.pageIndex;
// Occurrence index of the image within the page
const index = imageInfo.index;
// Bounds of the image on the page, in points
const bounds = imageInfo.bounds;
// XObject resource name for this image in the PDF content stream
const resourceName: string = imageInfo.resourceName;
// Whether the image is interpolated
const isImageInterpolated = imageInfo.isImageInterpolated;
// Whether the image is masked
const isImageMasked = imageInfo.isImageMasked;
// Whether the image is soft-masked
const isSoftMasked: boolean = imageInfo.isSoftMasked;
// Physical dimension of the image, in pixels
const physicalDimension: Size = imageInfo.physicalDimension;

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

var imageInfo = imageInfoCollection[0];
// Raw byte data of the extracted image
var imageData = imageInfo.data;
// Image format
var type = imageInfo.type;
// Page index where the image appears
var pageIndex = imageInfo.pageIndex;
// Occurrence index of the image within the page
var index = imageInfo.index;
// Bounds of the image on the page, in points
var bounds = imageInfo.bounds;
// XObject resource name for this image in the PDF content stream
var resourceName = imageInfo.resourceName;
// Whether the image is interpolated
var isImageInterpolated = imageInfo.isImageInterpolated;
// Whether the image is masked
var isImageMasked = imageInfo.isImageMasked;
// Whether the image is soft-masked
var isSoftMasked = imageInfo.isSoftMasked;
// Physical dimension of the image, in pixels
var physicalDimension = imageInfo.physicalDimension;

{% endhighlight %}
{% endtabs %}

#### `PdfEmbeddedImage` properties

| Property | Type | Description |
|----------|------|-------------|
| `data` | `Uint8Array` | Raw byte data of the embedded image. |
| `type` | `ImageType` | Image format. Supported values: `JPEG`, `PNG`, `JPEG2000`, `JBIG2`, `CCITT`, `Bitmap`. |
| `pageIndex` | `number` | Zero-based index of the page that contains the image. |
| `index` | `number` | Zero-based occurrence index of the image within the page. |
| `bounds` | `RectangleF` | Position and size on the page, in points. Members: `x`, `y`, `width`, `height`. |
| `resourceName` | `string` | XObject resource name used to reference the image in the PDF content stream. |
| `isImageInterpolated` | `boolean` | Indicates whether the image is flagged for interpolation. |
| `isImageMasked` | `boolean` | Indicates whether the image is a stencil mask. |
| `isSoftMasked` | `boolean` | Indicates whether the image is associated with a soft mask. |
| `physicalDimension` | `Size` | Native width and height of the image, in pixels. Members: `width`, `height`. |

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)