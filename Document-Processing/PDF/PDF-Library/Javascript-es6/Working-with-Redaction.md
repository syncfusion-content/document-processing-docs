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

Redaction permanently removes confidential or sensitive information from a PDF. The PdfRedactionAnnotation class allows you to define areas to redact, ensuring the underlying text or image data is completely deleted from the document.

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
    overlayText: 'Sample Overlay', font: font, textColor: [0, 0, 0], appearanceFillColor: [255, 255, 255]});
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

## Drawing image on the redacted area

You can draw an image over the redacted area. This is useful for branding or replacing sensitive content with a placeholder graphic.

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

## Drawing pattern on the redacted area

Patterns such as diagonal lines or cross-hatch can be applied to the redacted region for visual distinction. This makes redacted areas easily recognizable in the document.

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

## Redaction without fill color and appearance

If you prefer a minimalistic approach, you can remove the content without adding any visual appearance. The area remains blank, ensuring sensitive data is gone but without extra styling.

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

## Get redaction progress 

For large documents or batch operations, you can track the progress of redaction. This feature provides feedback during processing, ensuring smooth execution and user awareness.

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

## Redaction result 

After applying redaction, the content is permanently removed from the PDF. The result ensures that the sensitive information cannot be recovered, even through text extraction or search.

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

## Redact text content alone on the redacted area

This option allows you to remove only the text content within the specified redaction area while leaving images or other graphical elements intact. It ensures that sensitive textual information is permanently deleted without affecting the overall layout or visual components of the PDF.

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