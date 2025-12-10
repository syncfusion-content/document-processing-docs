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
{% highlight c# tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfList, PdfStandardFont, PdfBrush, PdfStringFormat, PdfPen, PdfNumberStyle, PdfOrderedList, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load an existing document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Assign the array of string items
let products: string[] = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Create a new font for list
let itemFont: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10);
// Create a new brush for list
let itemBrush: PdfBrush = new PdfBrush({ r: 0, g: 255, b: 255 });
// Create a new format for list
let itemFormat: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.center);
// Create a new pen for list
let itemPen: PdfPen = new PdfPen({ r: 0, g: 255, b: 0 }, 1);
// Initialize a PdfNumberStyle for items
let itemStyle: PdfNumberStyle = PdfNumberStyle.numeric;
// Initialize a delimiter for the items
let itemDelimiter: string = ')';
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of ordered list and pass the item collection and optional settings
let list: PdfOrderedList = new PdfOrderedList(items, {
    font: itemFont,
    format: itemFormat,
    pen: itemPen,
    brush: itemBrush,
    indent: 30,
    textIndent: 50,
    style: itemStyle,
    delimiter: itemDelimiter
});
// Draw the ordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}


// Load an existing document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Assign the array of string items
var products = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Create a new font for list
var itemFont = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 10);
// Create a new brush for list
var itemBrush = new ej.pdf.PdfBrush({ r: 0, g: 255, b: 255 });
// Create a new format for list
var itemFormat = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.center);
// Create a new pen for list
var itemPen = new ej.pdf.PdfPen({ r: 0, g: 255, b: 0 }, 1);
// Initialize a PdfNumberStyle for items
var itemStyle = ej.pdf.PdfNumberStyle.numeric;
// Initialize a delimiter for the items
var itemDelimiter = ')';
// Add the items to list item collection by passing the array of products
var items = new ej.pdf.PdfListItemCollection(products);
// Initialize the instance of ordered list and pass the item collection and optional settings
var list = new ej.pdf.PdfOrderedList(items, {
    font: itemFont,
    format: itemFormat,
    pen: itemPen,
    brush: itemBrush,
    indent: 30,
    textIndent: 50,
    style: itemStyle,
    delimiter: itemDelimiter
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
{% highlight c# tabtitle="TypeScript" %}

import { PdfDocument, PdfPage, PdfList, PdfStandardFont, PdfBrush, PdfStringFormat, PdfPen, PdfNumberStyle, PdfUnorderedListStyle, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Define the items in the unordered list
let products: string[] = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Create a new font for list
let itemFont: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10);
// Create a new brush for list
let itemBrush: PdfBrush = new PdfBrush({ r: 0, g: 255, b: 255 });
// Create a new format for list
let itemFormat: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.center);
// Create a new pen for list
let itemPen: PdfPen = new PdfPen({ r: 0, g: 255, b: 0 }, 1);
// Initialise a PdfUnorderedListStyle
let itemStyle: PdfUnorderedListStyle = PdfUnorderedListStyle.square;
// Initialize a delimiter for the items
let itemDelimiter: string = ')';
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    font: itemFont,
    format: itemFormat,
    pen: itemPen,
    brush: itemBrush,
    indent: 30,
    textIndent: 50,
    style: itemStyle,
    delimiter: itemDelimiter
});
// Draw the unordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load the existing document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Define the items in the unordered list
var products = ['Excel', 'Power', 'Point', 'Word', 'PDF'];
// Create a new font for list
var itemFont = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.helvetica, 10);
// Create a new brush for list
var itemBrush = new ej.pdf.PdfBrush({ r: 0, g: 255, b: 255 });
// Create a new format for list
var itemFormat = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.center);
// Create a new pen for list
var itemPen = new ej.pdf.PdfPen({ r: 0, g: 255, b: 0 }, 1);
// Initialise a PdfUnorderedListStyle
var itemStyle = ej.pdf.PdfUnorderedListStyle.square;
// Initialize a delimiter for the items
var itemDelimiter = ')';
// Add the items to list item collection by passing the array of products
var items = new ej.pdf.PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
var list = new ej.pdf.PdfUnorderedList(items, {
    font: itemFont,
    format: itemFormat,
    pen: itemPen,
    brush: itemBrush,
    indent: 30,
    textIndent: 50,
    style: itemStyle,
    delimiter: itemDelimiter
});
// Draw the unordered list on the page
list.draw(page, { x: 0, y: 20, width: 500, height: 700 });
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}