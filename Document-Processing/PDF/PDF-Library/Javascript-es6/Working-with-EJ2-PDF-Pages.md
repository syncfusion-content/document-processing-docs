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
    let document: PdfDocument = new PdfDocument(data, password);
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
   let data = document.save("Output.pdf);
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
    let document: PdfDocument = new PdfDocument("Input.pdf");
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