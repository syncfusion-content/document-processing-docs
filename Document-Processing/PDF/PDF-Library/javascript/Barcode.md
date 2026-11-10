---
title: Barcode in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Draw 1D and 2D barcodes in PDF documents using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Barcode in JavaScript PDF

The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) lets you draw barcodes as vector graphics directly on PDF pages.

- **Unidimensional (1D) barcodes** encode data in a sequence of bars and spaces of varying widths. The following 1D barcodes are currently supported:
  - Code 39 (`PdfCode39Barcode`)
  - Code 39 Extended (`PdfCode39ExtendedBarcode`)
  - Code 11 (`PdfCode11Barcode`)
  - Codabar (`PdfCodabarBarcode`)
  - Code 32 (`PdfCode32Barcode`)
  - Code 93 (`PdfCode93Barcode`)
  - Code 93 Extended (`PdfCode93ExtendedBarcode`)
  - Code 128 (`PdfCode128Barcode`)
  - Code 128A (`PdfCode128ABarcode`)
  - Code 128B (`PdfCode128BBarcode`)
  - Code 128C (`PdfCode128CBarcode`)
  - GS1 Code 128 (`PdfGs1Code128Barcode`)
  - EAN-13 (`PdfEan13Barcode`)
  - EAN-8 (`PdfEan8Barcode`)
  - UPC-A (`PdfUpcABarcode`)

- **Bidimensional (2D) barcodes** encode data in a matrix or stacked pattern. The following 2D barcodes are currently supported:
  - QR Code (`PdfQRBarcode`)
  - Data Matrix (`PdfDataMatrixBarcode`)
  - PDF417 (`Pdf417Barcode`)

