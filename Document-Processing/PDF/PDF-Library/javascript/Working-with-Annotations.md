---
title: Working with Annotations | Syncfusion
description: This section explains how to create, modify or remove different type of interactive Annotation by using TypeScript PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Annotations

Syncfusion JavaScript PDF library provides support for interactive annotations. You can add, delete and modify the annotation from the PDF documents.

## Adding annotations to a PDF document

This example demonstrates how to add annotations to a PDF document using the `PdfAnnotation` class. Adding annotations allows users to include comments, highlights, shapes, and other interactive elements within a PDF, enhancing collaboration and document review.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfPopupAnnotation, PdfPopupIcon, PdfAnnotationBorder} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Creates a new popup annotation
let popup = new PdfPopupAnnotation(
    'Test popup annotation',
    { x: 10, y: 40, width: 30, height: 30 },
    {
        author: 'Syncfusion',
        subject: 'General',
        color: { r: 255, g: 255, b: 0 },
        icon: PdfPopupIcon.newParagraph,
        open: true
    });
popup.border = new PdfAnnotationBorder({width: 4, hRadius: 20, vRadius: 30});
// Adds annotation to the page
page.annotations.add(popup);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a popup annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfPopupAnnotation, PdfPopupIcon, PdfAnnotationBorder} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Creates a new popup annotation
let popup = new PdfPopupAnnotation(
    'Test popup annotation',
    { x: 10, y: 40, width: 30, height: 30 },
    {
        author: 'Syncfusion',
        subject: 'General',
        color: { r: 255, g: 255, b: 0 },
        icon: PdfPopupIcon.newParagraph,
        open: true
    });
popup.border = new PdfAnnotationBorder({width: 4, hRadius: 20, vRadius: 30});
// Adds annotation to the page
page.annotations.add(popup);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Supported annotation types

### File Link Annotation 

This example demonstrates how to add a file link annotation to a PDF page using the `PdfFileLinkAnnotation` class. A file link annotation allows linking to an external file from within a PDF document, enabling users to access related resources directly.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfFileLinkAnnotation} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Creates a file link annotation
const fileLink = new PdfFileLinkAnnotation(
    { x: 100, y: 150, width: 120, height: 18 },
    'logo.png',
    {
        text: 'Open attachment',
        author: 'Syncfusion',
        subject: 'File Link Annotation',
        color: { r: 0, g: 0, b: 255 },
        action: "app.alert('Launching file');"
    });
// Adds annotation to the page
page.annotations.add(fileLink);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a file link annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfFileLinkAnnotation} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Creates a file link annotation
const fileLink = new PdfFileLinkAnnotation(
    { x: 100, y: 150, width: 120, height: 18 },
    'logo.png',
    {
        text: 'Open attachment',
        author: 'Syncfusion',
        subject: 'File Link Annotation',
        color: { r: 0, g: 0, b: 255 },
        action: "app.alert('Launching file');"
    });
// Adds annotation to the page
page.annotations.add(fileLink);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Free Text Annotation

This example demonstrates how to add a free text annotation to a PDF page using the `PdfFreeTextAnnotation` class. A free text annotation allows placing text directly on a PDF page, enabling users to add comments or notes that remain visible without requiring interaction.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfFreeTextAnnotation, PdfTextAlignment, PdfAnnotationBorder, PdfBorderStyle, PdfFreeTextAnnotation, PdfLineEndingStyle, PdfStandardFont, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Create new free text annotation
const freeText = new PdfFreeTextAnnotation({ x: 250, y: 260, width: 180, height: 80 },
    {
        text: 'Free Text with Callout',
        annotationIntent: PdfAnnotationIntent.freeTextCallout,
        calloutLines: [{ x: 200, y: 320 }, { x: 260, y: 300 }, { x: 260, y: 300 }],
        lineEndingStyle: PdfLineEndingStyle.openArrow,
        font: new PdfStandardFont(PdfFontFamily.helvetica, 9, PdfFontStyle.italic),
        textMarkUpColor: { r: 40, g: 40, b: 40 },
        innerColor: { r: 240, g: 248, b: 255 },
        borderColor: { r: 0, g: 0, b: 0 },
        textAlignment: PdfTextAlignment.left,
        opacity: 1,
        border: new PdfAnnotationBorder({ width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid })
    });
