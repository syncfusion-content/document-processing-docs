---
title: Redaction in JavaScript PDF Library |Syncfusion
description: This section explains how to redact content from an existing PDF document by using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---

# Redaction in JavaScript PDF Library

Redacting a PDF is the process of permanently removing sensitive or confidential information from a PDF document. The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports permanent redaction of PDF documents, including text, images, and metadata, by defining redaction regions and applying an irreversible overlay on top of the original content.

N> For redaction features, you need to install the `@syncfusion/ej2-pdf-data-extract` package as an add-on.

## Remove sensitive content from the PDF document

The [`PdfRedactor`](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfredactor) and [`PdfRedactionRegion`](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfredactionregion) classes let you mark specific areas on a page and then apply irreversible redaction to the document.

### Load the source PDF

The `data` argument passed to `PdfDocument` is a `Uint8Array` that contains the bytes of the source PDF. The following snippet shows the most common ways to obtain it.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
// From a file selected with <input type="file">
const fileInput = document.getElementById('pdfFile') as HTMLInputElement;
const data: Uint8Array = new Uint8Array(await fileInput.files![0].arrayBuffer());

// From a remote URL
// const response = await fetch('https://example.com/sample.pdf');
// const data: Uint8Array = new Uint8Array(await response.arrayBuffer());
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// From a file selected with <input type="file">
var fileInput = document.getElementById('pdfFile');
var data = new Uint8Array(await fileInput.files[0].arrayBuffer());

// From a remote URL
// var response = await fetch('https://example.com/sample.pdf');
// var data = new Uint8Array(await response.arrayBuffer());
{% endhighlight %}
{% endtabs %}

### Apply the redaction

The following example loads an existing PDF, adds a single redaction region, applies the redaction, and saves the result.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfRedactor, PdfRedactionRegion, ApplicationPlatform } from '@syncfusion/ej2-pdf-data-extract';

// Load the source PDF
let document: PdfDocument = new PdfDocument(data);
// Create the redactor
let redactor: PdfRedactor = new PdfRedactor(document);
// Define the redaction region
let redactions: PdfRedactionRegion[] = [];
redactions.push(new PdfRedactionRegion(0, { x: 10, y: 10, width: 100, height: 50 }));
// Add the regions to the redactor
redactor.add(redactions);
// Provide a canvas that the redactor can use while rasterizing page content
const canvasRenderCallback = (): { canvas: any, applicationPlatform: ApplicationPlatform } => {
    const canvas = document.createElement('canvas');
    return { canvas: canvas, applicationPlatform: ApplicationPlatform.typescript };
};
// Apply the redactions
await redactor.redact(canvasRenderCallback);
// Save and dispose
document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load the source PDF
var document = new ej.pdf.PdfDocument(data);
// Create the redactor
var redactor = new ej.pdfdataextract.PdfRedactor(document);
// Define the redaction region
var redactions = [];
redactions.push(new ej.pdfdataextract.PdfRedactionRegion(0, { x: 10, y: 10, width: 100, height: 50 }));
// Add the regions to the redactor
redactor.add(redactions);
// Provide a canvas that the redactor can use while rasterizing page content
var canvasRenderCallback = function () {
    var canvas = document.createElement('canvas');
    return { canvas: canvas, applicationPlatform: ej.pdfdataextract.ApplicationPlatform.typescript };
};
// Apply the redactions
await redactor.redact(canvasRenderCallback);
// Save and dispose
document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

### `PdfRedactionRegion` constructor parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pageIndex` | `number` | Zero-based index of the page that contains the redaction region. |
| `rectangle` | `{ x: number, y: number, width: number, height: number }` | Rectangle, in PDF page coordinates (points), that bounds the area to redact. |
| `appearanceEnabled` *(optional)* | `boolean` | When `true`, enables a custom appearance that you can draw on the region. Defaults to `false`. |

### `PdfRedactor.add` overloads

| Overload | Description |
|----------|-------------|
| `add(regions: PdfRedactionRegion[])` | Adds the supplied list of redaction regions to the redactor. |
| `add(region: PdfRedactionRegion)` | Adds a single redaction region to the redactor. |

### Methods: `redact()` vs `redactSync()`

The redactor exposes two methods that apply the previously added regions:

