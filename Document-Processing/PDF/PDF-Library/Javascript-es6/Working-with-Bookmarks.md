---
title: Working with EJ2 Bookmarks | PDF library | Syncfusion
description: This section explains how to add, modify and remove bookmarks in the PDF document by using Essential EJ2 PDF
platform: document-processing
control: PDF
documentation: UG
---
# Working with EJ2 Bookmarks

Essential<sup>&reg;</sup> EJ2 PDF provides support to insert, remove and modify the bookmarks in the PDF Document.

## Adding Bookmarks in a PDF

This example demonstrates how to add bookmarks to a PDF document using the `PdfBookmark` class. Bookmarks provide an easy way to navigate through different sections of a PDF file.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a new section to the document
    let section: PdfSection = document.addSection();
    // Add a page to the section
    let page: PdfPage = section.addPage();
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Add a new outline to the PDF document
    let bookmark: PdfBookmark = bookmarks.add('Introduction');
    // Sets destination to the bookmark
    bookmark.destination = new PdfDestination(page, [10, 10]);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Adding Bookmarks in an existing PDF document

This example demonstrates how to add bookmarks to an existing PDF document using the `PdfBookmark` class. This allows you to enhance navigation in already created PDF document.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Gets the bookmark at the specified index
    let bookmark: PdfBookmark = bookmarks.at(0) as PdfBookmark;
    // Set the destination
    bookmark.destination = new PdfDestination(page, [100, 200]);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Inserting Bookmarks in an existing PDF

This example demonstrates how to insert bookmarks at a specific position in an existing PDF document using the `PdfBookmark` class. This feature allows precise control over bookmark order.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Add a new outline to the PDF document
    let bookmark: PdfBookmark = bookmarks.add('Introduction');
    // Sets destination to the bookmark
    bookmark.destination = new PdfDestination(page, [10, 10]);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Removing Bookmarks from an existing PDF 

This example demonstrates how to remove bookmarks from an existing PDF document using the `PdfBookmark` class. Removing bookmarks helps clean up unnecessary navigation links.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Get the bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Remove specified bookmark from the document.
    bookmarks.remove('Introduction');
    // Sets destination to the bookmark
    bookmark.destination = new PdfDestination(page, [10, 10]);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Bookmark page index in an existing PDF document

This example demonstrates how to retrieve the page index associated with a bookmark in an existing PDF document using the `PdfBookmark` class. This helps identify the exact location of the bookmark.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

// Create and render button
let button: Button = new Button();
button.appendTo('#normalbtn');

// Handle click event
button.element.onclick = async () => {
    console.log('Start PDF Creation');
    createPdf();
};

// Function to create PDF
function createPdf() {
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument('Input.pdf');
    // Get bookmarks
    let bookmarks: PdfBookmarkBase = document.bookmarks;
    // Get bookmark at the specified index
    let bookmark: PdfBookmark = bookmarks.at(0) as PdfBookmark;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}