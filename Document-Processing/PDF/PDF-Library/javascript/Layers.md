---
title: PDF Layers in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Create, manage, annotate, lock, unlock, and organize PDF layers using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# PDF Layers in JavaScript PDF

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

## Creating layer groups

This example demonstrates how to group related layers into a named `PdfLayerGroup` in a PDF document. Named layer groups help organize layers into logical sections, making it easier to manage and navigate layer visibility in supported PDF viewers.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayerGroup, PdfLayer, PdfGraphics, PdfPen } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a blank page
let page: PdfPage = document.addPage();
// Access the collection of layers
let layers: PdfLayerCollection = document.layers;
// Add a layer group named 'Shapes'
let group: PdfLayerGroup = layers.addGroup('Shapes');
// Add layers to the group
let lineLayer: PdfLayer = group.add('Line');
let boxLayer: PdfLayer = group.add('Box');
// Create graphics for the first layer in the group
let graphics: PdfGraphics = lineLayer.createGraphics(page);
// Create a black pen with a thickness of 1 unit
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line from (100, 100) to (300, 200)
graphics.drawLine(pen, { x: 100, y: 100 }, { x: 300, y: 200 });
// Create graphics for the second layer in the group
graphics = boxLayer.createGraphics(page);
// Create a blue pen with a thickness of 2 units
pen = new PdfPen({ r: 0, g: 0, b: 255 }, 2);
// Draw a rectangle
graphics.drawRectangle({ x: 100, y: 250, width: 200, height: 100 }, pen);
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
// Add a layer group named 'Shapes'
var group = layers.addGroup('Shapes');
// Add layers to the group
var lineLayer = group.add('Line');
var boxLayer = group.add('Box');
// Create graphics for the first layer in the group
var graphics = lineLayer.createGraphics(page);
// Create a black pen with a thickness of 1 unit
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Draw a line from (100, 100) to (300, 200)
graphics.drawLine(pen, { x: 100, y: 100 }, { x: 300, y: 200 });
// Create graphics for the second layer in the group
graphics = boxLayer.createGraphics(page);
// Create a blue pen with a thickness of 2 units
pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 255 }, 2);
// Draw a rectangle
graphics.drawRectangle({ x: 100, y: 250, width: 200, height: 100 }, pen);
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% endtabs %}

> **Note:** A layer group is a named container for organizing layers and groups in the Layers panel. Use group.add() to add layers and group.addGroup() to create nested groups.

### Accessing and updating the name of grouped layers

This example shows how to retrieve an existing layer group and read or update its name using the `name` property of the `PdfLayerGroup` class. Use the [`PdfLayerCollection.at()`](https://ej2.syncfusion.com/documentation/api/pdf/pdflayercollection#at) method to access an item at a specified index. Since the returned item can be either a [`PdfLayer`](https://ej2.syncfusion.com/documentation/api/pdf/pdflayer) or a `PdfLayerGroup`, verify its type before accessing the group-specific properties.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfLayerCollection, PdfLayerGroup, PdfLayer } from '@syncfusion/ej2-pdf';

// Load an existing PDF document that contains layer groups
let document: PdfDocument = new PdfDocument(data);
// Access the collection of layers
let layers: PdfLayerCollection = document.layers;
// Access the item at the specified index
let item: PdfLayer | PdfLayerGroup = layers.at(0);
// Check whether the item is a layer group
if (item instanceof PdfLayerGroup) {
    // Get the current name of the group
    let name: string = item.name;
    // Update the name of the group
    item.name = 'Renamed group';
}
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing PDF document that contains layer groups
var document = new ej.pdf.PdfDocument(data);
// Access the collection of layers
var layers = document.layers;
// Access the item at the specified index
var item = layers.at(0);
// Check whether the item is a layer group
if (item instanceof ej.pdf.PdfLayerGroup) {
    // Get the current name of the group
    var name = item.name;
    // Update the name of the group
    item.name = 'Renamed group';
}
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% endtabs %}

> **Note:** Groups are accessed by index, either from `document.layers` or from another group. Layer group names are not required to be unique, and the name must be a string; an empty string is accepted. The `contains` method of the layer collection checks layer names only and does not search for groups.

## Grouping layers using radio buttons

This example shows how to group mutually exclusive layers using the `PdfLayerRadioGroup` class. Activating one layer hides the other layers in the group. Add the radio group to the PDF document using the `layerRadioGroups` property.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfLayerCollection, PdfLayer, PdfLayerRadioGroup, PdfGraphics, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a blank page
let page: PdfPage = document.addPage();
// Access the collection of layers
let layers: PdfLayerCollection = document.layers;
// Add layers to the document
let english: PdfLayer = layers.add('English', false);
let french: PdfLayer = layers.add('French', true);
let german: PdfLayer = layers.add('German', false);
// Draw distinct content on each layer
let graphics: PdfGraphics = english.createGraphics(page);
graphics.drawRectangle({ x: 100, y: 100, width: 200, height: 100 }, new PdfBrush({ r: 255, g: 0, b: 0 }));
graphics = french.createGraphics(page);
graphics.drawRectangle({ x: 100, y: 100, width: 200, height: 100 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
graphics = german.createGraphics(page);
graphics.drawRectangle({ x: 100, y: 100, width: 200, height: 100 }, new PdfBrush({ r: 0, g: 128, b: 0 }));
// Create a new radio group
let radioGroup: PdfLayerRadioGroup = new PdfLayerRadioGroup();
// Add the layers to the radio group
radioGroup.add(english);
radioGroup.add(french);
radioGroup.add(german);
// Make the second layer ('French') the active layer
radioGroup.activeLayerIndex = 1;
// Add the radio group to the document
document.layerRadioGroups.add(radioGroup);
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
// Add layers to the document
var english = layers.add('English', false);
var french = layers.add('French', true);
var german = layers.add('German', false);
// Draw distinct content on each layer
var graphics = english.createGraphics(page);
graphics.drawRectangle({ x: 100, y: 100, width: 200, height: 100 }, new ej.pdf.PdfBrush({ r: 255, g: 0, b: 0 }));
graphics = french.createGraphics(page);
graphics.drawRectangle({ x: 100, y: 100, width: 200, height: 100 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
graphics = german.createGraphics(page);
graphics.drawRectangle({ x: 100, y: 100, width: 200, height: 100 }, new ej.pdf.PdfBrush({ r: 0, g: 128, b: 0 }));
// Create a new radio group
var radioGroup = new ej.pdf.PdfLayerRadioGroup();
// Add the layers to the radio group
radioGroup.add(english);
radioGroup.add(french);
radioGroup.add(german);
// Make the second layer ('French') the active layer
radioGroup.activeLayerIndex = 1;
// Add the radio group to the document
document.layerRadioGroups.add(radioGroup);
// Save the document
document.save('Output.pdf');
// Release native resources
document.destroy();

{% endhighlight %}
{% endtabs %}

> **Note:** A named layer group organizes layers without affecting visibility, while a radio group displays the layer selected by `activeLayerIndex` and hides the others. A layer can belong to only one radio group, and locked layers cannot be activated.

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
let layer: PdfLayer = layers.at(0) as PdfLayer;
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
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/document-library/javascript/#/tailwind3/pdf/default.html)