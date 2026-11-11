# PDF Barcodes

The Syncfusion JavaScript PDF Library lets you draw bidimensional (2D) barcodes as vector graphics directly on PDF pages.

## Table of Contents

- [Overview](#overview)
- [Supported Barcode Types](#supported-barcode-types)
- [Adding a 2D Barcode](#adding-a-2d-barcode)
  - [QR Code](#qr-code)
  - [Data Matrix](#data-matrix)
  - [PDF417](#pdf417)
- [Customizing Barcode Appearance](#customizing-barcode-appearance)
- [QR Code with Logo](#qr-code-with-logo)
- [Error Correction Levels](#error-correction-levels)
- [Notes for Barcode Drawing](#notes-for-barcode-drawing)
- [Related References](#related-references)

---

## Overview

Bidimensional (2D) barcodes encode data in a matrix or stacked pattern. All 2D barcode classes derive from `PdfBidimensionalBarcode` and share the `draw()` method, which accepts a `PdfPage` or `PdfGraphics` target together with the bounds of the barcode, and returns the bounds actually occupied by the barcode (`PdfRect`).

Barcodes are drawn as vector graphics and remain sharp at any zoom level.

---

## Supported Barcode Types

| Symbol | Class | Category | Supported Characters | Capacity / Length |
|---|---|---|---|---|
| QR Code | `PdfQRBarcode` | 2D (matrix) | Numeric (`0-9`), alphanumeric (`0-9`, `A-Z`, space, `$ % * + - . / :`), and byte data (UTF-8 or ISO-8859-1). `Mixed` mode (default) selects segments automatically. | Up to version 40 at selected error correction level (at most 7,089 digits, 4,296 alphanumeric characters, or 2,953 bytes). |
| Data Matrix | `PdfDataMatrixBarcode` | 2D (matrix) | ASCII (including digit-pair compaction) or arbitrary bytes (Base256). | Up to the largest symbol size (144 x 144); Base256 payloads up to 1,555 bytes. |
| PDF417 | `Pdf417Barcode` | 2D (stacked) | Any text encoded as UTF-8. | Up to 1,800 UTF-8 bytes. |

> **Note:** Empty text is not supported. An invalid configuration, a payload that does not fit the selected symbol, or characters not supported by a forced input mode throws an error when `draw()` is called.

---

## Adding a 2D Barcode

### QR Code

Draw a QR Code on a page using `PdfQRBarcode`:

```typescript
import { PdfDocument, PdfPage, PdfQRBarcode, PdfQRErrorCorrectionLevel } from '@syncfusion/ej2-pdf';

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

// Save and dispose
document.save('output.pdf');
document.destroy();
```

### Data Matrix

Draw a Data Matrix barcode using `PdfDataMatrixBarcode`:

```typescript
import {
  PdfDocument,
  PdfPage,
  PdfDataMatrixBarcode,
  PdfDataMatrixEncoding,
  PdfDataMatrixSize
} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

// Create a Data Matrix barcode
let barcode: PdfDataMatrixBarcode = new PdfDataMatrixBarcode('ITEM-2026-0001', {
  encoding: PdfDataMatrixEncoding.Auto,
  symbolSize: PdfDataMatrixSize.Auto
});

// Draw the barcode on the page
barcode.draw(page, { x: 50, y: 50, width: 120, height: 120 });

document.save('output.pdf');
document.destroy();
```

### PDF417

Draw a PDF417 stacked barcode using `Pdf417Barcode`:

```typescript
import {
  PdfDocument,
  PdfPage,
  Pdf417Barcode,
  Pdf417ErrorCorrectionLevel
} from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

let barcode: Pdf417Barcode = new Pdf417Barcode('Syncfusion PDF417 Payload', {
  errorCorrectionLevel: Pdf417ErrorCorrectionLevel.Auto
});

barcode.draw(page, { x: 50, y: 50, width: 250, height: 100 });

document.save('output.pdf');
document.destroy();
```

---

## Customizing Barcode Appearance

All 2D barcodes expose the following appearance properties, which can be passed in constructor options or set on the instance before calling `draw()`:

| Property | Description | Default | Valid Details |
|---|---|---|---|
| `xDimension` | Width of one barcode module, in points. | `1` | Must be a finite number greater than 0. |
| `foreColor` | Color of the dark modules. | Black (`{ r: 0, g: 0, b: 0 }`) | Pass an RGB object `{ r, g, b }` (values 0-255). |
| `backColor` | Color of the light modules and quiet zone. | White (`{ r: 255, g: 255, b: 255 }`) | Pass an RGB object `{ r, g, b }` (values 0-255). |
| `quietZone` | Margin around the symbol, measured in modules. | `{ all: 0 }` | Use `{ all: n }` or individual `{ left, right, top, bottom }`. Values must be non-negative. |

### Natural Size vs Explicit Bounds

- When `width` and `height` passed to `draw()` are **greater than 0**, the symbol is scaled uniformly to fit within the bounds while keeping its aspect ratio and remaining centered (for QR Code and Data Matrix).
- When `width` or `height` is **0**, the barcode is drawn at its **natural size**, calculated from `xDimension`.
- The `draw()` method returns the actual rectangle occupied by the barcode, which can be used to position adjacent text or elements.

```typescript
import { PdfDocument, PdfPage, PdfQRBarcode } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

let barcode: PdfQRBarcode = new PdfQRBarcode('https://www.syncfusion.com');
// Set module width
barcode.xDimension = 2;
// Custom colors
barcode.foreColor = { r: 0, g: 51, b: 102 };
barcode.backColor = { r: 255, g: 255, b: 255 };
// Quiet zone of 4 modules on all sides
barcode.quietZone = { all: 4 };

// Draw at natural size
let occupied = barcode.draw(page, { x: 50, y: 50, width: 0, height: 0 });

document.save('output.pdf');
document.destroy();
```

---

## QR Code with Logo

A QR Code can display an image (logo) centered within the symbol using the `logo` property (`PdfQRBarcodeLogo`).

| Logo Property | Description | Default | Valid Details |
|---|---|---|---|
| `data` | The logo image as `PdfBitmap` or `Uint8Array`. | *Required* | Raw PNG or JPEG image bytes, or an instantiated `PdfBitmap`. |
| `size` | Maximum logo size `{ width, height }` in PDF user units (points). | *Required* | Must fit inside the center area without exceeding the symbol's error correction capacity. |
| `padding` | Padding around the logo in points. | `0` | Must be a non-negative number. |
| `preserveAspectRatio` | Preserves the aspect ratio of the source image. | `true` | Boolean. |
| `strictValidation` | Throws an error when the logo covers too much of the symbol or overlaps protected patterns. | `true` | Boolean. |

```typescript
import { PdfDocument, PdfPage, PdfQRBarcode, PdfQRErrorCorrectionLevel } from '@syncfusion/ej2-pdf';

let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();

let barcode: PdfQRBarcode = new PdfQRBarcode('https://www.syncfusion.com', {
  errorCorrectionLevel: PdfQRErrorCorrectionLevel.High,
  logo: {
    data: logoBytes, // Uint8Array or PdfBitmap
    size: { width: 30, height: 30 },
    padding: 2,
    preserveAspectRatio: true,
    strictValidation: true
  }
});

barcode.draw(page, { x: 50, y: 50, width: 180, height: 180 });

document.save('output.pdf');
document.destroy();
```

> **Note:** Always use `PdfQRErrorCorrectionLevel.High` when adding a logo, and keep the logo small. A logo that covers too much of the symbol or overlaps its finder / timing patterns throws an error when `strictValidation` is `true`. An unsupported or corrupt logo image also throws an error.

---

## Error Correction Levels

### QR Code (`PdfQRErrorCorrectionLevel`)

| Level | Enum Value | Recovery Capability | Recommended Use |
|---|---|---|---|
| Low | `PdfQRErrorCorrectionLevel.Low` | ~7% | Clean digital environments; produces smallest symbol. |
| Medium | `PdfQRErrorCorrectionLevel.Medium` | ~15% | General purpose (default). |
| Quartile | `PdfQRErrorCorrectionLevel.Quartile` | ~25% | Printed labels and documents that may experience wear. |
| High | `PdfQRErrorCorrectionLevel.High` | ~30% | Harsh environments, damaged surfaces, or any QR Code containing a **logo**. |

### PDF417 (`Pdf417ErrorCorrectionLevel`)

PDF417 uses `Pdf417ErrorCorrectionLevel`:
- `Auto` (recommended; automatically chosen based on data size)
- `Level0` through `Level8` (manual levels with increasing redundancy)

---

## Notes for Barcode Drawing

The following valid details and operational constraints apply when drawing barcodes in PDF documents:

1. **Sizing & Bounds:**
   - Barcode natural size is strictly determined by the encoded data length, the `xDimension` (module width in points), and the configured `quietZone`.
   - Passing explicit non-zero `width` and `height` to `draw()` scales the barcode uniformly to fit within those bounds.
   - If the explicit bounds are smaller than the required quiet zone or minimum readable symbol size, `draw()` throws an error.
   - Always inspect `draw()`'s return value (`PdfRect` bounds) to accurately position subsequent page content below or beside the barcode.

2. **Square vs Rectangular Geometry:**
   - QR Code and Data Matrix modules are inherently square (equal horizontal and vertical module size). When drawn into non-square bounds, the barcode is centered within the bounds.
   - PDF417 is a stacked symbology with rectangular aspect ratio and row-column structure.

3. **Color Contrast & Readability:**
   - Always maintain high contrast between `foreColor` and `backColor`. Use a dark foreground color on a light background.
   - Inverted colors (light modules on dark background) or low-contrast combinations may fail to scan on standard optical scanners.

4. **Quiet Zone Guidelines:**
   - Scanners require an unobstructed margin around the symbol to distinguish the barcode from surrounding content.
   - Use a `quietZone` of at least **4 modules** for QR Code.
   - Use a `quietZone` of at least **1 to 2 modules** for Data Matrix.
   - If `quietZone` is left at `{ all: 0 }`, you must ensure equivalent empty space exists around the drawn position on the page.

5. **Printing Considerations:**
   - Choose an `xDimension` that maps cleanly to the target printer's resolution (dpi). For example, at 300 dpi, 1 point = ~4.17 printer dots; very small `xDimension` (< 1 point) may produce blurred edges on lower-resolution printers.
   - Ensure PDF viewers do not apply "Fit to Printable Area" or non-uniform scaling when printing, as this alters module aspect ratios.

6. **Scanning Verification:**
   - Always verify generated barcodes with real hardware/mobile scanners, especially when embedding a logo, using non-default colors, reducing `xDimension`, or selecting lower error correction levels.

7. **Vector Output:**
   - Barcodes are drawn as native PDF vector elements (paths/rectangles), ensuring infinite resolution and crisp rendering at any zoom level without pixelation artifacts.

---

## Related References

- [Shapes](./shapes.md) - Vector shapes and graphics operations
- [Images](./images.md) - Loading image bytes and `PdfBitmap` for barcode logos
- [Form Fields](./form-fields.md) - Interactive calculation-driven `PdfBarcodeField`
- [Document Settings](./document-settings.md) - Document creation and saving
