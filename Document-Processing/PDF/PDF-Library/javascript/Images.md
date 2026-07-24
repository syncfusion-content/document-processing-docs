---
title: Images in JavaScript PDF Library | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Learn to add and insert JPEG and PNG images in PDF documents with JavaScript PDF Library, including drawing, clipping, transparency, and rotation
platform: document-processing
control: PDF
documentation: UG
---

# Images in JavaScript PDF Library

Syncfusion's [JavaScript PDF library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports adding **JPEG** and **PNG** images.

Images are supported through the [PdfImage](https://ej2.syncfusion.com/documentation/api/pdf/pdfimage) class, which is an abstract base class. The [PdfBitmap](https://ej2.syncfusion.com/documentation/api/pdf/pdfbitmap) class derives from `PdfImage` and is used to load and draw raster images in a PDF.

## Adding an Image to a PDF Document

The following example demonstrates how to add an image to a new PDF document using the [PdfBitmap](https://ej2.syncfusion.com/documentation/api/pdf/pdfbitmap) class and the [draw](https://ej2.syncfusion.com/documentation/api/pdf/pdfimage#draw) method of the [PdfImage](https://ej2.syncfusion.com/documentation/api/pdf/pdfimage) class. The image is loaded from a `Uint8Array` or file and drawn at the specified coordinates on the page.

The `draw` method also accepts optional `width` and `height` parameters to resize the image. If omitted, the image is drawn at its original size.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfImage, PdfGraphics, PdfBitmap } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image(base64 / Uint8Array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image.
image.draw(graphics, { x: 10, y: 10});
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get graphics from the page
var graphics = page.graphics;
// Load the image (base64 / Uint8Array)
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image
image.draw(graphics, { x: 10, y: 10 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Inserting an Image in an Existing Document

The following example demonstrates how to insert an image into an existing PDF document using the [PdfBitmap](https://ej2.syncfusion.com/documentation/api/pdf/pdfbitmap) class and the [draw](https://ej2.syncfusion.com/documentation/api/pdf/pdfimage#draw) method of the [PdfImage](https://ej2.syncfusion.com/documentation/api/pdf/pdfimage) class.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access first page
let page: PdfPage = document.getPage(0);
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image (base64 / Uint8Array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image.
image.draw(graphics, { x: 10, y: 10 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access first page
var page = document.getPage(0);
// Get graphics from the page
var graphics = page.graphics;
// Load the image (base64 / Uint8Array)
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image.
image.draw(graphics, { x: 10, y: 10 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Clipping and Graphics State

The following example demonstrates how to apply a clipping region and manage the graphics state in a PDF document using the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. The [save](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#save) and [restore](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#restore) methods preserve the current graphics state, while the [setClip](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#setclip) method defines a clipping region that restricts drawing operations to its area.

`PdfFillMode` determines how the clipping path is filled:

- `PdfFillMode.alternate` — Uses the even-odd rule. A point is inside the region if a ray from it crosses the path an odd number of times. Suitable for paths with self-intersections or holes.
- `PdfFillMode.winding` — Uses the non-zero winding rule. A point is inside the region if the winding number around it is non-zero. Suitable for nested and overlapping paths.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap, PdfGraphicsState, PdfFillMode } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image (base64 / Uint8Array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the current graphics state (to restore later)
let state: PdfGraphicsState = graphics.save();
// Define a clip region partially overlapping the image
graphics.setClip({ x: 10, y: 10, width: 200, height: 80 }, PdfFillMode.alternate);
// Draw the image.
image.draw(graphics, { x: 10, y: 10, width: 200, height: 100 });
// Restore the graphics state to remove the clipping region
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get graphics from the page
var graphics = page.graphics;
// Load the image (base64 / Uint8Array)
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the current graphics state (to restore later)
var state = graphics.save();
// Define a clip region partially overlapping the image
graphics.setClip({ x: 10, y: 10, width: 200, height: 80 }, ej.pdf.PdfFillMode.alternate);
// Draw the image.
image.draw(graphics, { x: 10, y: 10, width: 200, height: 100 });
// Restore the graphics state to remove the clipping region
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Applying Transparency and Rotation to the Image

The following example demonstrates how to apply transparency and rotation to an image in a PDF document using the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. Transparency is controlled through the graphics state, while rotation is applied by transforming the graphics context before drawing the image, enabling advanced visual effects.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap, PdfGraphicsState } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image (base64 / Uint8Array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the current graphics state (to restore later)
let state: PdfGraphicsState = graphics.save();
//Translate the coordinate system to the  required position
graphics.translateTransform({ x: 100, y: 100});
//Apply transparency
graphics.setTransparency(0.5);
//Rotate the coordinate system
graphics.rotateTransform(-45);
// Draw the image.
image.draw(graphics,{ x: 10, y: 20});
// Restore the graphics state to remove the clipping region
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get graphics from the page
var graphics = page.graphics;
// Load the image (base64 / Uint8Array)
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the current graphics state (to restore later)
var state = graphics.save();
// Translate the coordinate system to the required position
graphics.translateTransform({x: 100, y: 100});
// Apply transparency
graphics.setTransparency(0.5);
// Rotate the coordinate system
graphics.rotateTransform(-45);
// Draw the image.
image.draw(graphics, {x: 10, y: 20});
// Restore the graphics state to remove the clipping region
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)