---
title: Working with EJ2 PDF pages | Syncfusion
description: This section explains how to add, rearrange, remove pages and detect empty pages from the EJ2 PDF document
platform: document-processing
control: PDF
documentation: UG
---
# Working with EJ2 PDF Pages

## Adding a new page to the document

The following code sample explains you on how to add a `PdfPage` in a PDF document. When multiple pages are added, the new page is always added to the end of the document.

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
    // Create a PDF document
    let document: PdfDocument = new PdfDocument('input.pdf', 'password');
    // Add a new PDF page
    let page: PdfPage = document.addPage();
    // Save the document
    document.save('output.pdf');
    // Destroy the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Adding margin to the PDF pages

The `PdfPageSettings` class is used to define properties such as margins, orientation, rotation, and page size. In this example, margins are set using the `PdfMargins` class to ensure consistent spacing around the page content. These settings can be applied when creating sections or pages in the PDF for precise layout control.

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
    // Create a new PDF page settings instance
    let pageSettings: PdfPageSettings = new PdfPageSettings();

    // Sets the margins
    pageSettings.margins = new PdfMargins(40);

    // Add a page
    const page = document.addPage(pageSettings);
    // Get graphics from the page
    let graphics = page.graphics;
    // Set font
    font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10);
    // Draw text
    graphics.drawString('Hello World!!!', font, [70, 10, 200, 50], new PdfPen([255, 0, 0], 1), new PdfBrush([0, 0, 255]));
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

## Adding sections with different page settings

This example demonstrates how to add sections with different page settings in a PDF document. It shows how to configure rotation, orientation, margins, and page size using `PdfPageSettings`. The `PdfSection` class is used to apply unique page customizations within a single PDF document.

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

   // Define first page settings
   let settings1: PdfPageSettings = new PdfPageSettings();
   settings1.rotation = PdfRotationAngle.angle90;
   settings1.orientation = PdfPageOrientation.landscape;  
   settings1.margins = new PdfMargins(40);               
   settings1.size = [595, 842];                       
   // Add a section to the document with the specified settings
   let section1: PdfSection = document.addSection(settings1);
   // Add a page to the section
   let page1: PdfPage = section1.addPage();
   // Get graphics object to draw on the page
   let graphics1 = page1.graphics;
   // Set font for text
   let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 20);
   // Draw text on the page with specified font, position, and styles
   graphics1.drawString('Rotated by 90 degree', font, [10, 10, 200, 50], new PdfPen([255, 0, 255], 1),  new PdfBrush([0, 0, 0]));

   // Define Second page settings
   let settings2: PdfPageSettings = new PdfPageSettings();
   settings2.rotation = PdfRotationAngle.angle180;
   settings2.orientation = PdfPageOrientation.landscape;  
   settings2.margins = new PdfMargins(40);               
   settings2.size = [595, 842];                       
   // Add a section to the document with the specified settings
   let section2: PdfSection = document.addSection(settings2);
   // Add a page to the section
   let page2: PdfPage = section2.addPage();
   // Get graphics object to draw on the page
   let graphics2 = page2.graphics;
   // Draw text on the page with specified font, position, and styles
   graphics2.drawString('Hello World!!!', font, [10, 10, 200, 50], new PdfPen([255, 0, 255], 1),  new PdfBrush([0, 0, 0]));

   // Save the PDF document
   let data = document.save('Output.pdf');
   // Close and dispose the document
   document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Get number of pages from a PDF document

This example demonstrates how to retrieve the total number of pages in a PDF document using the `pageCount` property of the `PdfDocument` class. The page count returns an integer value representing the number of pages currently in the document.

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
    // Gets the page count
    let count: number = document.pageCount;
    // Destroy the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Importing pages from an existing document

This example demonstrates how to import pages from an existing PDF document into a new PDF document using the `importPageRange` method of the `PdfDocument` class. This method allows you to specify a start and end index to copy a range of pages from the source document into the target document.

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
    // Define start and end page indices
    const startIndex = 0;
    const endIndex = document.pageCount - 1;

    // Import all pages from the loaded document into the new document
    document.importPageRange(document, startIndex, endIndex);

    // Save the new document
    document.save('Output.pdf');
    // Close the loaded document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Rearranging pages in an existing document

This example demonstrates how to rearrange the pages in an existing PDF document using the `reorderPages` method of the `PdfDocument` class. The method accepts an array of page indices that defines the new order of pages within the document.

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
    // Reorders the pages in the PDF document
    document.reorderPages([3, 2, 1]);
    // Save the document
    document.save('output.pdf');
    // Destroy the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Removing pages from a document

This example demonstrates how to remove a page from a PDF document using the `removePage` method of the `PdfDocument` class. The method takes the zero-based index of the page to be removed, effectively deleting that page from the document.

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
    let document: PdfDocument = new PdfDocument("Input.pdf");
    // Removes the first page
    document.removePage(0);
    // Save the document
    document.save('output.pdf');
    // Destroy the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Rotating a PDF page

This example demonstrates how to rotate a PDF page using the `rotation` property of the `PdfPageSettings` class. The property accepts a value from the `PdfRotationAngle` enumeration, such as angle180, to specify the rotation angle applied to the page.

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
   //Rotate a section/page
   let settings: PdfPageSettings = new PdfPageSettings();
   settings.rotation = PdfRotationAngle.angle180;                     

   // Add a section to the document with the specified settings
   let section: PdfSection = document.addSection(settings);

   // Add a page to the section
   let page: PdfPage = section.addPage();
   // Get graphics object to draw on the page
   let graphics = page.graphics;
   // Set font for text
   let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 20);
   // Draw text on the page with specified font, position, and styles
   graphics.drawString('Hello World!!!', font, [10, 10, 200, 50], new PdfPen([255, 0, 255], 1),  new PdfBrush([0, 0, 0]));
   // Save the PDF document
   let data = document.save('Output.pdf');
   // Close and dispose the document
   document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Rotating an existing PDF page

This example demonstrates how to rotate an existing PDF page using the `rotation` property of the `PdfPage` class. The property accepts a value from the `PdfRotationAngle` enumeration, such as angle180, to specify the rotation angle applied to the selected page.

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
    // Access first page
    let page: PdfPage = document.getPage(0);
    //Set the rotation for loaded page
    page.rotation = PdfRotationAngle.angle180;
    // Save the document
    document.save('output.pdf');
    // Destroy the document
    document.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}

## Splitting a PDF file to individual pages

This example demonstrates how to split a PDF file into individual pages by importing a specific page from the source document using the `importPage` method of the `PdfDocument` class. The method takes the zero-based index of the page to be copied and adds it as a new page in the target document.

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
    let sourceDocument: PdfDocument = new PdfDocument('Input.pdf');
    // Copy the second page and add it as third page
    sourceDocument.importPage(1);
    // Save the output PDF
    sourceDocument.save('Output.pdf');
    // Destroy the documents
    sourceDocument.destroy();
}

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<div class="row">
    <button id="normalbtn">Create PDF</button>
</div>

{% endhighlight %}
{% endtabs %}