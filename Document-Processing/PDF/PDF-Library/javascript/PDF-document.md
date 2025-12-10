---
title: Document in TypeScript PDF library | Syncfusion
description: This section explains how to set document settings and properties in a PDF file by using the TypeScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Document in TypeScript PDF library

Essential<sup>&reg;</sup> PDF provides support to create, read, and manipulate PDF documents, allowing you to generate high-quality, secure, and feature-rich PDF files programmatically.

## Adding the document settings

This example shows how to configure custom page settings before adding a page to a PDF document. It creates a `PdfPageSettings` instance, applies margins, page size and sets the orientation.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}
 
    import { PdfDocument, PdfPage, PdfPageSettings, PdfMargins, PdfPageOrientation, PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';
 
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Create a new PDF page settings instance
    let pageSettings: PdfPageSettings = new PdfPageSettings();
    // Sets the margins
    pageSettings.margins = new PdfMargins(40);
    // Sets the page size
    pageSettings.size ={width: 595, height: 842};;
    // Sets the page orientation
    pageSettings.orientation = PdfPageOrientation.landscape;
    // Add a page
    let page: PdfPage = document.addPage(pageSettings);
    // Get graphics from the page
    let graphics: PdfGraphics = page.graphics;
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
 
{% endhighlight %}
{% endtabs %}

## Creating sections in a PDF

This example demonstrates how to create a section in a PDF document with custom page settings. It shows how to configure rotation, orientation, margins, and page size using `PdfPageSettings`. The `PdfSection` class is used to apply different page customizations within a single PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}
 
    import { PdfDocument, PdfPage, PdfPageSettings, PdfMargins, PdfPageOrientation, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';
 
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Define page settings
    let settings: PdfPageSettings = new PdfPageSettings();
    settings.rotation = PdfRotationAngle.angle180;
    settings.orientation = PdfPageOrientation.landscape;  
    settings.margins = new PdfMargins(40);               
    settings.size = {width: 595, height: 842};;                       
    // Add a section to the document with the specified settings
    let section: PdfSection = document.addSection(settings);
    // Add a page
    let page: PdfPage = section.addPage();
    // Get graphics from the page
    let graphics: PdfGraphics = page.graphics;
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
 
{% endhighlight %}
{% endtabs %}

## Working with document properties

This example demonstrates how to create a PDF document, set its metadata properties such as title, author, subject, keywords, creator, producer, language, and dates, and then retrieve these properties using the `PdfDocumentInformation` class.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}
 
    import { PdfDocument, PdfPage, PdfDocumentInformation, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';
 
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
    let page: PdfPage = document.addPage();
    // Get graphics from the page
    let graphics: PdfGraphics = page.graphics;
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
 
{% endhighlight %}
{% endtabs %}

## Performing incremental update for PDF document

The `isIncrementalUpdate` property allows you to check if the PDF document supports incremental updates, which can improve performance during modifications by appending changes rather than rewriting the entire document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}
 
    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';
 
    // Create a PDF document
    let document: PdfDocument = new PdfDocument();
    // Disable incremental update to rewrite the entire file
    document.fileStructure.isIncrementalUpdate = false;
    // Add a page
    let page: PdfPage = document.addPage();
    // Get graphics from the page
    let graphics: PdfGraphics = page.graphics;
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();
 
{% endhighlight %}
{% endtabs %}
