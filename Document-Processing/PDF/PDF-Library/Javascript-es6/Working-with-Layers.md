---
title: Working with EJ2 Layers | Syncfusion
description: This section explains adding the layer in the EJ2 PDF document and the layers refers to section of Content of EJ2 PDF document
platform: document-processing
control: PDF
documentation: UG
---

# Working  with EJ2 Layers 

Layers, also known as Option Content refers to sections of content in a PDF document that can be selectively viewed or hidden by document authors or consumers. This capability is useful in items such as CAD drawings, layered artwork, maps, and multi-language documents.

Essential<sup>&reg;</sup> EJ2 PDF provides support to create, add and merge the layers into PDF document.

## Adding Layers in a PDF document

This example demonstrates how to add layers to a PDF document using the `PdfLayer` class. Layers allow you to organize content into separate, optional sections that can be shown or hidden by the user.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
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
}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Adding annotation to layer

This example demonstrates how to add an annotation to a specific layer in a PDF document using the `PdfLayer` class. Associating annotations with layers allows you to control their visibility dynamically.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
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
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Nested Layers

This example demonstrates how to create nested layers in a PDF document using the `PdfLayer` class. Nested layers enable hierarchical organization of content for better control and user experience.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Get the collection of layers from the PDF document
    let layers: PdfLayerCollection = document.layers;
    // Add a new layer named 'Layer1' to the document
    let layer: PdfLayer = layers.add('Layer1');
    // Create graphics context for 'Layer1' on the specified page
    let graphics: PdfGraphics = layer.createGraphics(page);
    // Add two child layers under 'Layer1': 'ChildLayer1' and 'ChildLayer2'
    let layer1: PdfLayer = layer.layers.add('ChildLayer1');
    let layer2: PdfLayer = layer.layers.add('ChildLayer2');
    // Create graphics context for 'ChildLayer2' on the same page
    graphics = layer2.createGraphics(page);
    // Apply a translation transform to shift the drawing origin by (100, 60)
    graphics.translateTransform({ x: 100, y: 60 });
    // Create a black pen with a thickness of 1 unit for drawing
    let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
    // Draw a straight line from point (200, 10) to point (300, 100) using the pen
    graphics.drawLine(pen, { x: 200, y: 10 }, { x: 300, y: 100 });
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Removing layers from an existing PDF document

This example demonstrates how to remove layers from an existing PDF document using the `PdfLayerCollection` class. Removing unnecessary layers helps simplify the document structure.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Get the layer collection.
    let layers: PdfLayerCollection = document.layers;
    //Remove the layer
    layers.RemoveAt(0);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Lock or Unlock layers

This example demonstrates how to lock or unlock layers in a PDF document using the `PdfLayer` class. Locking layers prevents users from toggling their visibility, ensuring that critical content remains displayed.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
   // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Access the collection of layers in the PDF document
    let layers: PdfLayerCollection = document.layers;
    // Add a new layer named 'Layer1' to the PDF document
    let layer: PdfLayer = layers.add('Layer1');
    // Create a graphics object for the newly added layer on the specified page
    let graphics: PdfGraphics = layer.createGraphics(page);
    //Set a lock state.  
    layer.Locked = true;
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
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}