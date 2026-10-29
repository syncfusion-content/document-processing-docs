---
title: Barcode in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Draw QR Code, Data Matrix, and PDF417 barcodes in PDF documents using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Barcode in JavaScript PDF

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) lets you draw barcodes as vector graphics directly on PDF pages.

- **Bidimensional (2D) barcodes** encode data in a matrix or stacked pattern. The following 2D barcodes are currently supported:
  - QR Code (`PdfQRBarcode`)
  - Data Matrix (`PdfDataMatrixBarcode`)
  - PDF417 (`Pdf417Barcode`)

## Adding a two-dimensional barcode to a PDF document

The following example draws a QR Code on a PDF page using the `PdfQRBarcode` class. The same pattern applies to `PdfDataMatrixBarcode` and `Pdf417Barcode`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfQRBarcode, PdfQRErrorCorrectionLevel} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a QR Code barcode
let barcode: PdfQRBarcode = new PdfQRBarcode('https://www.syncfusion.com', {
  errorCorrectionLevel: PdfQRErrorCorrectionLevel.Medium
});
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50, width: 150, height: 150 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a QR Code barcode
var barcode = new ej.pdf.PdfQRBarcode('https://www.syncfusion.com', {
  errorCorrectionLevel: ej.pdf.PdfQRErrorCorrectionLevel.Medium
});
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50, width: 150, height: 150 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

The following example draws a Data Matrix barcode.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfDataMatrixBarcode, PdfDataMatrixEncoding, PdfDataMatrixSize} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a Data Matrix barcode
let barcode: PdfDataMatrixBarcode = new PdfDataMatrixBarcode('ITEM-2026-0001', {
  encoding: PdfDataMatrixEncoding.Auto,
  symbolSize: PdfDataMatrixSize.Auto
});
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50, width: 120, height: 120 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a Data Matrix barcode
var barcode = new ej.pdf.PdfDataMatrixBarcode('ITEM-2026-0001', {
  encoding: ej.pdf.PdfDataMatrixEncoding.Auto,
  symbolSize: ej.pdf.PdfDataMatrixSize.Auto
});
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50, width: 120, height: 120 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

N> All 2D barcode classes derive from `PdfBidimensionalBarcode` and share the same `draw` method, which accepts a `PdfPage` or `PdfGraphics` target together with the bounds of the barcode, and returns the bounds actually occupied by the barcode.

## Customizing the barcode appearance

All 2D barcodes expose the following appearance properties. They can be passed in the constructor options or set on the instance before calling `draw`.

| Property | Description | Default |
|---|---|---|
| `xDimension` | Width of one barcode module, in points. Must be a finite number greater than 0. | `1` |
| `foreColor` | Color of the dark modules, as `{ r, g, b }`. | Black (`{ r: 0, g: 0, b: 0 }`) |
| `backColor` | Color of the light modules and quiet zone, as `{ r, g, b }`. | White (`{ r: 255, g: 255, b: 255 }`) |
| `quietZone` | Margin around the symbol, measured in modules. Use `all`, or override individual `left`, `right`, `top`, and `bottom` values. Values must be non-negative. | `{ all: 0 }` |

