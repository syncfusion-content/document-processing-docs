---
title: Images in JavaScript PDF library | Syncfusion
description: This section explains how to add and replace images in a PDF document by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---

# Images in JavaScript PDF library

The JavaScript PDF supports JPEG and PNG images.

Images are supported through the `PdfImage` class, which is an abstract base class that provides the common functionality for `PdfBitmap` class.

## Adding image in PDF document

This example demonstrates how to add an image to a PDF document using the `PdfBitmap` class and the `draw` method of the `PdfImage` class. The image is loaded from a file and drawn at the specified coordinates on the page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfImage, PdfGraphics, PdfBitmap } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image(base64 / uint8array)
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
// Load the image (base64 / uint8array)
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image
image.draw(graphics, { x: 10, y: 10 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Inserting an image in an existing document

This example demonstrates how to insert an image into an existing PDF document using the `PdfBitmap` class and the `draw` method of the `PdfImage` class. The image is loaded from a file and rendered at the specified position on the selected page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access first page
let page: PdfPage = document.getPage(0);
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image (base64 / uint8array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image.
image.draw(graphics, { x: 10, y: 10});
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
// Load the image (base64 / uint8array)
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image.
image.draw(graphics, {x: 10, y: 10});
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Clipping and graphics state

This example demonstrates how to apply clipping and manage graphics state in a PDF document using the `PdfGraphics` class. The `save` and `restore` methods preserve the current graphics state, while the `setClip` method defines a clipping region to restrict drawing operations, ensuring precise control over rendering.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap, PdfGraphicsState, PdfFillMode  } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image (base64 / uint8array)
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the current graphics state (to restore later)
let state: PdfGraphicsState = graphics.save();
graphics.setClip({ x: 0, y: 0, width: 50, height: 12}, PdfFillMode.alternate );
// Draw the image.
image.draw(graphics, { x: 10, y: 10});
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
// Load the image (base64 / uint8array)
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Save the current graphics state (to restore later)
var state = graphics.save();
graphics.setClip({x: 0, y: 0, width: 50, height: 12}, ej.pdf.PdfFillMode.alternate);
// Draw the image.
image.draw(graphics, {x: 10, y: 10});
// Restore the graphics state to remove the clipping region
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Applying transparency and rotation to the image

This example demonstrates how to apply transparency and rotation to an image in a PDF document using the `PdfGraphics` class. Transparency can be controlled through the graphics state, while rotation is applied by transforming the graphics context before drawing the image, enabling advanced visual effects in the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfImage, PdfBitmap, PdfGraphicsState } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Load the image (base64 / uint8array)
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
// Load the image (base64 / uint8array)
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