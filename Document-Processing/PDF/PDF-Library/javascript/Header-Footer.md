---
title: Header and footer support in JavaScript PDF Library | Syncfusion
description: This section explains how to create and apply header and footer templates with automatic fields in the JavaScript PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# Header and footer support in JavaScript PDF Library

Header and footer support lets you add reusable content to every page in a PDF document. It reserves layout space to prevent overlap with page content.

The feature supports static elements such as text, images, shapes (including lines and rectangles), and dynamic automatic fields such as page numbers and date/time.

## Adding a header and footer template to the PDF document

Header and footer templates in a PDF document are created using the `PdfPageTemplateElement` class and assigned through the `template` property of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class. These templates help in maintaining a consistent layout across all pages by allowing the addition of elements such as images, text, shapes, and automatic fields. Users can also control the appearance of these templates by applying them to all pages or specifically to odd or even pages. 

This sample demonstrates how to create header and footer templates with static elements and a page-number composite field.

To create the templates:

1. Create a new `PdfDocument` and add at least one page.
2. Build the header and footer `PdfPageTemplateElement` instances.
3. Assign the templates to the document using `document.template.top` and `document.template.bottom`.
4. Save the document and open the generated PDF in any viewer (Adobe Acrobat, browser, and so on).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfPageTemplateElement, PdfStandardFont, PdfFontFamily, PdfBrush, PdfPen, PdfBitmap, PdfPageNumberField, PdfPageCountField, PdfCompositeField, PdfVerticalAlignment, PdfStringFormat, PdfTextAlignment, PdfFontStyle } from '@syncfusion/ej2-pdf';  
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Add a page so the template has a page to render on 
const page: PdfPage = document.addPage(); 
// Create header template with width and height 
const header: PdfPageTemplateElement = new PdfPageTemplateElement({  width: 515, height: 50 }); 
// Create a bold title font for header 
const titleFont: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 16, PdfFontStyle.bold); 
// Create center-aligned string format 
const center: PdfStringFormat = new PdfStringFormat(); 
center.alignment = PdfTextAlignment.center; 
center.lineAlignment = PdfVerticalAlignment.middle; 
// Draw logo image on the right side of header 
header.graphics.drawImage(new PdfBitmap('logo.png'), { x: 515 - 130, y: 5, width: 110, height: 35 }); 
// Draw title text in the center of header 
header.graphics.drawString('Syncfusion Essential PDF', titleFont, { x: 0, y: 0, width: 515, height: 50 }, new PdfBrush({ r: 44, g: 71, b: 120 }), center); 
// Draw top border line of header 
header.graphics.drawLine(new PdfPen({ r: 0, g: 0, b: 139 }, 2), { x: 0, y: 0 }, { x: 515, y: 0 }); 
// Draw bottom border line of header 
header.graphics.drawLine(new PdfPen({ r: 0, g: 0, b: 139 }, 2), { x: 0, y: 50 }, { x: 515, y: 50 }); 
// Assign header template to top of document 
document.template.top = { template: header }; 
// Create footer font 
const footerFont: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.bold); 
// Create footer template 
const footer: PdfPageTemplateElement = new PdfPageTemplateElement({  width: 515, height: 50 }); 
// Draw copyright text in footer center 
footer.graphics.drawString('@Copyright 2015', footerFont, { x: 0, y: 18, width: 515, height: 20 }, new PdfBrush({ r: 128, g: 128, b: 128 }), center); 
// Create page number field 
const pageNumber: PdfPageNumberField = new PdfPageNumberField({ font: footerFont }); 
// Create page count field 
const pageCount: PdfPageCountField  = new PdfPageCountField({ font: footerFont }); 
// Create composite field 
const composite: PdfCompositeField = new PdfCompositeField({font: footerFont, brush: new PdfBrush({ r: 128, g: 128, b: 128 }), 
pattern: 'Page {0} of {1}', 
automaticFields: [pageNumber, pageCount]}); 
// Draw composite field on right side of footer 
composite.draw(footer.graphics, { x: 415, y: 20 }); 
// Assign footer template to document bottom 
document.template.bottom = { template: footer }; 
// Save the document 
document.save('Output.pdf'); 
// Destroy the document 
document.destroy(); 

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Add a page so the template has a page to render on 
var page = document.addPage(); 
// Create header template with width and height 
var header = new ej.pdf.PdfPageTemplateElement({  width: 515, height: 50 }); 
// Create a bold title font for header 
var titleFont = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 16, ej.pdf.PdfFontStyle.bold); 
// Create center-aligned string format 
var center = new ej.pdf.PdfStringFormat(); 
center.alignment = ej.pdf.PdfTextAlignment.center; 
center.lineAlignment = ej.pdf.PdfVerticalAlignment.middle; 
// Draw logo image on the right side of header 
header.graphics.drawImage(new ej.pdf.PdfBitmap('logo.png'), { x: 515 - 130, y: 5, width: 110, height: 35 }); 
// Draw title text in the center of header 
header.graphics.drawString('Syncfusion Essential PDF', titleFont, { x: 0, y: 0, width: 515, height: 50 }, new ej.pdf.PdfBrush({ r: 44, g: 71, b: 120 }), center); 
// Draw top border line of header 
header.graphics.drawLine(new ej.pdf.PdfPen({ r: 0, g: 0, b: 139 }, 2), { x: 0, y: 0 }, { x: 515, y: 0 }); 
// Draw bottom border line of header 
header.graphics.drawLine(new ej.pdf.PdfPen({ r: 0, g: 0, b: 139 }, 2), { x: 0, y: 50 }, { x: 515, y: 50 }); 
// Assign header template to top of document 
document.template.top = { template: header }; 
// Create footer font 
var footerFont = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.bold); 
// Create footer template 
var footer = new ej.pdf.PdfPageTemplateElement({  width: 515, height: 50 }); 
// Draw copyright text in footer center 
footer.graphics.drawString('@Copyright 2015', footerFont, { x: 0, y: 18, width: 515, height: 20 }, new ej.pdf.PdfBrush({ r: 128, g: 128, b: 128 }), center); 
// Create page number field 
var pageNumber = new ej.pdf.PdfPageNumberField({ font: footerFont }); 
// Create page count field 
var pageCount = new ej.pdf.PdfPageCountField({ font: footerFont }); 
// Create composite field 
var composite = new ej.pdf.PdfCompositeField({font: footerFont, brush: new ej.pdf.PdfBrush({ r: 128, g: 128, b: 128 }), 
pattern: 'Page {0} of {1}', 
automaticFields: [pageNumber, pageCount]}); 
// Draw composite field on right side of footer 
composite.draw(footer.graphics, { x: 415, y: 20 }); 
// Assign footer template to document bottom 
document.template.bottom = { template: footer }; 
// Save the document 
document.save('Output.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

## Applying different templates to odd and even pages

The `template` property of the `PdfDocument` class exposes `oddTop`, `oddBottom`, `evenTop`, and `evenBottom` so you can apply different headers and footers to odd and even pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfPageTemplateElement, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfVerticalAlignment } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Add pages to the document 
const page1: PdfPage = document.addPage(); 
const page2: PdfPage = document.addPage(); 
// Create standard font for header text 
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create center-aligned string format 
const center: PdfStringFormat = new PdfStringFormat(); 
center.alignment = PdfTextAlignment.center; 
center.lineAlignment = PdfVerticalAlignment.middle; 
// Create odd page header 
const oddHeader: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 515, height: 50 }); 
oddHeader.graphics.drawString('Odd Page Header', font, { x: 0, y: 0, width: 515, height: 50 }, new PdfBrush({ r: 0, g: 0, b: 0 }), center); 
// Create even page header 
const evenHeader: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 515, height: 50 }); 
evenHeader.graphics.drawString('Even Page Header', font, { x: 0, y: 0, width: 515, height: 50 }, new PdfBrush({ r: 0, g: 0, b: 0 }), center); 
// Assign odd and even templates 
document.template.oddTop = { template: oddHeader }; 
document.template.evenTop = { template: evenHeader }; 
// Save the document 
document.save('odd-even.pdf'); 
// Destroy the document 
document.destroy(); 

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Add pages to the document 
var page1 = document.addPage(); 
var page2 = document.addPage(); 
// Create standard font for header text 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create center-aligned string format 
var center = new ej.pdf.PdfStringFormat(); 
center.alignment = ej.pdf.PdfTextAlignment.center; 
center.lineAlignment = ej.pdf.PdfVerticalAlignment.middle; 
// Create odd page header 
var oddHeader = new ej.pdf.PdfPageTemplateElement({ width: 515, height: 50 }); 
oddHeader.graphics.drawString('Odd Page Header', font, { x: 0, y: 0, width: 515, height: 50 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }), center); 
// Create even page header 
var evenHeader = new ej.pdf.PdfPageTemplateElement({ width: 515, height: 50 }); 
evenHeader.graphics.drawString('Even Page Header', font, { x: 0, y: 0, width: 515, height: 50 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }), center); 
// Assign odd and even templates 
document.template.oddTop = { template: oddHeader }; 
document.template.evenTop = { template: evenHeader }; 
// Save the document 
document.save('odd-even.pdf'); 
// Destroy the document 
document.destroy(); 