// Adds annotation to the page
page.annotations.add(freeText);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a free text annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfFreeTextAnnotation, PdfTextAlignment, PdfAnnotationBorder, PdfBorderStyle, PdfFreeTextAnnotation, PdfLineEndingStyle, PdfStandardFont, PdfFontFamily, PdfFontStyle} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Create new free text annotation
const freeText = new PdfFreeTextAnnotation({ x: 250, y: 260, width: 180, height: 80 },
    {
        text: 'Free Text with Callout',
        annotationIntent: PdfAnnotationIntent.freeTextCallout,
        calloutLines: [{ x: 200, y: 320 }, { x: 260, y: 300 }, { x: 260, y: 300 }],
        lineEndingStyle: PdfLineEndingStyle.openArrow,
        font: new PdfStandardFont(PdfFontFamily.helvetica, 9, PdfFontStyle.italic),
        textMarkUpColor: { r: 40, g: 40, b: 40 },
        innerColor: { r: 240, g: 248, b: 255 },
        borderColor: { r: 0, g: 0, b: 0 },
        textAlignment: PdfTextAlignment.left,
        opacity: 1,
        border: new PdfAnnotationBorder({ width: 1, hRadius: 0, vRadius: 0, style: PdfBorderStyle.solid })
    });
// Adds annotation to the page
page.annotations.add(freeText);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Line Annotation 

This example demonstrates how to add a line annotation to a PDF page using the `PdfLineAnnotation` class. A line annotation allows drawing straight lines between two points on a PDF page, often used to highlight connections or indicate measurements.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfLineAnnotation, PdfAnnotationLineEndingStyle, PdfLineEndingStyle, PdfAnnotationCaption, PdfLineCaptionType} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Creates a new line annotation.
let lineAnnotation: PdfLineAnnotation = new PdfLineAnnotation({ x: 80, y: 420 }, { x: 150, y: 420 }, {
    text: 'Line Annotation',
    author: 'Syncfusion',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 255, b: 0 },
    lineEndingStyle: new PdfAnnotationLineEndingStyle({ begin: PdfLineEndingStyle.circle, end: PdfLineEndingStyle.diamond }),
    opacity: 0.5
});
// Assigns the leader line
lineAnnotation.leaderExt = 0;
lineAnnotation.leaderLine = 0;
// Assigns the line caption type
lineAnnotation.caption = new PdfAnnotationCaption({ cap: true, type: PdfLineCaptionType.inline });
// Adds annotation to the page
page.annotations.add(lineAnnotation);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a line annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfLineAnnotation, PdfAnnotationLineEndingStyle, PdfLineEndingStyle, PdfAnnotationCaption, PdfLineCaptionType} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Creates a new line annotation.
let lineAnnotation: PdfLineAnnotation = new PdfLineAnnotation({ x: 80, y: 420 }, { x: 150, y: 420 }, {
    text: 'Line Annotation',
    author: 'Syncfusion',
    color: { r: 255, g: 0, b: 0 },
    innerColor: { r: 255, g: 255, b: 0 },
    lineEndingStyle: new PdfAnnotationLineEndingStyle({ begin: PdfLineEndingStyle.circle, end: PdfLineEndingStyle.diamond }),
    opacity: 0.5
});
// Assigns the leader line
lineAnnotation.leaderExt = 0;
lineAnnotation.leaderLine = 0;
// Assigns the line caption type
lineAnnotation.caption = new PdfAnnotationCaption({ cap: true, type: PdfLineCaptionType.inline });
// Adds annotation to the page
page.annotations.add(lineAnnotation);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Rubber stamp Annotation

