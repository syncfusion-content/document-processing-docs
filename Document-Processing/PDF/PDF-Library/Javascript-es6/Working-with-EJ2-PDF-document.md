---
title: Working with EJ2 PDF Document | Syncfusion
description: This section explains how to set document Settings and properties to the EJ2 PDF document using Essential PDF
platform: document-processing
control: PDF
documentation: UG
---
# Working with EJ2 PDF Document

## Adding the document settings

This example shows how to configure custom page settings before adding a page to a PDF document. It creates a `PdfPageSettings` instance, applies margins, page size and sets the orientation.

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
   // Sets the page size
   pageSettings.size = [595, 842];
   // Sets the page orientation
   pageSettings.orientation = PdfPageOrientation.landscape;
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

## Creating sections in a PDF

This example demonstrates how to create a section in a PDF document with custom page settings. It shows how to configure rotation, orientation, margins, and page size using `PdfPageSettings`. The `PdfSection` class is used to apply different page customizations within a single PDF document.

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
   // Define page settings
   let settings: PdfPageSettings = new PdfPageSettings();
   settings.rotation = PdfRotationAngle.angle180;
   settings.orientation = PdfPageOrientation.landscape;  
   settings.margins = new PdfMargins(40);               
   settings.size = [595, 842];                       

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

## Working with document properties

This example demonstrates how to create a PDF document, set its metadata properties such as title, author, subject, keywords, creator, producer, language, and dates, and then retrieve these properties using the `PdfDocumentInformation` class.

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
   let document: PdfDocument = new PdfDocument();
    // Access the document information (metadata)
    let documentProperties: PdfDocumentInformation = document.getDocumentInformation();

    // Set document properties
    documentProperties.title = "Sample PDF Document";        // Title of the PDF
    documentProperties.author = "John Doe";                 // Author name
    documentProperties.subject = "PDF Metadata Example";    // Subject of the document
    documentProperties.keywords = "PDF, Metadata, Example"; // Keywords for search
    documentProperties.creator = "Syncfusion PDF Library";  // Application that created the PDF
    documentProperties.producer = "Syncfusion PDF Engine";  // PDF producer
    documentProperties.language = "en-US";                  // Language of the document
    documentProperties.creationDate = new Date();           // Creation date
    documentProperties.modificationDate = new Date();       // Last modified date
   // Add a page
    const page = document.addPage();
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

## Performing incremental update for PDF document

The `isIncrementalUpdate` property allows you to check if the PDF document supports incremental updates, which can improve performance during modifications by appending changes rather than rewriting the entire document.

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
   let document: PdfDocument = new PdfDocument();
   
   // Disable incremental update to rewrite the entire file
   document.fileStructure.isIncrementalUpdate = false;

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
