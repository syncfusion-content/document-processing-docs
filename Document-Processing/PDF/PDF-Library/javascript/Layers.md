---
title: Layers in JavaScript PDF Library | Syncfusion
description: This section explains how to add, annotate, nest, remove, and lock or unlock layers in a PDF document using the JavaScript PDF Library to organize content and enhance document structure.
platform: document-processing
control: PDF
documentation: UG
---

# Layers in JavaScript PDF Library

Layers, also known as Option Content, refer to sections of content in a PDF document that can be selectively viewed or hidden by document authors or consumers.

[JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) provides support to create, add, annotate, nest, remove, and lock or unlock layers in a PDF document.

## Adding layers in a PDF document

This example demonstrates how to add layers to a PDF document using the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument), [PdfPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage), [PdfLayer](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer), [PdfLayerCollection](https://ej2.syncfusion.com/documentation/api/pdf/pdflayercollection), [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics), and [PdfPen](https://ej2.syncfusion.com/documentation/api/pdf/pdfpen) classes. Layers allow you to organize content into separate, optional sections that can be shown or hidden by the user.

### Parameter reference

- **`PdfPage`** — Represents a single page in the document; obtained from `document.addPage()`.
- **`PdfGraphics`** — Drawing surface bound to a page (or layer). All drawing operations are issued through this object.
- **`PdfPen({ r, g, b }, thickness)`** — A drawing pen defined by an RGB color object and a numeric thickness in points.
- **`translateTransform({ x, y })`** — Moves the graphics origin to the specified coordinates before drawing.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a blank page
let page: PdfPage = document.addPage();
// Access the collection of layers in the document
let layers: PdfLayerCollection = document.layers;
// Add a new layer named 'Layer1'
let layer: PdfLayer = layers.add('Layer1');
// Create a graphics surface bound to the new layer on the specified page
let graphics: PdfGraphics = layer.createGraphics(page);
// Move the drawing origin to (100, 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line from (200, 10) to (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a blank page
var page = document.addPage();
// Access the collection of layers in the document
var layers = document.layers;
// Add a new layer named 'Layer1'
var layer = layers.add('Layer1');
// Create a graphics surface bound to the new layer on the specified page
var graphics = layer.createGraphics(page);
// Move the drawing origin to (100, 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line from (200, 10) to (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding annotation to layer

This example demonstrates how to add an annotation to a specific layer in a PDF document using the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument), [PdfPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage), [PdfLayer](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer), [PdfLayerCollection](https://ej2.syncfusion.com/documentation/api/pdf/pdflayercollection), and [PdfAnnotation](https://ej2.syncfusion.com/documentation/api/pdf/pdfannotation) classes. Associating annotations with layers allows you to control their visibility dynamically.

> **Ordering note:** The annotation must already exist on the page (`page.annotations`) before you can assign a layer to it. The example below creates a text-web-link annotation, adds it to the page, and then assigns the layer.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfAnnotation, PdfTextWebLinkAnnotation } from '@syncfusion/ej2-pdf';

// Load an existing PDF document from an ArrayBuffer (e.g., fetched from a server or read from a file input)
const data: ArrayBuffer = await fetch('existing.pdf').then((r) => r.arrayBuffer());
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the collection of layers in the document
let layers: PdfLayerCollection = document.layers;
// Add a new layer to the document with the name 'Layer1'
let layer: PdfLayer = layers.add('Layer1');
// Create a sample text-web-link annotation and add it to the page
let annotation: PdfAnnotation = new PdfTextWebLinkAnnotation({ text: 'Syncfusion', url: 'https://www.syncfusion.com' });
page.annotations.add(annotation);
// Assign the layer to the annotation
annotation.layer = layer;
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document from an ArrayBuffer (e.g., fetched from a server or read from a file input)
fetch('existing.pdf').then(function (r) { return r.arrayBuffer(); }).then(function (data) {
    // Create the document from the loaded bytes
    var document = new ej.pdf.PdfDocument(data);
    // Access the first page
    var page = document.getPage(0);
    // Access the collection of layers in the document
    var layers = document.layers;
    // Add a new layer to the document with the name 'Layer1'
    var layer = layers.add('Layer1');
    // Create a sample text-web-link annotation and add it to the page
    var annotation = new ej.pdf.PdfTextWebLinkAnnotation({ text: 'Syncfusion', url: 'https://www.syncfusion.com' });
    page.annotations.add(annotation);
    // Assign the layer to the annotation
    annotation.layer = layer;
    // Save the document
    document.save('Output.pdf');
    // Release native resources
    document.destroy();
});
{% endhighlight %}
{% endtabs %}

## Nested layers