This example demonstrates how to add a rubber stamp annotation to a PDF page using the `PdfRubberStampAnnotation` class. A rubber stamp annotation allows applying predefined or custom stamp to visually indicate the status or purpose of a document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfRubberStampAnnotation, PdfRubberStampAnnotationIcon} from '@syncfusion/ej2-pdf';

// Creates a new PDF document
let document: PdfDocument = new PdfDocument();
// Adds a new page to the PDF
let page: PdfPage = document.addPage();
// Creates a new rubber stamp annotation
let stamp: PdfRubberStampAnnotation = new PdfRubberStampAnnotation({ x: 40, y: 60, width: 80, height: 20 },
    {
        icon: PdfRubberStampAnnotationIcon.draft,
        text: 'Text Properties Rubber Stamp Annotation'
    });
// Adds annotation to the page
page.annotations.add(stamp);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a free text annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

import {PdfDocument, PdfPage, PdfRubberStampAnnotation, PdfRubberStampAnnotationIcon} from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Access the first page
let page: PdfPage = document.getPage(0);
// Creates a new rubber stamp annotation
let stamp: PdfRubberStampAnnotation = new PdfRubberStampAnnotation({ x: 40, y: 60, width: 80, height: 20 },
    {
        icon: PdfRubberStampAnnotationIcon.draft,
        text: 'Text Properties Rubber Stamp Annotation'
    });
// Adds annotation to the page
page.annotations.add(stamp);
// Saves and download the PDF document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% endtabs %}

### Ink Annotation

This example demonstrates how to add an ink annotation to a PDF page using the `PdfInkAnnotation` class. An ink annotation allows drawing freehand marks or sketches directly on a PDF page.

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
    // Create a new ink annotation with the bounds and ink points
    const annotation: PdfInkAnnotation = new PdfInkAnnotation([0, 0, 300, 400], [40, 300, 60, 100, 40, 50, 40, 300]);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a ink annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new ink annotation with the bounds and ink points
    const annotation: PdfInkAnnotation = new PdfInkAnnotation([0, 0, 300, 400], [40, 300, 60, 100, 40, 50, 40, 300]);
    // Add annotation to the page
    page.annotations.add(annotation);
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

### Pop-up Annotation

This example demonstrates how to add a popup annotation to a PDF document using the `PdfPopupAnnotation` class. A popup annotation allows you to display additional information or comments within the PDF at a specified position and size.

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
    // Create a new popup annotation
    const annotation: PdfPopupAnnotation = new PdfPopupAnnotation('Test popup annotation', 10, 40, 30, 30);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a popup annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new popup annotation
    const annotation: PdfPopupAnnotation = new PdfPopupAnnotation('Test popup annotation', 10, 40, 30, 30);
    // Add annotation to the page
    page.annotations.add(annotation);
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

### File Attachment Annotation

This example demonstrates how to add a file attachment annotation to a PDF page using the `PdfAttachmentAnnotation` class. A file attachment annotation allows embedding external files within a PDF document, enabling users to include supporting documents or resources for easy access.

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
    // Create a new attachment annotation
    const annotation: PdfAttachmentAnnotation = new PdfAttachmentAnnotation(300, 200, 30, 30, "Nature.jpg", imageData);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a attachment annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new attachment annotation
    const annotation: PdfAttachmentAnnotation = new PdfAttachmentAnnotation(300, 200, 30, 30, "Nature.jpg", imageData);
    // Add annotation to the page
    page.annotations.add(annotation);
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

### Sound Annotation

This example demonstrates how to access a sound annotation to a PDF page using the `PdfSoundAnnotation` class.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access the annotation at index 0
    let annotation: PdfSoundAnnotation = page.annotations.at(0) as PdfSoundAnnotation;
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

### URI Annotation

