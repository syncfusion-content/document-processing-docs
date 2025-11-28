---
title: Working with EJ2 Images | Syncfusion
description: This section explains how to add and replace images in the EJ2 PDF document using Essential PDF. It supports both raster and vector images.
platform: document-processing
control: PDF
documentation: UG
domainurl: ##DomainURL##
---

# Working with EJ2 images using various options

Essential<sup>&reg;</sup> PDF supports both raster and vector images.

Images are supported through the `PdfImage` class, which is an abstract base class that provides the common functionality for `PdfBitmap` class.

## Inserting an EJ2 image in a new document

The following raster images are supported in Essential<sup>&reg;</sup> PDF.

* BMP
* JPEG
* JPEG with Exif standard
* GIF
* PNG
* TIFF
* ICO and ICON

## Adding image in PDF document

This example demonstrates how to add an image to a PDF document using the `PdfBitmap` class and the `draw` method of the `PdfImage` class. The image is loaded from a file and drawn at the specified coordinates on the page.

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
    // Get graphics from the page
    let graphics = page.graphics;
    // Load the image
    let image: PdfImage = new PdfBitmap('Image.jpg');
    // Draw the image.
    image.draw(graphics, 0,0);
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

## Inserting an image in an existing document

This example demonstrates how to insert an image into an existing PDF document using the `PdfBitmap` class and the `draw` method of the `PdfImage` class. The image is loaded from a file and rendered at the specified position on the selected page.

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
    let document: PdfDocument = new PdfDocument('input.pdf');
    // Access first page
    let page: PdfPage = document.getPage(0);
    // Get graphics from the page
    let graphics = page.graphics;
    // Load the image
    let image: PdfImage = new PdfBitmap('Image.jpg');
    // Draw the image.
    image.draw(graphics, 0,0);
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

## Image Pagination

This example demonstrates how to enable image pagination in a PDF document using the `PdfLayoutFormat` class. By setting the `break` property to PdfLayoutBreakType.fitPage and the `layout` property to PdfLayoutType.paginate, the image is automatically split across multiple pages when it exceeds the page size.

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
    // Get graphics from the page
    let graphics = page.graphics;
    // Load the image
    let image: PdfImage = new PdfBitmap('Image.jpg');
    // Create a layout for drawing
    let pageLayout: PdfLayoutFormat = new PdfLayoutFormat();
    // Set the layout break type for drawing
    pageLayout.break = PdfLayoutBreakType.fitPage;
    pageLayout.Layout = PdfLayoutType.paginate;
    // Draw the image.
    image.draw(graphics, 20, 20, pageLayout);
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

## Clipping and graphics state

This example demonstrates how to apply clipping and manage graphics state in a PDF document using the `PdfGraphics` class. The `save` and `restore` methods preserve the current graphics state, while the `setClip` method defines a clipping region to restrict drawing operations, ensuring precise control over rendering.

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
    // Get graphics from the page
    let graphics = page.graphics;
    // Load the image— only the part within the clipping region will be visible
    let image: PdfImage = new PdfBitmap('Image.jpg');
    // Save the current graphics state (to restore later)
    let state: PdfGraphicsState = graphics.save();
    graphics.setClip( [50, 50, 200, 100] );
    // Draw the image.
    image.draw(graphics, 20, 20);
    // Restore the graphics state to remove the clipping region
    graphics.restore(state);
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

## Applying transparency and rotation to the image

This example demonstrates how to apply transparency and rotation to an image in a PDF document using the `PdfGraphics` class. Transparency can be controlled through the graphics state, while rotation is applied by transforming the graphics context before drawing the image, enabling advanced visual effects in the document.

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
    // Get graphics from the page
    let graphics = page.graphics;
    // Load the image— only the part within the clipping region will be visible
    let image: PdfImage = new PdfBitmap('Image.jpg');
    // Save the current graphics state (to restore later)
    let state: PdfGraphicsState = graphics.save();
    //Translate the coordinate system to the  required position
    graphics.translateTransform(20, 100);
    //Apply transparency
    graphics.setTransparency(0.5);
    //Rotate the coordinate system
    graphics.rotateTransform(-45);
    // Draw the image.
    image.draw(graphics, 20, 20);
    // Restore the graphics state to remove the clipping region
    graphics.restore(state);
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