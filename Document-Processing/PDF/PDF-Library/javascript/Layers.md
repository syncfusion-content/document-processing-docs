---
title: Layers in JavaScript PDF Library | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Learn to add, annotate, nest, remove, and lock or unlock PDF layers with JavaScript PDF Library to organize content and improve document structure
platform: document-processing
control: PDF
documentation: UG
---

# Layers in JavaScript PDF Library

Layers, also known as Option Content, refer to sections of content in a PDF document that can be selectively viewed or hidden by document authors or consumers.

[JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) provides support to create, add, annotate, nest, remove, and lock or unlock layers in a PDF document.

## Adding layers in a PDF document

This example demonstrates how to add layers to a PDF document using the [PdfLayer](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer). Layers allow you to organize content into separate, optional sections that can be shown or hidden by the user.

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

This example demonstrates how to add an annotation to a specific layer in a PDF document using the [PdfLayer](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer) class. Associating annotations with layers allows you to control their visibility dynamically.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfAnnotation } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Access the collection of layers in the document
let layers: PdfLayerCollection = document.layers;
// Add a new layer to the document with the name 'Layer1'
let layer: PdfLayer = layers.add('Layer1');
// Access the first annotation on the page
let annotation: PdfAnnotation = page.annotations.at(0);
// Assign the layer to the annotation
annotation.layer = layer;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Access the collection of layers in the document
var layers = document.layers;
// Add a new layer to the document with the name 'Layer1'
var layer = layers.add('Layer1');
// Access the first annotation on the page
var annotation = page.annotations.at(0);
// Assign the layer to the annotation
annotation.layer = layer;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Nested layers

This example demonstrates how to create nested layers in a PDF document using the [PdfLayer](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer) class. Nested layers enable hierarchical organization of content for better control and user experience.

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

This example demonstrates how to remove layers from an existing PDF document using the [PdfLayerCollection](https://ej2.syncfusion.com/documentation/api/pdf/pdflayercollection) class. Removing unnecessary layers helps simplify the document structure.

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

This example demonstrates how to lock and unlock layers in a PDF document using the [PdfLayer](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer) class. Locking a layer prevents you from toggling its visibility in supported PDF viewers (for example, Adobe Reader shows a lock icon next to the layer in the Layers panel). Use this to ensure that critical content remains visible.

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
// Lock the layer
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
// Lock the layer
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

> **Note:** To allow consumers to toggle the layer's visibility, set `layer.locked = false`.

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)