This example demonstrates how to add a URI annotation to a PDF page using the `PdfUriAnnotation` class. A URI annotation allows linking to a web address or online resource from within a PDF document.

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
    // Create a new URI annotation
    let annotation: PdfUriAnnotation = new PdfUriAnnotation(100, 150, 200, 100, ‘http://www.google.com’);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a URI annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new URI annotation
    let annotation: PdfUriAnnotation = new PdfUriAnnotation(100, 150, 200, 100, ‘http://www.google.com’);
    // Add annotation to the page
    page.annotations.add(annotation);
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

### Document Link Annotation

This example demonstrates how to add a document link annotation to a PDF page using the `PdfDocumentLinkAnnotation` class. A document link annotation allows creating clickable links that navigate to a specific page or location within the same PDF document.

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
    // Create a new document link annotation
    let annotation: PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation(100, 150, 40, 60);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a document link annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new document link annotation
    let annotation: PdfDocumentLinkAnnotation = new PdfDocumentLinkAnnotation(100, 150, 40, 60);
    // Add annotation to the page
    page.annotations.add(annotation);
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

### Redaction Annotation

This example demonstrates how to add a redaction annotation to a PDF page using the `PdfRedactionAnnotation` class. A redaction annotation allows marking areas of a PDF for permanent removal of sensitive content, ensuring confidentiality and compliance with privacy requirements.

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
    // Create a new redaction annotation
    const annotation: PdfRedactionAnnotation = new PdfRedactionAnnotation (50, 100, 100, 50);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a document link annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new redaction annotation
    const annotation: PdfRedactionAnnotation = new PdfRedactionAnnotation (50, 100, 100, 50);
    // Add annotation to the page
    page.annotations.add(annotation);
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

### Watermark Annotation

This example demonstrates how to add a watermark annotation to a PDF page using the `PdfWatermarkAnnotation` class. A watermark annotation allows overlaying text or images on a PDF page, typically used for branding, confidentiality notices, or document status indicators.

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
    // Create a new water mark annotation
    const annotation: PdfWatermarkAnnotation = new PdfWatermarkAnnotation('Water Mark', 50, 100, 100, 50);
    // Set the color of the annotation
    annotation.color = [0, 0, 0];
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a watermark annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new water mark annotation
    const annotation: PdfWatermarkAnnotation = new PdfWatermarkAnnotation('Water Mark', 50, 100, 100, 50);
    // Set the color of the annotation
    annotation.color = [0, 0, 0];
    // Add annotation to the page
    page.annotations.add(annotation);
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

### Text Markup Annotation

This example demonstrates how to add a text markup annotation to a PDF page using the `PdfTextMarkupAnnotation` class. A text markup annotation allows highlighting, underlining, or striking out text within a PDF document.

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
    // Create a new text markup annotation
    const annotation: PdfTextMarkupAnnotation = new PdfTextMarkupAnnotation();
    // Sets the bounds of the annotation.
    annotation.bounds = {x: 50, y: 100, width: 100, height: 100};
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a text markup annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new text markup annotation
    const annotation: PdfTextMarkupAnnotation = new PdfTextMarkupAnnotation();
    // Sets the bounds of the annotation.
    annotation.bounds = {x: 50, y: 100, width: 100, height: 100};
    // Add annotation to the page
    page.annotations.add(annotation);
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

## Cloud border style Annotation

### PdfRectangleAnnotation

This example demonstrates how to add a rectangle annotation to a PDF page using the `PdfRectangleAnnotation` class. A rectangle annotation allows drawing rectangular shapes on a PDF document.

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
    // Create a new square annotation with bounds
    const annotation: PdfRectangleAnnotation = new PdfRectangleAnnotation(10, 10, 200, 100);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a rectangle annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new square annotation with bounds
    const annotation: PdfRectangleAnnotation = new PdfRectangleAnnotation(10, 10, 200, 100);
    // Add annotation to the page
    page.annotations.add(annotation);
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

### Polygon Annotation

This example demonstrates how to add a polygon annotation to a PDF page using the `PdfPolygonAnnotation` class. A polygon annotation allows drawing multi-sided shapes on a PDF document.

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
    // Create a new polygon annotation with bounds
    const annotation: PdfPolygonAnnotation = new PdfPolygonAnnotation([100, 300, 150, 200, 300, 200, 350, 300, 300, 400, 150, 400]);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a polygon annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new polygon annotation with bounds
    const annotation: PdfPolygonAnnotation = new PdfPolygonAnnotation([100, 300, 150, 200, 300, 200, 350, 300, 300, 400, 150, 400]);
    // Add annotation to the page
    page.annotations.add(annotation);
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

### PdfCircleAnnotation

This example demonstrates how to add a circle annotation to a PDF page using the `PdfCircleAnnotation` class. A circle annotation allows drawing circular or oval shapes on a PDF document.

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
    // Create a new circle annotation with circle bounds
    const annotation: PdfCircleAnnotation = new PdfCircleAnnotation(10, 10, 100, 100);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a circle annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new circle annotation with circle bounds
    const annotation: PdfCircleAnnotation = new PdfCircleAnnotation(10, 10, 100, 100);
    // Add annotation to the page
    page.annotations.add(annotation);
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

### PdfEllipseAnnotation

This example demonstrates how to add an ellipse annotation to a PDF page using the `PdfEllipseAnnotation` class. An ellipse annotation allows drawing elliptical shapes on a PDF document.

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
    // Create a new ellipse annotation with bounds
    const annotation: PdfEllipseAnnotation = new PdfEllipseAnnotation(10, 10, 100, 100);
    // Add annotation to the page
    page.annotations.add(annotation);
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

The following code snippet explains how to add a ellipse annotation in an existing PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new ellipse annotation with bounds
    const annotation: PdfEllipseAnnotation = new PdfEllipseAnnotation(10, 10, 100, 100);
    // Add annotation to the page
    page.annotations.add(annotation);
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

## Measurement Annotations

This example demonstrates how to access a measurement annotation from a PDF page using the PdfLineAnnotation class. A measurement annotation allows defining and displaying dimensions such as distances or lengths within a PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access the annotation at index 0
    let annotation: PdfLineAnnotation = page.annotations.at(0) PdfLineAnnotation;
    // Sets the measurement unit of line measurement annoation as centimeter
    annotation.unit = PdfMeasurementUnit.centimeter;
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

## Modifying the annotations

This example demonstrates how to modify an existing annotation in a PDF page using the PdfAnnotation class. Modifying annotations allows updating properties such as position, color, content, or appearance, enabling customization and refinement of the document’s interactive elements.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Get the first annotation of the page
    let annotation: PdfPopupAnnotation = page.annotations.at(0) as PdfPopupAnnotation;
    // Gets the boolean flag indicating whether annotation has open or not.
    let open: boolean =  annotation.open;
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

## Removing annotations from an existing PDF 

This example demonstrates how to remove an annotation from a PDF page using the PdfAnnotationCollection class. Removing annotations allows deleting comments, shapes, or other interactive elements from a PDF document.

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
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Access first annotation from the PDF page
    let annotation: PdfAnnotation = page.annotations.at(0);
    // Remove an annotation from the collection
    page.annotations.remove(annotation);
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

## Flatten annotation

This example demonstrates how to flatten annotations in a PDF document using the PdfAnnotation class. Flattening annotations converts interactive elements such as comments, highlights, and shapes into static content.

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
    // Flatten PDF annotations and form fields
    document.flatten = true;    
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

## Importing annotations

This example demonstrates how to import annotations into a PDF document using the PdfDocument. `importAnnotations` method.

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
    // Load the base PDF document from resources
    let pdfDocument: PdfDocument = new PdfDocument('Input.pdf');
    // Imports annotations from to the PDF document.
    document.importAnnotations('annotations.json', DataFormat.json);
    // Save the PDF document
    pdfDocument.save('Output.pdf');
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

## Exporting annotations

This example demonstrates how to export annotations from a PDF document using the PdfDocument.exportAnnotations method. 

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
    // Exports the annotations from the PDF document.
    let data: Uint8Array = document.exportAnnotations();
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