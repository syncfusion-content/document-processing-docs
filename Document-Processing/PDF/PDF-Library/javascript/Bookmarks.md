---
title: Bookmarks in JavaScript PDF library | Syncfusion
description: This section explains how to add, modify and remove bookmarks in the PDF document by using JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Bookmarks in JavaScript PDF library

Syncfusion<sup>&reg;</sup> PDF provides support to insert, remove and modify the bookmarks in the PDF Document.

## Adding Bookmarks in a PDF

This example demonstrates how to add bookmarks to a PDF document using the `PdfBookmark` class. Bookmarks provide an easy way to navigate through different sections of a PDF file.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfBookmarkBase, PdfDestination} from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add page
    let page: PdfPage = document.addPage();
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Add a new outline to the PDF document
    let bookmark: PdfBookmark = bookmarks.add('Introduction');
    // Sets destination to the bookmark
    bookmark.destination = new PdfDestination(page, {x: 100, y: 200});
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add page
var page = document.addPage();
// Get the bookmarks
var bookmarks = document.bookmarks;
// Add a new outline to the PDF document
var bookmark = bookmarks.add('Introduction');
// Set destination to the bookmark
bookmark.destination = new ej.pdf.PdfDestination(page, { x: 100, y: 200 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding Bookmarks in an existing PDF document

This example demonstrates how to add bookmarks to an existing PDF document using the `PdfBookmark` class. This allows you to enhance navigation in already created PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfBookmarkBase, PdfDestination} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get page
    let page: PdfPage = document.getPage(0);
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Gets the bookmark at the specified index
    let bookmark: PdfBookmark = bookmarks.at(0) as PdfBookmark;
    // Set the destination
    bookmark.destination = new PdfDestination(page, {x: 100, y: 200});
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
    
{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Get page
var page = document.getPage(0);
// Get the bookmarks
var bookmarks = document.bookmarks;
// Get the bookmark at the specified index
var bookmark = bookmarks.at(0);
// Set the destination
bookmark.destination = new ej.pdf.PdfDestination(page, { x: 100, y: 200 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Inserting Bookmarks in an existing PDF

This example demonstrates how to insert bookmarks at a specific position in an existing PDF document using the `PdfBookmark` class. This feature allows precise control over bookmark order.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfBookmarkBase, PdfDestination} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Add a new outline to the PDF document
    let bookmark: PdfBookmark = bookmarks.add('Introduction', 1);
    // Sets destination to the bookmark
    bookmark.destination = new PdfDestination(page, {x: 100, y: 200});
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Get the first page
var page = document.getPage(0);
// Get the bookmarks
var bookmarks = document.bookmarks;
// Add a new outline to the PDF document
var bookmark = bookmarks.add('Introduction', 1);
// Set destination to the bookmark
bookmark.destination = new ej.pdf.PdfDestination(page, { x: 100, y: 200 });
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing Bookmarks from an existing PDF 

This example demonstrates how to remove bookmarks from an existing PDF document using the `PdfBookmark` class.
{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfBookmarkBase} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Remove specified bookmark from the document.
    bookmarks.remove('Introduction');
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Get the first page
var page = document.getPage(0);
// Get the bookmarks
var bookmarks = document.bookmarks;
// Remove specified bookmark from the document
bookmarks.remove('Introduction');
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing Bookmark from the document at the specified index

This example demonstrates how to remove bookmarks from the document at the specific index using the `PdfBookmark` class.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfBookmarkBase, PdfDestination} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Remove the bookmark from the document at the index 1.
    bookmarks.remove(1);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Get the first page
var page = document.getPage(0);
// Get the bookmarks
var bookmarks = document.bookmarks;
// Remove the bookmark from the document at index 1
bookmarks.remove(1);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing all the Bookmark from the collection

This example demonstrates how to removes all the bookmarks from the collection using the `PdfBookmark` class.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfPage, PdfBookmarkBase} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Remove all the bookmark from the collection.
    bookmarks.clear();
    // Get count after removal of all outlines.
    let count: number = bookmarks.count;
    // Save the document
    document.save('Output.pdf');
    // Destroy the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Get the bookmarks
var bookmarks = document.bookmarks;
// Remove all the bookmarks from the collection
bookmarks.clear();
// Get count after removal of all outlines
var count = bookmarks.count;
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Bookmark page index in an existing PDF document

This example demonstrates how to retrieve the page index associated with a bookmark in an existing PDF document using the `PdfBookmark` class. This helps identify the exact location of the bookmark.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import {PdfDocument, PdfBookmarkBase} from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Get bookmark at the specified index
    let pageIndex: number = bookmarks.destination.pageIndex;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Get bookmarks
var bookmarks = document.bookmarks;
// Get the first bookmark (or any specific one)
var bookmark = bookmarks.at(0);
// Get the page index of the bookmark's destination
var pageIndex = bookmark.destination.pageIndex;
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}