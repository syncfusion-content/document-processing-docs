---
title: Lists in JavaScript PDF library | Syncfusion
description: This section explains how to work with lists in a PDF document using the JavaScript PDF library to display and manage items in a structured format
platform: document-processing
control: PDF
documentation: UG
---

# Lists in JavaScript PDF library

The PDF allows you list the content in ordered and unordered list. The ordered list can be number or alphabets and the unordered list can be bullets, circles, and images.

## Adding an ordered list

This example demonstrates how to create an ordered list in a PDF document using the `PdfOrderedList` class. Ordered lists allow you to present items in a structured, sequential format, typically numbered or lettered, enhancing readability and organization within the PDF content.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfListItemCollection, PdfBrush, PdfStringFormat, PdfPen, PdfNumberStyle, PdfOrderedList, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load an existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Assign the array of string items
let products: string[] = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of ordered list and pass the item collection and optional settings
let list: PdfOrderedList = new PdfOrderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular),
    format: new PdfStringFormat(PdfTextAlignment.center),
    pen: new PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: PdfNumberStyle.numeric,
    delimiter:  ')'
});
// Draw the ordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load an existing document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Assign the array of string items
var products = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Initialize the instance of ordered list and pass the item collection and optional settings
var list: PdfOrderedList = new PdfOrderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular),
    format: new ej.pdf.PdfStringFormat(PdfTextAlignment.center),
    pen: new ej.pdf.PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new ej.pdf.PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: ej.pdf.PdfNumberStyle.numeric,
    delimiter:  ')'
});
// Draw the ordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding an unordered list

This example demonstrates how to create an unordered list in a PDF document using the `PdfUnorderedList` class. Unordered lists display items with bullet points instead of numbers, making them ideal for presenting non-sequential information in a clear and organized manner.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfList, PdfStandardFont, PdfBrush, PdfStringFormat, PdfPen, PdfNumberStyle, PdfUnorderedListStyle, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Define the items in the unordered list
let products: string[] = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular),
    format: new PdfStringFormat(PdfTextAlignment.center),
    pen: new PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: PdfNumberStyle.numeric,
    delimiter:  ')'
});
// Draw the unordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Load the existing document
var document = new ej.pdf.PdfDocument(data);
// Access the first page
var page = document.getPage(0);
// Define the items in the unordered list
var products = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Initialize the instance of the unordered list and pass the list item collection and settings
var list = new ej.pdf.PdfUnorderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular),
    format: new ej.pdf.PdfStringFormat(PdfTextAlignment.center),
    pen: new ej.pdf.PdfPen({ r: 0, g: 255, b: 0 }, 1),
    brush: new ej.pdf.PdfBrush({ r: 0, g: 255, b: 255 }),
    indent: 30,
    textIndent: 50,
    style: ej.pdf.PdfNumberStyle.numeric,
    delimiter:  ')'
});
// Draw the unordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}