| Method | Image redaction | Execution | Return type |
|--------|-----------------|-----------|-------------|
| [`redact(callback)`](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfredactor#redact) | Yes | Asynchronous | `Promise<void>` |
| [`redactSync()`](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfredactor#redactsync) | No | Synchronous | `void` |

Use `redact(callback)` when you need to redact images along with other PDF content. Use `redactSync()` when you only need to redact text and other non-image elements, and you do not want the asynchronous overhead.

The following example uses `redactSync()`:

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfRedactor, PdfRedactionRegion } from '@syncfusion/ej2-pdf-data-extract';

// Load the source PDF
let document: PdfDocument = new PdfDocument(data);
// Create the redactor
let redactor: PdfRedactor = new PdfRedactor(document);
// Define the redaction region
let redactions: PdfRedactionRegion[] = [];
redactions.push(new PdfRedactionRegion(0, { x: 10, y: 10, width: 100, height: 50 }));
// Add the regions to the redactor
redactor.add(redactions);
// Apply the redactions synchronously (text only)
redactor.redactSync();
// Save and dispose
document.save('output.pdf');
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load the source PDF
var document = new ej.pdf.PdfDocument(data);
// Create the redactor
var redactor = new ej.pdfdataextract.PdfRedactor(document);
// Define the redaction region
var redactions = [];
redactions.push(new ej.pdfdataextract.PdfRedactionRegion(0, { x: 10, y: 10, width: 100, height: 50 }));
// Add the regions to the redactor
redactor.add(redactions);
// Apply the redactions synchronously (text only)
redactor.redactSync();
// Save and dispose
document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

### Save and download the redacted PDF

`document.save(path)` writes the redacted PDF to the location determined by the runtime. In the browser, the file is typically downloaded to the user's default download folder. In Node.js, it is written to the supplied path. You can also receive the bytes and trigger a manual download.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
// Save to disk (Node.js) or download (browser)
document.save('output.pdf');

// Alternative: receive the bytes and trigger a manual download
// const bytes: Uint8Array = document.save();
// const blob = new Blob([bytes], { type: 'application/pdf' });
// const url = URL.createObjectURL(blob);
// const a = document.createElement('a');
// a.href = url;
// a.download = 'output.pdf';
// a.click();
// URL.revokeObjectURL(url);

// Always release native resources
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Save to disk (Node.js) or download (browser)
document.save('output.pdf');

// Alternative: receive the bytes and trigger a manual download
// var bytes = document.save();
// var blob = new Blob([bytes], { type: 'application/pdf' });
// var url = URL.createObjectURL(blob);
// var a = document.createElement('a');
// a.href = url;
// a.download = 'output.pdf';
// a.click();
// URL.revokeObjectURL(url);

// Always release native resources
document.destroy();
{% endhighlight %}
{% endtabs %}

## Set a fill color for the redacted region

You can apply a solid fill color to cover the redacted content. This is the most common approach for redaction.

The `fillColor` property accepts a color object in any of the following formats:

- `{ r: number, g: number, b: number }` — RGB with each channel in the range `0`–`255`.
- `{ r: number, g: number, b: number, a: number }` — RGB with an alpha channel in the range `0`–`255`.
- `{ hex: string }` — Hex color string, for example `'#FF0000'` or `'#F00'`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfRedactor, PdfRedactionRegion } from '@syncfusion/ej2-pdf-data-extract';

// Load the source PDF
let document: PdfDocument = new PdfDocument(data);
// Create the redactor
let redactor: PdfRedactor = new PdfRedactor(document);
// Create a redaction region and set its fill color
let redactions: PdfRedactionRegion[] = [];
let redaction: PdfRedactionRegion = new PdfRedactionRegion(0, { x: 40, y: 41, width: 80, height: 90 });
redaction.fillColor = { r: 255, g: 0, b: 0 };
redactions.push(redaction);
// Add the regions to the redactor
redactor.add(redactions);
// Apply the redactions
redactor.redactSync();
// Save and dispose
document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load the source PDF
var document = new ej.pdf.PdfDocument(data);
// Create the redactor
var redactor = new ej.pdfdataextract.PdfRedactor(document);
// Create a redaction region and set its fill color
var redactions = [];
var redaction = new ej.pdfdataextract.PdfRedactionRegion(0, { x: 40, y: 41, width: 80, height: 90 });
redaction.fillColor = { r: 255, g: 0, b: 0 };
redactions.push(redaction);
// Add the regions to the redactor
redactor.add(redactions);
// Apply the redactions
redactor.redactSync();
// Save and dispose
document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

N> The only difference from the previous example is the `fillColor` property. The load, add, and save steps are identical.

## Draw text over the redacted region

Draw text or graphics over the redacted region to customize its appearance. Use the third constructor argument of `PdfRedactionRegion` to enable the appearance overlay, then draw on `redaction.appearance.normal.graphics`.

The following APIs are used in this example:

