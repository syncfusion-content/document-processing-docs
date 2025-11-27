---
title: Working with EJ2 named destination | Syncfusion
description: This section explains about how to add, remove and modify the named destination in the Essential PDF document with example.
platform: document-processing
control: PDF
documentation: UG
---
# Working with EJ2 Named Destination

Essential<sup>&reg;</sup> EJ2 PDF provides support to add, remove and modify the named destination in the PDF document. When you open a PDF file in a web browser, the first page of the PDF file will be shown by default. By adding a named destination, you can open the PDF with the desired location and magnification. The following link example shows how to open a PDF document with named destination in a web page.

**Points to remembers:**

* Individual parameters, together with their values (separated by & or #), can be no greater than 32 characters in length.
* You cannot use the reserved characters =, #, and &. There is no way to escape these special characters.

## Adding Named Destination to a PDF document

This example demonstrates how to add a named destination to a PDF document using the `PdfNamedDestination` class. Named destinations allow you to create a reference point within the document that can be used for navigation or linking.

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

## Adding Named Destination to an existing PDF document

This example demonstrates how to add a named destination to an existing PDF document using the `PdfNamedDestination` class. This feature helps improve navigation in already created PDF document.

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
    // Gets the named destination
    let namedDestination: PdfNamedDestination = bookmark.namedDestination;
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

## Removing/Modifying the named destination

This example demonstrates how to remove or modify a named destination in a PDF document using the `PdfNamedDestination` class. You can update the destination or delete it to maintain accurate navigation.

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

## Adding named destination to the bookmarks

This example demonstrates how to associate a named destination with a bookmark in a PDF document using the PdfBookmark and `PdfNamedDestination` classes. This allows bookmarks to point to predefined locations for better navigation.

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