---
title: Pages in JavaScript PDF library | Syncfusion
description: This section explains how to add, rearrange, remove pages, and detect empty pages in a PDF file by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Pages in JavaScript PDF library

The PDF provides support to add, remove and rearrange pages in PDF documents, enabling complete control over page management for creating dynamic and customized PDFs.

N> The PDF page is created using the default settings, which include A4 page size, portrait orientation, and 40 point page margins.

## Adding a new page to the document

The following code sample demonstrates how to add a `PdfPage` to a PDF document. When multiple pages are added, each new page is appended to the end of the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding margin to the PDF pages

The `PdfPageSettings` class is used to define properties such as margins, orientation, rotation, and page size. In this example, margins are set using the `PdfMargins` class to ensure consistent spacing around the page content. These settings can be applied when creating sections or pages in the PDF for precise layout control.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfGraphics, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Define page settings with margins
let settings: PdfPageSettings = new PdfPageSettings({margins: new PdfMargins(50)});
// Add a page
let page: PdfPage = document.addPage(settings);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Define page settings with margins
var settings = new ej.pdf.PdfPageSettings({margins: new ej.pdf.PdfMargins(50)});
// Add a page
var page = document.addPage(settings);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

N> The creation default margin is set to 40 points, ensuring uniform spacing between the content and the page edges. This margin allows sufficient space for better readability and helps prevent content from being truncated during printing or viewing.

## Adding sections with different page settings

This example demonstrates how to add sections with different page settings in a PDF document. It shows how to configure rotation, orientation, margins, and page size using `PdfPageSettings`. The `PdfSection` class is used to apply unique page customizations within a single PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfBrush, PdfStringFormat, PdfPageSettings, PdfPageOrientation, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Settings A4 Portrait with 40pt margins
const settingsA4Portrait: PdfPageSettings = new PdfPageSettings({
  margins: new PdfMargins(40),
  size: { width: 595, height: 842 }, // A4: 595x842 pt
  orientation: PdfPageOrientation.portrait
});
// Settings A5 Portrait with 30pt margins (different settings)
const settingsA5Portrait: PdfPageSettings = new PdfPageSettings({
  margins: new PdfMargins(30),
  size: { width: 420, height: 595 }, // A5: 420x595 pt
  orientation: PdfPageOrientation.portrait
});
// SECTION 1: First page draw rectangle (A4 portrait)
const section1: PdfSection = document.addSection(settingsA4Portrait);
const page1: PdfPage = section1.addPage();
const g1: PdfGraphics = page1.graphics;
const rectPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);      // black 1pt outline
g1.drawRectangle({ x: 60, y: 80, width: 200, height: 120 }, rectPen);
const page2: PdfPage = section1.addPage();
const g2: PdfGraphics = page2.graphics;
g2.drawRectangle({ x: 80, y: 100, width: 250, height: 150 }, rectPen);
//Prepare font once for text pages
const font: PdfStandardFont = document.embedFont(
  PdfFontFamily.helvetica,
  14,
  PdfFontStyle.regular
);
const textBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); // black text
// SECTION 2: Third page draw string (A5 portrait, 30pt margins)
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
// Close the dcument
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Settings A4 Portrait with 40pt margins
var settingsA4Portrait = new ej.pdf.PdfPageSettings({
    margins: new ej.pdf.PdfMargins(40),
    size: { width: 595, height: 842 },
    orientation: ej.pdf.PdfPageOrientation.portrait
});
// Settings A5 Portrait with 30pt margins
var settingsA5Portrait = new ej.pdf.PdfPageSettings({
    margins: new ej.pdf.PdfMargins(30),
    size: { width: 420, height: 595 },
    orientation: ej.pdf.PdfPageOrientation.portrait
});
// SECTION 1 First page (A4 portrait) draw rectangle
var section1 = document.addSection(settingsA4Portrait);
var page1 = section1.addPage();
var g1 = page1.graphics;
var rectPen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
g1.drawRectangle({ x: 60, y: 80, width: 200, height: 120 }, rectPen);
// SECTION 2 Second page (A4 portrait again) draw rectangle
var section2 = document.addSection(settingsA4Portrait);
var page2 = section2.addPage();
var g2 = page2.graphics;
g2.drawRectangle({ x: 80, y: 100, width: 250, height: 150 }, rectPen);
// Prepare font once for text pages
var font = document.embedFont(
    ej.pdf.PdfFontFamily.helvetica,
    14,
    ej.pdf.PdfFontStyle.regular
);
var textBrush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 });
// SECTION 3 Third page draw string (A5 portrait)
var section3 = document.addSection(settingsA5Portrait);
var page3 = section3.addPage();
var g3 = page3.graphics;
g3.drawString(
    "Hello from A5 Portrait with 30pt margins!",
    font,
    { x: 40, y: 70, width: 300, height: 50 },
    textBrush,
    new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.left)
);
// SECTION 4 Fourth page draw string (A5 portrait)
var section4 = document.addSection(settingsA5Portrait);
var page4 = section4.addPage();
var g4 = page4.graphics;
gg4.drawString(
    "Hello from A5 Portrait with 30pt margins!",
    font,
    { x: 60, y: 90, width: 400, height: 50 },
    textBrush,
    new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.left)
);
// Save PDF
document.save("Output.pdf");
// Close PDF document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Get number of pages from a PDF document