All 1D barcode classes derive from the abstract [`PdfUnidimensionalBarcode`](https://ej2.syncfusion.com/documentation/api/pdf/pdfunidimensionalbarcode), which itself extends [`PdfBarcode`](https://ej2.syncfusion.com/documentation/api/pdf/pdfbarcode). All 2D barcode classes derive from [`PdfBidimensionalBarcode`](https://ej2.syncfusion.com/documentation/api/pdf/pdfbidimensionalbarcode).

## Adding a one-dimensional barcode to a PDF document

The following example draws a Code 39 barcode on a PDF page using the [`PdfCode39Barcode`](https://ej2.syncfusion.com/documentation/api/pdf/pdfcode39barcode) class. The same pattern applies to every other 1D barcode class listed in the overview.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfCode39Barcode} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a Code 39 barcode
let barcode: PdfCode39Barcode = new PdfCode39Barcode('CODE39$');
// Draw the barcode on the page at its natural size
barcode.draw(page, { x: 50, y: 50 });
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
// Create a Code 39 barcode
var barcode = new ej.pdf.PdfCode39Barcode('CODE39$');
// Draw the barcode on the page at its natural size
barcode.draw(page, { x: 50, y: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

The following example draws an EAN-13 barcode using the [`PdfEan13Barcode`](https://ej2.syncfusion.com/documentation/api/pdf/pdfean13barcode) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfEan13Barcode} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create an EAN-13 barcode
let barcode: PdfEan13Barcode = new PdfEan13Barcode('400638133393');
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50 });
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
// Create an EAN-13 barcode
var barcode = new ej.pdf.PdfEan13Barcode('400638133393');
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

N> All 1D barcode classes share the same `draw` method, which accepts a `PdfPage` or `PdfGraphics` target together with a point or bounds, and returns the rectangle occupied by the barcode, including quiet zones and text. An invalid text, bounds, or property value throws an error and nothing is drawn.

## Setting the location and size of a barcode

The `draw` method accepts a point or bounds. A point or zero-sized bounds selects the natural size, calculated from the encoded data, the `narrowBarWidth`, and the quiet zones. Positive bounds scale the barcode to fit the specified width and height and ignore `narrowBarWidth` and `barHeight`. The width and height must both be 0 (natural size) or both be positive; mixing them throws an error.

The following example sets the location and size of a Codabar barcode using the [`PdfCodabarBarcode`](https://ej2.syncfusion.com/documentation/api/pdf/pdfcodabarbarcode) class. The return value of `draw` is the rectangle that the barcode actually occupies and can be used to position other content around it.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfCodabarBarcode} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a Codabar barcode
let barcode: PdfCodabarBarcode = new PdfCodabarBarcode('123456789$');
// Draw the barcode at the specified point (natural size)
barcode.draw(page, { x: 100, y: 100 });
// Draw the barcode again within the specified bounds
barcode.draw(page.graphics, { x: 100, y: 200, width: 250, height: 100 });
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
// Create a Codabar barcode
var barcode = new ej.pdf.PdfCodabarBarcode('123456789$');
// Draw the barcode at the specified point (natural size)
barcode.draw(page, { x: 100, y: 100 });
// Draw the barcode again within the specified bounds
barcode.draw(page.graphics, { x: 100, y: 200, width: 250, height: 100 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

N> When the bounds are smaller than the required quiet zones, or smaller than the space needed for the text and bars, `draw` throws an error.

## Adding a barcode without displaying the barcode text

The human-readable text for a 1D barcode is hidden by setting `textLocation` to `PdfBarcodeTextLocation.None`. The [`PdfBarcodeTextLocation`](https://ej2.syncfusion.com/documentation/api/pdf/pdfbarcodetextlocation) enumeration also supports `Bottom` (default) and `Top`.

The following example draws a Code 39 barcode with the human-readable text hidden.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfCode39Barcode, PdfBarcodeTextLocation} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a Code 39 barcode
let barcode: PdfCode39Barcode = new PdfCode39Barcode('123456789');
// Hide the human-readable barcode text
barcode.textLocation = PdfBarcodeTextLocation.None;
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50 });
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
// Create a Code 39 barcode
var barcode = new ej.pdf.PdfCode39Barcode('123456789');
// Hide the human-readable barcode text
barcode.textLocation = ej.pdf.PdfBarcodeTextLocation.None;
// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Customizing the barcode appearance

All barcode classes share a common set of appearance properties that control the colors and the quiet zone. The properties can be passed in the constructor options or set on the instance before calling `draw`. 1D barcodes add additional properties for bar height, narrow-bar width, and human-readable text.

| Property | Description | Default |
|---|---|---|
| `foreColor` | Color of the dark modules or bars, as `{ r, g, b }`. | Black (`{ r: 0, g: 0, b: 0 }`) |
| `backColor` | Color of the light modules, the quiet zone, and the human-readable text background, as `{ r, g, b }`. | White (`{ r: 255, g: 255, b: 255 }`) |
| `quietZone` | Margin around the symbol, measured in modules. Use `all`, or override individual `left`, `right`, `top`, and `bottom` values. Values must be non-negative. | `{ all: 0 }` |
| `xDimension` | 2D only. Width of one barcode module, in points. Must be a finite number greater than 0. | `1` |
| `narrowBarWidth` | 1D only. Width, in points, of the narrowest bar. Must be a finite number greater than 0. Ignored when `draw` is called with positive bounds. | `1` |
| `barHeight` | 1D only. Bar height in points. `0` selects an automatic height (about 80 points). Ignored when `draw` is called with positive bounds. | `0` (automatic) |
| `textColor` | 1D only. Color of the human-readable text, as `{ r, g, b }`. | Black (`{ r: 0, g: 0, b: 0 }`) |
| `textGap` | 1D only. Gap, in points, between the bars and the human-readable text. | `5` |
| `font` | 1D only. Font used for the human-readable text. | Helvetica 8 (`PdfStandardFont`) |
| `textAlignment` | 1D only. Horizontal alignment of the human-readable text (`PdfBarcodeTextAlignment.Center`, `.Left`, or `.Right`). | `PdfBarcodeTextAlignment.Center` |
| `textLocation` | 1D only. Location of the human-readable text relative to the bars (`PdfBarcodeTextLocation.Bottom`, `.Top`, or `.None`). | `PdfBarcodeTextLocation.Bottom` |
| `encodeStartStopSymbols` | 1D only. Whether applicable start and stop symbols are included in the displayed text (Code 39, Code 39 Extended, Code 11, Code 32, Code 93, Code 93 Extended). | `false` |
| `showCheckDigit` | EAN-13, EAN-8, UPC-A, Code 32, Code 39, Code 39 Extended, Code 11, Code 93, Code 93 Extended. Whether the encoded check digit is included in the human-readable text. | `false` |
| `enableCheckDigit` | Code 39, Code 39 Extended, Code 11. Whether the Mod-43 (Code 39) or C/K (Code 11) check digit is encoded. | `false` |

When the `width` and `height` passed to `draw` are greater than 0, the symbol is scaled uniformly to fit the bounds. For 2D symbols, the symbol stays centered and keeps its aspect ratio for QR Code and Data Matrix. For 1D symbols, the height is scaled with the width and `barHeight` is ignored. When the width or height is 0, the barcode is drawn at its natural size.

The following example customizes a Code 39 barcode using the 1D appearance properties.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {PdfDocument, PdfPage, PdfCode39Barcode, PdfBarcodeTextAlignment, PdfBarcodeTextLocation} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Create a Code 39 barcode with custom options
let barcode: PdfCode39Barcode = new PdfCode39Barcode('CODE39$', {
  foreColor: { r: 0, g: 51, b: 102 },
  backColor: { r: 255, g: 255, b: 255 },
  quietZone: { all: 10 },
  narrowBarWidth: 1.5,
  barHeight: 60,
  textGap: 4,
  textAlignment: PdfBarcodeTextAlignment.Center,
  textLocation: PdfBarcodeTextLocation.Bottom
});
// Draw the barcode at its natural size
let occupied = barcode.draw(page, { x: 50, y: 50 });
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
// Create a Code 39 barcode with custom options
var barcode = new ej.pdf.PdfCode39Barcode('CODE39$', {
  foreColor: { r: 0, g: 51, b: 102 },
  backColor: { r: 255, g: 255, b: 255 },
  quietZone: { all: 10 },
  narrowBarWidth: 1.5,
  barHeight: 60,
  textGap: 4,
  textAlignment: ej.pdf.PdfBarcodeTextAlignment.Center,
  textLocation: ej.pdf.PdfBarcodeTextLocation.Bottom
});
// Draw the barcode at its natural size
var occupied = barcode.draw(page, { x: 50, y: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

The following example customizes a QR Code barcode using the 2D appearance properties.

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
| Code 39 | 1D (linear) | Digits (`0-9`), uppercase letters (`A-Z`), and `- . $ / + %` and space. The `*` character is reserved as the start/stop symbol and is not allowed in the payload. | Variable. Optional Mod-43 check digit (`enableCheckDigit`). |
| Code 39 Extended | 1D (linear) | Full ASCII (0-127), encoded as Code 39 shift sequences. | Variable. Optional Mod-43 check digit (`enableCheckDigit`). |
| Code 11 | 1D (linear) | Digits (`0-9`) and `-`. | Variable. Optional C and K check digits (`enableCheckDigit`). |
| Codabar | 1D (linear) | Digits (`0-9`) and `- $ : / . +`. Start and stop symbols (`A-D`) are added automatically and are not part of the payload. | Variable. |
| Code 32 | 1D (linear) | Digits (`0-9`), with an optional leading `A`. | Exactly 8 digits after the optional `A` prefix. The decimal check digit is always computed and encoded. |
| Code 93 | 1D (linear) | Digits (`0-9`), uppercase letters (`A-Z`), and `- . $ / + %` and space. | Variable. The two Mod-47 check characters (`C` and `K`) are always encoded. |
| Code 93 Extended | 1D (linear) | Full ASCII (0-127), encoded as Code 93 shift sequences. | Variable. The two Mod-47 check characters are always encoded. |
| Code 128 | 1D (linear) | Full ASCII (0-127). The code set (A, B, or C) is selected automatically per character; pairs of digits are encoded in code set C. | Variable. The Mod-103 check character is always encoded. |
| Code 128A | 1D (linear) | Code set A: ASCII control characters (0-31), digits (`0-9`), uppercase letters (`A-Z`), and the symbols `!"#$%&'()*+,-./:;<=>?@[\]^_`. | Variable. The Mod-103 check character is always encoded. |
| Code 128B | 1D (linear) | Code set B: ASCII (32-127). | Variable. The Mod-103 check character is always encoded. |
| Code 128C | 1D (linear) | Code set C: digit pairs (`00` to `99`). An odd-length payload is left-padded with a `0` for encoding; the caption keeps the original text. | An even number of digits; the symbol length is half the encoded length. The Mod-103 check character is always encoded. |
| GS1 Code 128 | 1D (linear) | GS1 element strings written as `(AI)value` pairs separated by `(` — for example, `(01)12345678901231(10)ABC123`. AIs follow the GS1 General Specifications. The encoded payload (AIs and values) is at most 48 characters; FNC1 separators are inserted automatically between non-predefined-length groups. | Each AI accepts a fixed or variable value length as defined in the GS1 General Specifications. Empty text, an unknown or repeated AI, an unpaired parenthesis, an out-of-range length, a non-digit value in a numeric AI, an invalid date, or a payload that exceeds 48 characters throws an error. |
| EAN-13 | 1D (linear) | Digits (`0-9`). | 12 digits, or 13 digits when the check digit is included. The check digit is always encoded. |
| EAN-8 | 1D (linear) | Digits (`0-9`). | 7 digits, or 8 digits when the check digit is included. The check digit is always encoded. |
| UPC-A | 1D (linear) | Digits (`0-9`). | 11 digits, or 12 digits when the check digit is included. The check digit is always encoded. |
| QR Code | 2D (matrix) | Numeric (`0-9`), alphanumeric (`0-9`, `A-Z`, space, `$ % * + - . / :`), and byte data (UTF-8 or ISO-8859-1). `Mixed` mode (default) selects segments automatically. | Up to the capacity of version 40 at the selected error correction level (at most 7,089 digits, 4,296 alphanumeric characters, or 2,953 bytes). |
| Data Matrix | 2D (matrix) | ASCII (including digit-pair compaction) or arbitrary bytes (Base256). | Up to the capacity of the largest symbol (144 x 144); Base256 payloads up to 1,555 bytes. |
| PDF417 | 2D (stacked) | Any text, encoded as UTF-8. | Up to 1,800 UTF-8 bytes. |

N> Empty text is not supported. An invalid configuration, a payload that does not fit the selected symbol, characters not supported by the chosen barcode, or an incorrect check digit throws an error when `draw` is called.

## Notes

- **Sizing:** Barcode size is determined by the encoded data, the `xDimension` or `narrowBarWidth`, and the quiet zone. Passing explicit `width` and `height` to `draw` fits the symbol to the bounds; a bounds smaller than the quiet zone throws an error. Use `draw`'s return value to position other content around the barcode.
- **Square symbols:** QR Code and Data Matrix are drawn with equal horizontal and vertical module size, so the symbol is centered in the bounds if they are not square.
- **1D bar height:** For 1D barcodes, a positive `barHeight` sets a fixed bar height; `0` (default) selects an automatic height of about 80 points. Positive bounds to `draw` override `barHeight` and scale the bars to fit.
- **Check digits:** EAN-13, EAN-8, UPC-A, Code 32, Code 93, Code 93 Extended, Code 128, and Code 128A/B/C always encode their check digits; an incorrect check digit in the payload throws an error. Code 39, Code 39 Extended, and Code 11 only encode their check digits when `enableCheckDigit` is `true`. Set `showCheckDigit` to include the check digit in the human-readable text.
- **Colors:** Keep a strong contrast between `foreColor` and `backColor`, and use a dark foreground on a light background. Inverted or low-contrast colors may not scan reliably.
- **Quiet zone:** Scanners need an empty margin around the symbol. Use a `quietZone` of at least 4 modules for QR Code, at least 1-2 modules for Data Matrix, and at least the standard minimum for the chosen 1D barcode (typically 10 times the `narrowBarWidth`), or reserve the margin with surrounding page space.
- **Printing:** Use a module size that your printer resolution can reproduce clearly. Avoid scaling the page when printing.
- **Scanning:** Verify generated barcodes with the target scanner, especially when using a logo, custom colors, small `xDimension` or `narrowBarWidth` values, low error correction levels, or a hidden human-readable text.
- **Vector output:** Barcodes are drawn as vector graphics and remain sharp at any zoom level.
- **Text display:** When `textLocation` is not `None`, a `font` is required and the human-readable text is drawn below or above the bars according to `textLocation` and `textAlignment`.
