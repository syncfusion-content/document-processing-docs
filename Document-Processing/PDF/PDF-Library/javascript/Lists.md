---
title: Lists | Syncfusion
description: This section explains how to work with lists in a PDF document by using the TypeScript PDF library
platform: document-processing
control: PDF
documentation: UG
---

# Lists

The Syncfusion<sup>&reg;</sup> PDF allows you list the content in ordered and unordered list. The ordered list can be number or alphabets and the unordered list can be bullets, circles, and images.

## Adding an ordered list

This example demonstrates how to create an ordered list in a PDF document using the `PdfOrderedList` class. Ordered lists allow you to present items in a structured, sequential format, typically numbered or lettered, enhancing readability and organization within the PDF content.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfList, PdfOrderedList, PdfListItemCollection } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Create an ordered list instance
    let list: PdfList = new PdfOrderedList(new PdfListItemCollection(['PDF', 'XlsIO', 'DocIO', 'PPT']));
    // draw the list
    list.draw(page, {x: 50, y: 50});
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding an unordered list

This example demonstrates how to create an unordered list in a PDF document using the `PdfUnorderedList` class. Unordered lists display items with bullet points instead of numbers, making them ideal for presenting non-sequential information in a clear and organized manner.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfList, PdfUnorderedList, PdfListItemCollection } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Create an unordered list instance
    let subList: PdfList = new PdfUnorderedList(new PdfListItemCollection(['PDF.Base', 'PDF.Portable', 'Flutter', 'JavaScript']));
    // draw the unorder list
    subList.draw(page, {x: 50, y: 50});
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding a sub list

This example demonstrates how to add a sublist within a parent list in a PDF document using the `PdfOrderedList` classes. Sub lists allow you to create hierarchical list structures, improving content organization and readability by nesting related items under a main list item.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfList, PdfOrderedList, PdfListItemCollection } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Create a parent ordered list
    let mainList: PdfOrderedList = new PdfOrderedList();
    mainList.items.add('Chapter 1: Introduction');
    mainList.items.add('Chapter 2: Working with Lists');
    // Create a sublist (unordered) with related items
    let subList: PdfUnorderedList = new PdfUnorderedList(
        new PdfListItemCollection(['PDF.Base', 'PDF.Portable', 'Flutter', 'JavaScript'])
    );
    // Add the sublist under the second item of the main list
    mainList.items.getItem(1).subList = subList;
    // Draw the main list (with sublist) on the page
    mainList.draw(page, { x: 50, y: 50 });
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}