This example demonstrates how to retrieve the total number of pages in a PDF document using the `pageCount` property of the `PdfDocument` class. The page count returns an integer value representing the number of pages currently in the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Gets the page count
let count: number = document.pageCount;
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Gets the page count
var count = document.pageCount;
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Rearranging pages in an existing document

This example demonstrates how to rearrange the pages in an existing PDF document using the `reorderPages` method of the `PdfDocument` class. The method accepts an array of page indices that defines the new order of pages within the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Reorders the pages in the PDF document
document.reorderPages([3, 2, 1]);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Reorders the pages in the PDF document
document.reorderPages([3, 2, 1]);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing pages from a document

This example demonstrates how to remove a page from a PDF document using the `removePage` method of the `PdfDocument` class. The method takes the zero-based index of the page to be removed, effectively deleting that page from the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Removes the last page
let page: PdfPage = document.getPage(document.pageCount - 1);
document.removePage(page);
// Removes the first page by specifying index
document.removePage(0);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Removes the last page
var page = document.getPage(document.pageCount - 1);
document.removePage(page);
// Removes the first page by specifying index
document.removePage(0);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Add rotated PDF pages

This example demonstrates how to rotate a PDF page using the `rotation` property of the `PdfPageSettings` class. The property accepts a value from the `PdfRotationAngle` enumeration, such as angle180, to specify the rotation angle applied to the page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPageSettings, PdfPage, PdfStandardFont, PdfRotationAngle, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Define page settings with rotate
let settings: PdfPageSettings = new PdfPageSettings({rotation: PdfRotationAngle.angle180});
// Add page
let page: PdfPage = document.addPage(settings);
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
// Save the PDF document
let data = document.save('Output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Define page settings with rotate
var settings = new ej.pdf.PdfPageSettings({rotation: PdfRotationAngle.angle180});
// Add page
var page = document.addPage(settings);
// Get graphics from the page
var graphics = page.graphics;
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the PDF document
var data = document.save('Output.pdf');
// Close and dispose the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Rotating an existing PDF page

This example demonstrates how to rotate an existing PDF page using the `rotation` property of the `PdfPage` class. The property accepts a value from the `PdfRotationAngle` enumeration, such as angle180, to specify the rotation angle applied to the selected page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access first page
let page: PdfPage = document.getPage(0);
//Set the rotation for loaded page
page.rotation = PdfRotationAngle.angle180;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access first page
var page = document.getPage(0);
// Set the rotation for loaded page
page.rotation = ej.pdf.PdfRotationAngle.angle180;
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Insert a duplicate page at a specific index

Duplicates a page from a source PDF and inserts it into the destination document at the specified index using `PdfPageImportOptions.targetIndex`. This is useful for reusing or cloning content across documents or within the same document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPageImportOptions} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Options to customize the support of import PDF pages.
let options: PdfPageImportOptions = new PdfPageImportOptions();
// Sets the target page index to import
options.targetIndex = 1;
// Sets the rotation angle of the page to import
options.rotation = PdfRotationAngle.angle180;
// Sets the boolean value indicating whether to optimize resources while importing pages or not
options.optimizeResources = true;
// Copy the first page and add it as second page with page rotation
document.importPage(0, options);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
let document = new ej.pdf.PdfDocument(data);
// Options to customize the support of import PDF pages.
let options = new ej.pdf.PdfPageImportOptions();
// Sets the target page index to import
options.targetIndex = 1;
// Sets the rotation angle of the page to import
options.rotation = ej.pdf.PdfRotationAngle.angle180;
// Sets the boolean value indicating whether to optimize resources while importing pages or not
options.optimizeResources = true;
// Copy the first page and add it as second page with page rotation
document.importPage(0, options);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}