- **`document.embedFont(family, size, style)`** — Embeds a standard PDF font in the document and returns a `PdfFont` instance.
- **`PdfFontFamily`** — Enum of standard font families such as `helvetica`, `timesRoman`, and `courier`.
- **`PdfFontStyle`** — Enum of font styles such as `regular`, `bold`, `italic`, and `boldItalic`.
- **`PdfBrush`** — Defines the color used to draw text or fill shapes.
- **`appearance.normal.graphics.drawString(text, font, bounds, brush)`** — Draws the supplied text on the redaction overlay.

The example adds two regions on page 0. The first region uses a custom appearance that displays the label "Redacted Text". The second region is added without a custom appearance so the default fill is used. Combining both demonstrates that styled and unstyled regions can coexist in a single redactor pass.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';
import { PdfRedactor, PdfRedactionRegion, ApplicationPlatform } from '@syncfusion/ej2-pdf-data-extract';

// Load the source PDF
let document: PdfDocument = new PdfDocument(data);
// Create the first redaction region with a custom appearance
let redactions: PdfRedactionRegion[] = [];
let styledRegion: PdfRedactionRegion = new PdfRedactionRegion(0, { x: 0, y: 0, width: 80, height: 20 }, true);
let font = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
styledRegion.appearance.normal.graphics.drawString(
    'Redacted Text',
    font,
    { x: 0, y: 0, width: 80, height: 20 },
    new PdfBrush({ r: 255, g: 0, b: 0 })
);
redactions.push(styledRegion);
// Create a second redaction region without a custom appearance
let plainRegion: PdfRedactionRegion = new PdfRedactionRegion(0, { x: 40, y: 43, width: 80, height: 20 });
redactions.push(plainRegion);
// Add the regions to the redactor
let redactor: PdfRedactor = new PdfRedactor(document);
redactor.add(redactions);
// Provide a canvas that the redactor can use while rasterizing page content
const canvasRenderCallback = (): { canvas: any, applicationPlatform: ApplicationPlatform } => {
    const canvas = document.createElement('canvas');
    return { canvas: canvas, applicationPlatform: ApplicationPlatform.typescript };
};
// Apply the redactions
await redactor.redact(canvasRenderCallback);
// Save and dispose
document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the source PDF
var document = new ej.pdf.PdfDocument(data);
// Create the first redaction region with a custom appearance
var redactions = [];
var styledRegion = new ej.pdfdataextract.PdfRedactionRegion(0, { x: 0, y: 0, width: 80, height: 20 }, true);
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
styledRegion.appearance.normal.graphics.drawString(
    'Redacted Text',
    font,
    { x: 0, y: 0, width: 80, height: 20 },
    new ej.pdf.PdfBrush({ r: 255, g: 0, b: 0 })
);
redactions.push(styledRegion);
// Create a second redaction region without a custom appearance
var plainRegion = new ej.pdfdataextract.PdfRedactionRegion(0, { x: 40, y: 43, width: 80, height: 20 });
redactions.push(plainRegion);
// Add the regions to the redactor
var redactor = new ej.pdf.PdfRedactor(document);
redactor.add(redactions);
// Provide a canvas that the redactor can use while rasterizing page content
var canvasRenderCallback = function () {
    var canvas = document.createElement('canvas');
    return { canvas: canvas, applicationPlatform: ej.pdfdataextract.ApplicationPlatform.typescript };
};
// Apply the redactions
await redactor.redact(canvasRenderCallback);
// Save and dispose
document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

### `ApplicationPlatform` enum

The `ApplicationPlatform` parameter on the canvas callback tells the redactor which runtime is hosting the call. The supported values include:

| Value | Description |
|-------|-------------|
| `JavaScript` | Generic browser JavaScript. |
| `TypeScript` / `typescript` | TypeScript that compiles to browser JavaScript. |
| `Node` | Server-side Node.js with a Canvas backend. |

N> Verify the exact enum members against the live [`PdfRedactor` API reference](https://ej2.syncfusion.com/documentation/api/pdf-data-extract/pdfredactor) before publishing.

## Error handling

`redact()` returns a `Promise<void>`. The promise is rejected when the supplied `data` is not a valid PDF, when a `pageIndex` is out of range, when the `applicationPlatform` value is not recognized, or when the runtime cannot create a Canvas. Wrap the call in `try/catch` to surface these failures to your UI or logs.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
try {
    await redactor.redact(canvasRenderCallback);
} catch (error) {
    console.error('Redaction failed:', error);
}
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
try {
    await redactor.redact(canvasRenderCallback);
} catch (error) {
    console.error('Redaction failed:', error);
}
{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)