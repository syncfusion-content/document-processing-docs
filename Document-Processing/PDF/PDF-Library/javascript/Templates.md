---
title: Templates in JavaScript PDF Library | Syncfusion
description: This section explains how to create a PDF template, which is a drawing surface where contents can be added, by using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---
# Templates in JavaScript PDF Library

A PDF template is a drawing surface where contents can be added. All the elements that can be added to a PDF page are supported in PDF template as well. The template can be drawn anywhere on a page or onto other templates, making it ideal for headers, footers, watermarks, and other repeating graphics.

## Creating a New PDF Template

This example demonstrates how to create a new PDF template using the [PdfTemplate](https://ej2.syncfusion.com/javascript/documentation/api/pdf/pdftemplate) class. A PDF template allows you to define reusable graphics or content that can be drawn on multiple pages or annotations within a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTemplate, PdfImage, PdfBitmap, PdfStandardFont, PdfBrush, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
const document: PdfDocument = new PdfDocument();
// Add a page to the document.
const page: PdfPage = document.addPage();
// Create a template. The width and height are in PDF points (1 point = 1/72 inch).
// The x and y values specify the template's origin; placement on a page is
// controlled later by drawTemplate.
const template: PdfTemplate = new PdfTemplate({ x: 100, y: 100, width: 400, height: 200 });
// Create an image object by using JPEG image data as a Base64 string.
// Replace the placeholder below with a valid Base64-encoded JPEG. In the
// browser, use FileReader to read a user-selected file as Base64. In Node.js,
// read the file and convert the buffer to Base64 before passing it here.
const image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image into the template graphics. The image occupies the upper
// portion of the 400x200 template.
template.graphics.drawImage(image, { x: 0, y: 0, width: 400, height: 100 });
// Embed a standard font. embedFont(family, size, style) returns a
// PdfStandardFont that can be reused across drawString calls.
const font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 20, PdfFontStyle.regular);
// Draw text into the template graphics. The third argument is a layout
// bounds rectangle that defines where the text is placed on the drawing
// surface. The brush defines the text color; RGB values are 0-255.
template.graphics.drawString('Created by Syncfusion PDF', font, { x: 10, y: 20, width: 380, height: 160 }, new PdfBrush(0, 0, 255));
// Draw the template to the page. The width and height here control the
// placement size on the page and should match the template's own size to
// avoid scaling artifacts.
page.graphics.drawTemplate(template, { x: 0, y: 0, width: 400, height: 200 });
// Save the document. In a browser, this triggers a download of 'output.pdf'.
// In Node.js, the file is written to the current working directory.
document.save('output.pdf');
// Destroy the document to release resources.
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
const document = new ej.pdf.PdfDocument();
// Add a page to the document.
const page = document.addPage();
// Create a template. The width and height are in PDF points (1 point = 1/72 inch).
// The x and y values specify the template's origin; placement on a page is
// controlled later by drawTemplate.
const template = new ej.pdf.PdfTemplate({ x: 100, y: 100, width: 400, height: 200 });
// Create an image object by using JPEG image data as a Base64 string.
// Replace the placeholder below with a valid Base64-encoded JPEG. In the
// browser, use FileReader to read a user-selected file as Base64. In Node.js,
// read the file and convert the buffer to Base64 before passing it here.
const image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
// Draw the image into the template graphics. The image occupies the upper
// portion of the 400x200 template.
template.graphics.drawImage(image, { x: 0, y: 0, width: 400, height: 100 });
// Embed a standard font. embedFont(family, size, style) returns a
// PdfStandardFont that can be reused across drawString calls.
const font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 20, ej.pdf.PdfFontStyle.regular);
// Draw text into the template graphics. The third argument is a layout
// bounds rectangle that defines where the text is placed on the drawing
// surface. The brush defines the text color; RGB values are 0-255.
template.graphics.drawString('Created by Syncfusion PDF', font, { x: 10, y: 20, width: 380, height: 160 }, new ej.pdf.PdfBrush(0, 0, 255));
// Draw the template to the page. The width and height here control the
// placement size on the page and should match the template's own size to
// avoid scaling artifacts.
page.graphics.drawTemplate(template, { x: 0, y: 0, width: 400, height: 200 });
// Save the document. In a browser, this triggers a download of 'output.pdf'.
// In Node.js, the file is written to the current working directory.
document.save('output.pdf');
// Destroy the document to release resources.
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)