{% endhighlight %}
{% endtabs %}

## Applying a header and footer template to a PDF section

Header and footer templates can also be assigned through the `template` property of the [PdfSection](https://ej2.syncfusion.com/documentation/api/pdf/pdfsection) class. The section's `template` is applied only to the pages within that specific section rather than across the entire document.

Use document-level templates when every page in the document should share the same header or footer. Use section-level templates when different parts of the document need their own header or footer (for example, a cover page section versus a content section).

The `alignment` option on a section template uses the `PdfTemplateHorizontalAlignment` enum, which accepts `left`, `center`, and `right` to position the template horizontally within the page.

This sample demonstrates how to apply templates to a section.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfPageTemplateElement, PdfStandardFont, PdfFontFamily, PdfBrush, PdfPen, PdfSection, PdfTemplateHorizontalAlignment } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Create a standard font for text rendering 
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create a brush for drawing text in black color 
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); 
// Add a new section to the document 
const section: PdfSection = document.addSection(); 
// Add a page inside the created section 
section.addPage(); 
// Create a header template with specified size 
const sectionHeader: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 500, height: 50 }); 
// Draw header text inside the section header template 
sectionHeader.graphics.drawString('Section Header', font, { x: 10, y: 10, width: 150, height: 30 }, brush); 
// Assign the header template to the section (applies only to section pages) 
section.template.top = {template: sectionHeader, alignment: PdfTemplateHorizontalAlignment.center}; 
// Create a footer template with specified size 
const sectionFooter: PdfPageTemplateElement = new PdfPageTemplateElement({ width: 500, height: 50 }); 
// Draw footer text inside the section footer template 
sectionFooter.graphics.drawString('Section Footer', font, { x: 10, y: 10, width: 150, height: 30 }, brush); 
// Assign the footer template to the section (applies only to section pages) 
section.template.bottom = {template: sectionFooter, alignment: PdfTemplateHorizontalAlignment.center}; 
// Save the document 
document.save('output.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Create a standard font for text rendering 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create a brush for drawing text in black color 
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }); 
// Add a new section to the document 
var section = document.addSection(); 
// Add a page inside the created section 
section.addPage(); 
// Create a header template with specified size 
var sectionHeader = new ej.pdf.PdfPageTemplateElement({ width: 500, height: 50 }); 
// Draw header text inside the section header template 
sectionHeader.graphics.drawString('Section Header', font, { x: 10, y: 10, width: 150, height: 30 }, brush); 
// Assign the header template to the section (applies only to section pages) 
section.template.top = {template: sectionHeader, alignment: ej.pdf.PdfTemplateHorizontalAlignment.center}; 
// Create a footer template with specified size 
var sectionFooter = new ej.pdf.PdfPageTemplateElement({ width: 500, height: 50 }); 
// Draw footer text inside the section footer template 
sectionFooter.graphics.drawString('Section Footer', font, { x: 10, y: 10, width: 150, height: 30 }, brush); 
// Assign the footer template to the section (applies only to section pages) 
section.template.bottom = {template: sectionFooter, alignment: ej.pdf.PdfTemplateHorizontalAlignment.center}; 
// Save the document 
document.save('output.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

## Types of automatic fields

Automatic fields are dynamic elements evaluated during rendering. They provide page-aware and document-level information.

| Field Type              | Description                                  |
|-------------------------|----------------------------------------------|
| Page Number             | Displays the current page number             |
| Page Count              | Displays the total number of pages           |
| Section Page Number     | Displays the page number within a section    |
| Section Page Count      | Displays the total pages in a section        |
| Section Number          | Displays the section number                  |
| Date and Time           | Displays the current system date and time    |
| Creation Date           | Displays the document creation date          |
| Document Author         | Displays the document author metadata        |
| Destination Page Number | Displays the page number of a target page    |
| Composite Field         | Combines multiple fields into one formatted output using a pattern like "Page {0} of {1}" (where {0} = first field value and {1} = second field value, e.g., "Page 1 of 10")|

## Drawing automatic fields on a PDF page

Automatic fields can be drawn directly on a PDF page or within templates. They are resolved dynamically and provide accurate values for each page.

### Page Number Field

Displays the current page number dynamically on each page of the PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfPageNumberField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Add a new page to the document 
const page: PdfPage = document.addPage(); 
// Create a standard font for rendering text 
const font: PdfStandardFont  = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.right); 
// Create a page number field with font, color, alignment and numeric style 
const pageNumber: PdfPageNumberField = new PdfPageNumberField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: PdfNumberStyle.numeric 
}); 
// Draw the page number field on the page at the specified position 
pageNumber.draw(page.graphics, { x: 250, y: 750 }); 
// Save the document 
document.save('page-number.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Add a new page to the document 
var page = document.addPage(); 
// Create a standard font for rendering text 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
var format = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.right); 
// Create a page number field with font, color, alignment and numeric style 
var pageNumber = new ej.pdf.PdfPageNumberField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: ej.pdf.PdfNumberStyle.numeric 
}); 
// Draw the page number field on the page at the specified position 
pageNumber.draw(page.graphics, { x: 250, y: 750 }); 
// Save the document 
document.save('page-number.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

### Page Count Field 

Displays the total number of pages dynamically in a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfPageCountField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Add a new page to the document 
const page: PdfPage = document.addPage(); 
// Create a standard font for rendering text 
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.right); 
// Create a page count field with font, color, alignment and numeric style 
const pageCount: PdfPageCountField = new PdfPageCountField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: PdfNumberStyle.numeric 
}); 
// Draw the page count field on the page at the specified position 
pageCount.draw(page.graphics, { x: 250, y: 730 }); 
// Save the document 
document.save('page-count.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Add a new page to the document 
var page = document.addPage(); 
// Create a standard font for rendering text 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
var format = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.right); 
// Create a page count field with font, color, alignment and numeric style 
var pageCount = new ej.pdf.PdfPageCountField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: ej.pdf.PdfNumberStyle.numeric 
}); 
// Draw the page count field on the page at the specified position 
pageCount.draw(page.graphics, { x: 250, y: 730 }); 
// Save the document 
document.save('page-count.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

### Section Page Number Field 

Displays the page number within the current section dynamically in a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfSection, PdfSectionPageNumberField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Add a new section to the document 
const section: PdfSection = document.addSection(); 
// Add a new page to the section 
const page: PdfPage = section.addPage(); 
// Create a standard font for rendering text 
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.right); 
// Create a section page number field with font, color, alignment and numeric style 
const sectionPageNumber: PdfSectionPageNumberField = new PdfSectionPageNumberField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: PdfNumberStyle.numeric 
}); 
// Draw the section page number field on the page at the specified position 
sectionPageNumber.draw(page.graphics, { x: 200, y: 680 }); 
// Save the document 
document.save('section-page-number.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Add a new section to the document 
var section = document.addSection(); 
// Add a new page to the section 
var page = section.addPage(); 
// Create a standard font for rendering text 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
var format = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.right); 
// Create a section page number field with font, color, alignment and numeric style 
var sectionPageNumber = new ej.pdf.PdfSectionPageNumberField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: ej.pdf.PdfNumberStyle.numeric 
}); 
// Draw the section page number field on the page at the specified position 
sectionPageNumber.draw(page.graphics, { x: 200, y: 680 }); 
// Save the document 
document.save('section-page-number.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

### Section Page Count Field 

Displays the total number of pages dynamically within the current section of a PDF document. 

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfSection, PdfSectionPageCountField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Add a new section to the document 
const section: PdfSection = document.addSection(); 
// Add a new page to the section 
const page: PdfPage = section.addPage(); 
// Create a standard font for rendering text 
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create a brush to define text color 
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.right); 
// Create a section page count field with font, color, alignment and numeric style 
const sectionPageCount: PdfSectionPageCountField = new PdfSectionPageCountField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: PdfNumberStyle.numeric 
}); 
// Draw the section page count field on the page at the specified position 
sectionPageCount.draw(page.graphics, { x: 200, y: 660 }); 
// Save the document 
document.save('section-page-count.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Add a new section to the document 
var section = document.addSection(); 
// Add a new page to the section 
var page = section.addPage(); 
// Create a standard font for rendering text 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
var format = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.right); 
// Create a section page count field with font, color, alignment and numeric style 
var sectionPageCount = new ej.pdf.PdfSectionPageCountField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: ej.pdf.PdfNumberStyle.numeric 
}); 
// Draw the section page count field on the page at the specified position 
sectionPageCount.draw(page.graphics, { x: 200, y: 660 }); 
// Save the document 
document.save('section-page-count.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

### Section Number Field 

Displays the section index dynamically for the current page within a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfSection, PdfSectionNumberField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Add a new section to the document 
const section: PdfSection = document.addSection(); 
// Add a new page to the section 
const page: PdfPage = section.addPage(); 
// Create a standard font for rendering text 
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create a brush to define text color 
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.right); 
// Create a section number field with font, color, alignment and numeric style 
const sectionNumber: PdfSectionNumberField = new PdfSectionNumberField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: PdfNumberStyle.numeric 
}); 
// Draw the section number field on the page at the specified position 
sectionNumber.draw(page.graphics, { x: 200, y: 700 }); 
// Save the document 
document.save('section-number.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Add a new section to the document 
var section = document.addSection(); 
// Add a new page to the section 
var page = section.addPage(); 
// Create a standard font for rendering text 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create a brush to define text color 
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
var format = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.right); 
// Create a section number field with font, color, alignment and numeric style 
var sectionNumber = new ej.pdf.PdfSectionNumberField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: ej.pdf.PdfNumberStyle.numeric 
}); 
// Draw the section number field on the page at the specified position 
sectionNumber.draw(page.graphics, { x: 200, y: 700 }); 
// Save the document 
document.save('section-number.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

### Date and Time Field 

Displays the current system date and time dynamically in a PDF document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfDateTimeField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Add a new page to the document 
const page: PdfPage = document.addPage(); 
// Create a standard font for rendering text 
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format for text alignment 
const format: PdfStringFormat = new PdfStringFormat(); 
// Create a date and time field with font, color, and alignment 
const dateTime: PdfDateTimeField = new PdfDateTimeField({ 
  font: font, 
  brush: brush, 
  stringFormat: format 
}); 
// Draw the date and time field on the page at the specified position 
dateTime.draw(page.graphics, { x: 200, y: 640 }); 
// Save the document 
document.save('date-time.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Add a new page to the document 
var page = document.addPage(); 
// Create a standard font for rendering text 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format for text alignment 
var format = new ej.pdf.PdfStringFormat(); 
// Create a date and time field with font, color, and alignment 
var dateTime = new ej.pdf.PdfDateTimeField({ 
  font: font, 
  brush: brush, 
  stringFormat: format 
}); 
// Draw the date and time field on the page at the specified position 
dateTime.draw(page.graphics, { x: 200, y: 640 }); 
// Save the document 
document.save('date-time.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

### Creation Date Field 

Displays the document creation date dynamically based on the document metadata. The value is read from the `creationDate` property set through `setDocumentInformation`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfCreationDateField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Set document creation date in metadata 
document.setDocumentInformation({ creationDate: new Date() }); 
// Add a new page to the document 
const page: PdfPage = document.addPage(); 
// Create a standard font for rendering text 
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format for text alignment 
const format: PdfStringFormat = new PdfStringFormat(); 
// Create a creation date field with font, color, alignment, and date format 
const creationDate: PdfCreationDateField = new PdfCreationDateField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  dateFormat: 'yyyy/MM/dd' 
}); 
// Draw the creation date field on the page at the specified position 
creationDate.draw(page.graphics, { x: 200, y: 620 }); 
// Save the document 
document.save('creation-date.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Set document creation date in metadata 
document.setDocumentInformation({ creationDate: new Date() }); 
// Add a new page to the document 
var page = document.addPage(); 
// Create a standard font for rendering text 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format for text alignment 
var format = new ej.pdf.PdfStringFormat(); 
// Create a creation date field with font, color, alignment, and date format 
var creationDate = new ej.pdf.PdfCreationDateField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  dateFormat: 'yyyy/MM/dd' 
}); 
// Draw the creation date field on the page at the specified position 
creationDate.draw(page.graphics, { x: 200, y: 620 }); 
// Save the document 
document.save('creation-date.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

### Document Author Field

Displays the document author metadata dynamically from the PDF document properties. The value is read from the `author` property set through `setDocumentInformation`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfDocumentAuthorField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Set document author in metadata
document.setDocumentInformation({ author: 'Syncfusion' });
// Add a new page to the document
const page: PdfPage = document.addPage();
// Create a standard font for rendering text
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12);
// Create a brush to define text color (black)
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 });
// Create a string format for text alignment
const format: PdfStringFormat = new PdfStringFormat();
// Create a document author field with font, color, and alignment
const authorField: PdfDocumentAuthorField = new PdfDocumentAuthorField({
  font: font,
  brush: brush,
  stringFormat: format
});
// Draw the document author field on the page at the specified position
authorField.draw(page.graphics, { x: 200, y: 580 });
// Save the document
document.save('author.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Set document author in metadata
document.setDocumentInformation({ author: 'Syncfusion' });
// Add a new page to the document
var page = document.addPage();
// Create a standard font for rendering text
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12);
// Create a brush to define text color (black)
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 });
// Create a string format for text alignment
var format = new ej.pdf.PdfStringFormat();
// Create a document author field with font, color, and alignment
var authorField = new ej.pdf.PdfDocumentAuthorField({
  font: font,
  brush: brush,
  stringFormat: format
});
// Draw the document author field on the page at the specified position
authorField.draw(page.graphics, { x: 200, y: 580 });
// Save the document
document.save('author.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Destination Page Number Field 

Displays the page number of a specified destination page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfDestinationPageNumberField, PdfStandardFont, PdfFontFamily, PdfBrush, PdfStringFormat, PdfTextAlignment, PdfNumberStyle } from '@syncfusion/ej2-pdf'; 
 
