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

N> For data extraction features, you need to install the `@syncfusion/ej2-pdf-data-extract` package as an add-on.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfRedactor, PdfRedactionRegion } from '@syncfusion/ej2-pdf-data-extract';

// Load the document
let document: PdfDocument = new PdfDocument(data);
// Create a new text extractor
let redactor: PdfRedactor = new PdfRedactor(document);
// Add redactions to the collection
let redactions: PdfRedactionRegion[] = [];
redactions.push(new PdfRedactionRegion(0, {x: 10, y: 10, width: 100, height: 50}));
redactions.push(new PdfRedactionRegion(2, {x: 10, y: 10, width: 100, height: 50}, true, {r: 255, g: 0, b: 0}));
redactor.add(redactions);
// Apply redactions on the PDF document
redactor.redact();
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load the document
var document = new ej.pdf.PdfDocument(data);
// Create a new text extractor
var redactor = new ej.pdfdataextract.PdfRedactor(document);
// Add redactions to the collection
var redactions = [];
redactions.push(new PdfRedactionRegion(0, {x: 10, y: 10, width: 100, height: 50}));
redactions.push(new PdfRedactionRegion(2, {x: 10, y: 10, width: 100, height: 50}, true, {r: 255, g: 0, b: 0}));
redactor.add(redactions);
// Apply redactions on the PDF document
redactor.redact();
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Fill color on the redacted area

You can apply a solid fill color to cover the redacted content. This is the most common approach for redaction.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfRedactor, PdfRedactor, PdfRedactionRegion} from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Initialize a new instance of the `PdfRedactor` class
let redactor: PdfRedactor = new PdfRedactor(document);
// Initialize a new instance of the `PdfRedactionRegion` class.
let redaction: PdfRedactionRegion = new PdfRedactionRegion(0, {x: 40, y: 41.809, width: 80, height: 90});
// Sets the fill color used to fill the redacted area.
redaction.fillColor = {r: 255, g: 0, b: 0};
redactions.push(redaction);
// Add redactions with specified options.
redactor.add(redactions);
// Apply redactions on the PDF document
redactor.redact();
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Initialize a new instance of the `PdfRedactor` class
var redactor = new ej.pdfdataextract.PdfRedactor(document);
// Initialize a new instance of the `PdfRedactionRegion` class.
var redaction = new ej.pdfdataextract.PdfRedactionRegion(0, {x: 40, y: 41.809, width: 80, height: 90});
// Sets the fill color used to fill the redacted area.
redaction.fillColor = {r: 255, g: 0, b: 0};
redactions.push(redaction);
// Add redactions with specified options.
redactor.add(redactions);
// Apply redactions on the PDF document
redactor.redact();
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Redaction appearance fill color

Customize the appearance of the redacted area by applying specific fill colors. This helps maintain a consistent design or highlight redacted sections in a visually appealing way.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage } from '@syncfusion/ej2-pdf';
import { PdfRedactionAnnotation } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data, password);
// Add redactions to the collection
let redactions: PdfRedactionRegion[] = [];
// Initialize a new instance of the `PdfRedactor` class
let redactor: PdfRedactor = new PdfRedactor(document);
// Initialize a new instance of the `PdfRedactionRegion` class.
let redaction: PdfRedactionRegion = new PdfRedactionRegion(0, {x: 40, y: 41.809, width: 80, height: 90});
// Sets the fill color used to fill the redacted area.
redaction.fillColor = {r: 255, g: 0, b: 0};
redactions.push(redaction);
// Add redactions with specified options.
redactor.add(redactions);
// Apply redactions on the PDF document
redactor.redact();
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data, password);
// Add redactions to the collection
var redactions = [];
// Initialize a new instance of the `PdfRedactor` class
var redactor = new ej.pdfdataextract.PdfRedactor(document);
// Initialize a new instance of the `PdfRedactionRegion` class.
var redaction = new ej.pdfdataextract.PdfRedactionRegion(0, {x: 40, y: 41.809, width: 80, height: 90});
// Sets the fill color used to fill the redacted area.
redaction.fillColor = {r: 255, g: 0, b: 0};
redactions.push(redaction);
// Add redactions with specified options.
redactor.add(redactions);
// Apply redactions on the PDF document
redactor.redact();
// Save the document
document.save('output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}