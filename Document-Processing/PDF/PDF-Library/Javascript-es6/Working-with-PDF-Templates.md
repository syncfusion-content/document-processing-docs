---
title: Working with EJ2 PDF templates | Syncfusion
description: This section explains how to create a PDF template is a drawing surface, where contents can be added using EJ2 PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with EJ2 PDF Templates 

A EJ2 PDF template is a drawing surface, where contents can be added. All the elements that can be added to a PdfPage is supported in PdfTemplate as well. The template in turn can be drawn over the page or can be positioned at any part of the page.

## Creating a new PDF template

This example demonstrates how to create a new PDF template using the `PdfTemplate` class. A PDF template allows you to define reusable graphics or content that can be drawn on multiple pages or annotations within a PDF document.

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
    // Create a new rubber stamp annotation
    const annotation: PdfRubberStampAnnotation = new PdfRubberStampAnnotation(50, 100, 100, 50);
    // Get the normal appearance of the annotation
    let normalAppearance: PdfTemplate = annotation.appearance.normal;
    // Create new image object by using JPEG image data as Base64 string format
    let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
    // Draw the image as the custom appearance for the annotation
    normalAppearance.graphics.drawImage(image, 0, 0, 100, 50);
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

## Creating templates from existing PDF document

This example demonstrates how to create templates from an existing PDF document using the `PdfTemplate` class. A PDF template allows you to extract and reuse content from a PDF page or annotation, enabling consistent design and repeated elements across multiple pages.

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
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Create a new rubber stamp annotation
    const annotation: PdfRubberStampAnnotation = new PdfRubberStampAnnotation(50, 100, 100, 50);
    // Get the normal appearance of the annotation
    let normalAppearance: PdfTemplate = annotation.appearance.normal;
    // Create new image object by using JPEG image data as Base64 string format
    let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
    // Draw the image as the custom appearance for the annotation
    normalAppearance.graphics.drawImage(image, 0, 0, 100, 50);
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

