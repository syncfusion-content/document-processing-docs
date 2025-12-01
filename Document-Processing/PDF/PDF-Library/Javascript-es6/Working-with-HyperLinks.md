---
title: Working with EJ2 Hyperlinks | Syncfusion
description: This section explains how to add hyperlink in a new and existing PDF document using Syncfusion EJ2 PDF library 
platform: document-processing
control: PDF
documentation: UG
---
# Working with EJ2 Hyperlinks in PDF

In EJ2 PDF, hyperlinks can be added to allow the users to navigate to another part of PDF file, web page or any other external content. Essential<sup>&reg;</sup> EJ2 PDF provides support for all these types of hyperlink.

## Working with Web navigation

This example demonstrates how to create a web link annotation in a PDF document using the `PdfTextWebLinkAnnotation` class. A web link annotation allows users to navigate to a specified URL directly from the PDF by clicking the annotated text.

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
    // Create a new PDF string format
    const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.left, PdfVerticalAlignment.top);
    // Create a new standard font
    const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Get the text size
    let size: number[] = font.measureString("Syncfusion Site", format, [0, 0], 0, 0);
    // Create a new text web link annotation
    let annot: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation(50, 40, size[0], size[1], [0, 0, 0], [165, 42, 42], 1);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a text web link annotation in an existing PDF document.

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
    // Create a new PDF string format
    const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.left, PdfVerticalAlignment.top);
    // Create a new standard font
    const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Get the text size
    let size: number[] = font.measureString("Syncfusion Site", format, [0, 0], 0, 0);
    // Create a new text web link annotation
    let annot: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation(50, 40, size[0], size[1], [0, 0, 0], [165, 42, 42], 1);
    // Add annotation to the page
    page.annotations.add(annotation);
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

## Working with internal document navigation

This example demonstrates how to create internal navigation within a PDF document using destination-based annotations.

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
    // Create a new PDF string format
    const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.left, PdfVerticalAlignment.top);
    // Create a new standard font
    const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Get the text size
    let size: number[] = font.measureString("Syncfusion Site", format, [0, 0], 0, 0);
    // Create a new text web link annotation
    let annot: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation(50, 40, size[0], size[1], [0, 0, 0], [165, 42, 42], 1);
    // Initializes a new instance of the `PdfDestination` class.
    let destination: PdfDestination = new PdfDestination();
    // Sets the zoom factor.
    destination.zoom = 20;
    // Sets the page where the destination is situated.
    destination.page = page;
    // Sets the mode of the destination.
    destination.mode = PdfDestinationMode.fitToPage;
    // Sets the location of the destination.
    destination.location = [20, 20];
   // Sets the bounds of the destination.
   destination.destinationBounds = [20, 20, 100, 50];
   // Sets destination to  document link annotation.
   annotation.destination = destination;
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

The following code snippet demonstrates how to add internal document navigation to a web link annotation in an existing PDF document.

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
    // Access the annotation at index 0
    let annotation: PdfDocumentLinkAnnotation = document.getPage(0).annotations.at(0) as PdfDocumentLinkAnnotation;
    // Initializes a new instance of the `PdfDestination` class.
    let destination: PdfDestination = new PdfDestination();
    // Sets the zoom factor.
    destination.zoom = 20;
    // Sets the page where the destination is situated.
    destination.page = page;
    // Sets the mode of the destination.
    destination.mode = PdfDestinationMode.fitToPage;
    // Sets the location of the destination.
    destination.location = [20, 20];
    // Sets the bounds of the destination.
    destination.destinationBounds = [20, 20, 100, 50];
    // Sets destination to  document link annotation.
    annotation.destination = destination;
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

## Working with external document navigation

This example demonstrates how to create external navigation in a PDF document using `PdfFileLinkAnnotation` annotations. External navigation allows users to open and navigate to another PDF or an external file from within the current document.

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
    // Create a new file link annotation
    let annotation: PdfFileLinkAnnotation = new PdfFileLinkAnnotation(10, 40, 30, 30, "image.png");
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet demonstrates how to add internal document navigation to a web link annotation in an existing PDF document.

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
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Create a new file link annotation
    let annotation: PdfFileLinkAnnotation = new PdfFileLinkAnnotation(10, 40, 30, 30, "image.png");
    // Add annotation to the page
    page.annotations.add(annotation);
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