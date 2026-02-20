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
import { PdfDocument, PdfPage, PdfListItemCollection, PdfBrush, PdfStringFormat, PdfPen, PdfNumberStyle, PdfOrderedList, PdfListItemCollection, PdfFontFamily, PdfFontStyle, PdfTextAlignment } from '@syncfusion/ej2-pdf';

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
import { PdfDocument, PdfPage, PdfBrush, PdfStringFormat, PdfFontFamily, PdfUnorderedList, PdfFontStyle, PdfPen, PdfUnorderedListStyle, PdfListItemCollection } from '@syncfusion/ej2-pdf';

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
    style: PdfUnorderedListStyle.disk,
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
    style: ej.pdf.PdfUnorderedListStyle.disk,
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

## Customize list markers

This example demonstrates how to customize the marker style of an unordered list in a PDF document using the `PdfUnorderedList` class. The marker defines the symbol that appears before each list item. You can choose from four predefined marker styles: disk, square, asterisk, and circle. These options allow you to visually distinguish different list types or emphasize specific content, enhancing readability and structure within the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfUnorderedList, PdfUnorderedListStyle, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Define the items in the unordered list
let products: string[] = ['PDF', 'XlsIO', 'DocIO', 'PPT'];
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    style: PdfUnorderedListStyle.disk
});
// Draw the unordered list on the page
list.draw(page, {x: 50, y: 50});
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
var products = ['PDF', 'XlsIO', 'DocIO', 'PPT'];
// Add the items to list item collection by passing the array of products
var items = new ej.pdf.PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
var list = new ej.pdf.PdfUnorderedList(items, {
    style: ej.pdf.PdfUnorderedListStyle.disk
});
// Draw the unordered list on the page
list.draw(page, {x: 50, y: 50});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Applying custom fonts to list items

This example shows how to apply custom fonts to list items in a PDF by using embedded fonts through `document.embedFont()`. The list supports Standard, TrueType, and CJK fonts, allowing accurate rendering of multilingual text. By selecting an embedded font and applying it to the list, you can control the style and appearance of list content with better consistency across platforms.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfUnorderedList, PdfListItemCollection, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Define the items in the unordered list
let products: string[] = ['PDF', 'XlsIO', 'DocIO', 'PPT'];
// Add the items to list item collection by passing the array of products
let items: PdfListItemCollection = new PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
let list: PdfUnorderedList = new PdfUnorderedList(items, {
    font: document.embedFont(PdfFontFamily.helvetica, 36, PdfFontStyle.regular)
});
// Draw the unordered list on the page
list.draw(page, {x: 50, y: 50});
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
var products = ['PDF', 'XlsIO', 'DocIO', 'PPT'];
// Add the items to list item collection by passing the array of products
var items = new ej.pdf.PdfListItemCollection(products);
// Initialize the instance of the unordered list and pass the list item collection and settings
var list = new ej.pdf.PdfUnorderedList(items, {
    font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 36, ej.pdf.PdfFontStyle.regular)
});
// Draw the unordered list on the page
list.draw(page, {x: 50, y: 50});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Creating nested list structures

This example demonstrates how to create nested list structures in a PDF document using the `PdfUnorderedList` and `PdfOrderedList` classes. Nested lists allow you to organize information hierarchically by placing one list inside another. This is useful when representing multi‑level data, outlining topics with sub points, or grouping related items clearly.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfOrderedList, PdfUnorderedList, PdfUnorderedListStyle, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Initialize the instance of the unordered list and pass the list item collection
let list: PdfUnorderedList = new PdfUnorderedList(new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']));
// Set the marker style for the unordered list
list.style = PdfUnorderedListStyle.circle;
// Add a nested ordered list to the first list item
list.items.at(0).subList = new PdfOrderedList(new PdfListItemCollection(['JS', 'TS', 'Vue', 'Angular', 'ASP.Net Core']));
// Draw the unordered list on the page
list.draw(page, {x: 50, y: 150});
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
// Initialize the instance of the unordered list and pass the list item collection
var list = new ej.pdf.PdfUnorderedList(new ej.pdf.PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']));
// Set the marker style for the unordered list
list.style = ej.pdf.PdfUnorderedListStyle.circle;
// Add a nested ordered list to the first list item
list.items.at(0).subList = new ej.pdf.PdfOrderedList(new ej.pdf.PdfListItemCollection(['JS', 'TS', 'Vue', 'Angular', 'ASP.Net Core']));
// Draw the unordered list on the page
list.draw(page, {x: 50, y: 150});
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## List pagination

This example shows how long lists automatically continue onto the next page when drawn using the `PdfUnorderedList` class. By applying a `PdfLayoutFormat`, the layout engine handles page breaks smoothly while preserving markers, indentation, and nested levels. This ensures consistent rendering of multi‑page or dynamically generated list content.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfList, PdfLayoutFormat, PdfUnorderedList, PdfLayoutBreakType, PdfLayoutType, PdfListItemCollection } from '@syncfusion/ej2-pdf';

// Load the existing document
let document: PdfDocument = new PdfDocument(data);
// Access the first page
let page: PdfPage = document.getPage(0);
// Create an instance for PDF layout format
let format: PdfLayoutFormat = new PdfLayoutFormat();
// Set the layout format
format.layout = PdfLayoutType.paginate;
format.break = PdfLayoutBreakType.fitElement;
// Initialize the instance of the unordered list and pass the list item collection and settings
let list1: PdfList = new PdfUnorderedList(new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT', 'PDF', 'XlsIO', 'DocIO', 'PPT']));
let list2: PdfList = new PdfUnorderedList(new PdfListItemCollection(['A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.']), {suffix: '_'});
// Draw the unordered list on the page
list1.draw(page, {x: 50, y: page.size.height - 100}, format);
list2.draw(page, {x: 180, y: page.size.height - 100}, format);
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
// Create an instance for PDF layout format
var format = new ej.pdf.PdfLayoutFormat();
// Set the layout format
format.layout = ej.pdf.PdfLayoutType.paginate;
format.break = ej.pdf.PdfLayoutBreakType.fitElement;
// Initialize the instance of the unordered list and pass the list item collection and settings
var list1 = new ej.pdf.PdfUnorderedList(new ej.pdf.PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT', 'PDF', 'XlsIO', 'DocIO', 'PPT']));
var list2 = new ej.pdf.PdfUnorderedList(new ej.pdf.PdfListItemCollection(['A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.']), {suffix: '_'});
// Draw the unordered list on the page
list1.draw(page, {x: 50, y: page.size.height - 100}, format);
list2.draw(page, {x: 180, y: page.size.height - 100}, format);
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}