---
title: Layers in JavaScript PDF library | Syncfusion
description: This section explains how to add a layer in a PDF document using the JavaScript PDF library to organize content and enhance document structure
platform: document-processing
control: PDF
documentation: UG
---

# Layers in JavaScript PDF library

Layers, also known as Option Content refers to sections of content in a PDF document that can be selectively viewed or hidden by document authors or consumers.

JavaScript PDF provides support to create, add and merge the layers into PDF document.

## Adding layers in a PDF document

This example demonstrates how to add layers to a PDF document using the `PdfLayer` class. Layers allow you to organize content into separate, optional sections that can be shown or hidden by the user.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Access the collection of layers in the PDF document
let layers: PdfLayerCollection = document.layers;
// Add a new layer named 'Layer1' to the PDF document
let layer: PdfLayer = layers.add('Layer1');
// Create a graphics object for the newly added layer on the specified page
let graphics: PdfGraphics = layer.createGraphics(page);
// Translate the graphics origin to the specified coordinates (x: 100, y: 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line using the pen from point (200, 10) to point (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
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
// Access the collection of layers in the PDF document
var layers = document.layers;
// Add a new layer named 'Layer1' to the PDF document
var layer = layers.add('Layer1');
// Create a graphics object for the newly added layer on the specified page
var graphics = layer.createGraphics(page);
// Translate the graphics origin to the specified coordinates (x: 100, y: 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line using the pen from point (200, 10) to point (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save the document
document.save('Output.pdf');
// Close the document
 document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding annotation to layer

This example demonstrates how to add an annotation to a specific layer in a PDF document using the `PdfLayer` class. Associating annotations with layers allows you to control their visibility dynamically.

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

This example demonstrates how to create nested layers in a PDF document using the `PdfLayer` class. Nested layers enable hierarchical organization of content for better control and user experience.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import { PdfDocument, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document = new PdfDocument();
// Add a page
let page = document.addPage();
// Get the collection of layers
let layers = document.layers;
// Add a new layer named 'Layer1'
let layer = layers.add('Layer1');
// Create graphics for 'Layer1'
let graphics = layer.createGraphics(page);
// Add one child layers
let childLayer1 = layer.layers.add('ChildLayer2');
// Create graphics for 'ChildLayer2'
graphics = childLayer1.createGraphics(page);
// Apply translation transform
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen
let pen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save and destroy the document
document.save('Output.pdf');
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get the collection of layers
var layers = document.layers;
// Add a new layer named 'Layer1'
var layer = layers.add('Layer1');
// Create graphics for 'Layer1'
var graphics = layer.createGraphics(page);
// Add one child layer
var childLayer1 = layer.layers.add('ChildLayer2');
// Create graphics for 'ChildLayer2'
graphics = childLayer1.createGraphics(page);
// Apply translation transform
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save and destroy the document
document.save('Output.pdf');
document.destroy();
{% endhighlight %}
{% endtabs %}

## Removing layers from an existing PDF document

This example demonstrates how to remove layers from an existing PDF document using the `PdfLayerCollection` class. Removing unnecessary layers helps simplify the document structure.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfLayerCollection, PdfLayer } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the layer collection.
let layers: PdfLayerCollection = document.layers;
// Retrieve the first layer from the layers collection
let layer: PdfLayer = layers.at(0);
// Remove the layer from layer collection with instance
layers.remove(layer);
// Remove an layer from specific index
layers.removeAt(1);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the layer collection.
var layers = document.layers;
// Retrieve the first layer from the layers collection
var layer = layers.at(0);
// Remove the layer from layer collection with instance
layers.remove(layer);
// Remove an layer from specific index
layers.removeAt(1);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Lock or Unlock layers

This example demonstrates how to lock or unlock layers in a PDF document using the `PdfLayer` class. Locking layers prevents users from toggling their visibility, ensuring that critical content remains displayed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfLayerCollection, PdfLayer, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Access the collection of layers in the PDF document
let layers: PdfLayerCollection = document.layers;
// Add a new layer named 'Layer1' to the PDF document
let layer: PdfLayer = layers.add('Layer1');
// Create a graphics object for the newly added layer on the specified page
let graphics: PdfGraphics = layer.createGraphics(page);
//Set a lock state
layer.locked = true;
// Translate the graphics origin to the specified coordinates (x: 100, y: 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line using the pen from point (200, 10) to point (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
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
// Access the collection of layers in the PDF document
var layers = document.layers;
// Add a new layer named 'Layer1' to the PDF document
var layer = layers.add('Layer1');
// Create a graphics object for the newly added layer on the specified page
var graphics = layer.createGraphics(page);
// Set a lock state
layer.locked = true;
// Translate the graphics origin to the specified coordinates (x: 100, y: 60)
graphics.translateTransform({ x: 100, y: 60 });
// Create a black pen with a thickness of 1 unit
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line using the pen from point (200, 10) to point (300, 100)
graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}