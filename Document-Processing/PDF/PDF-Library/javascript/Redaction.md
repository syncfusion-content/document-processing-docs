---
title: Redaction in JavaScript PDF library |Syncfusion
description: This section explains how to redact content from an existing PDF document by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Redaction in JavaScript PDF library

Redacting a PDF is the process of permanently removing sensitive or confidential information from PDF documents. Syncfusion<sup>&reg;</sup> PDF library provides an easy way to redact PDF documents. 

## Removing sensitive content from the PDF document

Redaction permanently removes confidential or sensitive information from a PDF. The `PdfRedactionAnnotation` class allows you to define areas to redact, ensuring the underlying text or image data is completely deleted from the document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';
import { PdfRedactionAnnotation } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Get the first page
let page: PdfPage = document.getPage(0) as PdfPage;
// Create a new redaction annotation
const annot: PdfRedactionAnnotation = new PdfRedactionAnnotation(
    { x: 100, y: 100, width: 100, height: 100 },
    {
        borderColor: { r: 255, g: 0, b: 0 },
        repeatText: true,
        font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular),
        textColor: { r: 0, g: 0, b: 0 },
        appearanceFillColor: { r: 255, g: 255, b: 255 }
    }
);
// Add annotation to the page
page.annotations.add(annot);
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Get the first page
var page = document.getPage(0);
// Create a new redaction annotation
var annot = new ej.pdfdataextract.PdfRedactionAnnotation(
    { x: 100, y: 100, width: 100, height: 100 },
    {
        borderColor: { r: 255, g: 0, b: 0 },
        repeatText: true,
        font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular),
        textColor: { r: 0, g: 0, b: 0 },
        appearanceFillColor: { r: 255, g: 255, b: 255 }
    }
);
// Add annotation to the page
page.annotations.add(annot);
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Display text on the redacted area

You can overlay custom text on the redacted region to indicate the reason for redaction or provide context. For example, adding "Confidential" or "Redacted" helps users understand why the content was removed.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';
    import { PdfRedactionAnnotation } from '@syncfusion/ej2-pdf-data-extract';
    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new redaction annotation
    const font: PdfFont = new PdfStandardFont(PdfFontFamily.timesRoman, 12);
    const annotation: PdfRedactionAnnotation = new PdfRedactionAnnotation({x: 100, y: 100, width: 100, height: 100},{ borderColor: {r: 255, g: 0, b: 0},
            repeatText: true,
            overlayText: 'Sample Overlay',
            font: document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular),
            textColor: {r: 0, g: 0, b: 0},
            appearanceFillColor: {r: 255, g: 255, b: 255} });
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Access the first page
var page = document.getPage(0);
// Create a new redaction annotation
var font = new ej.pdf.PdfStandardFont(ej.pdf.PdfFontFamily.timesRoman, 12);
var annotation = new ej.pdfdataextract.PdfRedactionAnnotation(
    { x: 100, y: 100, width: 100, height: 100 },
    {
        borderColor: { r: 255, g: 0, b: 0 },
        repeatText: true,
        overlayText: 'Sample Overlay',
        font: document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular),
        textColor: { r: 0, g: 0, b: 0 },
        appearanceFillColor: { r: 255, g: 255, b: 255 }
    }
);
// Add annotation to the page
page.annotations.add(annotation);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Fill color on the redacted area

You can apply a solid fill color to cover the redacted content. This is the most common approach for redaction.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfTextAlignment, } from '@syncfusion/ej2-pdf';
    import { PdfRedactionAnnotation } from '@syncfusion/ej2-pdf-data-extract';
    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Create a new redaction annotation with specified position and size
    let annot: PdfRedactionAnnotation = new PdfRedactionAnnotation({ x: 100, y: 100, width: 300, height: 200 });
    // Define multiple rectangular areas (bounds) within the annotation for redaction
    annot.boundsCollection = [
        { x: 50, y: 50, width: 100, height: 100 },   // First redaction area
        { x: 200, y: 100, width: 60, height: 30 },   // Second redaction area
        { x: 100, y: 400, width: 60, height: 30 }    // Third redaction area
    ];
    // Set the overlay text that will appear on the redacted areas
    annot.overlayText = "Confidential";
    // Enable repeating the overlay text across the redacted region
    annot.repeatText = true;
    // Set the fill color for the redaction appearance (red)
    annot.appearanceFillColor = { r: 255, g: 0, b: 0 };
    // Set the color of the overlay text (blue)
    annot.textColor = { r: 0, g: 0, b: 255 };
    // Set the opacity level for the redaction annotation (50% transparent)
    annot.opacity = 0.5;
    // Set the inner color for the redaction area (green)
    annot.innerColor = { r: 0, g: 255, b: 0 };
    // Align the overlay text to the center of the redaction area
    annot.textAlignment = PdfTextAlignment.center;
    // Specify the author of the annotation
    annot.author = "QA Tester";
    // Specify the subject or purpose of the annotation
    annot.subject = "Redaction Test";
    // Add the configured redaction annotation to the page's annotations collection
    page.annotations.add(annot);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Create a new redaction annotation with specified position and size
var annot = new ej.pdfdataextract.PdfRedactionAnnotation({ x: 100, y: 100, width: 300, height: 200 });
// Define multiple rectangular areas (bounds) within the annotation for redaction
annot.boundsCollection = [
    { x: 50, y: 50, width: 100, height: 100 },   // First redaction area
    { x: 200, y: 100, width: 60, height: 30 },   // Second redaction area
    { x: 100, y: 400, width: 60, height: 30 }    // Third redaction area
];
// Set the overlay text that will appear on the redacted areas
annot.overlayText = "Confidential";
// Enable repeating the overlay text across the redacted region
annot.repeatText = true;
// Set the fill color for the redaction appearance (red)
annot.appearanceFillColor = { r: 255, g: 0, b: 0 };
// Set the color of the overlay text (blue)
annot.textColor = { r: 0, g: 0, b: 255 };
// Set the opacity level for the redaction annotation (50% transparent)
annot.opacity = 0.5;
// Set the inner color for the redaction area (green)
annot.innerColor = { r: 0, g: 255, b: 0 };
// Align the overlay text to the center of the redaction area
annot.textAlignment = ej.pdf.PdfTextAlignment.center;
// Specify the author of the annotation
annot.author = "QA Tester";
// Specify the subject or purpose of the annotation
annot.subject = "Redaction Test";
// Add the configured redaction annotation to the page's annotations collection
page.annotations.add(annot);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Redaction appearance fill color

Customize the appearance of the redacted area by applying specific fill colors. This helps maintain a consistent design or highlight redacted sections in a visually appealing way.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';
    import { PdfRedactionAnnotation } from '@syncfusion/ej2-pdf-data-extract';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
     //Appearance Fill color
    const annot = new PdfRedactionAnnotation({x: 100, y: 100, width: 100, height: 50});
    annot.appearanceFillColor = {r: 255, g: 255, b: 0};
    page.annotations.add(annot);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% highlight c# tabtitle="JavaScript" %}

// Load an existing PDF document
var document=new ej.pdf.PdfDocument(data,password);
// Access the first page
var page=document.getPage(0);
// Appearance Fill color
var annot=new ej.pdfdataextract.PdfRedactionAnnotation({x:100,y:100,width:100,height:50});
annot.appearanceFillColor={r:255,g:255,b:0};
page.annotations.add(annot);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}