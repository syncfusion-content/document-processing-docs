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