This example demonstrates how to create nested layers in a PDF document using the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument), [PdfPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage), [PdfLayer](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer), [PdfLayerCollection](https://ej2.syncfusion.com/documentation/api/pdf/pdflayercollection), [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics), and [PdfPen](https://ej2.syncfusion.com/documentation/api/pdf/pdfpen) classes. Nested layers enable hierarchical organization of content for better control and user experience.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfLayer, PdfLayerCollection, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a blank page
let page: PdfPage = document.addPage();
// Access the collection of layers
let layers: PdfLayerCollection = document.layers;
// Add a parent layer named 'Layer1'
let layer: PdfLayer = layers.add('Layer1');
// Create graphics for the parent layer
let graphics: PdfGraphics = layer.createGraphics(page);
// Add a child layer named 'ChildLayer2'
let childLayer2: PdfLayer = layer.layers.add('ChildLayer2');
// Create graphics for the child layer
graphics = childLayer2.createGraphics(page);
// Move the drawing origin to (100, 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line from (200, 10) to (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a blank page
var page = document.addPage();
// Access the collection of layers
var layers = document.layers;
// Add a parent layer named 'Layer1'
var layer = layers.add('Layer1');
// Create graphics for the parent layer
var graphics = layer.createGraphics(page);
// Add a child layer named 'ChildLayer2'
var childLayer2 = layer.layers.add('ChildLayer2');
// Create graphics for the child layer
graphics = childLayer2.createGraphics(page);
// Move the drawing origin to (100, 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line from (200, 10) to (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();
{% endhighlight %}
{% endtabs %}

## Removing layers from an existing PDF document

This example demonstrates how to remove layers from an existing PDF document using the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument), [PdfLayer](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer), and [PdfLayerCollection](https://ej2.syncfusion.com/documentation/api/pdf/pdflayercollection) classes. Removing unnecessary layers helps simplify the document structure.

### Method reference

- **`remove(layer)`** — Removes the specified layer instance from the collection.
- **`removeAt(index)`** — Removes the layer at the specified zero-based index from the collection.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfLayerCollection, PdfLayer } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the collection of layers
let layers: PdfLayerCollection = document.layers;
// Retrieve the first layer from the collection
let layer: PdfLayer = layers.at(0);
// Remove the layer by instance
layers.remove(layer);
// Remove the layer at the specified index
layers.removeAt(1);
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the collection of layers
var layers = document.layers;
// Retrieve the first layer from the collection
var layer = layers.at(0);
// Remove the layer by instance
layers.remove(layer);
// Remove the layer at the specified index
layers.removeAt(1);
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% endtabs %}

## Lock or unlock layers

This example demonstrates how to lock and unlock layers in a PDF document using the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument), [PdfPage](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage), [PdfLayer](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer), [PdfLayerCollection](https://ej2.syncfusion.com/documentation/api/pdf/pdflayercollection), [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics), and [PdfPen](https://ej2.syncfusion.com/documentation/api/pdf/pdfpen) classes. Locking a layer prevents consumers from toggling its visibility in supported PDF viewers (for example, Adobe Reader shows a lock icon next to the layer in the Layers panel). Use this to ensure that critical content remains visible.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a blank page
let page: PdfPage = document.addPage();
// Access the collection of layers
let layers: PdfLayerCollection = document.layers;
// Add a new layer named 'Layer1'
let layer: PdfLayer = layers.add('Layer1');
// Create a graphics surface bound to the layer on the specified page
let graphics: PdfGraphics = layer.createGraphics(page);
// Lock the layer so consumers cannot toggle its visibility
layer.locked = true;
// Move the drawing origin to (100, 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line from (200, 10) to (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a blank page
var page = document.addPage();
// Access the collection of layers
var layers = document.layers;
// Add a new layer named 'Layer1'
var layer = layers.add('Layer1');
// Create a graphics surface bound to the layer on the specified page
var graphics = layer.createGraphics(page);
// Lock the layer so consumers cannot toggle its visibility
layer.locked = true;
// Move the drawing origin to (100, 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line from (200, 10) to (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% endtabs %}

### Unlocking a layer

To allow consumers to toggle the layer's visibility, set `layer.locked = false`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
const data: ArrayBuffer = await fetch('existing.pdf').then((r) => r.arrayBuffer());
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the collection of layers
let layers: PdfLayerCollection = document.layers;
// Retrieve the first layer
let layer: PdfLayer = layers.at(0);
// Unlock the layer so consumers can toggle its visibility
layer.locked = false;
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
fetch('existing.pdf').then(function (r) { return r.arrayBuffer(); }).then(function (data) {
    // Create the document from the loaded bytes
    var document = new ej.pdf.PdfDocument(data);
    // Access the first page
    var page = document.getPage(0);
    // Access the collection of layers
    var layers = document.layers;
    // Retrieve the first layer
    var layer = layers.at(0);
    // Unlock the layer so consumers can toggle its visibility
    layer.locked = false;
    // Save the document
    document.save('Output.pdf');
    // Release native resources
    document.destroy();
});
{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)