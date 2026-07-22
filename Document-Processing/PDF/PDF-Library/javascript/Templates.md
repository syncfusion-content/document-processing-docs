---
title: Templates in JavaScript PDF Library | Syncfusion
description: This section explains how to create a PDF template, which is a drawing surface where contents can be added, by using the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---
# Templates in JavaScript PDF Library

A PDF template is a drawing surface where contents can be added. All the elements that can be added to a PDF page are supported in PDF template as well. The template can be drawn anywhere on a page or onto other templates, making it ideal for headers, footers, watermarks, and other repeating graphics.

## Overview

Use PDF templates when you need to:

- Reuse the same graphics on multiple pages (for example, company headers or page footers).
- Draw repeating backgrounds or watermarks without re-creating them on each page.
- Compose complex artwork once and place it at different positions or sizes.
- Stamp the same content on different pages or annotations.

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
const image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/wA/8A//2Q==');
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
const image = new ej.pdf.PdfBitmap('/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/wA/8A//2Q==');
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

N> The code samples above draw the image across the full width of the template and the text across the lower portion. The result is a single PDF page that contains a header image and a caption. To reuse the same template on additional pages, see the next example.

## Reusing a Template Across Multiple Pages

The primary benefit of a template is that you can draw it on multiple pages. The following example creates one template and draws it on two pages of the same document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTemplate, PdfStandardFont, PdfBrush, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

// Create a new PDF document.
const document: PdfDocument = new PdfDocument();
// Create a single template.
const template: PdfTemplate = new PdfTemplate({ x: 0, y: 0, width: 400, height: 200 });
const font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 20, PdfFontStyle.regular);
template.graphics.drawString('Created by Syncfusion PDF', font, { x: 10, y: 20, width: 380, height: 160 }, new PdfBrush(0, 0, 255));

// Draw the same template on the first page.
const page1: PdfPage = document.addPage();
page1.graphics.drawTemplate(template, { x: 0, y: 0, width: 400, height: 200 });

// Draw the same template on a second page.
const page2: PdfPage = document.addPage();
page2.graphics.drawTemplate(template, { x: 0, y: 0, width: 400, height: 200 });

document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document.
const document = new ej.pdf.PdfDocument();
// Create a single template.
const template = new ej.pdf.PdfTemplate({ x: 0, y: 0, width: 400, height: 200 });
const font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 20, ej.pdf.PdfFontStyle.regular);
template.graphics.drawString('Created by Syncfusion PDF', font, { x: 10, y: 20, width: 380, height: 160 }, new ej.pdf.PdfBrush(0, 0, 255));

// Draw the same template on the first page.
const page1 = document.addPage();
page1.graphics.drawTemplate(template, { x: 0, y: 0, width: 400, height: 200 });

// Draw the same template on a second page.
const page2 = document.addPage();
page2.graphics.drawTemplate(template, { x: 0, y: 0, width: 400, height: 200 });

document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}

## API Reference

### PdfTemplate

The `PdfTemplate` class represents a reusable drawing surface.

| Property | Type | Description |
|----------|------|-------------|
| `width` | `number` | Width of the template in PDF points. |
| `height` | `number` | Height of the template in PDF points. |
| `graphics` | `PdfGraphics` | Graphics surface used to draw content into the template. |

| Constructor | Description |
|-------------|-------------|
| `new PdfTemplate(options)` | Creates a new template. The `options` object accepts `x`, `y`, `width`, and `height`, all in PDF points. |

### PdfBrush

`PdfBrush` defines the color used to fill drawn content such as text.

| Constructor | Description |
|-------------|-------------|
| `new PdfBrush(r, g, b)` | Creates a brush from RGB values. Each channel accepts an integer from `0` to `255`. |

### embedFont

`document.embedFont(family, size, style)` embeds a standard font in the document and returns a `PdfStandardFont` instance that can be passed to drawing methods such as `drawString`.

| Parameter | Type | Description |
|-----------|------|-------------|
| `family` | `PdfFontFamily` | The standard font family, for example `PdfFontFamily.helvetica`. |
| `size` | `number` | The font size in points. |
| `style` | `PdfFontStyle` | The font style. Use `PdfFontStyle.regular`, `PdfFontStyle.bold`, `PdfFontStyle.italic`, or a bitwise combination such as `PdfFontStyle.bold | PdfFontStyle.italic`. |

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/fluent2/pdf/default)