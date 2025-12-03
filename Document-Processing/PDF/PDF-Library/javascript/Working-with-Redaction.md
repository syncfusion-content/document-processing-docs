---
title: Working with EJ2 Redaction |Syncfusion
description: This section explains how to Redact the content from an existing PDF document by using Essential EJ2 PDF
platform: document-processing
control: PDF
documentation: UG
---
# Working with EJ2 PDF Redaction

Redacting a PDF is the process of permanently removing sensitive or confidential information from PDF documents. Syncfusion<sup>&reg;</sup> EJ2 PDF library provides an easy way to redact PDF documents. 

## Removing sensitive content from the PDF document

Redaction permanently removes confidential or sensitive information from a PDF. The `PdfRedactionAnnotation` class allows you to define areas to redact, ensuring the underlying text or image data is completely deleted from the document.

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
    // Create a new redaction annotation
    const annotation: PdfRedactionAnnotation = new PdfRedactionAnnotation (50, 100, 100, 50);
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

## Display text on the redacted area

You can overlay custom text on the redacted region to indicate the reason for redaction or provide context. For example, adding "Confidential" or "Redacted" helps users understand why the content was removed.

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
    // Create a new redaction annotation
    const font: PdfFont = new PdfStandardFont(PdfFontFamily.timesRoman, 12);
    const annot: PdfRedactionAnnotation = new PdfRedactionAnnotation(100, 100, 100, 100, { borderColor: [255, 0, 0], repeatText: true,
    overlayText: 'Redacted', font: font, textColor: [0, 0, 0], appearanceFillColor: [255, 255, 255]});
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

## Fill color on the redacted area

You can apply a solid fill color to cover the redacted content. This is the most common approach for redaction.

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
    // Create a new redaction annotation with specified position and size
    let annot: PdfRedactionAnnotation = new PdfRedactionAnnotation({ x: 100, y: 100, width: 300, height: 200 });
    // Define multiple rectangular areas (bounds) within the annotation for redaction
    annot.boundsCollection = [
        { x: 50, y: 50, width: 100, height: 100 },   // First redaction area
        { x: 200, y: 100, width: 60, height: 30 },   // Second redaction area
        { x: 100, y: 400, width: 60, height: 30 }    // Third redaction area
    ];
    // Set the overlay text that will appear on the redacted areas
    annot.overlayText = "Confidential";
    // Enable repeating the overlay text across the redacted region
    annot.repeatText = true;
    // Set the fill color for the redaction appearance (red)
    annot.appearanceFillColor = { r: 255, g: 0, b: 0 };
    // Set the color of the overlay text (blue)
    annot.textColor = { r: 0, g: 0, b: 255 };
    // Set the opacity level for the redaction annotation (50% transparent)
    annot.opacity = 0.5;
    // Set the inner color for the redaction area (green)
    annot.innerColor = { r: 0, g: 255, b: 0 };
    // Align the overlay text to the center of the redaction area
    annot.textAlignment = PdfTextAlignment.center;
    // Specify the author of the annotation
    annot.author = "QA Tester";
    // Specify the subject or purpose of the annotation
    annot.subject = "Redaction Test";
    // Add the configured redaction annotation to the page's annotations collection
    page.annotations.add(annot);
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

## Redaction appearance fill color

Customize the appearance of the redacted area by applying specific fill colors. This helps maintain a consistent design or highlight redacted sections in a visually appealing way.

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
     //Appearance Fill color
    annot = new PdfRedactionAnnotation({x: 100, y: 100, width: 100, height: 50});
    annot.appearanceFillColor = {r: 255, g: 255, b: 0};
    page.annotations.add(annot);
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