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

You can create a template from an existing PDF page and reuse it in other pages of the same document or in a different document. This approach helps maintain consistent page layouts and reduces the effort required to redraw identical content multiple times.

This sample demonstrates how to convert an A4-sized PDF page to A3 size using the page-to-template support

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTemplate, PdfPageSettings, PdfMargins } from '@syncfusion/ej2-pdf';

// Load the source PDF document containing an A4-sized page
let source: PdfDocument = new PdfDocument(pdfData);
// Access the first page of the source document
let sourcePage: PdfPage = source.getPage(0);
// Create a template from the A4-sized source page
let template: PdfTemplate = sourcePage.createTemplate();
// Create a new destination PDF document
let document: PdfDocument = new PdfDocument();
// Configure an A3-sized page with zero margins
let settings: PdfPageSettings = new PdfPageSettings();
settings.size = { width: 842, height: 1191 };
settings.margins = new PdfMargins(0);
// Add the A3-sized page to the destination document
let page: PdfPage = document.addPage(settings);
// Get the client size of the destination page
let clientSize: { width: number, height: number } = page.getClientSize();
// Draw and scale the A4 page template to fit the A3 page
page.graphics.drawTemplate(template, {
    x: 0,
    y: 0,
    width: clientSize.width,
    height: clientSize.height
});
// Save the destination PDF document
document.save('output.pdf');
// Destroy the documents
document.destroy();
source.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the source PDF document containing an A4-sized page
var source = new ej.pdf.PdfDocument(pdfData);
// Access the first page of the source document
var sourcePage = source.getPage(0);
// Create a template from the A4-sized source page
var template = sourcePage.createTemplate();
// Create a new destination PDF document
var document = new ej.pdf.PdfDocument();
// Configure an A3-sized page with zero margins
var settings = new ej.pdf.PdfPageSettings();
settings.size = { width: 842, height: 1191 };
settings.margins = new ej.pdf.PdfMargins(0);
// Add the A3-sized page to the destination document
var page = document.addPage(settings);
// Get the client size of the destination page
var clientSize = page.getClientSize();
// Draw and scale the A4 page template to fit the A3 page
page.graphics.drawTemplate(template, {
    x: 0,
    y: 0,
    width: clientSize.width,
    height: clientSize.height
});
// Save the destination PDF document
document.save('output.pdf');
// Destroy the documents
document.destroy();
source.destroy();
{% endhighlight %}
{% endtabs %}

## Notes

- **Page index:** `getPage` uses a zero-based index and throws an `Invalid page index` error when the index is less than 0 or not less than `pageCount`.
- **Template size:** `template.size` reflects the source page. It is the page size, or the crop box or media box size when the page has a non-zero crop box or media box origin.
- **Source content:** The template contains the page's drawn content (text, images, graphics, and resources). Pages of an encrypted document can be used after the document is loaded with its password. The security settings are not copied to the destination document.
- **Interactive content:** When the template is drawn on a page of a different document, the annotations and form fields of the source page are also imported to the destination page, once per source page and destination page.
- **Read-only template:** A template created from a page does not expose drawing graphics, so `template.graphics` is `null`. Use it only for drawing on other pages.
- **Positioning and scaling:** The `bounds` argument of `drawTemplate` is required. Use `template.size` to retain the original proportions.
- **Save and reload:** The generated document can be saved and reloaded as a regular PDF document. The source document is not modified by creating or drawing a template.
- **Resource cleanup:** Call `destroy()` on both the source and the destination documents after saving.


## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/document-library/javascript/#/tailwind3/pdf/default)