// Create a new PDF document 
const document: PdfDocument = new PdfDocument(); 
// Add pages to the document 
const page1: PdfPage = document.addPage(); 
const page2: PdfPage = document.addPage(); 
// Create a standard font for rendering text 
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.right); 
// Create a destination page number field with font, color, alignment, number style, and target page 
const destination: PdfDestinationPageNumberField = new PdfDestinationPageNumberField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: PdfNumberStyle.numeric, 
  page: page2 
}); 
// Draw the destination page number field on the first page 
destination.draw(page1.graphics, { x: 200, y: 600 }); 
// Save the document 
document.save('destination-page.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document 
var document = new ej.pdf.PdfDocument(); 
// Add pages to the document 
var page1 = document.addPage(); 
var page2 = document.addPage(); 
// Create a standard font for rendering text 
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12); 
// Create a brush to define text color (black) 
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }); 
// Create a string format to align text to the right 
var format = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.right); 
// Create a destination page number field with font, color, alignment, number style, and target page 
var destination = new ej.pdf.PdfDestinationPageNumberField({ 
  font: font, 
  brush: brush, 
  stringFormat: format, 
  numberStyle: ej.pdf.PdfNumberStyle.numeric, 
  page: page2 
}); 
// Draw the destination page number field on the first page 
destination.draw(page1.graphics, { x: 200, y: 600 }); 
// Save the document 
document.save('destination-page.pdf'); 
// Destroy the document 
document.destroy();

