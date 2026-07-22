---
title: Pages in JavaScript PDF Library | Syncfusion
description: This section explains how to add, rearrange, remove pages, and detect empty pages in a PDF file by using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---

# Pages in JavaScript/TypeScript PDF Library

Syncfusion's [JavaScript PDF Library](https://www.syncfusion.com/document-processing/pdf-framework/javascript) provides comprehensive support to add, remove, and rearrange pages in PDF documents, enabling complete control over page management for creating dynamic and customized PDFs.

## Overview

This guide covers the following page management operations:

- Add a new page to a document
- Apply page margins
- Add sections with different page settings (size, orientation, rotation, margins)
- Get the number of pages in a document
- Rearrange pages in an existing document
- Remove pages from a document
- Rotate pages (when creating a page and on an existing page)
- Insert a duplicate page at a specific index

## Adding a new page to the document

The following code sample demonstrates how to add a [PdfPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage) to a PDF document. When multiple pages are added, each new page is appended to the end of the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a new page; the `page` reference can be used for further customization (graphics, rotation, etc.)
let page: PdfPage = document.addPage();
// Save the document to disk
document.save('Output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a new page; the `page` reference can be used for further customization (graphics, rotation, etc.)
var page = document.addPage();
// Save the document to disk
document.save('Output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding margin to the PDF pages

The [PdfPageSettings](https://ej2.syncfusion.com/documentation/api/pdf/pdfpagesettings) class is used to define properties such as margins, orientation, rotation, and page size. In this example, margins are set using the [PdfMargins](https://ej2.syncfusion.com/documentation/api/pdf/pdfmargins) class to ensure consistent spacing around the page content. These settings can be applied when creating sections or pages in the PDF for precise layout control.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfPageSettings, PdfMargins } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Define page settings with 50pt margins on all sides
let settings: PdfPageSettings = new PdfPageSettings({ margins: new PdfMargins(50) });
// Add a page using the configured settings; the `page` reference can be used for further customization
let page: PdfPage = document.addPage(settings);
// Save the document to disk
document.save('Output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Define page settings with 50pt margins on all sides
var settings = new ej.pdf.PdfPageSettings({ margins: new ej.pdf.PdfMargins(50) });
// Add a page using the configured settings; the `page` reference can be used for further customization
var page = document.addPage(settings);
// Save the document to disk
document.save('Output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% endtabs %}

> [!NOTE]
> By default, each page is created with a 40-point margin, ensuring uniform spacing between the content and the page edges. This margin allows sufficient space for better readability and helps prevent content from being truncated during printing or viewing. All margin values are expressed in points (1 point = 1/72 inch).

## Adding sections with different page settings

This example demonstrates how to add sections with different page settings in a PDF document. It shows how to configure rotation, orientation, margins, and page size using [PdfPageSettings](https://ej2.syncfusion.com/documentation/api/pdf/pdfpagesettings). The [PdfSection](https://ej2.syncfusion.com/documentation/api/pdf/pdfsection) class is used to apply unique page customizations within a single PDF document.

> [!NOTE]
> Page sizes in [PdfPageSettings.size](https://ej2.syncfusion.com/documentation/api/pdf/pdfpagesettings) are expressed in **points** (1 point = 1/72 inch). The example below uses A4 (595 × 842 points) and A5 (420 × 595 points).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  PdfDocument,
  PdfPage,
  PdfSection,
  PdfGraphics,
  PdfBrush,
  PdfPen,
  PdfStringFormat,
  PdfPageSettings,
  PdfMargins,
  PdfPageOrientation,
  PdfStandardFont,
  PdfFontFamily,
  PdfFontStyle,
  PdfTextAlignment
} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Settings: A4 portrait with 40pt margins
const settingsA4Portrait: PdfPageSettings = new PdfPageSettings({
  margins: new PdfMargins(40),
  size: { width: 595, height: 842 }, // A4: 595 x 842 pt
  orientation: PdfPageOrientation.portrait
});
// Settings: A5 portrait with 30pt margins
const settingsA5Portrait: PdfPageSettings = new PdfPageSettings({
  margins: new PdfMargins(30),
  size: { width: 420, height: 595 }, // A5: 420 x 595 pt
  orientation: PdfPageOrientation.portrait
});
// Prepare the font and brushes once for both sections
const font: PdfStandardFont = document.embedFont(
  PdfFontFamily.helvetica,
  14,
  PdfFontStyle.regular
);
const textBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); // black text
const rectPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1); // black 1pt outline
// SECTION 1: A4 portrait — draw rectangles on both pages
const section1: PdfSection = document.addSection(settingsA4Portrait);
const page1: PdfPage = section1.addPage();
const g1: PdfGraphics = page1.graphics;
g1.drawRectangle({ x: 60, y: 80, width: 200, height: 120 }, rectPen);
const page2: PdfPage = section1.addPage();
const g2: PdfGraphics = page2.graphics;
g2.drawRectangle({ x: 80, y: 100, width: 250, height: 150 }, rectPen);
// SECTION 2: A5 portrait — draw text on both pages
const section2: PdfSection = document.addSection(settingsA5Portrait);
const page3: PdfPage = section2.addPage();
const g3: PdfGraphics = page3.graphics;
g3.drawString(
  'Hello from A5 Portrait with 30pt margins!',
  font,
  { x: 40, y: 70, width: 300, height: 50 },
  textBrush,
  new PdfStringFormat(PdfTextAlignment.left)
);
const page4: PdfPage = section2.addPage();
const g4: PdfGraphics = page4.graphics;
g4.drawString(
  'Hello from A5 Portrait with 30pt margins!',
  font,
  { x: 60, y: 90, width: 400, height: 50 },
  textBrush,
  new PdfStringFormat(PdfTextAlignment.left)
);
// Save the PDF
document.save('Output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Settings: A4 portrait with 40pt margins
var settingsA4Portrait = new ej.pdf.PdfPageSettings({
  margins: new ej.pdf.PdfMargins(40),
  size: { width: 595, height: 842 },
  orientation: ej.pdf.PdfPageOrientation.portrait
});
// Settings: A5 portrait with 30pt margins
var settingsA5Portrait = new ej.pdf.PdfPageSettings({
  margins: new ej.pdf.PdfMargins(30),
  size: { width: 420, height: 595 },
  orientation: ej.pdf.PdfPageOrientation.portrait
});
// Prepare the font and brushes once for both sections
var font = document.embedFont(
  ej.pdf.PdfFontFamily.helvetica,
  14,
  ej.pdf.PdfFontStyle.regular
);
var textBrush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 });
var rectPen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// SECTION 1: A4 portrait — draw rectangles on both pages
var section1 = document.addSection(settingsA4Portrait);
var page1 = section1.addPage();
var g1 = page1.graphics;
g1.drawRectangle({ x: 60, y: 80, width: 200, height: 120 }, rectPen);
var page2 = section1.addPage();
var g2 = page2.graphics;
g2.drawRectangle({ x: 80, y: 100, width: 250, height: 150 }, rectPen);
// SECTION 2: A5 portrait — draw text on both pages
var section2 = document.addSection(settingsA5Portrait);
var page3 = section2.addPage();
var g3 = page3.graphics;
g3.drawString(
  "Hello from A5 Portrait with 30pt margins!",
  font,
  { x: 40, y: 70, width: 300, height: 50 },
  textBrush,
  new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.left)
);
var page4 = section2.addPage();
var g4 = page4.graphics;
g4.drawString(
  "Hello from A5 Portrait with 30pt margins!",
  font,
  { x: 60, y: 90, width: 400, height: 50 },
  textBrush,
  new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.left)
);
// Save the PDF
document.save("Output.pdf");
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Get number of pages from a PDF document

This example demonstrates how to retrieve the total number of pages in a PDF document using the [pageCount](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#get-pagecount-number) property of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class. The page count returns an integer value representing the number of pages currently in the document.

> [!NOTE]
> The `data` argument passed to `PdfDocument` is the loaded PDF as a `Uint8Array` or `ArrayBuffer`. You can obtain it from a `fetch()` call (`await response.arrayBuffer()`), from an HTML file input through `FileReader`, or from any `Blob` source. This pattern is reused in the "Rearranging", "Removing", and "Insert duplicate page" sections below.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Example: load a PDF from a remote URL using fetch
const response: Response = await fetch('sample.pdf');
const data: ArrayBuffer = await response.arrayBuffer();
// Load the PDF document from the buffer
let document: PdfDocument = new PdfDocument(data);
// Get the page count
let count: number = document.pageCount;
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Example: load a PDF from a remote URL using fetch
fetch('sample.pdf')
  .then(function (response) { return response.arrayBuffer(); })
  .then(function (data) {
    // Load the PDF document from the buffer
    var document = new ej.pdf.PdfDocument(data);
    // Get the page count
    var count = document.pageCount;
    // Close and dispose the document
    document.destroy();
  });

{% endhighlight %}
{% endtabs %}

## Rearranging pages in an existing document

This example demonstrates how to rearrange the pages in an existing PDF document using the [reorderPages](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#reorderpages) method of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class. The method accepts an array of page indices that defines the new order of pages within the document.

> [!NOTE]
> - The indices in the array are **zero-based**. For a three-page document, the valid indices are `0`, `1`, and `2`.
> - The order of the array determines the new page order in the output document. For example, `[2, 0, 1]` makes the third page first, the first page second, and the second page third.
> - The array must contain exactly `pageCount` entries, each within the valid index range.
> - This method does not return a value.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Reorder the pages (zero-based indices: reverse the order of three pages)
document.reorderPages([2, 1, 0]);
// Save the document
document.save('output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Reorder the pages (zero-based indices: reverse the order of three pages)
document.reorderPages([2, 1, 0]);
// Save the document
document.save('output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing pages from a document

This example demonstrates how to remove a page from a PDF document using the [removePage](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#removepage) method of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class. The method can accept either the **zero-based index** of the page to be removed or a reference to a [PdfPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage) instance retrieved via [getPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#getpage). This method does not return a value.

> [!NOTE]
> The numeric index passed to `removePage(index)` is **zero-based**. The first page has index `0` and the last page has index `pageCount - 1`. Passing an out-of-range index will throw an error.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Remove the last page using a PdfPage reference (zero-based index)
let page: PdfPage = document.getPage(document.pageCount - 1);
document.removePage(page);
// Remove the first page by specifying its zero-based index
document.removePage(0);
// Save the document
document.save('output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Remove the last page using a PdfPage reference (zero-based index)
var page = document.getPage(document.pageCount - 1);
document.removePage(page);
// Remove the first page by specifying its zero-based index
document.removePage(0);
// Save the document
document.save('output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add rotated PDF pages

This section explains how to rotate a page **at creation time** by using the [rotation](https://ej2.syncfusion.com/documentation/api/pdf/pdfpagesettings#get-rotation-pdfrotationangle) property of [PdfPageSettings](https://ej2.syncfusion.com/documentation/api/pdf/pdfpagesettings). The property accepts a value from the [PdfRotationAngle](https://ej2.syncfusion.com/documentation/api/pdf/pdfrotationangle) enumeration, such as `angle180`, to specify the rotation angle applied to the page.

> [!NOTE]
> `save(filename)` writes the PDF to disk and does not return a meaningful value. To get the PDF as a byte array, call the parameterless `save()` overload.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  PdfDocument,
  PdfPageSettings,
  PdfPage,
  PdfGraphics,
  PdfStandardFont,
  PdfRotationAngle,
  PdfFontFamily,
  PdfFontStyle,
  PdfBrush
} from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Define page settings with 180-degree rotation
let settings: PdfPageSettings = new PdfPageSettings({ rotation: PdfRotationAngle.angle180 });
// Add a page using the rotated settings
let page: PdfPage = document.addPage(settings);
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
graphics.drawString(
  'Hello World',
  font,
  { x: 10, y: 20, width: 100, height: 200 },
  new PdfBrush({ r: 0, g: 0, b: 255 })
);
// Save the PDF document to disk
document.save('Output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Define page settings with 180-degree rotation
var settings = new ej.pdf.PdfPageSettings({ rotation: ej.pdf.PdfRotationAngle.angle180 });
// Add a page using the rotated settings
var page = document.addPage(settings);
// Get graphics from the page
var graphics = page.graphics;
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Draw text
graphics.drawString(
  'Hello World',
  font,
  { x: 10, y: 20, width: 100, height: 200 },
  new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 })
);
// Save the PDF document to disk
document.save('Output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Rotating an existing PDF page

This section explains how to rotate a page **that is already part of a PDF document** by using the [rotation](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage#get-rotation-pdfrotationangle) property of the [PdfPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage) class. The property accepts a value from the [PdfRotationAngle](https://ej2.syncfusion.com/documentation/api/pdf/pdfrotationangle) enumeration, such as `angle180`, to specify the rotation angle applied to the selected page. See the [PdfPage API reference](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage) for additional properties such as `size` and `margins`.

> [!NOTE]
> Setting `page.rotation` updates the rotation of the existing page. The change is persisted only after calling `document.save()`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfRotationAngle } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page (zero-based index)
let page: PdfPage = document.getPage(0);
// Set the rotation for the loaded page
page.rotation = PdfRotationAngle.angle180;
// Save the document
document.save('output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page (zero-based index)
var page = document.getPage(0);
// Set the rotation for the loaded page
page.rotation = ej.pdf.PdfRotationAngle.angle180;
// Save the document
document.save('output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Insert a duplicate page at a specific index

This example duplicates a page from a source PDF and inserts it into a destination document at the specified index using [PdfPageImportOptions](https://ej2.syncfusion.com/documentation/api/pdf/pdfpageimportoptions). This is useful for reusing or cloning content across documents or within the same document.

> [!NOTE]
> - `document.importPage(sourceIndex, options)` clones the page at `sourceIndex` (zero-based) from a source `PdfDocument` and inserts it at `options.targetIndex` (zero-based) in the destination document.
> - `options.targetIndex` — the position in the destination where the imported page is inserted (zero-based).
> - `options.rotation` — the rotation applied to the imported page. Accepts any [PdfRotationAngle](https://ej2.syncfusion.com/documentation/api/pdf/pdfrotationangle) value.
> - `options.optimizeResources` — when `true` (default), identical resources such as fonts and images are merged across pages during import to reduce the output file size. Set to `false` if you need each page's resources to remain fully independent.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPageImportOptions, PdfRotationAngle } from '@syncfusion/ej2-pdf';

// Load the source PDF document
let source: PdfDocument = new PdfDocument(sourceData);
// Load the destination PDF document
let document: PdfDocument = new PdfDocument(destinationData);
// Configure the page import options
let options: PdfPageImportOptions = new PdfPageImportOptions();
// Target index in the destination document where the imported page will be inserted
options.targetIndex = 1;
// Rotation applied to the imported page
options.rotation = PdfRotationAngle.angle180;
// Merge identical resources (fonts/images) across pages to reduce file size
options.optimizeResources = true;
// Copy the first page of the source (zero-based sourceIndex = 0) into the destination
document.importPage(0, options);
// Save the document
document.save('output.pdf');
// Close and dispose both documents
document.destroy();
source.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the source PDF document
var source = new ej.pdf.PdfDocument(sourceData);
// Load the destination PDF document
var document = new ej.pdf.PdfDocument(destinationData);
// Configure the page import options
var options = new ej.pdf.PdfPageImportOptions();
// Target index in the destination document where the imported page will be inserted
options.targetIndex = 1;
// Rotation applied to the imported page
options.rotation = ej.pdf.PdfRotationAngle.angle180;
// Merge identical resources (fonts/images) across pages to reduce file size
options.optimizeResources = true;
// Copy the first page of the source (zero-based sourceIndex = 0) into the destination
document.importPage(0, options);
// Save the document
document.save('output.pdf');
// Close and dispose both documents
document.destroy();
source.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)