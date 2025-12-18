---
title: Redaction in JavaScript PDF library |Syncfusion
description: This section explains how to redact content from an existing PDF document by using the JavaScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Redaction in JavaScript PDF library

Redacting a PDF is the process of permanently removing sensitive or confidential information from PDF documents. Syncfusion<sup>&reg;</sup> PDF library provides an easy way to redact PDF documents. 

N> For redaction features, you need to install the `@syncfusion/ej2-pdf-data-extract` package as an add-on. Please verify the platform's actual root directory where the `openjpeg` file is extracted. Depending on the platform, the root path may vary. Check which root folder is being used by reviewing the path referenced in the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/create-pdf-document-asp-net-core) page.

## Removing sensitive content from the PDF document

Redaction permanently removes confidential or sensitive information from a PDF. The `PdfRedactor` and `PdfRedactionRegion` classes allow you to mark specific areas and apply irreversible redaction to the document.

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
import { PdfRedactor, PdfRedactionRegion} from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
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
var document = new ej.pdf.PdfDocument(data);
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

## Text appearance on the redacted area

Customize the redacted region by drawing text or graphics over it, using `PdfRedactionRegion` and `PdfRedactor` to define the area and apply a custom visual appearance to the redaction.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfRedactor, PdfRedactionRegion } from '@syncfusion/ej2-pdf-data-extract';

// Load an existing PDF document
let document = new PdfDocument(data);
// Add redactions to the collection
let redactions = [];
let region = { x: 40, y: 43.620000000000005, width: 80, height: 20 };
// Initialize a new redaction region with custom appearance
let redaction = new PdfRedactionRegion(0, { x: 0, y: 0, width: 80, height: 20 }, true);
let font = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
redaction.appearance.normal.graphics.drawString(
  'Redacted Text',
  font,
  { x: 0, y: 0, width: 80, height: 20 },
  new PdfBrush({ r: 255, g: 0, b: 0 })
);
redactions.push(redaction);
// Add another redaction region (example region coordinates)
redaction = new PdfRedactionRegion(0, { x: 0, y: 0, width: 80, height: 20 }, true);
region = { x: 40, y: 43.620000000000005, width: 80, height: 20 };
redactions.push(redaction);
// Initialize a new instance of the PdfRedactor class
let redactor = new PdfRedactor(document);
// Add redactions with specified options
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
// Prepare redactions collection
var redactions = [];
// Example region coordinates (page 0)
var region = { x: 40, y: 43.62, width: 80, height: 20 };
// Create a redaction region with a custom appearance (draw "Redacted Text" in red)
var redaction = new ej.pdf.PdfRedactionRegion(0, { x: 0, y: 0, width: 80, height: 20 }, true);
var font = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw custom appearance on the redaction overlay
redaction.appearance.normal.graphics.drawString(
  'Redacted Text',
  font,
  { x: 0, y: 0, width: 80, height: 20 },
  new ej.pdf.PdfBrush({ r: 255, g: 0, b: 0 })
);
redactions.push(redaction);
// Add another redaction region using the specified coordinates on page 0
redaction = new ej.pdf.PdfRedactionRegion(0, { x: region.x, y: region.y, width: region.width, height: region.height }, true);
redactions.push(redaction);
// Initialize redactor
var redactor = new ej.pdf.PdfRedactor(document);
// Add redactions and apply them
redactor.add(redactions);
redactor.redact();
// Save and dispose
document.save('output.pdf');
document.destroy();

{% endhighlight %}
{% endtabs %}