When the `width` and `height` passed to `draw` are greater than 0, the symbol is scaled uniformly to fit the bounds (the symbol stays centered and keeps its aspect ratio for QR Code and Data Matrix). When the width or height is 0, the barcode is drawn at its natural size, calculated from `xDimension`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfQRBarcode} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a QR Code barcode
let barcode: PdfQRBarcode = new PdfQRBarcode('https://www.syncfusion.com');
// Set the module width
barcode.xDimension = 2;
// Set the color of the dark modules
barcode.foreColor = { r: 0, g: 51, b: 102 };
// Set the color of the light modules
barcode.backColor = { r: 255, g: 255, b: 255 };
// Set a quiet zone of 4 modules on all sides
barcode.quietZone = { all: 4 };
// Draw the barcode at its natural size
let occupied = barcode.draw(page, { x: 50, y: 50, width: 0, height: 0 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a QR Code barcode
var barcode = new ej.pdf.PdfQRBarcode('https://www.syncfusion.com');
// Set the module width
barcode.xDimension = 2;
// Set the color of the dark modules
barcode.foreColor = { r: 0, g: 51, b: 102 };
// Set the color of the light modules
barcode.backColor = { r: 255, g: 255, b: 255 };
// Set a quiet zone of 4 modules on all sides
barcode.quietZone = { all: 4 };
// Draw the barcode at its natural size
var occupied = barcode.draw(page, { x: 50, y: 50, width: 0, height: 0 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Creating a QR Code with a logo

A QR Code can display an image at its center by using the `logo` property (`PdfQRBarcodeLogo`). The logo can be supplied as a `PdfBitmap` or as raw image bytes (`Uint8Array`).

| Logo property | Description | Default |
|---|---|---|
| `data` | The logo image as `PdfBitmap` or `Uint8Array`. Required. | - |
| `size` | Maximum logo size (`{ width, height }`) in PDF user-space units. | - |
| `padding` | Padding around the logo, in PDF user-space units. Must be a non-negative number. | `0` |
| `preserveAspectRatio` | Preserves the aspect ratio of the source image. | `true` |
| `strictValidation` | Throws an error when the logo covers too much of the symbol or overlaps its protected patterns. | `true` |

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfQRBarcode, PdfQRErrorCorrectionLevel} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a QR Code with high error correction and a centered logo
let barcode: PdfQRBarcode = new PdfQRBarcode('https://www.syncfusion.com', {
  errorCorrectionLevel: PdfQRErrorCorrectionLevel.High,
  logo: {
    data: logoBytes, // PNG or JPEG image bytes (Uint8Array)
    size: { width: 30, height: 30 },
    padding: 2
  }
});
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50, width: 180, height: 180 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Create a QR Code with high error correction and a centered logo
var barcode = new ej.pdf.PdfQRBarcode('https://www.syncfusion.com', {
  errorCorrectionLevel: ej.pdf.PdfQRErrorCorrectionLevel.High,
  logo: {
    data: logoBytes, // PNG or JPEG image bytes (Uint8Array)
    size: { width: 30, height: 30 },
    padding: 2
  }
});
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50, width: 180, height: 180 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

N> Use the `High` error correction level when adding a logo, and keep the logo small. A logo that covers too much of the symbol or overlaps its protected patterns throws an error when `strictValidation` is `true`. An unsupported or invalid logo image also throws an error.

## Supported QR Code error correction levels

| Level | Enum value | Approximate recovery capability | Recommended use |
|---|---|---|---|
| Low | `PdfQRErrorCorrectionLevel.Low` | 7% | Clean environments; smallest symbol. |
| Medium | `PdfQRErrorCorrectionLevel.Medium` | 15% | General purpose (default). |
| Quartile | `PdfQRErrorCorrectionLevel.Quartile` | 25% | Printed labels that may be scuffed. |
| High | `PdfQRErrorCorrectionLevel.High` | 30% | Harsh environments, or QR Codes with a logo. |

A higher level makes the symbol more resilient but also increases its size for the same content. PDF417 uses its own `Pdf417ErrorCorrectionLevel` enumeration (`Auto`, `Level0` to `Level8`).

## Supported barcode types

| Symbol | Category | Supported Characters | Length |
|---|---|---|---|
| QR Code | 2D (matrix) | Numeric (`0-9`), alphanumeric (`0-9`, `A-Z`, space, `$ % * + - . / :`), and byte data (UTF-8 or ISO-8859-1). `Mixed` mode (default) selects segments automatically. | Up to the capacity of version 40 at the selected error correction level (at most 7,089 digits, 4,296 alphanumeric characters, or 2,953 bytes). |
| Data Matrix | 2D (matrix) | ASCII (including digit-pair compaction) or arbitrary bytes (Base256). | Up to the capacity of the largest symbol (144 x 144); Base256 payloads up to 1,555 bytes. |
| PDF417 | 2D (stacked) | Any text, encoded as UTF-8. | Up to 1,800 UTF-8 bytes. |

N> Empty text is not supported. An invalid configuration, a payload that does not fit the selected symbol, or characters not supported by a forced input mode throws an error when `draw` is called.

## Notes

- **Sizing:** Barcode size is determined by the encoded data, the `xDimension`, and the quiet zone. Passing explicit `width` and `height` to `draw` fits the symbol to the bounds; a bounds smaller than the quiet zone throws an error. Use `draw`'s return value to position other content around the barcode.
- **Square symbols:** QR Code and Data Matrix are drawn with equal horizontal and vertical module size, so the symbol is centered in the bounds if they are not square.
- **Colors:** Keep a strong contrast between `foreColor` and `backColor`, and use a dark foreground on a light background. Inverted or low-contrast colors may not scan reliably.
- **Quiet zone:** Scanners need an empty margin around the symbol. Use a `quietZone` of at least 4 modules for QR Code and at least 1-2 modules for Data Matrix, or reserve the margin with surrounding page space.
- **Printing:** Use a module size that your printer resolution can reproduce clearly. Avoid scaling the page when printing.
- **Scanning:** Verify generated barcodes with the target scanner, especially when using a logo, custom colors, small `xDimension` values, or low error correction levels.
- **Vector output:** Barcodes are drawn as vector graphics and remain sharp at any zoom level.
