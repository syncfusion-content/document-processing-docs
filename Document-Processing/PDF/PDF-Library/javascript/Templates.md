---
title: Templates in JavaScript PDF library | Syncfusion
description: This section explains how to create a PDF template, which is a drawing surface where contents can be added, by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Templates in JavaScript PDF library

A PDF template is a drawing surface, where contents can be added. All the elements that can be added to a PdfPage is supported in PdfTemplate as well. The template in turn can be drawn over the page or can be positioned at any part of the page.

## Creating a new PDF template

This example demonstrates how to create a new PDF template using the `PdfTemplate` class. A PDF template allows you to define reusable graphics or content that can be drawn on multiple pages or annotations within a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTemplate, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a template
let template: PdfTemplate = new PdfTemplate({ x: 100, y: 100, width: 400, height: 200 });
// Create new image object by using JPEG image data as Base64 string format
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image into the template graphics
template.graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 50 });
// Draw template to the page
page.graphics.drawTemplate(template, { x: 0, y: 0, width: 100, height: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Create a template
var template = new ej.pdf.PdfTemplate({ x: 100, y: 100, width: 400, height: 200 });
// Create new image object by using JPEG image data as Base64 string format
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image into the template graphics
template.graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 50 });
// Draw template to the page
page.graphics.drawTemplate(template, { x: 0, y: 0, width: 100, height: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Creating templates from existing PDF document

This example demonstrates how to create templates from an existing PDF document using the `PdfTemplate` class. A PDF template allows you to extract and reuse content from a PDF page or annotation, enabling consistent design and repeated elements across multiple pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTemplate, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Get the first page
let page: PdfPage = document.getPage(0) as PdfPage;
// Create a template
let template: PdfTemplate = new PdfTemplate({ x: 100, y: 100, width: 400, height: 200 });
// Create new image object by using JPEG image data as Base64 string format
let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image into the template graphics
template.graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 50 });
// Draw template to the page
page.graphics.drawTemplate(template, { x: 0, y: 0, width: 100, height: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Get the first page
var page = document.getPage(0);
// Create a template
var template = new ej.pdf.PdfTemplate({ x: 100, y: 100, width: 400, height: 200 });
// Create new image object by using JPEG image data as Base64 string format
var image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image into the template graphics
template.graphics.drawImage(image, { x: 0, y: 0, width: 100, height: 50 });
// Draw template to the page
page.graphics.drawTemplate(template, { x: 0, y: 0, width: 100, height: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}