{% endhighlight %}
{% endtabs %}

## Composite Field

A `PdfCompositeField` is a pattern that combines other automatic fields into a single formatted output. The `automaticFields` array supplies the fields in the order they should appear, and the `pattern` string uses `{0}`, `{1}`, and so on as placeholders. The first field value replaces `{0}`, the second replaces `{1}`, and so on. For example, with `pattern: 'Page {0} of {1}'` and `automaticFields: [pageNumber, pageCount]`, the rendered output is `Page 1 of 10`.

The first sample in this document also demonstrates a `PdfCompositeField` in the footer — see [Adding a header and footer template to the PDF document](#adding-a-header-and-footer-template-to-the-pdf-document).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfPageNumberField, PdfPageCountField, PdfCompositeField, PdfStandardFont, PdfFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
const document: PdfDocument = new PdfDocument();
// Add a new page to the document
const page: PdfPage = document.addPage();
// Create a standard font for rendering text
const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 12);
// Create a brush to define text color (black)
const brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 0 });
// Create a page number field with font and color
const pageNumber: PdfPageNumberField = new PdfPageNumberField({
  font: font,
  brush: brush
});
// Create a page count field with font and color
const pageCount: PdfPageCountField = new PdfPageCountField({
  font: font,
  brush: brush
});
// Create a composite field combining page number and page count
const composite: PdfCompositeField = new PdfCompositeField({
  font: font,
  brush: brush,
  pattern: 'Page {0} of {1}',
  automaticFields: [pageNumber, pageCount]
});
// Draw the composite field on the page at the specified position
composite.draw(page.graphics, { x: 200, y: 560 });
// Save the document
document.save('composite.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a new page to the document
var page = document.addPage();
// Create a standard font for rendering text
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 12);
// Create a brush to define text color (black)
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 });
// Create a page number field with font and color
var pageNumber = new ej.pdf.PdfPageNumberField({
  font: font,
  brush: brush
});
// Create a page count field with font and color
var pageCount = new ej.pdf.PdfPageCountField({
  font: font,
  brush: brush
});
// Create a composite field combining page number and page count
var composite = new ej.pdf.PdfCompositeField({
  font: font,
  brush: brush,
  pattern: 'Page {0} of {1}',
  automaticFields: [pageNumber, pageCount]
});
// Draw the composite field on the page at the specified position
composite.draw(page.graphics, { x: 200, y: 560 });
// Save the document
document.save('composite.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)