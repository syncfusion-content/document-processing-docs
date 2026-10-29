---
title: PDF Templates in JavaScript PDF | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: Create and use PDF templates to add reusable content in PDF documents using the Syncfusion JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---
# PDF Templates in JavaScript PDF

A PDF template is a drawing surface where contents can be added. All the elements that can be added to a PDF page are supported in PDF template as well. The template can be drawn anywhere on a page or onto other templates, making it ideal for headers, footers, watermarks, and other repeating graphics.

## Creating a New PDF Template

This example demonstrates how to create a new PDF template using the [PdfTemplate](https://ej2.syncfusion.com/javascript/documentation/api/pdf/pdftemplate) class. A PDF template allows you to define reusable graphics or content that can be drawn on multiple pages or annotations within a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfTemplate, PdfImage, PdfBitmap, PdfStandardFont, PdfBrush, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

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
// Create a new font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 20, PdfFontStyle.regular);
// Draw the text into template graphics.
template.graphics.drawString('Created by Syncfusion PDF', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
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
// Create a new font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 20, ej.pdf.PdfFontStyle.regular);
// Draw the text into template graphics.
template.graphics.drawString('Created by Syncfusion PDF', font, {x: 10, y: 20, width: 100, height: 200}, new ej.pdf.PdfBrush({r: 0, g: 0, b: 255}));
// Draw template to the page
page.graphics.drawTemplate(template, { x: 0, y: 0, width: 100, height: 50 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Creating a template from an existing PDF page

Load the source PDF document, get the required page with `getPage`, and call [createTemplate](https://ej2.syncfusion.com/documentation/api/pdf/pdfpage#createtemplate) on it. Then draw the returned template on a destination page by using [drawTemplate](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawtemplate) of the page graphics.

The following example creates a template from the first page of an existing PDF document and draws it on a new document at its original size.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTemplate, PdfPageSettings, PdfMargins } from '@syncfusion/ej2-pdf';

// Load the source PDF document
let source: PdfDocument = new PdfDocument(pdfData);
// Access the first page of the source document
let sourcePage: PdfPage = source.getPage(0);
// Create a template from the source page
let template: PdfTemplate = sourcePage.createTemplate();
// Create a destination PDF document
let document: PdfDocument = new PdfDocument();
// Use zero margins so the template is placed from the page origin
let settings: PdfPageSettings = new PdfPageSettings();
settings.margins = new PdfMargins(0);
// Add a page to the destination document
let page: PdfPage = document.addPage(settings);
// Draw the template at its original size
page.graphics.drawTemplate(template, { x: 0, y: 0, width: template.size.width, height: template.size.height });
// Save the document
document.save('output.pdf');
// Destroy the documents
document.destroy();
source.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the source PDF document
var source = new ej.pdf.PdfDocument(pdfData);
// Access the first page of the source document
var sourcePage = source.getPage(0);
// Create a template from the source page
var template = sourcePage.createTemplate();
// Create a destination PDF document
var document = new ej.pdf.PdfDocument();
// Use zero margins so the template is placed from the page origin
var settings = new ej.pdf.PdfPageSettings();
settings.margins = new ej.pdf.PdfMargins(0);
// Add a page to the destination document
var page = document.addPage(settings);
// Draw the template at its original size
page.graphics.drawTemplate(template, { x: 0, y: 0, width: template.size.width, height: template.size.height });
// Save the document
document.save('output.pdf');
// Destroy the documents
document.destroy();
source.destroy();
{% endhighlight %}
{% endtabs %}

## Positioning and scaling the template

The `bounds` argument of `drawTemplate` (`{ x, y, width, height }`) controls both the position and the size of the drawn template. The `x` and `y` values set the location on the destination page. The template is scaled by the ratio of `bounds.width` and `bounds.height` to the template's `size` (the original width and height of the source page). Pass `template.size.width` and `template.size.height` to keep the original size, or smaller or larger values to scale it.

The following example draws the template at half of its original size at the position (40, 40).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTemplate } from '@syncfusion/ej2-pdf';

// Load the source PDF document
let source: PdfDocument = new PdfDocument(pdfData);
// Create a template from the first page
let template: PdfTemplate = source.getPage(0).createTemplate();
// Create a destination PDF document and add a page
let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
// Draw the template at half of its size at the position (40, 40)
page.graphics.drawTemplate(template, { x: 40, y: 40, width: template.size.width / 2, height: template.size.height / 2 });
// Save the document
document.save('output.pdf');
// Destroy the documents
document.destroy();
source.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the source PDF document
var source = new ej.pdf.PdfDocument(pdfData);
// Create a template from the first page
var template = source.getPage(0).createTemplate();
// Create a destination PDF document and add a page
var document = new ej.pdf.PdfDocument();
var page = document.addPage();
// Draw the template at half of its size at the position (40, 40)
page.graphics.drawTemplate(template, { x: 40, y: 40, width: template.size.width / 2, height: template.size.height / 2 });
// Save the document
document.save('output.pdf');
// Destroy the documents
document.destroy();
source.destroy();
{% endhighlight %}
{% endtabs %}

## Reusing a template

A template is created once and can be drawn multiple times. The following example draws the same template twice on one page at different positions and sizes.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTemplate } from '@syncfusion/ej2-pdf';

// Load the source PDF document
let source: PdfDocument = new PdfDocument(pdfData);
// Create a template from the first page
let template: PdfTemplate = source.getPage(0).createTemplate();
// Create a destination PDF document and add a page
let document: PdfDocument = new PdfDocument();
let page: PdfPage = document.addPage();
// Draw the same template twice
page.graphics.drawTemplate(template, { x: 0, y: 0, width: template.size.width / 2, height: template.size.height / 2 });
page.graphics.drawTemplate(template, { x: 200, y: 300, width: template.size.width / 3, height: template.size.height / 3 });
// Save the document
document.save('output.pdf');
// Destroy the documents
document.destroy();
source.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the source PDF document
var source = new ej.pdf.PdfDocument(pdfData);
// Create a template from the first page
var template = source.getPage(0).createTemplate();
// Create a destination PDF document and add a page
var document = new ej.pdf.PdfDocument();
var page = document.addPage();
// Draw the same template twice
page.graphics.drawTemplate(template, { x: 0, y: 0, width: template.size.width / 2, height: template.size.height / 2 });
page.graphics.drawTemplate(template, { x: 200, y: 300, width: template.size.width / 3, height: template.size.height / 3 });
// Save the document
document.save('output.pdf');
// Destroy the documents
document.destroy();
source.destroy();
{% endhighlight %}
{% endtabs %}


## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)